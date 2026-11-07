[![한국어](https://img.shields.io/badge/lang-한국어-lightgrey)](ko.md) [![English](https://img.shields.io/badge/lang-English-blue)](en.md)

# FuckThisCulling and Fuck These Optics, explained

What the two mods actually do, what is good about them, what to watch out for, and whether they work with other mods. Based on decompiling the mod DLLs and reading the code and setting descriptions directly.

Author rootdarkarchon · MIT license · Game build EFT 0.16.9.40743 (SPT 4.1) · Reviewed 2026-11-07

## At a glance

| | FuckThisCulling 0.4.1 | Fuck These Optics 0.3.2 |
|---|---|---|
| Type | Performance (FPS) mod | Image quality / aim stability mod |
| What it does | Stops drawing objects that are hidden behind walls | Removes gun and scope jitter far from the map centre and makes the scope image sharper |
| Changes | How many objects get drawn | How your hands, gun and scope are drawn |
| Does not change | Collisions, bullets, bot vision, looting | Ballistics, recoil, bots, other characters |
| Risk | Medium: late pop-in, missing shadows | Medium–high: patches the game engine, clashes with PiP-Disabler |

## FuckThisCulling

Version 0.4.1 · Files: `FuckThisCulling.dll`, `FuckThisCullingTiming.dll` (timing), `fuckthisculling` (shader bundle)

### What problem it solves

Tarkov already hides objects behind walls with a system called Perfect Culling. The developers split each map into small cells and pre-computed a table that says "from this cell, these objects can be seen". The table is coarse, so the game still draws many objects that are actually behind walls, and the graphics card does wasted work.

### How it works

Instead of the pre-made table, it decides from **what is on screen right now** (Hi-Z culling).

1. Every frame, the graphics card turns the depth of the frame it just drew (how far away each pixel is) into a small depth map.
2. Each object's bounding box is compared against that map. If the whole box is behind a wall, the object is "occluded".
3. An object is hidden only after 8 occluded results in a row. A single visible result draws it again immediately. It also accounts for DLSS, FSR and TAA camera jitter.
4. It registers the map's objects while the raid loads and switches on at the deployment countdown. When the raid ends it returns to the normal system, and on an error it turns itself off.

Hiding only turns off drawing. Collisions, bullet hits and bot vision stay the same. Bots, players and your own gun are never treated as walls that hide other objects.

### Extra features that are on by default

- **Small distant objects**: objects farther than 75 m and at most 0.5 m across are hidden without an occlusion check.
- **Distant details**: objects farther than 50 m that look 16 pixels or smaller on screen are hidden when almost fully covered (gaps of about 8 pixels are ignored).
- **Distant decals**: stains and marks farther than 100 m are hidden when at least half covered.
- **Hide objects behind you** (experimental): slowly hides objects behind you, outside your view plus 30° on each side. Objects within 50 m, loot, doors and windows are excluded.
- **Disable hidden LOD groups** (experimental): once a whole group has been hidden for 0.75 s, Unity stops its level-of-detail work too.
- **Shadow preservation is off**: shadows of hidden objects can disappear along with them.
- Glass panes, ground loot and moving objects such as doors are also covered.

### Pros

- Fewer objects drawn can mean higher FPS, especially on maps with many interiors and structures.
- It checks several times before hiding and restores immediately when something becomes visible.
- On failure it falls back to the normal culling.
- Built-in performance graphs and a benchmark tool.
- Does not touch gameplay (collisions, bullets, AI).

### Cons and cautions

- Early 0.4 release with many experimental features and settings.
- Objects can pop in late when you turn faster than about 30° or peek through doors. The "near zone" that always draws nearby objects is off by default (0 m).
- Small distant objects can disappear even when they are actually visible (the setting descriptions say so).
- Shadows can disappear.
- Turning it on in the middle of a raid causes one big stutter.
- It intercepts the game's internal culling manager, so a game update can break it easily.

## Fuck These Optics

Version 0.3.2 · Files: `FuckTheseOptics.dll`, `FuckTheseOpticsNative.dll` (engine hook), `fucktheseoptics_opticlock` (shader bundle)

### What problem it solves

- **Jitter far from the centre**: the game stores positions with about 7 digits of precision (float). A few hundred metres from the map centre that precision runs out, so your gun, hands and scope shake slightly, and around 600 m they visibly snap.
- **Blurry scopes**: the scope image is normally rendered separately and pasted in afterwards. With DLSS, FSR or TAA that area smears and blurs.

### How it works (four features; the first three are on by default)

1. **Camera-relative drawing**: your hands and gun are drawn with positions relative to the camera, computed with higher precision (double). To do this it patches the game engine (`UnityPlayer.dll`) in memory.
2. **Precise pose math**: the weapon pose and the aiming camera position are computed more precisely. This applies **only to your own character**, and the resulting pose is the same apart from rounding.
3. **Pixel-locked optics**: the scope image is aligned 1:1 with the main screen's pixels and blended in before the upscaler (DLSS and others), along with motion data, so it stays sharp. Night-vision, thermal and red-dot sights keep the normal path.
4. **Diagnostic frame capture** (off by default): for the developer.

On a Fika headless server it turns itself off.

### Pros

- Less gun and scope shake on the outer parts of large maps.
- Sharper scope image with DLSS, FSR or TAA.
- Point of aim and ballistics do not change; only the jitter goes away.
- Turning a feature off restores the original behaviour from the next frame.

### Cons and cautions

- D3D11 and game build 40743 only. It will likely be the first mod to break on a game update.
- Because it patches engine code directly, problems are hard to trace.
- **It patches the same scope and weapon code as PiP-Disabler** (`OpticSight`, `OpticCameraManager`, `ProceduralWeaponAnimation`). Using both is not safe.
- The scope clarity gain is mostly noticeable with TAA, DLSS or FSR.

## Compatibility with other mods

| Used with | FuckThisCulling | Fuck These Optics |
|---|---|---|
| SAIN (incl. zzap) | OK: bot vision uses colliders, so turning off drawing has no effect on it | OK: only affects your own character |
| Tushonka Cleaner | Likely OK: Tushonka switches objects off entirely; this mod only stops drawing them and skips objects that are already off. Not yet tested in game | OK: no overlap |
| PiP-Disabler | No overlap: no shared targets in the code (not yet tested in game) | **Do not combine**: both patch the scope and weapon pose code |

## Recommendation

- **If you want FPS**, try FuckThisCulling on its own first. If objects pop in late or shadows go missing, turn off the experimental features first ("Hide objects behind you", "Small distant objects").
- **Fuck These Optics** is only for players who do not use PiP-Disabler. It suits you if your gun shakes on the edges of big maps or your scope looks blurry with DLSS.
- If something goes wrong, turn it off in the F12 settings window (ConfigurationManager): `Enable HiZ culling` for FuckThisCulling, and each feature's `Enabled` for Fuck These Optics.

> This review is based on reading the code. The actual FPS gain was not measured and depends on the map and your PC.

---

Method: both DLLs were decompiled with ilspycmd, and the patch targets, setting defaults and setting descriptions were checked directly.

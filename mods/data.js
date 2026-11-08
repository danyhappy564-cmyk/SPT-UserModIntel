/* 우리 포팅·수정 모드 변경 기록 — 두 페이지(index.html: 다운로드 포함, arca.html: 다운로드 없음)가 같이 쓰는 데이터.
   최신화는 사용자가 "최신화 해줘"라고 할 때만 한다 (projects/SPT-UserModIntel/NOTES.md).
   필드: n 이름 · a 원작자 · side c=게임(클라이언트) s=서버 cs=둘 다 · s 우리 작업 시작일 · docsEn 영어 설명서 있음 ·
   inKo 게임 안 한국어 · v 확인 상태(game/part/server/build/none) · repo 우리 저장소 · orig 원작 주소 ·
   pre 원본 모드를 먼저 깔아야 함(주소) · what 하는 일 · plus 강화한 점 · tl 날짜별 변경 [날짜, 한국어, English] */
window.MODS_UPDATED = "2026-11-08";
window.MODS = [
{
  n: "SAIN (zzap)", a: "Solarint · ArchangelWTF", side: "cs", s: "2026-08-18", docsEn: true, inKo: true, v: "game",
  repo: "SAIN-zzap--Bootleg-", orig: "https://github.com/Solarint/SAIN",
  what: { ko: "봇(AI)의 생각과 움직임을 통째로 바꾸는 모드입니다.", en: "Replaces how bots (AI) think and move." },
  plus: {
    ko: ["봇이 문 앞에서 끼거나 제자리걸음하던 버그를 여러 차례 고침", "기울이기·스텝·방 진입·코너 추격·분대 협공 같은 '고인물' 전술 행동 추가", "봇끼리 맵을 돌며 자동으로 싸우게 하고 결과를 분석하는 시험장(시뮬레이션)으로 이상 행동을 찾아 고침", "게임 안 설정(F6)과 웹 설정 화면을 한국어로, 바로 쓰는 zzap 프리셋(난이도별) 포함", "블랙 디비전·RUAF 같은 다른 모드 봇도 SAIN으로 싸우게 함"],
    en: ["Fixed bots getting stuck at doors or walking in place, several times over", "Added veteran-style tactics: leaning, strafing, room entry, corner chasing, squad flanking", "Built an automated bot-vs-bot test lab that runs maps and flags odd behaviour, then fixed what it found", "In-game (F6) and web settings in Korean, with ready-made zzap presets per difficulty", "Bots from other mods (Black Division, RUAF, etc.) now fight with SAIN too"]
  },
  tl: [
    ["2026-08-18", "문 끼임 수정 1차(Door FIX 1) — 봇이 문 앞에서 끼던 문제", "Door FIX 1 — bots getting stuck at doors"],
    ["2026-08-29", "문 끼임 수정 2차", "Door FIX 2"],
    ["2026-09-11", "fix3~fix7(9/24까지) — SPT 4.1에 맞추고 문·이동 수정을 이어서 배포", "fix3–fix7 (to 9/24) — adapted to SPT 4.1, more door and movement fixes"],
    ["2026-09-29", "Remake1 — 상황을 보고 판단하는 전투 AI(보이는 적·안 보이는 적·재장전·치료 시점), 기울이기 연타, 방 진입, 코너 추격, 후퇴할 때 고개 숙이기, F6 설정 한국어화", "Remake1 — situational combat AI (seen/unseen enemies, reload and heal timing), lean spam, room entry, corner chase, ducking on retreat, Korean F6 settings"],
    ["2026-09-30", "Remake2 — 서서 죽는 시체 원인 수정, 지난 레이드가 메모리에 남던 누수 수정", "Remake2 — fixed corpses dying standing, fixed last raid staying in memory"],
    ["2026-10-01", "Remake3 — 난이도별 프리셋 5종", "Remake3 — five difficulty presets"],
    ["2026-10-02", "Remake4 — 방 안에 숨은 적에게 수류탄·페이크, 문·코너 흔들기 피킹", "Remake4 — grenades and fakes against campers in rooms, door/corner peeking"],
    ["2026-10-04", "Remix4.1 — 플레이어가 발로 차면 잠긴 문까지 바로 열리던 문제 수정", "Remix4.1 — kicking no longer opens locked doors instantly"],
    ["2026-10-06", "Remix4.2 — 1시간 점검 판 통과 후 작은 수정", "Remix4.2 — small fixes after a one-hour check raid"],
    ["2026-10-12", "Remake5 — 시뮬레이션 시험장 추가, 소리·발소리 반응, 교전 중 피킹 3종, 분대 협동(제압·측면·후방), 주운 총 장전 안 되던 문제", "Remake5 — simulation lab, reactions to sound and footsteps, three combat peeks, squad suppress/flank/rear, picked-up guns can be reloaded"],
    ["2026-10-14", "Remix5.1 — 봇이 문을 몸으로 밀고 들어가기(문 박치기)를 SAIN 기능으로, 박치기 뒤 문에 끼던 문제, 연구소 미닫이문", "Remix5.1 — bot door-breaching built into SAIN, stuck-after-breach fixes, Labs sliding doors"],
    ["2026-10-18", "Remake6 — 게임 안 F6 빠른 설정과 웹 설정 화면 새로 만듦", "Remake6 — new F6 quick settings and web settings pages"],
    ["2026-10-20", "Remix6.1 — 전투 뒤 멍하니 서 있는 시간 줄임, 레이저·손전등 켜고 끄기, 원본 SAIN 설정 무시 버그 수정", "Remix6.1 — less idle standing after fights, laser/light toggling, fixed original SAIN settings being ignored"],
    ["2026-10-24", "Remake7 — 블랙 디비전·RUAF·UNTAR 등 모드 봇 SAIN 지원, 봇 종류별 난이도·AI 고르기", "Remake7 — SAIN for modded bots (Black Division, RUAF, UNTAR), per-bot-type difficulty and AI choice"],
    ["2026-10-31", "Remix7.1 — 열린 문짝을 돌아서 지나감, 문틀을 엄폐로 안 씀, 분대 수색 중 통째로 서 있던 문제", "Remix7.1 — bots walk around open door leaves, no cover behind door frames, squads no longer freeze while searching"],
    ["2026-11-02", "Remix7.2 — 레이드가 끝난 뒤 메뉴에서 지난 레이드 메모리가 남던 것 수정", "Remix7.2 — memory from the last raid no longer kept in the menu"],
    ["2026-11-03", "Remix7.3 — 봇 설정 화면 개편(여러 봇 한꺼번에 고르기)", "Remix7.3 — bot settings rework (select several bots at once)"],
    ["2026-11-04", "Remix7.4 — 설정 화면 정리", "Remix7.4 — settings screen cleanup"],
    ["2026-11-07", "Remix7.5 — 스머글러가 총 맞아도 반격 안 하던 문제, 좀비 태길라를 SAIN으로", "Remix7.5 — Smuggler fights back when shot, infected Tagilla uses SAIN"],
    ["2026-11-07", "Remix7.6 — 대사 설정이 실제로 적용되게, 분대 대사 기본 끔, 봇 종류별 수류탄 설정, 내 설정 슬롯 표시 정리", "Remix7.6 — voice-line settings actually apply, squad callouts off by default, per-bot grenade settings, clearer custom slots"]
  ]
},
{
  n: "Manimal Icebreaker", a: "Manimal (danauraborealis)", side: "cs", s: "2026-08-29", docsEn: true, inKo: true, v: "game",
  repo: "ManimalIcebreaker-zzap--Bootleg-", orig: "https://github.com/danauraborealis/ManimalIcebreaker", pre: "https://sp-mod.com/mod/2866/manimals-icebreaker-backport",
  what: { ko: "쇄빙선 맵을 SPT에 넣는 모드의 수정판입니다. 원본 모드를 먼저 깔고 덮어씁니다.", en: "A fixed build of the mod that adds the Icebreaker map. Install the original first, then overwrite." },
  plus: {
    ko: ["레이드 시작 때 수 초씩 멈추던 렉과 갑판 이동 때 끊김을 줄임", "엔진룸·헬리패드·최상갑판 봇이 너무 일찍, 너무 늦게, 또는 일부만 나오던 문제 수정", "퀘스트·대사 한국어", "레이드가 끝난 뒤 메모리가 남던 문제 수정"],
    en: ["Cut the multi-second freeze at raid start and stutter when moving between decks", "Fixed engine room, helipad and top-deck bots spawning too early, too late or only partly", "Korean quests and dialogue", "Fixed memory being kept after a raid ends"]
  },
  tl: [
    ["2026-08-29", "SPT 4.1용 작업 시작 — 레이드 시작 때 17.9초짜리 멈춤, 봇 스폰마다 끊김 등 성능 수정", "Started SPT 4.1 work — fixed a 17.9 s frame at raid start, stutter on each bot spawn, etc."],
    ["2026-09-08", "엔진룸·헬리패드 스폰 시점 수정, 최상갑판 분대가 5명 중 1명만 나오던 문제", "Engine room/helipad spawn timing, top-deck squad spawning 1 of 5"],
    ["2026-09-15", "봇이 선 채로 죽던 문제 수정, 원작 1.1.x 내용 합침", "Fixed bots dying standing up, merged original 1.1.x"],
    ["2026-09-16", "한국어 퀘스트·대사", "Korean quests and dialogue"],
    ["2026-09-20", "엔진룸·헬리패드 동시 스폰 재발, 웨지 조기 스폰, 최상갑판 보스 분대 안 나오던 문제 수정", "Fixed recurring engine-room/helipad double spawns, early Wedge spawns, missing top-deck boss squad"],
    ["2026-11-02", "zzap v1 — 레이드 뒤 메모리 누수 수정, 덮어써도 방문 기록 유지", "zzap v1 — post-raid memory leak fixed, visit history kept on overwrite"],
    ["2026-11-04", "zzap v2 — 엔진룸 매복조가 저절로 풀리는 시간 15분 → 30분", "zzap v2 — engine room ambush auto-release 15 → 30 min"]
  ]
},
{
  n: "HollywoodFX", a: "SleepingPills", side: "c", s: "2026-08-30", docsEn: true, inKo: false, v: "game",
  repo: "HollywoodFX-zzap--Bootleg-", orig: "https://github.com/SleepingPills/HollywoodFX",
  what: { ko: "총구 화염·폭발·피 튀김 같은 효과를 영화처럼 화려하게 바꾸는 모드입니다.", en: "Makes muzzle flash, explosions and blood effects more cinematic." },
  plus: {
    ko: ["SPT 4.1에서 바뀐 게임 내부 이름 20종을 새 이름으로 바꿈", "패치 하나가 실패하면 뒤의 18개가 같이 죽던 구조를 고쳐, 이제 그 하나만 꺼지고 로그에 이름이 남음", "죽어 가는 몸에 혈흔을 붙일 때 나던 오류 수정"],
    en: ["Renamed 20 game types changed in SPT 4.1", "One failing patch no longer takes down the 18 after it; only that one turns off and is named in the log", "Fixed an error when adding blood decals to a dying body"]
  },
  tl: [
    ["2026-08-30", "SPT 4.1 포팅 시작", "Started SPT 4.1 port"],
    ["2026-09-07", "바뀐 이름 맞춤, 패치 하나가 나머지를 죽이던 문제 수정, 실제 레이드에서 25개 패치 적용 확인", "Renames matched, one patch no longer kills the rest, all 25 patches confirmed in a real raid"],
    ["2026-09-15", "혈흔 오류 수정", "Blood decal error fixed"]
  ]
},
{
  n: "HollywoodGraphics", a: "SleepingPills", side: "c", s: "2026-08-30", docsEn: true, inKo: false, v: "game",
  repo: "HollywoodGraphics-zzap--Bootleg-", orig: "https://github.com/SleepingPills/HollywoodGraphics",
  what: { ko: "빛 번짐·그림자·모션 블러 등 화면 그래픽을 손보는 모드입니다.", en: "Tunes screen graphics such as bloom, ambient shadows and motion blur." },
  plus: {
    ko: ["SPT 4.1용으로 이름 맞춤", "4.1에서 꺼져 있던 야간투시 그림자 보호 기능을 다시 살림", "커스텀 맵에서 모드 전체가 꺼지던 문제 수정"],
    en: ["Renamed for SPT 4.1", "Re-enabled the night-vision shadow guard that was dead in 4.1", "Fixed the whole mod shutting down on custom maps"]
  },
  tl: [
    ["2026-08-30", "SPT 4.1 포팅 시작", "Started SPT 4.1 port"],
    ["2026-09-07", "이름 맞춤, 야간투시 보호 기능 복구, 레이드에서 패치 4개 적용 확인", "Renames, night-vision guard restored, 4 patches confirmed in a raid"],
    ["2026-09-15", "커스텀 맵에서 모드가 꺼지던 문제 수정", "Fixed the mod dying on custom maps"]
  ]
},
{
  n: "Show Me The Money", a: "SwiftXP", side: "cs", s: "2026-08-31", docsEn: true, inKo: false, v: "none",
  repo: "spt-show-me-the-money-zzap--Bootleg-", orig: "https://github.com/swiftxp-hub/spt-show-me-the-money",
  what: { ko: "아이템에 마우스를 올리면 가격과 가장 비싸게 사 주는 상인을 보여 주는 모드입니다.", en: "Shows an item's price and the best trader to sell to in the tooltip." },
  plus: {
    ko: ["마우스를 올릴 때마다 가격을 처음부터 다시 계산하던 것을 줄여 렉 감소", "Quick Sell과 같이 쓰면 인벤토리 클릭이 전부 먹통이 되던 문제 수정", "퀵셀로 플리에 팔면 몇 초씩 기다리던 정산을 바로 처리", "SPT 4.1 포팅(다른 분의 4.1 판을 합치고 우리 수정 유지)"],
    en: ["Less lag: prices are no longer recalculated from scratch on every hover", "Fixed all inventory clicks breaking when used with Quick Sell", "Flea quick sales pay out immediately instead of after a wait", "SPT 4.1 port (merged another 4.1 port, kept our fixes)"]
  },
  tl: [
    ["2026-08-31", "성능 수정, Quick Sell 호환, 플리 즉시 정산", "Performance fix, Quick Sell compatibility, instant flea payout"],
    ["2026-09-02", "레이드 밖 플리 처리 주기 단축", "Shorter out-of-raid flea check"],
    ["2026-09-07", "SPT 4.1 포팅, 서버 모드가 설치 안 되던 문제 수정", "SPT 4.1 port, server mod now installs on build"]
  ]
},
{
  n: "Show Me The Money: Quick Sell", a: "SwiftXP", side: "c", s: "2026-08-31", docsEn: true, inKo: false, v: "none",
  repo: "spt-show-me-the-money-quick-sell-zzap--Bootleg-", orig: "https://github.com/swiftxp-hub/spt-show-me-the-money-quick-sell",
  what: { ko: "단축키+클릭으로 아이템을 상인이나 플리에 바로 파는 Show Me The Money 추가 기능입니다.", en: "Show Me The Money add-on: sell items to traders or flea with a hotkey and a click." },
  plus: {
    ko: ["새로 받으면 빌드가 안 되던 경로 문제 정리", "버전이 1.0.0으로 잘못 보이던 것을 2.3.0으로 바로잡음"],
    en: ["Fixed paths that broke fresh builds", "Version now reports 2.3.0 instead of 1.0.0"]
  },
  tl: [["2026-08-31", "빌드 정리, 버전 표기 수정", "Build cleanup, version fixed"]]
},
{
  n: "BlackDiv", a: "TacticalToaster", side: "cs", s: "2026-09-04", docsEn: true, inKo: false, v: "part",
  repo: "BlackDiv-zzap--Bootleg-", orig: "https://github.com/TacticalToaster/BlackDiv",
  what: { ko: "블랙 디비전·웨지 같은 새 적 세력을 추가하는 모드입니다.", en: "Adds new enemy factions such as Black Division and Wedge." },
  plus: {
    ko: ["블랙 디비전·웨지에 SAIN이 전혀 안 붙던 문제 수정", "도망가서 엎드린 봇이 총을 맞아도 반격 안 하던 문제 수정 — 맞으면 쏜 사람을 알아챔", "할 일이 없어 멍하니 서 있는 봇에게 순찰이라도 시킴", "블디·웨지 성격을 F12에서 따로 고르기(기본 기가차드)"],
    en: ["Fixed SAIN never attaching to Black Division and Wedge", "Prone bots that fled now fight back when shot — they learn who shot them", "Idle bots with nothing to do at least patrol", "Pick BD and Wedge personalities separately in F12 (default GigaChad)"]
  },
  tl: [
    ["2026-09-04", "SAIN이 안 붙던 문제 수정, SPT 4.1 경로 대응", "SAIN attach fix, SPT 4.1 paths"],
    ["2026-09-16", "SAIN 없이도 블디가 죽지 않고 동작하게", "Works without SAIN too"],
    ["2026-09-19", "멍하니 서 있는 봇 순찰, 성격 F12 설정", "Idle patrol, personality in F12"],
    ["2026-09-24", "맞으면 쏜 사람을 알아채고 반격", "Being hit reveals the shooter, bots fight back"]
  ]
},
{
  n: "Better Night Thermal Vision", a: "ciallo", side: "c", s: "2026-09-07", docsEn: true, inKo: false, v: "game",
  repo: "BetterNightThermalVision-zzap--Bootleg-", orig: "https://forge.sp-tarkov.com/mod/2531/better-night-thermal-vision",
  what: { ko: "야간투시경·열상장비 화면을 더 잘 보이게 바꾸는 모드입니다.", en: "Makes night-vision and thermal views clearer." },
  plus: {
    ko: ["SPT 4.1용 이름 맞춤 — 이름이 자주 바뀌는 부분은 이름 대신 생김새로 찾게 해 다음 업데이트에도 덜 깨짐"],
    en: ["Renamed for SPT 4.1 — parts whose names keep changing are found by their shape instead, so future updates break it less"]
  },
  tl: [["2026-09-07", "SPT 4.1 포팅, 야간 레이드에서 야투경+배율 조준경 동작 확인", "SPT 4.1 port, confirmed with NVG + magnified scope in a night raid"]]
},
{
  n: "Reach Extender", a: "Mattdokn", side: "c", s: "2026-09-07", docsEn: true, inKo: false, v: "none",
  repo: "ReachExtender-zzap--Bootleg-", orig: "https://hub.sp-tarkov.com/files/file/1758-reach-extender/",
  what: { ko: "아이템을 줍거나 문을 여는 손 닿는 거리를 늘리는 모드입니다.", en: "Extends how far you can reach to loot and interact." },
  plus: { ko: ["SPT 4.1용 이름 1개 바꿈, 빌드 설정 정리"], en: ["One rename for SPT 4.1, build setup cleaned up"] },
  tl: [["2026-09-07", "SPT 4.1 포팅", "SPT 4.1 port"]]
},
{
  n: "Container Quick Loot", a: "CactusPie", side: "c", s: "2026-09-07", docsEn: true, inKo: false, v: "none",
  repo: "SPT-ContainerQuickLoot-zzap--Bootleg-", orig: "https://github.com/CactusPie/SPT-ContainerQuickLoot",
  what: { ko: "아이템을 가방·조끼 안의 알맞은 칸으로 빠르게 옮겨 주는 모드입니다.", en: "Quickly moves loot into a fitting container slot." },
  plus: { ko: ["SPT 4.1용 이름 8개 바꿈(두 자료로 교차 확인)", "원작 라이선스(GPL-3.0) 전문 동봉"], en: ["8 renames for SPT 4.1, cross-checked in two sources", "Ships the full GPL-3.0 licence text"] },
  tl: [["2026-09-07", "SPT 4.1 포팅", "SPT 4.1 port"]]
},
{
  n: "Skipper", a: "Terkoiz", side: "cs", s: "2026-09-07", docsEn: true, inKo: true, v: "none",
  repo: "SPT-Skipper-zzap--Bootleg-", orig: "https://dev.sp-tarkov.com/Terkoiz/Skipper",
  what: { ko: "퀘스트 목표를 버튼 하나로 건너뛰는 모드입니다.", en: "Skip a quest objective with one button." },
  plus: {
    ko: ["건너뛸 때 돈을 내게 함 — 정액 또는 퀘스트 보상 기준으로 자동 계산", "확인창에 얼마가 나가는지 먼저 보여 줌", "F12 설정과 게임 안 문구 한국어"],
    en: ["Skipping now costs money — flat fee or priced from the quest's reward", "The confirm box shows the cost first", "Korean F12 settings and in-game text"]
  },
  tl: [["2026-09-07", "SPT 4.1 포팅, 유료 스킵, 한국어", "SPT 4.1 port, paid skip, Korean"]]
},
{
  n: "Modding Stats Helper", a: "warawanaidene · Soulztorm", side: "c", s: "2026-09-07", docsEn: true, inKo: false, v: "none",
  repo: "Wara-ModdingStatsHelper-zzap--Bootleg-", orig: "https://github.com/Soulztorm/Wara-ModdingStatsHelper",
  what: { ko: "무기 개조 화면에서 부착물을 바꾸면 성능이 얼마나 바뀌는지 비교해 보여 주는 모드입니다.", en: "Compares stat changes when swapping attachments in the modding screen." },
  plus: { ko: ["SPT 4.1용 이름 1개 바꿈", "비교 기능이 조용히 죽어도 아무 말 없던 것을, 대체 경로로 찾고 로그를 남기게 함"], en: ["One rename for SPT 4.1", "If the comparison can't find its target it now falls back and logs, instead of silently dying"] },
  tl: [["2026-09-07", "SPT 4.1 포팅", "SPT 4.1 port"]]
},
{
  n: "Geko's Better Progression", a: "DrunkGeko (marbL-)", side: "cs", s: "2026-09-08", docsEn: true, inKo: false, v: "server",
  repo: "Gekos_BetterProgressionCombied-zzap--Bootleg-", orig: "https://forge.sp-tarkov.com/mod/2088/gekos-better-progression",
  what: { ko: "스킬·상인·퀘스트 보상 등 성장 속도와 균형을 다시 짜는 모드입니다.", en: "Rebalances progression: skills, traders, quest rewards." },
  plus: {
    ko: ["SPT 4.1용으로 게임·서버 양쪽 고침 — 패치 대상 41개 전부 실제 4.1 파일로 조회해 확인", "4.1에서 서버를 죽이던 원인(설정 수명 규칙 변경) 수정", "조용히 깨질 뻔한 버그 2개 미리 수정", "보안 컨테이너 퀘스트 보상을 다른 모드를 다 불러온 뒤 다시 확인"],
    en: ["Fixed both game and server sides for SPT 4.1 — all 41 patch targets looked up in the real 4.1 files", "Fixed what crashed the server on 4.1 (a lifetime rule change)", "Caught two bugs that would have broken silently", "Secure container quest rewards re-checked after all mods load"]
  },
  tl: [
    ["2026-09-08", "SPT 4.1.5 포팅", "SPT 4.1.5 port"],
    ["2026-09-24", "보안 컨테이너 퀘스트 보상 보강", "Secure container quest rewards hardened"]
  ]
},
{
  n: "Munitions Expert", a: "IcyClawz", side: "c", s: "2026-09-08", docsEn: true, inKo: false, v: "build",
  repo: "Munitions-Expert-zzap--Bootleg-", orig: "https://github.com/IcyClawz/ClientMods",
  what: { ko: "탄약의 관통력·데미지 등을 아이콘과 설명에 보여 주는 모드입니다.", en: "Shows ammo penetration, damage and more on icons and tooltips." },
  plus: { ko: ["(새 기능) 플리마켓 매물 아이콘에도 [관통력/데미지] 표시, 탄약 상자는 안에 든 탄 기준", "SPT 4.1용 이름 20개+멤버 10개 맞춤", "검사 창이 깨지던 아이콘 문제 수정"], en: ["(New) [penetration/damage] on flea market listings, ammo boxes use the rounds inside", "20 type + 10 member renames for SPT 4.1", "Fixed icons breaking the inspect window"] },
  tl: [["2026-09-08", "SPT 4.1 포팅 + 플리 탄약 표시", "SPT 4.1 port + flea ammo stats"]]
},
{
  n: "Add Missing Quest Weapon Requirements", a: "theGuiltyMan", side: "s", s: "2026-09-08", docsEn: true, inKo: false, v: "build",
  repo: "SPT-Add-Missing-Quest-Weapon-Requirements-zzap--Bootleg-", orig: "https://github.com/theGuiltyMan/SPT-Add-Missing-Quest-Weapon-Requirements",
  what: { ko: "'○○ 무기로 처치' 같은 퀘스트에 빠진 같은 종류 무기·모드 무기를 인정해 주는 모드입니다.", en: "Adds missing same-type and modded weapons to weapon-specific quests." },
  plus: { ko: ["SPT 4.1.5 포팅(동작 그대로)", "퀘스트를 고치는 다른 모드보다 나중에 돌게 해 넓힌 조건이 지워지지 않음"], en: ["SPT 4.1.5 port (same behaviour)", "Runs last so other quest mods can't undo it"] },
  tl: [["2026-09-08", "SPT 4.1.5 포팅", "SPT 4.1.5 port"], ["2026-09-09", "마지막에 실행되도록 순서 조정", "Load order: runs last"]]
},
{
  n: "Interactable Exfils API", a: "Jehree", side: "c", s: "2026-09-08", docsEn: true, inKo: false, v: "build",
  repo: "SPT-InteractableExfilsAPI-zzap--Bootleg-", orig: "https://github.com/Jehree/SPT-InteractableExfilsAPI",
  what: { ko: "탈출구에서 상호작용 메뉴를 쓰게 해 주는, 다른 모드가 기대는 기반 모드입니다.", en: "A base mod other mods use to add interaction menus at extracts." },
  plus: { ko: ["SPT 4.1용 이름 5개 바꿈(실제 게임 로그로 교차 확인)"], en: ["5 renames for SPT 4.1, cross-checked with real game logs"] },
  tl: [["2026-09-08", "SPT 4.1 포팅", "SPT 4.1 port"]]
},
{
  n: "SPT Scope Tweaks", a: "pein (peinwastaken)", side: "c", s: "2026-09-08", docsEn: true, inKo: false, v: "build",
  repo: "SPTScopeTweak-4.1-zzap--Bootleg-", orig: "https://github.com/peinwastaken/SPTScopeTweak",
  what: { ko: "스코프 렌즈 표현을 손보는 모드입니다.", en: "Tweaks how scope lenses look." },
  plus: { ko: ["코드는 그대로 두고 SPT 4.1용 빌드 설정만 고침", "버그 1개 같이 수정"], en: ["Code unchanged; build setup fixed for SPT 4.1", "One bug fixed along the way"] },
  tl: [["2026-09-08", "SPT 4.1 포팅", "SPT 4.1 port"]]
},
{
  n: "Visor Effect Manager", a: "silviohmartins", side: "c", s: "2026-09-08", docsEn: true, inKo: false, v: "build",
  repo: "VisorEffectManager4.1-zzap--Bootleg-", orig: "https://github.com/silviohmartins/VisorEffectManager",
  what: { ko: "페이스실드를 내렸을 때 화면에 겹치는 금·스크래치·흐림·왜곡을 항목별로 끄는 모드입니다.", en: "Turns off face-shield cracks, scratches, blur and distortion one by one." },
  plus: { ko: ["SPT 4.1용 이름 2개 맞춤", "설치 폴더로 자동 복사가 실제로 되게 함"], en: ["2 renames for SPT 4.1", "Auto-copy to the install folder actually works"] },
  tl: [["2026-09-08", "SPT 4.1.5 포팅", "SPT 4.1.5 port"]]
},
{
  n: "Weapon Attachment Modifier", a: "McOnie", side: "cs", s: "2026-09-08", docsEn: true, inKo: false, v: "build",
  repo: "WeaponAttachmentModifier4.1-zzap--Bootleg-", orig: "https://github.com/McOnie/WeaponAttachmentModifier",
  what: { ko: "부착물의 인체공학·반동·내구도 소모를 배수로 조절하는 모드입니다.", en: "Scales attachment ergonomics, recoil and durability burn." },
  plus: { ko: ["(새 기능) F12에서 게임 중에 바로 조절", "값을 정수로 반올림해 최대 67%까지 틀리던 문제 수정", "다른 모드가 넣은 부착물까지 같이 조절", "설정 파일이 없거나 깨져도 서버가 죽지 않음"], en: ["(New) live tuning from F12", "No more integer rounding that was off by up to 67%", "Also tunes attachments added by other mods", "Missing or broken config no longer crashes the server"] },
  tl: [["2026-09-08", "SPT 4.1.5 포팅 + F12 실시간 조절", "SPT 4.1.5 port + live F12 tuning"]]
},
{
  n: "Raid Armor Repair", a: "파인애플애호가 (PineappleLover)", side: "cs", s: "2026-09-08", docsEn: true, inKo: true, v: "game",
  repo: "armorrepair-zzap--Bootleg-", orig: "https://arca.live/b/tarkovspt/179689279",
  what: { ko: "레이드 중에 J 키를 누르고 있으면 입은 방어구를 수리 키트로 고치는 모드입니다.", en: "Hold J in raid to repair worn armor with a repair kit." },
  plus: {
    ko: ["수리할 때 발전기 수리와 같은 작업 모션", "진행도를 한 줄로(예: 전체 수리 완료까지 63%), 다 고치면 완료 효과음", "수리 중 움직임 규칙(느리게 걷기·움직이면 취소 등) 선택", "F12 설정 전부 한국어", "창이 뜨다 바로 꺼지던 문제, 표시 시간 2초 오차 수정"],
    en: ["Work animation while repairing (same as generator repair)", "One-line progress (e.g. 63% to full repair) and a done sound", "Choose movement rules while repairing (slow walk, cancel on move…)", "All F12 settings in Korean", "Fixed the window closing instantly and a 2-second timer error"]
  },
  tl: [
    ["2026-09-08", "SPT 4.1 포팅", "SPT 4.1 port"],
    ["2026-09-16", "1.3.0 — 표시 시간 2초 오차 수정, 누르자마자 첫 수리, 기본 간격 5초 → 1초", "1.3.0 — 2 s timer error fixed, first repair on press, default interval 5 s → 1 s"],
    ["2026-10-10", "1.4.0~1.9.0 — 봇은 영향 없음, 이동 규칙, F12 한국어, 작업 모션, 디버그 로그 스위치, 한 줄 진행도·완료 효과음", "1.4.0–1.9.0 — bots unaffected, movement rules, Korean F12, work animation, debug switch, one-line progress and sound"]
  ]
},
{
  n: "Pity Loot", a: "Bakahashi", side: "s", s: "2026-09-08", docsEn: true, inKo: false, v: "build",
  repo: "spt-pityloot-zzap--Bootleg-", orig: "https://forge.sp-tarkov.com/mod/1900/pity-loot",
  what: { ko: "퀘스트·은신처에 필요한데 안 나오는 아이템의 드랍률을, 오래 못 구할수록 조금씩 올려 주는 모드입니다.", en: "Raises drop rates of quest/hideout items you still need, the longer you go without them." },
  plus: { ko: ["SPT 4.x 서버 언어(C#)로 약 1,300줄 새로 씀", "확률이 겹쳐 계속 불어날 수 없는 구조로 바꿈", "원본 동작과 숫자로 대조하는 시험 24개"], en: ["Rewrote ~1,300 lines in C# for SPT 4.x servers", "Restructured so chances can't compound by accident", "24 tests checked against the original's numbers"] },
  tl: [["2026-09-08", "SPT 4.1 서버용으로 새로 씀", "Rewritten for SPT 4.1 server"]]
},
{
  n: "Loot Radius", a: "DrakiaXYZ", side: "c", s: "2026-09-09", docsEn: true, inKo: false, v: "build",
  repo: "SPT-LootRadius-zzap--Bootleg-", orig: "https://github.com/DrakiaXYZ/SPT-LootRadius",
  what: { ko: "주변에 떨어진 아이템을 한 화면에 모아 보여 주고 바로 줍게 하는 모드입니다.", en: "Lists nearby loose loot in one panel so you can grab it." },
  plus: { ko: ["SPT 3.11 → 4.1 — 쓰던 이름이 하나도 안 남아 전부 다시 찾음, 구조가 바뀐 4곳 새로 맞춤", "42개 항목 점검 통과"], en: ["SPT 3.11 → 4.1 — every name it used had changed; 4 structural changes reworked", "Passes a 42-item check"] },
  tl: [["2026-09-09", "SPT 4.1.5 포팅", "SPT 4.1.5 port"]]
},
{
  n: "VeilSight", a: "Sherrifpowpow", side: "c", s: "2026-09-11", docsEn: true, inKo: false, v: "game",
  repo: "VeilSight-zzap--Bootleg-", orig: "https://github.com/Sherrifpowpow/VeilSight",
  what: { ko: "어두운 곳에 있으면 봇이 나를 늦게 알아채게 하는 모드입니다.", en: "Bots notice you later when you're in the dark." },
  plus: {
    ko: ["한 번 제대로 본 봇은 10초 기억 — 숨었다 나와도 처음부터 다시 늦게 알아채지 않음", "SAIN이 있으면 효과가 두 번 걸리지 않게 지연을 줄임", "야시경 쓴 봇·교전 중인 봇은 지연 없음", "총 쏘면 노출, 손전등·가시광 레이저는 밝기 판정(IR은 제외)"],
    en: ["A bot that saw you properly remembers you for 10 s", "Reduced delay with SAIN so the effect isn't applied twice", "No delay for bots with NVG or in a fight", "Shooting exposes you; flashlights and visible lasers count, IR doesn't"]
  },
  tl: [
    ["2026-09-11", "SPT 4.1.5 포팅(코드 변경 없음)", "SPT 4.1.5 port (no code change)"],
    ["2026-09-25", "v1.2.0~1.2.2 — 봇 인지 규칙 보강, 손전등·레이저 구분 방식 변경, 야간 실전 확인", "v1.2.0–1.2.2 — better bot awareness rules, new light/laser detection, checked in night raids"]
  ]
},
{
  n: "Healing Auto Cancel", a: "IhanaMies", side: "c", s: "2026-09-18", docsEn: true, inKo: false, v: "game",
  repo: "HealingAutoCancel-zzap--Bootleg-", orig: "https://github.com/IhanaMies/HealingAutoCancel",
  what: { ko: "치료할 게 없어지면 치료 동작을 자동으로 멈추는 모드입니다.", en: "Cancels healing automatically when there's nothing left to heal." },
  plus: { ko: ["SPT 4.1용 이름 맞춤", "가짜 참조 파일로 빌드되면 빌드를 멈추는 안전장치"], en: ["Renamed for SPT 4.1", "Build stops if it would link against a placeholder file"] },
  tl: [["2026-09-18", "SPT 4.1 포팅", "SPT 4.1 port"], ["2026-09-19", "게임에서 자동 취소 동작 확인", "Auto-cancel confirmed in game"]]
},
{
  n: "Quest Tweaks", a: "sgtlaggy", side: "cs", s: "2026-09-23", docsEn: true, inKo: true, v: "part",
  repo: "spt-quest-tweaks-zzap--Bootleg-", orig: "https://github.com/sgtlaggy/spt-quest-tweaks",
  what: { ko: "까다로운 퀘스트 조건(무기·부위·맵·개수 등)을 풀거나 줄이는 모드입니다.", en: "Relaxes tough quest conditions (weapon, body part, map, counts…)." },
  plus: {
    ko: ["(새 기능) 퀘스트 이름 옆에 [퀘스트 완화됨: 무기 무관 · 목표 5→3]처럼 무엇이 풀렸는지 표시", "(새 기능) F12에서 바꾸면 서버 재시작 없이 바로 적용", "이미 받은 퀘스트에도 적용하는 옵션", "QuestTracker 화면에서 표시가 화면을 덮던 문제 수정"],
    en: ["(New) tags like [Relaxed: any weapon · goal 5→3] next to quest names", "(New) F12 changes apply without restarting the server", "Option to apply to quests you already took", "Fixed the tag covering the QuestTracker panel"]
  },
  tl: [
    ["2026-09-23", "완화 표시 + F12 실시간 설정 추가", "Relaxed tags + live F12 settings"],
    ["2026-09-24", "표시 색·위치, 일일·모드 퀘스트 대응, 이미 받은 퀘스트에도 적용", "Tag colour/position, daily and modded quests, apply to taken quests"],
    ["2026-10-09", "원본 최신판(4.9.0) 합침", "Merged original 4.9.0"],
    ["2026-10-20", "v4 — QuestTracker 표시 크기 문제 수정", "v4 — QuestTracker tag size fix"]
  ]
},
{
  n: "Scrollable Attachments", a: "peinwastaken (pein)", side: "c", s: "2026-09-26", docsEn: true, inKo: false, v: "build",
  repo: "SPTScrollableAttachments-zzap--Bootleg--", orig: "https://github.com/peinwastaken/SPTScrollableAttachments",
  what: { ko: "무기 개조 화면의 부착물 목록을 스크롤되는 창으로 바꾸는 모드입니다.", en: "Turns the attachment list in the modding screen into a scrollable window." },
  plus: { ko: ["(새 기능) 지금 단 것보다 좋은 부착물을 노란 테두리로 표시", "F12 켜고 끄기"], en: ["(New) yellow border on attachments better than the current one", "F12 toggles"] },
  tl: [["2026-09-26", "v1.2.0 — SPT 4.1 포팅 + 좋은 부착물 표시", "v1.2.0 — SPT 4.1 port + better-attachment highlight"]]
},
{
  n: "PiP-Disabler", a: "Fiodorwellfme", side: "c", s: "2026-10-01", docsEn: true, inKo: true, v: "game",
  repo: "PiP-Disabler-zzap--Bootleg--", orig: "https://github.com/Fiodorwellfme/PiP-Disabler",
  what: { ko: "배율 스코프를 볼 때 화면을 두 번 그리던 것을 한 번만 그려 조준 중 FPS를 올리는 모드입니다.", en: "Draws the scene once instead of twice when aiming a magnified scope, for more FPS." },
  plus: {
    ko: ["스코프 몸통이 렌즈를 가리던 것을 렌즈 원 안만 화면에서 지우는 방식으로 해결", "스코프마다 시야각(FOV) 따로 설정, 영점 조절 때 시점이 내려가던 문제 수정", "하늘 볼 때 렌즈 안이 검게 보이던 문제, 고배율 줌 떨림(최대 77픽셀 → 약 1픽셀) 수정", "F12 한국어/영어, 레이드 끝나면 메모리 정리", "COTI·MagicOpticMount·Stance Overhaul 등 다른 모드와 같이 쓰기 대응"],
    en: ["Scope bodies blocking the lens are now erased only inside the lens circle", "Per-scope FOV, fixed the view dropping when zeroing", "Fixed a black lens when looking at the sky and high-zoom jitter (77 px → ~1 px)", "Korean/English F12, memory cleanup after raids", "Works with COTI, MagicOpticMount, Stance Overhaul and more"]
  },
  tl: [
    ["2026-10-01", "v1 — SPT 4.1 포팅, COTI 호환", "v1 — SPT 4.1 port, COTI support"],
    ["2026-10-06", "v2 — 스코프 몸통 구멍 자동 계산, 스코프별 FOV, 영점 조절 수정, F12 한국어", "v2 — auto lens cut-out, per-scope FOV, zeroing fix, Korean F12"],
    ["2026-10-10", "v3 — 렌즈 원 안만 화면에서 지우는 새 방식(기본), 헤드밥 줄이기, 레이드 뒤 메모리 정리", "v3 — new screen-pixel cut-out (default), less head bob, memory cleanup"],
    ["2026-10-13", "v3.2 — 하늘 렌즈 버그, 줌 떨림 수정", "v3.2 — sky lens bug, zoom jitter fixed"],
    ["2026-10-23", "v3.3 — Stance Overhaul 자세 전환 대응", "v3.3 — Stance Overhaul stance changes"],
    ["2026-10-23", "v3.4 — COTI 3.4.2와 같이 넣으면 모드가 하나도 안 불러와지던 문제 긴급 수정", "v3.4 — hotfix: with COTI 3.4.2 no mods loaded at all"]
  ]
},
{
  n: "AutoCompat Framework", a: "Solid-Rhoads", side: "s", s: "2026-10-12", docsEn: true, inKo: false, v: "server",
  repo: "AutoCompat-Framework-zzap--Bootleg-", orig: "https://github.com/Solid-Rhoads/AutoCompat-Framework",
  what: { ko: "모드 무기·부품·탄약끼리 서로 꽂히도록 서버가 켜질 때 자동으로 맞춰 주는 모드입니다.", en: "At server start, makes modded guns, parts and ammo fit each other automatically." },
  plus: { ko: ["SPT 3.11용 원작을 SPT 4.1 서버 언어(C#)로 새로 씀", "4.1 새 바닐라 아이템 29개가 모드 아이템으로 잘못 잡히지 않게 목록 갱신", "모드 파일을 한 번만 읽어 훨씬 빨라짐, 모드 구성이 바뀌면 자동으로 다시 만듦"], en: ["Rewrote the SPT 3.11 original in C# for SPT 4.1", "Updated the vanilla list so 29 new 4.1 items aren't treated as modded", "Reads mod files once (much faster), rebuilds its cache when mods change"] },
  tl: [["2026-10-12", "SPT 4.1 서버용으로 첫 포팅, 실제 4.1.6 서버에서 기동 확인", "First port to SPT 4.1 server, booted on a real 4.1.6 server"]]
},
{
  n: "Transmog", a: "szszss · IgorEisberg", side: "c", s: "2026-10-12", docsEn: true, inKo: false, v: "game",
  repo: "Transmog-zzap--Bootleg-", orig: "https://github.com/szszss/EFT.Transmog",
  what: { ko: "장비의 겉모습만 다른 아이템처럼 바꾸는 모드입니다(성능은 그대로).", en: "Changes how your gear looks without changing its stats." },
  plus: { ko: ["Transmog와 Custom Interactions를 파일 하나로 합침 — 따로 깔 필요 없음", "우클릭 메뉴를 SPT 4.1 구조에 맞게 다시 만듦"], en: ["Merged Transmog and Custom Interactions into one file — no separate install", "Rebuilt the right-click menu for SPT 4.1"] },
  tl: [["2026-10-12", "SPT 4.1 첫 포팅, 사용자 PC에서 동작 확인", "First SPT 4.1 port, confirmed on the user's PC"]]
},
{
  n: "Painter", a: "MoxoPixel (4.0: Jayoh99)", side: "s", s: "2026-10-12", docsEn: true, inKo: false, v: "game",
  repo: "painter-4.1--zzap-bootleg-", orig: "https://github.com/emilanderss0n/Painter",
  what: { ko: "도색된 총기 부품·방탄복과 전용 퀘스트 12개를 파는 Painter 상인을 추가합니다.", en: "Adds the Painter trader with painted parts, armor and 12 quests." },
  plus: { ko: ["퀘스트 'The Dark Knight'를 깰 수 없던 문제 수정", "판매 목록에서 빠진 아이템 2개 복구, 도색 방탄복 11종에 기본 플레이트 넣음", "개인 설정으로 0이 돼 있던 무게·패널티·신뢰도 조건을 원래 값으로 되돌림"], en: ["Fixed the quest 'The Dark Knight' being impossible", "Restored 2 missing shop items, added default plates to 11 painted armors", "Reverted weight, penalties and loyalty levels that a personal tweak had zeroed"] },
  tl: [["2026-10-12", "SPT 4.1.5용으로 정리하고 위 문제들 수정", "Cleaned up for SPT 4.1.5 with the fixes above"]]
},
{
  n: "Manimal Terminal", a: "Manimal (danauraborealis)", side: "cs", s: "2026-10-26", docsEn: true, inKo: true, v: "game",
  repo: "ManimalTerminal-zzap--bootleg-", orig: "https://github.com/danauraborealis/ManimalTerminal", pre: "https://pub-38fba86cac60421ebd03a218d2535c13.r2.dev/Manimal-Terminal-SPT-4.1-0.2.20.zip",
  what: { ko: "터미널 맵 모드의 수정판입니다. 원본 터미널 0.2.20을 먼저 깔고 덮어씁니다.", en: "A fixed build of the Terminal map mod. Install Terminal 0.2.20 first, then overwrite." },
  plus: {
    ko: ["컷신 자막·방송·퀘스트·대화·아이템 등 전부 한국어", "레이드 시작 준비 멈춤 7.2초 → 2.4초, 1초 넘는 멈춤 분당 2.7번 → 0.8번", "유령 모드(기본 켬): 125m 밖 분대를 재워 부담을 줄이고, 멀리서 싸우는 소리는 남김", "등 돌린 채 다가오던 스캐브, 순간이동하던 시민, 다른 모드와 같이 쓰면 튕기던 문제 수정"],
    en: ["Korean cutscene subtitles, broadcasts, quests, dialogue and items", "Raid-start freeze 7.2 s → 2.4 s; >1 s hitches 2.7 → 0.8 per minute", "Ghost mode (on): squads beyond 125 m sleep to save load, distant fights still heard", "Fixed backwards-walking scavs, teleporting civilians, crashes with other mods"]
  },
  tl: [
    ["2026-10-26", "원작 0.2.20 기준, 한국어화, 시작 멈춤 줄이기, 다른 모드 충돌 수정", "Based on 0.2.20: Korean, shorter start freeze, conflict fixes"],
    ["2026-10-28", "zzap v1 — 유령 모드 기본 켬, RUAF 무적·중립, 시민 떨림 수정", "zzap v1 — ghost mode on, RUAF invulnerable/neutral, civilian jitter fixed"],
    ["2026-11-02", "zzap v2 — 다른 맵을 끝낸 뒤 메뉴에서 메모리가 남던 것 수정", "zzap v2 — memory kept in the menu after other maps fixed"]
  ]
},
{
  n: "Hephaestus", a: "alexkarpen (Alexandros)", side: "cs", s: "2026-11-01", docsEn: true, inKo: true, v: "server",
  repo: "Hephaestus-zzap--bootleg-", orig: "https://github.com/alexkarpen/Hephaestus",
  what: { ko: "내가 저장한 무기 프리셋을 그대로 조립된 총으로 파는 상인을 추가합니다.", en: "Adds a trader that sells your saved weapon presets as built guns." },
  plus: { ko: ["SPT 3.7용 원작을 SPT 4.1.6 서버용으로 새로 씀", "내 프리셋이 상인 값으로 덮어써지던 문제, 여러 프로필에서 남의 프리셋이 보이던 문제 수정", "가격이 열 때마다 흔들리던 것을 고정 시세 합으로", "한국어/영어 자동 전환, F12 설정 화면", "버전 표기 때문에 서버의 모든 모드가 안 불러와지던 문제 수정"], en: ["Rewrote the SPT 3.7 original for SPT 4.1.6", "Fixed your presets being overwritten and other profiles' presets showing", "Stable prices (sum of base values) instead of random swings", "Auto Korean/English, F12 settings", "Fixed a version tag that stopped every server mod from loading"] },
  tl: [["2026-11-01", "1.2.0 — SPT 4.1.6 포팅, 실제 서버에서 시험 32개 통과", "1.2.0 — SPT 4.1.6 port, 32 tests passed on a real server"]]
},
{
  n: "Manimal Interchange", a: "Manimal (danauraborealis)", side: "cs", s: "2026-11-02", docsEn: false, inKo: false, v: "build",
  repo: "ManimalInterchange-zzap--Bootleg-", orig: "https://github.com/danauraborealis/ManimalInterchange", pre: "https://sp-mod.com/mod/3025/manimals-10-interchange-expansion-backport",
  what: { ko: "인터체인지 확장 맵 모드의 수정판입니다. 원본 모드를 먼저 깔고 덮어씁니다.", en: "A fixed build of the Interchange expansion. Install the original first, then overwrite." },
  plus: { ko: ["이 모드를 깔면 다른 맵(연구소 등)에서도 분당 220~250MB씩 쓰레기 메모리가 생기던 문제 수정"], en: ["Fixed 220–250 MB/min of garbage memory on other maps (e.g. Labs) while installed"] },
  tl: [["2026-11-02", "zzap v1 — 메모리 쓰레기 문제 수정", "zzap v1 — garbage memory fix"]]
},
{
  n: "Manimal Lighthouse", a: "Manimal (danauraborealis)", side: "cs", s: "2026-11-02", docsEn: false, inKo: false, v: "build",
  repo: "ManimalLighthouse-zzap--Bootleg-", orig: "https://github.com/danauraborealis/ManimalLighthouse", pre: "https://sp-mod.com/mod/3022/manimals-10-lighthouse-rework-backport",
  what: { ko: "등대 리워크 맵 모드의 수정판입니다. 원본 모드를 먼저 깔고 덮어씁니다.", en: "A fixed build of the Lighthouse rework. Install the original first, then overwrite." },
  plus: { ko: ["이 모드를 깔면 다른 맵(연구소 등)에서도 분당 20~58MB씩 쓰레기 메모리가 생기던 문제 수정"], en: ["Fixed 20–58 MB/min of garbage memory on other maps (e.g. Labs) while installed"] },
  tl: [["2026-11-02", "zzap v1 — 메모리 쓰레기 문제 수정", "zzap v1 — garbage memory fix"]]
},
{
  n: "Dynamic Maps", a: "mpstark · acidphantasm", side: "c", s: "2026-11-02", docsEn: true, inKo: true, v: "none",
  repo: "SPT-DynamicMap-zzap--bootleg-", orig: "https://github.com/mpstark/SPT-DynamicMaps",
  what: { ko: "게임 지도 화면을 내 위치·탈출구가 보이는 쓸 만한 지도로 바꾸는 모드입니다.", en: "Turns the in-game map screen into a usable map with your position and extracts." },
  plus: { ko: ["새 지도 6종: 터미널·인터체인지 리워크·등대 리워크·연구소 리워크·공장 클래식·쇄빙선", "연구소 1층 비밀 연구실, 지뢰·저격·못 가는 구역 표시", "원본/리워크 지도 자동 선택, 지도·F12 한국어", "미니맵 끊김 줄임, 세력별 봇 색(RUAF·블랙 디비전·레이더 등)"], en: ["6 new maps: Terminal, Interchange rework, Lighthouse rework, Labs rework, Factory Classic, Icebreaker", "Labs secret lab, minefields, sniper zones and out-of-bounds areas", "Auto original/rework map choice, Korean map and F12", "Less minimap stutter, per-faction bot colours"] },
  tl: [
    ["2026-11-03", "v1 — 새 지도 6종, 한국어, 미니맵 끊김 줄임", "v1 — 6 new maps, Korean, less minimap stutter"],
    ["2026-11-04", "v2 — 세력별 봇 마커 색", "v2 — per-faction bot marker colours"]
  ]
}
];

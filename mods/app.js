/* 카드 목록을 그린다. 페이지마다 window.SHOW_DL(다운로드 링크 표시 여부)만 다르다. */
(function () {
  var SHOW_DL = !!window.SHOW_DL;
  var OWNER = "https://github.com/danyhappy564-cmyk/";
  var mods = (window.MODS || []).slice();

  var T = {
    ko: {
      kicker: "우리 포팅 · 수정 모드",
      title: "포팅·수정 모드 변경 기록",
      lede: "다른 분이 만든 SPT 모드를 SPT 4.1용으로 옮기거나(포팅) 고친 것들입니다. 모드마다 무엇이 바뀌고 무엇을 강화했는지, 설명서가 한국어·영어로 다 있는지를 날짜 순서대로 정리했습니다.",
      asof: "기준일",
      notice1: "전부 비공식 포팅판입니다. 문제가 생겨도 원작자분께 문의하지 말아 주세요.",
      notice2: "원작자분이 내려 달라고 하시면 바로 지웁니다. 좋았다면 원작자분 모드 페이지에 응원을 남겨 주세요.",
      sMods: "모드", sEn: "영어 설명서 있음", sKo: "게임 안 한국어", sGame: "게임에서 확인됨",
      legend: "표시 읽는 법",
      lgDocs2: "설명서(README)가 한국어·영어 둘 다 있음", lgDocs1: "한국어 설명서 + 원작 영어 설명 그대로(영어판 따로 없음)",
      lgKo: "게임 화면(설정·문구)에 한국어가 들어 있음",
      lgV: "확인 상태 — 설명서에 적힌 기준. 빌드만 확인된 것은 게임에서 이상할 수 있습니다",
      sortLbl: "정렬", sortStart: "작업 시작 순", sortLast: "최근 변경 순",
      fLbl: "종류", fAll: "전체", fC: "게임에 까는 모드", fS: "서버 모드",
      side: { c: "게임(클라이언트)", s: "서버", cs: "게임 + 서버" },
      docs2: "설명서 한·영", docs1: "설명서 한국어 + 원작 영어",
      inKo: "게임 안 한국어",
      v: { game: "게임에서 확인됨", part: "일부 게임 확인", server: "서버에서 확인(게임 화면 미확인)", build: "빌드만 확인(게임 미확인)", none: "확인 기록 없음" },
      author: "원작자", period: "작업 기간", plus: "강화한 점", tl: "날짜별 변경",
      pre: "원본 모드를 먼저 설치한 뒤 이 판을 덮어써야 작동합니다.", preLink: "원본 모드 받기",
      dl: "다운로드 (릴리즈)", orig: "원작 보기", repo: "저장소",
      empty: "이 조건에 맞는 모드가 없습니다.",
      foot1: "비공개 저장소와 배포를 멈춘 저장소는 이 목록에서 뺐습니다.",
      foot2: "이 페이지는 요청이 있을 때만 갱신합니다. 위 기준일 이후 바뀐 것은 반영돼 있지 않을 수 있습니다.",
      src: "소스"
    },
    en: {
      kicker: "Our ports · edits",
      title: "Ported & Edited Mods — Change Log",
      lede: "SPT mods made by other people that we moved to SPT 4.1 (ported) or fixed. For each mod: what changed and what we improved, in date order, and whether its guide exists in both Korean and English.",
      asof: "As of",
      notice1: "All of these are unofficial ports. Please do not contact the original authors about problems.",
      notice2: "Anything is taken down at once if its author asks. If you like a mod, leave kind words on the author's own page.",
      sMods: "mods", sEn: "with an English guide", sKo: "with Korean in game", sGame: "confirmed in game",
      legend: "How to read the tags",
      lgDocs2: "Guide (README) in both Korean and English", lgDocs1: "Korean guide + the original English text (no separate English guide)",
      lgKo: "Korean text inside the game (settings, messages)",
      lgV: "Check status — as written in each guide. Build-only means it may still misbehave in game",
      sortLbl: "Sort", sortStart: "By start date", sortLast: "Recently changed",
      fLbl: "Type", fAll: "All", fC: "Game (client)", fS: "Server",
      side: { c: "Game (client)", s: "Server", cs: "Game + server" },
      docs2: "Guide KO · EN", docs1: "Guide KO + original EN",
      inKo: "Korean in game",
      v: { game: "Confirmed in game", part: "Partly confirmed in game", server: "Confirmed on server (game screen unchecked)", build: "Build only (not checked in game)", none: "No check recorded" },
      author: "Original author", period: "Work period", plus: "What we improved", tl: "Changes by date",
      pre: "Install the original mod first, then extract this build over it.", preLink: "Get the original mod",
      dl: "Download (releases)", orig: "Original", repo: "Repository",
      empty: "No mods match this filter.",
      foot1: "Private repositories and repositories whose distribution was stopped are left out.",
      foot2: "This page is updated only on request. Changes after the date above may be missing.",
      src: "Source"
    }
  };
  var VCLS = { game: "ok", part: "inf", server: "inf", build: "mid", none: "neu" };

  mods.forEach(function (m) {
    m.last = m.tl.reduce(function (a, t) { return t[0] > a ? t[0] : a; }, m.s);
  });

  var state = { lang: "ko", sort: "start", f: "all" };
  try {
    var saved = JSON.parse(localStorage.getItem("modlog-view") || "{}");
    if (saved.sort) state.sort = saved.sort;
    if (saved.f) state.f = saved.f;
  } catch (e) {}
  if (location.hash === "#en") state.lang = "en";
  else if (location.hash !== "#ko") { try { if (localStorage.getItem("modlog-lang") === "en") state.lang = "en"; } catch (e) {} }

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "cls") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function pill(cls, text) { return el("span", { cls: "pill " + cls, text: text }); }

  function card(m, t, L) {
    var tags = el("div", { cls: "tags" }, [
      pill("neu", t.side[m.side]),
      m.docsEn ? pill("ok", t.docs2) : pill("mid", t.docs1),
      m.inKo ? pill("ok", t.inKo) : null,
      pill(VCLS[m.v], t.v[m.v])
    ]);
    var meta = el("div", { cls: "meta" }, [
      el("span", { text: t.author + ": " + m.a }),
      el("span", {}, [document.createTextNode(t.period + ": "), el("span", { cls: "d", text: m.s + (m.last !== m.s ? " → " + m.last : "") })])
    ]);
    var plus = el("div", { cls: "plus" }, [
      el("h4", { text: t.plus }),
      el("ul", {}, m.plus[L].map(function (x) { return el("li", { text: x }); }))
    ]);
    var pre = null;
    if (m.pre) {
      pre = el("p", { cls: "pre" }, [document.createTextNode(t.pre)]);
      if (SHOW_DL) { pre.appendChild(document.createTextNode(" ")); pre.appendChild(el("a", { href: m.pre, rel: "noopener", target: "_blank", text: t.preLink })); }
    }
    var items = m.tl.slice().sort(function (a, b) { return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0; });
    var tl = el("details", { cls: "tl" }, [
      el("summary", { text: t.tl + " (" + items.length + ")" }),
      el("ol", {}, items.map(function (x) {
        return el("li", {}, [el("span", { cls: "d", text: x[0] }), el("span", { text: L === "ko" ? x[1] : x[2] })]);
      }))
    ]);
    var links = null;
    if (SHOW_DL) {
      links = el("div", { cls: "links" }, [
        el("a", { cls: "btn primary", href: OWNER + m.repo + "/releases", rel: "noopener", target: "_blank", text: t.dl }),
        el("a", { cls: "btn", href: m.orig, rel: "noopener", target: "_blank", text: t.orig })
      ]);
    }
    return el("article", { cls: "card" }, [
      el("h3", { text: m.n }), meta, tags,
      el("p", { cls: "what", text: m.what[L] }), plus, pre, links, tl
    ]);
  }

  function setPressed(sel, val) {
    document.querySelectorAll(sel).forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.v === val ? "true" : "false"); });
  }

  function render() {
    var L = state.lang, t = T[L];
    document.documentElement.lang = L;
    document.querySelectorAll("[data-t]").forEach(function (n) {
      var k = n.dataset.t;
      if (k === "asof") n.textContent = t.asof + " " + (window.MODS_UPDATED || "");
      else if (t[k] != null) n.textContent = t[k];
    });
    setPressed(".lang button", L);
    setPressed("[data-sort]", state.sort);
    setPressed("[data-f]", state.f);

    document.getElementById("st-mods").textContent = mods.length;
    document.getElementById("st-en").textContent = mods.filter(function (m) { return m.docsEn; }).length + " / " + mods.length;
    document.getElementById("st-ko").textContent = mods.filter(function (m) { return m.inKo; }).length;
    document.getElementById("st-game").textContent = mods.filter(function (m) { return m.v === "game"; }).length;

    var list = mods.filter(function (m) {
      if (state.f === "c") return m.side !== "s";
      if (state.f === "s") return m.side !== "c";
      return true;
    }).sort(function (a, b) {
      var ka = state.sort === "last" ? b.last : a.s, kb = state.sort === "last" ? a.last : b.s;
      if (ka !== kb) return ka < kb ? -1 : 1;
      return a.n.localeCompare(b.n);
    });
    var box = document.getElementById("list");
    box.textContent = "";
    if (!list.length) box.appendChild(el("p", { cls: "empty", text: t.empty }));
    list.forEach(function (m) { box.appendChild(card(m, t, L)); });
  }

  function save() { try { localStorage.setItem("modlog-view", JSON.stringify({ sort: state.sort, f: state.f })); } catch (e) {} }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    if (b.parentNode.classList.contains("lang")) {
      state.lang = b.dataset.v;
      try { localStorage.setItem("modlog-lang", state.lang); } catch (err) {}
      if (history.replaceState) history.replaceState(null, "", "#" + state.lang);
    } else if (b.hasAttribute("data-sort")) { state.sort = b.dataset.v; save(); }
    else if (b.hasAttribute("data-f")) { state.f = b.dataset.v; save(); }
    else return;
    render();
  });
  window.addEventListener("hashchange", function () {
    if (location.hash === "#en" || location.hash === "#ko") { state.lang = location.hash.slice(1); render(); }
  });
  render();
})();

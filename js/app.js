/* Monta o site a partir de js/dados.js. Não precisa mexer aqui para atualizar conteúdo. */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const dois = (n) => String(n).padStart(2, "0");

  /* ---------- topo ---------- */
  $("#navData").textContent = "atualizado " + S.atualizadoEm;
  $("#heroKicker").textContent = S.hero.kicker;
  $("#heroTitulo").innerHTML = S.hero.titulo;
  $("#heroTexto").textContent = S.hero.texto;
  $("#credito").textContent = S.credito;
  $("#rodapeData").textContent = "Última atualização: " + S.atualizadoEm;
  $("#rodapeGithub").href = S.github;

  $("#numeros").innerHTML = S.numeros
    .map((n) => `<div class="numero revela"><strong>${esc(n.valor)}</strong><span>${esc(n.rotulo)}</span></div>`)
    .join("");

  const nomes = S.projetos.map((p) => `<span>${esc(p.nome)}</span><i>✦</i>`).join("");
  $("#faixa").innerHTML = nomes + nomes;

  /* ---------- constelação do hero ---------- */
  const constel = $("#constelacao");
  // ângulos espalhados de forma que os nomes de lados opostos não fiquem na mesma altura
  S.projetos.forEach((p, i) => {
    const anel = i % 2 ? 0.4 : 0.46;
    const ang = (i / S.projetos.length) * Math.PI * 2 - Math.PI / 2 + (10 * Math.PI) / 180;
    const x = 50 + Math.cos(ang) * anel * 100;
    const y = 50 + Math.sin(ang) * anel * 100;
    const a = document.createElement("a");
    a.className = "estrela" + (x > 62 ? " esq" : "");
    a.href = "#" + p.id;
    a.style.setProperty("--x", x + "%");
    a.style.setProperty("--y", y + "%");
    a.style.setProperty("--c", p.cor);
    a.style.setProperty("--d", (i * 0.37).toFixed(2) + "s");
    a.innerHTML = `<i></i><span>${esc(p.nome)}</span>`;
    constel.appendChild(a);
  });

  /* ---------- índice com filtros ---------- */
  const cats = ["Todos", ...new Set(S.projetos.map((p) => p.categoria))];
  const filtros = $("#filtros");
  filtros.innerHTML = cats
    .map((c, i) => `<button role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}<sup>${c === "Todos" ? S.projetos.length : S.projetos.filter((p) => p.categoria === c).length}</sup></button>`)
    .join("");
  const cartoes = $("#cartoes");
  cartoes.innerHTML = S.projetos
    .map(
      (p, i) => `
    <a class="cartao revela" href="#${p.id}" data-cat="${esc(p.categoria)}" style="--c:${p.cor};--c2:${p.cor2 || p.cor}">
      <span class="cartao-luz" aria-hidden="true"></span>
      <span class="cartao-num mono">${dois(i + 1)}</span>
      <span class="cartao-status mono"><i></i>${esc(p.status)}</span>
      <strong>${esc(p.nome)}</strong>
      <span class="cartao-tag">${esc(p.tagline)}</span>
      <span class="cartao-pe mono"><span>${esc(p.categoria)}</span><span>${esc(p.versao)}</span></span>
    </a>`
    )
    .join("");
  filtros.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    filtros.querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", x === b));
    const cat = b.dataset.cat;
    cartoes.querySelectorAll(".cartao").forEach((c) => {
      c.classList.toggle("some", cat !== "Todos" && c.dataset.cat !== cat);
    });
  });

  /* ---------- desenhos (mocks) ---------- */
  const posters = [
    ["O Último Farol", "#f5a524", "#5a1f0e"], ["Marés", "#2bb3c0", "#0b2540"], ["Neon Rio", "#ff4fa3", "#2a0b3d"],
    ["Serra Alta", "#8fd16a", "#14301c"], ["A Casa Azul", "#5b8cff", "#121a3d"], ["Vento Sul", "#ffcf5a", "#3d2a0b"],
    ["Ilha 9", "#c58bff", "#25113d"]
  ];
  const posterHTML = (n = 6, off = 0) =>
    Array.from({ length: n }, (_, i) => {
      const [t, a, b] = posters[(i + off) % posters.length];
      return `<span class="poster" style="--pa:${a};--pb:${b}"><em>${t}</em></span>`;
    }).join("");

  const mocks = {
    tv: () => `
      <div class="palco">
        <div class="tv">
          <div class="tv-tela">
            <div class="tv-menu"><i class="on"></i><i></i><i></i><i></i><i></i><i class="perfil"></i></div>
            <div class="tv-hero">
              <div class="tv-hero-img"></div>
              <div class="tv-hero-txt">
                <span class="mono selo">LUME ORIGINAL · DUBLADO</span>
                <b>O Último Farol</b>
                <span class="sin">Uma faroleira descobre que a luz que ela guarda chama coisas do mar.</span>
                <span class="tv-btns"><u>▶ Assistir</u><s>+ Minha lista</s></span>
              </div>
            </div>
            <div class="tv-fila"><span class="fila-t">Continuar assistindo</span><div class="fila foco-anda">${posterHTML(7)}</div></div>
            <div class="tv-fila"><span class="fila-t">Em alta no Brasil</span><div class="fila">${posterHTML(7, 3)}</div></div>
          </div>
          <div class="tv-pe"></div>
        </div>
        <div class="fone fone-tv">
          <div class="fone-tela">
            <div class="ft-hero"><span class="mono selo">DESTAQUE</span><b>Marés</b><u>▶ Assistir</u></div>
            <span class="fila-t">Minha lista</span>
            <div class="fila mini">${posterHTML(4, 1)}</div>
            <span class="fila-t">Desenhos</span>
            <div class="fila mini">${posterHTML(4, 4)}</div>
            <div class="ft-abas"><i class="on"></i><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>`,

    music: () => `
      <div class="fone grande music">
        <div class="fone-tela">
          <div class="mesh"></div>
          <span class="mono mus-topo">TOCANDO AGORA</span>
          <div class="vinil"><div class="vinil-rotulo"></div></div>
          <div class="mus-info"><b>Maré Alta</b><span>Lia Sol · Vidro</span></div>
          <div class="mus-barra"><i></i></div>
          <div class="mus-ctrl"><span>⏮</span><span class="play">❚❚</span><span>⏭</span></div>
          <div class="letra"><p>e a cidade acende devagar</p><p class="on">eu sigo a luz que vem do mar</p><p>até o sol nascer de novo</p></div>
        </div>
      </div>`,

    sopro: () => `
      <div class="fone grande sopro">
        <div class="fone-tela">
          <div class="msg-topo"><i></i><b>Marina</b></div>
          <div class="bolha eles">Vamos amanhã às 10?</div>
          <div class="campo"><span class="digita">Fechado! Só troca a reunião por almoço que eu chego mais cedo</span><i class="cursor"></i></div>
          <div class="chip mono">Vou escrever… · <b>Polir</b></div>
          <div class="ondas">${Array.from({ length: 22 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
          <div class="teclas">${"qwertyuiopasdfghjklzxcvbnm".split("").map((k) => `<span>${k}</span>`).join("")}<span class="espaco">Sopro</span></div>
        </div>
      </div>`,

    vgfa: () => `
      <div class="palco vg">
        <div class="tv">
          <div class="tv-tela vg-tela">
            <div class="vg-topo"><b>VGFA</b><span class="mono">TOP 10 HOJE</span></div>
            <div class="vg-grade">${Array.from({ length: 10 }, (_, i) => `<span class="jogo j${i % 5}"><em>${i + 1}</em></span>`).join("")}</div>
            <span class="mono vg-cast">● Transmitindo para a TV</span>
          </div>
          <div class="tv-pe"></div>
        </div>
        <div class="fone controle">
          <div class="fone-tela">
            <span class="mono conectado">● Conectado</span>
            <div class="dpad"><i></i><i></i><i></i><i></i></div>
            <div class="abxy"><i>Y</i><i>X</i><i>B</i><i>A</i></div>
          </div>
        </div>
      </div>`,

    chat: () => `
      <div class="fone grande chat">
        <div class="fone-tela">
          <div class="msg-topo"><i class="h"></i><b>Hermes</b><small>online</small></div>
          <div class="bolha minha b1">Hermes, prepara o roteiro do próximo vídeo</div>
          <div class="bolha eles b2">Feito. 6 cenas, imagens geradas e legenda pronta. Mando para o Instinct gravar?</div>
          <div class="bolha minha b3">Manda 🚀</div>
          <div class="bolha eles b4 dig"><i></i><i></i><i></i></div>
        </div>
      </div>`,

    pipeline: () => `
      <div class="esteira">
        ${["Roteiro|Hermes", "Imagens|Hermes", "Narração|Instinct", "Revisão|Quest", "Montagem e legendas|Fábrica"]
          .map((s, i) => { const [a, b] = s.split("|"); return `<div class="etapa" style="--i:${i}"><span class="mono">${dois(i + 1)}</span><b>${a}</b><small>${b}</small><i></i></div>`; })
          .join("")}
      </div>`,

    canal: () => `
      <div class="capas">
        ${[["ROMA EM CHAMAS", "A", "#ff7a3d", "#3d1408"], ["VOCÊ FOI VENDIDO", "B", "#d9a066", "#2e1d10"], ["SOBREVIVA 1 DIA", "C", "#f2d16b", "#3a2a0c"]]
          .map(([t, l, a, b], i) => `<div class="capa" style="--a:${a};--b:${b};--i:${i}"><span class="mono">${l}</span><div class="coliseu"></div><b>${t}</b></div>`)
          .join("")}
      </div>`,

    orquestra: () => `
      <div class="mosaico">
        <div class="ladrilho t1"><span class="bichos">🐸🦊🦉</span><b>Os Três do Brejo</b></div>
        <div class="ladrilho t2"><div class="cubo"><i></i><i></i><i></i></div><b>Edit cúbico</b></div>
        <div class="ladrilho t3"><div class="explode"><i></i><i></i><i></i><i></i></div><b>Oficina 3D</b></div>
        <div class="ladrilho t4"><div class="onda-a">${Array.from({ length: 14 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div><b>Áudio → documentário</b></div>
      </div>`,

    grafico: () => `
      <div class="grafico">
        <svg viewBox="0 0 400 240" role="img" aria-label="Três estratégias simuladas comparadas com a linha do zero">
          <line x1="20" y1="120" x2="330" y2="120" class="zero"/>
          <text x="334" y="124" class="rot">0%</text>
          <polyline class="l l1" points="20,120 60,128 100,140 140,150 180,165 220,172 260,185 300,196 330,204"/>
          <text x="334" y="208" class="rot">v3</text>
          <polyline class="l l2" points="20,120 60,124 100,118 140,130 180,126 220,134 260,128 300,138 330,135"/>
          <text x="334" y="139" class="rot">v9b</text>
          <polyline class="l l3" points="20,120 60,114 100,120 140,104 180,110 220,96 260,100 300,88 330,92"/>
          <text x="334" y="96" class="rot">v11</text>
        </svg>
        <span class="mono graf-nota">Simulação · cada linha tem nome e traço próprio</span>
      </div>`
  };

  /* ---------- capítulos ---------- */
  const capitulos = $("#capitulos");
  capitulos.innerHTML = S.projetos
    .map((p, i) => {
      const lado = i % 2 ? "inv" : "";
      const chips = p.plataformas.map((x) => `<li>${esc(x)}</li>`).join("");
      const nums = (p.numeros || []).map((n) => `<div><strong>${esc(n.valor)}</strong><span>${esc(n.rotulo)}</span></div>`).join("");
      const dest = p.destaques.map((d) => `<li class="revela"><b>${esc(d.t)}</b><span>${esc(d.d)}</span></li>`).join("");
      const quem = p.feitoPor.map((x) => `<span>${esc(x)}</span>`).join("");
      const link = p.link ? `<a class="btn btn-luz" href="${esc(p.link.url)}" target="_blank" rel="noopener">${esc(p.link.rotulo)} ↗</a>` : "";
      const cab = `
        <div class="cap-cab">
          <span class="cap-num mono">${dois(i + 1)} / ${dois(S.projetos.length)} · ${esc(p.categoria)}</span>
          <span class="cap-status mono"><i></i>${esc(p.status)} · v${esc(p.versao)}</span>
        </div>`;

      if (p.especial) {
        const yt = p.youtube;
        return `
        <section class="capitulo especial" id="${p.id}" style="--c:${p.cor};--c2:${p.cor2}">
          ${cab}
          <h2 class="cap-nome gigante">${esc(p.nome)}</h2>
          <p class="cap-tag">${esc(p.tagline)}</p>
          <div class="revela">${mocks[p.mock]()}</div>
          <div class="especial-grade">
            <div>
              <p class="cap-desc">${esc(p.descricao)}</p>
              <ul class="chips">${chips}</ul>
              <div class="cap-nums">${nums}</div>
              <div class="quem mono">Feito por ${quem}</div>
            </div>
            <ul class="destaques tres">${dest}</ul>
          </div>

          <div class="yt revela" id="youtube">
            <div class="yt-texto">
              <span class="yt-selo mono"><b>▶</b> Dentro do Lume</span>
              <h3>${esc(yt.titulo)}</h3>
              <p>${esc(yt.texto)}</p>
              <ol class="yt-passos" id="ytPassos">
                ${yt.passos.map((s, k) => `<li data-k="${k + 1}" class="${k === 0 ? "on" : ""}"><span class="mono">${k + 1}</span><div><b>${esc(s.t)}</b><small>${esc(s.d)}</small></div></li>`).join("")}
              </ol>
              <p class="yt-obs mono">${esc(yt.obs)}</p>
            </div>
            <div class="fone grande yt-fone passo-1" id="ytFone" aria-hidden="true">
              <div class="fone-tela">
                <div class="yt-s s1">
                  <div class="ys-topo"><b>Lume</b><span class="ys-nav"><i class="lupa"></i><i class="mais">•••</i></span></div>
                  <div class="ft-hero"><span class="mono selo">DESTAQUE</span><b>Neon Rio</b><u>▶ Assistir</u></div>
                  <div class="fila mini">${posterHTML(4, 2)}</div>
                  <div class="fila mini">${posterHTML(4, 5)}</div>
                </div>
                <div class="yt-s s2">
                  <i class="av grande-av"></i>
                  <b class="pf-nome">Seu perfil</b><small class="pf-sub mono">Perfil ativo</small>
                  <ul class="pf-lista">
                    <li>Continuar assistindo</li><li class="pf-yt"><em>▶</em>YouTube</li><li>Ajustes</li><li>Trocar perfil</li>
                  </ul>
                </div>
                <div class="yt-s s3">
                  <div class="yv-topo"><em>▶</em><b>YouTube</b><span class="mono">sem anúncios</span></div>
                  <div class="yv-video"><i>▶</i></div>
                  <div class="yv-lista"><span></span><span></span><span></span></div>
                </div>
                <span class="toque" aria-hidden="true"></span>
              </div>
            </div>
          </div>

          <div class="acesso revela">
            <span class="mono">Como conhecer</span>
            <p>${esc(p.acesso)}</p>
          </div>
        </section>`;
      }

      return `
      <section class="capitulo ${lado}" id="${p.id}" style="--c:${p.cor};--c2:${p.cor2 || p.cor}">
        <div class="cap-texto">
          ${cab}
          <h2 class="cap-nome">${esc(p.nome)}</h2>
          <p class="cap-tag">${esc(p.tagline)}</p>
          <p class="cap-desc">${esc(p.descricao)}</p>
          <ul class="chips">${chips}</ul>
          <div class="cap-nums">${nums}</div>
          <ul class="destaques">${dest}</ul>
          <div class="cap-pe">
            <div class="quem mono">Feito por ${quem}</div>
            ${link}
          </div>
        </div>
        <div class="cap-mock revela">${mocks[p.mock] ? mocks[p.mock]() : ""}</div>
      </section>`;
    })
    .join("");

  /* ---------- equipe ---------- */
  $("#time").innerHTML = S.equipe
    .map((m) => `<article class="membro revela"><span class="sigla">${esc(m.sigla)}</span><div><b>${esc(m.nome)}</b><span class="mono">${esc(m.papel)}</span><p>${esc(m.texto)}</p></div></article>`)
    .join("");

  /* ---------- diário ---------- */
  const corDe = Object.fromEntries(S.projetos.map((p) => [p.nome, p.cor]));
  $("#linha").innerHTML = S.diario
    .map((d) => `<li class="revela" style="--c:${corDe[d.projeto] || "#f3eee6"}"><span class="mono data">${esc(d.data)}</span><i></i><div><b>${esc(d.projeto)}</b><p>${esc(d.texto)}</p><span class="mono quem-d">${esc(d.quem)}</span></div></li>`)
    .join("");

  /* ---------- animação do passo a passo do YouTube ---------- */
  const fone = $("#ytFone");
  const passos = $("#ytPassos");
  if (fone && passos) {
    let k = 1, timer = null;
    const ir = (n) => {
      k = n;
      fone.className = fone.className.replace(/passo-\d/, "passo-" + k);
      passos.querySelectorAll("li").forEach((li) => li.classList.toggle("on", +li.dataset.k === k));
    };
    const rodar = () => { clearInterval(timer); timer = setInterval(() => ir((k % 3) + 1), 2800); };
    passos.addEventListener("click", (e) => { const li = e.target.closest("li"); if (li) { ir(+li.dataset.k); rodar(); } });
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) rodar();
  }

  /* ---------- revelar ao rolar ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visto"); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;
  document.querySelectorAll(".revela, .capitulo").forEach((el) => (io ? io.observe(el) : el.classList.add("visto")));

  /* ---------- nav muda ao rolar ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("solida", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

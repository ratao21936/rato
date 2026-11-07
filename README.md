# ! Rato

Meu portfólio. Uma página só, escrita à mão em HTML, CSS e JavaScript puros, sem framework e sem build.

Aqui mostro o que eu faço: bots de Discord em Python, projetos de hardware com ESP8266 e sites.

## O que tem na página

- **Intro de código:** um olho desenhado com caracteres num `<canvas>`, que dá zoom e abre o site. Dá para pular, e só aparece na primeira visita de cada sessão.
- **Trilha sonora:** gerada no navegador com a Web Audio API, sem nenhum arquivo de áudio. Tenta tocar sozinha ao abrir. Se o navegador bloquear, começa no primeiro clique ou toque. O botão "Som" silencia e a escolha fica salva.
- **Projetos com filtro:** cards com ilustrações em SVG animadas, filtráveis por Bots, IoT e Web.
- **Contador de visitas e curtidas:** salvos no Firebase Realtime Database.
- **Parallax no hero** com o mouse e revelação dos blocos ao rolar.
- **Responsivo**, com suporte a `safe-area` em iPhone.
- **Acessibilidade:** respeita `prefers-reduced-motion`, tem foco visível e `aria-pressed` nos botões de filtro e de reação.

## Tecnologias

| Parte | O que uso |
| --- | --- |
| Estrutura e estilo | HTML5 e CSS3 (grid, variáveis, `clip-path`/máscaras) |
| Interação | JavaScript puro |
| Intro | Canvas 2D |
| Áudio | Web Audio API |
| Dados | Firebase Realtime Database (SDK compat 9.23) |
| Fontes | Anton, DM Sans e Yellowtail (Google Fonts) |

## Estrutura

```
rato/
├── index.html   # o site inteiro: estilos, scripts e a foto em base64
└── README.md
```

Está tudo num arquivo só de propósito, para publicar em qualquer hospedagem estática sem configurar nada.

## Rodar localmente

Não precisa instalar nada. Clone e abra o arquivo:

```bash
git clone https://github.com/ratao21936/rato.git
cd rato
```

Abra o `index.html` no navegador. Se preferir um servidor local:

```bash
python3 -m http.server 8000
```

e acesse `http://localhost:8000`.

## Publicar

Funciona em qualquer hospedagem estática: GitHub Pages, Netlify, Vercel ou Cloudflare Pages. No GitHub Pages, ative em **Settings > Pages**, escolha a branch principal e a pasta raiz.

## Firebase

O contador e as curtidas usam três caminhos do Realtime Database: `contador`, `likes` e `deslikes`.

A chave do Firebase no código é pública por natureza, então quem protege os dados são as **regras do banco**. Deixe a leitura aberta e restrinja a escrita para aceitar apenas incrementos de 1, senão qualquer pessoa consegue inflar ou zerar os números pelo console.

O controle de "já votei" usa `localStorage`, então limpar o navegador permite votar de novo. Para um portfólio isso basta, só não leve os números muito a sério.

## Personalizar

- **Textos e projetos:** edite direto o HTML. Cada projeto é um `<a class="card">` dentro de `#grid`, e a categoria vem do atributo `data-c` (`bot`, `iot` ou `web`).
- **Cores:** ficam nas variáveis do `:root` no início do CSS (`--red`, `--bg`, `--fg`).
- **Foto:** está em base64 dentro da tag `<img>` do hero. Para trocar, gere um novo base64 ou aponte o `src` para um arquivo `.webp`.
- **Trilha:** o andamento, a progressão de acordes e o volume ficam no bloco `trilha sonora` no fim do arquivo (`S`, `PAD`, `ROOT` e o ganho do `master`).
- **Firebase:** troque o objeto `CFG` pelo seu projeto se for reaproveitar o site.

## Contato

- E-mail: mc.ratao21936@gmail.com
- GitHub: [@ratao21936](https://github.com/ratao21936)
- TikTok: [@rato21936](https://www.tiktok.com/@rato21936)
- Discord: [perfil](https://discord.com/users/1231281182948196430) · [Zen Community](https://discord.gg/NsQ4nv4wUG)

---

© 2026 ! Rato. Todos os direitos reservados.

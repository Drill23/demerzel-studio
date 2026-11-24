# Demerzel Studio — portfólio

Site: https://drill23.github.io/demerzel-studio/

Portfólio dos projetos do Adriano feitos junto com Claude, Codex, Gemini e Hermes
(Lume TV, Lume Music, Sopro, Video Game for All, Hermes, Fábrica de Vídeos,
O Arquivo Curioso, Estúdio de Curtas e Laboratório Quant).

## Como atualizar

Todo o conteúdo fica em **`js/dados.js`**. Os outros arquivos são só o desenho.

| Quero…                         | Faço isso em `js/dados.js`                                      |
|--------------------------------|-----------------------------------------------------------------|
| Avisar versão nova de um app   | mudar `versao` do projeto + uma linha nova no topo do `diario`  |
| Trocar a data do site          | `atualizadoEm`                                                  |
| Pôr um projeto novo            | copiar um bloco de `projetos` e ajustar (`mock` escolhe o desenho) |
| Mudar o passo a passo do YouTube | `projetos[0].youtube.passos`                                  |
| Mudar a equipe                 | `equipe`                                                        |

Depois é só `git commit` + `git push` na `main`. O GitHub Pages publica sozinho em ~1 minuto.

Pedido rápido para qualquer IA: *"atualiza o site Demerzel Studio (~/projetos/demerzel-studio):
Lume TV foi para a versão X, com Y de novo"* — ela só precisa mexer no `js/dados.js`.

## Testar no Mac

```bash
cd ~/projetos/demerzel-studio && python3 -m http.server 8765
```

Abrir http://localhost:8765

## Regras do conteúdo

- Nada de senha, link de painel, UDID, nome de pessoa da família ou link de download direto: o site é público.
- O Lume TV não mostra pôster de filme de verdade: os desenhos usam títulos inventados.
- No Laboratório, dizer sempre a verdade: é simulação, nenhuma estratégia provou lucro ainda.

Desenvolvido por A.A · Demerzel Studio

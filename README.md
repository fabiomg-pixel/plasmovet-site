# PlasmoVet — Gomes Lab

> Decoding immunity & metabolism in disease vectors.
> Decifrando imunidade e metabolismo em vetores de doenças.

Static website for the **Gomes Lab / PlasmoVet** group — Instituto de Biofísica Carlos Chagas Filho (IBCCF), Universidade Federal do Rio de Janeiro (UFRJ).

🌐 **Live:** _set after enabling GitHub Pages_
📍 **Lab:** IBCCF · UFRJ · Rio de Janeiro
✉️ **Contact:** [fabiomg@biof.ufrj.br](mailto:fabiomg@biof.ufrj.br)

---

## English

A bilingual (EN/PT) single-page-style website covering:

- **Research lines** — vector immunity, immunometabolism, host–pathogen–vector interactions
- **Team** — principal investigator, postdocs, students
- **Publications** — featured papers and full list
- **News** — grants, papers, lab milestones
- **Open positions** — postdoc, PhD and undergraduate (IC) opportunities

The site is built as plain HTML + CSS + a small `chrome.js` (language toggle, navigation chrome). No build step, no framework — just open `index.html`.

### Local preview

Any static server works. From the repo root:

```bash
# Python 3
python -m http.server 8000

# or Node (npx)
npx --yes http-server -p 8000 -c-1
```

Then open <http://localhost:8000>.

### Editing copy

All user-facing text lives directly inside the HTML files using a tiny i18n pattern:

```html
<h1 data-i18n-en="English string" data-i18n-pt="Texto em português">English string</h1>
```

For strings that contain HTML (e.g. `<em>`), add the `data-i18n-html` attribute.

The language toggle in the top-right swaps every translated node at runtime — no rebuild needed.

### File layout

```
index.html          ← landing page (hero, research, news, team, contact)
research.html       ← full research lines
team.html           ← lab members
publications.html   ← publication list
news.html           ← news archive
style.css           ← shared styles
chrome.js           ← language toggle + nav helpers
assets/             ← logo, hero illustration, photos
```

---

## Português

Site bilíngue (EN/PT) do grupo **Gomes Lab / PlasmoVet** no IBCCF/UFRJ. Cobre linhas de pesquisa, equipe, publicações, notícias e oportunidades abertas (pós-doc, doutorado, iniciação científica).

Construído em HTML + CSS puros, sem build step. Para visualizar localmente, basta abrir `index.html` ou rodar um servidor estático (ver comandos acima).

Para editar textos, use os atributos `data-i18n-en` e `data-i18n-pt` diretamente nos elementos HTML.

---

## Deployment — GitHub Pages

This repo is configured for **GitHub Pages** deployment from the `main` branch (root). Once you make the repo public — or enable Pages on a private repo with a paid plan — the site will be served automatically.

To enable:

1. Repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` · Folder: `/ (root)` · **Save**

A custom domain can be added by editing the `CNAME` file (currently empty/unused) and configuring DNS.

---

## License

Site code: [MIT](./LICENSE).
Lab content (text, photos, figures): © Gomes Lab / IBCCF-UFRJ — all rights reserved unless otherwise noted.

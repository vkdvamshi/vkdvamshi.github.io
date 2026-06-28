# vkdvamshi.github.io

Personal portfolio website for **Vamshi Krishna Damidi** — Data & AI Engineer / Enterprise Cloud Architect.

🔗 **Live:** https://vkdvamshi.github.io

## Stack
Hand-built static site — zero dependencies, zero build step.
- `index.html` — content & structure
- `styles.css` — design system (dark/light themes, responsive)
- `script.js` — typing effect, scroll reveal, theme toggle, project filters, stat counters
- `assets/` — résumé and downloads

## Deploy (GitHub Pages)
```bash
git init && git add . && git commit -m "Portfolio site"
git branch -M main
git remote add origin git@github.com:vkdvamshi/vkdvamshi.github.io.git
git push -u origin main
```
Then **Settings → Pages → Source: `main` / root**. Live in ~1 minute.

## Edit content
All content is in `index.html` — search for the section comments (`<!-- Skills -->`, `<!-- Experience -->`, etc.).
To add a project, copy a `.card` block in the `#work` section and set its `data-cat` to `ai`, `cloud`, or `enterprise`.

See [`PROFILE-PLAN.md`](PROFILE-PLAN.md) for the full GitHub profile & repo-cleanup strategy.

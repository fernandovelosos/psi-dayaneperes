# Site institucional — Dayane Peres (@psi.dayaneperes)

Site estático (one-page) em HTML/CSS/JS para GitHub Pages com domínio próprio.

## Publicação no GitHub Pages
1. Vá em **Settings → Pages**
2. Em **Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
3. Em **Custom domain**, informe: `psidayaneperes.com.br`
4. Quando disponível, habilite **Enforce HTTPS**

## DNS (domínio + www)
Crie os registros:

### Raiz (psidayaneperes.com.br)
A `@` → `185.199.108.153`  
A `@` → `185.199.109.153`  
A `@` → `185.199.110.153`  
A `@` → `185.199.111.153`

### www
CNAME `www` → `fernandovelosos.github.io`

## Estrutura
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `CNAME`

## Ajustes de conteúdo
Edite o `index.html` e atualize textos conforme necessário (sobre, abordagem, FAQ, etc.).

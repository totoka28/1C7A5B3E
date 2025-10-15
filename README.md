# 🧭 3 oldalas Next.js App Router projekt (TSX)

Ez egy egyszerű **Next.js 13+** projekt, amely bemutatja, hogyan lehet három oldalt összekapcsolni **App Router** és **TypeScript** használatával.

## 📂 Mappaszerkezet
```
app/
 ├─ layout.tsx         # Alap layout az egész oldalhoz
 ├─ page.tsx           # Főoldal
 ├─ page1/
 │   └─ page.tsx       # 1. oldal
 ├─ page2/
 │   └─ page.tsx       # 2. oldal
 └─ page3/
     └─ page.tsx       # 3. oldal
styles/
 └─ globals.css        # Tailwind globális stílusok
```

## 🚀 Telepítés és futtatás

1. Klónozd a projektet vagy másold a fájlokat.
2. Telepítsd a függőségeket:
   ```bash
   npm install
   ```
3. (Ha szükséges) Add hozzá a TypeScript csomagokat:
   ```bash
   npm install --save-dev typescript @types/react @types/node
   ```
4. Futtasd a fejlesztői szervert:
   ```bash
   npm run dev
   ```
5. Nyisd meg a böngészőt: [http://localhost:3000](http://localhost:3000)

## 🌐 Elérhető oldalak
- `/` — Főoldal  
- `/page1` — Első oldal  
- `/page2` — Második oldal  
- `/page3` — Harmadik oldal

## 🧰 Technológiák
- [Next.js 13+ (App Router)](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

✍️ *Ez egy minimalista példa — tökéletes alap saját projektekhez, navigációhoz vagy UI prototípusokhoz.*

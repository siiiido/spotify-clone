## Next JS EsLint, Prettier Setting

### 1. Install

```
npx install-peerdeps --dev eslint-config-airbnb

npm install -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser

npx install-peerdeps --dev eslint-config-airbnb-base

npm install -D prettier eslint-plugin-prettier eslint-config-prettier
```

### 2. Create Files

- .prettierrc
- tsconfig.eslint.json

### 3. File > preferences > Settings

- Editor: Format On Save
- Editor: Default Formatter > Prettier - Code formatter

---

### Reference

- https://velog.io/@xmun74/Next.js-TS%EC%97%90%EC%84%9C-ESLint-Prettier-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0#eslintrcjson-%EC%84%A4%EC%A0%95
- https://bobbyhadz.com/blog/typescript-parsing-error-cannot-read-file

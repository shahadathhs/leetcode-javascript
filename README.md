# LeetCode JavaScript 🚀

> A curated, JavaScript-only collection of LeetCode problems with **solutions**, **tests**, and **concept-based tags** to supercharge your learning.

---

## 📖 Repository Summary

This repo helps you:

* Tackle LeetCode problems in **vanilla JavaScript/TypeScript**
* Learn key concepts via **tags** (e.g., Prototype Chain, Recursion)
* Verify your solutions instantly with **Jest tests**
* Run a single problem or the entire suite
* Integrate into CI (GitHub Actions)

---

## ⚡ Usage

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run all tests

```bash
pnpm test
```

### 3. Run tests for a single problem

```bash
pnpm test:problem 2618
```

### 4. Development CLI

```bash
pnpm dev
```

This starts `src/main.ts`, which accepts a problem number:

```bash
pnpm dev 2618
```

---

## 🤝 Contributing

1. **Add a new problem**:

   * Create `src/app/<number>-<kebab-title>.ts`
   * Include `// * Concepts: ...` tags at the top
2. **Add tests**:

   * Create `src/__tests__/<number>-<kebab-title>.test.ts`
   * Follow the `describe.each` format for both implementations
3. **Verify everything**:

   ```bash
   pnpm lint && pnpm format && pnpm test
   ```
4. **Open a PR** and we'll review!

Thanks for helping build this **JavaScript LeetCode powerhouse**!

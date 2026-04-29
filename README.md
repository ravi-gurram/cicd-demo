# 🚀 CI/CD Pipeline Demo

> End-to-end CI/CD pipeline from scratch to deployment — built by [@ravi-gurram](https://github.com/ravi-gurram)

[![CI/CD Pipeline](https://github.com/ravi-gurram/cicd-demo/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/ravi-gurram/cicd-demo/actions/workflows/ci-cd.yml)

## 📋 Overview

This project demonstrates a production-grade CI/CD pipeline using **GitHub Actions**. Every push to `main` automatically runs through 5 stages:

```
Code Push → 🔍 Lint → 🧪 Test → 🏗️ Build → 🚀 Deploy → 📣 Notify
```

## 🏗️ Pipeline Architecture

| Stage | Tool | Trigger | What it does |
|-------|------|---------|-------------|
| **Lint** | ESLint 8 | Every push/PR | Checks code style and catches bugs early |
| **Test** | Jest + Supertest | After lint | Runs 6 unit tests across Node 18 & 20 matrix |
| **Build** | Node.js | After tests pass | Validates app, creates deployment artifact |
| **Deploy** | GitHub Pages | `main` branch only | Publishes the dashboard live |
| **Notify** | GitHub Step Summary | Always (even on failure) | Posts pipeline result table |

## 🛠️ Tech Stack

- **Runtime**: Node.js 20 (LTS)
- **Framework**: Express 4
- **Testing**: Jest 29 + Supertest 6
- **Linting**: ESLint 8
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## 📦 Project Structure

```
cicd-demo/
├── app.js                          # Express REST API
├── app.test.js                     # Jest unit tests (6 tests)
├── package.json                    # Dependencies & scripts
├── .eslintrc.json                  # ESLint config
├── public/
│   └── index.html                  # Pipeline dashboard (deployed to GitHub Pages)
└── .github/
    └── workflows/
        └── ci-cd.yml               # Full CI/CD pipeline definition
```

## 🚦 API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Welcome + endpoint list |
| GET | `/health` | Health check (status, version, timestamp) |
| GET | `/greet/:name` | Greet a user by name |
| POST | `/add` | Add two numbers (`{ a, b }` → `{ result }`) |

## 🏃 Run Locally

```bash
# Clone the repo
git clone https://github.com/ravi-gurram/cicd-demo.git
cd cicd-demo

# Install dependencies
npm install

# Run the server
npm start
# → Server at http://localhost:3000

# Run tests
npm test

# Run lint
npm run lint
```

## 🔄 How the Pipeline Works

1. **You push code** → GitHub Actions triggers automatically
2. **Lint stage** — ESLint scans all `.js` files for style issues
3. **Test stage** — Jest runs all 6 tests on Node 18 AND Node 20 (matrix build)
4. **Build stage** — App is validated, a deployment artifact is packaged and uploaded
5. **Deploy stage** — On `main` only: the `public/` dashboard is deployed to GitHub Pages
6. **Notify stage** — A rich summary table appears in the Actions tab showing all stage results

> 💡 Pull Requests run Lint + Test only (no deploy) for fast feedback.

## 📊 Live Dashboard

Once GitHub Pages is enabled, the pipeline dashboard is live at:
```
https://ravi-gurram.github.io/cicd-demo/
```

---

*Built as a DevOps learning project — demonstrating CI/CD fundamentals with GitHub Actions.*

# Karen Mnatsakanov (Kramarich) | TypeScript Fullstack / Frontend Developer 🌐

Welcome to my portfolio repository! 

I am a **TypeScript Fullstack Developer** with a strong focus on **Frontend engineering (React & Next.js)**. My passion lies in building interactive user interfaces, implementing robust state management, and crafting secure full-stack web applications.

---

## 🛠️ Core Technology Stack

*   **Primary Languages**: TypeScript, JavaScript (ES6+).
*   **Frontend**: React, Next.js (App & Pages Router), Tailwind CSS, Framer Motion, Vite.
*   **Backend & Databases**: Node.js, Bun, Hono, Express.js, PostgreSQL, Prisma ORM, Drizzle ORM, Upstash Redis.
*   **Desktop Shell**: Electron (for wrapping React applications).

---

## 📂 Project Directory

Here is a categorized map of my main TypeScript/React work, followed by sandbox experiments and academic coursework.

### 🛡️ 1. Core Stack: Doxynix Developer & Security Suite
My primary personal project ecosystem focused on codebase analysis, automated documentation, and security anomaly detection.

*   **[doxynix](./content/projects/doxynix.mdx)** — A codebase dependency visualizer and MDX documentation generator for GitHub organizations. 
    * *React, Next.js, PostgreSQL, Prisma.*
*   **[doxynix-siem](./content/projects/doxynix-siem.mdx)** — An application-level SIEM dashboard and DLP secret scanner monitoring structured production logs.
    * *Bun Workspaces, Hono, Vite, React 19, Drizzle ORM, Tailwind v4.*
*   **[doxynix-cli](./content/projects/doxynix-cli.mdx)** — A lightweight command-line interface to audit local directory structures and scan for sensitive credentials before push events.
    * *TypeScript, Bun, Commander.js.*
*   **[doxynix-action](./content/projects/doxynix-action.mdx)** — A CI/CD GitHub Action acting as a security gatekeeper for incoming Pull Requests.
    * *Node.js, GitHub REST/Webhooks APIs.*

### 🦈 2. Core Stack: SharkFlow & Quasar (React & JS Applications)
Web and desktop applications built to explore client-side state management, performance, and API integration.

*   **[sharkflow](./content/projects/sharkflow.mdx)** — An interactive React Kanban board client styled with fluid, responsive Tailwind CSS layouts.
*   **[sharkflow-api](./content/projects/sharkflow-api.mdx)** — An Express.js backend engine using Redis Pub/Sub for low-latency client synchronizations.
    * *Express.js, Prisma, PostgreSQL, Redis, WebSockets.*
*   **[quasar](./content/projects/quasar.mdx)** — A desktop web browser UI built with React and Tailwind CSS, packaged inside an Electron shell. Highlights tab-pooling for RAM optimization.
    * *Electron, React, Tailwind CSS, Canvas API, IndexedDB.*

### 🎓 3. Academic Coursework & Sandbox Experiments (Non-Core Stack)
Projects created during university courses, group assignments, or experimental explorations of other languages and environments.

*   **[sharkflow-mobile](./content/projects/sharkflow-mobile.mdx)** — A native Android companion app for SharkFlow developed as part of a multi-platform group project.
    * *Kotlin, Android SDK (MVVM, Coroutines).*
*   **[car-shooter](./content/projects/car-shooter.mdx)** — A 2D desktop arcade shooter built for coursework, exploring WPF XAML and spatial grid partitioning for collision optimization.
    * *C#, WPF, MVVM.*
*   **[project-cars](./content/projects/project-cars.mdx)** — An academic driving simulator sandbox exploring behavioral cloning data logging.
    * *Python, Pygame, TensorFlow/Keras.*
*   **[armor-echo](./content/projects/armor-echo.mdx)** — An exploratory 3D tank combat prototype built to learn Unity's physics and scripting engine.
    * *Unity 3D, C#.*

---

## ⚡ Portfolio Infrastructure

The website hosting this portfolio is built to showcase my core web development skills:
*   **Dynamic MDX Compilation**: Uses `Contentlayer` to compile static Markdown files into typed React views.
*   **Edge Telemetry**: Utilizes Next.js Edge Routes and `Upstash Redis` to track and display project pageviews securely via SHA-256 IP hashing.
*   **Live WakaTime Status**: A secure server-side API route that safely fetches my active VS Code typing heartbeats to show when I am online.

---
*Connect with me on [Telegram](https://t.me/Kramarich0) or drop me an email at [karen.avakov2@gmail.com](mailto:karen.avakov2@gmail.com)*
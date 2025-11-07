# Electron React Boilerplate

A modern boilerplate for building **desktop apps with Electron, React 19, and Vite**.  

This setup provides a fast development workflow, hot reload in dev, and easy packaging for production on macOS, Windows, and Linux.

---

## Features

- ⚡ **Fast development** with Vite and React 19
- 🔌 **Electron integration** for cross-platform desktop apps
- 🛠 **DevTools in dev mode**
- 📦 **Production builds** with Electron Builder (DMG, NSIS, AppImage)
- 🖥 **Customizable preload scripts**
- 🔒 **Context-isolated Electron window** for security

---

## Prerequisites

- Node.js >= 20
- npm >= 10
- macOS / Windows / Linux

---

## Installation

```bash
git clone <your-repo-url>
cd electron-react-boilerplate
npm install

Development

Start the Vite dev server and Electron app simultaneously:

npm run dev


The app will open an Electron window.

DevTools are automatically enabled in dev mode.

Hot reload works for both React and Electron changes.

Production Build

Build the React app:

npm run build


Package the Electron app:

npm run package


Output (macOS DMG example): dist-electron/mac-arm64/ElectronReactBoilerplate-1.0.0-arm64.dmg

Project Structure
electron-react-boilerplate/
├─ electron/          # Electron main & preload scripts
├─ src/               # React source code
├─ dist/              # React production build (generated)
├─ dist-electron/     # Electron packaged app output
├─ package.json       # Project configuration
└─ vite.config.js     # Vite configuration

Customization

App icon: Replace the default Electron icon in electron/assets/icon.icns

Preload scripts: Modify electron/preload.cjs

Vite base path: Adjust base: './' in vite.config.js if needed

Notes

Use app.getAppPath() for loading production files inside Electron.

base: './' in Vite ensures relative paths for Electron production builds.

Electron Builder handles cross-platform packaging automatically.

License

Blessed Jeberson J Q

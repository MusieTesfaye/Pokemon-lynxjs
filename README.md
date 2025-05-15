---

# 🧬 Pokémon Browser

A modern, futuristic Pokémon browser app built with [LynxJS](https://lynxjs.dev), styled with custom CSS, and powered by the [PokeAPI](https://pokeapi.co/). It allows users to browse Pokémon, view detailed information, switch between sprites, and visualize stats in animated bars.

---

## 🚀 Features

* 🔍 **Pokémon Listing** with navigation to detailed screens
* 🖼️ **Image Carousel** with front, back, shiny, and official artwork
* 🧬 **Types & Abilities** displayed with chips and vibrant colors
* 📊 **Animated Stat Bars** with color-coded values
* 🎨 **Futuristic UI** built with pure CSS
* ⚡ **Fast and Lightweight** with LynxJS

---

## 🛠 Tech Stack

| Layer    | Tool                                  |
| -------- | ------------------------------------- |
| Frontend | [LynxJS](https://lynxjs.dev)          |
| Styling  | CSS (custom)                          |
| API      | [PokeAPI](https://pokeapi.co)         |
| Language | TypeScript (optional but recommended) |

---

## 📦 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/pokemon-browser.git
   cd pokemon-browser
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm start
   ```

> Make sure LynxJS is properly set up in your development environment. If not, follow the [official guide](https://lynxjs.dev/docs/getting-started).

---

## 🗂️ Project Structure

```
src/
├── api/
│   └── pokemon.ts        # API logic using fetch from PokeAPI
├── components/
│   └── DetailsScreen.tsx # Pokémon detail view
├── styles/
│   └── details.css       # Custom CSS for futuristic UI
├── App.tsx               # App router & layout
└── main.tsx              # LynxJS entry point
```

---

## 🌐 API Reference

All data is fetched from the free [PokeAPI](https://pokeapi.co). No API key required.

* `GET /pokemon?limit=...` → list of Pokémon
* `GET /pokemon/:id` → details for a specific Pokémon (sprites, stats, types, etc.)

---

## ✨ Screenshots

> Feel free to add actual screenshots once the UI is styled.

<img src="screenshots/details-screen.png" width="400" alt="Details Screen Preview" />

---

## 🧪 To Do

* [ ] Add search or filtering
* [ ] Offline support
* [ ] Responsive styling for mobile
* [ ] Dark/light theme toggle

---

## 📄 License

MIT License. Feel free to modify, reuse, or distribute as needed.

---

## 🙌 Acknowledgements

* [PokeAPI](https://pokeapi.co)
* [LynxJS](https://lynxjs.dev)
* All Pokémon data © Nintendo/Game Freak

---
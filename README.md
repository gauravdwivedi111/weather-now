# Weather Now — Glassmorphic React Weather App

Weather Now is a modern, responsive single-page web application built with React and Vite that provides real-time weather updates. It features a sleek glassmorphic UI design, dynamic weather animations, and comprehensive weather parameters.

---

## Key Features

*   **Real-Time Data**: Fetches up-to-date weather data including temperature, humidity, wind speed, and atmospheric conditions from the OpenWeatherMap API.
*   **Dynamic Visuals**: Animated backgrounds and dynamic weather icons that adjust automatically based on the current weather status (clear, rainy, snowy, cloudy).
*   **Glassmorphic UI**: High-fidelity interface designed with modern frosted-glass CSS styling, fluid hover states, and responsive grids down to mobile screen sizes.
*   **Friendly Alerts**: Smart, contextual tips (e.g. suggesting an umbrella for rain or sunscreen for high UV indexes) built directly into the dashboard.

---

## Tech Stack

*   **Frontend Library**: React 18
*   **Build Tool**: Vite (providing ultra-fast Hot Module Replacement)
*   **Styling**: Custom CSS3 variables, flexbox, grid, and backdrop-filter modules
*   **API Integration**: Axios & OpenWeatherMap REST API

---

## Project Structure

```text
weather-now/
├── public/                      # Static assets (favicons, svgs)
├── src/
│   ├── assets/                  # Weather icons and background SVGs
│   ├── components/              # SearchBar, WeatherCard, ForecastCard
│   ├── App.jsx                  # Primary layout and API state manager
│   ├── index.css                # Global styles and tailwind directives
│   └── main.jsx                 # React DOM bootstrapper
├── package.json                 # NPM scripts & package dependencies
├── vite.config.js               # Vite configurations
└── README.md                    # Root Documentation (this file)
```

---

## Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)

### Running Locally
1.  Navigate to the project directory:
    ```bash
    cd "Weather Now/weather-now"
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure environment variables:
    *   Create a `.env` file in the root folder:
        ```env
        VITE_WEATHER_API_KEY=your_openweathermap_api_key
        ```
4.  Start development server:
    ```bash
    npm run dev
    ```
    *Web app available at:* `http://localhost:5173`

---

## Author
*   **Gaurav Dwivedi** - [GitHub Profile](https://github.com/gauravdwivedi111)

---

## License
This project is licensed under the MIT License - see the LICENSE file for details.

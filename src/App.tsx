import "./App.css"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Stats from "./components/Stats"
import Demo from "./components/Demo"

function App() {
    return (
        <div
            id="top"
            className="font-quicksand from-siege-50 to-siege-200 text-siege-900 dark:from-siege-800 dark:to-siege-950 dark:text-siege-100 bg-linear-to-br/oklch transition delay-150 duration-300 ease-in-out dark:bg-linear-to-br/oklch"
        >
            <Navigation />
            <Hero />
            <Stats />
            <About />
            <Experience />
            <Demo />
            <Contact />
        </div>
    )
}

export default App

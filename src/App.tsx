import "./App.css"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

function App() {
    return (
        <div
            id="top"
            className="font-quicksand bg-neutral-300 pt-6 text-neutral-800 transition delay-150 duration-300 ease-in-out dark:bg-neutral-900 dark:text-neutral-200"
        >
            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Contact />
        </div>
    )
}

export default App

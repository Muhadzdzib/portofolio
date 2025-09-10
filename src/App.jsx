import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header />
      <Home />
      <About />
      <Projects />

      <Contact />
    </div>
  );
}

import  Navbar  from "./components/navbar/Navbar";
import styles from "./App.module.css";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import  Projects  from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;


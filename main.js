import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import heroanimation from "./components/heroanimation.js";

const app = document.getElementById("app");

app.append(Navbar(), Hero(), About(), Projects(), Contact());

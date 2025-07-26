export default function Navbar() {
  const nav = document.createElement("nav");
  nav.className = "navbar";
  nav.innerHTML = `
    <div class="top-bar">
      <div class="logo">KESHAV MEENA</div>
      <div class="nav-links">
        <div><a class = "topel" href="#hero">Home</a></div>
        <div><a class = "topel" href="#about">About</a></div>
        <div><a class = "topel" href="#projects">Projects</a></div>
        <div><a class = "topel" href="#contact">Contact</a></div>
      </div>
    </div>
  `;
  return nav;
}

export default function Hero() {
  const section = document.createElement("section");
  section.id = "hero";
  section.className = "hero animated";
  section.innerHTML = `
  <div id="particles-js"></div>
  <div class="hero">
  <div class="lefthero">
    <h1>Hi, I'm Keshav </h1>
    <p>Aspiring Software Engineer | DSA & Problem Solving Enthusiast |Full-Stack Development | Passionate learner @ NIT Kurukshetra 🚀</p>
  </div>
  <div class="righthero">
    <img src="image.png" alt="Keshav Meena">
  </div>
</div>
  `;
  return section;
}

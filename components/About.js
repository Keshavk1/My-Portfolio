export default function About() {
  const section = document.createElement("section");
  section.id = "about";
  section.className = "about animated";
  section.innerHTML = `
    <section class="about-section" id="about">
  <h2>About Me</h2>
  <p><strong>Hi, I’m Keshav Meena!</strong> A passionate Web Developer and DSA Enthusiast based in India. I love crafting interactive, modern websites and turning complex problems into clean, efficient code.</p>

  <p>With a strong foundation in Data Structures & Algorithms and a growing expertise in Full Stack Web Development, I specialize in HTML, CSS, JavaScript, and React. My journey began in college when I built my first dynamic site, and I’ve been hooked ever since!</p>

  <div class="skills">
    <div><strong>Development</strong>: HTML5, CSS3, JavaScript, React.js, Tailwind</div>
    <div><strong>Programming</strong>: C++, LeetCode (350+), Algorithms</div>
    <div><strong>Tools</strong>: Git & GitHub, VS Code, NPM</div>
    <div><strong>Soft Skills</strong>: Problem Solving, Learning Agility</div>
    <div><strong>Other</strong>: UI Design (basic), Hackathons, Portfolio Building</div>
  </div>

  <p>When I’m not coding, I enjoy exploring AI, building side projects, and learning about startups and investing. I believe in <strong>clean code</strong>, <strong>consistency</strong>, and <strong>growing through sharing knowledge</strong>.</p>

  <div class="cta">
    Let’s build something cool together!  
    <a href="mailto:124103051@nitkkr.ac.in">Say Hello 👋</a>
  </div>
</section>

  `;
  return section;
}

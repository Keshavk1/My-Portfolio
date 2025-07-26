export default function Contact() {
  const section = document.createElement("section");
  section.id = "contact";
  section.className = "contact animated";
  section.innerHTML = `
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  `;
  return section;
}

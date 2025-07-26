export default function heroanimation(){
  const herosection = document.createElement("herosection");
  herosection.id = "heroanimation"
  herosection.innerHTML = `<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script>
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80 },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3
      }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" }
      }
    },
    "retina_detect": true
  });
</script>`;
}
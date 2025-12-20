const clockField = document.getElementById("clockField");

// total clocks
const TOTAL_CLOCKS = 50;

// unique clock images
const UNIQUE_CLOCKS = 9;

// 50 deterministic links
const CLOCK_LINKS = [
  "link01.html", "link02.html", "link03.html", "link04.html", "link05.html",
  "link06.html", "link07.html", "link08.html", "link09.html", "link10.html",
  "link11.html", "link12.html", "link13.html", "link14.html", "link15.html",
  "link16.html", "link17.html", "link18.html", "link19.html", "link20.html",
  "link21.html", "link22.html", "link23.html", "link24.html", "link25.html",
  "link26.html", "link27.html", "link28.html", "link29.html", "link30.html",
  "link31.html", "link32.html", "link33.html", "link34.html", "link35.html",
  "link36.html", "link37.html", "link38.html", "link39.html", "link40.html",
  "link41.html", "link42.html", "link43.html", "link44.html", "link45.html",
  "link46.html", "link47.html", "link48.html", "link49.html", "link50.html"
];

for (let i = 0; i < TOTAL_CLOCKS; i++) {
  const clockIndex = (i % UNIQUE_CLOCKS) + 1;
  const id = String(clockIndex).padStart(2, "0");

  const link = document.createElement("a");
  link.href = CLOCK_LINKS[i]; // deterministic link

  const img = document.createElement("img");
  img.src = `images/clocks/clock${id}.png`;
  img.className = "clock";

  // RANDOM POSITION (biased toward center)
  const x = 50 + (Math.random() - 0.5) * 40; // ~30%-70%
  const y = 50 + (Math.random() - 0.5) * 40;

  // RANDOM ROTATION
  const rot = (Math.random() * 40) - 20;

  // RANDOM FLOAT OFFSET
  const dx = (Math.random() * 12) - 6;
  const dy = (Math.random() * 12) - 6;

  // RANDOM SIZE VARIATION
  const size = 70 + Math.random() * 110;

  // APPLY STYLES
  img.style.left = `${x}%`;
  img.style.top = `${y}%`;
  img.style.width = `${size}px`;

  img.style.setProperty("--rot", `${rot}deg`);
  img.style.setProperty("--dx", `${dx}px`);
  img.style.setProperty("--dy", `${dy}px`);

  // CLICK: smooth fade before redirect
  link.addEventListener("click", e => {
    e.preventDefault();
    document.body.classList.add("fading"); // assumes .fading CSS exists
    setTimeout(() => window.location.href = link.href, 500);
  });

  link.appendChild(img);
  clockField.appendChild(link);
}


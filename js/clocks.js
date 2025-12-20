const clockField = document.getElementById("clockField");

// how many clocks total
const TOTAL_CLOCKS = 20;

// how many unique images you have
const UNIQUE_CLOCKS = 9;

for (let i = 0; i < TOTAL_CLOCKS; i++) {
  const clockIndex = (i % UNIQUE_CLOCKS) + 1;
  const id = String(clockIndex).padStart(2, "0");

  const link = document.createElement("a");
  link.href = "#"; // replace later

  const img = document.createElement("img");
  img.src = `images/clocks/clock${id}.png`;
  img.className = "clock";

  // RANDOM POSITION (percent-based = responsive)
  const x = Math.random() * 90;
  const y = Math.random() * 90;

  // RANDOM ROTATION
  const rot = (Math.random() * 40) - 20;

  // RANDOM FLOAT OFFSET
  const dx = (Math.random() * 12) - 6;
  const dy = (Math.random() * 12) - 6;

  // RANDOM SIZE VARIATION
const size = 70 + Math.random() * 110;


  img.style.left = `${x}%`;
  img.style.top = `${y}%`;
  img.style.width = `${size}px`;

  img.style.setProperty("--rot", `${rot}deg`);
  img.style.setProperty("--dx", `${dx}px`);
  img.style.setProperty("--dy", `${dy}px`);

  link.appendChild(img);
  clockField.appendChild(link);
}

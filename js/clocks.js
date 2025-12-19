const clockField = document.getElementById("clockField");
const CLOCK_COUNT = 9;

for (let i = 1; i <= CLOCK_COUNT; i++) {
  const id = String(i).padStart(2, "0");
  const hasPendulum = i === 1;

  const link = document.createElement("a");
  link.href = "#";

  const clock = document.createElement("div");
  clock.className = `clock-unit ${hasPendulum ? "has-pendulum" : ""}`;

  clock.innerHTML = `
    <img src="images/clocks/clock${id}_face.png" class="clock-face">
    <img src="images/clocks/clock${id}_hour.png" class="hand hour">
    <img src="images/clocks/clock${id}_minute.png" class="hand minute">
    ${hasPendulum ? `<img src="images/clocks/clock${id}_pendulum.png" class="pendulum">` : ""}
  `;

  link.appendChild(clock);
  clockField.appendChild(link);
}

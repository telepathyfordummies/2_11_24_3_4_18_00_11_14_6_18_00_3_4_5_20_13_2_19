
const clockField = document.getElementById("clockField");

// total clocks
const TOTAL_CLOCKS = 50;

// unique clock images
const UNIQUE_CLOCKS = 9;

// 50 deterministic links
const CLOCK_LINKS = [
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC2790864/", "https://academic.oup.com/journals/pages/the-philosophy-of-time", "https://archiveofourown.org/works/74628486/chapters/198688036", "https://archiveofourown.org/works/74628486/chapters/195543276", "https://www.jstor.org/stable/2011314?seq=1",
  "https://telepathyfordummies.github.io/22_8_18_7/", "https://pmc.ncbi.nlm.nih.gov/articles/PMC4142010/", "https://www.tandfonline.com/doi/full/10.1080/00131857.2025.2463420", "https://www.jacr.org/article/S1546-1440(08)00581-4/fulltext", "https://crl.acrl.org/index.php/crl/article/view/24436/32278",
  "https://positivepsychology.com/psychology-of-happiness/", "https://www.fourmilab.ch/etexts/www/wells/timemach/timemach.pdf", "https://entropiq.com/quantum-locking/", "https://brill.com/display/serial/STIM?language=en&srsltid=AfmBOormfAKDlSYrtkk8rDYtgJMj678Fiksk1JaGsqyn4ZJ13RxT2Dx5", "https://www.sciencedirect.com/science/article/abs/pii/S0740818805001192",
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC7904679/", "https://pmc.ncbi.nlm.nih.gov/articles/PMC7584645/", "https://www.ibiblio.org/ebooks/Dickens/Carol/Dickens_Carol.pdf", "https://www.scientificamerican.com/article/how-do-they-do-that-a-closer-look-at-quantum-magnetic-levitation/", "https://archiveofourown.org/works/74628486/chapters/198325776",
  "https://actionforhappiness.org/how-to-be-happy", "https://www.ijsrp.org/research-paper-0914/ijsrp-p3334.pdf", "https://digitalcommons.morris.umn.edu/cgi/viewcontent.cgi?article=1000&context=honors", "https://therustyquill.wordpress.com/wp-content/uploads/2013/09/into-the-wild.pdf", "https://archiveofourown.org/works/74628486/chapters/198221226",
  "https://www.healthline.com/health/how-to-be-happy", "https://www.sciencedirect.com/science/article/abs/pii/S1355219804000760", "https://academic.oup.com/iwc/article/33/3/250/6378804", "https://scouting4boysorg.wordpress.com/wp-content/uploads/2017/12/boy-scout-handbook-1967-processed.pdf", "https://archiveofourown.org/works/74628486/chapters/198156906",
  "https://www.space.com/grandfather-paradox.html", "https://royalsocietypublishing.org/rsta/article/376/2123/20170316/115640/The-quantum-theory-of-time-the-block-universe-and", "https://www.sciencedirect.com/science/article/abs/pii/S105348222030036X", "https://www.nrb.net.in/Books/The%20Encyclopedia%20O%20fNatural%20Medicine.pdf", "https://archiveofourown.org/works/74628486/chapters/197561481",
  "https://www.epa.gov/sites/default/files/2017-09/documents/emergency_disinfection_of_drinking_water_sept2017.pdf", "https://www.scientificamerican.com/article/does-time-work-differently-in-the-quantum-realm/", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10628673/", "https://www.ohsu.edu/sites/default/files/2018-09/Non-Toxic-Plants.pdf", "https://archiveofourown.org/works/74628486/chapters/197433296",
  "http://pub.deadnet.se/Books_on_Tech_Survival_woodworking_foraging_etc/urbansurvivalguide.pdf", "https://www.apa.org/pubs/journals/releases/xge-xge0000303.pdf", "https://pmc.ncbi.nlm.nih.gov/articles/PMC3008658/", "https://ag.purdue.edu/btny/purdueweedscience/wp-content/uploads/2021/03/Common-Poisonous-Plants.pdf", "https://archiveofourown.org/works/74628486/chapters/196766656",
  "https://en.wikipedia.org/wiki/Time_travel_claims_and_urban_legends", "https://archiveofourown.org/works/74628486/chapters/195769446", "https://pmc.ncbi.nlm.nih.gov/articles/PMC2685815/", "https://academic.oup.com/book/6351/chapter-abstract/150073267?redirectedFrom=fulltext", "https://archiveofourown.org/works/74628486/chapters/197028491"
];

// store used positions to avoid overlap
const positions = [];

// generate a random position over full page, with optional bias for big clocks
function getPosition(size) {
  const maxAttempts = 50;
  let attempt = 0;
  let x, y, tooClose;

  const bias = size > 120 ? 0.2 : 0; // 20% bias for big clocks toward center

  do {
    x = Math.random() * 100;
    y = Math.random() * 100;

    if (bias) {
      x = x * (1 - bias) + 50 * bias;
      y = y * (1 - bias) + 50 * bias;
    }

    // minimum distance check
    tooClose = positions.some(p => Math.hypot(p.x - x, p.y - y) < 8);
    attempt++;
  } while (tooClose && attempt < maxAttempts);

  positions.push({x, y});
  return {x, y};
}

for (let i = 0; i < TOTAL_CLOCKS; i++) {
  const clockIndex = (i % UNIQUE_CLOCKS) + 1;
  const id = String(clockIndex).padStart(2, "0");

  const link = document.createElement("a");
  link.href = CLOCK_LINKS[i]; // deterministic link

  const img = document.createElement("img");
  img.src = `images/clocks/clock${id}.png`;
  img.className = "clock";

  // RANDOM SIZE
  const size = 70 + Math.random() * 110;

  // RANDOM POSITION (full-page with optional bias)
  const {x, y} = getPosition(size);

  // RANDOM ROTATION
  const rot = (Math.random() * 40) - 20;

  // RANDOM FLOAT OFFSET
  const dx = (Math.random() * 12) - 6;
  const dy = (Math.random() * 12) - 6;

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
    document.body.classList.add("fading"); // make sure .fading CSS exists
    setTimeout(() => window.location.href = link.href, 500);
  });

  link.appendChild(img);
  clockField.appendChild(link);
}

// Inside clocks.js (add at the very bottom)

const REDIRECT_TIME = (3 * 60 + 33) * 1000;

setTimeout(() => {
  window.location.href = "logs/log01.html"; // first log
}, REDIRECT_TIME);

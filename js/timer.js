document.addEventListener("DOMContentLoaded", () => {
  const REDIRECT_TIME = 5000; // 5 seconds for testing
  setTimeout(() => {
    window.location.href = "logs/log01.html";
  }, REDIRECT_TIME);
});

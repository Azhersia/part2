const nightShadeEl = document.querySelector("#NightShade");
const warCryEl = document.querySelector("#WarCry");
const grimShadowEl = document.querySelector("#GrimShadow");
const shadowStrikeEl = document.querySelector("#ShadowStrike");
const deathWhisperEl = document.querySelector("#DeathWhisper");
const bloodRageEl = document.querySelector("#BloodRage");
const shadowClawEl = document.querySelector("#ShadowClaw");
const darkFireEl = document.querySelector("#DarkFire");

nightShadeEl.addEventListener("click", function () {
  nightShadeEl.classList.toggle('is-flipped');
});
warCryEl.addEventListener("click", function () {
  warCryEl.classList.toggle('is-flipped');
});
grimShadowEl.addEventListener("click", function () {
  grimShadowEl.classList.toggle('is-flipped');
});
shadowStrikeEl.addEventListener("click", function () {
  shadowStrikeEl.classList.toggle('is-flipped');
});
deathWhisperEl.addEventListener("click", function () {
  deathWhisperEl.classList.toggle('is-flipped');
});
bloodRageEl.addEventListener("click", function () {
  bloodRageEl.classList.toggle('is-flipped');
});
shadowClawEl.addEventListener("click", function () {
  shadowClawEl.classList.toggle('is-flipped');
});
darkFireEl.addEventListener("click", function () {
  darkFireEl.classList.toggle('is-flipped');
});

const nightButton = document.querySelector(".nightShadeButton");
const warButton = document.querySelector(".warCryButton");
const grimbutton = document.querySelector(".grimShadowButton");
const shadowstrikeButton = document.querySelector(".shadowStrikeButton");
const deathButton = document.querySelector(".deathWhisperButton");
const bloodButton = document.querySelector(".bloodRageButton");
const shadowclawButton = document.querySelector(".shadowClawButton");
const darkButton = document.querySelector(".darkfireButton");


nightButton.addEventListener("click", function () {
  localStorage.setItem("favCard", "nightShade")
});
warButton.addEventListener("click", function () {
  localStorage.setItem("favCard", "warCry")
});
grimbutton.addEventListener("click", function () {
  localStorage.setItem("favCard", "grimShadow")
});
shadowStrikeEl.addEventListener("click", function () {
  localStorage.setItem("favCard", "shadowStrike")
});
deathButton.addEventListener("click", function () {
  localStorage.setItem("favCard", "deathWhisper")
});
bloodButton.addEventListener("click", function () {
  localStorage.setItem("favCard", "bloodRage")
});
shadowClawEl.addEventListener("click", function () {
  localStorage.setItem("favCard", "shadowClaw")
});
darkButton.addEventListener("click", function () {
  localStorage.setItem("favCard", "darkFire")
});

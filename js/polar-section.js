const meltSlider = document.getElementById("meltSlider");
const meltValue = document.getElementById("meltValue");
const iceWater = document.getElementById("iceWater");
const iceShelf = document.getElementById("iceShelf");
const polarBear = document.getElementById("polarBear");

function updatePolarScene() {
  const value = Number(meltSlider.value);

  meltValue.textContent = value + "%";
  iceWater.style.height = value + "%";

  const shelfDrop = (value - 34) * 0.72;
  const shelfScale = 1 - (value - 18) / 190;
  const bearDrop = (value - 34) * 0.5;
  const bearTilt = (value - 34) * -0.035;
  const bearFade = 1 - (value - 18) / 140;

  iceShelf.style.transform = "translateY(" + shelfDrop + "px) scaleX(" + shelfScale + ")";
  iceShelf.style.opacity = 1 - (value - 18) / 95;

  polarBear.style.transform = "translateY(" + bearDrop + "px) rotate(" + bearTilt + "deg)";
  polarBear.style.opacity = bearFade;
}

if (meltSlider && meltValue && iceWater && iceShelf && polarBear) {
  meltSlider.addEventListener("input", updatePolarScene);
  updatePolarScene();
}
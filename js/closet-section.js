const rackItems = document.querySelectorAll(".rack-item");
const closetInfo = document.getElementById("closetInfo");
const itemName = document.getElementById("itemName");
const itemImpact = document.getElementById("itemImpact");
const itemCopy = document.getElementById("itemCopy");
const closetPrompt = document.getElementById("closetPrompt");

rackItems.forEach(function(item) {
  item.addEventListener("click", function() {
    rackItems.forEach(function(otherItem) {
      otherItem.classList.remove("selected");
    });

    item.classList.add("selected");

    itemName.textContent = item.dataset.name;
    itemImpact.textContent = item.dataset.impact;
    itemCopy.textContent = item.dataset.copy;

    closetInfo.classList.add("active");
    closetPrompt.innerHTML = "ITEM SELECTED";
  });
});
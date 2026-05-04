const cursorGlow = document.getElementById("cursorGlow");

window.addEventListener("mousemove", function(event) {
  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";
});

const interactiveItems = document.querySelectorAll("a, button, .price-tag");

interactiveItems.forEach(function(item) {
  item.addEventListener("mouseenter", function() {
    cursorGlow.style.width = "70px";
    cursorGlow.style.height = "70px";
    cursorGlow.style.borderColor = "rgba(199, 241, 44, 1)";
  });

  item.addEventListener("mouseleave", function() {
    cursorGlow.style.width = "42px";
    cursorGlow.style.height = "42px";
    cursorGlow.style.borderColor = "rgba(193, 232, 42, 0.75)";
  });
});
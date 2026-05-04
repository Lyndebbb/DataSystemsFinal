const tabs = document.querySelectorAll(".metric-tab");
const rankList = document.getElementById("rankList");
const boardTitle = document.getElementById("boardTitle");
const metricCaption = document.getElementById("metricCaption");

let impactData = [];

fetch("impact_data.php")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    impactData = data;
    renderRanking("carbon");
  });

function getMetricInfo(metric) {
  if (metric === "carbon") {
    return {
      title: "Carbon Ranking",
      caption: "Carbon view ranks all brands by estimated emissions per dollar.",
      column: "carbon_per_dollar"
    };
  }

  if (metric === "water") {
    return {
      title: "Water Ranking",
      caption: "Water view ranks all brands by estimated liters of water per dollar spent.",
      column: "water_per_dollar"
    };
  }

  return {
    title: "Waste Ranking",
    caption: "Waste view ranks all brands by estimated textile waste per dollar spent.",
    column: "waste_per_dollar"
  };
}

function renderRanking(metric) {
  const info = getMetricInfo(metric);

  boardTitle.textContent = info.title;
  metricCaption.textContent = info.caption;
  rankList.innerHTML = "";

  const sorted = [...impactData].sort(function(a, b) {
    return b[info.column] - a[info.column];
  });

  const maxValue = Math.max(...sorted.map(function(item) {
    return item[info.column];
  }));

  sorted.forEach(function(item, index) {
    const value = item[info.column];
    const percent = (value / maxValue) * 100;
    const rankNumber = index + 1;
    const rankLabel = rankNumber < 10 ? "0" + rankNumber : rankNumber;

    let displayValue = "";

    if (metric === "carbon") {
      displayValue = value.toFixed(3) + " kg CO₂ / $";
    } else if (metric === "water") {
      displayValue = value.toFixed(1) + " L / $";
    } else if (metric === "waste") {
      displayValue = value.toFixed(4) + " kg waste / $";
    }

    const row = document.createElement("div");
    row.className = "rank-row";
    row.style.setProperty("--bar", percent + "%");

    row.innerHTML =
      '<div class="rank-number">' + rankLabel + "</div>" +
      '<div class="rank-name">' + item.brand_name + "</div>" +
      '<div class="rank-bar"><span></span></div>' +
      '<div class="rank-value">' + displayValue + "</div>";

    rankList.appendChild(row);
  });
}

tabs.forEach(function(tab) {
  tab.addEventListener("click", function() {
    tabs.forEach(function(otherTab) {
      otherTab.classList.remove("active");
    });

    tab.classList.add("active");
    renderRanking(tab.dataset.metric);
  });
});
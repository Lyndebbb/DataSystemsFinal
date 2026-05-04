<section class="data-section" id="data">
  <div class="section-kicker">Database Output</div>

  <h2 class="data-title">
    The ranking is where the <span>fantasy breaks.</span>
  </h2>

  <div class="data-stage">
    <aside class="data-panel">
      <h3>Impact per dollar</h3>

      <p class="data-caption">
        This section turns the project database into a visual ranking system. The idea is simple:
        cheap clothing can still carry the highest environmental damage per dollar spent.
      </p>

      <div class="metric-tabs">
        <button class="metric-tab active" data-metric="carbon">
          <strong>Carbon</strong>
          <span>CO₂ / $</span>
        </button>

        <button class="metric-tab" data-metric="water">
          <strong>Water</strong>
          <span>L / $</span>
        </button>

        <button class="metric-tab" data-metric="waste">
          <strong>Waste</strong>
          <span>KG / $</span>
        </button>
      </div>

      <p class="data-caption" id="metricCaption">
        Carbon view ranks brands by estimated emissions per dollar. It exposes how low price can distort the true environmental cost.
      </p>
    </aside>

    <div class="ranking-board">
      <div class="board-header">
        <h3 id="boardTitle">Carbon Ranking</h3>
        <p>Project Data</p>
      </div>

      <div class="rank-list" id="rankList"></div>
    </div>
  </div>
</section>
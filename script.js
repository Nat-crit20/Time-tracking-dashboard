const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const main = document.querySelector("main");

class SetData {
  output(title, cur, prev) {
    return `
  <div class="card">
    <div class="card-top">
      <p>${title}</p>
      <i class="fa-solid fa-ellipsis"></i>
    </div>
    <div class="timeframes">
      <div class="time">
        <h2>${cur}hrs</h2>
      </div>
      <div class="prev-week">
        <p>Last Week - ${prev}hrs</p>
      </div>
    </div>
  </div>
`;
  }

  getData = async function (frame) {
    let response = await fetch("data.json");
    let results = await response.json();

    let cell = {};

    for (let i = 0; i < results.length; i++) {
      let time = results[i].timeframes[frame];
      let c = results[i].title;
      let act = c;

      if (act === "Self Care") {
        act = "Self";
      }

      cell[i] = document.querySelector(`.${act}`);
      let actTimeFrame = this.output(c, time.current, time.previous);

      cell[i].innerHTML = actTimeFrame;
      main.appendChild(cell[i]);
    }
    this.active(frame);
  };

  active(frame) {
    switch (frame) {
      case "daily":
        daily.style.color = "white";
        weekly.style.color = "hsl(235, 45%, 61%)";
        monthly.style.color = "hsl(235, 45%, 61%)";
        break;
      case "weekly":
        weekly.style.color = "white";
        daily.style.color = "hsl(235, 45%, 61%)";
        monthly.style.color = "hsl(235, 45%, 61%)";
        break;
      case "monthly":
        monthly.style.color = "white";
        weekly.style.color = "hsl(235, 45%, 61%)";
        daily.style.color = "hsl(235, 45%, 61%)";
        break;
      default:
        monthly.style.color = "hsl(235, 45%, 61%)";
        weekly.style.color = "hsl(235, 45%, 61%)";
        daily.style.color = "hsl(235, 45%, 61%)";
    }
  }
}

let activites = new SetData();
activites.getData("daily");

daily.addEventListener("click", function () {
  activites.getData("daily");
});
weekly.addEventListener("click", function () {
  activites.getData("weekly");
});
monthly.addEventListener("click", function () {
  activites.getData("monthly");
});

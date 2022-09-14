const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const main = document.querySelector("main");

const Work = document.querySelector(".Work");
const Play = document.querySelector(".Play");
const Study = document.querySelector(".Study");
const Exercise = document.querySelector(".Exercise");
const Social = document.querySelector(".Social");
const Self = document.querySelector(".Self");

class SetData {
  output(title, cur, prev) {
    return `
  <div class="card">
    <div class="card-top">
      <p>${title}</p>
      <i class="fa-solid fa-ellipsis"></i>
    </div>
    <div class="time">
      <h2>${cur}</h2>
    </div>
    <div class="prev-week">
      <p>Last Week - ${prev}</p>
    </div>
  </div>
`;
  }

  renderData(cell, timeframes) {
    cell.innerHtml = timeframes;
    main.appendChild(cell);
  }

  getData = async function (frame) {
    let response = await fetch("data.json");
    let results = await response.json();

    Work.innerHTML = this.output(
      results[0].title,
      results[0].timeframes[frame].current,
      results[0].timeframes[frame].previous
    );
    main.appendChild(Work);
    // for (let i = 0; i < results.length; i++) {
    //   let time = results[i].timeframes[frame];
    //   let act = results[i].title;

    //   if (act === "Self Care") {
    //     act = "Self";
    //   }

    //   let cell = document.querySelector(`.${act}`);
    //   let actTimeFrame = this.output(time.current, time.previous);

    //   this.renderData(cell, actTimeFrame);
    // }
  };
}

let activites = new SetData();
activites.getData("daily");

//I want to be able to loop through the array
//then I want to grab the title then use that to set the innerHTML
//It should also take in one value(time)
//take the getData()[i].timeframe.time set it equal to newValue
//it should then use the output(newValue.cur, newValue.prev)

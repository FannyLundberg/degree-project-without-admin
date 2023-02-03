import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

function Graph() {
  Chart.register(CategoryScale);
  Chart.defaults.scale.grid.display = false;

  const dataFamiles = {
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Antal familjer",
        backgroundColor: "#223524c5",
        data: [18, 27, 35, 32, 36],
      },
      {
        label: "Antal barn",
        backgroundColor: "#26532ca9",
        data: [49, 70, 91, 80, 83],
      },
    ],
  };

  const dataGifts = {
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Antal julklappar",
        backgroundColor: "#26532ca9",
        data: [150, 256, 270, 240, 250],
      },
    ],
  };

  return (
    <div>
      <h2>Antal familjer och barn</h2>
      <Bar
        data={dataFamiles}
        width={300}
        height={200}
        aria-label="Diagram med statik över antal hjälpta barn och familjer"
      />
      <h2>Antal julklappar som har skänkts</h2>
      <Bar
        data={dataGifts}
        width={300}
        height={200}
        aria-label="Diagram med statik över antal julklappar som har skänkts"
      />
    </div>
  );
}

export default Graph;

import React, { useState, useRef, useEffect } from "react";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { useTypedSelector } from "hooks/useTypedSelector";

import styles from "./Charts.module.scss";

const Charts = () => {
  const [active, setActive] = useState(1);

  const { statistic } = useTypedSelector((state) => state.statistics);

  console.log(statistic);

  const canvasRef = useRef();

  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );

  useEffect(() => {
    const myChart = new Chart(canvasRef.current.getContext("2d"), {
      type: active === 1 ? "doughnut" : active === 2 ? "line" : "bar",
      data: {
        labels: statistic ? statistic.map((elem) => elem?.dateValue) : [],
        //   report.map((elem) => {
        //   const data =
        //     elem?.date_of_use.year +
        //     " год, " +
        //     elem?.date_of_use.month +
        //     " месяц";
        //   const date = getDate(elem?.date_of_use.day, elem?.date_of_use.year);
        //   return elem?.date_of_use.hour
        //     ? elem?.date_of_use.hour + ":00"
        //     : elem?.date_of_use.month
        //     ? data
        //     : date;
        // }),
        datasets: [
          {
            label: "№ заказов",
            data: statistic.map((elem) => elem?.count),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 2,
            hoverOffset: 10,
          },
        ],
      },
      options:
        active === 2
          ? {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              plugins: {
                legend: {
                  position: "top",
                  align: "center",
                  padding: { bottom: 10 },
                  labels: {
                    boxWidth: 12,
                    boxHeight: 12,
                    font: {
                      family: "Roboto",
                      size: 14,
                    },
                  },
                },
              },
            }
          : active === 3
          ? {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              plugins: {
                legend: {
                  position: "top",
                  align: "center",
                  padding: { bottom: 10 },
                  labels: {
                    boxWidth: 12,
                    boxHeight: 12,
                    font: {
                      family: "Roboto",
                      size: 14,
                    },
                  },
                },
              },
            }
          : {
              plugins: {
                legend: {
                  position: "top",
                  align: "center",
                  padding: { bottom: 10 },
                  labels: {
                    boxWidth: 12,
                    boxHeight: 12,
                    font: {
                      family: "Roboto",
                      size: 14,
                    },
                  },
                },
              },
            },
      plugins: [
        {
          afterInit(chart) {
            chart.legend._update = chart.legend.update;
            chart.legend.update = function (...args) {
              this._update(...args);
              const padding = { ...(this.options.padding || {}) };
              this.height += Math.max(0, ~~padding.bottom);
              this.width += Math.max(0, ~~padding.right);
            };
          },
        },
      ],
    });
    return () => {
      myChart.destroy();
    };
  }, [active, statistic]);

  return (
    <div className={styles.charts}>
      <div className={styles.charts__filter}>
        <h2>Графики</h2>
        <div className={styles.charts__filterTypes}>
          <button
            className={
              active === 1
                ? styles.charts__filterTypes__buttonActive
                : styles.charts__filterTypes__button
            }
            onClick={() => setActive(1)}
          >
            <img
              src={"/static/images/statistics/pie-chart.png"}
              alt="pie-chart"
            />
          </button>
          <button
            className={
              active === 2
                ? styles.charts__filterTypes__buttonActive
                : styles.charts__filterTypes__button
            }
            onClick={() => setActive(2)}
          >
            <img
              src={"/static/images/statistics/line-chart.png"}
              alt="line-chart"
            />
          </button>
          <button
            className={
              active === 3
                ? styles.charts__filterTypes__buttonActive
                : styles.charts__filterTypes__button
            }
            onClick={() => setActive(3)}
          >
            <img
              src={"/static/images/statistics/bar-graph.png"}
              alt="column-chart"
            />
          </button>
        </div>
      </div>
      <div className={styles.charts__block}>
        <canvas id="myChart" ref={canvasRef} width={650} height={650} />
      </div>
    </div>
  );
};

export default Charts;

import { ApexOptions } from "apexcharts";

export const CandidateSeries = [
  {
    name: "Candidate",
    data: [183, 124, 115],
  },
  //   {
  //     name: "Running Month",
  //     data: [95, 84, 72, 44, 108, 108, 47],
  //   },
];

// export const CandidateOptions: ApexOptions = {
//   chart: {
//     type: "bar",
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ["#475BE8", "#CFC8FF"],
//   plotOptions: {
//     bar: {
//       borderRadius: 4,
//       horizontal: false,
//       columnWidth: "55%",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   grid: {
//     show: false,
//   },
//   stroke: {
//     colors: ["transparent"],
//     width: 4,
//   },
//   xaxis: {
//     categories: ["1", "2", "3"],
//     title: {
//       text: "Candidate ID's",
//     },
//   },
//   yaxis: {
//     title: {
//       text: "Votes",
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
//   legend: {
//     position: "top",
//     horizontalAlign: "right",
//   },
//   tooltip: {
//     y: {
//       formatter(val: number) {
//         return ` ${val} votes`;
//       },
//     },
//   },
// };

export const baroptions: ApexOptions = {
  chart: {
    height: 280,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2],
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
    ],
  },
};

function costDistChart(data) {
  console.log("costCHART");
  console.log(data);

  Highcharts.chart("costDist", {
    title: {
      align: "left",
      text: "Cards per Mana Cost",
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },

    xAxis: {
      categories: data.labels,
      crosshair: true,
    },

    tooltip: {
      shared: true,
    },

    legend: {
      enabled: false,
    },

    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
      },
    },

    series: [
      {
        name: "Number of cards",
        type: "column",
        data: data.data,
      },
    ],
  });
}

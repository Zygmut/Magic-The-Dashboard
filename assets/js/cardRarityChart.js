function cardRarityChart(data) {
  Highcharts.chart("cardRarity", {
    chart: {
      type: "bar",
    },
    title: {
      align: "left",
      text: "Card Rarity",
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
    yAxis: {
      min: 0,
      title: {
        text: "Number of cards",
        align: "high"
      },
      labels: {
        overflow: "justify",
      },
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },

    legend: {
      enabled: false,
    },
    tooltip: {
      shared: true,
    },

    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Number of cards",
        data: data.data,
      },
    ],
  });
}

function cardTypeChart(data) {
  Highcharts.chart("cardType", {
    chart: {
      type: "bar",
      backgroundColor: colorPalette.BG,
    },
    title: {
      align: "left",
      text: "Card Types",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      categories: data.labels,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of cards",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          format: "{point.y:.2f}",
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

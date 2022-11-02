function costDistChart(data) {
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
      title: {
        text: "Mana Cost",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },

    yAxis: {
      title: {
        text: "Number of cards",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },

    tooltip: {
      shared: true,
      headerFormat:
        '<span style="font-size:11px">Mana cost of {point.x}</span><br>',
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

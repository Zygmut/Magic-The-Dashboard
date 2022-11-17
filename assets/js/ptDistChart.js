function ptDistChart(data) {
  Highcharts.chart("ptDist", {
    chart: {
      type: "bar",
      backgroundColor: colorPalette.BG,
    },
    title: {
      align: "left",
      text: "Power & Toughness Distribution by Mana ",
    },
    xAxis: {
      categories: ["Black", "Blue", "Green", "Red", "None", "White"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Mana cost",
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
          format: "{point.y:.2f}",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<b>{point.y:.2f}</b><br/>',
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: 1,
      y: 50,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Power",
        data: [data.NP, data.BP, data.GP, data.RP, data.UP, data.WP],
      },
      {
        name: "Toughness",

        data: [data.NT, data.BT, data.GT, data.RT, data.UT, data.WT],
      },
    ],
  });
}

function manaDistChart(data) {

  Highcharts.chart("manaDist", {
    chart: {
      type: "pie",
      backgroundColor: colorPalette.BG,
    },
    title: {
      text: "Mana Distribution",
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
      point: {
        valueSuffix: "%",
      },
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.y:.1f}%",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px;">{series.name} </span><br>',
      pointFormat:
        '<span style="color:{point.color} font-size:50px">{point.name} mana</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: "",
        data: [
          {
            name: "Black",
            y: data.B,
            color: colorPalette.B,
            dataLabels: {style: {}}
          },
          {
            name: "Blue",
            y: data.U,
            color: colorPalette.U,
          },
          {
            name: "White",
            y: data.W,
            color: colorPalette.W,
          },
          {
            name: "Green",
            y: data.G,
            color: colorPalette.G,
          },
          {
            name: "Red",
            y: data.R,
            color: colorPalette.R,
          },
          {
            name: "Colorless",
            y: data.N,
            color: colorPalette.N,

          },
        ],
      },
    ],
  });
}

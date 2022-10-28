function manaDist(data) {

  Highcharts.chart("manaDist", {
    chart: {
      type: "pie",
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
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: "Browsers",
        data: [
          {
            name: "Black",
            y: data.B,
            color: "#101010",
          },
          {
            name: "Blue",
            y: data.U,
            color: "#0280B7",
          },
          {
            name: "White",
            y: data.W,
            color: "#F3F1DD",
          },
          {
            name: "Green",
            y: data.G,
            color: "#017C45",
          },
          {
            name: "Red",
            y: data.R,
            color: "#F95454",
          },
          {
            name: "None",
            y: data.N,
            color: "#828282",
          },
        ],
      },
    ],
  });
}

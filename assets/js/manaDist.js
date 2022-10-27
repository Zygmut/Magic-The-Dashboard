function manaDist(jsonData) {
    console.log(jsonData);
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
            y: 1,
            color: "#101010",
          },
          {
            name: "Blue",
            y: 1,
            color: "#0280B7",
          },
          {
            name: "White",
            y: 1,
            color: "#F3F1DD",
          },
          {
            name: "Green",
            y: 1,
            color: "#017C45",
          },
          {
            name: "Red",
            y: 1,
            color: "#F95454",
          },
          {
            name: "None",
            y: 1,
            color: "#828282",
          },
        ],
      },
    ],
  });
}

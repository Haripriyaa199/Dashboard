// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
//line
var ctxL = document.getElementById("myAreaChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Statistics",
      data: [65, 30, 59, 40, 60, 29],
      backgroundColor: [
        'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
        'rgba(128, 226, 255, .5)',
      ],
      borderWidth: 2.5,
    },
    {
      label: "Last 6 months",     
      data: [55, 36, 47, 62, 36, 80],
      backgroundColor: [
        'rgba(0, 137, 132, .2)',
      ],
      borderColor: [
        'rgba(179, 251, 181, .7)',
      ],
      borderWidth: 2.5,
    }
    ]
  },
  options: {
    responsive: true
  }
});

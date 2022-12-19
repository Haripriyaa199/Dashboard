// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
  type: 'doughnut',
  data: {
    labels: ["France", "Italy", "Japan", "Canada"],
    datasets: [{
      data: [200, 100, 200, 100],
      backgroundColor: ["#80E2FF", "#FFDF94", "#F49FA8", "#B5B3FB"],
      
    }]
  },
  options: {
  	responsive: true
  }
});

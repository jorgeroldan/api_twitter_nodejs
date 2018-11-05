new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Hashtag 1", "Hashtag 2", "Hashtag 3", "Hashtag 4 ", "Hashtag 5"],
      datasets: [
        {
          label: "Trending Topic",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Alguna explicación sobre los datos'
      }
    }
});
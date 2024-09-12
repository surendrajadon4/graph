const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],  // X-axis labels
        datasets: [
            {
                label: 'Income',
                data: [0, 500, 1000, 2500, 3500,4500, 5700, 7000, 8751, 12025],  // Data for income
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                fill: true
            },
            {
                label: 'Expenses',
                data: [0, 1650, 2590, 3200, 4500, 4300, 5500,4500 ,7000 ,12000 ],  // Data for expenses
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                fill: true
            }
        ]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Age'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount'
                }
            }
        }
    }
});
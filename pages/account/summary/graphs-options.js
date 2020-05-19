const options = {
    colors: ['#8bc43e', '#23a8e0'],
    chart: {
        type: 'column'
    },
    legend: false,
    title: false,
    tooltip: false,
    yAxis: [{
        lineWidth: 0,
        opposite: true,
        title: false,
        labels: {
            style: {
                fontSize: '14px',
                color: '#4a4a4a',
                fontFamily: 'Avenir Next'
            },
            formatter() {
                return this.value.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                });
            }
        }
    }],
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        lineWidth: 2,
        lineColor: '#9b9b9b',
        labels: {
            style: {
                fontSize: '14px',
                color: '#4a4a4a',
                fontFamily: 'Avenir Next'
            }
        }
    },
    credits: false,
    plotOptions: {
        column: {
            borderRadius: 10
        },
        series: {
            pointWidth: 44
        }
    },
}

export {
    options
}
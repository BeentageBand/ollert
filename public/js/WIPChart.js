function labelCountChartData() {
    this.lists = [];
    this.counts = [];
}

function labelCountChart(lc_data) {
    this.categories = lc_data.lists;
    this.data = lc_data.counts;
    
    this.buildChart = function() {
        var that = this;
            $('#WIP-Container').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Work In Progress'
                },
                subtitle: {
                    text: 'WIP'
                },
                xAxis: {
                    categories: that.categories,
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cards',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' Cards'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                series: that.data
            });
          };
 }

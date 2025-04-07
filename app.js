    document.addEventListener("DOMContentLoaded", function() {
    const tableRows = document.querySelectorAll("#dataTable tbody tr");
    const chartContainer = document.getElementById("chartContainer");

    tableRows.forEach(row => {
        row.addEventListener("click", function() {
            const values = JSON.parse(this.getAttribute("data-values"));
            drawChart(values);
        });
    });

    function drawChart(data) {
        Highcharts.chart(chartContainer, {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Данные по выбранной строке'
            },
            xAxis: {
                categories: ['Текущий день', 'Вчера', 'Этот день недели']
            },
            yAxis: {
                title: {
                    text: 'Значения'
                }
            },
            series: [{
                name: 'Серия 1',
                data: data
            }]
        });
    }
});

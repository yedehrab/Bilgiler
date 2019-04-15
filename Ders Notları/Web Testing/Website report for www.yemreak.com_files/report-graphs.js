function Gauge()
{
    var gauge = this;

    $('.gaugeGraphHighChart').each(function(index) {
        if($(this).attr('data-titleText') && $(this).attr('data-minValue') && $(this).attr('data-maxValue') && $(this).attr('data-actualValue'))
        {
            gauge.addGraph(
                $(this),
                $(this).attr('data-titletext'),
                $(this).attr('data-minvalue'),
                $(this).attr('data-maxvalue'),
                $(this).attr('data-actualvalue'),
                $(this).attr('data-showtextlabels')
            );
        }
    });
};

Gauge.prototype.addGraph = function(el, titleText, min, max, data, textLabels)
{
    var innerText = $(el).attr('data-footertext');
    var customLabels = $(el).attr('data-customlabels');

    if(customLabels)
        customLabels = JSON.parse(customLabels);

    textLabels = parseInt(textLabels);
    var thirdMax = max / 3.3;

    $(el).highcharts({
        chart: {
            type: 'gauge',
            backgroundColor: 'none',
            height: 250,
            width: 320,
            spacing: 0,
            margin: 0
        },

        title: null,

        pane: {
            center: ["50%", "72%"],
            size: "100%",
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: true,
            useHTML: true,
            formatter: function () {
                return data;
            }
        },

        // the value axis
        yAxis: {
            plotBands: [
                {
                    from: 0,
                    to: thirdMax,
                    color: '#FE4747',
                    innerRadius: '60%',
                    outerRadius: '100%'
                },
                {
                    from: thirdMax,
                    to: max - thirdMax,
                    color: '#FE9D47',
                    innerRadius: '60%',
                    outerRadius: '100%'
                },
                {
                    from: max - thirdMax,
                    to: max,
                    color: '#A5DB34',
                    innerRadius: '60%',
                    outerRadius: '100%'
                }
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 200,
            tickWidth: 0,
            title: {
                y: -80,
                text: titleText,
                style: { "color": "#606060", "font-size": "12px", "font-weight": "bold" }
            },
            labels: {
                y: 14,
                enabled: textLabels,
                formatter: function() {
                    var retval = this.value;

                    if(customLabels)
                    {
                        if(retval == min)
                            retval = customLabels[0];
                        else if(retval == max)
                            retval = customLabels[1];
                        else
                            retval = "";
                    }
                    return retval;
                }
            },
            min: min,
            max: max
        },

        plotOptions: {
            gauge: {
                dataLabels: {
                    y: 30,
                    borderWidth: 0,
                    useHTML: false
                }
            }
        },
        credits: {
            enabled: false
        },

        series: [{
            name: titleText,
            data: [+data],
            dataLabels: {
                format: '<div style="text-align:center;font-weight:normal;font-colour:#999999;">' + innerText + ' </div>'
            },
            dial: {
                backgroundColor : '#999999'
            }
        }]

    });
};

//Gauge.prototype.lastAnimated = [];
//Gauge.prototype.animateGraph = function(el)
//{
//    var gauge = this;
//    if(gauge.lastAnimated[el] + 10000 > new Date().getTime())
//    {
//        console.log("Did not re-animate.. waiting ten seconds since last animation");
//        return false;
//    }
//
//    console.log("animating gauge");
//    gauge.updatePoint(el, 0);
//    setTimeout(function() { gauge.updatePoint(el, $(el).attr('data-actualValue')) }, 1000);
//
//    this.lastAnimated[el] = new Date().getTime();
//    return true;
//};
//
//Gauge.prototype.updatePoint = function(el, value)
//{
//    var chart = $(el).highcharts();
//    if (chart) {
//        point = chart.series[0].points[0];
//        point.update(+value);
//        console.log("updating point to: " + value);
//    }
//}

function PieChart()
{
    var piechart = this;

    $('.pieChartHighChart').each(function(index) {
        if($(this).attr('data-pievalues'))
        {
            piechart.addGraph(
                $(this),
                $(this).attr('data-pievalues')
            );
        }
    });
}

//PieChart.prototype.lastAnimated = [];
//PieChart.prototype.animateGraph = function(el)
//{
//    if(this.lastAnimated[el] + 10000 > new Date().getTime())
//    {
//        console.log("Did not re-animate.. waiting ten seconds since last animation");
//        return false;
//    }
//
//    console.log("animating graph");
//    this.lastAnimated[el] = new Date().getTime();
//    return true;
//};


PieChart.prototype.addGraph = function(el, data)
{
    var colours = ['#5485BC', '#AA8C30', '#5C9384', '#981A37', '#FCB319', '#86A033', '#614931', '#00526F', '#594266', '#CB6828', '#AAAAAB', '#A89375'];
    var footertext = $(el).attr('data-footertext');
    if($(el).attr('data-customcolours'))
        colours = JSON.parse($(el).attr('data-customcolours'));

    $(el).highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            animation: true,
            backgroundColor:'rgba(255, 255, 255, 0.1)',
            height: 250,
            width: 320,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,
            spacingBottom: 0,
            margin: 0
        },
        credits: {
            enabled: false
        },
        colors: colours,
        title: {
            text: $(el).attr('data-pietitle'),
            style: { "color": "#606060", "font-size": "12px", "font-weight": "bold" },
            y: 38
        },
        tooltip: {
            enabled: true,
            useHTML: true,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                center: [75, 100],
                showInLegend: true,
                size: "18%",
                innerSize: "65%"
            }
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            useHTML: true,
            labelFormatter: function() {
                return '<div style="text-align: left; width:90px;float:left;">' + this.name.substr(0, 10) + '</div>';
            }
        },
        series: [{
            type: 'pie',
            name: $(el).attr('data-pietitle'),
            data: JSON.parse(data),
            dataLabels: {
                enabled: false
            }
        }]
    });
};

$(function () {
    var gauge = new Gauge();
    var pieChart = new PieChart();

//    $('.highChartWaypoint').waypoint(function(direction) {
//        if($(this).attr('data-piechart'))
//        {
//            pieChart.animateGraph($(this));
//        }
//
//        if($(this).attr('data-gauge'))
//        {
//            gauge.animateGraph($(this));
//        }
//    }, { offset: '70%' });
});
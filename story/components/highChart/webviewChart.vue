<template>
    <areaChart :axisLabels="axisLabels" :chartOpt="chartOptions" />
</template>
<script>
import Highcharts from 'highcharts';
import basicChart from './basicChart.vue';
import areaChart from './areaChart.vue';
let _tips = null;
let chartbaseSetting = {
    chart: {
        renderTo: 'chartBox',
        type: 'area',
        backgroundColor: {
            linearGradient: [0, 500, 0, 500],
            stops: [
                [0, '#f69385'],
                [1, '#f6a094']
            ]
        },
        spacing: [15, 0, 15, 15],
        width: '',
        height: '',
        selectionMarkerFill: 'rgba(255, 255, 255, 0.2)',
        events: {
            load: function () {
                let self = this;
                let points = [];
                let _tag = document.getElementsByClassName('highcharts-xaxis-labels')[0].childNodes;
                if (_tag.length > 0) {
                    _tag[_tag.length - 1].style.color = 'rgba(255, 255, 255, 1)';
                    _tag[_tag.length - 1].style.fill = 'rgba(255, 255, 255, 1)';
                }
                Highcharts.each(self.series, function (s) {
                    if (s.visible) {
                        points.push(s.points[s.points.length - 1]);
                    }
                });
                self.tooltip.refresh(points);
            },
            render: function () {
                _tips = document.querySelector('div.highcharts-tooltip').cloneNode(true);
                document.querySelector('div.highcharts-tooltip').parentNode.appendChild(_tips)
            }
        }
    },
    plotOptions: {
        area: { stickyTracking: false },
        series: {
            cursor: 'pointer',
            showInLegend: false,
            allowPointSelect: true,
            fillColor: {
                linearGradient: [0, 0, 0, 300],
                stops: [
                    [0, 'rgba(255, 255, 255, 0.2)'], // start
                    [1, 'rgba(255, 255, 255, 0)'] // end
                ]
            },
            lineWidth: 1,
            lineColor: '#fff',
            pointInterval: 24 * 3600 * 1000,
            stickyTracking: false,
            visible: true,
            marker: {
                lineWidth: 0,
                radius: 4,
                fillColor: 'rgba(255, 255, 255, 1)',
                lineColor: 'rgba(255, 255, 255, 0.4)',
                states: {
                    hover: {
                        radiusPlus: 0,
                        lineWidthPlus: 0,
                        lineWidth: 6,
                        radius: 4
                    },
                    select: {
                        fillColor: 'rgba(255, 255, 255, 1)',
                        lineColor: 'rgba(255, 255, 255, 0.4)',
                        lineWidth: 6,
                        radius: 4
                    }
                }
            },
            point: {
                events: {
                    mouseOver: function () {
                        document.querySelector('div.highcharts-tooltip').style.display = 'none';
                    },
                    click: function () {
                        let _point = this.index;
                        let _tag = document.getElementsByClassName('highcharts-xaxis-labels')[0].childNodes;
                        let _marker = document.getElementsByClassName('highcharts-markers')[0].childNodes;
                        if (_tips) {
                            document.querySelector('div.highcharts-tooltip').parentNode.removeChild(_tips)
                        }
                        _tips = document.querySelector('div.highcharts-tooltip').cloneNode(true);
                        _tips.style.display = 'block';
                        document.querySelector('div.highcharts-tooltip').parentNode.appendChild(_tips)
                        for (let i = 0; i < _tag.length; i++) {
                            _tag[i].style.color = 'rgba(255, 255, 255, 0.5)';
                            _tag[i].style.fill = 'rgba(255, 255, 255, 0.5)';
                            if (i === _point) {
                                _tag[i].style.color = 'rgba(255, 255, 255, 1)';
                                _tag[i].style.fill = 'rgba(255, 255, 255, 1)';
                            }
                        };
                        for (let j = 0; j < _marker.length; j++) {
                            _marker[j].removeAttribute('stroke');
                            _marker[j].removeAttribute('stroke-width');
                            if (j === _point) {
                                _marker[j].setAttribute('stroke', 'rgba(255, 255, 255, 0.5)');
                                _marker[j].setAttribute('stroke-width', '6');
                            }
                        }
                    }
                }
            },
            states: {
                inactive: {
                    opacity: 1
                },
                hover: {
                    fillColor: 'rgba(255, 255, 255, 1)',
                    lineColor: 'rgba(255, 255, 255, 1)',
                    lineWidth: 1,
                    radius: 4,
                    halo: {
                        size: 0,
                        fill: '#fff'
                    }
                }
            }
        }
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    colorAxis: {
        lineColor: 'rgba(255, 255, 255, 0.5)'
    },
    xAxis: {
        tickInterval: 24 * 3600 * 1000,
        dateTimeLabelFormats: {
            day: '%m.%e'
        },
        type: 'datetime',
        labels: {
            style: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '10px'
            }
        },
        maxPadding: 0.15,
        minPadding: 0.12,
        tickLength: 0,
        gridLineWidth: 1,
        gridLineColor: 'rgba(255, 255, 255, 0.5)',
        lineColor: 'rgba(255, 255, 255, 0)'
    },
    yAxis: {
        title: false,
        tickAmount: 5,
        labels: {
            style: {
                color: 'rgba(255, 255, 255, 1)',
                fontSize: '10px'
            }
        },
        endOnTick: false,
        tickLength: 0,
        gridLineWidth: 1,
        gridLineColor: 'rgba(255, 255, 255, 0.5)'
    },
    tooltip: {
        backgroundColor: null,
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        shared: true,
        formatter: function () {
            let _text = `${this.y} BEC`;
            if (this.y === 0) {
                return _text;
            } else {
                return `+ ${_text}`;
            }
        }
    }
}
export default {
    props: {
        axisLabels: {
            type: Array,
            default: function () {
                return {}
            },
            required: true
        }
    },
    data () {
        return {
        }
    },
    components: {
        basicChart,
        areaChart
    },
    computed: {
        chartOptions () {
            let chartOptions = {
                ...chartbaseSetting
            }
            return chartOptions;
        }
    },
    methods: {
        getTransactionGraph () {
            let self = this;
            let docWidth = document.body.clientWidth;
            if (docWidth > 720) {
                docWidth = 720;
            } else if (docWidth < 320) {
                docWidth = 320;
            }
            this.chartOptions.chart['width'] = docWidth;
            this.chartOptions.chart['height'] = docWidth / 2;
        }
    },
    created () {
        this.getTransactionGraph()
    }
}
</script>
<style scoped>
.chartBox {
    min-width: 320px;
    max-width: 720px;
    border-radius: 8px;
    overflow: hidden;
}
</style>
<style>
.highcharts-tooltip > span {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    padding: 2px 5px;
}
</style>


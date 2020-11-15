import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import Highcharts from 'highcharts';
import webviewChart from './webviewChart.vue';
import basicChart from './basicChart.vue';
import areaChart from './areaChart.vue';

const stories = storiesOf('Beautybee|Highchart/chartSample', module);
const seriesData = [
    {
        name: '2019-06-18',
        y: 107.21
    },
    {
        name: '2019-06-19',
        y: 0
    },
    {
        name: '2019-06-20',
        y: 0
    },
    {
        name: '2019-06-21',
        y: 0
    },
    {
        name: '2019-06-22',
        y: 0
    },
    {
        name: '2019-06-23',
        y: 0
    },
    {
        name: '2019-06-24',
        y: 0
    }
];
let _tips = null;
let chartbaseSetting = {
    chart: {
        renderTo: 'chartBox',
        type: 'area',
        backgroundColor: {
            linearGradient: [0, 500, 0, 500],
            stops: [[0, '#f69385'], [1, '#f6a094']]
        },
        spacing: [15, 0, 15, 15],
        selectionMarkerFill: 'rgba(255, 255, 255, 0.2)',
        events: {
            load: function() {
                let self = this;
                let points = [];
                let _tag = document.getElementsByClassName('highcharts-xaxis-labels')[0].childNodes;
                if (_tag.length > 0) {
                    _tag[_tag.length - 1].style.color = 'rgba(255, 255, 255, 1)';
                    _tag[_tag.length - 1].style.fill = 'rgba(255, 255, 255, 1)';
                }
                Highcharts.each(self.series, function(s) {
                    if (s.visible) {
                        points.push(s.points[s.points.length - 1]);
                    }
                });
                self.tooltip.refresh(points);
            },
            render: function() {
                _tips = document.querySelector('div.highcharts-tooltip').cloneNode(true);
                document.querySelector('div.highcharts-tooltip').parentNode.appendChild(_tips);
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
                    mouseOver: function() {
                        document.querySelector('div.highcharts-tooltip').style.display = 'none';
                    },
                    click: function() {
                        let _point = this.index;
                        let _tag = document.getElementsByClassName('highcharts-xaxis-labels')[0].childNodes;
                        let _marker = document.getElementsByClassName('highcharts-markers')[0].childNodes;
                        if (_tips) {
                            document.querySelector('div.highcharts-tooltip').parentNode.removeChild(_tips);
                        }
                        _tips = document.querySelector('div.highcharts-tooltip').cloneNode(true);
                        _tips.style.display = 'block';
                        document.querySelector('div.highcharts-tooltip').parentNode.appendChild(_tips);
                        for (let i = 0; i < _tag.length; i++) {
                            _tag[i].style.color = 'rgba(255, 255, 255, 0.5)';
                            _tag[i].style.fill = 'rgba(255, 255, 255, 0.5)';
                            if (i === _point) {
                                _tag[i].style.color = 'rgba(255, 255, 255, 1)';
                                _tag[i].style.fill = 'rgba(255, 255, 255, 1)';
                            }
                        }
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
        formatter: function() {
            let _text = `${this.y} BEC`;
            if (this.y === 0) {
                return _text;
            } else {
                return `+ ${_text}`;
            }
        }
    }
};
stories.addDecorator(withKnobs);
stories.add(
    'webviewChart',
    () => ({
        computed: {
            pointStart() {
                let _time = seriesData[0].name;
                _time = _time.split('-');
                for (let i = 0; i < _time.length; i++) {
                    _time[i] = parseInt(_time[i]);
                }
                return Date.UTC(_time[0], _time[1] - 1, _time[2]);
            },
            axisLabels() {
                let chartOptions = {
                    series: [
                        {
                            data: seriesData, // sample data
                            pointStart: this.pointStart
                        }
                    ]
                };
                return chartOptions.series;
            }
        },
        components: {
            webviewChart
        },
        methods: {},
        propsDescription: {
            // These description will appear in `description` column in props table
            webviewChart: {
                axisLabels: '（必填）X軸與Y軸資料，X軸日期格式為"西元年-月-日"(共8位數)，Y軸資料必須為數字'
            }
        },
        template: `<webviewChart :axisLabels="axisLabels" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]
        無

        [ 注意事項 ]
        1. 安裝此元件前須確認該專案已有‘highcharts’ 和‘highcharts-vue’套件
        
        [ 作者 ]
        Agnes Kao
        
    `,
        info: {
            summary: 'demo 基礎圖表 + BeautyBee Webview 圖表'
        }
    }
);
stories.add(
    'basicChart',
    () => ({
        computed: {
            pointStart() {
                let _time = seriesData[0].name;
                _time = _time.split('-');
                for (let i = 0; i < _time.length; i++) {
                    _time[i] = parseInt(_time[i]);
                }
                return Date.UTC(_time[0], _time[1] - 1, _time[2]);
            },
            axisLabels() {
                let chartOptions = {
                    series: [
                        {
                            data: seriesData, // sample data
                            pointStart: this.pointStart
                        }
                    ]
                };
                return chartOptions;
            }
        },
        components: {
            basicChart
        },
        methods: {},
        propsDescription: {
            // These description will appear in `description` column in props table
            basicChart: {
                axisLabelsOption: '（必填）X軸與Y軸資料，X軸日期格式為"西元年-月-日"(共8位數)，Y軸資料必須為數字'
            }
        },
        template: `<basicChart :axisLabelsOption="axisLabels" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]
        無

        [ 注意事項 ]
        1. 安裝此元件前須確認該專案已有‘highcharts’ 和‘highcharts-vue’套件
        
        [ 作者 ]
        Agnes Kao
        
    `,
        info: {
            summary: '基礎圖表：只傳入 X, Y 軸資料'
        }
    }
);
stories.add(
    'areaChart',
    () => ({
        components: {
            areaChart
        },
        computed: {
            pointStart() {
                let _time = seriesData[0].name;
                _time = _time.split('-');
                for (let i = 0; i < _time.length; i++) {
                    _time[i] = parseInt(_time[i]);
                }
                return Date.UTC(_time[0], _time[1] - 1, _time[2]);
            },
            axisLabels() {
                let chartOptions = {
                    series: [
                        {
                            data: seriesData, // sample data
                            pointStart: this.pointStart
                        }
                    ]
                };
                return chartOptions.series;
            },
            chartOptions() {
                let chartOptions = {
                    series: this.axisLabels,
                    ...chartbaseSetting
                };
                return chartOptions;
            }
        },
        methods: {},
        propsDescription: {
            // These description will appear in `description` column in props table
            areaChart: {
                axisLabels: '（必填）X軸與Y軸資料，X軸日期格式為"西元年-月-日"(共8位數)，Y軸資料必須為數字',
                chartOpt: '外觀設定值'
            }
        },
        template: `<areaChart :axisLabels="axisLabels" :chartOpt="chartOptions"><basicChart /></areaChart>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]
        無

        [ 注意事項 ]
        1. 安裝此元件前須確認該專案已有‘highcharts’ 和‘highcharts-vue’套件
        
        [ 作者 ]
        Agnes Kao
    `,
        info: {
            summary: 'BeautyBee Webview 圖表：傳入 X, Y 軸資料供基礎圖表使用'
        }
    }
);

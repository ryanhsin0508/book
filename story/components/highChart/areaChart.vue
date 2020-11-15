<template>
    <basicChart :axisLabelsOption="chartOptions" />
</template>
<script>
import Highcharts from 'highcharts';
import basicChart from './basicChart.vue';
export default {
    props: {
        axisLabels: {
            type: Array,
            default: function () {
                return {}
            },
            required: true
        },
        chartOpt: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    data () {
        return {
        }
    },
    components: {
        basicChart
    },
    computed: {
        chartOptions () {
            let chartOptions = {
                series: this.axisLabels,
                ...this.chartOpt
            }
            return chartOptions;
        }
    }
}
</script>

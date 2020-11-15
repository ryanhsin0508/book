<template>
    <highcharts class="chartBox" :highcharts="hcInstance" :options="chartOptions" />
</template>
<script>
import Highcharts from 'highcharts';
import { Chart } from 'highcharts-vue';
export default {
    props: {
        axisLabelsOption: {
            type: Object,
            default: function () {
                return {}
            },
            required: true
        }
    },
    components: {
        highcharts: Chart
    },
    data () {
        return {
            chart: undefined,
            hcInstance: Highcharts
        }
    },
    computed: {
        chartOptions () {
            return this.axisLabelsOption;
        }
    }
}
</script>

<template>
  <div class="container">
    <div class="chart" id="subchart"></div>
  </div>
</template>

<script>
export default {
  name: "empty2",
  mounted() {
    this.getSubEchart();
  },
  methods: {
    getSubEchart() {
      let myChart = echarts.init(document.getElementById('subchart'));

      let option = {
        xAxis: {
          type: 'category',
          data: ['村西', '大街', '村东', '村头']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      myChart.setOption(option, true);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
.chart {
  height: 3rem;
}
}
</style>
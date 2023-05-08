<template>
  <div class="container">
    <div class="chart" id="subchart"></div>
  </div>
</template>

<script>
export default {
  name: "empty",
  mounted() {
    this.getSubEchart();
  },
  methods: {
    getSubEchart() {
      let myChart = echarts.init(document.getElementById('subchart'));

      let option = {
        xAxis: {
          type: 'category',
          name: '月份',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          name: '处理件数'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
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
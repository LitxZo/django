
<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">事务处理率</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_polo2"></div> 
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>


export default {
  name: "waterPolo2",
  data() {
    return {
      option: null
      
    }
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_polo2'));
      this.option = {
        series: [{
          type: 'liquidFill',
          data: [1.0],
          radius: '70%', 
          color: ['#00b9f5'],
          backgroundStyle: {
            color: 'rgba(0, 0, 0, 0.5)',
            borderColor: '#007bff',
            borderWidth: 3,
            shadowColor: 'rgba(0, 123, 225, 0.4)',
            shadowBlur: 20
          },
          outline: {
            show: false,
          }, 
        }]
      }

      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 1300px;
  top: 617px;
  width: 280px;
  height: 295px;
  .chartsdom {
    width: 300px;
    height: 260px;
    left:100px
  }
}
</style>


<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title">事务处理好评率</div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_polo"></div> 
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>


export default {
  name: "waterPolo",
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
      let myChart = echarts.init(document.getElementById('chart_polo'));
      this.option = {
        series: [{
          type: 'liquidFill',
          data: [0.85],
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
  left: 1590px;
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

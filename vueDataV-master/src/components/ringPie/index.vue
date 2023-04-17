
<template>
  <div class="wrap-container sn-container">
    <div class="sn-content">
      <div class="sn-title">人口信息</div>
      <div class="sn-body">
        <div class="wrap-container ring-pie">
          <div class="back-chart">

          </div>

          <div class="chartsdom" id="chart_rp"></div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ringPie",
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
      let myChart = echarts.init(document.getElementById('chart_rp'),);
      this.option = {
        dataset: [
          {
            source: [
              ['范围', '年龄', '性别', 'Year'],
              ['15到20', 123, 32, 2011],
              ['20到25', 231, 14, 2011],
              ['25到30', 235, 5, 2011],
              ['35', 341, 25, 2011],
              ['45到50', 122, 29, 2011],
              ['15到20', 123, 32, 2012],
              ['20到25', 231, 14, 2012],
              ['25到30', 235, 5, 2012],
              ['35', 341, 25, 2012],
              ['45到50', 122, 29, 2012],
            ]
          },
          {
            transform: {
              type: 'filter',
              config: { dimension: 'Year', value: 2011 }
            }
          },
          {
            transform: {
              type: 'filter',
              config: { dimension: 'Year', value: 2012 }
            }
          },
          
        ],
        series: [
          {
            type: 'pie',
            radius: 70,
            center: ['50%', '25%'],
            datasetIndex: 1
          },
          {
            type: 'pie',
            radius: 70,
            center: ['70%', '50%'],
            datasetIndex: 2
          },
        ],
        // Optional. Only for responsive layout:
        media: [
          {
            query: { minAspectRatio: 1 },
            option: {
              series: [
                { center: ['25%', '50%'] },
                { center: ['75%', '50%'] },
              ]
            }
          },
          {
            option: {
              series: [
                { center: ['50%', '25%'] },
                { center: ['75%', '50%'] },

              ]
            }
          }
        ]
      };;

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
* {
  color: wheat;
}

.sn-container {
  left: 1299.6px;
  top: 295px;
  width: 560px;
  height: 300px;

  .wrap-container {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 260px;
  }

  .chartsdom {
    width: 100%;
    height: 100%;
  }

  .back-chart {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url(../../assets/img/back_chart.png) no-repeat center;
  }



}

@-webkit-keyframes arrow-cir1 {
  0% {
    offset-distance: 40%;
    opacity: 1;
  }

  100% {
    offset-distance: 140%;
    opacity: 1;
  }
}

@keyframes arrow-cir1 {
  0% {
    offset-distance: 40%;
    opacity: 1;
  }

  100% {
    offset-distance: 140%;
    opacity: 1;
  }
}

@-webkit-keyframes arrow-cir2 {
  0% {
    offset-distance: 0%;
    opacity: 1;
  }

  100% {
    offset-distance: 100%;
    opacity: 1;
  }
}

@keyframes arrow-cir2 {
  0% {
    offset-distance: 0%;
    opacity: 1;
  }

  100% {
    offset-distance: 100%;
    opacity: 1;
  }
}
</style>

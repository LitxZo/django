
<template>
  <div class="business-container"> 
    <div class="chart" id="chart_left1" ></div>
    <el-dialog title="群众问题反馈信息" :visible.sync="dialogTableVisible" >
      <el-table :data="gridData" >
        <el-table-column property="title" label="标题" width="150"></el-table-column>
        <el-table-column property="date" label="处理时间" width="150"></el-table-column>
        <el-table-column property="name" label="申请人" width="200"></el-table-column>
        <el-table-column property="ishandle" label="是否处理"></el-table-column>
      </el-table>
      <Empty />
    </el-dialog>
  </div>
</template>

<script>
import Empty from "@/components/Village/empty.vue";

export default {
  name: "business",
  components: {Empty},
  data() {
    return {
      dialogTableVisible: false,
      gridData: [
            {
                "title": "群众反馈4",
                "name": "王磊",
                "date": "2022-1-1",
                "ishandle": "是"
            },
            {
                "title": "群众反馈5",
                "name": "王磊",
                "date": "2022-1-1",
                "ishandle": "是"
            },
            {
                "title": "群众反馈6",
                "name": "王磊",
                "date": "2022-1-1",
                "ishandle": "是"
            },
      ],
    }
  },
  mounted() {
    this.getEchartLeft1();
    this.get_feedback();
  },
  methods: {
    getEchartLeft1() {
      // 实例化对象
      let myChart = echarts.init(document.getElementById('chart_left1'));
      let charts = { // 按顺序排列从大到小
        cityList: ['金融行业', '电子政务', '文创版权', '教育行业', '智慧停车', '医疗互联', '物流行业'],
        cityData: [1500, 1200, 900, 600, 400, 300, 100]
      }

      let top10CityList = charts.cityList;
      let top10CityData = charts.cityData;
      let color = ['rgba(14,109,236', 'rgba(255,91,6', 'rgba(100,255,249', 'rgba(248,195,248', 'rgba(110,234,19', 'rgba(255,168,17', 'rgba(218,111,227'];

      let lineY = [];
      for (let i = 0; i < charts.cityList.length; i++) {
        let x = i
        if (x > color.length - 1) {
          x = color.length - 1
        }
        let data = {
          name: charts.cityList[i],
          color: color[x] + ')',
          value: top10CityData[i],
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: color[x] + ', 0.3)'
              }, {
                offset: 1,
                color: color[x] + ', 1)'
              }], false),
              barBorderRadius: 10
            },
            emphasis: {
              shadowBlur: 15,
              shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
          }
        }
        lineY.push(data)
      }  

      // 指定配置和数据
      let option = {
        color: color,
        tooltip: {
          trigger: 'item',
        },
        grid: {
          borderWidth: 0,
          top: '5%',
          left: '2%',
          right: '2%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          inverse: true,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            inside: false,
            textStyle: {
              color: '#b3ccf8',
              fontSize: 13
            },
          },
          data: top10CityList
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            inside: false,
            textStyle: {
              color: '#b3ccf8',
              fontSize: 13
            },
            formatter: (val) => {
              return `${val}`
            }
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: top10CityData.reverse()
        }],
        series: [{
          name: '',
          type: 'bar',
          zlevel: 2,
          barWidth: '10px',
          data: lineY,
          animationDuration: 1500,
          label: {
            normal: {
              color: '#b3ccf8',
              show: false,
              position: [0, '-15px'],
              textStyle: {
                fontSize: 13
              },
              formatter: (a, b) => {
                return a.name;
              }
            }
          }
        }]
      };

      // 把配置给实例对象
      myChart.setOption(option, true);
      myChart.on('click', (e) => {
        this.dialogTableVisible = true;
        console.log(e.data)
      })
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },

    get_feedback(){
      console.log("点击了")
      this.$http.get('http://127.0.0.1:8001/vue/get_feedback').then((response)=> {
        var res = JSON.parse(response.bodyText)
        console.log(res)
        if (res.err_num == 0) {
          this.gridData = res['list']
        } else {
          this.$message.error('查询数据失败')
          console.log(res['msg'])
        }
      })
    },
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.business-container {
  .chart {
    height: 3rem;
  }
}
</style>

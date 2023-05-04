<template>
  <div class="distribution-container">
    <div class="chart" id="chart_right2"></div>
    <el-dialog title="人员信息" :visible.sync="dialogTableVisible" >
      <el-table :data="gridData" >
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "distribution",
  data() {
    return {
      dialogTableVisible: false,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '江苏省南通市海安市李堡镇蒋庄村十一组七号'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '江苏省南通市海安市李堡镇蒋庄村十一组七号'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '江苏省南通市海安市李堡镇蒋庄村十一组七号'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '江苏省南通市海安市李堡镇蒋庄村十一组七号'
      }],
    };
  },
  mounted() {
    this.getEchartRight2();
  },
  methods: {
    getEchartRight2() {
      let myChart = echarts.init(document.getElementById('chart_right2'));
      let option = {
        color: ['#EAEA26', '#906BF9', '#FE5656', '#01E17E', '#3DD1F9', '#FFAD05', '#4465fc'],
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        polar: {},
        angleAxis: {
          interval: 1,
          type: 'category',
          data: [],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#0B4A6B',
              width: 5,
              type: 'solid'
            },
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: '#0B4A6B',
            margin: 8,
            fontSize: 16
          },
        },
        radiusAxis: {
          min: 40,
          max: 120,
          interval: 20,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#0B3E5E',
              width: 1,
              type: 'solid'
            },
          },
          axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: '#0B3E5E',
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: '#0B3E5E',
              width: 2,
              type: "solid"
            }
          }
        },
        calculable: true,
        series: [{
          type: 'pie',
          radius: ['6%', '10%'],
          hoverAnimation: false,
          labelLine: {
            normal: {
              show: false,
              length: 30,
              length2: 50
            },
            emphasis: {
              show: false
            }
          },
          tooltip: {
            show: false
          },
          data: [{
            name: '',
            value: 0,
            itemStyle: {
              normal: {
                color: '#0B4A6B'
              }
            }
          }]
        }, {
          type: 'pie',
          radius: ['90%', '95%'],
          hoverAnimation: false,
          labelLine: {
            normal: {
              show: false,
              length: 30,
              length2: 50
            },
            emphasis: {
              show: false
            }
          },
          tooltip: {
            show: false
          },
          data: [{
            name: '',
            value: 0,
            itemStyle: {
              normal: {
                color: '#0B4A6B'
              }
            }
          }]
        }, {
          stack: 'a',
          type: 'pie',
          radius: ['20%', '80%'],
          roseType: 'area',
          zlevel: 10,
          label: {
            normal: {
              show: true,
              formatter: '{b}',
              textStyle: {
                fontSize: 12,
              },
              position: 'outside'
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 15,
              length2: 50,
              lineStyle: {
                type: 'dotted'
              }
            },
            emphasis: {
              show: true
            }
          },
          data: [{
            value: 35,
            name: '大街'
          }, {
            value: 28,
            name: '村头'
          }, {
            value: 23,
            name: '村东'
          }, {
            value: 18,
            name: '村西'
          },]
        }]
      }

      myChart.setOption(option, true);
      myChart.on('click', (e) => {
        this.dialogTableVisible = true;
        console.log(e.data)
      })
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
    // handleClose(done) {
    //   this.$confirm('确认关闭？')
    //       .then(_ => {
    //         done();
    //       })
    //       .catch(_ => {
    //       });
    // }
  },
  beforeDestroy() {

  },

};
</script>

<style lang="scss" scoped>
.distribution-container {
  .chart {
    height: 3rem;
  }
}
</style>



<template>
  <div class="talent-container"> 
    <div class="chart" id="chart_left2"></div> 
    <el-dialog title="人员信息" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "talent",
  data() {
    return {
      dialogTableVisible: false,
      gridData: [{
        date: '2016-05-02',
        name: '张三',
        address: '江苏省南通市海安市李堡镇蒋庄村十一组七号'
      }, {
        date: '2016-05-04',
        name: '李四',
        address: '江苏省南通市海安市李堡镇蒋庄村十一组七号'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '江苏省南通市海安市李堡镇蒋庄村十一组七号'
      }, {
        date: '2016-05-03',
        name: '王雷',
        address: '江苏省南通市海安市李堡镇蒋庄村十一组七号'
      }],
    }
  },
  mounted() {
    this.getEchartLeft2();
  },
  methods: {
    getEchartLeft2() {
      let myChart = echarts.init(document.getElementById('chart_left2'));
      let scaleData = [{
        name: '年轻人',
        value: 5
      },{
        name: '中年人',
        value: 10
      },{
        name: '儿童',
        value: 10
      },{
        name: '老年人',
        value: 10
      },];
      let rich = {
        white: {
          color: '#ddd',
          align: 'center',
          padding: [3, 0]
        }
      };
      let placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      };
      let data = [];
      let color=['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
      for (let i = 0; i < scaleData.length; i++) {
        data.push({
          value: scaleData[i].value,
          name: scaleData[i].name,
          itemStyle: {
            normal: {
              borderWidth: 6,
              shadowBlur: 10,
              borderColor: color[i],
              shadowColor: color[i]
            }
          }
        }, {
          value: 2,
          name: '',
          itemStyle: placeHolderStyle
        });
      }

      let option = {
        series: [{
          name: '',
          type: 'pie',
          clockWise: false,
          radius: ['66%', '68%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: (params) => {
                  let percent = 0;
                  let total = 0;
                  for (let i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== '') {
                    return params.name + '\n{white|' + '占比' + percent + '%}';
                  } else {
                    return '';
                  }
                },
                rich: rich
              },
              labelLine: {
                length: 10,
                length2: 30,
                show: true,
                color: '#00ffff'
              }
            }
          },
          data: data
        }]
      }

      myChart.setOption(option, true);
      window.addEventListener('resize', () => {
        myChart.resize();
      });

      myChart.on('click', (e) => {
        this.dialogTableVisible = true;
        console.log(e.data)
      })
    },
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.talent-container {
  .chart {
    height: 3rem;
  }
}
</style>

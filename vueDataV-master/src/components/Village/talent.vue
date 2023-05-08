

<template>
  <div class="talent-container"> 
    <div class="chart" id="chart_left2"></div> 
    <el-dialog title="人口信息" :visible.sync="dialogTableVisible">
      <Empty2 />
      <div id="content" class="articalCont">

        <div class="TRS_Editor"><p>5月20日，海安李堡镇蒋庄村九久乐家庭农场连栋大棚内，洋溢着“小满”节气的丰盈氛围：早熟的油桃挂满枝头，火龙果花红得娇艳，夏黑葡萄绿得发紫。</p>
          <p>在大棚里照应游客的陈十俊一边忙碌着，一边告诉记者：“自从村里引进能人兴办家庭农场，我们村10多名低收入户来农场打工有了相对固定的劳务收入。其他不能直接参加劳动的张广兴等40多个低收入户的收入也都来源于村内招引企业的直接补助和分红。”</p>
          <p>“去年我们村所有低收入户都摘掉了‘贫困帽’，不仅如此，村营收入也从过去的‘倒挂’一跃年收入82万元。”村会计储开琴高兴地说。</p>
          <div class="img-div">
            <img src="https://wm.jschina.com.cn/9658/202005/W020200522518994273166.jpg" style="margin: auto;">
          </div>
          <p>蒋庄村是离李堡集镇区最边远的村，全村共有38个村民小组，1710户，5010人，是个典型的纯农业村。过去一不靠集镇，二不靠交通要道。随着沿海经济大开发和长三角经济开发战略实施，海安通沿海的328国道穿村而过。“一条国道就是黄金大道，假如我当时抓不住这个机遇，蒋庄村还会穷下去。”村党总支部书记杭海峰说。</p>
          <p>2013年，40岁出头的杭海峰被镇党委任命为蒋庄村党总支部书记。“接手时，村民收入不高，村里的规费都难收齐。不怪村民不听话，是确实穷啊！”杭海峰说。</p>
          <p>穷则思变，财富等不来。杭海峰从328国道这条黄金大道开始谋划，统一村内一班人思想：“调整规划，兴办蒋庄村工业园。”这一思路得到了村全体党员的支持。</p>
          <p>杭海峰主动找到镇上的领导，把利用国道发展工业园经济的构想与党委主要负责同志汇报，得到了充分的认可。“我们当时，就横下了一条心，苦干几年，不信逆转不了村里的困境。”</p>

          <p>就这样，杭海峰和老干部们一起围绕蒋庄村工业园区的一张蓝图，用了一年时间建成园区道路2.2公里，10千伏高压电线随道架设，自来水、污水管网全部匹配到位，赢得了“筑巢引凤”的第一时间。南通宏威机床有限公司原来是在住宅围墙内发展起来的企业，工业园区建成后，第一个进园。“如果不是当时果断决定到蒋庄投资，我的企业就没有现在这个规模。”董事长杭庆宏说。宏威机床年销售额达1.2亿元，吸纳蒋庄村48名村民在家门口就业，仅去年企业给蒋庄村的税收分成就有12万元。</p>
          <p>招商引资需要杭海峰，企业进来建设上遇到困难也要找他，村委会主任吴礼宏说：“为了园区的发展和村级经济的振兴，杭书记吃了许多苦。”“没有8年的苦干，蒋庄村不会由穷变富，由富变美。村集体经济不像过去捉襟见肘，村民的物资、文化生活变得更加富足。”村委会老干部杭永华说。</p>

          <p>如今，蒋庄村工业园入园企业达20多家，行业覆盖机床制造、消防管道、纺织、化纤、渔网线加工、扫地机械，环保设备等，年产值近10亿元，村每年获得村营收入超过80万元，最多时超百万元。与之同步的，蒋庄村现代农业、生态农业、休闲农业日新月异，投资千万元的南通水山生态园，已具备游客接待功能，投资千万元的观光、高端瓜果采摘一体的九久乐家庭农场已初具规模。近两年，流转土地1000亩以上，为农民增收创造了优异的条件，农民纯收入超2.6万元。</p>
          <p>村级经济发展了，村基础投入也就有了条件。2019年，蒋庄村围绕农村环境综合整治、“四清四化”专项行动、人居环境示范点建设和“河长制"清水工程等项目，整合各级资金进行了道路拓宽2.5公里，绿化提档升级新栽香樟480棵，两条主干道路灯210盏，草皮12000平方米，污水管网建设3.5公里，新建了乡村大舞台，新增文化墙近500平方米。</p>
          <p>苦干8年，如今，蒋庄村已经蜕变成海安市红旗村和村营收入五星级村，蒋庄村党总支被评为五星级党支部，连续2年成功举办“最美蒋庄，最靓奖状”蒋庄村民文化节......这一幅幅“蝶变图”，成为了蒋庄村村民幸福的源泉。</p></div>
        <p></p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Empty from "@/components/Village/empty.vue";
import Empty1 from "@/components/Village/empty1.vue";
import Empty2 from "@/components/Village/empty2.vue";

export default {
  name: "talent",
  components: {Empty2, Empty1, Empty},
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

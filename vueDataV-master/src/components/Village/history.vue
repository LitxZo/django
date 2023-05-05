
<template>
  <div class="history-container">
    <el-dialog title="发展历程" :visible.sync="dialogTableVisible" >
      <!-- <el-table :data="gridData" >
        <el-table-column property="context" label="发展历程" width="200"></el-table-column>

      </el-table> -->
      <div id="content" class="articalCont">

        <div class="TRS_Editor"><p>5月20日，海安李堡镇蒋庄村九久乐家庭农场连栋大棚内，洋溢着“小满”节气的丰盈氛围：早熟的油桃挂满枝头，火龙果花红得娇艳，夏黑葡萄绿得发紫。</p>
        <p>在大棚里照应游客的陈十俊一边忙碌着，一边告诉记者：“自从村里引进能人兴办家庭农场，我们村10多名低收入户来农场打工有了相对固定的劳务收入。其他不能直接参加劳动的张广兴等40多个低收入户的收入也都来源于村内招引企业的直接补助和分红。”</p>
        <p>“去年我们村所有低收入户都摘掉了‘贫困帽’，不仅如此，村营收入也从过去的‘倒挂’一跃年收入82万元。”村会计储开琴高兴地说。</p>

        <p>蒋庄村是离李堡集镇区最边远的村，全村共有38个村民小组，1710户，5010人，是个典型的纯农业村。过去一不靠集镇，二不靠交通要道。随着沿海经济大开发和长三角经济开发战略实施，海安通沿海的328国道穿村而过。“一条国道就是黄金大道，假如我当时抓不住这个机遇，蒋庄村还会穷下去。”村党总支部书记杭海峰说。</p>
        <p>2013年，40岁出头的杭海峰被镇党委任命为蒋庄村党总支部书记。“接手时，村民收入不高，村里的规费都难收齐。不怪村民不听话，是确实穷啊！”杭海峰说。</p>
        <p>穷则思变，财富等不来。杭海峰从328国道这条黄金大道开始谋划，统一村内一班人思想：“调整规划，兴办蒋庄村工业园。”这一思路得到了村全体党员的支持。</p>
        <p>杭海峰主动找到镇上的领导，把利用国道发展工业园经济的构想与党委主要负责同志汇报，得到了充分的认可。“我们当时，就横下了一条心，苦干几年，不信逆转不了村里的困境。”</p>
      
        <p>就这样，杭海峰和老干部们一起围绕蒋庄村工业园区的一张蓝图，用了一年时间建成园区道路2.2公里，10千伏高压电线随道架设，自来水、污水管网全部匹配到位，赢得了“筑巢引凤”的第一时间。南通宏威机床有限公司原来是在住宅围墙内发展起来的企业，工业园区建成后，第一个进园。“如果不是当时果断决定到蒋庄投资，我的企业就没有现在这个规模。”董事长杭庆宏说。宏威机床年销售额达1.2亿元，吸纳蒋庄村48名村民在家门口就业，仅去年企业给蒋庄村的税收分成就有12万元。</p>
        <p>招商引资需要杭海峰，企业进来建设上遇到困难也要找他，村委会主任吴礼宏说：“为了园区的发展和村级经济的振兴，杭书记吃了许多苦。”“没有8年的苦干，蒋庄村不会由穷变富，由富变美。村集体经济不像过去捉襟见肘，村民的物资、文化生活变得更加富足。”村委会老干部杭永华说。</p>
     
        <p>如今，蒋庄村工业园入园企业达20多家，行业覆盖机床制造、消防管道、纺织、化纤、渔网线加工、扫地机械，环保设备等，年产值近10亿元，村每年获得村营收入超过80万元，最多时超百万元。与之同步的，蒋庄村现代农业、生态农业、休闲农业日新月异，投资千万元的南通水山生态园，已具备游客接待功能，投资千万元的观光、高端瓜果采摘一体的九久乐家庭农场已初具规模。近两年，流转土地1000亩以上，为农民增收创造了优异的条件，农民纯收入超2.6万元。</p>
        <p>村级经济发展了，村基础投入也就有了条件。2019年，蒋庄村围绕农村环境综合整治、“四清四化”专项行动、人居环境示范点建设和“河长制"清水工程等项目，整合各级资金进行了道路拓宽2.5公里，绿化提档升级新栽香樟480棵，两条主干道路灯210盏，草皮12000平方米，污水管网建设3.5公里，新建了乡村大舞台，新增文化墙近500平方米。</p>
        <p>苦干8年，如今，蒋庄村已经蜕变成海安市红旗村和村营收入五星级村，蒋庄村党总支被评为五星级党支部，连续2年成功举办“最美蒋庄，最靓奖状”蒋庄村民文化节......这一幅幅“蝶变图”，成为了蒋庄村村民幸福的源泉。（通讯员 顾兴余 徐锋 康传广 记者 陈静 图：顾兴余 徐锋 康传广）</p></div>
        <p></p>
</div>
    </el-dialog>
    <div class="tabs"> 
      <ul class="tab-tilte">
        <li v-for="(itemTit, index) in tabTitle" @click="onClick(index)" :key="itemTit" @mouseover="handleMouseOver(index)" @mouseout="handleMouseOut(index)" :class="{active: cur == index}">
          {{ itemTit }}
        </li>
      </ul>
      <div class="indicatorDots">
        <span :class="{active: cur == i}" v-for="(v, i) in tabTitle" :key="i"></span>
      </div>
      <div class="tab-content">
        <div v-for="(itemCon, index) in tabCon" v-show="cur == index" :key="itemCon">
          <div v-for="(v, i) in itemCon" :key="i" class="content">
            {{ v }}
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: "history",
  data() {
    return {
      dialogTableVisible: false,
      gridData: [{
        context: ""
      },],
      timer: null,
      tabTitle: ['2015', '2016', '2017', '2018', '2019', '2020'],
      tabCon: [
        [
          '2015.10，公司成立，正式布局区块链、大数据方向',
          '2015.11，与国家超算吕梁云计算中心签订战略合作协议',
          '2015.12，建设高性能计算服务平台，基于区块链技术打造文创基础云平台'
        ],
        [
          '2016.03，公司提供的高性能计算服务得到中科院认可，就此达成合作',
          '2016.07，与国家超算广州中心签订战略合作协议，启动区块链底层公链开发技术论证',
          '2016.10，启动区块链底层公链开发，开拓数字资产管理业务',
          '2016.11，与国家超级计算长沙中心签订战略合作协议'
        ],
        [
          '2017.03，与国家级长沙经开区共建博士创新创业园',
          '2017.07，开发GBI区块链资讯信息平台',
          '2017.09，打造区块链信息服务平台，开拓区块链安全业务',
          '2017.12，区块链底层公链测试链上线运行，启动链上DAPP开发'
        ],
        [
          '2018.05，与长沙经开区共建区块链产业园，区块链底层公链上线运行',
          '2018.08，公链分布式存储网络正式运行',
          '2018.10，区块链安全技术检测中心正式运行，公链多侧链技术落地，链上应用上线',
          '2018.12，被评为中国区块链百强企业'
        ],
        [
          '2019.03，上线分布式存储系统UDFS，更新优壹号V2.0.0版，完成Ulord V2.0版白皮书全部规划',
          '2019.07，文创版权公共服务平台优版权正式上线',
          '2019.08，承担国家网信办区块链相关课题研究',
        ],
        [
          '2020.03，完成分布式计算框架和贡献证明算法的设计和开发',
          '2020.05，完成分布式计算资源动态调度和管理开发',
          '2020.10，推出链云计算生态，完成计算平台和API接口开发，完成优壹号对计算Dapp支持'
        ]
      ],
      cur: 0, //默认选中第一个tab
    }
  },
  mounted() {
    this.getTimer();
  },
  methods: {
    getTimer() {
      this.timer = setInterval(() => {
        this.cur++;
        if (this.cur == this.tabTitle.length) {
          this.cur = 0;
        }
      }, 2000)
    },
    handleMouseOver(index) {
      this.cur = index;
      clearInterval(this.timer);
    },
    handleMouseOut(index) {
      this.getTimer();
    },
    onClick(index) {
      this.dialogTableVisible = true;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.history-container {
  margin: 0 0.125rem;
  .tabs {
    display: flex;
    .tab-tilte {
      li {
        color: #fff;
        background-color: rgba(36, 196, 255, 0.5);
        text-align: center;
        cursor: pointer;
        font-size: 0.125rem;
        width: 1.0rem;
        height: 0.35rem;
        line-height: 0.35rem;
        margin-bottom: 0.175rem;
        -webkit-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        &.active{
          background: linear-gradient(to right, #1b81bc, 20%, #24c4ff);
          color: #fff;
        }
      }
    }
    .indicatorDots {
      background-color: rgba(36, 196, 255, 0.5);
      width: 1px;
      height: 2.8rem;
      margin: 0.0625rem 0 0 0.375rem;
      span {
        display: block;
        height: 0.525rem;
        margin-left: -0.0875rem;
        &:after {
          content: '';
          display: block;
          width: 0.125rem;
          height: 0.125rem;
          background: #ddd;
          -webkit-border-radius: 50%;
          -ms-border-radius: 50%;
          -o-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          border: 2px solid #1b81bc;
        }
        &.active {
          &:after {
            background: #24c4ff;
            -webkit-box-shadow: 0 0 0.125rem #1b81bc;
            box-shadow: 0 0 0.125rem #1b81bc;
          }
        }
      }
    }
    .tab-content {
      display: flex;
      align-items: center;
      div {
        margin-left: 0.1875rem;
        color: #fff;
        .content {
          font-size: 0.175rem;
          line-height: 0.275rem;
          padding: 0.1rem 0;
        }
      }
    }
  }
}
</style>


<template>
  <div class="brand-container">
    <div class="wrap">
      <header>
        <div class="weather">
          <img :src="imgSrc">
          <span class="tem">{{ weatcherData.tem }}°C</span>
          <span class="wea">{{ weatcherData.wea }}</span>
        </div>
        <h2>李堡镇门户网站</h2>
        <div class="showTime">
          <span class="time">{{ nowTime }}</span>
          <span class="date">
            <span>{{ week }}</span>
            <span>{{ date }}</span>
          </span>
          <el-tooltip class="item" effect="dark" content="管理系统导航栏" placement="top">
            <div @click="drawer = true" type="primary" style="margin-left: 16px; cursor:pointer;">
              <svg t="1672142918768" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4020" width="32" height="32">
                <path
                  d="M416 554.666667c29.44 0 53.333333 23.893333 53.333333 53.333333V768c0 29.44-23.893333 53.333333-53.333333 53.333333H256c-29.44 0-53.333333-23.893333-53.333333-53.333333v-160c0-29.44 23.893333-53.333333 53.333333-53.333333zM768 554.666667c29.44 0 53.333333 23.893333 53.333333 53.333333V768c0 29.44-23.893333 53.333333-53.333333 53.333333h-160c-29.44 0-53.333333-23.893333-53.333333-53.333333v-160c0-29.44 23.893333-53.333333 53.333333-53.333333z m-352 42.666666H256a10.666667 10.666667 0 0 0-10.666667 10.666667V768c0 5.888 4.778667 10.666667 10.666667 10.666667h160A10.666667 10.666667 0 0 0 426.666667 768v-160a10.666667 10.666667 0 0 0-10.666667-10.666667zM768 597.333333h-160a10.666667 10.666667 0 0 0-10.666667 10.666667V768c0 5.888 4.778667 10.666667 10.666667 10.666667H768a10.666667 10.666667 0 0 0 10.666667-10.666667v-160A10.666667 10.666667 0 0 0 768 597.333333zM416 202.666667c29.44 0 53.333333 23.893333 53.333333 53.333333v160c0 29.44-23.893333 53.333333-53.333333 53.333333H256c-29.44 0-53.333333-23.893333-53.333333-53.333333V256c0-29.44 23.893333-53.333333 53.333333-53.333333z m272 0a133.333333 133.333333 0 1 1 0 266.666666 133.333333 133.333333 0 0 1 0-266.666666z m-272 42.666666H256a10.666667 10.666667 0 0 0-10.666667 10.666667v160c0 5.888 4.778667 10.666667 10.666667 10.666667h160a10.666667 10.666667 0 0 0 10.666667-10.666667V256a10.666667 10.666667 0 0 0-10.666667-10.666667z m272 0a90.666667 90.666667 0 1 0 0 181.333334 90.666667 90.666667 0 0 0 0-181.333334z"
                  fill="#3eabc6" p-id="4021"></path>
              </svg>
            </div>
          </el-tooltip>
          <div class="menu-form">
            <el-drawer title="管理系统导航栏" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
              <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#0a1649" text-color="#7ef0ff">
                <el-menu-item index="1" @click="gohome">
                  <i class="el-icon-menu"></i>
                  <span slot="title" >首页</span>
                </el-menu-item>
                <el-menu-item index="2" @click="goJvillage">
                  <i class="el-icon-menu"></i>
                  <span slot="title" >蒋庄村</span>
                </el-menu-item>
                <el-menu-item index="3" @click="goBvillage">
                  <i class="el-icon-menu"></i>
                  <span slot="title">贲集村</span>
                </el-menu-item>
                
                <el-menu-item index="4" @click="goHoutai">
                  <i class="el-icon-menu"></i>
                  <span slot="title">后台管理系统</span>
                </el-menu-item>
              </el-menu>
            </el-drawer>
          </div>
        </div>
      </header>

      <section class="mainbox">
        <div class="item left">
          <div class="border">
            <div class="item1">
              <dynamicList />
            </div>
            <div class="item2">
              <rainbow />
            </div>
          </div>
        </div>

        <div class="item center">
          <video muted autoplay="autoplay" loop="loop" height="400px" width="100%">
            <source src="../../src/assets/img/1.mp4" type="video/mp4" />
          </video>
          <div class="resume">
            <div class="resume-hd">
              <ul>
                <li>
                  <countTo :startVal='startVal' :endVal='490' :duration='6000' separator=""></countTo>
                </li>
                <li>
                  <countTo :startVal='startVal' :endVal='75' :duration='6000' separator=""></countTo>
                </li>
                <li>
                  <countTo :startVal='startVal' :endVal='3000' :duration='6000' separator=""></countTo>
                </li>
              </ul>
            </div>
            <div class="resume-bd">
              <ul>
                <li>县内人口（单位：人）</li>
                <li>村镇人口占比（单位：%）</li>
                <li>人均收入（单位：元）</li>
              </ul>
            </div>
          </div>
          <div class="init">
            <div class="viedo1">
              <video muted autoplay="autoplay" loop="loop" height="250px" width="95%">
                <source src="../../src/assets/img/2.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="viedo2">
              <video muted autoplay="autoplay" loop="loop" height="250px" width="95%">
                <source src="../../src/assets/img/3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>


        </div>

        <div class="item right">
          <seamless />
          <ringPie />
          <waterPolo2/>
          <waterPolo />
        </div>
      </section>

    </div>

  </div>
</template>

<script>
import '@/assets/js/flexible'
import '@/assets/js/china'
import countTo from 'vue-count-to'

export default {
  name: 'jvillage',
  components: {
    countTo
  },
  data() {
    return {
      nowTime: '',
      week: '',
      date: '',
      timer: null,
      imgSrc: '',
      weatcherData: {},
      startVal: 0,
      geoCoordMap: {},



    }
  },
  mounted() {
    this.getWeather();
    this.timer = setInterval(() => {
      this.getWeather();
    }, 1000 * 60 * 60)

    this.nowTimes();
    this.getEchart();
  },
  methods: {
    timeFormate(timeStamp) { //显示当前时间
      let newDate = new Date(timeStamp);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
      let date = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
      let hh = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
      let mm = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
      let ss = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds();
      let week = newDate.getDay();
      let weeks = ['日', '一', '二', '三', '四', '五', '六'];
      let getWeek = '星期' + weeks[week];
      this.week = getWeek;
      this.date = year + '.' + month + '.' + date;
      this.nowTime = hh + ':' + mm + ':' + ss;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes)
      this.nowTimes = null;
    },
    gohome(){
      this.$router.push({
        path: '/'
       })
    },
    goJvillage(){
      this.$router.push({
        path: '/jvillage'
       })
    },
    goBvillage(){
      this.$router.push({
        path: '/bvillage'
       })
    },
    goHoutai(){
      window.location.href='http://127.0.0.1:8000/index';
    },
    getWeather() { // 第三方天气api接口
      axios.get('https://www.tianqiapi.com/api/', {
        params: {
          appid: '26148275',
          appsecret: '2id6H48Y',
          version: 'v6'
        }
      }).then(res => {
        if (res.data) {
          if (res.data.wea_img == 'xue') {
            this.imgSrc = require('../assets/img/brand/xue.png');
          } else if (res.data.wea_img == 'yin') {
            this.imgSrc = require('../assets/img/brand/yin.png');
          } else if (res.data.wea_img == 'yu' || res.data.wea_img == 'bingbao') {
            this.imgSrc = require('../assets/img/brand/yu.png');
          } else if (res.data.wea_img == 'yun') {
            this.imgSrc = require('../assets/img/brand/yun.png');
          } else if (res.data.wea_img == 'wu') {
            this.imgSrc = require('../assets/img/brand/wu.png');
          } else if (res.data.wea_img == 'shachen') {
            this.imgSrc = require('../assets/img/brand/shachen.png');
          } else if (res.data.wea_img == 'lei') {
            this.imgSrc = require('../assets/img/brand/lei.png');
          } else {
            this.imgSrc = require('../assets/img/brand/qing.png');
          }
          this.weatcherData = res.data;
        }
      }).catch(err => {
        console.log(err)
      })
    },


  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style lang="scss" scoped>
.init {
  display: flex;
}

.brand-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;

  .wrap {
    background: url(../assets/img/bj.jpg) no-repeat #000;
    background-size: cover;
    line-height: 1.15;

    header {
      position: relative;
      height: 1rem;
      background: url(../assets/img/brand/head_bg.png) no-repeat top center;
      background-size: 100% 100%;

      h2 {
        color: #7ef0ff;
        font-size: 0.475rem;
        text-align: center;
        line-height: 0.75rem;
        letter-spacing: 1px;
      }

      .weather {
        position: absolute;
        left: 1.375rem;
        top: 0.35rem;
        font-size: 0.25rem;
        color: rgba(126, 240, 255, .7);

        img {
          width: .45rem;
        }

        span {
          display: inline-block;
        }

        .tem {
          margin: 0 .1rem 0 .2rem;
        }
      }

      .showTime {
        position: absolute;
        right: 1.375rem;
        top: 0.5rem;
        color: rgba(126, 240, 255, .7);
        display: flex;

        .time {
          font-size: .28rem;
          margin-right: .18rem;
        }

        .date {
          span {
            display: block;

            &:nth-child(1) {
              font-size: .12rem;
              text-align: right;
            }

            &:nth-child(2) {
              font-size: .14rem;
            }
          }
        }
      }
    }

    .mainbox {
      min-width: 1024px;
      max-width: 1920px;
      padding: 0.125rem 0.125rem 0;
      display: flex;

      .item {
        flex: 3;

        &.center {
          flex: 4;
          margin: 0 0.125rem 0.1rem;
          overflow: hidden;

          .resume {
            background: rgba(101, 132, 226, 0.1);
            padding: 0.1875rem;

            .resume-hd {
              position: relative;
              border: 1px solid rgba(25, 186, 139, 0.17);

              ul {
                display: flex;

                %li-line {
                  content: "";
                  position: absolute;
                  height: 50%;
                  width: 1px;
                  background: rgba(255, 255, 255, 0.2);
                  top: 25%;
                }

                li {
                  position: relative;
                  flex: 1;
                  text-align: center;
                  height: 1.2rem;
                  line-height: 1.2rem;
                  font-size: 0.65rem;
                  color: #ffeb7b;
                  padding: 0.05rem 0;
                  font-family: 'DIGITALDREAMFAT';
                  font-weight: bold;

                  &:nth-child(2) {
                    &:after {
                      @extend %li-line;
                      right: 0;
                    }

                    &:before {
                      @extend %li-line;
                      left: 0;
                    }
                  }
                }
              }

              &:before {
                content: "";
                position: absolute;
                width: 30px;
                height: 10px;
                border-top: 2px solid #02a6b5;
                border-left: 2px solid #02a6b5;
                top: 0;
                left: 0;
              }

              &:after {
                content: "";
                position: absolute;
                width: 30px;
                height: 10px;
                border-bottom: 2px solid #02a6b5;
                border-right: 2px solid #02a6b5;
                right: 0;
                bottom: 0;
              }
            }

            .resume-bd {
              ul {
                display: flex;

                li {
                  flex: 1;
                  height: 0.5rem;
                  line-height: 0.5rem;
                  text-align: center;
                  font-size: 0.225rem;
                  color: rgba(255, 255, 255, 0.7);
                  padding-top: 0.125rem;
                }
              }
            }
          }
        }

        %map-style {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6.475rem;
          height: 6.475rem;
          background: url(../assets/img/brand/map.png) no-repeat;
          background-size: 100% 100%;
          opacity: 0.3;
        }



        .panel {
          position: relative;
          height: 3.875rem;
          border: 1px solid rgba(25, 186, 139, 0.17);
          background: rgba(255, 255, 255, 0.04) url(../assets/img/brand/line.png);
          padding: 0 0.1875rem 0;
          margin-bottom: 0.1875rem;

          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }

          &:after {
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }

          .panel-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;

            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }

            &:after {
              position: absolute;
              bottom: 0;
              right: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }

          h2 {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #fff;
            font-size: 0.225rem;
            font-weight: 400;

            a {
              margin: 0 0.1875rem;
              color: #fff;
              text-decoration: none;
            }
          }

          .chart {
            height: 3rem;
          }
        }
      }

    }

  }

}

.init {
  display: flex;
  margin-left: 15px;

}

@-webkit-keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@-webkit-keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}

@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}
</style>

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-7959fabd"],
  {
    1400: function(t, e, a) {
      t.exports = a.p + "media/3.46eb96c0.mp4";
    },
    "146d": function(t, e, a) {},
    "45ae": function(t, e, a) {
      "use strict";
      var i = a("146d"),
        s = a.n(i);
      s.a;
    },
    e14c: function(t, e, a) {
      t.exports = a.p + "media/2.7af620fb.mp4";
    },
    e96b: function(t, e, a) {
      "use strict";
      a.r(e);
      var i = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "brand-container" }, [
            i("div", { staticClass: "wrap" }, [
              i("header", [
                i("div", { staticClass: "weather" }, [
                  i("img", { attrs: { src: t.imgSrc } }),
                  i("span", { staticClass: "tem" }, [
                    t._v(t._s(t.weatcherData.tem) + "°C"),
                  ]),
                  i("span", { staticClass: "wea" }, [
                    t._v(t._s(t.weatcherData.wea)),
                  ]),
                ]),
                i("h2", [t._v("贲集村智慧平台系统")]),
                i(
                  "div",
                  { staticClass: "showTime" },
                  [
                    i("span", { staticClass: "time" }, [t._v(t._s(t.nowTime))]),
                    i("span", { staticClass: "date" }, [
                      i("span", [t._v(t._s(t.week))]),
                      i("span", [t._v(t._s(t.date))]),
                    ]),
                    i(
                      "el-tooltip",
                      {
                        staticClass: "item",
                        attrs: {
                          effect: "dark",
                          content: "管理系统导航栏",
                          placement: "top",
                        },
                      },
                      [
                        i(
                          "div",
                          {
                            staticStyle: {
                              "margin-left": "16px",
                              cursor: "pointer",
                            },
                            attrs: { type: "primary" },
                            on: {
                              click: function(e) {
                                t.drawer = !0;
                              },
                            },
                          },
                          [
                            i(
                              "svg",
                              {
                                staticClass: "icon",
                                attrs: {
                                  t: "1672142918768",
                                  viewBox: "0 0 1024 1024",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "p-id": "4020",
                                  width: "32",
                                  height: "32",
                                },
                              },
                              [
                                i("path", {
                                  attrs: {
                                    d:
                                      "M416 554.666667c29.44 0 53.333333 23.893333 53.333333 53.333333V768c0 29.44-23.893333 53.333333-53.333333 53.333333H256c-29.44 0-53.333333-23.893333-53.333333-53.333333v-160c0-29.44 23.893333-53.333333 53.333333-53.333333zM768 554.666667c29.44 0 53.333333 23.893333 53.333333 53.333333V768c0 29.44-23.893333 53.333333-53.333333 53.333333h-160c-29.44 0-53.333333-23.893333-53.333333-53.333333v-160c0-29.44 23.893333-53.333333 53.333333-53.333333z m-352 42.666666H256a10.666667 10.666667 0 0 0-10.666667 10.666667V768c0 5.888 4.778667 10.666667 10.666667 10.666667h160A10.666667 10.666667 0 0 0 426.666667 768v-160a10.666667 10.666667 0 0 0-10.666667-10.666667zM768 597.333333h-160a10.666667 10.666667 0 0 0-10.666667 10.666667V768c0 5.888 4.778667 10.666667 10.666667 10.666667H768a10.666667 10.666667 0 0 0 10.666667-10.666667v-160A10.666667 10.666667 0 0 0 768 597.333333zM416 202.666667c29.44 0 53.333333 23.893333 53.333333 53.333333v160c0 29.44-23.893333 53.333333-53.333333 53.333333H256c-29.44 0-53.333333-23.893333-53.333333-53.333333V256c0-29.44 23.893333-53.333333 53.333333-53.333333z m272 0a133.333333 133.333333 0 1 1 0 266.666666 133.333333 133.333333 0 0 1 0-266.666666z m-272 42.666666H256a10.666667 10.666667 0 0 0-10.666667 10.666667v160c0 5.888 4.778667 10.666667 10.666667 10.666667h160a10.666667 10.666667 0 0 0 10.666667-10.666667V256a10.666667 10.666667 0 0 0-10.666667-10.666667z m272 0a90.666667 90.666667 0 1 0 0 181.333334 90.666667 90.666667 0 0 0 0-181.333334z",
                                    fill: "#3eabc6",
                                    "p-id": "4021",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    i(
                      "div",
                      { staticClass: "menu-form" },
                      [
                        i(
                          "el-drawer",
                          {
                            attrs: {
                              title: "管理系统导航栏",
                              visible: t.drawer,
                              direction: t.direction,
                              "before-close": t.handleClose,
                            },
                            on: {
                              "update:visible": function(e) {
                                t.drawer = e;
                              },
                            },
                          },
                          [
                            i(
                              "el-menu",
                              {
                                staticClass: "el-menu-vertical-demo",
                                attrs: {
                                  "default-active": "3",
                                  "background-color": "#0a1649",
                                  "text-color": "#7ef0ff",
                                },
                              },
                              [
                                i(
                                  "el-menu-item",
                                  {
                                    attrs: { index: "1" },
                                    on: { click: t.gohome },
                                  },
                                  [
                                    i("i", { staticClass: "el-icon-menu" }),
                                    i(
                                      "span",
                                      {
                                        attrs: { slot: "title" },
                                        slot: "title",
                                      },
                                      [t._v("首页")]
                                    ),
                                  ]
                                ),
                                i(
                                  "el-menu-item",
                                  {
                                    attrs: { index: "2" },
                                    on: { click: t.goJvillage },
                                  },
                                  [
                                    i("i", { staticClass: "el-icon-menu" }),
                                    i(
                                      "span",
                                      {
                                        attrs: { slot: "title" },
                                        slot: "title",
                                      },
                                      [t._v("蒋庄村")]
                                    ),
                                  ]
                                ),
                                i(
                                  "el-menu-item",
                                  {
                                    attrs: { index: "3" },
                                    on: { click: t.goBvillage },
                                  },
                                  [
                                    i("i", { staticClass: "el-icon-menu" }),
                                    i(
                                      "span",
                                      {
                                        attrs: { slot: "title" },
                                        slot: "title",
                                      },
                                      [t._v("贲集村")]
                                    ),
                                  ]
                                ),
                                i(
                                  "el-menu-item",
                                  {
                                    attrs: { index: "4" },
                                    on: { click: t.goHoutai },
                                  },
                                  [
                                    i("i", { staticClass: "el-icon-menu" }),
                                    i(
                                      "span",
                                      {
                                        attrs: { slot: "title" },
                                        slot: "title",
                                      },
                                      [t._v("后台管理系统")]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
              i("section", { staticClass: "mainbox" }, [
                i("div", { staticClass: "item left" }, [
                  i(
                    "div",
                    { staticClass: "panel" },
                    [
                      i("h2", [t._v("群众问题反馈")]),
                      i("business"),
                      i("div", { staticClass: "panel-footer" }),
                    ],
                    1
                  ),
                  i(
                    "div",
                    { staticClass: "panel" },
                    [
                      i("h2", [t._v("人口信息")]),
                      i("talent"),
                      i("div", { staticClass: "panel-footer" }),
                    ],
                    1
                  ),
                  i(
                    "div",
                    { staticClass: "panel" },
                    [
                      i("h2", [t._v("人均收入")]),
                      i("income"),
                      i("div", { staticClass: "panel-footer" }),
                    ],
                    1
                  ),
                ]),
                i("div", { staticClass: "item center" }, [
                  i("div", { staticClass: "resume" }, [
                    i("div", { staticClass: "resume-hd" }, [
                      i("ul", [
                        i(
                          "li",
                          [
                            i("countTo", {
                              attrs: {
                                startVal: t.startVal,
                                endVal: 490,
                                duration: 6e3,
                                separator: "",
                              },
                            }),
                          ],
                          1
                        ),
                        i(
                          "li",
                          [
                            i("countTo", {
                              attrs: {
                                startVal: t.startVal,
                                endVal: 75,
                                duration: 6e3,
                                separator: "",
                              },
                            }),
                          ],
                          1
                        ),
                        i(
                          "li",
                          [
                            i("countTo", {
                              attrs: {
                                startVal: t.startVal,
                                endVal: 3e3,
                                duration: 6e3,
                                separator: "",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    t._m(0),
                  ]),
                  i("div", { staticClass: "map" }, [
                    i(
                      "video",
                      {
                        attrs: {
                          muted: "",
                          autoplay: "autoplay",
                          loop: "loop",
                          height: "400px",
                          width: "100%",
                        },
                        domProps: { muted: !0 },
                      },
                      [
                        i("source", {
                          attrs: { src: a("e14c"), type: "video/mp4" },
                        }),
                      ]
                    ),
                    i("div", { staticClass: "go" }, [
                      i(
                        "video",
                        {
                          attrs: {
                            muted: "",
                            autoplay: "autoplay",
                            loop: "loop",
                            height: "400px",
                            width: "100%",
                          },
                          domProps: { muted: !0 },
                        },
                        [
                          i("source", {
                            attrs: { src: a("1400"), type: "video/mp4" },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                i("div", { staticClass: "item right" }, [
                  t._m(1),
                  i(
                    "div",
                    { staticClass: "panel" },
                    [
                      i("h2", [t._v("人口分布")]),
                      i("distribution"),
                      i("div", { staticClass: "panel-footer" }),
                    ],
                    1
                  ),
                  i(
                    "div",
                    { staticClass: "panel" },
                    [
                      i("h2", [t._v("发展历程")]),
                      i("history"),
                      i("div", { staticClass: "panel-footer" }),
                    ],
                    1
                  ),
                ]),
              ]),
            ]),
          ]);
        },
        s = [
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "resume-bd" }, [
              a("ul", [
                a("li", [t._v("村内人数（单位：人）")]),
                a("li", [t._v("网格员占比（单位：%）")]),
                a("li", [t._v("人均收入（单位：万元）")]),
              ]),
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "panel" }, [
              a("h2", [t._v("乡村特色")]),
              a("img", {
                attrs: {
                  src:
                    "https://ts1.cn.mm.bing.net/th/id/R-C.688c8dc2e78e9946b78f046409a2e984?rik=oXi9zteleBvkpw&riu=http%3a%2f%2fpic.baike.soso.com%2fugc%2fbaikepic2%2f12233%2fori-20160808192818-969431015.jpg%2f300&ehk=AxEpY1oaqvmtp8N2%2fOhQgmcZcY28PUJLUBKiVLXDKW4%3d&risl=&pid=ImgRaw&r=0",
                  height: "80%",
                },
              }),
              a("div", { staticClass: "panel-footer" }),
            ]);
          },
        ],
        n = (a("d332"), a("6d13"), a("ec1b")),
        o = a.n(n),
        c = {
          name: "Brand",
          components: { countTo: o.a },
          data: function() {
            return {
              nowTime: "",
              week: "",
              date: "",
              timer: null,
              imgSrc: "",
              weatcherData: {},
              startVal: 0,
              geoCoordMap: {},
            };
          },
          computed: {},
          created: function() {},
          mounted: function() {
            var t = this;
            this.getWeather(),
              (this.timer = setInterval(function() {
                t.getWeather();
              }, 36e5)),
              this.nowTimes(),
              this.getEchart();
          },
          methods: {
            timeFormate: function(t) {
              var e = new Date(t),
                a = e.getFullYear(),
                i =
                  e.getMonth() + 1 < 10
                    ? "0" + (e.getMonth() + 1)
                    : e.getMonth() + 1,
                s = e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                n = e.getHours() < 10 ? "0" + e.getHours() : e.getHours(),
                o = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
                c = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds(),
                l = e.getDay(),
                r = ["日", "一", "二", "三", "四", "五", "六"],
                d = "星期" + r[l];
              (this.week = d),
                (this.date = a + "." + i + "." + s),
                (this.nowTime = n + ":" + o + ":" + c);
            },
            nowTimes: function() {
              this.timeFormate(new Date()),
                setInterval(this.nowTimes, 1e3),
                this.clear();
            },
            clear: function() {
              clearInterval(this.nowTimes), (this.nowTimes = null);
            },
            getWeather: function() {
              var t = this;
              axios
                .get("https://www.tianqiapi.com/api/", {
                  params: {
                    appid: "26148275",
                    appsecret: "2id6H48Y",
                    version: "v6",
                  },
                })
                .then(function(e) {
                  e.data &&
                    ("xue" == e.data.wea_img
                      ? (t.imgSrc = a("d8ce"))
                      : "yin" == e.data.wea_img
                      ? (t.imgSrc = a("f7ed"))
                      : "yu" == e.data.wea_img || "bingbao" == e.data.wea_img
                      ? (t.imgSrc = a("21ac"))
                      : "yun" == e.data.wea_img
                      ? (t.imgSrc = a("b48b"))
                      : "wu" == e.data.wea_img
                      ? (t.imgSrc = a("7cb9"))
                      : "shachen" == e.data.wea_img
                      ? (t.imgSrc = a("1dda"))
                      : "lei" == e.data.wea_img
                      ? (t.imgSrc = a("e479"))
                      : (t.imgSrc = a("3a46")),
                    (t.weatcherData = e.data));
                })
                .catch(function(t) {
                  console.log(t);
                });
            },
            gohome: function() {
              this.$router.push({ path: "/" });
            },
            goJvillage: function() {
              this.$router.push({ path: "/jvillage" });
            },
            goBvillage: function() {
              this.$router.push({ path: "/bvillage" });
            },
            goHoutai: function() {
              window.location.href = "http://127.0.0.1:8000/index";
            },
          },
          beforeDestroy: function() {
            clearInterval(this.timer);
          },
        },
        l = c,
        r = (a("45ae"), a("2877")),
        d = Object(r["a"])(l, i, s, !1, null, "0c43679d", null);
      e["default"] = d.exports;
    },
  },
]);

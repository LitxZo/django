(function(t) {
  function e(e) {
    for (
      var n, r, s = e[0], l = e[1], c = e[2], u = 0, h = [];
      u < s.length;
      u++
    )
      (r = s[u]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && h.push(i[r][0]),
        (i[r] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
    d && d(e);
    while (h.length) h.shift()();
    return o.push.apply(o, c || []), a();
  }
  function a() {
    for (var t, e = 0; e < o.length; e++) {
      for (var a = o[e], n = !0, r = 1; r < a.length; r++) {
        var s = a[r];
        0 !== i[s] && (n = !1);
      }
      n && (o.splice(e--, 1), (t = l((l.s = a[0]))));
    }
    return t;
  }
  var n = {},
    r = { app: 0 },
    i = { app: 0 },
    o = [];
  function s(t) {
    return (
      l.p +
      "js/" +
      ({}[t] || t) +
      "." +
      {
        "chunk-cd95318c": "a9f36efa",
        "chunk-442f2dee": "508a5f6e",
        "chunk-7323fdad": "81b91beb",
        "chunk-7959fabd": "0f1d155c",
      }[t] +
      ".js"
    );
  }
  function l(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
  }
  (l.e = function(t) {
    var e = [],
      a = { "chunk-442f2dee": 1, "chunk-7323fdad": 1, "chunk-7959fabd": 1 };
    r[t]
      ? e.push(r[t])
      : 0 !== r[t] &&
        a[t] &&
        e.push(
          (r[t] = new Promise(function(e, a) {
            for (
              var n =
                  "css/" +
                  ({}[t] || t) +
                  "." +
                  {
                    "chunk-cd95318c": "31d6cfe0",
                    "chunk-442f2dee": "41f7da17",
                    "chunk-7323fdad": "c284c38b",
                    "chunk-7959fabd": "ccc70164",
                  }[t] +
                  ".css",
                i = l.p + n,
                o = document.getElementsByTagName("link"),
                s = 0;
              s < o.length;
              s++
            ) {
              var c = o[s],
                u = c.getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (u === n || u === i)) return e();
            }
            var h = document.getElementsByTagName("style");
            for (s = 0; s < h.length; s++) {
              (c = h[s]), (u = c.getAttribute("data-href"));
              if (u === n || u === i) return e();
            }
            var d = document.createElement("link");
            (d.rel = "stylesheet"),
              (d.type = "text/css"),
              (d.onload = e),
              (d.onerror = function(e) {
                var n = (e && e.target && e.target.src) || i,
                  o = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + n + ")"
                  );
                (o.code = "CSS_CHUNK_LOAD_FAILED"),
                  (o.request = n),
                  delete r[t],
                  d.parentNode.removeChild(d),
                  a(o);
              }),
              (d.href = i);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(d);
          }).then(function() {
            r[t] = 0;
          }))
        );
    var n = i[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var o = new Promise(function(e, a) {
          n = i[t] = [e, a];
        });
        e.push((n[2] = o));
        var c,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          l.nc && u.setAttribute("nonce", l.nc),
          (u.src = s(t));
        var h = new Error();
        c = function(e) {
          (u.onerror = u.onload = null), clearTimeout(d);
          var a = i[t];
          if (0 !== a) {
            if (a) {
              var n = e && ("load" === e.type ? "missing" : e.type),
                r = e && e.target && e.target.src;
              (h.message =
                "Loading chunk " + t + " failed.\n(" + n + ": " + r + ")"),
                (h.name = "ChunkLoadError"),
                (h.type = n),
                (h.request = r),
                a[1](h);
            }
            i[t] = void 0;
          }
        };
        var d = setTimeout(function() {
          c({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = c), document.head.appendChild(u);
      }
    return Promise.all(e);
  }),
    (l.m = t),
    (l.c = n),
    (l.d = function(t, e, a) {
      l.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (l.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (l.t = function(t, e) {
      if ((1 & e && (t = l(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (l.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          l.d(
            a,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (l.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return l.d(e, "a", e), e;
    }),
    (l.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (l.p = "/"),
    (l.oe = function(t) {
      throw (console.error(t), t);
    });
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var h = 0; h < c.length; h++) e(c[h]);
  var d = u;
  o.push([0, "chunk-vendors"]), a();
})({
  0: function(t, e, a) {
    t.exports = a("56d7");
  },
  "0dc3": function(t, e, a) {},
  "0f07": function(t, e, a) {},
  "140e": function(t, e, a) {
    "use strict";
    var n = a("9e4a"),
      r = a.n(n);
    r.a;
  },
  "164e": function(t, e) {
    t.exports = echarts;
  },
  "16a8": function(t, e, a) {
    "use strict";
    var n = a("929b"),
      r = a.n(n);
    r.a;
  },
  1852: function(t, e, a) {},
  "2a5d": function(t, e, a) {},
  "2add": function(t, e, a) {},
  "2ba3": function(t, e, a) {},
  "31e9": function(t, e, a) {
    "use strict";
    var n = a("be66"),
      r = a.n(n);
    r.a;
  },
  "343c": function(t, e, a) {},
  "3d74": function(t, e, a) {},
  "3fe6": function(t, e, a) {
    "use strict";
    var n = a("c52e"),
      r = a.n(n);
    r.a;
  },
  4130: function(t, e, a) {},
  "46ae": function(t, e, a) {
    "use strict";
    var n = a("9a09"),
      r = a.n(n);
    r.a;
  },
  "4d7a": function(t, e, a) {},
  5239: function(t, e, a) {
    "use strict";
    var n = a("d06b"),
      r = a.n(n);
    r.a;
  },
  5271: function(t, e, a) {
    "use strict";
    var n = a("343c"),
      r = a.n(n);
    r.a;
  },
  "53db": function(t, e, a) {
    "use strict";
    var n = a("c988"),
      r = a.n(n);
    r.a;
  },
  5437: function(t, e, a) {},
  "56d7": function(t, e, a) {
    "use strict";
    a.r(e);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var n = a("2b0e"),
      r = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "app" } }, [a("router-view")], 1);
      },
      i = [],
      o = { name: "App" },
      s = o,
      l = (a("5c0b"), a("2877")),
      c = Object(l["a"])(s, r, i, !1, null, null, null),
      u = c.exports,
      h = (a("d3b7"), a("8c4f"));
    n["default"].use(h["a"]);
    var d = [
        {
          path: "/",
          name: "Home",
          component: function() {
            return Promise.all([
              a.e("chunk-cd95318c"),
              a.e("chunk-442f2dee"),
            ]).then(a.bind(null, "bb51"));
          },
          meta: { title: "门户网站首页" },
        },
        {
          path: "/bvillage",
          name: "Bvillage",
          component: function() {
            return Promise.all([
              a.e("chunk-cd95318c"),
              a.e("chunk-7959fabd"),
            ]).then(a.bind(null, "e96b"));
          },
          meta: { title: "村级门户网站首页" },
        },
        {
          path: "/jvillage",
          name: "Jvillage",
          component: function() {
            return Promise.all([
              a.e("chunk-cd95318c"),
              a.e("chunk-7323fdad"),
            ]).then(a.bind(null, "40a0"));
          },
          meta: { title: "村级门户网站首页" },
        },
      ],
      f = new h["a"]({ mode: "hash", base: "/", routes: d }),
      m = f,
      v = a("2f62");
    n["default"].use(v["a"]);
    var p = new v["a"].Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      }),
      g = a("98c9"),
      y = (a("4160"), a("b0c0"), a("b64b"), a("159b"), a("5530")),
      b = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      x = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("ul", { staticClass: "slide-box" }, [
            a("li"),
            a("li"),
            a("li"),
            a("li"),
          ]);
        },
      ],
      w = { name: "bgAnimation" },
      _ = w,
      S = (a("8fda"), Object(l["a"])(_, b, x, !1, null, null, null)),
      C = S.exports,
      k = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("transition", { attrs: { name: "fade" } }, [
          t.visible
            ? a("div", { staticClass: "modal-backdrop" }, [
                a("div", { staticClass: "modal" }, [
                  a("div", { staticClass: "modal-header" }, [
                    t._v(" " + t._s(t.title) + " "),
                    a("i", {
                      staticClass: "iconfont icon-close close",
                      on: { click: t.close },
                    }),
                  ]),
                  a("div", { staticClass: "modal-body" }, [
                    t._v(" " + t._s(t.content) + " "),
                  ]),
                  a("div", { staticClass: "modal-footer" }, [
                    t.showCancle
                      ? a(
                          "button",
                          {
                            staticClass: "btn-close",
                            attrs: { type: "button" },
                            on: { click: t.close },
                          },
                          [
                            t._v(
                              " " +
                                t._s(t.cancleText ? t.cancleText : "取消") +
                                " "
                            ),
                          ]
                        )
                      : t._e(),
                    a(
                      "button",
                      {
                        staticClass: "btn-confirm",
                        attrs: { type: "button" },
                        on: { click: t.confirm },
                      },
                      [
                        t._v(
                          " " +
                            t._s(t.confirmText ? t.confirmText : "确定") +
                            " "
                        ),
                      ]
                    ),
                  ]),
                ]),
              ])
            : t._e(),
        ]);
      },
      M = [],
      T = {
        name: "Modal",
        props: {
          title: { type: String, default: "提示" },
          content: { type: String, default: "" },
          visible: { type: Boolean, default: !1 },
          showCancle: { type: Boolean, default: !0 },
          confirmText: { type: String, default: "确认" },
          cancleText: { type: String, default: "取消" },
        },
        watch: {
          visible: function(t) {
            console.log(t);
          },
        },
        methods: {
          close: function() {
            this.$emit("update:visible", !1);
          },
          confirm: function() {
            this.close(), this.$emit("confirm");
          },
        },
      },
      A = T,
      L = (a("de9a"), Object(l["a"])(A, k, M, !1, null, "e9517022", null)),
      O = L.exports,
      E = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "wrap-container sn-container" }, [
          a("div", { staticClass: "sn-content" }, [
            a("div", { staticClass: "sn-title" }, [t._v("司南排名图")]),
            a("div", { staticClass: "sn-body" }, [
              a("div", { staticClass: "wrap-container" }, [
                a("div", { staticClass: "pd-main" }, [
                  a(
                    "div",
                    { staticClass: "chart-1", attrs: { id: "chart1" } },
                    [
                      a(
                        "div",
                        { staticClass: "compass" },
                        [
                          a("div", { staticClass: "compass-bg-1" }),
                          a("div", { staticClass: "compass-bg-2" }),
                          a("div", { staticClass: "compass-bg-3" }),
                          a("div", { staticClass: "compass-bg-4" }),
                          a("div", { staticClass: "compass-bg-5" }),
                          a("div", { staticClass: "compass-bg-6" }),
                          a("div", { staticClass: "compass-bg-7" }),
                          a("div", { staticClass: "compass-bg-c-1" }),
                          a("div", { staticClass: "compass-bg-c-2" }),
                          a("div", { staticClass: "compass-bg-c-3" }),
                          a("div", { staticClass: "compass-bg-c-4" }),
                          t._l(t.arr, function(e, n) {
                            return a(
                              "div",
                              {
                                key: n,
                                staticClass: "compass-text",
                                class: [
                                  "compass-text-" + (n + 1),
                                  { show: t.number == n },
                                ],
                              },
                              [
                                a("span", [t._v("事项数：" + t._s(e.itemNum))]),
                                a("span", [
                                  t._v("数据项：" + t._s(e.dataItem)),
                                ]),
                                a("span", [
                                  t._v("数据量：" + t._s(e.dataSize)),
                                ]),
                              ]
                            );
                          }),
                          a(
                            "div",
                            { staticClass: "compass-number" },
                            t._l(t.arr, function(e, n) {
                              return a(
                                "div",
                                {
                                  key: n,
                                  class: [
                                    "rank-" + (n + 1),
                                    { szscale: t.number == n },
                                  ],
                                  attrs: { title: "" + (n + 1) },
                                },
                                [a("span", [t._v(t._s(e.workUnit))])]
                              );
                            }),
                            0
                          ),
                          t._m(0),
                        ],
                        2
                      ),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      I = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "line-sx" }, [
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
          ]);
        },
      ],
      P = {
        name: "sinan",
        data: function() {
          return {
            timer: null,
            number: null,
            arr: [
              {
                id: 1,
                itemNum: 258,
                dataItem: 1288,
                dataSize: 12306,
                workUnit: "JS",
              },
              {
                id: 2,
                itemNum: 568,
                dataItem: 5623,
                dataSize: 12306,
                workUnit: "Nodejs",
              },
              {
                id: 3,
                itemNum: 208,
                dataItem: 1755,
                dataSize: 12043,
                workUnit: "Vuejs",
              },
              {
                id: 4,
                itemNum: 358,
                dataItem: 1812,
                dataSize: 12306,
                workUnit: "CSS3",
              },
              {
                id: 5,
                itemNum: 128,
                dataItem: 4718,
                dataSize: 12580,
                workUnit: "jQuery",
              },
            ],
          };
        },
        mounted: function() {
          var t = this;
          setTimeout(function() {
            (t.number = 0), t.initData();
          }, 4e3);
        },
        methods: {
          initData: function() {
            var t = this;
            (this.number = this.number == this.arr.length ? 0 : this.number),
              (this.timer = setTimeout(function() {
                t.number++, t.initData();
              }, 5e3));
          },
        },
        beforeDestroy: function() {
          clearTimeout(this.timer);
        },
      },
      D = P,
      z = (a("80f4"), Object(l["a"])(D, E, I, !1, null, "d363f360", null)),
      B = z.exports,
      W = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "wrap-container sn-container" }, [
          a("div", { staticClass: "sn-content" }, [
            a("div", { staticClass: "sn-title" }, [t._v("反馈信息情况处理")]),
            a("div", { staticClass: "sn-body" }, [
              a("div", { staticClass: "wrap-container" }, [
                a(
                  "div",
                  { staticClass: "table" },
                  [
                    t._m(0),
                    a(
                      "vue-seamless-scroll",
                      {
                        staticClass: "seamless-warp",
                        attrs: {
                          data: t.listData,
                          "class-option": t.optionSetting,
                        },
                      },
                      [
                        a(
                          "table",
                          {
                            staticClass: "item",
                            attrs: {
                              border: "0",
                              cellpadding: "0",
                              cellspacing: "0",
                            },
                          },
                          [
                            a(
                              "tbody",
                              t._l(t.listData, function(e, n) {
                                return a("tr", { key: n }, [
                                  a(
                                    "td",
                                    {
                                      staticClass: "title",
                                      attrs: { width: "100%" },
                                    },
                                    [a("span", [t._v(t._s(e.title))])]
                                  ),
                                  a("td", { attrs: { width: "20%" } }, [
                                    a("span", [t._v(t._s(e.date))]),
                                  ]),
                                  a("td", { attrs: { width: "20%" } }, [
                                    a(
                                      "span",
                                      {
                                        class: {
                                          colorRed: e.hot > 4999,
                                          colorOrange: e.hot < 10,
                                        },
                                      },
                                      [t._v(t._s(e.hot))]
                                    ),
                                  ]),
                                ]);
                              }),
                              0
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ]);
      },
      R = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "table",
            {
              staticClass: "table-header",
              attrs: { border: "0", cellpadding: "0", cellspacing: "0" },
            },
            [
              a("tbody", [
                a("tr", [
                  a("td", { attrs: { width: "60%" } }, [
                    a("span", [t._v("反馈内容")]),
                  ]),
                  a("td", { attrs: { width: "20%" } }, [
                    a("span", [t._v("反馈日期")]),
                  ]),
                  a("td", { attrs: { width: "20%" } }, [
                    a("span", [t._v("处理进度")]),
                  ]),
                ]),
              ]),
            ]
          );
        },
      ],
      F = a("a939"),
      N = a.n(F),
      j = {
        name: "seamless",
        components: { vueSeamlessScroll: N.a },
        data: function() {
          return {
            listData: [
              {
                title: "钱花哪了?一图带你读懂年轻人的消费观",
                date: "2023-01-05",
                hot: 2306,
              },
              {
                title: "“五一”假期前三天国内旅游收入超350亿元",
                date: "2023-01-02",
                hot: 5689,
              },
              {
                title: "滴滴、美团、哈啰交战，本地生活会是终局？",
                date: "2023-01-02",
                hot: 9,
              },
              {
                title: "“互联网+文化”逆势上行文娱消费云端真精彩",
                date: "2023-01-25",
                hot: 288,
              },
              {
                title: "乐观还是悲观？巴菲特是个现实主义者！",
                date: "2023-01-21",
                hot: 158,
              },
              {
                title: "B站的后浪，会把爱优腾拍在沙滩上吗?",
                date: "2023-01-20",
                hot: 889,
              },
              {
                title: "华为如何做投资的：先给两亿订单一年上市",
                date: "2023-01-01",
                hot: 5800,
              },
              {
                title: "马斯克：特斯拉股价太高了，我要卖豪宅",
                date: "2023-01-25",
                hot: 6,
              },
              {
                title: "人民日报海外版：云模式巧解“就业难”",
                date: "2023-01-16",
                hot: 88,
              },
              {
                title: '刚刚港股"崩了"：狂跌近1000点！',
                date: "2023-01-12",
                hot: 88,
              },
              {
                title: "个人健康信息码国家标准发布",
                date: "2023-01-28",
                hot: 5,
              },
              {
                title: "传软银国际裁员约10%两名管理合伙人离职",
                date: "2023-01-15",
                hot: 258,
              },
            ],
          };
        },
        computed: {
          optionSetting: function() {
            return {
              step: 0.5,
              limitMoveNum: 2,
              hoverStop: !0,
              direction: 1,
              openWatch: !0,
              singleHeight: 0,
              singleWidth: 0,
              waitTime: 1e3,
            };
          },
        },
        mounted: function() {},
        methods: {},
        beforeDestroy: function() {},
      },
      $ = j,
      q = (a("7a40"), Object(l["a"])($, W, R, !1, null, "b64a46c8", null)),
      H = q.exports,
      G = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "wrap-container trigle" },
          [
            a("div", { staticClass: "back_img3" }),
            a("div", { staticClass: "back_img" }),
            a("div", { staticClass: "back_img1" }),
            a("div", { staticClass: "back_img2" }),
            t._l(t.arrData, function(t, e) {
              return a(
                "ul",
                {
                  class: {
                    first: 0 == e,
                    second: 1 == e,
                    third: 2 == e,
                    four: 3 == e,
                  },
                },
                [a("li"), a("li"), a("li"), a("li"), a("li"), a("li")]
              );
            }),
            t._l(t.arrData, function(e, n) {
              return a(
                "div",
                { key: n, staticClass: "detail", class: "detail_" + (n + 1) },
                [
                  a(
                    "div",
                    {
                      staticClass: "detail_txt",
                      class: "detail_txt" + (n + 1),
                    },
                    [
                      a(
                        "span",
                        {
                          staticClass: "precent_txt",
                          class: "precent_txt" + (n + 1),
                        },
                        [
                          a("div", {
                            staticClass: "chartsdom",
                            attrs: { id: "chart_" + (n + 1) },
                          }),
                        ]
                      ),
                      a(
                        "div",
                        {
                          staticClass: "txt_right",
                          class: "txt_right" + (n + 1),
                        },
                        [
                          a("span", [
                            a(
                              "div",
                              {
                                staticClass: "f_div",
                                class: {
                                  aharrow_up: 0 == n || 1 == n,
                                  aharrow_down: 2 == n || 3 == n,
                                },
                              },
                              [t._v(t._s(e.post))]
                            ),
                            a(
                              "div",
                              {
                                staticClass: "s_div",
                                class: "s_div" + (n + 1),
                              },
                              [t._v(t._s(e.number) + "人")]
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  a(
                    "div",
                    {
                      staticClass: "arrow_contain",
                      class: "arrow_contain" + (n + 1),
                    },
                    [
                      a("span", {
                        staticClass: "arrow",
                        class: "arrow_" + (n + 1),
                      }),
                    ]
                  ),
                ]
              );
            }),
          ],
          2
        );
      },
      V = [],
      Y =
        (a("d81d"),
        a("13d5"),
        a("b680"),
        {
          name: "pyramid",
          data: function() {
            return {
              option: null,
              arrData: [
                { post: "技术经理", number: 158 },
                { post: "Java工程师", number: 572 },
                { post: "前端工程师", number: 826 },
                { post: "项目经理", number: 66 },
              ],
              color: ["#45fed4", "#84a9ef", "#f1e04f", "#dbfe73"],
              totalNum: [],
              sum: 0,
            };
          },
          mounted: function() {
            var t = this;
            this.arrData.forEach(function(e, a) {
              t.totalNum.push(e.number);
            }),
              (this.sum = this.totalNum.reduce(function(t, e, a, n) {
                return t + e;
              })),
              this.arrData.map(function(e, a) {
                (e.color = t.color[a]), t.getEchart("chart_".concat(a + 1), e);
              });
          },
          methods: {
            getEchart: function(t, e) {
              var a = (Math.round((e.number / this.sum) * 1e4) / 100).toFixed(
                  1
                ),
                n = echarts.init(document.getElementById(t));
              (this.option = {
                color: [e.color, "#333"],
                series: [
                  {
                    name: "访问来源",
                    type: "pie",
                    radius: ["92%", "100%"],
                    clockWise: !1,
                    avoidLabelOverlap: !1,
                    hoverAnimation: !1,
                    label: {
                      normal: {
                        show: !0,
                        position: "center",
                        textStyle: { fontSize: 14 },
                        formatter: "{c}%",
                      },
                    },
                    labelLine: { show: !1 },
                    data: [
                      { value: a, name: "", label: { normal: { show: !0 } } },
                      {
                        value: 100 - a,
                        name: "",
                        label: { normal: { show: !1 } },
                      },
                    ],
                  },
                ],
              }),
                n.setOption(this.option, !0),
                window.addEventListener("resize", function() {
                  n.resize();
                });
            },
          },
          beforeDestroy: function() {},
        }),
      X = Y,
      U = (a("31e9"), Object(l["a"])(X, G, V, !1, null, "0957af1e", null)),
      Z = U.exports,
      Q = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      J = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("滚动弧形线")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_arc" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      K = {
        name: "scrollArc",
        data: function() {
          return {
            option: null,
            number: 0,
            timer: null,
            xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            data: [54, 86, 46, 77, 96, 89, 88, 23, 38, 3, 66, 98],
          };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = this,
              e = echarts.init(document.getElementById("chart_arc"));
            (this.option = {
              tooltip: {
                trigger: "axis",
                showContent: !1,
                axisPointer: {
                  type: "shadow",
                  shadowStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 1, color: "#5d83ff" },
                      { offset: 0, color: "rgba(255, 255, 255, 0)" },
                    ]),
                  },
                },
              },
              color: ["#5d83ff"],
              grid: {
                top: 30,
                left: 20,
                right: 20,
                bottom: 20,
                containLabel: !0,
              },
              xAxis: {
                type: "category",
                data: this.xData,
                boundaryGap: !1,
                axisTick: { show: !1 },
                axisLabel: { formatter: "{value} 月" },
                axisLine: { lineStyle: { color: "#999" } },
              },
              yAxis: {
                type: "value",
                axisLine: { show: !1, lineStyle: { color: "#999" } },
              },
              series: [
                {
                  name: "人数",
                  type: "line",
                  data: this.data,
                  symbolSize: 10,
                  itemStyle: { opacity: 0 },
                  emphasis: {
                    label: { show: !0, color: "#fff", fontSize: 20 },
                    itemStyle: {
                      color: "#5d83ff",
                      borderColor: "#fff",
                      borderWidth: 2,
                      opacity: 1,
                    },
                  },
                  areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#5d83ff" },
                        { offset: 1, color: "rgba(0, 0, 0, 0)" },
                      ]),
                    },
                  },
                  smooth: !0,
                },
              ],
            }),
              e.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                e.resize();
              }),
              (this.timer = setInterval(function() {
                e.dispatchAction({
                  type: "showTip",
                  seriesIndex: 0,
                  dataIndex: t.number,
                }),
                  t.number++,
                  t.number > t.data.length && (t.number = 0);
              }, 1e3));
          },
        },
        beforeDestroy: function() {
          clearInterval(this.timer);
        },
      },
      tt = K,
      et = (a("ca74"), Object(l["a"])(tt, Q, J, !1, null, "51482f98", null)),
      at = et.exports,
      nt = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      rt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("双轴柱状图")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_bar" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      it = {
        name: "szBar",
        data: function() {
          return {
            option: null,
            xAxisData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            yData1: [9, 12, 15, 18, 15, 12, 9, 12, 15, 18, 15, 12],
            yData2: [-9, -12, -15, -18, -15, -12, -9, -12, -15, -18, -15, -12],
          };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_bar")),
              e = "10%",
              a = [
                { coord: [0, 9] },
                { coord: [1, 12] },
                { coord: [2, 15] },
                { coord: [3, 18] },
                { coord: [4, 15] },
                { coord: [5, 12] },
                { coord: [6, 9] },
                { coord: [7, 12] },
                { coord: [8, 15] },
                { coord: [9, 18] },
                { coord: [10, 15] },
                { coord: [11, 12] },
              ],
              n = [
                { coord: [0, -9] },
                { coord: [1, -12] },
                { coord: [2, -15] },
                { coord: [3, -18] },
                { coord: [4, -15] },
                { coord: [5, -12] },
                { coord: [6, -9] },
                { coord: [7, -12] },
                { coord: [8, -15] },
                { coord: [9, -18] },
                { coord: [10, -15] },
                { coord: [11, -12] },
              ];
            (this.option = {
              xAxis: {
                data: this.xAxisData,
                axisLabel: { color: "#999", formatter: "{value} 月" },
                axisTick: { show: !1 },
                axisLine: {
                  show: !0,
                  lineStyle: { color: "rgba(40, 103, 168, 0.3)" },
                },
              },
              yAxis: {
                axisLabel: { color: "#999" },
                axisTick: { show: !1 },
                splitLine: { show: !1 },
                axisLine: {
                  show: !0,
                  lineStyle: { color: "rgba(40, 103, 168, 0.3)" },
                },
              },
              grid: {
                top: 20,
                left: 20,
                right: 20,
                bottom: 20,
                containLabel: !0,
              },
              series: [
                {
                  name: "正值柱状图",
                  type: "bar",
                  stack: "one",
                  itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 1, color: "rgba(0, 0, 0, 0)" },
                        { offset: 0.5, color: "#466e71" },
                        { offset: 0, color: "#eb9b44" },
                      ]),
                    },
                  },
                  barWidth: e,
                  markPoint: {
                    symbol: "circle",
                    itemStyle: {
                      normal: {
                        color: "#eb9b44",
                        shadowColor: "#eb9b44",
                        shadowBlur: 20,
                      },
                    },
                    symbolSize: [10, 10],
                    symbolOffset: [0, 0],
                    data: a,
                  },
                  data: this.yData1,
                },
                {
                  name: "负值柱状图",
                  type: "bar",
                  stack: "one",
                  itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "rgba(0, 0, 0, 0)" },
                        { offset: 0.5, color: "#774a75" },
                        { offset: 1, color: "#b34d69" },
                      ]),
                    },
                  },
                  barWidth: e,
                  markPoint: {
                    symbol: "circle",
                    itemStyle: {
                      normal: {
                        color: "#b34d69",
                        shadowColor: "#b34d69",
                        shadowBlur: 20,
                      },
                    },
                    symbolSize: [10, 10],
                    symbolOffset: [0, 0],
                    data: n,
                  },
                  data: this.yData2,
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      ot = it,
      st = (a("f0ed"), Object(l["a"])(ot, nt, rt, !1, null, "ba83a0ca", null)),
      lt = st.exports,
      ct = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      ut = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("环形气泡图")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_pin" },
                  }),
                  a("div", { staticClass: "updef" }),
                  a("div", { staticClass: "definfo definfo0" }, [
                    a("span", [t._v("8个")]),
                    a("span"),
                  ]),
                  a("div", { staticClass: "definfo definfo1" }, [
                    a("span", [t._v("10个")]),
                    a("span"),
                  ]),
                  a("div", { staticClass: "definfo definfo2" }, [
                    a("span", [t._v("35个")]),
                    a("span"),
                  ]),
                  a("div", { staticClass: "definfo definfo3" }, [
                    a("span", [t._v("38个")]),
                    a("span"),
                  ]),
                  a("div", { staticClass: "definfo definfo4" }, [
                    a("span", [t._v("48个")]),
                    a("span"),
                  ]),
                  a("div", { staticClass: "definfo definfo5" }, [
                    a("span", [t._v("55个")]),
                    a("span"),
                  ]),
                  a("div", { staticClass: "definfo definfo6" }, [
                    a("span", [t._v("42个")]),
                    a("span"),
                  ]),
                  a("div", { staticClass: "definfo definfo7" }, [
                    a("span", [t._v("95个")]),
                    a("span"),
                  ]),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      ht = {
        name: "ringPin",
        data: function() {
          return { option: null };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_pin")),
              e = {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#0a49c2" },
                  { offset: 1, color: "#13adc5" },
                ]),
              },
              a = {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#0c388d" },
                  { offset: 1, color: "#137ff6" },
                ]),
              },
              n = {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#05247a" },
                  { offset: 1, color: "#183cd7" },
                ]),
              },
              r = {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#064d9d" },
                  { offset: 1, color: "#00b977" },
                ]),
              },
              i = {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#133389" },
                  { offset: 1, color: "#5e51e3" },
                ]),
              },
              o = {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2a54a4" },
                  { offset: 1, color: "#ff900e" },
                ]),
              },
              s = {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#5a847f" },
                  { offset: 1, color: "#e3de24" },
                ]),
              },
              l = {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#38828a" },
                  { offset: 1, color: "#61ac62" },
                ]),
              };
            (this.option = {
              color: [
                "#05bbdf",
                "#1170e1",
                "#1b40e3",
                "#00c86c",
                "#5e51e3",
                "#ff9235",
                "#fef51e",
                "#399632",
              ],
              legend: {
                show: !0,
                orient: "vertical",
                left: "80%",
                top: "middle",
                data: [
                  "2020年",
                  "2019年",
                  "2018年",
                  "2017年",
                  "2016年",
                  "2015年",
                  "2014年",
                  "2013年",
                ],
                textStyle: { color: "#fff", fontSize: 14 },
                itemWidth: 20,
                itemHeight: 10,
              },
              series: [
                {
                  name: "2020年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["85%", "90%"],
                  center: ["40%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 300,
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    { value: 270, itemStyle: e },
                    { value: 30, itemStyle: { normal: { color: "#053f67" } } },
                  ],
                },
                {
                  name: "2019年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["75%", "80%"],
                  center: ["40%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 300,
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    { value: 180, itemStyle: a },
                    { value: 120, itemStyle: { normal: { color: "#062d67" } } },
                  ],
                },
                {
                  name: "2018年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["65%", "70%"],
                  center: ["40%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 300,
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    { value: 220, itemStyle: n },
                    { value: 80, itemStyle: { normal: { color: "#0c266a" } } },
                  ],
                },
                {
                  name: "2017年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["55%", "60%"],
                  center: ["40%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 300,
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    { value: 210, itemStyle: r },
                    { value: 90, itemStyle: { normal: { color: "#03414f" } } },
                  ],
                },
                {
                  name: "2016年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["45%", "50%"],
                  center: ["40%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 300,
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    { value: 150, itemStyle: i },
                    { value: 150, itemStyle: { normal: { color: "#142868" } } },
                  ],
                },
                {
                  name: "2015年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["35%", "40%"],
                  center: ["40%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 300,
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    { value: 150, itemStyle: o },
                    { value: 150, itemStyle: { normal: { color: "#373546" } } },
                  ],
                },
                {
                  name: "2014年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["25%", "30%"],
                  center: ["40%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 300,
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    { value: 50, itemStyle: s },
                    { value: 250, itemStyle: { normal: { color: "#35483f" } } },
                  ],
                },
                {
                  name: "2013年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["15%", "20%"],
                  center: ["40%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 300,
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    { value: 50, itemStyle: l },
                    { value: 250, itemStyle: { normal: { color: "#0f3541" } } },
                  ],
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      dt = ht,
      ft = (a("16a8"), Object(l["a"])(dt, ct, ut, !1, null, "c2207486", null)),
      mt = ft.exports,
      vt = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      pt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("旋转多彩图")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", { staticClass: "pie" }, [
                    a("div", { staticClass: "pies pie1" }),
                    a("div", { staticClass: "pies pie2" }),
                    a("div", { staticClass: "pies pie3" }),
                    a("div", { staticClass: "pie4" }),
                  ]),
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_rotate" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      gt = {
        name: "rotateColorful",
        data: function() {
          return { option: null };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_rotate"));
            (this.option = {
              tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)",
              },
              legend: {
                show: !0,
                orient: "vertical",
                left: "center",
                top: "middle",
                data: ["内存", "存储"],
                textStyle: { color: "#4ce5ff", fontSize: 14 },
                itemWidth: 20,
                itemHeight: 10,
              },
              label: { normal: { show: !1 } },
              labelLine: { normal: { show: !1 } },
              series: [
                {
                  name: "磁盘空间",
                  type: "pie",
                  radius: [60, 110],
                  center: ["50%", "50%"],
                  roseType: "area",
                  label: { show: !1 },
                  emphasis: { label: { show: !1 } },
                  data: [
                    {
                      value: 6.5,
                      name: "内存",
                      itemStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                              { offset: 0, color: "#387ed3" },
                              { offset: 1, color: "#bc8b68" },
                            ]
                          ),
                        },
                      },
                    },
                    {
                      value: 3.5,
                      name: "存储",
                      itemStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                              { offset: 0, color: "#188bfd" },
                              { offset: 1, color: "#51eeff" },
                            ]
                          ),
                        },
                      },
                    },
                    {
                      value: 0,
                      name: "其他",
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    {
                      value: 0,
                      name: "其他1",
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    {
                      value: 0,
                      name: "其他2",
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                    {
                      value: 0,
                      name: "其他3",
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                  ],
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      yt = gt,
      bt = (a("7f82"), Object(l["a"])(yt, vt, pt, !1, null, "561ebd8a", null)),
      xt = bt.exports,
      wt = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "wrap-container sn-container" }, [
          a("div", { staticClass: "sn-content" }, [
            a("div", { staticClass: "sn-title" }, [t._v("环形跑道图")]),
            a("div", { staticClass: "sn-body" }, [
              a(
                "div",
                { staticClass: "wrap-container" },
                [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_run" },
                  }),
                  t._l(t.arrData, function(e, n) {
                    return a(
                      "div",
                      { key: n, staticClass: "pdt-info", class: "info" + n },
                      [
                        a("span"),
                        a("span", [t._v(t._s(e.name) + "：")]),
                        a("span", [t._v(t._s(e.number))]),
                        a("span", [t._v("（" + t._s(e.percentage) + "%）")]),
                      ]
                    );
                  }),
                ],
                2
              ),
            ]),
          ]),
        ]);
      },
      _t = [],
      St = {
        name: "circleRunway",
        data: function() {
          return {
            option: null,
            arrData: [
              { name: "联盟链", number: 725, percentage: 41.5 },
              { name: "私有链", number: 460, percentage: 30.95 },
              { name: "公有链", number: 382, percentage: 22.48 },
            ],
          };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_run")),
              e = { normal: { color: "#091f45" } };
            (this.option = {
              color: ["#0772bb", "#00ffff", "#f48b3b"],
              series: [
                {
                  name: "联盟链",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["86%", "90%"],
                  center: ["50%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 5,
                      name: "50%",
                      itemStyle: { normal: { color: "#0772bb" } },
                    },
                    { value: 5, name: "50%", itemStyle: e },
                  ],
                },
                {
                  name: "私有链",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["66%", "70%"],
                  center: ["50%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 3,
                      name: "50%",
                      itemStyle: { normal: { color: "#00ffff" } },
                    },
                    { value: 7, name: "50%", itemStyle: e },
                  ],
                },
                {
                  name: "公有链",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["46%", "50%"],
                  center: ["50%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 2,
                      name: "50%",
                      itemStyle: { normal: { color: "#f48b3b" } },
                    },
                    { value: 8, name: "50%", itemStyle: e },
                  ],
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      Ct = St,
      kt = (a("755b"), Object(l["a"])(Ct, wt, _t, !1, null, "f3a75598", null)),
      Mt = kt.exports,
      Tt = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      At = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("扫描半径图")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_scan" },
                  }),
                  a("div", { staticClass: "box" }, [
                    a("div", { staticClass: "nodetext text0" }, [
                      a("span", [t._v("区块链")]),
                    ]),
                    a("div", { staticClass: "nodetext text1" }, [
                      a("span", [t._v("人工智能")]),
                    ]),
                    a("div", { staticClass: "nodetext text2" }, [
                      a("span", [t._v("大数据")]),
                    ]),
                    a("div", { staticClass: "nodetext text3" }, [
                      a("span", [t._v("云计算")]),
                    ]),
                    a("div", { staticClass: "nodetext text4" }, [
                      a("span", [t._v("移动互联网")]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      Lt = {
        name: "scanRadius",
        data: function() {
          return { option: null, option2: null, val: 0 };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            for (
              var t = echarts.init(document.getElementById("chart_scan")),
                e = [
                  {
                    value: 3,
                    name: "区块链",
                    itemStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: "#4284dd" },
                          { offset: 1, color: "#0c3371" },
                        ]),
                      },
                    },
                  },
                  {
                    value: 4.5,
                    name: "人工智能",
                    itemStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: "#5253d3" },
                          { offset: 1, color: "#072559" },
                        ]),
                      },
                    },
                  },
                  {
                    value: 3,
                    name: "大数据",
                    itemStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: "#8b5c85" },
                          { offset: 1, color: "#183571" },
                        ]),
                      },
                    },
                  },
                  {
                    value: 5.5,
                    name: "云计算",
                    itemStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: "#b4734f" },
                          { offset: 1, color: "#443e5f" },
                        ]),
                      },
                    },
                  },
                  {
                    value: 3,
                    name: "移动互联网",
                    itemStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: "#3ab1d9" },
                          { offset: 1, color: "#124c94" },
                        ]),
                      },
                    },
                  },
                ],
                a = 0;
              a < e.length;
              a++
            )
              this.val += e[a].value;
            e.push({
              value: this.val,
              name: "__other",
              itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
            });
            var n = [
                {
                  value: 10,
                  itemStyle: {
                    normal: {
                      color: "rgba(0, 0, 0, 0)",
                      borderColor: "rgba(17, 93, 217, 0.4)",
                      borderWidth: 1,
                    },
                  },
                },
                {
                  value: 10,
                  itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                },
              ],
              r = { formatter: " ", backgroundColor: "rgba(0, 0, 0, 0)" };
            (this.option = {
              label: { normal: { show: !1 } },
              labelLine: { normal: { show: !1 } },
              tooltip: { trigger: "item" },
              series: [
                {
                  name: "现代技术",
                  type: "pie",
                  startAngle: -180,
                  radius: "190%",
                  center: ["50%", "50%"],
                  roseType: "radius",
                  z: 0,
                  tooltip: { formatter: "{b0}: {c0} ({d0}%)" },
                  label: { show: !1 },
                  emphasis: { label: { show: !1 } },
                  data: e,
                },
                {
                  name: "2020年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["90%", "90%"],
                  center: ["50%", "50%"],
                  tooltip: r,
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 10,
                      itemStyle: {
                        normal: {
                          color: "rgba(0, 0, 0, 0)",
                          borderColor: "rgba(21, 103, 214, 1)",
                          borderWidth: 2,
                          borderType: "dashed",
                        },
                      },
                    },
                    {
                      value: 10,
                      itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
                    },
                  ],
                },
                {
                  name: "2019年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["70%", "70%"],
                  center: ["50%", "50%"],
                  tooltip: r,
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: n,
                },
                {
                  name: "2018年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["50%", "50%"],
                  center: ["50%", "50%"],
                  tooltip: r,
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: n,
                },
                {
                  name: "2017年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["30%", "30%"],
                  center: ["50%", "50%"],
                  tooltip: r,
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: n,
                },
                {
                  name: "2016年",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["10%", "10%"],
                  center: ["50%", "50%"],
                  tooltip: r,
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: n,
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      Ot = Lt,
      Et = (a("bbc0"), Object(l["a"])(Ot, Tt, At, !1, null, "7c048451", null)),
      It = Et.exports,
      Pt = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Dt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("柱饼组合联动")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_bp" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      zt = {
        name: "cakeLinkage",
        data: function() {
          return { option: null, dataMap: {} };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          dataFormatter: function(t) {
            for (
              var e, a = ["金融类", "政务类", "医疗类", "互联网类"], n = 2016;
              n <= 2020;
              n++
            ) {
              var r = 0,
                i = 0;
              e = t[n];
              for (var o = 0, s = e.length; o < s; o++)
                (r = Math.max(r, e[o])),
                  (i += e[o]),
                  (t[n][o] = { name: a[o], value: e[o] });
              (t[n + "max"] = 100 * Math.floor(r / 100)), (t[n + "sum"] = i);
            }
            return t;
          },
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_bp")),
              e = { color: "#d6d638" },
              a = { color: "#00c86c" },
              n = { color: "#07d8ff" },
              r = { color: "#0c71cf" };
            (this.dataMap.dataJR = this.dataFormatter({
              2020: [136, 159, 905, 305],
              2019: [124, 145, 562, 285],
              2018: [118, 128, 207, 265],
              2017: [112, 122, 234, 245],
              2016: [101, 110, 804, 225],
            })),
              (this.dataMap.dataZW = this.dataFormatter({
                2020: [752, 928, 126, 210],
                2019: [388, 840, 707, 208],
                2018: [855, 987, 959, 207],
                2017: [626, 709, 701, 206],
                2016: [509, 892, 201, 205],
              })),
              (this.dataMap.dataYL = this.dataFormatter({
                2020: [363, 219, 483, 505],
                2019: [600, 438, 123, 405],
                2018: [179, 405, 668, 305],
                2017: [375, 2886, 276, 205],
                2016: [236, 250, 408, 105],
              })),
              (this.dataMap.dataIT = this.dataFormatter({
                2020: [752, 928, 126, 255],
                2019: [388, 840, 707, 245],
                2018: [855, 987, 959, 235],
                2017: [626, 709, 701, 225],
                2016: [509, 892, 201, 215],
              })),
              (this.option = {
                baseOption: {
                  timeline: {
                    axisType: "category",
                    autoPlay: !0,
                    playInterval: 2e3,
                    data: [
                      "2016-01-01",
                      "2017-01-01",
                      "2018-01-01",
                      "2019-01-01",
                      "2020-01-01",
                    ],
                    lineStyle: { color: "#179bf1" },
                    left: 30,
                    right: 30,
                    label: {
                      color: "#2867a8",
                      formatter: function(t) {
                        return new Date(t).getFullYear();
                      },
                    },
                    checkpointStyle: {
                      color: "#01d8ff",
                      symbolSize: 10,
                      borderColor: "rgba(1, 216, 255, 0.5)",
                      borderWidth: 5,
                    },
                    controlStyle: {
                      showPlayBtn: !1,
                      borderColor: "#01bde6",
                      itemGap: 20,
                    },
                    itemStyle: {
                      borderColor: "#004b85",
                      borderWidth: 1,
                      shadowColor: "rgba(1, 216, 225, 0.5)",
                      shadowBlur: 5,
                    },
                    emphasis: {
                      label: { color: "#01d8ff", show: !1 },
                      checkpointStyle: {
                        color: "#01d8ff",
                        borderColor: "rgba(1, 216, 255, 0.5)",
                        borderWidth: 5,
                      },
                      controlStyle: { borderColor: "rgba(1, 216, 255, 0.5)" },
                      itemStyle: {
                        color: "#01d8ff",
                        borderColor: "rgba(1, 216, 225, 0.5)",
                        borderWidth: 5,
                      },
                    },
                  },
                  grid: { bottom: "20%", right: "42%" },
                  calculable: !0,
                  xAxis: [
                    {
                      type: "category",
                      data: ["金融类", "政务类", "医疗类", "互联网类"],
                      splitLine: { show: !1 },
                      axisTick: { show: !1 },
                      axisLine: { show: !0, lineStyle: { color: "#2867a8" } },
                    },
                  ],
                  yAxis: [
                    {
                      type: "value",
                      name: "区块链应用（个）",
                      splitLine: { show: !1 },
                      axisTick: { show: !1 },
                      axisLine: { show: !0, lineStyle: { color: "#2867a8" } },
                    },
                  ],
                  series: [
                    {
                      name: "联盟链",
                      type: "bar",
                      barMaxWidth: 15,
                      center: ["20%", "65%"],
                      seriesLayoutBy: "row",
                      markPoint: {
                        symbol: "pin",
                        itemStyle: {
                          normal: {
                            color: "#eb9b44",
                            shadowColor: "#eb9b44",
                            shadowBlur: 15,
                          },
                        },
                        data: [
                          { type: "max", name: "最大值" },
                          { type: "min", name: "最小值" },
                        ],
                      },
                    },
                    {
                      name: "应用占比",
                      type: "pie",
                      center: ["76%", "20%"],
                      radius: "28%",
                      z: 100,
                    },
                  ],
                },
                options: [
                  {
                    series: [
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2016sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2016sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2016sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2016sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2016sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2016sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2016sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2016sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    series: [
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2017sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2017sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2017sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2017sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2017sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2017sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2017sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2017sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    series: [
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2018sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2018sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2018sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2018sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2018sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2018sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2018sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2018sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    series: [
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2019sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2019sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2019sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2019sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2019sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2019sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2019sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2019sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    series: [
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2020sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2020sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2020sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2020sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                      {
                        data: [
                          {
                            name: "金融类",
                            value: this.dataMap.dataJR["2020sum"],
                            itemStyle: e,
                          },
                          {
                            name: "政务类",
                            value: this.dataMap.dataZW["2020sum"],
                            itemStyle: a,
                          },
                          {
                            name: "医疗类",
                            value: this.dataMap.dataYL["2020sum"],
                            itemStyle: n,
                          },
                          {
                            name: "互联网类",
                            value: this.dataMap.dataIT["2020sum"],
                            itemStyle: r,
                          },
                        ],
                      },
                    ],
                  },
                ],
              }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      Bt = zt,
      Wt = (a("5239"), Object(l["a"])(Bt, Pt, Dt, !1, null, "6da40b7d", null)),
      Rt = Wt.exports,
      Ft = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Nt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("动态折线图")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_dt" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      jt =
        (a("a15b"),
        a("25f0"),
        {
          name: "dynamicLine",
          data: function() {
            return {
              option: null,
              timer: null,
              xData: [],
              now: +new Date(2019, 1, 1),
              value: 1e3 * Math.random(),
              oneDay: 864e5,
            };
          },
          mounted: function() {
            this.getEchart();
          },
          methods: {
            randomData: function() {
              return (
                (this.now = new Date(+this.now + this.oneDay)),
                (this.value = this.value + 25 * Math.random() - 10),
                {
                  name: this.now.toString(),
                  value: [
                    [
                      this.now.getFullYear(),
                      this.now.getMonth() + 1,
                      this.now.getDate(),
                    ].join("/"),
                    Math.round(this.value),
                  ],
                }
              );
            },
            getEchart: function() {
              for (
                var t = this,
                  e = echarts.init(document.getElementById("chart_dt")),
                  a = 0;
                a < 1e3;
                a++
              )
                this.xData.push(this.randomData());
              (this.option = {
                tooltip: {
                  trigger: "axis",
                  axisPointer: {
                    type: "cross",
                    axisPointer: {
                      type: "cross",
                      label: { backgroundColor: "#283b56" },
                    },
                  },
                },
                grid: {
                  top: "10%",
                  left: "3%",
                  right: "12%",
                  bottom: "3%",
                  containLabel: !0,
                },
                color: ["#b54c5d"],
                calculable: !0,
                xAxis: {
                  type: "time",
                  name: "年-月-日",
                  boundaryGap: !1,
                  splitNumber: 5,
                  axisLabel: {
                    formatter: function(t) {
                      var e = new Date(t);
                      return (
                        e.getFullYear() +
                        "-" +
                        (e.getMonth() + 1) +
                        "-" +
                        e.getDate()
                      );
                    },
                  },
                  axisTick: { show: !1 },
                  axisLine: { show: !0, lineStyle: { color: "#2867a8" } },
                  splitLine: { show: !1 },
                },
                yAxis: {
                  type: "value",
                  scale: !0,
                  name: "比特币（美元）",
                  min: 0,
                  boundaryGap: !1,
                  axisTick: { show: !1 },
                  axisLine: { show: !0, lineStyle: { color: "#2867a8" } },
                  splitLine: { show: !1 },
                },
                series: [
                  {
                    name: "实时交易",
                    type: "line",
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    itemStyle: { opacity: 0 },
                    data: this.xData,
                    smooth: !0,
                  },
                ],
              }),
                e.setOption(this.option, !0),
                window.addEventListener("resize", function() {
                  e.resize();
                }),
                (this.timer = setInterval(function() {
                  for (var a = 0; a < 5; a++)
                    t.xData.shift(), t.xData.push(t.randomData());
                  e.setOption(t.option, !0);
                }, 2e3));
            },
          },
          beforeDestroy: function() {
            clearInterval(this.timer);
          },
        }),
      $t = jt,
      qt = (a("777d"), Object(l["a"])($t, Ft, Nt, !1, null, "83bdfb9e", null)),
      Ht = qt.exports,
      Gt = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Vt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("金字塔趋势")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_ptrend" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      Yt = {
        name: "pyramidTrend",
        data: function() {
          return { option: null, dataMap: {} };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          dataFormatter: function(t) {
            for (
              var e,
                a = [
                  "长沙",
                  "湘潭",
                  "株洲",
                  "岳阳",
                  "邵阳",
                  "衡阳",
                  "益阳",
                  "娄底",
                  "怀化",
                  "湘西",
                  "张家界",
                  "郴州",
                  "常德",
                  "永州",
                ],
                n = 0;
              n < 3;
              n++
            ) {
              var r = 0,
                i = 0;
              e = t[n];
              for (var o = 0, s = e.length; o < s; o++)
                (r = Math.max(r, e[o])),
                  (i += e[o]),
                  (t[n][o] = { name: a[o], value: e[o] });
              (t[n + "max"] = 100 * Math.floor(r / 100)), (t[n + "sum"] = i);
            }
            return t;
          },
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_ptrend")),
              e = { barBorderRadius: [15, 0], color: "#0084ff" };
            (this.dataMap.dataType = this.dataFormatter({
              2: [124, 145, 261, 54, 195, 131, 150, 39, 11, 40, 23, 51, 45, 88],
              1: [136, 159, 205, 41, 306, 7, 77, 101, 24, 34, 8, 15, 14, 9],
              0: [118, 128, 220, 47, 92, 14, 9, 11, 113, 61, 11, 22, 33, 5],
            })),
              (this.option = {
                baseOption: {
                  timeline: {
                    axisType: "category",
                    autoPlay: !0,
                    playInterval: 1e3,
                    data: ["一类", "二类", "三类"],
                    left: 80,
                    right: 80,
                    bottom: 10,
                    lineStyle: { color: "#179bf1" },
                    label: { color: "#fff" },
                    checkpointStyle: {
                      color: "#01d8ff",
                      symbolSize: 10,
                      borderColor: "rgba(1, 216, 255, 0.5)",
                      borderWidth: 5,
                    },
                    controlStyle: { show: !1 },
                    itemStyle: {
                      borderColor: "#004b85",
                      borderWidth: 1,
                      shadowColor: "rgba(1, 216, 225, 0.5)",
                      shadowBlur: 5,
                    },
                    emphasis: {
                      label: { color: "#01d8ff", show: !1 },
                      checkpointStyle: {
                        color: "#01d8ff",
                        borderColor: "rgba(1, 216, 255, 0.5)",
                        borderWidth: 5,
                      },
                      itemStyle: {
                        color: "#01d8ff",
                        borderColor: "rgba(1, 216, 225, 0.5)",
                        borderWidth: 5,
                      },
                    },
                  },
                  calculable: !0,
                  grid: { top: "10%", bottom: "25%" },
                  xAxis: [
                    {
                      type: "category",
                      axisLabel: { interval: 0 },
                      data: [
                        "长沙",
                        "湘潭",
                        "株洲",
                        "岳阳",
                        "邵阳",
                        "衡阳",
                        "益阳",
                        "娄底",
                        "怀化",
                        "湘西",
                        "张家界",
                        "郴州",
                        "常德",
                        "永州",
                      ],
                      splitLine: { show: !1 },
                      axisTick: { show: !1 },
                      axisLine: { show: !0, lineStyle: { color: "#2867a8" } },
                    },
                  ],
                  yAxis: [
                    {
                      type: "value",
                      name: "家",
                      splitLine: { show: !1 },
                      axisTick: { show: !1 },
                      axisLine: { show: !0, lineStyle: { color: "#2867a8" } },
                    },
                  ],
                  series: [
                    {
                      name: "一类",
                      type: "bar",
                      barWidth: 15,
                      legendHoverLink: !0,
                      label: { show: !0, position: "top", color: "#fff" },
                    },
                  ],
                },
                options: [
                  {
                    series: [
                      { data: this.dataMap.dataType["0"], itemStyle: e },
                    ],
                  },
                  {
                    series: [
                      { data: this.dataMap.dataType["1"], itemStyle: e },
                    ],
                  },
                  {
                    series: [
                      { data: this.dataMap.dataType["2"], itemStyle: e },
                    ],
                  },
                ],
              }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      Xt = Yt,
      Ut = (a("ee04"), Object(l["a"])(Xt, Gt, Vt, !1, null, "7782f14a", null)),
      Zt = Ut.exports,
      Qt = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "wrap-container sn-container" }, [
          a("div", { staticClass: "sn-content" }, [
            a("div", { staticClass: "sn-title" }, [t._v("人员占比")]),
            a("div", { staticClass: "sn-body" }, [
              a("div", { staticClass: "wrap-container" }, [
                t._m(0),
                a("div", { staticClass: "svgs" }, [
                  a(
                    "svg",
                    {
                      attrs: {
                        width: "244",
                        height: "264",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      },
                    },
                    [
                      a(
                        "defs",
                        [
                          a(
                            "linearGradient",
                            {
                              attrs: {
                                id: "linear",
                                x1: "0%",
                                y1: "0%",
                                x2: "0%",
                                y2: "100%",
                              },
                            },
                            [
                              a("stop", {
                                staticStyle: {
                                  "stop-color": "#0a6aff",
                                  "stop-opacity": "0.47",
                                },
                                attrs: { offset: "0%" },
                              }),
                              a("stop", {
                                staticStyle: {
                                  "stop-color": "#5cffff",
                                  "stop-opacity": "1",
                                },
                                attrs: { offset: "40%" },
                              }),
                              a("stop", {
                                staticStyle: {
                                  "stop-color": "#0a6aff",
                                  "stop-opacity": "1",
                                },
                                attrs: { offset: "100%" },
                              }),
                            ],
                            1
                          ),
                          a(
                            "marker",
                            {
                              attrs: {
                                id: "arrow",
                                markerWidth: "10",
                                markerHeight: "10",
                                refX: "0",
                                refY: "3",
                                orient: "auto",
                                markerUnits: "strokeWidth",
                              },
                            },
                            [
                              a("path", {
                                attrs: {
                                  d: "M0,0 L0,6 L9,3 z",
                                  fill: "rgb(11,108,255)",
                                },
                              }),
                            ]
                          ),
                        ],
                        1
                      ),
                      a("path", {
                        attrs: {
                          d: "M134 86C136 86 80 85 77 208",
                          fill: "none",
                          stroke: "url(#linear)",
                          "stroke-opacity": "1",
                          "marker-end": "url(#arrow)",
                        },
                      }),
                      a("path", {
                        attrs: {
                          d: "M136 86C138 86 212 88 204 208",
                          fill: "none",
                          stroke: "url(#linear)",
                          "stroke-opacity": "1",
                          "marker-end": "url(#arrow)",
                        },
                      }),
                      a("path", {
                        attrs: {
                          d: "M136 84C138 84 195 84 206 116",
                          fill: "none",
                          stroke: "url(#linear)",
                          "stroke-opacity": "1",
                          "marker-end": "url(#arrow)",
                        },
                      }),
                      a("path", {
                        attrs: {
                          d: "M134 84C136 84 81 82 58 123",
                          fill: "none",
                          stroke: "url(#linear)",
                          "stroke-opacity": "1",
                          "marker-end": "url(#arrow)",
                        },
                      }),
                      a("path", {
                        attrs: {
                          d: "M132 86C134 86 120 68 93 67",
                          fill: "none",
                          stroke: "url(#linear)",
                          "stroke-opacity": "1",
                          "marker-end": "url(#arrow)",
                        },
                      }),
                      a("path", {
                        attrs: {
                          d:
                            "M134 86C136 86 132 78 134 74C136 69 150 52 150 52",
                          fill: "none",
                          stroke: "url(#linear)",
                          "stroke-opacity": "1",
                          "marker-end": "url(#arrow)",
                        },
                      }),
                      a("path", {
                        attrs: {
                          d: "M134 85C136 85 146 65 183 65",
                          fill: "none",
                          "fill-opacity": "0",
                          stroke: "url(#linear)",
                          "marker-end": "url(#arrow)",
                        },
                      }),
                    ]
                  ),
                ]),
                a(
                  "div",
                  { staticClass: "svgs" },
                  t._l(t.arrData, function(e, n) {
                    return a(
                      "div",
                      { key: n, staticClass: "text", class: "per" + (n + 1) },
                      [
                        a("span", [t._v(t._s(e.name))]),
                        a("span", [t._v(t._s(e.number))]),
                        t._v("人 "),
                      ]
                    );
                  }),
                  0
                ),
              ]),
            ]),
          ]),
        ]);
      },
      Jt = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "person" }, [
            a("div", { staticClass: "pers person1" }),
            a("div", { staticClass: "pers person2" }),
            a("div", { staticClass: "pers person3" }),
          ]);
        },
      ],
      Kt = {
        name: "staffMix",
        data: function() {
          return {
            arrData: [
              { name: "前端工程师", number: 3 },
              { name: "后端工程师", number: 5 },
              { name: "网页设计师", number: 2 },
              { name: "测试工程师", number: 2 },
              { name: "产品经理", number: 1 },
              { name: "安卓工程师", number: 1 },
              { name: "IOS工程师", number: 1 },
            ],
          };
        },
        mounted: function() {},
        methods: {},
        beforeDestroy: function() {},
      },
      te = Kt,
      ee = (a("f859"), Object(l["a"])(te, Qt, Jt, !1, null, "c0f38100", null)),
      ae = ee.exports,
      ne = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "wrap-container sn-container" }, [
          a("div", { staticClass: "sn-content" }, [
            a("div", { staticClass: "sn-title" }, [t._v("闪动云")]),
            a("div", { staticClass: "sn-body" }, [
              a("div", { staticClass: "wrap-container cloud" }, [
                a("div", { staticClass: "pd-main-left" }, [
                  t._m(0),
                  a(
                    "div",
                    { staticClass: "yun-text", attrs: { id: "yunText" } },
                    t._l(t.arrData, function(e, n) {
                      return a(
                        "div",
                        {
                          key: n,
                          class: { "span-flash": t.number == n },
                          attrs: { id: "yunText-" + (n + 1) },
                        },
                        [
                          a("span", { attrs: { title: e.title } }, [
                            t._v(t._s(e.title)),
                          ]),
                        ]
                      );
                    }),
                    0
                  ),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      re = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "yun-container" }, [
            a("div", { staticClass: "yun-tree" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
            a("div", { staticClass: "line-fs" }),
          ]);
        },
      ],
      ie = {
        name: "flashCloud",
        data: function() {
          return {
            number: 0,
            arrData: [
              { title: "JavaScript" },
              { title: "Vue.js" },
              { title: "React.js" },
              { title: "Node.js" },
              { title: "Angular" },
              { title: "HTML5" },
              { title: "CSS3" },
              { title: "jQuery" },
              { title: "Typescript" },
              { title: "Bootstrap" },
              { title: "WebApp" },
              { title: "小程序" },
              { title: "HTTP" },
              { title: "Sass/Less" },
              { title: "Webpack" },
              { title: "ES6" },
            ],
          };
        },
        mounted: function() {
          var t = this,
            e = 5;
          this.timer = setInterval(function() {
            if (((t.number = parseInt(15 * Math.random(), 10)), 0 == e))
              return (
                (e = 5),
                t.arrData.sort(function() {
                  return Math.random() - 0.5;
                })
              );
            e--;
          }, 2e3);
        },
        methods: {},
        beforeDestroy: function() {
          clearInterval(this.timer);
        },
      },
      oe = ie,
      se = (a("53db"), Object(l["a"])(oe, ne, re, !1, null, "1430126e", null)),
      le = se.exports,
      ce = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      ue = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("人口信息")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container ring-pie" }, [
                  a("div", { staticClass: "back-chart" }),
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_rp" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      he = {
        name: "ringPie",
        data: function() {
          return { option: null };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_rp"));
            (this.option = {
              dataset: [
                {
                  source: [
                    ["范围", "年龄", "性别", "Year"],
                    ["15到20", 123, 32, 2011],
                    ["20到25", 231, 14, 2011],
                    ["25到30", 235, 5, 2011],
                    ["35", 341, 25, 2011],
                    ["45到50", 122, 29, 2011],
                    ["15到20", 123, 32, 2012],
                    ["20到25", 231, 14, 2012],
                    ["25到30", 235, 5, 2012],
                    ["35", 341, 25, 2012],
                    ["45到50", 122, 29, 2012],
                  ],
                },
                {
                  transform: {
                    type: "filter",
                    config: { dimension: "Year", value: 2011 },
                  },
                },
                {
                  transform: {
                    type: "filter",
                    config: { dimension: "Year", value: 2012 },
                  },
                },
              ],
              series: [
                {
                  type: "pie",
                  radius: 70,
                  center: ["50%", "25%"],
                  datasetIndex: 1,
                },
                {
                  type: "pie",
                  radius: 70,
                  center: ["70%", "50%"],
                  datasetIndex: 2,
                },
              ],
              media: [
                {
                  query: { minAspectRatio: 1 },
                  option: {
                    series: [
                      { center: ["25%", "50%"] },
                      { center: ["75%", "50%"] },
                    ],
                  },
                },
                {
                  option: {
                    series: [
                      { center: ["50%", "25%"] },
                      { center: ["75%", "50%"] },
                    ],
                  },
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      de = he,
      fe = (a("9553"), Object(l["a"])(de, ce, ue, !1, null, "e93dc51c", null)),
      me = fe.exports,
      ve = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      pe = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("多彩雷达")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_radar" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      ge = {
        name: "colorfulRadar",
        data: function() {
          return { option: null };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_radar"));
            (this.option = {
              tooltip: { trigger: "axis" },
              radar: [
                {
                  indicator: [
                    { text: "外观", max: 100 },
                    { text: "拍照", max: 100 },
                    { text: "系统", max: 100 },
                    { text: "性能", max: 100 },
                    { text: "屏幕", max: 100 },
                    { text: "折叠", max: 100 },
                  ],
                  radius: "75%",
                  center: ["50%", "50%"],
                  name: { textStyle: { color: "#1883ff" } },
                  axisTick: { show: !1 },
                  axisLabel: { show: !1 },
                  axisLine: {
                    show: !0,
                    symbol: "arrow",
                    symbolSize: [5, 7.5],
                    lineStyle: { color: "#1883ff", type: "dashed" },
                  },
                  splitArea: { show: !1 },
                  splitLine: { show: !1 },
                },
              ],
              series: [
                {
                  type: "radar",
                  areaStyle: {},
                  symbol: "none",
                  itemStyle: { normal: { areaStyle: { type: "default" } } },
                  lineStyle: { opacity: 0 },
                  data: [
                    {
                      value: [35, 50, 30, 30, 40, 45],
                      name: "智能手机",
                      itemStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                              { offset: 0, color: "#9c6b4e" },
                              { offset: 1, color: "#2a59ac" },
                            ]
                          ),
                          lineStyle: { color: "#2a59ac" },
                        },
                      },
                    },
                    {
                      value: [70, 40, 55, 55, 30, 55],
                      name: "5G手机",
                      itemStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                              { offset: 0, color: "#0855ca" },
                              { offset: 1, color: "#36a6c7" },
                            ]
                          ),
                          lineStyle: { color: "#36a6c7" },
                        },
                      },
                    },
                  ],
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      ye = ge,
      be = (a("140e"), Object(l["a"])(ye, ve, pe, !1, null, "9d539860", null)),
      xe = be.exports,
      we = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "wrap-container sn-container" }, [
          a("div", { staticClass: "sn-content" }, [
            a("div", { staticClass: "sn-title" }, [t._v("村镇管理概况")]),
            a("div", { staticClass: "sn-body" }, [
              a("div", { staticClass: "wrap-container pd-info" }, [
                a("div", { staticClass: "pd-info-center" }, [
                  t._m(0),
                  a(
                    "div",
                    { staticClass: "y-number y-number-1 animated fadeInLeft" },
                    [
                      a("div", {
                        staticClass: "y-number-bg animated infinite rotate",
                      }),
                      a("div", { staticClass: "y-number-icon" }),
                      a("div", { staticClass: "y-number-text" }, [
                        a("span", [t._v("网格员")]),
                        a(
                          "span",
                          {
                            staticClass: "odometer odometer-theme-digital",
                            attrs: { id: "number1" },
                          },
                          [
                            a("div", { staticClass: "odometer-inside" }, [
                              a("span", { staticClass: "odometer-digit" }, [
                                a(
                                  "span",
                                  { staticClass: "odometer-digit-spacer" },
                                  [t._v("8")]
                                ),
                                a(
                                  "span",
                                  { staticClass: "odometer-digit-inner" },
                                  [
                                    a(
                                      "span",
                                      { staticClass: "odometer-ribbon" },
                                      [
                                        a(
                                          "span",
                                          {
                                            staticClass:
                                              "odometer-ribbon-inner",
                                          },
                                          [
                                            a(
                                              "span",
                                              { staticClass: "odometer-value" },
                                              [
                                                a("countTo", {
                                                  attrs: {
                                                    startVal: t.startVal,
                                                    endVal: 12356,
                                                    duration: 6e3,
                                                    separator: "",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  a(
                    "div",
                    { staticClass: "y-number y-number-2 animated fadeInLeft" },
                    [
                      a("div", {
                        staticClass: "y-number-bg animated infinite rotateF",
                      }),
                      a("div", { staticClass: "y-number-icon" }),
                      a("div", { staticClass: "y-number-text" }, [
                        a("span", [t._v("反馈信息")]),
                        a(
                          "span",
                          {
                            staticClass: "odometer odometer-theme-digital",
                            attrs: { id: "number2" },
                          },
                          [
                            a("div", { staticClass: "odometer-inside" }, [
                              a("span", { staticClass: "odometer-digit" }, [
                                a(
                                  "span",
                                  { staticClass: "odometer-digit-spacer" },
                                  [t._v("8")]
                                ),
                                a(
                                  "span",
                                  { staticClass: "odometer-digit-inner" },
                                  [
                                    a(
                                      "span",
                                      { staticClass: "odometer-ribbon" },
                                      [
                                        a(
                                          "span",
                                          {
                                            staticClass:
                                              "odometer-ribbon-inner",
                                          },
                                          [
                                            a(
                                              "span",
                                              { staticClass: "odometer-value" },
                                              [
                                                a("countTo", {
                                                  attrs: {
                                                    startVal: t.startVal,
                                                    endVal: 65321,
                                                    duration: 6e3,
                                                    separator: "",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  a(
                    "div",
                    { staticClass: "y-number y-number-3 animated fadeInLeft" },
                    [
                      a("div", {
                        staticClass: "y-number-bg animated infinite rotateF",
                      }),
                      a("div", { staticClass: "y-number-icon" }),
                      a("div", { staticClass: "y-number-text" }, [
                        a("span", [t._v("处理事务量")]),
                        a(
                          "span",
                          {
                            staticClass: "odometer odometer-theme-digital",
                            attrs: { id: "number3" },
                          },
                          [
                            a("div", { staticClass: "odometer-inside" }, [
                              a("span", { staticClass: "odometer-digit" }, [
                                a(
                                  "span",
                                  { staticClass: "odometer-digit-spacer" },
                                  [t._v("8")]
                                ),
                                a(
                                  "span",
                                  { staticClass: "odometer-digit-inner" },
                                  [
                                    a(
                                      "span",
                                      { staticClass: "odometer-ribbon" },
                                      [
                                        a(
                                          "span",
                                          {
                                            staticClass:
                                              "odometer-ribbon-inner",
                                          },
                                          [
                                            a(
                                              "span",
                                              { staticClass: "odometer-value" },
                                              [
                                                a("countTo", {
                                                  attrs: {
                                                    startVal: t.startVal,
                                                    endVal: 8686,
                                                    duration: 6e3,
                                                    separator: "",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  a(
                    "div",
                    { staticClass: "y-number y-number-4 animated fadeInLeft" },
                    [
                      a("div", {
                        staticClass: "y-number-bg animated infinite rotate",
                      }),
                      a("div", { staticClass: "y-number-icon" }),
                      a("div", { staticClass: "y-number-text" }, [
                        a("span", [t._v("反馈好评")]),
                        a(
                          "span",
                          {
                            staticClass: "odometer odometer-theme-digital",
                            attrs: { id: "number4" },
                          },
                          [
                            a("div", { staticClass: "odometer-inside" }, [
                              a("span", { staticClass: "odometer-digit" }, [
                                a(
                                  "span",
                                  { staticClass: "odometer-digit-spacer" },
                                  [t._v("8")]
                                ),
                                a(
                                  "span",
                                  { staticClass: "odometer-digit-inner" },
                                  [
                                    a(
                                      "span",
                                      { staticClass: "odometer-ribbon" },
                                      [
                                        a(
                                          "span",
                                          {
                                            staticClass:
                                              "odometer-ribbon-inner",
                                          },
                                          [
                                            a(
                                              "span",
                                              { staticClass: "odometer-value" },
                                              [
                                                a("countTo", {
                                                  attrs: {
                                                    startVal: t.startVal,
                                                    endVal: 258,
                                                    duration: 6e3,
                                                    separator: "",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      _e = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "y-center" }, [
            a("div", { staticClass: "info-1-0 animated infinite rotateF" }),
            a("div", { staticClass: "info-1-1 animated infinite rotateF" }),
            a("div", { staticClass: "info-1-2 animated infinite rotate" }),
            a("div", { staticClass: "info-1-3 animated infinite rotate" }),
            a("div", { staticClass: "info-1-4 animated infinite flashPD" }),
          ]);
        },
      ],
      Se = a("ec1b"),
      Ce = a.n(Se),
      ke = {
        name: "dynamicList",
        components: { countTo: Ce.a },
        data: function() {
          return { startVal: 0 };
        },
        mounted: function() {},
        methods: {},
        beforeDestroy: function() {},
      },
      Me = ke,
      Te = (a("6f53"), Object(l["a"])(Me, we, _e, !1, null, "b02a2e54", null)),
      Ae = Te.exports,
      Le = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Oe = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container trigle" }, [
            a("div", { staticClass: "bar bar-img" }),
            a("div", { staticClass: "bar bar-img1" }),
            a("div", { staticClass: "bar bar-img2" }),
            a("div", { staticClass: "chartsdom", attrs: { id: "chart_3d" } }),
          ]);
        },
      ],
      Ee =
        (a("99af"),
        {
          name: "bar3d",
          data: function() {
            return { option: null };
          },
          mounted: function() {
            this.getEchart();
          },
          methods: {
            getEchart: function() {
              var t = echarts.init(document.getElementById("chart_3d")),
                e = ["20-25", "25-30", "30-35", "35-40", "40-45", "45-50"],
                a = ["1", "2", "3", "4", "5", "6"],
                n = ["女", "男"],
                r = [
                  [0, 0, 3, n[0], e[0], 500, 25],
                  [0, 1, 2.5, n[0], e[3], 1e3, 35],
                  [0, 2, 1.5, n[1], e[4], 3e3, 5],
                  [0, 3, 1, n[1], e[1], 300, 15],
                  [0, 4, 2, n[0], e[2], 500, 55],
                  [0, 5, 3, n[0], e[3], 1500, 45],
                  [1, 5, 6, n[1], e[0], 300, 25],
                  [1, 1, 4, n[0], e[1], 500, 22],
                  [1, 2, 2, n[0], e[2], 1500, 38],
                  [1, 3, 1.5, n[1], e[3], 2500, 25],
                  [1, 4, 3, n[0], e[4], 3500, 49],
                  [1, 0, 4, n[1], e[5], 5500, 15],
                  [2, 2, 3, n[1], e[0], 300, 25],
                  [2, 1, 2, n[0], e[4], 1300, 25],
                  [2, 2, 5, n[0], e[2], 900, 25],
                  [2, 5, 1, n[1], e[3], 2e3, 25],
                  [2, 0, 3, n[1], e[1], 2300, 25],
                  [2, 0, 10, n[1], e[5], 3500, 25],
                  [3, 2, 3, n[0], e[5], 500, 35],
                  [3, 3, 2, n[0], e[4], 2300, 55],
                  [3, 2, 1, n[1], e[3], 3300, 15],
                  [3, 5, 5, n[1], e[2], 500, 10],
                  [3, 1, 2, n[1], e[1], 1e3, 35],
                  [3, 0, 1, n[0], e[0], 300, 45],
                  [4, 2, 3, n[1], e[1], 600, 25],
                  [4, 0, 5, n[0], e[0], 500, 15],
                  [4, 1, 3.5, n[1], e[3], 4e3, 5],
                  [4, 4, 7, n[0], e[0], 300, 75],
                  [4, 1, 0, n[1], e[5], 3e3, 85],
                  [3, 1, 3, n[0], e[2], 2500, 65],
                  [5, 2, 3, n[0], e[2], 500, 15],
                  [5, 1, 2, n[1], e[3], 3300, 52],
                  [5, 1, 5, n[0], e[4], 1e3, 88],
                  [5, 5, 8, n[1], e[0], 200, 12],
                  [5, 2, 7, n[0], e[0], 300, 45],
                  [3, 2, 2, n[1], e[1], 5e3, 51],
                ];
              (this.option = {
                tooltip: {
                  borderColor: "#8a704e",
                  borderWidth: 1,
                  padding: 15,
                  formatter: function(t) {
                    var e = ""
                      .concat(
                        t.seriesName,
                        ' <br> <span style="color: #fff;">性别：'
                      )
                      .concat(t.value[3], " <br> 年龄：")
                      .concat(t.value[4], "岁<br> 贷款金额：")
                      .concat(t.value[5], " <br> 总人数：")
                      .concat(t.value[6], "</span>");
                    return e;
                  },
                  textStyle: { color: "#8a704e", fontSize: 16 },
                },
                xAxis3D: { type: "category", data: e },
                yAxis3D: { type: "category", data: a },
                zAxis3D: { type: "value" },
                grid3D: {
                  show: !1,
                  boxWidth: 160,
                  boxDepth: 80,
                  viewControl: { alpha: 10, beta: 15 },
                },
                series: [
                  {
                    type: "bar3D",
                    name: "当前值",
                    data: r.map(function(t) {
                      return {
                        value: [t[1], t[0], t[2], t[3], t[4], t[5], t[6]],
                      };
                    }),
                    shading: "lambert",
                    label: { show: !1 },
                    itemStyle: { color: "#0084ff", opacity: 0.8 },
                    emphasis: {
                      label: { show: !1 },
                      itemStyle: { color: "#0084ff" },
                    },
                  },
                ],
              }),
                t.setOption(this.option, !0),
                window.addEventListener("resize", function() {
                  t.resize();
                });
            },
          },
          beforeDestroy: function() {},
        }),
      Ie = Ee,
      Pe = (a("abd0"), Object(l["a"])(Ie, Le, Oe, !1, null, "52d41fac", null)),
      De = Pe.exports,
      ze = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Be = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("多彩轮播面积")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_cra" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      We = {
        name: "colorfulArea",
        data: function() {
          return { option: null, dataMap: {} };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          dataFormatter: function(t) {
            for (
              var e,
                a = [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                ],
                n = 1;
              n <= 5;
              n++
            ) {
              var r = 0,
                i = 0;
              e = t[n];
              for (var o = 0, s = e.length; o < s; o++)
                (r = Math.max(r, e[o])),
                  (i += e[o]),
                  (t[n][o] = { name: a[o], value: e[o] });
              (t[n + "max"] = 100 * Math.floor(r / 100)), (t[n + "sum"] = i);
            }
            return t;
          },
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_cra")),
              e = { barBorderRadius: [15, 0], color: "#0084ff" };
            (this.dataMap.dataType = this.dataFormatter({
              5: [
                96,
                96,
                96,
                96,
                96,
                96,
                96,
                96,
                96,
                96,
                96,
                96,
                85,
                85,
                85,
                85,
                85,
                85,
                98,
                54,
                50,
                54,
                54,
                54,
                54,
              ],
              4: [
                86,
                86,
                86,
                86,
                86,
                86,
                86,
                86,
                86,
                86,
                86,
                86,
                85,
                95,
                85,
                85,
                85,
                85,
                64,
                64,
                60,
                64,
                64,
                64,
                64,
              ],
              3: [
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                90,
                95,
                90,
                91,
                91,
                91,
                91,
                91,
                91,
                54,
                54,
                50,
                54,
                54,
                54,
                54,
              ],
              2: [
                76,
                76,
                76,
                76,
                76,
                76,
                76,
                76,
                76,
                76,
                76,
                76,
                95,
                95,
                95,
                95,
                95,
                95,
                54,
                54,
                50,
                54,
                54,
                54,
                54,
              ],
              1: [
                66,
                66,
                66,
                66,
                66,
                66,
                66,
                66,
                66,
                96,
                66,
                66,
                85,
                85,
                85,
                85,
                85,
                85,
                55,
                55,
                50,
                55,
                55,
                55,
                55,
              ],
            })),
              (this.option = {
                baseOption: {
                  timeline: {
                    axisType: "category",
                    autoPlay: !0,
                    playInterval: 1e3,
                    data: ["5.1", "5.2", "5.3", "5.4", "5.5"],
                    left: 50,
                    right: 50,
                    top: 5,
                    lineStyle: { color: "#122e96" },
                    label: { color: "#fff" },
                    checkpointStyle: {
                      color: "#ef8c2f",
                      symbolSize: 10,
                      borderColor: "rgba(239, 140, 47, 0.5)",
                      borderWidth: 5,
                    },
                    controlStyle: {
                      showPlayBtn: !1,
                      borderColor: "#122e96",
                      itemGap: 20,
                    },
                    itemStyle: { borderColor: "#122e96", borderWidth: 5 },
                    emphasis: {
                      label: { color: "#ef8c2f", show: !1 },
                      checkpointStyle: {
                        color: "#ef8c2f",
                        borderColor: "rgba(239, 140, 47, 0.5)",
                        borderWidth: 5,
                      },
                      controlStyle: { borderColor: "#122e96" },
                      itemStyle: {
                        color: "#ef8c2f",
                        borderColor: "rgba(239, 140, 47, 0.5)",
                        borderWidth: 5,
                      },
                    },
                  },
                  calculable: !0,
                  grid: { top: "25%", bottom: "12%" },
                  xAxis: [
                    {
                      type: "category",
                      axisLabel: { interval: 5 },
                      data: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                      ],
                      splitLine: { show: !1 },
                      offset: 10,
                      axisTick: {
                        show: !0,
                        alignWithLabel: !0,
                        interval: 5,
                        length: 10,
                        lineStyle: { color: "#59aec8", width: 3 },
                      },
                      axisLine: { show: !1, lineStyle: { color: "#2867a8" } },
                    },
                  ],
                  yAxis: [
                    {
                      type: "value",
                      splitLine: { show: !1 },
                      axisTick: { show: !1 },
                      axisLine: { show: !1, lineStyle: { color: "#2867a8" } },
                    },
                  ],
                  series: [
                    {
                      name: "多彩轮播面积",
                      type: "line",
                      markPoint: {
                        symbol: "pin",
                        symbolSize: 40,
                        itemStyle: {
                          normal: {
                            color: "#ef8c2f",
                            shadowColor: "#ef8c2f",
                            shadowBlur: 15,
                          },
                        },
                        data: [{ type: "max", name: "最大值" }],
                      },
                      itemStyle: {
                        borderColor: "#1374e7",
                        borderWidth: 10,
                        shadowBlur: 10,
                        shadowColor: "#1374e7",
                        opacity: 0,
                      },
                      label: { show: !1 },
                      lineStyle: {
                        width: 2,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          { offset: 0, color: "#17418d" },
                          { offset: 1, color: "#a56d42" },
                        ]),
                      },
                      areaStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                              { offset: 0, color: "#1e4b4b" },
                              { offset: 1, color: "rgba(0, 0, 0, 0)" },
                            ]
                          ),
                        },
                      },
                      smooth: !0,
                    },
                  ],
                },
                options: [
                  {
                    series: [
                      { data: this.dataMap.dataType["1"], itemStyle: e },
                    ],
                  },
                  {
                    series: [
                      { data: this.dataMap.dataType["2"], itemStyle: e },
                    ],
                  },
                  {
                    series: [
                      { data: this.dataMap.dataType["3"], itemStyle: e },
                    ],
                  },
                  {
                    series: [
                      { data: this.dataMap.dataType["4"], itemStyle: e },
                    ],
                  },
                  {
                    series: [
                      { data: this.dataMap.dataType["5"], itemStyle: e },
                    ],
                  },
                ],
              }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      Re = We,
      Fe = (a("a8b3"), Object(l["a"])(Re, ze, Be, !1, null, "3e6b729e", null)),
      Ne = Fe.exports,
      je = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "wrap-container sn-container" }, [
          a("div", { staticClass: "sn-content" }, [
            a("div", { staticClass: "sn-title" }, [t._v("县内企业")]),
            a("div", { staticClass: "sn-body" }, [
              a(
                "div",
                { staticClass: "wrap-container" },
                [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_rbt" },
                  }),
                  t._l(t.arrData, function(e, n) {
                    return a(
                      "div",
                      { key: n, staticClass: "preinfo", class: "preinfo" + n },
                      [
                        a("span", [t._v(t._s(e.percent) + "%")]),
                        a("span", [t._v(t._s(e.name))]),
                      ]
                    );
                  }),
                  t._l(t.arrData, function(t, e) {
                    return a(
                      "div",
                      { staticClass: "preinfos", class: "pre" + e },
                      [a("span"), a("span")]
                    );
                  }),
                ],
                2
              ),
            ]),
          ]),
        ]);
      },
      $e = [],
      qe = {
        name: "rainbow",
        data: function() {
          return {
            option: null,
            arrData: [
              { name: "食品类", percent: 73 },
              { name: "工业类", percent: 20 },
              { name: "医疗类", percent: 32 },
              { name: "政务类", percent: 60 },
              { name: "金融类", percent: 14 },
            ],
          };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_rbt")),
              e = { normal: { color: "rgba(0, 0, 0, 0)" } };
            (this.option = {
              color: ["#125ec1", "#3fa5c0", "#d68639", "#ad5b68", "#6082a5"],
              series: [
                {
                  name: "金融类",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["85%", "90%"],
                  center: ["50%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  itemStyle: { shadowColor: "#125ec1", shadowBlur: 15 },
                  data: [
                    {
                      value: 15,
                      name: "15%",
                      itemStyle: { normal: { color: "#125ec1" } },
                    },
                    { value: 85, name: "50%", itemStyle: e },
                  ],
                },
                {
                  name: "政务类",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["72%", "77%"],
                  center: ["50%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  itemStyle: { shadowColor: "#3fa5c0", shadowBlur: 15 },
                  data: [
                    {
                      value: 60,
                      name: "60%",
                      itemStyle: { normal: { color: "#3fa5c0" } },
                    },
                    { value: 40, name: "40%", itemStyle: e },
                  ],
                },
                {
                  name: "医疗类",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["59%", "64%"],
                  center: ["50%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  itemStyle: { shadowColor: "#d68639", shadowBlur: 15 },
                  data: [
                    {
                      value: 32,
                      name: "32%",
                      itemStyle: { normal: { color: "#d68639" } },
                    },
                    { value: 68, name: "68%", itemStyle: e },
                  ],
                },
                {
                  name: "工业类",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["46%", "51%"],
                  center: ["50%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  itemStyle: { shadowColor: "#ad5b68", shadowBlur: 15 },
                  data: [
                    {
                      value: 20,
                      name: "20%",
                      itemStyle: { normal: { color: "#ad5b68" } },
                    },
                    { value: 80, name: "80%", itemStyle: e },
                  ],
                },
                {
                  name: "食品类",
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["33%", "38%"],
                  center: ["50%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  itemStyle: { shadowColor: "#6082a5", shadowBlur: 15 },
                  data: [
                    {
                      value: 73,
                      name: "73%",
                      itemStyle: { normal: { color: "#6082a5" } },
                    },
                    { value: 27, name: "27%", itemStyle: e },
                  ],
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      He = qe,
      Ge = (a("e692"), Object(l["a"])(He, je, $e, !1, null, "7a5d223c", null)),
      Ve = Ge.exports,
      Ye = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Xe = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("仪表盘")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_gauge" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      Ue = {
        name: "gauge",
        data: function() {
          return { option: null, timer: null };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = this,
              e = echarts.init(document.getElementById("chart_gauge"));
            (this.option = {
              tooltip: { formatter: "{a} <br/>{c} {b}" },
              series: [
                {
                  name: "速度",
                  type: "gauge",
                  min: 0,
                  max: 220,
                  splitNumber: 11,
                  axisLine: {
                    lineStyle: {
                      color: [
                        [0.09, "lime"],
                        [0.82, "#1e90ff"],
                        [1, "#ff4500"],
                      ],
                      width: 3,
                      shadowColor: "#fff",
                      shadowBlur: 10,
                    },
                  },
                  axisLabel: {
                    fontWeight: "bolder",
                    color: "#fff",
                    shadowColor: "#fff",
                    shadowBlur: 10,
                  },
                  axisTick: {
                    length: 15,
                    lineStyle: {
                      color: "auto",
                      shadowColor: "#fff",
                      shadowBlur: 10,
                    },
                  },
                  splitLine: {
                    length: 25,
                    lineStyle: {
                      width: 3,
                      color: "#fff",
                      shadowColor: "#fff",
                      shadowBlur: 10,
                    },
                  },
                  pointer: { shadowColor: "#fff", shadowBlur: 5 },
                  title: {
                    textStyle: {
                      fontWeight: "bolder",
                      fontSize: 20,
                      fontStyle: "italic",
                      color: "#fff",
                      shadowColor: "#fff",
                      shadowBlur: 10,
                    },
                  },
                  detail: {
                    offsetCenter: [0, "50%"],
                    textStyle: {
                      fontWeight: "bolder",
                      fontSize: 25,
                      color: "#fff",
                    },
                  },
                  data: [{ value: 40, name: "km/h" }],
                },
              ],
            }),
              e.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                e.resize();
              }),
              (this.timer = setInterval(function() {
                (t.option.series[0].data[0].value =
                  (100 * Math.random()).toFixed(2) - 0),
                  e.setOption(t.option, !0);
              }, 2e3));
          },
        },
        beforeDestroy: function() {
          clearInterval(this.timer);
        },
      },
      Ze = Ue,
      Qe = (a("e84f"), Object(l["a"])(Ze, Ye, Xe, !1, null, "a97f4954", null)),
      Je = Qe.exports,
      Ke = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      ta = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("事务处理好评率")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_polo" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      ea = {
        name: "waterPolo",
        data: function() {
          return { option: null };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_polo"));
            (this.option = {
              series: [
                {
                  type: "liquidFill",
                  data: [0.85],
                  radius: "70%",
                  color: ["#00b9f5"],
                  backgroundStyle: {
                    color: "rgba(0, 0, 0, 0.5)",
                    borderColor: "#007bff",
                    borderWidth: 3,
                    shadowColor: "rgba(0, 123, 225, 0.4)",
                    shadowBlur: 20,
                  },
                  outline: { show: !1 },
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      aa = ea,
      na = (a("46ae"), Object(l["a"])(aa, Ke, ta, !1, null, "320796c8", null)),
      ra = na.exports,
      ia = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "wrap-container sn-container" }, [
          a("div", { staticClass: "sn-content" }, [
            a("div", { staticClass: "sn-title" }, [t._v("圆环套圆环")]),
            a("div", { staticClass: "sn-body" }, [
              a("div", { staticClass: "defelement" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_circle" },
                  }),
                  a("div", { staticClass: "svg-dom" }, [
                    a(
                      "svg",
                      {
                        attrs: {
                          width: "100%",
                          height: "100%",
                          version: "1.1",
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        },
                      },
                      [
                        a("path", {
                          attrs: {
                            id: "svg_2",
                            d:
                              "m117,210c0,-51.65746 41.61878,-93.5 93,-93.5c51.38122,0 93,41.84254 93,93.5c0,51.65746 -41.61878,93.5 -93,93.5c-51.38122,0 -93,-41.84254 -93,-93.5z",
                            stroke: "#bfbfbf",
                            fill: "none",
                            "stroke-dasharray": "3,3",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        }),
                        a("path", {
                          attrs: {
                            id: "svg_3",
                            d:
                              "m134,210c0,-41.71271 34.01105,-75.5 76,-75.5c41.98895,0 76,33.78729 76,75.5c0,41.71271 -34.01105,75.5 -76,75.5c-41.98895,0 -76,-33.78729 -76,-75.5z",
                            stroke: "#bfbfbf",
                            fill: "none",
                            "stroke-dasharray": "3,3",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        }),
                      ]
                    ),
                  ]),
                  a("div", { staticClass: "cir-arrow cir-arrow1" }),
                  a("div", { staticClass: "cir-arrow cir-arrow2" }),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      oa = [],
      sa = {
        name: "circleNesting",
        data: function() {
          return { option: null };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_circle")),
              e = { normal: { color: "rgba(0, 0, 0, 0)" } };
            (this.option = {
              color: ["#5d8ef8", "#638bfd", "#1dd1c1"],
              series: [
                {
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["68%", "70%"],
                  center: ["50%", "50%"],
                  label: { normal: { show: !1 } },
                  labelLine: { normal: { show: !1 } },
                  data: [
                    {
                      value: 10,
                      name: "100%",
                      itemStyle: {
                        normal: {
                          color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                              { offset: 1, color: "#628cfd" },
                              { offset: 0, color: "#20cdc4" },
                            ]
                          ),
                        },
                      },
                    },
                  ],
                },
                {
                  type: "pie",
                  clockWise: !1,
                  startAngle: 90,
                  hoverAnimation: !1,
                  radius: ["53%", "56%"],
                  center: ["50%", "50%"],
                  label: {
                    normal: {
                      show: !0,
                      fontSize: 16,
                      lineHeight: 22,
                      formatter: function(t) {
                        return t.name + "\n" + t.value + "%";
                      },
                    },
                  },
                  labelLine: {
                    smooth: !0,
                    normal: {
                      show: !0,
                      length: 20,
                      length2: 20,
                      lineStyle: { type: "dotted" },
                    },
                  },
                  data: [
                    {
                      value: 64,
                      name: "交易比",
                      itemStyle: { normal: { color: "#638bfd" } },
                    },
                    { value: 36, name: "", itemStyle: e },
                  ],
                },
                {
                  type: "pie",
                  clockWise: !1,
                  startAngle: 0,
                  hoverAnimation: !1,
                  radius: ["43%", "46%"],
                  center: ["50%", "50%"],
                  label: {
                    normal: {
                      show: !0,
                      fontSize: 16,
                      lineHeight: 22,
                      formatter: function(t) {
                        return t.name + "\n" + t.value + "%";
                      },
                    },
                  },
                  labelLine: {
                    smooth: !0,
                    normal: {
                      show: !0,
                      length: 20,
                      length2: 50,
                      lineStyle: { type: "dotted" },
                    },
                  },
                  data: [
                    {
                      value: 36,
                      name: "通道比",
                      itemStyle: { normal: { color: "#1dd1c1" } },
                    },
                    { value: 64, name: "", itemStyle: e },
                  ],
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      la = sa,
      ca = (a("9a76"), Object(l["a"])(la, ia, oa, !1, null, "2f90979e", null)),
      ua = ca.exports,
      ha = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      da = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrap-container sn-container" }, [
            a("div", { staticClass: "sn-content" }, [
              a("div", { staticClass: "sn-title" }, [t._v("事务处理率")]),
              a("div", { staticClass: "sn-body" }, [
                a("div", { staticClass: "wrap-container" }, [
                  a("div", {
                    staticClass: "chartsdom",
                    attrs: { id: "chart_polo2" },
                  }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      fa = {
        name: "waterPolo2",
        data: function() {
          return { option: null };
        },
        mounted: function() {
          this.getEchart();
        },
        methods: {
          getEchart: function() {
            var t = echarts.init(document.getElementById("chart_polo2"));
            (this.option = {
              series: [
                {
                  type: "liquidFill",
                  data: [1],
                  radius: "70%",
                  color: ["#00b9f5"],
                  backgroundStyle: {
                    color: "rgba(0, 0, 0, 0.5)",
                    borderColor: "#007bff",
                    borderWidth: 3,
                    shadowColor: "rgba(0, 123, 225, 0.4)",
                    shadowBlur: 20,
                  },
                  outline: { show: !1 },
                },
              ],
            }),
              t.setOption(this.option, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      ma = fa,
      va = (a("8d4f"), Object(l["a"])(ma, ha, da, !1, null, "4a9a841c", null)),
      pa = va.exports,
      ga = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      ya = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "business-container" }, [
            a("div", { staticClass: "chart", attrs: { id: "chart_left1" } }),
          ]);
        },
      ],
      ba = {
        name: "business",
        data: function() {
          return {};
        },
        mounted: function() {
          this.getEchartLeft1();
        },
        methods: {
          getEchartLeft1: function() {
            for (
              var t = echarts.init(document.getElementById("chart_left1")),
                e = {
                  cityList: [
                    "金融行业",
                    "电子政务",
                    "文创版权",
                    "教育行业",
                    "智慧停车",
                    "医疗互联",
                    "物流行业",
                  ],
                  cityData: [1500, 1200, 900, 600, 400, 300, 100],
                },
                a = e.cityList,
                n = e.cityData,
                r = [
                  "rgba(14,109,236",
                  "rgba(255,91,6",
                  "rgba(100,255,249",
                  "rgba(248,195,248",
                  "rgba(110,234,19",
                  "rgba(255,168,17",
                  "rgba(218,111,227",
                ],
                i = [],
                o = 0;
              o < e.cityList.length;
              o++
            ) {
              var s = o;
              s > r.length - 1 && (s = r.length - 1);
              var l = {
                name: e.cityList[o],
                color: r[s] + ")",
                value: n[o],
                itemStyle: {
                  normal: {
                    show: !0,
                    color: new echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        { offset: 0, color: r[s] + ", 0.3)" },
                        { offset: 1, color: r[s] + ", 1)" },
                      ],
                      !1
                    ),
                    barBorderRadius: 10,
                  },
                  emphasis: {
                    shadowBlur: 15,
                    shadowColor: "rgba(0, 0, 0, 0.1)",
                  },
                },
              };
              i.push(l);
            }
            var c = {
              color: r,
              tooltip: { trigger: "item" },
              grid: {
                borderWidth: 0,
                top: "5%",
                left: "2%",
                right: "2%",
                bottom: "0%",
                containLabel: !0,
              },
              xAxis: [
                {
                  type: "value",
                  axisTick: { show: !1 },
                  axisLine: { show: !1 },
                  splitLine: { show: !1 },
                  axisLabel: { show: !1 },
                },
              ],
              yAxis: [
                {
                  type: "category",
                  inverse: !0,
                  axisTick: { show: !1 },
                  axisLine: { show: !1 },
                  axisLabel: {
                    show: !0,
                    inside: !1,
                    textStyle: { color: "#b3ccf8", fontSize: 13 },
                  },
                  data: a,
                },
                {
                  type: "category",
                  axisLine: { show: !1 },
                  axisTick: { show: !1 },
                  axisLabel: {
                    show: !0,
                    inside: !1,
                    textStyle: { color: "#b3ccf8", fontSize: 13 },
                    formatter: function(t) {
                      return "".concat(t);
                    },
                  },
                  splitArea: { show: !1 },
                  splitLine: { show: !1 },
                  data: n.reverse(),
                },
              ],
              series: [
                {
                  name: "",
                  type: "bar",
                  zlevel: 2,
                  barWidth: "10px",
                  data: i,
                  animationDuration: 1500,
                  label: {
                    normal: {
                      color: "#b3ccf8",
                      show: !1,
                      position: [0, "-15px"],
                      textStyle: { fontSize: 13 },
                      formatter: function(t, e) {
                        return t.name;
                      },
                    },
                  },
                },
              ],
            };
            t.setOption(c, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      xa = ba,
      wa = (a("c4c7"), Object(l["a"])(xa, ga, ya, !1, null, "2354e360", null)),
      _a = wa.exports,
      Sa = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Ca = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "talent-container" }, [
            a("div", { staticClass: "chart", attrs: { id: "chart_left2" } }),
          ]);
        },
      ],
      ka = {
        name: "talent",
        data: function() {
          return {};
        },
        mounted: function() {
          this.getEchartLeft2();
        },
        methods: {
          getEchartLeft2: function() {
            for (
              var t = echarts.init(document.getElementById("chart_left2")),
                e = [
                  { name: "年轻人", value: 5 },
                  { name: "中年人", value: 10 },
                  { name: "儿童", value: 10 },
                  { name: "老年人", value: 10 },
                ],
                a = {
                  white: { color: "#ddd", align: "center", padding: [3, 0] },
                },
                n = {
                  normal: {
                    label: { show: !1 },
                    labelLine: { show: !1 },
                    color: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0,
                  },
                },
                r = [],
                i = [
                  "#00ffff",
                  "#00cfff",
                  "#006ced",
                  "#ffe000",
                  "#ffa800",
                  "#ff5b00",
                  "#ff3000",
                ],
                o = 0;
              o < e.length;
              o++
            )
              r.push(
                {
                  value: e[o].value,
                  name: e[o].name,
                  itemStyle: {
                    normal: {
                      borderWidth: 6,
                      shadowBlur: 10,
                      borderColor: i[o],
                      shadowColor: i[o],
                    },
                  },
                },
                { value: 2, name: "", itemStyle: n }
              );
            var s = {
              series: [
                {
                  name: "",
                  type: "pie",
                  clockWise: !1,
                  radius: ["66%", "68%"],
                  center: ["50%", "50%"],
                  hoverAnimation: !1,
                  itemStyle: {
                    normal: {
                      label: {
                        show: !0,
                        position: "outside",
                        color: "#ddd",
                        formatter: function(t) {
                          for (var a = 0, n = 0, r = 0; r < e.length; r++)
                            n += e[r].value;
                          return (
                            (a = ((t.value / n) * 100).toFixed(0)),
                            "" !== t.name
                              ? t.name + "\n{white|占比" + a + "%}"
                              : ""
                          );
                        },
                        rich: a,
                      },
                      labelLine: {
                        length: 10,
                        length2: 30,
                        show: !0,
                        color: "#00ffff",
                      },
                    },
                  },
                  data: r,
                },
              ],
            };
            t.setOption(s, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      Ma = ka,
      Ta = (a("3fe6"), Object(l["a"])(Ma, Sa, Ca, !1, null, "37338e2c", null)),
      Aa = Ta.exports,
      La = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Oa = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "income-container" }, [
            a("div", { staticClass: "chart", attrs: { id: "chart_left3" } }),
          ]);
        },
      ],
      Ea = {
        name: "income",
        data: function() {
          return {};
        },
        mounted: function() {
          this.getEchartLeft3();
        },
        methods: {
          getEchartLeft3: function() {
            var t = echarts.init(document.getElementById("chart_left3")),
              e = {
                city: ["2015", "2016", "2017", "2018", "2019", "2020"],
                num: ["555", "896", "1935", "2922", "4508", "5000"],
              },
              a = {
                tooltip: {
                  trigger: "axis",
                  axisPointer: {
                    lineStyle: {
                      color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                          { offset: 0, color: "rgba(255,255,255,0)" },
                          { offset: 0.5, color: "rgba(255,255,255,1)" },
                          { offset: 1, color: "rgba(255,255,255,0)" },
                        ],
                        global: !1,
                      },
                    },
                  },
                  formatter: function(t) {
                    return t[0].name + "年人均收入：<br>" + t[0].value + "元";
                  },
                },
                grid: {
                  top: "5%",
                  left: "2%",
                  right: "2%",
                  bottom: "0%",
                  containLabel: !0,
                },
                xAxis: [
                  {
                    type: "category",
                    boundaryGap: !0,
                    axisLine: { show: !1, lineStyle: { color: "#092b5d" } },
                    axisLabel: {
                      textStyle: { color: "#24c4ff", margin: 15 },
                      formatter: function(t) {
                        return t.substr(2) + "年";
                      },
                    },
                    axisTick: { show: !1 },
                    data: e.city,
                  },
                ],
                yAxis: [
                  {
                    min: 0,
                    max: 6e3,
                    splitLine: { show: !1, lineStyle: { color: "#092b5d" } },
                    axisLine: { show: !1, lineStyle: { color: "#092b5d" } },
                    axisLabel: { show: !0, textStyle: { color: "#24c4ff" } },
                    axisTick: { show: !1 },
                  },
                ],
                series: [
                  {
                    name: "",
                    type: "line",
                    symbol: "circle",
                    showAllSymbol: !0,
                    symbolSize: 8,
                    lineStyle: {
                      normal: { color: "#7c80f4" },
                      borderColor: "rgba(0,0,0,.4)",
                    },
                    itemStyle: {
                      color: "rgba(14,30,73,1)",
                      borderColor: "#646ace",
                      borderWidth: 2,
                    },
                    label: {
                      normal: {
                        show: !0,
                        position: "top",
                        formatter: [" {a|{c}}"].join(","),
                        rich: { a: { color: "#fff", align: "center" } },
                      },
                    },
                    smooth: !0,
                    areaStyle: {
                      normal: {
                        color: new echarts.graphic.LinearGradient(
                          0,
                          0,
                          0,
                          1,
                          [
                            { offset: 0, color: "rgba(124, 128, 244,.3)" },
                            { offset: 1, color: "rgba(124, 128, 244, 0)" },
                          ],
                          !1
                        ),
                        shadowColor: "rgba(53,142,215, 0.9)",
                        shadowBlur: 20,
                      },
                    },
                    data: e.num,
                  },
                ],
              };
            t.setOption(a, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      Ia = Ea,
      Pa = (a("9edb"), Object(l["a"])(Ia, La, Oa, !1, null, "21badab8", null)),
      Da = Pa.exports,
      za = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Ba = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "word-container" }, [
            a("div", { staticClass: "chart", attrs: { id: "chart_right1" } }),
          ]);
        },
      ],
      Wa =
        (a("76fc"),
        {
          name: "wordCloud",
          data: function() {
            return { timer: null };
          },
          mounted: function() {
            var t = this;
            this.getEchartRight1(),
              (this.timer = setInterval(function() {
                t.getEchartRight1();
              }, 5e3));
          },
          methods: {
            getEchartRight1: function() {
              var t = echarts.init(document.getElementById("chart_right1")),
                e = {
                  series: [
                    {
                      type: "wordCloud",
                      gridSize: 1,
                      sizeRange: [12, 50],
                      rotationRange: [-90, 90],
                      rotationStep: 45,
                      shape: "diamond",
                      width: "90%",
                      textPadding: 0,
                      autoSize: { enable: !0, minSize: 6 },
                      textStyle: {
                        normal: {
                          textBorderColor: "rgba(255,255,255,0.3)",
                          textBorderWidth: 1,
                          color: function() {
                            return (
                              "rgb(" +
                              [
                                Math.round(160 * Math.random()),
                                Math.round(160 * Math.random()),
                                Math.round(160 * Math.random()),
                              ].join(",") +
                              ")"
                            );
                          },
                        },
                        emphasis: { fontSize: 20 },
                      },
                      data: [
                        { name: "区块链", value: 810 },
                        { name: "云计算", value: 520 },
                        { name: "人工智能", value: 928 },
                        { name: "大数据", value: 906 },
                        { name: "工业互联网", value: 825 },
                        { name: "医疗", value: 514 },
                        { name: "质量溯源", value: 486 },
                        { name: "政务", value: 53 },
                        { name: "密码学", value: 927 },
                        { name: "金融行业", value: 1308 },
                        { name: "供应链", value: 693 },
                        { name: "公有链", value: 611 },
                        { name: "私有链", value: 512 },
                        { name: "联盟链", value: 382 },
                        { name: "数据共享", value: 312 },
                        { name: "文创版权", value: 187 },
                        { name: "天河链", value: 163 },
                        { name: "数据存证", value: 104 },
                        { name: "UDFS存储", value: 3 },
                        { name: "在线教育", value: 31 },
                        { name: "关联分析", value: 941 },
                        { name: "智慧停车", value: 585 },
                        { name: "链云生态", value: 473 },
                        { name: "应用层", value: 358 },
                        { name: "网络层", value: 246 },
                        { name: "数据层", value: 207 },
                        { name: "基础层", value: 194 },
                        { name: "智能合约", value: 104 },
                        { name: "去中心化", value: 87 },
                        { name: "数字货币", value: 415 },
                        { name: "酷屏", value: 253 },
                        { name: "可视化", value: 211 },
                        { name: "P2P", value: 116 },
                        { name: "数据挖掘", value: 1309 },
                      ],
                    },
                  ],
                };
              t.setOption(e, !0),
                window.addEventListener("resize", function() {
                  t.resize();
                });
            },
          },
          beforeDestroy: function() {
            clearInterval(this.timer);
          },
        }),
      Ra = Wa,
      Fa = (a("fb39"), Object(l["a"])(Ra, za, Ba, !1, null, "7a165dc8", null)),
      Na = Fa.exports,
      ja = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      $a = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "distribution-container" }, [
            a("div", { staticClass: "chart", attrs: { id: "chart_right2" } }),
          ]);
        },
      ],
      qa = {
        name: "distribution",
        data: function() {
          return {};
        },
        mounted: function() {
          this.getEchartRight2();
        },
        methods: {
          getEchartRight2: function() {
            var t = echarts.init(document.getElementById("chart_right2")),
              e = {
                color: [
                  "#EAEA26",
                  "#906BF9",
                  "#FE5656",
                  "#01E17E",
                  "#3DD1F9",
                  "#FFAD05",
                  "#4465fc",
                ],
                tooltip: { trigger: "item", formatter: "{b} : {c} ({d}%)" },
                polar: {},
                angleAxis: {
                  interval: 1,
                  type: "category",
                  data: [],
                  z: 10,
                  axisLine: {
                    show: !1,
                    lineStyle: { color: "#0B4A6B", width: 5, type: "solid" },
                  },
                  axisLabel: {
                    interval: 0,
                    show: !0,
                    color: "#0B4A6B",
                    margin: 8,
                    fontSize: 16,
                  },
                },
                radiusAxis: {
                  min: 40,
                  max: 120,
                  interval: 20,
                  axisLine: {
                    show: !1,
                    lineStyle: { color: "#0B3E5E", width: 1, type: "solid" },
                  },
                  axisLabel: {
                    formatter: "{value} %",
                    show: !1,
                    padding: [0, 0, 20, 0],
                    color: "#0B3E5E",
                    fontSize: 16,
                  },
                  splitLine: {
                    lineStyle: { color: "#0B3E5E", width: 2, type: "solid" },
                  },
                },
                calculable: !0,
                series: [
                  {
                    type: "pie",
                    radius: ["6%", "10%"],
                    hoverAnimation: !1,
                    labelLine: {
                      normal: { show: !1, length: 30, length2: 50 },
                      emphasis: { show: !1 },
                    },
                    tooltip: { show: !1 },
                    data: [
                      {
                        name: "",
                        value: 0,
                        itemStyle: { normal: { color: "#0B4A6B" } },
                      },
                    ],
                  },
                  {
                    type: "pie",
                    radius: ["90%", "95%"],
                    hoverAnimation: !1,
                    labelLine: {
                      normal: { show: !1, length: 30, length2: 50 },
                      emphasis: { show: !1 },
                    },
                    tooltip: { show: !1 },
                    data: [
                      {
                        name: "",
                        value: 0,
                        itemStyle: { normal: { color: "#0B4A6B" } },
                      },
                    ],
                  },
                  {
                    stack: "a",
                    type: "pie",
                    radius: ["20%", "80%"],
                    roseType: "area",
                    zlevel: 10,
                    label: {
                      normal: {
                        show: !0,
                        formatter: "{b}",
                        textStyle: { fontSize: 12 },
                        position: "outside",
                      },
                      emphasis: { show: !1 },
                    },
                    labelLine: {
                      normal: {
                        show: !0,
                        length: 15,
                        length2: 50,
                        lineStyle: { type: "dotted" },
                      },
                      emphasis: { show: !0 },
                    },
                    data: [
                      { value: 35, name: "大街" },
                      { value: 28, name: "村头" },
                      { value: 23, name: "村东" },
                      { value: 18, name: "村西" },
                    ],
                  },
                ],
              };
            t.setOption(e, !0),
              window.addEventListener("resize", function() {
                t.resize();
              });
          },
        },
        beforeDestroy: function() {},
      },
      Ha = qa,
      Ga = (a("56e5"), Object(l["a"])(Ha, ja, $a, !1, null, "7cba5e5e", null)),
      Va = Ga.exports,
      Ya = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "history-container" }, [
          a("div", { staticClass: "tabs" }, [
            a(
              "ul",
              { staticClass: "tab-tilte" },
              t._l(t.tabTitle, function(e, n) {
                return a(
                  "li",
                  {
                    key: e,
                    class: { active: t.cur == n },
                    on: {
                      mouseover: function(e) {
                        return t.handleMouseOver(n);
                      },
                      mouseout: function(e) {
                        return t.handleMouseOut(n);
                      },
                    },
                  },
                  [t._v(" " + t._s(e) + " ")]
                );
              }),
              0
            ),
            a(
              "div",
              { staticClass: "indicatorDots" },
              t._l(t.tabTitle, function(e, n) {
                return a("span", { key: n, class: { active: t.cur == n } });
              }),
              0
            ),
            a(
              "div",
              { staticClass: "tab-content" },
              t._l(t.tabCon, function(e, n) {
                return a(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.cur == n,
                        expression: "cur == index",
                      },
                    ],
                    key: e,
                  },
                  t._l(e, function(e, n) {
                    return a("div", { key: n, staticClass: "content" }, [
                      t._v(" " + t._s(e) + " "),
                    ]);
                  }),
                  0
                );
              }),
              0
            ),
          ]),
        ]);
      },
      Xa = [],
      Ua = {
        name: "history",
        data: function() {
          return {
            timer: null,
            tabTitle: ["2015", "2016", "2017", "2018", "2019", "2020"],
            tabCon: [
              [
                "2015.10，公司成立，正式布局区块链、大数据方向",
                "2015.11，与国家超算吕梁云计算中心签订战略合作协议",
                "2015.12，建设高性能计算服务平台，基于区块链技术打造文创基础云平台",
              ],
              [
                "2016.03，公司提供的高性能计算服务得到中科院认可，就此达成合作",
                "2016.07，与国家超算广州中心签订战略合作协议，启动区块链底层公链开发技术论证",
                "2016.10，启动区块链底层公链开发，开拓数字资产管理业务",
                "2016.11，与国家超级计算长沙中心签订战略合作协议",
              ],
              [
                "2017.03，与国家级长沙经开区共建博士创新创业园",
                "2017.07，开发GBI区块链资讯信息平台",
                "2017.09，打造区块链信息服务平台，开拓区块链安全业务",
                "2017.12，区块链底层公链测试链上线运行，启动链上DAPP开发",
              ],
              [
                "2018.05，与长沙经开区共建区块链产业园，区块链底层公链上线运行",
                "2018.08，公链分布式存储网络正式运行",
                "2018.10，区块链安全技术检测中心正式运行，公链多侧链技术落地，链上应用上线",
                "2018.12，被评为中国区块链百强企业",
              ],
              [
                "2019.03，上线分布式存储系统UDFS，更新优壹号V2.0.0版，完成Ulord V2.0版白皮书全部规划",
                "2019.07，文创版权公共服务平台优版权正式上线",
                "2019.08，承担国家网信办区块链相关课题研究",
              ],
              [
                "2020.03，完成分布式计算框架和贡献证明算法的设计和开发",
                "2020.05，完成分布式计算资源动态调度和管理开发",
                "2020.10，推出链云计算生态，完成计算平台和API接口开发，完成优壹号对计算Dapp支持",
              ],
            ],
            cur: 0,
          };
        },
        mounted: function() {
          this.getTimer();
        },
        methods: {
          getTimer: function() {
            var t = this;
            this.timer = setInterval(function() {
              t.cur++, t.cur == t.tabTitle.length && (t.cur = 0);
            }, 2e3);
          },
          handleMouseOver: function(t) {
            (this.cur = t), clearInterval(this.timer);
          },
          handleMouseOut: function(t) {
            this.getTimer();
          },
        },
        beforeDestroy: function() {
          clearInterval(this.timer);
        },
      },
      Za = Ua,
      Qa = (a("9363"), Object(l["a"])(Za, Ya, Xa, !1, null, "58d25017", null)),
      Ja = Qa.exports,
      Ka = {
        bgAnimation: C,
        modal: O,
        sinan: B,
        seamless: H,
        pyramid: Z,
        scrollArc: at,
        szBar: lt,
        ringPin: mt,
        rotateColorful: xt,
        circleRunway: Mt,
        scanRadius: It,
        cakeLinkage: Rt,
        dynamicLine: Ht,
        pyramidTrend: Zt,
        staffMix: ae,
        flashCloud: le,
        ringPie: me,
        colorfulRadar: xe,
        dynamicList: Ae,
        bar3d: De,
        colorfulArea: Ne,
        rainbow: Ve,
        gauge: Je,
        waterPolo: ra,
        circleNesting: ua,
        waterPolo2: pa,
        business: _a,
        talent: Aa,
        income: Da,
        wordCloud: Na,
        distribution: Va,
        history: Ja,
      },
      tn = function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t.installed ||
          (Object.keys(Ka).forEach(function(t) {
            e.component(Ka[t].name, Ka[t]);
          }),
          (t.installed = !0));
      };
    (tn.installed = !1),
      "undefined" !== typeof window &&
        window.Vue &&
        (tn(window.Vue), (tn.installed = !0));
    var en = Object(y["a"])({}, Ka, { install: tn }),
      an = en,
      nn = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("transition", { attrs: { name: "fade" } }, [
          t.visible
            ? a("div", { staticClass: "toast-container" }, [
                a("div", { staticClass: "toast", class: t.type }, [
                  a("div", { staticClass: "content" }, [
                    a("i", {
                      staticClass: "iconfont",
                      class: "icon-" + t.type,
                    }),
                    a("span", [t._v(t._s(t.content))]),
                  ]),
                  t.hasClose
                    ? a("i", {
                        staticClass: "iconfont icon-close close",
                        on: {
                          click: function(e) {
                            t.visible = !1;
                          },
                        },
                      })
                    : t._e(),
                ]),
              ])
            : t._e(),
        ]);
      },
      rn = [],
      on = {
        name: "Toast",
        data: function() {
          return {
            content: "",
            time: 3e3,
            visible: !1,
            type: "error",
            hasClose: !1,
          };
        },
        mounted: function() {
          this.close();
        },
        methods: {
          close: function() {
            var t = this;
            setTimeout(function() {
              t.visible = !1;
            }, this.time);
          },
        },
      },
      sn = on,
      ln = (a("5271"), Object(l["a"])(sn, nn, rn, !1, null, "7d65a072", null)),
      cn = ln.exports,
      un = n["default"].extend(cn);
    cn.install = function(t, e) {
      void 0 === t || null === t
        ? (t = { content: "" })
        : ("string" !== typeof t && "number" !== typeof t) ||
          ((t = { content: t }), void 0 !== e && null !== t && (t.type = e));
      var a = new un({ data: t }).$mount();
      document.body.appendChild(a.$el),
        n["default"].nextTick(function() {
          a.visible = !0;
        });
    };
    var hn = cn.install,
      dn = a("5c96"),
      fn = a.n(dn);
    a("0fae"), a("b19f"), a("7dd0a"), a("be35");
    n["default"].use(fn.a),
      n["default"].use(g["a"]),
      n["default"].use(an),
      (n["default"].config.productionTip = !1),
      (n["default"].prototype.$Toast = hn),
      m.beforeEach(function(t, e, a) {
        t.meta.title && (document.title = t.meta.title), a();
      }),
      new n["default"]({
        router: m,
        store: p,
        render: function(t) {
          return t(u);
        },
      }).$mount("#app");
  },
  "56e5": function(t, e, a) {
    "use strict";
    var n = a("2a5d"),
      r = a.n(n);
    r.a;
  },
  "58f4": function(t, e, a) {},
  "5c0b": function(t, e, a) {
    "use strict";
    var n = a("9c0c"),
      r = a.n(n);
    r.a;
  },
  6058: function(t, e, a) {},
  "6f53": function(t, e, a) {
    "use strict";
    var n = a("93ce"),
      r = a.n(n);
    r.a;
  },
  "755b": function(t, e, a) {
    "use strict";
    var n = a("3d74"),
      r = a.n(n);
    r.a;
  },
  "76fc": function(t, e, a) {
    (function(t) {
      var n, r, i;
      a("99af"),
        a("cb29"),
        a("4de4"),
        a("7db0"),
        a("4160"),
        a("c975"),
        a("a15b"),
        a("baa5"),
        a("d81d"),
        a("13d5"),
        a("fb6a"),
        a("45fc"),
        a("a434"),
        a("b0c0"),
        a("a9e3"),
        a("b680"),
        a("d3b7"),
        a("4d63"),
        a("ac1f"),
        a("25f0"),
        a("466d"),
        a("38cf"),
        a("5319"),
        a("1276"),
        a("4c53"),
        a("cfc3"),
        a("9a8c"),
        a("a975"),
        a("735e"),
        a("c1ac"),
        a("d139"),
        a("3a7b"),
        a("d5d6"),
        a("82f8"),
        a("e91f"),
        a("60bd"),
        a("5f96"),
        a("3280"),
        a("3fcc"),
        a("ca91"),
        a("25a1"),
        a("cd26"),
        a("3c5d"),
        a("2954"),
        a("649e"),
        a("219c"),
        a("170b"),
        a("b39a"),
        a("72f7"),
        a("159b"),
        a("130f");
      var o = a("7037");
      !(function(s, l) {
        "object" == o(e) && "object" == o(t)
          ? (t.exports = l(a("164e")))
          : ((r = [a("164e")]),
            (n = l),
            (i = "function" === typeof n ? n.apply(e, r) : n),
            void 0 === i || (t.exports = i));
      })(0, function(t) {
        return (function(t) {
          function e(n) {
            if (a[n]) return a[n].exports;
            var r = (a[n] = { i: n, l: !1, exports: {} });
            return t[n].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
          }
          var a = {};
          return (
            (e.m = t),
            (e.c = a),
            (e.d = function(t, a, n) {
              e.o(t, a) ||
                Object.defineProperty(t, a, {
                  configurable: !1,
                  enumerable: !0,
                  get: n,
                });
            }),
            (e.n = function(t) {
              var a =
                t && t.__esModule
                  ? function() {
                      return t.default;
                    }
                  : function() {
                      return t;
                    };
              return e.d(a, "a", a), a;
            }),
            (e.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (e.p = ""),
            e((e.s = 25))
          );
        })([
          function(t, e) {
            function a(t, e) {
              X[t] = e;
            }
            function n(t) {
              if (null == t || "object" != o(t)) return t;
              var e = t,
                a = j.call(t);
              if ("[object Array]" === a) {
                e = [];
                for (var r = 0, i = t.length; r < i; r++) e[r] = n(t[r]);
              } else if (N[a]) {
                var s = t.constructor;
                if (t.constructor.from) e = s.from(t);
                else {
                  e = new s(t.length);
                  for (r = 0, i = t.length; r < i; r++) e[r] = n(t[r]);
                }
              } else if (!F[a] && !z(t) && !M(t))
                for (var l in ((e = {}), t))
                  t.hasOwnProperty(l) && (e[l] = n(t[l]));
              return e;
            }
            function r(t, e, a) {
              if (!C(e) || !C(t)) return a ? n(e) : t;
              for (var i in e)
                if (e.hasOwnProperty(i)) {
                  var o = t[i],
                    s = e[i];
                  !C(s) ||
                  !C(o) ||
                  w(s) ||
                  w(o) ||
                  M(s) ||
                  M(o) ||
                  k(s) ||
                  k(o) ||
                  z(s) ||
                  z(o)
                    ? (!a && i in t) || (t[i] = n(e[i], !0))
                    : r(o, s, a);
                }
              return t;
            }
            function i(t, e) {
              for (var a = t[0], n = 1, i = t.length; n < i; n++)
                a = r(a, t[n], e);
              return a;
            }
            function s(t, e) {
              for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
              return t;
            }
            function l(t, e, a) {
              for (var n in e)
                e.hasOwnProperty(n) &&
                  (a ? null != e[n] : null == t[n]) &&
                  (t[n] = e[n]);
              return t;
            }
            function c() {
              return Z || (Z = U().getContext("2d")), Z;
            }
            function u(t, e) {
              if (t) {
                if (t.indexOf) return t.indexOf(e);
                for (var a = 0, n = t.length; a < n; a++)
                  if (t[a] === e) return a;
              }
              return -1;
            }
            function h(t, e) {
              function a() {}
              var n = t.prototype;
              for (var r in ((a.prototype = e.prototype),
              (t.prototype = new a()),
              n))
                t.prototype[r] = n[r];
              (t.prototype.constructor = t), (t.superClass = e);
            }
            function d(t, e, a) {
              (t = "prototype" in t ? t.prototype : t),
                (e = "prototype" in e ? e.prototype : e),
                l(t, e, a);
            }
            function f(t) {
              if (t) return "string" != typeof t && "number" == typeof t.length;
            }
            function m(t, e, a) {
              if (t && e)
                if (t.forEach && t.forEach === q) t.forEach(e, a);
                else if (t.length === +t.length)
                  for (var n = 0, r = t.length; n < r; n++)
                    e.call(a, t[n], n, t);
                else
                  for (var i in t) t.hasOwnProperty(i) && e.call(a, t[i], i, t);
            }
            function v(t, e, a) {
              if (t && e) {
                if (t.map && t.map === V) return t.map(e, a);
                for (var n = [], r = 0, i = t.length; r < i; r++)
                  n.push(e.call(a, t[r], r, t));
                return n;
              }
            }
            function p(t, e, a, n) {
              if (t && e) {
                if (t.reduce && t.reduce === Y) return t.reduce(e, a, n);
                for (var r = 0, i = t.length; r < i; r++)
                  a = e.call(n, a, t[r], r, t);
                return a;
              }
            }
            function g(t, e, a) {
              if (t && e) {
                if (t.filter && t.filter === H) return t.filter(e, a);
                for (var n = [], r = 0, i = t.length; r < i; r++)
                  e.call(a, t[r], r, t) && n.push(t[r]);
                return n;
              }
            }
            function y(t, e, a) {
              if (t && e)
                for (var n = 0, r = t.length; n < r; n++)
                  if (e.call(a, t[n], n, t)) return t[n];
            }
            function b(t, e) {
              var a = G.call(arguments, 2);
              return function() {
                return t.apply(e, a.concat(G.call(arguments)));
              };
            }
            function x(t) {
              var e = G.call(arguments, 1);
              return function() {
                return t.apply(this, e.concat(G.call(arguments)));
              };
            }
            function w(t) {
              return "[object Array]" === j.call(t);
            }
            function _(t) {
              return "function" == typeof t;
            }
            function S(t) {
              return "[object String]" === j.call(t);
            }
            function C(t) {
              var e = o(t);
              return "function" === e || (!!t && "object" == e);
            }
            function k(t) {
              return !!F[j.call(t)];
            }
            function M(t) {
              return (
                "object" == o(t) &&
                "number" == typeof t.nodeType &&
                "object" == o(t.ownerDocument)
              );
            }
            function T(t) {
              return t !== t;
            }
            function A(t) {
              for (var e = 0, a = arguments.length; e < a; e++)
                if (null != arguments[e]) return arguments[e];
            }
            function L(t, e) {
              return null != t ? t : e;
            }
            function O(t, e, a) {
              return null != t ? t : null != e ? e : a;
            }
            function E() {
              return Function.call.apply(G, arguments);
            }
            function I(t) {
              if ("number" == typeof t) return [t, t, t, t];
              var e = t.length;
              return 2 === e
                ? [t[0], t[1], t[0], t[1]]
                : 3 === e
                ? [t[0], t[1], t[2], t[1]]
                : t;
            }
            function P(t, e) {
              if (!t) throw new Error(e);
            }
            function D(t) {
              t[Q] = !0;
            }
            function z(t) {
              return t[Q];
            }
            function B(t) {
              t &&
                m(
                  t,
                  function(t, e) {
                    this.set(e, t);
                  },
                  this
                );
            }
            function W(t) {
              return new B(t);
            }
            function R() {}
            var F = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1,
                "[object CanvasPattern]": 1,
                "[object Image]": 1,
                "[object Canvas]": 1,
              },
              N = {
                "[object Int8Array]": 1,
                "[object Uint8Array]": 1,
                "[object Uint8ClampedArray]": 1,
                "[object Int16Array]": 1,
                "[object Uint16Array]": 1,
                "[object Int32Array]": 1,
                "[object Uint32Array]": 1,
                "[object Float32Array]": 1,
                "[object Float64Array]": 1,
              },
              j = Object.prototype.toString,
              $ = Array.prototype,
              q = $.forEach,
              H = $.filter,
              G = $.slice,
              V = $.map,
              Y = $.reduce,
              X = {},
              U = function() {
                return X.createCanvas();
              };
            X.createCanvas = function() {
              return document.createElement("canvas");
            };
            var Z,
              Q = "__ec_primitive__";
            (B.prototype = {
              constructor: B,
              get: function(t) {
                return this["_ec_" + t];
              },
              set: function(t, e) {
                return (this["_ec_" + t] = e), e;
              },
              each: function(t, e) {
                for (var a in (void 0 !== e && (t = b(t, e)), this))
                  this.hasOwnProperty(a) && t(this[a], a.slice(4));
              },
              removeKey: function(t) {
                delete this["_ec_" + t];
              },
            }),
              (e.$override = a),
              (e.clone = n),
              (e.merge = r),
              (e.mergeAll = i),
              (e.extend = s),
              (e.defaults = l),
              (e.createCanvas = U),
              (e.getContext = c),
              (e.indexOf = u),
              (e.inherits = h),
              (e.mixin = d),
              (e.isArrayLike = f),
              (e.each = m),
              (e.map = v),
              (e.reduce = p),
              (e.filter = g),
              (e.find = y),
              (e.bind = b),
              (e.curry = x),
              (e.isArray = w),
              (e.isFunction = _),
              (e.isString = S),
              (e.isObject = C),
              (e.isBuiltInObject = k),
              (e.isDom = M),
              (e.eqNaN = T),
              (e.retrieve = A),
              (e.retrieve2 = L),
              (e.retrieve3 = O),
              (e.slice = E),
              (e.normalizeCssArray = I),
              (e.assert = P),
              (e.setAsPrimitive = D),
              (e.isPrimitive = z),
              (e.createHashMap = W),
              (e.noop = R);
          },
          function(t, e, a) {
            function n(t) {
              r.call(this, t), (this.path = null);
            }
            var r = a(12),
              i = a(0),
              o = a(6),
              s = a(50),
              l = a(56),
              c = l.prototype.getCanvasPattern,
              u = Math.abs,
              h = new o(!0);
            (n.prototype = {
              constructor: n,
              type: "path",
              __dirtyPath: !0,
              strokeContainThreshold: 5,
              brush: function(t, e) {
                var a,
                  n = this.style,
                  r = this.path || h,
                  i = n.hasStroke(),
                  o = n.hasFill(),
                  s = n.fill,
                  l = n.stroke,
                  u = o && !!s.colorStops,
                  d = i && !!l.colorStops,
                  f = o && !!s.image,
                  m = i && !!l.image;
                (n.bind(t, this, e), this.setTransform(t), this.__dirty) &&
                  (u &&
                    ((a = a || this.getBoundingRect()),
                    (this._fillGradient = n.getGradient(t, s, a))),
                  d &&
                    ((a = a || this.getBoundingRect()),
                    (this._strokeGradient = n.getGradient(t, l, a))));
                u
                  ? (t.fillStyle = this._fillGradient)
                  : f && (t.fillStyle = c.call(s, t)),
                  d
                    ? (t.strokeStyle = this._strokeGradient)
                    : m && (t.strokeStyle = c.call(l, t));
                var v = n.lineDash,
                  p = n.lineDashOffset,
                  g = !!t.setLineDash,
                  y = this.getGlobalScale();
                r.setScale(y[0], y[1]),
                  this.__dirtyPath || (v && !g && i)
                    ? (r.beginPath(t),
                      v && !g && (r.setLineDash(v), r.setLineDashOffset(p)),
                      this.buildPath(r, this.shape, !1),
                      this.path && (this.__dirtyPath = !1))
                    : (t.beginPath(), this.path.rebuildPath(t)),
                  o && r.fill(t),
                  v && g && (t.setLineDash(v), (t.lineDashOffset = p)),
                  i && r.stroke(t),
                  v && g && t.setLineDash([]),
                  this.restoreTransform(t),
                  null != n.text &&
                    this.drawRectText(t, this.getBoundingRect());
              },
              buildPath: function(t, e, a) {},
              createPathProxy: function() {
                this.path = new o();
              },
              getBoundingRect: function() {
                var t = this._rect,
                  e = this.style,
                  a = !t;
                if (a) {
                  var n = this.path;
                  n || (n = this.path = new o()),
                    this.__dirtyPath &&
                      (n.beginPath(), this.buildPath(n, this.shape, !1)),
                    (t = n.getBoundingRect());
                }
                if (((this._rect = t), e.hasStroke())) {
                  var r =
                    this._rectWithStroke || (this._rectWithStroke = t.clone());
                  if (this.__dirty || a) {
                    r.copy(t);
                    var i = e.lineWidth,
                      s = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() ||
                      (i = Math.max(i, this.strokeContainThreshold || 4)),
                      s > 1e-10 &&
                        ((r.width += i / s),
                        (r.height += i / s),
                        (r.x -= i / s / 2),
                        (r.y -= i / s / 2));
                  }
                  return r;
                }
                return t;
              },
              contain: function(t, e) {
                var a = this.transformCoordToLocal(t, e),
                  n = this.getBoundingRect(),
                  r = this.style;
                if (((t = a[0]), (e = a[1]), n.contain(t, e))) {
                  var i = this.path.data;
                  if (r.hasStroke()) {
                    var o = r.lineWidth,
                      l = r.strokeNoScale ? this.getLineScale() : 1;
                    if (
                      l > 1e-10 &&
                      (r.hasFill() ||
                        (o = Math.max(o, this.strokeContainThreshold)),
                      s.containStroke(i, o / l, t, e))
                    )
                      return !0;
                  }
                  if (r.hasFill()) return s.contain(i, t, e);
                }
                return !1;
              },
              dirty: function(t) {
                null == t && (t = !0),
                  t && ((this.__dirtyPath = t), (this._rect = null)),
                  (this.__dirty = !0),
                  this.__zr && this.__zr.refresh(),
                  this.__clipTarget && this.__clipTarget.dirty();
              },
              animateShape: function(t) {
                return this.animate("shape", t);
              },
              attrKV: function(t, e) {
                "shape" === t
                  ? (this.setShape(e),
                    (this.__dirtyPath = !0),
                    (this._rect = null))
                  : r.prototype.attrKV.call(this, t, e);
              },
              setShape: function(t, e) {
                var a = this.shape;
                if (a) {
                  if (i.isObject(t))
                    for (var n in t) t.hasOwnProperty(n) && (a[n] = t[n]);
                  else a[t] = e;
                  this.dirty(!0);
                }
                return this;
              },
              getLineScale: function() {
                var t = this.transform;
                return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10
                  ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1]))
                  : 1;
              },
            }),
              (n.extend = function(t) {
                var e = function(e) {
                  n.call(this, e),
                    t.style && this.style.extendFrom(t.style, !1);
                  var a = t.shape;
                  if (a) {
                    this.shape = this.shape || {};
                    var r = this.shape;
                    for (var i in a)
                      !r.hasOwnProperty(i) &&
                        a.hasOwnProperty(i) &&
                        (r[i] = a[i]);
                  }
                  t.init && t.init.call(this, e);
                };
                for (var a in (i.inherits(e, n), t))
                  "style" !== a && "shape" !== a && (e.prototype[a] = t[a]);
                return e;
              }),
              i.inherits(n, r);
            var d = n;
            t.exports = d;
          },
          function(t, e) {
            function a(t, e) {
              var a = new S(2);
              return (
                null == t && (t = 0),
                null == e && (e = 0),
                (a[0] = t),
                (a[1] = e),
                a
              );
            }
            function n(t, e) {
              return (t[0] = e[0]), (t[1] = e[1]), t;
            }
            function r(t) {
              var e = new S(2);
              return (e[0] = t[0]), (e[1] = t[1]), e;
            }
            function i(t, e, a) {
              return (t[0] = e), (t[1] = a), t;
            }
            function o(t, e, a) {
              return (t[0] = e[0] + a[0]), (t[1] = e[1] + a[1]), t;
            }
            function s(t, e, a, n) {
              return (t[0] = e[0] + a[0] * n), (t[1] = e[1] + a[1] * n), t;
            }
            function l(t, e, a) {
              return (t[0] = e[0] - a[0]), (t[1] = e[1] - a[1]), t;
            }
            function c(t) {
              return Math.sqrt(u(t));
            }
            function u(t) {
              return t[0] * t[0] + t[1] * t[1];
            }
            function h(t, e, a) {
              return (t[0] = e[0] * a[0]), (t[1] = e[1] * a[1]), t;
            }
            function d(t, e, a) {
              return (t[0] = e[0] / a[0]), (t[1] = e[1] / a[1]), t;
            }
            function f(t, e) {
              return t[0] * e[0] + t[1] * e[1];
            }
            function m(t, e, a) {
              return (t[0] = e[0] * a), (t[1] = e[1] * a), t;
            }
            function v(t, e) {
              var a = c(e);
              return (
                0 === a
                  ? ((t[0] = 0), (t[1] = 0))
                  : ((t[0] = e[0] / a), (t[1] = e[1] / a)),
                t
              );
            }
            function p(t, e) {
              return Math.sqrt(
                (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
              );
            }
            function g(t, e) {
              return (
                (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
              );
            }
            function y(t, e) {
              return (t[0] = -e[0]), (t[1] = -e[1]), t;
            }
            function b(t, e, a, n) {
              return (
                (t[0] = e[0] + n * (a[0] - e[0])),
                (t[1] = e[1] + n * (a[1] - e[1])),
                t
              );
            }
            function x(t, e, a) {
              var n = e[0],
                r = e[1];
              return (
                (t[0] = a[0] * n + a[2] * r + a[4]),
                (t[1] = a[1] * n + a[3] * r + a[5]),
                t
              );
            }
            function w(t, e, a) {
              return (
                (t[0] = Math.min(e[0], a[0])), (t[1] = Math.min(e[1], a[1])), t
              );
            }
            function _(t, e, a) {
              return (
                (t[0] = Math.max(e[0], a[0])), (t[1] = Math.max(e[1], a[1])), t
              );
            }
            var S = "undefined" == typeof Float32Array ? Array : Float32Array,
              C = c,
              k = u,
              M = p,
              T = g;
            (e.create = a),
              (e.copy = n),
              (e.clone = r),
              (e.set = i),
              (e.add = o),
              (e.scaleAndAdd = s),
              (e.sub = l),
              (e.len = c),
              (e.length = C),
              (e.lenSquare = u),
              (e.lengthSquare = k),
              (e.mul = h),
              (e.div = d),
              (e.dot = f),
              (e.scale = m),
              (e.normalize = v),
              (e.distance = p),
              (e.dist = M),
              (e.distanceSquare = g),
              (e.distSquare = T),
              (e.negate = y),
              (e.lerp = b),
              (e.applyTransform = x),
              (e.min = w),
              (e.max = _);
          },
          function(t, e, a) {
            function n(t, e, a, n) {
              a < 0 && ((t += a), (a = -a)),
                n < 0 && ((e += n), (n = -n)),
                (this.x = t),
                (this.y = e),
                (this.width = a),
                (this.height = n);
            }
            var r = a(2),
              i = a(8),
              o = r.applyTransform,
              s = Math.min,
              l = Math.max;
            (n.prototype = {
              constructor: n,
              union: function(t) {
                var e = s(t.x, this.x),
                  a = s(t.y, this.y);
                (this.width = l(t.x + t.width, this.x + this.width) - e),
                  (this.height = l(t.y + t.height, this.y + this.height) - a),
                  (this.x = e),
                  (this.y = a);
              },
              applyTransform: (function() {
                var t = [],
                  e = [],
                  a = [],
                  n = [];
                return function(r) {
                  if (r) {
                    (t[0] = a[0] = this.x),
                      (t[1] = n[1] = this.y),
                      (e[0] = n[0] = this.x + this.width),
                      (e[1] = a[1] = this.y + this.height),
                      o(t, t, r),
                      o(e, e, r),
                      o(a, a, r),
                      o(n, n, r),
                      (this.x = s(t[0], e[0], a[0], n[0])),
                      (this.y = s(t[1], e[1], a[1], n[1]));
                    var i = l(t[0], e[0], a[0], n[0]),
                      c = l(t[1], e[1], a[1], n[1]);
                    (this.width = i - this.x), (this.height = c - this.y);
                  }
                };
              })(),
              calculateTransform: function(t) {
                var e = this,
                  a = t.width / e.width,
                  n = t.height / e.height,
                  r = i.create();
                return (
                  i.translate(r, r, [-e.x, -e.y]),
                  i.scale(r, r, [a, n]),
                  i.translate(r, r, [t.x, t.y]),
                  r
                );
              },
              intersect: function(t) {
                if (!t) return !1;
                t instanceof n || (t = n.create(t));
                var e = this,
                  a = e.x,
                  r = e.x + e.width,
                  i = e.y,
                  o = e.y + e.height,
                  s = t.x,
                  l = t.x + t.width,
                  c = t.y,
                  u = t.y + t.height;
                return !(r < s || l < a || o < c || u < i);
              },
              contain: function(t, e) {
                var a = this;
                return (
                  t >= a.x &&
                  t <= a.x + a.width &&
                  e >= a.y &&
                  e <= a.y + a.height
                );
              },
              clone: function() {
                return new n(this.x, this.y, this.width, this.height);
              },
              copy: function(t) {
                (this.x = t.x),
                  (this.y = t.y),
                  (this.width = t.width),
                  (this.height = t.height);
              },
              plain: function() {
                return {
                  x: this.x,
                  y: this.y,
                  width: this.width,
                  height: this.height,
                };
              },
            }),
              (n.create = function(t) {
                return new n(t.x, t.y, t.width, t.height);
              });
            var c = n;
            t.exports = c;
          },
          function(t, e, a) {
            function n(t) {
              return t > -_ && t < _;
            }
            function r(t) {
              return t > _ || t < -_;
            }
            function i(t, e, a, n, r) {
              var i = 1 - r;
              return i * i * (i * t + 3 * r * e) + r * r * (r * n + 3 * i * a);
            }
            function o(t, e, a, n, r) {
              var i = 1 - r;
              return (
                3 * (((e - t) * i + 2 * (a - e) * r) * i + (n - a) * r * r)
              );
            }
            function s(t, e, a, r, i, o) {
              var s = r + 3 * (e - a) - t,
                l = 3 * (a - 2 * e + t),
                c = 3 * (e - t),
                u = t - i,
                h = l * l - 3 * s * c,
                d = l * c - 9 * s * u,
                f = c * c - 3 * l * u,
                m = 0;
              if (n(h) && n(d))
                if (n(l)) o[0] = 0;
                else {
                  var v = -c / l;
                  v >= 0 && v <= 1 && (o[m++] = v);
                }
              else {
                var p = d * d - 4 * h * f;
                if (n(p)) {
                  var g = d / h,
                    y = ((v = -l / s + g), -g / 2);
                  v >= 0 && v <= 1 && (o[m++] = v),
                    y >= 0 && y <= 1 && (o[m++] = y);
                } else if (p > 0) {
                  var b = w(p),
                    _ = h * l + 1.5 * s * (-d + b),
                    S = h * l + 1.5 * s * (-d - b);
                  (_ = _ < 0 ? -x(-_, k) : x(_, k)),
                    (S = S < 0 ? -x(-S, k) : x(S, k));
                  v = (-l - (_ + S)) / (3 * s);
                  v >= 0 && v <= 1 && (o[m++] = v);
                } else {
                  var M = (2 * h * l - 3 * s * d) / (2 * w(h * h * h)),
                    T = Math.acos(M) / 3,
                    A = w(h),
                    L = Math.cos(T),
                    O =
                      ((v = (-l - 2 * A * L) / (3 * s)),
                      (y = (-l + A * (L + C * Math.sin(T))) / (3 * s)),
                      (-l + A * (L - C * Math.sin(T))) / (3 * s));
                  v >= 0 && v <= 1 && (o[m++] = v),
                    y >= 0 && y <= 1 && (o[m++] = y),
                    O >= 0 && O <= 1 && (o[m++] = O);
                }
              }
              return m;
            }
            function l(t, e, a, i, o) {
              var s = 6 * a - 12 * e + 6 * t,
                l = 9 * e + 3 * i - 3 * t - 9 * a,
                c = 3 * e - 3 * t,
                u = 0;
              if (n(l)) {
                if (r(s)) {
                  var h = -c / s;
                  h >= 0 && h <= 1 && (o[u++] = h);
                }
              } else {
                var d = s * s - 4 * l * c;
                if (n(d)) o[0] = -s / (2 * l);
                else if (d > 0) {
                  var f = w(d),
                    m = ((h = (-s + f) / (2 * l)), (-s - f) / (2 * l));
                  h >= 0 && h <= 1 && (o[u++] = h),
                    m >= 0 && m <= 1 && (o[u++] = m);
                }
              }
              return u;
            }
            function c(t, e, a, n, r, i) {
              var o = (e - t) * r + t,
                s = (a - e) * r + e,
                l = (n - a) * r + a,
                c = (s - o) * r + o,
                u = (l - s) * r + s,
                h = (u - c) * r + c;
              (i[0] = t),
                (i[1] = o),
                (i[2] = c),
                (i[3] = h),
                (i[4] = h),
                (i[5] = u),
                (i[6] = l),
                (i[7] = n);
            }
            function u(t, e, a, n, r, o, s, l, c, u, h) {
              var d,
                f,
                m,
                v,
                p,
                g = 0.005,
                y = 1 / 0;
              (M[0] = c), (M[1] = u);
              for (var x = 0; x < 1; x += 0.05)
                (T[0] = i(t, a, r, s, x)),
                  (T[1] = i(e, n, o, l, x)),
                  (v = b(M, T)) < y && ((d = x), (y = v));
              y = 1 / 0;
              for (var _ = 0; _ < 32 && !(g < S); _++)
                (f = d - g),
                  (m = d + g),
                  (T[0] = i(t, a, r, s, f)),
                  (T[1] = i(e, n, o, l, f)),
                  (v = b(T, M)),
                  f >= 0 && v < y
                    ? ((d = f), (y = v))
                    : ((A[0] = i(t, a, r, s, m)),
                      (A[1] = i(e, n, o, l, m)),
                      (p = b(A, M)),
                      m <= 1 && p < y ? ((d = m), (y = p)) : (g *= 0.5));
              return (
                h && ((h[0] = i(t, a, r, s, d)), (h[1] = i(e, n, o, l, d))),
                w(y)
              );
            }
            function h(t, e, a, n) {
              var r = 1 - n;
              return r * (r * t + 2 * n * e) + n * n * a;
            }
            function d(t, e, a, n) {
              return 2 * ((1 - n) * (e - t) + n * (a - e));
            }
            function f(t, e, a, i, o) {
              var s = t - 2 * e + a,
                l = 2 * (e - t),
                c = t - i,
                u = 0;
              if (n(s)) {
                if (r(l)) {
                  var h = -c / l;
                  h >= 0 && h <= 1 && (o[u++] = h);
                }
              } else {
                var d = l * l - 4 * s * c;
                if (n(d)) {
                  h = -l / (2 * s);
                  h >= 0 && h <= 1 && (o[u++] = h);
                } else if (d > 0) {
                  var f = w(d),
                    m = ((h = (-l + f) / (2 * s)), (-l - f) / (2 * s));
                  h >= 0 && h <= 1 && (o[u++] = h),
                    m >= 0 && m <= 1 && (o[u++] = m);
                }
              }
              return u;
            }
            function m(t, e, a) {
              var n = t + a - 2 * e;
              return 0 === n ? 0.5 : (t - e) / n;
            }
            function v(t, e, a, n, r) {
              var i = (e - t) * n + t,
                o = (a - e) * n + e,
                s = (o - i) * n + i;
              (r[0] = t),
                (r[1] = i),
                (r[2] = s),
                (r[3] = s),
                (r[4] = o),
                (r[5] = a);
            }
            function p(t, e, a, n, r, i, o, s, l) {
              var c,
                u = 0.005,
                d = 1 / 0;
              (M[0] = o), (M[1] = s);
              for (var f = 0; f < 1; f += 0.05) {
                (T[0] = h(t, a, r, f)), (T[1] = h(e, n, i, f));
                var m = b(M, T);
                m < d && ((c = f), (d = m));
              }
              d = 1 / 0;
              for (var v = 0; v < 32 && !(u < S); v++) {
                var p = c - u,
                  g = c + u;
                (T[0] = h(t, a, r, p)), (T[1] = h(e, n, i, p));
                m = b(T, M);
                if (p >= 0 && m < d) (c = p), (d = m);
                else {
                  (A[0] = h(t, a, r, g)), (A[1] = h(e, n, i, g));
                  var y = b(A, M);
                  g <= 1 && y < d ? ((c = g), (d = y)) : (u *= 0.5);
                }
              }
              return (
                l && ((l[0] = h(t, a, r, c)), (l[1] = h(e, n, i, c))), w(d)
              );
            }
            var g = a(2),
              y = g.create,
              b = g.distSquare,
              x = Math.pow,
              w = Math.sqrt,
              _ = 1e-8,
              S = 1e-4,
              C = w(3),
              k = 1 / 3,
              M = y(),
              T = y(),
              A = y();
            (e.cubicAt = i),
              (e.cubicDerivativeAt = o),
              (e.cubicRootAt = s),
              (e.cubicExtrema = l),
              (e.cubicSubdivide = c),
              (e.cubicProjectPoint = u),
              (e.quadraticAt = h),
              (e.quadraticDerivativeAt = d),
              (e.quadraticRootAt = f),
              (e.quadraticExtremum = m),
              (e.quadraticSubdivide = v),
              (e.quadraticProjectPoint = p);
          },
          function(t, e, a) {
            function n(t, e) {
              P[t] = e;
            }
            function r(t, e) {
              e = e || I;
              var a = t + ":" + e;
              if (A[a]) return A[a];
              for (
                var n = (t + "").split("\n"), r = 0, i = 0, o = n.length;
                i < o;
                i++
              )
                r = Math.max(p(n[i], e).width, r);
              return L > O && ((L = 0), (A = {})), L++, (A[a] = r), r;
            }
            function i(t, e, a, n, r, i, l) {
              return i ? s(t, e, a, n, r, i, l) : o(t, e, a, n, r, l);
            }
            function o(t, e, a, n, i, o) {
              var s = g(t, e, i, o),
                u = r(t, e);
              i && (u += i[1] + i[3]);
              var h = s.outerHeight,
                d = l(0, u, a),
                f = c(0, h, n),
                m = new w(d, f, u, h);
              return (m.lineHeight = s.lineHeight), m;
            }
            function s(t, e, a, n, r, i, o) {
              var s = y(t, {
                  rich: i,
                  truncate: o,
                  font: e,
                  textAlign: a,
                  textPadding: r,
                }),
                u = s.outerWidth,
                h = s.outerHeight,
                d = l(0, u, a),
                f = c(0, h, n);
              return new w(d, f, u, h);
            }
            function l(t, e, a) {
              return (
                "right" === a ? (t -= e) : "center" === a && (t -= e / 2), t
              );
            }
            function c(t, e, a) {
              return (
                "middle" === a ? (t -= e / 2) : "bottom" === a && (t -= e), t
              );
            }
            function u(t, e, a) {
              var n = e.x,
                r = e.y,
                i = e.height,
                o = e.width,
                s = i / 2,
                l = "left",
                c = "top";
              switch (t) {
                case "left":
                  (n -= a), (r += s), (l = "right"), (c = "middle");
                  break;
                case "right":
                  (n += a + o), (r += s), (c = "middle");
                  break;
                case "top":
                  (n += o / 2), (r -= a), (l = "center"), (c = "bottom");
                  break;
                case "bottom":
                  (n += o / 2), (r += i + a), (l = "center");
                  break;
                case "inside":
                  (n += o / 2), (r += s), (l = "center"), (c = "middle");
                  break;
                case "insideLeft":
                  (n += a), (r += s), (c = "middle");
                  break;
                case "insideRight":
                  (n += o - a), (r += s), (l = "right"), (c = "middle");
                  break;
                case "insideTop":
                  (n += o / 2), (r += a), (l = "center");
                  break;
                case "insideBottom":
                  (n += o / 2), (r += i - a), (l = "center"), (c = "bottom");
                  break;
                case "insideTopLeft":
                  (n += a), (r += a);
                  break;
                case "insideTopRight":
                  (n += o - a), (r += a), (l = "right");
                  break;
                case "insideBottomLeft":
                  (n += a), (r += i - a), (c = "bottom");
                  break;
                case "insideBottomRight":
                  (n += o - a), (r += i - a), (l = "right"), (c = "bottom");
              }
              return { x: n, y: r, textAlign: l, textVerticalAlign: c };
            }
            function h(t, e, a, n, r) {
              if (!e) return "";
              var i = (t + "").split("\n");
              r = d(e, a, n, r);
              for (var o = 0, s = i.length; o < s; o++) i[o] = f(i[o], r);
              return i.join("\n");
            }
            function d(t, e, a, n) {
              (n = k({}, n)), (n.font = e);
              a = M(a, "...");
              n.maxIterations = M(n.maxIterations, 2);
              var i = (n.minChar = M(n.minChar, 0));
              n.cnCharWidth = r("国", e);
              var o = (n.ascCharWidth = r("a", e));
              n.placeholder = M(n.placeholder, "");
              for (
                var s = (t = Math.max(0, t - 1)), l = 0;
                l < i && s >= o;
                l++
              )
                s -= o;
              var c = r(a);
              return (
                c > s && ((a = ""), (c = 0)),
                (s = t - c),
                (n.ellipsis = a),
                (n.ellipsisWidth = c),
                (n.contentWidth = s),
                (n.containerWidth = t),
                n
              );
            }
            function f(t, e) {
              var a = e.containerWidth,
                n = e.font,
                i = e.contentWidth;
              if (!a) return "";
              var o = r(t, n);
              if (o <= a) return t;
              for (var s = 0; ; s++) {
                if (o <= i || s >= e.maxIterations) {
                  t += e.ellipsis;
                  break;
                }
                var l =
                  0 === s
                    ? m(t, i, e.ascCharWidth, e.cnCharWidth)
                    : o > 0
                    ? Math.floor((t.length * i) / o)
                    : 0;
                (t = t.substr(0, l)), (o = r(t, n));
              }
              return "" === t && (t = e.placeholder), t;
            }
            function m(t, e, a, n) {
              for (var r = 0, i = 0, o = t.length; i < o && r < e; i++) {
                var s = t.charCodeAt(i);
                r += 0 <= s && s <= 127 ? a : n;
              }
              return i;
            }
            function v(t) {
              return r("国", t);
            }
            function p(t, e) {
              return P.measureText(t, e);
            }
            function g(t, e, a, n) {
              null != t && (t += "");
              var r = v(e),
                i = t ? t.split("\n") : [],
                o = i.length * r,
                s = o;
              if ((a && (s += a[0] + a[2]), t && n)) {
                var l = n.outerHeight,
                  c = n.outerWidth;
                if (null != l && s > l) (t = ""), (i = []);
                else if (null != c)
                  for (
                    var u = d(c - (a ? a[1] + a[3] : 0), e, n.ellipsis, {
                        minChar: n.minChar,
                        placeholder: n.placeholder,
                      }),
                      h = 0,
                      m = i.length;
                    h < m;
                    h++
                  )
                    i[h] = f(i[h], u);
              }
              return { lines: i, height: o, outerHeight: s, lineHeight: r };
            }
            function y(t, e) {
              var a = { lines: [], width: 0, height: 0 };
              if ((null != t && (t += ""), !t)) return a;
              for (var n, i = (E.lastIndex = 0); null != (n = E.exec(t)); ) {
                var o = n.index;
                o > i && b(a, t.substring(i, o)),
                  b(a, n[2], n[1]),
                  (i = E.lastIndex);
              }
              i < t.length && b(a, t.substring(i, t.length));
              var s = a.lines,
                l = 0,
                c = 0,
                u = [],
                d = e.textPadding,
                f = e.truncate,
                m = f && f.outerWidth,
                p = f && f.outerHeight;
              d &&
                (null != m && (m -= d[1] + d[3]),
                null != p && (p -= d[0] + d[2]));
              for (var g = 0; g < s.length; g++) {
                for (
                  var y = s[g], x = 0, w = 0, S = 0;
                  S < y.tokens.length;
                  S++
                ) {
                  var C = y.tokens[S],
                    k = (C.styleName && e.rich[C.styleName]) || {},
                    A = (C.textPadding = k.textPadding),
                    L = (C.font = k.font || e.font),
                    O = (C.textHeight = M(k.textHeight, v(L)));
                  if (
                    (A && (O += A[0] + A[2]),
                    (C.height = O),
                    (C.lineHeight = T(k.textLineHeight, e.textLineHeight, O)),
                    (C.textAlign = (k && k.textAlign) || e.textAlign),
                    (C.textVerticalAlign =
                      (k && k.textVerticalAlign) || "middle"),
                    null != p && l + C.lineHeight > p)
                  )
                    return { lines: [], width: 0, height: 0 };
                  C.textWidth = r(C.text, L);
                  var I = k.textWidth,
                    P = null == I || "auto" === I;
                  if ("string" == typeof I && "%" === I.charAt(I.length - 1))
                    (C.percentWidth = I), u.push(C), (I = 0);
                  else {
                    if (P) {
                      I = C.textWidth;
                      var D = k.textBackgroundColor,
                        z = D && D.image;
                      z &&
                        ((z = _.findExistImage(z)),
                        _.isImageReady(z) &&
                          (I = Math.max(I, (z.width * O) / z.height)));
                    }
                    var B = A ? A[1] + A[3] : 0;
                    I += B;
                    var W = null != m ? m - w : null;
                    null != W &&
                      W < I &&
                      (!P || W < B
                        ? ((C.text = ""), (C.textWidth = I = 0))
                        : ((C.text = h(C.text, W - B, L, f.ellipsis, {
                            minChar: f.minChar,
                          })),
                          (C.textWidth = r(C.text, L)),
                          (I = C.textWidth + B)));
                  }
                  (w += C.width = I), k && (x = Math.max(x, C.lineHeight));
                }
                (y.width = w),
                  (y.lineHeight = x),
                  (l += x),
                  (c = Math.max(c, w));
              }
              (a.outerWidth = a.width = M(e.textWidth, c)),
                (a.outerHeight = a.height = M(e.textHeight, l)),
                d &&
                  ((a.outerWidth += d[1] + d[3]),
                  (a.outerHeight += d[0] + d[2]));
              for (g = 0; g < u.length; g++) {
                C = u[g];
                var R = C.percentWidth;
                C.width = (parseInt(R, 10) / 100) * c;
              }
              return a;
            }
            function b(t, e, a) {
              for (
                var n = "" === e, r = e.split("\n"), i = t.lines, o = 0;
                o < r.length;
                o++
              ) {
                var s = r[o],
                  l = { styleName: a, text: s, isLineHolder: !s && !n };
                if (o) i.push({ tokens: [l] });
                else {
                  var c = (i[i.length - 1] || (i[0] = { tokens: [] })).tokens,
                    u = c.length;
                  1 === u && c[0].isLineHolder
                    ? (c[0] = l)
                    : (s || !u || n) && c.push(l);
                }
              }
            }
            function x(t) {
              return (
                ((t.fontSize || t.fontFamily) &&
                  [
                    t.fontStyle,
                    t.fontWeight,
                    (t.fontSize || 12) + "px",
                    t.fontFamily || "sans-serif",
                  ].join(" ")) ||
                t.textFont ||
                t.font
              );
            }
            var w = a(3),
              _ = a(10),
              S = a(0),
              C = S.getContext,
              k = S.extend,
              M = S.retrieve2,
              T = S.retrieve3,
              A = {},
              L = 0,
              O = 5e3,
              E = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
              I = "12px sans-serif",
              P = {
                measureText: function(t, e) {
                  var a = C();
                  return (a.font = e || I), a.measureText(t);
                },
              };
            (e.DEFAULT_FONT = I),
              (e.$override = n),
              (e.getWidth = r),
              (e.getBoundingRect = i),
              (e.adjustTextX = l),
              (e.adjustTextY = c),
              (e.adjustTextPositionOnRect = u),
              (e.truncateText = h),
              (e.getLineHeight = v),
              (e.measureText = p),
              (e.parsePlainText = g),
              (e.parseRichText = y),
              (e.makeFont = x);
          },
          function(t, e, a) {
            var n = a(4),
              r = a(2),
              i = a(49),
              o = a(3),
              s = a(19),
              l = s.devicePixelRatio,
              c = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
              u = [],
              h = [],
              d = [],
              f = [],
              m = Math.min,
              v = Math.max,
              p = Math.cos,
              g = Math.sin,
              y = Math.sqrt,
              b = Math.abs,
              x = "undefined" != typeof Float32Array,
              w = function(t) {
                (this._saveData = !t),
                  this._saveData && (this.data = []),
                  (this._ctx = null);
              };
            (w.prototype = {
              constructor: w,
              _xi: 0,
              _yi: 0,
              _x0: 0,
              _y0: 0,
              _ux: 0,
              _uy: 0,
              _len: 0,
              _lineDash: null,
              _dashOffset: 0,
              _dashIdx: 0,
              _dashSum: 0,
              setScale: function(t, e) {
                (this._ux = b(1 / l / t) || 0), (this._uy = b(1 / l / e) || 0);
              },
              getContext: function() {
                return this._ctx;
              },
              beginPath: function(t) {
                return (
                  (this._ctx = t),
                  t && t.beginPath(),
                  t && (this.dpr = t.dpr),
                  this._saveData && (this._len = 0),
                  this._lineDash &&
                    ((this._lineDash = null), (this._dashOffset = 0)),
                  this
                );
              },
              moveTo: function(t, e) {
                return (
                  this.addData(c.M, t, e),
                  this._ctx && this._ctx.moveTo(t, e),
                  (this._x0 = t),
                  (this._y0 = e),
                  (this._xi = t),
                  (this._yi = e),
                  this
                );
              },
              lineTo: function(t, e) {
                var a =
                  b(t - this._xi) > this._ux ||
                  b(e - this._yi) > this._uy ||
                  this._len < 5;
                return (
                  this.addData(c.L, t, e),
                  this._ctx &&
                    a &&
                    (this._needsDash()
                      ? this._dashedLineTo(t, e)
                      : this._ctx.lineTo(t, e)),
                  a && ((this._xi = t), (this._yi = e)),
                  this
                );
              },
              bezierCurveTo: function(t, e, a, n, r, i) {
                return (
                  this.addData(c.C, t, e, a, n, r, i),
                  this._ctx &&
                    (this._needsDash()
                      ? this._dashedBezierTo(t, e, a, n, r, i)
                      : this._ctx.bezierCurveTo(t, e, a, n, r, i)),
                  (this._xi = r),
                  (this._yi = i),
                  this
                );
              },
              quadraticCurveTo: function(t, e, a, n) {
                return (
                  this.addData(c.Q, t, e, a, n),
                  this._ctx &&
                    (this._needsDash()
                      ? this._dashedQuadraticTo(t, e, a, n)
                      : this._ctx.quadraticCurveTo(t, e, a, n)),
                  (this._xi = a),
                  (this._yi = n),
                  this
                );
              },
              arc: function(t, e, a, n, r, i) {
                return (
                  this.addData(c.A, t, e, a, a, n, r - n, 0, i ? 0 : 1),
                  this._ctx && this._ctx.arc(t, e, a, n, r, i),
                  (this._xi = p(r) * a + t),
                  (this._yi = g(r) * a + t),
                  this
                );
              },
              arcTo: function(t, e, a, n, r) {
                return this._ctx && this._ctx.arcTo(t, e, a, n, r), this;
              },
              rect: function(t, e, a, n) {
                return (
                  this._ctx && this._ctx.rect(t, e, a, n),
                  this.addData(c.R, t, e, a, n),
                  this
                );
              },
              closePath: function() {
                this.addData(c.Z);
                var t = this._ctx,
                  e = this._x0,
                  a = this._y0;
                return (
                  t &&
                    (this._needsDash() && this._dashedLineTo(e, a),
                    t.closePath()),
                  (this._xi = e),
                  (this._yi = a),
                  this
                );
              },
              fill: function(t) {
                t && t.fill(), this.toStatic();
              },
              stroke: function(t) {
                t && t.stroke(), this.toStatic();
              },
              setLineDash: function(t) {
                if (t instanceof Array) {
                  (this._lineDash = t), (this._dashIdx = 0);
                  for (var e = 0, a = 0; a < t.length; a++) e += t[a];
                  this._dashSum = e;
                }
                return this;
              },
              setLineDashOffset: function(t) {
                return (this._dashOffset = t), this;
              },
              len: function() {
                return this._len;
              },
              setData: function(t) {
                var e = t.length;
                (this.data && this.data.length == e) ||
                  !x ||
                  (this.data = new Float32Array(e));
                for (var a = 0; a < e; a++) this.data[a] = t[a];
                this._len = e;
              },
              appendPath: function(t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, a = 0, n = this._len, r = 0; r < e; r++)
                  a += t[r].len();
                x &&
                  this.data instanceof Float32Array &&
                  (this.data = new Float32Array(n + a));
                for (r = 0; r < e; r++)
                  for (var i = t[r].data, o = 0; o < i.length; o++)
                    this.data[n++] = i[o];
                this._len = n;
              },
              addData: function(t) {
                if (this._saveData) {
                  var e = this.data;
                  this._len + arguments.length > e.length &&
                    (this._expandData(), (e = this.data));
                  for (var a = 0; a < arguments.length; a++)
                    e[this._len++] = arguments[a];
                  this._prevCmd = t;
                }
              },
              _expandData: function() {
                if (!(this.data instanceof Array)) {
                  for (var t = [], e = 0; e < this._len; e++)
                    t[e] = this.data[e];
                  this.data = t;
                }
              },
              _needsDash: function() {
                return this._lineDash;
              },
              _dashedLineTo: function(t, e) {
                var a,
                  n,
                  r = this._dashSum,
                  i = this._dashOffset,
                  o = this._lineDash,
                  s = this._ctx,
                  l = this._xi,
                  c = this._yi,
                  u = t - l,
                  h = e - c,
                  d = y(u * u + h * h),
                  f = l,
                  p = c,
                  g = o.length;
                for (
                  u /= d,
                    h /= d,
                    i < 0 && (i = r + i),
                    i %= r,
                    f -= i * u,
                    p -= i * h;
                  (u > 0 && f <= t) ||
                  (u < 0 && f >= t) ||
                  (0 == u && ((h > 0 && p <= e) || (h < 0 && p >= e)));

                )
                  (n = this._dashIdx),
                    (a = o[n]),
                    (f += u * a),
                    (p += h * a),
                    (this._dashIdx = (n + 1) % g),
                    (u > 0 && f < l) ||
                      (u < 0 && f > l) ||
                      (h > 0 && p < c) ||
                      (h < 0 && p > c) ||
                      s[n % 2 ? "moveTo" : "lineTo"](
                        u >= 0 ? m(f, t) : v(f, t),
                        h >= 0 ? m(p, e) : v(p, e)
                      );
                (u = f - t),
                  (h = p - e),
                  (this._dashOffset = -y(u * u + h * h));
              },
              _dashedBezierTo: function(t, e, a, r, i, o) {
                var s,
                  l,
                  c,
                  u,
                  h,
                  d = this._dashSum,
                  f = this._dashOffset,
                  m = this._lineDash,
                  v = this._ctx,
                  p = this._xi,
                  g = this._yi,
                  b = n.cubicAt,
                  x = 0,
                  w = this._dashIdx,
                  _ = m.length,
                  S = 0;
                for (f < 0 && (f = d + f), f %= d, s = 0; s < 1; s += 0.1)
                  (l = b(p, t, a, i, s + 0.1) - b(p, t, a, i, s)),
                    (c = b(g, e, r, o, s + 0.1) - b(g, e, r, o, s)),
                    (x += y(l * l + c * c));
                for (; w < _ && !((S += m[w]) > f); w++);
                for (s = (S - f) / x; s <= 1; )
                  (u = b(p, t, a, i, s)),
                    (h = b(g, e, r, o, s)),
                    w % 2 ? v.moveTo(u, h) : v.lineTo(u, h),
                    (s += m[w] / x),
                    (w = (w + 1) % _);
                w % 2 != 0 && v.lineTo(i, o),
                  (l = i - u),
                  (c = o - h),
                  (this._dashOffset = -y(l * l + c * c));
              },
              _dashedQuadraticTo: function(t, e, a, n) {
                var r = a,
                  i = n;
                (a = (a + 2 * t) / 3),
                  (n = (n + 2 * e) / 3),
                  (t = (this._xi + 2 * t) / 3),
                  (e = (this._yi + 2 * e) / 3),
                  this._dashedBezierTo(t, e, a, n, r, i);
              },
              toStatic: function() {
                var t = this.data;
                t instanceof Array &&
                  ((t.length = this._len),
                  x && (this.data = new Float32Array(t)));
              },
              getBoundingRect: function() {
                (u[0] = u[1] = d[0] = d[1] = Number.MAX_VALUE),
                  (h[0] = h[1] = f[0] = f[1] = -Number.MAX_VALUE);
                for (
                  var t = this.data, e = 0, a = 0, n = 0, s = 0, l = 0;
                  l < t.length;

                ) {
                  var m = t[l++];
                  switch (
                    (1 == l && ((e = t[l]), (a = t[l + 1]), (n = e), (s = a)),
                    m)
                  ) {
                    case c.M:
                      (n = t[l++]),
                        (s = t[l++]),
                        (e = n),
                        (a = s),
                        (d[0] = n),
                        (d[1] = s),
                        (f[0] = n),
                        (f[1] = s);
                      break;
                    case c.L:
                      i.fromLine(e, a, t[l], t[l + 1], d, f),
                        (e = t[l++]),
                        (a = t[l++]);
                      break;
                    case c.C:
                      i.fromCubic(
                        e,
                        a,
                        t[l++],
                        t[l++],
                        t[l++],
                        t[l++],
                        t[l],
                        t[l + 1],
                        d,
                        f
                      ),
                        (e = t[l++]),
                        (a = t[l++]);
                      break;
                    case c.Q:
                      i.fromQuadratic(
                        e,
                        a,
                        t[l++],
                        t[l++],
                        t[l],
                        t[l + 1],
                        d,
                        f
                      ),
                        (e = t[l++]),
                        (a = t[l++]);
                      break;
                    case c.A:
                      var v = t[l++],
                        y = t[l++],
                        b = t[l++],
                        x = t[l++],
                        w = t[l++],
                        _ = t[l++] + w,
                        S = (t[l++], 1 - t[l++]);
                      1 == l && ((n = p(w) * b + v), (s = g(w) * x + y)),
                        i.fromArc(v, y, b, x, w, _, S, d, f),
                        (e = p(_) * b + v),
                        (a = g(_) * x + y);
                      break;
                    case c.R:
                      (n = e = t[l++]), (s = a = t[l++]);
                      var C = t[l++],
                        k = t[l++];
                      i.fromLine(n, s, n + C, s + k, d, f);
                      break;
                    case c.Z:
                      (e = n), (a = s);
                  }
                  r.min(u, u, d), r.max(h, h, f);
                }
                return (
                  0 === l && (u[0] = u[1] = h[0] = h[1] = 0),
                  new o(u[0], u[1], h[0] - u[0], h[1] - u[1])
                );
              },
              rebuildPath: function(t) {
                for (
                  var e,
                    a,
                    n,
                    r,
                    i,
                    o,
                    s = this.data,
                    l = this._ux,
                    u = this._uy,
                    h = this._len,
                    d = 0;
                  d < h;

                ) {
                  var f = s[d++];
                  switch (
                    (1 == d && ((n = s[d]), (r = s[d + 1]), (e = n), (a = r)),
                    f)
                  ) {
                    case c.M:
                      (e = n = s[d++]), (a = r = s[d++]), t.moveTo(n, r);
                      break;
                    case c.L:
                      (i = s[d++]),
                        (o = s[d++]),
                        (b(i - n) > l || b(o - r) > u || d === h - 1) &&
                          (t.lineTo(i, o), (n = i), (r = o));
                      break;
                    case c.C:
                      t.bezierCurveTo(
                        s[d++],
                        s[d++],
                        s[d++],
                        s[d++],
                        s[d++],
                        s[d++]
                      ),
                        (n = s[d - 2]),
                        (r = s[d - 1]);
                      break;
                    case c.Q:
                      t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]),
                        (n = s[d - 2]),
                        (r = s[d - 1]);
                      break;
                    case c.A:
                      var m = s[d++],
                        v = s[d++],
                        y = s[d++],
                        x = s[d++],
                        w = s[d++],
                        _ = s[d++],
                        S = s[d++],
                        C = s[d++],
                        k = y > x ? y : x,
                        M = y > x ? 1 : y / x,
                        T = y > x ? x / y : 1,
                        A = Math.abs(y - x) > 0.001,
                        L = w + _;
                      A
                        ? (t.translate(m, v),
                          t.rotate(S),
                          t.scale(M, T),
                          t.arc(0, 0, k, w, L, 1 - C),
                          t.scale(1 / M, 1 / T),
                          t.rotate(-S),
                          t.translate(-m, -v))
                        : t.arc(m, v, k, w, L, 1 - C),
                        1 == d && ((e = p(w) * y + m), (a = g(w) * x + v)),
                        (n = p(L) * y + m),
                        (r = g(L) * x + v);
                      break;
                    case c.R:
                      (e = n = s[d]),
                        (a = r = s[d + 1]),
                        t.rect(s[d++], s[d++], s[d++], s[d++]);
                      break;
                    case c.Z:
                      t.closePath(), (n = e), (r = a);
                  }
                }
              },
            }),
              (w.CMD = c);
            var _ = w;
            t.exports = _;
          },
          function(e, a) {
            e.exports = t;
          },
          function(t, e) {
            function a() {
              var t = new u(6);
              return n(t), t;
            }
            function n(t) {
              return (
                (t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 1),
                (t[4] = 0),
                (t[5] = 0),
                t
              );
            }
            function r(t, e) {
              return (
                (t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = e[2]),
                (t[3] = e[3]),
                (t[4] = e[4]),
                (t[5] = e[5]),
                t
              );
            }
            function i(t, e, a) {
              var n = e[0] * a[0] + e[2] * a[1],
                r = e[1] * a[0] + e[3] * a[1],
                i = e[0] * a[2] + e[2] * a[3],
                o = e[1] * a[2] + e[3] * a[3],
                s = e[0] * a[4] + e[2] * a[5] + e[4],
                l = e[1] * a[4] + e[3] * a[5] + e[5];
              return (
                (t[0] = n),
                (t[1] = r),
                (t[2] = i),
                (t[3] = o),
                (t[4] = s),
                (t[5] = l),
                t
              );
            }
            function o(t, e, a) {
              return (
                (t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = e[2]),
                (t[3] = e[3]),
                (t[4] = e[4] + a[0]),
                (t[5] = e[5] + a[1]),
                t
              );
            }
            function s(t, e, a) {
              var n = e[0],
                r = e[2],
                i = e[4],
                o = e[1],
                s = e[3],
                l = e[5],
                c = Math.sin(a),
                u = Math.cos(a);
              return (
                (t[0] = n * u + o * c),
                (t[1] = -n * c + o * u),
                (t[2] = r * u + s * c),
                (t[3] = -r * c + u * s),
                (t[4] = u * i + c * l),
                (t[5] = u * l - c * i),
                t
              );
            }
            function l(t, e, a) {
              var n = a[0],
                r = a[1];
              return (
                (t[0] = e[0] * n),
                (t[1] = e[1] * r),
                (t[2] = e[2] * n),
                (t[3] = e[3] * r),
                (t[4] = e[4] * n),
                (t[5] = e[5] * r),
                t
              );
            }
            function c(t, e) {
              var a = e[0],
                n = e[2],
                r = e[4],
                i = e[1],
                o = e[3],
                s = e[5],
                l = a * o - i * n;
              return l
                ? ((l = 1 / l),
                  (t[0] = o * l),
                  (t[1] = -i * l),
                  (t[2] = -n * l),
                  (t[3] = a * l),
                  (t[4] = (n * s - o * r) * l),
                  (t[5] = (i * r - a * s) * l),
                  t)
                : null;
            }
            var u = "undefined" == typeof Float32Array ? Array : Float32Array;
            (e.create = a),
              (e.identity = n),
              (e.copy = r),
              (e.mul = i),
              (e.translate = o),
              (e.rotate = s),
              (e.scale = l),
              (e.invert = c);
          },
          function(t, e, a) {
            function n(t) {
              return t.replace(/^\s+/, "").replace(/\s+$/, "");
            }
            function r(t, e, a, n) {
              var r = e[1] - e[0],
                i = a[1] - a[0];
              if (0 === r) return 0 === i ? a[0] : (a[0] + a[1]) / 2;
              if (n)
                if (r > 0) {
                  if (t <= e[0]) return a[0];
                  if (t >= e[1]) return a[1];
                } else {
                  if (t >= e[0]) return a[0];
                  if (t <= e[1]) return a[1];
                }
              else {
                if (t === e[0]) return a[0];
                if (t === e[1]) return a[1];
              }
              return ((t - e[0]) / r) * i + a[0];
            }
            function i(t, e) {
              switch (t) {
                case "center":
                case "middle":
                  t = "50%";
                  break;
                case "left":
                case "top":
                  t = "0%";
                  break;
                case "right":
                case "bottom":
                  t = "100%";
              }
              return "string" == typeof t
                ? n(t).match(/%$/)
                  ? (parseFloat(t) / 100) * e
                  : parseFloat(t)
                : null == t
                ? NaN
                : +t;
            }
            function o(t, e, a) {
              return (
                null == e && (e = 10),
                (e = Math.min(Math.max(0, e), 20)),
                (t = (+t).toFixed(e)),
                a ? t : +t
              );
            }
            function s(t) {
              return (
                t.sort(function(t, e) {
                  return t - e;
                }),
                t
              );
            }
            function l(t) {
              if (((t = +t), isNaN(t))) return 0;
              for (var e = 1, a = 0; Math.round(t * e) / e !== t; )
                (e *= 10), a++;
              return a;
            }
            function c(t) {
              var e = t.toString(),
                a = e.indexOf("e");
              if (a > 0) {
                var n = +e.slice(a + 1);
                return n < 0 ? -n : 0;
              }
              var r = e.indexOf(".");
              return r < 0 ? 0 : e.length - 1 - r;
            }
            function u(t, e) {
              var a = Math.log,
                n = Math.LN10,
                r = Math.floor(a(t[1] - t[0]) / n),
                i = Math.round(a(Math.abs(e[1] - e[0])) / n),
                o = Math.min(Math.max(-r + i, 0), 20);
              return isFinite(o) ? o : 20;
            }
            function h(t, e, a) {
              if (!t[e]) return 0;
              var n = x.reduce(
                t,
                function(t, e) {
                  return t + (isNaN(e) ? 0 : e);
                },
                0
              );
              if (0 === n) return 0;
              for (
                var r = Math.pow(10, a),
                  i = x.map(t, function(t) {
                    return ((isNaN(t) ? 0 : t) / n) * r * 100;
                  }),
                  o = 100 * r,
                  s = x.map(i, function(t) {
                    return Math.floor(t);
                  }),
                  l = x.reduce(
                    s,
                    function(t, e) {
                      return t + e;
                    },
                    0
                  ),
                  c = x.map(i, function(t, e) {
                    return t - s[e];
                  });
                l < o;

              ) {
                for (
                  var u = Number.NEGATIVE_INFINITY,
                    h = null,
                    d = 0,
                    f = c.length;
                  d < f;
                  ++d
                )
                  c[d] > u && ((u = c[d]), (h = d));
                ++s[h], (c[h] = 0), ++l;
              }
              return s[e] / r;
            }
            function d(t) {
              var e = 2 * Math.PI;
              return ((t % e) + e) % e;
            }
            function f(t) {
              return t > -w && t < w;
            }
            function m(t) {
              if (t instanceof Date) return t;
              if ("string" == typeof t) {
                var e = _.exec(t);
                if (!e) return new Date(NaN);
                if (e[8]) {
                  var a = +e[4] || 0;
                  return (
                    "Z" !== e[8].toUpperCase() && (a -= e[8].slice(0, 3)),
                    new Date(
                      Date.UTC(
                        +e[1],
                        +(e[2] || 1) - 1,
                        +e[3] || 1,
                        a,
                        +(e[5] || 0),
                        +e[6] || 0,
                        +e[7] || 0
                      )
                    )
                  );
                }
                return new Date(
                  +e[1],
                  +(e[2] || 1) - 1,
                  +e[3] || 1,
                  +e[4] || 0,
                  +(e[5] || 0),
                  +e[6] || 0,
                  +e[7] || 0
                );
              }
              return null == t ? new Date(NaN) : new Date(Math.round(t));
            }
            function v(t) {
              return Math.pow(10, p(t));
            }
            function p(t) {
              return Math.floor(Math.log(t) / Math.LN10);
            }
            function g(t, e) {
              var a,
                n = p(t),
                r = Math.pow(10, n),
                i = t / r;
              return (
                (a = e
                  ? i < 1.5
                    ? 1
                    : i < 2.5
                    ? 2
                    : i < 4
                    ? 3
                    : i < 7
                    ? 5
                    : 10
                  : i < 1
                  ? 1
                  : i < 2
                  ? 2
                  : i < 3
                  ? 3
                  : i < 5
                  ? 5
                  : 10),
                (t = a * r),
                n >= -20 ? +t.toFixed(n < 0 ? -n : 0) : t
              );
            }
            function y(t) {
              function e(t, a, n) {
                return (
                  t.interval[n] < a.interval[n] ||
                  (t.interval[n] === a.interval[n] &&
                    (t.close[n] - a.close[n] == (n ? -1 : 1) ||
                      (!n && e(t, a, 1))))
                );
              }
              t.sort(function(t, a) {
                return e(t, a, 0) ? -1 : 1;
              });
              for (var a = -1 / 0, n = 1, r = 0; r < t.length; ) {
                for (var i = t[r].interval, o = t[r].close, s = 0; s < 2; s++)
                  i[s] <= a && ((i[s] = a), (o[s] = s ? 1 : 1 - n)),
                    (a = i[s]),
                    (n = o[s]);
                i[0] === i[1] && o[0] * o[1] != 1 ? t.splice(r, 1) : r++;
              }
              return t;
            }
            function b(t) {
              return t - parseFloat(t) >= 0;
            }
            var x = a(0),
              w = 1e-4,
              _ = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
            (e.linearMap = r),
              (e.parsePercent = i),
              (e.round = o),
              (e.asc = s),
              (e.getPrecision = l),
              (e.getPrecisionSafe = c),
              (e.getPixelPrecision = u),
              (e.getPercentWithPrecision = h),
              (e.MAX_SAFE_INTEGER = 9007199254740991),
              (e.remRadian = d),
              (e.isRadianAroundZero = f),
              (e.parseDate = m),
              (e.quantity = v),
              (e.nice = g),
              (e.reformIntervals = y),
              (e.isNumeric = b);
          },
          function(t, e, a) {
            function n(t) {
              if ("string" == typeof t) {
                var e = l.get(t);
                return e && e.image;
              }
              return t;
            }
            function r(t, e, a, n, r) {
              if (t) {
                if ("string" == typeof t) {
                  if ((e && e.__zrImageSrc === t) || !a) return e;
                  var s = l.get(t),
                    c = { hostEl: a, cb: n, cbPayload: r };
                  return (
                    s
                      ? ((e = s.image), !o(e) && s.pending.push(c))
                      : (!e && (e = new Image()),
                        (e.onload = i),
                        l.put(
                          t,
                          (e.__cachedImgObj = { image: e, pending: [c] })
                        ),
                        (e.src = e.__zrImageSrc = t)),
                    e
                  );
                }
                return t;
              }
              return e;
            }
            function i() {
              var t = this.__cachedImgObj;
              this.onload = this.__cachedImgObj = null;
              for (var e = 0; e < t.pending.length; e++) {
                var a = t.pending[e],
                  n = a.cb;
                n && n(this, a.cbPayload), a.hostEl.dirty();
              }
              t.pending.length = 0;
            }
            function o(t) {
              return t && t.width && t.height;
            }
            var s = a(14),
              l = new s(50);
            (e.findExistImage = n),
              (e.createOrUpdateImage = r),
              (e.isImageReady = o);
          },
          function(t, e, a) {
            function n(t) {
              for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
              return function(e, a, n) {
                for (var i = {}, o = 0; o < t.length; o++) {
                  var s = t[o][1];
                  if (
                    !((a && r.indexOf(a, s) >= 0) || (n && r.indexOf(n, s) < 0))
                  ) {
                    var l = e.getShallow(s);
                    null != l && (i[t[o][0]] = l);
                  }
                }
                return i;
              };
            }
            var r = a(0);
            t.exports = n;
          },
          function(t, e, a) {
            function n(t) {
              for (var e in ((t = t || {}), o.call(this, t), t))
                t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
              (this.style = new i(t.style, this)),
                (this._rect = null),
                (this.__clipPaths = []);
            }
            var r = a(0),
              i = a(40),
              o = a(16),
              s = a(48);
            (n.prototype = {
              constructor: n,
              type: "displayable",
              __dirty: !0,
              invisible: !1,
              z: 0,
              z2: 0,
              zlevel: 0,
              draggable: !1,
              dragging: !1,
              silent: !1,
              culling: !1,
              cursor: "pointer",
              rectHover: !1,
              progressive: -1,
              beforeBrush: function(t) {},
              afterBrush: function(t) {},
              brush: function(t, e) {},
              getBoundingRect: function() {},
              contain: function(t, e) {
                return this.rectContain(t, e);
              },
              traverse: function(t, e) {
                t.call(e, this);
              },
              rectContain: function(t, e) {
                var a = this.transformCoordToLocal(t, e);
                return this.getBoundingRect().contain(a[0], a[1]);
              },
              dirty: function() {
                (this.__dirty = !0),
                  (this._rect = null),
                  this.__zr && this.__zr.refresh();
              },
              animateStyle: function(t) {
                return this.animate("style", t);
              },
              attrKV: function(t, e) {
                "style" !== t
                  ? o.prototype.attrKV.call(this, t, e)
                  : this.style.set(e);
              },
              setStyle: function(t, e) {
                return this.style.set(t, e), this.dirty(!1), this;
              },
              useStyle: function(t) {
                return (this.style = new i(t, this)), this.dirty(!1), this;
              },
            }),
              r.inherits(n, o),
              r.mixin(n, s);
            var l = n;
            t.exports = l;
          },
          function(t, e, a) {
            function n(t) {
              return isNaN(t)
                ? "-"
                : ((t = (t + "").split(".")),
                  t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") +
                    (t.length > 1 ? "." + t[1] : ""));
            }
            function r(t, e) {
              return (
                (t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
                  return e.toUpperCase();
                })),
                e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
                t
              );
            }
            function i(t) {
              return String(t)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
            }
            function o(t, e, a) {
              h.isArray(e) || (e = [e]);
              var n = e.length;
              if (!n) return "";
              for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
                var s = v[o],
                  l = p(s, 0);
                t = t.replace(p(s), a ? i(l) : l);
              }
              for (var c = 0; c < n; c++)
                for (var u = 0; u < r.length; u++) {
                  l = e[c][r[u]];
                  t = t.replace(p(v[u], c), a ? i(l) : l);
                }
              return t;
            }
            function s(t, e, a) {
              return (
                h.each(e, function(e, n) {
                  t = t.replace("{" + n + "}", a ? i(e) : e);
                }),
                t
              );
            }
            function l(t, e) {
              return t
                ? '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    i(t) +
                    ";" +
                    (e || "") +
                    '"></span>'
                : "";
            }
            function c(t, e, a) {
              ("week" !== t &&
                "month" !== t &&
                "quarter" !== t &&
                "half-year" !== t &&
                "year" !== t) ||
                (t = "MM-dd\nyyyy");
              var n = f.parseDate(e),
                r = a ? "UTC" : "",
                i = n["get" + r + "FullYear"](),
                o = n["get" + r + "Month"]() + 1,
                s = n["get" + r + "Date"](),
                l = n["get" + r + "Hours"](),
                c = n["get" + r + "Minutes"](),
                u = n["get" + r + "Seconds"]();
              return t
                .replace("MM", g(o))
                .replace("M", o)
                .replace("yyyy", i)
                .replace("yy", i % 100)
                .replace("dd", g(s))
                .replace("d", s)
                .replace("hh", g(l))
                .replace("h", l)
                .replace("mm", g(c))
                .replace("m", c)
                .replace("ss", g(u))
                .replace("s", u);
            }
            function u(t) {
              return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
            }
            var h = a(0),
              d = a(5),
              f = a(9),
              m = h.normalizeCssArray,
              v = ["a", "b", "c", "d", "e", "f", "g"],
              p = function(t, e) {
                return "{" + t + (null == e ? "" : e) + "}";
              },
              g = function(t) {
                return t < 10 ? "0" + t : t;
              },
              y = d.truncateText,
              b = d.getBoundingRect;
            (e.addCommas = n),
              (e.toCamelCase = r),
              (e.normalizeCssArray = m),
              (e.encodeHTML = i),
              (e.formatTpl = o),
              (e.formatTplSimple = s),
              (e.getTooltipMarker = l),
              (e.formatTime = c),
              (e.capitalFirst = u),
              (e.truncateText = y),
              (e.getTextRect = b);
          },
          function(t, e) {
            var a = function() {
                (this.head = null), (this.tail = null), (this._len = 0);
              },
              n = a.prototype;
            (n.insert = function(t) {
              var e = new r(t);
              return this.insertEntry(e), e;
            }),
              (n.insertEntry = function(t) {
                this.head
                  ? ((this.tail.next = t),
                    (t.prev = this.tail),
                    (t.next = null),
                    (this.tail = t))
                  : (this.head = this.tail = t),
                  this._len++;
              }),
              (n.remove = function(t) {
                var e = t.prev,
                  a = t.next;
                e ? (e.next = a) : (this.head = a),
                  a ? (a.prev = e) : (this.tail = e),
                  (t.next = t.prev = null),
                  this._len--;
              }),
              (n.len = function() {
                return this._len;
              }),
              (n.clear = function() {
                (this.head = this.tail = null), (this._len = 0);
              });
            var r = function(t) {
                (this.value = t), this.next, this.prev;
              },
              i = function(t) {
                (this._list = new a()),
                  (this._map = {}),
                  (this._maxSize = t || 10),
                  (this._lastRemovedEntry = null);
              },
              o = i.prototype;
            (o.put = function(t, e) {
              var a = this._list,
                n = this._map,
                i = null;
              if (null == n[t]) {
                var o = a.len(),
                  s = this._lastRemovedEntry;
                if (o >= this._maxSize && o > 0) {
                  var l = a.head;
                  a.remove(l),
                    delete n[l.key],
                    (i = l.value),
                    (this._lastRemovedEntry = l);
                }
                s ? (s.value = e) : (s = new r(e)),
                  (s.key = t),
                  a.insertEntry(s),
                  (n[t] = s);
              }
              return i;
            }),
              (o.get = function(t) {
                var e = this._map[t],
                  a = this._list;
                if (null != e)
                  return (
                    e !== a.tail && (a.remove(e), a.insertEntry(e)), e.value
                  );
              }),
              (o.clear = function() {
                this._list.clear(), (this._map = {});
              });
            var s = i;
            t.exports = s;
          },
          function(t, e) {
            var a = {};
            a =
              "undefined" == typeof navigator
                ? {
                    browser: {},
                    os: {},
                    node: !0,
                    canvasSupported: !0,
                    svgSupported: !0,
                  }
                : (function(t) {
                    var e = {},
                      a = {},
                      n = t.match(/Firefox\/([\d.]+)/),
                      r =
                        t.match(/MSIE\s([\d.]+)/) ||
                        t.match(/Trident\/.+?rv:(([\d.]+))/),
                      i = t.match(/Edge\/([\d.]+)/),
                      o = /micromessenger/i.test(t);
                    return (
                      n && ((a.firefox = !0), (a.version = n[1])),
                      r && ((a.ie = !0), (a.version = r[1])),
                      i && ((a.edge = !0), (a.version = i[1])),
                      o && (a.weChat = !0),
                      {
                        browser: a,
                        os: e,
                        node: !1,
                        canvasSupported: !!document.createElement("canvas")
                          .getContext,
                        svgSupported: "undefined" != typeof SVGRect,
                        touchEventsSupported:
                          "ontouchstart" in window && !a.ie && !a.edge,
                        pointerEventsSupported:
                          "onpointerdown" in window &&
                          (a.edge || (a.ie && a.version >= 11)),
                      }
                    );
                  })(navigator.userAgent);
            var n = a;
            t.exports = n;
          },
          function(t, e, a) {
            var n = a(41),
              r = a(42),
              i = a(17),
              o = a(43),
              s = a(0),
              l = function(t) {
                i.call(this, t),
                  r.call(this, t),
                  o.call(this, t),
                  (this.id = t.id || n());
              };
            (l.prototype = {
              type: "element",
              name: "",
              __zr: null,
              ignore: !1,
              clipPath: null,
              drift: function(t, e) {
                switch (this.draggable) {
                  case "horizontal":
                    e = 0;
                    break;
                  case "vertical":
                    t = 0;
                }
                var a = this.transform;
                a || (a = this.transform = [1, 0, 0, 1, 0, 0]),
                  (a[4] += t),
                  (a[5] += e),
                  this.decomposeTransform(),
                  this.dirty(!1);
              },
              beforeUpdate: function() {},
              afterUpdate: function() {},
              update: function() {
                this.updateTransform();
              },
              traverse: function(t, e) {},
              attrKV: function(t, e) {
                if ("position" === t || "scale" === t || "origin" === t) {
                  if (e) {
                    var a = this[t];
                    a || (a = this[t] = []), (a[0] = e[0]), (a[1] = e[1]);
                  }
                } else this[t] = e;
              },
              hide: function() {
                (this.ignore = !0), this.__zr && this.__zr.refresh();
              },
              show: function() {
                (this.ignore = !1), this.__zr && this.__zr.refresh();
              },
              attr: function(t, e) {
                if ("string" == typeof t) this.attrKV(t, e);
                else if (s.isObject(t))
                  for (var a in t) t.hasOwnProperty(a) && this.attrKV(a, t[a]);
                return this.dirty(!1), this;
              },
              setClipPath: function(t) {
                var e = this.__zr;
                e && t.addSelfToZr(e),
                  this.clipPath && this.clipPath !== t && this.removeClipPath(),
                  (this.clipPath = t),
                  (t.__zr = e),
                  (t.__clipTarget = this),
                  this.dirty(!1);
              },
              removeClipPath: function() {
                var t = this.clipPath;
                t &&
                  (t.__zr && t.removeSelfFromZr(t.__zr),
                  (t.__zr = null),
                  (t.__clipTarget = null),
                  (this.clipPath = null),
                  this.dirty(!1));
              },
              addSelfToZr: function(t) {
                this.__zr = t;
                var e = this.animators;
                if (e)
                  for (var a = 0; a < e.length; a++)
                    t.animation.addAnimator(e[a]);
                this.clipPath && this.clipPath.addSelfToZr(t);
              },
              removeSelfFromZr: function(t) {
                this.__zr = null;
                var e = this.animators;
                if (e)
                  for (var a = 0; a < e.length; a++)
                    t.animation.removeAnimator(e[a]);
                this.clipPath && this.clipPath.removeSelfFromZr(t);
              },
            }),
              s.mixin(l, o),
              s.mixin(l, i),
              s.mixin(l, r);
            var c = l;
            t.exports = c;
          },
          function(t, e, a) {
            function n(t) {
              return t > s || t < -s;
            }
            var r = a(8),
              i = a(2),
              o = r.identity,
              s = 5e-5,
              l = function(t) {
                (t = t || {}),
                  t.position || (this.position = [0, 0]),
                  null == t.rotation && (this.rotation = 0),
                  t.scale || (this.scale = [1, 1]),
                  (this.origin = this.origin || null);
              },
              c = l.prototype;
            (c.transform = null),
              (c.needLocalTransform = function() {
                return (
                  n(this.rotation) ||
                  n(this.position[0]) ||
                  n(this.position[1]) ||
                  n(this.scale[0] - 1) ||
                  n(this.scale[1] - 1)
                );
              }),
              (c.updateTransform = function() {
                var t = this.parent,
                  e = t && t.transform,
                  a = this.needLocalTransform(),
                  n = this.transform;
                a || e
                  ? ((n = n || r.create()),
                    a ? this.getLocalTransform(n) : o(n),
                    e &&
                      (a ? r.mul(n, t.transform, n) : r.copy(n, t.transform)),
                    (this.transform = n),
                    (this.invTransform = this.invTransform || r.create()),
                    r.invert(this.invTransform, n))
                  : n && o(n);
              }),
              (c.getLocalTransform = function(t) {
                return l.getLocalTransform(this, t);
              }),
              (c.setTransform = function(t) {
                var e = this.transform,
                  a = t.dpr || 1;
                e
                  ? t.setTransform(
                      a * e[0],
                      a * e[1],
                      a * e[2],
                      a * e[3],
                      a * e[4],
                      a * e[5]
                    )
                  : t.setTransform(a, 0, 0, a, 0, 0);
              }),
              (c.restoreTransform = function(t) {
                var e = t.dpr || 1;
                t.setTransform(e, 0, 0, e, 0, 0);
              });
            var u = [];
            (c.decomposeTransform = function() {
              if (this.transform) {
                var t = this.parent,
                  e = this.transform;
                t && t.transform && (r.mul(u, t.invTransform, e), (e = u));
                var a = e[0] * e[0] + e[1] * e[1],
                  i = e[2] * e[2] + e[3] * e[3],
                  o = this.position,
                  s = this.scale;
                n(a - 1) && (a = Math.sqrt(a)),
                  n(i - 1) && (i = Math.sqrt(i)),
                  e[0] < 0 && (a = -a),
                  e[3] < 0 && (i = -i),
                  (o[0] = e[4]),
                  (o[1] = e[5]),
                  (s[0] = a),
                  (s[1] = i),
                  (this.rotation = Math.atan2(-e[1] / i, e[0] / a));
              }
            }),
              (c.getGlobalScale = function() {
                var t = this.transform;
                if (!t) return [1, 1];
                var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
                  a = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
                return t[0] < 0 && (e = -e), t[3] < 0 && (a = -a), [e, a];
              }),
              (c.transformCoordToLocal = function(t, e) {
                var a = [t, e],
                  n = this.invTransform;
                return n && i.applyTransform(a, a, n), a;
              }),
              (c.transformCoordToGlobal = function(t, e) {
                var a = [t, e],
                  n = this.transform;
                return n && i.applyTransform(a, a, n), a;
              }),
              (l.getLocalTransform = function(t, e) {
                (e = e || []), o(e);
                var a = t.origin,
                  n = t.scale || [1, 1],
                  i = t.rotation || 0,
                  s = t.position || [0, 0];
                return (
                  a && ((e[4] -= a[0]), (e[5] -= a[1])),
                  r.scale(e, e, n),
                  i && r.rotate(e, e, i),
                  a && ((e[4] += a[0]), (e[5] += a[1])),
                  (e[4] += s[0]),
                  (e[5] += s[1]),
                  e
                );
              });
            var h = l;
            t.exports = h;
          },
          function(t, e, a) {
            function n(t) {
              return (t = Math.round(t)), t < 0 ? 0 : t > 255 ? 255 : t;
            }
            function r(t) {
              return (t = Math.round(t)), t < 0 ? 0 : t > 360 ? 360 : t;
            }
            function i(t) {
              return t < 0 ? 0 : t > 1 ? 1 : t;
            }
            function o(t) {
              return n(
                t.length && "%" === t.charAt(t.length - 1)
                  ? (parseFloat(t) / 100) * 255
                  : parseInt(t, 10)
              );
            }
            function s(t) {
              return i(
                t.length && "%" === t.charAt(t.length - 1)
                  ? parseFloat(t) / 100
                  : parseFloat(t)
              );
            }
            function l(t, e, a) {
              return (
                a < 0 ? (a += 1) : a > 1 && (a -= 1),
                6 * a < 1
                  ? t + (e - t) * a * 6
                  : 2 * a < 1
                  ? e
                  : 3 * a < 2
                  ? t + (e - t) * (2 / 3 - a) * 6
                  : t
              );
            }
            function c(t, e, a) {
              return t + (e - t) * a;
            }
            function u(t, e, a, n, r) {
              return (t[0] = e), (t[1] = a), (t[2] = n), (t[3] = r), t;
            }
            function h(t, e) {
              return (
                (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t
              );
            }
            function d(t, e) {
              M && h(M, e), (M = k.put(t, M || e.slice()));
            }
            function f(t, e) {
              if (t) {
                e = e || [];
                var a = k.get(t);
                if (a) return h(e, a);
                t += "";
                var n = t.replace(/ /g, "").toLowerCase();
                if (n in C) return h(e, C[n]), d(t, e), e;
                if ("#" !== n.charAt(0)) {
                  var r = n.indexOf("("),
                    i = n.indexOf(")");
                  if (-1 !== r && i + 1 === n.length) {
                    var l = n.substr(0, r),
                      c = n.substr(r + 1, i - (r + 1)).split(","),
                      f = 1;
                    switch (l) {
                      case "rgba":
                        if (4 !== c.length) return void u(e, 0, 0, 0, 1);
                        f = s(c.pop());
                      case "rgb":
                        return 3 !== c.length
                          ? void u(e, 0, 0, 0, 1)
                          : (u(e, o(c[0]), o(c[1]), o(c[2]), f), d(t, e), e);
                      case "hsla":
                        return 4 !== c.length
                          ? void u(e, 0, 0, 0, 1)
                          : ((c[3] = s(c[3])), m(c, e), d(t, e), e);
                      case "hsl":
                        return 3 !== c.length
                          ? void u(e, 0, 0, 0, 1)
                          : (m(c, e), d(t, e), e);
                      default:
                        return;
                    }
                  }
                  u(e, 0, 0, 0, 1);
                } else {
                  if (4 === n.length) {
                    var v = parseInt(n.substr(1), 16);
                    return v >= 0 && v <= 4095
                      ? (u(
                          e,
                          ((3840 & v) >> 4) | ((3840 & v) >> 8),
                          (240 & v) | ((240 & v) >> 4),
                          (15 & v) | ((15 & v) << 4),
                          1
                        ),
                        d(t, e),
                        e)
                      : void u(e, 0, 0, 0, 1);
                  }
                  if (7 === n.length) {
                    v = parseInt(n.substr(1), 16);
                    return v >= 0 && v <= 16777215
                      ? (u(
                          e,
                          (16711680 & v) >> 16,
                          (65280 & v) >> 8,
                          255 & v,
                          1
                        ),
                        d(t, e),
                        e)
                      : void u(e, 0, 0, 0, 1);
                  }
                }
              }
            }
            function m(t, e) {
              var a = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
                r = s(t[1]),
                i = s(t[2]),
                o = i <= 0.5 ? i * (r + 1) : i + r - i * r,
                c = 2 * i - o;
              return (
                (e = e || []),
                u(
                  e,
                  n(255 * l(c, o, a + 1 / 3)),
                  n(255 * l(c, o, a)),
                  n(255 * l(c, o, a - 1 / 3)),
                  1
                ),
                4 === t.length && (e[3] = t[3]),
                e
              );
            }
            function v(t) {
              if (t) {
                var e,
                  a,
                  n = t[0] / 255,
                  r = t[1] / 255,
                  i = t[2] / 255,
                  o = Math.min(n, r, i),
                  s = Math.max(n, r, i),
                  l = s - o,
                  c = (s + o) / 2;
                if (0 === l) (e = 0), (a = 0);
                else {
                  a = c < 0.5 ? l / (s + o) : l / (2 - s - o);
                  var u = ((s - n) / 6 + l / 2) / l,
                    h = ((s - r) / 6 + l / 2) / l,
                    d = ((s - i) / 6 + l / 2) / l;
                  n === s
                    ? (e = d - h)
                    : r === s
                    ? (e = 1 / 3 + u - d)
                    : i === s && (e = 2 / 3 + h - u),
                    e < 0 && (e += 1),
                    e > 1 && (e -= 1);
                }
                var f = [360 * e, a, c];
                return null != t[3] && f.push(t[3]), f;
              }
            }
            function p(t, e) {
              var a = f(t);
              if (a) {
                for (var n = 0; n < 3; n++)
                  a[n] =
                    e < 0
                      ? (a[n] * (1 - e)) | 0
                      : ((255 - a[n]) * e + a[n]) | 0;
                return _(a, 4 === a.length ? "rgba" : "rgb");
              }
            }
            function g(t) {
              var e = f(t);
              if (e)
                return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2])
                  .toString(16)
                  .slice(1);
            }
            function y(t, e, a) {
              if (e && e.length && t >= 0 && t <= 1) {
                a = a || [];
                var r = t * (e.length - 1),
                  o = Math.floor(r),
                  s = Math.ceil(r),
                  l = e[o],
                  u = e[s],
                  h = r - o;
                return (
                  (a[0] = n(c(l[0], u[0], h))),
                  (a[1] = n(c(l[1], u[1], h))),
                  (a[2] = n(c(l[2], u[2], h))),
                  (a[3] = i(c(l[3], u[3], h))),
                  a
                );
              }
            }
            function b(t, e, a) {
              if (e && e.length && t >= 0 && t <= 1) {
                var r = t * (e.length - 1),
                  o = Math.floor(r),
                  s = Math.ceil(r),
                  l = f(e[o]),
                  u = f(e[s]),
                  h = r - o,
                  d = _(
                    [
                      n(c(l[0], u[0], h)),
                      n(c(l[1], u[1], h)),
                      n(c(l[2], u[2], h)),
                      i(c(l[3], u[3], h)),
                    ],
                    "rgba"
                  );
                return a
                  ? { color: d, leftIndex: o, rightIndex: s, value: r }
                  : d;
              }
            }
            function x(t, e, a, n) {
              if ((t = f(t)))
                return (
                  (t = v(t)),
                  null != e && (t[0] = r(e)),
                  null != a && (t[1] = s(a)),
                  null != n && (t[2] = s(n)),
                  _(m(t), "rgba")
                );
            }
            function w(t, e) {
              if ((t = f(t)) && null != e) return (t[3] = i(e)), _(t, "rgba");
            }
            function _(t, e) {
              if (t && t.length) {
                var a = t[0] + "," + t[1] + "," + t[2];
                return (
                  ("rgba" !== e && "hsva" !== e && "hsla" !== e) ||
                    (a += "," + t[3]),
                  e + "(" + a + ")"
                );
              }
            }
            var S = a(14),
              C = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, 1],
                antiquewhite: [250, 235, 215, 1],
                aqua: [0, 255, 255, 1],
                aquamarine: [127, 255, 212, 1],
                azure: [240, 255, 255, 1],
                beige: [245, 245, 220, 1],
                bisque: [255, 228, 196, 1],
                black: [0, 0, 0, 1],
                blanchedalmond: [255, 235, 205, 1],
                blue: [0, 0, 255, 1],
                blueviolet: [138, 43, 226, 1],
                brown: [165, 42, 42, 1],
                burlywood: [222, 184, 135, 1],
                cadetblue: [95, 158, 160, 1],
                chartreuse: [127, 255, 0, 1],
                chocolate: [210, 105, 30, 1],
                coral: [255, 127, 80, 1],
                cornflowerblue: [100, 149, 237, 1],
                cornsilk: [255, 248, 220, 1],
                crimson: [220, 20, 60, 1],
                cyan: [0, 255, 255, 1],
                darkblue: [0, 0, 139, 1],
                darkcyan: [0, 139, 139, 1],
                darkgoldenrod: [184, 134, 11, 1],
                darkgray: [169, 169, 169, 1],
                darkgreen: [0, 100, 0, 1],
                darkgrey: [169, 169, 169, 1],
                darkkhaki: [189, 183, 107, 1],
                darkmagenta: [139, 0, 139, 1],
                darkolivegreen: [85, 107, 47, 1],
                darkorange: [255, 140, 0, 1],
                darkorchid: [153, 50, 204, 1],
                darkred: [139, 0, 0, 1],
                darksalmon: [233, 150, 122, 1],
                darkseagreen: [143, 188, 143, 1],
                darkslateblue: [72, 61, 139, 1],
                darkslategray: [47, 79, 79, 1],
                darkslategrey: [47, 79, 79, 1],
                darkturquoise: [0, 206, 209, 1],
                darkviolet: [148, 0, 211, 1],
                deeppink: [255, 20, 147, 1],
                deepskyblue: [0, 191, 255, 1],
                dimgray: [105, 105, 105, 1],
                dimgrey: [105, 105, 105, 1],
                dodgerblue: [30, 144, 255, 1],
                firebrick: [178, 34, 34, 1],
                floralwhite: [255, 250, 240, 1],
                forestgreen: [34, 139, 34, 1],
                fuchsia: [255, 0, 255, 1],
                gainsboro: [220, 220, 220, 1],
                ghostwhite: [248, 248, 255, 1],
                gold: [255, 215, 0, 1],
                goldenrod: [218, 165, 32, 1],
                gray: [128, 128, 128, 1],
                green: [0, 128, 0, 1],
                greenyellow: [173, 255, 47, 1],
                grey: [128, 128, 128, 1],
                honeydew: [240, 255, 240, 1],
                hotpink: [255, 105, 180, 1],
                indianred: [205, 92, 92, 1],
                indigo: [75, 0, 130, 1],
                ivory: [255, 255, 240, 1],
                khaki: [240, 230, 140, 1],
                lavender: [230, 230, 250, 1],
                lavenderblush: [255, 240, 245, 1],
                lawngreen: [124, 252, 0, 1],
                lemonchiffon: [255, 250, 205, 1],
                lightblue: [173, 216, 230, 1],
                lightcoral: [240, 128, 128, 1],
                lightcyan: [224, 255, 255, 1],
                lightgoldenrodyellow: [250, 250, 210, 1],
                lightgray: [211, 211, 211, 1],
                lightgreen: [144, 238, 144, 1],
                lightgrey: [211, 211, 211, 1],
                lightpink: [255, 182, 193, 1],
                lightsalmon: [255, 160, 122, 1],
                lightseagreen: [32, 178, 170, 1],
                lightskyblue: [135, 206, 250, 1],
                lightslategray: [119, 136, 153, 1],
                lightslategrey: [119, 136, 153, 1],
                lightsteelblue: [176, 196, 222, 1],
                lightyellow: [255, 255, 224, 1],
                lime: [0, 255, 0, 1],
                limegreen: [50, 205, 50, 1],
                linen: [250, 240, 230, 1],
                magenta: [255, 0, 255, 1],
                maroon: [128, 0, 0, 1],
                mediumaquamarine: [102, 205, 170, 1],
                mediumblue: [0, 0, 205, 1],
                mediumorchid: [186, 85, 211, 1],
                mediumpurple: [147, 112, 219, 1],
                mediumseagreen: [60, 179, 113, 1],
                mediumslateblue: [123, 104, 238, 1],
                mediumspringgreen: [0, 250, 154, 1],
                mediumturquoise: [72, 209, 204, 1],
                mediumvioletred: [199, 21, 133, 1],
                midnightblue: [25, 25, 112, 1],
                mintcream: [245, 255, 250, 1],
                mistyrose: [255, 228, 225, 1],
                moccasin: [255, 228, 181, 1],
                navajowhite: [255, 222, 173, 1],
                navy: [0, 0, 128, 1],
                oldlace: [253, 245, 230, 1],
                olive: [128, 128, 0, 1],
                olivedrab: [107, 142, 35, 1],
                orange: [255, 165, 0, 1],
                orangered: [255, 69, 0, 1],
                orchid: [218, 112, 214, 1],
                palegoldenrod: [238, 232, 170, 1],
                palegreen: [152, 251, 152, 1],
                paleturquoise: [175, 238, 238, 1],
                palevioletred: [219, 112, 147, 1],
                papayawhip: [255, 239, 213, 1],
                peachpuff: [255, 218, 185, 1],
                peru: [205, 133, 63, 1],
                pink: [255, 192, 203, 1],
                plum: [221, 160, 221, 1],
                powderblue: [176, 224, 230, 1],
                purple: [128, 0, 128, 1],
                red: [255, 0, 0, 1],
                rosybrown: [188, 143, 143, 1],
                royalblue: [65, 105, 225, 1],
                saddlebrown: [139, 69, 19, 1],
                salmon: [250, 128, 114, 1],
                sandybrown: [244, 164, 96, 1],
                seagreen: [46, 139, 87, 1],
                seashell: [255, 245, 238, 1],
                sienna: [160, 82, 45, 1],
                silver: [192, 192, 192, 1],
                skyblue: [135, 206, 235, 1],
                slateblue: [106, 90, 205, 1],
                slategray: [112, 128, 144, 1],
                slategrey: [112, 128, 144, 1],
                snow: [255, 250, 250, 1],
                springgreen: [0, 255, 127, 1],
                steelblue: [70, 130, 180, 1],
                tan: [210, 180, 140, 1],
                teal: [0, 128, 128, 1],
                thistle: [216, 191, 216, 1],
                tomato: [255, 99, 71, 1],
                turquoise: [64, 224, 208, 1],
                violet: [238, 130, 238, 1],
                wheat: [245, 222, 179, 1],
                white: [255, 255, 255, 1],
                whitesmoke: [245, 245, 245, 1],
                yellow: [255, 255, 0, 1],
                yellowgreen: [154, 205, 50, 1],
              },
              k = new S(20),
              M = null,
              T = y,
              A = b;
            (e.parse = f),
              (e.lift = p),
              (e.toHex = g),
              (e.fastLerp = y),
              (e.fastMapToColor = T),
              (e.lerp = b),
              (e.mapToColor = A),
              (e.modifyHSL = x),
              (e.modifyAlpha = w),
              (e.stringify = _);
          },
          function(t, e) {
            var a = 1;
            "undefined" != typeof window &&
              (a = Math.max(window.devicePixelRatio || 1, 1));
            var n = a;
            (e.debugMode = 0), (e.devicePixelRatio = n);
          },
          function(t, e, a) {
            function n(t) {
              return r(t), C(t.rich, r), t;
            }
            function r(t) {
              if (t) {
                t.font = A.makeFont(t);
                var e = t.textAlign;
                "middle" === e && (e = "center"),
                  (t.textAlign = null == e || E[e] ? e : "left");
                var a = t.textVerticalAlign || t.textBaseline;
                "center" === a && (a = "middle"),
                  (t.textVerticalAlign = null == a || I[a] ? a : "top"),
                  t.textPadding && (t.textPadding = k(t.textPadding));
              }
            }
            function i(t, e, a, n, r) {
              n.rich ? s(t, e, a, n, r) : o(t, e, a, n, r);
            }
            function o(t, e, a, n, r) {
              var i = v(e, "font", n.font || A.DEFAULT_FONT),
                o = n.textPadding,
                s = t.__textCotentBlock;
              (s && !t.__dirty) ||
                (s = t.__textCotentBlock = A.parsePlainText(
                  a,
                  i,
                  o,
                  n.truncate
                ));
              var l = s.outerHeight,
                u = s.lines,
                f = s.lineHeight,
                y = m(l, n, r),
                x = y.baseX,
                w = y.baseY,
                _ = y.textAlign,
                S = y.textVerticalAlign;
              c(e, n, r, x, w);
              var C = A.adjustTextY(w, l, S),
                k = x,
                M = C,
                T = h(n);
              if (T || o) {
                var L = A.getWidth(a, i),
                  O = L;
                o && (O += o[1] + o[3]);
                var E = A.adjustTextX(x, O, _);
                T && d(t, e, n, E, C, O, l),
                  o && ((k = b(x, _, o)), (M += o[0]));
              }
              v(e, "textAlign", _ || "left"),
                v(e, "textBaseline", "middle"),
                v(e, "shadowBlur", n.textShadowBlur || 0),
                v(e, "shadowColor", n.textShadowColor || "transparent"),
                v(e, "shadowOffsetX", n.textShadowOffsetX || 0),
                v(e, "shadowOffsetY", n.textShadowOffsetY || 0),
                (M += f / 2);
              var I = n.textStrokeWidth,
                P = p(n.textStroke, I),
                D = g(n.textFill);
              P && (v(e, "lineWidth", I), v(e, "strokeStyle", P)),
                D && v(e, "fillStyle", D);
              for (var z = 0; z < u.length; z++)
                P && e.strokeText(u[z], k, M),
                  D && e.fillText(u[z], k, M),
                  (M += f);
            }
            function s(t, e, a, n, r) {
              var i = t.__textCotentBlock;
              (i && !t.__dirty) ||
                (i = t.__textCotentBlock = A.parseRichText(a, n)),
                l(t, e, i, n, r);
            }
            function l(t, e, a, n, r) {
              var i = a.width,
                o = a.outerWidth,
                s = a.outerHeight,
                l = n.textPadding,
                f = m(s, n, r),
                v = f.baseX,
                p = f.baseY,
                g = f.textAlign,
                y = f.textVerticalAlign;
              c(e, n, r, v, p);
              var b = A.adjustTextX(v, o, g),
                x = A.adjustTextY(p, s, y),
                w = b,
                _ = x;
              l && ((w += l[3]), (_ += l[0]));
              var S = w + i;
              h(n) && d(t, e, n, b, x, o, s);
              for (var C = 0; C < a.lines.length; C++) {
                for (
                  var k,
                    M = a.lines[C],
                    T = M.tokens,
                    L = T.length,
                    O = M.lineHeight,
                    E = M.width,
                    I = 0,
                    P = w,
                    D = S,
                    z = L - 1;
                  I < L && ((k = T[I]), !k.textAlign || "left" === k.textAlign);

                )
                  u(t, e, k, n, O, _, P, "left"),
                    (E -= k.width),
                    (P += k.width),
                    I++;
                for (; z >= 0 && ((k = T[z]), "right" === k.textAlign); )
                  u(t, e, k, n, O, _, D, "right"),
                    (E -= k.width),
                    (D -= k.width),
                    z--;
                for (P += (i - (P - w) - (S - D) - E) / 2; I <= z; )
                  (k = T[I]),
                    u(t, e, k, n, O, _, P + k.width / 2, "center"),
                    (P += k.width),
                    I++;
                _ += O;
              }
            }
            function c(t, e, a, n, r) {
              if (a && e.textRotation) {
                var i = e.textOrigin;
                "center" === i
                  ? ((n = a.width / 2 + a.x), (r = a.height / 2 + a.y))
                  : i && ((n = i[0] + a.x), (r = i[1] + a.y)),
                  t.translate(n, r),
                  t.rotate(-e.textRotation),
                  t.translate(-n, -r);
              }
            }
            function u(t, e, a, n, r, i, o, s) {
              var l = n.rich[a.styleName] || {},
                c = a.textVerticalAlign,
                u = i + r / 2;
              "top" === c
                ? (u = i + a.height / 2)
                : "bottom" === c && (u = i + r - a.height / 2),
                !a.isLineHolder &&
                  h(l) &&
                  d(
                    t,
                    e,
                    l,
                    "right" === s
                      ? o - a.width
                      : "center" === s
                      ? o - a.width / 2
                      : o,
                    u - a.height / 2,
                    a.width,
                    a.height
                  );
              var f = a.textPadding;
              f &&
                ((o = b(o, s, f)),
                (u -= a.height / 2 - f[2] - a.textHeight / 2)),
                v(e, "shadowBlur", S(l.textShadowBlur, n.textShadowBlur, 0)),
                v(
                  e,
                  "shadowColor",
                  l.textShadowColor || n.textShadowColor || "transparent"
                ),
                v(
                  e,
                  "shadowOffsetX",
                  S(l.textShadowOffsetX, n.textShadowOffsetX, 0)
                ),
                v(
                  e,
                  "shadowOffsetY",
                  S(l.textShadowOffsetY, n.textShadowOffsetY, 0)
                ),
                v(e, "textAlign", s),
                v(e, "textBaseline", "middle"),
                v(e, "font", a.font || A.DEFAULT_FONT);
              var m = p(l.textStroke || n.textStroke, x),
                y = g(l.textFill || n.textFill),
                x = _(l.textStrokeWidth, n.textStrokeWidth);
              m &&
                (v(e, "lineWidth", x),
                v(e, "strokeStyle", m),
                e.strokeText(a.text, o, u)),
                y && (v(e, "fillStyle", y), e.fillText(a.text, o, u));
            }
            function h(t) {
              return (
                t.textBackgroundColor ||
                (t.textBorderWidth && t.textBorderColor)
              );
            }
            function d(t, e, a, n, r, i, o) {
              var s = a.textBackgroundColor,
                l = a.textBorderWidth,
                c = a.textBorderColor,
                u = M(s);
              if (
                (v(e, "shadowBlur", a.textBoxShadowBlur || 0),
                v(e, "shadowColor", a.textBoxShadowColor || "transparent"),
                v(e, "shadowOffsetX", a.textBoxShadowOffsetX || 0),
                v(e, "shadowOffsetY", a.textBoxShadowOffsetY || 0),
                u || (l && c))
              ) {
                e.beginPath();
                var h = a.textBorderRadius;
                h
                  ? L.buildPath(e, { x: n, y: r, width: i, height: o, r: h })
                  : e.rect(n, r, i, o),
                  e.closePath();
              }
              if (u) v(e, "fillStyle", s), e.fill();
              else if (T(s)) {
                var d = s.image;
                (d = O.createOrUpdateImage(d, null, t, f, s)),
                  d && O.isImageReady(d) && e.drawImage(d, n, r, i, o);
              }
              l &&
                c &&
                (v(e, "lineWidth", l), v(e, "strokeStyle", c), e.stroke());
            }
            function f(t, e) {
              e.image = t;
            }
            function m(t, e, a) {
              var n = e.x || 0,
                r = e.y || 0,
                i = e.textAlign,
                o = e.textVerticalAlign;
              if (a) {
                var s = e.textPosition;
                if (s instanceof Array)
                  (n = a.x + y(s[0], a.width)), (r = a.y + y(s[1], a.height));
                else {
                  var l = A.adjustTextPositionOnRect(s, a, e.textDistance);
                  (n = l.x),
                    (r = l.y),
                    (i = i || l.textAlign),
                    (o = o || l.textVerticalAlign);
                }
                var c = e.textOffset;
                c && ((n += c[0]), (r += c[1]));
              }
              return { baseX: n, baseY: r, textAlign: i, textVerticalAlign: o };
            }
            function v(t, e, a) {
              return (t[e] = a), t[e];
            }
            function p(t, e) {
              return null == t || e <= 0 || "transparent" === t || "none" === t
                ? null
                : t.image || t.colorStops
                ? "#000"
                : t;
            }
            function g(t) {
              return null == t || "none" === t
                ? null
                : t.image || t.colorStops
                ? "#000"
                : t;
            }
            function y(t, e) {
              return "string" == typeof t
                ? t.lastIndexOf("%") >= 0
                  ? (parseFloat(t) / 100) * e
                  : parseFloat(t)
                : t;
            }
            function b(t, e, a) {
              return "right" === e
                ? t - a[1]
                : "center" === e
                ? t + a[3] / 2 - a[1] / 2
                : t + a[3];
            }
            function x(t, e) {
              return (
                null != t &&
                (t ||
                  e.textBackgroundColor ||
                  (e.textBorderWidth && e.textBorderColor) ||
                  e.textPadding)
              );
            }
            var w = a(0),
              _ = w.retrieve2,
              S = w.retrieve3,
              C = w.each,
              k = w.normalizeCssArray,
              M = w.isString,
              T = w.isObject,
              A = a(5),
              L = a(21),
              O = a(10),
              E = { left: 1, right: 1, center: 1 },
              I = { top: 1, bottom: 1, middle: 1 };
            (e.normalizeTextStyle = n),
              (e.renderText = i),
              (e.getStroke = p),
              (e.getFill = g),
              (e.needDrawText = x);
          },
          function(t, e) {
            function a(t, e) {
              var a,
                n,
                r,
                i,
                o,
                s = e.x,
                l = e.y,
                c = e.width,
                u = e.height,
                h = e.r;
              c < 0 && ((s += c), (c = -c)),
                u < 0 && ((l += u), (u = -u)),
                "number" == typeof h
                  ? (a = n = r = i = h)
                  : h instanceof Array
                  ? 1 === h.length
                    ? (a = n = r = i = h[0])
                    : 2 === h.length
                    ? ((a = r = h[0]), (n = i = h[1]))
                    : 3 === h.length
                    ? ((a = h[0]), (n = i = h[1]), (r = h[2]))
                    : ((a = h[0]), (n = h[1]), (r = h[2]), (i = h[3]))
                  : (a = n = r = i = 0),
                a + n > c && ((o = a + n), (a *= c / o), (n *= c / o)),
                r + i > c && ((o = r + i), (r *= c / o), (i *= c / o)),
                n + r > u && ((o = n + r), (n *= u / o), (r *= u / o)),
                a + i > u && ((o = a + i), (a *= u / o), (i *= u / o)),
                t.moveTo(s + a, l),
                t.lineTo(s + c - n, l),
                0 !== n && t.quadraticCurveTo(s + c, l, s + c, l + n),
                t.lineTo(s + c, l + u - r),
                0 !== r && t.quadraticCurveTo(s + c, l + u, s + c - r, l + u),
                t.lineTo(s + i, l + u),
                0 !== i && t.quadraticCurveTo(s, l + u, s, l + u - i),
                t.lineTo(s, l + a),
                0 !== a && t.quadraticCurveTo(s, l, s + a, l);
            }
            e.buildPath = a;
          },
          function(t, e) {
            function a(t) {
              return (t %= n), t < 0 && (t += n), t;
            }
            var n = 2 * Math.PI;
            e.normalizeRadian = a;
          },
          function(t, e, a) {
            function n(t, e, a) {
              var n = e.points,
                o = e.smooth;
              if (n && n.length >= 2) {
                if (o && "spline" !== o) {
                  var s = i(n, o, a, e.smoothConstraint);
                  t.moveTo(n[0][0], n[0][1]);
                  for (var l = n.length, c = 0; c < (a ? l : l - 1); c++) {
                    var u = s[2 * c],
                      h = s[2 * c + 1],
                      d = n[(c + 1) % l];
                    t.bezierCurveTo(u[0], u[1], h[0], h[1], d[0], d[1]);
                  }
                } else {
                  "spline" === o && (n = r(n, a)), t.moveTo(n[0][0], n[0][1]);
                  c = 1;
                  for (var f = n.length; c < f; c++) t.lineTo(n[c][0], n[c][1]);
                }
                a && t.closePath();
              }
            }
            var r = a(66),
              i = a(67);
            e.buildPath = n;
          },
          function(t, e) {
            var a = function(t) {
              this.colorStops = t || [];
            };
            a.prototype = {
              constructor: a,
              addColorStop: function(t, e) {
                this.colorStops.push({ offset: t, color: e });
              },
            };
            var n = a;
            t.exports = n;
          },
          function(t, e, a) {
            t.exports = a(26);
          },
          function(t, e, a) {
            function n(t) {
              for (
                var e = t.getContext("2d"),
                  a = e.getImageData(0, 0, t.width, t.height),
                  n = e.createImageData(a),
                  r = 0,
                  i = 0,
                  o = 0;
                o < a.data.length;
                o += 4
              ) {
                var s = a.data[o + 3];
                if (s > 128) {
                  var l = a.data[o] + a.data[o + 1] + a.data[o + 2];
                  (r += l), ++i;
                }
              }
              var c = r / i;
              for (o = 0; o < a.data.length; o += 4) {
                (l = a.data[o] + a.data[o + 1] + a.data[o + 2]),
                  (s = a.data[o + 3]);
                s < 128 || l > c
                  ? ((n.data[o] = 0),
                    (n.data[o + 1] = 0),
                    (n.data[o + 2] = 0),
                    (n.data[o + 3] = 0))
                  : ((n.data[o] = 255),
                    (n.data[o + 1] = 255),
                    (n.data[o + 2] = 255),
                    (n.data[o + 3] = 255));
              }
              e.putImageData(n, 0, 0);
            }
            var r = a(7),
              i = a(27);
            a(28), a(77);
            var o = a(78);
            if (!o.isSupported)
              throw new Error("Sorry your browser not support wordCloud");
            r.registerLayout(function(t, e) {
              t.eachSeriesByType("wordCloud", function(a) {
                function s(t) {
                  var e = t.detail.item;
                  t.detail.drawn &&
                    a.layoutInstance.ondraw &&
                    ((t.detail.drawn.gx += l.x / g),
                    (t.detail.drawn.gy += l.y / g),
                    a.layoutInstance.ondraw(e[0], e[1], e[2], t.detail.drawn));
                }
                var l = i.getLayoutRect(a.getBoxLayoutParams(), {
                    width: e.getWidth(),
                    height: e.getHeight(),
                  }),
                  c = a.getData(),
                  u = document.createElement("canvas");
                (u.width = l.width), (u.height = l.height);
                var h = u.getContext("2d"),
                  d = a.get("maskImage");
                if (d)
                  try {
                    h.drawImage(d, 0, 0, u.width, u.height), n(u);
                  } catch (t) {
                    console.error("Invalid mask image"),
                      console.error(t.toString());
                  }
                var f = a.get("sizeRange"),
                  m = a.get("rotationRange"),
                  v = c.getDataExtent("value"),
                  p = Math.PI / 180,
                  g = a.get("gridSize");
                o(u, {
                  list: c
                    .mapArray("value", function(t, e) {
                      var a = c.getItemModel(e);
                      return [
                        c.getName(e),
                        a.get("textStyle.normal.textSize", !0) ||
                          r.number.linearMap(t, v, f),
                        e,
                      ];
                    })
                    .sort(function(t, e) {
                      return e[1] - t[1];
                    }),
                  fontFamily:
                    a.get("textStyle.normal.fontFamily") ||
                    a.get("textStyle.emphasis.fontFamily") ||
                    t.get("textStyle.fontFamily"),
                  fontWeight:
                    a.get("textStyle.normal.fontWeight") ||
                    a.get("textStyle.emphasis.fontWeight") ||
                    t.get("textStyle.fontWeight"),
                  gridSize: g,
                  ellipticity: l.height / l.width,
                  minRotation: m[0] * p,
                  maxRotation: m[1] * p,
                  clearCanvas: !d,
                  rotateRatio: 1,
                  rotationStep: a.get("rotationStep") * p,
                  drawOutOfBound: a.get("drawOutOfBound"),
                  shuffle: !1,
                  shape: a.get("shape"),
                }),
                  u.addEventListener("wordclouddrawn", s),
                  a.layoutInstance && a.layoutInstance.dispose(),
                  (a.layoutInstance = {
                    ondraw: null,
                    dispose: function() {
                      u.removeEventListener("wordclouddrawn", s),
                        u.addEventListener("wordclouddrawn", function(t) {
                          t.preventDefault();
                        });
                    },
                  });
              });
            }),
              r.registerPreprocessor(function(t) {
                function e(t) {
                  t &&
                    r.util.each(n, function(e) {
                      t.hasOwnProperty(e) &&
                        (t["text" + r.format.capitalFirst(e)] = t[e]);
                    });
                }
                var a = (t || {}).series;
                !r.util.isArray(a) && (a = a ? [a] : []);
                var n = [
                  "shadowColor",
                  "shadowBlur",
                  "shadowOffsetX",
                  "shadowOffsetY",
                ];
                r.util.each(a, function(t) {
                  if (t && "wordCloud" === t.type) {
                    var a = t.textStyle || {};
                    e(a.normal), e(a.emphasis);
                  }
                });
              });
          },
          function(t, e, a) {
            function n(t, e, a, n, r) {
              var i = 0,
                o = 0;
              null == n && (n = 1 / 0), null == r && (r = 1 / 0);
              var s = 0;
              e.eachChild(function(l, c) {
                var u,
                  h,
                  d = l.position,
                  f = l.getBoundingRect(),
                  m = e.childAt(c + 1),
                  v = m && m.getBoundingRect();
                if ("horizontal" === t) {
                  var p = f.width + (v ? -v.x + f.x : 0);
                  (u = i + p),
                    u > n || l.newline
                      ? ((i = 0), (u = p), (o += s + a), (s = f.height))
                      : (s = Math.max(s, f.height));
                } else {
                  var g = f.height + (v ? -v.y + f.y : 0);
                  (h = o + g),
                    h > r || l.newline
                      ? ((i += s + a), (o = 0), (h = g), (s = f.width))
                      : (s = Math.max(s, f.width));
                }
                l.newline ||
                  ((d[0] = i),
                  (d[1] = o),
                  "horizontal" === t ? (i = u + a) : (o = h + a));
              });
            }
            function r(t, e, a) {
              var n = e.width,
                r = e.height,
                i = m(t.x, n),
                o = m(t.y, r),
                s = m(t.x2, n),
                l = m(t.y2, r);
              return (
                (isNaN(i) || isNaN(parseFloat(t.x))) && (i = 0),
                (isNaN(s) || isNaN(parseFloat(t.x2))) && (s = n),
                (isNaN(o) || isNaN(parseFloat(t.y))) && (o = 0),
                (isNaN(l) || isNaN(parseFloat(t.y2))) && (l = r),
                (a = v.normalizeCssArray(a || 0)),
                {
                  width: Math.max(s - i - a[1] - a[3], 0),
                  height: Math.max(l - o - a[0] - a[2], 0),
                }
              );
            }
            function i(t, e, a) {
              a = v.normalizeCssArray(a || 0);
              var n = e.width,
                r = e.height,
                i = m(t.left, n),
                o = m(t.top, r),
                s = m(t.right, n),
                l = m(t.bottom, r),
                c = m(t.width, n),
                u = m(t.height, r),
                h = a[2] + a[0],
                f = a[1] + a[3],
                p = t.aspect;
              switch (
                (isNaN(c) && (c = n - s - f - i),
                isNaN(u) && (u = r - l - h - o),
                null != p &&
                  (isNaN(c) &&
                    isNaN(u) &&
                    (p > n / r ? (c = 0.8 * n) : (u = 0.8 * r)),
                  isNaN(c) && (c = p * u),
                  isNaN(u) && (u = c / p)),
                isNaN(i) && (i = n - s - c - f),
                isNaN(o) && (o = r - l - u - h),
                t.left || t.right)
              ) {
                case "center":
                  i = n / 2 - c / 2 - a[3];
                  break;
                case "right":
                  i = n - c - f;
              }
              switch (t.top || t.bottom) {
                case "middle":
                case "center":
                  o = r / 2 - u / 2 - a[0];
                  break;
                case "bottom":
                  o = r - u - h;
              }
              (i = i || 0),
                (o = o || 0),
                isNaN(c) && (c = n - f - i - (s || 0)),
                isNaN(u) && (u = r - h - o - (l || 0));
              var g = new d(i + a[3], o + a[0], c, u);
              return (g.margin = a), g;
            }
            function o(t, e, a, n, r) {
              var o = !r || !r.hv || r.hv[0],
                s = !r || !r.hv || r.hv[1],
                l = (r && r.boundingMode) || "all";
              if (o || s) {
                var c;
                if ("raw" === l)
                  c =
                    "group" === t.type
                      ? new d(0, 0, +e.width || 0, +e.height || 0)
                      : t.getBoundingRect();
                else if (((c = t.getBoundingRect()), t.needLocalTransform())) {
                  var u = t.getLocalTransform();
                  (c = c.clone()), c.applyTransform(u);
                }
                e = i(
                  h.defaults({ width: c.width, height: c.height }, e),
                  a,
                  n
                );
                var f = t.position,
                  m = o ? e.x - c.x : 0,
                  v = s ? e.y - c.y : 0;
                t.attr("position", "raw" === l ? [m, v] : [f[0] + m, f[1] + v]);
              }
            }
            function s(t, e) {
              return (
                null != t[y[e][0]] || (null != t[y[e][1]] && null != t[y[e][2]])
              );
            }
            function l(t, e, a) {
              function n(a, n) {
                var o = {},
                  l = 0,
                  c = {},
                  u = 0;
                if (
                  (p(a, function(e) {
                    c[e] = t[e];
                  }),
                  p(a, function(t) {
                    r(e, t) && (o[t] = c[t] = e[t]),
                      i(o, t) && l++,
                      i(c, t) && u++;
                  }),
                  s[n])
                )
                  return (
                    i(e, a[1])
                      ? (c[a[2]] = null)
                      : i(e, a[2]) && (c[a[1]] = null),
                    c
                  );
                if (2 !== u && l) {
                  if (l >= 2) return o;
                  for (var h = 0; h < a.length; h++) {
                    var d = a[h];
                    if (!r(o, d) && r(t, d)) {
                      o[d] = t[d];
                      break;
                    }
                  }
                  return o;
                }
                return c;
              }
              function r(t, e) {
                return t.hasOwnProperty(e);
              }
              function i(t, e) {
                return null != t[e] && "auto" !== t[e];
              }
              function o(t, e, a) {
                p(t, function(t) {
                  e[t] = a[t];
                });
              }
              !h.isObject(a) && (a = {});
              var s = a.ignoreSize;
              !h.isArray(s) && (s = [s, s]);
              var l = n(y[0], 0),
                c = n(y[1], 1);
              o(y[0], t, l), o(y[1], t, c);
            }
            function c(t) {
              return u({}, t);
            }
            function u(t, e) {
              return (
                e &&
                  t &&
                  p(g, function(a) {
                    e.hasOwnProperty(a) && (t[a] = e[a]);
                  }),
                t
              );
            }
            var h = a(0),
              d = a(3),
              f = a(9),
              m = f.parsePercent,
              v = a(13),
              p = h.each,
              g = ["left", "right", "top", "bottom", "width", "height"],
              y = [
                ["width", "left", "right"],
                ["height", "top", "bottom"],
              ],
              b = n,
              x = h.curry(n, "vertical"),
              w = h.curry(n, "horizontal");
            (e.LOCATION_PARAMS = g),
              (e.HV_NAMES = y),
              (e.box = b),
              (e.vbox = x),
              (e.hbox = w),
              (e.getAvailableSize = r),
              (e.getLayoutRect = i),
              (e.positionElement = o),
              (e.sizeCalculable = s),
              (e.mergeLayoutParam = l),
              (e.getLayoutParams = c),
              (e.copyLayoutParams = u);
          },
          function(t, e, a) {
            var n = a(29),
              r = a(7);
            r.extendSeriesModel({
              type: "series.wordCloud",
              visualColorAccessPath: "textStyle.normal.color",
              optionUpdated: function() {
                var t = this.option;
                t.gridSize = Math.max(Math.floor(t.gridSize), 4);
              },
              getInitialData: function(t, e) {
                var a = n(["value"], t.data),
                  i = new r.List(a, this);
                return i.initData(t.data), i;
              },
              defaultOption: {
                maskImage: null,
                shape: "circle",
                left: "center",
                top: "center",
                width: "70%",
                height: "80%",
                sizeRange: [12, 60],
                rotationRange: [-90, 90],
                rotationStep: 45,
                gridSize: 8,
                drawOutOfBound: !1,
                textStyle: { normal: { fontWeight: "normal" } },
              },
            });
          },
          function(t, e, a) {
            function n(t, e, a) {
              function n(t, e, a) {
                h[e]
                  ? (t.otherDims[e] = a)
                  : ((t.coordDim = e), (t.coordDimIndex = a), p.set(e, !0));
              }
              function o(t, e, a) {
                if (a || null != e.get(t)) {
                  for (var n = 0; null != e.get(t + n); ) n++;
                  t += n;
                }
                return e.set(t, !0), t;
              }
              (e = e || []), (a = a || {}), (t = (t || []).slice());
              var f = (a.dimsDef || []).slice(),
                m = i.createHashMap(a.encodeDef),
                v = i.createHashMap(),
                p = i.createHashMap(),
                g = [],
                y = a.dimCount;
              if (null == y) {
                var b = r(e[0]);
                (y = Math.max(
                  (i.isArray(b) && b.length) || 1,
                  t.length,
                  f.length
                )),
                  l(t, function(t) {
                    var e = t.dimsDef;
                    e && (y = Math.max(y, e.length));
                  });
              }
              for (var x = 0; x < y; x++) {
                var w = c(f[x]) ? { name: f[x] } : f[x] || {},
                  _ = w.name,
                  S = (g[x] = { otherDims: {} });
                null != _ &&
                  null == v.get(_) &&
                  ((S.name = S.tooltipName = _), v.set(_, x)),
                  null != w.type && (S.type = w.type);
              }
              m.each(function(t, e) {
                (t = m.set(e, s(t).slice())),
                  l(t, function(a, r) {
                    c(a) && (a = v.get(a)),
                      null != a && a < y && ((t[r] = a), n(g[a], e, r));
                  });
              });
              var C = 0;
              l(t, function(t, e) {
                var a, r, o;
                c(t)
                  ? ((a = t), (t = {}))
                  : ((a = t.name),
                    (t = i.clone(t)),
                    (r = t.dimsDef),
                    (o = t.otherDims),
                    (t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null));
                var h = s(m.get(a));
                if (!h.length)
                  for (var d = 0; d < ((r && r.length) || 1); d++) {
                    for (; C < g.length && null != g[C].coordDim; ) C++;
                    C < g.length && h.push(C++);
                  }
                l(h, function(e, i) {
                  var s = g[e];
                  n(u(s, t), a, i),
                    null == s.name && r && (s.name = s.tooltipName = r[i]),
                    o && u(s.otherDims, o);
                });
              });
              for (var k = a.extraPrefix || "value", M = 0; M < y; M++) {
                S = g[M] = g[M] || {};
                null == S.coordDim &&
                  ((S.coordDim = o(k, p, a.extraFromZero)),
                  (S.coordDimIndex = 0),
                  (S.isExtraCoord = !0)),
                  null == S.name && (S.name = o(S.coordDim, v)),
                  null == S.type && d(e, M) && (S.type = "ordinal");
              }
              return g;
            }
            function r(t) {
              return i.isArray(t) ? t : i.isObject(t) ? t.value : t;
            }
            var i = a(0),
              o = a(30),
              s = o.normalizeToArray,
              l = i.each,
              c = i.isString,
              u = i.defaults,
              h = { tooltip: 1, label: 1, itemName: 1 },
              d = (n.guessOrdinal = function(t, e) {
                for (var a = 0, n = t.length; a < n; a++) {
                  var o = r(t[a]);
                  if (!i.isArray(o)) return !1;
                  o = o[e];
                  if (null != o && isFinite(o) && "" !== o) return !1;
                  if (c(o) && "-" !== o) return !0;
                }
                return !1;
              }),
              f = n;
            t.exports = f;
          },
          function(t, e, a) {
            function n(t) {
              return t instanceof Array ? t : null == t ? [] : [t];
            }
            function r(t, e) {
              if (t)
                for (
                  var a = (t.emphasis = t.emphasis || {}),
                    n = (t.normal = t.normal || {}),
                    r = 0,
                    i = e.length;
                  r < i;
                  r++
                ) {
                  var o = e[r];
                  !a.hasOwnProperty(o) && n.hasOwnProperty(o) && (a[o] = n[o]);
                }
            }
            function i(t) {
              return t && (null == t.value ? t : t.value);
            }
            function o(t) {
              return C(t) && !(t instanceof Array);
            }
            function s(t, e) {
              var a = e && e.type;
              return "ordinal" === a
                ? t
                : ("time" === a &&
                    "number" != typeof t &&
                    null != t &&
                    "-" !== t &&
                    (t = +w.parseDate(t)),
                  null == t || "" === t ? NaN : +t);
            }
            function l(t, e) {
              var a = new _();
              return (
                b.mixin(a, M),
                (a.seriesIndex = e.seriesIndex),
                (a.name = e.name || ""),
                (a.mainType = e.mainType),
                (a.subType = e.subType),
                (a.getData = function() {
                  return t;
                }),
                a
              );
            }
            function c(t, e) {
              e = (e || []).slice();
              var a = b.map(t || [], function(t, e) {
                return { exist: t };
              });
              return (
                S(e, function(t, n) {
                  if (C(t)) {
                    for (var r = 0; r < a.length; r++)
                      if (
                        !a[r].option &&
                        null != t.id &&
                        a[r].exist.id === t.id + ""
                      )
                        return (a[r].option = t), void (e[n] = null);
                    for (r = 0; r < a.length; r++) {
                      var i = a[r].exist;
                      if (
                        !(
                          a[r].option ||
                          (null != i.id && null != t.id) ||
                          null == t.name ||
                          h(t) ||
                          h(i) ||
                          i.name !== t.name + ""
                        )
                      )
                        return (a[r].option = t), void (e[n] = null);
                    }
                  }
                }),
                S(e, function(t, e) {
                  if (C(t)) {
                    for (var n = 0; n < a.length; n++) {
                      var r = a[n].exist;
                      if (!a[n].option && !h(r) && null == t.id) {
                        a[n].option = t;
                        break;
                      }
                    }
                    n >= a.length && a.push({ option: t });
                  }
                }),
                a
              );
            }
            function u(t) {
              var e = b.createHashMap();
              S(t, function(t, a) {
                var n = t.exist;
                n && e.set(n.id, t);
              }),
                S(t, function(t, a) {
                  var n = t.option;
                  b.assert(
                    !n || null == n.id || !e.get(n.id) || e.get(n.id) === t,
                    "id duplicates: " + (n && n.id)
                  ),
                    n && null != n.id && e.set(n.id, t),
                    !t.keyInfo && (t.keyInfo = {});
                }),
                S(t, function(t, a) {
                  var n = t.exist,
                    r = t.option,
                    i = t.keyInfo;
                  if (C(r)) {
                    if (
                      ((i.name =
                        null != r.name ? r.name + "" : n ? n.name : "\0-"),
                      n)
                    )
                      i.id = n.id;
                    else if (null != r.id) i.id = r.id + "";
                    else {
                      var o = 0;
                      do {
                        i.id = "\0" + i.name + "\0" + o++;
                      } while (e.get(i.id));
                    }
                    e.set(i.id, t);
                  }
                });
            }
            function h(t) {
              return C(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0");
            }
            function d(t, e) {
              function a(t, e, a) {
                for (var r = 0, i = t.length; r < i; r++)
                  for (
                    var o = t[r].seriesId,
                      s = n(t[r].dataIndex),
                      l = a && a[o],
                      c = 0,
                      u = s.length;
                    c < u;
                    c++
                  ) {
                    var h = s[c];
                    l && l[h] ? (l[h] = null) : ((e[o] || (e[o] = {}))[h] = 1);
                  }
              }
              function r(t, e) {
                var a = [];
                for (var n in t)
                  if (t.hasOwnProperty(n) && null != t[n])
                    if (e) a.push(+n);
                    else {
                      var i = r(t[n], !0);
                      i.length && a.push({ seriesId: n, dataIndex: i });
                    }
                return a;
              }
              var i = {},
                o = {};
              return a(t || [], i), a(e || [], o, i), [r(i), r(o)];
            }
            function f(t, e) {
              return null != e.dataIndexInside
                ? e.dataIndexInside
                : null != e.dataIndex
                ? b.isArray(e.dataIndex)
                  ? b.map(e.dataIndex, function(e) {
                      return t.indexOfRawIndex(e);
                    })
                  : t.indexOfRawIndex(e.dataIndex)
                : null != e.name
                ? b.isArray(e.name)
                  ? b.map(e.name, function(e) {
                      return t.indexOfName(e);
                    })
                  : t.indexOfName(e.name)
                : void 0;
            }
            function m(t, e, a) {
              if (b.isString(e)) {
                var n = {};
                (n[e + "Index"] = 0), (e = n);
              }
              var r = a && a.defaultMainType;
              !r ||
                y(e, r + "Index") ||
                y(e, r + "Id") ||
                y(e, r + "Name") ||
                (e[r + "Index"] = 0);
              var i = {};
              return (
                S(e, function(n, r) {
                  n = e[r];
                  if ("dataIndex" !== r && "dataIndexInside" !== r) {
                    var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
                      s = o[1],
                      l = (o[2] || "").toLowerCase();
                    if (
                      !(
                        !s ||
                        !l ||
                        null == n ||
                        ("index" === l && "none" === n) ||
                        (a &&
                          a.includeMainTypes &&
                          b.indexOf(a.includeMainTypes, s) < 0)
                      )
                    ) {
                      var c = { mainType: s };
                      ("index" === l && "all" === n) || (c[l] = n);
                      var u = t.queryComponents(c);
                      (i[s + "Models"] = u), (i[s + "Model"] = u[0]);
                    }
                  } else i[r] = n;
                }),
                i
              );
            }
            function v(t, e) {
              var a = t.dimensions;
              e = t.getDimension(e);
              for (var n = 0; n < a.length; n++) {
                var r = t.getDimensionInfo(a[n]);
                if (r.name === e) return r.coordDim;
              }
            }
            function p(t, e) {
              var a = [];
              return (
                S(t.dimensions, function(n) {
                  var r = t.getDimensionInfo(n);
                  r.coordDim === e && (a[r.coordDimIndex] = r.name);
                }),
                a
              );
            }
            function g(t, e) {
              var a = [];
              return (
                S(t.dimensions, function(n) {
                  var r = t.getDimensionInfo(n),
                    i = r.otherDims,
                    o = i[e];
                  null != o && !1 !== o && (a[o] = r.name);
                }),
                a
              );
            }
            function y(t, e) {
              return t && t.hasOwnProperty(e);
            }
            var b = a(0),
              x = a(13),
              w = a(9),
              _ = a(31),
              S = b.each,
              C = b.isObject,
              k = [
                "fontStyle",
                "fontWeight",
                "fontSize",
                "fontFamily",
                "rich",
                "tag",
                "color",
                "textBorderColor",
                "textBorderWidth",
                "width",
                "height",
                "lineHeight",
                "align",
                "verticalAlign",
                "baseline",
                "shadowColor",
                "shadowBlur",
                "shadowOffsetX",
                "shadowOffsetY",
                "textShadowColor",
                "textShadowBlur",
                "textShadowOffsetX",
                "textShadowOffsetY",
                "backgroundColor",
                "borderColor",
                "borderWidth",
                "borderRadius",
                "padding",
              ],
              M = {
                getDataParams: function(t, e) {
                  var a = this.getData(e),
                    n = this.getRawValue(t, e),
                    r = a.getRawIndex(t),
                    i = a.getName(t, !0),
                    o = a.getRawDataItem(t),
                    s = a.getItemVisual(t, "color");
                  return {
                    componentType: this.mainType,
                    componentSubType: this.subType,
                    seriesType:
                      "series" === this.mainType ? this.subType : null,
                    seriesIndex: this.seriesIndex,
                    seriesId: this.id,
                    seriesName: this.name,
                    name: i,
                    dataIndex: r,
                    data: o,
                    dataType: e,
                    value: n,
                    color: s,
                    marker: x.getTooltipMarker(s),
                    $vars: ["seriesName", "name", "value"],
                  };
                },
                getFormattedLabel: function(t, e, a, n, r) {
                  e = e || "normal";
                  var i = this.getData(a),
                    o = i.getItemModel(t),
                    s = this.getDataParams(t, a);
                  null != n &&
                    s.value instanceof Array &&
                    (s.value = s.value[n]);
                  var l = o.get([r || "label", e, "formatter"]);
                  return "function" == typeof l
                    ? ((s.status = e), l(s))
                    : "string" == typeof l
                    ? x.formatTpl(l, s)
                    : void 0;
                },
                getRawValue: function(t, e) {
                  var a = this.getData(e),
                    n = a.getRawDataItem(t);
                  if (null != n)
                    return !C(n) || n instanceof Array ? n : n.value;
                },
                formatTooltip: b.noop,
              },
              T = (function() {
                var t = 0;
                return function() {
                  var e = "\0__ec_prop_getter_" + t++;
                  return function(t) {
                    return t[e] || (t[e] = {});
                  };
                };
              })();
            (e.normalizeToArray = n),
              (e.defaultEmphasis = r),
              (e.TEXT_STYLE_OPTIONS = k),
              (e.getDataItemValue = i),
              (e.isDataItemOption = o),
              (e.converDataValue = s),
              (e.createDataFormatModel = l),
              (e.dataFormatMixin = M),
              (e.mappingToExists = c),
              (e.makeIdAndName = u),
              (e.isIdInner = h),
              (e.compressBatches = d),
              (e.queryDataIndex = f),
              (e.makeGetter = T),
              (e.parseFinder = m),
              (e.dataDimToCoordDim = v),
              (e.coordDimToDataDim = p),
              (e.otherDimToDataDim = g);
          },
          function(t, e, a) {
            function n(t, e, a) {
              (this.parentModel = e), (this.ecModel = a), (this.option = t);
            }
            function r(t, e, a) {
              for (
                var n = 0;
                n < e.length &&
                (!e[n] || null != (t = t && "object" == o(t) ? t[e[n]] : null));
                n++
              );
              return null == t && a && (t = a.get(e)), t;
            }
            function i(t, e) {
              var a = c.get(t, "getParent");
              return a ? a.call(t, e) : t.parentModel;
            }
            var s = a(0),
              l = a(15),
              c = a(32),
              u = a(35),
              h = a(36),
              d = a(37),
              f = a(76),
              m = s.mixin;
            (n.prototype = {
              constructor: n,
              init: null,
              mergeOption: function(t) {
                s.merge(this.option, t, !0);
              },
              get: function(t, e) {
                return null == t
                  ? this.option
                  : r(this.option, this.parsePath(t), !e && i(this, t));
              },
              getShallow: function(t, e) {
                var a = this.option,
                  n = null == a ? a : a[t],
                  r = !e && i(this, t);
                return null == n && r && (n = r.getShallow(t)), n;
              },
              getModel: function(t, e) {
                var a,
                  o =
                    null == t
                      ? this.option
                      : r(this.option, (t = this.parsePath(t)));
                return (
                  (e = e || ((a = i(this, t)) && a.getModel(t))),
                  new n(o, e, this.ecModel)
                );
              },
              isEmpty: function() {
                return null == this.option;
              },
              restoreData: function() {},
              clone: function() {
                return new (0, this.constructor)(s.clone(this.option));
              },
              setReadOnly: function(t) {
                c.setReadOnly(this, t);
              },
              parsePath: function(t) {
                return "string" == typeof t && (t = t.split(".")), t;
              },
              customizeGetParent: function(t) {
                c.set(this, "getParent", t);
              },
              isAnimationEnabled: function() {
                if (!l.node) {
                  if (null != this.option.animation)
                    return !!this.option.animation;
                  if (this.parentModel)
                    return this.parentModel.isAnimationEnabled();
                }
              },
            }),
              c.enableClassExtend(n),
              m(n, u),
              m(n, h),
              m(n, d),
              m(n, f);
            var v = n;
            t.exports = v;
          },
          function(t, e, a) {
            function n(t, e, a) {
              return (t[g + e] = a);
            }
            function r(t, e) {
              return t[g + e];
            }
            function i(t, e) {
              return t.hasOwnProperty(g + e);
            }
            function o(t) {
              var e = { main: "", sub: "" };
              return (
                t &&
                  ((t = t.split(v)),
                  (e.main = t[0] || ""),
                  (e.sub = t[1] || "")),
                e
              );
            }
            function s(t) {
              m.assert(
                /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),
                'componentType "' + t + '" illegal'
              );
            }
            function l(t, e) {
              (t.$constructor = t),
                (t.extend = function(t) {
                  var e = this,
                    a = function() {
                      t.$constructor
                        ? t.$constructor.apply(this, arguments)
                        : e.apply(this, arguments);
                    };
                  return (
                    m.extend(a.prototype, t),
                    (a.extend = this.extend),
                    (a.superCall = c),
                    (a.superApply = u),
                    m.inherits(a, this),
                    (a.superClass = e),
                    a
                  );
                });
            }
            function c(t, e) {
              var a = m.slice(arguments, 2);
              return this.superClass.prototype[e].apply(t, a);
            }
            function u(t, e, a) {
              return this.superClass.prototype[e].apply(t, a);
            }
            function h(t, e) {
              function a(t) {
                var e = n[t.main];
                return (e && e[p]) || ((e = n[t.main] = {}), (e[p] = !0)), e;
              }
              e = e || {};
              var n = {};
              if (
                ((t.registerClass = function(t, e) {
                  if (e)
                    if ((s(e), (e = o(e)), e.sub)) {
                      if (e.sub !== p) {
                        var r = a(e);
                        r[e.sub] = t;
                      }
                    } else n[e.main] = t;
                  return t;
                }),
                (t.getClass = function(t, e, a) {
                  var r = n[t];
                  if ((r && r[p] && (r = e ? r[e] : null), a && !r))
                    throw new Error(
                      e
                        ? "Component " +
                          t +
                          "." +
                          (e || "") +
                          " not exists. Load it first."
                        : t + ".type should be specified."
                    );
                  return r;
                }),
                (t.getClassesByMainType = function(t) {
                  t = o(t);
                  var e = [],
                    a = n[t.main];
                  return (
                    a && a[p]
                      ? m.each(a, function(t, a) {
                          a !== p && e.push(t);
                        })
                      : e.push(a),
                    e
                  );
                }),
                (t.hasClass = function(t) {
                  return (t = o(t)), !!n[t.main];
                }),
                (t.getAllClassMainTypes = function() {
                  var t = [];
                  return (
                    m.each(n, function(e, a) {
                      t.push(a);
                    }),
                    t
                  );
                }),
                (t.hasSubTypes = function(t) {
                  t = o(t);
                  var e = n[t.main];
                  return e && e[p];
                }),
                (t.parseClassType = o),
                e.registerWhenExtend)
              ) {
                var r = t.extend;
                r &&
                  (t.extend = function(e) {
                    var a = r.call(this, e);
                    return t.registerClass(a, e.type);
                  });
              }
              return t;
            }
            function d(t, e) {}
            var f = a(33),
              m = (f.__DEV__, a(0)),
              v = ".",
              p = "___EC__COMPONENT__CONTAINER___",
              g = "\0ec_\0";
            (e.set = n),
              (e.get = r),
              (e.hasOwn = i),
              (e.parseClassType = o),
              (e.enableClassExtend = l),
              (e.enableClassManagement = h),
              (e.setReadOnly = d);
          },
          function(t, e, a) {
            (function(t) {
              var a;
              "undefined" != typeof window
                ? (a = window.__DEV__)
                : void 0 !== t && (a = t.__DEV__),
                void 0 === a && (a = !0);
              var n = a;
              e.__DEV__ = n;
            }.call(e, a(34)));
          },
          function(t, e) {
            var a;
            a = (function() {
              return this;
            })();
            try {
              a = a || Function("return this")() || (0, eval)("this");
            } catch (t) {
              "object" ==
                ("undefined" === typeof window ? "undefined" : o(window)) &&
                (a = window);
            }
            t.exports = a;
          },
          function(t, e, a) {
            var n = a(11),
              r = n([
                ["lineWidth", "width"],
                ["stroke", "color"],
                ["opacity"],
                ["shadowBlur"],
                ["shadowOffsetX"],
                ["shadowOffsetY"],
                ["shadowColor"],
              ]),
              i = {
                getLineStyle: function(t) {
                  var e = r(this, t),
                    a = this.getLineDash(e.lineWidth);
                  return a && (e.lineDash = a), e;
                },
                getLineDash: function(t) {
                  null == t && (t = 1);
                  var e = this.get("type"),
                    a = Math.max(t, 2),
                    n = 4 * t;
                  return "solid" === e || null == e
                    ? null
                    : "dashed" === e
                    ? [n, n]
                    : [a, a];
                },
              };
            t.exports = i;
          },
          function(t, e, a) {
            var n = a(11),
              r = n([
                ["fill", "color"],
                ["shadowBlur"],
                ["shadowOffsetX"],
                ["shadowOffsetY"],
                ["opacity"],
                ["shadowColor"],
              ]),
              i = {
                getAreaStyle: function(t, e) {
                  return r(this, t, e);
                },
              };
            t.exports = i;
          },
          function(t, e, a) {
            var n = a(5),
              r = a(38),
              i = ["textStyle", "color"],
              o = {
                getTextColor: function(t) {
                  var e = this.ecModel;
                  return (
                    this.getShallow("color") || (!t && e ? e.get(i) : null)
                  );
                },
                getFont: function() {
                  return r.getFont(
                    {
                      fontStyle: this.getShallow("fontStyle"),
                      fontWeight: this.getShallow("fontWeight"),
                      fontSize: this.getShallow("fontSize"),
                      fontFamily: this.getShallow("fontFamily"),
                    },
                    this.ecModel
                  );
                },
                getTextRect: function(t) {
                  return n.getBoundingRect(
                    t,
                    this.getFont(),
                    this.getShallow("align"),
                    this.getShallow("verticalAlign") ||
                      this.getShallow("baseline"),
                    this.getShallow("padding"),
                    this.getShallow("rich"),
                    this.getShallow("truncateText")
                  );
                },
              };
            t.exports = o;
          },
          function(t, e, a) {
            function n(t) {
              return Z.extend(t);
            }
            function r(t, e) {
              return V.extendFromString(t, e);
            }
            function i(t, e, a, n) {
              var r = V.createFromString(t, e),
                i = r.getBoundingRect();
              return a && ("center" === n && (a = s(a, i)), l(r, a)), r;
            }
            function o(t, e, a) {
              var n = new J({
                style: {
                  image: t,
                  x: e.x,
                  y: e.y,
                  width: e.width,
                  height: e.height,
                },
                onload: function(t) {
                  if ("center" === a) {
                    var r = { width: t.width, height: t.height };
                    n.setStyle(s(e, r));
                  }
                },
              });
              return n;
            }
            function s(t, e) {
              var a,
                n = e.width / e.height,
                r = t.height * n;
              return (
                r <= t.width ? (a = t.height) : ((r = t.width), (a = r / n)),
                {
                  x: t.x + t.width / 2 - r / 2,
                  y: t.y + t.height / 2 - a / 2,
                  width: r,
                  height: a,
                }
              );
            }
            function l(t, e) {
              if (t.applyTransform) {
                var a = t.getBoundingRect(),
                  n = a.calculateTransform(e);
                t.applyTransform(n);
              }
            }
            function c(t) {
              var e = t.shape,
                a = t.style.lineWidth;
              return (
                mt(2 * e.x1) === mt(2 * e.x2) && (e.x1 = e.x2 = h(e.x1, a, !0)),
                mt(2 * e.y1) === mt(2 * e.y2) && (e.y1 = e.y2 = h(e.y1, a, !0)),
                t
              );
            }
            function u(t) {
              var e = t.shape,
                a = t.style.lineWidth,
                n = e.x,
                r = e.y,
                i = e.width,
                o = e.height;
              return (
                (e.x = h(e.x, a, !0)),
                (e.y = h(e.y, a, !0)),
                (e.width = Math.max(h(n + i, a, !1) - e.x, 0 === i ? 0 : 1)),
                (e.height = Math.max(h(r + o, a, !1) - e.y, 0 === o ? 0 : 1)),
                t
              );
            }
            function h(t, e, a) {
              var n = mt(2 * t);
              return (n + mt(e)) % 2 == 0 ? n / 2 : (n + (a ? 1 : -1)) / 2;
            }
            function d(t) {
              return null != t && "none" != t;
            }
            function f(t) {
              return "string" == typeof t ? Y.lift(t, -0.1) : t;
            }
            function m(t) {
              if (t.__hoverStlDirty) {
                var e = t.style.stroke,
                  a = t.style.fill,
                  n = t.__hoverStl;
                (n.fill = n.fill || (d(a) ? f(a) : null)),
                  (n.stroke = n.stroke || (d(e) ? f(e) : null));
                var r = {};
                for (var i in n) null != n[i] && (r[i] = t.style[i]);
                (t.__normalStl = r), (t.__hoverStlDirty = !1);
              }
            }
            function v(t) {
              if (!t.__isHover) {
                if ((m(t), t.useHoverLayer))
                  t.__zr && t.__zr.addHover(t, t.__hoverStl);
                else {
                  var e = t.style,
                    a = e.insideRollbackOpt;
                  a && P(e),
                    e.extendFrom(t.__hoverStl),
                    a &&
                      (I(e, e.insideOriginalTextPosition, a),
                      null == e.textFill && (e.textFill = a.autoColor)),
                    t.dirty(!1),
                    (t.z2 += 1);
                }
                t.__isHover = !0;
              }
            }
            function p(t) {
              if (t.__isHover) {
                var e = t.__normalStl;
                t.useHoverLayer
                  ? t.__zr && t.__zr.removeHover(t)
                  : (e && t.setStyle(e), (t.z2 -= 1)),
                  (t.__isHover = !1);
              }
            }
            function g(t) {
              "group" === t.type
                ? t.traverse(function(t) {
                    "group" !== t.type && v(t);
                  })
                : v(t);
            }
            function y(t) {
              "group" === t.type
                ? t.traverse(function(t) {
                    "group" !== t.type && p(t);
                  })
                : p(t);
            }
            function b(t, e) {
              (t.__hoverStl = t.hoverStyle || e || {}),
                (t.__hoverStlDirty = !0),
                t.__isHover && m(t);
            }
            function x(t) {
              (this.__hoverSilentOnTouch && t.zrByTouch) ||
                (!this.__isEmphasis && g(this));
            }
            function w(t) {
              (this.__hoverSilentOnTouch && t.zrByTouch) ||
                (!this.__isEmphasis && y(this));
            }
            function _() {
              (this.__isEmphasis = !0), g(this);
            }
            function S() {
              (this.__isEmphasis = !1), y(this);
            }
            function C(t, e, a) {
              (t.__hoverSilentOnTouch = a && a.hoverSilentOnTouch),
                "group" === t.type
                  ? t.traverse(function(t) {
                      "group" !== t.type && b(t, e);
                    })
                  : b(t, e),
                t.on("mouseover", x).on("mouseout", w),
                t.on("emphasis", _).on("normal", S);
            }
            function k(t, e, a, n, r, i, o) {
              r = r || gt;
              var s = r.labelFetcher,
                l = r.labelDataIndex,
                c = r.labelDimIndex,
                u = a.getShallow("show"),
                h = n.getShallow("show"),
                d =
                  u || h
                    ? G.retrieve2(
                        s ? s.getFormattedLabel(l, "normal", null, c) : null,
                        r.defaultText
                      )
                    : null,
                f = u ? d : null,
                m = h
                  ? G.retrieve2(
                      s ? s.getFormattedLabel(l, "emphasis", null, c) : null,
                      d
                    )
                  : null;
              (null == f && null == m) || (M(t, a, i, r), M(e, n, o, r, !0)),
                (t.text = f),
                (e.text = m);
            }
            function M(t, e, a, n, r) {
              return (
                A(t, e, n, r),
                a && G.extend(t, a),
                t.host && t.host.dirty && t.host.dirty(!1),
                t
              );
            }
            function T(t, e, a) {
              var n,
                r = { isRectText: !0 };
              !1 === a ? (n = !0) : (r.autoColor = a),
                A(t, e, r, n),
                t.host && t.host.dirty && t.host.dirty(!1);
            }
            function A(t, e, a, n) {
              if (((a = a || gt), a.isRectText)) {
                var r = e.getShallow("position") || (n ? null : "inside");
                "outside" === r && (r = "top"),
                  (t.textPosition = r),
                  (t.textOffset = e.getShallow("offset"));
                var i = e.getShallow("rotate");
                null != i && (i *= Math.PI / 180),
                  (t.textRotation = i),
                  (t.textDistance = G.retrieve2(
                    e.getShallow("distance"),
                    n ? null : 5
                  ));
              }
              var o,
                s = e.ecModel,
                l = s && s.option.textStyle,
                c = L(e);
              if (c)
                for (var u in ((o = {}), c))
                  if (c.hasOwnProperty(u)) {
                    var h = e.getModel(["rich", u]);
                    O((o[u] = {}), h, l, a, n);
                  }
              return (
                (t.rich = o),
                O(t, e, l, a, n, !0),
                a.forceRich && !a.textStyle && (a.textStyle = {}),
                t
              );
            }
            function L(t) {
              for (var e; t && t !== t.ecModel; ) {
                var a = (t.option || gt).rich;
                if (a)
                  for (var n in ((e = e || {}), a))
                    a.hasOwnProperty(n) && (e[n] = 1);
                t = t.parentModel;
              }
              return e;
            }
            function O(t, e, a, n, r, i) {
              if (
                ((a = (!r && a) || gt),
                (t.textFill = E(e.getShallow("color"), n) || a.color),
                (t.textStroke =
                  E(e.getShallow("textBorderColor"), n) || a.textBorderColor),
                (t.textStrokeWidth = G.retrieve2(
                  e.getShallow("textBorderWidth"),
                  a.textBorderWidth
                )),
                !r)
              ) {
                if (i) {
                  var o = t.textPosition;
                  (t.insideRollback = I(t, o, n)),
                    (t.insideOriginalTextPosition = o),
                    (t.insideRollbackOpt = n);
                }
                null == t.textFill && (t.textFill = n.autoColor);
              }
              (t.fontStyle = e.getShallow("fontStyle") || a.fontStyle),
                (t.fontWeight = e.getShallow("fontWeight") || a.fontWeight),
                (t.fontSize = e.getShallow("fontSize") || a.fontSize),
                (t.fontFamily = e.getShallow("fontFamily") || a.fontFamily),
                (t.textAlign = e.getShallow("align")),
                (t.textVerticalAlign =
                  e.getShallow("verticalAlign") || e.getShallow("baseline")),
                (t.textLineHeight = e.getShallow("lineHeight")),
                (t.textWidth = e.getShallow("width")),
                (t.textHeight = e.getShallow("height")),
                (t.textTag = e.getShallow("tag")),
                (i && n.disableBox) ||
                  ((t.textBackgroundColor = E(
                    e.getShallow("backgroundColor"),
                    n
                  )),
                  (t.textPadding = e.getShallow("padding")),
                  (t.textBorderColor = E(e.getShallow("borderColor"), n)),
                  (t.textBorderWidth = e.getShallow("borderWidth")),
                  (t.textBorderRadius = e.getShallow("borderRadius")),
                  (t.textBoxShadowColor = e.getShallow("shadowColor")),
                  (t.textBoxShadowBlur = e.getShallow("shadowBlur")),
                  (t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX")),
                  (t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY"))),
                (t.textShadowColor =
                  e.getShallow("textShadowColor") || a.textShadowColor),
                (t.textShadowBlur =
                  e.getShallow("textShadowBlur") || a.textShadowBlur),
                (t.textShadowOffsetX =
                  e.getShallow("textShadowOffsetX") || a.textShadowOffsetX),
                (t.textShadowOffsetY =
                  e.getShallow("textShadowOffsetY") || a.textShadowOffsetY);
            }
            function E(t, e) {
              return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
            }
            function I(t, e, a) {
              var n,
                r = a.useInsideStyle;
              return (
                null == t.textFill &&
                  !1 !== r &&
                  (!0 === r ||
                    (a.isRectText &&
                      e &&
                      "string" == typeof e &&
                      e.indexOf("inside") >= 0)) &&
                  ((n = {
                    textFill: null,
                    textStroke: t.textStroke,
                    textStrokeWidth: t.textStrokeWidth,
                  }),
                  (t.textFill = "#fff"),
                  null == t.textStroke &&
                    ((t.textStroke = a.autoColor),
                    null == t.textStrokeWidth && (t.textStrokeWidth = 2))),
                n
              );
            }
            function P(t) {
              var e = t.insideRollback;
              e &&
                ((t.textFill = e.textFill),
                (t.textStroke = e.textStroke),
                (t.textStrokeWidth = e.textStrokeWidth));
            }
            function D(t, e) {
              var a = e || e.getModel("textStyle");
              return [
                t.fontStyle || (a && a.getShallow("fontStyle")) || "",
                t.fontWeight || (a && a.getShallow("fontWeight")) || "",
                (t.fontSize || (a && a.getShallow("fontSize")) || 12) + "px",
                t.fontFamily ||
                  (a && a.getShallow("fontFamily")) ||
                  "sans-serif",
              ].join(" ");
            }
            function z(t, e, a, n, r, i) {
              if (
                ("function" == typeof r && ((i = r), (r = null)),
                n && n.isAnimationEnabled())
              ) {
                var o = t ? "Update" : "",
                  s = n.getShallow("animationDuration" + o),
                  l = n.getShallow("animationEasing" + o),
                  c = n.getShallow("animationDelay" + o);
                "function" == typeof c &&
                  (c = c(
                    r,
                    n.getAnimationDelayParams
                      ? n.getAnimationDelayParams(e, r)
                      : null
                  )),
                  "function" == typeof s && (s = s(r)),
                  s > 0
                    ? e.animateTo(a, s, c || 0, l, i, !!i)
                    : (e.stopAnimation(), e.attr(a), i && i());
              } else e.stopAnimation(), e.attr(a), i && i();
            }
            function B(t, e, a, n, r) {
              z(!0, t, e, a, n, r);
            }
            function W(t, e, a, n, r) {
              z(!1, t, e, a, n, r);
            }
            function R(t, e) {
              for (var a = X.identity([]); t && t !== e; )
                X.mul(a, t.getLocalTransform(), a), (t = t.parent);
              return a;
            }
            function F(t, e, a) {
              return (
                e && !G.isArrayLike(e) && (e = Q.getLocalTransform(e)),
                a && (e = X.invert([], e)),
                U.applyTransform([], t, e)
              );
            }
            function N(t, e, a) {
              var n =
                  0 === e[4] || 0 === e[5] || 0 === e[0]
                    ? 1
                    : Math.abs((2 * e[4]) / e[0]),
                r =
                  0 === e[4] || 0 === e[5] || 0 === e[2]
                    ? 1
                    : Math.abs((2 * e[4]) / e[2]),
                i = [
                  "left" === t ? -n : "right" === t ? n : 0,
                  "top" === t ? -r : "bottom" === t ? r : 0,
                ];
              return (
                (i = F(i, e, a)),
                Math.abs(i[0]) > Math.abs(i[1])
                  ? i[0] > 0
                    ? "right"
                    : "left"
                  : i[1] > 0
                  ? "bottom"
                  : "top"
              );
            }
            function j(t, e, a, n) {
              function r(t) {
                var e = { position: U.clone(t.position), rotation: t.rotation };
                return t.shape && (e.shape = G.extend({}, t.shape)), e;
              }
              if (t && e) {
                var i = (function(t) {
                  var e = {};
                  return (
                    t.traverse(function(t) {
                      !t.isGroup && t.anid && (e[t.anid] = t);
                    }),
                    e
                  );
                })(t);
                e.traverse(function(t) {
                  if (!t.isGroup && t.anid) {
                    var e = i[t.anid];
                    if (e) {
                      var n = r(t);
                      t.attr(r(e)), B(t, n, a, t.dataIndex);
                    }
                  }
                });
              }
            }
            function $(t, e) {
              return G.map(t, function(t) {
                var a = t[0];
                (a = vt(a, e.x)), (a = pt(a, e.x + e.width));
                var n = t[1];
                return (n = vt(n, e.y)), (n = pt(n, e.y + e.height)), [a, n];
              });
            }
            function q(t, e) {
              var a = vt(t.x, e.x),
                n = pt(t.x + t.width, e.x + e.width),
                r = vt(t.y, e.y),
                i = pt(t.y + t.height, e.y + e.height);
              if (n >= a && i >= r)
                return { x: a, y: r, width: n - a, height: i - r };
            }
            function H(t, e, a) {
              e = G.extend({ rectHover: !0 }, e);
              var n = (e.style = { strokeNoScale: !0 });
              if (((a = a || { x: -1, y: -1, width: 2, height: 2 }), t))
                return 0 === t.indexOf("image://")
                  ? ((n.image = t.slice(8)), G.defaults(n, a), new J(e))
                  : i(t.replace("path://", ""), e, a, "center");
            }
            var G = a(0),
              V = a(39),
              Y = a(18),
              X = a(8),
              U = a(2),
              Z = a(1),
              Q = a(17),
              J = a(58);
            e.Image = J;
            var K = a(59);
            e.Group = K;
            var tt = a(60);
            e.Text = tt;
            var et = a(61);
            e.Circle = et;
            var at = a(62);
            e.Sector = at;
            var nt = a(64);
            e.Ring = nt;
            var rt = a(65);
            e.Polygon = rt;
            var it = a(68);
            e.Polyline = it;
            var ot = a(69);
            e.Rect = ot;
            var st = a(70);
            e.Line = st;
            var lt = a(71);
            e.BezierCurve = lt;
            var ct = a(72);
            e.Arc = ct;
            var ut = a(73);
            e.CompoundPath = ut;
            var ht = a(74);
            e.LinearGradient = ht;
            var dt = a(75);
            e.RadialGradient = dt;
            var ft = a(3);
            e.BoundingRect = ft;
            var mt = Math.round,
              vt = Math.max,
              pt = Math.min,
              gt = {},
              yt = V.mergePath;
            (e.extendShape = n),
              (e.extendPath = r),
              (e.makePath = i),
              (e.makeImage = o),
              (e.mergePath = yt),
              (e.resizePath = l),
              (e.subPixelOptimizeLine = c),
              (e.subPixelOptimizeRect = u),
              (e.subPixelOptimize = h),
              (e.setHoverStyle = C),
              (e.setLabelStyle = k),
              (e.setTextStyle = M),
              (e.setText = T),
              (e.getFont = D),
              (e.updateProps = B),
              (e.initProps = W),
              (e.getTransform = R),
              (e.applyTransform = F),
              (e.transformDirection = N),
              (e.groupTransition = j),
              (e.clipPointsByRect = $),
              (e.clipRectByRect = q),
              (e.createIcon = H);
          },
          function(t, e, a) {
            function n(t, e, a, n, r, i, o, s, l, c, u) {
              var h = l * (p / 180),
                d = (v(h) * (t - a)) / 2 + (m(h) * (e - n)) / 2,
                g = (-1 * m(h) * (t - a)) / 2 + (v(h) * (e - n)) / 2,
                x = (d * d) / (o * o) + (g * g) / (s * s);
              x > 1 && ((o *= f(x)), (s *= f(x)));
              var w =
                  (r === i ? -1 : 1) *
                    f(
                      (o * o * (s * s) - o * o * (g * g) - s * s * (d * d)) /
                        (o * o * (g * g) + s * s * (d * d))
                    ) || 0,
                _ = (w * o * g) / s,
                S = (w * -s * d) / o,
                C = (t + a) / 2 + v(h) * _ - m(h) * S,
                k = (e + n) / 2 + m(h) * _ + v(h) * S,
                M = b([1, 0], [(d - _) / o, (g - S) / s]),
                T = [(d - _) / o, (g - S) / s],
                A = [(-1 * d - _) / o, (-1 * g - S) / s],
                L = b(T, A);
              y(T, A) <= -1 && (L = p),
                y(T, A) >= 1 && (L = 0),
                0 === i && L > 0 && (L -= 2 * p),
                1 === i && L < 0 && (L += 2 * p),
                u.addData(c, C, k, o, s, M, L, h, i);
            }
            function r(t) {
              if (!t) return [];
              var e,
                a = t
                  .replace(/-/g, " -")
                  .replace(/  /g, " ")
                  .replace(/ /g, ",")
                  .replace(/,,/g, ",");
              for (e = 0; e < d.length; e++)
                a = a.replace(new RegExp(d[e], "g"), "|" + d[e]);
              var r,
                i = a.split("|"),
                o = 0,
                s = 0,
                l = new u(),
                c = u.CMD;
              for (e = 1; e < i.length; e++) {
                var h,
                  f = i[e],
                  m = f.charAt(0),
                  v = 0,
                  p = f
                    .slice(1)
                    .replace(/e,-/g, "e-")
                    .split(",");
                p.length > 0 && "" === p[0] && p.shift();
                for (var g = 0; g < p.length; g++) p[g] = parseFloat(p[g]);
                for (; v < p.length && !isNaN(p[v]) && !isNaN(p[0]); ) {
                  var y,
                    b,
                    x,
                    w,
                    _,
                    S,
                    C,
                    k = o,
                    M = s;
                  switch (m) {
                    case "l":
                      (o += p[v++]),
                        (s += p[v++]),
                        (h = c.L),
                        l.addData(h, o, s);
                      break;
                    case "L":
                      (o = p[v++]), (s = p[v++]), (h = c.L), l.addData(h, o, s);
                      break;
                    case "m":
                      (o += p[v++]),
                        (s += p[v++]),
                        (h = c.M),
                        l.addData(h, o, s),
                        (m = "l");
                      break;
                    case "M":
                      (o = p[v++]),
                        (s = p[v++]),
                        (h = c.M),
                        l.addData(h, o, s),
                        (m = "L");
                      break;
                    case "h":
                      (o += p[v++]), (h = c.L), l.addData(h, o, s);
                      break;
                    case "H":
                      (o = p[v++]), (h = c.L), l.addData(h, o, s);
                      break;
                    case "v":
                      (s += p[v++]), (h = c.L), l.addData(h, o, s);
                      break;
                    case "V":
                      (s = p[v++]), (h = c.L), l.addData(h, o, s);
                      break;
                    case "C":
                      (h = c.C),
                        l.addData(
                          h,
                          p[v++],
                          p[v++],
                          p[v++],
                          p[v++],
                          p[v++],
                          p[v++]
                        ),
                        (o = p[v - 2]),
                        (s = p[v - 1]);
                      break;
                    case "c":
                      (h = c.C),
                        l.addData(
                          h,
                          p[v++] + o,
                          p[v++] + s,
                          p[v++] + o,
                          p[v++] + s,
                          p[v++] + o,
                          p[v++] + s
                        ),
                        (o += p[v - 2]),
                        (s += p[v - 1]);
                      break;
                    case "S":
                      (y = o), (b = s);
                      var T = l.len(),
                        A = l.data;
                      r === c.C && ((y += o - A[T - 4]), (b += s - A[T - 3])),
                        (h = c.C),
                        (k = p[v++]),
                        (M = p[v++]),
                        (o = p[v++]),
                        (s = p[v++]),
                        l.addData(h, y, b, k, M, o, s);
                      break;
                    case "s":
                      (y = o), (b = s);
                      (T = l.len()), (A = l.data);
                      r === c.C && ((y += o - A[T - 4]), (b += s - A[T - 3])),
                        (h = c.C),
                        (k = o + p[v++]),
                        (M = s + p[v++]),
                        (o += p[v++]),
                        (s += p[v++]),
                        l.addData(h, y, b, k, M, o, s);
                      break;
                    case "Q":
                      (k = p[v++]),
                        (M = p[v++]),
                        (o = p[v++]),
                        (s = p[v++]),
                        (h = c.Q),
                        l.addData(h, k, M, o, s);
                      break;
                    case "q":
                      (k = p[v++] + o),
                        (M = p[v++] + s),
                        (o += p[v++]),
                        (s += p[v++]),
                        (h = c.Q),
                        l.addData(h, k, M, o, s);
                      break;
                    case "T":
                      (y = o), (b = s);
                      (T = l.len()), (A = l.data);
                      r === c.Q && ((y += o - A[T - 4]), (b += s - A[T - 3])),
                        (o = p[v++]),
                        (s = p[v++]),
                        (h = c.Q),
                        l.addData(h, y, b, o, s);
                      break;
                    case "t":
                      (y = o), (b = s);
                      (T = l.len()), (A = l.data);
                      r === c.Q && ((y += o - A[T - 4]), (b += s - A[T - 3])),
                        (o += p[v++]),
                        (s += p[v++]),
                        (h = c.Q),
                        l.addData(h, y, b, o, s);
                      break;
                    case "A":
                      (x = p[v++]),
                        (w = p[v++]),
                        (_ = p[v++]),
                        (S = p[v++]),
                        (C = p[v++]),
                        (k = o),
                        (M = s),
                        (o = p[v++]),
                        (s = p[v++]),
                        (h = c.A),
                        n(k, M, o, s, S, C, x, w, _, h, l);
                      break;
                    case "a":
                      (x = p[v++]),
                        (w = p[v++]),
                        (_ = p[v++]),
                        (S = p[v++]),
                        (C = p[v++]),
                        (k = o),
                        (M = s),
                        (o += p[v++]),
                        (s += p[v++]),
                        (h = c.A),
                        n(k, M, o, s, S, C, x, w, _, h, l);
                  }
                }
                ("z" !== m && "Z" !== m) || ((h = c.Z), l.addData(h)), (r = h);
              }
              return l.toStatic(), l;
            }
            function i(t, e) {
              var a = r(t);
              return (
                (e = e || {}),
                (e.buildPath = function(t) {
                  if (t.setData) {
                    t.setData(a.data);
                    var e = t.getContext();
                    e && t.rebuildPath(e);
                  } else {
                    e = t;
                    a.rebuildPath(e);
                  }
                }),
                (e.applyTransform = function(t) {
                  h(a, t), this.dirty(!0);
                }),
                e
              );
            }
            function o(t, e) {
              return new c(i(t, e));
            }
            function s(t, e) {
              return c.extend(i(t, e));
            }
            function l(t, e) {
              for (var a = [], n = t.length, r = 0; r < n; r++) {
                var i = t[r];
                i.path || i.createPathProxy(),
                  i.__dirtyPath && i.buildPath(i.path, i.shape, !0),
                  a.push(i.path);
              }
              var o = new c(e);
              return (
                o.createPathProxy(),
                (o.buildPath = function(t) {
                  t.appendPath(a);
                  var e = t.getContext();
                  e && t.rebuildPath(e);
                }),
                o
              );
            }
            var c = a(1),
              u = a(6),
              h = a(57),
              d = [
                "m",
                "M",
                "l",
                "L",
                "v",
                "V",
                "h",
                "H",
                "z",
                "Z",
                "c",
                "C",
                "q",
                "Q",
                "t",
                "T",
                "s",
                "S",
                "a",
                "A",
              ],
              f = Math.sqrt,
              m = Math.sin,
              v = Math.cos,
              p = Math.PI,
              g = function(t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
              },
              y = function(t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e));
              },
              b = function(t, e) {
                return (
                  (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(y(t, e))
                );
              };
            (e.createFromString = o),
              (e.extendFromString = s),
              (e.mergePath = l);
          },
          function(t, e) {
            function a(t, e, a) {
              var n = null == e.x ? 0 : e.x,
                r = null == e.x2 ? 1 : e.x2,
                i = null == e.y ? 0 : e.y,
                o = null == e.y2 ? 0 : e.y2;
              return (
                e.global ||
                  ((n = n * a.width + a.x),
                  (r = r * a.width + a.x),
                  (i = i * a.height + a.y),
                  (o = o * a.height + a.y)),
                t.createLinearGradient(n, i, r, o)
              );
            }
            function n(t, e, a) {
              var n = a.width,
                r = a.height,
                i = Math.min(n, r),
                o = null == e.x ? 0.5 : e.x,
                s = null == e.y ? 0.5 : e.y,
                l = null == e.r ? 0.5 : e.r;
              return (
                e.global || ((o = o * n + a.x), (s = s * r + a.y), (l *= i)),
                t.createRadialGradient(o, s, 0, o, s, l)
              );
            }
            var r = [
                ["shadowBlur", 0],
                ["shadowOffsetX", 0],
                ["shadowOffsetY", 0],
                ["shadowColor", "#000"],
                ["lineCap", "butt"],
                ["lineJoin", "miter"],
                ["miterLimit", 10],
              ],
              i = function(t, e) {
                this.extendFrom(t, !1), (this.host = e);
              };
            i.prototype = {
              constructor: i,
              host: null,
              fill: "#000",
              stroke: null,
              opacity: 1,
              lineDash: null,
              lineDashOffset: 0,
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              lineWidth: 1,
              strokeNoScale: !1,
              text: null,
              font: null,
              textFont: null,
              fontStyle: null,
              fontWeight: null,
              fontSize: null,
              fontFamily: null,
              textTag: null,
              textFill: "#000",
              textStroke: null,
              textWidth: null,
              textHeight: null,
              textStrokeWidth: 0,
              textLineHeight: null,
              textPosition: "inside",
              textRect: null,
              textOffset: null,
              textAlign: null,
              textVerticalAlign: null,
              textDistance: 5,
              textShadowColor: "transparent",
              textShadowBlur: 0,
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              textBoxShadowColor: "transparent",
              textBoxShadowBlur: 0,
              textBoxShadowOffsetX: 0,
              textBoxShadowOffsetY: 0,
              transformText: !1,
              textRotation: 0,
              textOrigin: null,
              textBackgroundColor: null,
              textBorderColor: null,
              textBorderWidth: 0,
              textBorderRadius: 0,
              textPadding: null,
              rich: null,
              truncate: null,
              blend: null,
              bind: function(t, e, a) {
                for (
                  var n = this, i = a && a.style, o = !i, s = 0;
                  s < r.length;
                  s++
                ) {
                  var l = r[s],
                    c = l[0];
                  (o || n[c] !== i[c]) && (t[c] = n[c] || l[1]);
                }
                if (
                  ((o || n.fill !== i.fill) && (t.fillStyle = n.fill),
                  (o || n.stroke !== i.stroke) && (t.strokeStyle = n.stroke),
                  (o || n.opacity !== i.opacity) &&
                    (t.globalAlpha = null == n.opacity ? 1 : n.opacity),
                  (o || n.blend !== i.blend) &&
                    (t.globalCompositeOperation = n.blend || "source-over"),
                  this.hasStroke())
                ) {
                  var u = n.lineWidth;
                  t.lineWidth =
                    u /
                    (this.strokeNoScale && e && e.getLineScale
                      ? e.getLineScale()
                      : 1);
                }
              },
              hasFill: function() {
                var t = this.fill;
                return null != t && "none" !== t;
              },
              hasStroke: function() {
                var t = this.stroke;
                return null != t && "none" !== t && this.lineWidth > 0;
              },
              extendFrom: function(t, e) {
                if (t)
                  for (var a in t)
                    !t.hasOwnProperty(a) ||
                      (!0 !== e &&
                        (!1 === e ? this.hasOwnProperty(a) : null == t[a])) ||
                      (this[a] = t[a]);
              },
              set: function(t, e) {
                "string" == typeof t ? (this[t] = e) : this.extendFrom(t, !0);
              },
              clone: function() {
                var t = new this.constructor();
                return t.extendFrom(this, !0), t;
              },
              getGradient: function(t, e, r) {
                for (
                  var i = "radial" === e.type ? n : a,
                    o = i(t, e, r),
                    s = e.colorStops,
                    l = 0;
                  l < s.length;
                  l++
                )
                  o.addColorStop(s[l].offset, s[l].color);
                return o;
              },
            };
            for (var o = i.prototype, s = 0; s < r.length; s++) {
              var l = r[s];
              l[0] in o || (o[l[0]] = l[1]);
            }
            i.getGradient = o.getGradient;
            var c = i;
            t.exports = c;
          },
          function(t, e) {
            function a() {
              return n++;
            }
            var n = 2311;
            t.exports = a;
          },
          function(t, e) {
            var a = Array.prototype.slice,
              n = function() {
                this._$handlers = {};
              };
            n.prototype = {
              constructor: n,
              one: function(t, e, a) {
                var n = this._$handlers;
                if (!e || !t) return this;
                n[t] || (n[t] = []);
                for (var r = 0; r < n[t].length; r++)
                  if (n[t][r].h === e) return this;
                return n[t].push({ h: e, one: !0, ctx: a || this }), this;
              },
              on: function(t, e, a) {
                var n = this._$handlers;
                if (!e || !t) return this;
                n[t] || (n[t] = []);
                for (var r = 0; r < n[t].length; r++)
                  if (n[t][r].h === e) return this;
                return n[t].push({ h: e, one: !1, ctx: a || this }), this;
              },
              isSilent: function(t) {
                var e = this._$handlers;
                return e[t] && e[t].length;
              },
              off: function(t, e) {
                var a = this._$handlers;
                if (!t) return (this._$handlers = {}), this;
                if (e) {
                  if (a[t]) {
                    for (var n = [], r = 0, i = a[t].length; r < i; r++)
                      a[t][r].h != e && n.push(a[t][r]);
                    a[t] = n;
                  }
                  a[t] && 0 === a[t].length && delete a[t];
                } else delete a[t];
                return this;
              },
              trigger: function(t) {
                if (this._$handlers[t]) {
                  var e = arguments,
                    n = e.length;
                  n > 3 && (e = a.call(e, 1));
                  for (
                    var r = this._$handlers[t], i = r.length, o = 0;
                    o < i;

                  ) {
                    switch (n) {
                      case 1:
                        r[o].h.call(r[o].ctx);
                        break;
                      case 2:
                        r[o].h.call(r[o].ctx, e[1]);
                        break;
                      case 3:
                        r[o].h.call(r[o].ctx, e[1], e[2]);
                        break;
                      default:
                        r[o].h.apply(r[o].ctx, e);
                    }
                    r[o].one ? (r.splice(o, 1), i--) : o++;
                  }
                }
                return this;
              },
              triggerWithContext: function(t) {
                if (this._$handlers[t]) {
                  var e = arguments,
                    n = e.length;
                  n > 4 && (e = a.call(e, 1, e.length - 1));
                  for (
                    var r = e[e.length - 1],
                      i = this._$handlers[t],
                      o = i.length,
                      s = 0;
                    s < o;

                  ) {
                    switch (n) {
                      case 1:
                        i[s].h.call(r);
                        break;
                      case 2:
                        i[s].h.call(r, e[1]);
                        break;
                      case 3:
                        i[s].h.call(r, e[1], e[2]);
                        break;
                      default:
                        i[s].h.apply(r, e);
                    }
                    i[s].one ? (i.splice(s, 1), o--) : s++;
                  }
                }
                return this;
              },
            };
            var r = n;
            t.exports = r;
          },
          function(t, e, a) {
            var n = a(44),
              r = a(47),
              i = a(0),
              o = i.isString,
              s = i.isFunction,
              l = i.isObject,
              c = i.isArrayLike,
              u = i.indexOf,
              h = function() {
                this.animators = [];
              };
            h.prototype = {
              constructor: h,
              animate: function(t, e) {
                var a,
                  i = !1,
                  o = this,
                  s = this.__zr;
                if (t) {
                  var l = t.split("."),
                    c = o;
                  i = "shape" === l[0];
                  for (var h = 0, d = l.length; h < d; h++) c && (c = c[l[h]]);
                  c && (a = c);
                } else a = o;
                if (a) {
                  var f = o.animators,
                    m = new n(a, e);
                  return (
                    m
                      .during(function(t) {
                        o.dirty(i);
                      })
                      .done(function() {
                        f.splice(u(f, m), 1);
                      }),
                    f.push(m),
                    s && s.animation.addAnimator(m),
                    m
                  );
                }
                r('Property "' + t + '" is not existed in element ' + o.id);
              },
              stopAnimation: function(t) {
                for (var e = this.animators, a = e.length, n = 0; n < a; n++)
                  e[n].stop(t);
                return (e.length = 0), this;
              },
              animateTo: function(t, e, a, n, r, i) {
                function l() {
                  --u || (r && r());
                }
                o(a)
                  ? ((r = n), (n = a), (a = 0))
                  : s(n)
                  ? ((r = n), (n = "linear"), (a = 0))
                  : s(a)
                  ? ((r = a), (a = 0))
                  : s(e)
                  ? ((r = e), (e = 500))
                  : e || (e = 500),
                  this.stopAnimation(),
                  this._animateToShallow("", this, t, e, a);
                var c = this.animators.slice(),
                  u = c.length;
                u || (r && r());
                for (var h = 0; h < c.length; h++) c[h].done(l).start(n, i);
              },
              _animateToShallow: function(t, e, a, n, r) {
                var i = {},
                  o = 0;
                for (var s in a)
                  if (a.hasOwnProperty(s))
                    if (null != e[s])
                      l(a[s]) && !c(a[s])
                        ? this._animateToShallow(
                            t ? t + "." + s : s,
                            e[s],
                            a[s],
                            n,
                            r
                          )
                        : ((i[s] = a[s]), o++);
                    else if (null != a[s])
                      if (t) {
                        var u = {};
                        (u[t] = {}), (u[t][s] = a[s]), this.attr(u);
                      } else this.attr(s, a[s]);
                return (
                  o > 0 &&
                    this.animate(t, !1)
                      .when(null == n ? 500 : n, i)
                      .delay(r || 0),
                  this
                );
              },
            };
            var d = h;
            t.exports = d;
          },
          function(t, e, a) {
            function n(t, e) {
              return t[e];
            }
            function r(t, e, a) {
              t[e] = a;
            }
            function i(t, e, a) {
              return (e - t) * a + t;
            }
            function o(t, e, a) {
              return a > 0.5 ? e : t;
            }
            function s(t, e, a, n, r) {
              var o = t.length;
              if (1 == r) for (var s = 0; s < o; s++) n[s] = i(t[s], e[s], a);
              else {
                var l = o && t[0].length;
                for (s = 0; s < o; s++)
                  for (var c = 0; c < l; c++) n[s][c] = i(t[s][c], e[s][c], a);
              }
            }
            function l(t, e, a) {
              var n = t.length,
                r = e.length;
              if (n !== r)
                if (n > r) t.length = r;
                else
                  for (var i = n; i < r; i++)
                    t.push(1 === a ? e[i] : x.call(e[i]));
              var o = t[0] && t[0].length;
              for (i = 0; i < t.length; i++)
                if (1 === a) isNaN(t[i]) && (t[i] = e[i]);
                else
                  for (var s = 0; s < o; s++)
                    isNaN(t[i][s]) && (t[i][s] = e[i][s]);
            }
            function c(t, e, a) {
              if (t === e) return !0;
              var n = t.length;
              if (n !== e.length) return !1;
              if (1 === a) {
                for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
              } else {
                var i = t[0].length;
                for (r = 0; r < n; r++)
                  for (var o = 0; o < i; o++)
                    if (t[r][o] !== e[r][o]) return !1;
              }
              return !0;
            }
            function u(t, e, a, n, r, i, o, s, l) {
              var c = t.length;
              if (1 == l)
                for (var u = 0; u < c; u++)
                  s[u] = h(t[u], e[u], a[u], n[u], r, i, o);
              else {
                var d = t[0].length;
                for (u = 0; u < c; u++)
                  for (var f = 0; f < d; f++)
                    s[u][f] = h(t[u][f], e[u][f], a[u][f], n[u][f], r, i, o);
              }
            }
            function h(t, e, a, n, r, i, o) {
              var s = 0.5 * (a - t),
                l = 0.5 * (n - e);
              return (
                (2 * (e - a) + s + l) * o +
                (-3 * (e - a) - 2 * s - l) * i +
                s * r +
                e
              );
            }
            function d(t) {
              if (b(t)) {
                var e = t.length;
                if (b(t[0])) {
                  for (var a = [], n = 0; n < e; n++) a.push(x.call(t[n]));
                  return a;
                }
                return x.call(t);
              }
              return t;
            }
            function f(t) {
              return (
                (t[0] = Math.floor(t[0])),
                (t[1] = Math.floor(t[1])),
                (t[2] = Math.floor(t[2])),
                "rgba(" + t.join(",") + ")"
              );
            }
            function m(t) {
              var e = t[t.length - 1].value;
              return b(e && e[0]) ? 2 : 1;
            }
            function v(t, e, a, n, r, d) {
              var v = t._getter,
                y = t._setter,
                x = "spline" === e,
                w = n.length;
              if (w) {
                var _,
                  S = n[0].value,
                  C = b(S),
                  k = !1,
                  M = !1,
                  T = C ? m(n) : 0;
                n.sort(function(t, e) {
                  return t.time - e.time;
                }),
                  (_ = n[w - 1].time);
                for (
                  var A = [], L = [], O = n[0].value, E = !0, I = 0;
                  I < w;
                  I++
                ) {
                  A.push(n[I].time / _);
                  var P = n[I].value;
                  if (
                    ((C && c(P, O, T)) || (!C && P === O) || (E = !1),
                    (O = P),
                    "string" == typeof P)
                  ) {
                    var D = g.parse(P);
                    D ? ((P = D), (k = !0)) : (M = !0);
                  }
                  L.push(P);
                }
                if (d || !E) {
                  var z = L[w - 1];
                  for (I = 0; I < w - 1; I++)
                    C
                      ? l(L[I], z, T)
                      : !isNaN(L[I]) || isNaN(z) || M || k || (L[I] = z);
                  C && l(v(t._target, r), z, T);
                  var B,
                    W,
                    R,
                    F,
                    N,
                    j,
                    $ = 0,
                    q = 0;
                  if (k) var H = [0, 0, 0, 0];
                  var G = function(t, e) {
                      var a;
                      if (e < 0) a = 0;
                      else if (e < q) {
                        for (
                          B = Math.min($ + 1, w - 1), a = B;
                          a >= 0 && !(A[a] <= e);
                          a--
                        );
                        a = Math.min(a, w - 2);
                      } else {
                        for (a = $; a < w && !(A[a] > e); a++);
                        a = Math.min(a - 1, w - 2);
                      }
                      ($ = a), (q = e);
                      var n = A[a + 1] - A[a];
                      if (0 !== n)
                        if (((W = (e - A[a]) / n), x))
                          if (
                            ((F = L[a]),
                            (R = L[0 === a ? a : a - 1]),
                            (N = L[a > w - 2 ? w - 1 : a + 1]),
                            (j = L[a > w - 3 ? w - 1 : a + 2]),
                            C)
                          )
                            u(R, F, N, j, W, W * W, W * W * W, v(t, r), T);
                          else {
                            if (k)
                              (l = u(R, F, N, j, W, W * W, W * W * W, H, 1)),
                                (l = f(H));
                            else {
                              if (M) return o(F, N, W);
                              l = h(R, F, N, j, W, W * W, W * W * W);
                            }
                            y(t, r, l);
                          }
                        else if (C) s(L[a], L[a + 1], W, v(t, r), T);
                        else {
                          var l;
                          if (k) s(L[a], L[a + 1], W, H, 1), (l = f(H));
                          else {
                            if (M) return o(L[a], L[a + 1], W);
                            l = i(L[a], L[a + 1], W);
                          }
                          y(t, r, l);
                        }
                    },
                    V = new p({
                      target: t._target,
                      life: _,
                      loop: t._loop,
                      delay: t._delay,
                      onframe: G,
                      ondestroy: a,
                    });
                  return e && "spline" !== e && (V.easing = e), V;
                }
              }
            }
            var p = a(45),
              g = a(18),
              y = a(0),
              b = y.isArrayLike,
              x = Array.prototype.slice,
              w = function(t, e, a, i) {
                (this._tracks = {}),
                  (this._target = t),
                  (this._loop = e || !1),
                  (this._getter = a || n),
                  (this._setter = i || r),
                  (this._clipCount = 0),
                  (this._delay = 0),
                  (this._doneList = []),
                  (this._onframeList = []),
                  (this._clipList = []);
              };
            w.prototype = {
              when: function(t, e) {
                var a = this._tracks;
                for (var n in e)
                  if (e.hasOwnProperty(n)) {
                    if (!a[n]) {
                      a[n] = [];
                      var r = this._getter(this._target, n);
                      if (null == r) continue;
                      0 !== t && a[n].push({ time: 0, value: d(r) });
                    }
                    a[n].push({ time: t, value: e[n] });
                  }
                return this;
              },
              during: function(t) {
                return this._onframeList.push(t), this;
              },
              pause: function() {
                for (var t = 0; t < this._clipList.length; t++)
                  this._clipList[t].pause();
                this._paused = !0;
              },
              resume: function() {
                for (var t = 0; t < this._clipList.length; t++)
                  this._clipList[t].resume();
                this._paused = !1;
              },
              isPaused: function() {
                return !!this._paused;
              },
              _doneCallback: function() {
                (this._tracks = {}), (this._clipList.length = 0);
                for (var t = this._doneList, e = t.length, a = 0; a < e; a++)
                  t[a].call(this);
              },
              start: function(t, e) {
                var a,
                  n = this,
                  r = 0,
                  i = function() {
                    --r || n._doneCallback();
                  };
                for (var o in this._tracks)
                  if (this._tracks.hasOwnProperty(o)) {
                    var s = v(this, t, i, this._tracks[o], o, e);
                    s &&
                      (this._clipList.push(s),
                      r++,
                      this.animation && this.animation.addClip(s),
                      (a = s));
                  }
                if (a) {
                  var l = a.onframe;
                  a.onframe = function(t, e) {
                    l(t, e);
                    for (var a = 0; a < n._onframeList.length; a++)
                      n._onframeList[a](t, e);
                  };
                }
                return r || this._doneCallback(), this;
              },
              stop: function(t) {
                for (
                  var e = this._clipList, a = this.animation, n = 0;
                  n < e.length;
                  n++
                ) {
                  var r = e[n];
                  t && r.onframe(this._target, 1), a && a.removeClip(r);
                }
                e.length = 0;
              },
              delay: function(t) {
                return (this._delay = t), this;
              },
              done: function(t) {
                return t && this._doneList.push(t), this;
              },
              getClips: function() {
                return this._clipList;
              },
            };
            var _ = w;
            t.exports = _;
          },
          function(t, e, a) {
            function n(t) {
              (this._target = t.target),
                (this._life = t.life || 1e3),
                (this._delay = t.delay || 0),
                (this._initialized = !1),
                (this.loop = null != t.loop && t.loop),
                (this.gap = t.gap || 0),
                (this.easing = t.easing || "Linear"),
                (this.onframe = t.onframe),
                (this.ondestroy = t.ondestroy),
                (this.onrestart = t.onrestart),
                (this._pausedTime = 0),
                (this._paused = !1);
            }
            var r = a(46);
            n.prototype = {
              constructor: n,
              step: function(t, e) {
                if (
                  (this._initialized ||
                    ((this._startTime = t + this._delay),
                    (this._initialized = !0)),
                  this._paused)
                )
                  this._pausedTime += e;
                else {
                  var a = (t - this._startTime - this._pausedTime) / this._life;
                  if (!(a < 0)) {
                    a = Math.min(a, 1);
                    var n = this.easing,
                      i = "string" == typeof n ? r[n] : n,
                      o = "function" == typeof i ? i(a) : a;
                    return (
                      this.fire("frame", o),
                      1 == a
                        ? this.loop
                          ? (this.restart(t), "restart")
                          : ((this._needsRemove = !0), "destroy")
                        : null
                    );
                  }
                }
              },
              restart: function(t) {
                var e = (t - this._startTime - this._pausedTime) % this._life;
                (this._startTime = t - e + this.gap),
                  (this._pausedTime = 0),
                  (this._needsRemove = !1);
              },
              fire: function(t, e) {
                (t = "on" + t), this[t] && this[t](this._target, e);
              },
              pause: function() {
                this._paused = !0;
              },
              resume: function() {
                this._paused = !1;
              },
            };
            var i = n;
            t.exports = i;
          },
          function(t, e) {
            var a = {
                linear: function(t) {
                  return t;
                },
                quadraticIn: function(t) {
                  return t * t;
                },
                quadraticOut: function(t) {
                  return t * (2 - t);
                },
                quadraticInOut: function(t) {
                  return (t *= 2) < 1
                    ? 0.5 * t * t
                    : -0.5 * (--t * (t - 2) - 1);
                },
                cubicIn: function(t) {
                  return t * t * t;
                },
                cubicOut: function(t) {
                  return --t * t * t + 1;
                },
                cubicInOut: function(t) {
                  return (t *= 2) < 1
                    ? 0.5 * t * t * t
                    : 0.5 * ((t -= 2) * t * t + 2);
                },
                quarticIn: function(t) {
                  return t * t * t * t;
                },
                quarticOut: function(t) {
                  return 1 - --t * t * t * t;
                },
                quarticInOut: function(t) {
                  return (t *= 2) < 1
                    ? 0.5 * t * t * t * t
                    : -0.5 * ((t -= 2) * t * t * t - 2);
                },
                quinticIn: function(t) {
                  return t * t * t * t * t;
                },
                quinticOut: function(t) {
                  return --t * t * t * t * t + 1;
                },
                quinticInOut: function(t) {
                  return (t *= 2) < 1
                    ? 0.5 * t * t * t * t * t
                    : 0.5 * ((t -= 2) * t * t * t * t + 2);
                },
                sinusoidalIn: function(t) {
                  return 1 - Math.cos((t * Math.PI) / 2);
                },
                sinusoidalOut: function(t) {
                  return Math.sin((t * Math.PI) / 2);
                },
                sinusoidalInOut: function(t) {
                  return 0.5 * (1 - Math.cos(Math.PI * t));
                },
                exponentialIn: function(t) {
                  return 0 === t ? 0 : Math.pow(1024, t - 1);
                },
                exponentialOut: function(t) {
                  return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                },
                exponentialInOut: function(t) {
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (t *= 2) < 1
                    ? 0.5 * Math.pow(1024, t - 1)
                    : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                },
                circularIn: function(t) {
                  return 1 - Math.sqrt(1 - t * t);
                },
                circularOut: function(t) {
                  return Math.sqrt(1 - --t * t);
                },
                circularInOut: function(t) {
                  return (t *= 2) < 1
                    ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                    : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                },
                elasticIn: function(t) {
                  var e,
                    a = 0.1;
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (!a || a < 1
                        ? ((a = 1), (e = 0.1))
                        : (e = (0.4 * Math.asin(1 / a)) / (2 * Math.PI)),
                      -a *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / 0.4));
                },
                elasticOut: function(t) {
                  var e,
                    a = 0.1;
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (!a || a < 1
                        ? ((a = 1), (e = 0.1))
                        : (e = (0.4 * Math.asin(1 / a)) / (2 * Math.PI)),
                      a *
                        Math.pow(2, -10 * t) *
                        Math.sin(((t - e) * (2 * Math.PI)) / 0.4) +
                        1);
                },
                elasticInOut: function(t) {
                  var e,
                    a = 0.1;
                  return 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : (!a || a < 1
                        ? ((a = 1), (e = 0.1))
                        : (e = (0.4 * Math.asin(1 / a)) / (2 * Math.PI)),
                      (t *= 2) < 1
                        ? a *
                          Math.pow(2, 10 * (t -= 1)) *
                          Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                          -0.5
                        : a *
                            Math.pow(2, -10 * (t -= 1)) *
                            Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                            0.5 +
                          1);
                },
                backIn: function(t) {
                  var e = 1.70158;
                  return t * t * ((e + 1) * t - e);
                },
                backOut: function(t) {
                  var e = 1.70158;
                  return --t * t * ((e + 1) * t + e) + 1;
                },
                backInOut: function(t) {
                  var e = 2.5949095;
                  return (t *= 2) < 1
                    ? t * t * ((e + 1) * t - e) * 0.5
                    : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
                },
                bounceIn: function(t) {
                  return 1 - a.bounceOut(1 - t);
                },
                bounceOut: function(t) {
                  return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                },
                bounceInOut: function(t) {
                  return t < 0.5
                    ? 0.5 * a.bounceIn(2 * t)
                    : 0.5 * a.bounceOut(2 * t - 1) + 0.5;
                },
              },
              n = a;
            t.exports = n;
          },
          function(t, e, a) {
            var n = a(19),
              r = n.debugMode,
              i = function() {};
            1 === r
              ? (i = function() {
                  for (var t in arguments) throw new Error(arguments[t]);
                })
              : r > 1 &&
                (i = function() {
                  for (var t in arguments) console.log(arguments[t]);
                });
            var o = i;
            t.exports = o;
          },
          function(t, e, a) {
            var n = a(20),
              r = a(3),
              i = new r(),
              o = function() {};
            o.prototype = {
              constructor: o,
              drawRectText: function(t, e) {
                var a = this.style;
                (e = a.textRect || e),
                  this.__dirty && n.normalizeTextStyle(a, !0);
                var r = a.text;
                if ((null != r && (r += ""), n.needDrawText(r, a))) {
                  t.save();
                  var o = this.transform;
                  a.transformText
                    ? this.setTransform(t)
                    : o && (i.copy(e), i.applyTransform(o), (e = i)),
                    n.renderText(this, t, r, a, e),
                    t.restore();
                }
              },
            };
            var s = o;
            t.exports = s;
          },
          function(t, e, a) {
            function n(t, e, a) {
              if (0 !== t.length) {
                var n,
                  r = t[0],
                  i = r[0],
                  o = r[0],
                  s = r[1],
                  l = r[1];
                for (n = 1; n < t.length; n++)
                  (r = t[n]),
                    (i = u(i, r[0])),
                    (o = h(o, r[0])),
                    (s = u(s, r[1])),
                    (l = h(l, r[1]));
                (e[0] = i), (e[1] = s), (a[0] = o), (a[1] = l);
              }
            }
            function r(t, e, a, n, r, i) {
              (r[0] = u(t, a)),
                (r[1] = u(e, n)),
                (i[0] = h(t, a)),
                (i[1] = h(e, n));
            }
            function i(t, e, a, n, r, i, o, s, l, d) {
              var f,
                m = c.cubicExtrema,
                v = c.cubicAt,
                p = m(t, a, r, o, y);
              for (
                l[0] = 1 / 0, l[1] = 1 / 0, d[0] = -1 / 0, d[1] = -1 / 0, f = 0;
                f < p;
                f++
              ) {
                var g = v(t, a, r, o, y[f]);
                (l[0] = u(g, l[0])), (d[0] = h(g, d[0]));
              }
              for (p = m(e, n, i, s, b), f = 0; f < p; f++) {
                var x = v(e, n, i, s, b[f]);
                (l[1] = u(x, l[1])), (d[1] = h(x, d[1]));
              }
              (l[0] = u(t, l[0])),
                (d[0] = h(t, d[0])),
                (l[0] = u(o, l[0])),
                (d[0] = h(o, d[0])),
                (l[1] = u(e, l[1])),
                (d[1] = h(e, d[1])),
                (l[1] = u(s, l[1])),
                (d[1] = h(s, d[1]));
            }
            function o(t, e, a, n, r, i, o, s) {
              var l = c.quadraticExtremum,
                d = c.quadraticAt,
                f = h(u(l(t, a, r), 1), 0),
                m = h(u(l(e, n, i), 1), 0),
                v = d(t, a, r, f),
                p = d(e, n, i, m);
              (o[0] = u(t, r, v)),
                (o[1] = u(e, i, p)),
                (s[0] = h(t, r, v)),
                (s[1] = h(e, i, p));
            }
            function s(t, e, a, n, r, i, o, s, c) {
              var u = l.min,
                h = l.max,
                y = Math.abs(r - i);
              if (y % m < 1e-4 && y > 1e-4)
                return (
                  (s[0] = t - a),
                  (s[1] = e - n),
                  (c[0] = t + a),
                  void (c[1] = e + n)
                );
              if (
                ((v[0] = f(r) * a + t),
                (v[1] = d(r) * n + e),
                (p[0] = f(i) * a + t),
                (p[1] = d(i) * n + e),
                u(s, v, p),
                h(c, v, p),
                (r %= m),
                r < 0 && (r += m),
                (i %= m),
                i < 0 && (i += m),
                r > i && !o ? (i += m) : r < i && o && (r += m),
                o)
              ) {
                var b = i;
                (i = r), (r = b);
              }
              for (var x = 0; x < i; x += Math.PI / 2)
                x > r &&
                  ((g[0] = f(x) * a + t),
                  (g[1] = d(x) * n + e),
                  u(s, g, s),
                  h(c, g, c));
            }
            var l = a(2),
              c = a(4),
              u = Math.min,
              h = Math.max,
              d = Math.sin,
              f = Math.cos,
              m = 2 * Math.PI,
              v = l.create(),
              p = l.create(),
              g = l.create(),
              y = [],
              b = [];
            (e.fromPoints = n),
              (e.fromLine = r),
              (e.fromCubic = i),
              (e.fromQuadratic = o),
              (e.fromArc = s);
          },
          function(t, e, a) {
            function n(t, e) {
              return Math.abs(t - e) < _;
            }
            function r() {
              var t = C[0];
              (C[0] = C[1]), (C[1] = t);
            }
            function i(t, e, a, n, i, o, s, l, c, u) {
              if (
                (u > e && u > n && u > o && u > l) ||
                (u < e && u < n && u < o && u < l)
              )
                return 0;
              var h = y.cubicRootAt(e, n, o, l, u, S);
              if (0 === h) return 0;
              for (var d, f, m = 0, v = -1, p = 0; p < h; p++) {
                var g = S[p],
                  b = 0 === g || 1 === g ? 0.5 : 1;
                y.cubicAt(t, a, i, s, g) < c ||
                  (v < 0 &&
                    ((v = y.cubicExtrema(e, n, o, l, C)),
                    C[1] < C[0] && v > 1 && r(),
                    (d = y.cubicAt(e, n, o, l, C[0])),
                    v > 1 && (f = y.cubicAt(e, n, o, l, C[1]))),
                  2 == v
                    ? g < C[0]
                      ? (m += d < e ? b : -b)
                      : g < C[1]
                      ? (m += f < d ? b : -b)
                      : (m += l < f ? b : -b)
                    : g < C[0]
                    ? (m += d < e ? b : -b)
                    : (m += l < d ? b : -b));
              }
              return m;
            }
            function o(t, e, a, n, r, i, o, s) {
              if ((s > e && s > n && s > i) || (s < e && s < n && s < i))
                return 0;
              var l = y.quadraticRootAt(e, n, i, s, S);
              if (0 === l) return 0;
              var c = y.quadraticExtremum(e, n, i);
              if (c >= 0 && c <= 1) {
                for (
                  var u = 0, h = y.quadraticAt(e, n, i, c), d = 0;
                  d < l;
                  d++
                ) {
                  var f = 0 === S[d] || 1 === S[d] ? 0.5 : 1,
                    m = y.quadraticAt(t, a, r, S[d]);
                  m < o ||
                    (S[d] < c ? (u += h < e ? f : -f) : (u += i < h ? f : -f));
                }
                return u;
              }
              (f = 0 === S[0] || 1 === S[0] ? 0.5 : 1),
                (m = y.quadraticAt(t, a, r, S[0]));
              return m < o ? 0 : i < e ? f : -f;
            }
            function s(t, e, a, n, r, i, o, s) {
              if ((s -= e) > a || s < -a) return 0;
              var l = Math.sqrt(a * a - s * s);
              (S[0] = -l), (S[1] = l);
              var c = Math.abs(n - r);
              if (c < 1e-4) return 0;
              if (c % w < 1e-4) {
                (n = 0), (r = w);
                var u = i ? 1 : -1;
                return o >= S[0] + t && o <= S[1] + t ? u : 0;
              }
              if (i) {
                l = n;
                (n = g(r)), (r = g(l));
              } else (n = g(n)), (r = g(r));
              n > r && (r += w);
              for (var h = 0, d = 0; d < 2; d++) {
                var f = S[d];
                if (f + t > o) {
                  var m = Math.atan2(s, f);
                  u = i ? 1 : -1;
                  m < 0 && (m = w + m),
                    ((m >= n && m <= r) || (m + w >= n && m + w <= r)) &&
                      (m > Math.PI / 2 && m < 1.5 * Math.PI && (u = -u),
                      (h += u));
                }
              }
              return h;
            }
            function l(t, e, a, r, l) {
              for (
                var c = 0, u = 0, h = 0, p = 0, g = 0, y = 0;
                y < t.length;

              ) {
                var w = t[y++];
                switch (
                  (w === x.M && y > 1 && (a || (c += b(u, h, p, g, r, l))),
                  1 == y && ((u = t[y]), (h = t[y + 1]), (p = u), (g = h)),
                  w)
                ) {
                  case x.M:
                    (p = t[y++]), (g = t[y++]), (u = p), (h = g);
                    break;
                  case x.L:
                    if (a) {
                      if (d.containStroke(u, h, t[y], t[y + 1], e, r, l))
                        return !0;
                    } else c += b(u, h, t[y], t[y + 1], r, l) || 0;
                    (u = t[y++]), (h = t[y++]);
                    break;
                  case x.C:
                    if (a) {
                      if (
                        f.containStroke(
                          u,
                          h,
                          t[y++],
                          t[y++],
                          t[y++],
                          t[y++],
                          t[y],
                          t[y + 1],
                          e,
                          r,
                          l
                        )
                      )
                        return !0;
                    } else
                      c +=
                        i(
                          u,
                          h,
                          t[y++],
                          t[y++],
                          t[y++],
                          t[y++],
                          t[y],
                          t[y + 1],
                          r,
                          l
                        ) || 0;
                    (u = t[y++]), (h = t[y++]);
                    break;
                  case x.Q:
                    if (a) {
                      if (
                        m.containStroke(
                          u,
                          h,
                          t[y++],
                          t[y++],
                          t[y],
                          t[y + 1],
                          e,
                          r,
                          l
                        )
                      )
                        return !0;
                    } else
                      c += o(u, h, t[y++], t[y++], t[y], t[y + 1], r, l) || 0;
                    (u = t[y++]), (h = t[y++]);
                    break;
                  case x.A:
                    var _ = t[y++],
                      S = t[y++],
                      C = t[y++],
                      k = t[y++],
                      M = t[y++],
                      T = t[y++],
                      A = (t[y++], 1 - t[y++]),
                      L = Math.cos(M) * C + _,
                      O = Math.sin(M) * k + S;
                    y > 1 ? (c += b(u, h, L, O, r, l)) : ((p = L), (g = O));
                    var E = ((r - _) * k) / C + _;
                    if (a) {
                      if (v.containStroke(_, S, k, M, M + T, A, e, E, l))
                        return !0;
                    } else c += s(_, S, k, M, M + T, A, E, l);
                    (u = Math.cos(M + T) * C + _),
                      (h = Math.sin(M + T) * k + S);
                    break;
                  case x.R:
                    (p = u = t[y++]), (g = h = t[y++]);
                    var I = t[y++],
                      P = t[y++];
                    (L = p + I), (O = g + P);
                    if (a) {
                      if (
                        d.containStroke(p, g, L, g, e, r, l) ||
                        d.containStroke(L, g, L, O, e, r, l) ||
                        d.containStroke(L, O, p, O, e, r, l) ||
                        d.containStroke(p, O, p, g, e, r, l)
                      )
                        return !0;
                    } else
                      (c += b(L, g, L, O, r, l)), (c += b(p, O, p, g, r, l));
                    break;
                  case x.Z:
                    if (a) {
                      if (d.containStroke(u, h, p, g, e, r, l)) return !0;
                    } else c += b(u, h, p, g, r, l);
                    (u = p), (h = g);
                }
              }
              return a || n(h, g) || (c += b(u, h, p, g, r, l) || 0), 0 !== c;
            }
            function c(t, e, a) {
              return l(t, 0, !1, e, a);
            }
            function u(t, e, a, n) {
              return l(t, e, !0, a, n);
            }
            var h = a(6),
              d = a(51),
              f = a(52),
              m = a(53),
              v = a(54),
              p = a(22),
              g = p.normalizeRadian,
              y = a(4),
              b = a(55),
              x = h.CMD,
              w = 2 * Math.PI,
              _ = 1e-4,
              S = [-1, -1, -1],
              C = [-1, -1];
            (e.contain = c), (e.containStroke = u);
          },
          function(t, e) {
            function a(t, e, a, n, r, i, o) {
              if (0 === r) return !1;
              var s = r,
                l = 0,
                c = t;
              if (
                (o > e + s && o > n + s) ||
                (o < e - s && o < n - s) ||
                (i > t + s && i > a + s) ||
                (i < t - s && i < a - s)
              )
                return !1;
              if (t === a) return Math.abs(i - t) <= s / 2;
              (l = (e - n) / (t - a)), (c = (t * n - a * e) / (t - a));
              var u = l * i - o + c;
              return (u * u) / (l * l + 1) <= ((s / 2) * s) / 2;
            }
            e.containStroke = a;
          },
          function(t, e, a) {
            function n(t, e, a, n, i, o, s, l, c, u, h) {
              if (0 === c) return !1;
              var d = c;
              return (
                !(
                  (h > e + d && h > n + d && h > o + d && h > l + d) ||
                  (h < e - d && h < n - d && h < o - d && h < l - d) ||
                  (u > t + d && u > a + d && u > i + d && u > s + d) ||
                  (u < t - d && u < a - d && u < i - d && u < s - d)
                ) &&
                r.cubicProjectPoint(t, e, a, n, i, o, s, l, u, h, null) <= d / 2
              );
            }
            var r = a(4);
            e.containStroke = n;
          },
          function(t, e, a) {
            function n(t, e, a, n, r, o, s, l, c) {
              if (0 === s) return !1;
              var u = s;
              return (
                !(
                  (c > e + u && c > n + u && c > o + u) ||
                  (c < e - u && c < n - u && c < o - u) ||
                  (l > t + u && l > a + u && l > r + u) ||
                  (l < t - u && l < a - u && l < r - u)
                ) && i(t, e, a, n, r, o, l, c, null) <= u / 2
              );
            }
            var r = a(4),
              i = r.quadraticProjectPoint;
            e.containStroke = n;
          },
          function(t, e, a) {
            function n(t, e, a, n, r, s, l, c, u) {
              if (0 === l) return !1;
              var h = l;
              (c -= t), (u -= e);
              var d = Math.sqrt(c * c + u * u);
              if (d - h > a || d + h < a) return !1;
              if (Math.abs(n - r) % o < 1e-4) return !0;
              if (s) {
                var f = n;
                (n = i(r)), (r = i(f));
              } else (n = i(n)), (r = i(r));
              n > r && (r += o);
              var m = Math.atan2(u, c);
              return (
                m < 0 && (m += o),
                (m >= n && m <= r) || (m + o >= n && m + o <= r)
              );
            }
            var r = a(22),
              i = r.normalizeRadian,
              o = 2 * Math.PI;
            e.containStroke = n;
          },
          function(t, e) {
            function a(t, e, a, n, r, i) {
              if ((i > e && i > n) || (i < e && i < n)) return 0;
              if (n === e) return 0;
              var o = n < e ? 1 : -1,
                s = (i - e) / (n - e);
              return (
                (1 !== s && 0 !== s) || (o = n < e ? 0.5 : -0.5),
                s * (a - t) + t > r ? o : 0
              );
            }
            t.exports = a;
          },
          function(t, e) {
            var a = function(t, e) {
              (this.image = t), (this.repeat = e), (this.type = "pattern");
            };
            a.prototype.getCanvasPattern = function(t) {
              return t.createPattern(this.image, this.repeat || "repeat");
            };
            var n = a;
            t.exports = n;
          },
          function(t, e, a) {
            function n(t, e) {
              var a,
                n,
                r,
                i,
                h,
                d = t.data,
                f = s.M,
                m = s.C,
                v = s.L,
                p = s.R,
                g = s.A,
                y = s.Q;
              for (r = 0, i = 0; r < d.length; ) {
                switch (((a = d[r++]), (i = r), (n = 0), a)) {
                  case f:
                  case v:
                    n = 1;
                    break;
                  case m:
                    n = 3;
                    break;
                  case y:
                    n = 2;
                    break;
                  case g:
                    var b = e[4],
                      x = e[5],
                      w = c(e[0] * e[0] + e[1] * e[1]),
                      _ = c(e[2] * e[2] + e[3] * e[3]),
                      S = u(-e[1] / _, e[0] / w);
                    (d[r] *= w),
                      (d[r++] += b),
                      (d[r] *= _),
                      (d[r++] += x),
                      (d[r++] *= w),
                      (d[r++] *= _),
                      (d[r++] += S),
                      (d[r++] += S),
                      (r += 2),
                      (i = r);
                    break;
                  case p:
                    (C[0] = d[r++]),
                      (C[1] = d[r++]),
                      o(C, C, e),
                      (d[i++] = C[0]),
                      (d[i++] = C[1]),
                      (C[0] += d[r++]),
                      (C[1] += d[r++]),
                      o(C, C, e),
                      (d[i++] = C[0]),
                      (d[i++] = C[1]);
                }
                for (h = 0; h < n; h++) {
                  var C = l[h];
                  (C[0] = d[r++]),
                    (C[1] = d[r++]),
                    o(C, C, e),
                    (d[i++] = C[0]),
                    (d[i++] = C[1]);
                }
              }
            }
            var r = a(6),
              i = a(2),
              o = i.applyTransform,
              s = r.CMD,
              l = [[], [], []],
              c = Math.sqrt,
              u = Math.atan2;
            t.exports = n;
          },
          function(t, e, a) {
            function n(t) {
              r.call(this, t);
            }
            var r = a(12),
              i = a(3),
              o = a(0),
              s = a(10);
            (n.prototype = {
              constructor: n,
              type: "image",
              brush: function(t, e) {
                var a = this.style,
                  n = a.image;
                a.bind(t, this, e);
                var r = (this._image = s.createOrUpdateImage(
                  n,
                  this._image,
                  this,
                  this.onload
                ));
                if (r && s.isImageReady(r)) {
                  var i = a.x || 0,
                    o = a.y || 0,
                    l = a.width,
                    c = a.height,
                    u = r.width / r.height;
                  if (
                    (null == l && null != c
                      ? (l = c * u)
                      : null == c && null != l
                      ? (c = l / u)
                      : null == l &&
                        null == c &&
                        ((l = r.width), (c = r.height)),
                    this.setTransform(t),
                    a.sWidth && a.sHeight)
                  ) {
                    var h = a.sx || 0,
                      d = a.sy || 0;
                    t.drawImage(r, h, d, a.sWidth, a.sHeight, i, o, l, c);
                  } else if (a.sx && a.sy) {
                    (h = a.sx), (d = a.sy);
                    var f = l - h,
                      m = c - d;
                    t.drawImage(r, h, d, f, m, i, o, l, c);
                  } else t.drawImage(r, i, o, l, c);
                  this.restoreTransform(t),
                    null != a.text &&
                      this.drawRectText(t, this.getBoundingRect());
                }
              },
              getBoundingRect: function() {
                var t = this.style;
                return (
                  this._rect ||
                    (this._rect = new i(
                      t.x || 0,
                      t.y || 0,
                      t.width || 0,
                      t.height || 0
                    )),
                  this._rect
                );
              },
            }),
              o.inherits(n, r);
            var l = n;
            t.exports = l;
          },
          function(t, e, a) {
            var n = a(0),
              r = a(16),
              i = a(3),
              o = function(t) {
                for (var e in ((t = t || {}), r.call(this, t), t))
                  t.hasOwnProperty(e) && (this[e] = t[e]);
                (this._children = []),
                  (this.__storage = null),
                  (this.__dirty = !0);
              };
            (o.prototype = {
              constructor: o,
              isGroup: !0,
              type: "group",
              silent: !1,
              children: function() {
                return this._children.slice();
              },
              childAt: function(t) {
                return this._children[t];
              },
              childOfName: function(t) {
                for (var e = this._children, a = 0; a < e.length; a++)
                  if (e[a].name === t) return e[a];
              },
              childCount: function() {
                return this._children.length;
              },
              add: function(t) {
                return (
                  t &&
                    t !== this &&
                    t.parent !== this &&
                    (this._children.push(t), this._doAdd(t)),
                  this
                );
              },
              addBefore: function(t, e) {
                if (
                  t &&
                  t !== this &&
                  t.parent !== this &&
                  e &&
                  e.parent === this
                ) {
                  var a = this._children,
                    n = a.indexOf(e);
                  n >= 0 && (a.splice(n, 0, t), this._doAdd(t));
                }
                return this;
              },
              _doAdd: function(t) {
                t.parent && t.parent.remove(t), (t.parent = this);
                var e = this.__storage,
                  a = this.__zr;
                e &&
                  e !== t.__storage &&
                  (e.addToStorage(t),
                  t instanceof o && t.addChildrenToStorage(e)),
                  a && a.refresh();
              },
              remove: function(t) {
                var e = this.__zr,
                  a = this.__storage,
                  r = this._children,
                  i = n.indexOf(r, t);
                return (
                  i < 0 ||
                    (r.splice(i, 1),
                    (t.parent = null),
                    a &&
                      (a.delFromStorage(t),
                      t instanceof o && t.delChildrenFromStorage(a)),
                    e && e.refresh()),
                  this
                );
              },
              removeAll: function() {
                var t,
                  e,
                  a = this._children,
                  n = this.__storage;
                for (e = 0; e < a.length; e++)
                  (t = a[e]),
                    n &&
                      (n.delFromStorage(t),
                      t instanceof o && t.delChildrenFromStorage(n)),
                    (t.parent = null);
                return (a.length = 0), this;
              },
              eachChild: function(t, e) {
                for (var a = this._children, n = 0; n < a.length; n++) {
                  var r = a[n];
                  t.call(e, r, n);
                }
                return this;
              },
              traverse: function(t, e) {
                for (var a = 0; a < this._children.length; a++) {
                  var n = this._children[a];
                  t.call(e, n), "group" === n.type && n.traverse(t, e);
                }
                return this;
              },
              addChildrenToStorage: function(t) {
                for (var e = 0; e < this._children.length; e++) {
                  var a = this._children[e];
                  t.addToStorage(a),
                    a instanceof o && a.addChildrenToStorage(t);
                }
              },
              delChildrenFromStorage: function(t) {
                for (var e = 0; e < this._children.length; e++) {
                  var a = this._children[e];
                  t.delFromStorage(a),
                    a instanceof o && a.delChildrenFromStorage(t);
                }
              },
              dirty: function() {
                return (
                  (this.__dirty = !0), this.__zr && this.__zr.refresh(), this
                );
              },
              getBoundingRect: function(t) {
                for (
                  var e = null,
                    a = new i(0, 0, 0, 0),
                    n = t || this._children,
                    r = [],
                    o = 0;
                  o < n.length;
                  o++
                ) {
                  var s = n[o];
                  if (!s.ignore && !s.invisible) {
                    var l = s.getBoundingRect(),
                      c = s.getLocalTransform(r);
                    c
                      ? (a.copy(l),
                        a.applyTransform(c),
                        (e = e || a.clone()),
                        e.union(a))
                      : ((e = e || l.clone()), e.union(l));
                  }
                }
                return e || a;
              },
            }),
              n.inherits(o, r);
            var s = o;
            t.exports = s;
          },
          function(t, e, a) {
            var n = a(12),
              r = a(0),
              i = a(5),
              o = a(20),
              s = function(t) {
                n.call(this, t);
              };
            (s.prototype = {
              constructor: s,
              type: "text",
              brush: function(t, e) {
                var a = this.style;
                this.__dirty && o.normalizeTextStyle(a, !0),
                  (a.fill = a.stroke = a.shadowBlur = a.shadowColor = a.shadowOffsetX = a.shadowOffsetY = null);
                var n = a.text;
                null != n && (n += ""),
                  a.bind(t, this, e),
                  o.needDrawText(n, a) &&
                    (this.setTransform(t),
                    o.renderText(this, t, n, a),
                    this.restoreTransform(t));
              },
              getBoundingRect: function() {
                var t = this.style;
                if (
                  (this.__dirty && o.normalizeTextStyle(t, !0), !this._rect)
                ) {
                  var e = t.text;
                  null != e ? (e += "") : (e = "");
                  var a = i.getBoundingRect(
                    t.text + "",
                    t.font,
                    t.textAlign,
                    t.textVerticalAlign,
                    t.textPadding,
                    t.rich
                  );
                  if (
                    ((a.x += t.x || 0),
                    (a.y += t.y || 0),
                    o.getStroke(t.textStroke, t.textStrokeWidth))
                  ) {
                    var n = t.textStrokeWidth;
                    (a.x -= n / 2),
                      (a.y -= n / 2),
                      (a.width += n),
                      (a.height += n);
                  }
                  this._rect = a;
                }
                return this._rect;
              },
            }),
              r.inherits(s, n);
            var l = s;
            t.exports = l;
          },
          function(t, e, a) {
            var n = a(1),
              r = n.extend({
                type: "circle",
                shape: { cx: 0, cy: 0, r: 0 },
                buildPath: function(t, e, a) {
                  a && t.moveTo(e.cx + e.r, e.cy),
                    t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
                },
              });
            t.exports = r;
          },
          function(t, e, a) {
            var n = a(1),
              r = a(63),
              i = n.extend({
                type: "sector",
                shape: {
                  cx: 0,
                  cy: 0,
                  r0: 0,
                  r: 0,
                  startAngle: 0,
                  endAngle: 2 * Math.PI,
                  clockwise: !0,
                },
                brush: r(n.prototype.brush),
                buildPath: function(t, e) {
                  var a = e.cx,
                    n = e.cy,
                    r = Math.max(e.r0 || 0, 0),
                    i = Math.max(e.r, 0),
                    o = e.startAngle,
                    s = e.endAngle,
                    l = e.clockwise,
                    c = Math.cos(o),
                    u = Math.sin(o);
                  t.moveTo(c * r + a, u * r + n),
                    t.lineTo(c * i + a, u * i + n),
                    t.arc(a, n, i, o, s, !l),
                    t.lineTo(Math.cos(s) * r + a, Math.sin(s) * r + n),
                    0 !== r && t.arc(a, n, r, s, o, l),
                    t.closePath();
                },
              });
            t.exports = i;
          },
          function(t, e, a) {
            function n(t) {
              return r.browser.ie && r.browser.version >= 11
                ? function() {
                    var e,
                      a = this.__clipPaths,
                      n = this.style;
                    if (a)
                      for (var r = 0; r < a.length; r++) {
                        var o = a[r],
                          s = o && o.shape,
                          l = o && o.type;
                        if (
                          s &&
                          (("sector" === l && s.startAngle === s.endAngle) ||
                            ("rect" === l && (!s.width || !s.height)))
                        ) {
                          for (var c = 0; c < i.length; c++)
                            (i[c][2] = n[i[c][0]]), (n[i[c][0]] = i[c][1]);
                          e = !0;
                          break;
                        }
                      }
                    if ((t.apply(this, arguments), e))
                      for (c = 0; c < i.length; c++) n[i[c][0]] = i[c][2];
                  }
                : t;
            }
            var r = a(15),
              i = [
                ["shadowBlur", 0],
                ["shadowColor", "#000"],
                ["shadowOffsetX", 0],
                ["shadowOffsetY", 0],
              ];
            t.exports = n;
          },
          function(t, e, a) {
            var n = a(1),
              r = n.extend({
                type: "ring",
                shape: { cx: 0, cy: 0, r: 0, r0: 0 },
                buildPath: function(t, e) {
                  var a = e.cx,
                    n = e.cy,
                    r = 2 * Math.PI;
                  t.moveTo(a + e.r, n),
                    t.arc(a, n, e.r, 0, r, !1),
                    t.moveTo(a + e.r0, n),
                    t.arc(a, n, e.r0, 0, r, !0);
                },
              });
            t.exports = r;
          },
          function(t, e, a) {
            var n = a(1),
              r = a(23),
              i = n.extend({
                type: "polygon",
                shape: { points: null, smooth: !1, smoothConstraint: null },
                buildPath: function(t, e) {
                  r.buildPath(t, e, !0);
                },
              });
            t.exports = i;
          },
          function(t, e, a) {
            function n(t, e, a, n, r, i, o) {
              var s = 0.5 * (a - t),
                l = 0.5 * (n - e);
              return (
                (2 * (e - a) + s + l) * o +
                (-3 * (e - a) - 2 * s - l) * i +
                s * r +
                e
              );
            }
            function r(t, e) {
              for (var a = t.length, r = [], i = 0, s = 1; s < a; s++)
                i += o(t[s - 1], t[s]);
              var l = i / 2;
              l = l < a ? a : l;
              for (s = 0; s < l; s++) {
                var c,
                  u,
                  h,
                  d = (s / (l - 1)) * (e ? a : a - 1),
                  f = Math.floor(d),
                  m = d - f,
                  v = t[f % a];
                e
                  ? ((c = t[(f - 1 + a) % a]),
                    (u = t[(f + 1) % a]),
                    (h = t[(f + 2) % a]))
                  : ((c = t[0 === f ? f : f - 1]),
                    (u = t[f > a - 2 ? a - 1 : f + 1]),
                    (h = t[f > a - 3 ? a - 1 : f + 2]));
                var p = m * m,
                  g = m * p;
                r.push([
                  n(c[0], v[0], u[0], h[0], m, p, g),
                  n(c[1], v[1], u[1], h[1], m, p, g),
                ]);
              }
              return r;
            }
            var i = a(2),
              o = i.distance;
            t.exports = r;
          },
          function(t, e, a) {
            function n(t, e, a, n) {
              var r,
                d,
                f,
                m,
                v = [],
                p = [],
                g = [],
                y = [];
              if (n) {
                (f = [1 / 0, 1 / 0]), (m = [-1 / 0, -1 / 0]);
                for (var b = 0, x = t.length; b < x; b++)
                  i(f, f, t[b]), o(m, m, t[b]);
                i(f, f, n[0]), o(m, m, n[1]);
              }
              for (b = 0, x = t.length; b < x; b++) {
                var w = t[b];
                if (a) (r = t[b ? b - 1 : x - 1]), (d = t[(b + 1) % x]);
                else {
                  if (0 === b || b === x - 1) {
                    v.push(u(t[b]));
                    continue;
                  }
                  (r = t[b - 1]), (d = t[b + 1]);
                }
                h(p, d, r), s(p, p, e);
                var _ = l(w, r),
                  S = l(w, d),
                  C = _ + S;
                0 !== C && ((_ /= C), (S /= C)), s(g, p, -_), s(y, p, S);
                var k = c([], w, g),
                  M = c([], w, y);
                n && (o(k, k, f), i(k, k, m), o(M, M, f), i(M, M, m)),
                  v.push(k),
                  v.push(M);
              }
              return a && v.push(v.shift()), v;
            }
            var r = a(2),
              i = r.min,
              o = r.max,
              s = r.scale,
              l = r.distance,
              c = r.add,
              u = r.clone,
              h = r.sub;
            t.exports = n;
          },
          function(t, e, a) {
            var n = a(1),
              r = a(23),
              i = n.extend({
                type: "polyline",
                shape: { points: null, smooth: !1, smoothConstraint: null },
                style: { stroke: "#000", fill: null },
                buildPath: function(t, e) {
                  r.buildPath(t, e, !1);
                },
              });
            t.exports = i;
          },
          function(t, e, a) {
            var n = a(1),
              r = a(21),
              i = n.extend({
                type: "rect",
                shape: { r: 0, x: 0, y: 0, width: 0, height: 0 },
                buildPath: function(t, e) {
                  var a = e.x,
                    n = e.y,
                    i = e.width,
                    o = e.height;
                  e.r ? r.buildPath(t, e) : t.rect(a, n, i, o), t.closePath();
                },
              });
            t.exports = i;
          },
          function(t, e, a) {
            var n = a(1),
              r = n.extend({
                type: "line",
                shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 },
                style: { stroke: "#000", fill: null },
                buildPath: function(t, e) {
                  var a = e.x1,
                    n = e.y1,
                    r = e.x2,
                    i = e.y2,
                    o = e.percent;
                  0 !== o &&
                    (t.moveTo(a, n),
                    o < 1 &&
                      ((r = a * (1 - o) + r * o), (i = n * (1 - o) + i * o)),
                    t.lineTo(r, i));
                },
                pointAt: function(t) {
                  var e = this.shape;
                  return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
                },
              });
            t.exports = r;
          },
          function(t, e, a) {
            function n(t, e, a) {
              var n = t.cpx2,
                r = t.cpy2;
              return null === n || null === r
                ? [
                    (a ? d : u)(t.x1, t.cpx1, t.cpx2, t.x2, e),
                    (a ? d : u)(t.y1, t.cpy1, t.cpy2, t.y2, e),
                  ]
                : [
                    (a ? h : c)(t.x1, t.cpx1, t.x2, e),
                    (a ? h : c)(t.y1, t.cpy1, t.y2, e),
                  ];
            }
            var r = a(1),
              i = a(2),
              o = a(4),
              s = o.quadraticSubdivide,
              l = o.cubicSubdivide,
              c = o.quadraticAt,
              u = o.cubicAt,
              h = o.quadraticDerivativeAt,
              d = o.cubicDerivativeAt,
              f = [],
              m = r.extend({
                type: "bezier-curve",
                shape: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 0,
                  cpx1: 0,
                  cpy1: 0,
                  percent: 1,
                },
                style: { stroke: "#000", fill: null },
                buildPath: function(t, e) {
                  var a = e.x1,
                    n = e.y1,
                    r = e.x2,
                    i = e.y2,
                    o = e.cpx1,
                    c = e.cpy1,
                    u = e.cpx2,
                    h = e.cpy2,
                    d = e.percent;
                  0 !== d &&
                    (t.moveTo(a, n),
                    null == u || null == h
                      ? (d < 1 &&
                          (s(a, o, r, d, f),
                          (o = f[1]),
                          (r = f[2]),
                          s(n, c, i, d, f),
                          (c = f[1]),
                          (i = f[2])),
                        t.quadraticCurveTo(o, c, r, i))
                      : (d < 1 &&
                          (l(a, o, u, r, d, f),
                          (o = f[1]),
                          (u = f[2]),
                          (r = f[3]),
                          l(n, c, h, i, d, f),
                          (c = f[1]),
                          (h = f[2]),
                          (i = f[3])),
                        t.bezierCurveTo(o, c, u, h, r, i)));
                },
                pointAt: function(t) {
                  return n(this.shape, t, !1);
                },
                tangentAt: function(t) {
                  var e = n(this.shape, t, !0);
                  return i.normalize(e, e);
                },
              });
            t.exports = m;
          },
          function(t, e, a) {
            var n = a(1),
              r = n.extend({
                type: "arc",
                shape: {
                  cx: 0,
                  cy: 0,
                  r: 0,
                  startAngle: 0,
                  endAngle: 2 * Math.PI,
                  clockwise: !0,
                },
                style: { stroke: "#000", fill: null },
                buildPath: function(t, e) {
                  var a = e.cx,
                    n = e.cy,
                    r = Math.max(e.r, 0),
                    i = e.startAngle,
                    o = e.endAngle,
                    s = e.clockwise,
                    l = Math.cos(i),
                    c = Math.sin(i);
                  t.moveTo(l * r + a, c * r + n), t.arc(a, n, r, i, o, !s);
                },
              });
            t.exports = r;
          },
          function(t, e, a) {
            var n = a(1),
              r = n.extend({
                type: "compound",
                shape: { paths: null },
                _updatePathDirty: function() {
                  for (
                    var t = this.__dirtyPath, e = this.shape.paths, a = 0;
                    a < e.length;
                    a++
                  )
                    t = t || e[a].__dirtyPath;
                  (this.__dirtyPath = t), (this.__dirty = this.__dirty || t);
                },
                beforeBrush: function() {
                  this._updatePathDirty();
                  for (
                    var t = this.shape.paths || [],
                      e = this.getGlobalScale(),
                      a = 0;
                    a < t.length;
                    a++
                  )
                    t[a].path || t[a].createPathProxy(),
                      t[a].path.setScale(e[0], e[1]);
                },
                buildPath: function(t, e) {
                  for (var a = e.paths || [], n = 0; n < a.length; n++)
                    a[n].buildPath(t, a[n].shape, !0);
                },
                afterBrush: function() {
                  for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
                    t[e].__dirtyPath = !1;
                },
                getBoundingRect: function() {
                  return (
                    this._updatePathDirty(),
                    n.prototype.getBoundingRect.call(this)
                  );
                },
              });
            t.exports = r;
          },
          function(t, e, a) {
            var n = a(0),
              r = a(24),
              i = function(t, e, a, n, i, o) {
                (this.x = null == t ? 0 : t),
                  (this.y = null == e ? 0 : e),
                  (this.x2 = null == a ? 1 : a),
                  (this.y2 = null == n ? 0 : n),
                  (this.type = "linear"),
                  (this.global = o || !1),
                  r.call(this, i);
              };
            (i.prototype = { constructor: i }), n.inherits(i, r);
            var o = i;
            t.exports = o;
          },
          function(t, e, a) {
            var n = a(0),
              r = a(24),
              i = function(t, e, a, n, i) {
                (this.x = null == t ? 0.5 : t),
                  (this.y = null == e ? 0.5 : e),
                  (this.r = null == a ? 0.5 : a),
                  (this.type = "radial"),
                  (this.global = i || !1),
                  r.call(this, n);
              };
            (i.prototype = { constructor: i }), n.inherits(i, r);
            var o = i;
            t.exports = o;
          },
          function(t, e, a) {
            var n = a(11),
              r = n([
                ["fill", "color"],
                ["stroke", "borderColor"],
                ["lineWidth", "borderWidth"],
                ["opacity"],
                ["shadowBlur"],
                ["shadowOffsetX"],
                ["shadowOffsetY"],
                ["shadowColor"],
                ["textPosition"],
                ["textAlign"],
              ]),
              i = {
                getItemStyle: function(t, e) {
                  var a = r(this, t, e),
                    n = this.getBorderLineDash();
                  return n && (a.lineDash = n), a;
                },
                getBorderLineDash: function() {
                  var t = this.get("borderType");
                  return "solid" === t || null == t
                    ? null
                    : "dashed" === t
                    ? [5, 5]
                    : [1, 1];
                },
              };
            t.exports = i;
          },
          function(t, e, a) {
            var n = a(7);
            n.extendChartView({
              type: "wordCloud",
              render: function(t, e, a) {
                var r = this.group;
                r.removeAll();
                var i = t.getData(),
                  o = t.get("gridSize");
                (t.layoutInstance.ondraw = function(t, e, a, s) {
                  var l = i.getItemModel(a),
                    c = l.getModel("textStyle.normal"),
                    u = l.getModel("textStyle.emphasis"),
                    h = new n.graphic.Text({
                      style: n.graphic.setTextStyle({}, c, {
                        x: s.info.fillTextOffsetX,
                        y: s.info.fillTextOffsetY + 0.5 * e,
                        text: t,
                        textBaseline: "middle",
                        textFill: i.getItemVisual(a, "color"),
                        fontSize: e,
                      }),
                      scale: [1 / s.info.mu, 1 / s.info.mu],
                      position: [
                        (s.gx + s.info.gw / 2) * o,
                        (s.gy + s.info.gh / 2) * o,
                      ],
                      rotation: s.rot,
                    });
                  r.add(h),
                    i.setItemGraphicEl(a, h),
                    n.graphic.setHoverStyle(
                      h,
                      n.graphic.setTextStyle({}, u, null, { forMerge: !0 }, !0)
                    );
                }),
                  (this._model = t);
              },
              remove: function() {
                this.group.removeAll(), this._model.layoutInstance.dispose();
              },
              dispose: function() {
                this._model.layoutInstance.dispose();
              },
            });
          },
          function(t, e, a) {
            "use strict";
            var n, r;
            /*!
             * wordcloud2.js
             * http://timdream.org/wordcloud2.js/
             *
             * Copyright 2011 - 2013 Tim Chien
             * Released under the MIT license
             */ window.setImmediate ||
              (window.setImmediate = (function() {
                return (
                  window.msSetImmediate ||
                  window.webkitSetImmediate ||
                  window.mozSetImmediate ||
                  window.oSetImmediate ||
                  (function() {
                    if (!window.postMessage || !window.addEventListener)
                      return null;
                    var t = [void 0],
                      e = "zero-timeout-message",
                      a = function(a) {
                        var n = t.length;
                        return (
                          t.push(a),
                          window.postMessage(e + n.toString(36), "*"),
                          n
                        );
                      };
                    return (
                      window.addEventListener(
                        "message",
                        function(a) {
                          if (
                            "string" == typeof a.data &&
                            a.data.substr(0, e.length) === e
                          ) {
                            a.stopImmediatePropagation();
                            var n = parseInt(a.data.substr(e.length), 36);
                            t[n] && (t[n](), (t[n] = void 0));
                          }
                        },
                        !0
                      ),
                      (window.clearImmediate = function(e) {
                        t[e] && (t[e] = void 0);
                      }),
                      a
                    );
                  })() ||
                  function(t) {
                    window.setTimeout(t, 0);
                  }
                );
              })()),
              window.clearImmediate ||
                (window.clearImmediate = (function() {
                  return (
                    window.msClearImmediate ||
                    window.webkitClearImmediate ||
                    window.mozClearImmediate ||
                    window.oClearImmediate ||
                    function(t) {
                      window.clearTimeout(t);
                    }
                  );
                })()),
              (function(a) {
                var i = (function() {
                    var t = document.createElement("canvas");
                    if (!t || !t.getContext) return !1;
                    var e = t.getContext("2d");
                    return (
                      !!e.getImageData &&
                      !!e.fillText &&
                      !!Array.prototype.some &&
                      !!Array.prototype.push
                    );
                  })(),
                  o = (function() {
                    if (i) {
                      for (
                        var t,
                          e,
                          a = document.createElement("canvas").getContext("2d"),
                          n = 20;
                        n;

                      ) {
                        if (
                          ((a.font = n.toString(10) + "px sans-serif"),
                          a.measureText("Ｗ").width === t &&
                            a.measureText("m").width === e)
                        )
                          return n + 1;
                        (t = a.measureText("Ｗ").width),
                          (e = a.measureText("m").width),
                          n--;
                      }
                      return 0;
                    }
                  })(),
                  s = function(t) {
                    for (
                      var e, a, n = t.length;
                      n;
                      e = Math.floor(Math.random() * n),
                        a = t[--n],
                        t[n] = t[e],
                        t[e] = a
                    );
                    return t;
                  },
                  l = function(t, e) {
                    function a(t, e) {
                      return (
                        "hsl(" +
                        (360 * Math.random()).toFixed() +
                        "," +
                        (30 * Math.random() + 70).toFixed() +
                        "%," +
                        (Math.random() * (e - t) + t).toFixed() +
                        "%)"
                      );
                    }
                    if (i) {
                      Array.isArray(t) || (t = [t]),
                        t.forEach(function(e, a) {
                          if ("string" == typeof e) {
                            if (((t[a] = document.getElementById(e)), !t[a]))
                              throw "The element id specified is not found.";
                          } else if (!e.tagName && !e.appendChild) throw "You must pass valid HTML elements, or ID of the element.";
                        });
                      var n = {
                        list: [],
                        fontFamily:
                          '"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',
                        fontWeight: "normal",
                        color: "random-dark",
                        minSize: 0,
                        weightFactor: 1,
                        clearCanvas: !0,
                        backgroundColor: "#fff",
                        gridSize: 8,
                        drawOutOfBound: !1,
                        origin: null,
                        drawMask: !1,
                        maskColor: "rgba(255,0,0,0.3)",
                        maskGapWidth: 0.3,
                        wait: 0,
                        abortThreshold: 0,
                        abort: function() {},
                        minRotation: -Math.PI / 2,
                        maxRotation: Math.PI / 2,
                        rotationStep: 0.1,
                        shuffle: !0,
                        rotateRatio: 0.1,
                        shape: "circle",
                        ellipticity: 0.65,
                        classes: null,
                        hover: null,
                        click: null,
                      };
                      if (e) for (var r in e) r in n && (n[r] = e[r]);
                      if ("function" != typeof n.weightFactor) {
                        var l = n.weightFactor;
                        n.weightFactor = function(t) {
                          return t * l;
                        };
                      }
                      if ("function" != typeof n.shape)
                        switch (n.shape) {
                          case "circle":
                          default:
                            n.shape = "circle";
                            break;
                          case "cardioid":
                            n.shape = function(t) {
                              return 1 - Math.sin(t);
                            };
                            break;
                          case "diamond":
                          case "square":
                            n.shape = function(t) {
                              var e = t % ((2 * Math.PI) / 4);
                              return 1 / (Math.cos(e) + Math.sin(e));
                            };
                            break;
                          case "triangle-forward":
                            n.shape = function(t) {
                              var e = t % ((2 * Math.PI) / 3);
                              return (
                                1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e))
                              );
                            };
                            break;
                          case "triangle":
                          case "triangle-upright":
                            n.shape = function(t) {
                              var e =
                                (t + (3 * Math.PI) / 2) % ((2 * Math.PI) / 3);
                              return (
                                1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e))
                              );
                            };
                            break;
                          case "pentagon":
                            n.shape = function(t) {
                              var e = (t + 0.955) % ((2 * Math.PI) / 5);
                              return 1 / (Math.cos(e) + 0.726543 * Math.sin(e));
                            };
                            break;
                          case "star":
                            n.shape = function(t) {
                              var e = (t + 0.955) % ((2 * Math.PI) / 10);
                              return ((t + 0.955) % ((2 * Math.PI) / 5)) -
                                (2 * Math.PI) / 10 >=
                                0
                                ? 1 /
                                    (Math.cos((2 * Math.PI) / 10 - e) +
                                      3.07768 *
                                        Math.sin((2 * Math.PI) / 10 - e))
                                : 1 / (Math.cos(e) + 3.07768 * Math.sin(e));
                            };
                        }
                      n.gridSize = Math.max(Math.floor(n.gridSize), 4);
                      var c,
                        u,
                        h,
                        d,
                        f,
                        m,
                        v,
                        p = n.gridSize,
                        g = p - n.maskGapWidth,
                        y = Math.abs(n.maxRotation - n.minRotation),
                        b = Math.min(n.maxRotation, n.minRotation),
                        x = n.rotationStep;
                      switch (n.color) {
                        case "random-dark":
                          v = function() {
                            return a(10, 50);
                          };
                          break;
                        case "random-light":
                          v = function() {
                            return a(50, 90);
                          };
                          break;
                        default:
                          "function" == typeof n.color && (v = n.color);
                      }
                      var w = null;
                      "function" == typeof n.classes && (w = n.classes);
                      var _,
                        S = !1,
                        C = [],
                        k = function(t) {
                          var e,
                            a,
                            n = t.currentTarget,
                            r = n.getBoundingClientRect();
                          t.touches
                            ? ((e = t.touches[0].clientX),
                              (a = t.touches[0].clientY))
                            : ((e = t.clientX), (a = t.clientY));
                          var i = e - r.left,
                            o = a - r.top,
                            s = Math.floor((i * (n.width / r.width || 1)) / p),
                            l = Math.floor(
                              (o * (n.height / r.height || 1)) / p
                            );
                          return C[s][l];
                        },
                        M = function(t) {
                          var e = k(t);
                          if (_ !== e) {
                            if (((_ = e), !e))
                              return void n.hover(void 0, void 0, t);
                            n.hover(e.item, e.dimension, t);
                          }
                        },
                        T = function(t) {
                          var e = k(t);
                          e &&
                            (n.click(e.item, e.dimension, t),
                            t.preventDefault());
                        },
                        A = [],
                        L = function(t) {
                          if (A[t]) return A[t];
                          var e = 8 * t,
                            a = e,
                            r = [];
                          for (0 === t && r.push([d[0], d[1], 0]); a--; ) {
                            var i = 1;
                            "circle" !== n.shape &&
                              (i = n.shape((a / e) * 2 * Math.PI)),
                              r.push([
                                d[0] + t * i * Math.cos((-a / e) * 2 * Math.PI),
                                d[1] +
                                  t *
                                    i *
                                    Math.sin((-a / e) * 2 * Math.PI) *
                                    n.ellipticity,
                                (a / e) * 2 * Math.PI,
                              ]);
                          }
                          return (A[t] = r), r;
                        },
                        O = function() {
                          return (
                            n.abortThreshold > 0 &&
                            new Date().getTime() - m > n.abortThreshold
                          );
                        },
                        E = function() {
                          return 0 === n.rotateRatio ||
                            Math.random() > n.rotateRatio
                            ? 0
                            : 0 === y
                            ? b
                            : b + Math.round((Math.random() * y) / x) * x;
                        },
                        I = function(t, e, a) {
                          var r = n.weightFactor(e);
                          if (r <= n.minSize) return !1;
                          var i = 1;
                          r < o &&
                            (i = (function() {
                              for (var t = 2; t * r < o; ) t += 2;
                              return t;
                            })());
                          var s = document.createElement("canvas"),
                            l = s.getContext("2d", { willReadFrequently: !0 });
                          l.font =
                            n.fontWeight +
                            " " +
                            (r * i).toString(10) +
                            "px " +
                            n.fontFamily;
                          var c = l.measureText(t).width / i,
                            u =
                              Math.max(
                                r * i,
                                l.measureText("m").width,
                                l.measureText("Ｗ").width
                              ) / i,
                            h = c + 2 * u,
                            d = 3 * u,
                            f = Math.ceil(h / p),
                            m = Math.ceil(d / p);
                          (h = f * p), (d = m * p);
                          var v = -c / 2,
                            g = 0.4 * -u,
                            y = Math.ceil(
                              (h * Math.abs(Math.sin(a)) +
                                d * Math.abs(Math.cos(a))) /
                                p
                            ),
                            b = Math.ceil(
                              (h * Math.abs(Math.cos(a)) +
                                d * Math.abs(Math.sin(a))) /
                                p
                            ),
                            x = b * p,
                            w = y * p;
                          s.setAttribute("width", x),
                            s.setAttribute("height", w),
                            l.scale(1 / i, 1 / i),
                            l.translate((x * i) / 2, (w * i) / 2),
                            l.rotate(-a),
                            (l.font =
                              n.fontWeight +
                              " " +
                              (r * i).toString(10) +
                              "px " +
                              n.fontFamily),
                            (l.fillStyle = "#000"),
                            (l.textBaseline = "middle"),
                            l.fillText(t, v * i, (g + 0.5 * r) * i);
                          var _ = l.getImageData(0, 0, x, w).data;
                          if (O()) return !1;
                          for (
                            var S,
                              C,
                              k,
                              M = [],
                              T = b,
                              A = [y / 2, b / 2, y / 2, b / 2];
                            T--;

                          )
                            for (S = y; S--; ) {
                              k = p;
                              t: for (; k--; )
                                for (C = p; C--; )
                                  if (
                                    _[4 * ((S * p + k) * x + (T * p + C)) + 3]
                                  ) {
                                    M.push([T, S]),
                                      T < A[3] && (A[3] = T),
                                      T > A[1] && (A[1] = T),
                                      S < A[0] && (A[0] = S),
                                      S > A[2] && (A[2] = S);
                                    break t;
                                  }
                            }
                          return {
                            mu: i,
                            occupied: M,
                            bounds: A,
                            gw: b,
                            gh: y,
                            fillTextOffsetX: v,
                            fillTextOffsetY: g,
                            fillTextWidth: c,
                            fillTextHeight: u,
                            fontSize: r,
                          };
                        },
                        P = function(t, e, a, r, i) {
                          for (var o = i.length; o--; ) {
                            var s = t + i[o][0],
                              l = e + i[o][1];
                            if (s >= u || l >= h || s < 0 || l < 0) {
                              if (!n.drawOutOfBound) return !1;
                            } else if (!c[s][l]) return !1;
                          }
                          return !0;
                        },
                        D = function(e, a, r, i, o, s, l, c, u) {
                          var h,
                            d,
                            f = r.fontSize;
                          (h = v ? v(i, o, f, s, l) : n.color),
                            (d = w ? w(i, o, f, s, l) : n.classes);
                          var m = r.bounds;
                          m[3],
                            m[0],
                            m[1],
                            m[3],
                            m[2],
                            m[0],
                            t.forEach(function(t) {
                              if (t.getContext) {
                                var o = t.getContext("2d"),
                                  s = r.mu;
                                o.save(),
                                  o.scale(1 / s, 1 / s),
                                  (o.font =
                                    n.fontWeight +
                                    " " +
                                    (f * s).toString(10) +
                                    "px " +
                                    n.fontFamily),
                                  (o.fillStyle = h),
                                  o.translate(
                                    (e + r.gw / 2) * p * s,
                                    (a + r.gh / 2) * p * s
                                  ),
                                  0 !== c && o.rotate(-c),
                                  (o.textBaseline = "middle"),
                                  o.fillText(
                                    i,
                                    r.fillTextOffsetX * s,
                                    (r.fillTextOffsetY + 0.5 * f) * s
                                  ),
                                  o.restore();
                              } else {
                                var l = document.createElement("span"),
                                  m = "";
                                (m =
                                  "rotate(" + (-c / Math.PI) * 180 + "deg) "),
                                  1 !== r.mu &&
                                    (m +=
                                      "translateX(-" +
                                      r.fillTextWidth / 4 +
                                      "px) scale(" +
                                      1 / r.mu +
                                      ")");
                                var v = {
                                  position: "absolute",
                                  display: "block",
                                  font:
                                    n.fontWeight +
                                    " " +
                                    f * r.mu +
                                    "px " +
                                    n.fontFamily,
                                  left:
                                    (e + r.gw / 2) * p +
                                    r.fillTextOffsetX +
                                    "px",
                                  top:
                                    (a + r.gh / 2) * p +
                                    r.fillTextOffsetY +
                                    "px",
                                  width: r.fillTextWidth + "px",
                                  height: r.fillTextHeight + "px",
                                  lineHeight: f + "px",
                                  whiteSpace: "nowrap",
                                  transform: m,
                                  webkitTransform: m,
                                  msTransform: m,
                                  transformOrigin: "50% 40%",
                                  webkitTransformOrigin: "50% 40%",
                                  msTransformOrigin: "50% 40%",
                                };
                                for (var g in (h && (v.color = h),
                                (l.textContent = i),
                                v))
                                  l.style[g] = v[g];
                                if (u) for (var y in u) l.setAttribute(y, u[y]);
                                d && (l.className += d), t.appendChild(l);
                              }
                            });
                        },
                        z = function(e, a, n, r, i) {
                          e >= u ||
                            a >= h ||
                            e < 0 ||
                            a < 0 ||
                            ((c[e][a] = !1),
                            n &&
                              t[0]
                                .getContext("2d")
                                .fillRect(e * p, a * p, g, g),
                            S && (C[e][a] = { item: i, dimension: r }));
                        },
                        B = function(e, a, r, i, o, s) {
                          var l,
                            c,
                            d = o.occupied,
                            f = n.drawMask;
                          if (
                            (f &&
                              ((l = t[0].getContext("2d")),
                              l.save(),
                              (l.fillStyle = n.maskColor)),
                            S)
                          ) {
                            var m = o.bounds;
                            c = {
                              x: (e + m[3]) * p,
                              y: (a + m[0]) * p,
                              w: (m[1] - m[3] + 1) * p,
                              h: (m[2] - m[0] + 1) * p,
                            };
                          }
                          for (var v = d.length; v--; ) {
                            var g = e + d[v][0],
                              y = a + d[v][1];
                            g >= u ||
                              y >= h ||
                              g < 0 ||
                              y < 0 ||
                              z(g, y, f, c, s);
                          }
                          f && l.restore();
                        },
                        W = function(t) {
                          var e, a, r;
                          Array.isArray(t)
                            ? ((e = t[0]), (a = t[1]))
                            : ((e = t.word),
                              (a = t.weight),
                              (r = t.attributes));
                          var i = E(),
                            o = I(e, a, i);
                          if (!o) return !1;
                          if (O()) return !1;
                          if (!n.drawOutOfBound) {
                            var l = o.bounds;
                            if (l[1] - l[3] + 1 > u || l[2] - l[0] + 1 > h)
                              return !1;
                          }
                          for (var c = f + 1; c--; ) {
                            var d = L(f - c);
                            n.shuffle && ((d = [].concat(d)), s(d));
                            for (var m = 0; m < d.length; m++) {
                              var v = (function(n) {
                                var s = Math.floor(n[0] - o.gw / 2),
                                  l = Math.floor(n[1] - o.gh / 2);
                                return (
                                  o.gw,
                                  o.gh,
                                  !!P(s, l, 0, 0, o.occupied) &&
                                    (D(s, l, o, e, a, f - c, n[2], i, r),
                                    B(s, l, 0, 0, o, t),
                                    { gx: s, gy: l, rot: i, info: o })
                                );
                              })(d[m]);
                              if (v) return v;
                            }
                          }
                          return null;
                        },
                        R = function(e, a, n) {
                          if (a)
                            return !t.some(function(t) {
                              var r = document.createEvent("CustomEvent");
                              return (
                                r.initCustomEvent(e, !0, a, n || {}),
                                !t.dispatchEvent(r)
                              );
                            }, this);
                          t.forEach(function(t) {
                            var r = document.createEvent("CustomEvent");
                            r.initCustomEvent(e, !0, a, n || {}),
                              t.dispatchEvent(r);
                          }, this);
                        };
                      !(function() {
                        var e = t[0];
                        if (e.getContext)
                          (u = Math.ceil(e.width / p)),
                            (h = Math.ceil(e.height / p));
                        else {
                          var a = e.getBoundingClientRect();
                          (u = Math.ceil(a.width / p)),
                            (h = Math.ceil(a.height / p));
                        }
                        if (R("wordcloudstart", !0)) {
                          var r, i, o, s, l;
                          if (
                            ((d = n.origin
                              ? [n.origin[0] / p, n.origin[1] / p]
                              : [u / 2, h / 2]),
                            (f = Math.floor(Math.sqrt(u * u + h * h))),
                            (c = []),
                            !e.getContext || n.clearCanvas)
                          )
                            for (
                              t.forEach(function(t) {
                                if (t.getContext) {
                                  var e = t.getContext("2d");
                                  (e.fillStyle = n.backgroundColor),
                                    e.clearRect(0, 0, u * (p + 1), h * (p + 1)),
                                    e.fillRect(0, 0, u * (p + 1), h * (p + 1));
                                } else (t.textContent = ""), (t.style.backgroundColor = n.backgroundColor), (t.style.position = "relative");
                              }),
                                r = u;
                              r--;

                            )
                              for (c[r] = [], i = h; i--; ) c[r][i] = !0;
                          else {
                            var v = document
                              .createElement("canvas")
                              .getContext("2d");
                            (v.fillStyle = n.backgroundColor),
                              v.fillRect(0, 0, 1, 1);
                            var g,
                              y,
                              b = v.getImageData(0, 0, 1, 1).data,
                              x = e
                                .getContext("2d")
                                .getImageData(0, 0, u * p, h * p).data;
                            for (r = u; r--; )
                              for (c[r] = [], i = h; i--; ) {
                                y = p;
                                t: for (; y--; )
                                  for (g = p; g--; )
                                    for (o = 4; o--; )
                                      if (
                                        x[
                                          4 *
                                            ((i * p + y) * u * p +
                                              (r * p + g)) +
                                            o
                                        ] !== b[o]
                                      ) {
                                        c[r][i] = !1;
                                        break t;
                                      }
                                !1 !== c[r][i] && (c[r][i] = !0);
                              }
                            x = v = b = void 0;
                          }
                          if (n.hover || n.click) {
                            for (S = !0, r = u + 1; r--; ) C[r] = [];
                            n.hover && e.addEventListener("mousemove", M),
                              n.click &&
                                (e.addEventListener("click", T),
                                e.addEventListener("touchstart", T),
                                e.addEventListener("touchend", function(t) {
                                  t.preventDefault();
                                }),
                                (e.style.webkitTapHighlightColor =
                                  "rgba(0, 0, 0, 0)")),
                              e.addEventListener(
                                "wordcloudstart",
                                function t() {
                                  e.removeEventListener("wordcloudstart", t),
                                    e.removeEventListener("mousemove", M),
                                    e.removeEventListener("click", T),
                                    (_ = void 0);
                                }
                              );
                          }
                          (o = 0),
                            0 !== n.wait
                              ? ((s = window.setTimeout),
                                (l = window.clearTimeout))
                              : ((s = window.setImmediate),
                                (l = window.clearImmediate));
                          var w = function(e, a) {
                              t.forEach(function(t) {
                                t.removeEventListener(e, a);
                              }, this);
                            },
                            k = function t() {
                              w("wordcloudstart", t), l(A);
                            };
                          !(function(e, a) {
                            t.forEach(function(t) {
                              t.addEventListener(e, a);
                            }, this);
                          })("wordcloudstart", k);
                          var A = s(function t() {
                            if (o >= n.list.length)
                              return (
                                l(A),
                                R("wordcloudstop", !1),
                                void w("wordcloudstart", k)
                              );
                            m = new Date().getTime();
                            var e = W(n.list[o]),
                              a = !R("wordclouddrawn", !0, {
                                item: n.list[o],
                                drawn: e,
                              });
                            if (O() || a)
                              return (
                                l(A),
                                n.abort(),
                                R("wordcloudabort", !1),
                                R("wordcloudstop", !1),
                                void w("wordcloudstart", k)
                              );
                            o++, (A = s(t, n.wait));
                          }, n.wait);
                        }
                      })();
                    }
                  };
                (l.isSupported = i),
                  (l.minFontSize = o),
                  (n = []),
                  void 0 !==
                    (r = function() {
                      return l;
                    }.apply(e, n)) && (t.exports = r);
              })();
          },
        ]);
      });
    }.call(this, a("62e4")(t)));
  },
  "777d": function(t, e, a) {
    "use strict";
    var n = a("d43b"),
      r = a.n(n);
    r.a;
  },
  "7a40": function(t, e, a) {
    "use strict";
    var n = a("58f4"),
      r = a.n(n);
    r.a;
  },
  "7ad1": function(t, e, a) {},
  "7dd0a": function(t, e, a) {},
  "7f82": function(t, e, a) {
    "use strict";
    var n = a("7fde"),
      r = a.n(n);
    r.a;
  },
  "7fde": function(t, e, a) {},
  "80f4": function(t, e, a) {
    "use strict";
    var n = a("c769"),
      r = a.n(n);
    r.a;
  },
  "8d4f": function(t, e, a) {
    "use strict";
    var n = a("0dc3"),
      r = a.n(n);
    r.a;
  },
  "8fda": function(t, e, a) {
    "use strict";
    var n = a("e348"),
      r = a.n(n);
    r.a;
  },
  "929b": function(t, e, a) {},
  9363: function(t, e, a) {
    "use strict";
    var n = a("d1bc"),
      r = a.n(n);
    r.a;
  },
  "93ce": function(t, e, a) {},
  9415: function(t, e, a) {},
  9553: function(t, e, a) {
    "use strict";
    var n = a("fd03"),
      r = a.n(n);
    r.a;
  },
  "9a09": function(t, e, a) {},
  "9a76": function(t, e, a) {
    "use strict";
    var n = a("6058"),
      r = a.n(n);
    r.a;
  },
  "9c0c": function(t, e, a) {},
  "9e4a": function(t, e, a) {},
  "9edb": function(t, e, a) {
    "use strict";
    var n = a("7ad1"),
      r = a.n(n);
    r.a;
  },
  a8b3: function(t, e, a) {
    "use strict";
    var n = a("9415"),
      r = a.n(n);
    r.a;
  },
  a9ca: function(t, e, a) {},
  abd0: function(t, e, a) {
    "use strict";
    var n = a("4d7a"),
      r = a.n(n);
    r.a;
  },
  b19f: function(t, e, a) {},
  b9c9: function(t, e, a) {},
  bbc0: function(t, e, a) {
    "use strict";
    var n = a("db63"),
      r = a.n(n);
    r.a;
  },
  be35: function(t, e, a) {},
  be66: function(t, e, a) {},
  c4c7: function(t, e, a) {
    "use strict";
    var n = a("2ba3"),
      r = a.n(n);
    r.a;
  },
  c52e: function(t, e, a) {},
  c769: function(t, e, a) {},
  c988: function(t, e, a) {},
  c98c: function(t, e, a) {},
  ca74: function(t, e, a) {
    "use strict";
    var n = a("5437"),
      r = a.n(n);
    r.a;
  },
  d06b: function(t, e, a) {},
  d1bc: function(t, e, a) {},
  d43b: function(t, e, a) {},
  db63: function(t, e, a) {},
  de9a: function(t, e, a) {
    "use strict";
    var n = a("1852"),
      r = a.n(n);
    r.a;
  },
  e348: function(t, e, a) {},
  e692: function(t, e, a) {
    "use strict";
    var n = a("a9ca"),
      r = a.n(n);
    r.a;
  },
  e84f: function(t, e, a) {
    "use strict";
    var n = a("c98c"),
      r = a.n(n);
    r.a;
  },
  ee04: function(t, e, a) {
    "use strict";
    var n = a("0f07"),
      r = a.n(n);
    r.a;
  },
  f0ed: function(t, e, a) {
    "use strict";
    var n = a("b9c9"),
      r = a.n(n);
    r.a;
  },
  f859: function(t, e, a) {
    "use strict";
    var n = a("2add"),
      r = a.n(n);
    r.a;
  },
  fb39: function(t, e, a) {
    "use strict";
    var n = a("4130"),
      r = a.n(n);
    r.a;
  },
  fd03: function(t, e, a) {},
});

"use strict";
(self["webpackChunkcapsule_ui"] = self["webpackChunkcapsule_ui"] || []).push([
  [358],
  {
    5358: function (t, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return d;
          },
        });
      var s = function () {
          var t = this,
            a = t._self._c;
          return a("div", { attrs: { id: "screenshotpage" } }, [
            a("div", { staticClass: "top_area" }, [
              a(
                "div",
                { staticClass: "top_area_wrapper" },
                [
                  a(
                    "router-link",
                    {
                      staticClass: "top_side_nav top",
                      attrs: { id: "top_side_nav_left", to: "./#index.html" },
                    },
                    [
                      a(
                        "a",
                        { staticClass: "button" },
                        [
                          a("font-awesome-icon", {
                            staticClass: "close",
                            attrs: { icon: ["fas", "circle-xmark"] },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                  t._v(" "),
                  a("div", { staticClass: "top_center_widgetarea top" }),
                  t._v(" "),
                  a("div", {
                    staticClass: "top_side_nav top",
                    attrs: { id: "top_side_nav_right" },
                  }),
                ],
                1
              ),
            ]),
            t._v(" "),
            a("div", { staticClass: "camera-container" }, [
              a("video", {
                attrs: {
                  playsinline: "",
                  autoplay: "",
                  muted: "",
                  id: "camera",
                },
                domProps: { muted: !0 },
              }),
            ]),
          ]);
        },
        i = [],
        n = {
          name: "ScreenshotPage",
          components: {},
          methods: {
            init() {
              var t = "user",
                a = { audio: !1, video: { facingMode: t } };
              navigator.mediaDevices.getUserMedia(a).then(function (t) {
                document.getElementById("camera").srcObject = t;
              });
            },
          },
          data() {
            return {};
          },
          mounted() {
            this.init();
          },
        },
        o = n,
        r = e(1001),
        c = (0, r.Z)(o, s, i, !1, null, "3122452d", null),
        d = c.exports;
    },
  },
]);

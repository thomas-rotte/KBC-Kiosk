"use strict";
(self["webpackChunkcapsule_ui"] = self["webpackChunkcapsule_ui"] || []).push([
  [391],
  {
    8391: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return d;
          },
        });
      var s = function () {
          var t = this,
            e = t._self._c;
          return e("div", { attrs: { id: "iframepage" } }, [
            t._m(0),
            t._v(" "),
            e("div", { staticClass: "top_area" }, [
              e(
                "div",
                { staticClass: "top_area_wrapper" },
                [
                  e(
                    "router-link",
                    {
                      staticClass: "top_side_nav top",
                      attrs: { id: "top_side_nav_left", to: "./#index.html" },
                    },
                    [
                      e(
                        "a",
                        { staticClass: "button" },
                        [
                          e("font-awesome-icon", {
                            staticClass: "close",
                            attrs: { icon: ["fas", "circle-xmark"] },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                  t._v(" "),
                  e("div", { staticClass: "top_center_widgetarea top" }),
                  t._v(" "),
                  e("div", {
                    staticClass: "top_side_nav top",
                    attrs: { id: "top_side_nav_right" },
                  }),
                ],
                1
              ),
            ]),
            t._v(" "),
            e("div", { staticClass: "main_area" }, [
              t._m(1),
              t._v(" "),
              e("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.html,
                    expression: "html",
                  },
                ],
                staticClass: "modal",
                domProps: { innerHTML: t._s(t.html) },
              }),
            ]),
            t._m(2),
          ]);
        },
        i = [
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "background_media_layer fixed_media" },
              [
                e("div", {
                  staticClass: "background_media_layer_overlay fixed_media",
                }),
              ]
            );
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "secondary_content_area_wrapper" }, [
              e("div", { staticClass: "secondary_content_area" }, [
                e("div", {
                  staticClass: "secondary_content_widgetarea",
                  attrs: { id: "secondary_content_widgetarea_left" },
                }),
                t._v(" "),
                e("div", {
                  staticClass: "secondary_content_widgetarea",
                  attrs: { id: "secondary_content_widgetarea_center" },
                }),
                t._v(" "),
                e("div", {
                  staticClass: "secondary_content_widgetarea",
                  attrs: { id: "secondary_content_widgetarea_right" },
                }),
              ]),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "bottom_area" }, [
              e("div", { staticClass: "bottom_content_area_wrapper" }, [
                e("div", {
                  staticClass: "bottom_content_widgetarea",
                  attrs: { id: "bottom_content_widgetarea_left" },
                }),
                t._v(" "),
                e("div", {
                  staticClass: "bottom_content_widgetarea",
                  attrs: { id: "bottom_content_widgetarea_center" },
                }),
                t._v(" "),
                e("div", {
                  staticClass: "bottom_content_widgetarea",
                  attrs: { id: "bottom_content_widgetarea_right" },
                }),
              ]),
            ]);
          },
        ],
        r = a(3822),
        n = {
          name: "iFramePage",
          components: {},
          methods: {
            activeSesh() {
              this.timeElapsed = 0;
            },
          },
          watch: {
            timeElapsed: {
              handler(t) {
                t >= 60 &&
                  (this.$store.commit("setActiveDirectory", this.homeDirectory),
                  this.$router.push("/#index.html"));
              },
            },
          },
          computed: { ...(0, r.rn)(["homeDirectory"]) },
          data() {
            return { html: null, timeElapsed: 0 };
          },
          mounted() {
            var t = this.$videos.filter(
              (t) => t.fields.ID === window.location.href.split("iframe#")[1]
            )[0].fields.HTML;
            try {
              this.html = this.$html.filter((e) => e.title === t)[0].html;
            } catch (e) {
              console.log(e);
            }
            setInterval(() => {
              this.timeElapsed += 1;
            }, 1e3);
          },
        },
        o = n,
        _ = a(1001),
        c = (0, _.Z)(o, s, i, !1, null, null, null),
        d = c.exports;
    },
  },
]);
//# sourceMappingURL=391.53677f73.js.map

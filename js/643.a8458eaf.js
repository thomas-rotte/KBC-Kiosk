"use strict";
(self["webpackChunkcapsule_ui"] = self["webpackChunkcapsule_ui"] || []).push([
  [643],
  {
    9643: function (t, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return c;
          },
        });
      var s = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { attrs: { id: "videopage" } },
            [
              t._m(0),
              t._v(" "),
              e(
                "transition",
                { key: t.showControls, attrs: { appear: "", name: "modal" } },
                [
                  e(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.showControls,
                          expression: "showControls",
                        },
                      ],
                      staticClass: "top_area",
                    },
                    [
                      e("div", { staticClass: "top_area_wrapper" }, [
                        e("div", { staticClass: "top_center_nav top" }, [
                          e(
                            "a",
                            {
                              staticClass: "soundbar button",
                              attrs: { id: "mute" },
                            },
                            [
                              e("font-awesome-icon", {
                                staticClass: "volume",
                                attrs: { icon: ["fas", "volume-times"] },
                              }),
                            ],
                            1
                          ),
                          e(
                            "a",
                            {
                              staticClass: "soundbar button",
                              attrs: { id: "low" },
                            },
                            [
                              e("font-awesome-icon", {
                                staticClass: "volume",
                                attrs: { icon: ["fas", "volume-off"] },
                              }),
                            ],
                            1
                          ),
                          e(
                            "a",
                            {
                              staticClass: "soundbar button",
                              attrs: { id: "medium" },
                            },
                            [
                              e("font-awesome-icon", {
                                staticClass: "volume",
                                attrs: { icon: ["fas", "volume-low"] },
                              }),
                            ],
                            1
                          ),
                          e(
                            "a",
                            {
                              staticClass: "soundbar button",
                              attrs: { id: "high" },
                            },
                            [
                              e("font-awesome-icon", {
                                staticClass: "volume",
                                attrs: { icon: ["fas", "volume-high"] },
                              }),
                            ],
                            1
                          ),
                        ]),
                        t._v(" "),
                        e(
                          "a",
                          {
                            staticClass: "top_side_nav top",
                            attrs: { id: "top_side_nav_left" },
                          },
                          [
                            e(
                              "a",
                              { staticClass: "button", attrs: { id: "close" } },
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
                      ]),
                    ]
                  ),
                ]
              ),
              e("div", { staticClass: "main_area" }, [
                t._m(1),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "modal" },
                  [
                    e(
                      "transition",
                      {
                        key: t.modalVid + 1 + t.$route,
                        attrs: { appear: "", name: "modal" },
                      },
                      [
                        e(
                          "video",
                          {
                            ref: "modalVideo",
                            attrs: {
                              autoplay: "",
                              playsinline: "",
                              loop: t.Loop_Video,
                            },
                          },
                          [
                            e("source", {
                              attrs: { src: t.modalVid, type: "video/mp4" },
                            }),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
              t._m(2),
            ],
            1
          );
        },
        a = [
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
        o = i(3822),
        d = {
          name: "VideoPage",
          components: {},
          props: { feedbackPageEnabled: { type: Boolean, default: !1 } },
          methods: {
            volumeLow() {
              this.$refs.modalVideo.volume = 0.3;
            },
            volumeMedium() {
              this.$refs.modalVideo.volume = 0.6;
            },
            volumeHigh() {
              this.$refs.modalVideo.volume = 0.9;
            },
            volumeMute() {
              this.$refs.modalVideo.volume = 0;
            },
            ended() {
              if (
                this.feedbackPageEnabled &&
                this.$videos.filter(
                  (t) => t.fields.ID === window.location.href.split("video=")[1]
                )[0].fields.Feedback_Video
              )
                return (
                  this.$router.push(
                    `/feedback#video=${
                      this.$videos.filter(
                        (t) =>
                          t.fields.ID ===
                          window.location.href.split("video=")[1]
                      )[0].fields.ID
                    }`
                  ),
                  void this.$store.commit("setActivePage", "FeedbackPage")
                );
              this.goBack();
            },
            goBack() {
              document
                .getElementById("videopage")
                .removeEventListener("click", this.handleClick),
                this.$refs.modalVideo.removeEventListener("ended", this.goBack),
                this.$store.commit("setActivePage", "App"),
                this.homeDirectory.toString() ===
                this.activeDirectory[this.activeDirectory.length - 1].toString()
                  ? this.$nextTick(() => {
                      this.$refs.modalVideo.pause(),
                        delete this.$refs.modalVideo,
                        this.$router.push({ name: "app" });
                    })
                  : this.$router.push("./#index.html");
            },
            handleClick(t) {
              switch (
                ((this.showControls = !0),
                clearTimeout(this.timeout),
                (this.timeout = setTimeout(() => {
                  (this.showControls = !1), clearTimeout(this.timeout);
                }, 4e3)),
                t.target.id)
              ) {
                case "mute":
                  this.volumeMute();
                  break;
                case "low":
                  this.volumeLow();
                  break;
                case "medium":
                  this.volumeMedium();
                  break;
                case "high":
                  this.volumeHigh();
                  break;
                case "close":
                  this.goBack();
              }
            },
          },
          computed: {
            ...(0, o.rn)([
              "carouselTransform",
              "carouselPos",
              "clickedTilesArray",
              "activeDirectory",
              "homeDirectory",
              "nestedRank",
            ]),
          },
          data() {
            return {
              modalVid: null,
              paused: !1,
              showControls: !1,
              timeout: null,
              timeEnteredOnAnyPage: 0,
              Loop_Video: !1,
            };
          },
          mounted() {
            this.$store.commit("setActivePage", "VideoPage");
            try {
              this.modalVid = this.$videos.filter(
                (t) => t.fields.ID === window.location.href.split("video=")[1]
              )[0].fields.Content[0].url;
            } catch {
              window.location.href = "./index.html";
            }
            (this.Loop_Video = this.$videos.filter(
              (t) => t.fields.ID === window.location.href.split("video=")[1]
            )[0].fields.Loop_Video),
              this.$refs.modalVideo.play(),
              document
                .getElementById("videopage")
                .addEventListener("click", this.handleClick),
              this.$refs.modalVideo.addEventListener("ended", this.ended);
          },
        },
        r = d,
        n = i(1001),
        l = (0, n.Z)(r, s, a, !1, null, "5acc9568", null),
        c = l.exports;
    },
  },
]);
//# sourceMappingURL=643.a8458eaf.js.map

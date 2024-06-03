(self["webpackChunkcapsule_ui"] = self["webpackChunkcapsule_ui"] || []).push([
  [858],
  {
    8858: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return l;
          },
        });
      var o = function () {
          var e = this,
            t = e._self._c;
          return t("div", { attrs: { id: "feedbackpage" } }, [
            t("div", { staticClass: "top_area" }),
            e._v(" "),
            t("div", { staticClass: "main_area" }, [
              e._m(0),
              t(
                "div",
                { staticClass: "modal" },
                [
                  t(
                    "transition",
                    { key: e.modalVid, attrs: { appear: "", name: "modal" } },
                    [
                      t(
                        "video",
                        {
                          key: e.modalVid,
                          ref: "modalVideo",
                          attrs: { autoplay: "", playsinline: "" },
                          domProps: { muted: e.isMuted },
                        },
                        [
                          t("source", {
                            attrs: { src: e.modalVid, type: "video/mp4" },
                          }),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]),
          ]);
        },
        s = [
          function () {
            var e = this,
              t = e._self._c;
            return t("div", { staticClass: "feedback" }, [
              t("h1", { staticClass: "prompt" }, [
                t("img", { attrs: { src: i(4737) } }),
              ]),
              t("div", { staticClass: "option", attrs: { id: "neutral" } }, [
                t("img", { attrs: { src: i(8498) } }),
              ]),
              t("div", { staticClass: "option", attrs: { id: "happy" } }, [
                t("img", { attrs: { src: i(4126) } }),
              ]),
              t("div", { staticClass: "option", attrs: { id: "love" } }, [
                t("img", { attrs: { src: i(4117) } }),
              ]),
              t("div", { staticClass: "option", attrs: { id: "wow" } }, [
                t("img", { attrs: { src: i(4712) } }),
              ]),
            ]);
          },
        ],
        d = {
          name: "FeedbackPage",
          components: {},
          methods: {
            randomizeVideo(e) {
              (this.modalVid = i(2619)(`./${this.dir[e]}`)),
                this.$refs.modalVideo.removeEventListener("ended", () =>
                  this.handleEnded(e)
                ),
                this.$nextTick(() => {
                  this.$refs.modalVideo.addEventListener("ended", () =>
                    this.handleEnded(e)
                  ),
                    this.$refs.modalVideo.play();
                });
            },
            integer() {
              if (this.randomized) {
                var e = Math.floor(Math.random() * this.dir.length);
                while (this.videosPlayed.indexOf(e) > -1)
                  e = Math.floor(Math.random() * this.dir.length);
                return e;
              }
              return this.counter++, this.counter;
            },
            handleEnded(e) {
              if ((this.videosPlayed.push(e), 1 === this.videosPlayed.length)) {
                if (!this.loopAll)
                  return (
                    console.log("do timer"),
                    void (this.timeout = setTimeout(() => {
                      (window.location.href = "./index.html"),
                        clearTimeout(this.timeout);
                    }, 3e4))
                  );
                this.videosPlayed = [];
              }
              this.$nextTick(() => {
                this.randomizeVideo(this.integer());
              });
            },
            handleClick(e) {
              if ("option" === e.target.className) {
                let t = [...this.$store.state.feedback];
                t
                  .map((e) => e.video)
                  .indexOf(window.location.href.split("#video=")[1]) > -1
                  ? t.filter(
                      (e) =>
                        e.video === window.location.href.split("#video=")[1]
                    )[0].response[e.target.id]
                    ? t.filter(
                        (e) =>
                          e.video === window.location.href.split("#video=")[1]
                      )[0].response[e.target.id]++
                    : (t.filter(
                        (e) =>
                          e.video === window.location.href.split("#video=")[1]
                      )[0].response[e.target.id] = 1)
                  : t.push({
                      video: window.location.href.split("#video=")[1],
                      response: { [e.target.id]: 1 },
                    }),
                  this.$store.commit("setFeedback", t),
                  (window.location.href = "./index.html");
              }
            },
          },
          data() {
            return {
              dir:
                i(5642).keys().length > 0
                  ? i(5642)
                      .keys()
                      .map((e) => e.split("./")[1])
                  : null,
              isMuted: !1,
              videosPlayed: [],
              modalVid: null,
              loopAll: !1,
              randomized: !0,
              counter: -1,
              timeout: null,
            };
          },
          mounted() {
            try {
              this.$cms.filter(
                (e) => e.fields.ID === window.location.href.split("#video=")[1]
              )[0].fields.Feedback_Video[0].url,
                (this.dir = []),
                (this.dir = this.$cms.filter(
                  (e) =>
                    e.fields.ID === window.location.href.split("#video=")[1]
                )[0].fields.Feedback_Video);
            } catch (e) {}
            this.randomizeVideo(this.integer()),
              document
                .getElementById("feedbackpage")
                .addEventListener("click", this.handleClick);
          },
        },
        r = d,
        n = i(1001),
        a = (0, n.Z)(r, o, s, !1, null, "730c5f70", null),
        l = a.exports;
    },
    2619: function (e, t, i) {
      var o = { "./Feedback-ActionPacked.mp4": 9569 };
      function s(e) {
        var t = d(e);
        return i(t);
      }
      function d(e) {
        if (!i.o(o, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return o[e];
      }
      (s.keys = function () {
        return Object.keys(o);
      }),
        (s.resolve = d),
        (e.exports = s),
        (s.id = 2619);
    },
    5642: function (e, t, i) {
      var o = { "./Feedback-ActionPacked.mp4": 9569 };
      function s(e) {
        var t = d(e);
        return i(t);
      }
      function d(e) {
        if (!i.o(o, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return o[e];
      }
      (s.keys = function () {
        return Object.keys(o);
      }),
        (s.resolve = d),
        (e.exports = s),
        (s.id = 5642);
    },
    9569: function (e, t, i) {
      "use strict";
      e.exports = i.p + "media/Feedback-ActionPacked.65b551fc.mp4";
    },
    4126: function (e, t, i) {
      "use strict";
      e.exports = i.p + "img/Happy.4888191b.gif";
    },
    4117: function (e, t, i) {
      "use strict";
      e.exports = i.p + "img/Love.c169fa31.gif";
    },
    8498: function (e, t, i) {
      "use strict";
      e.exports = i.p + "img/Neutral.2f257834.gif";
    },
    4712: function (e, t, i) {
      "use strict";
      e.exports = i.p + "img/Wow.4d530595.gif";
    },
    4737: function (e, t, i) {
      "use strict";
      e.exports = i.p + "img/give-us-your-feedback.e9fd58c0.gif";
    },
  },
]);
//# sourceMappingURL=858.f2e6d8d8.js.map

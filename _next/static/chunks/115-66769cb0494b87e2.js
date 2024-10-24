(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [115], {
        2115: function (n, e, t) {
            "use strict";
            t.d(e, {
                Z: function () {
                    return k
                }
            });
            var i = t(2729),
                a = t(5893),
                r = t(7294),
                s = t(1686),
                o = t(4561);

            function l(n) {
                return (0, a.jsxs)(o.ZP, {
                    speed: 2,
                    width: 300,
                    height: 130,
                    viewBox: "0 0 525 225",
                    backgroundColor: "#2b2b2b",
                    foregroundColor: "#424242",
                    ...n,
                    children: [(0, a.jsx)("circle", {
                        cx: "85",
                        cy: "85",
                        r: "60"
                    }), (0, a.jsx)("rect", {
                        x: "25",
                        y: "160",
                        rx: "3",
                        ry: "3",
                        width: "250",
                        height: "50"
                    })]
                })
            }
            var c = t(9181),
                d = t.n(c),
                u = t(245);

            function p() {
                let n = (0, i._)(["\n  margin-bottom: 8px;\n  margin-top: 0;\n  font-size: 12px;\n  color: #b9bbbe;\n"]);
                return p = function () {
                    return n
                }, n
            }

            function h() {
                let n = (0, i._)(["\n  position: relative;\n  height: 60px;\n"]);
                return h = function () {
                    return n
                }, n
            }

            function g() {
                let n = (0, i._)(["\n  display: flex;\n  flex-direction: row;\n"]);
                return g = function () {
                    return n
                }, n
            }

            function x() {
                let n = (0, i._)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n"]);
                return x = function () {
                    return n
                }, n
            }

            function m() {
                let n = (0, i._)(["\n  margin-left: 1rem;\n  text-align: left;\n  h5 {\n    margin: 0;\n    font-size: 13px;\n    \n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n  h3 {\n    margin: 0;\n    font-size: 20px;\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n  p {\n    margin: 0;\n    padding-top: 3px;\n    font-size: 10px;\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"]);
                return m = function () {
                    return n
                }, n
            }

            function f() {
                let n = (0, i._)(["\n  width: 100%;\n  margin-top: 10px;\n  margin-left: 0rem;\n  text-align: left;\n  h5 {\n    margin: 0;\n    font-size: 13px;\n    \n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n  p {\n    margin: 0;\n    padding-top: 3px;\n    font-size: 10px;\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"]);
                return f = function () {
                    return n
                }, n
            }

            function _() {
                let n = (0, i._)(["\n  background-color: rgba(200, 200, 200, 0.3);\n  height: 5px;\n  border-radius: 5px;\n"]);
                return _ = function () {
                    return n
                }, n
            }

            function v() {
                let n = (0, i._)(["\n  background-color: #dcddde;\n  height: 100%;\n  border-radius: 5px;\n"]);
                return v = function () {
                    return n
                }, n
            }

            function y() {
                let n = (0, i._)(["\n  display: flex;\n  justify-content: space-between;\n"]);
                return y = function () {
                    return n
                }, n
            }

            function b() {
                let n = (0, i._)(["\n  height: 25px;\n  width: 25px;\n  border-radius:50%;\n  background-color: rgb(28, 176, 80);\n  display: inline-block;\n  border: 5px solid #161616;\n"]);
                return b = function () {
                    return n
                }, n
            }

            function j() {
                let n = (0, i._)(["\n  height: 25px;\n  width: 25px;\n  border-radius:50%;\n  background-color: #f04747;\n  display: inline-block;\n  border: 5px solid #161616;\n"]);
                return j = function () {
                    return n
                }, n
            }

            function w() {
                let n = (0, i._)(["\n  height: 25px;\n  width: 25px;\n  border-radius:50%;\n  background-color: #faa81a;\n  display: inline-block;\n  border: 5px solid #161616;\n"]);
                return w = function () {
                    return n
                }, n
            }

            function N() {
                let n = (0, i._)(["\n  height: 25px;\n  width: 25px;\n  border-radius:50%;\n  background-color: #747f8d;\n  display: inline-block;\n  border: 5px solid #161616;\n"]);
                return N = function () {
                    return n
                }, n
            }

            function A() {
                let n = (0, i._)(["\n  background: none;\n  border: none;\n  color: #dcddde;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: #ffffff;\n  }\n"]);
                return A = function () {
                    return n
                }, n
            }

            function I() {
                let n = (0, i._)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 12px;\n  color: #b9bbbe;\n"]);
                return I = function () {
                    return n
                }, n
            }

            function k(n) {
                let {
                    discordId: e,
                    newTab: t
                } = n, [i, s] = (0, r.useState)(null), [o, c] = (0, r.useState)("0:00 / 0:00"), [p, h] = (0, r.useState)("0%"), [g, x] = (0, r.useState)(0), m = (0, r.useRef)(null), f = (0, r.useCallback)(() => {
                    m.current = new WebSocket("wss://api.lanyard.rest/socket"), m.current.onopen = () => {
                        var n;
                        console.log("WebSocket connected"), null === (n = m.current) || void 0 === n || n.send(JSON.stringify({
                            op: 2,
                            d: {
                                subscribe_to_id: e
                            }
                        }))
                    }, m.current.onmessage = n => {
                        let e = JSON.parse(n.data);
                        ("INIT_STATE" === e.t || "PRESENCE_UPDATE" === e.t) && s(e.d)
                    }, m.current.onclose = () => {
                        console.log("WebSocket disconnected. Reconnecting..."), setTimeout(f, 5e3)
                    }
                }, [e]);
                (0, r.useEffect)(() => (f(), () => {
                    var n;
                    null === (n = m.current) || void 0 === n || n.close()
                }), [f]);
                let _ = (0, r.useCallback)(() => {
                    if ((null == i ? void 0 : i.activities) && i.activities.length > 0) {
                        let t = i.activities[g];
                        if (2 === t.type) {
                            var n, e;
                            let i = null === (n = t.timestamps) || void 0 === n ? void 0 : n.start,
                                a = null === (e = t.timestamps) || void 0 === e ? void 0 : e.end;
                            if (i) {
                                let n = Date.now() - i,
                                    e = a ? a - i : 0,
                                    t = v(Math.floor(n / 1e3)),
                                    r = "--:--";
                                a ? (r = v(Math.floor(e / 1e3)), h("".concat(n / e * 100, "%"))) : h("0%"), c("".concat(t, " / ").concat(r))
                            }
                        }
                    }
                }, [i, g]);

                function v(n) {
                    return "".concat(Math.floor(n / 60), ":").concat((n % 60).toString().padStart(2, "0"))
                }

                function y(n, e) {
                    return (null == e ? void 0 : e.startsWith("mp:external")) ? e.replace(/mp:external\/([^\/]*)\/(http[s])/g, "$2:/") : "https://cdn.discordapp.com/app-assets/".concat(n, "/").concat(e, ".png")
                }(0, r.useEffect)(() => {
                    let n = setInterval(_, 1e3);
                    return () => clearInterval(n)
                }, [_]);
                let b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

                function j() {
                    return i ? "dnd" === i.discord_status ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(F, {
                            className: t ? d().secondaryImageOutlineNewTab : d().secondaryImageOutline
                        })
                    }) : "idle" === i.discord_status ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(B, {
                            className: t ? d().secondaryImageOutlineNewTab : d().secondaryImageOutline
                        })
                    }) : "online" === i.discord_status ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(D, {
                            className: t ? d().secondaryImageOutlineNewTab : d().secondaryImageOutline
                        })
                    }) : (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(z, {
                            className: t ? d().secondaryImageOutlineNewTab : d().secondaryImageOutline
                        })
                    }) : null
                }
                if (null === i) return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: t ? d().activityLoaderNewTab : d().activityLoader,
                        children: (0, a.jsx)(l, {})
                    })
                }); {
                    let n = [...i.activities].sort((n, e) => 2 === n.type ? -1 : 2 === e.type ? 1 : 0);
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                            className: t ? d().activityNewTab : d().activity,
                            children: [(0, a.jsx)(function () {
                                return i ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(T, {
                                        style: {
                                            paddingBottom: "8px"
                                        },
                                        children: (0, a.jsxs)(S, {
                                            children: [(0, a.jsx)("img", {
                                                className: d().avatarImage,
                                                src: "https://cdn.discordapp.com/avatars/".concat(i.discord_user.id, "/").concat(i.discord_user.avatar).concat(i.discord_user.avatar.startsWith("a_") ? ".gif" : ".png"),
                                                alt: "@".concat(i.discord_user.id),
                                                width: 60,
                                                height: 60
                                            }), i.discord_user.avatar_decoration_data && (0, a.jsx)("img", {
                                                className: d().avatarDecoration,
                                                src: "https://cdn.discordapp.com/avatar-decoration-presets/".concat(i.discord_user.avatar_decoration_data.asset, ".png?passthrough=true"),
                                                alt: "Avatar Decoration",
                                                width: 80,
                                                height: 80
                                            }), (0, a.jsx)(j, {})]
                                        })
                                    }), (0, a.jsx)(T, {
                                        style: i.activities.length > 0 ? {
                                            paddingBottom: "16px"
                                        } : {},
                                        children: (0, a.jsx)(O, {
                                            style: {
                                                padding: 0,
                                                margin: 0
                                            },
                                            children: (0, a.jsxs)("h3", {
                                                children: [
                                                    (0, a.jsx)("a", {
                                                        href: `https://discord.com/users/${i.discord_user.id}/`,
                                                        target: "_blank",  
                                                        children: `@${i.discord_user.username}`
                                                    })
                                                ]
                                            })                                            
                                        })
                                    })]
                                }) : null
                            }, {}), n.length > 0 && (0, a.jsxs)(a.Fragment, {
                                children: [function (n, e) {
                                    var r, s, l;
                                    switch (n.type) {
                                    case 0:
                                        return (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(T, {
                                                children: (0, a.jsx)(L, {
                                                    children: "PLAYING"
                                                })
                                            }), (0, a.jsxs)(T, {
                                                style: e < i.activities.length - 1 ? {
                                                    paddingBottom: "16px"
                                                } : {},
                                                children: [(0, a.jsxs)(S, {
                                                    children: [(0, a.jsx)("img", {
                                                        className: d().primaryImage,
                                                        src: n.assets && void 0 !== n.assets.large_image ? y(n.application_id, n.assets.large_image) : b,
                                                        alt: n.assets && void 0 !== n.assets.large_text ? n.assets.large_text : "",
                                                        width: 60,
                                                        height: 60
                                                    }), (0, a.jsx)("img", {
                                                        className: t ? d().secondaryImageOutlineNewTab : d().secondaryImageOutline,
                                                        src: n.assets && void 0 !== n.assets.small_image ? y(n.application_id, n.assets.small_image) : b,
                                                        alt: n.assets && void 0 !== n.assets.small_text ? n.assets.small_text : "",
                                                        width: 20,
                                                        height: 20
                                                    })]
                                                }), (0, a.jsxs)(P, {
                                                    children: [(0, a.jsx)(O, {
                                                        children: (0, a.jsx)("h5", {
                                                            children: n.name
                                                        })
                                                    }), (0, a.jsx)(O, {
                                                        children: n.details && (0, a.jsx)("p", {
                                                            children: n.details
                                                        })
                                                    }), (0, a.jsx)(O, {
                                                        children: n.state && (0, a.jsx)("p", {
                                                            children: n.state
                                                        })
                                                    }), (0, a.jsx)(O, {
                                                        children: (0, a.jsx)("p", {
                                                            children: function (n) {
                                                                if (0 === n) return "";
                                                                let e = Math.floor((Date.now() - n) / 1e3);
                                                                return "".concat(Math.floor(e / 60) >= 60 ? "".concat(Math.floor(Math.floor(e / 60) / 60).toLocaleString("en-US", {
                                                                    minimumIntegerDigits: 2,
                                                                    useGrouping: !1
                                                                }), ":") : "").concat(Math.floor(Math.floor(e / 60) - 60 * Math.floor(Math.floor(e / 60) / 60)).toLocaleString("en-US", {
                                                                    minimumIntegerDigits: 2,
                                                                    useGrouping: !1
                                                                }), ":").concat(Math.floor(e % 60).toLocaleString("en-US", {
                                                                    minimumIntegerDigits: 2,
                                                                    useGrouping: !1
                                                                }), " elapsed")
                                                            }((null === (r = n.timestamps) || void 0 === r ? void 0 : r.start) ? n.timestamps.start : 0)
                                                        })
                                                    })]
                                                })]
                                            })]
                                        });
                                    case 2: {
                                        let t = i.listening_to_spotify;
                                        return (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(T, {
                                                children: (0, a.jsx)(L, {
                                                    children: "LISTENING TO"
                                                })
                                            }), (0, a.jsxs)(T, {
                                                children: [(0, a.jsx)(S, {
                                                    children: (0, a.jsx)("img", {
                                                        className: d().primaryImage,
                                                        src: t ? i.spotify.album_art_url : (null === (s = n.assets) || void 0 === s ? void 0 : s.large_image) ? y(n.application_id, n.assets.large_image) : b,
                                                        alt: t ? i.spotify.album : (null === (l = n.assets) || void 0 === l ? void 0 : l.large_text) || "",
                                                        width: 60,
                                                        height: 60
                                                    })
                                                }), (0, a.jsxs)(P, {
                                                    children: [(0, a.jsx)(O, {
                                                        children: t ? i.spotify.song && (0, a.jsx)("h5", {
                                                            children: i.spotify.song
                                                        }) : (0, a.jsx)("h5", {
                                                            children: n.name
                                                        })
                                                    }), (0, a.jsx)(O, {
                                                        children: t ? i.spotify.artist && (0, a.jsxs)("p", {
                                                            children: ["by ", i.spotify.artist.replaceAll(";", ",")]
                                                        }) : n.details && (0, a.jsx)("p", {
                                                            children: n.details
                                                        })
                                                    }), (0, a.jsx)(O, {
                                                        children: t ? i.spotify.album && (0, a.jsxs)("p", {
                                                            children: ["on ", i.spotify.album]
                                                        }) : n.state && (0, a.jsx)("p", {
                                                            children: n.state
                                                        })
                                                    })]
                                                })]
                                            }), (0, a.jsx)(T, {
                                                style: e < i.activities.length - 1 ? {
                                                    paddingBottom: "16px"
                                                } : {},
                                                children: (0, a.jsxs)(Z, {
                                                    children: [(0, a.jsx)(M, {
                                                        children: (0, a.jsx)(C, {
                                                            style: {
                                                                width: p
                                                            }
                                                        })
                                                    }), (0, a.jsxs)(E, {
                                                        children: [(0, a.jsx)("p", {
                                                            children: o.split(" / ")[0]
                                                        }), (0, a.jsx)("p", {
                                                            children: o.split(" / ")[1]
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    }
                                    }
                                }(n[g], g), (0, a.jsx)(U, {
                                    children: "".concat(g + 1, "/").concat(n.length)
                                })]
                            }), n.length > 1 && (0, a.jsx)(G, {
                                onClick: function () {
                                    x(n => (n + 1) % ((null == i ? void 0 : i.activities.length) || 1))
                                },
                                children: (0, a.jsx)(u.Z, {
                                    size: 24
                                })
                            })]
                        })
                    })
                }
            }
            let L = s.ZP.h6(p()),
                S = s.ZP.div(h()),
                T = s.ZP.div(g()),
                P = s.ZP.div(x()),
                O = s.ZP.div(m()),
                Z = s.ZP.div(f()),
                M = s.ZP.div(_()),
                C = s.ZP.div(v()),
                E = s.ZP.div(y()),
                D = s.ZP.div(b()),
                F = s.ZP.div(j()),
                B = s.ZP.div(w()),
                z = s.ZP.div(N()),
                G = s.ZP.button(A()),
                U = s.ZP.div(I())
        },
        9181: function (n) {
            n.exports = {
                activity: "Lanyard_activity__ZovoQ",
                activityLoader: "Lanyard_activityLoader__w_n9c",
                activityLoaderNewTab: "Lanyard_activityLoaderNewTab__lW9_8",
                activityNewTab: "Lanyard_activityNewTab__59lnQ",
                primaryImage: "Lanyard_primaryImage__UqAiH",
                secondaryImage: "Lanyard_secondaryImage__uPsB8",
                secondaryImageOutline: "Lanyard_secondaryImageOutline__cRGk5",
                secondaryImageOutlineNewTab: "Lanyard_secondaryImageOutlineNewTab__5b0uJ",
                secondaryImageMobile: "Lanyard_secondaryImageMobile__wb0Kj",
                secondaryImageMobileNewTab: "Lanyard_secondaryImageMobileNewTab__fnt5x",
                avatarImage: "Lanyard_avatarImage__GPsNl",
                avatarDecoration: "Lanyard_avatarDecoration__oo4NN"
            }
        }
    }
]);
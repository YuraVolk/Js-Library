"use strict";

function _typeof3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof3 = function _typeof3(obj) { return typeof obj; }; } else { _typeof3 = function _typeof3(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof3(obj); }

function _typeof2(obj) {
  if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return _typeof3(obj);
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof3(obj);
    };
  }

  return _typeof2(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

!function (e) {
  var n = {};

  function t(i) {
    if (n[i]) return n[i].exports;
    var o = n[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }

  t.m = e, t.c = n, t.d = function (e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: i
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (t.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      t.d(i, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return i;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 0);
}([function (e, n, t) {
  e.exports = t(1);
}, function (e, n, t) {
  "use strict";

  t.r(n);
  t(2), t(3), t(4), t(5), t(6), t(7), t(8), t(9), t(10), t(11), t(12), t(13), t(14), t(15), t(16), t(17), t(18);
}, function (e, n) {
  {
    var _i = function _i(e) {
      a(t += e);
    };

    var o = function o(e, n) {
      n[1].src = "img/slide" + e + ".png", n[2].src = 5 === e ? "img/slide0.png" : "img/slide" + (e + 1) + ".png", n[0].src = 0 === e ? "img/slide5.png" : "img/slide" + (e - 1) + ".png";
    };

    var a = function a(e) {
      var n = document.getElementsByClassName("Slider");
      -1 !== t ? 6 !== t ? o(e, n) : (t = 0, o(e = 0, n)) : (t = 5, o(e = 5, n)), t = e;
    };

    var t = 0;
    a(t);
  }
  document.addEventListener("click", function (e) {
    ".slider-item" === ".".concat(e.target.parentNode.classList[0]) && (".slider-item--left" === ".".concat(e.target.parentNode.classList[1]) && i(-1), ".slider-item--right" === ".".concat(e.target.parentNode.classList[1]) && i(1));
  });
}, function (e, n) {
  function t(e) {
    Array.from(document.querySelectorAll(".filterEl")).forEach(function (n, t) {
      "all" != e && document.querySelectorAll(".filterEl")[t].classList[2] != e ? document.querySelectorAll(".filterEl")[t].style.display = "none" : document.querySelectorAll(".filterEl")[t].style.display = "block";
    });
  }

  function i(e) {
    var n, i;

    switch (n = ".filter__slider-btn", i = "filter-btnActive", Array.from(document.querySelectorAll(n)).forEach(function (e, t) {
      Array.from(document.querySelectorAll(n))[t].classList.remove(i);
    }), Array.from(document.querySelectorAll(".filter__slider-btn"))[e].classList.add("filter-btnActive"), e) {
      case "0":
        t("all");
        break;

      case "1":
        t("tag1");
        break;

      case "2":
        t("tag2");
        break;

      case "3":
        t("tag3");
        break;

      case "4":
        t("tag4");
    }
  }

  document.addEventListener("click", function (e) {
    ".filter__slider-btn" === ".".concat(e.target.classList[0]) && (pressedButton = document.activeElement.classList[1].slice(-1), i(pressedButton));
  });
}, function (e, n) {
  var t = 1;

  function i(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
    "buttons__button--left" === e ? t !== n && t-- : "buttons__button--right" === e && t !== i && t++, o(t);
  }

  function o(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
    e === n ? (document.querySelector(".buttons__button--left").style.display = "none", document.querySelector(".buttons__button--right").style.display = "block") : e === i ? (document.querySelector(".buttons__button--left").style.display = "block", document.querySelector(".buttons__button--right").style.display = "none") : (document.querySelector(".buttons__button--left").style.display = "block", document.querySelector(".buttons__button--right").style.display = "block"), document.querySelector(".buttons__button--left").textContent = "Go to page " + (t - 1), document.querySelector(".buttons__button--right").textContent = "Go to page " + (t + 1);
  }

  document.addEventListener("click", function (e) {
    ".buttons__button" === ".".concat(e.target.parentNode.classList[0]) && i(e.target.parentNode.classList[1]), ".buttons__button" === ".".concat(e.target.classList[0]) && i(e.target.classList[1]);
  }), o(t);
}, function (e, n) {
  var t,
      i,
      o = !0;
  var a = document.getElementsByClassName("styled_range"),
      s = a[0].childNodes,
      r = document.getElementsByClassName("ver_range"),
      l = r[0].childNodes;

  function c(e, n) {
    for (var t = 0; t < e.length; t++) {
      for (var i = null, o = null, a = 0; a < e[t].children.length; a++) {
        var s = e[t].children[a];

        if (n) {
          if ("thumb_ver" === s.className) i = s;else if ("track_ver" === s.className) o = s;
        } else if ("thumb_range" === s.className) i = s;else if ("track_range" === s.className) o = s;
      }

      i.oninput = function (e, t) {
        return function (i) {
          var o;
          t.value = e.value, n || (o = t.value * document.querySelector(".video__presentation").duration / 100, document.querySelector(".video__presentation").currentTime = o, d());
        };
      }(i, o);
    }
  }

  function d() {
    var e = document.querySelector(".video__presentation");
    var n, t, i;
    document.querySelector(".video__time").textContent = function (e) {
      e = parseInt(e, 10);
      var n = Math.floor(e / 3600),
          t = Math.floor((e - 3600 * n) / 60),
          i = e - 3600 * n - 60 * t;
      return t < 10 && (t = "0" + t), i < 10 && (i = "0" + i), t + ":" + i;
    }(Math.floor(e.duration - e.currentTime)), n = e.currentTime, t = e.duration, (i = s)[3].value = 100 * n / t, i[1].value = 100 * n / t;
  }

  document.querySelector(".video__presentation").onended = function (e) {
    t = !1;
  }, document.querySelector(".video__presentation").onplaying = function () {
    t = !0, setInterval(function () {
      t && d();
    }, 50);
  }, setInterval(function () {
    t && function () {
      var e = l[1].value / 100;
      o && (document.querySelector(".video__presentation").volume = e);
    }();
  }, 200), s[3].value = "0", s[1].value = "0", l[3].value = "100", l[1].value = "100", c(a, !1), c(r, !0), document.addEventListener("click", function (e) {
    "." + e.target.classList[0] == ".button-play" && (t || (t = !1, document.querySelector(".video__presentation").play())), "." + e.target.classList[0] == ".button-stop" && (t = !1, document.querySelector(".video__presentation").pause()), "." + e.target.classList[0] == ".button-reset" && function () {
      var e = document.querySelector(".video__presentation");
      t = !1, e.currentTime = 0, s[3].value = "0", s[1].value = "0";
    }(), "." + e.target.classList[0] == ".button-mute" && function () {
      var e = document.querySelector(".video__presentation");

      if (o) {
        var _n = l[1].value / 100;

        i = _n, o = !1, e.volume = 0, l[3].value = "0", l[1].value = "0";
      } else o = !0, e.volume = i, l[3].value = "" + 100 * i, l[1].value = "" + 100 * i;
    }();
  });
}, function (e, n) {
  var t = function t(e) {
    var n = document.querySelector(".tabs--".concat(e));
    Array.from(document.querySelectorAll(".tabs")).forEach(function (e) {
      e.style.display = "none";
    }), n.style.display = "block";
  };

  document.addEventListener("click", function (e) {
    ".tab" === ".".concat(e.target.classList[0]) && t(e.target.classList[1].slice(-1));
  }), t(0);
}, function (e, n) {
  var t = document.getElementsByClassName("opacity_range"),
      i = t[0].childNodes,
      o = [132, 46, 153, 1];
  var a = 1;

  function s(e) {
    var n = Number(e).toString(16);
    return n.length < 2 && (n = "0" + n), n;
  }

  function r(e) {
    alpha = 1 - e.alpha;
    var n = Math.round(255 * (e.alpha * (e.red / 255) + 0 * alpha)),
        t = Math.round(255 * (e.alpha * (e.green / 255) + 0 * alpha)),
        i = Math.round(255 * (e.alpha * (e.blue / 255) + 0 * alpha));
    document.querySelector(".rgb").textContent = "is : " + n + ", " + t + ", " + i, function (e, n, t) {
      var i = s(e),
          o = s(n),
          a = s(t);
      document.querySelector(".hex").textContent = "#" + i + o + a;
    }(n, t, i);
  }

  function l(e, n) {
    document.querySelector(".picker-back").style = "background-color: rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + n + ")", document.querySelector(".rgba").textContent = " is " + e[0] + ", " + e[1] + ", " + e[2] + ", " + n, r({
      red: e[0],
      green: e[1],
      blue: e[2],
      alpha: a
    });
  }

  var c, d, u;
  c = document.getElementById("picker"), d = c.getContext("2d"), (u = new Image(256, 256)).onload = function () {
    return d.drawImage(u, 0, 0, u.width, u.height);
  }, u.src = "picker.png", c.onmousedown = function (e) {
    var n = d.getImageData(e.offsetX, e.offsetY, 1, 1);
    l(o = n.data, a);
  }, function (e) {
    for (var n = 0; n < e.length; n++) {
      for (var t = null, i = null, s = 0; s < e[n].children.length; s++) {
        var r = e[n].children[s];
        "thumb_opacity" === r.className ? t = r : "track_opacity" === r.className && (i = r);
      }

      t.oninput = function (e, n) {
        return function (t) {
          var i;
          n.value = e.value, i = n.value, document.querySelector(".opacity").style = "opacity: " + i / 100, l(o, a = i / 100);
        };
      }(t, i);
    }
  }(t), i[1].value = "100", i[3].value = "100";
}, function (e, n) {
  var t = [];
  Array.from(document.getElementsByTagName("section")).forEach(function (e) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = document.getElementsByTagName("h1")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _n2 = _step.value;

        if (e.contains(_n2)) {
          t.push(_n2.textContent);
          break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }), t.forEach(function (e) {
    document.querySelector(".sidenav").insertAdjacentHTML("beforeend", '<a href="#' + e.replace(/ /g, "") + '">' + e + "</a>");
  }), document.addEventListener("click", function (e) {
    "nav__close" === e.target.classList[0] && (document.querySelector(".sidenav").style = "display: none", document.querySelector("body").style = "margin: 0");
  }), document.addEventListener("mousemove", function (e) {
    e.clientX < 5 && (document.querySelector(".sidenav").style = "display: block", document.querySelector("body").style = "margin-left: 300px");
  }), document.querySelector(".sidenav").style = "display: none", document.querySelector("body").style = "margin: 0";
}, function (e, n) {
  var t = document.querySelector(".floatingPanel"),
      i = document.querySelector(".floatingPanel--1");
  var o = [!1, !1, !1];

  function a(e) {
    var n, t, i, o;
    document.addEventListener("mousedown", function (a) {
      n = e.offsetLeft, t = e.offsetTop, i = a.clientX, o = a.clientY;

      var s = function s(a) {
        e.style.left = n + a.clientX - i + "px", e.style.top = t + a.clientY - o + "px";
      };

      e.addEventListener("mousemove", s, !1), window.addEventListener("mouseup", function () {
        e.removeEventListener("mousemove", s, !1);
      }, !1);
    }, !1);
  }

  function s(e, n, t) {
    !1 === o[e] ? (o[e] = !0, n.style.display = "block", t.textContent = "Close Floating Window " + (e + 1)) : (o[e] = !1, n.style.display = "none", t.textContent = "Open Floating Window " + (e + 1));
  }

  document.addEventListener("click", function (e) {
    "modalButton--1" === e.target.classList[1] && (s(0, t, e.target), a(t)), "modalButton--2" === e.target.classList[1] && (s(1, i, e.target), a(i));
  });
}, function (e, n) {
  var t, i, o;

  function a(e) {
    o = !1, "block" != e.style.display && (e.style.display = "block", function () {
      var e = document.documentElement.style.getPropertyValue("--scroll-y");
      t = e;
      var n = document.body;
      n.style.position = "fixed", n.style.top = "-" + e;
    }()), "time" === e.classList[2] && function (e) {
      var n = e;
      i = 6, n.childNodes[1].childNodes[3].childNodes[3].textContent = 6, n.childNodes[1].childNodes[1].style.display = "none", n.childNodes[1].childNodes[3].style.display = "block";
      var t = setInterval(function () {
        i--, n.childNodes[1].childNodes[3].childNodes[3].textContent = i, i < 1 && (clearInterval(t), n.childNodes[1].childNodes[1].style.display = "block", n.childNodes[1].childNodes[3].style.display = "none");
      }, 1e3);
    }(e);
  }

  setInterval(function () {
    o && a(document.querySelector(".popup--3"));
  }, 15e3);
  document.addEventListener("click", function (e) {
    "popupButton" === e.target.classList[1] && a(document.querySelector(".popup--" + e.target.classList[2].slice(-1))), "popup__close" === e.target.classList[0] && (Array.from(document.querySelectorAll(".popup")).forEach(function (e) {
      "renew" === e.classList[3] && "block" === e.style.display && (o = !0), e.style.display = "none";
    }), document.body.style.position = "", document.body.style.top = "", window.scrollTo(0, t.slice(0, -2))), "closePopup" === e.target.classList[1] && (o = !1);
  }), window.addEventListener("scroll", function () {
    document.documentElement.style.setProperty("--scroll-y", window.scrollY + "px");
  });
}, function (e, n) {
  function t(e, n, t, i) {
    t.style.transform = i ? "rotateY(" + n * -e + "rad)" : "rotateX(" + n * -e + "rad)";
  }

  window.addEventListener("load", function () {
    !function (e, n) {
      var i = e.querySelector("figure"),
          o = document.querySelector(".carousel-nav"),
          a = i.children,
          s = a.length,
          r = 2 * Math.PI / s,
          l = 0;
      n ? (c(s, parseFloat(getComputedStyle(a[0]).width)), window.addEventListener("resize", function () {
        c(s, parseFloat(getComputedStyle(a[0]).width));
      })) : (c(s, parseFloat(getComputedStyle(a[0]).height)), window.addEventListener("resize", function () {
        c(s, parseFloat(getComputedStyle(a[0]).height));
      }));

      function c(e, o) {
        var s = o / (2 * Math.tan(Math.PI / e));
        i.style.transformOrigin = "50% 50% " + -s + "px";

        for (var c = 0; c < e; c++) {
          a[c].style.padding = "0";
        }

        for (c = 1; c < e; c++) {
          a[c].style.transformOrigin = "50% 50% " + -s + "px", a[c].style.transform = n ? "rotateY(" + c * r + "rad)" : "rotateX(" + c * r + "rad)", a[c].style.padding = "0";
        }

        for (c = 0; c < e; c++) {
          a[c].style.backfaceVisibility = "hidden";
        }

        t(r, l, i, n);
      }

      o.addEventListener("click", function (o) {
        o.stopPropagation();
        var a = o.target;
        "BUTTON" == a.tagName.toUpperCase() && (a.classList.contains("next") ? l++ : a.classList.contains("prev") ? l-- : a.classList.contains("switch3d") && ((n = !n) ? (e.style.height = "auto", i.style.marginTop = 0) : (e.style.height = "870px", i.style.marginTop = "120px")), t(r, l, i, n));
      }, !0), setInterval(function () {
        c(s, n ? parseFloat(getComputedStyle(a[0]).width) : parseFloat(getComputedStyle(a[0]).height));
      }, 160);
    }(document.querySelector(".tdcarousel"), !0);
  });
}, function (e, n) {
  var t = 0,
      i = 0,
      o = [],
      a = !0,
      s = 0,
      r = function r() {
    a = !0;
  },
      l = document.getElementById("carousel");

  i = document.getElementsByClassName("slide").length, s = parseInt(window.getComputedStyle(document.getElementById("carousel-container")).width, 10), l.style.width = i * s + "px";

  for (var c = 0; c < i; c++) {
    o[c] = -s, document.getElementsByClassName("slide")[c].addEventListener("transitionend", r, !0), document.getElementsByClassName("slide")[c].addEventListener("webkitTransitionEnd", r, !0), document.getElementsByClassName("slide")[c].addEventListener("oTransitionEnd", r, !0), document.getElementsByClassName("slide")[c].addEventListener("MSTransitionEnd", r, !0);
  }

  function d(e) {
    if (!0 === a) {
      if (a = !1, e) {
        var n = t % i;
        t++;
      } else {
        -1 == --t && (t = i - 1);
        n = t % i;
      }

      for (var r = 0; r < i; r++) {
        var l = document.getElementsByClassName("slide")[r];
        l.style.opacity = "1", e ? (l.style.transform = "translateX(" + (o[r] - s) + "px)", o[r] = o[r] - s) : (l.style.transform = "translateX(" + (o[r] + s) + "px)", o[r] = o[r] + s);
      }

      var c = document.getElementsByClassName("slide")[n];
      c.style.opacity = "0", e ? (c.style.transform = "translateX(" + (o[n] + s * i) + "px)", o[n] = o[n] + s * i) : (c.style.transform = "translateX(" + (o[n] - s * i) + "px)", o[n] = o[n] - s * i);
    }
  }

  l.insertBefore(l.children[4], l.children[0]), document.addEventListener("click", function (e) {
    "previous" === e.target.classList[1] && d(!1), "nextSlide" === e.target.classList[1] && d(!0);
  }, !0);
}, function (e, n) {
  var t = Array.from(document.querySelectorAll(".accordion"));
  var i = [];
  Array.from(document.querySelectorAll(".accordion__content")).forEach(function (e) {
    i.push(e.offsetHeight);
  }), t.forEach(function (e) {
    e.classList.add("hidden"), e.style.maxHeight = "";
  }), document.addEventListener("click", function (e) {
    "accordion__heading" === e.target.classList[0] && function (e) {
      "hidden" === e.classList[1] ? (t.forEach(function (e) {
        e.classList.add("hidden"), e.style.maxHeight = "";
      }), e.style.maxHeight = i[t.indexOf(e)] + 40 + "px", e.classList.remove("hidden")) : (e.style.maxHeight = "", e.classList.add("hidden"));
    }(e.target.parentNode);
  });
}, function (e, n) {
  var t = !1;
  var i = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat. Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do eiusmod tempor \nincididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris \nnisi ut aliquip ex ea commodo consequat."];

  function o(e, n, i) {
    var o = 0;

    for (i && (n.textContent = ""); o <= e.length;) {
      !function (o) {
        setTimeout(function () {
          i ? n.insertAdjacentHTML("beforeend", '<span class="animationWave">' + e.charAt(o) + "</span>") : n.textContent = e.substr(0, o), o >= e.length && (t = !1);
        }, 35 * o);
      }(o++);
    }
  }

  document.addEventListener("click", function (e) {
    "typeButton--1" === e.target.classList[1] && (t || (t = !0, o(i[0], document.querySelector(".self-typing-1"), !1))), "typeButton--2" === e.target.classList[1] && (t || (t = !0, o(i[1], document.querySelector(".self-typing-2"), !0)));
  });
}, function (e, n) {
  var t = ["This text transforms   ", "into other texts       ", "no jQuery or any plugin", "just pure javascript   ", "Cool, right?            "];
  var i = [];
  var o,
      a,
      s,
      r = !1;

  function l(e, n, t) {
    return n > e.length - 1 ? e : e.substr(0, n) + t + e.substr(n + 1);
  }

  t.forEach(function (e) {
    i.push(e.charAt(0));
  });
  var c,
      d = -1;
  document.addEventListener("click", function (e) {
    "cipherButton--0" === e.target.classList[1] && (r = !0, c = window.setInterval(function () {
      d === t.length - 1 ? d = 0 : d++, o = document.querySelector(".rebuildingText--0"), a = d, s = d === t.length - 1 ? t[0] : t[d + 1], function (e, n, t) {
        var i = t.charAt(0),
            o = n,
            s = !1;

        for (var r = 0; r < t.length - 1 && !s; r++) {
          !function (a) {
            setTimeout(function () {
              o = l(o, a - 1, t.charAt(a)), setTimeout(function () {
                a < n.length - 1 && (o = l(o, a - 1, t.charAt(a - 1)));
              }, 25 * a), a > 1 && (o = o.replace(o.charAt(1), t.charAt(1))), a > 4 && (o = (o = o.replace(o.charAt(3), t.charAt(3))).replace(o.charAt(2), t.charAt(2))), s || (o = o.replace(o.charAt(0), i), e.textContent = "" + o), a < t.length - 1 || (e.textContent = t, s = !0);
            }, 75 * a);
          }(a++);
        }
      }(o, t[a], s);
    }, 3670)), "cipherButton--1" === e.target.classList[1] && void 0 !== c && window.clearInterval(c);
  });
}, function (e, n) {
  var t = "into text that is reciphered";
  var i = ["This text rechipers", "into text that is reciphered", "still no jQuery or any other plugin", "It IS cool"];
  var o = !1;

  function a(e, n, t) {
    var i = ["!", '"', "#", "$", "%", "*", "0", "1", ":", ";", "?", "@", "[", "]", "\\", "~", "'", "/", "{", "}", "|", "&", "(", ")", "-", "<", ">"];
    var o;
    o = t ? Math.round(8 * Math.random() + 6) : Math.round(38 * Math.random() + 6);
    var a = !1;
    var s = 0;
    setTimeout(function () {
      for (; s <= o;) {
        !function (t) {
          setTimeout(function () {
            if (!a) {
              var _n3 = i[Math.floor(Math.random() * i.length)];
              e.textContent = _n3;
            }

            t < o || (a = !0, e.textContent = n, e.classList.remove("changed"));
          }, 65 * t);
        }(s++);
      }
    }, 1e3 * Math.random());
  }

  var s,
      r = document.querySelector(".rebuildingText--1"),
      l = -1;
  document.addEventListener("click", function (e) {
    "scrambleButton--0" === e.target.classList[1] && (o = !0, s = window.setInterval(function () {
      l === i.length - 1 ? l = 0 : l++;
      var e = l;
      t = l === i.length - 1 ? i[0] : i[l + 1], r.textContent = i[e], function (e, n) {
        var t = e.textContent;
        e.textContent = "";

        for (var i = 0; i < t.length; i++) {
          e.insertAdjacentHTML("beforeend", "<span>" + t.charAt(i) + "</span>");
        }

        if (n > t.length) for (i = 0; i < n - t.length; i++) {
          e.insertAdjacentHTML("beforeend", "<span></span>");
        }
      }(r, t.length), function (e, n) {
        e.forEach(function (e, t) {
          e.textContent != n.charAt(t) && (e.classList.add("changed"), 0 === e.textContent.length ? setTimeout(function () {
            a(e, n.charAt(t), !0);
          }, 45 * t) : a(e, n.charAt(t), !1));
        });
      }(Array.from(r.childNodes), t);
    }, 7680)), "scrambleButton--1" === e.target.classList[1] && void 0 !== s && window.clearInterval(s);
  });
}, function (e, n) {
  var t = function t(e) {
    _classCallCheck(this, t);

    e.item = this, this.image = e, this.fullWidth = e.width, this.fullHeight = e.height, this.alt = e.alt, this.title = e.title, e.style.position = "absolute", this.moveTo = function (e, n, t) {
      this.width = this.fullWidth * t, this.height = this.fullHeight * t, this.x = e, this.y = n, this.scale = t;
      var i = this.image.style;
      i.width = this.width + "px", i.left = e + "px", i.top = n + "px", i.zIndex = "" + 100 * t | 0;
    };
  };

  var i = function i(e, n) {
    _classCallCheck(this, i);

    var _i2 = this;

    this.items = [];
    var o = e;
    this.xCentre = null === n.xPos ? .5 * o.offsetWidth : n.xPos, this.yCentre = null === n.yPos ? .1 * o.offsetHeight : n.yPos, this.xRadius = null === n.xRadius ? o.offsetWidth / 2.3 : n.xRadius, this.yRadius = null === n.yRadius ? o.offsetHeight / 6 : n.yRadius, this.farScale = n.farScale, this.rotation = this.destRotation = Math.PI / 2, this.speed = n.speed, this.frameTimer = 0, this.rotateItem = function (e, n) {
      var t = this.items[e],
          i = Math.sin(n),
          o = this.farScale,
          a = o + (1 - o) * (i + 1) * .5;
      t.moveTo(this.xCentre + a * (Math.cos(n) * this.xRadius - .5 * t.fullWidth), this.yCentre + a * i * this.yRadius, a);
    }, this.render = function () {
      for (var e = this.items.length, n = 2 * Math.PI / e, t = this.rotation, i = 0; i < e; i++) {
        this.rotateItem(i, t), t += n;
      }
    }, this.playFrame = function () {
      var e = this.destRotation - this.rotation;
      Math.abs(e) <= 0 ? (this.rotation = this.destRotation, clearTimeout(this.frameTimer), this.frameTimer = 0) : (this.rotation += e * this.speed, this.scheduleNextFrame()), this.render();
    }, this.scheduleNextFrame = function () {
      this.frameTimer = setTimeout(function () {
        _i2.playFrame();
      }, 32);
    }, this.itemsRotated = function () {
      return this.items.length * (Math.PI / 2 - this.rotation) / (2 * Math.PI);
    }, this.floatIndex = function () {
      var e = this.itemsRotated() % this.items.length;
      return e < 0 ? e + this.items.length : e;
    }, this.nearestIndex = function () {
      return Math.round(this.floatIndex()) % this.items.length;
    }, this.go = function (e) {
      this.destRotation += 2 * Math.PI / this.items.length * e, 0 === this.frameTimer && this.scheduleNextFrame();
    };
    var a = o.querySelectorAll(".carouselm-item");
    document.addEventListener("click", function (e) {
      "carousel-menu-left" == e.target.classList[1] && _i2.go(-1), "carousel-menu-right" == e.target.classList[1] && _i2.go(1);
    }), this.finishInit = function () {
      clearInterval(this.initTimer);

      for (var e = 0; e < a.length; e++) {
        this.items.push(new t(a[e]));
      }

      this.render();
    }, this.initTimer = setInterval(function () {
      _i2.finishInit();
    }, 50);
  };

  window.onload = function () {
    new i(document.querySelector("#carouselm"), {
      xPos: null,
      yPos: 112,
      xRadius: null,
      yRadius: 128,
      farScale: .9,
      speed: .11
    });
  };
}, function (e, n) {
  markups = ['\n       <pre><code>\n        {\n            var ideasSlideIndex = 0;\n            ideasShowDivs(ideasSlideIndex);\n        \n            function ideasPlusDivs(n) {\n                ideasShowDivs(ideasSlideIndex += n);\n            }\n        \n            function plusDivsOuter(n) {\n                ideasSlideIndex = parseInt(n);\n                ideasShowDivs(ideasSlideIndex);\n            }\n        \n            function ideasSwitchIdeaSrc(n, x) {\n               x[1].src = "img/idea" + n + ".png";\n\n                if (n === 3) {\n                    x[2].src = "img/idea" + 0 + ".png";\n                } else {\n                    x[2].src = "img/idea" + (n + 1) + ".png";\n                }\n                if (n === 0) {\n                    x[0].src = "img/idea" + 3 + ".png";\n                } else {\n                    x[0].src = "img/idea" + (n - 1) + ".png";\n                }\n            }\n        \n            function ideasShowDivs(n) {\n                let i;\n                let x = document.getElementsByClassName(\'ideasSlider\');\n            \n                if (ideasSlideIndex !== -1) {\n        \n                    if (ideasSlideIndex !== 4) {\n                        ideasSwitchIdeaSrc(n, x);\n                    } else {\n                        ideasSlideIndex = 0;\n                        n = 0;\n        \n                        ideasSwitchIdeaSrc(n, x);\n                    }\n        \n                } else {\n                    ideasSlideIndex = 3;\n                    n = 3;\n        \n                    ideasSwitchIdeaSrc(n, x);\n                }\n        \n                ideasSlideIndex = n;     \n            }\n        }\n        </code></pre>\n    ', "\n    <pre><code>function filterDivs(toLeave) {\n\n        Array.from(document.querySelectorAll('.filterEl')).forEach(function(element, i) {\n         \n            if (toLeave != 'all') {\n                if (document.querySelectorAll('.filterEl')[i].classList[2] != toLeave) {\n                    document.querySelectorAll('.filterEl')[i].style.display = 'none';\n                } else {\n                    document.querySelectorAll('.filterEl')[i].style.display = 'block';\n                }\n            } else {\n                document.querySelectorAll('.filterEl')[i].style.display = 'block';\n            }\n        });\n    }\n    \n    function removeClassName(className, mod) {\n        Array.from(document.querySelectorAll(className)).forEach(function(el, i) {\n            Array.from(document.querySelectorAll(className))[i].classList.remove(mod);\n        });\n    }\n    \n    function showDivFiltering(pressedButton) {\n        removeClassName('.filter__slider-btn', 'filter-btnActive');\n        Array.from(document.querySelectorAll('.filter__slider-btn'))[pressedButton].classList.add('filter-btnActive');\n        console.log(pressedButton);\n        switch(pressedButton) {\n            case '0':     \n                filterDivs('all');\n                break;\n            case '1': \n                filterDivs('tag1');\n                break;  \n            case '2': \n                filterDivs('tag2');\n                break;\n            case '3': \n                filterDivs('tag3');\n                break;  \n            case '4': \n                filterDivs('tag4');\n                break;  \n        }\n    }</code></pre>\n    ", "\n        <pre><code>function buttonPress(modifier, firstPage = 1, lastPage = 3) {\n        // modifier === 'buttons__button--left' ? gPage++ : gPage--;\n        if (modifier === 'buttons__button--left') {\n            if (page !== firstPage) {\n                page--;\n            }\n        } else if (modifier === 'buttons__button--right') {\n            if (page !== lastPage) {\n                page++;\n            }\n        }\n        displayButtons(page);\n    }\n    function displayButtons(curPage, firstPage = 1, lastPage = 3) {\n        if (curPage === firstPage) {\n            document.querySelector('.buttons__button--left').style.display = 'none';\n            document.querySelector('.buttons__button--right').style.display = 'block';\n        } else if (curPage === lastPage) {\n            document.querySelector('.buttons__button--left').style.display = 'block';\n            document.querySelector('.buttons__button--right').style.display = 'none';\n        } else {\n            document.querySelector('.buttons__button--left').style.display = 'block';\n            document.querySelector('.buttons__button--right').style.display = 'block';\n        }\n        showPosts();\n    }</code></pre>\n    ", "<code><pre>\n    let videoPlays, isMute = true, prevVideoVolume;\n    var styledRanges = document.getElementsByClassName('styled_range');\n    var rangeVideo = styledRanges[0].childNodes;\n    \n    var audioRanges = document.getElementsByClassName('ver_range');\n    var rangeAudio = audioRanges[0].childNodes;\n    \n    function toMinuteSecond (number) {\n        number = parseInt(number, 10); \n    \n        var hours = Math.floor(number / 3600);\n        var minutes = Math.floor((number - (hours * 3600)) / 60);\n        var seconds = number - (hours * 3600) - (minutes * 60);\n    \n        if (minutes < 10) {\n            minutes = \"0\" + minutes;\n        }\n        if (seconds < 10) {\n            seconds = \"0\" + seconds;\n        }\n        return minutes + ':' + seconds;\n    }\n    \n    function setVideoTime(time) {\n        const video = document.querySelector('.video__presentation');\n        \n        video.currentTime = time;\n        updateVideoTime();\n    }\n    \n    function getVideoDuration() {\n        const video = document.querySelector('.video__presentation');\n    \n        return video.duration;\n    }\n    \n    function pauseVideo() {\n        videoPlays = false;\n        document.querySelector('.video__presentation').pause();\n    }\n    \n    function startVideo() {\n        videoPlays = false;\n        document.querySelector('.video__presentation').play();\n    }\n    \n    function equalizeRange(videoTime, videoDuration, range) {\n        range[3].value = videoTime * 100 / videoDuration;\n        range[1].value = videoTime * 100 / videoDuration;\n    }\n    \n    function modifyRange(audioRanges, isTime) {\n        for (var i = 0; i < audioRanges.length; i++) {\n            var thumbRange = null, trackRange = null;\n            \n            for (var j = 0; j < audioRanges[i].children.length; j++) {\n              var child = audioRanges[i].children[j];\n            \n              if (isTime) {\n                    if (child.className === 'thumb_ver') {\n                        var thumbRange = child;\n                    } else if (child.className === 'track_ver') {\n                        var trackRange = child;\n                    }\n              } else {\n                    if (child.className === 'thumb_range') {\n                        var thumbRange = child;\n                    } else if (child.className === 'track_range') {\n                        var trackRange = child;\n                    }\n              }\n             \n            }\n            thumbRange.oninput = function(thumbRange, trackRange) {\n              return function(e) {\n                trackRange.value = thumbRange.value;\n                if (!isTime) {\n                    setVideoTime(trackRange.value * getVideoDuration() / 100);\n                }\n              };\n            }(thumbRange, trackRange);\n        }\n    }\n    \n    document.querySelector('.video__presentation').onended = function(e) {\n        videoPlays = false;\n    };\n    \n    function changeVolume() {\n        let vol = rangeAudio[1].value / 100;\n    \n        if (isMute) {\n            document.querySelector('.video__presentation').volume = vol;\n        }\n    }\n    \n    document.querySelector('.video__presentation').onplaying = function(){\n        videoPlays = true;\n    \n        setInterval(() => {\n            if (videoPlays) {\n                updateVideoTime();\n            }\n        }, 50);\n    }\n    \n    function switchMute() {\n        const video = document.querySelector('.video__presentation');\n    \n        if (isMute) {\n            let vol = rangeAudio[1].value / 100;\n            prevVideoVolume = vol;\n            isMute = false;\n            video.volume = 0;\n    \n            rangeAudio[3].value = \"0\";\n            rangeAudio[1].value = \"0\";\n        } else {\n            isMute = true;\n            video.volume = prevVideoVolume;\n    \n            rangeAudio[3].value = \"\" + (prevVideoVolume * 100);\n            rangeAudio[1].value = \"\" + (prevVideoVolume * 100);\n        }\n    }\n    \n    setInterval(() => {\n        if (videoPlays) {\n            changeVolume();\n        }\n    }, 200);\n    \n    function updateVideoTime() {\n        const video = document.querySelector('.video__presentation');\n        let res =  toMinuteSecond(Math.floor(video.duration - video.currentTime));\n        document.querySelector('.video__time').textContent = res;\n    \n        equalizeRange(video.currentTime, video.duration, rangeVideo);\n    }\n    \n    function resetVideoTime() {\n        const video = document.querySelector('.video__presentation');\n    \n        videoPlays = false;\n    \n        video.currentTime = 0;\n        rangeVideo[3].value = \"0\";\n        rangeVideo[1].value = \"0\";\n    }\n    \n    rangeVideo[3].value = \"0\";\n    rangeVideo[1].value = \"0\";\n    \n    rangeAudio[3].value = \"100\";\n    rangeAudio[1].value = \"100\";\n    \n    modifyRange(styledRanges, false);\n    modifyRange(audioRanges, true);\n    \n    document.addEventListener('click', function (event) {\n    \n        if ('.' + event.target.classList[0] === '.button-play') {\n            if (!videoPlays) {\n                startVideo();\n            }\n        }\n        if ('.' + event.target.classList[0] === '.button-stop') {\n            pauseVideo();\n        }\n        if ('.' + event.target.classList[0] === '.button-reset') {\n            resetVideoTime();\n        }\n        if ('.' + event.target.classList[0] === '.button-mute') {\n            switchMute();\n        }   \n    });</code></pre>\n    ", "\n    <pre><code>const changeTab = function(tabNumber) {          \n        var tabToSave = document.querySelector('.tabs--' + tabNumber);\n    \n        Array.from(document.querySelectorAll('.tabs')).forEach(el => {\n            el.style.display = 'none';\n        });\n    \n        tabToSave.style.display = 'block';\n    };  \n\n    document.addEventListener('click', function (event) {\n        if ('.' + event.target.classList[0] === '.tab') {\n            changeTab(event.target.classList[1].slice(-1));\n        }\n    });\n\n    changeTab(0);</code></pre>\n    ", '\n        <pre><code>var opacityRanges = document.getElementsByClassName(\'opacity_range\');\n        var rangeOpacity = opacityRanges[0].childNodes;\n\n        let opacityGlobal = 1;\n\n        function initColorPicker() {\n            var canvasEl = document.getElementById(\'picker\');\n            var canvasContext = canvasEl.getContext(\'2d\');\n\n            var image = new Image(256, 256);\n            image.onload = () => canvasContext.drawImage(image, 0, 0, image.width, image.height); \n            image.src = "picker.png";\n\n            canvasEl.onmousedown = function(mouseEvent) {\n            var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);\n            var rgba = imgData.data;\n\n            changeColor(rgba, opacityGlobal);\n            }\n            \n        }\n\n        function rgbToHex(rgb) { \n        var hex = Number(rgb).toString(16);\n\n        if (hex.length < 2) {\n            hex = "0" + hex;\n        }\n        \n        return hex;\n        };\n\n        function toHex(red, green, blue) {\n        var r = rgbToHex(red);\n        var g = rgbToHex(green);\n        var b = rgbToHex(blue);\n\n        document.querySelector(\'.hex\').textContent = \'#\' + r + g + b;\n        } \n\n        function rgbaToRgb(RGBA) {\n        alpha = 1 - RGBA.alpha;\n\n        console.log(RGBA);\n\n        var red = Math.round((RGBA.alpha * (RGBA.red / 255) + (alpha * (0 / 255))) * 255);\n        var green = Math.round((RGBA.alpha * (RGBA.green / 255) + (alpha * (0 / 255))) * 255);\n        var blue = Math.round((RGBA.alpha * (RGBA.blue / 255) + (alpha * (0 / 255))) * 255);\n        \n        document.querySelector(\'.rgb\').textContent = \'is : \' + red + \', \' + green + \', \' + blue;\n\n        toHex(red,green,blue);\n        }\n\n        function modifyRange(audioRanges) {\n        for (var i = 0; i < audioRanges.length; i++) {\n            var thumbRange = null, trackRange = null;\n            \n            for (var j = 0; j < audioRanges[i].children.length; j++) {\n                var child = audioRanges[i].children[j];\n\n                if (child.className === \'thumb_opacity\') {\n                    var thumbRange = child;\n                } else if (child.className === \'track_opacity\') {\n                    var trackRange = child;\n                }\n            }\n            thumbRange.oninput = function(thumbRange, trackRange) {\n                return function(e) {\n                trackRange.value = thumbRange.value;\n                changeOpacity(trackRange.value);\n                };\n            }(thumbRange, trackRange);\n        }\n        }\n\n        function changeOpacity(opacity) {\n        document.querySelector(\'.opacity\').style = "opacity: " + opacity / 100;\n\n        opacityGlobal = opacity / 100;\n        }\n\n        function changeColor(rgba, opacity) {\n        let styl = "background-color: " + "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + opacity + ")";\n        document.querySelector(\'.picker-back\').style = styl;\n        document.querySelector(\'.rgba\').textContent = " is " + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + opacity;\n\n        const RGBA = {\n            red: rgba[0],\n            green: rgba[1],\n            blue: rgba[2],\n            alpha: opacityGlobal\n        };\n\n        rgbaToRgb(RGBA);\n        }\n\n        initColorPicker();\n        modifyRange(opacityRanges);\n\n        rangeOpacity[1].value = "100";\n        rangeOpacity[3].value = "100";</code></pre>\n    ', "\n        <pre><code>const array = [];\n\n        Array.from(document.getElementsByTagName('section')).forEach(elMain => {\n            for (let el of document.getElementsByTagName('h1')) {\n             \n                if(elMain.contains(el)) {\n                    array.push(el.textContent);\n                    break;\n                }\n            }\n        });\n        \n        array.forEach(el => {\n            document.querySelector('.sidenav').insertAdjacentHTML('beforeend', '<a href=\"#' + el + '\">' + el + '</a>');\n        });\n        \n        document.addEventListener('click', e => {\n            if (e.target.classList[0] === 'nav__close') {\n                document.querySelector('.sidenav').style = 'display: none';\n                document.querySelector('body').style = 'margin: 0';\n            }\n        })\n        \n        document.addEventListener('mousemove', e => {\n            if (e.clientX < 5) {\n                document.querySelector('.sidenav').style = 'display: block';\n                document.querySelector('body').style = 'margin-left: 300px';\n            }\n        })\n        \n        document.querySelector('.sidenav').style = 'display: none';\n        document.querySelector('body').style = 'margin: 0';\n        </code></pre>\n    ", "\n        <pre><code>var floatingPanel = document.querySelector('.floatingPanel');\n        var floatingPanel1 = document.querySelector('.floatingPanel--1');\n\n        let arePanels = [false, false, false];\n\n        function addEventListen(panel) {\n            var initX, initY, mousePressX, mousePressY;\n            \n            document.addEventListener('mousedown', e => {\n                initX = panel.offsetLeft;\n                initY = panel.offsetTop;\n                mousePressX = e.clientX;\n                mousePressY = e.clientY;\n\n                var changePosition = function(event) {\n                    panel.style.left = initX + event.clientX - mousePressX + 'px';\n                    panel.style.top = initY + event.clientY - mousePressY + 'px';\n                }\n                \n                panel.addEventListener('mousemove', changePosition, false);\n\n                window.addEventListener('mouseup', function() {\n                    panel.removeEventListener('mousemove', changePosition, false);\n                }, false);\n\n            }, false);\n        }\n\n        function toggleFloatingWindow(i, panel, btn) {\n            if (arePanels[i] === false) {\n                arePanels[i] = true;\n                panel.style.display = 'block';\n                btn.textContent = 'Close Floating Window ' + (i + 1);\n            } else {\n                arePanels[i] = false;\n                panel.style.display = 'none';\n                btn.textContent = 'Open Floating Window ' + (i + 1);\n            }\n        }\n\n        document.addEventListener('click', e => {\n            if (e.target.classList[1] === 'modalButton--1') {\n                toggleFloatingWindow(0, floatingPanel, e.target);\n                addEventListen(floatingPanel);\n            }\n            if (e.target.classList[1] === 'modalButton--2') {\n                toggleFloatingWindow(1, floatingPanel1, e.target);\n                addEventListen(floatingPanel1);\n            }\n        });</code></pre>\n    ", "\n        <pre><code>let scroll, timeLeft, isActive;\n\n        function showPopup(popup) {\n            isActive = false;\n            if (popup.style.display != 'block') {\n                popup.style.display = 'block';\n                stopScroll();\n            }\n            if (popup.classList[2] === 'time') {\n                initTiming(popup);\n            }\n        }\n\n        function hidePopup() {\n            Array.from(document.querySelectorAll('.popup')).forEach(el => {\n                if (el.classList[3] === 'renew' && el.style.display === 'block') {\n                    isActive = true;\n                }\n                el.style.display = 'none';\n            });\n\n            document.body.style.position = '';\n            document.body.style.top = '';\n\n            window.scrollTo(0, scroll.slice(0, -2));\n        }\n\n        function initTiming(popup) {\n            const pop = popup;\n\n            timeLeft = 6;\n            pop.childNodes[1].childNodes[3].childNodes[3].textContent = 6;\n\n            pop.childNodes[1].childNodes[1].style.display = 'none';\n            pop.childNodes[1].childNodes[3].style.display = 'block';\n\n            var interval = setInterval(function() {\n                timeLeft--;\n\n                pop.childNodes[1].childNodes[3].childNodes[3].textContent = timeLeft;\n                if (timeLeft < 1) {\n                    clearInterval(interval);\n                    pop.childNodes[1].childNodes[1].style.display = 'block';\n                    pop.childNodes[1].childNodes[3].style.display = 'none';\n                }\n            }, 1000);\n        }\n        \n        function stopScroll() {\n            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');\n            scroll = scrollY;\n            const body = document.body;\n            body.style.position = 'fixed';\n            body.style.top = \"-\" + scrollY;\n        }\n\n        let timing = setInterval(function() {\n            if (isActive) {\n                showPopup(document.querySelector('.popup--3'));\n            }\n        }, 15000);\n\n        document.addEventListener('click', e => {\n            if (e.target.classList[1] === 'popupButton') {\n                showPopup(document.querySelector(\".popup--\" + e.target.classList[2].slice(-1)));\n            }\n            if (e.target.classList[0] === 'popup__close') {\n                hidePopup();\n            }\n            if (e.target.classList[1] === 'closePopup') {\n                isActive = false;\n            }\n        });\n\n        window.addEventListener('scroll', () => {\n            document.documentElement.style.setProperty('--scroll-y', window.scrollY + 'px');\n        });</code></pre>\n    ", '\n    <pre><code>\n  \nwindow.addEventListener(\'load\', () => {\n    var carousel3d = document.querySelector(\'.carousel\');\n  \n    initCarousel(carousel3d, true);\n});\n\nfunction rotateCarousel(theta, imageIndex, figure, isntVertical) {\n    //figure.style.transform = "rotateX(" + imageIndex * -theta + "rad)"  VERTICAL CAROUSEL ONLY;\n    if (isntVertical) {  \n        figure.style.transform = "rotateY(" + imageIndex * -theta + "rad)";\n    } else {\n        figure.style.transform = "rotateX(" + imageIndex * -theta + "rad)";\n    }\n}\n\nfunction initCarousel(parent, isntVertical) {\n    let figure = parent.querySelector(\'figure\');\n    let nav = document.querySelector(\'.carousel-nav\');\n    let images = figure.children;\n    let n = images.length;\n\n    let theta =  2 * Math.PI / n;\n    let currImage = 0;\n    \n    /*setupCarousel(n, parseFloat(getComputedStyle(images[0]).height));\n    window.addEventListener(\'resize\', () => { \n        setupCarousel(n, parseFloat(getComputedStyle(images[0]).height)) \n    }); VERTICAL CAROUSEL ONLY*/\n   \n    if (isntVertical) {\n        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));\n        window.addEventListener(\'resize\', () => { \n            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) \n        });\n    } else {\n        setupCarousel(n, parseFloat(getComputedStyle(images[0]).height));\n        window.addEventListener(\'resize\', () => { \n            setupCarousel(n, parseFloat(getComputedStyle(images[0]).height)) \n        });\n    }\n    \n    setupNavigation();\n\n    function setupCarousel(n, s) {\n        var apothem = s / (2 * Math.tan(Math.PI / n));\n\n        figure.style.transformOrigin = "50% 50% " + -apothem + "px";\n\n        for (var i = 0; i < n; i++) {\n            images[i].style.padding = "0";\n        }for (i = 1; i < n; i++) {\n            images[i].style.transformOrigin = "50% 50% " + -apothem + "px";\n            //images[i].style.transform = "rotateX(" + i * theta + "rad)"  VERTICAL CAROUSEL ONLY;\n            if (isntVertical) {\n                images[i].style.transform = "rotateY(" + i * theta + "rad)";\n            } else {\n                images[i].style.transform = "rotateX(" + i * theta + "rad)";\n            }\n            images[i].style.padding = "0";\n        }\n        \n        for (i = 0; i < n; i++) {\n            images[i].style.backfaceVisibility = \'hidden\';\n        }\n        \n        rotateCarousel(theta, currImage, figure, isntVertical);\n    }\n\n    function setupNavigation() {\n        nav.addEventListener(\'click\', onClick, true);\n        \n        function onClick(e) {\n            e.stopPropagation();\n            \n            var t = e.target;\n            if (t.tagName.toUpperCase() != \'BUTTON\')\n                return;\n            \n            if (t.classList.contains(\'next\')) {\n                currImage++;\n            }\n            else if (t.classList.contains(\'prev\')) {\n                currImage--;\n            } else if (t.classList.contains(\'switch3d\')) {\n                isntVertical = !isntVertical;\n                if (isntVertical) {\n                    parent.style.height = \'auto\';\n                    figure.style.marginTop = 0;\n                } else {\n                    parent.style.height = \'870px\';\n                    figure.style.marginTop = \'120px\';\n                }\n            }\n            \n            rotateCarousel(theta, currImage, figure, isntVertical);\n        }\n    }\n\n    setInterval(function() {\n        //setupCarousel(n, parseFloat(getComputedStyle(images[0]).height))  VERTICAL CAROUSEL ONLY;\n        if (isntVertical) { \n            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));\n        } else {\n            setupCarousel(n, parseFloat(getComputedStyle(images[0]).height));\n        }\n    }, 160);\n\n}\n    </code></pre>\n    ', "\n    <pre><code>\n    var index = 0;\n    var amount = 0;\n    var currTransl = [];\n    var translationComplete = true;\n    var moveOffset = 0;\n    \n    var transitionCompleted = function(){\n        translationComplete = true;\n    }\n    \n    var carousel = document.getElementById('carousel');\n    amount = document.getElementsByClassName(\"slide\").length;\n    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);\n    carousel.style.width = (amount * moveOffset) + 'px';\n    for(var i = 0; i < amount; i++) {\n        currTransl[i] = -moveOffset;\n        document.getElementsByClassName(\"slide\")[i].addEventListener(\"transitionend\", transitionCompleted, true);                    \n        document.getElementsByClassName(\"slide\")[i].addEventListener(\"webkitTransitionEnd\", transitionCompleted, true);                    \n        document.getElementsByClassName(\"slide\")[i].addEventListener(\"oTransitionEnd\", transitionCompleted, true);                    \n        document.getElementsByClassName(\"slide\")[i].addEventListener(\"MSTransitionEnd\", transitionCompleted, true);                  \n    }\n    \n    carousel.insertBefore(carousel.children[4], carousel.children[0]);\n    \n    function changeSlides(isNext) {\n        if(translationComplete === true) {\n            translationComplete = false;\n            if (isNext) {\n                var outerIndex = (index) % amount;\n                index++;\n            } else {\n                index--;\n                if (index == -1) {\n                    index = amount-1;\n                }\n                var outerIndex = (index) % amount;\n            }\n    \n            for (var i = 0; i < amount; i++) {\n                var slide = document.getElementsByClassName(\"slide\")[i];    \n                slide.style.opacity = '1';    \n                if (isNext) {\n                    slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';\n                    currTransl[i] = currTransl[i]-moveOffset;\n                } else {\n                    slide.style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';\n                    currTransl[i] = currTransl[i]+moveOffset;\n                }\n            }\n    \n            var outerSlide = document.getElementsByClassName(\"slide\")[outerIndex];\n            outerSlide.style.opacity = '0';\n            if (isNext) {\n                outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';\n                currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);\n            } else {\n                outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*amount))+'px)';\n                currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(amount);\n            }\n        }\n    }\n    \n    document.addEventListener('click', (event) => { \n        if (event.target.classList[1] === 'previous') {\n            changeSlides(false);\n        }\n        if (event.target.classList[1] === 'nextSlide') {\n            changeSlides(true);\n        }\n    }, true);\n    </code></pre>\n    ", '\n    <pre><code>\n    \n    var sections = Array.from(document.querySelectorAll(\'.accordion\'));\n\n    sections.forEach(el => {\n        el.classList.add("hidden");\n    });\n\n    function switchAccordion(target) {\n        if (target.classList[1] === "hidden") {\n            sections.forEach(el => {\n                el.classList.add("hidden");\n            });\n            target.classList.remove("hidden");\n        } else {\n            target.classList.add("hidden");\n        }\n    }\n\n    document.addEventListener(\'click\', event => { \n        if (event.target.parentNode.classList[0] === "accordion") {\n            switchAccordion(event.target.parentNode);\n        }\n    });\n    </code></pre>\n    ', '\n    <pre><code>\n    let isTyping = false;\n\n    var markups = [\n    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat.", \n    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat. Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do eiusmod tempor \nincididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris \nnisi ut aliquip ex ea commodo consequat."\n    ];\n\n    function startTyping(content, el, letterUniq) {\n        var index = 0;\n        if (letterUniq) {\n            el.textContent = \'\';\n        }\n        while (index <= content.length) {\n            (function(index) {\n                setTimeout(function() {\n                    if (!letterUniq) {\n                        el.textContent = content.substr(0, index);\n                    } else {\n                        el.insertAdjacentHTML(\'beforeend\', "<span class="animationWave">" + content.charAt(index) + "</span>");\n                    }\n\n                    if (index >= content.length) {\n                    isTyping = false;\n                    }\n                }, 35 * index);\n            })(index++);\n        }\n    }\n\n    document.addEventListener(\'click\', event => {\n        if(event.target.classList[1] === "typeButton--1") {\n            if (!isTyping) {\n                isTyping = true;\n                startTyping(markups[0], document.querySelector(\'.self-typing-1\'), false);\n            }\n        }\n        if(event.target.classList[1] === "typeButton--2") {\n            if (!isTyping) {\n                isTyping = true;\n                startTyping(markups[1], document.querySelector(\'.self-typing-2\'), true);\n            }\n        }\n    });\n    </code></pre>\n    ', "<pre><code>\n    let phrases = [\n        'This text transforms   ',\n        'into other texts       ',\n        'no jQuery or any plugin',\n        'just pure javascript   ',\n        'Cool, right?            '\n    ];\n    \n    const phrasesLastLetters = [];\n    let isRebulding1 = false;\n    \n    function setCharAt(str,index,char) {\n        if(index > str.length-1) return str;\n    \n        return str.substr(0,index) + char + str.substr(index+1);\n    }\n    \n    function moderateLists() {\n        phrases.forEach(el => {\n            phrasesLastLetters.push(el.charAt(0));\n        });\n    }\n    \n    function rebuildTextFinal(el, phrase, nextPhrase) {\n    \n        let firstLetter = nextPhrase.charAt(0);\n        let newText = phrase;\n        let isDone = false;\n    \n        for (var i = 0; (i < nextPhrase.length - 1 && !isDone); i++) {\n            (function(i) {\n                setTimeout(function() {\n                    newText = setCharAt(newText, i - 1, nextPhrase.charAt(i));\n                    setTimeout(function() {\n                        if (i < phrase.length - 1) {\n                            newText = setCharAt(newText, i - 1, nextPhrase.charAt(i - 1));\n                        } \n                    }, 25 * i); \n                    if (i > 1) {\n                        newText = newText.replace(newText.charAt(1), nextPhrase.charAt(1));     \n                    }\n                    if (i > 4) {\n                        newText = newText.replace(newText.charAt(3), nextPhrase.charAt(3));     \n                        newText = newText.replace(newText.charAt(2), nextPhrase.charAt(2));     \n                    }\n                    if (!isDone) {\n                        newText =  newText.replace(newText.charAt(0), firstLetter);\n                        el.textContent = '' + newText;\n                    }\n                    if (!(i < nextPhrase.length - 1)) {\n                        el.textContent = nextPhrase;\n                        isDone = true;\n                    }\n                }, 75 * i);\n              \n            })(index++);\n        }\n    }\n    \n    \n    moderateLists();\n    let element, index, phraseNext;\n    let gI = -1;\n    \n    let inter;\n    \n    document.addEventListener('click', event => { \n        if (event.target.classList[1] === 'cipherButton--0') {\n            isRebulding1 = true;\n            inter = window.setInterval(() => {\n                if (gI === phrases.length - 1) {\n                    gI = 0;\n                } else {\n                    gI++;\n                }\n                element = document.querySelector('.rebuildingText--0');\n                index = (gI);\n                if (gI === phrases.length - 1) {\n                    phraseNext = phrases[0];\n                } else {\n                    phraseNext = phrases[gI + 1];\n                }\n    \n                rebuildTextFinal(element, phrases[index], phraseNext);\n            }, 3670);\n        }\n        if (event.target.classList[1] === 'cipherButton--1') {\n            if (typeof inter !== 'undefined') {\n                window.clearInterval(inter);\n            }\n        }\n    });\n    </code></pre>", "<pre><code>\n    let nextPhrase = 'into text that is reciphered';\n    const phrases = ['This text rechipers', 'into text that is reciphered', 'still no jQuery or any other plugin', 'It IS cool'];\n    let isRebuilding = false;\n\n    function cipherLetter(el, newLetter, isTimed) {\n        const symbols = ['!', '\"', '#', '$', '%', '*', '0', '1', ':', ';', '?', '@', '[', ']', '\\', '~', \"'\", '/', '{', '}', '|', '&', '(', ')', '-', '<', '>'];\n        let changeNumber;\n        if (!isTimed) {\n            changeNumber = Math.round(Math.random() * (44 - 6) + 6);\n        } else {\n            changeNumber = Math.round(Math.random() * (14 - 6) + 6);\n        }\n        let isDone = false;\n        var index = 0;\n        setTimeout(function() {\n            while (index <= changeNumber) { \n                (function(index) {\n                    setTimeout(function() {\n                        if (!isDone) {\n                            let symbol = symbols[Math.floor(Math.random() * symbols.length)];\n                            el.textContent = symbol;\n                        }\n                        if (!(index < changeNumber)) {\n                            isDone = true;\n                            el.textContent = newLetter;\n                            el.classList.remove('changed');\n                        }\n                    }, 65 * index);\n                })(index++);\n            }\n        }, Math.random() * 1000);\n    }\n\n    function splitText(el, nextPhraseLength) {\n        const oldText = el.textContent;\n        el.textContent = '';\n        for (var i = 0; i < oldText.length; i++) {\n            el.insertAdjacentHTML('beforeend', '<span>' + oldText.charAt(i) + '</span>');\n        }\n        if (nextPhraseLength > oldText.length) {\n            for (var i = 0; i < nextPhraseLength - oldText.length; i++) {\n                el.insertAdjacentHTML('beforeend', '<span></span>');\n            }\n        }\n    }\n\n    function recipherText(children, nextText) {\n        children.forEach((el, i) => {\n            if (!(el.textContent == nextText.charAt(i))) {\n                el.classList.add('changed');\n                if (el.textContent.length === 0) {\n                    setTimeout(function() {\n                        cipherLetter(el, nextText.charAt(i), true);\n                    }, 45 * i);\n                } else {\n                    cipherLetter(el, nextText.charAt(i), false);\n                }\n            }\n        });\n    }\n\n    let element = document.querySelector('.rebuildingText--1');\n    let inter;\n    let gI = -1;\n\n    document.addEventListener('click', event => { \n    \n        if (event.target.classList[1] === 'scrambleButton--0') {\n            isRebuilding = true;\n            inter = window.setInterval(() => {\n                if (gI === phrases.length - 1) {\n                    gI = 0;\n                } else {\n                    gI++;\n                }\n                let index = (gI);\n                if (gI === phrases.length - 1) {\n                    nextPhrase = phrases[0];\n                } else {\n                    nextPhrase = phrases[gI + 1];\n                }\n                element.textContent = phrases[index];\n            \n                splitText(element, nextPhrase.length);\n                recipherText(Array.from(element.childNodes), nextPhrase);\n            }, 7680);\n        }\n        if (event.target.classList[1] === 'scrambleButton--1') {\n            if (typeof inter !== 'undefined') {\n                window.clearInterval(inter);\n            }\n        }\n    });\n    </code></pre>", "<pre><code>\n    class Item {\n        constructor(image) {\n            image.item = this;\n            this.image = image;\n            this.fullWidth = image.width;\n            this.fullHeight = image.height;\n            this.alt = image.alt;\n            this.title = image.title;\n            image.style.position = 'absolute';\n            this.moveTo = function (x, y, scale) {\n                this.width = this.fullWidth * scale;\n                this.height = this.fullHeight * scale;\n                this.x = x;\n                this.y = y;\n                this.scale = scale;\n                var style = this.image.style;\n                style.width = this.width + \"px\";\n                style.left = x + \"px\";\n                style.top = y + \"px\";\n                style.zIndex = \"\" + (scale * 100) | 0;\n            };\n        }\n    }\n    \n    class Carousel {\n        constructor(container, options) {\n            var self = this;\n            this.items = [];\n            let item = container;\n            this.xCentre = (options.xPos === null) ? item.offsetWidth * 0.5 : options.xPos;\n            this.yCentre = (options.yPos === null) ? item.offsetHeight * 0.1 : options.yPos;\n            this.xRadius = (options.xRadius === null) ? item.offsetWidth / 2.3 : options.xRadius;\n            this.yRadius = (options.yRadius === null) ? item.offsetHeight / 6 : options.yRadius;\n            this.farScale = options.farScale;\n            this.rotation = this.destRotation = Math.PI / 2;\n            this.speed = options.speed;\n            this.frameTimer = 0;\n            this.rotateItem = function (itemIndex, rotation) {\n                var item = this.items[itemIndex];\n                var sin = Math.sin(rotation);\n                var farScale = this.farScale;\n                var scale = farScale + ((1 - farScale) * (sin + 1) * 0.5);\n                item.moveTo(this.xCentre + (scale * ((Math.cos(rotation) * this.xRadius) - (item.fullWidth * 0.5))), this.yCentre + (scale * sin * this.yRadius), scale);\n            };\n            this.render = function () {\n                var count = this.items.length;\n                var spacing = 2 * Math.PI / count;\n                var radians = this.rotation;\n                for (var i = 0; i < count; i++) {\n                    this.rotateItem(i, radians);\n                    radians += spacing;\n                }\n            };\n            this.playFrame = function () {\n                var change = this.destRotation - this.rotation;\n                if (Math.abs(change) <= 0) {\n                    this.rotation = this.destRotation;\n                    clearTimeout(this.frameTimer);\n                    this.frameTimer = 0;\n                }\n                else {\n                    this.rotation += change * this.speed;\n                    this.scheduleNextFrame();\n                }\n                this.render();\n            };\n            this.scheduleNextFrame = function () {\n                this.frameTimer = setTimeout(function () { self.playFrame(); }, 32);\n            };\n            this.itemsRotated = function () {\n                return this.items.length * ((Math.PI / 2) - this.rotation) / (2 * Math.PI);\n            };\n            this.floatIndex = function () {\n                var floatIndex = this.itemsRotated() % this.items.length;\n                return (floatIndex < 0) ? floatIndex + this.items.length : floatIndex;\n            };\n            this.nearestIndex = function () {\n                return Math.round(this.floatIndex()) % this.items.length;\n            };\n            this.go = function (count) {\n                this.destRotation += (2 * Math.PI / this.items.length) * count;\n                if (this.frameTimer === 0)\n                    this.scheduleNextFrame();\n            };\n            var images = item.querySelectorAll('.carouselm-item');\n            document.addEventListener('click', e => {\n                if (e.target.classList[1] == 'carousel-menu-left') {\n                    self.go(-1);\n                }\n                if (e.target.classList[1] == 'carousel-menu-right') {\n                    self.go(1);\n                }\n            });\n            this.finishInit = function () {\n                clearInterval(this.initTimer);\n                for (var i = 0; i < images.length; i++) {\n                    this.items.push(new Item(images[i]));\n                }\n                this.render();\n            };\n            this.initTimer = setInterval(function () { self.finishInit(); }, 50);\n        }\n    }\n    \n    \n    window.onload = function () {\n        const options = {\n            xPos: null,\n            yPos: 42,\n            xRadius: null,\n            yRadius: 48,\n            farScale: 0.5,\n            speed: 0.13\n        };\n    \n        new Carousel(document.querySelector('#carouselm'), options);\n    };\n    </code></pre>"], document.addEventListener("click", function (e) {
    if ("block__btn" === e.target.parentNode.classList[0]) {
      var _n4 = Array.from(document.querySelector(".".concat(e.target.parentNode.classList[1])).parentNode.childNodes);

      var t = _n4[_n4.length - 2],
          _i3 = markups[".".concat(e.target.parentNode.classList[1]).replace(/\D/g, "")],
          o = document.querySelector(".".concat(e.target.parentNode.classList[1])).parentNode.childNodes[3];
      if ("active" === o.classList[2]) for (o.classList.remove("active"); t.firstChild;) {
        t.removeChild(t.firstChild);
      } else o.classList.add("active"), t.insertAdjacentHTML("afterbegin", _i3);
      updateView();
    }
  }), updateView = function updateView() {
    Array.from(document.querySelectorAll(".markup")).forEach(function (e) {
      e.style.boxShadow = "inset 0 0 100px #797979";
    });
  }, updateView();
}]);

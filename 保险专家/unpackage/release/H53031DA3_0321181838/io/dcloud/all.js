function __adsfsdaf99dsafsd090dsfsd__() {
    function e(b, c) {
        c = [ b ][a[5]]([][a[6]][a[7]](c)), logger[a[8]][a[9]](logger, c);
    }
    function f(b, c) {
        try {
            switch (c) {
              case a[10]:
              case a[11]:
                return JSON[a[12]](b);

              case a[13]:
                return a[14];
            }
        } catch (d) {
            return a[15] + d;
        }
        return null === b || void 0 === b ? Object[a[16]].toString[a[7]](b) :b[a[17]]();
    }
    function g(b, c) {
        var d, e, g, h, i, j;
        if (null === b || void 0 === b) return [ a[18] ];
        if (1 == arguments[a[19]]) return [ b[a[17]]() ];
        for (typeof b != a[20] && (b = b[a[17]]()), d = /(.*?)%(.)(.*)/, e = b, g = []; c[a[19]] && (h = d[a[21]](e)); ) i = c[a[22]](), 
        e = h[3], g[a[23]](h[1]), h[2] != a[24] ? g[a[23]](f(i, h[2])) :(g[a[23]](a[24]), 
        c[a[26]](i));
        return g[a[23]](e), j = [][a[6]][a[7]](c), j[a[26]](g[a[27]](a[14])), j;
    }
    var a = [ "plus", "tools", "bridge", "Console", "console", "concat", "slice", "call", "logLevel", "apply", "j", "o", "stringify", "c", "", "error JSON.stringify()ing argument: ", "prototype", "toString", "", "length", "string", "exec", "shift", "push", "%", "%", "unshift", "join", "", "log", "LOG", "info", "INFO", "warn", "WARN", "error", "ERROR", "assert", "ASSERT:", "clear", "clear", "time", "valueOf", "timeEnd", "Timer [", ": ", "ms]", "format", "logLevel", " ", "debug", "addEventListener", "error", "message", "\rfilename:", "filename", "\rlineno:", "lineno" ], c = (window[a[0]][a[1]], 
    window[a[0]]), d = !0;
    B = window[a[0]][a[2]], _LOGF = a[3], winConsole = window[a[4]], Timers = {}, logger = {}, 
    logger[a[29]] = function() {
        e(a[30], arguments);
    }, logger[a[31]] = function() {
        e(a[32], arguments);
    }, logger[a[33]] = function() {
        e(a[34], arguments);
    }, logger[a[35]] = function() {
        e(a[36], arguments);
    }, logger[a[37]] = function(b) {
        if (!b) {
            var c = vformat([][a[6]][a[7]](arguments, 1));
            throw logger[a[29]](a[38] + c), new Error(c);
        }
    }, logger[a[39]] = function() {
        B[a[21]](_LOGF, a[40], 0);
    }, logger[a[41]] = function(b) {
        Timers[b] = new Date()[a[42]]();
    }, logger[a[43]] = function(b) {
        var d, c = Timers[b];
        c && (d = new Date()[a[42]]() - c, logger[a[29]](a[44] + b + a[45] + d + a[46]));
    }, logger[a[8]] = function(b) {
        var c = [][a[6]][a[7]](arguments, 1), d = logger[a[47]][a[9]](logger[a[47]], c);
        B[a[21]](_LOGF, a[48], [ b, d ]);
    }, logger[a[47]] = function() {
        return g(arguments[0], [][a[6]][a[7]](arguments, 1))[a[27]](a[49]);
    }, d ? (c[a[4]] = {}, c[a[4]][a[29]] = function() {}, c[a[4]][a[31]] = function() {}, 
    c[a[4]][a[35]] = function() {}, c[a[4]][a[33]] = function() {}, c[a[4]][a[37]] = function() {}, 
    c[a[4]][a[39]] = function() {}, c[a[4]][a[41]] = function() {}, c[a[4]][a[43]] = function() {}) :c[a[4]] = logger, 
    c[a[1]][a[50]] && (window[a[4]][a[29]] = logger[a[29]], window[a[4]][a[31]] = logger[a[31]], 
    window[a[4]][a[35]] = logger[a[35]], window[a[4]][a[33]] = logger[a[33]], window[a[51]](a[52], function(b) {
        var c = b[a[53]] + a[54] + b[a[55]] + a[56] + b[a[57]];
        window[a[4]][a[35]](c);
    }));
}

!function(a) {
    function k(a) {
        var c, d, f, g, j, m, n;
        if (k[a] !== e) return k[a];
        if ("bug-string-char-index" == a) c = "a" != "a"[0]; else if ("json" == a) c = k("json-stringify") && k("json-parse"); else {
            if (f = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}', "json-stringify" == a) {
                if (g = h.stringify, j = "function" == typeof g && i) {
                    (d = function() {
                        return 1;
                    }).toJSON = d;
                    try {
                        j = "0" === g(0) && "0" === g(new Number()) && '""' == g(new String()) && g(b) === e && g(e) === e && g() === e && "1" === g(d) && "[1]" == g([ d ]) && "[null]" == g([ e ]) && "null" == g(null) && "[null,null,null]" == g([ e, b, null ]) && g({
                            a:[ d, !0, !1, null, "\0\b\n\f\r  " ]
                        }) == f && "1" === g(null, d) && "[\n 1,\n 2\n]" == g([ 1, 2 ], null, 1) && '"-271821-04-20T00:00:00.000Z"' == g(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == g(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == g(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == g(new Date(-1));
                    } catch (l) {
                        j = !1;
                    }
                }
                c = j;
            }
            if ("json-parse" == a) {
                if (m = h.parse, "function" == typeof m) try {
                    if (0 === m("0") && !m(!1) && (d = m(f), n = 5 == d["a"].length && 1 === d["a"][0])) {
                        try {
                            n = !m('" "');
                        } catch (l) {}
                        if (n) try {
                            n = 1 !== m("01");
                        } catch (l) {}
                        if (n) try {
                            n = 1 !== m("1.");
                        } catch (l) {}
                    }
                } catch (l) {
                    n = !1;
                }
                c = n;
            }
        }
        return k[a] = !!c;
    }
    var c, d, e, h, i, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, b = {}.toString;
    "function" == typeof define && define.amd, h = {}, i = new Date(-0xc782b5b800cec);
    try {
        i = -109252 == i.getUTCFullYear() && 0 === i.getUTCMonth() && 1 === i.getUTCDate() && 10 == i.getUTCHours() && 37 == i.getUTCMinutes() && 6 == i.getUTCSeconds() && 708 == i.getUTCMilliseconds();
    } catch (j) {}
    k("json") || (l = "[object Function]", m = "[object Date]", n = "[object Number]", 
    o = "[object String]", p = "[object Array]", q = "[object Boolean]", r = k("bug-string-char-index"), 
    i || (s = Math.floor, t = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], 
    u = function(a, b) {
        return t[b] + 365 * (a - 1970) + s((a - 1969 + (b = +(b > 1))) / 4) - s((a - 1901 + b) / 100) + s((a - 1601 + b) / 400);
    }), (c = {}.hasOwnProperty) || (c = function(a) {
        var e, d = {};
        return (d.__proto__ = null, d.__proto__ = {
            toString:1
        }, d).toString != b ? c = function(a) {
            var b = this.__proto__, c = (this.__proto__ = null, a in this);
            return this.__proto__ = b, c;
        } :(e = d.constructor, c = function(a) {
            var b = (this.constructor || e).prototype;
            return a in this && !(a in b && this[a] === b[a]);
        }), d = null, c.call(this, a);
    }), v = {
        "boolean":1,
        number:1,
        string:1,
        undefined:1
    }, w = function(a, b) {
        var c = typeof a[b];
        return "object" == c ? !!a[b] :!v[c];
    }, d = function(a, e) {
        var g, h, i, f = 0;
        (g = function() {
            this.valueOf = 0;
        }).prototype.valueOf = 0, h = new g();
        for (i in h) c.call(h, i) && f++;
        return g = h = null, f ? d = 2 == f ? function(a, d) {
            var g, e = {}, f = b.call(a) == l;
            for (g in a) f && "prototype" == g || c.call(e, g) || !(e[g] = 1) || !c.call(a, g) || d(g);
        } :function(a, d) {
            var f, g, e = b.call(a) == l;
            for (f in a) e && "prototype" == f || !c.call(a, f) || (g = "constructor" === f) || d(f);
            (g || c.call(a, f = "constructor")) && d(f);
        } :(h = [ "valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor" ], 
        d = function(a, d) {
            var f, g, e = b.call(a) == l, i = !e && "function" != typeof a.constructor && w(a, "hasOwnProperty") ? a.hasOwnProperty :c;
            for (f in a) e && "prototype" == f || !i.call(a, f) || d(f);
            for (g = h.length; f = h[--g]; i.call(a, f) && d(f)) ;
        }), d(a, e);
    }, k("json-stringify") || (x = {
        92:"\\\\",
        34:'\\"',
        8:"\\b",
        12:"\\f",
        10:"\\n",
        13:"\\r",
        9:"\\t"
    }, y = "000000", z = function(a, b) {
        return (y + (b || 0)).slice(-a);
    }, A = "\\u00", B = function(a) {
        for (var g, b = '"', c = 0, d = a.length, e = !r || d > 10, f = e && (r ? a.split("") :a); d > c; c++) switch (g = a.charCodeAt(c)) {
          case 8:
          case 9:
          case 10:
          case 12:
          case 13:
          case 34:
          case 92:
            b += x[g];
            break;

          default:
            if (32 > g) {
                b += A + z(2, g.toString(16));
                break;
            }
            b += e ? f[c] :a.charAt(c);
        }
        return b + '"';
    }, C = function(a, f, g, h, i, j, k) {
        var l, r, t, v, w, x, y, A, D, E, F, G, H, I, J, K;
        try {
            l = f[a];
        } catch (L) {}
        if ("object" == typeof l && l) if (r = b.call(l), r != m || c.call(l, "toJSON")) "function" == typeof l.toJSON && (r != n && r != o && r != p || c.call(l, "toJSON")) && (l = l.toJSON(a)); else if (l > -1 / 0 && 1 / 0 > l) {
            if (u) {
                for (w = s(l / 864e5), t = s(w / 365.2425) + 1970 - 1; u(t + 1, 0) <= w; t++) ;
                for (v = s((w - u(t, 0)) / 30.42); u(t, v + 1) <= w; v++) ;
                w = 1 + w - u(t, v), x = (l % 864e5 + 864e5) % 864e5, y = s(x / 36e5) % 24, A = s(x / 6e4) % 60, 
                D = s(x / 1e3) % 60, E = x % 1e3;
            } else t = l.getUTCFullYear(), v = l.getUTCMonth(), w = l.getUTCDate(), y = l.getUTCHours(), 
            A = l.getUTCMinutes(), D = l.getUTCSeconds(), E = l.getUTCMilliseconds();
            l = (0 >= t || t >= 1e4 ? (0 > t ? "-" :"+") + z(6, 0 > t ? -t :t) :z(4, t)) + "-" + z(2, v + 1) + "-" + z(2, w) + "T" + z(2, y) + ":" + z(2, A) + ":" + z(2, D) + "." + z(3, E) + "Z";
        } else l = null;
        if (g && (l = g.call(f, a, l)), null === l) return "null";
        if (r = b.call(l), r == q) return "" + l;
        if (r == n) return l > -1 / 0 && 1 / 0 > l ? "" + l :"null";
        if (r == o) return B("" + l);
        if ("object" == typeof l) {
            for (I = k.length; I--; ) if (k[I] === l) throw TypeError();
            if (k.push(l), F = [], J = j, j += i, r == p) {
                for (H = 0, I = l.length; I > H; H++) G = C(H, l, g, h, i, j, k), F.push(G === e ? "null" :G);
                K = F.length ? i ? "[\n" + j + F.join(",\n" + j) + "\n" + J + "]" :"[" + F.join(",") + "]" :"[]";
            } else d(h || l, function(a) {
                var b = C(a, l, g, h, i, j, k);
                b !== e && F.push(B(a) + ":" + (i ? " " :"") + b);
            }), K = F.length ? i ? "{\n" + j + F.join(",\n" + j) + "\n" + J + "}" :"{" + F.join(",") + "}" :"{}";
            return k.pop(), K;
        }
    }, h.stringify = function(a, c, d) {
        var e, f, g, h, k, i, j;
        if ("function" == typeof c || "object" == typeof c && c) if ((h = b.call(c)) == l) f = c; else if (h == p) for (g = {}, 
        i = 0, j = c.length; j > i; k = c[i++], h = b.call(k), (h == o || h == n) && (g[k] = 1)) ;
        if (d) if ((h = b.call(d)) == n) {
            if ((d -= d % 1) > 0) for (e = "", d > 10 && (d = 10); e.length < d; e += " ") ;
        } else h == o && (e = d.length <= 10 ? d :d.slice(0, 10));
        return C("", (k = {}, k[""] = a, k), f, g, e, "", []);
    })), a.JSON3 = h;
}(this), (!window.plus || window.plus && !window.plus.isReady) && (window.plus = navigator.plus = {
    isReady:!0
}), function(a) {
    var b = a.tools = {
        __UUID__:0,
        UNKNOWN:-1,
        IOS:0,
        ANDROID:1,
        platform:-1,
        debug:!1,
        UUID:function(a) {
            return a + this.__UUID__++ + new Date().valueOf();
        },
        extend:function(a, b) {
            for (var c in b) a[c] = b[c];
        },
        typeName:function(a) {
            return Object.prototype.toString.call(a).slice(8, -1);
        },
        isDate:function(a) {
            return "Date" == b.typeName(a);
        },
        isArray:function(a) {
            return "Array" == b.typeName(a);
        },
        isDebug:function() {
            return a.tools.debug;
        },
        stringify:function(a) {
            return window.JSON3 ? window.JSON3.stringify(a) :JSON.stringify(a);
        },
        isNumber:function(a) {
            return "number" == typeof a || a instanceof Number;
        },
        execJSfile:function(a) {
            function c(a) {
                var b = document.head, d = document.body;
                b ? b.insertBefore(a, b.firstChild) :d ? d.insertBefore(a, d.firstChild) :setTimeout(function() {
                    c(a);
                }, 100);
            }
            var b = document.createElement("script");
            b.type = "text/javascript", b.src = a, c(b);
        },
        copyObjProp2Obj:function(a, b, c) {
            var e, f, g, d = c instanceof Array ? !0 :!1;
            for (e in b) {
                if (f = !0, d) for (g = 0; g < c.length; g++) if (e == c[g]) {
                    f = !1;
                    break;
                }
                f ? a[e] = b[e] :f = !0;
            }
        },
        clone:function(a) {
            if (!a || "function" == typeof a || b.isDate(a) || "object" != typeof a) return a;
            var c, d;
            if (b.isArray(a)) {
                for (c = [], d = 0; d < a.length; ++d) c.push(b.clone(a[d]));
                return c;
            }
            c = {};
            for (d in a) d in c && c[d] == a[d] || (c[d] = b.clone(a[d]));
            return c;
        }
    };
    b.debug = window.__nativeparamer__ && window.__nativeparamer__.debug ? !0 :!1, b.platform = window._____platform_____;
}(window.plus), function(plus) {
    function createExecIframe() {
        function a(b) {
            var c = document.body;
            c ? b.parentNode || c.appendChild(b) :setTimeout(function() {
                a(b);
            }, 100);
        }
        var b = document.createElement("iframe");
        return b.id = "exebridge", b.style.display = "none", a(b), b;
    }
    var T = plus.tools, B = plus.bridge = {
        NO_RESULT:0,
        OK:1,
        CLASS_NOT_FOUND_EXCEPTION:2,
        ILLEGAL_ACCESS_EXCEPTION:3,
        INSTANTIATION_EXCEPTION:4,
        MALFORMED_URL_EXCEPTION:5,
        IO_EXCEPTION:6,
        INVALID_ACTION:7,
        JSON_EXCEPTION:8,
        ERROR:9,
        callbacks:{},
        commandQueue:[],
        isInEvalJs:0,
        synExecXhr:new XMLHttpRequest(),
        execIframe:null,
        nativecomm:function() {
            if (!B.commandQueue.length) return "";
            var a = "[" + B.commandQueue.join(",") + "]";
            return B.commandQueue.length = 0, a;
        },
        execImg:null,
        createImg:function() {
            function a(b) {
                var c = document.body;
                c ? c.appendChild(b) :setTimeout(function() {
                    a(b);
                }, 100);
            }
            var b = document.createElement("img");
            return b.id = "exebridge", b.style.display = "none", a(b), b;
        },
        exec:function(a, b, c, d) {
            c.push(d), T.IOS == T.platform ? (B.commandQueue.push(T.stringify([ window.__HtMl_Id__, a, b, d || null, c ])), 
            B.execIframe && !B.execIframe.parentNode && document.body.appendChild(B.execIframe), 
            1 != B.commandQueue.length || B.isInEvalJs || (B.execIframe = B.execIframe || createExecIframe(), 
            B.execIframe.src = "plus://command")) :T.ANDROID == T.platform && window.prompt(T.stringify(c), "pdr:" + T.stringify([ a, b, !0 ]));
        },
        execSync:function(service, action, args, fn) {
            var json, sync, ret;
            if (T.IOS == T.platform) {
                try {
                    if (json = T.stringify([ [ window.__HtMl_Id__, service, action, null, args ] ]), 
                    sync = B.synExecXhr, sync.open("post", "http://localhost:13131/cmds", !1), sync.setRequestHeader("Content-Type", "multipart/form-data"), 
                    sync.send(json), fn) return fn(sync.responseText);
                } catch (e) {
                    console.log("sf:" + action + "-" + service);
                }
                return window.eval(sync.responseText);
            }
            return T.ANDROID == T.platform ? (ret = window.prompt(T.stringify(args), "pdr:" + T.stringify([ service, action, !1 ])), 
            fn ? fn(ret) :eval(ret)) :void 0;
        },
        nativeEval:function(a) {
            if (T.IOS == T.platform) {
                B.isInEvalJs++;
                try {
                    return a(), B.nativecomm();
                } finally {
                    B.isInEvalJs--;
                }
            } else a();
        },
        callbackFromNative:function(a, b) {
            var c = B.callbacks[a];
            c && (b.status == B.OK && c.success ? c.success && c.success(b.message) :c.fail && c.fail(b.message), 
            b.keepCallback || delete B.callbacks[a]);
        },
        callbackId:function(a, b) {
            var c = T.UUID("plus");
            return B.callbacks[c] = {
                success:a,
                fail:b
            }, c;
        }
    };
}(window.plus), plus.obj = plus.obj || {}, plus.obj.Callback = function() {
    function a() {
        var a = this;
        a.__callbacks__ = {}, a.__callback_id__ = plus.bridge.callbackId(function(b) {
            var f, g, c = b.evt, d = b.args, e = a.__callbacks__[c];
            if (e) for (f = e.length, g = 0; f > g; g++) a.onCallback(e[g], c, d);
        });
    }
    return a.prototype.addEventListener = function(a, b) {
        var d = !1, e = this;
        return b && (e.__callbacks__[a] || (e.__callbacks__[a] = [], d = !0), e.__callbacks__[a].push(b)), 
        d;
    }, a.prototype.removeEventListener = function(a, b) {
        var c = !1, d = this;
        return d.__callbacks__[a] && (d.__callbacks__[a].pop(b), c = 0 === d.__callbacks__[a].length, 
        c && (d.__callbacks__[a] = null)), c;
    }, a;
}(), function(a, b) {
    function k(a) {
        var b = c.callbackId(function(a) {
            var c, d, b = h.slice(0);
            for (i = new j(a.x, a.y, a.z), c = 0, d = b.length; d > c; c++) b[c].win(i);
        }, function(a) {
            var c, d, b = h.slice(0);
            for (c = 0, d = b.length; d > c; c++) b[c].fail(a);
        });
        c.exec(e, "start", [ b, a ]), f = !0;
    }
    function l() {
        c.exec(e, "stop", []), f = !1;
    }
    function m(a, b) {
        return {
            win:a,
            fail:b
        };
    }
    function n(a) {
        var b = h.indexOf(a);
        b > -1 && (h.splice(b, 1), 0 === h.length && l());
    }
    var c = a.bridge, d = a.tools, e = "Accelerometer", f = !1, g = {}, h = [], i = null, j = function(a, b, c) {
        this.xAxis = a, this.yAxis = b, this.zAxis = c;
    }, o = {
        getCurrentAcceleration:function(a, b) {
            var d = m(function(b) {
                n(d), a(b);
            }, function(a) {
                n(d), b && b(a);
            });
            h.push(d), f || k(-1);
        },
        watchAcceleration:function(a, c, e) {
            var j = e && e.frequency && "number" == typeof e.frequency ? e.frequency :500, l = d.UUID("watch"), o = m(function() {}, function(a) {
                n(o), c && c(a);
            });
            return h.push(o), g[l] = {
                timer:b.setInterval(function() {
                    i && a(i);
                }, j),
                listeners:o
            }, f ? i && a(i) :k(j), l;
        },
        clearWatch:function(a) {
            a && g[a] && (b.clearInterval(g[a].timer), n(g[a].listeners), delete g[a]);
        }
    };
    a.accelerometer = o;
}(this.plus, this), function(a) {
    var b = a.bridge, c = a.tools, d = "Audio", e = "RecorderExecMethod", f = "AudioExecMethod", g = "AudioSyncExecMethod";
    a.audio = {
        getRecorder:function() {
            var a = {
                _Audio_UUID__:c.UUID("Record"),
                supportedFormats:[ "amr", "3gp" ],
                supportedSamplerates:[ 8e3, 16e3, 44100 ],
                record:function(a, c, f) {
                    var g = b.callbackId(c, f);
                    b.exec(d, e, [ "record", [ this._Audio_UUID__, g, a ] ]);
                },
                stop:function() {
                    b.exec(d, e, [ "stop", [ this._Audio_UUID__ ] ]);
                },
                pause:function() {
                    b.exec(d, e, [ "pause", [ this._Audio_UUID__ ] ]);
                }
            };
            return c.IOS == c.platform && (a.supportedFormats = [ "wav", "aac", "amr" ]), a;
        },
        createPlayer:function(a) {
            var e = {
                _Player_FilePath:a,
                _Audio_Player_UUID_:c.UUID("Player"),
                play:function(a, c) {
                    var e = b.callbackId(a, c);
                    b.exec(d, f, [ "play", [ this._Audio_Player_UUID_, e ] ]);
                },
                pause:function() {
                    b.exec(d, f, [ "pause", [ this._Audio_Player_UUID_ ] ]);
                },
                resume:function() {
                    b.exec(d, f, [ "resume", [ this._Audio_Player_UUID_ ] ]);
                },
                stop:function() {
                    b.exec(d, f, [ "stop", [ this._Audio_Player_UUID_ ] ]);
                },
                seekTo:function(a) {
                    b.exec(d, f, [ "seekTo", [ this._Audio_Player_UUID_, a ] ]);
                },
                getDuration:function() {
                    return b.execSync(d, g, [ "getDuration", [ this._Audio_Player_UUID_ ] ]);
                },
                getPosition:function() {
                    return b.execSync(d, g, [ "getPosition", [ this._Audio_Player_UUID_ ] ]);
                },
                setRoute:function(a) {
                    b.exec(d, f, [ "setRoute", [ this._Audio_Player_UUID_, a ] ]);
                }
            };
            return b.execSync(d, g, [ "CreatePlayer", [ e._Audio_Player_UUID_, e._Player_FilePath ] ]), 
            e;
        },
        ROUTE_SPEAKER:0,
        ROUTE_EARPIECE:1
    };
}(window.plus), function(a) {
    function d(a, d) {
        var f, g, h, e = this;
        e.onmarked = null, e.onerror = null, f = c.callbackId(function(a) {
            "function" == typeof e.onmarked && e.onmarked(a.type, a.message, a.file);
        }, function(a) {
            "function" == typeof e.onerror && e.onerror(a);
        }), g = document.getElementById(a), g.addEventListener("resize", function() {
            var a = [ g.offsetLeft, g.offsetTop, g.offsetWidth, g.offsetHeight ];
            c.exec(b, "resize", [ a ]);
        }, !1), h = [ g.offsetLeft, g.offsetTop, g.offsetWidth, g.offsetHeight ], c.exec(b, "Barcode", [ f, h, d ]);
    }
    var f, b = "barcode", c = window.plus.bridge, e = d.prototype;
    e.start = function(a) {
        c.exec(b, "start", [ a ]);
    }, e.setFlash = function(a) {
        c.exec(b, "setFlash", [ a ]);
    }, e.cancel = function() {
        c.exec(b, "cancel", []);
    }, f = {
        Barcode:d,
        scan:function(a, d, e, f) {
            var g = "function" != typeof d ? null :function(a) {
                d(a.type, a.message, a.file);
            }, h = "function" != typeof e ? null :function(a) {
                e(a);
            }, i = c.callbackId(g, h);
            c.exec(b, "scan", [ i, a, f ]);
        }
    }, f.QR = 0, f.EAN13 = 1, f.EAN8 = 2, f.AZTEC = 3, f.DATAMATRIX = 4, f.UPCA = 5, 
    f.UPCE = 6, f.CODABAR = 7, f.CODE39 = 8, f.CODE93 = 9, f.CODE128 = 10, f.ITF = 11, 
    f.MAXICODE = 12, f.PDF417 = 13, f.RSS14 = 14, f.RSSEXPANDED = 15, a.barcode = f;
}(window.plus), function(a) {
    var b = a.bridge, c = "Cache";
    a.cache = {
        clear:function(a) {
            var d = b.callbackId(function() {
                a && a();
            }, null);
            window.localStorage.clear(), window.sessionStorage.clear(), b.exec(c, "clear", [ d ]);
        },
        calculate:function(a) {
            var d = b.callbackId(function(b) {
                a && a(b);
            }, null);
            b.exec(c, "calculate", [ d ]);
        },
        setMaxSize:function(a) {
            b.exec(c, "setMaxSize", [ a ]);
        }
    };
}(window.plus), function(a) {
    function e() {
        this.__busy__ = !1, this.supportedImageResolutions = [], this.supportedVideoResolutions = [], 
        this.supportedImageFormats = [], this.supportedVideoFormats = [];
    }
    var d, g, b = window.plus.bridge, c = "Camera", f = e.prototype;
    f.captureImage = function(a, d, e) {
        var g, h, i, f = this;
        f.__busy__ || (g = "function" != typeof a ? null :function(b) {
            f.__busy__ = !1, a(b);
        }, h = "function" != typeof d ? null :function(a) {
            f.__busy__ = !1, d(a);
        }, i = b.callbackId(g, h), b.exec(c, "captureImage", [ i, e ]));
    }, f.startVideoCapture = function(a, d, e) {
        var g, h, i, f = this;
        f.__busy__ || (g = "function" != typeof a ? null :function(b) {
            f.__busy__ = !1, a(b);
        }, h = "function" != typeof d ? null :function(a) {
            f.__busy__ = !1, d(a);
        }, i = b.callbackId(g, h), b.exec(c, "startVideoCapture", [ i, e ]));
    }, f.stopVideoCapture = function() {
        b.exec(c, "stopVideoCapture", []);
    }, g = {
        getCamera:function(a) {
            if (d) return d;
            d = new e();
            var f = b.execSync(c, "getCamera", [ d.__UUID__, a ]);
            return f ? (d.supportedImageFormats = f.supportedImageFormats, d.supportedVideoFormats = f.supportedVideoFormats, 
            d.supportedImageResolutions = f.supportedImageResolutions, d.supportedVideoResolutions = f.supportedVideoResolutions) :(d.supportedImageFormats = [ "png", "jpg" ], 
            d.supportedVideoFormats = [ "mp4" ], d.supportedVideoResolutions = [ "640*480", "1280*720", "960*540" ]), 
            d;
        }
    }, a.camera = g;
}(window.plus), plus.tools.debug ? __adsfsdaf99dsafsd090dsfsd__() :(plus.console = {}, 
plus.console.log = function() {}, plus.console.info = function() {}, plus.console.error = function() {}, 
plus.console.warn = function() {}, plus.console.assert = function() {}, plus.console.clear = function() {}, 
plus.console.time = function() {}, plus.console.timeEnd = function() {}), function(a) {
    function i(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
        this.id = a || null, this.rawId = o || null, this.target = 0, this.displayName = b || null, 
        this.name = c || null, this.nickname = d || null, this.phoneNumbers = e || null, 
        this.emails = f || null, this.addresses = g || null, this.ims = h || null, this.organizations = i || null, 
        this.birthday = j || null, this.note = k || null, this.photos = l || null, this.categories = m || null, 
        this.urls = n || null;
    }
    function k(a, b) {
        function c(a, b) {
            if (a) for (var c = a.length, d = 0; c > d; ++d) b[d].id = a[d].id;
        }
        b.id = a.id, c(a.phoneNumbers, b.phoneNumbers), c(a.emails, b.emails), c(a.addresses, b.addresses), 
        c(a.ims, b.ims), c(a.organizations, b.organizations), c(a.categories, b.categories), 
        c(a.photos, b.photos), c(a.urls, b.urls);
    }
    function l(a) {
        var b = a.birthday;
        try {
            d.isDate(b) || (a.birthday = new Date(parseFloat(b)));
        } catch (c) {
            console.log("Cordova Contact convertIn error: exception creating date.");
        }
        return a;
    }
    function m(a) {
        var b = a.birthday;
        if (null !== b) {
            if (!d.isDate(b)) try {
                b = new Date(b);
            } catch (c) {
                b = null;
            }
            d.isDate(b) && (b = b.valueOf()), a.birthday = b;
        }
        return a;
    }
    function n(a) {
        this.type = a;
    }
    var e, f, j, o, p, b = "Contacts", c = a.plus.bridge, d = a.plus.tools, g = function(a) {
        this.code = a || null;
    };
    g.UNKNOWN_ERROR = 0, g.INVALID_ARGUMENT_ERROR = 1, g.TIMEOUT_ERROR = 2, g.PENDING_OPERATION_ERROR = 3, 
    g.IO_ERROR = 4, g.NOT_SUPPORTED_ERROR = 5, g.PERMISSION_DENIED_ERROR = 20, j = i.prototype, 
    j.remove = function(a, d) {
        var f, e = d && function(a) {
            d(new g(a));
        };
        null === this.id ? e(g.UNKNOWN_ERROR) :(f = c.callbackId(a, e), c.exec(b, "remove", [ f, this.id, this.target ], {
            cbid:f
        }));
    }, j.clone = function() {
        function b(a) {
            if (a) for (var b = a.length, c = 0; b > c; ++c) a[c].id = null;
        }
        var a = d.clone(this);
        return a.id = null, b(a.phoneNumbers), b(a.emails), b(a.addresses), b(a.ims), b(a.organizations), 
        b(a.categories), b(a.photos), b(a.urls), a;
    }, j.save = function(a, h) {
        var i = this, j = function(a) {
            h && h(new g(a));
        }, n = function(b) {
            if (b) try {
                var c = 0 == i.target ? e.create(b) :f.create(b);
                a && (k(l(c), i), a(i));
            } catch (d) {
                console.log(d);
            } else j(g.UNKNOWN_ERROR);
        }, o = m(d.clone(this)), p = c.callbackId(n, j);
        c.exec(b, "save", [ p, o, this.target ], {
            cbid:p
        });
    }, o = n.prototype, o.create = function(a) {
        var c, b = new i();
        b.target = this.type;
        for (c in a) "undefined" != typeof b[c] && a.hasOwnProperty(c) && (b[c] = a[c]);
        return b;
    }, o.find = function(a, d, f, g) {
        var h = function(a) {
            var c, f, b = [];
            for (c = 0, f = a.length; f > c; c++) b.push(e.create(a[c]));
            d(b);
        }, i = c.callbackId(h, f);
        c.exec(b, "search", [ i, a, g ], {
            cbid:i
        });
    }, p = plus.contacts = {
        getAddressBook:function(a, d, h) {
            var i, j, k;
            (0 !== a || 1 !== a) && (a = 0), i = function() {
                d && (p.ADDRESSBOOK_PHONE == a ? (e = e ? e :new n(0), d(e)) :(f = f ? f :new n(1), 
                d(e)));
            }, j = function(a) {
                h(new g(a));
            }, k = c.callbackId(i, j), c.exec(b, "getAddressBook", [ k, a ], {
                cbid:k
            });
        },
        ADDRESSBOOK_PHONE:0,
        ADDRESSBOOK_SIM:1
    };
}(window), function(a) {
    function f(a, b, c) {
        this.type = e.getValue(a, ""), this.handles = [], this.capture = e.getValue(c, !1), 
        "function" == typeof b && this.handles.push(b);
    }
    function g(a, b, d) {
        var f = this;
        f.id = c.UUID("dt"), f.url = e.getValue(a, ""), f.downloadedSize = 0, f.totalSize = 0, 
        f.options = b || {}, f.filename = e.getValue(f.options.filename, ""), f.method = e.getValue(f.options.method, "GET"), 
        f.timeout = e.getValue(f.options.timeout, 120), f.retry = e.getValue(f.options.retry, 3), 
        f.retryInterval = e.getValue(f.options.retryInterval, 30), f.priority = e.getValue(f.options.priority, 1), 
        f.onCompleted = d || null, f.eventHandlers = {}, f.data = e.getValue(f.options.data, null), 
        f.__requestHeaders__ = {}, f.__responseHeaders__ = {}, f.__noParseResponseHeader__ = null, 
        f.__cacheReponseHeaders__ = {};
    }
    var h, i, b = window.plus.bridge, c = window.plus.tools, e = {
        server:"Downloader",
        getValue:function(a, b) {
            return void 0 === a ? b :a;
        }
    };
    f.prototype.fire = function() {
        for (var b = 0; b < this.handles.length; ++b) this.handles[b].apply(this, arguments);
    }, h = g.prototype, h.getFileName = function() {
        return this.filename;
    }, h.start = function() {
        b.exec(e.server, "start", [ this.id, this.__requestHeaders__ ]);
    }, h.pause = function() {
        b.exec(e.server, "pause", [ this.id ]);
    }, h.resume = function() {
        b.exec(e.server, "resume", [ this.id ]);
    }, h.abort = function() {
        b.exec(e.server, "abort", [ this.id ]);
    }, h.getAllResponseHeaders = function() {
        var a, b;
        if (this.__noParseResponseHeader__) return this.__noParseResponseHeader__;
        a = "";
        for (b in this.__responseHeaders__) a = a + b + " : " + this.__responseHeaders__[b] + "\r\n";
        return this.__noParseResponseHeader__ = a, this.__noParseResponseHeader__;
    }, h.getResponseHeader = function(a) {
        var b, c, d;
        if ("string" == typeof a) {
            if (b = null, a = a.toLowerCase(), b = this.__cacheReponseHeaders__[a]) return b;
            for (c in this.__responseHeaders__) d = this.__responseHeaders__[c], c = c.toLowerCase(), 
            a === c && (b = b ? b + ", " + d :d);
            return this.__cacheReponseHeaders__[a] = b, b;
        }
        return "";
    }, h.setRequestHeader = function(a, b) {
        if ("string" == typeof a && "string" == typeof b) {
            var c = this.__requestHeaders__[a];
            this.__requestHeaders__[a] = c ? c + ", " + b :b;
        }
    }, h.addEventListener = function(a, b, c) {
        if ("string" == typeof a && "function" == typeof b) {
            var d = a.toLowerCase();
            void 0 === this.eventHandlers[d] ? this.eventHandlers[d] = new f(a, b, c) :this.eventHandlers[d].handles.push(b);
        }
    }, h.__handlerEvt__ = function(a) {
        var c, b = this;
        b.filename = e.getValue(a.filename, b.filename), b.state = e.getValue(a.state, b.state), 
        b.downloadedSize = e.getValue(a.downloadedSize, b.downloadedSize), b.totalSize = e.getValue(a.totalSize, b.totalSize), 
        b.__responseHeaders__ = e.getValue(a.headers, {}), 4 == b.state && "function" == typeof b.onCompleted && b.onCompleted(b, a.status || null), 
        c = this.eventHandlers["statechanged"], c && c.fire(b, a.status || null);
    }, i = a.downloader = {
        __taskList__:[],
        createDownload:function(a, c, d) {
            if ("string" == typeof a) {
                var f = new g(a, c, d);
                return i.__taskList__[f.id] = f, b.exec(e.server, "createDownload", [ f ]), f;
            }
            return null;
        },
        enumerate:function(a, c) {
            var d = b.callbackId(function(b) {
                for (var j, k, c = [], d = b.length, f = 0, h = i.__taskList__; d > f; f++) j = b[f], 
                j && j.uuid && (k = h[j.uuid], k || (k = new g(), k.id = j.uuid, h[k.id] = k), k.state = e.getValue(j.state, k.state), 
                k.options = e.getValue(j.options, k.options), k.filename = e.getValue(j.filename, k.filename), 
                k.url = e.getValue(j.url, k.url), k.downloadedSize = e.getValue(j.downloadedSize, k.downloadedSize), 
                k.totalSize = e.getValue(j.totalSize, k.totalSize), k.__responseHeaders__ = e.getValue(b.headers, k.__responseHeaders__), 
                c.push(k));
                "function" == typeof a && a(c);
            });
            b.exec(e.server, "enumerate", [ d, c ]);
        },
        clear:function(a) {
            var c = 4;
            ("number" == typeof a || a instanceof Number) && (c = a), b.exec(e.server, "clear", [ c ]);
        },
        startAll:function() {
            b.exec(e.server, "startAll", [ 0 ]);
        },
        __handlerEvt__:function(a, b) {
            var c = i.__taskList__[a];
            c && (6 == b.state && delete i.__taskList__[a], c.__handlerEvt__(b));
        }
    };
}(window.plus), function(a) {
    function e(a, b) {
        this.code = a || null, this.message = b || "";
    }
    var f, b = window.plus.bridge, c = "Gallery", d = {
        Ready:0,
        Busy:1
    };
    e.BUSY = 1, f = a.gallery = {
        __galleryStatus:d.Ready,
        onPickImageFinished:null,
        pick:function(a, g, h) {
            if (d.Busy == f.__galleryStatus) return window.setTimeout(function() {
                "function" == typeof g && g(new e(e.BUSY, "已经打开了相册"));
            }, 0), void 0;
            f.__galleryStatus = d.Busy;
            var i = b.callbackId(function(b) {
                if (f.__galleryStatus = d.Ready, "function" == typeof a) if (b && b.multiple) {
                    var c = {};
                    c.files = b.files, a(c);
                } else a(b.files[0]);
            }, function(a) {
                f.__galleryStatus = d.Ready, "function" == typeof g && g(a);
            });
            b.exec(c, "pick", [ i, h ], {
                cbid:i
            });
        },
        save:function(a, d, e) {
            if ("string" == typeof a) {
                var f = b.callbackId(function() {
                    "function" == typeof d && d();
                }, function(a) {
                    "function" == typeof e && e(a);
                });
                return b.exec(c, "save", [ a, f ], {
                    cbid:f
                }), !0;
            }
            return !1;
        }
    };
}(window.plus), function(a) {
    function f(a, b, c, d, e, f, g) {
        this.latitude = a, this.longitude = b, this.accuracy = void 0 !== d ? d :null, this.altitude = void 0 !== c ? c :null, 
        this.heading = void 0 !== e ? e :null, this.speed = void 0 !== f ? f :null, (0 === this.speed || null === this.speed) && (this.heading = 0 / 0), 
        this.altitudeAccuracy = void 0 !== g ? g :null;
    }
    function g(a, b) {
        a ? (this.coordsType = a.coordsType, this.address = a.address, this.addresses = a.addresses, 
        this.coords = new f(a.latitude, a.longitude, a.altitude, a.accuracy, a.heading, a.velocity, a.altitudeAccuracy)) :this.coords = new f(), 
        this.timestamp = void 0 !== b ? b :new Date().getTime();
    }
    function h(a, b) {
        this.code = a || null, this.message = b || "", this.PERMISSION_DENIED = 1, this.POSITION_UNAVAILABLE = 2, 
        this.TIMEOUT = 3, this.UNKNOWN_ERROR = 4;
    }
    function i(a) {
        var b = {
            maximumAge:0,
            enableHighAccuracy:!1,
            timeout:1 / 0,
            geocode:!0
        };
        return a && (void 0 !== a.maximumAge && !isNaN(a.maximumAge) && a.maximumAge > 0 && (b.maximumAge = a.maximumAge), 
        void 0 !== a.enableHighAccuracy && (b.enableHighAccuracy = a.enableHighAccuracy), 
        void 0 === a.timeout || isNaN(a.timeout) || (b.timeout = a.timeout < 0 ? 0 :a.timeout), 
        a.coordsType && (b.coordsType = a.coordsType), a.provider && (b.provider = a.provider), 
        void 0 !== a.geocode && (b.geocode = a.geocode)), b;
    }
    function j(a, b) {
        var c = setTimeout(function() {
            clearTimeout(c), c = null, a(new h(h.TIMEOUT, "Position retrieval timed out."));
        }, b);
        return c;
    }
    function l(a, d, e, f) {
        var l, m, n, o;
        return e = i(e), l = {
            timer:null
        }, m = function(b) {
            if (clearTimeout(l.timer), l.timer) {
                var c = new g({
                    latitude:b.latitude,
                    longitude:b.longitude,
                    altitude:b.altitude,
                    accuracy:b.accuracy,
                    heading:b.heading,
                    velocity:b.velocity,
                    coordsType:b.coordsType,
                    address:b.address,
                    addresses:b.addresses,
                    altitudeAccuracy:b.altitudeAccuracy
                }, void 0 === b.timestamp ? new Date().getTime() :b.timestamp instanceof Date ? b.timestamp.getTime() :b.timestamp);
                k.lastPosition = c, a(c);
            }
        }, n = function(a) {
            clearTimeout(l.timer), l.timer = null;
            var b = new h(a.code, a.message);
            d && d(b);
        }, k.lastPosition && e.maximumAge && new Date().getTime() - k.lastPosition.timestamp <= e.maximumAge ? a(k.lastPosition) :0 === e.timeout ? n(new h(h.TIMEOUT, "timeout value in PositionOptions set to 0 and no cached Position object available, or cached Position object's age exceeds provided PositionOptions' maximumAge parameter.")) :(l.timer = 1 / 0 !== e.timeout ? j(n, e.timeout) :!0, 
        f && (o = c.callbackId(m, n), c.exec(b, "getCurrentPosition", [ o, e.enableHighAccuracy, e.maximumAge, e.coordsType, e.provider, e.geocode, e.timeout ]))), 
        l;
    }
    var b = "Geolocation", c = window.plus.bridge, d = window.plus.tools, e = {}, k = a.geolocation = {
        lastPosition:null,
        getCurrentPosition:function(a, b, c) {
            l(a, b, c, !0);
        },
        watchPosition:function(a, f, m) {
            var n, o, p, q;
            return m = i(m), n = d.UUID("timer"), e[n] = l(a, f, m, !1), o = function(a) {
                clearTimeout(e[n].timer);
                var b = new h(a.code, a.message);
                f && f(b);
            }, p = function(b) {
                clearTimeout(e[n].timer), 1 / 0 !== m.timeout && (e[n].timer = j(o, m.timeout));
                var c = new g({
                    latitude:b.latitude,
                    longitude:b.longitude,
                    altitude:b.altitude,
                    accuracy:b.accuracy,
                    heading:b.heading,
                    velocity:b.velocity,
                    coordsType:b.coordsType,
                    address:b.address,
                    addresses:b.addresses,
                    altitudeAccuracy:b.altitudeAccuracy
                }, void 0 === b.timestamp ? new Date().getTime() :b.timestamp instanceof Date ? b.timestamp.getTime() :b.timestamp);
                k.lastPosition = c, a(c);
            }, q = c.callbackId(p, o), c.exec(b, "watchPosition", [ q, n, m.enableHighAccuracy, m.coordsType, m.provider, m.geocode ]), 
            n;
        },
        clearWatch:function(a) {
            a && void 0 !== e[a] && (clearTimeout(e[a].timer), e[a].timer = !1, c.exec(b, "clearWatch", [ a ]));
        }
    };
}(window.plus), function(a) {
    function f(a) {
        this.code = a.code || null, this.message = a.message || "";
    }
    function g(a) {
        var b = "未知错误";
        switch (a) {
          case f.NOT_FOUND_ERR:
            b = "文件没有发现";
            break;

          case f.SECURITY_ERR:
            b = "没有获得授权";
            break;

          case f.ABORT_ERR:
            b = "取消";
            break;

          case f.NOT_READABLE_ERR:
            b = "不允许读";
            break;

          case f.ENCODING_ERR:
            b = "编码错误";
            break;

          case f.NO_MODIFICATION_ALLOWED_ERR:
            b = "不允许修改";
            break;

          case f.INVALID_STATE_ERR:
            b = "无效的状态";
            break;

          case f.SYNTAX_ERR:
            b = "语法错误";
            break;

          case f.INVALID_MODIFICATION_ERR:
            b = "无效的修改";
            break;

          case f.QUOTA_EXCEEDED_ERR:
            b = "执行出错";
            break;

          case f.TYPE_MISMATCH_ERR:
            b = "类型不匹配";
            break;

          case f.PATH_EXISTS_ERR:
            b = "路径存在";
        }
        return {
            code:a,
            message:b
        };
    }
    function h(a, b) {
        b = b || {}, this.type = a, this.bubbles = !1, this.cancelBubble = !1, this.cancelable = !1, 
        this.lengthComputable = !1, this.loaded = b.loaded || 0, this.total = b.total || 0, 
        this.target = b.target || null;
    }
    function i(a, b, c, d, e) {
        this.size = e || 0, this.type = c || null, this.name = a || "", this.lastModifiedDate = new Date(d) || null, 
        this.fullPath = b || null;
    }
    function k(a) {
        this.modificationTime = "undefined" != typeof a ? new Date(a) :null, this.size = 0, 
        this.directoryCount = 0, this.fileCount = 0;
    }
    function l(a, b, c, d, e, f) {
        this.isFile = "undefined" != typeof a ? a :!1, this.isDirectory = "undefined" != typeof b ? b :!1, 
        this.name = c || "", this.fullPath = d || "", this.fileSystem = e || null, this.__PURL__ = f ? f :"", 
        this.__remoteURL__ = f ? "http://localhost:13131/" + f :"";
    }
    function n(a, b, c, d) {
        m.constructor.apply(this, [ !0, !1, a, b, c, d ]);
    }
    function o(a, b, c, d) {
        m.constructor.apply(this, [ !1, !0, a, b, c, d ]);
    }
    function q(a, b) {
        this.path = a || null, this.__fileSystem__ = b || null;
    }
    function r() {
        this.fileName = "", this.readyState = 0, this.result = null, this.error = null, 
        this.onloadstart = null, this.onprogress = null, this.onload = null, this.onabort = null, 
        this.onerror = null, this.onloadend = null;
    }
    function t(a) {
        this.fileName = "", this.readyState = 0, this.result = null, this.length = 0, a && (this.fileName = a.fullPath || a, 
        this.length = a.size || 0), this.position = 0, this.error = null, this.onwritestart = null, 
        this.onprogress = null, this.onwrite = null, this.onabort = null, this.onsuccess = null, 
        this.onerror = null, this.onwriteend = null;
    }
    function v(a, b) {
        this.name = a || null, this.root = null, b && (this.root = new o(b.name, b.fullPath, this, b.remoteURL));
    }
    function w(a, b, c) {
        var i, j, h = function(a) {
            "function" == typeof c && c(new f(a));
        };
        1 > a || a > 4 ? h(g(f.SYNTAX_ERR)) :(i = d[a], j = function(c) {
            c ? "function" == typeof b && (i || (i = new v(c.name, c.root), d[a] = i), b(i)) :h(g(f.NOT_FOUND_ERR));
        }, i ? window.setTimeout(j(i), 0) :e.exec(j, h, "requestFileSystem", [ a ]));
    }
    function x(a, b, c) {
        var i, h = function(a) {
            c && c(new f(a));
        };
        return "string" != typeof a ? (setTimeout(function() {
            h(g(f.ENCODING_ERR));
        }, 0), void 0) :(i = function(a) {
            var c, e;
            a ? b && (e = d[a.type], e || (e = new v(a.fsName, a.fsRoot), d[a.type] = e), c = a.isDirectory ? new o(a.name, a.fullPath, e, a.remoteURL) :new n(a.name, a.fullPath, e, a.remoteURL), 
            b(c)) :h(g(f.NOT_FOUND_ERR));
        }, e.exec(i, h, "resolveLocalFileSystemURL", [ a ]), void 0);
    }
    function y(a) {
        return b.execSync(e.NATIVEF, "convertLocalFileSystemURL", [ a ]);
    }
    function z(a) {
        return b.execSync(e.NATIVEF, "convertAbsoluteFileSystem", [ a ]);
    }
    var j, m, p, s, u, b = window.plus.bridge, d = (window.plus.tools, []), e = {
        NATIVEF:"File",
        exec:function(a, c, d, f) {
            var g = b.callbackId(a, c);
            b.exec(e.NATIVEF, d, [ g, f ]);
        }
    };
    f.NOT_FOUND_ERR = 1, f.SECURITY_ERR = 2, f.ABORT_ERR = 3, f.NOT_READABLE_ERR = 4, 
    f.ENCODING_ERR = 5, f.NO_MODIFICATION_ALLOWED_ERR = 6, f.INVALID_STATE_ERR = 7, 
    f.SYNTAX_ERR = 8, f.INVALID_MODIFICATION_ERR = 9, f.QUOTA_EXCEEDED_ERR = 10, f.TYPE_MISMATCH_ERR = 11, 
    f.PATH_EXISTS_ERR = 12, j = i.prototype, j.slice = function(a, b) {
        var g, d = this.size > 0 ? this.size - 1 :0, e = 0, f = d;
        return arguments.length && (e = 0 > a ? Math.max(d + a, 0) :Math.min(d, a)), arguments.length >= 2 && (f = 0 > b ? Math.max(d + b, 0) :Math.min(b, d)), 
        e > f ? null :(g = new i(this.name, this.fullPath, this.type, this.lastModifiedDate, f - e + 1), 
        g.start = e, g.end = f, g);
    }, j.close = function() {}, m = l.prototype, m.getMetadata = function(a, b, c) {
        var d = "function" != typeof a ? null :function(b) {
            var c = new k(b.lastModifiedDate);
            c.size = b.size, c.directoryCount = b.directoryCount, c.fileCount = b.fileCount, 
            a(c);
        }, g = "function" != typeof b ? null :function(a) {
            b(new f(a));
        };
        e.exec(d, g, "getMetadata", [ this.fullPath, c ]);
    }, m.setMetadata = function(a, b, c) {
        e.exec(a, b, "setMetadata", [ this.fullPath, c ]);
    }, m.moveTo = function(a, b, c, d) {
        var j, k, l, h = this, i = function(a) {
            "function" == typeof d && d(new f(a));
        };
        return a ? (j = this.fullPath, k = b || this.name, l = function(a) {
            if (a) {
                if ("function" == typeof c) {
                    var b = a.isDirectory ? new o(a.name, a.fullPath, h.fileSystem, a.remoteURL) :new n(a.name, a.fullPath, h.fileSystem, a.remoteURL);
                    try {
                        c(b);
                    } catch (d) {}
                }
            } else i(g(f.NOT_FOUND_ERR));
        }, e.exec(l, i, "moveTo", [ j, a.fullPath, k ]), void 0) :(i(g(f.NOT_FOUND_ERR)), 
        void 0);
    }, m.copyTo = function(a, b, c, d) {
        var j, k, l, h = this, i = function(a) {
            "function" == typeof d && d(new f(a));
        };
        return a ? (j = this.fullPath, k = b || this.name, l = function(a) {
            if (a) {
                if ("function" == typeof c) {
                    var b = a.isDirectory ? new o(a.name, a.fullPath, a.fileSystem, h.remoteURL) :new n(a.name, a.fullPath, h.fileSystem, a.remoteURL);
                    try {
                        c(b);
                    } catch (d) {}
                }
            } else i(g(f.NOT_FOUND_ERR));
        }, e.exec(l, i, "copyTo", [ j, a.fullPath, k ]), void 0) :(i(g(f.NOT_FOUND_ERR)), 
        void 0);
    }, m.remove = function(a, b) {
        var c = "function" != typeof b ? null :function(a) {
            b(new f(a));
        };
        e.exec(a, c, "remove", [ this.fullPath ]);
    }, m.toURL = function() {
        return this.__PURL__;
    }, m.toLocalURL = function() {
        return "file://" + this.fullPath;
    }, m.toRemoteURL = function() {
        return this.__remoteURL__;
    }, m.getParent = function(a, b) {
        var c = this, d = "function" != typeof a ? null :function(b) {
            var d = new o(b.name, b.fullPath, c.fileSystem, b.remoteURL);
            a(d);
        }, g = "function" != typeof b ? null :function(a) {
            b(new f(a));
        };
        e.exec(d, g, "getParent", [ this.fullPath ]);
    }, n.prototype = new l(), n.prototype.constructor = n, n.prototype.createWriter = function(a, b) {
        this.file(function(c) {
            var d = new t(c);
            null === d.fileName || "" === d.fileName ? "function" == typeof b && b(new f(g(f.INVALID_STATE_ERR))) :"function" == typeof a && a(d);
        }, b);
    }, n.prototype.file = function(a, b) {
        var c = "function" != typeof a ? null :function(b) {
            var c = new i(b.name, b.fullPath, b.type, b.lastModifiedDate, b.size);
            a(c);
        }, d = "function" != typeof b ? null :function(a) {
            b(new f(a));
        };
        e.exec(c, d, "getFileMetadata", [ this.fullPath ]);
    }, p = new l(), o.prototype = p, p.constructor = o, p.createReader = function() {
        return new q(this.fullPath, this.fileSystem);
    }, p.getDirectory = function(a, b, c, d) {
        var g = this, h = "function" != typeof c ? null :function(a) {
            var b = new o(a.name, a.fullPath, g.fileSystem, a.remoteURL);
            c(b);
        }, i = "function" != typeof d ? null :function(a) {
            d(new f(a));
        };
        e.exec(h, i, "getDirectory", [ this.fullPath, a, b ]);
    }, p.removeRecursively = function(a, b) {
        var c = "function" != typeof b ? null :function(a) {
            b(new f(a));
        };
        e.exec(a, c, "removeRecursively", [ this.fullPath ]);
    }, p.getFile = function(a, b, c, d) {
        var g = this, h = "function" != typeof c ? null :function(a) {
            var b = new n(a.name, a.fullPath, g.fileSystem, a.remoteURL);
            c(b);
        }, i = "function" != typeof d ? null :function(a) {
            d(new f(a));
        };
        e.exec(h, i, "getFile", [ this.fullPath, a, b ]);
    }, q.prototype.readEntries = function(a, b) {
        var c = this, d = "function" != typeof a ? null :function(b) {
            var e, f, d = [];
            for (e = 0; e < b.length; e++) f = null, b[e].isDirectory ? f = new o(b[e].name, b[e].fullPath, c.__fileSystem__, b[e].remoteURL) :b[e].isFile && (f = new n(b[e].name, b[e].fullPath, c.__fileSystem__, b[e].remoteURL)), 
            d.push(f);
            a(d);
        }, g = "function" != typeof b ? null :function(a) {
            b(new f(a));
        };
        e.exec(d, g, "readEntries", [ this.path ]);
    }, r.EMPTY = 0, r.LOADING = 1, r.DONE = 2, s = r.prototype, s.abort = function() {
        this.result = null, this.readyState != r.DONE && this.readyState != r.EMPTY && (this.readyState = r.DONE, 
        "function" == typeof this.onabort && this.onabort(new h("abort", {
            target:this
        })), "function" == typeof this.onloadend && this.onloadend(new h("loadend", {
            target:this
        })));
    }, s.readAsText = function(a, b) {
        var c, d;
        if (this.fileName = "", this.fileName = "undefined" == typeof a.fullPath ? a :a.fullPath, 
        this.readyState == r.LOADING) throw new f(f.INVALID_STATE_ERR);
        this.readyState = r.LOADING, "function" == typeof this.onloadstart && this.onloadstart(new h("loadstart", {
            target:this
        })), c = b ? b :"UTF-8", d = this, e.exec(function(a) {
            d.readyState !== r.DONE && (d.result = a, "function" == typeof d.onload && d.onload(new h("load", {
                target:d
            })), d.readyState = r.DONE, "function" == typeof d.onloadend && d.onloadend(new h("loadend", {
                target:d
            })));
        }, function(a) {
            d.readyState !== r.DONE && (d.readyState = r.DONE, d.result = null, d.error = new f(a), 
            "function" == typeof d.onerror && d.onerror(new h("error", {
                target:d
            })), "function" == typeof d.onloadend && d.onloadend(new h("loadend", {
                target:d
            })));
        }, "readAsText", [ this.fileName, c, a.start, a.end ]);
    }, s.readAsDataURL = function(a) {
        if (this.fileName = "", this.fileName = "undefined" == typeof a.fullPath ? a :a.fullPath, 
        this.readyState == r.LOADING) throw new f(f.INVALID_STATE_ERR);
        this.readyState = r.LOADING, "function" == typeof this.onloadstart && this.onloadstart(new h("loadstart", {
            target:this
        }));
        var b = this;
        e.exec(function(a) {
            b.readyState !== r.DONE && (b.readyState = r.DONE, b.result = a, "function" == typeof b.onload && b.onload(new h("load", {
                target:b
            })), "function" == typeof b.onloadend && b.onloadend(new h("loadend", {
                target:b
            })));
        }, function(a) {
            b.readyState !== r.DONE && (b.readyState = r.DONE, b.result = null, b.error = new f(a), 
            "function" == typeof b.onerror && b.onerror(new h("error", {
                target:b
            })), "function" == typeof b.onloadend && b.onloadend(new h("loadend", {
                target:b
            })));
        }, "readAsDataURL", [ this.fileName, a.start, a.end ]);
    }, s.readAsArrayBuffer = function() {}, t.INIT = 0, t.WRITING = 1, t.DONE = 2, u = t.prototype, 
    u.abort = function() {
        if (this.readyState === t.DONE || this.readyState === t.INIT) throw new f(g(f.INVALID_STATE_ERR));
        this.error = new f(g(f.ABORT_ERR)), this.readyState = t.DONE, "function" == typeof this.onabort && this.onabort(new h("abort", {
            target:this
        })), "function" == typeof this.onwriteend && this.onwriteend(new h("writeend", {
            target:this
        }));
    }, u.write = function(a) {
        var b = this;
        if ("string" != typeof a) throw new f(f.TYPE_MISMATCH_ERR);
        if (this.readyState === t.WRITING) throw new f(f.INVALID_STATE_ERR);
        this.readyState = t.WRITING, "function" == typeof b.onwritestart && b.onwritestart(new h("writestart", {
            target:b
        })), e.exec(function(a) {
            b.readyState !== t.DONE && (b.position += a, b.length += a, b.readyState = t.DONE, 
            "function" == typeof b.onwrite && b.onwrite(new h("write", {
                target:b
            })), "function" == typeof b.onsuccess && b.onsuccess(new h("success", {
                target:b
            })), "function" == typeof b.onwriteend && b.onwriteend(new h("writeend", {
                target:b
            })));
        }, function(a) {
            b.readyState !== t.DONE && (b.readyState = t.DONE, b.error = new f(a), "function" == typeof b.onerror && b.onerror(new h("error", {
                target:b
            })), "function" == typeof b.onwriteend && b.onwriteend(new h("writeend", {
                target:b
            })));
        }, "write", [ this.fileName, a, this.position ]);
    }, u.seek = function(a) {
        if (this.readyState === t.WRITING) throw new f(f.INVALID_STATE_ERR);
        (a || 0 === a) && (this.position = 0 > a ? Math.max(a + this.length, 0) :a > this.length ? this.length :a);
    }, u.truncate = function(a) {
        if (this.readyState === t.WRITING) throw new f(f.INVALID_STATE_ERR);
        this.readyState = t.WRITING;
        var b = this;
        "function" == typeof b.onwritestart && b.onwritestart(new h("writestart", {
            target:this
        })), e.exec(function(a) {
            b.readyState !== t.DONE && (b.readyState = t.DONE, b.length = a, b.position = Math.min(b.position, a), 
            "function" == typeof b.onwrite && b.onwrite(new h("write", {
                target:b
            })), "function" == typeof b.onwriteend && b.onwriteend(new h("writeend", {
                target:b
            })));
        }, function(a) {
            b.readyState !== t.DONE && (b.readyState = t.DONE, b.error = new f(a), "function" == typeof b.onerror && b.onerror(new h("error", {
                target:b
            })), "function" == typeof b.onwriteend && b.onwriteend(new h("writeend", {
                target:b
            })));
        }, "truncate", [ this.fileName, a, this.position ]);
    }, a.io = {
        FileSystem:v,
        DirectoryEntry:o,
        DirectoryReader:q,
        FileReader:r,
        FileWriter:t,
        requestFileSystem:w,
        resolveLocalFileSystemURL:x,
        convertLocalFileSystemURL:y,
        convertAbsoluteFileSystem:z,
        PRIVATE_WWW:1,
        PRIVATE_DOC:2,
        PUBLIC_DOCUMENTS:3,
        PUBLIC_DOWNLOADS:4
    };
}(window.plus), function(a) {
    function j(a, f, g) {
        return c.ANDROID == c.platform ? b.exec(d, e, [ c.stringify([ a, f, g ]) ], null) :b.exec(d, e, [ a, f, g ], null);
    }
    function k(a, e, g) {
        return c.ANDROID == c.platform ? b.exec(d, f, [ c.stringify([ a, [ e, g ] ]) ], null) :b.exec(d, f, [ a, [ e, g ] ], null);
    }
    function l(a, e, f) {
        return c.ANDROID == c.platform ? b.execSync(d, g, [ c.stringify([ a, [ e, f ] ]) ], null) :b.execSync(d, g, [ a, [ e, f ] ], null);
    }
    function m(a, e, f) {
        return c.ANDROID == c.platform ? b.exec(d, h, [ c.stringify([ a, [ e, f ] ]) ], null) :b.exec(d, h, [ a, [ e, f ] ], null);
    }
    function n(a) {
        var b = {
            zoom:12,
            type:"MAPTYPE_NORMAL",
            traffic:!1,
            zoomControls:!1
        };
        return a && a.center instanceof t && (b.center = a.center), a && "number" == typeof a.zoom && a.zoom <= 22 && a.zoom >= 1 && (b.zoom = a.zoom), 
        !a || "MAPTYPE_NORMAL" != a.type && "MAPTYPE_SATELLITE" != a.type || (b.type = a.type), 
        a && "boolean" == typeof a.traffic && (b.traffic = a.traffic), a && "boolean" == typeof a.zoomControls && (b.zoomControls = a.zoomControls), 
        b;
    }
    function o(b, d) {
        function f(a, b) {
            if ("click" == b.callbackType) e.onclick && e.onclick(b.payload); else if ("change" == b.callbackType) {
                if (e.onstatuschanged) var c = {};
                c.target = e, c.zoom = b.zoom, c.center = new t(b.center.long, b.center.lat), b.northease && (c.bounds = new s(new t(b.northease.long, b.northease.lat), new t(b.southwest.long, b.southwest.lat))), 
                e.onstatuschanged(c);
            }
        }
        var e, g, h;
        d = n(d), e = this, this._UUID_ = c.UUID("map"), this._ui_div_id_ = b, this.__showUserLocationVisable__ = !1, 
        this.center = d.center ? d.center :new a.maps.Point(116.39716, 39.91669), this.zoom = d.zoom, 
        this.userLocation = null, this.mapType = d.type, this.zoomControlsVisable = d.zoomControls, 
        this.trafficVisable = d.traffic, this.visable = !0, this.onclick = function() {}, 
        this.onstatuschanged = function() {}, i.pushCallback(this._UUID_, f), g = document.getElementById(this._ui_div_id_), 
        a.tools.platform == a.tools.ANDROID ? document.addEventListener("plusorientationchange", function() {
            setTimeout(function() {
                var a = [ g.offsetLeft, g.offsetTop, g.offsetWidth, g.offsetHeight ];
                console.log("reszie=" + a), k(e._UUID_, "resize", a);
            }, 200);
        }, !1) :g.addEventListener("resize", function() {
            var a = [ g.offsetLeft, g.offsetTop, g.offsetWidth, g.offsetHeight ];
            k(e._UUID_, "resize", a);
        }, !1), h = [ g.offsetLeft, g.offsetTop, g.offsetWidth, g.offsetHeight, d ], j(this._UUID_, "mapview", h);
    }
    function q(a) {
        this._UUID_ = c.UUID("Bubble"), this.label = "string" == typeof a ? a :"", this.icon = null, 
        this.marker = null, this.__contentImage = null, this.__contentImageAsDataURL = null, 
        this.onclick = function() {};
    }
    function s(a, b, c, d) {
        "number" == typeof a && "number" == typeof b && "number" == typeof c && "number" == typeof d ? (this.northease = new t(a, b), 
        this.southwest = new t(c, d)) :a instanceof t && b instanceof t && (this.northease = a, 
        this.southwest = b);
    }
    function t(a, b) {
        this.longitude = a, this.latitude = b;
    }
    function v() {
        this._UUID_ = null, this.visable = !0;
    }
    function x(a) {
        function d(a, c) {
            "bubbleclick" == c.type ? b.bubble && b.bubble.onclick && b.bubble.onclick(b.bubble) :"markerclick" == c.type ? b.onclick && b.onclick(b) :"onDrag" == c.type && (b.point = c.pt, 
            b.onDrag(b));
        }
        var b = this;
        this._UUID_ = c.UUID("marker"), this.point = a, this.icon = "", this.caption = "", 
        this.bubble = null, this.canDraggable = !1, this.onclick = function() {}, this.onDrag = function() {}, 
        i.pushCallback(this._UUID_, d), j(this._UUID_, "marker", [ a ]);
    }
    function z() {
        this.strokeColor = "#FFFFFF", this.strokeOpacity = 1, this.fillColor = "#FFFFFF", 
        this.fillOpacity = 1, this.lineWidth = 5, this.visable = !0;
    }
    function B(a, b) {
        this.center = a, this.radius = b, this._UUID_ = c.UUID("circle"), j(this._UUID_, "circle", [ a, b ]);
    }
    function D(a) {
        this.path = a, this._UUID_ = c.UUID("polygon"), j(this._UUID_, "polygon", [ a ]);
    }
    function F(a) {
        this.path = a, this._UUID_ = c.UUID("polyline"), j(this._UUID_, "polyline", [ a ]);
    }
    function H(a, b, d) {
        this._UUID_ = c.UUID("route"), this.startPoint = a, this.endPoint = b, this.pointCount = 0, 
        this.pointList = [], this.distance = 0, this.routeTip = "", "undefined" == typeof d && j(this._UUID_, "route", [ a, b, d ]);
    }
    function I(a) {
        this.point = a, this.address = "", this.city = "", this.name = "", this.phone = "", 
        this.postcode = "";
    }
    function J() {
        this.__state__ = 0, this.__type__ = 1, this.startPosition = null, this.endPosition = null, 
        this.routeNumber = 0, this.routeList = [];
    }
    function K() {
        this.__state__ = 0, this.__type__ = 0, this.totalNumber = 0, this.currentNumber = 0, 
        this.pageNumber = 0, this.pageIndex = 0, this.poiList = [];
    }
    function L(a) {
        function d(a, c) {
            0 == c.__type__ ? b.onPoiSearchComplete && b.onPoiSearchComplete(c.__state__, c) :1 == c.__type__ && b.onRouteSearchComplete && b.onRouteSearchComplete(c.__state__, c);
        }
        var b = this;
        this._UUID_ = c.UUID("search"), this.pageCapacity = 10, this.map = a, this.onPoiSearchComplete = function() {}, 
        this.onRouteSearchComplete = function() {}, i.pushCallback(this._UUID_, d), j(this._UUID_, "search", [ null ]);
    }
    var r, u, w, y, A, C, E, G, M, b = a.bridge, c = a.tools, d = "Maps", e = "createObject", f = "updateObject", g = "updateObjectSYNC", h = "execMethod", i = {
        callback:[],
        pushCallback:function(a, b, c) {
            this.callback[a] = {
                fun:b,
                nokeep:c
            };
        },
        execCallback:function(a, b) {
            this.callback[a] && (this.callback[a].fun && this.callback[a].fun(a, b), this.callback[a].nokeep && delete this.callback[a]);
        }
    }, p = o.prototype;
    p.centerAndZoom = function(a, b) {
        if (a instanceof t && "number" == typeof b) {
            this.center = a, this.zoom = b;
            var c = [ a, b ];
            k(this._UUID_, "centerAndZoom", c);
        }
    }, p.setCenter = function(a) {
        if (a instanceof t) {
            this.center = a;
            var b = [ a ];
            k(this._UUID_, "setCenter", b);
        }
    }, p.getCenter = function() {
        return this.center;
    }, p.setZoom = function(a) {
        "number" == typeof a && (this.zoom = a, k(this._UUID_, "setZoom", [ a ]));
    }, p.getZoom = function() {
        return this.zoom;
    }, p.setMapType = function(a) {
        ("MAPTYPE_NORMAL" == a || "MAPTYPE_SATELLITE" == a) && (this.mapType = a, k(this._UUID_, "setMapType", [ a ]));
    }, p.getMapType = function() {
        return this.mapType;
    }, p.showUserLocation = function(a) {
        if ("boolean" == typeof a && this.__showUserLocationVisable__ != a) {
            this.__showUserLocationVisable__ = a;
            var b = [ a ];
            k(this._UUID_, "showUserLocation", b);
        }
    }, p.isShowUserLocation = function() {
        return this.__showUserLocationVisable__;
    }, p.getUserLocation = function(a) {
        function b(b, c) {
            a && a(c.state, c.point);
        }
        var d, e;
        return "function" == typeof a ? (d = c.UUID("callback"), i.pushCallback(d, b, !0), 
        e = [ d ], k(this._UUID_, "getUserLocation", e), !0) :!1;
    }, p.getCurrentCenter = function(a) {
        function c(b, c) {
            a && a(c.state, c.point);
        }
        var d, e;
        return "function" == typeof a ? (d = b.callbackId(c), i.pushCallback(d, c, !0), 
        e = [ d ], k(this._UUID_, "getCurrentCenter", e), !0) :!1;
    }, p.setTraffic = function(a) {
        if ("boolean" == typeof a && a != this.trafficVisable) {
            this.trafficVisable = a;
            var b = [ a ];
            k(this._UUID_, "setTraffic", b);
        }
    }, p.isTraffic = function() {
        return this.trafficVisable;
    }, p.showZoomControls = function(a) {
        if ("boolean" == typeof a && a != this.zoomControlsVisable) {
            this.zoomControlsVisable = a;
            var b = [ a ];
            k(this._UUID_, "showZoomControls", b);
        }
    }, p.isShowZoomControls = function() {
        return this.zoomControlsVisable;
    }, p.getBounds = function() {
        var a = l(this._UUID_, "getBounds", []), b = new t(a.northease.longitude, a.northease.latitude), c = new t(a.southwest.longitude, a.southwest.latitude);
        return new s(b, c);
    }, p.reset = function() {
        k(this._UUID_, "reset", [ null ]);
    }, p.show = function() {
        var a, b;
        1 != this.visable && (this.visable = !0, a = document.getElementById(this._ui_div_id_), 
        a.style.display = "", b = [ a.offsetLeft, a.offsetTop, a.offsetWidth, a.offsetHeight ], 
        k(this._UUID_, "show", b));
    }, p.hide = function() {
        0 != this.visable && (this.visable = !1, document.getElementById(this._ui_div_id_).style.display = "none", 
        k(this._UUID_, "hide", [ null ]));
    }, p.addOverlay = function(a) {
        if (a instanceof B || a instanceof D || a instanceof F || a instanceof H || a instanceof x) {
            var b = [ a._UUID_ ];
            return k(this._UUID_, "addOverlay", b), !0;
        }
        return !1;
    }, p.removeOverlay = function(a) {
        if (a instanceof B || a instanceof D || a instanceof F || a instanceof H || a instanceof x) {
            var b = [ a._UUID_ ];
            return k(this._UUID_, "removeOverlay", b), !0;
        }
        return !1;
    }, p.clearOverlays = function() {
        var a = [ null ];
        k(this._UUID_, "clearOverlays", a);
    }, o.calculateDistance = function(a, c, e, f) {
        var g = b.callbackId(function(a) {
            "function" == typeof e && e({
                distance:a
            });
        }, function(a) {
            "function" == typeof f && f(a);
        });
        b.exec(d, "calculateDistance", [ a, c, g ]);
    }, o.calculateArea = function(a, c, e) {
        var f = b.callbackId(function(a) {
            "function" == typeof c && c({
                area:a
            });
        }, function(a) {
            "function" == typeof e && e(a);
        });
        b.exec(d, "calculateArea", [ a, f ]);
    }, o.convertCoordinates = function(a, c, e, f) {
        var g = b.callbackId(function(a) {
            if ("function" == typeof e) {
                var b = {};
                b.coord = new t(a.long, a.lat), b.coordType = a.type, e(b);
            }
        }, function(a) {
            "function" == typeof f && f(a);
        });
        b.exec(d, "convertCoordinates", [ a, c, g ]);
    }, o.geocode = function(a, c, e, f) {
        var g = b.callbackId(function(a) {
            if ("function" == typeof e) {
                var b = {};
                b.coord = new t(a.long, a.lat), b.address = a.addr, b.coordType = a.type, e(b);
            }
        }, function(a) {
            "function" == typeof f && f(a);
        });
        b.exec(d, "geocode", [ a, c, g ]);
    }, o.reverseGeocode = function(a, c, e, f) {
        var g = b.callbackId(function(a) {
            if ("function" == typeof e) {
                var b = {};
                b.coord = new t(a.long, a.lat), b.address = a.addr, b.coordType = a.type, e(b);
            }
        }, function(a) {
            "function" == typeof f && f(a);
        });
        b.exec(d, "reverseGeocode", [ a, c, g ]);
    }, r = q.prototype, r.setIcon = function(a) {
        "string" == typeof a && (this.icon = a, this.marker && k(this.marker._UUID_, "setBubbleIcon", [ this.icon ]));
    }, r.loadImage = function(a) {
        this.marker && (this.__contentImage = a, this.__contentImageAsDataURL = null, k(this.marker._UUID_, "loadImage", [ a ]));
    }, r.loadImageDataURL = function(a) {
        this.marker && (this.__contentImage = null, this.__contentImageAsDataURL = a, k(this.marker._UUID_, "loadImageDataURL", [ a ]));
    }, r.getLabel = function() {
        return this.label;
    }, r.setLabel = function(a) {
        "string" == typeof a && (this.label = a, this.marker && k(this.marker._UUID_, "setBubbleLabel", [ this.label ]));
    }, r.belongMarker = function() {
        return this.marker;
    }, s.prototype.setNorthEase = function(a) {
        a instanceof t && (this.northease = a);
    }, s.prototype.getNorthEase = function() {
        return this.northease;
    }, s.prototype.setSouthWest = function(a) {
        a instanceof t && (this.southwest = a);
    }, s.prototype.getSouthWest = function() {
        return this.southwest;
    }, s.prototype.contains = function(a) {
        return a instanceof t ? a.longitude <= this.northease.longitude && a.longitude >= this.southwest.longitude && a.latitude <= this.northease.latitude && a.latitude >= this.southwest.latitude :!1;
    }, s.prototype.equals = function(a) {
        return a instanceof s ? this.northease.equals(a.northease) && this.southwest.equals(a.southwest) :!1;
    }, s.prototype.getCenter = function() {
        var a = (this.northease.longitude - this.southwest.longitude) / 2, b = (this.northease.latitude - this.southwest.latitude) / 2;
        return new t(a + this.southwest.longitude, b + this.southwest.latitude);
    }, u = t.prototype, u.setLng = function(a) {
        this.longitude = a;
    }, u.getLng = function() {
        return this.longitude;
    }, u.setLat = function(a) {
        this.latitude = a;
    }, u.getLat = function() {
        return this.latitude;
    }, u.equals = function(a) {
        return this.longitude == a.longitude && this.latitude == a.latitude;
    }, w = v.prototype, w.show = function() {
        1 != this.visable && (this.visable = !0, k(this._UUID_, "show", [ "true" ]));
    }, w.hide = function() {
        0 != this.visable && (this.visable = !1, k(this._UUID_, "hide", [ "false" ]));
    }, w.isVisible = function() {
        return this.visable;
    }, w.bringToTop = function() {
        k(this._UUID_, "bringToTop", []);
    }, x.prototype = new v(), y = x.prototype, y.constructor = x, y.setPoint = function(a) {
        if (a instanceof t) {
            this.point = a;
            var b = [ a ];
            k(this._UUID_, "setPoint", b);
        }
    }, y.getPoint = function() {
        return this.point;
    }, y.setIcon = function(a) {
        "string" == typeof a && (this.icon = a, k(this._UUID_, "setIcon", [ a ]));
    }, y.setLabel = function(a) {
        "string" == typeof a && (this.caption = a, k(this._UUID_, "setLabel", [ a ]));
    }, y.getLabel = function() {
        return this.caption;
    }, y.setBubble = function(a, b) {
        var c, d;
        a instanceof q ? (c = a.marker, c && c != this && (c.bubble = null, d = [ null, null, null, null, !1 ], 
        k(c._UUID_, "setBubble", d)), a.marker = this, this.bubble = a, d = [ this.bubble.label, this.bubble.icon, this.bubble.__contentImageAsDataURL, this.bubble.__contentImage, b ], 
        k(this._UUID_, "setBubble", d)) :null == a && k(this._UUID_, "setBubble", [ null, null, null, null, b ]);
    }, y.hideBubble = function() {
        this.bubble && k(this._UUID_, "hideBubble", []);
    }, y.getBubble = function() {
        return this.bubble;
    }, y.setDraggable = function(a) {
        a != this.canDraggable && (this.canDraggable = !this.canDraggable, k(this._UUID_, "setDraggable", [ this.canDraggable ]));
    }, y.isDraggable = function() {
        return this.canDraggable;
    }, y.setIcons = function(a, b) {
        k(this._UUID_, "setIcons", [ a, b ]);
    }, z.prototype = new v(), A = z.prototype, A.constructor = z, A.setStrokeColor = function(a) {
        "string" == typeof a && (this.strokeColor = a, k(this._UUID_, "setStrokeColor", [ a ]));
    }, A.getStrokeColor = function() {
        return this.strokeColor;
    }, A.setStrokeOpacity = function(a) {
        "number" == typeof a && (0 > a ? a = 0 :a > 1 && (a = 1), this.strokeOpacity = a, 
        k(this._UUID_, "setStrokeOpacity", [ a ]));
    }, A.getStrokeOpacity = function() {
        return this.strokeOpacity;
    }, A.setFillColor = function(a) {
        "string" == typeof a && (this.fillColor = a, k(this._UUID_, "setFillColor", [ a ]));
    }, A.getFillColor = function() {
        return this.fillColor;
    }, A.setFillOpacity = function(a) {
        "number" == typeof a && (0 > a ? a = 0 :a > 1 && (a = 1), this.fillOpacity = a, 
        k(this._UUID_, "setFillOpacity", [ a ]));
    }, A.getFillOpacity = function() {
        return this.fillOpacity;
    }, A.setLineWidth = function(a) {
        "number" == typeof a && (0 > a && (a = 0), this.lineWidth = a, k(this._UUID_, "setLineWidth", [ a ]));
    }, A.getLineWidth = function() {
        return this.lineWidth;
    }, B.prototype = new z(), C = B.prototype, C.constructor = B, C.setCenter = function(a) {
        a instanceof t && (this.center = a, k(this._UUID_, "setCenter", [ a ]));
    }, C.getCenter = function() {
        return this.center;
    }, C.setRadius = function(a) {
        "number" == typeof a && a >= 0 && (this.radius = a, k(this._UUID_, "setRadius", [ a ]));
    }, C.getRadius = function() {
        return this.radius;
    }, D.prototype = new z(), E = D.prototype, E.constructor = D, E.setPath = function(a) {
        this.path = a, k(this._UUID_, "setPath", [ a ]);
    }, E.getPath = function() {
        return this.path;
    }, F.prototype = new z(), G = F.prototype, G.constructor = F, G.setPath = function(a) {
        this.path = a, k(this._UUID_, "setPath", [ a ]);
    }, G.getPath = function() {
        return this.path;
    }, H.prototype = new v(), H.prototype.constructor = H, J.prototype.getRoute = function(a) {
        return a >= 0 && a < this.routeNumber ? this.routeList[a] :null;
    }, K.prototype.getPosition = function(a) {
        return a >= 0 && a < this.currentNumber ? this.poiList[a] :null;
    }, M = L.prototype, M.setPageCapacity = function(a) {
        this.pageCapacity = a;
        var b = [ a ];
        k(this._UUID_, "setPageCapacity", b);
    }, M.getPageCapacity = function() {
        return this.pageCapacity;
    }, M.poiSearchInCity = function(a, b, c) {
        if ("string" == typeof a && "string" == typeof b) {
            var d = [ a, b, c ];
            return k(this._UUID_, "poiSearchInCity", d), !0;
        }
        return !1;
    }, M.poiSearchNearBy = function(a, b, c, d) {
        if ("string" == typeof a && b instanceof t && "number" == typeof c) {
            var e = [ a, b, c, d ];
            return k(this._UUID_, "poiSearchNearBy", e), !0;
        }
        return !1;
    }, M.poiSearchInbounds = function(a, b, c, d) {
        if ("string" == typeof a && b instanceof t && c instanceof t) {
            var e = [ a, b, c, d ];
            return k(this._UUID_, "poiSearchInbounds", e), !0;
        }
        return !1;
    }, M.setTransitPolicy = function(a) {
        var b = [ a ];
        k(this._UUID_, "setTransitPolicy", b);
    }, M.transitSearch = function(a, b, c) {
        if ((a instanceof t || "string" == typeof a) && (b instanceof t || "string" == typeof b) && "string" == typeof c) {
            var d = [ a, b, c ];
            return k(this._UUID_, "transitSearch", d), !0;
        }
        return !1;
    }, M.setDrivingPolicy = function(a) {
        var b = [ a ];
        k(this._UUID_, "setDrivingPolicy", b);
    }, M.drivingSearch = function(a, b, c, d) {
        if ((a instanceof t || "string" == typeof a) && (c instanceof t || "string" == typeof c) && "string" == typeof b && "string" == typeof d) {
            var e = [ a, b, c, d ];
            return k(this._UUID_, "drivingSearch", e), !0;
        }
        return !1;
    }, M.walkingSearch = function(a, b, c, d) {
        if ((a instanceof t || "string" == typeof a) && (c instanceof t || "string" == typeof c) && "string" == typeof b && "string" == typeof d) {
            var e = [ a, b, c, d ];
            return k(this._UUID_, "walkingSearch", e), !0;
        }
        return !1;
    }, a.maps = {
        Map:o,
        openSysMap:function(a, b, c) {
            a instanceof t && c instanceof t && m("map", "openSysMap", [ a, b, c ]);
        },
        MapType:{
            MAPTYPE_SATELLITE:"MAPTYPE_SATELLITE",
            MAPTYPE_NORMAL:"MAPTYPE_NORMAL"
        },
        Marker:x,
        Bubble:q,
        Point:t,
        Bounds:s,
        Circle:B,
        Polygon:D,
        Polyline:F,
        Position:I,
        Route:H,
        Search:L,
        SearchPolicy:{
            TRANSIT_TIME_FIRST:"TRANSIT_TIME_FIRST",
            TRANSIT_TRANSFER_FIRST:"TRANSIT_TRANSFER_FIRST",
            TRANSIT_WALK_FIRST:"TRANSIT_WALK_FIRST",
            TRANSIT_FEE_FIRST:"TRANSIT_FEE_FIRST",
            DRIVING_TIME_FIRST:"DRIVING_TIME_FIRST",
            DRIVING_NO_EXPRESSWAY:"DRIVING_NO_EXPRESSWAY",
            DRIVING_FEE_FIRST:"DRIVING_FEE_FIRST"
        },
        __SearchRouteResult__:J,
        __SearchPoiResult__:K,
        __bridge__:i
    };
}(window.plus), function(a) {
    function d(a) {
        this.__hasPendingOperation__ = !1, this.to = [], this.cc = [], this.bcc = [], this.subject = "", 
        this.body = "", this.bodyType = "text", this.silent = !1, this.attachment = [], 
        this.type = a;
    }
    var b = window.plus.bridge, c = "Messaging";
    d.prototype.addAttachment = function(a) {
        "string" == typeof a && this.attachment.push(a);
    }, a.messaging = {
        createMessage:function(a) {
            return new d(a);
        },
        sendMessage:function(a, e, f) {
            var g, h, i;
            if (a instanceof d) {
                if (g = "function" != typeof e ? null :function() {
                    a.__hasPendingOperation__ = !1, e();
                }, h = "function" != typeof f ? null :function(b) {
                    a.__hasPendingOperation__ = !1, f(b);
                }, a.__hasPendingOperation__) return h({
                    code:2,
                    message:"sending"
                }), void 0;
                a.__hasPendingOperation__ = !0, i = b.callbackId(g, h), b.exec(c, "sendMessage", [ i, a ], {
                    cbid:i
                });
            }
        },
        TYPE_SMS:1,
        TYPE_MMS:2,
        TYPE_EMAIL:3
    };
}(window.plus), function(a) {
    function i(a) {
        f[a.__uuid__] = a;
    }
    function j(a) {
        delete f[a.__uuid__];
    }
    function k(b, c, d, e) {
        a.nativeUI.alert(b, c, d, e);
    }
    function l(b, c) {
        a.nativeUI.toast(b, c);
    }
    function m(b, c, d, e) {
        a.nativeUI.confirm(b, c, d, e);
    }
    function n(b, c, d, e, f) {
        a.nativeUI.prompt(b, c, d, e, f);
    }
    function o(b, c, d) {
        a.nativeUI.pickDate(b, c, d);
    }
    function p(b, c, d) {
        a.nativeUI.pickTime(b, c, d);
    }
    function q(b, c) {
        var d = new a.ui.NWindow(b, c);
        return d;
    }
    function s(a, b) {
        r[a] = b;
    }
    function t(a, e) {
        var f = new r[a](e);
        return e && (f.id = e.id), b.exec(c, d, [ c, "createView", [ window.__HtMl_Id__, [ a, f.__uuid__, e, f.__callback_id__ ] ] ]), 
        f;
    }
    function u(a, b) {
        a && a.close(b);
    }
    function v() {
        var j, k, l, g = b.execSync(c, e, [ c, "enumWindow", [ window.__HtMl_Id__ ] ]), h = [], i = {};
        for (j = 0; j < g.length; j++) k = g[j], l = f[k.uuid], (null == l || void 0 === l) && (l = new a.ui.NWindow(null, null, !0), 
        l.__uuid__ = k.uuid, b.exec(c, d, [ c, "setcallbackid", [ l.__uuid__, [ l.__callback_id__ ] ] ])), 
        h.push(l), i[l.__uuid__] = l;
        return f = i, h;
    }
    function w(g) {
        var i, h = b.execSync(c, e, [ c, "findWindowByName", [ window.__HtMl_Id__, [ g ] ] ]);
        return h ? (i = f[h.uuid], null == i && (i = new a.ui.NWindow(null, null, !0), i.__uuid__ = h.uuid, 
        b.exec(c, d, [ c, "setcallbackid", [ i.__uuid__, [ i.__callback_id__ ] ] ])), i) :void 0;
    }
    function x() {
        var e = f[window.__HtMl_Id__];
        return (null == e || void 0 === e) && (e = new a.ui.NWindow(null, null, !0), e.__uuid__ = window.__HtMl_Id__, 
        f[e.__uuid__] = e, b.exec(c, d, [ c, "setcallbackid", [ e.__uuid__, [ e.__callback_id__ ] ] ])), 
        e;
    }
    function y() {
        a.navigator.closeSplashscreen();
    }
    function z(b) {
        a.navigator.setFullscreen(b);
    }
    function A(a, e, f) {
        b.exec(c, d, [ a.__IDENTITY__, e, [ a.__uuid__, f ] ]);
    }
    function B(a, d, f) {
        return b.execSync(c, e, [ a.__IDENTITY__, d, [ a.__uuid__, f ] ]);
    }
    function C(b, c) {
        return new a.nativeUI.showWaiting(b, c);
    }
    function D() {
        return b.execSync(c, e, [ c, "isFullScreen", [ 0 ] ]);
    }
    var r, b = a.bridge, c = "UI", d = "execMethod", e = "syncExecMethod", f = {};
    a.bridge, a.tools, r = {}, a.ui = {
        createWaiting:C,
        pickTime:p,
        pickDate:o,
        alert:k,
        confirm:m,
        prompt:n,
        toast:l,
        findWindowByName:w,
        closeWindow:u,
        createWindow:q,
        getSelfWindow:x,
        enumWindow:v,
        register:s,
        createView:t,
        exec:A,
        execSync:B,
        closeSplashscreen:y,
        setFullscreen:z,
        isFullscreen:D,
        __pushWindow__:i,
        __popWindow__:j,
        __nviews__:r
    };
}(window.plus), function(a) {
    function c(a) {
        this.__IDENTITY__ = a, this.__uuid__ = window.plus.tools.UUID(a), this.id, plus.obj.Callback.call(this);
    }
    var b = plus.bridge;
    c.prototype.getMetrics = function(c) {
        var d;
        c && (d = b.callbackId(function(a) {
            c(a);
        }), a.exec(this, "getMetrics", [ d, window.__HtMl_Id__ ]));
    }, c.prototype.onCallback = function(a, b, c) {
        a(c);
    }, c.prototype.addEventListener = function(b, c, d) {
        var f, e = plus.obj.Callback.prototype.addEventListener.apply(this, [ b, c, d ]);
        e && (f = [ b, window.__HtMl_Id__ ], a.exec(this, "addEventListener", f));
    }, c.prototype.removeEventListener = function(b, c) {
        var e, d = plus.obj.Callback.prototype.removeEventListener.apply(this, [ b, c ]);
        d && (e = [ b, window.__HtMl_Id__ ], a.exec(this, "removeEventListener", e));
    }, a.NView = c;
}(window.plus.ui), function(a) {
    function d(c, d, e) {
        this.__view_array__ = new Array(), a.NView.prototype.constructor.apply(this, [ b ]), 
        e || (a.__pushWindow__(this), a.exec(this, b, [ c, d, this.__callback_id__, window.location.href ]));
    }
    var b = "NWindow", c = plus.bridge, e = d.prototype;
    plus.tools.extend(e, a.NView.prototype), e.constructor = d, e.show = function(b, c, d) {
        a.exec(this, "show", [ b, c, d ]);
    }, e.close = function(b, c) {
        plus.bridge.callbackFromNative(this.__callback_id__, {
            status:plus.bridge.OK,
            message:{
                evt:"close"
            },
            keepCallback:!0
        }), a.__popWindow__(this), a.exec(this, "close", [ b, c ]);
    }, e.setOption = function(b) {
        a.exec(this, "setOption", [ b ]);
    }, e.setVisible = function(b) {
        a.exec(this, "setVisible", [ b ]);
    }, e.setPreloadJsFile = function(b) {
        a.exec(this, "setPreloadJsFile", [ b ]);
    }, e.appendPreloadJsFile = function(b) {
        a.exec(this, "appendPreloadJsFile", [ b ]);
    }, e.setContentVisible = function(b) {
        a.exec(this, "setContentVisible", [ b ]);
    }, e.getUrl = function() {
        return a.execSync(this, "getUrl", []);
    }, e.getTitle = function() {
        return a.execSync(this, "getTitle", []);
    }, e.getOption = function() {
        return a.execSync(this, "getOption");
    }, e.load = function(b) {
        a.exec(this, "load", [ b, window.location.href ]);
    }, e.stop = function() {
        a.exec(this, "stop", []);
    }, e.reload = function(b) {
        a.exec(this, "reload", [ b ]);
    }, e.back = function() {
        a.exec(this, "back", []);
    }, e.forward = function() {
        a.exec(this, "forward", []);
    }, e.canBack = function(b) {
        var d;
        b && (d = c.callbackId(function(a) {
            b(a);
        })), a.exec(this, "canBack", [ d ]);
    }, e.canForward = function(b) {
        var d;
        b && (d = c.callbackId(function(a) {
            b(a);
        })), a.exec(this, "canForward", [ d ]);
    }, e.clear = function() {
        a.exec(this, "clear", []);
    }, e.evalJS = function(b) {
        a.exec(this, "evalJS", [ b ]);
    }, e.append = function(b) {
        this.__view_array__.push(b), a.exec(this, "append", [ b.__IDENTITY__, b.__uuid__ ]);
    }, e.setPullToRefresh = function(b, c) {
        var d;
        c && (d = plus.bridge.callbackId(c)), this.addEventListener("pulldownrefreshevent", c, !1), 
        a.exec(this, "setPullToRefresh", [ b, d ]);
    }, e.endPullToRefresh = function() {
        a.exec(this, "endPullToRefresh", []);
    }, e.findViewById = function(b) {
        var d, e, f, g, h, j, c = this.__view_array__.length;
        for (d = c - 1; d >= 0; d--) if (e = this.__view_array__[d], b == e.id) return e;
        return f = a.execSync(this, "findViewById", [ b ]), g = f.identity, h = f.option, 
        f.uuid, j = new plus.ui.__nviews__[g](h), j.__uuid__ = f.uuid, this.__view_array__.push(j), 
        j;
    }, a.NWindow = d;
}(plus.ui), function(a) {
    function c() {
        a.NView.prototype.constructor.apply(this, [ "Navigator" ]), plus.obj.Callback.prototype.constructor.apply(this);
    }
    var d, b = "Navigator";
    a.register(b, c), d = c.prototype, d.constructor = c, plus.tools.extend(d, a.NView.prototype), 
    d.setLeft = function(b) {
        a.exec(this, "setLeft", [ b ]);
    }, d.setRight = function(b) {
        a.exec(this, "setRight", [ b ]);
    }, d.setSystemList = function(b) {
        a.exec(this, "setSystemList", [ b ]);
    }, d.setRight = function(b) {
        a.exec(this, "setRight", [ b ]);
    }, d.addNavigationListener = function(b) {
        var c = plus.bridge.callbackId(b);
        a.exec(this, "addNavigationListener", [ c ]);
    }, d.addListItemListener = function(b) {
        var c = plus.bridge.callbackId(b);
        a.exec(this, "addListItemListener", [ c ]);
    }, d.setTitleText = function(b) {
        a.exec(this, "setTitleText", [ b ]);
    }, d.setList = function(b) {
        a.exec(this, "setList", [ b ]);
    }, a.Navigator = c;
}(plus.ui), function(a) {
    function m(a) {
        var c, d, b = g.slice(0);
        for (h = new i(a.alpha, a.beta, a.gamma, j, k, l), c = 0, d = b.length; d > c; c++) b[c].win(h);
    }
    function n() {
        c.platform != c.ANDROID && window.addEventListener("deviceorientation", m, !1);
        var a = b.callbackId(function(a) {
            j = a.magneticHeading, k = a.trueHeading, l = a.headingAccuracy, c.platform == c.ANDROID && m(a);
        }, function() {
            var c, d, b = g.slice(0);
            for (c = 0, d = b.length; d > c; c++) ;
        });
        b.exec(d, "start", [ a ]), e = !0;
    }
    function o() {
        c.platform != c.ANDROID && window.removeEventListener("deviceorientation", m, !1), 
        b.exec(d, "stop", []), e = !1;
    }
    function p(a, b) {
        return {
            win:a,
            fail:b
        };
    }
    function q(a) {
        var b = g.indexOf(a);
        b > -1 && (g.splice(b, 1), 0 === g.length && o());
    }
    var b = a.bridge, c = a.tools, d = "Orientation", e = !1, f = {}, g = [], h = null, i = function(a, b, c, d, e, f) {
        this.alpha = a, this.beta = b, this.gamma = c, this.magneticHeading = d, this.trueHeading = e, 
        this.headingAccuracy = f;
    }, j = void 0, k = void 0, l = void 0, r = {
        getCurrentOrientation:function(a, b) {
            var d = function(b) {
                q(c), a(b);
            }, f = function(a) {
                q(c), b && b(a);
            }, c = p(d, f);
            g.push(c), e || n();
        },
        watchOrientation:function(a, b, d) {
            var i = d && d.frequency && ("number" == typeof d.frequency || d.frequency instanceof Number) ? d.frequency :500, j = c.UUID("watch"), k = p(function() {}, function(a) {
                q(k), b && b(a);
            });
            return g.push(k), f[j] = {
                timer:window.setInterval(function() {
                    h && a(h);
                }, i),
                listeners:k
            }, e ? h && a(h) :n(), j;
        },
        clearWatch:function(a) {
            a && f[a] && (window.clearInterval(f[a].timer), q(f[a].listeners), delete f[a]);
        }
    };
    a.orientation = r;
}(window.plus), function(a) {
    function d() {
        this.id = "", this.description = "", this.serviceReady = !0, this.installService = function() {
            c.exec(b, "installService", [ this.id ]);
        }, this.restoreComplateRequest = function(a, d, e) {
            var f, g, h, i;
            "appleiap" !== this.id && (f = {
                errorcode:"-3"
            }, e(f)), g = "function" != typeof d ? null :function(a) {
                d(a);
            }, h = "function" != typeof e ? null :function(a) {
                e(a);
            }, i = c.callbackId(g, h), c.exec(b, "restoreComplateRequest", [ this.id, i, a ]);
        }, this.requestOrder = function(a, d, e) {
            var f, g, h, i;
            return "appleiap" !== this.id ? (f = {
                errorcode:"-3"
            }, e(f), void 0) :(g = "function" != typeof d ? null :function(a) {
                d(a);
            }, h = "function" != typeof e ? null :function(a) {
                e(a);
            }, i = c.callbackId(g, h), c.exec(b, "requestOrder", [ this.id, i, a ]), void 0);
        };
    }
    var b = "Payment", c = window.plus.bridge, e = {
        Channel:d,
        getChannels:function(a, d) {
            var f = "function" != typeof a ? null :function(b) {
                var f, g, c = [], d = b.length;
                for (f = 0; d > f; f++) g = new e.Channel(), g.id = b[f].id, g.description = b[f].description, 
                g.serviceReady = b[f].serviceReady, c[f] = g;
                a(c);
            }, g = "function" != typeof d ? null :function(a) {
                d(a);
            }, h = c.callbackId(f, g);
            c.exec(b, "getChannels", [ h ]);
        },
        request:function(a, e, f, g) {
            var j, h = "function" != typeof f ? null :function(a) {
                f(a);
            }, i = "function" != typeof g ? null :function(a) {
                g(a);
            };
            return a instanceof d ? (j = c.callbackId(h, i), c.exec(b, "request", [ a.id, e, j ]), 
            void 0) :(window.setTimeout(function() {
                i({
                    code:62e3
                });
            }, 0), void 0);
        }
    };
    a.payment = e;
}(window.plus), __Mkey__Push__ = function() {
    var a = [], b = {
        pushCallback_Push:function(b, c, d) {
            a[b] = {
                fun:c,
                nokeep:d
            };
        },
        execCallback_Push:function(b, c, d) {
            a[b] && a[b].fun && ("click" == c ? a[b].fun(d) :a[b].fun(d));
        }
    };
    return b;
}(), function(a) {
    function e(a, b, c) {
        this.__UUID__ = null, this.message = a, this.Payload = b, this.options = c;
    }
    var b = window.plus.bridge, c = window.plus.tools, d = "Push";
    a.push = {
        getClientInfo:function() {
            var a = b.execSync(d, "getClientInfo", []);
            return a;
        },
        createMessage:function(a, f, g) {
            var h;
            c.platform == c.IOS ? b.exec(d, "createMessage", [ a, f, g ]) :(a = new e(a, f, g), 
            h = b.execSync(d, "createMessage", [ a ]), a.__UUID__ = h);
        },
        clear:function() {
            b.exec(d, "clear", []);
        },
        addEventListener:function(a, e, f) {
            var g = c.UUID(a);
            __Mkey__Push__.pushCallback_Push(g, e, f), b.exec(d, "addEventListener", [ window.__HtMl_Id__, g, a ]);
        },
        remove:function(a) {
            b.exec(d, "remove", [ a.__UUID__ ]);
        },
        getAllMessage:function() {
            return b.execSync(d, "getAllMessage", []);
        },
        setAutoNotification:function(a) {
            b.exec(d, "setAutoNotification", [ a ]);
        }
    };
}(window.plus), function(a) {
    var b = window.plus.bridge, c = "Runtime";
    a.runtime = {
        arguments:null,
        version:null,
        innerVersion:null,
        launchLoadedTime:null,
        launcher:null,
        origin:null,
        restart:function() {
            b.exec(c, "restart", []);
        },
        install:function(a, d, e, f) {
            var g = b.callbackId(e, f);
            b.exec(c, "install", [ a, g, d ]);
        },
        getProperty:function(a, d) {
            var e = b.callbackId(d);
            b.exec(c, "getProperty", [ a, e ]);
        },
        quit:function() {
            b.exec(c, "quit", []);
        },
        openURL:function(a, d, e) {
            var f = b.callbackId(null, function(a) {
                "function" == typeof d && d(a);
            });
            b.exec(c, "openURL", [ a, f, e ]);
        },
        launchApplication:function(a, d) {
            var e = b.callbackId(null, function(a) {
                "function" == typeof d && d(a);
            });
            b.exec(c, "launchApplication", [ a, e ]);
        },
        setBadgeNumber:function(a) {
            "number" == typeof a && b.exec(c, "setBadgeNumber", [ a ]);
        },
        openFile:function(a, d, e) {
            var f = b.callbackId(null, function(a) {
                "function" == typeof e && e(a);
            });
            b.exec(c, "openFile", [ a, d, f ]);
        }
    };
}(window.plus), function(a) {
    function h(a, b, c, d) {
        this.id = a, this.description = b, this.authenticated = c, this.accessToken = d, 
        this.nativeClient = !1;
    }
    function j(e, f) {
        var l, m, n, o, g = this;
        g.__UUID__ = c.UUID("Authorize"), g.__componentid__ = e, g.display = f, g.onloaded = null, 
        g.onauthenticated = null, g.onerror = null, g.__top__ = 0, g.__left__ = 0, g.__width__ = 0, 
        g.__height__ = 0, l = document.getElementById(g.__componentid__), l && (g.__left__ = l.offsetLeft, 
        g.__top__ = l.offsetTop, g.__width__ = l.offsetWidth, g.__height__ = l.offsetHeight), 
        m = function(a) {
            "function" == typeof g.onerror && g.onerror(a);
        }, n = function(b) {
            "load" == b.evt ? "function" == typeof g.onloaded && g.onloaded() :"auth" == b.evt && "function" == typeof g.onauthenticated && a.share.getServices(function(a) {
                var c, d;
                for (c = 0; c < a.length; c++) if (d = a[c], d.id == b.type) {
                    d.authenticated = b.authenticated, d.accessToken = b.accessToken, g.onauthenticated(d);
                    break;
                }
            }, function(a) {
                m(a);
            });
        }, o = b.callbackId(n, m), b.exec(d, "create", [ g.__UUID__, o, g.display, g.__left__, g.__top__, g.__width__, g.__height__ ]);
    }
    var k, b = a.bridge, c = a.tools, d = "Share", e = {}, i = h.prototype;
    i.authorize = function(a, c) {
        var e = this, f = "function" != typeof a ? null :function(b) {
            e.authenticated = b.authenticated, e.accessToken = b.accessToken, a(e);
        }, g = "function" != typeof c ? null :function(a) {
            c(a);
        }, h = b.callbackId(f, g);
        b.exec(d, "authorize", [ h, this.id ]);
    }, i.forbid = function() {
        this.authenticated = !1, this.accessToken = null, b.exec(d, "forbid", [ this.id ]);
    }, i.send = function(a, c, e) {
        var f = "function" != typeof c ? null :function() {
            c();
        }, g = "function" != typeof e ? null :function(a) {
            e(a);
        }, h = b.callbackId(f, g);
        b.exec(d, "send", [ h, this.id, a ]);
    }, j.prototype.load = function(a) {
        this.id = a, b.exec(d, "load", [ this.__UUID__, a ]);
    }, j.prototype.setVisible = function(a) {
        b.exec(d, "setVisible", [ this.__UUID__, a ]);
    }, k = {
        Authorize:j,
        getServices:function(a, c) {
            var f = "function" != typeof a ? null :function(b) {
                var d, f, g, c = [];
                for (d = 0; d < b.length; d++) f = b[d], f.id && (g = e[f.id], g || (g = new h()), 
                g.id = f.id, g.description = f.description, g.authenticated = f.authenticated, g.accessToken = f.accessToken, 
                g.nativeClient = f.nativeClient, e[f.id] = g, c.push(g));
                a(c);
            }, g = "function" != typeof c ? null :function(a) {
                c(a);
            }, i = b.callbackId(f, g);
            b.exec(d, "getServices", [ i ]);
        }
    }, a.share = k;
}(window.plus), function(a) {
    var b = "Speech", c = window.plus.bridge, d = {
        startRecognize:function(a, d, e) {
            var j, k, f = "function" != typeof d ? null :function(a) {
                d(a);
            }, g = "function" != typeof e ? null :function(a) {
                e(a);
            }, h = c.callbackId(f, g), i = {};
            a.onstart && (j = "function" != typeof a.onstart ? null :function() {
                a.onstart();
            }, i.onstart = c.callbackId(j)), a.onend && (k = "function" != typeof a.onend ? null :function() {
                a.onend();
            }, i.onend = c.callbackId(k)), c.exec(b, "startRecognize", [ h, a, i ]);
        },
        stopRecognize:function() {
            c.exec(b, "stopRecognize", []);
        }
    };
    a.speech = d;
}(window.plus), function(a) {
    var b = a.bridge, c = "Statistic";
    a.statistic = {
        eventTrig:function(a, d) {
            b.exec(c, "eventTrig", [ a, d ]);
        },
        eventStart:function(a, d) {
            b.exec(c, "eventStart", [ a, d ]);
        },
        eventEnd:function(a, d) {
            b.exec(c, "eventEnd", [ a, d ]);
        },
        eventDuration:function(a, d, e) {
            b.exec(c, "eventDuration", [ a, d, e ]);
        }
    };
}(window.plus), function(a) {
    var b = window.plus.bridge, c = "Storage";
    a.storage = {
        getLength:function() {
            return b.execSync(c, "getLength", [ null ]);
        },
        getItem:function(a) {
            return "string" == typeof a ? b.execSync(c, "getItem", [ a ], function(a) {
                var b = a.indexOf(":"), c = a.substr(0, b);
                return "null" === c ? null :a.substr(b + 1);
            }) :!1;
        },
        setItem:function(a, d) {
            return "string" == typeof a && "string" == typeof d ? b.execSync(c, "setItem", [ a, d ]) :!1;
        },
        removeItem:function(a) {
            return "string" == typeof a ? b.execSync(c, "removeItem", [ a ]) :!1;
        },
        clear:function() {
            return b.execSync(c, "clear", [ null ]);
        },
        key:function(a) {
            return "number" == typeof a ? b.execSync(c, "key", [ a ]) :!1;
        }
    };
}(window.plus), function(a) {
    function e(a, b, c) {
        this.type = d.getValue(a, ""), this.handles = [], this.capture = d.getValue(c, !1), 
        "function" == typeof b && this.handles.push(b);
    }
    function f(a, b, c) {
        this.__UUID__ = d.UUID(), this.url = d.getValue(a, ""), this.state = 0, this.options = b || {}, 
        this.uploadedSize = 0, this.totalSize = 0, this.responseText = "", this.method = d.getValue(this.options.method, "GET"), 
        this.timeout = d.getValue(this.options.timeout, 120), this.retry = d.getValue(this.options.retry, 3), 
        this.retryInterval = d.getValue(this.options.retryInterval, 30), this.priority = d.getValue(this.options.priority, 1), 
        this.onCompleted = c || null, this.eventHandlers = {}, this.__requestHeaders__ = {}, 
        this.__responseHeaders__ = {}, this.__noParseResponseHeader__ = null, this.__cacheReponseHeaders__ = {};
    }
    var b = window.plus.bridge, c = window.plus.tools, d = {
        UUID:function() {
            return c.UUID("uploader");
        },
        server:"Uploader",
        getValue:function(a, b) {
            return void 0 === a ? b :a;
        }
    };
    e.prototype.fire = function() {
        for (var b = 0; b < this.handles.length; ++b) this.handles[b].apply(this, arguments);
    }, f.prototype.addFile = function(a, c) {
        return "string" == typeof a && "object" == typeof c ? (b.exec(d.server, "addFile", [ this.__UUID__, a, c ]), 
        !0) :!1;
    }, f.prototype.addData = function(a, c) {
        return "string" == typeof a && "string" == typeof c ? (b.exec(d.server, "addData", [ this.__UUID__, a, c ]), 
        !0) :!1;
    }, f.prototype.getAllResponseHeaders = function() {
        var a, b;
        if (this.__noParseResponseHeader__) return this.__noParseResponseHeader__;
        a = "";
        for (b in this.__responseHeaders__) a = a + b + " : " + this.__responseHeaders__[b] + "\r\n";
        return this.__noParseResponseHeader__ = a, this.__noParseResponseHeader__;
    }, f.prototype.getResponseHeader = function(a) {
        var b, c, d;
        if ("string" == typeof a) {
            if (b = null, a = a.toLowerCase(), b = this.__cacheReponseHeaders__[a]) return b;
            for (c in this.__responseHeaders__) d = this.__responseHeaders__[c], c = c.toLowerCase(), 
            a === c && (b = b ? b + ", " + d :d);
            return this.__cacheReponseHeaders__[a] = b, b;
        }
        return "";
    }, f.prototype.setRequestHeader = function(a, b) {
        if ("string" == typeof a && "string" == typeof b) {
            var c = this.__requestHeaders__[a];
            this.__requestHeaders__[a] = c ? c + ", " + b :b;
        }
    }, f.prototype.start = function() {
        b.exec(d.server, "start", [ this.__UUID__, this.__requestHeaders__ ]);
    }, f.prototype.pause = function() {
        b.exec(d.server, "pause", [ this.__UUID__ ]);
    }, f.prototype.resume = function() {
        b.exec(d.server, "resume", [ this.__UUID__ ]);
    }, f.prototype.abort = function() {
        b.exec(d.server, "abort", [ this.__UUID__ ]);
    }, f.prototype.addEventListener = function(a, b, c) {
        if ("string" == typeof a && "function" == typeof b) {
            var d = a.toLowerCase();
            void 0 === this.eventHandlers[d] ? this.eventHandlers[d] = new e(a, b, c) :this.eventHandlers[d].handles.push(b);
        }
    }, f.prototype.__handlerEvt__ = function(a) {
        var c, b = this;
        b.state = d.getValue(a.state, b.state), b.uploadedSize = d.getValue(a.uploadedSize, b.uploadedSize), 
        b.totalSize = d.getValue(a.totalSize, b.totalSize), b.__responseHeaders__ = d.getValue(a.headers, {}), 
        4 == b.state && "function" == typeof b.onCompleted && (b.responseText = d.getValue(a.responseText, b.responseText), 
        b.onCompleted(b, a.status || null)), c = this.eventHandlers["statechanged"], c && c.fire(b, void 0 === a.status ? null :a.status);
    }, a.uploader = {
        __taskList__:{},
        createUpload:function(a, c, e) {
            if ("string" == typeof a) {
                var g = new f(a, c, e);
                return this.__taskList__[g.__UUID__] = g, b.exec(d.server, "createUpload", [ g ]), 
                g;
            }
            return null;
        },
        enumerate:function(a) {
            var e = this, g = e.__taskList__, h = b.callbackId(function(b) {
                var c, e, h, i, j;
                for (c = 0; c < b.length; c++) e = b[c], e && e.uuid && (h = g[e.uuid], h || (h = new f(), 
                h.__UUID__ = e.uuid, g[h.__UUID__] = h), h.state = d.getValue(e.state, h.state), 
                h.options = d.getValue(e.options, h.options), h.url = d.getValue(e.url, h.url), 
                h.uploadedSize = d.getValue(e.uploadedSize, h.uploadedSize), h.totalSize = d.getValue(e.totalSize, h.totalSize), 
                h.responseText = d.getValue(e.responseText, h.responseText), h.__responseHeaders__ = d.getValue(b.headers, h.__responseHeaders__));
                i = [];
                for (j in g) i.push(g[j]);
                "function" == typeof a && a(i);
            });
            b.exec(d.server, "enumerate", [ h ]);
        },
        clear:function(a) {
            var c = 4;
            "number" == typeof a && (c = a), b.exec(d.server, "clear", [ c ]);
        },
        startAll:function() {
            b.exec(d.server, "startAll", [ 0 ]);
        },
        __handlerEvt__:function(a, b) {
            var c = this.__taskList__[a];
            c && c.__handlerEvt__(b);
        }
    };
}(window.plus), function(a) {
    var c = (window.plus.bridge, "SUSF");
    a.widget = {
        restart:function() {
            mkey.exec(c, "restart", []);
        },
        install:function(a, b, d, e) {
            var f = mkey.helper.callbackid(d, e);
            mkey.exec(c, "install", [ a, f, b ]);
        },
        getProperty:function(a, b) {
            var d = mkey.helper.callbackid(b);
            mkey.exec(c, "getProperty", [ a, d ]);
        }
    };
}(window.plus), function(a) {
    function d(a, b, c, d) {
        this.target = a, this.lengthComputable = b, this.loaded = c, this.total = d;
    }
    function e() {}
    function f() {
        this.__init__(), this.__UUID__ = c.UUID("xhr");
    }
    var g, b = a.bridge, c = a.tools;
    e.Timeout = 0, e.Other = 1, f.Uninitialized = 0, f.Open = 1, f.Sent = 2, f.Receiving = 3, 
    f.Loaded = 4, f.__F__ = "XMLHttpRequest", g = f.prototype, g.__init__ = function() {
        this.readyState = f.Uninitialized, this.responseText = "", this.responseXML = null, 
        this.status = f.Uninitialized, this.statusText = null, this.onreadystatechange, 
        this.responseType = null, this.response = null, this.withCredentials = !0, this.timeout = 12e4, 
        this.__noParseResponseHeader__ = null, this.__requestHeaders__ = {}, this.__responseHeaders__ = {}, 
        this.__cacheReponseHeaders__ = {}, this.__progessEvent__ = new d(this, !1, 0, 0);
    }, g.abort = function() {
        this.readyState > f.Uninitialized && ("function" == typeof this.onabort && this.onabort(this.__progessEvent__), 
        this.__init__(), b.exec(f.__F__, "abort", [ this.__UUID__ ]));
    }, g.getAllResponseHeaders = function() {
        var a, b;
        if (this.readyState >= f.Receiving) {
            if (this.__noParseResponseHeader__) return this.__noParseResponseHeader__;
            a = "";
            for (b in this.__responseHeaders__) a = a + b + " : " + this.__responseHeaders__[b] + "\r\n";
            return this.__noParseResponseHeader__ = a, this.__noParseResponseHeader__;
        }
        return null;
    }, g.getResponseHeader = function(a) {
        var b, c, d;
        if ("string" == typeof a && this.readyState >= f.Receiving) {
            if (b = null, a = a.toLowerCase(), b = this.__cacheReponseHeaders__[a]) return b;
            for (c in this.__responseHeaders__) d = this.__responseHeaders__[c], c = c.toLowerCase(), 
            a === c && (b = b ? b + ", " + d :d);
            return this.__cacheReponseHeaders__[a] = b, b;
        }
        return null;
    }, g.setRequestHeader = function(a, b) {
        if ("string" == typeof a && "string" == typeof b && f.Open == this.readyState) {
            var c = this.__requestHeaders__[a];
            this.__requestHeaders__[a] = c ? c + ", " + b :b;
        }
    }, g.open = function(a, c, d, e) {
        (f.Open == this.readyState || f.Loaded == this.readyState) && this.__init__(), f.Uninitialized == this.readyState && (this.readyState = f.Open, 
        b.exec(f.__F__, "open", [ this.__UUID__, a, c, d, e, this.timeout ]), "function" == typeof this.onreadystatechange && this.onreadystatechange());
    }, g.send = function(a) {
        var d, c = this;
        if (f.Open == this.readyState) return this.readyState = f.Sent, "function" == typeof this.onloadstart && this.onloadstart(c.__progessEvent__), 
        d = b.callbackId(function(a) {
            var b;
            if (f.Receiving == a.readyState) f.Sent == c.readyState ? (c.readyState = f.Receiving, 
            c.status = a.status, c.statusText = a.statusText, c.__responseHeaders__ = a.header, 
            c.__progessEvent__.lengthComputable = a.lengthComputable, c.__progessEvent__.total = a.totalSize) :f.Receiving == c.readyState && (c.responseText = a.responseText, 
            c.__progessEvent__.loaded = a.revSize), "function" == typeof c.onreadystatechange && c.onreadystatechange(), 
            "function" == typeof c.onprogress && c.onprogress(c.__progessEvent__); else if (f.Loaded == a.readyState) {
                c.readyState = f.Loaded;
                try {
                    c.responseText && (b = new DOMParser(), c.responseXML = b.parseFromString(c.responseText, "text/xml"));
                } catch (d) {
                    c.responseXML = null;
                }
                try {
                    "document" == c.responseType ? (b = new DOMParser(), c.response = c.responseXML) :"json" == c.responseType && (c.response = JSON.parse(c.responseText));
                } catch (d) {
                    c.response = null;
                }
                "function" == typeof c.onreadystatechange && c.onreadystatechange(), a.error == e.Timeout ? "function" == typeof c.ontimeout && c.ontimeout(c.__progessEvent__) :a.error == e.Other ? "function" == typeof c.onerror && c.onerror(c.__progessEvent__) :"function" == typeof c.onload && c.onload(c.__progessEvent__), 
                "function" == typeof c.onloadend && c.onloadend(c.__progessEvent__);
            }
        }), b.exec(f.__F__, "send", [ this.__UUID__, d, a, this.__requestHeaders__ ]), "function" == typeof this.onreadystatechange && this.onreadystatechange(), 
        void 0;
        throw new Error("XMLHttpRequest not open");
    }, a.net = {
        XMLHttpRequest:f
    };
}(window.plus), function(a) {
    var b = window.plus.bridge, c = "Zip";
    a.zip = {
        decompress:function(a, d, e, f) {
            var g = b.callbackId(e, f);
            b.exec(c, "decompress", [ a, d, g ]);
        },
        compress:function(a, d, e, f) {
            var g = b.callbackId(e, f);
            b.exec(c, "compress", [ a, d, g ]);
        },
        compressImage:function(a, d, e) {
            var f = b.callbackId(function(a) {
                if (d) {
                    var b = {
                        target:a.path,
                        width:a.w,
                        height:a.h,
                        size:a.size
                    };
                    d(b);
                }
            }, e);
            b.exec(c, "compressImage", [ a, f ]);
        }
    };
}(window.plus), function(a) {
    function h() {
        var a = b.callbackId(function(a) {
            var c, d, b = g.slice(0);
            for (c = 0, d = b.length; d > c; c++) b[c].win(a);
        }, function(a) {
            var c, d, b = g.slice(0);
            for (c = 0, d = b.length; d > c; c++) b[c].fail(a);
        });
        b.exec(d, "start", [ a ]), e = !0;
    }
    function i() {
        b.exec(d, "stop", []), e = !1;
    }
    function j(a, b) {
        return {
            win:a,
            fail:b
        };
    }
    function k(a) {
        var b = g.indexOf(a);
        b > -1 && (g.splice(b, 1), 0 === g.length && i());
    }
    var b = a.bridge, c = a.tools, d = "Proximity", e = !1, f = {}, g = [], l = {
        getCurrentProximity:function(a, e) {
            var f = b.callbackId(function(b) {
                c.IOS == c.platform && (b = 0 == b ? 0 :1 / 0), a && a(b);
            }, function(a) {
                e && e(a);
            });
            b.exec(d, "getCurrentProximity", [ f ]);
        },
        watchProximity:function(a, b) {
            var d = c.UUID("watch"), i = j(function(b) {
                c.IOS == c.platform && (b = 0 == b ? 0 :1 / 0), a && a(b);
            }, function(a) {
                k(i), b && b(a);
            });
            return g.push(i), f[d] = {
                listeners:i
            }, e || h(), d;
        },
        clearWatch:function(a) {
            a && f[a] && (k(f[a].listeners), delete f[a]);
        }
    };
    a.proximity = l;
}(window.plus), function(a) {
    function g(a, b) {
        this.type = a, this.value = b;
    }
    function h() {
        this.__TYPE__ = "JSBObject", this.__UUID__ = c.UUID("JSBaseObject");
    }
    function i(d, e) {
        var f, g, h, i;
        d = l(d), f = this, this.__UUID__ = c.UUID("JSImplements"), this.callback = e, this.callbackId = b.callbackId(function(b) {
            var e, c = b.arguments, d = [];
            for (e = 0; e < c.length; e++) d.push(a.ios.__Tool.New(c[e], !0));
            f.callback[b.method].apply(f, d);
        }, null), g = [];
        for (h in e) g.push(h);
        return i = b.execSync(_Server, "implements", [ this.__UUID__, d, g, this.callbackId ]), 
        a.ios.__Tool.New(i, !0);
    }
    function j() {
        this.__Tool = d, this.__JSBBaseObject = h;
    }
    function l(a) {
        var b, d, e;
        if ("string" != typeof a || c.platform == c.IOS) return a;
        for (e in k) if (0 == a.indexOf(e)) {
            b = e, d = k[e];
            break;
        }
        return d && a ? a.replace(b, d) :a;
    }
    var d, e, f, k, b = window.plus.bridge, c = window.plus.tools;
    _Server = "Invocation", _importHash = [], _frameObjHash = {}, _currentFrameObj = null, 
    d = {}, e = {}, d.undefObjectHash = {}, f = "", a.tools.IOS == a.tools.platform ? f += "plus.ios." :a.tools.ANDROID == a.tools.platform && (f += "plus.android."), 
    d.process = function(a) {
        var c, b = [];
        for (c = 0; c < a.length; c++) b.push(this.warp(a[c]));
        return b;
    }, d.attach = function(a, b) {
        var d, c = this.undefObjectHash[a];
        if (c && b) {
            for (d = 0; d < c.length; d++) c[d].__proto__ = b.prototype;
            delete this.undefObjectHash.className;
        }
    }, d.New = function(a, b) {
        var f, i, j, c = null;
        if (a) {
            if ("object" == a.type) {
                if (f = e.isImport(a.className)) c = new f(b); else {
                    if (a.superClassNames) for (i = 0; i < a.superClassNames.length && !(f = e.isImport(a.superClassNames[i])); i++) ;
                    f ? c = new f(b) :(c = new h(), j = this.undefObjectHash[a.className], j || (this.undefObjectHash[a.className] = j = []), 
                    j.push(c));
                }
                return c.className = a.className, c.__UUID__ = a.value, c;
            }
            if ("struct" == a.type) return new g(a.type, a.value);
            if (a.value instanceof Array) for (i = 0; i < a.value.length; i++) a.value[i] = d.New(a.value[i], b);
            return a.value;
        }
        return null;
    }, d.handleClassName = function(a) {
        return a.replace("$", ".");
    }, d.saveContent = function(a, c) {
        b.execSync(_Server, "__saveContent", [ a, c ]);
    }, d.warp = function(c) {
        var e, d = {};
        return c && "JSBObject" == c.__TYPE__ ? (d.type = "object", d.value = c.__UUID__) :c instanceof g ? (d.type = c.type, 
        d.value = c.value, 0 == c.type.indexOf("@block") && (d.type = c.type, e = b.callbackId(function(b) {
            var d, e;
            for ("function" == typeof c.value, d = [], e = 0; e < b.length; e++) d.push(a.ios.__Tool.New(b[e], !0));
            c.value.apply(this, d);
        }), d.value = e, alert(d.value))) :"undefined" == typeof c || null == c ? (d.type = "null", 
        d.value = c) :"string" == typeof c || "String" == typeof c ? (d.type = "string", 
        d.value = c) :"number" == typeof c ? (d.type = "number", d.value = c) :"boolean" == typeof c ? (d.type = "boolean", 
        d.value = c) :"function" == typeof c ? (d.type = "block", e = b.callbackId(function(b) {
            var e, d = [];
            for (e = 0; e < b.length; e++) d.push(a.ios.__Tool.New(b[e], !0));
            c.apply(this, d);
        }), d.value = e) :d = c, d;
    }, g.prototype.constructor = g, h.prototype.plusSetAttribute = function() {
        var b, c, a = null;
        try {
            for (b = [], c = 1; c < arguments.length; c++) b.push(d.warp(arguments[c]));
            a = window.plus.bridge.execSync(_Server, "__plusSetAttribute", [ this.__UUID__, arguments[0], b ]), 
            a = d.New(a, !0);
        } catch (e) {
            throw e;
        }
        return a;
    }, h.prototype.plusGetAttribute = function(b) {
        var c = null;
        try {
            c = window.plus.bridge.execSync(_Server, "__plusGetAttribute", [ this.__UUID__, b ]), 
            c = a.ios.__Tool.New(c, !0);
        } catch (d) {
            throw d;
        }
        return c;
    }, h.prototype.plusCallMethod = function(b) {
        var d, e, f, g, h, c = null;
        try {
            d = "", e = [], f = 0;
            for (g in b) {
                if ("string" != typeof g) return;
                if (h = b[g], 0 == f) {
                    if (d = g, "undefined" == typeof h) {
                        f++;
                        break;
                    }
                    d += ":";
                } else d += g + ":";
                e.push(h), f++;
            }
            if (0 == f) return;
            e = window.plus.ios.__Tool.process(e), c = window.plus.bridge.execSync(_Server, "__exec", [ this.__UUID__, d, e ]), 
            c = a.ios.__Tool.New(c, !0);
        } catch (i) {
            throw i;
        }
        return c;
    }, i.prototype = new h(), i.prototype.constructor = i, e.hashTable = {}, e.importClass = function(c, f) {
        var h, i, j, k, l, m, n, g = this.isImport(c);
        if (g) return g;
        for (h = this.newClassDefine(c, f), i = b.execSync(_Server, "import", [ c ]), j = i.ClassMethod, 
        k = 0; k < j.length; k++) h += this.AddMethodToClass(c, j[k], !0);
        for (l = i.InstanceMethod, k = 0; k < l.length; k++) h += this.AddMethodToClass(c, l[k]);
        if (a.tools.ANDROID == a.tools.platform) for (m = i.ClassConstKeys, n = i.ClassConstValues, 
        k = 0; k < m.length; k++) h += this.AddStaticConstToClass(c, m[k], n[k]);
        return this.hashTable[c] = g = e.createClass(c, h), d.attach(c, g), g;
    }, e.isImport = function(a) {
        return e.hashTable[a];
    }, e.newClassDefine = function(a, b) {
        var h, i, j, k, l, c = "", e = a;
        for (a = d.handleClassName(a), b && (b = d.handleClassName(b)), h = f + a, i = f + b, 
        j = h.split("."), k = "window", l = 0; l < j.length - 1; l++) k = k + "." + j[l], 
        c += "if(!" + k + ")", c += k + "={};";
        return c += k + "." + j[j.length - 1] + "=", c += "function(create) {            this.__UUID__ = window.plus.tools.UUID('JSB');            this.__TYPE__ = 'JSBObject';            var args = window.plus.ios.__Tool.process(arguments);            if ( create && plus.tools.IOS == plus.tools.platform ) {} else {                window.plus.bridge.execSync('" + _Server + "', '__Instance'," + "[this.__UUID__, '" + e + "',args]);            }        };", 
        b = b ? i :"plus.ios.__JSBBaseObject", b && (c += h + ".prototype = new " + b + "('__super__constructor__')" + ";", 
        c += h + ".prototype.constructor = " + h + ";"), c;
    }, e.createClass = function(a, b) {
        a = d.handleClassName(a);
        var c = "(function(plus){" + b + "return " + f + a + ";})(window.plus);";
        return window.eval(c);
    }, e.AddStaticConstToClass = function(a, b, c) {
        var e;
        return a = d.handleClassName(a), c instanceof Array && 0 == c.length ? (e = f + a + "." + b + "=[];", 
        e += f + a + ".prototype." + b + "=[];") :(e = f + a + "." + b + "=" + c + ";", 
        e += f + a + ".prototype." + b + "=" + c + ";"), e;
    }, e.AddMethodToClass = function(b, c, e) {
        var g, i, j, k, l, h = b;
        if (b = d.handleClassName(b), i = "", a.tools.IOS == a.tools.platform) if (j = c.split(":"), 
        k = j.length, k > 0) for (l = 0; k > l; l++) i += j[l]; else i = j; else i = c;
        return g = e ? f + b + "." + i :f + b + ".prototype." + i, g += " = function (){            var ret = null;            try {                var args = window.plus.ios.__Tool.process(arguments);", 
        g += e ? "ret = window.plus.bridge.execSync('" + _Server + "', '__execStatic', ['" + h + "', '" + c + "', args]);" :"ret = window.plus.bridge.execSync('" + _Server + "', '__exec', [this.__UUID__, '" + c + "', args]);", 
        g += "ret = plus.ios.__Tool.New(ret, false);            } catch (e) {                throw e;            }            return ret;        };";
    }, j.prototype.importClass = function(a) {
        var c, d, f, g, h;
        if (a = l(a), a.__TYPE__) {
            if (!a.className) return;
            c = a, a = a.className;
        }
        if (d = e.isImport(a)) return d;
        if (f = b.execSync(_Server, "__inheritList", [ a ])) {
            for (g = f.length, h = g - 1; h >= 0; h--) d = h == g - 1 ? e.importClass(f[h], null) :e.importClass(f[h], f[h + 1]);
            return c && (c.__proto__ = d.prototype), d;
        }
        return null;
    }, j.prototype.invoke = function(b, c) {
        var f, d = null, e = [];
        for (f = 2; f < arguments.length; f++) e.push(window.plus.ios.__Tool.warp(arguments[f]));
        if ("string" == typeof b) try {
            d = window.plus.bridge.execSync(_Server, "__execStatic", [ b, c, e ]);
        } catch (g) {
            throw g;
        } else b && "JSBObject" == b.__TYPE__ ? d = window.plus.bridge.execSync(_Server, "__exec", [ b.__UUID__, c, e ]) :null == b && "string" == typeof c && (d = window.plus.bridge.execSync(_Server, "__execCFunction", [ c, e ]));
        return d = a.ios.__Tool.New(d, !0);
    }, j.prototype.setAttribute = function(a, b, c) {
        "function" == typeof a || a && "JSBObject" == a.__TYPE__ && a.plusSetAttribute(b, c);
    }, j.prototype.getAttribute = function(a, b) {
        if ("function" == typeof a) ; else if (a && "JSBObject" == a.__TYPE__) return a.plusGetAttribute(b);
        return null;
    }, j.prototype.load = function(a) {
        window.plus.bridge.execSync(_Server, "__loadDylib", [ a ]);
    }, j.prototype.newObject = function(b, c) {
        var e, f, d = null;
        if ("string" == typeof b) {
            for (e = [], f = 1; f < arguments.length; f++) e.push(window.plus.ios.__Tool.warp(arguments[f]));
            d = window.plus.bridge.execSync(_Server, "__newObject", [ b, e ]);
        }
        return d = a.ios.__Tool.New(d, !0), d ? d :new g(b, c);
    }, j.prototype.currentWebview = function() {
        if (!_currentFrameObj) {
            var b = window.plus.bridge.execSync(_Server, "currentWebview", []);
            _currentFrameObj = a.ios.__Tool.New(b, !0);
        }
        return _currentFrameObj;
    }, j.prototype.getWebviewById = function(b) {
        if (b === window.__HtMl_Id__) return this.currentWebview();
        var c = _frameObjHash[b];
        return c || (c = window.plus.bridge.execSync(_Server, "getWebviewById", [ b ]), 
        c = a.ios.__Tool.New(c, !0), c && (_frameObjHash[b] = c)), c;
    }, j.prototype.deleteObject = function(a) {
        b.execSync(_Server, "__release", [ a.__UUID__ ]);
    }, j.prototype.implements = function(a, b) {
        return new i(a, b);
    }, k = {
        "io.dcloud.adapter.":"io.dcloud.common.adapter.",
        "io.dcloud.android.content.":"io.dcloud.feature.internal.reflect.",
        "io.dcloud.app.":"io.dcloud.common.app.",
        "io.dcloud.constant.":"io.dcloud.common.constant.",
        "io.dcloud.core.":"io.dcloud.common.core.",
        "io.dcloud.DHInterface.":"io.dcloud.common.DHInterface.",
        "io.dcloud.net.":"io.dcloud.common.util.net.",
        "io.dcloud.permission.":"io.dcloud.common.core.permission.",
        "io.dcloud.sdk.":"io.dcloud.feature.internal.sdk.",
        "io.dcloud.splash.":"io.dcloud.feature.internal.splash.",
        "io.dcloud.ui.":"io.dcloud.common.core.ui.",
        "io.dcloud.util.":"io.dcloud.common.util."
    }, a.ios = a.android = new j(), a.tools.ANDROID == a.tools.platform && (a.android.runtimeMainActivity = function() {
        var b, c, d, e;
        return a.android.__runtimeMainActivity__ ? a.android.__runtimeMainActivity__ :(c = function(a) {
            b.onActivityResult && b.onActivityResult(a[0], a[1], a[2]);
        }, d = a.bridge.callbackId(c), b = a.bridge.execSync(_Server, "getContext", [ d ]), 
        e = b.className, b.superClassNames = [], b = a.ios.__Tool.New(b, !0), a.android.importClass(e), 
        a.android.__runtimeMainActivity__ = b, b);
    });
}(window.plus), function(a) {
    function f(a, e, f, g) {
        var h, i;
        a && (i = "string" != typeof a ? a.toString() :a, e && (h = d.callbackId(function(a) {
            e(a);
        })), b.exec(c, "alert", [ window.__HtMl_Id__, [ i, h, f, g ] ]));
    }
    function g(a, e) {
        var f;
        e && (f = d.callbackId(function(a) {
            var b = {};
            b.index = a, e(b);
        })), b.exec(c, "actionSheet", [ window.__HtMl_Id__, [ a, f ] ]);
    }
    function h(a, d) {
        var e;
        a && (e = "string" != typeof a ? a.toString() :a, b.exec(c, "toast", [ window.__HtMl_Id__, [ e, d ] ]));
    }
    function i(a, e, f, g) {
        var h, i;
        a && (i = "string" != typeof a ? a.toString() :a, e && (h = d.callbackId(function(a) {
            var b = {};
            b.index = a, e(b);
        })), b.exec(c, "confirm", [ window.__HtMl_Id__, [ i, h, f, g ] ]));
    }
    function j(a, e, f, g, h) {
        var i, j;
        a && (i = "string" != typeof a ? a.toString() :a, e && (j = d.callbackId(function(a) {
            a.value = a.message, e(a);
        })), b.exec(c, "prompt", [ window.__HtMl_Id__, [ i, j, f, g, h ] ]));
    }
    function k(a, f, g) {
        var h, i, j, k;
        a && "function" == typeof a && (h = {}, g && (g.minDate instanceof Date ? (h.startYear = g.minDate.getFullYear(), 
        h.startMonth = g.minDate.getMonth(), h.startDay = g.minDate.getDate()) :e.isNumber(g.startYear) && (h.startYear = g.startYear, 
        h.startMonth = 0, h.startDay = 1), g.maxDate instanceof Date ? (h.endYear = g.maxDate.getFullYear(), 
        h.endMonth = g.maxDate.getMonth(), h.endDay = g.maxDate.getDate()) :e.isNumber(g.endYear) && (h.endYear = g.endYear, 
        h.endMonth = 11, h.endDay = 31), g.date instanceof Date && (h.setYear = g.date.getFullYear(), 
        h.setMonth = g.date.getMonth(), h.setDay = g.date.getDate()), h.popover = g.popover, 
        h.title = g.title), i = "function" != typeof a ? null :function(b) {
            var c = "undefined" != typeof b ? new Date(b) :null, d = {};
            d.date = c, a(d);
        }, j = "function" != typeof f ? null :function(a) {
            f(a);
        }, k = d.callbackId(i, j), b.exec(c, "pickDate", [ window.__HtMl_Id__, [ k, h ] ]));
    }
    function l(a, e, f) {
        var g, h, i, j, k;
        a && "function" == typeof a && (g = !1, "object" == typeof f && (h = f.time, h instanceof Date && (f.__hours = h.getHours(), 
        f.__minutes = h.getMinutes(), g = !0)), i = "function" != typeof a ? null :function(b) {
            var c = "undefined" != typeof b ? new Date(b) :null, d = {};
            d.date = c, a(d);
        }, j = "function" != typeof e ? null :function(a) {
            e(a);
        }, k = d.callbackId(i, j), b.exec(c, "pickTime", [ window.__HtMl_Id__, [ k, f ] ]), 
        g && (delete f.__hours, delete f.__minutes));
    }
    function m(a, e) {
        var f, g;
        this.__uuid__ = window.plus.tools.UUID("WaitingView"), this.onclose = null, f = this, 
        g = d.callbackId(function() {
            "function" == typeof f.onclose && f.onclose();
        }), b.exec(c, "WaitingView", [ this.__uuid__, [ a, e, g ] ]);
    }
    function n(a, b) {
        return new m(a, b);
    }
    function o() {
        d.exec(c, "closeWaiting", []);
    }
    var b = a.bridge, c = "NativeUI", d = a.bridge, e = a.tools;
    m.prototype.close = function() {
        b.exec(c, "WaitingView_close", [ this.__uuid__ ]);
    }, m.prototype.setTitle = function(a) {
        b.exec(c, "WaitingView_setTitle", [ this.__uuid__, [ a ] ]);
    }, a.nativeUI = {
        pickTime:l,
        pickDate:k,
        alert:f,
        confirm:i,
        showWaiting:n,
        prompt:j,
        toast:h,
        actionSheet:g,
        closeWaiting:o
    };
}(window.plus), function(a) {
    var b = window.plus.bridge, c = a.tools, d = "Navigator";
    a.navigator = {
        closeSplashscreen:function() {
            b.exec(d, "closeSplashscreen", [ 0 ]);
        },
        isFullscreen:function() {
            return b.execSync(d, "isFullScreen", [ 0 ]);
        },
        setFullscreen:function(a) {
            b.exec(d, "setFullscreen", [ a ]);
        },
        isImmersedStatusbar:function() {
            return b.execSync(d, "isImmersedStatusbar", []);
        },
        getStatusbarHeight:function() {
            return c.platform == c.IOS ? 20 :b.execSync(d, "getStatusbarHeight", []);
        },
        setStatusBarBackground:function(a) {
            b.exec(d, "setStatusBarBackground", [ a ]);
        },
        getStatusBarBackground:function() {
            return b.execSync(d, "getStatusBarBackground", []);
        },
        setStatusBarStyle:function(a) {
            b.exec(d, "setStatusBarStyle", [ a ]);
        },
        getStatusBarStyle:function() {
            return b.execSync(d, "getStatusBarStyle", []);
        },
        setUserAgent:function(a, c) {
            b.exec(d, "setUserAgent", [ a, c ]);
        },
        getUserAgent:function() {
            return b.execSync(d, "getUserAgent", [], function(a) {
                try {
                    var b = window.eval(a);
                    return null == b ? null :a;
                } catch (c) {
                    return a;
                }
                return a;
            });
        },
        removeCookie:function(a) {
            b.exec(d, "removeCookie", [ a ]);
        },
        removeSessionCookie:function() {
            b.exec(d, "removeSessionCookie", []);
        },
        removeAllCookie:function() {
            b.exec(d, "removeAllCookie", []);
        },
        setCookie:function(a, c) {
            b.exec(d, "setCookie", [ a, c ]);
        },
        getCookie:function(a) {
            return b.execSync(d, "getCookie", [ a ], function(a) {
                try {
                    var b = window.eval(a);
                    return null == b ? null :a;
                } catch (c) {
                    return a;
                }
                return a;
            });
        },
        setLogs:function(a) {
            b.exec(d, "setLogs", [ a ]);
        },
        isLogs:function() {
            return b.execSync(d, "isLogs", [ 0 ]);
        },
        createShortcut:function(a, e, f) {
            if (c.platform != c.IOS) {
                var g = b.callbackId(e, f);
                b.exec(d, "createShortcut", [ a, g ]);
            }
        },
        hasShortcut:function(a, e) {
            if (c.platform != c.IOS) {
                var f = b.callbackId(e);
                b.exec(d, "hasShortcut", [ a, f ]);
            }
        }
    };
}(window.plus), function(a) {
    var b = window.plus.bridge, c = "UI", e = "execMethod";
    a.key = {}, keyEvent = {}, keyEvent["backbutton"] = "back", keyEvent["menubutton"] = "menu", 
    keyEvent["searchbutton"] = "search", keyEvent["volumeupbutton"] = "volumeup", keyEvent["volumedownbutton"] = "volumedown", 
    keyEvent["keyup"] = "keyup", keyEvent["keydown"] = "keydown", keyEvent["longpressed"] = "longpressed", 
    a.key.addEventListener = function(d, f, g) {
        function h(a) {
            var b = {};
            b.keycode = a.keyType, b.keyCode = a.keyCode, b.keyType = a.keyType, f(b);
        }
        var i, j, k;
        d && f && "string" == typeof d && "function" == typeof f && (i = a.webview.currentWebview(), 
        j = a.obj.Callback.prototype.addEventListener.apply(i, [ keyEvent[d], h, g ]), j && (k = [ keyEvent[d], window.__HtMl_Id__ ], 
        b.exec(c, e, [ i.__IDENTITY__, "addEventListener", [ i.__uuid__, k ] ])));
    }, a.key.removeEventListener = function(d, f) {
        var g, h, i;
        d && f && "string" == typeof d && "function" == typeof f && (g = a.webview.currentWebview(), 
        h = a.obj.Callback.prototype.removeEventListener.apply(g, [ keyEvent[d], f ]), h && (i = [ keyEvent[d], window.__HtMl_Id__ ], 
        g = a.webview.currentWebview(), b.exec(c, e, [ g.__IDENTITY__, "removeEventListener", [ g.__uuid__, i ] ])));
    };
}(window.plus), function(a) {
    function i(a) {
        f[a.__uuid__] = a;
    }
    function j(a) {
        delete f[a.__uuid__];
    }
    function k(b, c, d, e) {
        d = d || {}, d.name = c;
        var f = new a.webview.Webview(b, d, !1, e);
        return f;
    }
    function l(b, c, d) {
        var e = null;
        if ("string" == typeof b) e = p(b); else {
            if (!(b instanceof a.webview.Webview)) return;
            e = b;
        }
        e && e.close(c, d);
    }
    function m() {
        var j, k, l, g = b.execSync(c, e, [ c, "enumWindow", [ window.__HtMl_Id__ ] ]), h = [], i = {};
        for (j = 0; j < g.length; j++) k = g[j], l = f[k.uuid], l || (l = new a.webview.Webview(null, null, !0, k.extras), 
        l.__uuid__ = k.uuid, l.id = k.id, b.exec(c, d, [ c, "setcallbackid", [ l.__uuid__, [ l.__callback_id__ ] ] ])), 
        h.push(l), i[l.__uuid__] = l;
        return f = i, h;
    }
    function n() {
        if (h.platform == h.IOS) return !1;
        var a = b.execSync(c, e, [ c, "defauleHardwareAccelerated", [] ]);
        return a;
    }
    function o(e, g, h) {
        if (e && "string" == typeof e) {
            var k = f[e];
            return k || (k = new a.webview.Webview(null, null, !0, h), k.__uuid__ = e, k.id__ = g, 
            k.id = g, b.exec(c, d, [ c, "setcallbackid", [ k.__uuid__, [ k.__callback_id__ ] ] ]), 
            f[e] = k), k;
        }
    }
    function p(g) {
        var h, i, j, k;
        if (g && "string" == typeof g) {
            if (h = b.execSync(c, e, [ c, "findWindowByName", [ window.__HtMl_Id__, [ g ] ] ])) return i = f[h.uuid], 
            null == i && (i = new a.webview.Webview(null, null, !0, h.extras), i.__uuid__ = h.uuid, 
            i.id = h.id, b.exec(c, d, [ c, "setcallbackid", [ i.__uuid__, [ i.__callback_id__ ] ] ]), 
            f[i.__uuid__] = i), i;
            for (j in f) if (k = f[j], k && k.id === g) return k;
            return null;
        }
    }
    function q() {
        var h, g = f[window.__HtMl_Id__];
        return (null == g || void 0 === g) && (h = b.execSync(c, e, [ c, "currentWebview", [ window.__HtMl_Id__ ] ]), 
        h && (g = new a.webview.Webview(null, null, !0, h.extras), g.__uuid__ = window.__HtMl_Id__, 
        g.id = h.id, f[g.__uuid__] = g, b.exec(c, d, [ c, "setcallbackid", [ g.__uuid__, [ g.__callback_id__ ] ] ]))), 
        g;
    }
    function r() {
        var h, g = b.execSync(c, e, [ c, "getLaunchWebview", [] ]);
        return g ? (h = f[g.uuid], null == h && (h = new a.webview.Webview(null, null, !0, g.extras), 
        h.__uuid__ = g.uuid, h.id = g.id, b.exec(c, d, [ c, "setcallbackid", [ h.__uuid__, [ h.__callback_id__ ] ] ]), 
        f[h.__uuid__] = h), h) :void 0;
    }
    function s(b, c, d, e) {
        var f = null;
        if ("string" == typeof b) f = p(b); else {
            if (!(b instanceof a.webview.Webview)) return;
            f = b;
        }
        f && f.hide(c, d, e);
    }
    function t(a, e, f) {
        b.exec(c, d, [ a.__IDENTITY__, e, [ a.__uuid__, f ] ]);
    }
    function u(a, d, f) {
        return b.execSync(c, e, [ a.__IDENTITY__, d, [ a.__uuid__, f ] ]);
    }
    function v(b, c, d, e, f, g, h) {
        var i = a.webview.create(b, c, d, h);
        return i.show(e, f, g), i;
    }
    function w(b, c, d, e) {
        var f = null;
        if ("string" == typeof b) f = p(b); else {
            if (!(b instanceof a.webview.Webview)) return;
            f = b;
        }
        f && f.show(c, d, e);
    }
    function x(a) {
        var b = f[a.WebviewID];
        b && ("onloading" == a.Event ? null != b.onloading && b.onloading() :"onclose" == a.Event ? (null != b.onclose && b.onclose(), 
        delete f[a.WebviewID]) :"onerror" == a.Event ? null != b.onerror && b.onerror() :"onloaded" == a.Event && null != b.onloaded && b.onloaded());
    }
    function y() {
        b.exec(c, d, [ c, "debug", [] ]);
    }
    function z() {
        var h, g = b.execSync(c, e, [ c, "getWapLaunchWebview", [] ]);
        return g ? (h = f[g.uuid], null == h && (h = new a.webview.Webview(null, null, !0, g.extras), 
        h.__uuid__ = g.uuid, h.id = g.id, b.exec(c, d, [ c, "setcallbackid", [ h.__uuid__, [ h.__callback_id__ ] ] ]), 
        f[h.__uuid__] = h), h) :null;
    }
    var b = a.bridge, c = "UI", d = "execMethod", e = "syncExecMethod", f = {}, h = (a.bridge, 
    a.tools);
    a.webview = {
        open:v,
        show:w,
        __test__:y,
        hide:s,
        createGroup:null,
        getWapLaunchWebview:z,
        getLaunchWebview:r,
        getWebviewById:p,
        close:l,
        create:k,
        currentWebview:q,
        all:m,
        defauleHardwareAccelerated:n,
        exec:t,
        execSync:u,
        _find__Window_By_UUID__:o,
        __pushWindow__:i,
        __popWindow__:j,
        __JSON_Window_Stack:f,
        __Webview_LoadEvent_CallBack_:x
    };
}(window.plus), function(a) {
    function c(a) {
        this.__IDENTITY__ = a, this.__uuid__ = window.plus.tools.UUID(a), this.id, plus.obj.Callback.call(this);
    }
    var b = plus.bridge;
    c.prototype.getMetrics = function(c) {
        var d;
        c && (d = b.callbackId(function(a) {
            var b = {};
            b.canForward = a, c(b);
        }), a.exec(this, "getMetrics", [ d, window.__HtMl_Id__ ]));
    }, c.prototype.onCallback = function(a, b, c) {
        var d, e, f;
        "popGesture" == b && (d = c.private_args, e = plus.webview._find__Window_By_UUID__(d.uuid, d.id, d.extras), 
        f = {
            target:e,
            type:c.type,
            progress:c.progress
        }, "result" in c && (f.result = c.result), c = f), a(c);
    }, c.prototype.addEventListener = function(b, c, d) {
        var f, e = plus.obj.Callback.prototype.addEventListener.apply(this, [ b, c, d ]);
        e && (f = [ b, window.__HtMl_Id__ ], a.exec(this, "addEventListener", f));
    }, c.prototype.removeEventListener = function(b, c) {
        var e, d = plus.obj.Callback.prototype.removeEventListener.apply(this, [ b, c ]);
        d && (e = [ b, window.__HtMl_Id__ ], a.exec(this, "removeEventListener", e));
    }, a.NView = c;
}(window.plus.webview), function(a) {
    function c(c, d) {
        var e, f, g, h, i;
        if (window.plus.webview.NView.prototype.constructor.apply(this, [ b ]), this.__children = [], 
        e = [], c instanceof Array) for (f = 0; f < c.length; f++) g = c[f], g.styles = g.styles || {}, 
        g.styles.name = g.id, h = new a.webview.Webview(g.url, g.styles, !0, g.extras), 
        a.webview.__pushWindow__(h), this.__children.push(h), i = [ h.__uuid__, [ g.url, g.styles, h.__callback_id__, window.location.href, g.extras ] ], 
        e.push(i);
        a.webview.exec(this, "createGroup", [ e, d, this.__callback_id__ ]);
    }
    var b = "WebviewGroup", d = c.prototype;
    a.tools.extend(d, a.webview.NView.prototype), d.constructor = c, c.prototype.setSelectIndex = function(b) {
        a.webview.exec(this, "setSelectIndex", [ b ]);
    }, c.prototype.children = function() {
        return this.__children;
    }, a.webview.createGroup = function(a, b) {
        return new c(a, b);
    }, a.webview.WebviewGroup = c;
}(window.plus), function(a) {
    function h(c, d, e, f) {
        if (this.__view_array__ = new Array(), a.NView.prototype.constructor.apply(this, [ b ]), 
        this.id = null, d && d.name && (this.id = d.name), f) for (var g in f) this[g] = f[g];
        !this.id && c && (this.id = d.name = c), e || (a.__pushWindow__(this), a.exec(this, b, [ c, d, this.__callback_id__, window.location.href, f ]));
    }
    var b = "NWindow", c = "UI", e = "execMethod", f = plus.bridge, g = plus.tools, i = h.prototype;
    plus.tools.extend(i, a.NView.prototype), i.constructor = h, i.show = function(b, c, d, e) {
        var g;
        d && "function" == typeof d && (g = f.callbackId(function() {
            d();
        })), a.exec(this, "show", [ b, c, null, g, e ]);
    }, i.close = function(b, c, d) {
        this === plus.webview.__JSON_Window_Stack[window.__HtMl_Id__] && plus.bridge.callbackFromNative(this.__callback_id__, {
            status:plus.bridge.OK,
            message:{
                evt:"close"
            },
            keepCallback:!0
        }), a.exec(this, "close", [ b, c, d ]);
    }, i.setStyle = function(b) {
        b && "object" == typeof b && a.exec(this, "setOption", [ b ]);
    }, i.nativeInstanceObject = function() {
        var a = plus.ios || plus.android;
        return a && a.getWebviewById ? a.getWebviewById(this.__uuid__) :null;
    }, i.hide = function(b, c, d) {
        a.exec(this, "hide", [ b, c, d ]);
    }, i.setVisible = function(b) {
        a.exec(this, "setVisible", [ b ]);
    }, i.isVisible = function() {
        return a.execSync(this, "isVisible", []);
    }, i.setJsFile = function(b) {
        b && "string" == typeof b && a.exec(this, "setPreloadJsFile", [ b ]);
    }, i.appendJsFile = function(b) {
        b && "string" == typeof b && a.exec(this, "appendPreloadJsFile", [ b ]);
    }, i.setContentVisible = function(b) {
        a.exec(this, "setContentVisible", [ b ]);
    }, i.opener = function() {
        var b = a.execSync(this, "opener", []);
        return b ? plus.webview._find__Window_By_UUID__(b.uuid, b.id, b.extras) :null;
    }, i.opened = function() {
        var d, g, h, i, j, b = a.execSync(this, "opened", []);
        if (b) {
            for (d = [], g = {}, h = 0; h < b.length; h++) i = b[h], j = plus.webview.__JSON_Window_Stack[i], 
            j || (j = new plus.webview.Webview(null, null, !0, i.extras), j.__uuid__ = i.uuid, 
            j.id = i.id, f.exec(c, e, [ c, "setcallbackid", [ j.__uuid__, [ j.__callback_id__ ] ] ])), 
            d.push(j), g[j.__uuid__] = j;
            return d;
        }
    }, i.remove = function(b) {
        var c;
        if ("string" == typeof b) c = b; else {
            if (!(b instanceof plus.webview.Webview)) return;
            c = b.__uuid__;
        }
        a.exec(this, "remove", [ c ]);
    }, i.removeFromParent = function() {
        a.exec(this, "removeFromParent", []);
    }, i.parent = function() {
        var b = a.execSync(this, "parent", []);
        return b ? plus.webview._find__Window_By_UUID__(b.uuid, b.id, b.extras) :null;
    }, i.children = function() {
        var d, b = [], c = a.execSync(this, "children", []);
        for (d = 0; d < c.length; d++) b.push(plus.webview._find__Window_By_UUID__(c[d].uuid, c[d].id, c[d].extras));
        return b;
    }, i.getURL = function() {
        return a.execSync(this, "getUrl", []);
    }, i.getTitle = function() {
        return a.execSync(this, "getTitle", []);
    }, i.getStyle = function() {
        return a.execSync(this, "getOption");
    }, i.loadURL = function(b) {
        b && "string" == typeof b && a.exec(this, "load", [ b, window.location.href ]);
    }, i.loadData = function(b, c, d) {
        b && "string" == typeof b && a.exec(this, "loadData", [ b, window.location.href, c, d ]);
    }, i.stop = function() {
        a.exec(this, "stop", []);
    }, i.reload = function(b) {
        a.exec(this, "reload", [ b ]);
    }, i.draw = function(b, c, d) {
        var e, h;
        g.platform == g.IOS ? b.__captureWebview ? b.__captureWebview(this.__uuid__, c, d) :"function" == typeof d && d({
            code:-1,
            message:"参数错误"
        }) :(e = function(a) {
            "function" == typeof d && d(a);
        }, b && b.__id__ ? (h = f.callbackId(function() {
            "function" == typeof c && c();
        }, e), a.exec(this, "draw", [ b.__id__, this.__uuid__, h ])) :e({
            code:-1,
            message:"已经销毁的对象"
        }));
    }, i.back = function() {
        a.exec(this, "back", []);
    }, i.forward = function() {
        a.exec(this, "forward", []);
    }, i.canBack = function(b) {
        if (b && "function" == typeof b) {
            var c;
            b && (c = f.callbackId(function(a) {
                var c = {};
                c.canBack = a, b(c);
            })), a.exec(this, "canBack", [ c ]);
        }
    }, i.canForward = function(b) {
        if (b && "function" == typeof b) {
            var c;
            b && (c = f.callbackId(function(a) {
                var c = {};
                c.canForward = a, b(c);
            })), a.exec(this, "canForward", [ c ]);
        }
    }, i.clear = function() {
        a.exec(this, "clear", []);
    }, i.evalJS = function(b) {
        b && "string" == typeof b && a.exec(this, "evalJS", [ b ]);
    }, i.test = function() {
        a.exec(this, "test", []);
    }, i.append = function(b) {
        b && (b instanceof plus.webview.Webview || b instanceof plus.webview.WebviewGroup) && (this.__view_array__.push(b), 
        a.exec(this, "append", [ b.__IDENTITY__, b.__uuid__ ]));
    }, i.setPullToRefresh = function(b, c) {
        var d;
        c && (d = plus.bridge.callbackId(c)), this.addEventListener("pulldownrefreshevent", c, !1), 
        a.exec(this, "setPullToRefresh", [ b, d ]);
    }, i.endPullToRefresh = function() {
        a.exec(this, "endPullToRefresh", []);
    }, i.setBounce = function(b, c) {
        a.exec(this, "setBounce", [ b, c ]);
    }, i.resetBounce = function() {
        a.exec(this, "resetBounce", []);
    }, i.setBlockNetworkImage = function(b) {
        a.exec(this, "setBlockNetworkImage", [ b ]);
    }, i.captureSnapshot = function(b, c, d) {
        var e = "function" != typeof c ? null :function() {
            c();
        }, f = "function" != typeof d ? null :function(a) {
            d(a);
        }, g = plus.bridge.callbackId(e, f);
        plus.tools.platform == plus.tools.IOS ? e() :a.exec(this, "captureSnapshot", [ b, g ]);
    }, i.clearSnapshot = function(b) {
        plus.tools.platform != plus.tools.IOS && a.exec(this, "clearSnapshot", [ b ]);
    }, a.Webview = h;
}(window.plus.webview), function(a) {
    function d() {
        this.id = "", this.description = "", this.authResult = null, this.userInfo = null;
    }
    var e, b = "OAuth", c = a.bridge;
    d.prototype.login = function(a, d, e) {
        var f = this, g = "function" != typeof a ? null :function(b) {
            var c = {};
            c.target = f, f.authResult = b.authResult, f.userInfo = b.userInfo, f.extra = b.extra, 
            a(c);
        }, h = "function" != typeof d ? null :function(a) {
            d(a);
        }, i = c.callbackId(g, h);
        c.exec(b, "login", [ this.id, i, e ], {
            cbid:i,
            sid:this.id
        });
    }, d.prototype.logout = function(a, d) {
        var h, e = this, f = "function" != typeof a ? null :function(b) {
            var c = {};
            e.authResult = null, e.userInfo = null, e.extra = b.extra, c.target = e, a(c);
        }, g = "function" != typeof d ? null :function(a) {
            d(a);
        };
        this.authResult = null, this.userInfo = null, h = c.callbackId(f, g), c.exec(b, "logout", [ this.id, h ], {
            cbid:h,
            sid:this.id
        });
    }, d.prototype.getUserInfo = function(a, d) {
        var e = this, f = "function" != typeof a ? null :function(b) {
            var c = {};
            e.authResult = b.authResult, e.userInfo = b.userInfo, e.extra = b.extra, c.target = e, 
            a(c);
        }, g = "function" != typeof d ? null :function(a) {
            d(a);
        }, h = c.callbackId(f, g);
        c.exec(b, "getUserInfo", [ this.id, h ], {
            cbid:h,
            sid:this.id
        });
    }, d.prototype.addPhoneNumber = function(a, d) {
        var e = this, f = "function" != typeof a ? null :function(b) {
            var c = {};
            e.authResult = b.authResult, e.userInfo = b.userInfo, e.extra = b.extra, c.target = e, 
            a(c);
        }, g = "function" != typeof d ? null :function(a) {
            d(a);
        }, h = c.callbackId(f, g);
        c.exec(b, "addPhoneNumber", [ this.id, h ], {
            cbid:h,
            sid:this.id
        });
    }, e = {
        AuthService:d,
        getServices:function(a, d) {
            var f = "function" != typeof a ? null :function(b) {
                var f, g, c = [], d = b.length;
                for (f = 0; d > f; f++) g = new e.AuthService(), g.id = b[f].id, g.description = b[f].description, 
                g.authResult = b[f].authResult, g.userInfo = b[f].userInfo, c[f] = g;
                a(c);
            }, g = "function" != typeof d ? null :function(a) {
                d(a);
            }, h = c.callbackId(f, g);
            c.exec(b, "getServices", [ h ]);
        }
    }, a.oauth = e;
}(window.plus), function(a) {
    function f(a, f) {
        this.__id__ = d.UUID("Bitmap"), this.id = a, f || (e[this.__id__] = this, c.exec(b, "Bitmap", [ this.__id__, a ]));
    }
    var g, b = "NativeObj", c = a.bridge, d = a.tools, e = {};
    f.prototype.clear = function() {
        c.exec(b, "clear", [ this.__id__ ]), this.__id__ = void 0, e[this.__id__] && delete e[this.__id__];
    }, f.prototype.load = function(a, d, e) {
        var g, f = function(a) {
            "function" == typeof e && e(a);
        };
        this.__id__ ? (g = c.callbackId(function() {
            "function" == typeof d && d();
        }, f), c.exec(b, "load", [ this.__id__, a, g ])) :f({
            code:-1,
            message:"已经销毁的对象"
        });
    }, f.prototype.loadBase64Data = function(a, d, e) {
        var g, f = function(a) {
            "function" == typeof e && e(a);
        };
        this.__id__ ? (g = c.callbackId(function() {
            "function" == typeof d && d();
        }, f), c.exec(b, "loadBase64Data", [ this.__id__, a, g ])) :f({
            code:-1,
            message:"已经销毁的对象"
        });
    }, f.prototype.save = function(a, d, e, f) {
        var h, g = function(a) {
            "function" == typeof f && f(a);
        };
        this.__id__ ? (h = c.callbackId(function(a) {
            if ("function" == typeof e) {
                var b = {
                    target:a.path,
                    width:a.w,
                    height:a.h,
                    size:a.size
                };
                e(b);
            }
        }, g), c.exec(b, "save", [ this.__id__, a, d, h ])) :g({
            code:-1,
            message:"已经销毁的对象"
        });
    }, f.prototype.__captureWebview = function(a, d, e) {
        var g, f = function(a) {
            "function" == typeof e && e(a);
        };
        this.__id__ ? (g = c.callbackId(function() {
            "function" == typeof d && d();
        }, f), c.exec(b, "captureWebview", [ this.__id__, a, g ])) :f({
            code:-1,
            message:"已经销毁的对象"
        });
    }, f.prototype.toBase64Data = function() {
        return this.__id__ ? c.execSync(b, "toBase64Data", [ this.__id__ ]) :null;
    }, f.getItems = function() {
        var g, h, i, j, a = [], d = c.execSync(b, "getItems", []);
        for (g = 0; g < d.length; g++) h = d[g].__id__, i = e[h], i || (j = new f(d[g].id, !0), 
        j.__id__ = h, e[h] = j, i = j), a.push(i);
        return a;
    }, f.getBitmapById = function(a) {
        var g, h, d = c.execSync(b, "getBitmapById", [ a ]);
        return d ? (g = e[d.__id__], g || (h = new f(d.id, !0), h.__id__ = d.__id__, e[d.__id__] = h, 
        g = h), g) :null;
    }, g = {
        Bitmap:f
    }, a.nativeObj = g;
}(plus), function(a) {
    var b = window.plus.bridge, c = a.tools, d = "Stream";
    a.stream = {
        open:function(a, c, e) {
            var f = b.callbackId(c, e);
            b.exec(d, "open", [ a, f ]);
        },
        list:function(a, c, e) {
            var f = b.callbackId(c, e);
            b.exec(d, "list", [ a, f ]);
        },
        remove:function(a) {
            b.exec(d, "remove", [ a ]);
        },
        freetrafficRequest:function(a, e, f) {
            if (c.platform == c.IOS) return "function" == typeof f && f({
                code:-3,
                message:"不支持"
            }), void 0;
            var g = b.callbackId(e, f);
            b.exec(d, "freetrafficRequest", [ a, g ]);
        },
        freetrafficBind:function(a, e, f) {
            if (c.platform == c.IOS) return "function" == typeof f && f({
                code:-3,
                message:"不支持"
            }), void 0;
            var g = b.callbackId(e, f);
            b.exec(d, "freetrafficBind", [ a, g ]);
        },
        freetrafficRelease:function(a, e, f) {
            if (c.platform == c.IOS) return "function" == typeof f && f({
                code:-3,
                message:"不支持"
            }), void 0;
            var g = b.callbackId(e, f);
            b.exec(d, "freetrafficRelease", [ a, g ]);
        },
        freetrafficInfo:function(a, e) {
            if (c.platform == c.IOS) return "function" == typeof e && e({
                code:-3,
                message:"不支持"
            }), void 0;
            var f = b.callbackId(a, e);
            b.exec(d, "freetrafficInfo", [ f ]);
        },
        freetrafficIsValid:function() {
            return c.platform == c.IOS ? ("function" == typeof errorCallback && errorCallback({
                code:-3,
                message:"不支持"
            }), void 0) :b.exec(d, "freetrafficIsValid", null);
        },
        activate:function() {
            return c.platform == c.IOS ? ("function" == typeof errorCallback && errorCallback({
                code:-3,
                message:"不支持"
            }), void 0) :(b.exec(d, "activate", null), void 0);
        }
    };
}(window.plus);
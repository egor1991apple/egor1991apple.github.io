(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    "+e9V": function (e, t, a) {},
    "+gQd": function (e, t, a) {},
    "2MfL": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var l = a("q1tI"),
        n = a.n(l),
        r = a("X13+"),
        c = a("NIcq");
      a("+gQd");
      function i(e) {
        var t = e.points,
          a = void 0 === t ? [] : t;
        return n.a.createElement(
          "ul",
          { className: "list-points" },
          a.map(function (e, t) {
            var l = e.city,
              i = e.durationTime,
              s = e.address,
              o = e.time,
              m = e.date;
            return n.a.createElement(
              "li",
              { className: "list-points--item", key: t + "_" + l },
              0 === t
                ? n.a.createElement(
                    "div",
                    { className: "points-icon" },
                    n.a.createElement(c.k, null)
                  )
                : "",
              t === a.length - 1
                ? n.a.createElement(
                    "div",
                    { className: "points-icon" },
                    n.a.createElement(r.d, null)
                  )
                : "",
              t !== a.length - 1 &&
                0 !== t &&
                n.a.createElement(
                  "div",
                  { className: "points-icon" },
                  n.a.createElement(r.c, null)
                ),
              n.a.createElement(
                "div",
                { className: "text-5" },
                o,
                " ",
                n.a.createElement(
                  "sup",
                  { className: " px-1 rounded bg-primary text-white " },
                  " ",
                  m,
                  " "
                )
              ),
              n.a.createElement("div", { className: "text-3 text-primary" }, l),
              n.a.createElement(
                "small",
                { className: "d-inline-block " },
                s || ""
              ),
              0 != i
                ? n.a.createElement(
                    "span",
                    { className: "durtionTime text-muted" },
                    n.a.createElement(r.b, null),
                    " В пути: ",
                    i
                  )
                : ""
            );
          })
        );
      }
    },
    "6VMH": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      });
      a("dRSK");
      var l = a("q1tI"),
        n = a.n(l),
        r = a("U5uR");
      function c(e) {
        var t = e.selected,
          a = void 0 === t ? [] : t,
          c = e.disabled,
          i = void 0 === c ? [] : c,
          s = e.booking,
          o = void 0 === s ? [] : s,
          m = e.callback,
          d = void 0 === m ? null : m,
          u = Object(l.useContext)(r.a).BUS,
          E = void 0 === u ? [] : u;
        return n.a.createElement(
          "table",
          { className: "bus" },
          n.a.createElement(
            "tbody",
            null,
            E.map(function (e, t) {
              return n.a.createElement(
                "tr",
                { key: t + "_row" },
                e.map(function (e, t) {
                  var l;
                  return 0 == e
                    ? n.a.createElement(
                        "td",
                        (((l = { key: "bus-td--empty" }).key = t + "_td"), l)
                      )
                    : n.a.createElement(
                        "td",
                        {
                          key: t + "_td",
                          onClick: function () {
                            return (
                              !a.find(function (t) {
                                return t == e;
                              }) &&
                              !i.find(function (t) {
                                return t == e;
                              }) &&
                              d &&
                              d(e)
                            );
                          },
                          className:
                            "bus-td \n\t\t\t\t\t\t\t\t\t" +
                            (o.find(function (t) {
                              return t == e;
                            })
                              ? "bus-td--active"
                              : "") +
                            "\n\t\t\t\t\t\t\t\t\t" +
                            (i &&
                            i.find(function (t) {
                              return t == e;
                            })
                              ? "bus-td--disabled"
                              : "") +
                            " \n\t\t\t\t\t\t\t\t\t" +
                            (a &&
                            a.find(function (t) {
                              return t == e;
                            })
                              ? "bus-td--selected"
                              : ""),
                        },
                        e
                      );
                })
              );
            })
          )
        );
      }
    },
    "7mvT": function (e, t, a) {},
    Ar4B: function (e, t, a) {
      "use strict";
      a("q1tI"), a("cWnB");
    },
    FNhl: function (e) {
      e.exports = JSON.parse(
        '{"ru":{"title":"Автобусные билеты","departure":{"label":"Откуда","placeholder":"Откуда","required":"true","text":"loream ipsulm"},"arrival":{"label":"Куда","placeholder":"Куда","required":"true","text":"loream ipsulm"},"date_departure":{"label":"Дата отправления","placeholder":"Туда","required":"true","text":"loream ipsulm"},"date_arrival":{"label":"Дата отправления","placeholder":"Обратно","required":"true","text":"loream ipsulm"},"seats":{"label":"Мест","placeholder":"Пассажиров","required":"true","text":"loream ipsulm"},"adults":{"title":"Взрослых","subtitle":"12 и старше"},"children":{"title":"Взрослых","subtitle":"до 12 лет"},"benefic":{"title":"Льготный","subtitle":"старше 62 и инвалиды."},"submit":"Искать"}}'
      );
    },
    Jyo9: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return G;
        });
      a("91GP");
      var l = a("q1tI"),
        n = a.n(l),
        r = a("L12J"),
        c = a("7vrA"),
        i = a("3Z9Z"),
        s = a("JI6e"),
        o = a("uuXO");
      function m() {
        return n.a.createElement(
          s.a,
          { lg: "12", className: "zIndex pt-3 border-bottom" },
          n.a.createElement(o.a, { type: "hor" })
        );
      }
      a("dRSK"), a("rGqo"), a("yt8O"), a("Btvt"), a("RW0V"), a("tUrg");
      var d = a("6xyR"),
        u = a("cWnB");
      function E(e) {
        var t = e.city,
          a = void 0 === t ? "" : t,
          l = e.address,
          r = void 0 === l ? "" : l,
          c = e.time,
          i = void 0 === c ? "" : c,
          s = e.date,
          o = void 0 === s ? "" : s;
        return n.a.createElement(
          "div",
          { className: "d-flex flex-column line-height-14" },
          n.a.createElement(
            "span",
            { className: "text-5" },
            i,
            " ",
            n.a.createElement(
              "sup",
              { className: " px-1 rounded bg-primary text-white " },
              " ",
              o,
              " "
            )
          ),
          n.a.createElement(
            "span",
            { className: "text-4 mt-1 text-primary" },
            a
          ),
          n.a.createElement(
            "small",
            null,
            r.length > 75
              ? n.a.createElement("span", null, r.slice(0, 75), "...")
              : r
          )
        );
      }
      var b = a("X13+");
      function p(e) {
        var t = e.duration,
          a = void 0 === t ? "" : t,
          r = e.route,
          c = void 0 === r ? [] : r;
        return n.a.createElement(
          l.Fragment,
          null,
          n.a.createElement(
            s.a,
            { className: "col-12 col-md " },
            n.a.createElement(E, c[0])
          ),
          n.a.createElement(
            s.a,
            {
              sm: "auto",
              className:
                "p-md-0 d-flex flex-column text-muted line-height-14 py-3",
            },
            n.a.createElement("small", null, "В пути: "),
            n.a.createElement(
              "small",
              null,
              a,
              " ",
              n.a.createElement(b.a, { size: "24" })
            )
          ),
          n.a.createElement(
            s.a,
            { className: "col-12 col-md " },
            n.a.createElement(E, c[c.length - 1])
          )
        );
      }
      var f = a("Mg5v"),
        v = a("2MfL"),
        N = (a("Ar4B"), a("j0dn")),
        h = a("6VMH"),
        g = function (e) {
          var t = e.route,
            a = void 0 === t ? [] : t,
            l = e.placements;
          return n.a.createElement(
            "div",
            { className: "border-top-dashed" },
            n.a.createElement(
              f.a,
              { title: "Детальная информация" },
              n.a.createElement(
                "div",
                { className: "py-3" },
                n.a.createElement(
                  i.a,
                  null,
                  n.a.createElement(
                    s.a,
                    { lg: "6", className: "border-right  mb-sm-0" },
                    n.a.createElement(
                      "div",
                      { className: "d-flex" },
                      n.a.createElement(
                        "div",
                        { className: "text-6 mb-3" },
                        "Маршрут"
                      )
                    ),
                    n.a.createElement(v.a, { points: a }),
                    n.a.createElement(
                      u.a,
                      { variant: "info", className: "btn-block", size: "sm" },
                      "Cмотреть на карте..."
                    )
                  ),
                  n.a.createElement(
                    s.a,
                    { xs: "12", className: "d-lg-none" },
                    n.a.createElement("hr", null)
                  ),
                  n.a.createElement(
                    s.a,
                    { lg: "6" },
                    n.a.createElement(
                      "div",
                      { className: "d-flex mb-4" },
                      n.a.createElement("div", { className: "text-6" }, "Места")
                    ),
                    n.a.createElement(
                      "div",
                      null,
                      n.a.createElement(h.a, l),
                      n.a.createElement(
                        "table",
                        { className: "bus-info " },
                        n.a.createElement(
                          "tbody",
                          null,
                          n.a.createElement(
                            "tr",
                            null,
                            n.a.createElement("td", { className: "bus-td" }),
                            n.a.createElement("td", null, "Свободные")
                          ),
                          n.a.createElement(
                            "tr",
                            null,
                            n.a.createElement("td", {
                              className: "bus-td bus-td--selected",
                            }),
                            n.a.createElement("td", null, "Забронированные")
                          ),
                          n.a.createElement(
                            "tr",
                            null,
                            n.a.createElement("td", {
                              className: "bus-td bus-td--disabled",
                            }),
                            n.a.createElement("td", null, "Не доступные")
                          )
                        )
                      )
                    )
                  )
                ),
                n.a.createElement("hr", null),
                n.a.createElement(
                  i.a,
                  null,
                  n.a.createElement(
                    s.a,
                    { lg: "12" },
                    n.a.createElement(
                      "div",
                      { className: "d-flex mb-3" },
                      n.a.createElement(
                        "div",
                        { className: "text-6" },
                        "Услуги"
                      )
                    ),
                    n.a.createElement(
                      "div",
                      { className: "d-flex flex-wrap" },
                      n.a.createElement(N.a, null)
                    )
                  )
                )
              )
            )
          );
        };
      a("+e9V");
      function x(e) {
        var t = e.id,
          a = void 0 === t ? null : t,
          l = e.cost,
          r = void 0 === l ? null : l,
          c = e.currency,
          o = void 0 === c ? null : c,
          m = (e.link, e.callback),
          E = void 0 === m ? null : m,
          b = e.inPay,
          f = void 0 !== b && b,
          v = (function (e, t) {
            if (null == e) return {};
            var a,
              l,
              n = {},
              r = Object.keys(e);
            for (l = 0; l < r.length; l++)
              (a = r[l]), t.indexOf(a) >= 0 || (n[a] = e[a]);
            return n;
          })(e, ["id", "cost", "currency", "link", "callback", "inPay"]);
        return n.a.createElement(
          d.a,
          { className: "bg-light-1 mx-auto" },
          n.a.createElement(
            d.a.Body,
            { className: "p-0 " },
            n.a.createElement(
              i.a,
              { noGutters: !0 },
              n.a.createElement(
                s.a,
                {
                  sm: "9",
                  md: "10",
                  className: "flex-grow-1 d-flex flex-column",
                },
                n.a.createElement(
                  i.a,
                  { className: "py-3 mt-auto mx-0" },
                  n.a.createElement(p, v)
                ),
                n.a.createElement(g, Object.assign({}, v, { id: a }))
              ),
              !f &&
                n.a.createElement(
                  s.a,
                  {
                    xs: "12",
                    sm: "3",
                    md: "2",
                    className:
                      "ticket-styled    px-3 py-1 d-flex  flex-column   line-height-14 ",
                  },
                  n.a.createElement(
                    "div",
                    { className: "sticky-top pb-1", style: { top: "1rem" } },
                    n.a.createElement(
                      "div",
                      { className: "border-bottom pb-1" },
                      n.a.createElement("small", null, "Мест:"),
                      n.a.createElement("div", null, "6 свободных")
                    ),
                    n.a.createElement(
                      "div",
                      { className: " py-1" },
                      n.a.createElement("small", null, "Цена:"),
                      n.a.createElement(
                        "div",
                        { className: "text-5 text-danger" },
                        r,
                        " ",
                        o
                      )
                    ),
                    n.a.createElement(
                      u.a,
                      {
                        variant: "primary",
                        size: "sm",
                        className: "btn-block btn-sm text-nowrap",
                        onClick: function () {
                          return E(a);
                        },
                      },
                      "Выбрать"
                    )
                  )
                )
            )
          )
        );
      }
      var y = a("U5uR");
      function k() {
        var e = Object(l.useContext)(y.a),
          t = e.OFFERS,
          a = void 0 === t ? [] : t,
          r = e.onOpenPlacementDialog,
          c = void 0 === r ? null : r,
          i = e.BASKET,
          o = void 0 === i ? [] : i,
          m = e.SELECTED_OFFERS_ID,
          d = void 0 === m ? null : m,
          u = (function (e, t, a) {
            try {
              var l = e[a[t - 1].direction].filter(function (e) {
                var a = e.offers_id;
                return t == a;
              });
              return l.length
                ? l.map(function (e) {
                    return e.place;
                  })
                : [];
            } catch (n) {
              return [];
            }
          })(o, d, a);
        try {
          Object.assign({}, a[d - 1].placements, { booking: u }) || [];
        } catch (E) {}
        return n.a.createElement(
          l.Fragment,
          null,
          n.a.createElement(
            s.a,
            { lg: "9", className: "py-3 zIndex mx-auto" },
            n.a.createElement(
              "h3",
              { className: "mb-3 text-center" },
              "Предложения туда"
            ),
            a.length > 0 &&
              a.map(function (e, t) {
                return (
                  0 == e.direction &&
                  n.a.createElement(
                    "div",
                    { key: t + "_cardOffer", className: "mb-3" },
                    n.a.createElement(x, Object.assign({}, e, { callback: c }))
                  )
                );
              }),
            a.length > 0 &&
              a.find(function (e) {
                return 1 == e.direction;
              }) &&
              n.a.createElement(
                "h3",
                { className: "mt-5 mb-3 text-center" },
                "Предложения обратно"
              ),
            a.length > 0 &&
              a.map(function (e, t) {
                return (
                  1 == e.direction &&
                  n.a.createElement(
                    "div",
                    { key: t + "_cardOffer", className: "mb-3" },
                    n.a.createElement(x, Object.assign({}, e, { callback: c }))
                  )
                );
              })
          )
        );
      }
      var O = a("Znjz"),
        I = a("MBJH"),
        w = a("MSL8"),
        j = a("VeD8"),
        _ = a("pQ8y");
      function C() {
        var e = Object(l.useContext)(y.a),
          t = e.SELECTED_OFFERS_ID,
          a = void 0 === t ? null : t,
          r = e.OFFERS,
          c = void 0 === r ? [] : r,
          o = e.BASKET,
          m = void 0 === o ? [] : o,
          d = e.onBasketOffersCommit,
          u = void 0 === d ? function () {} : d,
          E = e.onAddBasketItem,
          b = void 0 === E ? function () {} : E,
          p = { selected: [], disabled: [], booking: [] },
          f = Object(w.a)();
        try {
          p = Object.assign({}, c[a - 1].placements, { booking: f }) || [];
        } catch (v) {}
        return (
          c.length &&
          a &&
          n.a.createElement(
            O.a,
            { callback: u(c[a - 1].direction), disabled: !f.length && !0 },
            n.a.createElement(
              i.a,
              null,
              n.a.createElement(
                s.a,
                { lg: "5", className: "d-none d-sm-block" },
                n.a.createElement("h6", null, "Места посадки"),
                n.a.createElement(
                  I.a,
                  { striped: !0, className: "border" },
                  n.a.createElement(
                    "thead",
                    null,
                    n.a.createElement(
                      "tr",
                      null,
                      n.a.createElement(
                        "th",
                        { className: "border-right" },
                        "Автобус"
                      ),
                      n.a.createElement(
                        "th",
                        { className: "border-right" },
                        "Пассажир"
                      ),
                      n.a.createElement("th", null, "Место")
                    )
                  ),
                  n.a.createElement(
                    j.a,
                    { component: "tbody" },
                    m[c[a - 1].direction].length &&
                      m[c[a - 1].direction].map(function (e, t) {
                        var a = e.ticket_id,
                          l = e.place;
                        return n.a.createElement(
                          _.a,
                          {
                            key: t + "place",
                            timeout: 300,
                            classNames: "fade",
                          },
                          n.a.createElement(
                            "tr",
                            null,
                            n.a.createElement(
                              "td",
                              { className: "border-right" },
                              " #",
                              a
                            ),
                            n.a.createElement(
                              "td",
                              { className: "border-right" },
                              "Пассажир №",
                              t + 1
                            ),
                            n.a.createElement(
                              "td",
                              { className: "" },
                              l,
                              " место"
                            )
                          )
                        );
                      })
                  )
                )
              ),
              n.a.createElement(
                s.a,
                { lg: "7" },
                n.a.createElement("h6", null, "Рассадка в автобусе"),
                n.a.createElement(
                  h.a,
                  Object.assign({}, p, { callback: b(c[a - 1].direction) })
                ),
                n.a.createElement(
                  "table",
                  { className: "bus-info mt-2" },
                  n.a.createElement(
                    "tbody",
                    { className: "d-flex " },
                    n.a.createElement(
                      "tr",
                      null,
                      n.a.createElement("td", { className: "bus-td" }),
                      n.a.createElement("td", null, "Свободные")
                    ),
                    n.a.createElement(
                      "tr",
                      null,
                      n.a.createElement("td", {
                        className: "bus-td bus-td--selected",
                      }),
                      n.a.createElement("td", null, "Забронированные")
                    ),
                    n.a.createElement(
                      "tr",
                      null,
                      n.a.createElement("td", {
                        className: "bus-td bus-td--disabled",
                      }),
                      n.a.createElement("td", null, "Не доступные")
                    )
                  )
                )
              )
            )
          )
        );
      }
      var S = a("NIcq");
      function z(e) {
        e.status;
        var t = e.place,
          a = void 0 === t ? null : t,
          l = e.currency,
          r = void 0 === l ? null : l,
          c = e.ticket_id,
          i = void 0 === c ? null : c,
          s = (e.direction, e.duration, e.cost),
          o = void 0 === s ? null : s,
          m = e.route,
          u = void 0 === m ? [] : m,
          E = e.callback,
          p = void 0 === E ? null : E;
        return n.a.createElement(
          d.a,
          { className: "mb-3 bg-light-2" },
          n.a.createElement(
            d.a.Body,
            { className: "p-3" },
            n.a.createElement(
              "div",
              { className: "d-flex justify-content-between " },
              n.a.createElement("h5", { className: "mb-0" }, "Билет №", i),
              n.a.createElement(S.a, {
                size: "21",
                fill: "black",
                className: "position-absolute cursor",
                style: { top: "10px", right: "10px" },
                onClick: function () {
                  return p && p(i);
                },
              })
            ),
            u.length
              ? n.a.createElement(
                  "table",
                  { className: "w-100 border-top-dashed  my-2" },
                  n.a.createElement(
                    "tbody",
                    null,
                    n.a.createElement(
                      "tr",
                      null,
                      n.a.createElement("td", { className: "pt-1" }, "Выезд:"),
                      n.a.createElement(
                        "td",
                        { className: "text-right pt-1" },
                        n.a.createElement(
                          "b",
                          null,
                          u[0].date,
                          " в ",
                          u[0].time
                        )
                      )
                    ),
                    n.a.createElement(
                      "tr",
                      null,
                      n.a.createElement(
                        "td",
                        { className: "pt-1" },
                        "Маршрут:"
                      ),
                      n.a.createElement(
                        "td",
                        { className: "text-right pt-1" },
                        n.a.createElement(
                          "b",
                          null,
                          u[0].city,
                          " ",
                          n.a.createElement(b.a, null),
                          " ",
                          u[u.length - 1].city
                        )
                      )
                    ),
                    n.a.createElement(
                      "tr",
                      null,
                      n.a.createElement("td", { className: "pt-1" }, "Место:"),
                      n.a.createElement(
                        "td",
                        { className: "text-right pt-1" },
                        a || ""
                      )
                    )
                  )
                )
              : null,
            n.a.createElement(
              "h4",
              {
                className: "text-right mb-0 text-danger border-top-dashed pt-2",
              },
              o,
              " ",
              r
            )
          )
        );
      }
      var B = a("Wbzz"),
        F = (a("7mvT"), a("pVYp"));
      function R(e) {
        var t = e.isMobile,
          a = e.transitionStyles,
          r = Object(l.useContext)(y.a),
          c = r.BASKET,
          i = void 0 === c ? [] : c,
          o = r.onRemoveBaksetItem,
          m = void 0 === o ? function () {} : o,
          d = r.onBasketCommit,
          E = void 0 === d ? function () {} : d,
          b = i[0] || [],
          p = i[1] || [],
          f = Object(F.a)();
        return n.a.createElement(
          s.a,
          {
            lg: 3,
            className:
              " d-flex flex-column p-0 " +
              (f > 0 && !t ? "border-left-dashed" : " h-100"),
            style: t ? {} : a,
          },
          n.a.createElement(
            "div",
            { className: "basketList" },
            n.a.createElement(
              j.a,
              null,
              b.length &&
                b.map(function (e, t) {
                  var a = e.place,
                    l = e.offers,
                    r = e.status,
                    c = e.ticket_id;
                  if (1 == r)
                    return n.a.createElement(
                      _.a,
                      {
                        key: t + "basket_item",
                        classNames: "scale",
                        timeout: 1e3,
                      },
                      n.a.createElement(
                        z,
                        Object.assign(
                          {},
                          Object.assign({ place: a }, l, {
                            status: r,
                            ticket_id: c,
                          }),
                          { callback: m(0) }
                        )
                      )
                    );
                })
            ),
            n.a.createElement(
              j.a,
              null,
              p.length &&
                p.map(function (e, t) {
                  var a = e.place,
                    l = void 0 === a ? null : a,
                    r = e.offers,
                    c = void 0 === r ? null : r,
                    i = e.status,
                    s = void 0 === i ? null : i,
                    o = e.ticket_id,
                    d = void 0 === o ? null : o;
                  if (1 == s)
                    return n.a.createElement(
                      _.a,
                      {
                        key: t + "basket_item",
                        classNames: "scale",
                        timeout: 300,
                      },
                      n.a.createElement(
                        z,
                        Object.assign(
                          {},
                          Object.assign({ place: l }, c, {
                            status: s,
                            ticket_id: d,
                          }),
                          { callback: m(1) }
                        )
                      )
                    );
                })
            )
          ),
          n.a.createElement(
            _.a,
            { classNames: "scale", timeout: 1e3 },
            n.a.createElement(
              "div",
              { className: "mt-auto mb-3 p-3" },
              n.a.createElement(
                u.a,
                {
                  variant: "danger",
                  className: "btn-block  zIndex bottom-0",
                  style: { bottom: 0, right: 0 },
                  onClick: function () {
                    E()(), Object(B.navigate)("/basket");
                  },
                },
                "Бронировать"
              )
            )
          )
        );
      }
      var q = a("y+W5"),
        M = a("dRu9"),
        T =
          (a("ziO3"),
          function () {
            var e = Object(l.useContext)(y.a),
              t = e.onShowMobileBasketInOffers,
              a = void 0 === t ? function () {} : t,
              r = e.onShowMobileFilterInOffers,
              c = void 0 === r ? function () {} : r,
              i = Object(F.a)();
            return n.a.createElement(
              "div",
              { className: "mobileControlContainer" },
              n.a.createElement(
                u.a,
                {
                  className: "btn-block mr-2 my-auto",
                  variant: "danger",
                  size: "sm",
                  disabled: 0 == i,
                  onClick: a,
                },
                "В корзине: ",
                i
              ),
              n.a.createElement(
                u.a,
                { className: "btn-block ml-2 my-auto", size: "sm", onClick: c },
                "Фильтр"
              )
            );
          }),
        L = a("Qu+8"),
        W = { maxWidth: 0, transition: "max-width 600ms", overflow: "hidden" },
        D = {
          entering: { maxWidth: 0 },
          entered: { maxWidth: 400 },
          exiting: { maxWidth: 0 },
          exited: { maxWidth: 0 },
        };
      function G() {
        var e = Object(L.a)(992),
          t = Object(l.useContext)(y.a),
          a = t.SHOW_MOBILE_BASKET_IN_OFFERS,
          s = void 0 !== a && a,
          o = t.SHOW_MOBILE_FILTER_IN_OFFERS,
          d = void 0 !== o && o,
          u = t.onShowMobileBasketInOffers,
          E = void 0 === u ? function () {} : u,
          b = t.onShowMobileFilterInOffers,
          p = void 0 === b ? function () {} : b,
          f = Object(F.a)();
        return n.a.createElement(
          r.a,
          { pageInfo: { pageName: "routes" } },
          n.a.createElement(
            c.a,
            { className: "my-5 " },
            n.a.createElement(
              i.a,
              { className: "bg-white border-radius shadow-sm rounded mx-0" },
              e ? null : n.a.createElement(m, null),
              n.a.createElement(k, null),
              e
                ? null
                : n.a.createElement(M.e, { in: f > 0, timeout: 600 }, function (
                    t
                  ) {
                    return n.a.createElement(R, {
                      transitionStyles: Object.assign({}, W, D[t]),
                      isMobile: e,
                    });
                  })
            )
          ),
          n.a.createElement(C, null),
          e
            ? n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(T, null),
                n.a.createElement(
                  q.a,
                  {
                    open: s,
                    type: "bottom",
                    NamePortal: "BasketInOffersDrawer",
                    callback: E,
                  },
                  n.a.createElement(R, { isMobile: e })
                ),
                n.a.createElement(
                  q.a,
                  {
                    open: d,
                    type: "bottom",
                    NamePortal: "FormInOffersDrawer",
                    callback: p,
                  },
                  n.a.createElement(m, null)
                )
              )
            : null
        );
      }
    },
    MBJH: function (e, t, a) {
      "use strict";
      var l = a("wx14"),
        n = a("zLVn"),
        r = a("TSYQ"),
        c = a.n(r),
        i = a("q1tI"),
        s = a.n(i),
        o = a("vUet"),
        m = s.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            r = e.className,
            i = e.striped,
            m = e.bordered,
            d = e.borderless,
            u = e.hover,
            E = e.size,
            b = e.variant,
            p = e.responsive,
            f = Object(n.a)(e, [
              "bsPrefix",
              "className",
              "striped",
              "bordered",
              "borderless",
              "hover",
              "size",
              "variant",
              "responsive",
            ]),
            v = Object(o.b)(a, "table"),
            N = c()(
              r,
              v,
              b && v + "-" + b,
              E && v + "-" + E,
              i && v + "-striped",
              m && v + "-bordered",
              d && v + "-borderless",
              u && v + "-hover"
            ),
            h = s.a.createElement(
              "table",
              Object(l.a)({}, f, { className: N, ref: t })
            );
          if (p) {
            var g = v + "-responsive";
            return (
              "string" == typeof p && (g = g + "-" + p),
              s.a.createElement("div", { className: g }, h)
            );
          }
          return h;
        });
      t.a = m;
    },
    MSL8: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var l = a("q1tI"),
        n = a("U5uR"),
        r = function () {
          var e = Object(l.useContext)(n.a),
            t = e.SELECTED_OFFERS_ID,
            a = void 0 === t ? null : t,
            r = e.OFFERS,
            c = void 0 === r ? [] : r,
            i = e.BASKET,
            s = void 0 === i ? [] : i;
          return (function () {
            try {
              var e = c[a - 1].direction,
                t = s[e].filter(function (e) {
                  var t = e.offers_id;
                  return a == t;
                });
              return t.length
                ? t.map(function (e) {
                    return e.place;
                  })
                : [];
            } catch (l) {
              return [];
            }
          })();
        };
    },
    Mg5v: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var l = a("q1tI"),
        n = a.n(l),
        r = a("NIcq"),
        c = a("vYJ8");
      function i(e) {
        var t = e.title,
          a = e.children,
          i = Object(l.useState)(!1),
          s = i[0],
          o = i[1],
          m = Object(l.useRef)(null);
        return (
          Object(l.useEffect)(
            function () {
              if (s) {
                setTimeout(function () {
                  var e =
                    m.current.getBoundingClientRect().top +
                    window.pageYOffset -
                    50;
                  "undefined" != typeof window &&
                    window.scrollTo({ top: e, behavior: "smooth" });
                }, 300);
              }
            },
            [s]
          ),
          n.a.createElement(
            l.Fragment,
            null,
            n.a.createElement(
              "a",
              {
                className:
                  "d-flex justify-content-end nav-link cursor py-1 px-1 align-items-center",
                onClick: function (e) {
                  e.preventDefault(), o(!s);
                },
              },
              n.a.createElement("span", null, t),
              n.a.createElement(r.d, {
                size: "21",
                style: {
                  transition: "transform .3s",
                  transform: "rotate(" + (s ? "180deg" : "0deg") + ")",
                },
              })
            ),
            n.a.createElement(
              c.a,
              { in: s },
              n.a.createElement(
                "div",
                { id: "children" },
                n.a.createElement(
                  "div",
                  { className: "d-flex flex-column border-top-dashed" },
                  n.a.createElement(
                    "div",
                    { ref: m, className: "container-fluid" },
                    a
                  )
                )
              )
            )
          )
        );
      }
    },
    "Qu+8": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var l = a("q1tI"),
        n = a("LvDl");
      function r(e) {
        var t = Object(l.useState)(!1),
          a = t[0],
          r = t[1];
        return (
          Object(l.useEffect)(function () {
            ("undefined" == typeof window && null == typeof window) ||
              (r(window.innerWidth <= e),
              window.addEventListener(
                "resize",
                Object(n.throttle)(function () {
                  return r(window.innerWidth <= e);
                })
              ));
          }, []),
          a
        );
      }
    },
    Znjz: function (e, t, a) {
      "use strict";
      var l = a("q1tI"),
        n = a.n(l),
        r = a("zM5D"),
        c = a("cWnB"),
        i = a("U5uR"),
        s = a("NIcq");
      t.a = function (e) {
        var t = e.children,
          a = e.callback,
          o = void 0 === a ? function () {} : a,
          m = e.disabled,
          d = void 0 === m || m,
          u = e.btnText,
          E = void 0 === u ? "ok" : u,
          b = Object(l.useContext)(i.a),
          p = b.SHOW_PLACEMENT_DIALOG,
          f = void 0 !== p && p,
          v = b.onOpenPlacementDialog,
          N = void 0 === v ? null : v;
        b.lang;
        return n.a.createElement(
          r.a,
          { size: "lg", id: "PlacementDialog", show: f, onHide: N },
          n.a.createElement(
            r.a.Header,
            null,
            n.a.createElement(
              "div",
              { className: "text-4" },
              "Выбирите места посадки в транспорте"
            ),
            n.a.createElement(
              c.a,
              {
                Button: !0,
                onClick: function () {
                  return N();
                },
                className: "btn-clear btn-close-dialog",
              },
              n.a.createElement(s.a, { size: "21px" })
            )
          ),
          n.a.createElement(r.a.Body, null, t),
          n.a.createElement(
            r.a.Footer,
            null,
            n.a.createElement(c.a, { onClick: o, size: "sm", disabled: d }, E)
          )
        );
      };
    },
    j0dn: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      a("dRSK");
      var l = a("q1tI"),
        n = a.n(l),
        r = a("U5uR"),
        c = a("ma3e"),
        i = a("tjd4"),
        s = a("IdFE");
      function o(e) {
        var t = e.includeServises,
          a = void 0 === t ? [] : t,
          o = Object(l.useContext)(r.a).ROUTE_SERVISES,
          m = void 0 === o ? [] : o;
        Object(l.useMemo)(
          function () {
            return m.filter(function (e) {
              var t = e.id;
              return a.find(function (e) {
                return e == t;
              });
            });
          },
          [a]
        );
        return n.a.createElement(
          l.Fragment,
          null,
          m.map(function (e, t) {
            var a = e.id,
              l = e.title;
            e.icon, e.text;
            return n.a.createElement(
              "div",
              {
                key: l,
                className:
                  " text-center border p-2  mr-2 rounded d-flex flex-column align-items-center mt-2",
              },
              1 == a && n.a.createElement(c.l, { size: "18" }),
              2 == a && n.a.createElement(c.b, { size: "18" }),
              3 == a && n.a.createElement(c.a, { size: "18" }),
              4 == a && n.a.createElement(c.j, { size: "18" }),
              5 == a && n.a.createElement(i.a, { size: "18" }),
              6 == a && n.a.createElement(s.a, { size: "18" }),
              7 == a && n.a.createElement(c.e, { size: "18" }),
              n.a.createElement(
                "small",
                {
                  className: "d-inline-block text-truncate text-uppercase",
                  style: { width: "45px" },
                },
                l
              )
            );
          })
        );
      }
    },
    pVYp: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var l = a("q1tI"),
        n = a("U5uR"),
        r = function () {
          var e = Object(l.useContext)(n.a).BASKET,
            t = void 0 === e ? { 1: [], 0: [] } : e,
            a = t[0],
            r = t[1];
          return a.length + r.length;
        };
    },
    uuXO: function (e, t, a) {
      "use strict";
      var l = a("q1tI"),
        n = a.n(l),
        r = a("QojX"),
        c = a("JI6e"),
        i = a("cWnB"),
        s = a("FNhl"),
        o = a("NIcq"),
        m = a("Wbzz");
      function d(e, t) {
        var a = e.language,
          d = void 0 === a ? "ru" : a,
          u = e.type;
        return "hor" != (void 0 === u ? null : u)
          ? n.a.createElement(
              l.Fragment,
              null,
              n.a.createElement(
                r.a,
                { id: "bookingBus", className: "d-block" },
                n.a.createElement(
                  r.a.Row,
                  null,
                  n.a.createElement(
                    r.a.Group,
                    {
                      as: c.a,
                      controlId: "departure",
                      className: "position-relative",
                    },
                    n.a.createElement(r.a.Control, {
                      type: "text",
                      placeholder: s.ru.departure.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(o.k, null)
                    )
                  ),
                  n.a.createElement(
                    r.a.Group,
                    {
                      as: c.a,
                      controlId: "arrival",
                      className: "position-relative",
                    },
                    n.a.createElement(r.a.Control, {
                      type: "text",
                      placeholder: s.ru.arrival.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(o.k, null)
                    )
                  )
                ),
                n.a.createElement(
                  r.a.Row,
                  null,
                  n.a.createElement(
                    r.a.Group,
                    {
                      as: c.a,
                      controlId: "date_departure",
                      className: "position-relative",
                    },
                    n.a.createElement(r.a.Control, {
                      type: "text",
                      placeholder: s.ru.date_departure.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(o.b, null)
                    )
                  ),
                  n.a.createElement(
                    r.a.Group,
                    {
                      as: c.a,
                      controlId: "date_arrival",
                      className: "position-relative",
                    },
                    n.a.createElement(r.a.Control, {
                      disabled: !0,
                      type: "text",
                      placeholder: s.ru.date_arrival.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(o.b, null)
                    )
                  )
                ),
                n.a.createElement(
                  r.a.Group,
                  { controlId: "seats", className: "position-relative" },
                  n.a.createElement(r.a.Control, {
                    type: "text",
                    placeholder: s[d].seats.placeholder,
                  }),
                  n.a.createElement(
                    "span",
                    { className: "icon-inside" },
                    n.a.createElement(o.i, null)
                  )
                ),
                n.a.createElement(
                  m.Link,
                  { to: "/offers", className: "text-white" },
                  n.a.createElement(
                    i.a,
                    {
                      variant: "primary",
                      type: "submit",
                      className: "btn-block",
                    },
                    s[d].submit
                  )
                )
              )
            )
          : n.a.createElement(
              l.Fragment,
              null,
              n.a.createElement(
                r.a,
                { id: "bookingBus", className: "d-block", ref: t },
                n.a.createElement(
                  r.a.Row,
                  null,
                  n.a.createElement(
                    r.a.Group,
                    {
                      controlId: "departure",
                      className: "position-relative col-sm-6 col-lg",
                    },
                    n.a.createElement(r.a.Control, {
                      type: "text",
                      placeholder: s.ru.departure.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(o.k, null)
                    )
                  ),
                  n.a.createElement(
                    r.a.Group,
                    {
                      controlId: "arrival",
                      className: "position-relative col-sm-6 col-lg",
                    },
                    n.a.createElement(r.a.Control, {
                      type: "text",
                      placeholder: s.ru.arrival.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(o.k, null)
                    )
                  ),
                  n.a.createElement(
                    r.a.Group,
                    {
                      controlId: "date_departure",
                      className: "position-relative col-sm-6 col-lg",
                    },
                    n.a.createElement(r.a.Control, {
                      type: "text",
                      placeholder: s.ru.date_departure.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(o.b, null)
                    )
                  ),
                  n.a.createElement(
                    r.a.Group,
                    {
                      controlId: "date_arrival",
                      className: "position-relative col-sm-6 col-lg",
                    },
                    n.a.createElement(r.a.Control, {
                      disabled: !0,
                      type: "text",
                      placeholder: s.ru.date_arrival.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(o.b, null)
                    )
                  ),
                  n.a.createElement(
                    r.a.Group,
                    {
                      controlId: "seats",
                      className: "position-relative col-sm-6 col-lg",
                    },
                    n.a.createElement(r.a.Control, {
                      type: "text",
                      placeholder: s[d].seats.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(o.i, null)
                    )
                  ),
                  n.a.createElement(
                    r.a.Group,
                    { className: "position-relative col-sm-6 col-lg" },
                    n.a.createElement(
                      m.Link,
                      { to: "/offers", className: "text-white" },
                      n.a.createElement(
                        i.a,
                        {
                          variant: "primary",
                          type: "submit",
                          className: "btn-block",
                        },
                        s[d].submit
                      )
                    )
                  )
                )
              )
            );
      }
      t.a = n.a.forwardRef(d);
    },
    ziO3: function (e, t, a) {},
  },
]);
//# sourceMappingURL=component---src-pages-offers-jsx-99cb0bdd814a0867bcb9.js.map

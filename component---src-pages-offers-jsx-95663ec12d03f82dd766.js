(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "+e9V": function (e, t, a) {},
    "+gQd": function (e, t, a) {},
    "2MfL": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var l = a("q1tI"),
        n = a.n(l),
        r = a("X13+"),
        c = a("NIcq");
      a("+gQd");
      function s(e) {
        var t = e.points,
          a = void 0 === t ? [] : t;
        return n.a.createElement(
          "ul",
          { className: "list-points" },
          a.map(function (e, t) {
            var l = e.city,
              s = e.durationTime,
              i = e.address,
              m = e.time,
              o = e.date;
            return n.a.createElement(
              "li",
              { className: "list-points--item", key: t + "_" + l },
              0 === t
                ? n.a.createElement(
                    "div",
                    { className: "points-icon" },
                    n.a.createElement(c.j, null)
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
                m,
                " ",
                n.a.createElement(
                  "sup",
                  { className: " px-1 rounded bg-primary text-white " },
                  " ",
                  o,
                  " "
                )
              ),
              n.a.createElement("div", { className: "text-3 text-primary" }, l),
              n.a.createElement(
                "small",
                { className: "d-inline-block " },
                i || ""
              ),
              0 != s
                ? n.a.createElement(
                    "span",
                    { className: "durtionTime text-muted" },
                    n.a.createElement(r.b, null),
                    " В пути: ",
                    s
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
          s = void 0 === c ? [] : c,
          i = e.booking,
          m = void 0 === i ? [] : i,
          o = e.callback,
          u = void 0 === o ? null : o,
          d = Object(l.useContext)(r.a).BUS,
          E = void 0 === d ? [] : d;
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
                              !s.find(function (t) {
                                return t == e;
                              }) &&
                              u &&
                              u(e)
                            );
                          },
                          className:
                            "bus-td \n\t\t\t\t\t\t\t\t\t" +
                            (m.find(function (t) {
                              return t == e;
                            })
                              ? "bus-td--active"
                              : "") +
                            "\n\t\t\t\t\t\t\t\t\t" +
                            (s &&
                            s.find(function (t) {
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
          return L;
        });
      var l = a("q1tI"),
        n = a.n(l),
        r = a("L12J"),
        c = a("7vrA"),
        s = a("3Z9Z"),
        i = a("JI6e"),
        m = a("uuXO");
      function o() {
        return n.a.createElement(
          i.a,
          { lg: "12", className: "pt-3 zIndex border-bottom" },
          n.a.createElement(m.a, { type: "hor" })
        );
      }
      a("dRSK"),
        a("91GP"),
        a("rGqo"),
        a("yt8O"),
        a("Btvt"),
        a("RW0V"),
        a("tUrg");
      var u = a("6xyR"),
        d = a("cWnB");
      function E(e) {
        var t = e.city,
          a = void 0 === t ? "" : t,
          l = e.address,
          r = void 0 === l ? "" : l,
          c = e.time,
          s = void 0 === c ? "" : c,
          i = e.date,
          m = void 0 === i ? "" : i;
        return n.a.createElement(
          "div",
          { className: "d-flex flex-column line-height-14" },
          n.a.createElement(
            "span",
            { className: "text-5" },
            s,
            " ",
            n.a.createElement(
              "sup",
              { className: " px-1 rounded bg-primary text-white " },
              " ",
              m,
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
      var p = a("X13+");
      function b(e) {
        var t = e.duration,
          a = void 0 === t ? "" : t,
          r = e.route,
          c = void 0 === r ? [] : r;
        return n.a.createElement(
          l.Fragment,
          null,
          n.a.createElement(
            i.a,
            { className: "col-12 col-md " },
            n.a.createElement(E, c[0])
          ),
          n.a.createElement(
            i.a,
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
              n.a.createElement(p.a, { size: "24" })
            )
          ),
          n.a.createElement(
            i.a,
            { className: "col-12 col-md " },
            n.a.createElement(E, c[c.length - 1])
          )
        );
      }
      var v = a("Mg5v"),
        f = a("2MfL"),
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
              v.a,
              { title: "Детальная информация" },
              n.a.createElement(
                "div",
                { className: "py-3" },
                n.a.createElement(
                  s.a,
                  null,
                  n.a.createElement(
                    i.a,
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
                    n.a.createElement(f.a, { points: a }),
                    n.a.createElement(
                      d.a,
                      { variant: "info", className: "btn-block", size: "sm" },
                      "Cмотреть на карте..."
                    )
                  ),
                  n.a.createElement(
                    i.a,
                    { xs: "12", className: "d-lg-none" },
                    n.a.createElement("hr", null)
                  ),
                  n.a.createElement(
                    i.a,
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
                  s.a,
                  null,
                  n.a.createElement(
                    i.a,
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
          m = void 0 === c ? null : c,
          o = (e.link, e.callback),
          E = void 0 === o ? null : o,
          p = e.inPay,
          v = void 0 !== p && p,
          f = (function (e, t) {
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
          u.a,
          { className: "bg-light-1 mx-auto" },
          n.a.createElement(
            u.a.Body,
            { className: "p-0 " },
            n.a.createElement(
              s.a,
              { noGutters: !0 },
              n.a.createElement(
                i.a,
                {
                  sm: "9",
                  md: "10",
                  className: "flex-grow-1 d-flex flex-column",
                },
                n.a.createElement(
                  s.a,
                  { className: "py-3 mt-auto mx-0" },
                  n.a.createElement(b, f)
                ),
                n.a.createElement(g, Object.assign({}, f, { id: a }))
              ),
              !v &&
                n.a.createElement(
                  i.a,
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
                        m
                      )
                    ),
                    n.a.createElement(
                      d.a,
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
          s = e.BASKET,
          m = void 0 === s ? [] : s,
          o = e.SELECTED_OFFERS_ID,
          u = void 0 === o ? null : o,
          d = (function (e, t, a) {
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
          })(m, u, a);
        try {
          Object.assign({}, a[u - 1].placements, { booking: d }) || [];
        } catch (E) {}
        return n.a.createElement(
          l.Fragment,
          null,
          n.a.createElement(
            i.a,
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
        j = a("MBJH"),
        w = a("MSL8"),
        I = a("VeD8"),
        _ = a("pQ8y");
      function C() {
        var e = Object(l.useContext)(y.a),
          t = e.SELECTED_OFFERS_ID,
          a = void 0 === t ? null : t,
          r = e.OFFERS,
          c = void 0 === r ? [] : r,
          m = e.BASKET,
          o = void 0 === m ? [] : m,
          u = e.onBasketOffersCommit,
          d = void 0 === u ? function () {} : u,
          E = e.onAddBasketItem,
          p = void 0 === E ? function () {} : E,
          b = { selected: [], disabled: [], booking: [] },
          v = Object(w.a)();
        try {
          b = Object.assign({}, c[a - 1].placements, { booking: v }) || [];
        } catch (f) {}
        return (
          c.length &&
          a &&
          n.a.createElement(
            O.a,
            { callback: d(c[a - 1].direction), disabled: !v.length && !0 },
            n.a.createElement(
              s.a,
              null,
              n.a.createElement(
                i.a,
                { lg: "5" },
                n.a.createElement("h6", null, "Места посадки"),
                n.a.createElement(
                  j.a,
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
                    I.a,
                    { component: "tbody" },
                    o[c[a - 1].direction].length &&
                      o[c[a - 1].direction].map(function (e, t) {
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
                i.a,
                { lg: "7" },
                n.a.createElement("h6", null, "Рассадка в автобусе"),
                n.a.createElement(
                  h.a,
                  Object.assign({}, b, { callback: p(c[a - 1].direction) })
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
      var z = a("NIcq");
      function S(e) {
        e.status;
        var t = e.place,
          a = void 0 === t ? null : t,
          l = e.currency,
          r = void 0 === l ? null : l,
          c = e.ticket_id,
          s = void 0 === c ? null : c,
          i = (e.direction, e.duration, e.cost),
          m = void 0 === i ? null : i,
          o = e.route,
          d = void 0 === o ? [] : o,
          E = e.callback,
          b = void 0 === E ? null : E;
        return n.a.createElement(
          u.a,
          { className: "mb-3 bg-light-2" },
          n.a.createElement(
            u.a.Body,
            { className: "p-3" },
            n.a.createElement(
              "div",
              { className: "d-flex justify-content-between " },
              n.a.createElement("h5", { className: "mb-0" }, "Билет №", s),
              n.a.createElement(z.a, {
                size: "21",
                fill: "black",
                className: "position-absolute cursor",
                style: { top: "10px", right: "10px" },
                onClick: function () {
                  return b && b(s);
                },
              })
            ),
            d.length
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
                          d[0].date,
                          " в ",
                          d[0].time
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
                          d[0].city,
                          " ",
                          n.a.createElement(p.a, null),
                          " ",
                          d[d.length - 1].city
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
              m,
              " ",
              r
            )
          )
        );
      }
      var B = a("Wbzz");
      a("7mvT");
      function R() {
        var e = Object(l.useContext)(y.a),
          t = e.BASKET,
          a = void 0 === t ? [] : t,
          r = e.onRemoveBaksetItem,
          c = void 0 === r ? function () {} : r,
          s = a[0] || [],
          m = a[1] || [];
        return n.a.createElement(
          i.a,
          { lg: "3", className: " d-flex flex-column p-0" },
          n.a.createElement(
            "div",
            { className: "basketList" },
            n.a.createElement(
              I.a,
              null,
              s.length &&
                s.map(function (e, t) {
                  var a = e.place,
                    l = e.offers,
                    r = e.status,
                    s = e.ticket_id;
                  if (1 == r)
                    return n.a.createElement(
                      _.a,
                      {
                        key: t + "basket_item",
                        classNames: "scale",
                        timeout: 300,
                      },
                      n.a.createElement(
                        S,
                        Object.assign(
                          {},
                          Object.assign({ place: a }, l, {
                            status: r,
                            ticket_id: s,
                          }),
                          { callback: c(0) }
                        )
                      )
                    );
                })
            ),
            n.a.createElement(
              I.a,
              null,
              m.length &&
                m.map(function (e, t) {
                  var a = e.place,
                    l = void 0 === a ? null : a,
                    r = e.offers,
                    s = void 0 === r ? null : r,
                    i = e.status,
                    m = void 0 === i ? null : i,
                    o = e.ticket_id,
                    u = void 0 === o ? null : o;
                  if (1 == m)
                    return n.a.createElement(
                      _.a,
                      {
                        key: t + "basket_item",
                        classNames: "scale",
                        timeout: 300,
                      },
                      n.a.createElement(
                        S,
                        Object.assign(
                          {},
                          Object.assign({ place: l }, s, {
                            status: m,
                            ticket_id: u,
                          }),
                          { callback: c(1) }
                        )
                      )
                    );
                })
            )
          ),
          (function (e, t) {
            return (
              void 0 === e && (e = []),
              void 0 === t && (t = []),
              (0 != e.length &&
                e.filter(function (e) {
                  return 1 == e.status;
                }).length > 0) ||
                (0 != t.length &&
                  t.filter(function (e) {
                    return 1 == e.status;
                  }).length > 0)
            );
          })(s, m) &&
            n.a.createElement(
              _.a,
              { classNames: "scale", timeout: 1e3 },
              n.a.createElement(
                "div",
                { className: "mt-auto mb-3 p-3" },
                n.a.createElement(
                  B.Link,
                  { to: "/basket" },
                  n.a.createElement(
                    d.a,
                    {
                      variant: "danger",
                      className: "btn-block  zIndex bottom-0",
                      style: { bottom: 0, right: 0 },
                    },
                    "Бронировать"
                  )
                )
              )
            )
        );
      }
      var F = a("y+W5"),
        q =
          (a("ziO3"),
          function () {
            var e,
              t,
              a,
              r,
              c = Object(l.useContext)(y.a).onShowMobileBasketInOffers,
              s =
                ((e = Object(l.useContext)(y.a).BASKET),
                (a = (t = void 0 === e ? { 1: [], 0: [] } : e)[0]),
                (r = t[1]),
                a.length + r.length);
            return n.a.createElement(
              "div",
              { className: "mobileControlContainer" },
              n.a.createElement(
                d.a,
                {
                  className: "btn-block mr-2 my-auto",
                  variant: "danger",
                  size: "sm",
                  disabled: 0 == s,
                  onClick: c,
                },
                "В корзине: ",
                s
              ),
              n.a.createElement(
                d.a,
                { className: "btn-block ml-2 my-auto", size: "sm" },
                "Фильтр"
              )
            );
          }),
        T = a("LvDl");
      function L() {
        var e,
          t,
          a,
          i,
          m =
            ((e = 992),
            (t = Object(l.useState)(!1)),
            (a = t[0]),
            (i = t[1]),
            Object(l.useEffect)(function () {
              ("undefined" == typeof window && null == typeof window) ||
                (i(window.innerWidth <= e),
                window.addEventListener(
                  "resize",
                  Object(T.throttle)(function () {
                    return i(window.innerWidth <= e);
                  })
                ));
            }, []),
            console.log(a),
            a),
          u = Object(l.useContext)(y.a),
          d = u.SHOW_MOBILE_BASKET_IN_OFFERS,
          E = u.onShowMobileBasketInOffers;
        return n.a.createElement(
          r.a,
          { pageInfo: { pageName: "routes" } },
          n.a.createElement(
            c.a,
            { className: "my-5 " },
            n.a.createElement(
              s.a,
              { className: "bg-white border-radius shadow-sm rounded mx-0" },
              n.a.createElement(o, null),
              n.a.createElement(k, null),
              n.a.createElement(R, null)
            )
          ),
          n.a.createElement(C, null),
          m
            ? n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(q, null),
                n.a.createElement(
                  F.a,
                  {
                    type: "bottom",
                    open: d,
                    NamePortal: "BasketInOffersDrawer",
                    callback: E,
                  },
                  n.a.createElement(R, null)
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
        s = a("q1tI"),
        i = a.n(s),
        m = a("vUet"),
        o = i.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            r = e.className,
            s = e.striped,
            o = e.bordered,
            u = e.borderless,
            d = e.hover,
            E = e.size,
            p = e.variant,
            b = e.responsive,
            v = Object(n.a)(e, [
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
            f = Object(m.b)(a, "table"),
            N = c()(
              r,
              f,
              p && f + "-" + p,
              E && f + "-" + E,
              s && f + "-striped",
              o && f + "-bordered",
              u && f + "-borderless",
              d && f + "-hover"
            ),
            h = i.a.createElement(
              "table",
              Object(l.a)({}, v, { className: N, ref: t })
            );
          if (b) {
            var g = f + "-responsive";
            return (
              "string" == typeof b && (g = g + "-" + b),
              i.a.createElement("div", { className: g }, h)
            );
          }
          return h;
        });
      t.a = o;
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
            s = e.BASKET,
            i = void 0 === s ? [] : s;
          return (function () {
            try {
              var e = c[a - 1].direction,
                t = i[e].filter(function (e) {
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
        return s;
      });
      var l = a("q1tI"),
        n = a.n(l),
        r = a("NIcq"),
        c = a("vYJ8");
      function s(e) {
        var t = e.title,
          a = e.children,
          s = Object(l.useState)(!1),
          i = s[0],
          m = s[1],
          o = Object(l.useRef)(null);
        return (
          Object(l.useEffect)(
            function () {
              if (i) {
                setTimeout(function () {
                  var e =
                    o.current.getBoundingClientRect().top +
                    window.pageYOffset -
                    50;
                  "undefined" != typeof window &&
                    window.scrollTo({ top: e, behavior: "smooth" });
                }, 300);
              }
            },
            [i]
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
                  e.preventDefault(), m(!i);
                },
              },
              n.a.createElement("span", null, t),
              n.a.createElement(r.d, {
                size: "21",
                style: {
                  transition: "transform .3s",
                  transform: "rotate(" + (i ? "180deg" : "0deg") + ")",
                },
              })
            ),
            n.a.createElement(
              c.a,
              { in: i },
              n.a.createElement(
                "div",
                { id: "children" },
                n.a.createElement(
                  "div",
                  { className: "d-flex flex-column border-top-dashed" },
                  n.a.createElement(
                    "div",
                    { ref: o, className: "container-fluid" },
                    a
                  )
                )
              )
            )
          )
        );
      }
    },
    Znjz: function (e, t, a) {
      "use strict";
      var l = a("q1tI"),
        n = a.n(l),
        r = a("zM5D"),
        c = a("cWnB"),
        s = a("U5uR"),
        i = a("NIcq");
      a("txIU");
      t.a = function (e) {
        var t = e.children,
          a = e.callback,
          m = void 0 === a ? function () {} : a,
          o = e.disabled,
          u = void 0 === o || o,
          d = e.btnText,
          E = void 0 === d ? "ok" : d,
          p = Object(l.useContext)(s.a),
          b = p.SHOW_PLACEMENT_DIALOG,
          v = void 0 !== b && b,
          f = p.onOpenPlacementDialog,
          N = void 0 === f ? null : f;
        p.lang;
        return n.a.createElement(
          r.a,
          { size: "lg", id: "PlacementDialog", show: v, onHide: N },
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
              n.a.createElement(i.a, { size: "21px" })
            )
          ),
          n.a.createElement(r.a.Body, null, t),
          n.a.createElement(
            r.a.Footer,
            null,
            n.a.createElement(c.a, { onClick: m, size: "sm", disabled: u }, E)
          )
        );
      };
    },
    j0dn: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return m;
      });
      a("dRSK");
      var l = a("q1tI"),
        n = a.n(l),
        r = a("U5uR"),
        c = a("ma3e"),
        s = a("tjd4"),
        i = a("IdFE");
      function m(e) {
        var t = e.includeServises,
          a = void 0 === t ? [] : t,
          m = Object(l.useContext)(r.a).ROUTE_SERVISES,
          o = void 0 === m ? [] : m;
        Object(l.useMemo)(
          function () {
            return o.filter(function (e) {
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
          o.map(function (e, t) {
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
              5 == a && n.a.createElement(s.a, { size: "18" }),
              6 == a && n.a.createElement(i.a, { size: "18" }),
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
    uuXO: function (e, t, a) {
      "use strict";
      var l = a("q1tI"),
        n = a.n(l),
        r = a("QojX"),
        c = a("JI6e"),
        s = a("cWnB"),
        i = a("FNhl"),
        m = a("NIcq"),
        o = a("Wbzz");
      function u(e, t) {
        var a = e.language,
          u = void 0 === a ? "ru" : a,
          d = e.type;
        return "hor" != (void 0 === d ? null : d)
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
                      placeholder: i.ru.departure.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(m.j, null)
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
                      placeholder: i.ru.arrival.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(m.j, null)
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
                      placeholder: i.ru.date_departure.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(m.b, null)
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
                      placeholder: i.ru.date_arrival.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(m.b, null)
                    )
                  )
                ),
                n.a.createElement(
                  r.a.Group,
                  { controlId: "seats", className: "position-relative" },
                  n.a.createElement(r.a.Control, {
                    type: "text",
                    placeholder: i[u].seats.placeholder,
                  }),
                  n.a.createElement(
                    "span",
                    { className: "icon-inside" },
                    n.a.createElement(m.h, null)
                  )
                ),
                n.a.createElement(
                  o.Link,
                  { to: "/offers", className: "text-white" },
                  n.a.createElement(
                    s.a,
                    {
                      variant: "primary",
                      type: "submit",
                      className: "btn-block",
                    },
                    i[u].submit
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
                      placeholder: i.ru.departure.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(m.j, null)
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
                      placeholder: i.ru.arrival.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(m.j, null)
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
                      placeholder: i.ru.date_departure.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(m.b, null)
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
                      placeholder: i.ru.date_arrival.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(m.b, null)
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
                      placeholder: i[u].seats.placeholder,
                    }),
                    n.a.createElement(
                      "span",
                      { className: "icon-inside" },
                      n.a.createElement(m.h, null)
                    )
                  ),
                  n.a.createElement(
                    r.a.Group,
                    { className: "position-relative col-sm-6 col-lg" },
                    n.a.createElement(
                      o.Link,
                      { to: "/offers", className: "text-white" },
                      n.a.createElement(
                        s.a,
                        {
                          variant: "primary",
                          type: "submit",
                          className: "btn-block",
                        },
                        i[u].submit
                      )
                    )
                  )
                )
              )
            );
      }
      t.a = n.a.forwardRef(u);
    },
    ziO3: function (e, t, a) {},
  },
]);
//# sourceMappingURL=component---src-pages-offers-jsx-95663ec12d03f82dd766.js.map

(window.webpackJsonp = window.webpackJsonp || []).push([[0], { 104: function (t, o, i) { t.exports = i(125) }, 112: function (t, o, i) { }, 114: function (t, o, i) { }, 125: function (t, o, i) { "use strict"; i.r(o); var e = i(0), a = i.n(e), r = i(86), n = i.n(r), c = (i(112), i(91)), s = (i(114), i(117), i(142)), p = i(146), l = i(145), m = i(149), f = i(143), g = i(147), u = i(56); var h = function () { var t = Object(e.useState)("closest"), o = Object(c.a)(t, 2), i = o[0], r = o[1]; return a.a.createElement(s.a, { id: "main" }, a.a.createElement(p.a, { text: !0, id: "nav", key: "navigation" }, a.a.createElement(p.a.Item, { name: "github", href: "https://github.com/bifurcaria", target: "_blank" }), a.a.createElement(p.a.Item, { name: "linkedin", href: "https://www.linkedin.com/in/bifurcaria/", target: "_blank" }), a.a.createElement(p.a.Menu, { position: "right" }, a.a.createElement(l.a, { content: a.a.createElement("div", null, a.a.createElement("p", null, a.a.createElement("a", { href: "mailto:c.carlajm@gmail.com", target: "_blank" }, "c.carlajm@gmail.com")), a.a.createElement("p", null, a.a.createElement("a", { href: "https://wa.me/+56993106799", target: "_blank" }, "+569 9310 6799"))), on: "click", position: "bottom right", style: { border: "none", boxShadow: "none", textAlign: "end", padding: "0" }, basic: !0, pinned: !0, trigger: a.a.createElement(p.a.Item, { name: "Contact" }) }))), a.a.createElement(s.a, { key: "title" }, a.a.createElement(m.a, { size: "huge", textAlign: "left", style: { maxHeight: "1.1em", minHeight: "0" } }, "Carla J. Matus"), a.a.createElement("p", null, "Front-end Dev & Graphic Artist")), a.a.createElement(s.a, { key: "menu", style: { display: "flex", justifyContent: "flex-end", position: "sticky", top: "-1px" } }, a.a.createElement(p.a, { pointing: !0, secondary: !0, vertical: !0, attached: "bottom" }, u.length > 0 && u.map(function (t) { var o = t.name; return a.a.createElement(p.a.Item, { name: o, href: "#".concat(o), active: "name" === i, onClick: function () { return r("name") } }) }))), u.length > 0 && u.map(function (t) { var o = t.name, i = t.items; return a.a.createElement(s.a, { key: o }, a.a.createElement(f.a, { hidden: !0 }), a.a.createElement(m.a, { as: "h2", id: o }, o), i.map(function (t) { var o = t.desc, i = t.images, e = t.title; return a.a.createElement(s.a, { key: e, className: "jsoncontainer" }, a.a.createElement(m.a, { as: "h4" }, e), a.a.createElement(g.a.Group, { size: "medium" }, i.map(function (t) { return a.a.createElement(g.a, { key: t, src: t }) })), a.a.createElement("p", null, o), a.a.createElement(f.a, { hidden: !0 })) })) })) }, d = function (t) { t && t instanceof Function && i.e(1).then(i.bind(null, 144)).then(function (o) { var i = o.getCLS, e = o.getFID, a = o.getFCP, r = o.getLCP, n = o.getTTFB; i(t), e(t), a(t), r(t), n(t) }) }; n.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode, null, a.a.createElement(h, null))), d() }, 56: function (t) { t.exports = [{ name: "Dev", items: [{ title: "Burgerqueen", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-38.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-39.png"], desc: "Responsive application to take and manage restaurant orders from a tablet. Developed in JavaScript (ES6+) + React.js using Firebase and Semantic UI React. <a href="https://github.com/bifurcaria/SCL021-burger-queen">Repo here.</a> " }, { title: "/gggirls", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-06.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-07.png"], desc: "Single page application consisting of a social network where you can post and give likes. Built using JavaScript (ES6+), CSS and Firebase. Prototypes in Adobe Illustrator and Figma. Third project for cohort SCL021 of Laboratoria." }, { title: "Pong", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-32.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/ezgif-1-4c03648559.gif", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-34.png"], desc: "Implementation of a basic pong game in Processing v4.0b2. Written for Arduino UNO and controlled with a potentiometer. Mid-semester project done on one day as part of the AUD5i022-2022-1 course." }] }, { name: "Graphic", items: [{ title: "Illustration", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-15.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-16.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-17.png"], desc: "Personal work and editorial design. Using Adobe Illustrator, Photoshop and Blender 3D." }, { title: "Posters", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-12.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-13.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-14.png"], desc: "Posters designed for events, concerts and as college projects. Adobe Illustrator + Photoshop." }, { title: "Typography", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-36.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-35.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-37.png"], desc: "My first typeface. Project developed within the Proyecto V course and based on handmade store signs of downtown Santiago." }] }, { name: "Editorial", items: [{ title: "Laboratorio de lo posible", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-03.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-05.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-04.png"], desc: "Fanzine crafted during the Proyecto IV course. We had as a starting point the idea of utopia, in this case related to the multiple possibilities of literature." }, { title: "Las cosas van m\xe1s lento", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-27.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-28.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-29.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-31.png"], desc: "Plaquette. Printed and crafted as a part of the Proyecto V course. Collages and personal writings about the experience of studying, working, being tired and looking for a work-life balance." }] }, { name: "Bookbinding", items: [{ title: "Public domain books", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-18.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-19.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-20.png"], desc: "Printing + crafting public domain books on demand, with custom cover design and interiors." }, { title: "Small print runs", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-23.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-22.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-21.png"], desc: "Printing and production of small editions of books for independent organizations and self-published authors." }] }, { name: "Design studies", items: [{ title: "Composition exercises", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-08.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-09.png"], desc: "Visual composition exercises using different techniques such as collage, ink, embroidery and digital editing in photoshop." }, { title: "3d modeling", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio_Mesa de trabajo 1.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-02.png"], desc: "Creation of implements for different users. research, prototyping and 3D modeling using Blender. For the course Proyecto III." }, { title: "Process + prototyping", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-10.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio-11.png"], desc: "Studies on processes and prototyping, both graphic and web. Two semesters." }] }, { name: "Science/bio studies", items: [{ title: "Passive detection threshold of Limonene in WT and FMR mice", images: ["https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio_Mesa de trabajo 1-41.png", "https://raw.githubusercontent.com/bifurcaria/portfolio/main/src/imgportafolio/portafolio_Mesa de trabajo 1-40.png"], desc: "Studies of behavior and data management in MATLAB and GraphPad. Cellular Physiology Laboratory." }] }] } }, [[104, 3, 2]]]);
//# sourceMappingURL=main.82a50dce.chunk.js.map
import{a as r,b as n,c as s}from"./is.202406102048.js";function o(t){return t==null?!0:r(t)||n(t)?t.length===0:t instanceof Map||t instanceof Set?t.size===0:s(t)?Object.keys(t).length===0:!1}function u(t){return/^(?:(?:\+|00)86)?1\d{10}$/.test(t)}function c(t){return/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,25}$/.test(t)}function f(t,e){return Object.is(t,e)}export{c as a,f as b,o as c,u as i};

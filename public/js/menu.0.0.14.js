!function(e){function o(r){if(n[r])return n[r].exports;var c=n[r]={exports:{},id:r,loaded:!1};return e[r].call(c.exports,c,c.exports,o),c.loaded=!0,c.exports}var n={};return o.m=e,o.c=n,o.p="",o(0)}([function(e,o){"use strict";$(document).ready(function(){var e=$("#main-menu"),o=$(".hamburger"),n=5e3,r={open:!1,closeTimer:null};o.on("click",function(e){c(!r.open)}),e.on("click",function(o){return e.hasClass("closed")?(o.preventDefault(),!1):void 0});var c=function s(c){r.open=c,$(document).off("click.menuclose"),r.closeTimer&&(clearTimeout(r.closeTimer),r.closeTimer=null),r.open?(e.addClass("open"),o.addClass("cross black"),r.closeTimer=setTimeout(function(e){return s(!1)},n)):(e.removeClass("open"),o.removeClass("cross black"))}})}]);
"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[8137,4660],{204660:(e,t,n)=>{n.d(t,{$p:()=>l,PT:()=>p,U$:()=>d,Es:()=>m,kH:()=>w,AK:()=>g,Ae:()=>y});var r=n(496486),i=n(476154);function a(e,t,n,r,i,a,o){try{var c=e[a](o),u=c.value}catch(e){n(e);return}c.done?t(u):Promise.resolve(u).then(r,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function c(e){a(o,r,i,c,u,"next",e)}function u(e){a(o,r,i,c,u,"throw",e)}c(void 0)}))}}var c=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;(r=0,
i)&&(a=[2&a[0],i.value]);switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:!1};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}i[2]&&o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e];r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};function u(e){return new Promise((function(t){var n=new FileReader;n.onload=function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t("string"==typeof r?r:"")};n.readAsDataURL(e)}))}function h(e,t,n,r){var i=e.naturalWidth/e.width,a=t.width/2,o=t.height/2,c=(e.width/2-a-n.x)*i,u=(e.height/2-o-n.y)*i,h=t.width*i,l=t.height*i;return{x:c,y:u,scaledCropWidth:h,scaledCropHeight:l,
canvasWidth:Math.min(h,r.width),canvasHeight:Math.min(l,r.height)}}function l(e,t,n,r,i){return s.apply(this,arguments)}function s(){return(s=o((function(e,t,r,a,o){var l,s,p,d,f,m,w,g;return c(this,(function(c){switch(c.label){case 0:l=h(t,r,a,o),s=l.x,p=l.y,d=l.scaledCropWidth,f=l.scaledCropHeight;return[4,e.arrayBuffer()];case 1:m=c.sent();w=new Worker(new URL(n.p+n.u(44499),n.b));g=new Promise((function(e,t){w.onmessage=function(n){var r=n.data;if(r.type===i.u.CROP_GIF_COMPLETE){e(u(new Blob([r.result])));w.terminate()}else if(r.type===i.u.CROP_GIF_ERROR){t(new Error("Error cropping GIF"));w.terminate()}}}));w.postMessage({type:i.u.CROP_GIF_START,gif:new Uint8Array(m),x:0|s,y:0|p,width:0|d,height:0|f});return[2,{result:g,cancelFn:function(){return w.terminate()}}]}}))}))).apply(this,arguments)}function p(e,t,n,r){var i=h(e,t,n,r),a=i.x,o=i.y,c=i.scaledCropWidth,u=i.scaledCropHeight,l=i.canvasWidth,s=i.canvasHeight,p=document.createElement("canvas");p.width=l;p.height=s
;var d=p.getContext("2d");null!=d&&d.drawImage(e,a,o,c,u,0,0,p.width,p.height);return p.toDataURL("image/png")}function d(e,t,n){return{x:(0,r.clamp)(e,n.left,n.right),y:(0,r.clamp)(t,n.bottom,n.top)}}function f(e,t,n,r){var a=n,o=r;if(n>i.vJ){a=i.vJ;o=r*(i.vJ/n)}return n/r<e?{width:a,height:o}:{width:a*(t/o),height:t}}function m(e,t,n){switch(e){case i.pC.AVATAR:case i.pC.AVATAR_DECORATION:return{width:t,height:n};case i.pC.BANNER:return f(i.MY,i.qj,t,n);case i.pC.BANNER_V2:return f(i.U9,i.qj,t,n);case i.pC.GUILD_BANNER:return f(i.Ij,i.C5,t,n);case i.pC.VIDEO_BACKGROUND:return f(i.Ff,i.PB,t,n);case i.pC.SCHEDULED_EVENT_IMAGE:return f(i.ut,i.WV,t,n);case i.pC.HOME_HEADER:return f(i.sX,i.SW,t,n)}}function w(e,t,n){var r={top:0,bottom:0,left:0,right:0},i=e-n.width,a=t-n.height;if(0!==i){r.left=-Math.abs(i/2);r.right=i/2}if(0!==a){r.bottom=-Math.abs(a/2);r.top=a/2}return r}function g(e,t,n,r){switch(e){case i.pC.AVATAR:case i.pC.AVATAR_DECORATION:var a=Math.min(t,n);return{width:a,
height:a};case i.pC.BANNER:var o=Math.min(t,i.vJ);return{width:o,height:o*(1/i.MY)};case i.pC.BANNER_V2:var c=Math.min(t,i.vJ);return{width:c,height:c*(1/i.U9)};case i.pC.GUILD_BANNER:var u=Math.min(t,i.vJ);return{width:u,height:Math.min(u*(9/16),r)};case i.pC.VIDEO_BACKGROUND:var h=Math.min(t,i.vJ);return{width:h,height:h*(9/16)};case i.pC.SCHEDULED_EVENT_IMAGE:var l=Math.min(t,i.vJ);return{width:l,height:.4*l};case i.pC.HOME_HEADER:var s=Math.min(t,i.vJ);return{width:s,height:s*(1/i.sX)}}}function y(e,t,n){var r=e.naturalWidth/e.naturalHeight,i=t,a=n;e.naturalWidth>e.naturalHeight?i/=r:a*=r;var o={height:i,width:a};return p(e,{width:e.width,height:e.height},{x:0,y:0},o)}},546418:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(553494);const i=(0,r.B)({kind:"user",id:"2022-08_profiles_main_experiment",label:"Profiles Main Experiment",defaultConfig:{inProfileViewsExperiment:!1,inImprovedUpsellExperiment:!1,inThemesExperiment:!1},treatments:[{id:1,label:"Profile Views Experiment",config:{
inProfileViewsExperiment:!0,inImprovedUpsellExperiment:!1,inThemesExperiment:!1}},{id:2,label:"Profile Improved Upsell Experiment",config:{inProfileViewsExperiment:!1,inImprovedUpsellExperiment:!0,inThemesExperiment:!1}},{id:3,label:"Profile Themes Experiment",config:{inProfileViewsExperiment:!1,inImprovedUpsellExperiment:!1,inThemesExperiment:!0}}]});var a=(0,r.B)({kind:"user",id:"2022-06_profile_skins",label:"Profile Themes",defaultConfig:{canViewThemes:!1,canEditThemes:!1,canTryItOut:!1,canViewTryItOut:!1},treatments:[{id:1,label:"View and Edit Themes",config:{canViewThemes:!0,canEditThemes:!0,canTryItOut:!1,canViewTryItOut:!1}},{id:2,label:"View Only",config:{canViewThemes:!0,canEditThemes:!1,canTryItOut:!1,canViewTryItOut:!1}},{id:3,label:"View Only (edit later)",config:{canViewThemes:!0,canEditThemes:!1,canTryItOut:!1,canViewTryItOut:!1}},{id:4,label:"View and Edit Themes With Try It Out",config:{canViewThemes:!0,canEditThemes:!0,canTryItOut:!0,canViewTryItOut:!0}},{id:5,
label:"View and Edit Themes Without Try It Out",config:{canViewThemes:!0,canEditThemes:!0,canTryItOut:!1,canViewTryItOut:!0}},{id:100,label:"Everything (Development Bucket)",config:{canViewThemes:!0,canEditThemes:!0,canTryItOut:!0,canViewTryItOut:!0}}]});const o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=i.useExperiment({},{autoTrackExposure:e}).inThemesExperiment,n=a.useExperiment({},{autoTrackExposure:t&&e}),r=n.canViewThemes,o=n.canEditThemes,c=n.canTryItOut,u=n.canViewTryItOut;return{canViewThemes:r&&t,canEditThemes:o&&t,canTryItOut:c&&t,canViewTryItOut:u&&t}}},911016:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(785893),i=(n(667294),n(240243));function a(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function o(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){
var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++){n=a[r];t.indexOf(n)>=0||(i[n]=e[n])}return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++){n=a[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}}return i}function u(e){var t=e.width,n=void 0===t?24:t,u=e.height,h=void 0===u?24:u,l=e.color,s=void 0===l?"currentColor":l,p=e.foreground,d=c(e,["width","height","color","foreground"]);return(0,r.jsx)("svg",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
;"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){a(e,t,n[t])}))}return e}({},(0,i.Z)(d)),{width:n,height:h,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",className:p,d:"M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",fill:s})}))}}}]);
//# sourceMappingURL=a214168cb052923ad073.js.map
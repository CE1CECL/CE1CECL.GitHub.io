function t(o,s){for(const e in o){const r=o[e];if(r){if(e==="_errors"&&Array.isArray(r)){const n=r[0];return n?{field:s,error:n.message}:null}if(typeof r=="object")return t(r,e)}}return null}export{t as m};
//# sourceMappingURL=BDzl6LkRQpjGU2VD4La_.js.map

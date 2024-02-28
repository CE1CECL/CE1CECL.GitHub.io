import{q as v,o as y,R as h,j as m}from"./D1zPwdc9cyvUD_PRY_dc.js";import{m as g}from"./CAxxYDxWRWnBT0UF5a7x.js";import{b as x}from"./p91ReBh2MzHDYaH0T7ID.js";import{a as l}from"./DGKQDzYxD1Yh073TVjtD.js";import{I as E}from"./Zr3IUOdpzckDlmHgYvaT.js";const b=v.button`
	height: 45px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	outline: none;
	border: none;
	cursor: pointer;
`,L=v(E)`
	color: var(--text-secondary);
	&:hover {
		color: var(--text);
	}
`;let e;function A(r,n){e&&e.remove(),e=document.createElement("input"),e.accept="*",e.type="file",e.multiple=!0,e.style.display="none",e.addEventListener("change",async p=>{var i;const o=(i=p.currentTarget)==null?void 0:i.files;if(o){for(const d of o)if(d.size>l)return n();r(Array.from(o))}}),document.body.appendChild(e),e.click()}function T({append:r}){const n=()=>{g.push({type:"error",title:"File Too Large",error:`Max file size is ${x(l)}.`})},p=()=>{A(r,n)};return h.useEffect(()=>{function o(t){var c;const s=(c=t.clipboardData)==null?void 0:c.items;if(typeof s>"u")return;const a=[];for(const f of s)if(!f.type.startsWith("text/")){const u=f.getAsFile();if(u){if(u.size>l){n();continue}a.push(u)}}r(a)}function i(t){t.stopPropagation(),t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="copy")}function d(t){var a;t.preventDefault();const s=(a=t.dataTransfer)==null?void 0:a.files;if(s){const c=[];for(const f of s){if(f.size>l){n();continue}c.push(f)}r(c)}}return document.addEventListener("paste",o),document.addEventListener("dragover",i),document.addEventListener("drop",d),()=>{document.removeEventListener("paste",o),document.removeEventListener("dragover",i),document.removeEventListener("drop",d)}},[]),m.jsx(b,{onClick:p,children:m.jsx(L,{icon:"mdiPlusCircle",size:"24px"})})}const U=y(T);export{U as A};
//# sourceMappingURL=C-1YNxptbLeALDRTSwkt.js.map

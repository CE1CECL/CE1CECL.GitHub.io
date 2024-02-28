import{q as o,j as e}from"./D1zPwdc9cyvUD_PRY_dc.js";import{M as h}from"./ClW3pBdWUrkPBtn0jDG4.js";const r=o.div`
	display: flex;
	overflow: hidden;
	flex-direction: column;
	max-width: 90vw;
	max-height: 75vh;

	img {
		object-fit: contain;
	}
`;function m(t){const a=t.width??t.attachment.width??0,n=t.height??t.attachment.height??0;return e.jsx(h,{...t,transparent:!0,maxWidth:"100vw",maxHeight:"100vh",withoutCloseButton:!0,withEmptyActionBar:!0,children:e.jsx(r,{children:t.isVideo?e.jsx("video",{loop:!0,autoPlay:!0,onContextMenu:i=>{i.preventDefault(),i.stopPropagation()},children:e.jsx("source",{src:t.attachment.url})}):e.jsx("img",{src:t.attachment.url,width:a,height:n,loading:"eager"})})})}export{m as I};
//# sourceMappingURL=DoKG5kTOSyMgbpYzmlYc.js.map

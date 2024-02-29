import{q as t,o as c,j as e}from"./D1zPwdc9cyvUD_PRY_dc.js";import{u as p}from"./DdZuYVBDzIlP6vhxJUMJ.js";import{I as x}from"./Zr3IUOdpzckDlmHgYvaT.js";import{S as m}from"./MbBmzf-dpk3KXTJzo9g4.js";import{F as g}from"./ClqV65_mdlbHv2s_KAgz.js";import{F as h}from"./CCzAYYNz1X_4DEiLd9Lm.js";const b=t.button`
	margin: 0;
	padding: 0;
	background-color: inherit;
	border: none;
`,u=t(x)`
	color: ${i=>i.$active?"var(--text)":"var(--text-secondary)"};

	&:hover {
		color: ${i=>i.$active?"var(--text-secondary)":"var(--text)"};
		cursor: pointer;
	}
`,v=t(m)`
	background-color: var(--background-primary-alt);
`,f=t.div`
	display: flex;
	flex: 1 1 auto;
	align-items: center;
`,j=t.div`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
`,y=t.div`
	width: 1px;
	height: 16px;
	margin: 0 8px;
	background-color: var(--text-secondary);
`,w=t.div`
	display: flex;
	flex: 1 1 auto;
`,C=t.div`
	font-size: 14px;
	font-weight: var(--font-weight-regular);
	color: var(--text-secondary);
`,L=t.div`
	display: flex;
	flex-direction: row-reverse;
	// margin-right: 15%;

	// remove the temporary padding that moves it over the chat area on smaller screens where the member list is hidden
	@media (max-width: 1050px) {
		margin-right: auto;
	}
`,k=t.div`
	display: flex;
	flex: 0 0 208px;

	align-items: center;
	border-radius: 4px;
	background-color: var(--background-tertiary);
	margin-left: 8px; // to match the right padding from the main container
	padding: 0 8px;
	user-select: none;
	// cursor: text;
	cursor: not-allowed;
`,I=t.div`
	height: 24px;
	margin-left: 8px;
	flex: 0 0 auto;
`;function U({channel:i}){return e.jsx(w,{children:(i==null?void 0:i.topic)&&e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(C,{children:i.topic})]})})}function a({icon:i,active:r,ariaLabel:n,tooltip:o,disabled:s,color:d,onClick:l}){return e.jsx(g,{placement:"bottom",type:"tooltip",props:{content:e.jsx("span",{children:o})},children:e.jsx(h,{children:e.jsx(I,{children:e.jsx(b,{onClick:l,children:e.jsx(u,{$active:!s&&r,icon:i,size:"24px","aria-label":n,color:d})})})})})}function A({channel:i}){const{memberListVisible:r,toggleMemberList:n,updaterStore:o}=p();return e.jsx(v,{children:e.jsxs(f,{children:[e.jsxs(j,{children:["#",(i==null?void 0:i.name)??"ChannelName"]}),e.jsx(U,{channel:i}),e.jsxs(L,{children:[(o==null?void 0:o.checkingForUpdates)&&e.jsx(a,{icon:"mdiCloudSync",tooltip:"Checking for Updates",ariaLabel:"Checking for Updates",disabled:!0}),(o==null?void 0:o.updateAvailable)&&e.jsx(a,{icon:"mdiUpdate",tooltip:"Update Available",ariaLabel:"Upate Available",disabled:!0}),(o==null?void 0:o.updateDownloading)&&e.jsx(a,{icon:"mdiCloudDownload",tooltip:"Downloading Update",ariaLabel:"Downloading Update",disabled:!0}),(o==null?void 0:o.updateDownloaded)&&e.jsx(a,{icon:"mdiDownload",tooltip:"Update Ready!",ariaLabel:"Update Ready!",color:"var(--success)",onClick:()=>{o.quitAndInstall()}}),e.jsx(k,{children:e.jsx("span",{children:"Search"})}),e.jsx(a,{icon:"mdiInbox",tooltip:"Inbox",ariaLabel:"Inbox"}),e.jsx(a,{icon:"mdiAccountMultiple",tooltip:"Toggle Member List",ariaLabel:"Toggle Member List",active:r,onClick:n}),e.jsx(a,{icon:"mdiPin",tooltip:"Pinned Messages",ariaLabel:"Pinned Messages"}),e.jsx(a,{icon:"mdiBellBadge",tooltip:"Notification Settings",ariaLabel:"Notification Settings"})]})]})})}const W=c(A);export{W as C};
//# sourceMappingURL=C7IOnY_rjOF7aeJcjQ_y.js.map

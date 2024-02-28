import{q as t,a1 as g,a2 as f,a3 as k,a4 as j,j as e,a5 as v}from"./D1zPwdc9cyvUD_PRY_dc.js";import{m as i}from"./b0owNfGWmLHowwI-BriC.js";import"./czn82dGFARPvtXqYe_B-.js";import{u as w}from"./BITss_lCxr8k6CkeN0VZ.js";import{M as y}from"./ClW3pBdWUrkPBtn0jDG4.js";const z=t.p`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	color: var(--text-header-secondary);
	margin-top: 8px;
`,M=t.textarea`
	flex: 1;
	padding: 8px;
	border-radius: 4px;
	background-color: var(--background-secondary-alt);
	border: none;
	color: var(--text);
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	resize: none;
	outline: none;
`,R=g({reason:f().max(512,"Reason must be less than 512 characters")}).required();function T({target:o,...l}){var s,a;const c=w(),{register:d,control:S,handleSubmit:m,formState:{disabled:u,isLoading:p,isSubmitting:h}}=k({resolver:v(R)}),r=u||p||h,x=m(n=>{c.rest.delete(j.guildMember(o.guild.id,o.user.id),void 0,n.reason?{"X-Audit-Log-Reason":n.reason}:void 0).then(()=>{i.pop("close")}).catch(b=>{console.error(b)})});return e.jsx(y,{...l,title:`Kick ${(s=o.user)==null?void 0:s.username} from Guild`,description:e.jsxs(z,{children:["Are you sure you want to kick ",e.jsxs("b",{children:["@",(a=o.user)==null?void 0:a.username]})," from the guild? They will be able to rejoin again with a new invite."]}),actions:[{onClick:x,children:e.jsx("span",{children:"Kick"}),palette:"danger",confirmation:!0,disabled:r,size:"small"},{onClick:()=>i.pop("close"),children:e.jsx("span",{children:"Cancel"}),palette:"link",disabled:r,size:"small"}],children:e.jsx(M,{...d("reason"),id:"reason",name:"reason",placeholder:"Reason",maxLength:512})})}export{T as K};
//# sourceMappingURL=RmS16o9avy-jp3xRsRDN.js.map

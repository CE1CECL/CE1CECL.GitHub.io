import{j as e}from"./D1zPwdc9cyvUD_PRY_dc.js";import{m as l}from"./CAxxYDxWRWnBT0UF5a7x.js";import"./CMJJJf0adSnn5eTJQTgn.js";import{u as p}from"./DEKrkfWNVpi_Q5QzvrSJ.js";import{M as u}from"./CWIeiiYEYZuYCcPfuvLI.js";import{C as x,a as i,b as n}from"./Cn3RzYStAoW7SuBFIGnn.js";function j({message:t}){var o;const r=p();function s(){navigator.clipboard.writeText(t.content)}async function a(d){d.shiftKey?await t.delete():l.push({type:"delete_message",target:t})}function c(){navigator.clipboard.writeText(t.id)}return e.jsxs(x,{children:[e.jsx(i,{icon:"mdiReply",disabled:!0,children:"Reply"}),e.jsx(i,{icon:"mdiContentCopy",onClick:s,children:"Copy Raw Text"}),e.jsx(n,{}),(t.channel.hasPermission("MANAGE_MESSAGES")||t.author.id===((o=r.account)==null?void 0:o.id))&&t instanceof u&&e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:"mdiDelete",destructive:!0,onClick:a,children:"Delete Message"}),e.jsx(n,{})]}),e.jsx(i,{icon:"mdiIdentifier",onClick:c,iconProps:{style:{filter:"invert(100%)",background:"black",borderRadius:"4px"}},children:"Copy Message ID"})]})}export{j as M};
//# sourceMappingURL=J_nPRh-CjVuK7IYmxjlk.js.map
import{e as i,af as g,ag as x,ah as M,ai as d,aj as h,ak as P,al as w,am as O}from"./D1zPwdc9cyvUD_PRY_dc.js";import{C as R}from"./Ndjbquf65id_lk7ZCup6.js";import{C as U}from"./BAHs1gsMa4TOVkwItZ0C.js";import{G as X}from"./DTmvtY45v5udbJPlP2I7.js";import{M as Y}from"./J_nPRh-CjVuK7IYmxjlk.js";import{U as b}from"./CCjwiesevnOxBFxIY3JH.js";const S={user:b,message:Y,channel:R,channelMention:U,guild:X};function j(){const[o,e]=i.useState(!1),[a,n]=i.useState(null),s=g({placement:"right-start",strategy:"fixed",open:o&&a!==null,onOpenChange:e,whileElementsMounted:h,middleware:[P(5),w({fallbackPlacements:["left-start"]}),O({padding:8})]}),r=s.context,m=x(r,{role:"menu"}),f=M(r),l=d([f,m]),u=t=>{n(t),e(!0)},c=()=>{e(!1)};function p(t,C){t.preventDefault(),t.stopPropagation(),s.refs.setPositionReference({getBoundingClientRect(){return{width:0,height:0,x:t.clientX,y:t.clientY,top:t.clientY,right:t.clientX,bottom:t.clientY,left:t.clientX}}}),n(C),e(!0)}return i.useMemo(()=>({isOpen:o,props:a,setProps:n,open:u,close:c,onContextMenu:p,...l,...s}),[o,a,n,u,c,p,l,s])}export{S as C,j as u};
//# sourceMappingURL=w0AWBirgLuG8oXOkZKF5.js.map
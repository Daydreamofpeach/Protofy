(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3043],{13043:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var l=r(52322),o=r(2784),a=r(86152),s=r.n(a),i=r(29259),n=r.n(i),d=r(80537),p=r.n(d),_=r(85505),c=r.n(_),u=r(4335),b=r.n(u),x=r(62624),h=r(62022);function f(e,t,r,l,o){let{collapsedNodes:a}=l,s=e/r,i=a[s]||{};i[t]?delete i[t]:i[t]=!0,a[s]=i,o({...l,collapsedNodes:a})}function m(e,t,r,l){let{collapsedNodes:o}=l,a=e/r;return!!o&&!!o[a]&&o[a][t]}let v=o.memo(e=>{let{collapsible:t,toggleNodeCollapsed:r,isNodeCollapsed:o,state:a}=e;return t?(0,l.jsx)("div",{onClick:r,className:"  _ai-stretch _fd-column _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _cur-pointer  _o-0hover-0d0t846 _t-6d0t45px46 _o-0d0t146 _dsp-inline ",children:o()?(0,l.jsx)("div",{className:"  _ai-stretch _fd-column _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _t-3px _dsp-inline ",children:(0,l.jsx)(h.y,{size:"$1",color:"var(--color)"})}):(0,l.jsx)(x._,{size:"$1",color:"var(--color)"})}):null});r(92770);let g=(e,t,r,l)=>"".concat(e,"_").concat(r,"_").concat(t,"_").concat(l),y={root:{margin:5,fontSize:14,fontFamily:"monospace"},builtin:{color:"var(--color7)"},boolean:{color:"$yellow9"},text:{color:"var(--color9)"},number:{color:"$purple9"},property:{fontWeight:"bold",color:"var(--color7)"},collapseIcon:{cursor:"pointer"}};var j=r(36907),w=r(8939),C=r(84291),N=r(52026),k=r(95546);let $=e=>{let{onPress:t}=e;return(0,l.jsx)("div",{onClick:t,className:"  _ai-stretch _fd-column _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _w-936162306  _o-0hover-1 _o-0d0t446 _t-2px _dsp-inline ",children:(0,l.jsx)(k.r,{color:"var(--blue9)",size:14})})};r(40616);var L=r(60166),S=r(37357),z=r(83326),K=r(38276),T=r(57909),V=r(99981),E=r(86838),J=r(70396),F=o.memo(e=>{let[t,r]=o.useState(!1),{editable:a,marginLeft:s,value:i,type:n,isLastSibling:d,styles:p}=e,_=p.text;switch(n){case"number":_=p.number;break;case"boolean":_=p.boolean,i+="";break;case"property":_=p.property,i=""+i;break;case"builtin":_=p.builtin,i+="";break;default:_=p.text}let[c,u]=o.useState(i);i=null!=c?c:i;let b="builtin"!=n,x=/^\d+$/.test(e.currentKey),h="number"!=n?i.length+1:Math.abs(i).toString().length+1,f=x?23:"property"==n?27:5,m=[{defaultValue:"",display:"Text",value:"text",icon:(0,l.jsx)(z.D,{size:20,color:"var(--color7)"})},{defaultValue:0,display:"Number",value:"number",icon:(0,l.jsx)(S.K,{size:20,color:"var(--color7)"})},{defaultValue:!0,display:"Boolean",value:"boolean",icon:(0,l.jsx)(K.$,{size:20,color:"var(--color7)"})},{defaultValue:[],display:"List",value:"array",icon:(0,l.jsx)(T.S,{size:20,color:"var(--color7)"})},{defaultValue:{},display:"Object",value:"object",icon:(0,l.jsx)(V.J,{size:20,color:"var(--color7)"})}];return(0,l.jsxs)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _h-22px ",children:[a&&e.single&&b?(0,l.jsx)(N.Stack,{width:"min-content",marginLeft:11*s,children:(0,l.jsx)($,{onPress:()=>{e.onChange("delete",[...e.parents,e.currentKey],"","array")}})}):null,(0,l.jsx)("div",{className:"  _ai-stretch _dsp-flex _fd-column _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 ",children:"boolean"===n?(0,l.jsx)(j.rs,{left:"$4",top:"$1",size:"$1",disabled:!a,defaultChecked:"true"==c,onCheckedChange:t=>{e.onChange("update",[...e.parents,e.currentKey],t,n)},children:(0,l.jsx)(j.rs.Thumb,{backgroundColor:"$color9",animation:"bouncy"})}):(0,l.jsxs)(w.sL,{marginLeft:e.single&&b?0:10*s,children:[("property"==n||"builtin"==n&&x&&("["==i||"{"==i))&&a?(0,l.jsxs)("div",{className:"  _ai-stretch _fd-column _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _dsp-inline ",children:[(0,l.jsx)($,{onPress:()=>{"builtin"==e.childType||"builtin"==n&&x&&("["==i||"{"==i)?e.onChange("delete",[...e.parents],null,x?"array":n):e.onChange("delete",[...e.parents,e.currentKey])}}),"\xa0"]}):null,(0,l.jsx)(N.Text,{fontStyle:i||t?"normal":"italic",opacity:i||t?1:.5,borderRadius:b?"$3":0,padding:b?"$1":0,paddingHorizontal:"$2",onPress:()=>b?r(!t):null,cursor:"pointer",marginLeft:x&&!a&&"builtin"!=n?10*s:a&&"builtin"==n&&x&&("{"==i||"["==i)?-5:0,hoverStyle:{...b?{backgroundColor:"$backgroundHover"}:{}},..._,children:i||t?i:"property"==n?"property":"value"})]})}),t&&a?"boolean"===n?(0,l.jsx)(j.rs,{size:"$4",children:(0,l.jsx)(j.rs.Thumb,{animation:"bouncy"})}):(0,l.jsx)(w.sL,{position:"absolute",left:f+"px",marginLeft:10*s,backgroundColor:"$background",borderRadius:b?"$3":0,padding:"$1",top:-6,children:(0,l.jsxs)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 ",children:[(0,l.jsx)(C.II,{focusStyle:{borderColor:"transparent"},padding:b?"$1":0,value:c,borderColor:"transparent",borderWidth:0,borderRadius:b?"$3":0,paddingHorizontal:"$1",paddingRight:0,fontSize:"14px",maxHeight:"$2",width:h+("property"==n?1:5)+"ch",fontFamily:"monospace",onBlur:()=>e.onChange("update",[...e.parents,e.currentKey],c,n),onLayout:e=>{var t,r;return null===(r=e.nativeEvent)||void 0===r?void 0:null===(t=r.target)||void 0===t?void 0:t.focus()},onChangeText:e=>{let t,r;return u("number"==n?(r=(t=e.toString().replace(/,/g,".").replace(/[^0-9.]/g,"")).split(".")).length<=2?t:r.shift()+"."+r.join(""):e)},..._}),"property"!=n?(0,l.jsx)(w.sL,{marginLeft:-25,position:"absolute",top:5,left:h+4+"ch",children:(0,l.jsxs)(E.J2,{placement:"bottom",children:[(0,l.jsx)(E.J2.Trigger,{children:(0,l.jsx)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _cur-pointer ",children:(0,l.jsx)(L._,{size:"$1"})})}),(0,l.jsx)(E.J2.Content,{padding:0,space:0,top:"$2",children:(0,l.jsx)("div",{className:"  _ai-stretch _dsp-flex _fd-column _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _pt-1481558152 _pb-1481558152 ",children:m.map(t=>(0,l.jsxs)("div",{onClick:()=>{u(t.defaultValue),e.onChange("type",[...e.parents,e.currentKey],t.defaultValue,t.value)},className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0  _bg-0hover-513675900 _pr-1481558152 _pl-1481558152 _pt-4px _pb-4px _cur-pointer ",children:[(0,l.jsx)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _t-3px _mr-10px ",children:t.icon}),(0,l.jsx)("p",{className:"  is_Paragraph _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-10px _mb-3px _ml-0px _ff-299667014 _fow-233016140 _ls-167744059 _fos-229441220 _lh-222976573 _ussel-auto font_body ",children:(0,l.jsx)("span",{className:(0,J.concatClassName)(" _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px  _fos-13px  "+(n==t.value?" _col-137137640":" _col-549765356")),children:t.display})})]}))})})]})}):null]})}):null]})});r(62961);var A=o.memo(e=>{let{currentKey:t,marginLeft:r,type:a,value:s,isLastSibling:i,styles:n}=e,[d,p]=(0,o.useState)(!1),_=(t,r,l,o)=>("delete"==t&&(p(!0),e.onDelete&&e.onDelete()),e.onChange(t,r,l,o));return d?null:(0,l.jsxs)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-1 _fg-1 ",children:[(0,l.jsx)(F,{value:t,type:"property",childType:a,isLastSibling:i,marginLeft:r,styles:n,parents:e.parents,currentKey:t,onChange:_,editable:e.editable}),(0,l.jsx)(F,{value:s,type:a,isLastSibling:i,marginLeft:1,styles:n,parents:e.parents,currentKey:t,onChange:_,editable:e.editable})]},"label_and_value_".concat(t))});r(67664);var B=r(31268);let H=e=>{let{onAdd:t=()=>{}}=e;return(0,l.jsx)("div",{onClick:()=>{t()},className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0  _o-0hover-1 _o-0d0t246 ",children:(0,l.jsx)(B.X,{color:"var(--color9)",size:16})})};r(91461);let O="  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _w-936162306 ";var P=e=>{let t={data:{},marginLeftStep:2,collapsible:!1,collapsedNodes:{},styles:y,onChange:()=>{},editable:!1,compact:!1,defaultCollapsed:!1,...e},[r,a]=o.useState({data:{root:t.data},collapsedNodes:t.defaultCollapsed?{0:{root:!0}}:t.collapsedNodes}),i=(e,l,o,s)=>{if(!t.editable)return;let i=l.slice(1),n=JSON.parse(JSON.stringify(r.data)),d=n;console.log("action: ["+e+"]",l,o,s);for(let t=0;t<i.length;t++)t===i.length-1&&("update"==e?"property"==s?(d[o]=d[i[t]],delete d[i[t]]):d[i[t]]="number"==s?parseFloat(o):o:"delete"==e?"array"==s?(console.log("delete: ",i[t]),d.splice(i[t],1)):delete d[i[t]]:"add"==e?"property"==s?d[i[t]][""]="":"array"==s&&d[i[t]].push(""):"type"==e&&(d[i[t]]=o)),d=d[i[t]];a({...r,data:n}),t.onChange(n.root,l,o,s,e)},d=(e,a,s,n,d,p,_)=>{a=a+"_"+e;let{marginLeftStep:c}=t,u=[];if(p>0?u.push(j(e,a,"[",n,"builtin",p,!0),h(p,e,a)):u.push(C("[","builtin",p,!0,e,a),h(p,e,a)),m.call(void 0,p,e,c,r)&&u.push(C("]","builtin",0,_,e,a,!0)),d.push((0,l.jsx)("div",{className:O,children:u})),m.call(void 0,p,e,c,r))return;let b=_,f=[];for(let e=0;e<s.length;e++)_=e===s.length-1,x(e,a,s,f,p+c,_);t.editable&&f.push((0,l.jsx)(w.sL,{flex:1,marginBottom:"$3",marginLeft:24+10*p,children:(0,l.jsx)(H,{onAdd:()=>{i("add",[...a.split("_")],"","array")}})})),d.push(o.createElement(w.FA,{},[f])),d.push(C("]","builtin",p,b,e,a))},_=(e,a,s,n,d,p,_)=>{a=a+"_"+e;let{marginLeftStep:c}=t,u=[];if(p>0?u.push(j(e,a,"{",n,"builtin",p,!0),h(p,e,a)):u.push(C("{","builtin",p,!0,e,a),h(p,e,a)),m.call(void 0,p,e,c,r)&&u.push(C("}","builtin",0,_,e,a,!0)),d.push((0,l.jsx)("div",{className:O,children:u})),m.call(void 0,p,e,c,r))return;let b=Object.keys(s),f=0,v=_,g=[];b.forEach(e=>{x(e,a,s,g,p+c,_=++f===b.length)}),t.editable&&g.push((0,l.jsx)(w.sL,{flex:1,marginBottom:"$3",marginLeft:24+9.6*p,children:(0,l.jsx)(H,{onAdd:()=>{i("add",[...a.split("_")],"","property")}})})),d.push(o.createElement(w.FA,{},[g])),d.push(C("}","builtin",p,v,e,a))},u=e=>s()(e)?"array":n()(e)?"object":p()(e)?"number":c()(e)?"string":b()(e)?"boolean":"builtin",x=(e,t,r,l,o,a)=>{let s=r[e];switch(u(s)){case"array":d(e,t,s,r,l,o,a);break;case"object":_(e,t,s,r,l,o,a);break;case"number":l.push(j(e,t,s,r,"number",o,a));break;case"string":l.push(j(e,t,s,r,"text",o,a));break;case"boolean":l.push(j(e,t,s,r,"boolean",o,a));break;default:l.push(j(e,t,s,r,"builtin",o,a))}},h=(e,o,s)=>{let{collapsedNodes:i}=r,{collapsible:n,marginLeftStep:d}=t;return(0,l.jsx)("div",{className:"  _ai-stretch _dsp-flex _fd-row _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-0 _t--6px ",children:(0,l.jsx)(v,{collapsedNodes:i,marginLeft:e,collapsible:n,currentKey:o,isNodeCollapsed:m.bind(void 0,e,o,d,r),toggleNodeCollapsed:f.bind(void 0,e,o,d,r,a)})},g("collapse_and_remove",o,s,e))},j=(e,r,o,a,n,d,p)=>{let{styles:_}=t;return s()(a)?C(o,n,d,p,e,r):(0,l.jsx)(A,{currentKey:e,value:o,type:n,parent:a,marginLeft:d,isLastSibling:p,styles:_,parents:r.split("_"),onChange:i,editable:t.editable},g("label_and_value",e,r,d))},C=(e,r,o,a,s,n,d)=>{let{styles:p}=t;return(0,l.jsx)(F,{value:e,type:r,marginLeft:o,isLastSibling:a,styles:p,isCollasped:d,parents:n.split("_"),single:!0,currentKey:s,onChange:i,editable:t.editable},g("label",s+e,n,o))},N=[],{styles:k}=t;return x("root","",r.data,N,0,!0),(0,l.jsx)("div",{style:k.root,className:"  _ai-stretch _dsp-flex _fd-column _fb-auto _bxs-border-box _pos-relative _mih-0px _miw-0px _fs-1 _fg-1 ",children:N})};r(56502)},62961:function(){},56502:function(){},91461:function(){},67664:function(){},92770:function(){},40616:function(){}}]);
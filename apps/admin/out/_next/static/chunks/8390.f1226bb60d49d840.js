"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8390,9930],{9930:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var i=a(52322),l=a(3402),o=a(64509),r=a(2784),n=a(10729),s=a(92467),d=a(15729);let p=(0,s.Z)((e,t)=>({devicesList:{},electronicDevice:"mydevice",setElectronicDevice:t=>e((0,d.ZP)(e=>{e.electronicDevice=t})),setDevicesList:t=>e((0,d.ZP)(e=>{e.devicesList=t}))})),c=(e,t)=>e.find(e=>e.targetHandle==t||e.sourceHandle==t);var u=a(34406);let m=u.env.NEXT_PUBLIC_PROJECT_NAME;var b=e=>{let{componentName:t,type:a}=e,l=p(e=>e.electronicDevice),[o,n]=r.useState(!1);return r.useEffect(()=>{if(console.log("NODEBUS: subscribe attempt: ",o,l,a,t),!l||!a||!t)return;let e=v(l,a,t);e&&console.log("Subs NODEBUS topic: ",e)},[t,a,l]),(0,i.jsx)(i.Fragment,{})};let f=e=>e?e.replace(/['"]+/g,""):"",v=(e,t,a)=>e&&t&&a?"".concat(m,"/").concat(e,"/").concat(t,"/").concat(a,"/state"):null,h=[{id:"esp32dev",type:"ArrayLiteralExpression",check:(e,t)=>"ArrayLiteralExpression"==e.type&&'"esp32dev"'==t["element-1"],getComponent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{publish:o,data:s}=a,{id:d,type:u}=e,m=(0,r.useContext)(l.pN),b=m(e=>e.setNodeData);p(e=>e.electronicDevice);let f=(0,n.Mi)(),v=Array(34).fill(1).map((e,t)=>{if(9!=t&&14!=t&&13!=t&&15!=t&&21!=t&&33!=t&&28!=t)return"".concat(t+2,"-").concat(t>14?"l":"r","-").concat(t)});return console.log("DevicePositioning: ",v),t._devicePositioning||b(e.id,{...t,_devicePositioning:v}),console.log("NodeData: ",t),console.log("node: ",e),console.log("Calculanting: ",Object.keys(t).filter(e=>e.includes("element-")&&!e.includes("trivia"))),console.log("Boolean value: ",Object.keys(t).filter(e=>e.includes("element-")&&!e.includes("trivia")).length>35),(0,i.jsxs)(l.NB,{output:!1,skipCustom:!0,node:e,color:"#8FCAF9",isPreview:!d,title:"ESP32",id:d,margin:"200px",children:[(0,i.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px"},children:(0,i.jsx)("img",{src:"/admin/_next/static/media/esp32c4.9d0ad35f.png",style:{width:"100%"}})}),Array(34).fill(1).map((e,t)=>{if(9!=t&&14!=t&&13!=t&&15!=t&&21!=t&&33!=t&&28!=t){let e="".concat(d).concat(l.LL.data,"element-").concat(t+2);return(0,i.jsx)(n.HH,{isConnectable:!c(f,e),isValidConnection:e=>{let t=c(f,e.sourceHandle);return!t},type:"target",style:{position:"absolute",top:t>14?27.8*(t-15)+145.8+"px":27.8*t+257+"px",width:"17px",height:"17px",backgroundColor:c(f,e)?"#BA68C8":"white",marginLeft:t>14?"0px":"9px",marginRight:t>14?"9px":"0px",border:c(f,e)?"2px solid #BA68C8":"2px solid white"},position:t>14?n.Ly.Right:n.Ly.Left,id:e},t)}}),(0,i.jsx)(l.g1,{id:d,nodeData:t,type:"Component",style:{marginBottom:"20px"}})]})},getInitialData:()=>({to:'"esp32dev"'}),hidden:!0,nonDeletable:!0},{id:"Wifi",type:"CallExpression",check:(e,t)=>{var a;return"CallExpression"==e.type&&(null===(a=t.to)||void 0===a?void 0:a.startsWith("wifi"))},getComponent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&arguments[2],(0,i.jsx)(l.NB,{node:e,isPreview:!e.id,title:"Wifi",color:"#FFDF82",id:e.id,skipCustom:!0,disableInput:!0,disableOutput:!0,children:(0,i.jsx)(l.kz,{id:e.id,params:[{label:"SSID",field:"param1",type:"input",static:!0},{label:"Password",field:"param2",type:"input",static:!0},{label:"Power mode",field:"param3",type:"select",static:!0,data:['"none"','"light"','"high"']}]})})},getInitialData:()=>({to:"wifi",param1:'"SSID"',param2:'"PASSWORD"',param3:'"none"'})},{id:"Mqtt",type:"CallExpression",check:(e,t)=>{var a;return"CallExpression"==e.type&&(null===(a=t.to)||void 0===a?void 0:a.startsWith("mqtt"))},getComponent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&arguments[2],(0,i.jsx)(l.NB,{node:e,isPreview:!e.id,title:"Mqtt",color:"#FFDF82",id:e.id,skipCustom:!0,disableInput:!0,disableOutput:!0,children:(0,i.jsx)(l.kz,{id:e.id,params:[{label:"Broker",field:"param1",type:"input",static:!0}]})})},getInitialData:()=>({to:"mqtt",param1:'"BROKERADDRESS"',param2:'""'})},{id:"Relay",type:"CallExpression",check:(e,t)=>{var a;return"CallExpression"==e.type&&(null===(a=t.to)||void 0===a?void 0:a.startsWith("relay"))},getComponent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&arguments[2],(0,i.jsx)(l.NB,{node:e,isPreview:!e.id,title:"GPIO Switch",color:"#FFDF82",id:e.id,skipCustom:!0,disableInput:!0,disableOutput:!0,children:(0,i.jsx)(l.kz,{id:e.id,params:[{label:"Name",static:!0,field:"param1",type:"input"},{label:"Restore Mode",static:!0,field:"param2",type:"select",data:['"ALWAYS_ON"','"ALWAYS_OFF"']}]})})},getInitialData:()=>({to:"relay",param1:'""',param2:'"ALWAYS_OFF"'})},{id:"BinarySensor",type:"CallExpression",check:(e,t)=>{var a;return"CallExpression"==e.type&&(null===(a=t.to)||void 0===a?void 0:a.startsWith("binarySensor"))},getComponent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};arguments.length>2&&arguments[2];let[a,o]=r.useState(f(t.param1)),n=[{label:"Name",static:!0,field:"param1",type:"input",onBlur:()=>{o(f(t.param1))}}];return(0,i.jsxs)(l.NB,{node:e,isPreview:!e.id,title:"Button",color:"#A5D6A7",id:e.id,skipCustom:!0,children:[(0,i.jsx)(l.kz,{id:e.id,params:n}),(0,i.jsx)(b,{componentName:a,type:"binary_sensor"})]})},getInitialData:()=>({to:"binarySensor",param1:'""'})},{id:"NeopixelsBus",type:"CallExpression",check:(e,t)=>{var a;return"CallExpression"==e.type&&(null===(a=t.to)||void 0===a?void 0:a.startsWith("neopixelsBus"))},getComponent:function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};arguments.length>2&&arguments[2];let o=[{label:"Name",static:!0,field:"param1",type:"input"},{label:"#LEDS",static:!0,field:"param2",type:"input"},{label:"RGB Order",static:!0,field:"param3",type:"select",data:['"GRB"','"GBR"','"BGR"','"BRG"','"RGB"','"RBG"','"GRBW"','"GBRW"','"BGRW"','"BRGW"','"RGBW"','"RBGW"']},{label:"Chipset",static:!0,field:"param4",type:"select",data:['"800KBPS"','"400KBPS"','"400KBPS"','"WS2811"','"WS2812X"','"WS2812"','"SK6812"','"TM1814"','"TM1829"','"TM1914"','"APA106"','"LC8812"']},{label:"Restore Mode",static:!0,field:"param5",type:"select",data:['"RESTORE_DEFAULT_OFF"','"RESTORE_DEFAULT_ON"','"RESTORE_INVERTED_DEFAULT_OFF"','"RESTORE_INVERTED_DEFAULT_ON"','"RESTORE_AND_OFF"','"RESTORE_AND_ON"','"ALWAYS_OFF"','"ALWAYS_ON"']},{label:"Default transition",static:!0,field:"param6",type:"input",error:["s","ms"].includes(null===(e=a.param6)||void 0===e?void 0:e.replace(/['"0-9]+/g,""))?null:"Add units s/ms"},{label:"Channel",static:!0,field:"param7",type:"select",data:["0","1","2","3","4","5","6","7"]},{label:"Pulse",static:!0,field:"param8",type:"boolean"},{label:"Random",static:!0,field:"param9",type:"boolean"},{label:"Strobe",static:!0,field:"param10",type:"boolean"},{label:"Flicker",static:!0,field:"param11",type:"boolean"},{label:"Adressable Rainbow",static:!0,field:"param12",type:"boolean"},{label:"Adressable Color Wipe",static:!0,field:"param13",type:"boolean"},{label:"Adressable Scan",static:!0,field:"param14",type:"boolean"},{label:"Adressable Twinkle",static:!0,field:"param15",type:"boolean"},{label:"Adressable Random Twinkle",static:!0,field:"param16",type:"boolean"},{label:"Adressable Fireworks",static:!0,field:"param17",type:"boolean"},{label:"Adressable Flicker",static:!0,field:"param18",type:"boolean"}];return(0,i.jsx)(l.NB,{node:t,isPreview:!t.id,title:"Neopixels",color:"#C5E1A4",id:t.id,skipCustom:!0,disableInput:!0,disableOutput:!0,children:(0,i.jsx)(l.kz,{id:t.id,params:o})})},getInitialData:()=>({to:"neopixelsBus",param1:'""',param2:"16",param3:'"GRB"',param4:'"WS2811"',param5:'"ALWAYS_ON"',param6:'"1s"',param7:"0",param8:!1,param9:!1,param10:!1,param11:!1,param12:!1,param13:!1,param14:!1,param15:!1,param16:!1,param17:!1,param18:!1})},{id:"ADCSensor",type:"CallExpression",check:(e,t)=>{var a;return"CallExpression"==e.type&&(null===(a=t.to)||void 0===a?void 0:a.startsWith("adcSensor"))},getComponent:function(){var e,t;let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};arguments.length>2&&arguments[2];let[n,s]=r.useState(o.param1),d=[{label:"Name",static:!0,field:"param1",type:"input",onBlur:()=>{s(o.param1)},error:(null===(e=o.param1)||void 0===e?void 0:e.replace(/['"]+/g,""))=="adc"?"Reserved name":null},{label:"Update Interval",static:!0,field:"param2",type:"input",error:["h","m","s","ms"].includes(null===(t=o.param2)||void 0===t?void 0:t.replace(/['"0-9]+/g,""))?null:"Add units h/m/s/ms"},{label:"Attenuation",static:!0,field:"param3",type:"select",data:['"auto"','"0db"','"2.5db"','"6db"','"11db"']}];return(0,i.jsx)(l.NB,{node:a,isPreview:!a.id,title:"Analog Sensor",color:"#FFCC80",id:a.id,skipCustom:!0,children:(0,i.jsx)(l.kz,{id:a.id,params:d})})},getInitialData:()=>({to:"adcSensor",param1:'"analogic"',param2:'"30s"',param3:'"auto"'})}];var y=h.map(e=>({...e,capabilities:["esphome"]}));let g=[...y];var S=e=>{var t,a,n,s,d,p,c;let{mode:u="js",...m}=e,b=m.uiFlowId||"flows-editor",f=(0,l.Ar)(b),[v,h]=(0,r.useState)(m.content);return m.preload?(0,i.jsx)(i.Fragment,{}):(0,i.jsxs)(o.US,{children:[m.isModified?m.icons:null,(0,i.jsx)(f,{path:m.path,mode:(()=>{if(m.path){if(m.path.endsWith(".json"))return"json";if(m.path.endsWith("yml")||m.path.endsWith("yaml"))return"yaml"}return u})(),config:{masks:[],layers:[]},bgColor:null!==(t=m.bgColor)&&void 0!==t?t:"transparent",dataNotify:e=>{e.notifyId},themeMode:m.themeMode,disableDots:null!==(a=m.disableDots)&&void 0!==a&&a,customComponents:g,sourceCode:m.sourceCode,setSourceCode:m.setSourceCode,positions:[],getFirstNode:m.getFirstNode,onSave:m.onSave,onPlay:m.onPlay,hideBaseComponents:null!==(n=m.hideBaseComponents)&&void 0!==n&&n,disableSideBar:!0,disableStart:null!==(s=m.disableStart)&&void 0!==s&&s,onShowCode:m.onShowCode,onReload:m.onReload,display:!0,flowId:"flows-editor",onEdit:e=>{m.setIsModified&&m.setIsModified(!0),h(e),m.onEdit&&m.onEdit(e)},theme:null!==(d=m.theme)&&void 0!==d?d:{},disableMiniMap:!0,showActionsBar:null!==(p=m.showActionsBar)&&void 0!==p&&p,bridgeNode:null===(c=m.bridgeNode)||void 0===c||c},"flow")]})}},64509:function(e,t,a){t.Ic=t.US=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}return a.default=e,t&&t.set(e,a),a}(a(2784));function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function o(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let n=(0,i.createContext)({}),s=()=>{},d=()=>Math.random().toString(36).substr(2,9),p=(e,t,a={})=>t?e[t]:e||a,c=(e,t=s,a={})=>e.reduce((e,a)=>r({},e,{[a]:t(e,a)}),a),u=({data:e,topics:t,subs:a,callback:i=s})=>c(t,(e,t)=>r({},p(e,t),{[a[t]]:e=>i(t,e)}),p(e)),m=({data:e,topics:t,subs:a})=>c(t,(e,t)=>(function(e,t){if(null==e)return{};var a,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(l[a]=e[a]);return l})(p(e,t),[a[t]].map(o)),p(e)),b=({data:e,topic:t})=>{let a=p(e,t);return a?Object.values(a):(console.error(`[TOPICS] The "${t}" topic does not exist.`),[])},f=(0,i.memo)(e=>{let{componentProps:t,component:a,options:{topics:l=[]},topics:{_subscribe:o,_unsubscribe:n,publish:s}}=e,[d,p]=(0,i.useState)(c(l,()=>({})));return(0,i.useEffect)(()=>{if(0===l.length)return;let e=o(l,(e,t)=>p(a=>r({},a,{[e]:r({},a[e],t)})));return()=>n(e,l)},[]),a(r({},t,{topics:{data:d,publish:s}}))});t.US=e=>{let[t,a]=(0,i.useState)({});return i.default.createElement(n.Provider,{value:{topics:{_subscribe:(e,t)=>{let i=c(e,()=>d());return a(a=>u({data:a,topics:e,subs:i,callback:t})),i},_unsubscribe:(e,t)=>{a(a=>m({data:a,topics:t,subs:e}))},publish:(e,a={})=>{b({data:t,topic:e}).forEach(e=>e(a))}}}},e.children)},t.Ic=(e,t={})=>a=>i.default.createElement(n.Consumer,null,l=>i.default.createElement(f,r({options:t,component:e,componentProps:a},l)))}}]);
var h;h||(h=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},h),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,k="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l="",ha,ia,ja;
if(fa){var fs=require("fs"),ka=require("path");l=k?ka.dirname(l)+"/":__dirname+"/";ha=(a,b)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=h);
process.on("uncaughtException",function(a){if(!(a instanceof la))throw a;});if(15>process.version.match(/^v(\d+)\./)[1])process.on("unhandledRejection",function(a){throw a;});da=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof la||t("exiting due to exception: "+b);process.exit(a)};h.inspect=function(){return"[Emscripten Module object]"}}else if(ea||k)k?l=self.location.href:"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),l=0!==l.indexOf("blob:")?
l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ma=h.print||console.log.bind(console),t=h.printErr||console.warn.bind(console);Object.assign(h,aa);aa=null;h.arguments&&(ba=h.arguments);h.thisProgram&&(ca=h.thisProgram);h.quit&&(da=h.quit);var x;h.wasmBinary&&(x=h.wasmBinary);var noExitRuntime=h.noExitRuntime||!0;"object"!=typeof WebAssembly&&na("no native wasm support detected");var oa,pa=!1,qa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|g:(e&7)<<18|f<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function y(a,b){return a?ra(z,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var B,z,ta,ua,C,D,E,F;function va(){var a=oa.buffer;h.HEAP8=B=new Int8Array(a);h.HEAP16=ta=new Int16Array(a);h.HEAP32=C=new Int32Array(a);h.HEAPU8=z=new Uint8Array(a);h.HEAPU16=ua=new Uint16Array(a);h.HEAPU32=D=new Uint32Array(a);h.HEAPF32=E=new Float32Array(a);h.HEAPF64=F=new Float64Array(a)}var wa,xa=[],ya=[],za=[],Aa=[],Ba=[];
function Ca(){var a=h.preRun.shift();xa.unshift(a)}var G=0,Da=null,H=null;function na(a){if(h.onAbort)h.onAbort(a);a="Aborted("+a+")";t(a);pa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ea(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="v2a03r.wasm";if(!Ea()){var Fa=I;I=h.locateFile?h.locateFile(Fa,l):l+Fa}
function Ga(){var a=I;try{if(a==I&&x)return new Uint8Array(x);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){na(b)}}
function Ha(){if(!x&&(ea||k)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ga()});if(ia)return new Promise(function(a,b){ia(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ga()})}
function Ia(){var a=document.getElementById("picker"),b=a.files[0];a.value=null;console.log("--- load file:");console.log("  name: "+b.name);console.log("  type: "+b.type);console.log("  size: "+b.size);256E3>b.size?(a=new FileReader,a.onload=function(c){console.log("file loaded!");(c=c.target.result)?(console.log("content length: "+c.byteLength),c=new Uint8Array(c),0==Ja([b.name,c,c.length])&&console.warn("util_emsc_loadfile() failed!")):console.warn("load result empty!")},a.readAsArrayBuffer(b)):
console.warn("ignoring file because it is too big")}function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function Ka(a){for(;0<a.length;)a.shift()(h)}function La(a){var b=Ma();a();Na(b)}var Oa=0;function Pa(){for(var a=J.length-1;0<=a;--a)Qa(a);J=[];Ra=[]}var Ra=[];function Sa(){if(Oa&&Ta.tc)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.nd.apply(null,b.ad)}}var J=[];
function Qa(a){var b=J[a];b.target.removeEventListener(b.ic,b.Tc,b.kc);J.splice(a,1)}function K(a){function b(d){++Oa;Ta=a;Sa();a.mc(d);Sa();--Oa}if(a.lc)a.Tc=b,a.target.addEventListener(a.ic,b,a.kc),J.push(a),Ua||(Aa.push(Pa),Ua=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].ic==a.ic&&Qa(c--)}function Va(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ua,Ta,Wa,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function L(a){a=2<a?y(a):a;return cb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var eb=[];function M(a){var b=eb[a];b||(a>=eb.length&&(eb.length=a+1),eb[a]=b=wa.get(a));return b}
function fb(a,b,c,d,e,f){Wa||(Wa=N(256));a={target:L(a),ic:f,lc:d,mc:function(g=event){var n=g.target.id?g.target.id:"",p=Wa;A(Va(g.target),z,p+0,128);A(n,z,p+128,128);M(d)(e,p,b)&&g.preventDefault()},kc:c};K(a)}
function gb(a,b,c,d,e,f){Xa||(Xa=N(176));a={target:L(a),tc:!0,ic:f,lc:d,mc:function(g){var n=Xa;F[n>>3]=g.timeStamp;var p=n>>2;C[p+2]=g.location;C[p+3]=g.ctrlKey;C[p+4]=g.shiftKey;C[p+5]=g.altKey;C[p+6]=g.metaKey;C[p+7]=g.repeat;C[p+8]=g.charCode;C[p+9]=g.keyCode;C[p+10]=g.which;A(g.key||"",z,n+44,32);A(g.code||"",z,n+76,32);A(g.char||"",z,n+108,32);A(g.locale||"",z,n+140,32);M(d)(e,n,b)&&g.preventDefault()},kc:c};K(a)}
function hb(a,b,c){F[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;ta[2*a+20]=b.button;ta[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=db(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function O(a,b,c,d,e,f){Ya||(Ya=N(72));a=L(a);K({target:a,tc:"mousemove"!=f&&"mouseenter"!=f&&"mouseleave"!=f,ic:f,lc:d,mc:function(g=event){hb(Ya,g,a);M(d)(e,Ya,b)&&g.preventDefault()},kc:c})}function ib(a,b,c,d,e){Za||(Za=N(260));K({target:a,ic:e,lc:d,mc:function(f=event){var g=Za,n=document.pointerLockElement||document.rc||document.Hc||document.Gc;C[g>>2]=!!n;var p=n&&n.id?n.id:"";A(Va(n),z,g+4,128);A(p,z,g+132,128);M(d)(20,g,b)&&f.preventDefault()},kc:c})}
function jb(a,b,c,d,e){K({target:a,ic:e,lc:d,mc:function(f=event){M(d)(38,0,b)&&f.preventDefault()},kc:c})}function kb(a,b,c,d){$a||($a=N(36));a=L(a);K({target:a,ic:"resize",lc:d,mc:function(e=event){if(e.target==a){var f=document.body;if(f){var g=$a;C[g>>2]=e.detail;C[g+4>>2]=f.clientWidth;C[g+8>>2]=f.clientHeight;C[g+12>>2]=innerWidth;C[g+16>>2]=innerHeight;C[g+20>>2]=outerWidth;C[g+24>>2]=outerHeight;C[g+28>>2]=pageXOffset;C[g+32>>2]=pageYOffset;M(d)(10,g,b)&&e.preventDefault()}}},kc:c})}
function lb(a,b,c,d,e,f){ab||(ab=N(1696));a=L(a);K({target:a,tc:"touchstart"==f||"touchend"==f,ic:f,lc:d,mc:function(g){for(var n,p={},q=g.touches,r=0;r<q.length;++r)n=q[r],n.Fc=n.Jc=0,p[n.identifier]=n;for(r=0;r<g.changedTouches.length;++r)n=g.changedTouches[r],n.Fc=1,p[n.identifier]=n;for(r=0;r<g.targetTouches.length;++r)p[g.targetTouches[r].identifier].Jc=1;q=ab;F[q>>3]=g.timeStamp;var v=q>>2;C[v+3]=g.ctrlKey;C[v+4]=g.shiftKey;C[v+5]=g.altKey;C[v+6]=g.metaKey;v+=7;var Y=db(a),m=0;for(r in p)if(n=
p[r],C[v]=n.identifier,C[v+1]=n.screenX,C[v+2]=n.screenY,C[v+3]=n.clientX,C[v+4]=n.clientY,C[v+5]=n.pageX,C[v+6]=n.pageY,C[v+7]=n.Fc,C[v+8]=n.Jc,C[v+9]=n.clientX-Y.left,C[v+10]=n.clientY-Y.top,v+=13,31<++m)break;C[q+8>>2]=m;M(d)(e,q,b)&&g.preventDefault()},kc:c})}function mb(a,b,c,d,e,f){a={target:L(a),ic:f,lc:d,mc:function(g=event){M(d)(e,0,b)&&g.preventDefault()},kc:c};K(a)}
function nb(a,b,c,d){bb||(bb=N(104));K({target:a,tc:!0,ic:"wheel",lc:d,mc:function(e=event){var f=bb;hb(f,e,a);F[f+72>>3]=e.deltaX;F[f+80>>3]=e.deltaY;F[f+88>>3]=e.deltaZ;C[f+96>>2]=e.deltaMode;M(d)(9,f,b)&&e.preventDefault()},kc:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,f){b.drawArraysInstancedANGLE(c,d,e,f)},a.drawElementsInstanced=function(c,d,e,f,g){b.drawElementsInstancedANGLE(c,d,e,f,g)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function rb(a){a.cd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function sb(a){a.ed=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function tb(a){a.hd=a.getExtension("WEBGL_multi_draw")}var ub=1,vb=[],P=[],wb=[],xb=[],yb=[],Q=[],zb=[],Ab=[],Bb={},Cb=4;function R(a){Db||(Db=a)}function Eb(a){for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b}
function Fb(a,b){a.rc||(a.rc=a.getContext,a.getContext=function(d,e){e=a.rc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ic?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Gb(c,b):0}function Gb(a,b){var c=Eb(Ab),d={dd:c,attributes:b,version:b.Ic,zc:a};a.canvas&&(a.canvas.$c=d);Ab[c]=d;("undefined"==typeof b.Ec||b.Ec)&&Hb(d);return c}
function Hb(a){a||(a=T);if(!a.Vc){a.Vc=!0;var b=a.zc;ob(b);pb(b);qb(b);rb(b);sb(b);2<=a.version&&(b.Dc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Dc)b.Dc=b.getExtension("EXT_disjoint_timer_query");tb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Db,T,Ib=["default","low-power","high-performance"],Jb={};
function Lb(){if(!Mb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in Jb)void 0===Jb[b]?delete a[b]:a[b]=Jb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Mb=c}return Mb}var Mb,Nb=[null,[],[]];function Ob(a,b,c,d){for(var e=0;e<a;e++){var f=U[c](),g=f&&Eb(d);f?(f.name=g,d[g]=f):R(1282);C[b+4*e>>2]=g}}
function Pb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){R(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);t("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);t("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else R(1281)}
function Qb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Rb=[];function V(a){a-=5120;return 0==a?B:1==a?z:2==a?ta:4==a?C:6==a?E:5==a||28922==a||28520==a||30779==a||30782==a?D:ua}function Sb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Tb(a,b,c,d,e){a=V(a);var f=Sb(a),g=Cb;return a.subarray(e>>f,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<f)+g-1&-g)>>f)}
function W(a){var b=U.Sc;if(b){var c=b.sc[a];"number"==typeof c&&(b.sc[a]=c=U.getUniformLocation(b,b.Qc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Ub=[];function Vb(a){return 0===a%4&&(0!==a%100||0===a%400)}var Wb=[31,29,31,30,31,30,31,31,30,31,30,31],Xb=[31,28,31,30,31,30,31,31,30,31,30,31];function Yb(a){var b=Array(sa(a)+1);A(a,b,0,b.length);return b}
function Zb(a,b,c,d){function e(m,u,w){for(m="number"==typeof m?m.toString():m||"";m.length<u;)m=w[0]+m;return m}function f(m,u){return e(m,u,"0")}function g(m,u){function w(Kb){return 0>Kb?-1:0<Kb?1:0}var S;0===(S=w(m.getFullYear()-u.getFullYear()))&&0===(S=w(m.getMonth()-u.getMonth()))&&(S=w(m.getDate()-u.getDate()));return S}function n(m){switch(m.getDay()){case 0:return new Date(m.getFullYear()-1,11,29);case 1:return m;case 2:return new Date(m.getFullYear(),0,3);case 3:return new Date(m.getFullYear(),
0,2);case 4:return new Date(m.getFullYear(),0,1);case 5:return new Date(m.getFullYear()-1,11,31);case 6:return new Date(m.getFullYear()-1,11,30)}}function p(m){var u=m.pc;for(m=new Date((new Date(m.qc+1900,0,1)).getTime());0<u;){var w=m.getMonth(),S=(Vb(m.getFullYear())?Wb:Xb)[w];if(u>S-m.getDate())u-=S-m.getDate()+1,m.setDate(1),11>w?m.setMonth(w+1):(m.setMonth(0),m.setFullYear(m.getFullYear()+1));else{m.setDate(m.getDate()+u);break}}w=new Date(m.getFullYear()+1,0,4);u=n(new Date(m.getFullYear(),
0,4));w=n(w);return 0>=g(u,m)?0>=g(w,m)?m.getFullYear()+1:m.getFullYear():m.getFullYear()-1}var q=C[d+40>>2];d={Yc:C[d>>2],Xc:C[d+4>>2],xc:C[d+8>>2],Ac:C[d+12>>2],yc:C[d+16>>2],qc:C[d+20>>2],jc:C[d+24>>2],pc:C[d+28>>2],od:C[d+32>>2],Wc:C[d+36>>2],Zc:q?y(q):""};c=y(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d",
"%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Y="January February March April May June July August September October November December".split(" ");q={"%a":function(m){return v[m.jc].substring(0,3)},"%A":function(m){return v[m.jc]},"%b":function(m){return Y[m.yc].substring(0,3)},"%B":function(m){return Y[m.yc]},
"%C":function(m){return f((m.qc+1900)/100|0,2)},"%d":function(m){return f(m.Ac,2)},"%e":function(m){return e(m.Ac,2," ")},"%g":function(m){return p(m).toString().substring(2)},"%G":function(m){return p(m)},"%H":function(m){return f(m.xc,2)},"%I":function(m){m=m.xc;0==m?m=12:12<m&&(m-=12);return f(m,2)},"%j":function(m){for(var u=0,w=0;w<=m.yc-1;u+=(Vb(m.qc+1900)?Wb:Xb)[w++]);return f(m.Ac+u,3)},"%m":function(m){return f(m.yc+1,2)},"%M":function(m){return f(m.Xc,2)},"%n":function(){return"\n"},"%p":function(m){return 0<=
m.xc&&12>m.xc?"AM":"PM"},"%S":function(m){return f(m.Yc,2)},"%t":function(){return"\t"},"%u":function(m){return m.jc||7},"%U":function(m){return f(Math.floor((m.pc+7-m.jc)/7),2)},"%V":function(m){var u=Math.floor((m.pc+7-(m.jc+6)%7)/7);2>=(m.jc+371-m.pc-2)%7&&u++;if(u)53==u&&(w=(m.jc+371-m.pc)%7,4==w||3==w&&Vb(m.qc)||(u=1));else{u=52;var w=(m.jc+7-m.pc-1)%7;(4==w||5==w&&Vb(m.qc%400-1))&&u++}return f(u,2)},"%w":function(m){return m.jc},"%W":function(m){return f(Math.floor((m.pc+7-(m.jc+6)%7)/7),2)},
"%y":function(m){return(m.qc+1900).toString().substring(2)},"%Y":function(m){return m.qc+1900},"%z":function(m){m=m.Wc;var u=0<=m;m=Math.abs(m)/60;return(u?"+":"-")+String("0000"+(m/60*100+m%60)).slice(-4)},"%Z":function(m){return m.Zc},"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));c=c.replace(/\0\0/g,"%");r=Yb(c);if(r.length>b)return 0;B.set(r,a);return r.length-1}
function $b(a){if(!noExitRuntime){if(h.onExit)h.onExit(a);pa=!0}da(a,new la(a))}function ac(a){var b=sa(a)+1,c=bc(b);A(a,B,c,b);return c}
function Ja(a){var b=["string","array","number"],c={string:p=>{var q=0;if(null!==p&&void 0!==p&&0!==p){var r=(p.length<<2)+1;q=bc(r);A(p,z,q,r)}return q},array:p=>{var q=bc(p.length);B.set(p,q);return q}},d=h._util_emsc_loadfile,e=[],f=0;if(a)for(var g=0;g<a.length;g++){var n=c[b[g]];n?(0===f&&(f=Ma()),e[g]=n(a[g])):e[g]=a[g]}a=d.apply(null,e);return a=function(p){0!==f&&Na(f);return p}(a)}for(var U,Z=0;32>Z;++Z)Rb.push(Array(Z));var cc=new Float32Array(288);
for(Z=0;288>Z;++Z)X[Z]=cc.subarray(0,Z+1);var dc=new Int32Array(288);for(Z=0;288>Z;++Z)Ub[Z]=dc.subarray(0,Z+1);
var lc={ha:function(){return 0},kb:function(){return 0},lb:function(){},eb:function(){return!0},a:function(){na("")},Wa:function(a,b,c){a=y(a);for(var d="",e=0;e<c;e++)d+=String.fromCharCode(z[b+e]);console.log(btoa(d));b=document.createElement("a");b.setAttribute("href","data:application/octet-stream;base64,"+btoa(d));b.setAttribute("download",a);b.style.display="none";document.body.appendChild(b);b.click();document.body.removeChild(b)},z:function(a,b){a=y(a);b=y(b);var c=document.createElement("a");
c.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(b));c.setAttribute("download",a);c.style.display="none";document.body.appendChild(c);c.click();document.body.removeChild(c)},Sb:function(){h.emsc_js_onload=Ia},Rb:function(){return navigator.userAgent.includes("Macintosh")?1:0},Sa:function(){document.getElementById("picker").click()},Oa:function(a){a=y(a);window.open(a)},fb:function(){return Date.now()},ja:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||
1},na:function(a,b,c){a=L(a);if(!a)return-4;a=db(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},hb:function(a,b,c){z.copyWithin(a,b,b+c)},cb:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},gb:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,f=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var g=oa.buffer;try{oa.grow(f.call(e,2147483648,d)-g.byteLength+65535>>>16);
va();var n=1;break a}catch(p){}n=void 0}if(n)return!0}return!1},R:function(a,b,c,d){fb(a,b,c,d,12,"blur");return 0},ia:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){fb(a,b,c,d,13,"focus");return 0},$:function(a,b,c,d){gb(a,b,c,d,2,"keydown");return 0},Z:function(a,b,c,d){gb(a,b,c,d,1,"keypress");return 0},_:function(a,b,c,d){gb(a,b,c,d,3,"keyup");return 0},fa:function(a,b,c,d){O(a,b,c,d,5,"mousedown");return 0},ca:function(a,b,c,d){O(a,b,c,d,33,"mouseenter");
return 0},ba:function(a,b,c,d){O(a,b,c,d,34,"mouseleave");return 0},da:function(a,b,c,d){O(a,b,c,d,8,"mousemove");return 0},ea:function(a,b,c,d){O(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.rc||document.body.Hc||document.body.Gc))return-1;a=L(a);if(!a)return-4;ib(a,b,c,d,"pointerlockchange");ib(a,b,c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,d,"mspointerlockchange");return 0},T:function(a,
b,c,d){if(!document||!(document.body.requestPointerLock||document.body.rc||document.body.Hc||document.body.Gc))return-1;a=L(a);if(!a)return-4;jb(a,b,c,d,"pointerlockerror");jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return 0},Fb:function(a,b,c,d){kb(a,b,c,d);return 0},V:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},X:function(a,b,c,d){lb(a,b,c,d,24,"touchmove");return 0},
Y:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,d){mb(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){mb(a,b,c,d,32,"webglcontextrestored");return 0},aa:function(a,b,c,d){a=L(a);return"undefined"!=typeof a.onwheel?(nb(a,b,c,d),0):-1},Za:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+5],powerPreference:Ib[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],Ic:C[b+8],gd:C[b+
9],Ec:C[b+10],Uc:C[b+11],jd:C[b+12],kd:C[b+13]};a=L(a);return!a||b.Uc?0:Fb(a,b)},Xa:function(a,b){a=Ab[a];b=y(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(U);"OES_vertex_array_object"==b&&pb(U);"WEBGL_draw_buffers"==b&&qb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&rb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&sb(U);"WEBGL_multi_draw"==b&&tb(U);return!!a.zc.getExtension(b)},_a:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+
3]=C[a+4]=C[a+8]=C[a+10]=1},Ya:function(a){T=Ab[a];h.bd=U=T&&T.zc;return!a||U?0:-5},bb:function(a,b){var c=0;Lb().forEach(function(d,e){var f=b+c;e=D[a+4*e>>2]=f;for(f=0;f<d.length;++f)B[e++>>0]=d.charCodeAt(f);B[e>>0]=0;c+=d.length+1});return 0},db:function(a,b){var c=Lb();D[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});D[b>>2]=d;return 0},ga:function(){return 52},jb:function(){return 52},$a:function(){return 70},ib:function(a,b,c,d){for(var e=0,f=0;f<c;f++){var g=D[b>>2],n=D[b+4>>
2];b+=8;for(var p=0;p<n;p++){var q=z[g+p],r=Nb[a];0===q||10===q?((1===a?ma:t)(ra(r,0)),r.length=0):r.push(q)}e+=n}D[d>>2]=e;return 0},f:function(a){U.activeTexture(a)},A:function(a,b){U.attachShader(P[a],Q[b])},c:function(a,b){35051==a?U.Cc=b:35052==a&&(U.nc=b);U.bindBuffer(a,vb[b])},r:function(a,b){U.bindFramebuffer(a,wb[b])},za:function(a,b){U.bindRenderbuffer(a,xb[b])},b:function(a,b){U.bindTexture(a,yb[b])},L:function(a){U.bindVertexArray(zb[a])},G:function(a,b,c,d){U.blendColor(a,b,c,d)},H:function(a,
b){U.blendEquationSeparate(a,b)},I:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},pb:function(a,b,c,d,e,f,g,n,p,q){U.blitFramebuffer(a,b,c,d,e,f,g,n,p,q)},Ba:function(a,b,c,d){2<=T.version?c&&b?U.bufferData(a,z,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?z.subarray(c,c+b):b,d)},l:function(a,b,c,d){2<=T.version?c&&U.bufferSubData(a,b,z,d,c):U.bufferSubData(a,b,z.subarray(d,d+c))},Jb:function(a,b,c,d){U.clearBufferfi(a,b,c,d)},ma:function(a,b,c){U.clearBufferfv(a,b,E,c>>2)},Ib:function(a,b,c){U.clearBufferiv(a,
b,C,c>>2)},j:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},Mb:function(a){U.compileShader(Q[a])},wa:function(a,b,c,d,e,f,g,n){2<=T.version?U.nc||!g?U.compressedTexImage2D(a,b,c,d,e,f,g,n):U.compressedTexImage2D(a,b,c,d,e,f,z,n,g):U.compressedTexImage2D(a,b,c,d,e,f,n?z.subarray(n,n+g):null)},ua:function(a,b,c,d,e,f,g,n,p){U.nc?U.compressedTexImage3D(a,b,c,d,e,f,g,n,p):U.compressedTexImage3D(a,b,c,d,e,f,g,z,p,n)},sa:function(){var a=Eb(P),b=U.createProgram();b.name=a;b.wc=b.uc=b.vc=0;b.Bc=1;P[a]=
b;return a},Ob:function(a){var b=Eb(Q);Q[b]=U.createShader(a);return b},D:function(a){U.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=vb[d];e&&(U.deleteBuffer(e),e.name=0,vb[d]=null,d==U.Cc&&(U.Cc=0),d==U.nc&&(U.nc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=wb[d];e&&(U.deleteFramebuffer(e),e.name=0,wb[d]=null)}},x:function(a){if(a){var b=P[a];b?(U.deleteProgram(b),b.name=0,P[a]=null):R(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=xb[d];
e&&(U.deleteRenderbuffer(e),e.name=0,xb[d]=null)}},t:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):R(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=yb[d];e&&(U.deleteTexture(e),e.name=0,yb[d]=null)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];U.deleteVertexArray(zb[d]);zb[d]=null}},w:function(a){U.depthFunc(a)},v:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},K:function(a){U.disableVertexAttribArray(a)},rb:function(a,b,c){U.drawArrays(a,b,c)},
sb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},tb:function(a,b,c,d){U.drawElements(a,b,c,d)},ub:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},h:function(a){U.enable(a)},Eb:function(a){U.enableVertexAttribArray(a)},E:function(a){U.frontFace(a)},Ca:function(a,b){Ob(a,b,"createBuffer",vb)},Aa:function(a,b){Ob(a,b,"createRenderbuffer",xb)},xa:function(a,b){Ob(a,b,"createTexture",yb)},Ha:function(a,b){Ob(a,b,"createVertexArray",zb)},Kb:function(a,b){return U.getAttribLocation(P[a],y(b))},
d:function(a,b){Pb(a,b)},Pb:function(a,b,c,d){a=U.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,z,d,b):0;c&&(C[c>>2]=b)},qa:function(a,b,c){if(c)if(a>=ub)R(1281);else if(a=P[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.wc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.wc=Math.max(a.wc,U.getActiveUniform(a,b).name.length+1);C[c>>2]=a.wc}else if(35722==b){if(!a.uc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.uc=
Math.max(a.uc,U.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.uc}else if(35381==b){if(!a.vc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.vc=Math.max(a.vc,U.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.vc}else C[c>>2]=U.getProgramParameter(a,b);else R(1281)},Lb:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,z,d,b):0;c&&(C[c>>2]=b)},oa:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==
b?(a=U.getShaderSource(Q[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=U.getShaderParameter(Q[a],b):R(1281)},Ka:function(a,b){if(2>T.version)return R(1282),0;var c=Bb[a];if(c)return 0>b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=sa(d)+1,f=N(e);A(d,z,f,e);return f}),c=Bb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},s:function(a,b){b=y(b);if(a=P[a]){var c=a,d=c.sc,e=c.Rc,
f;if(!d)for(c.sc=d={},c.Qc={},f=0;f<U.getProgramParameter(c,35718);++f){var g=U.getActiveUniform(c,f);var n=g.name;g=g.size;var p=Qb(n);p=0<p?n.slice(0,p):n;var q=c.Bc;c.Bc+=g;e[p]=[g,q];for(n=0;n<g;++n)d[q]=n,c.Qc[q++]=p}c=a.sc;d=0;e=b;f=Qb(b);0<f&&(d=parseInt(b.slice(f+1))>>>0,e=b.slice(0,f));if((e=a.Rc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else R(1281);return-1},ob:function(a,b,c){for(var d=Rb[b],e=0;e<b;e++)d[e]=C[c+4*e>>2];U.invalidateFramebuffer(a,d)},ra:function(a){a=
P[a];U.linkProgram(a);a.sc=0;a.Rc={}},Ga:function(a,b){3317==a&&(Cb=b);U.pixelStorei(a,b)},F:function(a,b){U.polygonOffset(a,b)},qb:function(a){U.readBuffer(a)},ya:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},p:function(a,b,c,d){U.scissor(a,b,c,d)},Nb:function(a,b,c,d){for(var e="",f=0;f<b;++f){var g=d?C[d+4*f>>2]:-1;e+=y(C[c+4*f>>2],0>g?void 0:g)}U.shaderSource(Q[a],e)},Fa:function(a,b,c){U.stencilFunc(a,b,c)},la:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},u:function(a){U.stencilMask(a)},
Ea:function(a,b,c){U.stencilOp(a,b,c)},ka:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},va:function(a,b,c,d,e,f,g,n,p){if(2<=T.version)if(U.nc)U.texImage2D(a,b,c,d,e,f,g,n,p);else if(p){var q=V(n);U.texImage2D(a,b,c,d,e,f,g,n,q,p>>Sb(q))}else U.texImage2D(a,b,c,d,e,f,g,n,null);else U.texImage2D(a,b,c,d,e,f,g,n,p?Tb(n,g,d,e,p):null)},ta:function(a,b,c,d,e,f,g,n,p,q){if(U.nc)U.texImage3D(a,b,c,d,e,f,g,n,p,q);else if(q){var r=V(p);U.texImage3D(a,b,c,d,e,f,g,n,p,r,q>>Sb(r))}else U.texImage3D(a,b,c,
d,e,f,g,n,p,null)},B:function(a,b,c){U.texParameterf(a,b,c)},g:function(a,b,c){U.texParameteri(a,b,c)},nb:function(a,b,c,d,e,f,g,n,p){if(2<=T.version)if(U.nc)U.texSubImage2D(a,b,c,d,e,f,g,n,p);else if(p){var q=V(n);U.texSubImage2D(a,b,c,d,e,f,g,n,q,p>>Sb(q))}else U.texSubImage2D(a,b,c,d,e,f,g,n,null);else q=null,p&&(q=Tb(n,g,e,f,p)),U.texSubImage2D(a,b,c,d,e,f,g,n,q)},mb:function(a,b,c,d,e,f,g,n,p,q,r){if(U.nc)U.texSubImage3D(a,b,c,d,e,f,g,n,p,q,r);else if(r){var v=V(q);U.texSubImage3D(a,b,c,d,e,
f,g,n,p,q,v,r>>Sb(v))}else U.texSubImage3D(a,b,c,d,e,f,g,n,p,q,null)},Db:function(a,b,c){if(2<=T.version)b&&U.uniform1fv(W(a),E,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},pa:function(a,b){U.uniform1i(W(a),b)},zb:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Ub[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},Cb:function(a,b,c){if(2<=T.version)b&&
U.uniform2fv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},yb:function(a,b,c){if(2<=T.version)b&&U.uniform2iv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=Ub[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},Bb:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),E,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=
3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},xb:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Ub[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},Ab:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),E,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=E;c>>=2;for(var f=0;f<4*b;f+=4){var g=c+f;
d[f]=e[g];d[f+1]=e[g+1];d[f+2]=e[g+2];d[f+3]=e[g+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},wb:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),C,c>>2,4*b);else{if(72>=b)for(var d=Ub[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},vb:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],f=E;d>>=2;for(var g=
0;g<16*b;g+=16){var n=d+g;e[g]=f[n];e[g+1]=f[n+1];e[g+2]=f[n+2];e[g+3]=f[n+3];e[g+4]=f[n+4];e[g+5]=f[n+5];e[g+6]=f[n+6];e[g+7]=f[n+7];e[g+8]=f[n+8];e[g+9]=f[n+9];e[g+10]=f[n+10];e[g+11]=f[n+11];e[g+12]=f[n+12];e[g+13]=f[n+13];e[g+14]=f[n+14];e[g+15]=f[n+15]}}else e=E.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=P[a];U.useProgram(a);U.Sc=a},Gb:function(a,b){U.vertexAttribDivisor(a,b)},Hb:function(a,b,c,d,e,f){U.vertexAttribPointer(a,b,c,!!d,e,f)},q:function(a,b,c,d){U.viewport(a,
b,c,d)},Va:function(){h.Kc=a=>{0!=ec()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.Kc)},Ua:function(){h.Pc=a=>{const b=a.clipboardData.getData("text");La(()=>{const c=ac(b);fc(c)})};window.addEventListener("paste",h.Pc)},Ta:function(a){h.ld=[];a=y(a);a=document.getElementById(a);h.Lc=b=>{b.stopPropagation();b.preventDefault()};h.Mc=b=>{b.stopPropagation();b.preventDefault()};h.Nc=b=>{b.stopPropagation();b.preventDefault()};h.Oc=b=>{b.stopPropagation();b.preventDefault();
const c=b.dataTransfer.files;h.md=c;gc(c.length);for(let d=0;d<c.length;d++)La(()=>{const e=ac(c[d].name);hc(d,e)});ic(b.clientX,b.clientY)};a.addEventListener("dragenter",h.Lc,!1);a.addEventListener("dragleave",h.Mc,!1);a.addEventListener("dragover",h.Nc,!1);a.addEventListener("drop",h.Oc,!1)},Ma:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize=
"none";a.addEventListener("focusout",function(){jc()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},Qb:function(a){a=y(a);h.oc=document.getElementById(a);h.oc||console.log("sokol_app.h: invalid target:"+a);h.oc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ra:function(){window.removeEventListener("beforeunload",h.Kc)},Qa:function(){window.removeEventListener("paste",h.Pc)},Pa:function(a){a=y(a);a=
document.getElementById(a);a.removeEventListener("dragenter",h.Lc);a.removeEventListener("dragleave",h.Mc);a.removeEventListener("dragover",h.Nc);a.removeEventListener("drop",h.Oc)},y:function(){h.oc&&h.oc.requestPointerLock&&h.oc.requestPointerLock()},O:function(a,b){if(h.oc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";
break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}h.oc.style.cursor=a}},La:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),f=e.createImageData(a,b);f.data.set(z.subarray(c,c+a*b*4));e.putImageData(f,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},
Na:function(a){a=y(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Da:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=
a.next()){const c=b.value[0],d=b.value[1];La(()=>{const e=ac(c),f=ac(d);kc(e,f)})}},J:function(){return navigator.userAgent.includes("Macintosh")?1:0},C:function(a,b){b=y(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}},ab:function(a,b,c,d){return Zb(a,b,c,d)}};
(function(){function a(e){h.asm=e.exports;oa=h.asm.Tb;va();wa=h.asm.ec;ya.unshift(h.asm.Ub);G--;h.monitorRunDependencies&&h.monitorRunDependencies(G);0==G&&(null!==Da&&(clearInterval(Da),Da=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Ha().then(function(f){return WebAssembly.instantiate(f,d)}).then(function(f){return f}).then(e,function(f){t("failed to asynchronously prepare wasm: "+f);na(f)})}var d={a:lc};G++;h.monitorRunDependencies&&h.monitorRunDependencies(G);if(h.instantiateWasm)try{return h.instantiateWasm(d,
a)}catch(e){return t("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!=typeof WebAssembly.instantiateStreaming||Ea()||I.startsWith("file://")||fa||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(f){t("wasm streaming compile failed: "+f);t("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
h._util_emsc_loadfile=function(){return(h._util_emsc_loadfile=h.asm.Vb).apply(null,arguments)};function N(){return(N=h.asm.Wb).apply(null,arguments)}
var jc=h.__sapp_emsc_notify_keyboard_hidden=function(){return(jc=h.__sapp_emsc_notify_keyboard_hidden=h.asm.Xb).apply(null,arguments)},fc=h.__sapp_emsc_onpaste=function(){return(fc=h.__sapp_emsc_onpaste=h.asm.Yb).apply(null,arguments)},ec=h.__sapp_html5_get_ask_leave_site=function(){return(ec=h.__sapp_html5_get_ask_leave_site=h.asm.Zb).apply(null,arguments)},gc=h.__sapp_emsc_begin_drop=function(){return(gc=h.__sapp_emsc_begin_drop=h.asm._b).apply(null,arguments)},hc=h.__sapp_emsc_drop=function(){return(hc=
h.__sapp_emsc_drop=h.asm.$b).apply(null,arguments)},ic=h.__sapp_emsc_end_drop=function(){return(ic=h.__sapp_emsc_end_drop=h.asm.ac).apply(null,arguments)};h.__sapp_emsc_invoke_fetch_cb=function(){return(h.__sapp_emsc_invoke_fetch_cb=h.asm.bc).apply(null,arguments)};var mc=h._main=function(){return(mc=h._main=h.asm.cc).apply(null,arguments)},kc=h.__sargs_add_kvp=function(){return(kc=h.__sargs_add_kvp=h.asm.dc).apply(null,arguments)};function Ma(){return(Ma=h.asm.fc).apply(null,arguments)}
function Na(){return(Na=h.asm.gc).apply(null,arguments)}function bc(){return(bc=h.asm.hc).apply(null,arguments)}h.___start_em_js=9359972;h.___stop_em_js=9368520;var nc;H=function oc(){nc||pc();nc||(H=oc)};function qc(a=[]){var b=mc;a.unshift(ca);var c=a.length,d=bc(4*(c+1)),e=d>>2;a.forEach(g=>{C[e++]=ac(g)});C[e]=0;try{var f=b(c,d);$b(f)}catch(g){g instanceof la||"unwind"==g||da(1,g)}}
function pc(){var a=ba;function b(){if(!nc&&(nc=!0,h.calledRun=!0,!pa)){Ka(ya);Ka(za);if(h.onRuntimeInitialized)h.onRuntimeInitialized();rc&&qc(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var c=h.postRun.shift();Ba.unshift(c)}Ka(Ba)}}if(!(0<G)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Ca();Ka(xa);0<G||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);b()},
1)):b())}}if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var rc=!0;h.noInitialRun&&(rc=!1);pc();

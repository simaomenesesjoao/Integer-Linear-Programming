const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browserAll-6am5i21i.js","assets/webworkerAll-D2XLYAxl.js","assets/Filter-BY737vEG.js","assets/WebGPURenderer-BoRboovo.js","assets/BufferResource-B1WK-7YA.js","assets/RenderTargetSystem-De3j3fFP.js","assets/WebGLRenderer-BG3UPJX5.js","assets/CanvasRenderer-BGh2PBxf.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Cc="182",xs={ROTATE:0,DOLLY:1,PAN:2},wm=0,xh=1,Tm=2,wo=1,Em=2,Ks=3,vi=0,Ke=1,In=2,Jn=0,ys=1,yh=2,vh=3,Sh=4,Am=5,Bi=100,Cm=101,Rm=102,Pm=103,Im=104,Dm=200,Lm=201,Um=202,Fm=203,fl=204,pl=205,Nm=206,Om=207,Bm=208,km=209,zm=210,Gm=211,Vm=212,Hm=213,Wm=214,ml=0,gl=1,_l=2,Ss=3,xl=4,yl=5,vl=6,Sl=7,Wd=0,Xm=1,Ym=2,Fn=0,Xd=1,Yd=2,qd=3,$d=4,jd=5,Zd=6,Kd=7,Jd=300,Wi=301,bs=302,bl=303,Ml=304,Wo=306,wl=1e3,Kn=1001,Tl=1002,Oe=1003,qm=1004,Dr=1005,ze=1006,sa=1007,zi=1008,an=1009,Qd=1010,tf=1011,hr=1012,Rc=1013,Bn=1014,Dn=1015,ni=1016,Pc=1017,Ic=1018,ur=1020,ef=35902,nf=35899,sf=1021,rf=1022,bn=1023,ii=1026,Gi=1027,of=1028,Dc=1029,Ms=1030,Lc=1031,Uc=1033,To=33776,Eo=33777,Ao=33778,Co=33779,El=35840,Al=35841,Cl=35842,Rl=35843,Pl=36196,Il=37492,Dl=37496,Ll=37488,Ul=37489,Fl=37490,Nl=37491,Ol=37808,Bl=37809,kl=37810,zl=37811,Gl=37812,Vl=37813,Hl=37814,Wl=37815,Xl=37816,Yl=37817,ql=37818,$l=37819,jl=37820,Zl=37821,Kl=36492,Jl=36494,Ql=36495,tc=36283,ec=36284,nc=36285,ic=36286,$m=3200,af=0,jm=1,gi="",fn="srgb",ws="srgb-linear",Uo="linear",re="srgb",ji=7680,bh=519,Zm=512,Km=513,Jm=514,Fc=515,Qm=516,tg=517,Nc=518,eg=519,Mh=35044,wh="300 es",Ln=2e3,Fo=2001;function lf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function No(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ng(){const n=No("canvas");return n.style.display="block",n}const Th={};function Eh(...n){const t="THREE."+n.shift();console.log(t,...n)}function Rt(...n){const t="THREE."+n.shift();console.warn(t,...n)}function Qt(...n){const t="THREE."+n.shift();console.error(t,...n)}function dr(...n){const t=n.join(" ");t in Th||(Th[t]=!0,Rt(...n))}function ig(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const ir=Math.PI/180,fr=180/Math.PI;function Is(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function Oc(n,t){return(n%t+t)%t}function sg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function rg(n,t,e){return n!==t?(e-n)/(t-n):0}function sr(n,t,e){return(1-e)*n+e*t}function og(n,t,e,i){return sr(n,t,1-Math.exp(-e*i))}function ag(n,t=1){return t-Math.abs(Oc(n,t*2)-t)}function lg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function cg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ug(n,t){return n+Math.random()*(t-n)}function dg(n){return n*(.5-Math.random())}function fg(n){n!==void 0&&(Ah=n);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pg(n){return n*ir}function mg(n){return n*fr}function gg(n){return(n&n-1)===0&&n!==0}function _g(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yg(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ds(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function We(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ch={DEG2RAD:ir,RAD2DEG:fr,generateUUID:Is,clamp:Yt,euclideanModulo:Oc,mapLinear:sg,inverseLerp:rg,lerp:sr,damp:og,pingpong:ag,smoothstep:lg,smootherstep:cg,randInt:hg,randFloat:ug,randFloatSpread:dg,seededRandom:fg,degToRad:pg,radToDeg:mg,isPowerOfTwo:gg,ceilPowerOfTwo:_g,floorPowerOfTwo:xg,setQuaternionFromProperEuler:yg,normalize:We,denormalize:ds};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ds{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a>=1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,a=Math.sin(a*v)/y,l=l*p+f*a,c=c*p+d*a,h=h*p+g*a,u=u*p+_*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+g*a,u=u*p+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new D,Rh=new Ds;class Ot{constructor(t,e,i,s,r,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],x=s[7],w=s[2],S=s[5],E=s[8];return r[0]=o*_+a*v+l*w,r[3]=o*m+a*y+l*S,r[6]=o*p+a*x+l*E,r[1]=c*_+h*v+u*w,r[4]=c*m+h*y+u*S,r[7]=c*p+h*x+u*E,r[2]=f*_+d*v+g*w,r[5]=f*m+d*y+g*S,r[8]=f*p+d*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Ot,Ph=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vg(){const n={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?Uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ws]:{primaries:t,whitePoint:i,transfer:Uo,toXYZ:Ph,fromXYZ:Ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:i,transfer:re,toXYZ:Ph,fromXYZ:Ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const Zt=vg();function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class Sg{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zi===void 0&&(Zi=No("canvas")),Zi.width=t.width,Zi.height=t.height;const s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Zi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=No("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qn(e[i]/255)*255):e[i]=Qn(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bg=0;class Bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(aa(s[o].image)):r.push(aa(s[o]))}else r=aa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}let Mg=0;const la=new D;let wn=class Ro extends qi{constructor(t=Ro.DEFAULT_IMAGE,e=Ro.DEFAULT_MAPPING,i=Kn,s=Kn,r=ze,o=zi,a=bn,l=an,c=Ro.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Is(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(la).x}get height(){return this.source.getSize(la).y}get depth(){return this.source.getSize(la).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wl:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wl:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Jd;wn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(d+1)/2,w=(p+1)/2,S=(h+f)/4,E=(u+_)/4,P=(g+m)/4;return y>x&&y>w?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=S/i,r=E/i):x>w?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=P/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=E/r,s=P/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wg extends qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new wn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends wg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class cf extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tg extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Ur.subVectors(this.max,Ns),Ki.subVectors(t.a,Ns),Ji.subVectors(t.b,Ns),Qi.subVectors(t.c,Ns),ai.subVectors(Ji,Ki),li.subVectors(Qi,Ji),wi.subVectors(Ki,Qi);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-wi.z,wi.y,ai.z,0,-ai.x,li.z,0,-li.x,wi.z,0,-wi.x,-ai.y,ai.x,0,-li.y,li.x,0,-wi.y,wi.x,0];return!ca(e,Ki,Ji,Qi,Ur)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,Ki,Ji,Qi,Ur))?!1:(Fr.crossVectors(ai,li),e=[Fr.x,Fr.y,Fr.z],ca(e,Ki,Ji,Qi,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hn=[new D,new D,new D,new D,new D,new D,new D,new D],gn=new D,Lr=new Er,Ki=new D,Ji=new D,Qi=new D,ai=new D,li=new D,wi=new D,Ns=new D,Ur=new D,Fr=new D,Ti=new D;function ca(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ti.fromArray(n,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=i.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Eg=new Er,Os=new D,ha=new D;class Xo{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Eg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(ha)),this.expandByPoint(Os.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Wn=new D,ua=new D,Nr=new D,ci=new D,da=new D,Or=new D,fa=new D;class hf{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ua.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(ua);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Nr),a=ci.dot(this.direction),l=-ci.dot(Nr),c=ci.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ua).addScaledVector(Nr,f),d}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,i,s,r){da.subVectors(e,t),Or.subVectors(i,t),fa.crossVectors(da,Or);let o=this.direction.dot(fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);const l=a*this.direction.dot(Or.crossVectors(ci,Or));if(l<0)return null;const c=a*this.direction.dot(da.cross(ci));if(c<0||l+c>o)return null;const h=-a*ci.dot(fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ag,t,Cg)}lookAt(t,e,i){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),hi.crossVectors(i,nn),hi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),hi.crossVectors(i,nn)),hi.normalize(),Br.crossVectors(nn,hi),s[0]=hi.x,s[4]=Br.x,s[8]=nn.x,s[1]=hi.y,s[5]=Br.y,s[9]=nn.y,s[2]=hi.z,s[6]=Br.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],y=i[7],x=i[11],w=i[15],S=s[0],E=s[4],P=s[8],b=s[12],T=s[1],C=s[5],U=s[9],F=s[13],B=s[2],W=s[6],I=s[10],L=s[14],V=s[3],H=s[7],K=s[11],tt=s[15];return r[0]=o*S+a*T+l*B+c*V,r[4]=o*E+a*C+l*W+c*H,r[8]=o*P+a*U+l*I+c*K,r[12]=o*b+a*F+l*L+c*tt,r[1]=h*S+u*T+f*B+d*V,r[5]=h*E+u*C+f*W+d*H,r[9]=h*P+u*U+f*I+d*K,r[13]=h*b+u*F+f*L+d*tt,r[2]=g*S+_*T+m*B+p*V,r[6]=g*E+_*C+m*W+p*H,r[10]=g*P+_*U+m*I+p*K,r[14]=g*b+_*F+m*L+p*tt,r[3]=v*S+y*T+x*B+w*V,r[7]=v*E+y*C+x*W+w*H,r[11]=v*P+y*U+x*I+w*K,r[15]=v*b+y*F+x*L+w*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15],v=l*d-c*f,y=a*d-c*u,x=a*f-l*u,w=o*d-c*h,S=o*f-l*h,E=o*u-a*h;return e*(_*v-m*y+p*x)-i*(g*v-m*w+p*S)+s*(g*y-_*w+p*E)-r*(g*x-_*S+m*E)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,x=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,w=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,S=e*v+i*y+s*x+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return t[0]=v*E,t[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*E,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*E,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*E,t[4]=y*E,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*E,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*E,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*E,t[8]=x*E,t[9]=(g*u*r-h*_*r-g*i*d+e*_*d+h*i*p-e*u*p)*E,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*E,t[12]=w*E,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*m+e*u*m)*E,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=l*c,y=l*h,x=l*u,w=i.x,S=i.y,E=i.z;return s[0]=(1-(_+p))*w,s[1]=(d+x)*w,s[2]=(g-y)*w,s[3]=0,s[4]=(d-x)*S,s[5]=(1-(f+p))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+y)*E,s[9]=(m-v)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let r=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),_n.copy(this);const c=1/r,h=1/o,u=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ln,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Ln)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Fo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ln,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Ln)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Fo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ts=new D,_n=new pe,Ag=new D(0,0,0),Cg=new D(1,1,1),hi=new D,Br=new D,nn=new D,Dh=new pe,Lh=new Ds;class kn{constructor(t=0,e=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class uf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rg=0;const Uh=new D,es=new Ds,Xn=new pe,kr=new D,Bs=new D,Pg=new D,Ig=new Ds,Fh=new D(1,0,0),Nh=new D(0,1,0),Oh=new D(0,0,1),Bh={type:"added"},Dg={type:"removed"},ns={type:"childadded",child:null},pa={type:"childremoved",child:null};class Ve extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new D,e=new kn,i=new Ds,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ot}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Fh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?kr.copy(t):kr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Bs,kr,this.up):Xn.lookAt(kr,Bs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Xn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),ns.child=t,this.dispatchEvent(ns),ns.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dg),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Pg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new D(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new D,Yn=new D,ma=new D,qn=new D,is=new D,ss=new D,kh=new D,ga=new D,_a=new D,xa=new D,ya=new be,va=new be,Sa=new be;class Sn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){xn.subVectors(s,e),Yn.subVectors(i,e),ma.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(Yn),l=xn.dot(ma),c=Yn.dot(Yn),h=Yn.dot(ma),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ya.setScalar(0),va.setScalar(0),Sa.setScalar(0),ya.fromBufferAttribute(t,e),va.fromBufferAttribute(t,i),Sa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ya,r.x),o.addScaledVector(va,r.y),o.addScaledVector(Sa,r.z),o}static isFrontFacing(t,e,i,s){return xn.subVectors(i,e),Yn.subVectors(t,e),xn.cross(Yn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),xn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,i),ss.subVectors(r,i),ga.subVectors(t,i);const l=is.dot(ga),c=ss.dot(ga);if(l<=0&&c<=0)return e.copy(i);_a.subVectors(t,s);const h=is.dot(_a),u=ss.dot(_a);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(is,o);xa.subVectors(t,r);const d=is.dot(xa),g=ss.dot(xa);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ss,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return kh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(kh,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(is,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},zr={h:0,s:0,l:0};function ba(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}let jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Zt.workingColorSpace){if(t=Oc(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ba(o,r,t+1/3),this.g=ba(o,r,t),this.b=ba(o,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=fn){function i(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const i=df[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Zt.workingToColorSpace(ke.copy(this),t),Math.round(Yt(ke.r*255,0,255))*65536+Math.round(Yt(ke.g*255,0,255))*256+Math.round(Yt(ke.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=fn){Zt.workingToColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(zr);const i=sr(ui.h,zr.h,e),s=sr(ui.s,zr.s,e),r=sr(ui.l,zr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const ke=new jt;jt.NAMES=df;let Lg=0;class Ls extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=ys,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==pl&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kc extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new D,Gr=new Lt;let Ug=0;class On{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ug++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ds(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mh&&(t.usage=this.usage),t}}class ff extends On{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class pf extends On{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ce extends On{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Fg=0;const dn=new pe,Ma=new Ve,rs=new D,sn=new Er,ks=new Er,Le=new D;class Qe extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lf(t)?pf:ff)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(sn.min,ks.min),sn.expandByPoint(Le),Le.addVectors(sn.max,ks.max),sn.expandByPoint(Le)):(sn.expandByPoint(ks.min),sn.expandByPoint(ks.max))}sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),Le.add(rs)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new D,l[P]=new D;const c=new D,h=new D,u=new D,f=new Lt,d=new Lt,g=new Lt,_=new D,m=new D;function p(P,b,T){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,T),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[b].add(_),a[T].add(_),l[P].add(m),l[b].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,b=v.length;P<b;++P){const T=v[P],C=T.start,U=T.count;for(let F=C,B=C+U;F<B;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new D,x=new D,w=new D,S=new D;function E(P){w.fromBufferAttribute(s,P),S.copy(w);const b=a[P];y.copy(b),y.sub(w.multiplyScalar(w.dot(b))).normalize(),x.crossVectors(S,b);const C=x.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,b=v.length;P<b;++P){const T=v[P],C=T.start,U=T.count;for(let F=C,B=C+U;F<B;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new On(f,h,u)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new pe,Ei=new hf,Vr=new Xo,Gh=new D,Hr=new D,Wr=new D,Xr=new D,wa=new D,Yr=new D,Vh=new D,qr=new D;class ln extends Ve{constructor(t=new Qe,e=new kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(wa.fromBufferAttribute(u,t),o?Yr.addScaledVector(wa,h):Yr.addScaledVector(wa.sub(e),h))}e.add(Yr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Vr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Vr,Gh)===null||Ei.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(zh),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,w=y;x<w;x+=3){const S=a.getX(x),E=a.getX(x+1),P=a.getX(x+2);s=$r(this,p,t,i,c,h,u,S,E,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=$r(this,o,t,i,c,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,w=y;x<w;x+=3){const S=x,E=x+1,P=x+2;s=$r(this,p,t,i,c,h,u,S,E,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;s=$r(this,o,t,i,c,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ng(n,t,e,i,s,r,o,a){let l;if(t.side===Ke?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===vi,a),l===null)return null;qr.copy(a),qr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(qr);return c<e.near||c>e.far?null:{distance:c,point:qr.clone(),object:n}}function $r(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Hr),n.getVertexPosition(l,Wr),n.getVertexPosition(c,Xr);const h=Ng(n,t,e,i,Hr,Wr,Xr,Vh);if(h){const u=new D;Sn.getBarycoord(Vh,Hr,Wr,Xr,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,u,new Lt)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,u,new Lt)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};Sn.getNormal(Hr,Wr,Xr,f.normal),h.face=f,h.barycoord=u}return h}class Ar extends Qe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(_,m,p,v,y,x,w,S,E,P,b){const T=x/E,C=w/P,U=x/2,F=w/2,B=S/2,W=E+1,I=P+1;let L=0,V=0;const H=new D;for(let K=0;K<I;K++){const tt=K*C-F;for(let gt=0;gt<W;gt++){const yt=gt*T-U;H[_]=yt*v,H[m]=tt*y,H[p]=B,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[p]=S>0?1:-1,h.push(H.x,H.y,H.z),u.push(gt/E),u.push(1-K/P),L+=1}}for(let K=0;K<P;K++)for(let tt=0;tt<E;tt++){const gt=f+tt+W*K,yt=f+tt+W*(K+1),Ut=f+(tt+1)+W*(K+1),Xt=f+(tt+1)+W*K;l.push(gt,yt,Xt),l.push(yt,Ut,Xt),V+=6}a.addGroup(d,V,b),d+=V,f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Xe(n){const t={};for(let e=0;e<n.length;e++){const i=Ts(n[e]);for(const s in i)t[s]=i[s]}return t}function Og(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Bg={clone:Ts,merge:Xe};var kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Og(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class gf extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new D,Hh=new Lt,Wh=new Lt;class on extends gf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,Wh),e.subVectors(Wh,Hh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,as=1;class Gg extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(os,as,t,e);s.layers=this.layers,this.add(s);const r=new on(os,as,t,e);r.layers=this.layers,this.add(r);const o=new on(os,as,t,e);o.layers=this.layers,this.add(o);const a=new on(os,as,t,e);a.layers=this.layers,this.add(a);const l=new on(os,as,t,e);l.layers=this.layers,this.add(l);const c=new on(os,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _f extends wn{constructor(t=[],e=Wi,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xf extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _f(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ar(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:Jn});r.uniforms.tEquirect.value=e;const o=new ln(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=ze),new Gg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class jr extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vg={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new jr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Hg extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wg extends wn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Oe,h=Oe,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ea=new D,Xg=new D,Yg=new Ot;class mi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ea.subVectors(i,e).cross(Xg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ea),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yg.getNormalMatrix(t),s=this.coplanarPoint(Ea).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Xo,qg=new Lt(.5,.5),Zr=new D;class zc{constructor(t=new mi,e=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ln,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],y=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-o,d-h,p-g,w-v).normalize(),s[1].setComponents(c+o,d+h,p+g,w+v).normalize(),s[2].setComponents(c+a,d+u,p+_,w+y).normalize(),s[3].setComponents(c-a,d-u,p-_,w-y).normalize(),i)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,p-m,w-x).normalize();else if(s[4].setComponents(c-l,d-f,p-m,w-x).normalize(),e===Ln)s[5].setComponents(c+l,d+f,p+m,w+x).normalize();else if(e===Fo)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){Ai.center.set(0,0,0);const e=qg.distanceTo(t.center);return Ai.radius=.7071067811865476+e,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Zr.x=s.normal.x>0?t.max.x:t.min.x,Zr.y=s.normal.y>0?t.max.y:t.min.y,Zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yf extends Ls{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oo=new D,Bo=new D,Xh=new pe,zs=new hf,Kr=new Xo,Aa=new D,Yh=new D;class $g extends Ve{constructor(t=new Qe,e=new yf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Oo.fromBufferAttribute(e,s-1),Bo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Oo.distanceTo(Bo);t.setAttribute("lineDistance",new Ce(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Xh.copy(s).invert(),zs.copy(t.ray).applyMatrix4(Xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),v=h.getX(_+1),y=Jr(this,t,zs,l,p,v,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=Jr(this,t,zs,l,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Jr(this,t,zs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Jr(this,t,zs,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jr(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Oo.fromBufferAttribute(a,s),Bo.fromBufferAttribute(a,r),e.distanceSqToSegment(Oo,Bo,Aa,Yh)>i)return;Aa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Aa);if(!(c<t.near||c>t.far))return{distance:c,point:Yh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const qh=new D,$h=new D;class jg extends $g{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)qh.fromBufferAttribute(e,s),$h.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qh.distanceTo($h);t.setAttribute("lineDistance",new Ce(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pr extends wn{constructor(t,e,i=Bn,s,r,o,a=Oe,l=Oe,c,h=ii,u=1){if(h!==ii&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zg extends pr{constructor(t,e=Bn,i=Wi,s,r,o=Oe,a=Oe,l,c=ii){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vf extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gc extends Qe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(d,2));function v(){const x=new D,w=new D;let S=0;const E=(e-t)/i;for(let P=0;P<=r;P++){const b=[],T=P/r,C=T*(e-t)+t;for(let U=0;U<=s;U++){const F=U/s,B=F*l+a,W=Math.sin(B),I=Math.cos(B);w.x=C*W,w.y=-T*i+m,w.z=C*I,u.push(w.x,w.y,w.z),x.set(W,E,I).normalize(),f.push(x.x,x.y,x.z),d.push(F,1-T),b.push(g++)}_.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const T=_[b][P],C=_[b+1][P],U=_[b+1][P+1],F=_[b][P+1];(t>0||b!==0)&&(h.push(T,C,F),S+=3),(e>0||b!==r-1)&&(h.push(C,U,F),S+=3)}c.addGroup(p,S,0),p+=S}function y(x){const w=g,S=new Lt,E=new D;let P=0;const b=x===!0?t:e,T=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const B=U/s*l+a,W=Math.cos(B),I=Math.sin(B);E.x=b*I,E.y=m*T,E.z=b*W,u.push(E.x,E.y,E.z),f.push(0,T,0),S.x=W*.5+.5,S.y=I*.5*T+.5,d.push(S.x,S.y),g++}for(let U=0;U<s;U++){const F=w+U,B=C+U;x===!0?h.push(B,B+1,F):h.push(B+1,B,F),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}function Kg(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Sf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=n_(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let f=e;f<s;f+=e){const d=n[f],g=n[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return mr(r,o,e,a,l,c,0),o}function Sf(n,t,e,i,s){let r;if(s===f_(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=jh(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=jh(o/i|0,n[o],n[o+1],r);return r&&Es(r,r.next)&&(_r(r),r=r.next),r}function Xi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Es(e,e.next)||ge(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function mr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&a_(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Qg(n,i,s,r):Jg(n)){t.push(l.i,n.i,c.i),_r(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=t_(Xi(n),t),mr(n,t,e,i,s,r,2)):o===2&&e_(n,t,e,i,s,r):mr(Xi(n),t,e,i,s,r,1);break}}}function Jg(n){const t=n.prev,e=n,i=n.next;if(ge(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Js(s,a,r,l,o,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qg(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ge(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),p=sc(d,g,t,e,i),v=sc(_,m,t,e,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Js(a,h,l,u,c,f,y.x,y.y)&&ge(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Js(a,h,l,u,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Js(a,h,l,u,c,f,y.x,y.y)&&ge(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Js(a,h,l,u,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function t_(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Es(i,s)&&Mf(i,e,e.next,s)&&gr(i,s)&&gr(s,i)&&(t.push(i.i,e.i,s.i),_r(e),_r(e.next),e=n=s),e=e.next}while(e!==n);return Xi(e)}function e_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h_(o,a)){let l=wf(o,a);o=Xi(o,o.next),l=Xi(l,l.next),mr(o,t,e,i,s,r,0),mr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function n_(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Sf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(c_(c))}s.sort(i_);for(let r=0;r<s.length;r++)e=s_(s[r],e);return e}function i_(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function s_(n,t){const e=r_(n,t);if(!e)return t;const i=wf(e,n);return Xi(i,i.next),Xi(e,e.next)}function r_(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(Es(n,e))return e;do{if(Es(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&bf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const u=Math.abs(s-e.y)/(i-e.x);gr(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&o_(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function o_(n,t){return ge(n.prev,n,t.prev)<0&&ge(t.next,n,n.next)<0}function a_(n,t,e,i){let s=n;do s.z===0&&(s.z=sc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,l_(s)}function l_(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function sc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function c_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function bf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Js(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&bf(n,t,e,i,s,r,o,a)}function h_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!u_(n,t)&&(gr(n,t)&&gr(t,n)&&d_(n,t)&&(ge(n.prev,n,t.prev)||ge(n,t.prev,t))||Es(n,t)&&ge(n.prev,n,n.next)>0&&ge(t.prev,t,t.next)>0)}function ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Es(n,t){return n.x===t.x&&n.y===t.y}function Mf(n,t,e,i){const s=to(ge(n,t,e)),r=to(ge(n,t,i)),o=to(ge(e,i,n)),a=to(ge(e,i,t));return!!(s!==r&&o!==a||s===0&&Qr(n,e,t)||r===0&&Qr(n,i,t)||o===0&&Qr(e,n,i)||a===0&&Qr(e,t,i))}function Qr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function to(n){return n>0?1:n<0?-1:0}function u_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Mf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function gr(n,t){return ge(n.prev,n,n.next)<0?ge(n,t,n.next)>=0&&ge(n,n.prev,t)>=0:ge(n,t,n.prev)<0||ge(n,n.next,t)<0}function d_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function wf(n,t){const e=rc(n.i,n.x,n.y),i=rc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function jh(n,t,e,i){const s=rc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function f_(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class p_{static triangulate(t,e,i=2){return Kg(t,e,i)}}class Vc{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Vc.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Zh(t),Kh(i,t);let o=t.length;e.forEach(Zh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Kh(i,e[l]);const a=p_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Zh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Kh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Yo extends Qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let y=0;y<c;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,x=v+c*(p+1),w=v+1+c*(p+1),S=v+1+c*p;d.push(y,x,S),d.push(x,w,S)}this.setIndex(d),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.widthSegments,t.heightSegments)}}class qo extends Qe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const v=[],y=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){const S=w/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(S+x,1-y),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const y=h[p][v+1],x=h[p][v],w=h[p+1][v],S=h[p+1][v+1];(p!==0||o>0)&&d.push(y,x,S),(p!==i-1||l<Math.PI)&&d.push(x,w,S)}this.setIndex(d),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class m_ extends zn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ca extends Ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class g_ extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class __ extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Tf extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Ra=new pe,Jh=new D,Qh=new D;class x_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zc,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),Qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qh),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class y_ extends x_{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}}class v_ extends Tf{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new y_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ef extends gf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class S_ extends Tf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class b_ extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class M_ extends ln{constructor(t,e,i){const s=new qo(e,4,2),r=new kc({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class w_ extends jg{constructor(t=10,e=10,i=4473924,s=8947848){i=new jt(i),s=new jt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new Qe;h.setAttribute("position",new Ce(l,3)),h.setAttribute("color",new Ce(c,3));const u=new yf({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class T_ extends qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Rt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function tu(n,t,e,i){const s=E_(i);switch(e){case sf:return n*t;case of:return n*t/s.components*s.byteLength;case Dc:return n*t/s.components*s.byteLength;case Ms:return n*t*2/s.components*s.byteLength;case Lc:return n*t*2/s.components*s.byteLength;case rf:return n*t*3/s.components*s.byteLength;case bn:return n*t*4/s.components*s.byteLength;case Uc:return n*t*4/s.components*s.byteLength;case To:case Eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:case Rl:return Math.max(n,16)*Math.max(t,8)/4;case El:case Cl:return Math.max(n,8)*Math.max(t,8)/2;case Pl:case Il:case Ll:case Ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Dl:case Fl:case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case $l:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Kl:case Jl:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*16;case tc:case ec:return Math.ceil(n/4)*Math.ceil(t/4)*8;case nc:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function E_(n){switch(n){case an:case Qd:return{byteLength:1,components:1};case hr:case tf:case ni:return{byteLength:2,components:1};case Pc:case Ic:return{byteLength:2,components:4};case Bn:case Rc:case Dn:return{byteLength:4,components:1};case ef:case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);function Af(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function A_(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var C_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,G_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,K_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_x=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ex=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ax=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ox=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,F0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ry=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:C_,alphahash_pars_fragment:R_,alphamap_fragment:P_,alphamap_pars_fragment:I_,alphatest_fragment:D_,alphatest_pars_fragment:L_,aomap_fragment:U_,aomap_pars_fragment:F_,batching_pars_vertex:N_,batching_vertex:O_,begin_vertex:B_,beginnormal_vertex:k_,bsdfs:z_,iridescence_fragment:G_,bumpmap_pars_fragment:V_,clipping_planes_fragment:H_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:Y_,color_fragment:q_,color_pars_fragment:$_,color_pars_vertex:j_,color_vertex:Z_,common:K_,cube_uv_reflection_fragment:J_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:tx,displacementmap_vertex:ex,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:sx,colorspace_pars_fragment:rx,envmap_fragment:ox,envmap_common_pars_fragment:ax,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:vx,envmap_vertex:hx,fog_vertex:ux,fog_pars_vertex:dx,fog_fragment:fx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:_x,lights_lambert_pars_fragment:xx,lights_pars_begin:yx,lights_toon_fragment:Sx,lights_toon_pars_fragment:bx,lights_phong_fragment:Mx,lights_phong_pars_fragment:wx,lights_physical_fragment:Tx,lights_physical_pars_fragment:Ex,lights_fragment_begin:Ax,lights_fragment_maps:Cx,lights_fragment_end:Rx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Lx,map_fragment:Ux,map_pars_fragment:Fx,map_particle_fragment:Nx,map_particle_pars_fragment:Ox,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:kx,morphinstance_vertex:zx,morphcolor_vertex:Gx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Wx,normal_fragment_begin:Xx,normal_fragment_maps:Yx,normal_pars_fragment:qx,normal_pars_vertex:$x,normal_vertex:jx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:Jx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:r0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:x0,tonemapping_fragment:y0,tonemapping_pars_fragment:v0,transmission_fragment:S0,transmission_pars_fragment:b0,uv_pars_fragment:M0,uv_pars_vertex:w0,uv_vertex:T0,worldpos_vertex:E0,background_vert:A0,background_frag:C0,backgroundCube_vert:R0,backgroundCube_frag:P0,cube_vert:I0,cube_frag:D0,depth_vert:L0,depth_frag:U0,distance_vert:F0,distance_frag:N0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:k0,linedashed_frag:z0,meshbasic_vert:G0,meshbasic_frag:V0,meshlambert_vert:H0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:Y0,meshnormal_vert:q0,meshnormal_frag:$0,meshphong_vert:j0,meshphong_frag:Z0,meshphysical_vert:K0,meshphysical_frag:J0,meshtoon_vert:Q0,meshtoon_frag:ty,points_vert:ey,points_frag:ny,shadow_vert:iy,shadow_frag:sy,sprite_vert:ry,sprite_frag:oy},ct={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Pn={basic:{uniforms:Xe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Xe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Xe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Xe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Xe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Xe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Xe([ct.points,ct.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Xe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Xe([ct.common,ct.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Xe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Xe([ct.sprite,ct.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Xe([ct.common,ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Xe([ct.lights,ct.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Pn.physical={uniforms:Xe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const eo={r:0,b:0,g:0},Ci=new kn,ay=new pe;function ly(n,t,e,i,s,r,o){const a=new jt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const w=g(y);w===null?p(a,l):w&&w.isColor&&(p(w,1),x=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===Wo)?(h===void 0&&(h=new ln(new Ar(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Ts(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(x.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ay.makeRotationFromEuler(Ci)),h.material.toneMapped=Zt.getTransfer(w.colorSpace)!==re,(u!==w||f!==w.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ln(new Yo(2,2),new zn({name:"BackgroundMaterial",uniforms:Ts(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(w.colorSpace)!==re,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(eo,mf(n)),i.buffers.color.setClear(eo.r,eo.g,eo.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:v}}function cy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(T,C,U,F,B){let W=!1;const I=u(F,U,C);r!==I&&(r=I,c(r.object)),W=d(T,F,U,B),W&&g(T,F,U,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(T,C,U,F),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function u(T,C,U){const F=U.wireframe===!0;let B=i[T.id];B===void 0&&(B={},i[T.id]=B);let W=B[C.id];W===void 0&&(W={},B[C.id]=W);let I=W[F];return I===void 0&&(I=f(l()),W[F]=I),I}function f(T){const C=[],U=[],F=[];for(let B=0;B<e;B++)C[B]=0,U[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:F,object:T,attributes:{},index:null}}function d(T,C,U,F){const B=r.attributes,W=C.attributes;let I=0;const L=U.getAttributes();for(const V in L)if(L[V].location>=0){const K=B[V];let tt=W[V];if(tt===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(tt=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(tt=T.instanceColor)),K===void 0||K.attribute!==tt||tt&&K.data!==tt.data)return!0;I++}return r.attributesNum!==I||r.index!==F}function g(T,C,U,F){const B={},W=C.attributes;let I=0;const L=U.getAttributes();for(const V in L)if(L[V].location>=0){let K=W[V];K===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(K=T.instanceColor));const tt={};tt.attribute=K,K&&K.data&&(tt.data=K.data),B[V]=tt,I++}r.attributes=B,r.attributesNum=I,r.index=F}function _(){const T=r.newAttributes;for(let C=0,U=T.length;C<U;C++)T[C]=0}function m(T){p(T,0)}function p(T,C){const U=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;U[T]=1,F[T]===0&&(n.enableVertexAttribArray(T),F[T]=1),B[T]!==C&&(n.vertexAttribDivisor(T,C),B[T]=C)}function v(){const T=r.newAttributes,C=r.enabledAttributes;for(let U=0,F=C.length;U<F;U++)C[U]!==T[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function y(T,C,U,F,B,W,I){I===!0?n.vertexAttribIPointer(T,C,U,B,W):n.vertexAttribPointer(T,C,U,F,B,W)}function x(T,C,U,F){_();const B=F.attributes,W=U.getAttributes(),I=C.defaultAttributeValues;for(const L in W){const V=W[L];if(V.location>=0){let H=B[L];if(H===void 0&&(L==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),L==="instanceColor"&&T.instanceColor&&(H=T.instanceColor)),H!==void 0){const K=H.normalized,tt=H.itemSize,gt=t.get(H);if(gt===void 0)continue;const yt=gt.buffer,Ut=gt.type,Xt=gt.bytesPerElement,$=Ut===n.INT||Ut===n.UNSIGNED_INT||H.gpuType===Rc;if(H.isInterleavedBufferAttribute){const J=H.data,dt=J.stride,At=H.offset;if(J.isInstancedInterleavedBuffer){for(let pt=0;pt<V.locationSize;pt++)p(V.location+pt,J.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pt=0;pt<V.locationSize;pt++)m(V.location+pt);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let pt=0;pt<V.locationSize;pt++)y(V.location+pt,tt/V.locationSize,Ut,K,dt*Xt,(At+tt/V.locationSize*pt)*Xt,$)}else{if(H.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)p(V.location+J,H.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let J=0;J<V.locationSize;J++)m(V.location+J);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let J=0;J<V.locationSize;J++)y(V.location+J,tt/V.locationSize,Ut,K,tt*Xt,tt/V.locationSize*J*Xt,$)}}else if(I!==void 0){const K=I[L];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(V.location,K);break;case 3:n.vertexAttrib3fv(V.location,K);break;case 4:n.vertexAttrib4fv(V.location,K);break;default:n.vertexAttrib1fv(V.location,K)}}}}v()}function w(){P();for(const T in i){const C=i[T];for(const U in C){const F=C[U];for(const B in F)h(F[B].object),delete F[B];delete C[U]}delete i[T]}}function S(T){if(i[T.id]===void 0)return;const C=i[T.id];for(const U in C){const F=C[U];for(const B in F)h(F[B].object),delete F[B];delete C[U]}delete i[T.id]}function E(T){for(const C in i){const U=i[C];if(U[T.id]===void 0)continue;const F=U[T.id];for(const B in F)h(F[B].object),delete F[B];delete U[T.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function hy(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==bn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==an&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Dn&&!P)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,maxSamples:w,samples:S}}function dy(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new mi,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:i,y=v*4;let x=p.clippingState||null;l.value=x,x=h(g,f,y,d);for(let w=0;w!==y;++w)x[w]=e[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function fy(n){let t=new WeakMap;function e(o,a){return a===bl?o.mapping=Wi:a===Ml&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bl||a===Ml)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xf(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const xi=4,eu=[.125,.215,.35,.446,.526,.582],ki=20,py=256,Gs=new Ef,nu=new jt;let Pa=null,Ia=0,Da=0,La=!1;const my=new D;class iu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=my}=r;Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pa,Ia,Da),this._renderer.xr.enabled=La,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:ni,format:bn,colorSpace:ws,depthBuffer:!1},s=su(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gy(r)),this._blurMaterial=xy(r,t,e),this._ggxMaterial=_y(r,t,e)}return s}_compileMaterial(t){const e=new ln(new Qe,t);this._renderer.compile(e,Gs)}_sceneToCubeUV(t,e,i,s,r){const l=new on(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(nu),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new Ar,new kc({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(nu),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const w=this._cubeSize;ls(s,x*w,y>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(_,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Wi||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ls(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Gs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-xi?i-g+xi:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,ls(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Gs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ls(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(a,Gs)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ki;m>ki&&Rt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let v=0;for(let E=0;E<ki;++E){const P=E/_,b=Math.exp(-P*P/2);p.push(b),E===0?v+=b:E<m&&(v+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[s],w=3*x*(s>y-xi?s-y+xi:0),S=4*(this._cubeSize-x);ls(e,w,S,3*x,2*x),l.setRenderTarget(e),l.render(u,Gs)}}function gy(n){const t=[],e=[],i=[];let s=n;const r=n-xi+1+eu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-xi?l=eu[o-n+xi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let S=0;S<d;S++){const E=S%3*2/3-1,P=S>2?0:-1,b=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(b,_*g*S),y.set(f,m*g*S);const T=[S,S,S,S,S,S];x.set(T,p*g*S)}const w=new Qe;w.setAttribute("position",new On(v,_)),w.setAttribute("uv",new On(y,m)),w.setAttribute("faceIndex",new On(x,p)),i.push(new ln(w,null)),s>xi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function su(n,t,e){const i=new Nn(n,t,e);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ls(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function _y(n,t,e){return new zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:py,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function xy(n,t,e){const i=new Float32Array(ki),s=new D(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ru(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ou(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===bl||l===Ml,h=l===Wi||l===bs;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new iu(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new iu(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function vy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&dr("WebGLRenderer: "+i+" extension not supported."),s}}}function Sy(n,t,e,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],S=v[y+1],E=v[y+2];f.push(w,S,S,E,E,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,S=y+1,E=y+2;f.push(w,S,S,E,E,w)}}else return;const m=new(lf(f)?pf:ff)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function by(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function My(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function wy(n,t,e){const i=new WeakMap,s=new be;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const S=new Float32Array(x*w*4*u),E=new cf(S,x,w,u);E.type=Dn,E.needsUpdate=!0;const P=y*4;for(let T=0;T<u;T++){const C=m[T],U=p[T],F=v[T],B=x*w*4*T;for(let W=0;W<C.count;W++){const I=W*P;d===!0&&(s.fromBufferAttribute(C,W),S[B+I+0]=s.x,S[B+I+1]=s.y,S[B+I+2]=s.z,S[B+I+3]=0),g===!0&&(s.fromBufferAttribute(U,W),S[B+I+4]=s.x,S[B+I+5]=s.y,S[B+I+6]=s.z,S[B+I+7]=0),_===!0&&(s.fromBufferAttribute(F,W),S[B+I+8]=s.x,S[B+I+9]=s.y,S[B+I+10]=s.z,S[B+I+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new Lt(x,w)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ty(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Ey={[Xd]:"LINEAR_TONE_MAPPING",[Yd]:"REINHARD_TONE_MAPPING",[qd]:"CINEON_TONE_MAPPING",[$d]:"ACES_FILMIC_TONE_MAPPING",[Zd]:"AGX_TONE_MAPPING",[Kd]:"NEUTRAL_TONE_MAPPING",[jd]:"CUSTOM_TONE_MAPPING"};function Ay(n,t,e,i,s){const r=new Nn(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Nn(t,e,{type:ni,depthBuffer:!1,stencilBuffer:!1}),a=new Qe;a.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ce([0,2,0,0,2,0],2));const l=new m_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ln(a,l),h=new Ef(-1,1,1,-1,0,1);let u=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(v,y){r.setSize(v,y),o.setSize(v,y);for(let x=0;x<m.length;x++){const w=m[x];w.setSize&&w.setSize(v,y)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const y=r.width,x=r.height;for(let w=0;w<m.length;w++){const S=m[w];S.setSize&&S.setSize(y,x)}},this.begin=function(v,y){if(d||v.toneMapping===Fn&&m.length===0)return!1;if(_=y,y!==null){const x=y.width,w=y.height;(r.width!==x||r.height!==w)&&this.setSize(x,w)}return p===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=Fn,!0},this.hasRenderPass=function(){return p},this.end=function(v,y){v.toneMapping=g,d=!0;let x=r,w=o;for(let S=0;S<m.length;S++){const E=m[S];if(E.enabled!==!1&&(E.render(v,w,x,y),E.needsSwap!==!1)){const P=x;x=w,w=P}}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,l.defines={},Zt.getTransfer(u)===re&&(l.defines.SRGB_TRANSFER="");const S=Ey[f];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(_),v.render(c,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Cf=new wn,oc=new pr(1,1),Rf=new cf,Pf=new Tg,If=new _f,au=[],lu=[],cu=new Float32Array(16),hu=new Float32Array(9),uu=new Float32Array(4);function Us(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ie(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function jo(n,t){let e=lu[t];e===void 0&&(e=new Int32Array(t),lu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Cy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function Py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function Iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function Dy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),De(e,i)}}function Ly(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;hu.set(i),n.uniformMatrix3fv(this.addr,!1,hu),De(e,i)}}function Uy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,i))return;cu.set(i),n.uniformMatrix4fv(this.addr,!1,cu),De(e,i)}}function Fy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ny(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function Oy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function By(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function ky(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function Gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function Vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function Hy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(oc.compareFunction=e.isReversedDepthBuffer()?Nc:Fc,r=oc):r=Cf,e.setTexture2D(t||r,s)}function Wy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pf,s)}function Xy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||If,s)}function Yy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Rf,s)}function qy(n){switch(n){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Iy;case 35674:return Dy;case 35675:return Ly;case 35676:return Uy;case 5124:case 35670:return Fy;case 35667:case 35671:return Ny;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return zy;case 36295:return Gy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return Yy}}function $y(n,t){n.uniform1fv(this.addr,t)}function jy(n,t){const e=Us(t,this.size,2);n.uniform2fv(this.addr,e)}function Zy(n,t){const e=Us(t,this.size,3);n.uniform3fv(this.addr,e)}function Ky(n,t){const e=Us(t,this.size,4);n.uniform4fv(this.addr,e)}function Jy(n,t){const e=Us(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Qy(n,t){const e=Us(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tv(n,t){const e=Us(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ev(n,t){n.uniform1iv(this.addr,t)}function nv(n,t){n.uniform2iv(this.addr,t)}function iv(n,t){n.uniform3iv(this.addr,t)}function sv(n,t){n.uniform4iv(this.addr,t)}function rv(n,t){n.uniform1uiv(this.addr,t)}function ov(n,t){n.uniform2uiv(this.addr,t)}function av(n,t){n.uniform3uiv(this.addr,t)}function lv(n,t){n.uniform4uiv(this.addr,t)}function cv(n,t,e){const i=this.cache,s=t.length,r=jo(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),De(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=oc:o=Cf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function hv(n,t,e){const i=this.cache,s=t.length,r=jo(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pf,r[o])}function uv(n,t,e){const i=this.cache,s=t.length,r=jo(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||If,r[o])}function dv(n,t,e){const i=this.cache,s=t.length,r=jo(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Rf,r[o])}function fv(n){switch(n){case 5126:return $y;case 35664:return jy;case 35665:return Zy;case 35666:return Ky;case 35674:return Jy;case 35675:return Qy;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}class pv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qy(e.type)}}class mv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fv(e.type)}}class gv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function du(n,t){n.seq.push(t),n.map[t.id]=t}function _v(n,t,e){const i=n.name,s=i.length;for(Ua.lastIndex=0;;){const r=Ua.exec(i),o=Ua.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){du(e,c===void 0?new pv(a,n,t):new mv(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new gv(a),du(e,u)),e=u}}}class Po{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);_v(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function fu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const xv=37297;let yv=0;function vv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const pu=new Ot;function Sv(n){Zt._getMatrix(pu,Zt.workingColorSpace,n);const t=`mat3( ${pu.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case Uo:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function mu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+vv(n.getShaderSource(t),a)}else return r}function bv(n,t){const e=Sv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Mv={[Xd]:"Linear",[Yd]:"Reinhard",[qd]:"Cineon",[$d]:"ACESFilmic",[Zd]:"AgX",[Kd]:"Neutral",[jd]:"Custom"};function wv(n,t){const e=Mv[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const no=new D;function Tv(){Zt.getLuminanceCoefficients(no);const n=no.x.toFixed(4),t=no.y.toFixed(4),e=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Av(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Cv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Qs(n){return n!==""}function gu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _u(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(n){return n.replace(Rv,Iv)}const Pv=new Map;function Iv(n,t){let e=kt[t];if(e===void 0){const i=Pv.get(t);if(i!==void 0)e=kt[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ac(e)}const Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(n){return n.replace(Dv,Lv)}function Lv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Uv={[wo]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function Fv(n){return Uv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nv={[Wi]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function Ov(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Nv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bv={[bs]:"ENVMAP_MODE_REFRACTION"};function kv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Bv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zv={[Wd]:"ENVMAP_BLENDING_MULTIPLY",[Xm]:"ENVMAP_BLENDING_MIX",[Ym]:"ENVMAP_BLENDING_ADD"};function Gv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":zv[n.combine]||"ENVMAP_BLENDING_NONE"}function Vv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Hv(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Fv(e),c=Ov(e),h=kv(e),u=Gv(e),f=Vv(e),d=Ev(e),g=Av(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,bv("linearToOutputTexel",e.outputColorSpace),Tv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=ac(o),o=gu(o,e),o=_u(o,e),a=ac(a),a=gu(a,e),a=_u(a,e),o=xu(o),a=xu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,w=fu(s,s.VERTEX_SHADER,y),S=fu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(C){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(w)||"",B=s.getShaderInfoLog(S)||"",W=U.trim(),I=F.trim(),L=B.trim();let V=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,S);else{const K=mu(s,w,"vertex"),tt=mu(s,S,"fragment");Qt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+K+`
`+tt)}else W!==""?Rt("WebGLProgram: Program Info Log:",W):(I===""||L==="")&&(H=!1);H&&(C.diagnostics={runnable:V,programLog:W,vertexShader:{log:I,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(w),s.deleteShader(S),P=new Po(s,_),b=Cv(s,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,xv)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=S,this}let Wv=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Yv(t),e.set(t,i)),i}}class Yv{constructor(t){this.id=Wv++,this.code=t,this.usedTimes=0}}function qv(n,t,e,i,s,r,o){const a=new uf,l=new Xv,c=new Set,h=[],u=new Map,f=s.logarithmicDepthBuffer;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,T,C,U,F){const B=U.fog,W=F.geometry,I=b.isMeshStandardMaterial?U.environment:null,L=(b.isMeshStandardMaterial?e:t).get(b.envMap||I),V=L&&L.mapping===Wo?L.image.height:null,H=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&Rt("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=K!==void 0?K.length:0;let gt=0;W.morphAttributes.position!==void 0&&(gt=1),W.morphAttributes.normal!==void 0&&(gt=2),W.morphAttributes.color!==void 0&&(gt=3);let yt,Ut,Xt,$;if(H){const ie=Pn[H];yt=ie.vertexShader,Ut=ie.fragmentShader}else yt=b.vertexShader,Ut=b.fragmentShader,l.update(b),Xt=l.getVertexShaderID(b),$=l.getFragmentShaderID(b);const J=n.getRenderTarget(),dt=n.state.buffers.depth.getReversed(),At=F.isInstancedMesh===!0,pt=F.isBatchedMesh===!0,Bt=!!b.map,he=!!b.matcap,Ft=!!L,Wt=!!b.aoMap,$t=!!b.lightMap,Nt=!!b.bumpMap,me=!!b.normalMap,N=!!b.displacementMap,we=!!b.emissiveMap,ne=!!b.metalnessMap,ue=!!b.roughnessMap,St=b.anisotropy>0,R=b.clearcoat>0,M=b.dispersion>0,k=b.iridescence>0,j=b.sheen>0,Q=b.transmission>0,q=St&&!!b.anisotropyMap,Mt=R&&!!b.clearcoatMap,rt=R&&!!b.clearcoatNormalMap,vt=R&&!!b.clearcoatRoughnessMap,Pt=k&&!!b.iridescenceMap,nt=k&&!!b.iridescenceThicknessMap,at=j&&!!b.sheenColorMap,xt=j&&!!b.sheenRoughnessMap,bt=!!b.specularMap,ot=!!b.specularColorMap,Vt=!!b.specularIntensityMap,O=Q&&!!b.transmissionMap,ut=Q&&!!b.thicknessMap,it=!!b.gradientMap,ft=!!b.alphaMap,et=b.alphaTest>0,Z=!!b.alphaHash,st=!!b.extensions;let Dt=Fn;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const de={shaderID:H,shaderType:b.type,shaderName:b.name,vertexShader:yt,fragmentShader:Ut,defines:b.defines,customVertexShaderID:Xt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:pt,batchingColor:pt&&F._colorsTexture!==null,instancing:At,instancingColor:At&&F.instanceColor!==null,instancingMorph:At&&F.morphTexture!==null,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ws,alphaToCoverage:!!b.alphaToCoverage,map:Bt,matcap:he,envMap:Ft,envMapMode:Ft&&L.mapping,envMapCubeUVHeight:V,aoMap:Wt,lightMap:$t,bumpMap:Nt,normalMap:me,displacementMap:N,emissiveMap:we,normalMapObjectSpace:me&&b.normalMapType===jm,normalMapTangentSpace:me&&b.normalMapType===af,metalnessMap:ne,roughnessMap:ue,anisotropy:St,anisotropyMap:q,clearcoat:R,clearcoatMap:Mt,clearcoatNormalMap:rt,clearcoatRoughnessMap:vt,dispersion:M,iridescence:k,iridescenceMap:Pt,iridescenceThicknessMap:nt,sheen:j,sheenColorMap:at,sheenRoughnessMap:xt,specularMap:bt,specularColorMap:ot,specularIntensityMap:Vt,transmission:Q,transmissionMap:O,thicknessMap:ut,gradientMap:it,opaque:b.transparent===!1&&b.blending===ys&&b.alphaToCoverage===!1,alphaMap:ft,alphaTest:et,alphaHash:Z,combine:b.combine,mapUv:Bt&&_(b.map.channel),aoMapUv:Wt&&_(b.aoMap.channel),lightMapUv:$t&&_(b.lightMap.channel),bumpMapUv:Nt&&_(b.bumpMap.channel),normalMapUv:me&&_(b.normalMap.channel),displacementMapUv:N&&_(b.displacementMap.channel),emissiveMapUv:we&&_(b.emissiveMap.channel),metalnessMapUv:ne&&_(b.metalnessMap.channel),roughnessMapUv:ue&&_(b.roughnessMap.channel),anisotropyMapUv:q&&_(b.anisotropyMap.channel),clearcoatMapUv:Mt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:at&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(b.sheenRoughnessMap.channel),specularMapUv:bt&&_(b.specularMap.channel),specularColorMapUv:ot&&_(b.specularColorMap.channel),specularIntensityMapUv:Vt&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:ut&&_(b.thicknessMap.channel),alphaMapUv:ft&&_(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(me||St),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Bt||ft),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:gt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Bt&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:we&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===In,flipSided:b.side===Ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)T.push(C),T.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(v(T,b),y(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const T=g[b.type];let C;if(T){const U=Pn[T];C=Bg.clone(U.uniforms)}else C=b.uniforms;return C}function w(b,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new Hv(n,T,b,r),h.push(C),u.set(T,C)),C}function S(b){if(--b.usedTimes===0){const T=h.indexOf(b);h[T]=h[h.length-1],h.pop(),u.delete(b.cacheKey),b.destroy()}}function E(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:P}}function $v(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function jv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Su(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||jv),i.length>1&&i.sort(f||vu),s.length>1&&s.sort(f||vu)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Zv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Su,n.set(i,[o])):s>=r.length?(o=new Su,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Kv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new jt};break;case"SpotLight":e={position:new D,direction:new D,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function Jv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Qv=0;function tS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function eS(n){const t=new Kv,e=Jv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new pe,o=new pe;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,w=0,S=0,E=0;c.sort(tS);for(let b=0,T=c.length;b<T;b++){const C=c[b],U=C.color,F=C.intensity,B=C.distance;let W=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ms?W=C.shadow.map.texture:W=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*F,u+=U.g*F,f+=U.b*F;else if(C.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(C.sh.coefficients[I],F);E++}else if(C.isDirectionalLight){const I=t.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const L=C.shadow,V=e.get(C);V.shadowIntensity=L.intensity,V.shadowBias=L.bias,V.shadowNormalBias=L.normalBias,V.shadowRadius=L.radius,V.shadowMapSize=L.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=C.shadow.matrix,v++}i.directional[d]=I,d++}else if(C.isSpotLight){const I=t.get(C);I.position.setFromMatrixPosition(C.matrixWorld),I.color.copy(U).multiplyScalar(F),I.distance=B,I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,i.spot[_]=I;const L=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,L.updateMatrices(C),C.castShadow&&S++),i.spotLightMatrix[_]=L.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=L.intensity,V.shadowBias=L.bias,V.shadowNormalBias=L.normalBias,V.shadowRadius=L.radius,V.shadowMapSize=L.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=W,x++}_++}else if(C.isRectAreaLight){const I=t.get(C);I.color.copy(U).multiplyScalar(F),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=I,m++}else if(C.isPointLight){const I=t.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),I.distance=C.distance,I.decay=C.decay,C.castShadow){const L=C.shadow,V=e.get(C);V.shadowIntensity=L.intensity,V.shadowBias=L.bias,V.shadowNormalBias=L.normalBias,V.shadowRadius=L.radius,V.shadowMapSize=L.mapSize,V.shadowCameraNear=L.camera.near,V.shadowCameraFar=L.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=C.shadow.matrix,y++}i.point[g]=I,g++}else if(C.isHemisphereLight){const I=t.get(C);I.skyColor.copy(C.color).multiplyScalar(F),I.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[p]=I,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=E,i.version=Qv++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function bu(n){const t=new eS(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new bu(n),t.set(s,[a])):r>=o.length?(a=new bu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const iS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rS=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],oS=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Mu=new pe,Vs=new D,Fa=new D;function aS(n,t,e){let i=new zc;const s=new Lt,r=new Lt,o=new be,a=new g_,l=new __,c={},h=e.maxTextureSize,u={[vi]:Ke,[Ke]:vi,[In]:In},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:iS,fragmentShader:sS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ln(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let p=this.type;this.render=function(S,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;S.type===Em&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),S.type=wo);const b=n.getRenderTarget(),T=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==this.type;F&&E.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(W=>W.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,W=S.length;B<W;B++){const I=S[B],L=I.shadow;if(L===void 0){Rt("WebGLShadowMap:",I,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const V=L.getFrameExtents();if(s.multiply(V),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,L.mapSize.y=r.y)),L.map===null||F===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Ks){if(I.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Nn(s.x,s.y,{format:Ms,type:ni,minFilter:ze,magFilter:ze,generateMipmaps:!1}),L.map.texture.name=I.name+".shadowMap",L.map.depthTexture=new pr(s.x,s.y,Dn),L.map.depthTexture.name=I.name+".shadowMapDepth",L.map.depthTexture.format=ii,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Oe,L.map.depthTexture.magFilter=Oe}else{I.isPointLight?(L.map=new xf(s.x),L.map.depthTexture=new Zg(s.x,Bn)):(L.map=new Nn(s.x,s.y),L.map.depthTexture=new pr(s.x,s.y,Bn)),L.map.depthTexture.name=I.name+".shadowMap",L.map.depthTexture.format=ii;const K=n.state.buffers.depth.getReversed();this.type===wo?(L.map.depthTexture.compareFunction=K?Nc:Fc,L.map.depthTexture.minFilter=ze,L.map.depthTexture.magFilter=ze):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Oe,L.map.depthTexture.magFilter=Oe)}L.camera.updateProjectionMatrix()}const H=L.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<H;K++){if(L.map.isWebGLCubeRenderTarget)n.setRenderTarget(L.map,K),n.clear();else{K===0&&(n.setRenderTarget(L.map),n.clear());const tt=L.getViewport(K);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),U.viewport(o)}if(I.isPointLight){const tt=L.camera,gt=L.matrix,yt=I.distance||tt.far;yt!==tt.far&&(tt.far=yt,tt.updateProjectionMatrix()),Vs.setFromMatrixPosition(I.matrixWorld),tt.position.copy(Vs),Fa.copy(tt.position),Fa.add(rS[K]),tt.up.copy(oS[K]),tt.lookAt(Fa),tt.updateMatrixWorld(),gt.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Mu.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Mu,tt.coordinateSystem,tt.reversedDepth)}else L.updateMatrices(I);i=L.getFrustum(),x(E,P,L.camera,I,this.type)}L.isPointLightShadow!==!0&&this.type===Ks&&v(L,P),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,T,C)};function v(S,E){const P=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Nn(s.x,s.y,{format:Ms,type:ni})),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,P,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,P,d,_,null)}function y(S,E,P,b){let T=null;const C=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)T=C;else if(T=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const U=T.uuid,F=E.uuid;let B=c[U];B===void 0&&(B={},c[U]=B);let W=B[F];W===void 0&&(W=T.clone(),B[F]=W,E.addEventListener("dispose",w)),T=W}if(T.visible=E.visible,T.wireframe=E.wireframe,b===Ks?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const U=n.properties.get(T);U.light=P}return T}function x(S,E,P,b,T){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===Ks)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const F=t.update(S),B=S.material;if(Array.isArray(B)){const W=F.groups;for(let I=0,L=W.length;I<L;I++){const V=W[I],H=B[V.materialIndex];if(H&&H.visible){const K=y(S,H,b,T);S.onBeforeShadow(n,S,E,P,F,K,V),n.renderBufferDirect(P,null,F,K,S,V),S.onAfterShadow(n,S,E,P,F,K,V)}}}else if(B.visible){const W=y(S,B,b,T);S.onBeforeShadow(n,S,E,P,F,W,null),n.renderBufferDirect(P,null,F,W,S,null),S.onAfterShadow(n,S,E,P,F,W,null)}}const U=S.children;for(let F=0,B=U.length;F<B;F++)x(U[F],E,P,b,T)}function w(S){S.target.removeEventListener("dispose",w);for(const P in c){const b=c[P],T=S.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const lS={[ml]:gl,[_l]:vl,[xl]:Sl,[Ss]:yl,[gl]:ml,[vl]:_l,[Sl]:xl,[yl]:Ss};function cS(n,t){function e(){let O=!1;const ut=new be;let it=null;const ft=new be(0,0,0,0);return{setMask:function(et){it!==et&&!O&&(n.colorMask(et,et,et,et),it=et)},setLocked:function(et){O=et},setClear:function(et,Z,st,Dt,de){de===!0&&(et*=Dt,Z*=Dt,st*=Dt),ut.set(et,Z,st,Dt),ft.equals(ut)===!1&&(n.clearColor(et,Z,st,Dt),ft.copy(ut))},reset:function(){O=!1,it=null,ft.set(-1,0,0,0)}}}function i(){let O=!1,ut=!1,it=null,ft=null,et=null;return{setReversed:function(Z){if(ut!==Z){const st=t.get("EXT_clip_control");Z?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),ut=Z;const Dt=et;et=null,this.setClear(Dt)}},getReversed:function(){return ut},setTest:function(Z){Z?J(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(Z){it!==Z&&!O&&(n.depthMask(Z),it=Z)},setFunc:function(Z){if(ut&&(Z=lS[Z]),ft!==Z){switch(Z){case ml:n.depthFunc(n.NEVER);break;case gl:n.depthFunc(n.ALWAYS);break;case _l:n.depthFunc(n.LESS);break;case Ss:n.depthFunc(n.LEQUAL);break;case xl:n.depthFunc(n.EQUAL);break;case yl:n.depthFunc(n.GEQUAL);break;case vl:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=Z}},setLocked:function(Z){O=Z},setClear:function(Z){et!==Z&&(ut&&(Z=1-Z),n.clearDepth(Z),et=Z)},reset:function(){O=!1,it=null,ft=null,et=null,ut=!1}}}function s(){let O=!1,ut=null,it=null,ft=null,et=null,Z=null,st=null,Dt=null,de=null;return{setTest:function(ie){O||(ie?J(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(ie){ut!==ie&&!O&&(n.stencilMask(ie),ut=ie)},setFunc:function(ie,En,Vn){(it!==ie||ft!==En||et!==Vn)&&(n.stencilFunc(ie,En,Vn),it=ie,ft=En,et=Vn)},setOp:function(ie,En,Vn){(Z!==ie||st!==En||Dt!==Vn)&&(n.stencilOp(ie,En,Vn),Z=ie,st=En,Dt=Vn)},setLocked:function(ie){O=ie},setClear:function(ie){de!==ie&&(n.clearStencil(ie),de=ie)},reset:function(){O=!1,ut=null,it=null,ft=null,et=null,Z=null,st=null,Dt=null,de=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,w=null,S=null,E=new jt(0,0,0),P=0,b=!1,T=null,C=null,U=null,F=null,B=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,L=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(V)[1]),I=L>=1):V.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),I=L>=2);let H=null,K={};const tt=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),yt=new be().fromArray(tt),Ut=new be().fromArray(gt);function Xt(O,ut,it,ft){const et=new Uint8Array(4),Z=n.createTexture();n.bindTexture(O,Z),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<it;st++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,et):n.texImage2D(ut+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,et);return Z}const $={};$[n.TEXTURE_2D]=Xt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(Ss),Nt(!1),me(xh),J(n.CULL_FACE),Wt(Jn);function J(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function dt(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function At(O,ut){return u[O]!==ut?(n.bindFramebuffer(O,ut),u[O]=ut,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function pt(O,ut){let it=d,ft=!1;if(O){it=f.get(ut),it===void 0&&(it=[],f.set(ut,it));const et=O.textures;if(it.length!==et.length||it[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,st=et.length;Z<st;Z++)it[Z]=n.COLOR_ATTACHMENT0+Z;it.length=et.length,ft=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,ft=!0);ft&&n.drawBuffers(it)}function Bt(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const he={[Bi]:n.FUNC_ADD,[Cm]:n.FUNC_SUBTRACT,[Rm]:n.FUNC_REVERSE_SUBTRACT};he[Pm]=n.MIN,he[Im]=n.MAX;const Ft={[Dm]:n.ZERO,[Lm]:n.ONE,[Um]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[zm]:n.SRC_ALPHA_SATURATE,[Bm]:n.DST_COLOR,[Nm]:n.DST_ALPHA,[Fm]:n.ONE_MINUS_SRC_COLOR,[pl]:n.ONE_MINUS_SRC_ALPHA,[km]:n.ONE_MINUS_DST_COLOR,[Om]:n.ONE_MINUS_DST_ALPHA,[Gm]:n.CONSTANT_COLOR,[Vm]:n.ONE_MINUS_CONSTANT_COLOR,[Hm]:n.CONSTANT_ALPHA,[Wm]:n.ONE_MINUS_CONSTANT_ALPHA};function Wt(O,ut,it,ft,et,Z,st,Dt,de,ie){if(O===Jn){_===!0&&(dt(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),O!==Am){if(O!==m||ie!==b){if((p!==Bi||x!==Bi)&&(n.blendEquation(n.FUNC_ADD),p=Bi,x=Bi),ie)switch(O){case ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.ONE,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qt("WebGLState: Invalid blending: ",O);break}else switch(O){case ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",O);break}v=null,y=null,w=null,S=null,E.set(0,0,0),P=0,m=O,b=ie}return}et=et||ut,Z=Z||it,st=st||ft,(ut!==p||et!==x)&&(n.blendEquationSeparate(he[ut],he[et]),p=ut,x=et),(it!==v||ft!==y||Z!==w||st!==S)&&(n.blendFuncSeparate(Ft[it],Ft[ft],Ft[Z],Ft[st]),v=it,y=ft,w=Z,S=st),(Dt.equals(E)===!1||de!==P)&&(n.blendColor(Dt.r,Dt.g,Dt.b,de),E.copy(Dt),P=de),m=O,b=!1}function $t(O,ut){O.side===In?dt(n.CULL_FACE):J(n.CULL_FACE);let it=O.side===Ke;ut&&(it=!it),Nt(it),O.blending===ys&&O.transparent===!1?Wt(Jn):Wt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ft=O.stencilWrite;a.setTest(ft),ft&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),we(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(O){T!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),T=O)}function me(O){O!==wm?(J(n.CULL_FACE),O!==C&&(O===xh?n.cullFace(n.BACK):O===Tm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),C=O}function N(O){O!==U&&(I&&n.lineWidth(O),U=O)}function we(O,ut,it){O?(J(n.POLYGON_OFFSET_FILL),(F!==ut||B!==it)&&(n.polygonOffset(ut,it),F=ut,B=it)):dt(n.POLYGON_OFFSET_FILL)}function ne(O){O?J(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function ue(O){O===void 0&&(O=n.TEXTURE0+W-1),H!==O&&(n.activeTexture(O),H=O)}function St(O,ut,it){it===void 0&&(H===null?it=n.TEXTURE0+W-1:it=H);let ft=K[it];ft===void 0&&(ft={type:void 0,texture:void 0},K[it]=ft),(ft.type!==O||ft.texture!==ut)&&(H!==it&&(n.activeTexture(it),H=it),n.bindTexture(O,ut||$[O]),ft.type=O,ft.texture=ut)}function R(){const O=K[H];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function j(){try{n.texSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Q(){try{n.texSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function rt(){try{n.texStorage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function vt(){try{n.texStorage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Pt(){try{n.texImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function nt(){try{n.texImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function at(O){yt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),yt.copy(O))}function xt(O){Ut.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ut.copy(O))}function bt(O,ut){let it=c.get(ut);it===void 0&&(it=new WeakMap,c.set(ut,it));let ft=it.get(O);ft===void 0&&(ft=n.getUniformBlockIndex(ut,O.name),it.set(O,ft))}function ot(O,ut){const ft=c.get(ut).get(O);l.get(ut)!==ft&&(n.uniformBlockBinding(ut,ft,O.__bindingPointIndex),l.set(ut,ft))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},H=null,K={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,w=null,S=null,E=new jt(0,0,0),P=0,b=!1,T=null,C=null,U=null,F=null,B=null,yt.set(0,0,n.canvas.width,n.canvas.height),Ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:dt,bindFramebuffer:At,drawBuffers:pt,useProgram:Bt,setBlending:Wt,setMaterial:$t,setFlipSided:Nt,setCullFace:me,setLineWidth:N,setPolygonOffset:we,setScissorTest:ne,activeTexture:ue,bindTexture:St,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:Pt,texImage3D:nt,updateUBOMapping:bt,uniformBlockBinding:ot,texStorage2D:rt,texStorage3D:vt,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Mt,scissor:at,viewport:xt,reset:Vt}}function hS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return d?new OffscreenCanvas(R,M):No("canvas")}function _(R,M,k){let j=1;const Q=St(R);if((Q.width>k||Q.height>k)&&(j=k/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(j*Q.width),Mt=Math.floor(j*Q.height);u===void 0&&(u=g(q,Mt));const rt=M?g(q,Mt):u;return rt.width=q,rt.height=Mt,rt.getContext("2d").drawImage(R,0,0,q,Mt),Rt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Mt+")."),rt}else return"data"in R&&Rt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,M,k,j,Q=!1){if(R!==null){if(n[R]!==void 0)return n[R];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===n.RED&&(k===n.FLOAT&&(q=n.R32F),k===n.HALF_FLOAT&&(q=n.R16F),k===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.R8UI),k===n.UNSIGNED_SHORT&&(q=n.R16UI),k===n.UNSIGNED_INT&&(q=n.R32UI),k===n.BYTE&&(q=n.R8I),k===n.SHORT&&(q=n.R16I),k===n.INT&&(q=n.R32I)),M===n.RG&&(k===n.FLOAT&&(q=n.RG32F),k===n.HALF_FLOAT&&(q=n.RG16F),k===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RG8UI),k===n.UNSIGNED_SHORT&&(q=n.RG16UI),k===n.UNSIGNED_INT&&(q=n.RG32UI),k===n.BYTE&&(q=n.RG8I),k===n.SHORT&&(q=n.RG16I),k===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(q=n.RGB16UI),k===n.UNSIGNED_INT&&(q=n.RGB32UI),k===n.BYTE&&(q=n.RGB8I),k===n.SHORT&&(q=n.RGB16I),k===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),k===n.UNSIGNED_INT&&(q=n.RGBA32UI),k===n.BYTE&&(q=n.RGBA8I),k===n.SHORT&&(q=n.RGBA16I),k===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const Mt=Q?Uo:Zt.getTransfer(j);k===n.FLOAT&&(q=n.RGBA32F),k===n.HALF_FLOAT&&(q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(q=Mt===re?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(R,M){let k;return R?M===null||M===Bn||M===ur?k=n.DEPTH24_STENCIL8:M===Dn?k=n.DEPTH32F_STENCIL8:M===hr&&(k=n.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bn||M===ur?k=n.DEPTH_COMPONENT24:M===Dn?k=n.DEPTH_COMPONENT32F:M===hr&&(k=n.DEPTH_COMPONENT16),k}function w(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Oe&&R.minFilter!==ze?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function S(R){const M=R.target;M.removeEventListener("dispose",S),P(M),M.isVideoTexture&&h.delete(M)}function E(R){const M=R.target;M.removeEventListener("dispose",E),T(M)}function P(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,j=f.get(k);if(j){const Q=j[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(R),Object.keys(j).length===0&&f.delete(k)}i.remove(R)}function b(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const k=R.source,j=f.get(k);delete j[M.__cacheKey],o.memory.textures--}function T(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Q=0;Q<M.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let j=0,Q=k.length;j<Q;j++){const q=i.get(k[j]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(k[j])}i.remove(R)}let C=0;function U(){C=0}function F(){const R=C;return R>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){const k=i.get(R);if(R.isVideoTexture&&ne(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const j=R.image;if(j===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function I(R,M){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){$(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function L(R,M){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){$(k,R,M);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function V(R,M){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){J(k,R,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const H={[wl]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Tl]:n.MIRRORED_REPEAT},K={[Oe]:n.NEAREST,[qm]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},tt={[Zm]:n.NEVER,[eg]:n.ALWAYS,[Km]:n.LESS,[Fc]:n.LEQUAL,[Jm]:n.EQUAL,[Nc]:n.GEQUAL,[Qm]:n.GREATER,[tg]:n.NOTEQUAL};function gt(R,M){if(M.type===Dn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ze||M.magFilter===sa||M.magFilter===Dr||M.magFilter===zi||M.minFilter===ze||M.minFilter===sa||M.minFilter===Dr||M.minFilter===zi)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,H[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,H[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,H[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,K[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Oe||M.minFilter!==Dr&&M.minFilter!==zi||M.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function yt(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",S));const j=M.source;let Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));const q=B(M);if(q!==R.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[q].usedTimes++;const Mt=Q[R.__cacheKey];Mt!==void 0&&(Q[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(M)),R.__cacheKey=q,R.__webglTexture=Q[q].texture}return k}function Ut(R,M,k){return Math.floor(Math.floor(R/k)/M)}function Xt(R,M,k,j){const q=R.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,k,j,M.data);else{q.sort((nt,at)=>nt.start-at.start);let Mt=0;for(let nt=1;nt<q.length;nt++){const at=q[Mt],xt=q[nt],bt=at.start+at.count,ot=Ut(xt.start,M.width,4),Vt=Ut(at.start,M.width,4);xt.start<=bt+1&&ot===Vt&&Ut(xt.start+xt.count-1,M.width,4)===ot?at.count=Math.max(at.count,xt.start+xt.count-at.start):(++Mt,q[Mt]=xt)}q.length=Mt+1;const rt=n.getParameter(n.UNPACK_ROW_LENGTH),vt=n.getParameter(n.UNPACK_SKIP_PIXELS),Pt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let nt=0,at=q.length;nt<at;nt++){const xt=q[nt],bt=Math.floor(xt.start/4),ot=Math.ceil(xt.count/4),Vt=bt%M.width,O=Math.floor(bt/M.width),ut=ot,it=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,Vt,O,ut,it,k,j,M.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,rt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pt)}}function $(R,M,k){let j=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=n.TEXTURE_3D);const Q=yt(R,M),q=M.source;e.bindTexture(j,R.__webglTexture,n.TEXTURE0+k);const Mt=i.get(q);if(q.version!==Mt.__version||Q===!0){e.activeTexture(n.TEXTURE0+k);const rt=Zt.getPrimaries(Zt.workingColorSpace),vt=M.colorSpace===gi?null:Zt.getPrimaries(M.colorSpace),Pt=M.colorSpace===gi||rt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let nt=_(M.image,!1,s.maxTextureSize);nt=ue(M,nt);const at=r.convert(M.format,M.colorSpace),xt=r.convert(M.type);let bt=y(M.internalFormat,at,xt,M.colorSpace,M.isVideoTexture);gt(j,M);let ot;const Vt=M.mipmaps,O=M.isVideoTexture!==!0,ut=Mt.__version===void 0||Q===!0,it=q.dataReady,ft=w(M,nt);if(M.isDepthTexture)bt=x(M.format===Gi,M.type),ut&&(O?e.texStorage2D(n.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,bt,nt.width,nt.height,0,at,xt,null));else if(M.isDataTexture)if(Vt.length>0){O&&ut&&e.texStorage2D(n.TEXTURE_2D,ft,bt,Vt[0].width,Vt[0].height);for(let et=0,Z=Vt.length;et<Z;et++)ot=Vt[et],O?it&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ot.width,ot.height,at,xt,ot.data):e.texImage2D(n.TEXTURE_2D,et,bt,ot.width,ot.height,0,at,xt,ot.data);M.generateMipmaps=!1}else O?(ut&&e.texStorage2D(n.TEXTURE_2D,ft,bt,nt.width,nt.height),it&&Xt(M,nt,at,xt)):e.texImage2D(n.TEXTURE_2D,0,bt,nt.width,nt.height,0,at,xt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,bt,Vt[0].width,Vt[0].height,nt.depth);for(let et=0,Z=Vt.length;et<Z;et++)if(ot=Vt[et],M.format!==bn)if(at!==null)if(O){if(it)if(M.layerUpdates.size>0){const st=tu(ot.width,ot.height,M.format,M.type);for(const Dt of M.layerUpdates){const de=ot.data.subarray(Dt*st/ot.data.BYTES_PER_ELEMENT,(Dt+1)*st/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,Dt,ot.width,ot.height,1,at,de)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ot.width,ot.height,nt.depth,at,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,bt,ot.width,ot.height,nt.depth,0,ot.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?it&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ot.width,ot.height,nt.depth,at,xt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,bt,ot.width,ot.height,nt.depth,0,at,xt,ot.data)}else{O&&ut&&e.texStorage2D(n.TEXTURE_2D,ft,bt,Vt[0].width,Vt[0].height);for(let et=0,Z=Vt.length;et<Z;et++)ot=Vt[et],M.format!==bn?at!==null?O?it&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,et,bt,ot.width,ot.height,0,ot.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?it&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ot.width,ot.height,at,xt,ot.data):e.texImage2D(n.TEXTURE_2D,et,bt,ot.width,ot.height,0,at,xt,ot.data)}else if(M.isDataArrayTexture)if(O){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,bt,nt.width,nt.height,nt.depth),it)if(M.layerUpdates.size>0){const et=tu(nt.width,nt.height,M.format,M.type);for(const Z of M.layerUpdates){const st=nt.data.subarray(Z*et/nt.data.BYTES_PER_ELEMENT,(Z+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,at,xt,st)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,at,xt,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,at,xt,nt.data);else if(M.isData3DTexture)O?(ut&&e.texStorage3D(n.TEXTURE_3D,ft,bt,nt.width,nt.height,nt.depth),it&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,at,xt,nt.data)):e.texImage3D(n.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,at,xt,nt.data);else if(M.isFramebufferTexture){if(ut)if(O)e.texStorage2D(n.TEXTURE_2D,ft,bt,nt.width,nt.height);else{let et=nt.width,Z=nt.height;for(let st=0;st<ft;st++)e.texImage2D(n.TEXTURE_2D,st,bt,et,Z,0,at,xt,null),et>>=1,Z>>=1}}else if(Vt.length>0){if(O&&ut){const et=St(Vt[0]);e.texStorage2D(n.TEXTURE_2D,ft,bt,et.width,et.height)}for(let et=0,Z=Vt.length;et<Z;et++)ot=Vt[et],O?it&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,at,xt,ot):e.texImage2D(n.TEXTURE_2D,et,bt,at,xt,ot);M.generateMipmaps=!1}else if(O){if(ut){const et=St(nt);e.texStorage2D(n.TEXTURE_2D,ft,bt,et.width,et.height)}it&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at,xt,nt)}else e.texImage2D(n.TEXTURE_2D,0,bt,at,xt,nt);m(M)&&p(j),Mt.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,k){if(M.image.length!==6)return;const j=yt(R,M),Q=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const q=i.get(Q);if(Q.version!==q.__version||j===!0){e.activeTexture(n.TEXTURE0+k);const Mt=Zt.getPrimaries(Zt.workingColorSpace),rt=M.colorSpace===gi?null:Zt.getPrimaries(M.colorSpace),vt=M.colorSpace===gi||Mt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Pt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,at=[];for(let Z=0;Z<6;Z++)!Pt&&!nt?at[Z]=_(M.image[Z],!0,s.maxCubemapSize):at[Z]=nt?M.image[Z].image:M.image[Z],at[Z]=ue(M,at[Z]);const xt=at[0],bt=r.convert(M.format,M.colorSpace),ot=r.convert(M.type),Vt=y(M.internalFormat,bt,ot,M.colorSpace),O=M.isVideoTexture!==!0,ut=q.__version===void 0||j===!0,it=Q.dataReady;let ft=w(M,xt);gt(n.TEXTURE_CUBE_MAP,M);let et;if(Pt){O&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Vt,xt.width,xt.height);for(let Z=0;Z<6;Z++){et=at[Z].mipmaps;for(let st=0;st<et.length;st++){const Dt=et[st];M.format!==bn?bt!==null?O?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,0,0,Dt.width,Dt.height,bt,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,Vt,Dt.width,Dt.height,0,Dt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,0,0,Dt.width,Dt.height,bt,ot,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,Vt,Dt.width,Dt.height,0,bt,ot,Dt.data)}}}else{if(et=M.mipmaps,O&&ut){et.length>0&&ft++;const Z=St(at[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,at[Z].width,at[Z].height,bt,ot,at[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,at[Z].width,at[Z].height,0,bt,ot,at[Z].data);for(let st=0;st<et.length;st++){const de=et[st].image[Z].image;O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,0,0,de.width,de.height,bt,ot,de.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,Vt,de.width,de.height,0,bt,ot,de.data)}}else{O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,ot,at[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,bt,ot,at[Z]);for(let st=0;st<et.length;st++){const Dt=et[st];O?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,0,0,bt,ot,Dt.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,Vt,bt,ot,Dt.image[Z])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),q.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function dt(R,M,k,j,Q,q){const Mt=r.convert(k.format,k.colorSpace),rt=r.convert(k.type),vt=y(k.internalFormat,Mt,rt,k.colorSpace),Pt=i.get(M),nt=i.get(k);if(nt.__renderTarget=M,!Pt.__hasExternalTextures){const at=Math.max(1,M.width>>q),xt=Math.max(1,M.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,vt,at,xt,M.depth,0,Mt,rt,null):e.texImage2D(Q,q,vt,at,xt,0,Mt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),we(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,nt.__webglTexture,0,N(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,nt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(R,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,Q=j&&j.isDepthTexture?j.type:null,q=x(M.stencilBuffer,Q),Mt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N(M),q,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,N(M),q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,R)}else{const j=M.textures;for(let Q=0;Q<j.length;Q++){const q=j[Q],Mt=r.convert(q.format,q.colorSpace),rt=r.convert(q.type),vt=y(q.internalFormat,Mt,rt,q.colorSpace);we(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N(M),vt,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,N(M),vt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,vt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(R,M,k){const j=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",S)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),gt(n.TEXTURE_CUBE_MAP,M.depthTexture);const Pt=r.convert(M.depthTexture.format),nt=r.convert(M.depthTexture.type);let at;M.depthTexture.format===ii?at=n.DEPTH_COMPONENT24:M.depthTexture.format===Gi&&(at=n.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,at,M.width,M.height,0,Pt,nt,null)}}else W(M.depthTexture,0);const q=Q.__webglTexture,Mt=N(M),rt=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,vt=M.depthTexture.format===Gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===ii)we(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,rt,q,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,vt,rt,q,0);else if(M.depthTexture.format===Gi)we(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,vt,rt,q,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,vt,rt,q,0);else throw new Error("Unknown depthTexture format")}function Bt(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let j=0;j<6;j++)pt(M.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?pt(M.__webglFramebuffer[0],R,0):pt(M.__webglFramebuffer,R,0)}else if(k){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=n.createRenderbuffer(),At(M.__webglDepthbuffer[j],R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),At(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function he(R,M,k){const j=i.get(R);M!==void 0&&dt(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Bt(R)}function Ft(R){const M=R.texture,k=i.get(R),j=i.get(M);R.addEventListener("dispose",E);const Q=R.textures,q=R.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=M.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[rt]=[];for(let vt=0;vt<M.mipmaps.length;vt++)k.__webglFramebuffer[rt][vt]=n.createFramebuffer()}else k.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)k.__webglFramebuffer[rt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let rt=0,vt=Q.length;rt<vt;rt++){const Pt=i.get(Q[rt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&we(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){const vt=Q[rt];k.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[rt]);const Pt=r.convert(vt.format,vt.colorSpace),nt=r.convert(vt.type),at=y(vt.internalFormat,Pt,nt,vt.colorSpace,R.isXRRenderTarget===!0),xt=N(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,at,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,k.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),At(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),gt(n.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)dt(k.__webglFramebuffer[rt][vt],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt);else dt(k.__webglFramebuffer[rt],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let rt=0,vt=Q.length;rt<vt;rt++){const Pt=Q[rt],nt=i.get(Pt);let at=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,nt.__webglTexture),gt(at,Pt),dt(k.__webglFramebuffer,R,Pt,n.COLOR_ATTACHMENT0+rt,at,0),m(Pt)&&p(at)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,j.__webglTexture),gt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)dt(k.__webglFramebuffer[vt],R,M,n.COLOR_ATTACHMENT0,rt,vt);else dt(k.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,rt,0);m(M)&&p(rt),e.unbindTexture()}R.depthBuffer&&Bt(R)}function Wt(R){const M=R.textures;for(let k=0,j=M.length;k<j;k++){const Q=M[k];if(m(Q)){const q=v(R),Mt=i.get(Q).__webglTexture;e.bindTexture(q,Mt),p(q),e.unbindTexture()}}}const $t=[],Nt=[];function me(R){if(R.samples>0){if(we(R)===!1){const M=R.textures,k=R.width,j=R.height;let Q=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(R),rt=M.length>1;if(rt)for(let Pt=0;Pt<M.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const vt=R.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Pt=0;Pt<M.length;Pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Pt]);const nt=i.get(M[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,Q,n.NEAREST),l===!0&&($t.length=0,Nt.length=0,$t.push(n.COLOR_ATTACHMENT0+Pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&($t.push(q),Nt.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let Pt=0;Pt<M.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[Pt]);const nt=i.get(M[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function N(R){return Math.min(s.maxSamples,R.samples)}function we(R){const M=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ne(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ue(R,M){const k=R.colorSpace,j=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==ws&&k!==gi&&(Zt.getTransfer(k)===re?(j!==bn||Q!==an)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",k)),M}function St(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=I,this.setTexture3D=L,this.setTextureCube=V,this.rebindTextures=he,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function uS(n,t){function e(i,s=gi){let r;const o=Zt.getTransfer(s);if(i===an)return n.UNSIGNED_BYTE;if(i===Pc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ef)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qd)return n.BYTE;if(i===tf)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===Rc)return n.INT;if(i===Bn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===sf)return n.ALPHA;if(i===rf)return n.RGB;if(i===bn)return n.RGBA;if(i===ii)return n.DEPTH_COMPONENT;if(i===Gi)return n.DEPTH_STENCIL;if(i===of)return n.RED;if(i===Dc)return n.RED_INTEGER;if(i===Ms)return n.RG;if(i===Lc)return n.RG_INTEGER;if(i===Uc)return n.RGBA_INTEGER;if(i===To||i===Eo||i===Ao||i===Co)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===Al||i===Cl||i===Rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Il||i===Dl||i===Ll||i===Ul||i===Fl||i===Nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pl||i===Il)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ll)return r.COMPRESSED_R11_EAC;if(i===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Fl)return r.COMPRESSED_RG11_EAC;if(i===Nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ol||i===Bl||i===kl||i===zl||i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===Yl||i===ql||i===$l||i===jl||i===Zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ol)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ql)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$l)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===Jl||i===Ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kl)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tc||i===ec||i===nc||i===ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const dS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new vf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new zn({vertexShader:dS,fragmentShader:fS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ln(new Yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mS extends qi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new pS,p={},v=e.getContextAttributes();let y=null,x=null;const w=[],S=[],E=new Lt;let P=null;const b=new on;b.viewport=new be;const T=new on;T.viewport=new be;const C=[b,T],U=new b_;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=w[$];return J===void 0&&(J=new Ta,w[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=w[$];return J===void 0&&(J=new Ta,w[$]=J),J.getGripSpace()},this.getHand=function($){let J=w[$];return J===void 0&&(J=new Ta,w[$]=J),J.getHandSpace()};function W($){const J=S.indexOf($.inputSource);if(J===-1)return;const dt=w[J];dt!==void 0&&(dt.update($.inputSource,$.frame,c||o),dt.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",L);for(let $=0;$<w.length;$++){const J=S[$];J!==null&&(S[$]=null,w[$].disconnect(J))}F=null,B=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(y),d=null,f=null,u=null,s=null,x=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",I),s.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,At=null,pt=null;v.depth&&(pt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=v.stencil?Gi:ii,At=v.stencil?ur:Bn);const Bt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Nn(f.textureWidth,f.textureHeight,{format:bn,type:an,depthTexture:new pr(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Nn(d.framebufferWidth,d.framebufferHeight,{format:bn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L($){for(let J=0;J<$.removed.length;J++){const dt=$.removed[J],At=S.indexOf(dt);At>=0&&(S[At]=null,w[At].disconnect(dt))}for(let J=0;J<$.added.length;J++){const dt=$.added[J];let At=S.indexOf(dt);if(At===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=S.length){S.push(dt),At=Bt;break}else if(S[Bt]===null){S[Bt]=dt,At=Bt;break}if(At===-1)break}const pt=w[At];pt&&pt.connect(dt)}}const V=new D,H=new D;function K($,J,dt){V.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(dt.matrixWorld);const At=V.distanceTo(H),pt=J.projectionMatrix.elements,Bt=dt.projectionMatrix.elements,he=pt[14]/(pt[10]-1),Ft=pt[14]/(pt[10]+1),Wt=(pt[9]+1)/pt[5],$t=(pt[9]-1)/pt[5],Nt=(pt[8]-1)/pt[0],me=(Bt[8]+1)/Bt[0],N=he*Nt,we=he*me,ne=At/(-Nt+me),ue=ne*-Nt;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ue),$.translateZ(ne),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),pt[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const St=he+ne,R=Ft+ne,M=N-ue,k=we+(At-ue),j=Wt*Ft/R*St,Q=$t*Ft/R*St;$.projectionMatrix.makePerspective(M,k,j,Q,St,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,dt=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),U.near=T.near=b.near=J,U.far=T.far=b.far=dt,(F!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,B=U.far),U.layers.mask=$.layers.mask|6,b.layers.mask=U.layers.mask&3,T.layers.mask=U.layers.mask&5;const At=$.parent,pt=U.cameras;tt(U,At);for(let Bt=0;Bt<pt.length;Bt++)tt(pt[Bt],At);pt.length===2?K(U,b,T):U.projectionMatrix.copy(b.projectionMatrix),gt($,U,At)};function gt($,J,dt){dt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=fr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function($){return p[$]};let yt=null;function Ut($,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let At=!1;dt.length!==U.cameras.length&&(U.cameras.length=0,At=!0);for(let Ft=0;Ft<dt.length;Ft++){const Wt=dt[Ft];let $t=null;if(d!==null)$t=d.getViewport(Wt);else{const me=u.getViewSubImage(f,Wt);$t=me.viewport,Ft===0&&(t.setRenderTargetTextures(x,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(x))}let Nt=C[Ft];Nt===void 0&&(Nt=new on,Nt.layers.enable(Ft),Nt.viewport=new be,C[Ft]=Nt),Nt.matrix.fromArray(Wt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Wt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set($t.x,$t.y,$t.width,$t.height),Ft===0&&(U.matrix.copy(Nt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),At===!0&&U.cameras.push(Nt)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Ft=u.getDepthInformation(dt[0]);Ft&&Ft.isValid&&Ft.texture&&m.init(Ft,s.renderState)}if(pt&&pt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let Ft=0;Ft<dt.length;Ft++){const Wt=dt[Ft].camera;if(Wt){let $t=p[Wt];$t||($t=new vf,p[Wt]=$t);const Nt=u.getCameraImage(Wt);$t.sourceTexture=Nt}}}}for(let dt=0;dt<w.length;dt++){const At=S[dt],pt=w[dt];At!==null&&pt!==void 0&&pt.update(At,J,c||o)}yt&&yt($,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Xt=new Af;Xt.setAnimationLoop(Ut),this.setAnimationLoop=function($){yt=$},this.dispose=function(){}}}const Ri=new kn,gS=new pe;function _S(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,mf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Ri.copy(x),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(gS.makeRotationFromEuler(Ri)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const w=y.program;i.updateUBOMapping(v,w);const S=t.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function h(v){const y=u();v.__bindingPointIndex=y;const x=n.createBuffer(),w=v.__size,S=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],x=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,E=x.length;S<E;S++){const P=Array.isArray(x[S])?x[S]:[x[S]];for(let b=0,T=P.length;b<T;b++){const C=P[b];if(d(C,S,b,w)===!0){const U=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let W=0;W<F.length;W++){const I=F[W],L=_(I);typeof I=="number"||typeof I=="boolean"?(C.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,U+B,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=0,C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=0,C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=0):(I.toArray(C.__data,B),B+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,y,x,w){const S=v.value,E=y+"_"+x;if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:w[E]=S.clone(),!0;{const P=w[E];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return w[E]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(v){const y=v.uniforms;let x=0;const w=16;for(let E=0,P=y.length;E<P;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let T=0,C=b.length;T<C;T++){const U=b[T],F=Array.isArray(U.value)?U.value:[U.value];for(let B=0,W=F.length;B<W;B++){const I=F[B],L=_(I),V=x%w,H=V%L.boundary,K=V+H;x+=H,K!==0&&w-K<L.storage&&(x+=w-K),U.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=L.storage}}}const S=x%w;return S>0&&(x+=w-S),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Rt("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const yS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function vS(){return An===null&&(An=new Wg(yS,16,16,Ms,ni),An.name="DFG_LUT",An.minFilter=ze,An.magFilter=ze,An.wrapS=Kn,An.wrapT=Kn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class SS{constructor(t={}){const{canvas:e=ng(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=d,m=new Set([Uc,Lc,Dc]),p=new Set([an,Bn,hr,ur,Pc,Ic]),v=new Uint32Array(4),y=new Int32Array(4);let x=null,w=null;const S=[],E=[];let P=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let T=!1;this._outputColorSpace=fn;let C=0,U=0,F=null,B=-1,W=null;const I=new be,L=new be;let V=null;const H=new jt(0);let K=0,tt=e.width,gt=e.height,yt=1,Ut=null,Xt=null;const $=new be(0,0,tt,gt),J=new be(0,0,tt,gt);let dt=!1;const At=new zc;let pt=!1,Bt=!1;const he=new pe,Ft=new D,Wt=new be,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function me(){return F===null?yt:1}let N=i;function we(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cc}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",ie,!1),N===null){const z="webgl2";if(N=we(z,A),N===null)throw we(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Qt("WebGLRenderer: "+A.message),A}let ne,ue,St,R,M,k,j,Q,q,Mt,rt,vt,Pt,nt,at,xt,bt,ot,Vt,O,ut,it,ft,et;function Z(){ne=new vy(N),ne.init(),it=new uS(N,ne),ue=new uy(N,ne,t,it),St=new cS(N,ne),ue.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),R=new My(N),M=new $v,k=new hS(N,ne,St,M,ue,it,R),j=new fy(b),Q=new yy(b),q=new A_(N),ft=new cy(N,q),Mt=new Sy(N,q,R,ft),rt=new Ty(N,Mt,q,R),Vt=new wy(N,ue,k),xt=new dy(M),vt=new qv(b,j,Q,ne,ue,ft,xt),Pt=new _S(b,M),nt=new Zv,at=new nS(ne),ot=new ly(b,j,Q,St,rt,g,l),bt=new aS(b,rt,ue),et=new xS(N,R,ue,St),O=new hy(N,ne,R),ut=new by(N,ne,R),R.programs=vt.programs,b.capabilities=ue,b.extensions=ne,b.properties=M,b.renderLists=nt,b.shadowMap=bt,b.state=St,b.info=R}Z(),_!==an&&(P=new Ay(_,e.width,e.height,s,r));const st=new mS(b,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(A){A!==void 0&&(yt=A,this.setSize(tt,gt,!1))},this.getSize=function(A){return A.set(tt,gt)},this.setSize=function(A,z,Y=!0){if(st.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=A,gt=z,e.width=Math.floor(A*yt),e.height=Math.floor(z*yt),Y===!0&&(e.style.width=A+"px",e.style.height=z+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(tt*yt,gt*yt).floor()},this.setDrawingBufferSize=function(A,z,Y){tt=A,gt=z,yt=Y,e.width=Math.floor(A*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(_===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,z,Y,X){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,z,Y,X),St.viewport(I.copy($).multiplyScalar(yt).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,z,Y,X){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,z,Y,X),St.scissor(L.copy(J).multiplyScalar(yt).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(A){St.setScissorTest(dt=A)},this.setOpaqueSort=function(A){Ut=A},this.setTransparentSort=function(A){Xt=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Y=!0){let X=0;if(A){let G=!1;if(F!==null){const lt=F.texture.format;G=m.has(lt)}if(G){const lt=F.texture.type,mt=p.has(lt),ht=ot.getClearColor(),_t=ot.getClearAlpha(),wt=ht.r,Ct=ht.g,Tt=ht.b;mt?(v[0]=wt,v[1]=Ct,v[2]=Tt,v[3]=_t,N.clearBufferuiv(N.COLOR,0,v)):(y[0]=wt,y[1]=Ct,y[2]=Tt,y[3]=_t,N.clearBufferiv(N.COLOR,0,y))}else X|=N.COLOR_BUFFER_BIT}z&&(X|=N.DEPTH_BUFFER_BIT),Y&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),ot.dispose(),nt.dispose(),at.dispose(),M.dispose(),j.dispose(),Q.dispose(),rt.dispose(),ft.dispose(),et.dispose(),vt.dispose(),st.dispose(),st.removeEventListener("sessionstart",uh),st.removeEventListener("sessionend",dh),bi.stop()};function Dt(A){A.preventDefault(),Eh("WebGLRenderer: Context Lost."),T=!0}function de(){Eh("WebGLRenderer: Context Restored."),T=!1;const A=R.autoReset,z=bt.enabled,Y=bt.autoUpdate,X=bt.needsUpdate,G=bt.type;Z(),R.autoReset=A,bt.enabled=z,bt.autoUpdate=Y,bt.needsUpdate=X,bt.type=G}function ie(A){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function En(A){const z=A.target;z.removeEventListener("dispose",En),Vn(z)}function Vn(A){gm(A),M.remove(A)}function gm(A){const z=M.get(A).programs;z!==void 0&&(z.forEach(function(Y){vt.releaseProgram(Y)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Y,X,G,lt){z===null&&(z=$t);const mt=G.isMesh&&G.matrixWorld.determinant()<0,ht=xm(A,z,Y,X,G);St.setMaterial(X,mt);let _t=Y.index,wt=1;if(X.wireframe===!0){if(_t=Mt.getWireframeAttribute(Y),_t===void 0)return;wt=2}const Ct=Y.drawRange,Tt=Y.attributes.position;let Ht=Ct.start*wt,oe=(Ct.start+Ct.count)*wt;lt!==null&&(Ht=Math.max(Ht,lt.start*wt),oe=Math.min(oe,(lt.start+lt.count)*wt)),_t!==null?(Ht=Math.max(Ht,0),oe=Math.min(oe,_t.count)):Tt!=null&&(Ht=Math.max(Ht,0),oe=Math.min(oe,Tt.count));const xe=oe-Ht;if(xe<0||xe===1/0)return;ft.setup(G,X,ht,Y,_t);let ye,le=O;if(_t!==null&&(ye=q.get(_t),le=ut,le.setIndex(ye)),G.isMesh)X.wireframe===!0?(St.setLineWidth(X.wireframeLinewidth*me()),le.setMode(N.LINES)):le.setMode(N.TRIANGLES);else if(G.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),St.setLineWidth(Et*me()),G.isLineSegments?le.setMode(N.LINES):G.isLineLoop?le.setMode(N.LINE_LOOP):le.setMode(N.LINE_STRIP)}else G.isPoints?le.setMode(N.POINTS):G.isSprite&&le.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)dr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))le.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Et=G._multiDrawStarts,se=G._multiDrawCounts,Jt=G._multiDrawCount,tn=_t?q.get(_t).bytesPerElement:1,$i=M.get(X).currentProgram.getUniforms();for(let en=0;en<Jt;en++)$i.setValue(N,"_gl_DrawID",en),le.render(Et[en]/tn,se[en])}else if(G.isInstancedMesh)le.renderInstances(Ht,xe,G.count);else if(Y.isInstancedBufferGeometry){const Et=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,se=Math.min(Y.instanceCount,Et);le.renderInstances(Ht,xe,se)}else le.render(Ht,xe)};function hh(A,z,Y){A.transparent===!0&&A.side===In&&A.forceSinglePass===!1?(A.side=Ke,A.needsUpdate=!0,Ir(A,z,Y),A.side=vi,A.needsUpdate=!0,Ir(A,z,Y),A.side=In):Ir(A,z,Y)}this.compile=function(A,z,Y=null){Y===null&&(Y=A),w=at.get(Y),w.init(z),E.push(w),Y.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),A!==Y&&A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const X=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const lt=G.material;if(lt)if(Array.isArray(lt))for(let mt=0;mt<lt.length;mt++){const ht=lt[mt];hh(ht,Y,G),X.add(ht)}else hh(lt,Y,G),X.add(lt)}),w=E.pop(),X},this.compileAsync=function(A,z,Y=null){const X=this.compile(A,z,Y);return new Promise(G=>{function lt(){if(X.forEach(function(mt){M.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){G(A);return}setTimeout(lt,10)}ne.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ea=null;function _m(A){ea&&ea(A)}function uh(){bi.stop()}function dh(){bi.start()}const bi=new Af;bi.setAnimationLoop(_m),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){ea=A,st.setAnimationLoop(A),A===null?bi.stop():bi.start()},st.addEventListener("sessionstart",uh),st.addEventListener("sessionend",dh),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const Y=st.enabled===!0&&st.isPresenting===!0,X=P!==null&&(F===null||Y)&&P.begin(b,F);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(z),z=st.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,z,F),w=at.get(A,E.length),w.init(z),E.push(w),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),At.setFromProjectionMatrix(he,Ln,z.reversedDepth),Bt=this.localClippingEnabled,pt=xt.init(this.clippingPlanes,Bt),x=nt.get(A,S.length),x.init(),S.push(x),st.enabled===!0&&st.isPresenting===!0){const mt=b.xr.getDepthSensingMesh();mt!==null&&na(mt,z,-1/0,b.sortObjects)}na(A,z,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(Ut,Xt),Nt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Nt&&ot.addToRenderList(x,A),this.info.render.frame++,pt===!0&&xt.beginShadows();const G=w.state.shadowsArray;if(bt.render(G,A,z),pt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&P.hasRenderPass())===!1){const mt=x.opaque,ht=x.transmissive;if(w.setupLights(),z.isArrayCamera){const _t=z.cameras;if(ht.length>0)for(let wt=0,Ct=_t.length;wt<Ct;wt++){const Tt=_t[wt];ph(mt,ht,A,Tt)}Nt&&ot.render(A);for(let wt=0,Ct=_t.length;wt<Ct;wt++){const Tt=_t[wt];fh(x,A,Tt,Tt.viewport)}}else ht.length>0&&ph(mt,ht,A,z),Nt&&ot.render(A),fh(x,A,z)}F!==null&&U===0&&(k.updateMultisampleRenderTarget(F),k.updateRenderTargetMipmap(F)),X&&P.end(b),A.isScene===!0&&A.onAfterRender(b,A,z),ft.resetDefaultState(),B=-1,W=null,E.pop(),E.length>0?(w=E[E.length-1],pt===!0&&xt.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,S.pop(),S.length>0?x=S[S.length-1]:x=null};function na(A,z,Y,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){X&&Wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const mt=rt.update(A),ht=A.material;ht.visible&&x.push(A,mt,ht,Y,Wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const mt=rt.update(A),ht=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Wt.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Wt.copy(mt.boundingSphere.center)),Wt.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(ht)){const _t=mt.groups;for(let wt=0,Ct=_t.length;wt<Ct;wt++){const Tt=_t[wt],Ht=ht[Tt.materialIndex];Ht&&Ht.visible&&x.push(A,mt,Ht,Y,Wt.z,Tt)}}else ht.visible&&x.push(A,mt,ht,Y,Wt.z,null)}}const lt=A.children;for(let mt=0,ht=lt.length;mt<ht;mt++)na(lt[mt],z,Y,X)}function fh(A,z,Y,X){const{opaque:G,transmissive:lt,transparent:mt}=A;w.setupLightsView(Y),pt===!0&&xt.setGlobalState(b.clippingPlanes,Y),X&&St.viewport(I.copy(X)),G.length>0&&Pr(G,z,Y),lt.length>0&&Pr(lt,z,Y),mt.length>0&&Pr(mt,z,Y),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ph(A,z,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const Ht=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new Nn(1,1,{generateMipmaps:!0,type:Ht?ni:an,minFilter:zi,samples:ue.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const lt=w.state.transmissionRenderTarget[X.id],mt=X.viewport||I;lt.setSize(mt.z*b.transmissionResolutionScale,mt.w*b.transmissionResolutionScale);const ht=b.getRenderTarget(),_t=b.getActiveCubeFace(),wt=b.getActiveMipmapLevel();b.setRenderTarget(lt),b.getClearColor(H),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),Nt&&ot.render(Y);const Ct=b.toneMapping;b.toneMapping=Fn;const Tt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),pt===!0&&xt.setGlobalState(b.clippingPlanes,X),Pr(A,Y,X),k.updateMultisampleRenderTarget(lt),k.updateRenderTargetMipmap(lt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let oe=0,xe=z.length;oe<xe;oe++){const ye=z[oe],{object:le,geometry:Et,material:se,group:Jt}=ye;if(se.side===In&&le.layers.test(X.layers)){const tn=se.side;se.side=Ke,se.needsUpdate=!0,mh(le,Y,X,Et,se,Jt),se.side=tn,se.needsUpdate=!0,Ht=!0}}Ht===!0&&(k.updateMultisampleRenderTarget(lt),k.updateRenderTargetMipmap(lt))}b.setRenderTarget(ht,_t,wt),b.setClearColor(H,K),Tt!==void 0&&(X.viewport=Tt),b.toneMapping=Ct}function Pr(A,z,Y){const X=z.isScene===!0?z.overrideMaterial:null;for(let G=0,lt=A.length;G<lt;G++){const mt=A[G],{object:ht,geometry:_t,group:wt}=mt;let Ct=mt.material;Ct.allowOverride===!0&&X!==null&&(Ct=X),ht.layers.test(Y.layers)&&mh(ht,z,Y,_t,Ct,wt)}}function mh(A,z,Y,X,G,lt){A.onBeforeRender(b,z,Y,X,G,lt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(b,z,Y,X,A,lt),G.transparent===!0&&G.side===In&&G.forceSinglePass===!1?(G.side=Ke,G.needsUpdate=!0,b.renderBufferDirect(Y,z,X,G,A,lt),G.side=vi,G.needsUpdate=!0,b.renderBufferDirect(Y,z,X,G,A,lt),G.side=In):b.renderBufferDirect(Y,z,X,G,A,lt),A.onAfterRender(b,z,Y,X,G,lt)}function Ir(A,z,Y){z.isScene!==!0&&(z=$t);const X=M.get(A),G=w.state.lights,lt=w.state.shadowsArray,mt=G.state.version,ht=vt.getParameters(A,G.state,lt,z,Y),_t=vt.getProgramCacheKey(ht);let wt=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?Q:j).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,wt===void 0&&(A.addEventListener("dispose",En),wt=new Map,X.programs=wt);let Ct=wt.get(_t);if(Ct!==void 0){if(X.currentProgram===Ct&&X.lightsStateVersion===mt)return _h(A,ht),Ct}else ht.uniforms=vt.getUniforms(A),A.onBeforeCompile(ht,b),Ct=vt.acquireProgram(ht,_t),wt.set(_t,Ct),X.uniforms=ht.uniforms;const Tt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Tt.clippingPlanes=xt.uniform),_h(A,ht),X.needsLights=vm(A),X.lightsStateVersion=mt,X.needsLights&&(Tt.ambientLightColor.value=G.state.ambient,Tt.lightProbe.value=G.state.probe,Tt.directionalLights.value=G.state.directional,Tt.directionalLightShadows.value=G.state.directionalShadow,Tt.spotLights.value=G.state.spot,Tt.spotLightShadows.value=G.state.spotShadow,Tt.rectAreaLights.value=G.state.rectArea,Tt.ltc_1.value=G.state.rectAreaLTC1,Tt.ltc_2.value=G.state.rectAreaLTC2,Tt.pointLights.value=G.state.point,Tt.pointLightShadows.value=G.state.pointShadow,Tt.hemisphereLights.value=G.state.hemi,Tt.directionalShadowMap.value=G.state.directionalShadowMap,Tt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Tt.spotShadowMap.value=G.state.spotShadowMap,Tt.spotLightMatrix.value=G.state.spotLightMatrix,Tt.spotLightMap.value=G.state.spotLightMap,Tt.pointShadowMap.value=G.state.pointShadowMap,Tt.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ct,X.uniformsList=null,Ct}function gh(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Po.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function _h(A,z){const Y=M.get(A);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function xm(A,z,Y,X,G){z.isScene!==!0&&(z=$t),k.resetTextureUnits();const lt=z.fog,mt=X.isMeshStandardMaterial?z.environment:null,ht=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ws,_t=(X.isMeshStandardMaterial?Q:j).get(X.envMap||mt),wt=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ct=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!Y.morphAttributes.position,Ht=!!Y.morphAttributes.normal,oe=!!Y.morphAttributes.color;let xe=Fn;X.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xe=b.toneMapping);const ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,le=ye!==void 0?ye.length:0,Et=M.get(X),se=w.state.lights;if(pt===!0&&(Bt===!0||A!==W)){const He=A===W&&X.id===B;xt.setState(X,A,He)}let Jt=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==se.state.version||Et.outputColorSpace!==ht||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==_t||X.fog===!0&&Et.fog!==lt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==xt.numPlanes||Et.numIntersection!==xt.numIntersection)||Et.vertexAlphas!==wt||Et.vertexTangents!==Ct||Et.morphTargets!==Tt||Et.morphNormals!==Ht||Et.morphColors!==oe||Et.toneMapping!==xe||Et.morphTargetsCount!==le)&&(Jt=!0):(Jt=!0,Et.__version=X.version);let tn=Et.currentProgram;Jt===!0&&(tn=Ir(X,z,G));let $i=!1,en=!1,Fs=!1;const fe=tn.getUniforms(),$e=Et.uniforms;if(St.useProgram(tn.program)&&($i=!0,en=!0,Fs=!0),X.id!==B&&(B=X.id,en=!0),$i||W!==A){St.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),fe.setValue(N,"projectionMatrix",A.projectionMatrix),fe.setValue(N,"viewMatrix",A.matrixWorldInverse);const je=fe.map.cameraPosition;je!==void 0&&je.setValue(N,Ft.setFromMatrixPosition(A.matrixWorld)),ue.logarithmicDepthBuffer&&fe.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&fe.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,en=!0,Fs=!0)}if(Et.needsLights&&(se.state.directionalShadowMap.length>0&&fe.setValue(N,"directionalShadowMap",se.state.directionalShadowMap,k),se.state.spotShadowMap.length>0&&fe.setValue(N,"spotShadowMap",se.state.spotShadowMap,k),se.state.pointShadowMap.length>0&&fe.setValue(N,"pointShadowMap",se.state.pointShadowMap,k)),G.isSkinnedMesh){fe.setOptional(N,G,"bindMatrix"),fe.setOptional(N,G,"bindMatrixInverse");const He=G.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),fe.setValue(N,"boneTexture",He.boneTexture,k))}G.isBatchedMesh&&(fe.setOptional(N,G,"batchingTexture"),fe.setValue(N,"batchingTexture",G._matricesTexture,k),fe.setOptional(N,G,"batchingIdTexture"),fe.setValue(N,"batchingIdTexture",G._indirectTexture,k),fe.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&fe.setValue(N,"batchingColorTexture",G._colorsTexture,k));const un=Y.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Vt.update(G,Y,tn),(en||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,fe.setValue(N,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($e.envMap.value=_t,$e.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&($e.envMapIntensity.value=z.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=vS()),en&&(fe.setValue(N,"toneMappingExposure",b.toneMappingExposure),Et.needsLights&&ym($e,Fs),lt&&X.fog===!0&&Pt.refreshFogUniforms($e,lt),Pt.refreshMaterialUniforms($e,X,yt,gt,w.state.transmissionRenderTarget[A.id]),Po.upload(N,gh(Et),$e,k)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Po.upload(N,gh(Et),$e,k),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&fe.setValue(N,"center",G.center),fe.setValue(N,"modelViewMatrix",G.modelViewMatrix),fe.setValue(N,"normalMatrix",G.normalMatrix),fe.setValue(N,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const He=X.uniformsGroups;for(let je=0,ia=He.length;je<ia;je++){const Mi=He[je];et.update(Mi,tn),et.bind(Mi,tn)}}return tn}function ym(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function vm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,z,Y){const X=M.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=z,M.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const Y=M.get(A);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};const Sm=N.createFramebuffer();this.setRenderTarget=function(A,z=0,Y=0){F=A,C=z,U=Y;let X=null,G=!1,lt=!1;if(A){const ht=M.get(A);if(ht.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(N.FRAMEBUFFER,ht.__webglFramebuffer),I.copy(A.viewport),L.copy(A.scissor),V=A.scissorTest,St.viewport(I),St.scissor(L),St.setScissorTest(V),B=-1;return}else if(ht.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(ht.__hasExternalTextures)k.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ct=A.depthTexture;if(ht.__boundDepthTexture!==Ct){if(Ct!==null&&M.has(Ct)&&(A.width!==Ct.image.width||A.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const _t=A.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(lt=!0);const wt=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(wt[z])?X=wt[z][Y]:X=wt[z],G=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?X=M.get(A).__webglMultisampledFramebuffer:Array.isArray(wt)?X=wt[Y]:X=wt,I.copy(A.viewport),L.copy(A.scissor),V=A.scissorTest}else I.copy($).multiplyScalar(yt).floor(),L.copy(J).multiplyScalar(yt).floor(),V=dt;if(Y!==0&&(X=Sm),St.bindFramebuffer(N.FRAMEBUFFER,X)&&St.drawBuffers(A,X),St.viewport(I),St.scissor(L),St.setScissorTest(V),G){const ht=M.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,ht.__webglTexture,Y)}else if(lt){const ht=z;for(let _t=0;_t<A.textures.length;_t++){const wt=M.get(A.textures[_t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+_t,wt.__webglTexture,Y,ht)}}else if(A!==null&&Y!==0){const ht=M.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ht.__webglTexture,Y)}B=-1},this.readRenderTargetPixels=function(A,z,Y,X,G,lt,mt,ht=0){if(!(A&&A.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t){St.bindFramebuffer(N.FRAMEBUFFER,_t);try{const wt=A.textures[ht],Ct=wt.format,Tt=wt.type;if(!ue.textureFormatReadable(Ct)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Tt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&Y>=0&&Y<=A.height-G&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ht),N.readPixels(z,Y,X,G,it.convert(Ct),it.convert(Tt),lt))}finally{const wt=F!==null?M.get(F).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(A,z,Y,X,G,lt,mt,ht=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t)if(z>=0&&z<=A.width-X&&Y>=0&&Y<=A.height-G){St.bindFramebuffer(N.FRAMEBUFFER,_t);const wt=A.textures[ht],Ct=wt.format,Tt=wt.type;if(!ue.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ht),N.bufferData(N.PIXEL_PACK_BUFFER,lt.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ht),N.readPixels(z,Y,X,G,it.convert(Ct),it.convert(Tt),0);const oe=F!==null?M.get(F).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,oe);const xe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ig(N,xe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ht),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,lt),N.deleteBuffer(Ht),N.deleteSync(xe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Y=0){const X=Math.pow(2,-Y),G=Math.floor(A.image.width*X),lt=Math.floor(A.image.height*X),mt=z!==null?z.x:0,ht=z!==null?z.y:0;k.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,mt,ht,G,lt),St.unbindTexture()};const bm=N.createFramebuffer(),Mm=N.createFramebuffer();this.copyTextureToTexture=function(A,z,Y=null,X=null,G=0,lt=null){lt===null&&(G!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=G,G=0):lt=0);let mt,ht,_t,wt,Ct,Tt,Ht,oe,xe;const ye=A.isCompressedTexture?A.mipmaps[lt]:A.image;if(Y!==null)mt=Y.max.x-Y.min.x,ht=Y.max.y-Y.min.y,_t=Y.isBox3?Y.max.z-Y.min.z:1,wt=Y.min.x,Ct=Y.min.y,Tt=Y.isBox3?Y.min.z:0;else{const un=Math.pow(2,-G);mt=Math.floor(ye.width*un),ht=Math.floor(ye.height*un),A.isDataArrayTexture?_t=ye.depth:A.isData3DTexture?_t=Math.floor(ye.depth*un):_t=1,wt=0,Ct=0,Tt=0}X!==null?(Ht=X.x,oe=X.y,xe=X.z):(Ht=0,oe=0,xe=0);const le=it.convert(z.format),Et=it.convert(z.type);let se;z.isData3DTexture?(k.setTexture3D(z,0),se=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(k.setTexture2DArray(z,0),se=N.TEXTURE_2D_ARRAY):(k.setTexture2D(z,0),se=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Jt=N.getParameter(N.UNPACK_ROW_LENGTH),tn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),$i=N.getParameter(N.UNPACK_SKIP_PIXELS),en=N.getParameter(N.UNPACK_SKIP_ROWS),Fs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Tt);const fe=A.isDataArrayTexture||A.isData3DTexture,$e=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const un=M.get(A),He=M.get(z),je=M.get(un.__renderTarget),ia=M.get(He.__renderTarget);St.bindFramebuffer(N.READ_FRAMEBUFFER,je.__webglFramebuffer),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let Mi=0;Mi<_t;Mi++)fe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,M.get(A).__webglTexture,G,Tt+Mi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,M.get(z).__webglTexture,lt,xe+Mi)),N.blitFramebuffer(wt,Ct,mt,ht,Ht,oe,mt,ht,N.DEPTH_BUFFER_BIT,N.NEAREST);St.bindFramebuffer(N.READ_FRAMEBUFFER,null),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||M.has(A)){const un=M.get(A),He=M.get(z);St.bindFramebuffer(N.READ_FRAMEBUFFER,bm),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,Mm);for(let je=0;je<_t;je++)fe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,un.__webglTexture,G,Tt+je):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,un.__webglTexture,G),$e?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,He.__webglTexture,lt,xe+je):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,He.__webglTexture,lt),G!==0?N.blitFramebuffer(wt,Ct,mt,ht,Ht,oe,mt,ht,N.COLOR_BUFFER_BIT,N.NEAREST):$e?N.copyTexSubImage3D(se,lt,Ht,oe,xe+je,wt,Ct,mt,ht):N.copyTexSubImage2D(se,lt,Ht,oe,wt,Ct,mt,ht);St.bindFramebuffer(N.READ_FRAMEBUFFER,null),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else $e?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(se,lt,Ht,oe,xe,mt,ht,_t,le,Et,ye.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(se,lt,Ht,oe,xe,mt,ht,_t,le,ye.data):N.texSubImage3D(se,lt,Ht,oe,xe,mt,ht,_t,le,Et,ye):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,lt,Ht,oe,mt,ht,le,Et,ye.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,lt,Ht,oe,ye.width,ye.height,le,ye.data):N.texSubImage2D(N.TEXTURE_2D,lt,Ht,oe,mt,ht,le,Et,ye);N.pixelStorei(N.UNPACK_ROW_LENGTH,Jt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$i),N.pixelStorei(N.UNPACK_SKIP_ROWS,en),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fs),lt===0&&z.generateMipmaps&&N.generateMipmap(se),St.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),St.unbindTexture()},this.resetState=function(){C=0,U=0,F=null,St.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const bS="modulepreload",MS=function(n){return"/"+n},wu={},rr=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let l=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=l(e.map(c=>{if(c=MS(c),c in wu)return;wu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":bS,h||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),h)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};var Gt=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n.ShapeBuilder="shape-builder",n.Batcher="batcher",n))(Gt||{});const lc=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},io=(n,t)=>lc(n).priority??t,Ee={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(lc).forEach(t=>{t.type.forEach(e=>this._removeHandlers[e]?.(t))}),this},add(...n){return n.map(lc).forEach(t=>{t.type.forEach(e=>{const i=this._addHandlers,s=this._queue;i[e]?i[e]?.(t):(s[e]=s[e]||[],s[e]?.push(t))})}),this},handle(n,t,e){const i=this._addHandlers,s=this._removeHandlers;if(i[n]||s[n])throw new Error(`Extension type ${n} already has a handler`);i[n]=t,s[n]=e;const r=this._queue;return r[n]&&(r[n]?.forEach(o=>t(o)),delete r[n]),this},handleByMap(n,t){return this.handle(n,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(n,t,e=-1){return this.handle(n,i=>{t.findIndex(r=>r.name===i.name)>=0||(t.push({name:i.name,value:i.ref}),t.sort((r,o)=>io(o.value,e)-io(r.value,e)))},i=>{const s=t.findIndex(r=>r.name===i.name);s!==-1&&t.splice(s,1)})},handleByList(n,t,e=-1){return this.handle(n,i=>{t.includes(i.ref)||(t.push(i.ref),t.sort((s,r)=>io(r,e)-io(s,e)))},i=>{const s=t.indexOf(i.ref);s!==-1&&t.splice(s,1)})},mixin(n,...t){for(const e of t)Object.defineProperties(n.prototype,Object.getOwnPropertyDescriptors(e))}},wS={extension:{type:Gt.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await rr(()=>import("./browserAll-6am5i21i.js"),__vite__mapDeps([0,1,2]))}},TS={extension:{type:Gt.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await rr(()=>import("./webworkerAll-D2XLYAxl.js"),__vite__mapDeps([1,2]))}};class Ne{constructor(t,e,i){this._x=e||0,this._y=i||0,this._observer=t}clone(t){return new Ne(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function Df(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Na={exports:{}},Tu;function ES(){return Tu||(Tu=1,(function(n){var t=Object.prototype.hasOwnProperty,e="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(e=!1));function s(l,c,h){this.fn=l,this.context=c,this.once=h||!1}function r(l,c,h,u,f){if(typeof h!="function")throw new TypeError("The listener must be a function");var d=new s(h,u||l,f),g=e?e+c:c;return l._events[g]?l._events[g].fn?l._events[g]=[l._events[g],d]:l._events[g].push(d):(l._events[g]=d,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new i:delete l._events[c]}function a(){this._events=new i,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],h,u;if(this._eventsCount===0)return c;for(u in h=this._events)t.call(h,u)&&c.push(e?u.slice(1):u);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(h)):c},a.prototype.listeners=function(c){var h=e?e+c:c,u=this._events[h];if(!u)return[];if(u.fn)return[u.fn];for(var f=0,d=u.length,g=new Array(d);f<d;f++)g[f]=u[f].fn;return g},a.prototype.listenerCount=function(c){var h=e?e+c:c,u=this._events[h];return u?u.fn?1:u.length:0},a.prototype.emit=function(c,h,u,f,d,g){var _=e?e+c:c;if(!this._events[_])return!1;var m=this._events[_],p=arguments.length,v,y;if(m.fn){switch(m.once&&this.removeListener(c,m.fn,void 0,!0),p){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,h),!0;case 3:return m.fn.call(m.context,h,u),!0;case 4:return m.fn.call(m.context,h,u,f),!0;case 5:return m.fn.call(m.context,h,u,f,d),!0;case 6:return m.fn.call(m.context,h,u,f,d,g),!0}for(y=1,v=new Array(p-1);y<p;y++)v[y-1]=arguments[y];m.fn.apply(m.context,v)}else{var x=m.length,w;for(y=0;y<x;y++)switch(m[y].once&&this.removeListener(c,m[y].fn,void 0,!0),p){case 1:m[y].fn.call(m[y].context);break;case 2:m[y].fn.call(m[y].context,h);break;case 3:m[y].fn.call(m[y].context,h,u);break;case 4:m[y].fn.call(m[y].context,h,u,f);break;default:if(!v)for(w=1,v=new Array(p-1);w<p;w++)v[w-1]=arguments[w];m[y].fn.apply(m[y].context,v)}}return!0},a.prototype.on=function(c,h,u){return r(this,c,h,u,!1)},a.prototype.once=function(c,h,u){return r(this,c,h,u,!0)},a.prototype.removeListener=function(c,h,u,f){var d=e?e+c:c;if(!this._events[d])return this;if(!h)return o(this,d),this;var g=this._events[d];if(g.fn)g.fn===h&&(!f||g.once)&&(!u||g.context===u)&&o(this,d);else{for(var _=0,m=[],p=g.length;_<p;_++)(g[_].fn!==h||f&&!g[_].once||u&&g[_].context!==u)&&m.push(g[_]);m.length?this._events[d]=m.length===1?m[0]:m:o(this,d)}return this},a.prototype.removeAllListeners=function(c){var h;return c?(h=e?e+c:c,this._events[h]&&o(this,h)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,n.exports=a})(Na)),Na.exports}var AS=ES();const Gn=Df(AS),CS=Math.PI*2,RS=180/Math.PI,PS=Math.PI/180;class Ge{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new Ge(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Oa.x=0,Oa.y=0,Oa}}const Oa=new Ge;class qt{constructor(t=1,e=0,i=0,s=1,r=0,o=0){this.array=null,this.a=t,this.b=e,this.c=i,this.d=s,this.tx=r,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,i,s,r,o){return this.a=t,this.b=e,this.c=i,this.d=s,this.tx=r,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const i=e||this.array;return t?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i}apply(t,e){e=e||new Ge;const i=t.x,s=t.y;return e.x=this.a*i+this.c*s+this.tx,e.y=this.b*i+this.d*s+this.ty,e}applyInverse(t,e){e=e||new Ge;const i=this.a,s=this.b,r=this.c,o=this.d,a=this.tx,l=this.ty,c=1/(i*o+r*-s),h=t.x,u=t.y;return e.x=o*c*h+-r*c*u+(l*r-a*o)*c,e.y=i*c*u+-s*c*h+(-l*i+a*s)*c,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),s=this.a,r=this.c,o=this.tx;return this.a=s*e-this.b*i,this.b=s*i+this.b*e,this.c=r*e-this.d*i,this.d=r*i+this.d*e,this.tx=o*e-this.ty*i,this.ty=o*i+this.ty*e,this}append(t){const e=this.a,i=this.b,s=this.c,r=this.d;return this.a=t.a*e+t.b*s,this.b=t.a*i+t.b*r,this.c=t.c*e+t.d*s,this.d=t.c*i+t.d*r,this.tx=t.tx*e+t.ty*s+this.tx,this.ty=t.tx*i+t.ty*r+this.ty,this}appendFrom(t,e){const i=t.a,s=t.b,r=t.c,o=t.d,a=t.tx,l=t.ty,c=e.a,h=e.b,u=e.c,f=e.d;return this.a=i*c+s*u,this.b=i*h+s*f,this.c=r*c+o*u,this.d=r*h+o*f,this.tx=a*c+l*u+e.tx,this.ty=a*h+l*f+e.ty,this}setTransform(t,e,i,s,r,o,a,l,c){return this.a=Math.cos(a+c)*r,this.b=Math.sin(a+c)*r,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(i*this.a+s*this.c),this.ty=e-(i*this.b+s*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const i=this.a,s=this.c;this.a=i*t.a+this.b*t.c,this.b=i*t.b+this.b*t.d,this.c=s*t.a+this.d*t.c,this.d=s*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,i=this.b,s=this.c,r=this.d,o=t.pivot,a=-Math.atan2(-s,r),l=Math.atan2(i,e),c=Math.abs(a+l);return c<1e-5||Math.abs(CS-c)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(e*e+i*i),t.scale.y=Math.sqrt(s*s+r*r),t.position.x=this.tx+(o.x*e+o.y*s),t.position.y=this.ty+(o.x*i+o.y*r),t}invert(){const t=this.a,e=this.b,i=this.c,s=this.d,r=this.tx,o=t*s-e*i;return this.a=s/o,this.b=-e/o,this.c=-i/o,this.d=t/o,this.tx=(i*this.ty-s*r)/o,this.ty=-(t*this.ty-e*r)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new qt;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return DS.identity()}static get shared(){return IS.identity()}}const IS=new qt,DS=new qt,Di=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Li=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Ui=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Fi=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],cc=[],Lf=[],so=Math.sign;function LS(){for(let n=0;n<16;n++){const t=[];cc.push(t);for(let e=0;e<16;e++){const i=so(Di[n]*Di[e]+Ui[n]*Li[e]),s=so(Li[n]*Di[e]+Fi[n]*Li[e]),r=so(Di[n]*Ui[e]+Ui[n]*Fi[e]),o=so(Li[n]*Ui[e]+Fi[n]*Fi[e]);for(let a=0;a<16;a++)if(Di[a]===i&&Li[a]===s&&Ui[a]===r&&Fi[a]===o){t.push(a);break}}}for(let n=0;n<16;n++){const t=new qt;t.set(Di[n],Li[n],Ui[n],Fi[n],0,0),Lf.push(t)}}LS();const ce={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Di[n],uY:n=>Li[n],vX:n=>Ui[n],vY:n=>Fi[n],inv:n=>n&8?n&15:-n&7,add:(n,t)=>cc[n][t],sub:(n,t)=>cc[n][ce.inv(t)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,t)=>Math.abs(n)*2<=Math.abs(t)?t>=0?ce.S:ce.N:Math.abs(t)*2<=Math.abs(n)?n>0?ce.E:ce.W:t>0?n>0?ce.SE:ce.SW:n>0?ce.NE:ce.NW,matrixAppendRotationInv:(n,t,e=0,i=0,s=0,r=0)=>{const o=Lf[ce.inv(t)],a=o.a,l=o.b,c=o.c,h=o.d,u=e-Math.min(0,a*s,c*r,a*s+c*r),f=i-Math.min(0,l*s,h*r,l*s+h*r),d=n.a,g=n.b,_=n.c,m=n.d;n.a=a*d+l*_,n.b=a*g+l*m,n.c=c*d+h*_,n.d=c*g+h*m,n.tx=u*d+f*_+n.tx,n.ty=u*g+f*m+n.ty},transformRectCoords:(n,t,e,i)=>{const{x:s,y:r,width:o,height:a}=n,{x:l,y:c,width:h,height:u}=t;return e===ce.E?(i.set(s+l,r+c,o,a),i):e===ce.S?i.set(h-r-a+l,s+c,a,o):e===ce.W?i.set(h-s-o+l,u-r-a+c,o,a):e===ce.N?i.set(r+l,u-s-o+c,a,o):i.set(s+l,r+c,o,a)}},ro=[new Ge,new Ge,new Ge,new Ge];class Te{constructor(t=0,e=0,i=0,s=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(i),this.height=Number(s)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Te(0,0,0,0)}clone(){return new Te(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,i,s=.5){const{width:r,height:o}=this;if(r<=0||o<=0)return!1;const a=this.x,l=this.y,c=i*(1-s),h=i-c,u=a-c,f=a+r+c,d=l-c,g=l+o+c,_=a+h,m=a+r-h,p=l+h,v=l+o-h;return t>=u&&t<=f&&e>=d&&e<=g&&!(t>_&&t<m&&e>p&&e<v)}intersects(t,e){if(!e){const P=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=P)return!1;const T=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>T}const i=this.left,s=this.right,r=this.top,o=this.bottom;if(s<=i||o<=r)return!1;const a=ro[0].set(t.left,t.top),l=ro[1].set(t.left,t.bottom),c=ro[2].set(t.right,t.top),h=ro[3].set(t.right,t.bottom);if(c.x<=a.x||l.y<=a.y)return!1;const u=Math.sign(e.a*e.d-e.b*e.c);if(u===0||(e.apply(a,a),e.apply(l,l),e.apply(c,c),e.apply(h,h),Math.max(a.x,l.x,c.x,h.x)<=i||Math.min(a.x,l.x,c.x,h.x)>=s||Math.max(a.y,l.y,c.y,h.y)<=r||Math.min(a.y,l.y,c.y,h.y)>=o))return!1;const f=u*(l.y-a.y),d=u*(a.x-l.x),g=f*i+d*r,_=f*s+d*r,m=f*i+d*o,p=f*s+d*o;if(Math.max(g,_,m,p)<=f*a.x+d*a.y||Math.min(g,_,m,p)>=f*h.x+d*h.y)return!1;const v=u*(a.y-c.y),y=u*(c.x-a.x),x=v*i+y*r,w=v*s+y*r,S=v*i+y*o,E=v*s+y*o;return!(Math.max(x,w,S,E)<=v*a.x+y*a.y||Math.min(x,w,S,E)>=v*h.x+y*h.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),i=Math.min(this.x+this.width,t.x+t.width),s=Math.max(this.y,t.y),r=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(i-e,0),this.y=s,this.height=Math.max(r-s,0),this}ceil(t=1,e=.001){const i=Math.ceil((this.x+this.width-e)*t)/t,s=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=i-this.x,this.height=s-this.y,this}scale(t,e=t){return this.x*=t,this.y*=e,this.width*=t,this.height*=e,this}enlarge(t){const e=Math.min(this.x,t.x),i=Math.max(this.x+this.width,t.x+t.width),s=Math.min(this.y,t.y),r=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=i-e,this.y=s,this.height=r-s,this}getBounds(t){return t||(t=new Te),t.copyFrom(this),t}containsRect(t){if(this.width<=0||this.height<=0)return!1;const e=t.x,i=t.y,s=t.x+t.width,r=t.y+t.height;return e>=this.x&&e<this.x+this.width&&i>=this.y&&i<this.y+this.height&&s>=this.x&&s<this.x+this.width&&r>=this.y&&r<this.y+this.height}set(t,e,i,s){return this.x=t,this.y=e,this.width=i,this.height=s,this}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Ba={default:-1};function Me(n="default"){return Ba[n]===void 0&&(Ba[n]=-1),++Ba[n]}const Eu=new Set,Se="8.0.0",US="8.3.4",ms={quiet:!1,noColor:!1},Kt=((n,t,e=3)=>{if(ms.quiet||Eu.has(t))return;let i=new Error().stack;const s=`${t}
Deprecated since v${n}`,r=typeof console.groupCollapsed=="function"&&!ms.noColor;typeof i>"u"?console.warn("PixiJS Deprecation Warning: ",s):(i=i.split(`
`).splice(e).join(`
`),r?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",s),console.warn(i),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",s),console.warn(i))),Eu.add(t)});Object.defineProperties(Kt,{quiet:{get:()=>ms.quiet,set:n=>{ms.quiet=n},enumerable:!0,configurable:!1},noColor:{get:()=>ms.noColor,set:n=>{ms.noColor=n},enumerable:!0,configurable:!1}});const Uf=()=>{};function As(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function Au(n){return!(n&n-1)&&!!n}function Ff(n){const t={};for(const e in n)n[e]!==void 0&&(t[e]=n[e]);return t}const Cu=Object.create(null);function FS(n){const t=Cu[n];return t===void 0&&(Cu[n]=Me("resource")),t}const Nf=class Of extends Gn{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Of.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){Kt(Se,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this._sharedResourceId=null,this.emit("change",this)}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=FS(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Nf.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Cs=Nf;const Bf=class kf extends Gn{constructor(t={}){super(),this.options=t,this._gpuData=Object.create(null),this._gcLastUsed=-1,this.uid=Me("textureSource"),this._resourceType="textureSource",this._resourceId=Me("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.viewDimension="2d",this.arrayLayerCount=1,this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...kf.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.viewDimension=t.viewDimension??t.dimensions,this.arrayLayerCount=t.arrayLayerCount,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new Cs(Ff(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){this.style!==t&&(this._style?.off("change",this._onStyleChange,this),this._style=t,this._style?.on("change",this._onStyleChange,this),this._onStyleChange())}set maxAnisotropy(t){this._style.maxAnisotropy=t}get maxAnisotropy(){return this._style.maxAnisotropy}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.unload(),this.emit("destroy",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=Me("resource"),this.emit("change",this),this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy?.();this._gpuData=Object.create(null)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,i){i||(i=this._resolution),t||(t=this.width),e||(e=this.height);const s=Math.round(t*i),r=Math.round(e*i);return this.width=s/i,this.height=r/i,this._resolution=i,this.pixelWidth===s&&this.pixelHeight===r?!1:(this._refreshPOT(),this.pixelWidth=s,this.pixelHeight=r,this.emit("resize",this),this._resourceId=Me("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Au(this.pixelWidth)&&Au(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Bf.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",viewDimension:"2d",arrayLayerCount:1,mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Tn=Bf;class Hc extends Tn{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let i=t.format;i||(e instanceof Float32Array?i="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?i="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?i="rgba16uint":(e instanceof Int8Array,i="bgra8unorm")),super({...t,resource:e,format:i}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}Hc.extension=Gt.TextureSource;const Ru=new qt;class NS{constructor(t,e){this.mapCoord=new qt,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){this.texture!==t&&(this._texture?.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const i=this.mapCoord;for(let s=0;s<t.length;s+=2){const r=t[s],o=t[s+1];e[s]=r*i.a+o*i.c+i.tx,e[s+1]=r*i.b+o*i.d+i.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const i=t.orig,s=t.trim;s&&(Ru.set(i.width/s.width,0,0,i.height/s.height,-s.x/s.width,-s.y/s.height),this.mapCoord.append(Ru));const r=t.source,o=this.uClampFrame,a=this.clampMargin/r._resolution,l=this.clampOffset/r._resolution;return o[0]=(t.frame.x+a+l)/r.width,o[1]=(t.frame.y+a+l)/r.height,o[2]=(t.frame.x+t.frame.width-a+l)/r.width,o[3]=(t.frame.y+t.frame.height-a+l)/r.height,this.uClampOffset[0]=this.clampOffset/r.pixelWidth,this.uClampOffset[1]=this.clampOffset/r.pixelHeight,this.isSimple=t.frame.width===r.width&&t.frame.height===r.height&&t.rotate===0,!0}}class ae extends Gn{constructor({source:t,label:e,frame:i,orig:s,trim:r,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:c}={}){if(super(),this.uid=Me("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Te,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=t?.source??new Tn,this.noFrame=!i,i)this.frame.copyFrom(i);else{const{width:h,height:u}=this._source;this.frame.width=h,this.frame.height=u}this.orig=s||this.frame,this.trim=r,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=c||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new NS(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:i,height:s}=this._source,r=e.x/i,o=e.y/s,a=e.width/i,l=e.height/s;let c=this.rotate;if(c){const h=a/2,u=l/2,f=r+h,d=o+u;c=ce.add(c,ce.NW),t.x0=f+h*ce.uX(c),t.y0=d+u*ce.uY(c),c=ce.add(c,2),t.x1=f+h*ce.uX(c),t.y1=d+u*ce.uY(c),c=ce.add(c,2),t.x2=f+h*ce.uX(c),t.y2=d+u*ce.uY(c),c=ce.add(c,2),t.x3=f+h*ce.uX(c),t.y3=d+u*ce.uY(c)}else t.x0=r,t.y0=o,t.x1=r+a,t.y1=o,t.x2=r+a,t.y2=o+l,t.x3=r,t.y3=o+l}destroy(t=!1){this._source&&(this._source.off("resize",this.update,this),t&&(this._source.destroy(),this._source=null)),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return Kt(Se,"Texture.baseTexture is now Texture.source"),this._source}}ae.EMPTY=new ae({label:"EMPTY",source:new Tn({label:"EMPTY"})});ae.EMPTY.destroy=Uf;ae.WHITE=new ae({source:new Hc({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});ae.WHITE.destroy=Uf;function zf(n,t,e){const{width:i,height:s}=e.orig,r=e.trim;if(r){const o=r.width,a=r.height;n.minX=r.x-t._x*i,n.maxX=n.minX+o,n.minY=r.y-t._y*s,n.maxY=n.minY+a}else n.minX=-t._x*i,n.maxX=n.minX+i,n.minY=-t._y*s,n.maxY=n.minY+s}const Pu=new qt;class mn{constructor(t=1/0,e=1/0,i=-1/0,s=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Pu,this.minX=t,this.minY=e,this.maxX=i,this.maxY=s}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Te);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=Pu,this}set(t,e,i,s){this.minX=t,this.minY=e,this.maxX=i,this.maxY=s}addFrame(t,e,i,s,r){r||(r=this.matrix);const o=r.a,a=r.b,l=r.c,c=r.d,h=r.tx,u=r.ty;let f=this.minX,d=this.minY,g=this.maxX,_=this.maxY,m=o*t+l*e+h,p=a*t+c*e+u;m<f&&(f=m),p<d&&(d=p),m>g&&(g=m),p>_&&(_=p),m=o*i+l*e+h,p=a*i+c*e+u,m<f&&(f=m),p<d&&(d=p),m>g&&(g=m),p>_&&(_=p),m=o*t+l*s+h,p=a*t+c*s+u,m<f&&(f=m),p<d&&(d=p),m>g&&(g=m),p>_&&(_=p),m=o*i+l*s+h,p=a*i+c*s+u,m<f&&(f=m),p<d&&(d=p),m>g&&(g=m),p>_&&(_=p),this.minX=f,this.minY=d,this.maxX=g,this.maxY=_}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,i=this.minY,s=this.maxX,r=this.maxY,{a:o,b:a,c:l,d:c,tx:h,ty:u}=t;let f=o*e+l*i+h,d=a*e+c*i+u;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*s+l*i+h,d=a*s+c*i+u,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*e+l*r+h,d=a*e+c*r+u,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*s+l*r+h,d=a*s+c*r+u,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,i,s){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<i&&(this.minY=i),this.maxY>s&&(this.maxY=s),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new mn(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,i,s){let r=this.minX,o=this.minY,a=this.maxX,l=this.maxY;s||(s=this.matrix);const c=s.a,h=s.b,u=s.c,f=s.d,d=s.tx,g=s.ty;for(let _=e;_<i;_+=2){const m=t[_],p=t[_+1],v=c*m+u*p+d,y=h*m+f*p+g;r=v<r?v:r,o=y<o?y:o,a=v>a?v:a,l=y>l?y:l}this.minX=r,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var OS={grad:.9,turn:360,rad:360/(2*Math.PI)},$n=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},Ue=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*n)/e+0},pn=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),n>e?e:n>t?n:t},Gf=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},Iu=function(n){return{r:pn(n.r,0,255),g:pn(n.g,0,255),b:pn(n.b,0,255),a:pn(n.a)}},ka=function(n){return{r:Ue(n.r),g:Ue(n.g),b:Ue(n.b),a:Ue(n.a,3)}},BS=/^#([0-9a-f]{3,8})$/i,oo=function(n){var t=n.toString(16);return t.length<2?"0"+t:t},Vf=function(n){var t=n.r,e=n.g,i=n.b,s=n.a,r=Math.max(t,e,i),o=r-Math.min(t,e,i),a=o?r===t?(e-i)/o:r===e?2+(i-t)/o:4+(t-e)/o:0;return{h:60*(a<0?a+6:a),s:r?o/r*100:0,v:r/255*100,a:s}},Hf=function(n){var t=n.h,e=n.s,i=n.v,s=n.a;t=t/360*6,e/=100,i/=100;var r=Math.floor(t),o=i*(1-e),a=i*(1-(t-r)*e),l=i*(1-(1-t+r)*e),c=r%6;return{r:255*[i,a,o,o,l,i][c],g:255*[l,i,i,a,o,o][c],b:255*[o,o,l,i,i,a][c],a:s}},Du=function(n){return{h:Gf(n.h),s:pn(n.s,0,100),l:pn(n.l,0,100),a:pn(n.a)}},Lu=function(n){return{h:Ue(n.h),s:Ue(n.s),l:Ue(n.l),a:Ue(n.a,3)}},Uu=function(n){return Hf((e=(t=n).s,{h:t.h,s:(e*=((i=t.l)<50?i:100-i)/100)>0?2*e/(i+e)*100:0,v:i+e,a:t.a}));var t,e,i},or=function(n){return{h:(t=Vf(n)).h,s:(s=(200-(e=t.s))*(i=t.v)/100)>0&&s<200?e*i/100/(s<=100?s:200-s)*100:0,l:s/2,a:t.a};var t,e,i,s},kS=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,zS=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,GS=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,VS=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,hc={string:[[function(n){var t=BS.exec(n);return t?(n=t[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?Ue(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?Ue(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var t=GS.exec(n)||VS.exec(n);return t?t[2]!==t[4]||t[4]!==t[6]?null:Iu({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(n){var t=kS.exec(n)||zS.exec(n);if(!t)return null;var e,i,s=Du({h:(e=t[1],i=t[2],i===void 0&&(i="deg"),Number(e)*(OS[i]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Uu(s)},"hsl"]],object:[[function(n){var t=n.r,e=n.g,i=n.b,s=n.a,r=s===void 0?1:s;return $n(t)&&$n(e)&&$n(i)?Iu({r:Number(t),g:Number(e),b:Number(i),a:Number(r)}):null},"rgb"],[function(n){var t=n.h,e=n.s,i=n.l,s=n.a,r=s===void 0?1:s;if(!$n(t)||!$n(e)||!$n(i))return null;var o=Du({h:Number(t),s:Number(e),l:Number(i),a:Number(r)});return Uu(o)},"hsl"],[function(n){var t=n.h,e=n.s,i=n.v,s=n.a,r=s===void 0?1:s;if(!$n(t)||!$n(e)||!$n(i))return null;var o=(function(a){return{h:Gf(a.h),s:pn(a.s,0,100),v:pn(a.v,0,100),a:pn(a.a)}})({h:Number(t),s:Number(e),v:Number(i),a:Number(r)});return Hf(o)},"hsv"]]},Fu=function(n,t){for(var e=0;e<t.length;e++){var i=t[e][0](n);if(i)return[i,t[e][1]]}return[null,void 0]},HS=function(n){return typeof n=="string"?Fu(n.trim(),hc.string):typeof n=="object"&&n!==null?Fu(n,hc.object):[null,void 0]},za=function(n,t){var e=or(n);return{h:e.h,s:pn(e.s+100*t,0,100),l:e.l,a:e.a}},Ga=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},Nu=function(n,t){var e=or(n);return{h:e.h,s:e.s,l:pn(e.l+100*t,0,100),a:e.a}},uc=(function(){function n(t){this.parsed=HS(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return Ue(Ga(this.rgba),2)},n.prototype.isDark=function(){return Ga(this.rgba)<.5},n.prototype.isLight=function(){return Ga(this.rgba)>=.5},n.prototype.toHex=function(){return t=ka(this.rgba),e=t.r,i=t.g,s=t.b,o=(r=t.a)<1?oo(Ue(255*r)):"","#"+oo(e)+oo(i)+oo(s)+o;var t,e,i,s,r,o},n.prototype.toRgb=function(){return ka(this.rgba)},n.prototype.toRgbString=function(){return t=ka(this.rgba),e=t.r,i=t.g,s=t.b,(r=t.a)<1?"rgba("+e+", "+i+", "+s+", "+r+")":"rgb("+e+", "+i+", "+s+")";var t,e,i,s,r},n.prototype.toHsl=function(){return Lu(or(this.rgba))},n.prototype.toHslString=function(){return t=Lu(or(this.rgba)),e=t.h,i=t.s,s=t.l,(r=t.a)<1?"hsla("+e+", "+i+"%, "+s+"%, "+r+")":"hsl("+e+", "+i+"%, "+s+"%)";var t,e,i,s,r},n.prototype.toHsv=function(){return t=Vf(this.rgba),{h:Ue(t.h),s:Ue(t.s),v:Ue(t.v),a:Ue(t.a,3)};var t},n.prototype.invert=function(){return Cn({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},n.prototype.saturate=function(t){return t===void 0&&(t=.1),Cn(za(this.rgba,t))},n.prototype.desaturate=function(t){return t===void 0&&(t=.1),Cn(za(this.rgba,-t))},n.prototype.grayscale=function(){return Cn(za(this.rgba,-1))},n.prototype.lighten=function(t){return t===void 0&&(t=.1),Cn(Nu(this.rgba,t))},n.prototype.darken=function(t){return t===void 0&&(t=.1),Cn(Nu(this.rgba,-t))},n.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},n.prototype.alpha=function(t){return typeof t=="number"?Cn({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):Ue(this.rgba.a,3);var e},n.prototype.hue=function(t){var e=or(this.rgba);return typeof t=="number"?Cn({h:t,s:e.s,l:e.l,a:e.a}):Ue(e.h)},n.prototype.isEqual=function(t){return this.toHex()===Cn(t).toHex()},n})(),Cn=function(n){return n instanceof uc?n:new uc(n)},Ou=[],WS=function(n){n.forEach(function(t){Ou.indexOf(t)<0&&(t(uc,hc),Ou.push(t))})};function XS(n,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},i={};for(var s in e)i[e[s]]=s;var r={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,c=i[this.toHex()];if(c)return c;if(o?.closest){var h=this.toRgb(),u=1/0,f="black";if(!r.length)for(var d in e)r[d]=new n(e[d]).toRgb();for(var g in e){var _=(a=h,l=r[g],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));_<u&&(u=_,f=g)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":e[a];return l?new n(l).toRgb():null},"name"])}WS([XS]);const Rs=class tr{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof tr)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const i=typeof t;if(i!==typeof e)return!1;if(i==="number"||i==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((r,o)=>r===e[o]);if(t!==null&&e!==null){const r=Object.keys(t),o=Object.keys(e);return r.length!==o.length?!1:r.every(a=>t[a]===e[a])}return t===e}toRgba(){const[t,e,i,s]=this._components;return{r:t,g:e,b:i,a:s}}toRgb(){const[t,e,i]=this._components;return{r:t,g:e,b:i}}toRgbaString(){const[t,e,i]=this.toUint8RgbArray();return`rgba(${t},${e},${i},${this.alpha})`}toUint8RgbArray(t){const[e,i,s]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(e*255),t[1]=Math.round(i*255),t[2]=Math.round(s*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[e,i,s,r]=this._components;return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[e,i,s]=this._components;return t[0]=e,t[1]=i,t[2]=s,t}toNumber(){return this._int}toBgrNumber(){const[t,e,i]=this.toUint8RgbArray();return(i<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,i,s,r]=tr._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=i,this._components[2]*=s,this._components[3]*=r,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let i=this._int>>16&255,s=this._int>>8&255,r=this._int&255;return e&&(i=i*t+.5|0,s=s*t+.5|0,r=r*t+.5|0),(t*255<<24)+(i<<16)+(s<<8)+r}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,i,s,r;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,i=(o>>8&255)/255,s=(o&255)/255,r=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,i,s,r=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,i,s,r=255]=t,e/=255,i/=255,s/=255,r/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=tr.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=Cn(t);o.isValid()&&({r:e,g:i,b:s,a:r}=o.rgba,e/=255,i/=255,s/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=i,this._components[2]=s,this._components[3]=r,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,i]=this._components;this._int=(t*255<<16)+(e*255<<8)+(i*255|0)}_clamp(t,e=0,i=1){return typeof t=="number"?Math.min(Math.max(t,e),i):(t.forEach((s,r)=>{t[r]=Math.min(Math.max(s,e),i)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof tr||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Rs.shared=new Rs;Rs._temp=new Rs;Rs.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let Pe=Rs;const YS={cullArea:null,cullable:!1,cullableChildren:!0};let Va=0;const Bu=500;function qe(...n){Va!==Bu&&(Va++,Va===Bu?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}const Cr={_registeredResources:new Set,register(n){this._registeredResources.add(n)},unregister(n){this._registeredResources.delete(n)},release(){this._registeredResources.forEach(n=>n.clear())},get registeredCount(){return this._registeredResources.size},isRegistered(n){return this._registeredResources.has(n)},reset(){this._registeredResources.clear()}};class qS{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){let e;return this._index>0?e=this._pool[--this._index]:(e=new this._classType,this._count++),e.init?.(t),e}return(t){t.reset?.(),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){if(this._pool.length>0&&this._pool[0].destroy)for(let t=0;t<this._index;t++)this._pool[t].destroy();this._pool.length=0,this._count=0,this._index=0}}class $S{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new qS(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const i=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[i]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}clear(){this._poolsByClass.forEach(t=>t.clear()),this._poolsByClass.clear()}}const Je=new $S;Cr.register(Je);const jS={get isCachedAsTexture(){return!!this.renderGroup?.isCachedAsTexture},cacheAsTexture(n){typeof n=="boolean"&&n===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(n===!0?{}:n))},updateCacheTexture(){this.renderGroup?.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(n){Kt("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(n)}};function ZS(n,t,e){const i=n.length;let s;if(t>=i||e===0)return;e=t+e>i?i-t:e;const r=i-e;for(s=t;s<r;++s)n[s]=n[s+e];n.length=r}const KS={allowChildren:!0,removeChildren(n=0,t){const e=t??this.children.length,i=e-n,s=[];if(i>0&&i<=e){for(let o=e-1;o>=n;o--){const a=this.children[o];a&&(s.push(a),a.parent=null)}ZS(this.children,n,e);const r=this.renderGroup||this.parentRenderGroup;r&&r.removeChildren(s);for(let o=0;o<s.length;++o){const a=s[o];a.parentRenderLayer?.detach(a),this.emit("childRemoved",a,this,o),s[o].emit("removed",this)}return s.length>0&&this._didViewChangeTick++,s}else if(i===0&&this.children.length===0)return s;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const t=this.getChildAt(n);return this.removeChild(t)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,t)},getChildIndex(n){const t=this.children.indexOf(n);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(n,t){this.allowChildren||Kt(Se,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${n}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(n.parent){const s=n.parent.children.indexOf(n);if(n.parent===this&&s===t)return n;s!==-1&&n.parent.children.splice(s,1)}t===e.length?e.push(n):e.splice(t,0,n),n.parent=this,n.didChange=!0,n._updateFlags=15;const i=this.renderGroup||this.parentRenderGroup;return i&&i.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,t),n.emit("added",this),n},swapChildren(n,t){if(n===t)return;const e=this.getChildIndex(n),i=this.getChildIndex(t);this.children[e]=t,this.children[i]=n;const s=this.renderGroup||this.parentRenderGroup;s&&(s.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){this.parent?.removeChild(this)},reparentChild(...n){return n.length===1?this.reparentChildAt(n[0],this.children.length):(n.forEach(t=>this.reparentChildAt(t,this.children.length)),n[0])},reparentChildAt(n,t){if(n.parent===this)return this.setChildIndex(n,t),n;const e=n.worldTransform.clone();n.removeFromParent(),this.addChildAt(n,t);const i=this.worldTransform.clone();return i.invert(),e.prepend(i),n.setFromMatrix(e),n},replaceChild(n,t){n.updateLocalTransform(),this.addChildAt(t,this.getChildIndex(n)),t.setFromMatrix(n.localTransform),t.updateLocalTransform(),this.removeChild(n)}},JS={collectRenderables(n,t,e){this.parentRenderLayer&&this.parentRenderLayer!==e||this.globalDisplayStatus<7||!this.includeInBuild||(this.sortableChildren&&this.sortChildren(),this.isSimple?this.collectRenderablesSimple(n,t,e):this.renderGroup?t.renderPipes.renderGroup.addRenderGroup(this.renderGroup,n):this.collectRenderablesWithEffects(n,t,e))},collectRenderablesSimple(n,t,e){const i=this.children,s=i.length;for(let r=0;r<s;r++)i[r].collectRenderables(n,t,e)},collectRenderablesWithEffects(n,t,e){const{renderPipes:i}=t;for(let s=0;s<this.effects.length;s++){const r=this.effects[s];i[r.pipe].push(r,this,n)}this.collectRenderablesSimple(n,t,e);for(let s=this.effects.length-1;s>=0;s--){const r=this.effects[s];i[r.pipe].pop(r,this,n)}}};class ku{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class QS{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const i=this._tests[e];if(i.test(t))return Je.get(i.maskClass,t)}return t}returnMaskEffect(t){Je.return(t)}}const dc=new QS;Ee.handleByList(Gt.MaskEffect,dc._effectClasses);const tb={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const n=this.renderGroup||this.parentRenderGroup;n&&(n.structureDidChange=!0)},addEffect(n){this.effects.indexOf(n)===-1&&(this.effects.push(n),this.effects.sort((e,i)=>e.priority-i.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(n){const t=this.effects.indexOf(n);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(n){const t=this._maskEffect;t?.mask!==n&&(t&&(this.removeEffect(t),dc.returnMaskEffect(t),this._maskEffect=null),n!=null&&(this._maskEffect=dc.getMaskEffect(n),this.addEffect(this._maskEffect)))},get mask(){return this._maskEffect?.mask},setMask(n){this._maskOptions={...this._maskOptions,...n},n.mask&&(this.mask=n.mask),this._markStructureAsChanged()},set filters(n){!Array.isArray(n)&&n&&(n=[n]);const t=this._filterEffect||(this._filterEffect=new ku);n=n;const e=n?.length>0,i=t.filters?.length>0,s=e!==i;n=Array.isArray(n)?n.slice(0):n,t.filters=Object.freeze(n),s&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=n??null))},get filters(){return this._filterEffect?.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new ku),this._filterEffect.filterArea=n},get filterArea(){return this._filterEffect?.filterArea}},eb={label:null,get name(){return Kt(Se,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){Kt(Se,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,t=!1){return this.getChildByLabel(n,t)},getChildByLabel(n,t=!1){const e=this.children;for(let i=0;i<e.length;i++){const s=e[i];if(s.label===n||n instanceof RegExp&&n.test(s.label))return s}if(t)for(let i=0;i<e.length;i++){const r=e[i].getChildByLabel(n,!0);if(r)return r}return null},getChildrenByLabel(n,t=!1,e=[]){const i=this.children;for(let s=0;s<i.length;s++){const r=i[s];(r.label===n||n instanceof RegExp&&n.test(r.label))&&e.push(r)}if(t)for(let s=0;s<i.length;s++)i[s].getChildrenByLabel(n,!0,e);return e}},Ye=Je.getPool(qt),ti=Je.getPool(mn),nb=new qt,ib={getFastGlobalBounds(n,t){t||(t=new mn),t.clear(),this._getGlobalBoundsRecursive(!!n,t,this.parentRenderLayer),t.isValid||t.set(0,0,0,0);const e=this.renderGroup||this.parentRenderGroup;return t.applyMatrix(e.worldTransform),t},_getGlobalBoundsRecursive(n,t,e){let i=t;if(n&&this.parentRenderLayer&&this.parentRenderLayer!==e||this.localDisplayStatus!==7||!this.measurable)return;const s=!!this.effects.length;if((this.renderGroup||s)&&(i=ti.get().clear()),this.boundsArea)t.addRect(this.boundsArea,this.worldTransform);else{if(this.renderPipeId){const o=this.bounds;i.addFrame(o.minX,o.minY,o.maxX,o.maxY,this.groupTransform)}const r=this.children;for(let o=0;o<r.length;o++)r[o]._getGlobalBoundsRecursive(n,i,e)}if(s){let r=!1;const o=this.renderGroup||this.parentRenderGroup;for(let a=0;a<this.effects.length;a++)this.effects[a].addBounds&&(r||(r=!0,i.applyMatrix(o.worldTransform)),this.effects[a].addBounds(i,!0));r&&i.applyMatrix(o.worldTransform.copyTo(nb).invert()),t.addBounds(i),ti.return(i)}else this.renderGroup&&(t.addBounds(i,this.relativeGroupTransform),ti.return(i))}};function Wf(n,t,e){e.clear();let i,s;return n.parent?t?i=n.parent.worldTransform:(s=Ye.get().identity(),i=Wc(n,s)):i=qt.IDENTITY,Xf(n,e,i,t),s&&Ye.return(s),e.isValid||e.set(0,0,0,0),e}function Xf(n,t,e,i){if(!n.visible||!n.measurable)return;let s;i?s=n.worldTransform:(n.updateLocalTransform(),s=Ye.get(),s.appendFrom(n.localTransform,e));const r=t,o=!!n.effects.length;if(o&&(t=ti.get().clear()),n.boundsArea)t.addRect(n.boundsArea,s);else{const a=n.bounds;a&&!a.isEmpty()&&(t.matrix=s,t.addBounds(a));for(let l=0;l<n.children.length;l++)Xf(n.children[l],t,s,i)}if(o){for(let a=0;a<n.effects.length;a++)n.effects[a].addBounds?.(t);r.addBounds(t,qt.IDENTITY),ti.return(t)}i||Ye.return(s)}function Wc(n,t){const e=n.parent;return e&&(Wc(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}function Yf(n,t){if(n===16777215||!t)return t;if(t===16777215||!n)return n;const e=n>>16&255,i=n>>8&255,s=n&255,r=t>>16&255,o=t>>8&255,a=t&255,l=e*r/255|0,c=i*o/255|0,h=s*a/255|0;return(l<<16)+(c<<8)+h}const zu=16777215;function Gu(n,t){return n===zu?t:t===zu?n:Yf(n,t)}function Io(n){return((n&255)<<16)+(n&65280)+(n>>16&255)}const sb={getGlobalAlpha(n){if(n)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,e=this.parent;for(;e;)t*=e.alpha,e=e.parent;return t},getGlobalTransform(n=new qt,t){if(t)return n.copyFrom(this.worldTransform);this.updateLocalTransform();const e=Wc(this,Ye.get().identity());return n.appendFrom(this.localTransform,e),Ye.return(e),n},getGlobalTint(n){if(n)return this.renderGroup?Io(this.renderGroup.worldColor):this.parentRenderGroup?Io(Gu(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,e=this.parent;for(;e;)t=Gu(t,e.localColor),e=e.parent;return Io(t)}};function qf(n,t,e){return t.clear(),e||(e=qt.IDENTITY),$f(n,t,e,n,!0),t.isValid||t.set(0,0,0,0),t}function $f(n,t,e,i,s){let r;if(s)r=Ye.get(),r=e.copyTo(r);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const l=n.localTransform;r=Ye.get(),r.appendFrom(l,e)}const o=t,a=!!n.effects.length;if(a&&(t=ti.get().clear()),n.boundsArea)t.addRect(n.boundsArea,r);else{n.renderPipeId&&(t.matrix=r,t.addBounds(n.bounds));const l=n.children;for(let c=0;c<l.length;c++)$f(l[c],t,r,i,!1)}if(a){for(let l=0;l<n.effects.length;l++)n.effects[l].addLocalBounds?.(t,i);o.addBounds(t,qt.IDENTITY),ti.return(t)}Ye.return(r)}function jf(n,t){const e=n.children;for(let i=0;i<e.length;i++){const s=e[i],r=s.uid,o=(s._didViewChangeTick&65535)<<16|s._didContainerChangeTick&65535,a=t.index;(t.data[a]!==r||t.data[a+1]!==o)&&(t.data[t.index]=r,t.data[t.index+1]=o,t.didChange=!0),t.index=a+2,s.children.length&&jf(s,t)}return t.didChange}const rb=new qt,ob={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=n/t*e:this.scale.x=e},_setHeight(n,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=n/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new mn});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didViewChangeTick&&(n.didChange=!0,n.data[0]=this._didViewChangeTick),jf(this,n),n.didChange&&qf(this,n.localBounds,rb),n.localBounds},getBounds(n,t){return Wf(this,n,t||new mn)}},ab={_onRender:null,set onRender(n){const t=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&t?.removeOnRender(this),this._onRender=null;return}this._onRender||t?.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},lb={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(cb))}};function cb(n,t){return n._zIndex-t._zIndex}const hb={getGlobalPosition(n=new Ge,t=!1){return this.parent?this.parent.toGlobal(this._position,n,t):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,t,e=!1){const i=this.getGlobalTransform(Ye.get(),e);return t=i.apply(n,t),Ye.return(i),t},toLocal(n,t,e,i){t&&(n=t.toGlobal(n,e,i));const s=this.getGlobalTransform(Ye.get(),i);return e=s.applyInverse(n,e),Ye.return(s),e}};class Xc{constructor(){this.uid=Me("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}destroy(){this.instructions.length=0,this.renderables.length=0,this.renderPipes=null,this.gcTick=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let ub=0;class db{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1,this.textureStyle=new Cs(this.textureOptions)}createTexture(t,e,i){const s=new Tn({...this.textureOptions,width:t,height:e,resolution:1,antialias:i,autoGarbageCollect:!1});return new ae({source:s,label:`texturePool_${ub++}`})}getOptimalTexture(t,e,i=1,s){let r=Math.ceil(t*i-1e-6),o=Math.ceil(e*i-1e-6);r=As(r),o=As(o);const a=(r<<17)+(o<<1)+(s?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(r,o,s)),l.source._resolution=i,l.source.width=r/i,l.source.height=o/i,l.source.pixelWidth=r,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,e=!1){const i=t.source;return this.getOptimalTexture(t.width,t.height,i._resolution,e)}returnTexture(t,e=!1){const i=this._poolKeyHash[t.uid];e&&(t.source.style=this.textureStyle),this._texturePool[i].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const i=this._texturePool[e];if(i)for(let s=0;s<i.length;s++)i[s].destroy(!0)}this._texturePool={}}}const Zo=new db;Cr.register(Zo);class fb{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new qt,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new Xc,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let i=0;i<e.length;i++){const s=e[i];s._updateFlags=15,this.addChild(s)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(Zo.returnTexture(this.texture,!0),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0;const t=this._parentCacheAsTextureRenderGroup;t&&!t.textureNeedsUpdate&&t.updateCacheTexture()}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const e=this.childrenToUpdate[t];e.list.fill(null),e.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let i=0;i<e.length;i++)this.addChild(e[i])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let i=0;i<e.length;i++)this.removeChild(e[i])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(t){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender(t)}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const e=this.root.children;for(let i=0;i<e.length;i++)this._getChildren(e[i],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const i=t.children;for(let s=0;s<i.length;s++)this._getChildren(i[s],e);return e}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return(this._matrixDirty&1)===0?this._inverseWorldTransform:(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new qt),this._inverseWorldTransform.copyFrom(this.worldTransform).invert())}get textureOffsetInverseTransform(){return(this._matrixDirty&2)===0?this._textureOffsetInverseTransform:(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new qt),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y))}get inverseParentTextureTransform(){if((this._matrixDirty&4)===0)return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new qt),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this.isCachedAsTexture?this.textureOffsetInverseTransform:this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function pb(n,t,e={}){for(const i in t)!e[i]&&t[i]!==void 0&&(n[i]=t[i])}const Ha=new Ne(null),ao=new Ne(null),Wa=new Ne(null,1,1),lo=new Ne(null),Vu=1,mb=2,Xa=4;class si extends Gn{constructor(t={}){super(),this.uid=Me("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.parentRenderLayer=null,this.updateTick=-1,this.localTransform=new qt,this.relativeGroupTransform=new qt,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new Ne(this,0,0),this._scale=Wa,this._pivot=ao,this._origin=lo,this._skew=Ha,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],pb(this,t,{children:!0,parent:!0,effects:!0}),t.children?.forEach(e=>this.addChild(e)),t.parent?.addChild(this)}static mixin(t){Kt("8.8.0","Container.mixin is deprecated, please use extensions.mixin instead."),Ee.mixin(si,t)}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||Kt(Se,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let s=0;s<t.length;s++)this.addChild(t[s]);return t[0]}const e=t[0],i=this.renderGroup||this.parentRenderGroup;return e.parent===this?(this.children.splice(this.children.indexOf(e),1),this.children.push(e),i&&(i.structureDidChange=!0),e):(e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e._updateFlags=15,i&&i.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didViewChangeTick++,e._zIndex!==0&&e.depthOfChildModified(),e)}removeChild(...t){if(t.length>1){for(let s=0;s<t.length;s++)this.removeChild(t[s]);return t[0]}const e=t[0],i=this.children.indexOf(e);return i>-1&&(this._didViewChangeTick++,this.children.splice(i,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parentRenderLayer&&e.parentRenderLayer.detach(e),e.parent=null,this.emit("childRemoved",e,this,i),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),this.renderGroup=Je.get(fb,this),this.groupTransform=qt.IDENTITY,t?.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t?.removeChild(this),Je.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t?.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new qt),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*RS}set angle(t){this.rotation=t*PS}get pivot(){return this._pivot===ao&&(this._pivot=new Ne(this,0,0)),this._pivot}set pivot(t){this._pivot===ao&&(this._pivot=new Ne(this,0,0),this._origin!==lo&&qe("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===Ha&&(this._skew=new Ne(this,0,0)),this._skew}set skew(t){this._skew===Ha&&(this._skew=new Ne(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===Wa&&(this._scale=new Ne(this,1,1)),this._scale}set scale(t){this._scale===Wa&&(this._scale=new Ne(this,0,0)),typeof t=="string"&&(t=parseFloat(t)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get origin(){return this._origin===lo&&(this._origin=new Ne(this,0,0)),this._origin}set origin(t){this._origin===lo&&(this._origin=new Ne(this,0,0),this._pivot!==ao&&qe("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")),typeof t=="number"?this._origin.set(t):this._origin.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const i=this.getLocalBounds();typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,i.width),e!==void 0&&this._setHeight(e,i.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this.origin.set(typeof t.originX=="number"?t.originX:this.origin.x,typeof t.originY=="number"?t.originY:this.origin.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const e=this.localTransform,i=this._scale,s=this._pivot,r=this._origin,o=this._position,a=i._x,l=i._y,c=s._x,h=s._y,u=-r._x,f=-r._y;e.a=this._cx*a,e.b=this._sx*a,e.c=this._cy*l,e.d=this._sy*l,e.tx=o._x-(c*e.a+h*e.c)+(u*e.a+f*e.c)-u,e.ty=o._y-(c*e.b+h*e.d)+(u*e.b+f*e.d)-f}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Vu,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const i=Pe.shared.setValue(t??16777215).toBgrNumber();i!==this.localColor&&(this.localColor=i,this._updateFlags|=Vu,this._onUpdate())}get tint(){return Io(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=mb,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?2:0;(this.localDisplayStatus&2)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Xa,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?0:4;(this.localDisplayStatus&4)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Xa,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=Xa,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;let e;if(this.children.length&&(e=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._origin=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t?.children)&&e)for(let s=0;s<e.length;++s)e[s].destroy(t);this.renderGroup?.destroy(),this.renderGroup=null}}Ee.mixin(si,KS,ib,hb,ab,ob,tb,eb,lb,YS,jS,sb,JS);class Yc extends si{constructor(t){super(t),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this._bounds=new mn(0,1,0,0),this._boundsDirty=!0,this.autoGarbageCollect=t.autoGarbageCollect??!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const e=this.bounds,{x:i,y:s}=t;return i>=e.minX&&i<=e.maxX&&s>=e.minY&&s<=e.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}unload(){this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy();this._gpuData=Object.create(null),this.onViewUpdate()}destroy(t){this.unload(),super.destroy(t),this._bounds=null}collectRenderablesSimple(t,e,i){const{renderPipes:s}=e;s.blendMode.pushBlendMode(this,this.groupBlendMode,t);const o=s[this.renderPipeId];o?.addRenderable&&o.addRenderable(this,t),this.didViewUpdate=!1;const a=this.children,l=a.length;for(let c=0;c<l;c++)a[c].collectRenderables(t,e,i);s.blendMode.popBlendMode(t)}}class xr extends Yc{constructor(t=ae.EMPTY){t instanceof ae&&(t={texture:t});const{texture:e=ae.EMPTY,anchor:i,roundPixels:s,width:r,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new Ne({_onUpdate:()=>{this.onViewUpdate()}}),i?this.anchor=i:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=s??!1,r!==void 0&&(this.width=r),o!==void 0&&(this.height=o)}static from(t,e=!1){return t instanceof ae?new xr(t):new xr(ae.from(t,e))}set texture(t){t||(t=ae.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return zf(this._visualBounds,this._anchor,this._texture),this._visualBounds}get sourceBounds(){return Kt("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,e=this._texture,i=this._bounds,{width:s,height:r}=e.orig;i.minX=-t._x*s,i.maxX=i.minX+s,i.minY=-t._y*r,i.maxY=i.minY+r}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){const i=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(i)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),e!==void 0&&this._setHeight(e,this._texture.orig.height)}}const gb=new mn;function Zf(n,t,e){const i=gb;n.measurable=!0,Wf(n,e,i),t.addBoundsMask(i),n.measurable=!1}function Kf(n,t,e){const i=ti.get();n.measurable=!0;const s=Ye.get().identity(),r=Jf(n,e,s);qf(n,i,r),n.measurable=!1,t.addBoundsMask(i),Ye.return(s),ti.return(i)}function Jf(n,t,e){return n?(n!==t&&(Jf(n.parent,t,e),n.updateLocalTransform(),e.append(n.localTransform)),e):(qe("Mask bounds, renderable is not inside the root container"),e)}class Qf{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof xr),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask!==null&&(this.mask.measurable=!0,this.mask=null)}addBounds(t,e){this.inverse||Zf(this.mask,t,e)}addLocalBounds(t,e){Kf(this.mask,t,e)}containsPoint(t,e){const i=this.mask;return e(i,t)}destroy(){this.reset()}static test(t){return t instanceof xr}}Qf.extension=Gt.MaskEffect;class tp{constructor(t){this.priority=0,this.pipe="colorMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}tp.extension=Gt.MaskEffect;class ep{constructor(t){this.priority=0,this.pipe="stencilMask",t?.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask!==null&&(this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null)}addBounds(t,e){Zf(this.mask,t,e)}addLocalBounds(t,e){Kf(this.mask,t,e)}containsPoint(t,e){const i=this.mask;return e(i,t)}destroy(){this.reset()}static test(t){return t instanceof si}}ep.extension=Gt.MaskEffect;const _b={createCanvas:(n,t)=>{const e=document.createElement("canvas");return e.width=n,e.height=t,e},createImage:()=>new Image,getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,t)=>fetch(n,t),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let Hu=_b;const cn={get(){return Hu},set(n){Hu=n}};class np extends Tn{constructor(t){t.resource||(t.resource=cn.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&"style"in this.resource&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,i=this._resolution){const s=super.resize(t,e,i);return s&&this.resizeCanvas(),s}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}np.extension=Gt.TextureSource;class ko extends Tn{constructor(t){super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}ko.extension=Gt.TextureSource;var zo=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(zo||{});class Ya{constructor(t,e=null,i=0,s=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=i,this._once=s}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const ip=class rn{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Ya(null,null,1/0),this.deltaMS=1/rn.targetFPMS,this.elapsedMS=1/rn.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,i=zo.NORMAL){return this._addListener(new Ya(t,e,i))}addOnce(t,e,i=zo.NORMAL){return this._addListener(new Ya(t,e,i,!0))}_addListener(t){let e=this._head.next,i=this._head;if(!e)t.connect(i);else{for(;e;){if(t.priority>e.priority){t.connect(i);break}i=e,e=e.next}t.previous||t.connect(i)}return this._startIfPossible(),this}remove(t,e){let i=this._head.next;for(;i;)i.match(t,e)?i=i.destroy():i=i.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const r=t-this._lastFrame|0;if(r<this._minElapsedMS)return;this._lastFrame=t-r%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*rn.targetFPMS;const i=this._head;let s=i.next;for(;s;)s=s.emit(this);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),i=Math.min(Math.max(0,e)/1e3,rn.targetFPMS);this._maxElapsedMS=1/i}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!rn._shared){const t=rn._shared=new rn;t.autoStart=!0,t._protected=!0}return rn._shared}static get system(){if(!rn._system){const t=rn._system=new rn;t.autoStart=!0,t._protected=!0}return rn._system}};ip.targetFPMS=.06;let gs=ip,qa;async function xb(){return qa??(qa=(async()=>{const t=cn.get().createCanvas(1,1).getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(o=>{const a=document.createElement("video");a.onloadeddata=()=>o(a),a.onerror=()=>o(null),a.autoplay=!1,a.crossOrigin="anonymous",a.preload="auto",a.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",a.load()});if(!e)return"premultiply-alpha-on-upload";const i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i);const s=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const r=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,r),t.deleteFramebuffer(s),t.deleteTexture(i),t.getExtension("WEBGL_lose_context")?.loseContext(),r[0]<=r[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),qa}const Ko=class sp extends Tn{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...sp.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=gs.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await xb(),this._load=new Promise((i,s)=>{this.isValid?i(this):(this._resolve=i,this._reject=s,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(gs.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(gs.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(gs.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Ko.extension=Gt.TextureSource;Ko.defaultOptions={...Tn.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Ko.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let yb=Ko;const fs=(n,t,e=!1)=>(Array.isArray(n)||(n=[n]),t?n.map(i=>typeof i=="string"||e?t(i):i):n);class vb{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||qe(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const i=fs(t);let s;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.test(e)){s=c.getCacheableAssets(i,e);break}}const r=new Map(Object.entries(s||{}));s||i.forEach(l=>{r.set(l,e)});const o=[...r.keys()],a={cacheKeys:o,keys:i};i.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const c=s?s[l]:e;this._cache.has(l)&&this._cache.get(l)!==c&&qe("[Cache] already has key:",l),this._cache.set(l,r.get(l))})}remove(t){if(!this._cacheMap.has(t)){qe(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(s=>{this._cache.delete(s)}),e.keys.forEach(s=>{this._cacheMap.delete(s)})}get parsers(){return this._parsers}}const ps=new vb,fc=[];Ee.handleByList(Gt.TextureSource,fc);function rp(n={}){const t=n&&n.resource,e=t?n.resource:n,i=t?n:{resource:n};for(let s=0;s<fc.length;s++){const r=fc[s];if(r.test(e))return new r(i)}throw new Error(`Could not find a source type for resource: ${i.resource}`)}function Sb(n={},t=!1){const e=n&&n.resource,i=e?n.resource:n,s=e?n:{resource:n};if(!t&&ps.has(i))return ps.get(i);const r=new ae({source:rp(s)});return r.on("destroy",()=>{ps.has(i)&&ps.remove(i)}),t||ps.set(i,r),r}function bb(n,t=!1){return typeof n=="string"?ps.get(n):n instanceof Tn?new ae({source:n}):Sb(n,t)}ae.from=bb;Tn.from=rp;Ee.add(Qf,tp,ep,yb,ko,np,Hc);var op=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(op||{});function yn(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function Hs(n){return n.split("?")[0].split("#")[0]}function Mb(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function wb(n,t,e){return n.replace(new RegExp(Mb(t),"g"),e)}function Tb(n,t){let e="",i=0,s=-1,r=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(s===a-1||r===1))if(s!==a-1&&r===2){if(e.length<2||i!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",i=0):(e=e.slice(0,l),i=e.length-1-e.lastIndexOf("/")),s=a,r=0;continue}}else if(e.length===2||e.length===1){e="",i=0,s=a,r=0;continue}}}else e.length>0?e+=`/${n.slice(s+1,a)}`:e=n.slice(s+1,a),i=a-s-1;s=a,r=0}else o===46&&r!==-1?++r:r=-1}return e}const yr={toPosix(n){return wb(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){yn(n),n=this.toPosix(n);const t=/^file:\/\/\//.exec(n);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(n);return e?e[0]:""},toAbsolute(n,t,e){if(yn(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const i=Hs(this.toPosix(t??cn.get().getBaseUrl())),s=Hs(this.toPosix(e??this.rootname(i)));return n=this.toPosix(n),n.startsWith("/")?yr.join(s,n.slice(1)):this.isAbsolute(n)?n:this.join(i,n)},normalize(n){if(yn(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let t="";const e=n.startsWith("/");this.hasProtocol(n)&&(t=this.rootname(n),n=n.slice(t.length));const i=n.endsWith("/");return n=Tb(n),n.length>0&&i&&(n+="/"),e?`/${n}`:t+n},isAbsolute(n){return yn(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let t;for(let e=0;e<n.length;++e){const i=n[e];if(yn(i),i.length>0)if(t===void 0)t=i;else{const s=n[e-1]??"";this.joinExtensions.includes(this.extname(s).toLowerCase())?t+=`/../${i}`:t+=`/${i}`}}return t===void 0?".":this.normalize(t)},dirname(n){if(yn(n),n.length===0)return".";n=this.toPosix(n);let t=n.charCodeAt(0);const e=t===47;let i=-1,s=!0;const r=this.getProtocol(n),o=n;n=n.slice(r.length);for(let a=n.length-1;a>=1;--a)if(t=n.charCodeAt(a),t===47){if(!s){i=a;break}}else s=!1;return i===-1?e?"/":this.isUrl(o)?r+n:r:e&&i===1?"//":r+n.slice(0,i)},rootname(n){yn(n),n=this.toPosix(n);let t="";if(n.startsWith("/")?t="/":t=this.getProtocol(n),this.isUrl(n)){const e=n.indexOf("/",t.length);e!==-1?t=n.slice(0,e):t=n,t.endsWith("/")||(t+="/")}return t},basename(n,t){yn(n),t&&yn(t),n=Hs(this.toPosix(n));let e=0,i=-1,s=!0,r;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";let o=t.length-1,a=-1;for(r=n.length-1;r>=0;--r){const l=n.charCodeAt(r);if(l===47){if(!s){e=r+1;break}}else a===-1&&(s=!1,a=r+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(i=r):(o=-1,i=a))}return e===i?i=a:i===-1&&(i=n.length),n.slice(e,i)}for(r=n.length-1;r>=0;--r)if(n.charCodeAt(r)===47){if(!s){e=r+1;break}}else i===-1&&(s=!1,i=r+1);return i===-1?"":n.slice(e,i)},extname(n){yn(n),n=Hs(this.toPosix(n));let t=-1,e=0,i=-1,s=!0,r=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!s){e=o+1;break}continue}i===-1&&(s=!1,i=o+1),a===46?t===-1?t=o:r!==1&&(r=1):t!==-1&&(r=-1)}return t===-1||i===-1||r===0||r===1&&t===i-1&&t===e+1?"":n.slice(t,i)},parse(n){yn(n);const t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;n=Hs(this.toPosix(n));let e=n.charCodeAt(0);const i=this.isAbsolute(n);let s;t.root=this.rootname(n),i||this.hasProtocol(n)?s=1:s=0;let r=-1,o=0,a=-1,l=!0,c=n.length-1,h=0;for(;c>=s;--c){if(e=n.charCodeAt(c),e===47){if(!l){o=c+1;break}continue}a===-1&&(l=!1,a=c+1),e===46?r===-1?r=c:h!==1&&(h=1):r!==-1&&(h=-1)}return r===-1||a===-1||h===0||h===1&&r===a-1&&r===o+1?a!==-1&&(o===0&&i?t.base=t.name=n.slice(1,a):t.base=t.name=n.slice(o,a)):(o===0&&i?(t.name=n.slice(1,r),t.base=n.slice(1,a)):(t.name=n.slice(o,r),t.base=n.slice(o,a)),t.ext=n.slice(r,a)),t.dir=this.dirname(n),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function ap(n,t,e,i,s){const r=t[e];for(let o=0;o<r.length;o++){const a=r[o];e<t.length-1?ap(n.replace(i[e],a),t,e+1,i,s):s.push(n.replace(i[e],a))}}function Eb(n){const t=/\{(.*?)\}/g,e=n.match(t),i=[];if(e){const s=[];e.forEach(r=>{const o=r.substring(1,r.length-1).split(",");s.push(o)}),ap(n,s,0,e,i)}else i.push(n);return i}const Wu=n=>!Array.isArray(n);class lp{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(i=>`${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`).join("&")}}getAlias(t){const{alias:e,src:i}=t;return fs(e||i,r=>typeof r=="string"?r:Array.isArray(r)?r.map(o=>o?.src??o):r?.src?r.src:r,!0)}addManifest(t){this._manifest&&qe("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const i=[];let s=e;Array.isArray(e)||(s=Object.entries(e).map(([r,o])=>typeof o=="string"||Array.isArray(o)?{alias:r,src:o}:{alias:r,...o})),s.forEach(r=>{const o=r.src,a=r.alias;let l;if(typeof a=="string"){const c=this._createBundleAssetId(t,a);i.push(c),l=[a,c]}else{const c=a.map(h=>this._createBundleAssetId(t,h));i.push(...c),l=[...a,...c]}this.add({...r,alias:l,src:o})}),this._bundles[t]=i}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let i;i=r=>{this.hasKey(r)&&qe(`[Resolver] already has key: ${r} overwriting`)},fs(e).forEach(r=>{const{src:o}=r;let{data:a,format:l,loadParser:c,parser:h}=r;const u=fs(o).map(_=>typeof _=="string"?Eb(_):Array.isArray(_)?_:[_]),f=this.getAlias(r);Array.isArray(f)?f.forEach(i):i(f);const d=[],g=_=>{const m=this._parsers.find(p=>p.test(_));return{src:_,...m?.parse(_)}};u.forEach(_=>{_.forEach(m=>{let p={};if(typeof m!="object"?p=g(m):(a=m.data??a,l=m.format??l,(m.loadParser||m.parser)&&(c=m.loadParser??c,h=m.parser??h),p={...g(m.src),...m}),!f)throw new Error(`[Resolver] alias is undefined for this asset: ${p.src}`);p=this._buildResolvedAsset(p,{aliases:f,data:a,format:l,loadParser:c,parser:h,progressSize:r.progressSize}),d.push(p)})}),f.forEach(_=>{this._assetMap[_]=d})})}resolveBundle(t){const e=Wu(t);t=fs(t);const i={};return t.forEach(s=>{const r=this._bundles[s];if(r){const o=this.resolve(r),a={};for(const l in o){const c=o[l];a[this._extractAssetIdFromBundle(s,l)]=c}i[s]=a}}),e?i[t[0]]:i}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const i={};for(const s in e)i[s]=e[s].src;return i}return e.src}resolve(t){const e=Wu(t);t=fs(t);const i={};return t.forEach(s=>{if(!this._resolverHash[s])if(this._assetMap[s]){let r=this._assetMap[s];const o=this._getPreferredOrder(r);o?.priority.forEach(a=>{o.params[a].forEach(l=>{const c=r.filter(h=>h[a]?h[a]===l:!1);c.length&&(r=c)})}),this._resolverHash[s]=r[0]}else this._resolverHash[s]=this._buildResolvedAsset({alias:[s],src:s},{});i[s]=this._resolverHash[s]}),e?i[t[0]]:i}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const i=t[e],s=this._preferredOrder.find(r=>r.params.format.includes(i.format));if(s)return s}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:i,data:s,loadParser:r,parser:o,format:a,progressSize:l}=e;return(this._basePath||this._rootPath)&&(t.src=yr.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=i??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...s||{},...t.data},t.loadParser=r??t.loadParser,t.parser=o??t.parser,t.format=a??t.format??Ab(t.src),l!==void 0&&(t.progressSize=l),t}}lp.RETINA_PREFIX=/@([0-9\.]+)x/;function Ab(n){return n.split(".").pop().split("?").shift().split("#").shift()}const Xu=(n,t)=>{const e=t.split("?")[1];return e&&(n+=`?${e}`),n},cp=class er{constructor(t,e){this.linkedSheets=[];let i=t;t?.source instanceof Tn&&(i={texture:t,data:e});const{texture:s,data:r,cachePrefix:o=""}=i;this.cachePrefix=o,this._texture=s instanceof ae?s:null,this.textureSource=s.source,this.textures={},this.animations={},this.data=r;const a=parseFloat(r.meta.scale);a?(this.resolution=a,s.source.resolution=this.resolution):this.resolution=s.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=er.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}parseSync(){return this._processFrames(0,!0),this._processAnimations(),this.textures}_processFrames(t,e=!1){let i=t;const s=e?1/0:er.BATCH_SIZE;for(;i-t<s&&i<this._frameKeys.length;){const r=this._frameKeys[i],o=this._frames[r],a=o.frame;if(a){let l=null,c=null;const h=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,u=new Te(0,0,Math.floor(h.w)/this.resolution,Math.floor(h.h)/this.resolution);o.rotated?l=new Te(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):l=new Te(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(c=new Te(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[r]=new ae({source:this.textureSource,frame:l,orig:u,trim:c,rotate:o.rotated?2:0,defaultAnchor:o.anchor,defaultBorders:o.borders,label:r.toString()})}i++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let i=0;i<t[e].length;i++){const s=t[e][i];this.animations[e].push(this.textures[s])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*er.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*er.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){for(const e in this.textures)this.textures[e].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&(this._texture?.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};cp.BATCH_SIZE=1e3;let Yu=cp;const Cb=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function hp(n,t,e){const i={};if(n.forEach(s=>{i[s]=t}),Object.keys(t.textures).forEach(s=>{i[`${t.cachePrefix}${s}`]=t.textures[s]}),!e){const s=yr.dirname(n[0]);t.linkedSheets.forEach((r,o)=>{const a=hp([`${s}/${t.data.meta.related_multi_packs[o]}`],r,!0);Object.assign(i,a)})}return i}const Rb={extension:Gt.Asset,cache:{test:n=>n instanceof Yu,getCacheableAssets:(n,t)=>hp(n,t,!1)},resolver:{extension:{type:Gt.ResolveParser,name:"resolveSpritesheet"},test:n=>{const e=n.split("?")[0].split("."),i=e.pop(),s=e.pop();return i==="json"&&Cb.includes(s)},parse:n=>{const t=n.split(".");return{resolution:parseFloat(lp.RETINA_PREFIX.exec(n)?.[1]??"1"),format:t[t.length-2],src:n}}},loader:{name:"spritesheetLoader",id:"spritesheet",extension:{type:Gt.LoadParser,priority:op.Normal,name:"spritesheetLoader"},async testParse(n,t){return yr.extname(t.src).toLowerCase()===".json"&&!!n.frames},async parse(n,t,e){const{texture:i,imageFilename:s,textureOptions:r,cachePrefix:o}=t?.data??{};let a=yr.dirname(t.src);a&&a.lastIndexOf("/")!==a.length-1&&(a+="/");let l;if(i instanceof ae)l=i;else{const u=Xu(a+(s??n.meta.image),t.src);l=(await e.load([{src:u,data:r}]))[u]}const c=new Yu({texture:l.source,data:n,cachePrefix:o});await c.parse();const h=n?.meta?.related_multi_packs;if(Array.isArray(h)){const u=[];for(const d of h){if(typeof d!="string")continue;let g=a+d;t.data?.ignoreMultiPack||(g=Xu(g,t.src),u.push(e.load({src:g,data:{textureOptions:r,ignoreMultiPack:!0}})))}const f=await Promise.all(u);c.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[c].concat(c.linkedSheets.filter(g=>g!==d))})}return c},async unload(n,t,e){await e.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};Ee.add(Rb);const $a=Object.create(null),qu=Object.create(null);function qc(n,t){let e=qu[n];return e===void 0&&($a[t]===void 0&&($a[t]=1),qu[n]=e=$a[t]++),e}let co;function up(){return(!co||co?.isContextLost())&&(co=cn.get().createCanvas().getContext("webgl",{})),co}let ho;function Pb(){if(!ho){ho="mediump";const n=up();n&&n.getShaderPrecisionFormat&&(ho=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return ho}function Ib(n,t,e){return t?n:e?(n=n.replace("out vec4 finalColor;",""),`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function Db(n,t,e){const i=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let s=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return s==="highp"&&i!=="highp"&&(s="mediump"),`precision ${s} float;
${n}`}else if(i!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function Lb(n,t){return t?`#version 300 es
${n}`:n}const Ub={},Fb={};function Nb(n,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const i=e?Ub:Fb;return i[t]?(i[t]++,t+=`-${i[t]}`):i[t]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${t}`}
${n}`}function Ob(n,t){return t?n.replace("#version 300 es",""):n}const ja={stripVersion:Ob,ensurePrecision:Db,addProgramDefines:Ib,setProgramName:Nb,insertVersion:Lb},Ws=Object.create(null),dp=class pc{constructor(t){t={...pc.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,i={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Pb()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let s=t.fragment,r=t.vertex;Object.keys(ja).forEach(o=>{const a=i[o];s=ja[o](s,a,!0),r=ja[o](r,a,!1)}),this.fragment=s,this.vertex=r,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=qc(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null,Ws[this._cacheKey]=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return Ws[e]||(Ws[e]=new pc(t),Ws[e]._cacheKey=e),Ws[e]}};dp.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let fp=dp;const $u={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Bb(n){return $u[n]??$u.float32}const kb={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",vec2i:"sint32x2",vec3i:"sint32x3",vec4i:"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",vec2u:"uint32x2",vec3u:"uint32x3",vec4u:"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"},ju=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|\)|$)/g;function Zu(n,t){let e;for(;(e=ju.exec(n))!==null;){const i=kb[e[3]]??"float32";t[e[2]]={location:parseInt(e[1],10),format:i,stride:Bb(i).stride,offset:0,instance:!1,start:0}}ju.lastIndex=0}function zb(n){return n.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"")}function Gb({source:n,entryPoint:t}){const e={},i=zb(n),s=i.indexOf(`fn ${t}(`);if(s===-1)return e;const r=i.indexOf("->",s);if(r===-1)return e;const o=i.substring(s,r);if(Zu(o,e),Object.keys(e).length===0){const a=o.match(/\(\s*\w+\s*:\s*(\w+)/);if(a){const l=a[1],c=new RegExp(`struct\\s+${l}\\s*\\{([^}]+)\\}`,"s"),h=i.match(c);h&&Zu(h[1],e)}}return e}function Za(n){const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,i=/@binding\((\d+)\)/,s=/var(<[^>]+>)? (\w+)/,r=/:\s*([\w<>]+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,c=n.match(t)?.map(u=>({group:parseInt(u.match(e)[1],10),binding:parseInt(u.match(i)[1],10),name:u.match(s)[2],isUniform:u.match(s)[1]==="<uniform>",type:u.match(r)[1]}));if(!c)return{groups:[],structs:[]};const h=n.match(o)?.map(u=>{const f=u.match(l)[1],d=u.match(a).reduce((g,_)=>{const[m,p]=_.split(":");return g[m.trim()]=p.trim(),g},{});return d?{name:f,members:d}:null}).filter(({name:u})=>c.some(f=>f.type===u||f.type.includes(`<${u}>`)))??[];return{groups:c,structs:h}}var Ni=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Ni||{});function Vb({groups:n}){const t=[];for(let e=0;e<n.length;e++){const i=n[e];t[i.group]||(t[i.group]=[]),i.isUniform?t[i.group].push({binding:i.binding,visibility:Ni.VERTEX|Ni.FRAGMENT,buffer:{type:"uniform"}}):i.type==="sampler"?t[i.group].push({binding:i.binding,visibility:Ni.FRAGMENT,sampler:{type:"filtering"}}):i.type==="texture_2d"||i.type.startsWith("texture_2d<")?t[i.group].push({binding:i.binding,visibility:Ni.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}}):i.type==="texture_2d_array"||i.type.startsWith("texture_2d_array<")?t[i.group].push({binding:i.binding,visibility:Ni.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}):(i.type==="texture_cube"||i.type.startsWith("texture_cube<"))&&t[i.group].push({binding:i.binding,visibility:Ni.FRAGMENT,texture:{sampleType:"float",viewDimension:"cube",multisampled:!1}})}for(let e=0;e<t.length;e++)t[e]||(t[e]=[]);return t}function Hb({groups:n}){const t=[];for(let e=0;e<n.length;e++){const i=n[e];t[i.group]||(t[i.group]={}),t[i.group][i.name]=i.binding}return t}function Wb(n,t){const e=new Set,i=new Set,s=[...n.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),r=[...n.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return i.has(a)?!1:(i.add(a),!0)});return{structs:s,groups:r}}const Xs=Object.create(null);class Jo{constructor(t){this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:e,vertex:i,layout:s,gpuLayout:r,name:o}=t;if(this.name=o,this.fragment=e,this.vertex=i,e.source===i.source){const a=Za(e.source);this.structsAndGroups=a}else{const a=Za(i.source),l=Za(e.source);this.structsAndGroups=Wb(a,l)}this.layout=s??Hb(this.structsAndGroups),this.gpuLayout=r??Vb(this.structsAndGroups),this.autoAssignGlobalUniforms=this.layout[0]?.globalUniforms!==void 0,this.autoAssignLocalUniforms=this.layout[1]?.localUniforms!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,i=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=qc(i,"program")}get attributeData(){return this._attributeData??(this._attributeData=Gb(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null,Xs[this._cacheKey]=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return Xs[e]||(Xs[e]=new Jo(t),Xs[e]._cacheKey=e),Xs[e]}}const pp=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],Xb=pp.reduce((n,t)=>(n[t]=!0,n),{});function Yb(n,t){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const mp=class gp{constructor(t,e){this._touched=0,this.uid=Me("uniform"),this._resourceType="uniformGroup",this._resourceId=Me("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...gp.defaultOptions,...e},this.uniformStructures=t;const i={};for(const s in t){const r=t[s];if(r.name=s,r.size=r.size??1,!Xb[r.type]){const o=r.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);if(o){const[,a,l]=o;throw new Error(`Uniform type ${r.type} is not supported. Use type: '${a}', size: ${l} instead.`)}throw new Error(`Uniform type ${r.type} is not supported. Supported uniform types are: ${pp.join(", ")}`)}r.value??(r.value=Yb(r.type,r.size)),i[s]=r.value}this.uniforms=i,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=qc(Object.keys(i).map(s=>`${s}-${t[s].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};mp.defaultOptions={ubo:!1,isStatic:!1};let _p=mp;class Do{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const i in t){const s=t[i];this.setResource(s,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const i in this.resources)t[e++]=this.resources[i]._resourceId;this._key=t.join("|")}setResource(t,e){const i=this.resources[e];t!==i&&(i&&t.off?.("change",this.onResourceChange,this),t.on?.("change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t,e){const i=this.resources;for(const s in i)i[s]._gcLastUsed=t,i[s]._touched=e}destroy(){const t=this.resources;for(const e in t)t[e]?.off?.("change",this.onResourceChange,this);this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const i in e)e[i]===t&&(e[i]=null)}else this._updateKey()}}var mc=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.CANVAS=4]="CANVAS",n[n.BOTH=3]="BOTH",n))(mc||{});class $c extends Gn{constructor(t){super(),this.uid=Me("shader"),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[],this._destroyed=!1;let{gpuProgram:e,glProgram:i,groups:s,resources:r,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=i,o===void 0&&(o=0,e&&(o|=mc.WEBGPU),i&&(o|=mc.WEBGL)),this.compatibleRenderers=o;const l={};if(!r&&!s&&(r={}),r&&s)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&s&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&s&&a)for(const c in a)for(const h in a[c]){const u=a[c][h];l[u]={group:c,binding:h,name:u}}else if(e&&s&&!a){const c=e.structsAndGroups.groups;a={},c.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,l[h.name]=h})}else if(r){s={},a={},e&&e.structsAndGroups.groups.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u});let c=0;for(const h in r)l[h]||(s[99]||(s[99]=new Do,this._ownedBindGroups.push(s[99])),l[h]={group:99,binding:c,name:h},a[99]=a[99]||{},a[99][c]=h,c++);for(const h in r){const u=h;let f=r[h];!f.source&&!f._resourceType&&(f=new _p(f));const d=l[u];d&&(s[d.group]||(s[d.group]=new Do,this._ownedBindGroups.push(s[d.group])),s[d.group].setResource(f,d.binding))}}this.groups=s,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(s,l)}addResource(t,e,i){var s,r;(s=this._uniformBindMap)[e]||(s[e]={}),(r=this._uniformBindMap[e])[i]||(r[i]=t),this.groups[e]||(this.groups[e]=new Do,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const i={};for(const s in e){const r=e[s];Object.defineProperty(i,r.name,{get(){return t[r.group].getResource(r.binding)},set(o){t[r.group].setResource(o,r.binding)}})}return i}destroy(t=!1){this._destroyed||(this._destroyed=!0,this.emit("destroy",this),t&&(this.gpuProgram?.destroy(),this.glProgram?.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(e=>{e.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null)}static from(t){const{gpu:e,gl:i,...s}=t;let r,o;return e&&(r=Jo.from(e)),i&&(o=fp.from(i)),new $c({gpuProgram:r,glProgram:o,...s})}}const qb={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},Ka=0,Ja=1,Qa=2,tl=3,el=4,nl=5,gc=class xp{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Ka)}set blend(t){!!(this.data&1<<Ka)!==t&&(this.data^=1<<Ka)}get offsets(){return!!(this.data&1<<Ja)}set offsets(t){!!(this.data&1<<Ja)!==t&&(this.data^=1<<Ja)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Qa)}set culling(t){!!(this.data&1<<Qa)!==t&&(this.data^=1<<Qa)}get depthTest(){return!!(this.data&1<<tl)}set depthTest(t){!!(this.data&1<<tl)!==t&&(this.data^=1<<tl)}get depthMask(){return!!(this.data&1<<nl)}set depthMask(t){!!(this.data&1<<nl)!==t&&(this.data^=1<<nl)}get clockwiseFrontFace(){return!!(this.data&1<<el)}set clockwiseFrontFace(t){!!(this.data&1<<el)!==t&&(this.data^=1<<el)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=qb[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new xp;return t.depthTest=!1,t.blend=!0,t}};gc.default2d=gc.for2d();let yp=gc;const _c=[];Ee.handleByNamedList(Gt.Environment,_c);async function $b(n){if(!n)for(let t=0;t<_c.length;t++){const e=_c[t];if(e.value.test()){await e.value.load();return}}}let Ys;function jb(){if(typeof Ys=="boolean")return Ys;try{Ys=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Ys=!1}return Ys}function Ku(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=vp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=tM(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let f=e;f<s;f+=e){const d=n[f],g=n[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return vr(r,o,e,a,l,c,0),o}function vp(n,t,e,i,s){let r;if(s===uM(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Ju(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Ju(o/i|0,n[o],n[o+1],r);return r&&Ps(r,r.next)&&(br(r),r=r.next),r}function Yi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ps(e,e.next)||_e(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function vr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&rM(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Kb(n,i,s,r):Zb(n)){t.push(l.i,n.i,c.i),br(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Jb(Yi(n),t),vr(n,t,e,i,s,r,2)):o===2&&Qb(n,t,e,i,s,r):vr(Yi(n),t,e,i,s,r,1);break}}}function Zb(n){const t=n.prev,e=n,i=n.next;if(_e(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&nr(s,a,r,l,o,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kb(n,t,e,i){const s=n.prev,r=n,o=n.next;if(_e(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),p=xc(d,g,t,e,i),v=xc(_,m,t,e,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&nr(a,h,l,u,c,f,y.x,y.y)&&_e(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&nr(a,h,l,u,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&nr(a,h,l,u,c,f,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&nr(a,h,l,u,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jb(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Ps(i,s)&&bp(i,e,e.next,s)&&Sr(i,s)&&Sr(s,i)&&(t.push(i.i,e.i,s.i),br(e),br(e.next),e=n=s),e=e.next}while(e!==n);return Yi(e)}function Qb(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lM(o,a)){let l=Mp(o,a);o=Yi(o,o.next),l=Yi(l,l.next),vr(o,t,e,i,s,r,0),vr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function tM(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=vp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(aM(c))}s.sort(eM);for(let r=0;r<s.length;r++)e=nM(s[r],e);return e}function eM(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function nM(n,t){const e=iM(n,t);if(!e)return t;const i=Mp(e,n);return Yi(i,i.next),Yi(e,e.next)}function iM(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(Ps(n,e))return e;do{if(Ps(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Sp(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const u=Math.abs(s-e.y)/(i-e.x);Sr(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&sM(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function sM(n,t){return _e(n.prev,n,t.prev)<0&&_e(t.next,n,n.next)<0}function rM(n,t,e,i){let s=n;do s.z===0&&(s.z=xc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,oM(s)}function oM(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function xc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function aM(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Sp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function nr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Sp(n,t,e,i,s,r,o,a)}function lM(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!cM(n,t)&&(Sr(n,t)&&Sr(t,n)&&hM(n,t)&&(_e(n.prev,n,t.prev)||_e(n,t.prev,t))||Ps(n,t)&&_e(n.prev,n,n.next)>0&&_e(t.prev,t,t.next)>0)}function _e(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ps(n,t){return n.x===t.x&&n.y===t.y}function bp(n,t,e,i){const s=fo(_e(n,t,e)),r=fo(_e(n,t,i)),o=fo(_e(e,i,n)),a=fo(_e(e,i,t));return!!(s!==r&&o!==a||s===0&&uo(n,e,t)||r===0&&uo(n,i,t)||o===0&&uo(e,n,i)||a===0&&uo(e,t,i))}function uo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function fo(n){return n>0?1:n<0?-1:0}function cM(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&bp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Sr(n,t){return _e(n.prev,n,n.next)<0?_e(n,t,n.next)>=0&&_e(n,n.prev,t)>=0:_e(n,t,n.prev)<0||_e(n,n.next,t)<0}function hM(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Mp(n,t){const e=yc(n.i,n.x,n.y),i=yc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ju(n,t,e,i){const s=yc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function br(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uM(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}const dM=Ku.default||Ku;var wp=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(wp||{});class fM{constructor(t){this.items=[],this._name=t}emit(t,e,i,s,r,o,a,l){const{name:c,items:h}=this;for(let u=0,f=h.length;u<f;u++)h[u][c](t,e,i,s,r,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const pM=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Tp=class Ep extends Gn{constructor(t){super(),this.tick=0,this.uid=Me("renderer"),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const e=[...pM,...this.config.runners??[]];this._addRunners(...e),this._unsafeEvalCheck()}async init(t={}){const e=t.skipExtensionImports===!0?!0:t.manageImports===!1;await $b(e),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const i in this._systemsHash)t={...this._systemsHash[i].constructor.defaultOptions,...t};t={...Ep.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let i=0;i<this.runners.init.items.length;i++)await this.runners.init.items[i].init(t);this._initOptions=t}render(t,e){this.tick++;let i=t;if(i instanceof si&&(i={container:i},e&&(Kt(Se,"passing a second argument is deprecated, please use render options instead"),i.target=e.renderTexture)),i.target||(i.target=this.view.renderTarget),i.target===this.view.renderTarget&&(this._lastObjectRendered=i.container,i.clearColor??(i.clearColor=this.background.colorRgba),i.clear??(i.clear=this.background.clearBeforeRender)),i.clearColor){const s=Array.isArray(i.clearColor)&&i.clearColor.length===4;i.clearColor=s?i.clearColor:Pe.shared.setValue(i.clearColor).toArray()}i.transform||(i.container.updateLocalTransform(),i.transform=i.container.localTransform),i.container.visible&&(i.container.enableRenderGroup(),this.runners.prerender.emit(i),this.runners.renderStart.emit(i),this.runners.render.emit(i),this.runners.renderEnd.emit(i),this.runners.postrender.emit(i))}resize(t,e,i){const s=this.view.resolution;this.view.resize(t,e,i),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),i!==void 0&&i!==s&&this.runners.resolutionChange.emit(i)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=wp.ALL);const{clear:i,clearColor:s,target:r,mipLevel:o,layer:a}=t;Pe.shared.setValue(s??this.background.colorRgba),e.renderTarget.clear(r,i,Pe.shared.toArray(),o??0,a??0)}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new fM(e)})}_addSystems(t){let e;for(e in t){const i=t[e];this._addSystem(i.value,i.name)}}_addSystem(t,e){const i=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=i,this._systemsHash[e]=i;for(const s in this.runners)this.runners[s].add(i);return this}_addPipes(t,e){const i=e.reduce((s,r)=>(s[r.name]=r.value,s),{});t.forEach(s=>{const r=s.value,o=s.name,a=i[o];this.renderPipes[o]=new r(this,a?new a:null),this.runners.destroy.add(this.renderPipes[o])})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),(t===!0||typeof t=="object"&&t.releaseGlobalResources)&&Cr.release(),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!jb())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Tp.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ap=Tp,po;function mM(n){return po!==void 0||(po=(()=>{const t={stencil:!0,failIfMajorPerformanceCaveat:n??Ap.defaultOptions.failIfMajorPerformanceCaveat};try{if(!cn.get().getWebGLRenderingContext())return!1;let i=cn.get().createCanvas().getContext("webgl",t);const s=!!i?.getContextAttributes()?.stencil;if(i){const r=i.getExtension("WEBGL_lose_context");r&&r.loseContext()}return i=null,s}catch{return!1}})()),po}let mo;async function gM(n={}){return mo!==void 0||(mo=await(async()=>{const t=cn.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),mo}const Qu=["webgl","webgpu","canvas"];async function _M(n){let t=[];n.preference?(t.push(n.preference),Qu.forEach(r=>{r!==n.preference&&t.push(r)})):t=Qu.slice();let e,i={};for(let r=0;r<t.length;r++){const o=t[r];if(o==="webgpu"&&await gM()){const{WebGPURenderer:a}=await rr(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-BoRboovo.js");return{WebGPURenderer:l}},__vite__mapDeps([3,4,5,2]));e=a,i={...n,...n.webgpu};break}else if(o==="webgl"&&mM(n.failIfMajorPerformanceCaveat??Ap.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await rr(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-BG3UPJX5.js");return{WebGLRenderer:l}},__vite__mapDeps([6,4,5,2]));e=a,i={...n,...n.webgl};break}else if(o==="canvas"){const{CanvasRenderer:a}=await rr(async()=>{const{CanvasRenderer:l}=await import("./CanvasRenderer-BGh2PBxf.js");return{CanvasRenderer:l}},__vite__mapDeps([7,5,2]));e=a,i={...n,...n.canvasOptions};break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");const s=new e;return await s.init(i),s}const Cp="8.16.0";class Rp{static init(){globalThis.__PIXI_APP_INIT__?.(this,Cp)}static destroy(){}}Rp.extension=Gt.Application;class xM{constructor(t){this._renderer=t}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,Cp)}destroy(){this._renderer=null}}xM.extension={type:[Gt.WebGLSystem,Gt.WebGPUSystem],name:"initHook",priority:-10};class Pp{static init(t){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{const{clientWidth:s,clientHeight:r}=this._resizeTo;e=s,i=r}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=t.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}Pp.extension=Gt.Application;class Ip{static init(t){t=Object.assign({autoStart:!0,sharedTicker:!1},t),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,zo.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=t.sharedTicker?gs.shared:new gs,t.autoStart&&this.start()}static destroy(){if(this._ticker){const t=this._ticker;this.ticker=null,t.destroy()}}}Ip.extension=Gt.Application;Ee.add(Pp);Ee.add(Ip);const Dp=class vc{constructor(...t){this.stage=new si,t[0]!==void 0&&Kt(Se,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.stage||(this.stage=new si),this.renderer=await _M(t),vc._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Kt(Se,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const i=vc._plugins.slice(0);i.reverse(),i.forEach(s=>{s.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Dp._plugins=[];let jc=Dp;Ee.handleByList(Gt.Application,jc._plugins);Ee.add(Rp);var il,td;function yM(){if(td)return il;td=1,il=e;var n={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},t=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function e(r){var o=[];return r.replace(t,function(a,l,c){var h=l.toLowerCase();for(c=s(c),h=="m"&&c.length>2&&(o.push([l].concat(c.splice(0,2))),h="l",l=l=="m"?"l":"L");;){if(c.length==n[h])return c.unshift(l),o.push(c);if(c.length<n[h])throw new Error("malformed path data");o.push([l].concat(c.splice(0,n[h])))}}),o}var i=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function s(r){var o=r.match(i);return o?o.map(Number):[]}return il}var vM=yM();const SM=Df(vM);function bM(n,t){const e=SM(n),i=[];let s=null,r=0,o=0;for(let a=0;a<e.length;a++){const l=e[a],c=l[0],h=l;switch(c){case"M":r=h[1],o=h[2],t.moveTo(r,o);break;case"m":r+=h[1],o+=h[2],t.moveTo(r,o);break;case"H":r=h[1],t.lineTo(r,o);break;case"h":r+=h[1],t.lineTo(r,o);break;case"V":o=h[1],t.lineTo(r,o);break;case"v":o+=h[1],t.lineTo(r,o);break;case"L":r=h[1],o=h[2],t.lineTo(r,o);break;case"l":r+=h[1],o+=h[2],t.lineTo(r,o);break;case"C":r=h[5],o=h[6],t.bezierCurveTo(h[1],h[2],h[3],h[4],r,o);break;case"c":t.bezierCurveTo(r+h[1],o+h[2],r+h[3],o+h[4],r+h[5],o+h[6]),r+=h[5],o+=h[6];break;case"S":r=h[3],o=h[4],t.bezierCurveToShort(h[1],h[2],r,o);break;case"s":t.bezierCurveToShort(r+h[1],o+h[2],r+h[3],o+h[4]),r+=h[3],o+=h[4];break;case"Q":r=h[3],o=h[4],t.quadraticCurveTo(h[1],h[2],r,o);break;case"q":t.quadraticCurveTo(r+h[1],o+h[2],r+h[3],o+h[4]),r+=h[3],o+=h[4];break;case"T":r=h[1],o=h[2],t.quadraticCurveToShort(r,o);break;case"t":r+=h[1],o+=h[2],t.quadraticCurveToShort(r,o);break;case"A":r=h[6],o=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],r,o);break;case"a":r+=h[6],o+=h[7],t.arcToSvg(h[1],h[2],h[3],h[4],h[5],r,o);break;case"Z":case"z":t.closePath(),i.length>0&&(s=i.pop(),s?(r=s.startX,o=s.startY):(r=0,o=0)),s=null;break;default:qe(`Unknown SVG path command: ${c}`)}c!=="Z"&&c!=="z"&&s===null&&(s={startX:r,startY:o},i.push(s))}return t}class Zc{constructor(t=0,e=0,i=0){this.type="circle",this.x=t,this.y=e,this.radius=i}clone(){return new Zc(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const i=this.radius*this.radius;let s=this.x-t,r=this.y-e;return s*=s,r*=r,s+r<=i}strokeContains(t,e,i,s=.5){if(this.radius===0)return!1;const r=this.x-t,o=this.y-e,a=this.radius,l=(1-s)*i,c=Math.sqrt(r*r+o*o);return c<=a+l&&c>a-(i-l)}getBounds(t){return t||(t=new Te),t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Kc{constructor(t=0,e=0,i=0,s=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=i,this.halfHeight=s}clone(){return new Kc(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let i=(t-this.x)/this.halfWidth,s=(e-this.y)/this.halfHeight;return i*=i,s*=s,i+s<=1}strokeContains(t,e,i,s=.5){const{halfWidth:r,halfHeight:o}=this;if(r<=0||o<=0)return!1;const a=i*(1-s),l=i-a,c=r-l,h=o-l,u=r+a,f=o+a,d=t-this.x,g=e-this.y,_=d*d/(c*c)+g*g/(h*h),m=d*d/(u*u)+g*g/(f*f);return _>1&&m<=1}getBounds(t){return t||(t=new Te),t.x=this.x-this.halfWidth,t.y=this.y-this.halfHeight,t.width=this.halfWidth*2,t.height=this.halfHeight*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function MM(n,t,e,i,s,r){const o=n-e,a=t-i,l=s-e,c=r-i,h=o*l+a*c,u=l*l+c*c;let f=-1;u!==0&&(f=h/u);let d,g;f<0?(d=e,g=i):f>1?(d=s,g=r):(d=e+f*l,g=i+f*c);const _=n-d,m=t-g;return _*_+m*m}let wM,TM;class ar{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const i=[];for(let s=0,r=e.length;s<r;s++)i.push(e[s].x,e[s].y);e=i}this.points=e,this.closePath=!0}isClockwise(){let t=0;const e=this.points,i=e.length;for(let s=0;s<i;s+=2){const r=e[s],o=e[s+1],a=e[(s+2)%i],l=e[(s+3)%i];t+=(a-r)*(l+o)}return t<0}containsPolygon(t){const e=this.getBounds(wM),i=t.getBounds(TM);if(!e.containsRect(i))return!1;const s=t.points;for(let r=0;r<s.length;r+=2){const o=s[r],a=s[r+1];if(!this.contains(o,a))return!1}return!0}clone(){const t=this.points.slice(),e=new ar(t);return e.closePath=this.closePath,e}contains(t,e){let i=!1;const s=this.points.length/2;for(let r=0,o=s-1;r<s;o=r++){const a=this.points[r*2],l=this.points[r*2+1],c=this.points[o*2],h=this.points[o*2+1];l>e!=h>e&&t<(c-a)*((e-l)/(h-l))+a&&(i=!i)}return i}strokeContains(t,e,i,s=.5){const r=i*i,o=r*(1-s),a=r-o,{points:l}=this,c=l.length-(this.closePath?0:2);for(let h=0;h<c;h+=2){const u=l[h],f=l[h+1],d=l[(h+2)%l.length],g=l[(h+3)%l.length],_=MM(t,e,u,f,d,g),m=Math.sign((d-u)*(e-f)-(g-f)*(t-u));if(_<=(m<0?a:o))return!0}return!1}getBounds(t){t||(t=new Te);const e=this.points;let i=1/0,s=-1/0,r=1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=2){const c=e[a],h=e[a+1];i=c<i?c:i,s=c>s?c:s,r=h<r?h:r,o=h>o?h:o}return t.x=i,t.width=s-i,t.y=r,t.height=o-r,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return Kt("8.11.0","Polygon.lastX is deprecated, please use Polygon.lastX instead."),this.points[this.points.length-2]}get y(){return Kt("8.11.0","Polygon.y is deprecated, please use Polygon.lastY instead."),this.points[this.points.length-1]}get startX(){return this.points[0]}get startY(){return this.points[1]}}const go=(n,t,e,i,s,r,o)=>{const a=n-e,l=t-i,c=Math.sqrt(a*a+l*l);return c>=s-r&&c<=s+o};class Jc{constructor(t=0,e=0,i=0,s=0,r=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=i,this.height=s,this.radius=r}getBounds(t){return t||(t=new Te),t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new Jc(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const i=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+i&&e<=this.y+this.height-i||t>=this.x+i&&t<=this.x+this.width-i)return!0;let s=t-(this.x+i),r=e-(this.y+i);const o=i*i;if(s*s+r*r<=o||(s=t-(this.x+this.width-i),s*s+r*r<=o)||(r=e-(this.y+this.height-i),s*s+r*r<=o)||(s=t-(this.x+i),s*s+r*r<=o))return!0}return!1}strokeContains(t,e,i,s=.5){const{x:r,y:o,width:a,height:l,radius:c}=this,h=i*(1-s),u=i-h,f=r+c,d=o+c,g=a-c*2,_=l-c*2,m=r+a,p=o+l;return(t>=r-h&&t<=r+u||t>=m-u&&t<=m+h)&&e>=d&&e<=d+_||(e>=o-h&&e<=o+u||e>=p-u&&e<=p+h)&&t>=f&&t<=f+g?!0:t<f&&e<d&&go(t,e,f,d,c,u,h)||t>m-c&&e<d&&go(t,e,m-c,d,c,u,h)||t>m-c&&e>p-c&&go(t,e,m-c,p-c,c,u,h)||t<f&&e>p-c&&go(t,e,f,p-c,c,u,h)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const Lp={};function EM(n,t,e){let i=2166136261;for(let s=0;s<t;s++)i^=n[s].uid,i=Math.imul(i,16777619),i>>>=0;return Lp[i]||AM(n,t,i,e)}function AM(n,t,e,i){const s={};let r=0;for(let a=0;a<i;a++){const l=a<t?n[a]:ae.EMPTY.source;s[r++]=l.source,s[r++]=l.style}const o=new Do(s);return Lp[e]=o,o}class ed{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this.uint32View=null,this.float32View=null,this.uint16View=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._int32View=null,this._float64Array=null,this._bigUint64Array=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function nd(n,t,e,i){if(e??(e=0),i??(i=Math.min(n.byteLength-e,t.byteLength)),!(e&7)&&!(i&7)){const s=i/8;new Float64Array(t,0,s).set(new Float64Array(n,e,s))}else if(!(e&3)&&!(i&3)){const s=i/4;new Float32Array(t,0,s).set(new Float32Array(n,e,s))}else new Uint8Array(t).set(new Uint8Array(n,e,i))}const CM={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var RM=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",n[n.NONE=5]="NONE",n))(RM||{});function id(n,t){return t.alphaMode==="no-premultiply-alpha"&&CM[n]||n}const PM=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function IM(n){let t="";for(let e=0;e<n;++e)e>0&&(t+=`
else `),e<n-1&&(t+=`if(test == ${e}.0){}`);return t}function DM(n,t){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);try{for(;;){const i=PM.replace(/%forloop%/gi,IM(n));if(t.shaderSource(e,i),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))n=n/2|0;else break}}finally{t.deleteShader(e)}return n}let cs=null;function LM(){if(cs)return cs;const n=up();return cs=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),cs=DM(cs,n),n.getExtension("WEBGL_lose_context")?.loseContext(),cs}class UM{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class FM{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new UM,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null,this.elements=null}}const lr=[];let Go=0;Cr.register({clear:()=>{if(lr.length>0)for(const n of lr)n&&n.destroy();lr.length=0,Go=0}});function sd(){return Go>0?lr[--Go]:new FM}function rd(n){n.elements=null,lr[Go++]=n}let qs=0;const Up=class Fp{constructor(t){this.uid=Me("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],t={...Fp.defaultOptions,...t},t.maxTextures||(Kt("v8.8.0","maxTextures is a required option for Batcher now, please pass it in the options"),t.maxTextures=LM());const{maxTextures:e,attributesInitialSize:i,indicesInitialSize:s}=t;this.attributeBuffer=new ed(i*4),this.indexBuffer=new Uint16Array(s),this.maxTextures=e}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)rd(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t._indexStart=this.indexSize,t._attributeStart=this.attributeSize,t._batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.attributeSize*this.vertexSize}checkAndUpdateTexture(t,e){const i=t._batch.textures.ids[e._source.uid];return!i&&i!==0?!1:(t._textureId=i,t.texture=e,!0)}updateElement(t){this.dirty=!0;const e=this.attributeBuffer;t.packAsQuad?this.packQuadAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId):this.packAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let i=sd(),s=i.textures;s.clear();const r=e[this.elementStart];let o=id(r.blendMode,r.texture._source),a=r.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const l=this.attributeBuffer.float32View,c=this.attributeBuffer.uint32View,h=this.indexBuffer;let u=this._batchIndexSize,f=this._batchIndexStart,d="startBatch",g=[];const _=this.maxTextures;for(let m=this.elementStart;m<this.elementSize;++m){const p=e[m];e[m]=null;const y=p.texture._source,x=id(p.blendMode,y),w=o!==x||a!==p.topology;if(y._batchTick===qs&&!w){p._textureId=y._textureBindLocation,u+=p.indexSize,p.packAsQuad?(this.packQuadAttributes(p,l,c,p._attributeStart,p._textureId),this.packQuadIndex(h,p._indexStart,p._attributeStart/this.vertexSize)):(this.packAttributes(p,l,c,p._attributeStart,p._textureId),this.packIndex(p,h,p._indexStart,p._attributeStart/this.vertexSize)),p._batch=i,g.push(p);continue}y._batchTick=qs,(s.count>=_||w)&&(this._finishBatch(i,f,u-f,s,o,a,t,d,g),d="renderBatch",f=u,o=x,a=p.topology,i=sd(),s=i.textures,s.clear(),g=[],++qs),p._textureId=y._textureBindLocation=s.count,s.ids[y.uid]=s.count,s.textures[s.count++]=y,p._batch=i,g.push(p),u+=p.indexSize,p.packAsQuad?(this.packQuadAttributes(p,l,c,p._attributeStart,p._textureId),this.packQuadIndex(h,p._indexStart,p._attributeStart/this.vertexSize)):(this.packAttributes(p,l,c,p._attributeStart,p._textureId),this.packIndex(p,h,p._indexStart,p._attributeStart/this.vertexSize))}s.count>0&&(this._finishBatch(i,f,u-f,s,o,a,t,d,g),f=u,++qs),this.elementStart=this.elementSize,this._batchIndexStart=f,this._batchIndexSize=u}_finishBatch(t,e,i,s,r,o,a,l,c){t.gpuBindGroup=null,t.bindGroup=null,t.action=l,t.batcher=this,t.textures=s,t.blendMode=r,t.topology=o,t.start=e,t.size=i,t.elements=c,++qs,this.batches[this.batchIndex++]=t,a.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),i=new ed(e);nd(this.attributeBuffer.rawBinaryData,i.rawBinaryData),this.attributeBuffer=i}_resizeIndexBuffer(t){const e=this.indexBuffer;let i=Math.max(t,e.length*1.5);i+=i%2;const s=i>65535?new Uint32Array(i):new Uint16Array(i);if(s.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let r=0;r<e.length;r++)s[r]=e[r];else nd(e.buffer,s.buffer);this.indexBuffer=s}packQuadIndex(t,e,i){t[e]=i+0,t[e+1]=i+1,t[e+2]=i+2,t[e+3]=i+0,t[e+4]=i+2,t[e+5]=i+3}packIndex(t,e,i,s){const r=t.indices,o=t.indexSize,a=t.indexOffset,l=t.attributeOffset;for(let c=0;c<o;c++)e[i++]=s+r[c+a]-l}destroy(t={}){if(this.batches!==null){for(let e=0;e<this.batchIndex;e++)rd(this.batches[e]);this.batches=null,this.geometry.destroy(!0),this.geometry=null,t.shader&&(this.shader?.destroy(),this.shader=null);for(let e=0;e<this._elements.length;e++)this._elements[e]&&(this._elements[e]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};Up.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let NM=Up;var Ze=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(Ze||{});class Mr extends Gn{constructor(t){let{data:e,size:i}=t;const{usage:s,label:r,shrinkToFit:o}=t;super(),this._gpuData=Object.create(null),this._gcLastUsed=-1,this.autoGarbageCollect=!0,this.uid=Me("buffer"),this._resourceType="buffer",this._resourceId=Me("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,i??(i=e?.byteLength);const a=!!e;this.descriptor={size:i,usage:s,mappedAtCreation:a,label:r},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&Ze.STATIC)}set static(t){t?this.descriptor.usage|=Ze.STATIC:this.descriptor.usage&=~Ze.STATIC}setDataWithSize(t,e,i){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){i&&this.emit("update",this);return}const s=this._data;if(this._data=t,this._dataInt32=null,!s||s.length!==t.length){!this.shrinkToFit&&s&&t.byteLength<s.byteLength?i&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=Me("resource"),this.emit("change",this));return}i&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}unload(){this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy();this._gpuData=Object.create(null)}destroy(){this.destroyed=!0,this.unload(),this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Np(n,t){if(!(n instanceof Mr)){let e=t?Ze.INDEX:Ze.VERTEX;n instanceof Array&&(t?(n=new Uint32Array(n),e=Ze.INDEX|Ze.COPY_DST):(n=new Float32Array(n),e=Ze.VERTEX|Ze.COPY_DST)),n=new Mr({data:n,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return n}function OM(n,t,e){const i=n.getAttribute(t);if(!i)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const s=i.buffer.data;let r=1/0,o=1/0,a=-1/0,l=-1/0;const c=s.BYTES_PER_ELEMENT,h=(i.offset||0)/c,u=(i.stride||8)/c;for(let f=h;f<s.length;f+=u){const d=s[f],g=s[f+1];d>a&&(a=d),g>l&&(l=g),d<r&&(r=d),g<o&&(o=g)}return e.minX=r,e.minY=o,e.maxX=a,e.maxY=l,e}function BM(n){return(n instanceof Mr||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=Np(n.buffer,!1),n}class kM extends Gn{constructor(t={}){super(),this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this.uid=Me("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new mn,this._boundsDirty=!0;const{attributes:e,indexBuffer:i,topology:s}=t;if(this.buffers=[],this.attributes={},e)for(const r in e)this.addAttribute(r,e[r]);this.instanceCount=t.instanceCount??1,i&&this.addIndex(i),this.topology=s||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}addAttribute(t,e){const i=BM(e);this.buffers.indexOf(i.buffer)===-1&&(this.buffers.push(i.buffer),i.buffer.on("update",this.onBufferUpdate,this),i.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=i}addIndex(t){this.indexBuffer=Np(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,OM(this,"aPosition",this._bounds)):this._bounds}unload(){this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy();this._gpuData=Object.create(null)}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.unload(),this.indexBuffer?.destroy(),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const zM=new Float32Array(1),GM=new Uint32Array(1);class VM extends kM{constructor(){const e=new Mr({data:zM,label:"attribute-batch-buffer",usage:Ze.VERTEX|Ze.COPY_DST,shrinkToFit:!1}),i=new Mr({data:GM,label:"index-batch-buffer",usage:Ze.INDEX|Ze.COPY_DST,shrinkToFit:!1}),s=24;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:s,offset:0},aUV:{buffer:e,format:"float32x2",stride:s,offset:8},aColor:{buffer:e,format:"unorm8x4",stride:s,offset:16},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:s,offset:20}},indexBuffer:i})}}function od(n,t,e){if(n)for(const i in n){const s=i.toLocaleLowerCase(),r=t[s];if(r){let o=n[i];i==="header"&&(o=o.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&r.push(`//----${e}----//`),r.push(o)}else qe(`${i} placement hook does not exist in shader`)}}const HM=/\{\{(.*?)\}\}/g;function ad(n){const t={};return(n.match(HM)?.map(i=>i.replace(/[{()}]/g,""))??[]).forEach(i=>{t[i]=[]}),t}function ld(n,t){let e;const i=/@in\s+([^;]+);/g;for(;(e=i.exec(n))!==null;)t.push(e[1])}function cd(n,t,e=!1){const i=[];ld(t,i),n.forEach(a=>{a.header&&ld(a.header,i)});const s=i;e&&s.sort();const r=s.map((a,l)=>`       @location(${l}) ${a},`).join(`
`);let o=t.replace(/@in\s+[^;]+;\s*/g,"");return o=o.replace("{{in}}",`
${r}
`),o}function hd(n,t){let e;const i=/@out\s+([^;]+);/g;for(;(e=i.exec(n))!==null;)t.push(e[1])}function WM(n){const e=/\b(\w+)\s*:/g.exec(n);return e?e[1]:""}function XM(n){const t=/@.*?\s+/g;return n.replace(t,"")}function YM(n,t){const e=[];hd(t,e),n.forEach(l=>{l.header&&hd(l.header,e)});let i=0;const s=e.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${i++}) ${l}`).join(`,
`),r=e.sort().map(l=>`       var ${XM(l)};`).join(`
`),o=`return VSOutput(
            ${e.sort().map(l=>` ${WM(l)}`).join(`,
`)});`;let a=t.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${s}
`),a=a.replace("{{start}}",`
${r}
`),a=a.replace("{{return}}",`
${o}
`),a}function ud(n,t){let e=n;for(const i in t){const s=t[i];s.join(`
`).length?e=e.replace(`{{${i}}}`,`//-----${i} START-----//
${s.join(`
`)}
//----${i} FINISH----//`):e=e.replace(`{{${i}}}`,"")}return e}const yi=Object.create(null),sl=new Map;let qM=0;function $M({template:n,bits:t}){const e=Op(n,t);if(yi[e])return yi[e];const{vertex:i,fragment:s}=ZM(n,t);return yi[e]=Bp(i,s,t),yi[e]}function jM({template:n,bits:t}){const e=Op(n,t);return yi[e]||(yi[e]=Bp(n.vertex,n.fragment,t)),yi[e]}function ZM(n,t){const e=t.map(o=>o.vertex).filter(o=>!!o),i=t.map(o=>o.fragment).filter(o=>!!o);let s=cd(e,n.vertex,!0);s=YM(e,s);const r=cd(i,n.fragment,!0);return{vertex:s,fragment:r}}function Op(n,t){return t.map(e=>(sl.has(e)||sl.set(e,qM++),sl.get(e))).sort((e,i)=>e-i).join("-")+n.vertex+n.fragment}function Bp(n,t,e){const i=ad(n),s=ad(t);return e.forEach(r=>{od(r.vertex,i,r.name),od(r.fragment,s,r.name)}),{vertex:ud(n,i),fragment:ud(t,s)}}const KM=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,JM=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,QM=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,tw=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`,ew={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},nw={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function iw({bits:n,name:t}){const e=$M({template:{fragment:JM,vertex:KM},bits:[ew,...n]});return Jo.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function sw({bits:n,name:t}){return new fp({name:t,...jM({template:{vertex:QM,fragment:tw},bits:[nw,...n]})})}const rw={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},ow={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},rl={};function aw(n){const t=[];if(n===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let i=0;i<n;i++)t.push(`@group(1) @binding(${e++}) var textureSource${i+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${i+1}: sampler;`)}return t.join(`
`)}function lw(n){const t=[];if(n===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<n;e++)e===n-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function cw(n){return rl[n]||(rl[n]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${aw(n)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${lw(n)}
            `}}),rl[n]}const ol={};function hw(n){const t=[];for(let e=0;e<n;e++)e>0&&t.push("else"),e<n-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function uw(n){return ol[n]||(ol[n]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${n}];

            `,main:`

                ${hw(n)}
            `}}),ol[n]}const dw={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},fw={name:"round-pixels-bit",vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},dd={};function pw(n){let t=dd[n];if(t)return t;const e=new Int32Array(n);for(let i=0;i<n;i++)e[i]=i;return t=dd[n]=new _p({uTextures:{value:e,type:"i32",size:n}},{isStatic:!0}),t}class fd extends $c{constructor(t){const e=sw({name:"batch",bits:[ow,uw(t),fw]}),i=iw({name:"batch",bits:[rw,cw(t),dw]});super({glProgram:e,gpuProgram:i,resources:{batchSamplers:pw(t)}}),this.maxTextures=t}}let $s=null;const kp=class zp extends NM{constructor(t){super(t),this.geometry=new VM,this.name=zp.extension.name,this.vertexSize=6,$s??($s=new fd(t.maxTextures)),this.shader=$s}packAttributes(t,e,i,s,r){const o=r<<16|t.roundPixels&65535,a=t.transform,l=a.a,c=a.b,h=a.c,u=a.d,f=a.tx,d=a.ty,{positions:g,uvs:_}=t,m=t.color,p=t.attributeOffset,v=p+t.attributeSize;for(let y=p;y<v;y++){const x=y*2,w=g[x],S=g[x+1];e[s++]=l*w+h*S+f,e[s++]=u*S+c*w+d,e[s++]=_[x],e[s++]=_[x+1],i[s++]=m,i[s++]=o}}packQuadAttributes(t,e,i,s,r){const o=t.texture,a=t.transform,l=a.a,c=a.b,h=a.c,u=a.d,f=a.tx,d=a.ty,g=t.bounds,_=g.maxX,m=g.minX,p=g.maxY,v=g.minY,y=o.uvs,x=t.color,w=r<<16|t.roundPixels&65535;e[s+0]=l*m+h*v+f,e[s+1]=u*v+c*m+d,e[s+2]=y.x0,e[s+3]=y.y0,i[s+4]=x,i[s+5]=w,e[s+6]=l*_+h*v+f,e[s+7]=u*v+c*_+d,e[s+8]=y.x1,e[s+9]=y.y1,i[s+10]=x,i[s+11]=w,e[s+12]=l*_+h*p+f,e[s+13]=u*p+c*_+d,e[s+14]=y.x2,e[s+15]=y.y2,i[s+16]=x,i[s+17]=w,e[s+18]=l*m+h*p+f,e[s+19]=u*p+c*m+d,e[s+20]=y.x3,e[s+21]=y.y3,i[s+22]=x,i[s+23]=w}_updateMaxTextures(t){this.shader.maxTextures!==t&&($s=new fd(t),this.shader=$s)}destroy(){this.shader=null,super.destroy()}};kp.extension={type:[Gt.Batcher],name:"default"};let mw=kp;class Rr{constructor(t){this.items=Object.create(null);const{renderer:e,type:i,onUnload:s,priority:r,name:o}=t;this._renderer=e,e.gc.addResourceHash(this,"items",i,r??0),this._onUnload=s,this.name=o}add(t){return this.items[t.uid]?!1:(this.items[t.uid]=t,t.once("unload",this.remove,this),t._gcLastUsed=this._renderer.gc.now,!0)}remove(t,...e){if(!this.items[t.uid])return;const i=t._gpuData[this._renderer.uid];i&&(this._onUnload?.(t,...e),i.destroy(),t._gpuData[this._renderer.uid]=null,this.items[t.uid]=null)}removeAll(...t){Object.values(this.items).forEach(e=>e&&this.remove(e,...t))}destroy(...t){this.removeAll(...t),this.items=Object.create(null),this._renderer=null,this._onUnload=null}}function gw(n,t,e,i,s,r,o,a=null){let l=0;e*=t,s*=r;const c=a.a,h=a.b,u=a.c,f=a.d,d=a.tx,g=a.ty;for(;l<o;){const _=n[e],m=n[e+1];i[s]=c*_+u*m+d,i[s+1]=h*_+f*m+g,s+=r,e+=t,l++}}function _w(n,t,e,i){let s=0;for(t*=e;s<i;)n[t]=0,n[t+1]=0,t+=e,s++}function Gp(n,t,e,i,s){const r=t.a,o=t.b,a=t.c,l=t.d,c=t.tx,h=t.ty;e||(e=0),i||(i=2),s||(s=n.length/i-e);let u=e*i;for(let f=0;f<s;f++){const d=n[u],g=n[u+1];n[u]=r*d+a*g+c,n[u+1]=o*d+l*g+h,u+=i}}const xw=new qt;class Qc{constructor(){this.packAsQuad=!1,this.batcherName="default",this.topology="triangle-list",this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.renderable&&this.applyTransform?this.renderable.groupBlendMode:"normal"}get color(){const t=this.baseColor,e=t>>16|t&65280|(t&255)<<16,i=this.renderable;return i?Yf(e,i.groupColor)+(this.alpha*i.groupAlpha*255<<24):e+(this.alpha*255<<24)}get transform(){return this.renderable?.groupTransform||xw}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.attributeOffset=this.attributeOffset,t.attributeSize=this.attributeSize,t.baseColor=this.baseColor,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData,t.topology=this.topology}reset(){this.applyTransform=!0,this.renderable=null,this.topology="triangle-list"}destroy(){this.renderable=null,this.texture=null,this.geometryData=null,this._batcher=null,this._batch=null}}const wr={extension:{type:Gt.ShapeBuilder,name:"circle"},build(n,t){let e,i,s,r,o,a;if(n.type==="circle"){const x=n;if(o=a=x.radius,o<=0)return!1;e=x.x,i=x.y,s=r=0}else if(n.type==="ellipse"){const x=n;if(o=x.halfWidth,a=x.halfHeight,o<=0||a<=0)return!1;e=x.x,i=x.y,s=r=0}else{const x=n,w=x.width/2,S=x.height/2;e=x.x+w,i=x.y+S,o=a=Math.max(0,Math.min(x.radius,Math.min(w,S))),s=w-o,r=S-a}if(s<0||r<0)return!1;const l=Math.ceil(2.3*Math.sqrt(o+a)),c=l*8+(s?4:0)+(r?4:0);if(c===0)return!1;if(l===0)return t[0]=t[6]=e+s,t[1]=t[3]=i+r,t[2]=t[4]=e-s,t[5]=t[7]=i-r,!0;let h=0,u=l*4+(s?2:0)+2,f=u,d=c,g=s+o,_=r,m=e+g,p=e-g,v=i+_;if(t[h++]=m,t[h++]=v,t[--u]=v,t[--u]=p,r){const x=i-_;t[f++]=p,t[f++]=x,t[--d]=x,t[--d]=m}for(let x=1;x<l;x++){const w=Math.PI/2*(x/l),S=s+Math.cos(w)*o,E=r+Math.sin(w)*a,P=e+S,b=e-S,T=i+E,C=i-E;t[h++]=P,t[h++]=T,t[--u]=T,t[--u]=b,t[f++]=b,t[f++]=C,t[--d]=C,t[--d]=P}g=s,_=r+a,m=e+g,p=e-g,v=i+_;const y=i-_;return t[h++]=m,t[h++]=v,t[--d]=y,t[--d]=m,s&&(t[h++]=p,t[h++]=v,t[--d]=y,t[--d]=p),!0},triangulate(n,t,e,i,s,r){if(n.length===0)return;let o=0,a=0;for(let h=0;h<n.length;h+=2)o+=n[h],a+=n[h+1];o/=n.length/2,a/=n.length/2;let l=i;t[l*e]=o,t[l*e+1]=a;const c=l++;for(let h=0;h<n.length;h+=2)t[l*e]=n[h],t[l*e+1]=n[h+1],h>0&&(s[r++]=l,s[r++]=c,s[r++]=l-1),l++;s[r++]=c+1,s[r++]=c,s[r++]=l-1}},yw={...wr,extension:{...wr.extension,name:"ellipse"}},vw={...wr,extension:{...wr.extension,name:"roundedRectangle"}},Vp=1e-4,pd=1e-4;function Sw(n){const t=n.length;if(t<6)return 1;let e=0;for(let i=0,s=n[t-2],r=n[t-1];i<t;i+=2){const o=n[i],a=n[i+1];e+=(o-s)*(a+r),s=o,r=a}return e<0?-1:1}function md(n,t,e,i,s,r,o,a){const l=n-e*s,c=t-i*s,h=n+e*r,u=t+i*r;let f,d;o?(f=i,d=-e):(f=-i,d=e);const g=l+f,_=c+d,m=h+f,p=u+d;return a.push(g,_),a.push(m,p),2}function Pi(n,t,e,i,s,r,o,a){const l=e-n,c=i-t;let h=Math.atan2(l,c),u=Math.atan2(s-n,r-t);a&&h<u?h+=Math.PI*2:!a&&h>u&&(u+=Math.PI*2);let f=h;const d=u-h,g=Math.abs(d),_=Math.sqrt(l*l+c*c),m=(15*g*Math.sqrt(_)/Math.PI>>0)+1,p=d/m;if(f+=p,a){o.push(n,t),o.push(e,i);for(let v=1,y=f;v<m;v++,y+=p)o.push(n,t),o.push(n+Math.sin(y)*_,t+Math.cos(y)*_);o.push(n,t),o.push(s,r)}else{o.push(e,i),o.push(n,t);for(let v=1,y=f;v<m;v++,y+=p)o.push(n+Math.sin(y)*_,t+Math.cos(y)*_),o.push(n,t);o.push(s,r),o.push(n,t)}return m*2}function bw(n,t,e,i,s,r){const o=Vp;if(n.length===0)return;const a=t;let l=a.alignment;if(t.alignment!==.5){let H=Sw(n);l=(l-.5)*H+.5}const c=new Ge(n[0],n[1]),h=new Ge(n[n.length-2],n[n.length-1]),u=i,f=Math.abs(c.x-h.x)<o&&Math.abs(c.y-h.y)<o;if(u){n=n.slice(),f&&(n.pop(),n.pop(),h.set(n[n.length-2],n[n.length-1]));const H=(c.x+h.x)*.5,K=(h.y+c.y)*.5;n.unshift(H,K),n.push(H,K)}const d=s,g=n.length/2;let _=n.length;const m=d.length/2,p=a.width/2,v=p*p,y=a.miterLimit*a.miterLimit;let x=n[0],w=n[1],S=n[2],E=n[3],P=0,b=0,T=-(w-E),C=x-S,U=0,F=0,B=Math.sqrt(T*T+C*C);T/=B,C/=B,T*=p,C*=p;const W=l,I=(1-W)*2,L=W*2;u||(a.cap==="round"?_+=Pi(x-T*(I-L)*.5,w-C*(I-L)*.5,x-T*I,w-C*I,x+T*L,w+C*L,d,!0)+2:a.cap==="square"&&(_+=md(x,w,T,C,I,L,!0,d))),d.push(x-T*I,w-C*I),d.push(x+T*L,w+C*L);for(let H=1;H<g-1;++H){x=n[(H-1)*2],w=n[(H-1)*2+1],S=n[H*2],E=n[H*2+1],P=n[(H+1)*2],b=n[(H+1)*2+1],T=-(w-E),C=x-S,B=Math.sqrt(T*T+C*C),T/=B,C/=B,T*=p,C*=p,U=-(E-b),F=S-P,B=Math.sqrt(U*U+F*F),U/=B,F/=B,U*=p,F*=p;const K=S-x,tt=w-E,gt=S-P,yt=b-E,Ut=K*gt+tt*yt,Xt=tt*gt-yt*K,$=Xt<0;if(Math.abs(Xt)<.001*Math.abs(Ut)){d.push(S-T*I,E-C*I),d.push(S+T*L,E+C*L),Ut>=0&&(a.join==="round"?_+=Pi(S,E,S-T*I,E-C*I,S-U*I,E-F*I,d,!1)+4:_+=2,d.push(S-U*L,E-F*L),d.push(S+U*I,E+F*I));continue}const J=(-T+x)*(-C+E)-(-T+S)*(-C+w),dt=(-U+P)*(-F+E)-(-U+S)*(-F+b),At=(K*dt-gt*J)/Xt,pt=(yt*J-tt*dt)/Xt,Bt=(At-S)*(At-S)+(pt-E)*(pt-E),he=S+(At-S)*I,Ft=E+(pt-E)*I,Wt=S-(At-S)*L,$t=E-(pt-E)*L,Nt=Math.min(K*K+tt*tt,gt*gt+yt*yt),me=$?I:L,N=Nt+me*me*v;Bt<=N?a.join==="bevel"||Bt/v>y?($?(d.push(he,Ft),d.push(S+T*L,E+C*L),d.push(he,Ft),d.push(S+U*L,E+F*L)):(d.push(S-T*I,E-C*I),d.push(Wt,$t),d.push(S-U*I,E-F*I),d.push(Wt,$t)),_+=2):a.join==="round"?$?(d.push(he,Ft),d.push(S+T*L,E+C*L),_+=Pi(S,E,S+T*L,E+C*L,S+U*L,E+F*L,d,!0)+4,d.push(he,Ft),d.push(S+U*L,E+F*L)):(d.push(S-T*I,E-C*I),d.push(Wt,$t),_+=Pi(S,E,S-T*I,E-C*I,S-U*I,E-F*I,d,!1)+4,d.push(S-U*I,E-F*I),d.push(Wt,$t)):(d.push(he,Ft),d.push(Wt,$t)):(d.push(S-T*I,E-C*I),d.push(S+T*L,E+C*L),a.join==="round"?$?_+=Pi(S,E,S+T*L,E+C*L,S+U*L,E+F*L,d,!0)+2:_+=Pi(S,E,S-T*I,E-C*I,S-U*I,E-F*I,d,!1)+2:a.join==="miter"&&Bt/v<=y&&($?(d.push(Wt,$t),d.push(Wt,$t)):(d.push(he,Ft),d.push(he,Ft)),_+=2),d.push(S-U*I,E-F*I),d.push(S+U*L,E+F*L),_+=2)}x=n[(g-2)*2],w=n[(g-2)*2+1],S=n[(g-1)*2],E=n[(g-1)*2+1],T=-(w-E),C=x-S,B=Math.sqrt(T*T+C*C),T/=B,C/=B,T*=p,C*=p,d.push(S-T*I,E-C*I),d.push(S+T*L,E+C*L),u||(a.cap==="round"?_+=Pi(S-T*(I-L)*.5,E-C*(I-L)*.5,S-T*I,E-C*I,S+T*L,E+C*L,d,!1)+2:a.cap==="square"&&(_+=md(S,E,T,C,I,L,!1,d)));const V=pd*pd;for(let H=m;H<_+m-2;++H)x=d[H*2],w=d[H*2+1],S=d[(H+1)*2],E=d[(H+1)*2+1],P=d[(H+2)*2],b=d[(H+2)*2+1],!(Math.abs(x*(E-b)+S*(b-w)+P*(w-E))<V)&&r.push(H,H+1,H+2)}function Mw(n,t,e,i){const s=Vp;if(n.length===0)return;const r=n[0],o=n[1],a=n[n.length-2],l=n[n.length-1],c=t||Math.abs(r-a)<s&&Math.abs(o-l)<s,h=e,u=n.length/2,f=h.length/2;for(let d=0;d<u;d++)h.push(n[d*2]),h.push(n[d*2+1]);for(let d=0;d<u-1;d++)i.push(f+d,f+d+1);c&&i.push(f+u-1,f)}function Hp(n,t,e,i,s,r,o){const a=dM(n,t,2);if(!a)return;for(let c=0;c<a.length;c+=3)r[o++]=a[c]+s,r[o++]=a[c+1]+s,r[o++]=a[c+2]+s;let l=s*i;for(let c=0;c<n.length;c+=2)e[l]=n[c],e[l+1]=n[c+1],l+=i}const ww=[],Tw={extension:{type:Gt.ShapeBuilder,name:"polygon"},build(n,t){for(let e=0;e<n.points.length;e++)t[e]=n.points[e];return!0},triangulate(n,t,e,i,s,r){Hp(n,ww,t,e,i,s,r)}},Ew={extension:{type:Gt.ShapeBuilder,name:"rectangle"},build(n,t){const e=n,i=e.x,s=e.y,r=e.width,o=e.height;return r>0&&o>0?(t[0]=i,t[1]=s,t[2]=i+r,t[3]=s,t[4]=i+r,t[5]=s+o,t[6]=i,t[7]=s+o,!0):!1},triangulate(n,t,e,i,s,r){let o=0;i*=e,t[i+o]=n[0],t[i+o+1]=n[1],o+=e,t[i+o]=n[2],t[i+o+1]=n[3],o+=e,t[i+o]=n[6],t[i+o+1]=n[7],o+=e,t[i+o]=n[4],t[i+o+1]=n[5],o+=e;const a=i/e;s[r++]=a,s[r++]=a+1,s[r++]=a+2,s[r++]=a+1,s[r++]=a+3,s[r++]=a+2}},Aw={extension:{type:Gt.ShapeBuilder,name:"triangle"},build(n,t){return t[0]=n.x,t[1]=n.y,t[2]=n.x2,t[3]=n.y2,t[4]=n.x3,t[5]=n.y3,!0},triangulate(n,t,e,i,s,r){let o=0;i*=e,t[i+o]=n[0],t[i+o+1]=n[1],o+=e,t[i+o]=n[2],t[i+o+1]=n[3],o+=e,t[i+o]=n[4],t[i+o+1]=n[5];const a=i/e;s[r++]=a,s[r++]=a+1,s[r++]=a+2}},gd=[{offset:0,color:"white"},{offset:1,color:"black"}],th=class Sc{constructor(...t){this.uid=Me("fillGradient"),this._tick=0,this.type="linear",this.colorStops=[];let e=Cw(t);e={...e.type==="radial"?Sc.defaultRadialOptions:Sc.defaultLinearOptions,...Ff(e)},this._textureSize=e.textureSize,this._wrapMode=e.wrapMode,e.type==="radial"?(this.center=e.center,this.outerCenter=e.outerCenter??this.center,this.innerRadius=e.innerRadius,this.outerRadius=e.outerRadius,this.scale=e.scale,this.rotation=e.rotation):(this.start=e.start,this.end=e.end),this.textureSpace=e.textureSpace,this.type=e.type,e.colorStops.forEach(s=>{this.addColorStop(s.offset,s.color)})}addColorStop(t,e){return this.colorStops.push({offset:t,color:Pe.shared.setValue(e).toHexa()}),this}buildLinearGradient(){if(this.texture)return;let{x:t,y:e}=this.start,{x:i,y:s}=this.end,r=i-t,o=s-e;const a=r<0||o<0;if(this._wrapMode==="clamp-to-edge"){if(r<0){const m=t;t=i,i=m,r*=-1}if(o<0){const m=e;e=s,s=m,o*=-1}}const l=this.colorStops.length?this.colorStops:gd,c=this._textureSize,{canvas:h,context:u}=xd(c,1),f=a?u.createLinearGradient(this._textureSize,0,0,0):u.createLinearGradient(0,0,this._textureSize,0);_d(f,l),u.fillStyle=f,u.fillRect(0,0,c,1),this.texture=new ae({source:new ko({resource:h,addressMode:this._wrapMode})});const d=Math.sqrt(r*r+o*o),g=Math.atan2(o,r),_=new qt;_.scale(d/c,1),_.rotate(g),_.translate(t,e),this.textureSpace==="local"&&_.scale(c,c),this.transform=_}buildGradient(){this.texture||this._tick++,this.type==="linear"?this.buildLinearGradient():this.buildRadialGradient()}buildRadialGradient(){if(this.texture)return;const t=this.colorStops.length?this.colorStops:gd,e=this._textureSize,{canvas:i,context:s}=xd(e,e),{x:r,y:o}=this.center,{x:a,y:l}=this.outerCenter,c=this.innerRadius,h=this.outerRadius,u=a-h,f=l-h,d=e/(h*2),g=(r-u)*d,_=(o-f)*d,m=s.createRadialGradient(g,_,c*d,(a-u)*d,(l-f)*d,h*d);_d(m,t),s.fillStyle=t[t.length-1].color,s.fillRect(0,0,e,e),s.fillStyle=m,s.translate(g,_),s.rotate(this.rotation),s.scale(1,this.scale),s.translate(-g,-_),s.fillRect(0,0,e,e),this.texture=new ae({source:new ko({resource:i,addressMode:this._wrapMode})});const p=new qt;p.scale(1/d,1/d),p.translate(u,f),this.textureSpace==="local"&&p.scale(e,e),this.transform=p}destroy(){this.texture?.destroy(!0),this.texture=null,this.transform=null,this.colorStops=[],this.start=null,this.end=null,this.center=null,this.outerCenter=null}get styleKey(){return`fill-gradient-${this.uid}-${this._tick}`}};th.defaultLinearOptions={start:{x:0,y:0},end:{x:0,y:1},colorStops:[],textureSpace:"local",type:"linear",textureSize:256,wrapMode:"clamp-to-edge"};th.defaultRadialOptions={center:{x:.5,y:.5},innerRadius:0,outerRadius:.5,colorStops:[],scale:1,textureSpace:"local",type:"radial",textureSize:256,wrapMode:"clamp-to-edge"};let ri=th;function _d(n,t){for(let e=0;e<t.length;e++){const i=t[e];n.addColorStop(i.offset,i.color)}}function xd(n,t){const e=cn.get().createCanvas(n,t),i=e.getContext("2d");return{canvas:e,context:i}}function Cw(n){let t=n[0]??{};return(typeof t=="number"||n[1])&&(Kt("8.5.2","use options object instead"),t={type:"linear",start:{x:n[0],y:n[1]},end:{x:n[2],y:n[3]},textureSpace:n[4],textureSize:n[5]??ri.defaultLinearOptions.textureSize}),t}const Rw=new qt,Pw=new Te;function Iw(n,t,e,i){const s=t.matrix?n.copyFrom(t.matrix).invert():n.identity();if(t.textureSpace==="local"){const o=e.getBounds(Pw);t.width&&o.pad(t.width);const{x:a,y:l}=o,c=1/o.width,h=1/o.height,u=-a*c,f=-l*h,d=s.a,g=s.b,_=s.c,m=s.d;s.a*=c,s.b*=c,s.c*=h,s.d*=h,s.tx=u*d+f*_+s.tx,s.ty=u*g+f*m+s.ty}else s.translate(t.texture.frame.x,t.texture.frame.y),s.scale(1/t.texture.source.width,1/t.texture.source.height);const r=t.texture.source.style;return!(t.fill instanceof ri)&&r.addressMode==="clamp-to-edge"&&(r.addressMode="repeat",r.update()),i&&s.append(Rw.copyFrom(i).invert()),s}const Qo={};Ee.handleByMap(Gt.ShapeBuilder,Qo);Ee.add(Ew,Tw,Aw,wr,yw,vw);const Dw=new Te,Lw=new qt;function Uw(n,t){const{geometryData:e,batches:i}=t;i.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let s=0;s<n.instructions.length;s++){const r=n.instructions[s];if(r.action==="texture")Fw(r.data,i,e);else if(r.action==="fill"||r.action==="stroke"){const o=r.action==="stroke",a=r.data.path.shapePath,l=r.data.style,c=r.data.hole;o&&c&&yd(c.shapePath,l,!0,i,e),c&&(a.shapePrimitives[a.shapePrimitives.length-1].holes=c.shapePath.shapePrimitives),yd(a,l,o,i,e)}}}function Fw(n,t,e){const i=[],s=Qo.rectangle,r=Dw;r.x=n.dx,r.y=n.dy,r.width=n.dw,r.height=n.dh;const o=n.transform;if(!s.build(r,i))return;const{vertices:a,uvs:l,indices:c}=e,h=c.length,u=a.length/2;o&&Gp(i,o),s.triangulate(i,a,2,u,c,h);const f=n.image,d=f.uvs;l.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const g=Je.get(Qc);g.indexOffset=h,g.indexSize=c.length-h,g.attributeOffset=u,g.attributeSize=a.length/2-u,g.baseColor=n.style,g.alpha=n.alpha,g.texture=f,g.geometryData=e,t.push(g)}function yd(n,t,e,i,s){const{vertices:r,uvs:o,indices:a}=s;n.shapePrimitives.forEach(({shape:l,transform:c,holes:h})=>{const u=[],f=Qo[l.type];if(!f.build(l,u))return;const d=a.length,g=r.length/2;let _="triangle-list";if(c&&Gp(u,c),e){const y=l.closePath??!0,x=t;x.pixelLine?(Mw(u,y,r,a),_="line-list"):bw(u,x,!1,y,r,a)}else if(h){const y=[],x=u.slice();Nw(h).forEach(S=>{y.push(x.length/2),x.push(...S)}),Hp(x,y,r,2,g,a,d)}else f.triangulate(u,r,2,g,a,d);const m=o.length/2,p=t.texture;if(p!==ae.WHITE){const y=Iw(Lw,t,l,c);gw(r,2,g,o,m,2,r.length/2-g,y)}else _w(o,m,2,r.length/2-g);const v=Je.get(Qc);v.indexOffset=d,v.indexSize=a.length-d,v.attributeOffset=g,v.attributeSize=r.length/2-g,v.baseColor=t.color,v.alpha=t.alpha,v.texture=p,v.geometryData=s,v.topology=_,i.push(v)})}function Nw(n){const t=[];for(let e=0;e<n.length;e++){const i=n[e].shape,s=[];Qo[i.type].build(i,s)&&t.push(s)}return t}class Ow{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}reset(){this.batches&&this.batches.forEach(t=>{Je.return(t)}),this.graphicsData&&Je.return(this.graphicsData),this.isBatchable=!1,this.context=null,this.batches.length=0,this.geometryData.indices.length=0,this.geometryData.vertices.length=0,this.geometryData.uvs.length=0,this.graphicsData=null}destroy(){this.reset(),this.batches=null,this.geometryData=null}}class Bw{constructor(){this.instructions=new Xc}init(t){const e=t.maxTextures;this.batcher?this.batcher._updateMaxTextures(e):this.batcher=new mw({maxTextures:e}),this.instructions.reset()}get geometry(){return Kt(US,"GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),this.batcher.geometry}destroy(){this.batcher.destroy(),this.instructions.destroy(),this.batcher=null,this.instructions=null}}const eh=class bc{constructor(t){this._renderer=t,this._managedContexts=new Rr({renderer:t,type:"resource",name:"graphicsContext"})}init(t){bc.defaultOptions.bezierSmoothness=t?.bezierSmoothness??bc.defaultOptions.bezierSmoothness}getContextRenderData(t){return t._gpuData[this._renderer.uid].graphicsData||this._initContextRenderData(t)}updateGpuContext(t){const e=!!t._gpuData[this._renderer.uid],i=t._gpuData[this._renderer.uid]||this._initContext(t);if(t.dirty||!e){e&&i.reset(),Uw(t,i);const s=t.batchMode;t.customShader||s==="no-batch"?i.isBatchable=!1:s==="auto"?i.isBatchable=i.geometryData.vertices.length<400:i.isBatchable=!0,t.dirty=!1}return i}getGpuContext(t){return t._gpuData[this._renderer.uid]||this._initContext(t)}_initContextRenderData(t){const e=Je.get(Bw,{maxTextures:this._renderer.limits.maxBatchableTextures}),i=t._gpuData[this._renderer.uid],{batches:s,geometryData:r}=i;i.graphicsData=e;const o=r.vertices.length,a=r.indices.length;for(let u=0;u<s.length;u++)s[u].applyTransform=!1;const l=e.batcher;l.ensureAttributeBuffer(o),l.ensureIndexBuffer(a),l.begin();for(let u=0;u<s.length;u++){const f=s[u];l.add(f)}l.finish(e.instructions);const c=l.geometry;c.indexBuffer.setDataWithSize(l.indexBuffer,l.indexSize,!0),c.buffers[0].setDataWithSize(l.attributeBuffer.float32View,l.attributeSize,!0);const h=l.batches;for(let u=0;u<h.length;u++){const f=h[u];f.bindGroup=EM(f.textures.textures,f.textures.count,this._renderer.limits.maxBatchableTextures)}return e}_initContext(t){const e=new Ow;return e.context=t,t._gpuData[this._renderer.uid]=e,this._managedContexts.add(t),e}destroy(){this._managedContexts.destroy(),this._renderer=null}};eh.extension={type:[Gt.WebGLSystem,Gt.WebGPUSystem],name:"graphicsContext"};eh.defaultOptions={bezierSmoothness:.5};let nh=eh;const kw=8,_o=11920929e-14,zw=1;function Wp(n,t,e,i,s,r,o,a,l,c){const u=Math.min(.99,Math.max(0,c??nh.defaultOptions.bezierSmoothness));let f=(zw-u)/1;return f*=f,Gw(t,e,i,s,r,o,a,l,n,f),n}function Gw(n,t,e,i,s,r,o,a,l,c){Mc(n,t,e,i,s,r,o,a,l,c,0),l.push(o,a)}function Mc(n,t,e,i,s,r,o,a,l,c,h){if(h>kw)return;const u=(n+e)/2,f=(t+i)/2,d=(e+s)/2,g=(i+r)/2,_=(s+o)/2,m=(r+a)/2,p=(u+d)/2,v=(f+g)/2,y=(d+_)/2,x=(g+m)/2,w=(p+y)/2,S=(v+x)/2;if(h>0){let E=o-n,P=a-t;const b=Math.abs((e-o)*P-(i-a)*E),T=Math.abs((s-o)*P-(r-a)*E);if(b>_o&&T>_o){if((b+T)*(b+T)<=c*(E*E+P*P)){l.push(w,S);return}}else if(b>_o){if(b*b<=c*(E*E+P*P)){l.push(w,S);return}}else if(T>_o){if(T*T<=c*(E*E+P*P)){l.push(w,S);return}}else if(E=w-(n+o)/2,P=S-(t+a)/2,E*E+P*P<=c){l.push(w,S);return}}Mc(n,t,u,f,p,v,w,S,l,c,h+1),Mc(w,S,y,x,_,m,o,a,l,c,h+1)}const Vw=8,Hw=11920929e-14,Ww=1;function Xw(n,t,e,i,s,r,o,a){const c=Math.min(.99,Math.max(0,a??nh.defaultOptions.bezierSmoothness));let h=(Ww-c)/1;return h*=h,Yw(t,e,i,s,r,o,n,h),n}function Yw(n,t,e,i,s,r,o,a){wc(o,n,t,e,i,s,r,a,0),o.push(s,r)}function wc(n,t,e,i,s,r,o,a,l){if(l>Vw)return;const c=(t+i)/2,h=(e+s)/2,u=(i+r)/2,f=(s+o)/2,d=(c+u)/2,g=(h+f)/2;let _=r-t,m=o-e;const p=Math.abs((i-r)*m-(s-o)*_);if(p>Hw){if(p*p<=a*(_*_+m*m)){n.push(d,g);return}}else if(_=d-(t+r)/2,m=g-(e+o)/2,_*_+m*m<=a){n.push(d,g);return}wc(n,t,e,c,h,d,g,a,l+1),wc(n,d,g,u,f,r,o,a,l+1)}function Xp(n,t,e,i,s,r,o,a){let l=Math.abs(s-r);(!o&&s>r||o&&r>s)&&(l=2*Math.PI-l),a||(a=Math.max(6,Math.floor(6*Math.pow(i,1/3)*(l/Math.PI)))),a=Math.max(a,3);let c=l/a,h=s;c*=o?-1:1;for(let u=0;u<a+1;u++){const f=Math.cos(h),d=Math.sin(h),g=t+f*i,_=e+d*i;n.push(g,_),h+=c}}function qw(n,t,e,i,s,r){const o=n[n.length-2],l=n[n.length-1]-e,c=o-t,h=s-e,u=i-t,f=Math.abs(l*u-c*h);if(f<1e-8||r===0){(n[n.length-2]!==t||n[n.length-1]!==e)&&n.push(t,e);return}const d=l*l+c*c,g=h*h+u*u,_=l*h+c*u,m=r*Math.sqrt(d)/f,p=r*Math.sqrt(g)/f,v=m*_/d,y=p*_/g,x=m*u+p*c,w=m*h+p*l,S=c*(p+v),E=l*(p+v),P=u*(m+y),b=h*(m+y),T=Math.atan2(E-w,S-x),C=Math.atan2(b-w,P-x);Xp(n,x+t,w+e,r,T,C,c*h>u*l)}const cr=Math.PI*2,al={centerX:0,centerY:0,ang1:0,ang2:0},ll=({x:n,y:t},e,i,s,r,o,a,l)=>{n*=e,t*=i;const c=s*n-r*t,h=r*n+s*t;return l.x=c+o,l.y=h+a,l};function $w(n,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),i=t===1.5707963267948966?.551915024494:e,s=Math.cos(n),r=Math.sin(n),o=Math.cos(n+t),a=Math.sin(n+t);return[{x:s-r*i,y:r+s*i},{x:o+a*i,y:a-o*i},{x:o,y:a}]}const vd=(n,t,e,i)=>{const s=n*i-t*e<0?-1:1;let r=n*e+t*i;return r>1&&(r=1),r<-1&&(r=-1),s*Math.acos(r)},jw=(n,t,e,i,s,r,o,a,l,c,h,u,f)=>{const d=Math.pow(s,2),g=Math.pow(r,2),_=Math.pow(h,2),m=Math.pow(u,2);let p=d*g-d*m-g*_;p<0&&(p=0),p/=d*m+g*_,p=Math.sqrt(p)*(o===a?-1:1);const v=p*s/r*u,y=p*-r/s*h,x=c*v-l*y+(n+e)/2,w=l*v+c*y+(t+i)/2,S=(h-v)/s,E=(u-y)/r,P=(-h-v)/s,b=(-u-y)/r,T=vd(1,0,S,E);let C=vd(S,E,P,b);a===0&&C>0&&(C-=cr),a===1&&C<0&&(C+=cr),f.centerX=x,f.centerY=w,f.ang1=T,f.ang2=C};function Zw(n,t,e,i,s,r,o,a=0,l=0,c=0){if(r===0||o===0)return;const h=Math.sin(a*cr/360),u=Math.cos(a*cr/360),f=u*(t-i)/2+h*(e-s)/2,d=-h*(t-i)/2+u*(e-s)/2;if(f===0&&d===0)return;r=Math.abs(r),o=Math.abs(o);const g=Math.pow(f,2)/Math.pow(r,2)+Math.pow(d,2)/Math.pow(o,2);g>1&&(r*=Math.sqrt(g),o*=Math.sqrt(g)),jw(t,e,i,s,r,o,l,c,h,u,f,d,al);let{ang1:_,ang2:m}=al;const{centerX:p,centerY:v}=al;let y=Math.abs(m)/(cr/4);Math.abs(1-y)<1e-7&&(y=1);const x=Math.max(Math.ceil(y),1);m/=x;let w=n[n.length-2],S=n[n.length-1];const E={x:0,y:0};for(let P=0;P<x;P++){const b=$w(_,m),{x:T,y:C}=ll(b[0],r,o,u,h,p,v,E),{x:U,y:F}=ll(b[1],r,o,u,h,p,v,E),{x:B,y:W}=ll(b[2],r,o,u,h,p,v,E);Wp(n,w,S,T,C,U,F,B,W),w=B,S=W,_+=m}}function Kw(n,t,e){const i=(o,a)=>{const l=a.x-o.x,c=a.y-o.y,h=Math.sqrt(l*l+c*c),u=l/h,f=c/h;return{len:h,nx:u,ny:f}},s=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let r=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??e;if(l<=0){s(o,a),r=a;continue}const c=t[(o+1)%t.length],h=i(a,r),u=i(a,c);if(h.len<1e-4||u.len<1e-4){s(o,a),r=a;continue}let f=Math.asin(h.nx*u.ny-h.ny*u.nx),d=1,g=!1;h.nx*u.nx-h.ny*-u.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,g=!0):f>0&&(d=-1,g=!0);const _=f/2;let m,p=Math.abs(Math.cos(_)*l/Math.sin(_));p>Math.min(h.len/2,u.len/2)?(p=Math.min(h.len/2,u.len/2),m=Math.abs(p*Math.sin(_)/Math.cos(_))):m=l;const v=a.x+u.nx*p+-u.ny*m*d,y=a.y+u.ny*p+u.nx*m*d,x=Math.atan2(h.ny,h.nx)+Math.PI/2*d,w=Math.atan2(u.ny,u.nx)-Math.PI/2*d;o===0&&n.moveTo(v+Math.cos(x)*m,y+Math.sin(x)*m),n.arc(v,y,m,x,w,g),r=a}}function Jw(n,t,e,i){const s=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),r=(a,l,c)=>({x:a.x+(l.x-a.x)*c,y:a.y+(l.y-a.y)*c}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],c=l.radius??e;if(c<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const h=t[a],u=t[(a+2)%o],f=s(h,l);let d;if(f<1e-4)d=l;else{const m=Math.min(f/2,c);d=r(l,h,m/f)}const g=s(u,l);let _;if(g<1e-4)_=l;else{const m=Math.min(g/2,c);_=r(l,u,m/g)}a===0?n.moveTo(d.x,d.y):n.lineTo(d.x,d.y),n.quadraticCurveTo(l.x,l.y,_.x,_.y,i)}}const Qw=new Te;class tT{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new mn,this._graphicsPath2D=t,this.signed=t.checkForHoles}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const i=this._currentPoly.points,s=i[i.length-2],r=i[i.length-1];return(s!==t||r!==e)&&i.push(t,e),this}arc(t,e,i,s,r,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Xp(a,t,e,i,s,r,o),this}arcTo(t,e,i,s,r){this._ensurePoly();const o=this._currentPoly.points;return qw(o,t,e,i,s,r),this}arcToSvg(t,e,i,s,r,o,a){const l=this._currentPoly.points;return Zw(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,i,s,r),this}bezierCurveTo(t,e,i,s,r,o,a){this._ensurePoly();const l=this._currentPoly;return Wp(this._currentPoly.points,l.lastX,l.lastY,t,e,i,s,r,o,a),this}quadraticCurveTo(t,e,i,s,r){this._ensurePoly();const o=this._currentPoly;return Xw(this._currentPoly.points,o.lastX,o.lastY,t,e,i,s,r),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));const i=this.shapePrimitives,s=i.length;for(let r=0;r<t.instructions.length;r++){const o=t.instructions[r];this[o.action](...o.data)}if(t.checkForHoles&&i.length-s>1){let r=null;for(let o=s;o<i.length;o++){const a=i[o];if(a.shape.type==="polygon"){const l=a.shape,c=r?.shape;c&&c.containsPolygon(l)?(r.holes||(r.holes=[]),r.holes.push(a),i.copyWithin(o,o+1),i.length--,o--):r=a}}}return this}finish(t=!1){this.endPoly(t)}rect(t,e,i,s,r){return this.drawShape(new Te(t,e,i,s),r),this}circle(t,e,i,s){return this.drawShape(new Zc(t,e,i),s),this}poly(t,e,i){const s=new ar(t);return s.closePath=e,this.drawShape(s,i),this}regularPoly(t,e,i,s,r=0,o){s=Math.max(s|0,3);const a=-1*Math.PI/2+r,l=Math.PI*2/s,c=[];for(let h=0;h<s;h++){const u=a-h*l;c.push(t+i*Math.cos(u),e+i*Math.sin(u))}return this.poly(c,!0,o),this}roundPoly(t,e,i,s,r,o=0,a){if(s=Math.max(s|0,3),r<=0)return this.regularPoly(t,e,i,s,o);const l=i*Math.sin(Math.PI/s)-.001;r=Math.min(r,l);const c=-1*Math.PI/2+o,h=Math.PI*2/s,u=(s-2)*Math.PI/s/2;for(let f=0;f<s;f++){const d=f*h+c,g=t+i*Math.cos(d),_=e+i*Math.sin(d),m=d+Math.PI+u,p=d-Math.PI-u,v=g+r*Math.cos(m),y=_+r*Math.sin(m),x=g+r*Math.cos(p),w=_+r*Math.sin(p);f===0?this.moveTo(v,y):this.lineTo(v,y),this.quadraticCurveTo(g,_,x,w,a)}return this.closePath()}roundShape(t,e,i=!1,s){return t.length<3?this:(i?Jw(this,t,e,s):Kw(this,t,e),this.closePath())}filletRect(t,e,i,s,r){if(r===0)return this.rect(t,e,i,s);const o=Math.min(i,s)/2,a=Math.min(o,Math.max(-o,r)),l=t+i,c=e+s,h=a<0?-a:0,u=Math.abs(a);return this.moveTo(t,e+u).arcTo(t+h,e+h,t+u,e,u).lineTo(l-u,e).arcTo(l-h,e+h,l,e+u,u).lineTo(l,c-u).arcTo(l-h,c-h,t+i-u,c,u).lineTo(t+u,c).arcTo(t+h,c-h,t,c-u,u).closePath()}chamferRect(t,e,i,s,r,o){if(r<=0)return this.rect(t,e,i,s);const a=Math.min(r,Math.min(i,s)/2),l=t+i,c=e+s,h=[t+a,e,l-a,e,l,e+a,l,c-a,l-a,c,t+a,c,t,c-a,t,e+a];for(let u=h.length-1;u>=2;u-=2)h[u]===h[u-2]&&h[u-1]===h[u-3]&&h.splice(u-1,2);return this.poly(h,!0,o)}ellipse(t,e,i,s,r){return this.drawShape(new Kc(t,e,i,s),r),this}roundRect(t,e,i,s,r,o){return this.drawShape(new Jc(t,e,i,s,r),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let i=this._currentPoly;return i&&this.endPoly(),i=new ar,i.points.push(t,e),this._currentPoly=i,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new ar,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let i=e.shape.x,s=e.shape.y;if(e.transform&&!e.transform.isIdentity()){const r=e.transform,o=i;i=r.a*i+r.c*s+r.tx,s=r.b*o+r.d*s+r.ty}this._currentPoly.points.push(i,s)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const i=t.instructions[e];this[i.action](...i.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let i=0;i<e.length;i++){const s=e[i],r=s.shape.getBounds(Qw);s.transform?t.addRect(r,s.transform):t.addRect(r)}return t}}class ei{constructor(t,e=!1){this.instructions=[],this.uid=Me("graphicsPath"),this._dirty=!0,this.checkForHoles=e,typeof t=="string"?bM(t,this):this.instructions=t?.slice()??[]}get shapePath(){return this._shapePath||(this._shapePath=new tT(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,i,s,r){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(Ge.shared);let l=0,c=0;if(!o||o.action!=="bezierCurveTo")l=a.x,c=a.y;else{l=o.data[2],c=o.data[3];const h=a.x,u=a.y;l=h+(h-l),c=u+(u-c)}return this.instructions.push({action:"bezierCurveTo",data:[l,c,t,e,i,s,r]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,i){const s=this.instructions[this.instructions.length-1],r=this.getLastPoint(Ge.shared);let o=0,a=0;if(!s||s.action!=="quadraticCurveTo")o=r.x,a=r.y;else{o=s.data[0],a=s.data[1];const l=r.x,c=r.y;o=l+(l-o),a=c+(c-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,i]}),this._dirty=!0,this}rect(t,e,i,s,r){return this.instructions.push({action:"rect",data:[t,e,i,s,r]}),this._dirty=!0,this}circle(t,e,i,s){return this.instructions.push({action:"circle",data:[t,e,i,s]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,i,s,r,o,a){r||(r=s/2);const l=-1*Math.PI/2+o,c=i*2,h=Math.PI*2/c,u=[];for(let f=0;f<c;f++){const d=f%2?r:s,g=f*h+l;u.push(t+d*Math.cos(g),e+d*Math.sin(g))}return this.poly(u,!0,a),this}clone(t=!1){const e=new ei;if(e.checkForHoles=this.checkForHoles,!t)e.instructions=this.instructions.slice();else for(let i=0;i<this.instructions.length;i++){const s=this.instructions[i];e.instructions.push({action:s.action,data:s.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,i=t.b,s=t.c,r=t.d,o=t.tx,a=t.ty;let l=0,c=0,h=0,u=0,f=0,d=0,g=0,_=0;for(let m=0;m<this.instructions.length;m++){const p=this.instructions[m],v=p.data;switch(p.action){case"moveTo":case"lineTo":l=v[0],c=v[1],v[0]=e*l+s*c+o,v[1]=i*l+r*c+a;break;case"bezierCurveTo":h=v[0],u=v[1],f=v[2],d=v[3],l=v[4],c=v[5],v[0]=e*h+s*u+o,v[1]=i*h+r*u+a,v[2]=e*f+s*d+o,v[3]=i*f+r*d+a,v[4]=e*l+s*c+o,v[5]=i*l+r*c+a;break;case"quadraticCurveTo":h=v[0],u=v[1],l=v[2],c=v[3],v[0]=e*h+s*u+o,v[1]=i*h+r*u+a,v[2]=e*l+s*c+o,v[3]=i*l+r*c+a;break;case"arcToSvg":l=v[5],c=v[6],g=v[0],_=v[1],v[0]=e*g+s*_,v[1]=i*g+r*_,v[5]=e*l+s*c+o,v[6]=i*l+r*c+a;break;case"circle":v[4]=js(v[3],t);break;case"rect":v[4]=js(v[4],t);break;case"ellipse":v[8]=js(v[8],t);break;case"roundRect":v[5]=js(v[5],t);break;case"addPath":v[0].transform(t);break;case"poly":v[2]=js(v[2],t);break;default:qe("unknown transform action",p.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,i=this.instructions[e];if(!i)return t.x=0,t.y=0,t;for(;i.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;i=this.instructions[e]}switch(i.action){case"moveTo":case"lineTo":t.x=i.data[0],t.y=i.data[1];break;case"quadraticCurveTo":t.x=i.data[2],t.y=i.data[3];break;case"bezierCurveTo":t.x=i.data[4],t.y=i.data[5];break;case"arc":case"arcToSvg":t.x=i.data[5],t.y=i.data[6];break;case"addPath":i.data[0].getLastPoint(t);break}return t}}function js(n,t){return n?n.prepend(t):t.clone()}function ve(n,t,e){const i=n.getAttribute(t);return i?Number(i):e}function eT(n,t){const e=n.querySelectorAll("defs");for(let i=0;i<e.length;i++){const s=e[i];for(let r=0;r<s.children.length;r++){const o=s.children[r];switch(o.nodeName.toLowerCase()){case"lineargradient":t.defs[o.id]=nT(o);break;case"radialgradient":t.defs[o.id]=iT();break}}}}function nT(n){const t=ve(n,"x1",0),e=ve(n,"y1",0),i=ve(n,"x2",1),s=ve(n,"y2",0),r=n.getAttribute("gradientUnits")||"objectBoundingBox",o=new ri(t,e,i,s,r==="objectBoundingBox"?"local":"global");for(let a=0;a<n.children.length;a++){const l=n.children[a],c=ve(l,"offset",0),h=Pe.shared.setValue(l.getAttribute("stop-color")).toNumber();o.addColorStop(c,h)}return o}function iT(n){return qe("[SVG Parser] Radial gradients are not yet supported"),new ri(0,0,1,0)}function Sd(n){const t=n.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);return t?t[1]:""}const bd={fill:{type:"paint",default:0},"fill-opacity":{type:"number",default:1},stroke:{type:"paint",default:0},"stroke-width":{type:"number",default:1},"stroke-opacity":{type:"number",default:1},"stroke-linecap":{type:"string",default:"butt"},"stroke-linejoin":{type:"string",default:"miter"},"stroke-miterlimit":{type:"number",default:10},"stroke-dasharray":{type:"string",default:"none"},"stroke-dashoffset":{type:"number",default:0},opacity:{type:"number",default:1}};function Yp(n,t){const e=n.getAttribute("style"),i={},s={},r={strokeStyle:i,fillStyle:s,useFill:!1,useStroke:!1};for(const o in bd){const a=n.getAttribute(o);a&&Md(t,r,o,a.trim())}if(e){const o=e.split(";");for(let a=0;a<o.length;a++){const l=o[a].trim(),[c,h]=l.split(":");bd[c]&&Md(t,r,c,h.trim())}}return{strokeStyle:r.useStroke?i:null,fillStyle:r.useFill?s:null,useFill:r.useFill,useStroke:r.useStroke}}function Md(n,t,e,i){switch(e){case"stroke":if(i!=="none"){if(i.startsWith("url(")){const s=Sd(i);t.strokeStyle.fill=n.defs[s]}else t.strokeStyle.color=Pe.shared.setValue(i).toNumber();t.useStroke=!0}break;case"stroke-width":t.strokeStyle.width=Number(i);break;case"fill":if(i!=="none"){if(i.startsWith("url(")){const s=Sd(i);t.fillStyle.fill=n.defs[s]}else t.fillStyle.color=Pe.shared.setValue(i).toNumber();t.useFill=!0}break;case"fill-opacity":t.fillStyle.alpha=Number(i);break;case"stroke-opacity":t.strokeStyle.alpha=Number(i);break;case"opacity":t.fillStyle.alpha=Number(i),t.strokeStyle.alpha=Number(i);break}}function sT(n){if(n.length<=2)return!0;const t=n.map(a=>a.area).sort((a,l)=>l-a),[e,i]=t,s=t[t.length-1],r=e/i,o=i/s;return!(r>3&&o<2)}function rT(n){return n.split(/(?=[Mm])/).filter(i=>i.trim().length>0)}function oT(n){const t=n.match(/[-+]?[0-9]*\.?[0-9]+/g);if(!t||t.length<4)return 0;const e=t.map(Number),i=[],s=[];for(let h=0;h<e.length;h+=2)h+1<e.length&&(i.push(e[h]),s.push(e[h+1]));if(i.length===0||s.length===0)return 0;const r=Math.min(...i),o=Math.max(...i),a=Math.min(...s),l=Math.max(...s);return(o-r)*(l-a)}function wd(n,t){const e=new ei(n,!1);for(const i of e.instructions)t.instructions.push(i)}function aT(n,t){if(typeof n=="string"){const o=document.createElement("div");o.innerHTML=n.trim(),n=o.querySelector("svg")}const e={context:t,defs:{},path:new ei};eT(n,e);const i=n.children,{fillStyle:s,strokeStyle:r}=Yp(n,e);for(let o=0;o<i.length;o++){const a=i[o];a.nodeName.toLowerCase()!=="defs"&&qp(a,e,s,r)}return t}function qp(n,t,e,i){const s=n.children,{fillStyle:r,strokeStyle:o}=Yp(n,t);r&&e?e={...e,...r}:r&&(e=r),o&&i?i={...i,...o}:o&&(i=o);const a=!e&&!i;a&&(e={color:0});let l,c,h,u,f,d,g,_,m,p,v,y,x,w,S,E,P;switch(n.nodeName.toLowerCase()){case"path":{w=n.getAttribute("d");const b=n.getAttribute("fill-rule"),T=rT(w),C=b==="evenodd",U=T.length>1;if(C&&U){const B=T.map(I=>({path:I,area:oT(I)}));if(B.sort((I,L)=>L.area-I.area),T.length>3||!sT(B))for(let I=0;I<B.length;I++){const L=B[I],V=I===0;t.context.beginPath();const H=new ei(void 0,!0);wd(L.path,H),t.context.path(H),V?(e&&t.context.fill(e),i&&t.context.stroke(i)):t.context.cut()}else for(let I=0;I<B.length;I++){const L=B[I],V=I%2===1;t.context.beginPath();const H=new ei(void 0,!0);wd(L.path,H),t.context.path(H),V?t.context.cut():(e&&t.context.fill(e),i&&t.context.stroke(i))}}else{const B=b?b==="evenodd":!0;S=new ei(w,B),t.context.path(S),e&&t.context.fill(e),i&&t.context.stroke(i)}break}case"circle":g=ve(n,"cx",0),_=ve(n,"cy",0),m=ve(n,"r",0),t.context.ellipse(g,_,m,m),e&&t.context.fill(e),i&&t.context.stroke(i);break;case"rect":l=ve(n,"x",0),c=ve(n,"y",0),E=ve(n,"width",0),P=ve(n,"height",0),p=ve(n,"rx",0),v=ve(n,"ry",0),p||v?t.context.roundRect(l,c,E,P,p||v):t.context.rect(l,c,E,P),e&&t.context.fill(e),i&&t.context.stroke(i);break;case"ellipse":g=ve(n,"cx",0),_=ve(n,"cy",0),p=ve(n,"rx",0),v=ve(n,"ry",0),t.context.beginPath(),t.context.ellipse(g,_,p,v),e&&t.context.fill(e),i&&t.context.stroke(i);break;case"line":h=ve(n,"x1",0),u=ve(n,"y1",0),f=ve(n,"x2",0),d=ve(n,"y2",0),t.context.beginPath(),t.context.moveTo(h,u),t.context.lineTo(f,d),i&&t.context.stroke(i);break;case"polygon":x=n.getAttribute("points"),y=x.match(/-?\d+/g).map(b=>parseInt(b,10)),t.context.poly(y,!0),e&&t.context.fill(e),i&&t.context.stroke(i);break;case"polyline":x=n.getAttribute("points"),y=x.match(/-?\d+/g).map(b=>parseInt(b,10)),t.context.poly(y,!1),i&&t.context.stroke(i);break;case"g":case"svg":break;default:{qe(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}a&&(e=null);for(let b=0;b<s.length;b++)qp(s[b],t,e,i)}const Td={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class ta{constructor(t,e){this.uid=Me("fillPattern"),this._tick=0,this.transform=new qt,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=Td[e].addressModeU,t.source.style.addressModeV=Td[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height),this._tick++}get texture(){return this._texture}set texture(t){this._texture!==t&&(this._texture=t,this._tick++)}get styleKey(){return`fill-pattern-${this.uid}-${this._tick}`}destroy(){this.texture.destroy(!0),this.texture=null}}function lT(n){return Pe.isColorLike(n)}function Ed(n){return n instanceof ta}function Ad(n){return n instanceof ri}function cT(n){return n instanceof ae}function hT(n,t,e){const i=Pe.shared.setValue(t??0);return n.color=i.toNumber(),n.alpha=i.alpha===1?e.alpha:i.alpha,n.texture=ae.WHITE,{...e,...n}}function uT(n,t,e){return n.texture=t,{...e,...n}}function Cd(n,t,e){return n.fill=t,n.color=16777215,n.texture=t.texture,n.matrix=t.transform,{...e,...n}}function Rd(n,t,e){return t.buildGradient(),n.fill=t,n.color=16777215,n.texture=t.texture,n.matrix=t.transform,n.textureSpace=t.textureSpace,{...e,...n}}function dT(n,t){const e={...t,...n},i=Pe.shared.setValue(e.color);return e.alpha*=i.alpha,e.color=i.toNumber(),e}function Vi(n,t){if(n==null)return null;const e={},i=n;return lT(n)?hT(e,n,t):cT(n)?uT(e,n,t):Ed(n)?Cd(e,n,t):Ad(n)?Rd(e,n,t):i.fill&&Ed(i.fill)?Cd(i,i.fill,t):i.fill&&Ad(i.fill)?Rd(i,i.fill,t):dT(i,t)}function Vo(n,t){const{width:e,alignment:i,miterLimit:s,cap:r,join:o,pixelLine:a,...l}=t,c=Vi(n,l);return c?{width:e,alignment:i,miterLimit:s,cap:r,join:o,pixelLine:a,...c}:null}const fT=new Ge,Pd=new qt,ih=class Rn extends Gn{constructor(){super(...arguments),this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this.uid=Me("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this.destroyed=!1,this._activePath=new ei,this._transform=new qt,this._fillStyle={...Rn.defaultFillStyle},this._strokeStyle={...Rn.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new mn,this._boundsDirty=!0}clone(){const t=new Rn;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=Vi(t,Rn.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=Vo(t,Rn.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=Vi(t,Rn.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=Vi(t,Rn.defaultStrokeStyle),this}texture(t,e,i,s,r,o){return this.instructions.push({action:"texture",data:{image:t,dx:i||0,dy:s||0,dw:r||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e||e===0?Pe.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new ei,this}fill(t,e){let i;const s=this.instructions[this.instructions.length-1];return this._tick===0&&s?.action==="stroke"?i=s.data.path:i=this._activePath.clone(),i?(t!=null&&(e!==void 0&&typeof t=="number"&&(Kt(Se,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=Vi(t,Rn.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:i}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(Ge.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i?.action==="fill"?e=i.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=Vo(t,Rn.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],i=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(i);else{e.data.hole=i;break}}return this._initNextPathLocation(),this}arc(t,e,i,s,r,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,i,s,r,o),this}arcTo(t,e,i,s,r){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*i+o.c*s+o.tx,o.b*i+o.d*s+o.ty,r),this}arcToSvg(t,e,i,s,r,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,i,s,r,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,e,i,s,r,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*i+l.c*s+l.tx,l.b*i+l.d*s+l.ty,l.a*r+l.c*o+l.tx,l.b*r+l.d*o+l.ty,a),this}closePath(){return this._tick++,this._activePath?.closePath(),this}ellipse(t,e,i,s){return this._tick++,this._activePath.ellipse(t,e,i,s,this._transform.clone()),this}circle(t,e,i){return this._tick++,this._activePath.circle(t,e,i,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const i=this._transform;return this._activePath.lineTo(i.a*t+i.c*e+i.tx,i.b*t+i.d*e+i.ty),this}moveTo(t,e){this._tick++;const i=this._transform,s=this._activePath.instructions,r=i.a*t+i.c*e+i.tx,o=i.b*t+i.d*e+i.ty;return s.length===1&&s[0].action==="moveTo"?(s[0].data[0]=r,s[0].data[1]=o,this):(this._activePath.moveTo(r,o),this)}quadraticCurveTo(t,e,i,s,r){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*i+o.c*s+o.tx,o.b*i+o.d*s+o.ty,r),this}rect(t,e,i,s){return this._tick++,this._activePath.rect(t,e,i,s,this._transform.clone()),this}roundRect(t,e,i,s,r){return this._tick++,this._activePath.roundRect(t,e,i,s,r,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,i,s,r=0,o){return this._tick++,this._activePath.regularPoly(t,e,i,s,r,o),this}roundPoly(t,e,i,s,r,o){return this._tick++,this._activePath.roundPoly(t,e,i,s,r,o),this}roundShape(t,e,i,s){return this._tick++,this._activePath.roundShape(t,e,i,s),this}filletRect(t,e,i,s,r){return this._tick++,this._activePath.filletRect(t,e,i,s,r),this}chamferRect(t,e,i,s,r,o){return this._tick++,this._activePath.chamferRect(t,e,i,s,r,o),this}star(t,e,i,s,r=0,o=0){return this._tick++,this._activePath.star(t,e,i,s,r,o,this._transform.clone()),this}svg(t){return this._tick++,aT(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,i,s,r,o){return t instanceof qt?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,i,s,r,o),this)}transform(t,e,i,s,r,o){return t instanceof qt?(this._transform.append(t),this):(Pd.set(t,e,i,s,r,o),this._transform.append(Pd),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this._boundsDirty=!0,!this.dirty&&(this.emit("update",this,16),this.dirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;this._boundsDirty=!1;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const i=this.instructions[e],s=i.action;if(s==="fill"){const r=i.data;t.addBounds(r.path.bounds)}else if(s==="texture"){const r=i.data;t.addFrame(r.dx,r.dy,r.dx+r.dw,r.dy+r.dh,r.transform)}if(s==="stroke"){const r=i.data,o=r.style.alignment,a=r.style.width*(1-o),l=r.path.bounds;t.addFrame(l.minX-a,l.minY-a,l.maxX+a,l.maxY+a)}}return t}containsPoint(t){if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let i=!1;for(let s=0;s<e.length;s++){const r=e[s],o=r.data,a=o.path;if(!r.action||!a)continue;const l=o.style,c=a.shapePath.shapePrimitives;for(let h=0;h<c.length;h++){const u=c[h].shape;if(!l||!u)continue;const f=c[h].transform,d=f?f.applyInverse(t,fT):t;if(r.action==="fill")i=u.contains(d.x,d.y);else{const _=l;i=u.strokeContains(d.x,d.y,_.width,_.alignment)}const g=o.hole;if(g){const _=g.shapePath?.shapePrimitives;if(_)for(let m=0;m<_.length;m++)_[m].shape.contains(d.x,d.y)&&(i=!1)}if(i)return!0}}return i}unload(){this.emit("unload",this);for(const t in this._gpuData)this._gpuData[t]?.destroy();this._gpuData=Object.create(null)}destroy(t=!1){if(this.destroyed)return;if(this.destroyed=!0,this._stateStack.length=0,this._transform=null,this.unload(),this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t?.texture){const i=typeof t=="boolean"?t:t?.textureSource;this._fillStyle.texture&&(this._fillStyle.fill&&"uid"in this._fillStyle.fill?this._fillStyle.fill.destroy():this._fillStyle.texture.destroy(i)),this._strokeStyle.texture&&(this._strokeStyle.fill&&"uid"in this._strokeStyle.fill?this._strokeStyle.fill.destroy():this._strokeStyle.texture.destroy(i))}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};ih.defaultFillStyle={color:16777215,alpha:1,texture:ae.WHITE,matrix:null,fill:null,textureSpace:"local"};ih.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:ae.WHITE,matrix:null,fill:null,textureSpace:"local",pixelLine:!1};let vn=ih;class pT{constructor(){this.isBatchable=!1}reset(){this.isBatchable=!1,this.context=null,this.graphicsData&&(this.graphicsData.destroy(),this.graphicsData=null)}destroy(){this.reset()}}class mT{constructor(){this.instructions=new Xc}init(){this.instructions.reset()}destroy(){this.instructions.destroy(),this.instructions=null}}const sh=class Tc{constructor(t){this._renderer=t,this._managedContexts=new Rr({renderer:t,type:"resource",name:"graphicsContext"})}init(t){Tc.defaultOptions.bezierSmoothness=t?.bezierSmoothness??Tc.defaultOptions.bezierSmoothness}getContextRenderData(t){return this.getGpuContext(t).graphicsData||this._initContextRenderData(t)}updateGpuContext(t){const e=t._gpuData,i=!!e[this._renderer.uid],s=e[this._renderer.uid]||this._initContext(t);return(t.dirty||!i)&&(i&&s.reset(),s.isBatchable=!1,t.dirty=!1),s}getGpuContext(t){return t._gpuData[this._renderer.uid]||this._initContext(t)}_initContextRenderData(t){const e=new mT,i=this.getGpuContext(t);return i.graphicsData=e,e.init(),e}_initContext(t){const e=new pT;return e.context=t,t._gpuData[this._renderer.uid]=e,this._managedContexts.add(t),e}destroy(){this._managedContexts.destroy(),this._renderer=null}};sh.extension={type:[Gt.CanvasSystem],name:"graphicsContext"};sh.defaultOptions={bezierSmoothness:.5};let gT=sh;class $p{constructor(t,e){this.state=yp.for2d(),this.renderer=t,this._adaptor=e,this.renderer.runners.contextChange.add(this),this._managedGraphics=new Rr({renderer:t,type:"renderable",priority:-1,name:"graphics"})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(t){return!1}addRenderable(t,e){this._managedGraphics.add(t),this.renderer.renderPipes.batch.break(e),e.add(t)}updateRenderable(t){}execute(t){t.isRenderable&&this._adaptor.execute(this,t)}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null}}$p.extension={type:[Gt.CanvasPipes],name:"graphics"};function _T(n,t,e){const i=(n>>24&255)/255;t[e++]=(n&255)/255*i,t[e++]=(n>>8&255)/255*i,t[e++]=(n>>16&255)/255*i,t[e++]=i}class xT{constructor(){this.batches=[],this.batched=!1}destroy(){this.batches.forEach(t=>{Je.return(t)}),this.batches.length=0}}class jp{constructor(t,e){this.state=yp.for2d(),this.renderer=t,this._adaptor=e,this.renderer.runners.contextChange.add(this),this._managedGraphics=new Rr({renderer:t,type:"renderable",priority:-1,name:"graphics"})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(t){const e=t.context,i=!!t._gpuData,r=this.renderer.graphicsContext.updateGpuContext(e);return!!(r.isBatchable||i!==r.isBatchable)}addRenderable(t,e){const s=this.renderer.graphicsContext.updateGpuContext(t.context);t.didViewUpdate&&this._rebuild(t),s.isBatchable?this._addToBatcher(t,e):(this.renderer.renderPipes.batch.break(e),e.add(t))}updateRenderable(t){const i=this._getGpuDataForRenderable(t).batches;for(let s=0;s<i.length;s++){const r=i[s];r._batcher.updateElement(r)}}execute(t){if(!t.isRenderable)return;const e=this.renderer,i=t.context;if(!e.graphicsContext.getGpuContext(i).batches.length)return;const r=i.customShader||this._adaptor.shader;this.state.blendMode=t.groupBlendMode;const o=r.resources.localUniforms.uniforms;o.uTransformMatrix=t.groupTransform,o.uRound=e._roundPixels|t._roundPixels,_T(t.groupColorAlpha,o.uColor,0),this._adaptor.execute(this,t)}_rebuild(t){const e=this._getGpuDataForRenderable(t),s=this.renderer.graphicsContext.updateGpuContext(t.context);e.destroy(),s.isBatchable&&this._updateBatchesForRenderable(t,e)}_addToBatcher(t,e){const i=this.renderer.renderPipes.batch,s=this._getGpuDataForRenderable(t).batches;for(let r=0;r<s.length;r++){const o=s[r];i.addToBatch(o,e)}}_getGpuDataForRenderable(t){return t._gpuData[this.renderer.uid]||this._initGpuDataForRenderable(t)}_initGpuDataForRenderable(t){const e=new xT;return t._gpuData[this.renderer.uid]=e,this._managedGraphics.add(t),e}_updateBatchesForRenderable(t,e){const i=t.context,r=this.renderer.graphicsContext.getGpuContext(i),o=this.renderer._roundPixels|t._roundPixels;e.batches=r.batches.map(a=>{const l=Je.get(Qc);return a.copyTo(l),l.renderable=t,l.roundPixels=o,l})}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null}}jp.extension={type:[Gt.WebGLPipes,Gt.WebGPUPipes],name:"graphics"};Ee.add($p);Ee.add(jp);Ee.add(gT);Ee.add(nh);class hn extends Yc{constructor(t){t instanceof vn&&(t={context:t});const{context:e,roundPixels:i,...s}=t||{};super({label:"Graphics",...s}),this.renderPipeId="graphics",e?this.context=e:(this.context=this._ownedContext=new vn,this.context.autoGarbageCollect=this.autoGarbageCollect),this.didViewUpdate=!0,this.allowChildren=!1,this.roundPixels=i??!1}set context(t){t!==this._context&&(this._context&&(this._context.off("update",this.onViewUpdate,this),this._context.off("unload",this.unload,this)),this._context=t,this._context.on("update",this.onViewUpdate,this),this._context.on("unload",this.unload,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}updateBounds(){}containsPoint(t){return this._context.containsPoint(t)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||t?.context===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_onTouch(t){this._gcLastUsed=t,this._context._gcLastUsed=t}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new hn(this._context.clone()):(this._ownedContext=null,new hn(this._context))}lineStyle(t,e,i){Kt(Se,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const s={};return t&&(s.width=t),e&&(s.color=e),i&&(s.alpha=i),this.context.strokeStyle=s,this}beginFill(t,e){Kt(Se,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const i={};return t!==void 0&&(i.color=t),e!==void 0&&(i.alpha=e),this.context.fillStyle=i,this}endFill(){Kt(Se,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==vn.defaultStrokeStyle.width||t.color!==vn.defaultStrokeStyle.color||t.alpha!==vn.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return Kt(Se,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return Kt(Se,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return Kt(Se,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return Kt(Se,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return Kt(Se,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return Kt(Se,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}class yT extends Yc{constructor(t,e){const{text:i,resolution:s,style:r,anchor:o,width:a,height:l,roundPixels:c,...h}=t;super({...h}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=e,this.text=i??"",this.style=r,this.resolution=s??null,this.allowChildren=!1,this._anchor=new Ne({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=c??!1,a!==void 0&&(this.width=a),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}set resolution(t){this._autoResolution=t===null,this._resolution=t,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(t){t||(t={}),this._style?.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,this.bounds.width),e!==void 0&&this._setHeight(e,this.bounds.height)}containsPoint(t){const e=this.bounds.width,i=this.bounds.height,s=-e*this.anchor.x;let r=0;return t.x>=s&&t.x<=s+e&&(r=-i*this.anchor.y,t.y>=r&&t.y<=r+i)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t?.style)&&this._style.destroy(t),this._style=null,this._text=null}get styleKey(){return`${this._text}:${this._style.styleKey}:${this._resolution}`}}function vT(n,t){let e=n[0]??{};return(typeof e=="string"||n[1])&&(Kt(Se,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:n[1]}),e}class ST{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,e){const i=cn.get().createCanvas();i.width=t,i.height=e;const s=i.getContext("2d");return{canvas:i,context:s}}getOptimalCanvasAndContext(t,e,i=1){t=Math.ceil(t*i-1e-6),e=Math.ceil(e*i-1e-6),t=As(t),e=As(e);const s=(t<<17)+(e<<1);this._canvasPool[s]||(this._canvasPool[s]=[]);let r=this._canvasPool[s].pop();return r||(r=this._createCanvasAndContext(t,e)),r}returnCanvasAndContext(t){const e=t.canvas,{width:i,height:s}=e,r=(i<<17)+(s<<1);t.context.resetTransform(),t.context.clearRect(0,0,i,s),this._canvasPool[r].push(t)}clear(){this._canvasPool={}}}const Ec=new ST;Cr.register(Ec);let Ii=null,Zn=null;function bT(n,t){Ii||(Ii=cn.get().createCanvas(256,128),Zn=Ii.getContext("2d",{willReadFrequently:!0}),Zn.globalCompositeOperation="copy",Zn.globalAlpha=1),(Ii.width<n||Ii.height<t)&&(Ii.width=As(n),Ii.height=As(t))}function Id(n,t,e){for(let i=0,s=4*e*t;i<t;++i,s+=4)if(n[s+3]!==0)return!1;return!0}function Dd(n,t,e,i,s){const r=4*t;for(let o=i,a=i*r+4*e;o<=s;++o,a+=r)if(n[a+3]!==0)return!1;return!0}function MT(...n){let t=n[0];t.canvas||(t={canvas:n[0],resolution:n[1]});const{canvas:e}=t,i=Math.min(t.resolution??1,1),s=t.width??e.width,r=t.height??e.height;let o=t.output;if(bT(s,r),!Zn)throw new TypeError("Failed to get canvas 2D context");Zn.drawImage(e,0,0,s,r,0,0,s*i,r*i);const l=Zn.getImageData(0,0,s,r).data;let c=0,h=0,u=s-1,f=r-1;for(;h<r&&Id(l,s,h);)++h;if(h===r)return Te.EMPTY;for(;Id(l,s,f);)--f;for(;Dd(l,s,c,h,f);)++c;for(;Dd(l,s,u,h,f);)--u;return++u,++f,Zn.globalCompositeOperation="source-over",Zn.strokeRect(c,h,u-c,f-h),Zn.globalCompositeOperation="copy",o??(o=new Te),o.set(c/i,h/i,(u-c)/i,(f-h)/i),o}class wT{constructor(t=0,e=0,i=!1){this.first=null,this.items=Object.create(null),this.last=null,this.max=t,this.resetTtl=i,this.size=0,this.ttl=e}clear(){return this.first=null,this.items=Object.create(null),this.last=null,this.size=0,this}delete(t){if(this.has(t)){const e=this.items[t];delete this.items[t],this.size--,e.prev!==null&&(e.prev.next=e.next),e.next!==null&&(e.next.prev=e.prev),this.first===e&&(this.first=e.next),this.last===e&&(this.last=e.prev)}return this}entries(t=this.keys()){const e=new Array(t.length);for(let i=0;i<t.length;i++){const s=t[i];e[i]=[s,this.get(s)]}return e}evict(t=!1){if(t||this.size>0){const e=this.first;delete this.items[e.key],--this.size===0?(this.first=null,this.last=null):(this.first=e.next,this.first.prev=null)}return this}expiresAt(t){let e;return this.has(t)&&(e=this.items[t].expiry),e}get(t){const e=this.items[t];if(e!==void 0){if(this.ttl>0&&e.expiry<=Date.now()){this.delete(t);return}return this.moveToEnd(e),e.value}}has(t){return t in this.items}moveToEnd(t){this.last!==t&&(t.prev!==null&&(t.prev.next=t.next),t.next!==null&&(t.next.prev=t.prev),this.first===t&&(this.first=t.next),t.prev=this.last,t.next=null,this.last!==null&&(this.last.next=t),this.last=t,this.first===null&&(this.first=t))}keys(){const t=new Array(this.size);let e=this.first,i=0;for(;e!==null;)t[i++]=e.key,e=e.next;return t}setWithEvicted(t,e,i=this.resetTtl){let s=null;if(this.has(t))this.set(t,e,!0,i);else{this.max>0&&this.size===this.max&&(s={...this.first},this.evict(!0));let r=this.items[t]={expiry:this.ttl>0?Date.now()+this.ttl:this.ttl,key:t,prev:this.last,next:null,value:e};++this.size===1?this.first=r:this.last.next=r,this.last=r}return s}set(t,e,i=!1,s=this.resetTtl){let r=this.items[t];return i||r!==void 0?(r.value=e,i===!1&&s&&(r.expiry=this.ttl>0?Date.now()+this.ttl:this.ttl),this.moveToEnd(r)):(this.max>0&&this.size===this.max&&this.evict(!0),r=this.items[t]={expiry:this.ttl>0?Date.now()+this.ttl:this.ttl,key:t,prev:this.last,next:null,value:e},++this.size===1?this.first=r:this.last.next=r,this.last=r),this}values(t=this.keys()){const e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=this.get(t[i]);return e}}function TT(n=1e3,t=0,e=!1){if(isNaN(n)||n<0)throw new TypeError("Invalid max value");if(isNaN(t)||t<0)throw new TypeError("Invalid ttl value");if(typeof e!="boolean")throw new TypeError("Invalid resetTtl value");return new wT(n,t,e)}function Zp(n){return!!n.tagStyles&&Object.keys(n.tagStyles).length>0}function Kp(n){return n.includes("<")}function ET(n,t){return n.clone().assign(t)}function AT(n,t){const e=[],i=t.tagStyles;if(!Zp(t)||!Kp(n))return e.push({text:n,style:t}),e;const s=[t],r=[];let o="",a=0;for(;a<n.length;){const l=n[a];if(l==="<"){const c=n.indexOf(">",a);if(c===-1){o+=l,a++;continue}const h=n.slice(a+1,c);if(h.startsWith("/")){const u=h.slice(1).trim();if(r.length>0&&r[r.length-1]===u){o.length>0&&(e.push({text:o,style:s[s.length-1]}),o=""),s.pop(),r.pop(),a=c+1;continue}else{o+=n.slice(a,c+1),a=c+1;continue}}else{const u=h.trim();if(i[u]){o.length>0&&(e.push({text:o,style:s[s.length-1]}),o="");const f=s[s.length-1],d=ET(f,i[u]);s.push(d),r.push(u),a=c+1;continue}else{o+=n.slice(a,c+1),a=c+1;continue}}}else o+=l,a++}return o.length>0&&e.push({text:o,style:s[s.length-1]}),e}const CT=[10,13],RT=new Set(CT),PT=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288],IT=new Set(PT),DT=/(\r\n|\r|\n)/,LT=/(?:\r\n|\r|\n)/;function rh(n){return typeof n!="string"?!1:RT.has(n.charCodeAt(0))}function Mn(n,t){return typeof n!="string"?!1:IT.has(n.charCodeAt(0))}function Jp(n){return n==="normal"||n==="pre-line"}function Qp(n){return n==="normal"}function jn(n){if(typeof n!="string")return"";let t=n.length-1;for(;t>=0&&Mn(n[t]);)t--;return t<n.length-1?n.slice(0,t+1):n}function tm(n){const t=[],e=[];if(typeof n!="string")return t;for(let i=0;i<n.length;i++){const s=n[i],r=n[i+1];if(Mn(s)||rh(s)){e.length>0&&(t.push(e.join("")),e.length=0),s==="\r"&&r===`
`?(t.push(`\r
`),i++):t.push(s);continue}e.push(s)}return e.length>0&&t.push(e.join("")),t}function em(n,t,e,i){const s=e(n),r=[];for(let o=0;o<s.length;o++){let a=s[o],l=a,c=1;for(;s[o+c];){const h=s[o+c];if(!i(l,h,n,o,t))a+=h,l=h,c++;else break}o+=c-1,r.push(a)}return r}const UT=/\r\n|\r|\n/g;function FT(n,t,e,i,s,r,o,a){const l=AT(n,t);if(Qp(t.whiteSpace))for(let B=0;B<l.length;B++){const W=l[B];l[B]={text:W.text.replace(UT," "),style:W.style}}const h=[];let u=[];for(const B of l){const W=B.text.split(DT);for(let I=0;I<W.length;I++){const L=W[I];L===`\r
`||L==="\r"||L===`
`?(h.push(u),u=[]):L.length>0&&u.push({text:L,style:B.style})}}(u.length>0||h.length===0)&&h.push(u);const f=e?NT(h,t,i,s,o,a):h,d=[],g=[],_=[],m=[],p=[];let v=0;const y=t._fontString,x=r(y);x.fontSize===0&&(x.fontSize=t.fontSize,x.ascent=t.fontSize);let w="",S=!!t.dropShadow;for(const B of f){let W=0,I=x.ascent,L=x.descent,V="";for(const K of B){const tt=K.style._fontString,gt=r(tt);tt!==w&&(i.font=tt,w=tt);const yt=s(K.text,K.style.letterSpacing,i);W+=yt,I=Math.max(I,gt.ascent),L=Math.max(L,gt.descent),V+=K.text,!S&&K.style.dropShadow&&(S=!0)}B.length===0&&(I=x.ascent,L=x.descent),d.push(W),g.push(I),_.push(L),p.push(V);const H=t.lineHeight||I+L;m.push(H+t.leading),v=Math.max(v,W)}const E=t._stroke?.width||0,T=(e&&t.align!=="left"&&t.align!=="justify"?Math.max(v,t.wordWrapWidth):v)+E+(t.dropShadow?t.dropShadow.distance:0);let C=0;for(let B=0;B<m.length;B++)C+=m[B];C=Math.max(C,m[0]+E);const U=C+(t.dropShadow?t.dropShadow.distance:0),F=t.lineHeight||x.fontSize;return{width:T,height:U,lines:p,lineWidths:d,lineHeight:F+t.leading,maxLineWidth:v,fontProperties:x,runsByLine:f,lineAscents:g,lineDescents:_,lineHeights:m,hasDropShadow:S}}function NT(n,t,e,i,s,r){const{letterSpacing:o,whiteSpace:a,wordWrapWidth:l,breakWords:c}=t,h=Jp(a),u=l+o,f={};let d="";const g=(m,p)=>{const v=`${m}|${p.styleKey}`;let y=f[v];if(y===void 0){const x=p._fontString;x!==d&&(e.font=x,d=x),y=i(m,p.letterSpacing,e)+p.letterSpacing,f[v]=y}return y},_=[];for(const m of n){const p=OT(m),v=_.length,y=C=>{let U=0,F=C;do{const{token:B,style:W}=p[F];U+=g(B,W),F++}while(F<p.length&&p[F].continuesFromPrevious);return U},x=C=>{const U=[];let F=C;do U.push({token:p[F].token,style:p[F].style}),F++;while(F<p.length&&p[F].continuesFromPrevious);return U};let w=[],S=0,E=!h,P=null;const b=()=>{P&&P.text.length>0&&w.push(P),P=null},T=()=>{if(b(),w.length>0){const C=w[w.length-1];C.text=jn(C.text),C.text.length===0&&w.pop()}_.push(w),w=[],S=0,E=!1};for(let C=0;C<p.length;C++){const{token:U,style:F,continuesFromPrevious:B}=p[C],W=g(U,F);if(h){const V=Mn(U),H=P?.text[P.text.length-1]??w[w.length-1]?.text.slice(-1)??"",K=H?Mn(H):!1;if(V&&K)continue}const I=!B,L=I?y(C):W;if(L>u&&I)if(S>0&&T(),c){const V=x(C);for(let H=0;H<V.length;H++){const K=V[H].token,tt=V[H].style,gt=em(K,c,r,s);for(const yt of gt){const Ut=g(yt,tt);Ut+S>u&&T(),!P||P.style!==tt?(b(),P={text:yt,style:tt}):P.text+=yt,S+=Ut}}C+=V.length-1}else{const V=x(C);b(),_.push(V.map(H=>({text:H.token,style:H.style}))),E=!1,C+=V.length-1}else if(L+S>u&&I){if(Mn(U)){E=!1;continue}T(),P={text:U,style:F},S=W}else if(B&&!c)!P||P.style!==F?(b(),P={text:U,style:F}):P.text+=U,S+=W;else{const V=Mn(U);if(S===0&&V&&!E)continue;!P||P.style!==F?(b(),P={text:U,style:F}):P.text+=U,S+=W}}if(b(),w.length>0){const C=w[w.length-1];C.text=jn(C.text),C.text.length===0&&w.pop()}(w.length>0||_.length===v)&&_.push(w)}return _}function OT(n){const t=[];let e=!1;for(const i of n){const s=tm(i.text);let r=!0;for(const o of s){const a=Mn(o)||rh(o),l=r&&e&&!a;t.push({token:o,style:i.style,continuesFromPrevious:l}),e=!a,r=!1}}return t}const BT={willReadFrequently:!0};function Ld(n,t,e,i,s){let r=e[n];return typeof r!="number"&&(r=s(n,t,i)+t,e[n]=r),r}function kT(n,t,e,i,s,r,o){const a=e.getContext("2d",BT);a.font=t._fontString;let l=0,c="";const h=[],u=Object.create(null),{letterSpacing:f,whiteSpace:d}=t,g=Jp(d),_=Qp(d);let m=!g;const p=t.wordWrapWidth+f,v=tm(n);for(let x=0;x<v.length;x++){let w=v[x];if(rh(w)){if(!_){h.push(jn(c)),m=!g,c="",l=0;continue}w=" "}if(g){const E=Mn(w),P=Mn(c[c.length-1]);if(E&&P)continue}const S=Ld(w,f,u,a,i);if(S>p)if(c!==""&&(h.push(jn(c)),c="",l=0),s(w,t.breakWords)){const E=em(w,t.breakWords,o,r);for(const P of E){const b=Ld(P,f,u,a,i);b+l>p&&(h.push(jn(c)),m=!1,c="",l=0),c+=P,l+=b}}else c.length>0&&(h.push(jn(c)),c="",l=0),h.push(jn(w)),m=!1,c="",l=0;else S+l>p&&(m=!1,h.push(jn(c)),c="",l=0),(c.length>0||!Mn(w)||m)&&(c+=w,l+=S)}const y=jn(c);return y.length>0&&h.push(y),h.join(`
`)}const Ud={willReadFrequently:!0},oi=class It{static get experimentalLetterSpacingSupported(){let t=It._experimentalLetterSpacingSupported;if(t===void 0){const e=cn.get().getCanvasRenderingContext2D().prototype;t=It._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,i,s,r,o,a,l,c,h){this.text=t,this.style=e,this.width=i,this.height=s,this.lines=r,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=c,h&&(this.runsByLine=h.runsByLine,this.lineAscents=h.lineAscents,this.lineDescents=h.lineDescents,this.lineHeights=h.lineHeights,this.hasDropShadow=h.hasDropShadow)}static measureText(t=" ",e,i=It._canvas,s=e.wordWrap){const r=`${t}-${e.styleKey}-wordWrap-${s}`;if(It._measurementCache.has(r))return It._measurementCache.get(r);if(Zp(e)&&Kp(t)){const w=FT(t,e,s,It._context,It._measureText,It.measureFont,It.canBreakChars,It.wordWrapSplit),S=new It(t,e,w.width,w.height,w.lines,w.lineWidths,w.lineHeight,w.maxLineWidth,w.fontProperties,{runsByLine:w.runsByLine,lineAscents:w.lineAscents,lineDescents:w.lineDescents,lineHeights:w.lineHeights,hasDropShadow:w.hasDropShadow});return It._measurementCache.set(r,S),S}const a=e._fontString,l=It.measureFont(a);l.fontSize===0&&(l.fontSize=e.fontSize,l.ascent=e.fontSize,l.descent=0);const c=It._context;c.font=a;const u=(s?It._wordWrap(t,e,i):t).split(LT),f=new Array(u.length);let d=0;for(let w=0;w<u.length;w++){const S=It._measureText(u[w],e.letterSpacing,c);f[w]=S,d=Math.max(d,S)}const g=e._stroke?.width??0,_=e.lineHeight||l.fontSize,m=It._getAlignWidth(d,e,s),p=It._adjustWidthForStyle(m,e),v=Math.max(_,l.fontSize+g)+(u.length-1)*(_+e.leading),y=It._adjustHeightForStyle(v,e),x=new It(t,e,p,y,u,f,_+e.leading,d,l);return It._measurementCache.set(r,x),x}static _adjustWidthForStyle(t,e){const i=e._stroke?.width||0;let s=t+i;return e.dropShadow&&(s+=e.dropShadow.distance),s}static _adjustHeightForStyle(t,e){let i=t;return e.dropShadow&&(i+=e.dropShadow.distance),i}static _getAlignWidth(t,e,i){return i&&e.align!=="left"&&e.align!=="justify"?Math.max(t,e.wordWrapWidth):t}static _measureText(t,e,i){let s=!1;It.experimentalLetterSpacingSupported&&(It.experimentalLetterSpacing?(i.letterSpacing=`${e}px`,i.textLetterSpacing=`${e}px`,s=!0):(i.letterSpacing="0px",i.textLetterSpacing="0px"));const r=i.measureText(t);let o=r.width;const a=-(r.actualBoundingBoxLeft??0);let c=(r.actualBoundingBoxRight??0)-a;if(o>0)if(s)o-=e,c-=e;else{const h=(It.graphemeSegmenter(t).length-1)*e;o+=h,c+=h}return Math.max(o,c)}static _wordWrap(t,e,i=It._canvas){return kT(t,e,i,It._measureText,It.canBreakWords,It.canBreakChars,It.wordWrapSplit)}static isBreakingSpace(t,e){return Mn(t)}static canBreakWords(t,e){return e}static canBreakChars(t,e,i,s,r){return!0}static wordWrapSplit(t){return It.graphemeSegmenter(t)}static measureFont(t){if(It._fonts[t])return It._fonts[t];const e=It._context;e.font=t;const i=e.measureText(It.METRICS_STRING+It.BASELINE_SYMBOL),s=i.actualBoundingBoxAscent??0,r=i.actualBoundingBoxDescent??0,o={ascent:s,descent:r,fontSize:s+r};return It._fonts[t]=o,o}static clearMetrics(t=""){t?delete It._fonts[t]:It._fonts={}}static get _canvas(){if(!It.__canvas){let t;try{const e=new OffscreenCanvas(0,0);if(e.getContext("2d",Ud)?.measureText)return It.__canvas=e,e;t=cn.get().createCanvas()}catch{t=cn.get().createCanvas()}t.width=t.height=10,It.__canvas=t}return It.__canvas}static get _context(){return It.__context||(It.__context=It._canvas.getContext("2d",Ud)),It.__context}};oi.METRICS_STRING="|ÉqÅ";oi.BASELINE_SYMBOL="M";oi.BASELINE_MULTIPLIER=1.4;oi.HEIGHT_MULTIPLIER=2;oi.graphemeSegmenter=(()=>{if(typeof Intl?.Segmenter=="function"){const n=new Intl.Segmenter;return t=>{const e=n.segment(t),i=[];let s=0;for(const r of e)i[s++]=r.segment;return i}}return n=>[...n]})();oi.experimentalLetterSpacing=!1;oi._fonts={};oi._measurementCache=TT(1e3);let pi=oi;const zT=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Ac(n){const t=typeof n.fontSize=="number"?`${n.fontSize}px`:n.fontSize;let e=n.fontFamily;Array.isArray(n.fontFamily)||(e=n.fontFamily.split(","));for(let i=e.length-1;i>=0;i--){let s=e[i].trim();!/([\"\'])[^\'\"]+\1/.test(s)&&!zT.includes(s)&&(s=`"${s}"`),e[i]=s}return`${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${t} ${e.join(",")}`}const Fd=1e5;function xo(n,t,e,i=0,s=0,r=0){if(n.texture===ae.WHITE&&!n.fill)return Pe.shared.setValue(n.color).setAlpha(n.alpha??1).toHexa();if(n.fill){if(n.fill instanceof ta){const o=n.fill,a=t.createPattern(o.texture.source.resource,"repeat"),l=o.transform.copyTo(qt.shared);return l.scale(o.texture.source.pixelWidth,o.texture.source.pixelHeight),a.setTransform(l),a}else if(n.fill instanceof ri){const o=n.fill,a=o.type==="linear",l=o.textureSpace==="local";let c=1,h=1;l&&e&&(c=e.width+i,h=e.height+i);let u,f=!1;if(a){const{start:d,end:g}=o;u=t.createLinearGradient(d.x*c+s,d.y*h+r,g.x*c+s,g.y*h+r),f=Math.abs(g.x-d.x)<Math.abs((g.y-d.y)*.1)}else{const{center:d,innerRadius:g,outerCenter:_,outerRadius:m}=o;u=t.createRadialGradient(d.x*c+s,d.y*h+r,g*c,_.x*c+s,_.y*h+r,m*c)}if(f&&l&&e){const d=e.lineHeight/h;for(let g=0;g<e.lines.length;g++){const _=(g*e.lineHeight+i/2)/h;o.colorStops.forEach(m=>{let p=_+m.offset*d;p=Math.max(0,Math.min(1,p)),u.addColorStop(Math.floor(p*Fd)/Fd,Pe.shared.setValue(m.color).toHex())})}}else o.colorStops.forEach(d=>{u.addColorStop(d.offset,Pe.shared.setValue(d.color).toHex())});return u}}else{const o=t.createPattern(n.texture.source.resource,"repeat"),a=n.matrix.copyTo(qt.shared);return a.scale(n.texture.source.pixelWidth,n.texture.source.pixelHeight),o.setTransform(a),o}return qe("FillStyle not recognised",n),"red"}const Nd=new Te;class GT{getCanvasAndContext(t){const{text:e,style:i,resolution:s=1}=t,r=i._getFinalPadding(),o=pi.measureText(e||" ",i),a=Math.ceil(Math.ceil(Math.max(1,o.width)+r*2)*s),l=Math.ceil(Math.ceil(Math.max(1,o.height)+r*2)*s),c=Ec.getOptimalCanvasAndContext(a,l);this._renderTextToCanvas(i,r,s,c,o);const h=i.trim?MT({canvas:c.canvas,width:a,height:l,resolution:1,output:Nd}):Nd.set(0,0,a,l);return{canvasAndContext:c,frame:h}}returnCanvasAndContext(t){Ec.returnCanvasAndContext(t)}_renderTextToCanvas(t,e,i,s,r){if(r.runsByLine&&r.runsByLine.length>0){this._renderTaggedTextToCanvas(r,t,e,i,s);return}const{canvas:o,context:a}=s,l=Ac(t),c=r.lines,h=r.lineHeight,u=r.lineWidths,f=r.maxLineWidth,d=r.fontProperties,g=o.height;if(a.resetTransform(),a.scale(i,i),a.textBaseline=t.textBaseline,t._stroke?.width){const S=t._stroke;a.lineWidth=S.width,a.miterLimit=S.miterLimit,a.lineJoin=S.join,a.lineCap=S.cap}a.font=l;let _,m;const p=t.dropShadow?2:1,v=t.wordWrap?t.wordWrapWidth:f,x=(t._stroke?.width??0)/2;let w=(h-d.fontSize)/2;h-d.fontSize<0&&(w=0);for(let S=0;S<p;++S){const E=t.dropShadow&&S===0,P=E?Math.ceil(Math.max(1,g)+e*2):0,b=P*i;if(E)this._setupDropShadow(a,t,i,b);else{const T=t._gradientBounds,C=t._gradientOffset;if(T){const U={width:T.width,height:T.height,lineHeight:T.height,lines:r.lines};this._setFillAndStrokeStyles(a,t,U,e,x,C?.x??0,C?.y??0)}else C?this._setFillAndStrokeStyles(a,t,r,e,x,C.x,C.y):this._setFillAndStrokeStyles(a,t,r,e,x);a.shadowColor="black"}for(let T=0;T<c.length;T++)_=x,m=x+T*h+d.ascent+w,_+=this._getAlignmentOffset(u[T],v,t.align),t._stroke?.width&&this._drawLetterSpacing(c[T],t,s,_+e,m+e-P,!0),t._fill!==void 0&&this._drawLetterSpacing(c[T],t,s,_+e,m+e-P)}}_renderTaggedTextToCanvas(t,e,i,s,r){const{canvas:o,context:a}=r,{runsByLine:l,lineWidths:c,maxLineWidth:h,lineAscents:u,lineHeights:f,hasDropShadow:d}=t,g=o.height;a.resetTransform(),a.scale(s,s),a.textBaseline=e.textBaseline;const _=d?2:1,m=e.wordWrap?e.wordWrapWidth:h,v=(e._stroke?.width??0)/2,y=[];for(let x=0;x<l.length;x++){const w=l[x],S=[];for(const E of w){const P=Ac(E.style);a.font=P,S.push({width:pi._measureText(E.text,E.style.letterSpacing,a),font:P})}y.push(S)}for(let x=0;x<_;++x){const w=d&&x===0,S=w?Math.ceil(Math.max(1,g)+i*2):0,E=S*s;w||(a.shadowColor="black");let P=v;for(let b=0;b<l.length;b++){const T=l[b],C=c[b],U=u[b],F=f[b],B=y[b];let W=v;W+=this._getAlignmentOffset(C,m,e.align);const I=P+U;let L=W+i;for(let V=0;V<T.length;V++){const H=T[V],{width:K,font:tt}=B[V];if(a.font=tt,a.textBaseline=H.style.textBaseline,H.style._stroke?.width){const gt=H.style._stroke;if(a.lineWidth=gt.width,a.miterLimit=gt.miterLimit,a.lineJoin=gt.join,a.lineCap=gt.cap,w)if(H.style.dropShadow)this._setupDropShadow(a,H.style,s,E);else{L+=K;continue}else{const yt=pi.measureFont(tt),Ut=H.style.lineHeight||yt.fontSize,Xt={width:K,height:Ut,lineHeight:Ut,lines:[H.text]};a.strokeStyle=xo(gt,a,Xt,i*2,L-i,P)}this._drawLetterSpacing(H.text,H.style,r,L,I+i-S,!0)}L+=K}L=W+i;for(let V=0;V<T.length;V++){const H=T[V],{width:K,font:tt}=B[V];if(a.font=tt,a.textBaseline=H.style.textBaseline,H.style._fill!==void 0){if(w)if(H.style.dropShadow)this._setupDropShadow(a,H.style,s,E);else{L+=K;continue}else{const gt=pi.measureFont(tt),yt=H.style.lineHeight||gt.fontSize,Ut={width:K,height:yt,lineHeight:yt,lines:[H.text]};a.fillStyle=xo(H.style._fill,a,Ut,i*2,L-i,P)}this._drawLetterSpacing(H.text,H.style,r,L,I+i-S,!1)}L+=K}P+=F}}}_setFillAndStrokeStyles(t,e,i,s,r,o=0,a=0){if(t.fillStyle=e._fill?xo(e._fill,t,i,s*2,o,a):null,e._stroke?.width){const l=r+s*2;t.strokeStyle=xo(e._stroke,t,i,l,o,a)}}_setupDropShadow(t,e,i,s){t.fillStyle="black",t.strokeStyle="black";const r=e.dropShadow,o=r.color,a=r.alpha;t.shadowColor=Pe.shared.setValue(o).setAlpha(a).toRgbaString();const l=r.blur*i,c=r.distance*i;t.shadowBlur=l,t.shadowOffsetX=Math.cos(r.angle)*c,t.shadowOffsetY=Math.sin(r.angle)*c+s}_getAlignmentOffset(t,e,i){return i==="right"?e-t:i==="center"?(e-t)/2:0}_drawLetterSpacing(t,e,i,s,r,o=!1){const{context:a}=i,l=e.letterSpacing;let c=!1;if(pi.experimentalLetterSpacingSupported&&(pi.experimentalLetterSpacing?(a.letterSpacing=`${l}px`,a.textLetterSpacing=`${l}px`,c=!0):(a.letterSpacing="0px",a.textLetterSpacing="0px")),l===0||c){o?a.strokeText(t,s,r):a.fillText(t,s,r);return}let h=s;const u=pi.graphemeSegmenter(t);let f=a.measureText(t).width,d=0;for(let g=0;g<u.length;++g){const _=u[g];o?a.strokeText(_,h,r):a.fillText(_,h,r);let m="";for(let p=g+1;p<u.length;++p)m+=u[p];d=a.measureText(m).width,h+=f-d+l,f=d}}}const _s=new GT,oh=class Oi extends Gn{constructor(t={}){super(),this.uid=Me("textStyle"),this._tick=0,this._cachedFontString=null,VT(t),t instanceof Oi&&(t=t._toObject());const s={...Oi.defaultTextStyle,...t};for(const r in s){const o=r;this[o]=s[r]}this._tagStyles=t.tagStyles??void 0,this.update(),this._tick=0}get align(){return this._align}set align(t){this._align!==t&&(this._align=t,this.update())}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords!==t&&(this._breakWords=t,this.update())}get dropShadow(){return this._dropShadow}set dropShadow(t){this._dropShadow!==t&&(t!==null&&typeof t=="object"?this._dropShadow=this._createProxy({...Oi.defaultDropShadow,...t}):this._dropShadow=t?this._createProxy({...Oi.defaultDropShadow}):null,this.update())}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily!==t&&(this._fontFamily=t,this.update())}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize!==t&&(typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update())}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle!==t&&(this._fontStyle=t.toLowerCase(),this.update())}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant!==t&&(this._fontVariant=t,this.update())}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight!==t&&(this._fontWeight=t,this.update())}get leading(){return this._leading}set leading(t){this._leading!==t&&(this._leading=t,this.update())}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.update())}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight!==t&&(this._lineHeight=t,this.update())}get padding(){return this._padding}set padding(t){this._padding!==t&&(this._padding=t,this.update())}get filters(){return this._filters}set filters(t){this._filters!==t&&(this._filters=Object.freeze(t),this.update())}get trim(){return this._trim}set trim(t){this._trim!==t&&(this._trim=t,this.update())}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline!==t&&(this._textBaseline=t,this.update())}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace!==t&&(this._whiteSpace=t,this.update())}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap!==t&&(this._wordWrap=t,this.update())}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.update())}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._isFillStyle(t)&&(this._originalFill=this._createProxy({...vn.defaultFillStyle,...t},()=>{this._fill=Vi({...this._originalFill},vn.defaultFillStyle)})),this._fill=Vi(t===0?"black":t,vn.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._isFillStyle(t)&&(this._originalStroke=this._createProxy({...vn.defaultStrokeStyle,...t},()=>{this._stroke=Vo({...this._originalStroke},vn.defaultStrokeStyle)})),this._stroke=Vo(t,vn.defaultStrokeStyle),this.update())}get tagStyles(){return this._tagStyles}set tagStyles(t){this._tagStyles!==t&&(this._tagStyles=t??void 0,this.update())}update(){this._tick++,this._cachedFontString=null,this.emit("update",this)}reset(){const t=Oi.defaultTextStyle;for(const e in t)this[e]=t[e]}assign(t){for(const e in t){const i=e;this[i]=t[e]}return this}get styleKey(){return`${this.uid}-${this._tick}`}get _fontString(){return this._cachedFontString===null&&(this._cachedFontString=Ac(this)),this._cachedFontString}_toObject(){return{align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill?{...this._fill}:void 0,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke?{...this._stroke}:void 0,textBaseline:this.textBaseline,trim:this.trim,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth,filters:this._filters?[...this._filters]:void 0,tagStyles:this._tagStyles?{...this._tagStyles}:void 0}}clone(){return new Oi(this._toObject())}_getFinalPadding(){let t=0;if(this._filters)for(let e=0;e<this._filters.length;e++)t+=this._filters[e].padding;return Math.max(this._padding,t)}destroy(t=!1){if(this.removeAllListeners(),typeof t=="boolean"?t:t?.texture){const i=typeof t=="boolean"?t:t?.textureSource;this._fill?.texture&&this._fill.texture.destroy(i),this._originalFill?.texture&&this._originalFill.texture.destroy(i),this._stroke?.texture&&this._stroke.texture.destroy(i),this._originalStroke?.texture&&this._originalStroke.texture.destroy(i)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(t,e){return new Proxy(t,{set:(i,s,r)=>(i[s]===r||(i[s]=r,e?.(s,r),this.update()),!0)})}_isFillStyle(t){return(t??null)!==null&&!(Pe.isColorLike(t)||t instanceof ri||t instanceof ta)}};oh.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};oh.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let Tr=oh;function VT(n){const t=n;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=Tr.defaultDropShadow;n.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){Kt(Se,"strokeThickness is now a part of stroke");const e=t.stroke;let i={};if(Pe.isColorLike(e))i.color=e;else if(e instanceof ri||e instanceof ta)i.fill=e;else if(Object.hasOwnProperty.call(e,"color")||Object.hasOwnProperty.call(e,"fill"))i=e;else throw new Error("Invalid stroke value.");n.stroke={...i,width:t.strokeThickness}}if(Array.isArray(t.fillGradientStops)){if(Kt(Se,"gradient fill is now a fill pattern: `new FillGradient(...)`"),!Array.isArray(t.fill)||t.fill.length===0)throw new Error("Invalid fill value. Expected an array of colors for gradient fill.");t.fill.length!==t.fillGradientStops.length&&qe("The number of fill colors must match the number of fill gradient stops.");const e=new ri({start:{x:0,y:0},end:{x:0,y:1},textureSpace:"local"}),i=t.fillGradientStops.slice(),s=t.fill.map(r=>Pe.shared.setValue(r).toNumber());i.forEach((r,o)=>{e.addColorStop(r,s[o])}),n.fill={fill:e}}}function HT(n,t){const{texture:e,bounds:i}=n,s=t._style._getFinalPadding();zf(i,t._anchor,e);const r=t._anchor._x*s*2,o=t._anchor._y*s*2;i.minX-=s-r,i.minY-=s-o,i.maxX-=s-r,i.maxY-=s-o}class WT{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}destroy(){this.reset()}}class XT extends WT{}class nm{constructor(t){this._renderer=t,t.runners.resolutionChange.add(this),this._managedTexts=new Rr({renderer:t,type:"renderable",onUnload:this.onTextUnload.bind(this),name:"canvasText"})}resolutionChange(){for(const t in this._managedTexts.items){const e=this._managedTexts.items[t];e?._autoResolution&&e.onViewUpdate()}}validateRenderable(t){const e=this._getGpuText(t),i=t.styleKey;return e.currentKey!==i?!0:t._didTextUpdate}addRenderable(t,e){const i=this._getGpuText(t);if(t._didTextUpdate){const s=t._autoResolution?this._renderer.resolution:t.resolution;(i.currentKey!==t.styleKey||t._resolution!==s)&&this._updateGpuText(t),t._didTextUpdate=!1,HT(i,t)}this._renderer.renderPipes.batch.addToBatch(i,e)}updateRenderable(t){const e=this._getGpuText(t);e._batcher.updateElement(e)}_updateGpuText(t){const e=this._getGpuText(t);e.texture&&this._renderer.canvasText.decreaseReferenceCount(e.currentKey),t._resolution=t._autoResolution?this._renderer.resolution:t.resolution,e.texture=this._renderer.canvasText.getManagedTexture(t),e.currentKey=t.styleKey}_getGpuText(t){return t._gpuData[this._renderer.uid]||this.initGpuText(t)}initGpuText(t){const e=new XT;return e.currentKey="--",e.renderable=t,e.transform=t.groupTransform,e.bounds={minX:0,maxX:1,minY:0,maxY:0},e.roundPixels=this._renderer._roundPixels|t._roundPixels,t._gpuData[this._renderer.uid]=e,this._managedTexts.add(t),e}onTextUnload(t){const e=t._gpuData[this._renderer.uid];if(!e)return;const{canvasText:i}=this._renderer;i.getReferenceCount(e.currentKey)>0?i.decreaseReferenceCount(e.currentKey):e.texture&&i.returnTexture(e.texture)}destroy(){this._managedTexts.destroy(),this._renderer=null}}nm.extension={type:[Gt.WebGLPipes,Gt.WebGPUPipes,Gt.CanvasPipes],name:"text"};const YT=new mn;function qT(n,t,e,i){const s=YT;s.minX=0,s.minY=0,s.maxX=n.width/i|0,s.maxY=n.height/i|0;const r=Zo.getOptimalTexture(s.width,s.height,i,!1);return r.source.uploadMethodId="image",r.source.resource=n,r.source.alphaMode="premultiply-alpha-on-upload",r.frame.width=t/i,r.frame.height=e/i,r.source.emit("update",r.source),r.updateUvs(),r}class im{constructor(t,e){this._activeTextures={},this._renderer=t,this._retainCanvasContext=e}getTexture(t,e,i,s){typeof t=="string"&&(Kt("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),t={text:t,style:i,resolution:e}),t.style instanceof Tr||(t.style=new Tr(t.style)),t.textureStyle instanceof Cs||(t.textureStyle=new Cs(t.textureStyle)),typeof t.text!="string"&&(t.text=t.text.toString());const{text:r,style:o,textureStyle:a}=t,l=t.resolution??this._renderer.resolution,{frame:c,canvasAndContext:h}=_s.getCanvasAndContext({text:r,style:o,resolution:l}),u=qT(h.canvas,c.width,c.height,l);if(a&&(u.source.style=a),o.trim&&(c.pad(o.padding),u.frame.copyFrom(c),u.frame.scale(1/l),u.updateUvs()),o.filters){const f=this._applyFilters(u,o.filters);return this.returnTexture(u),_s.returnCanvasAndContext(h),f}return this._renderer.texture.initSource(u._source),this._retainCanvasContext||_s.returnCanvasAndContext(h),u}returnTexture(t){const e=t.source,i=e.resource;if(this._retainCanvasContext&&i?.getContext){const s=i.getContext("2d");s&&_s.returnCanvasAndContext({canvas:i,context:s})}e.resource=null,e.uploadMethodId="unknown",e.alphaMode="no-premultiply-alpha",Zo.returnTexture(t,!0)}renderTextToCanvas(){Kt("8.10.0","CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead")}getManagedTexture(t){t._resolution=t._autoResolution?this._renderer.resolution:t.resolution;const e=t.styleKey;if(this._activeTextures[e])return this._increaseReferenceCount(e),this._activeTextures[e].texture;const i=this.getTexture({text:t.text,style:t.style,resolution:t._resolution,textureStyle:t.textureStyle});return this._activeTextures[e]={texture:i,usageCount:1},i}decreaseReferenceCount(t){const e=this._activeTextures[t];e&&(e.usageCount--,e.usageCount===0&&(this.returnTexture(e.texture),this._activeTextures[t]=null))}getReferenceCount(t){return this._activeTextures[t]?.usageCount??0}_increaseReferenceCount(t){this._activeTextures[t].usageCount++}_applyFilters(t,e){const i=this._renderer.renderTarget.renderTarget,s=this._renderer.filter.generateFilteredTexture({texture:t,filters:e});return this._renderer.renderTarget.bind(i,!1),s}destroy(){this._renderer=null;for(const t in this._activeTextures)this._activeTextures[t]&&this.returnTexture(this._activeTextures[t].texture);this._activeTextures=null}}class sm extends im{constructor(t){super(t,!0)}}sm.extension={type:[Gt.CanvasSystem],name:"canvasText"};class rm extends im{constructor(t){super(t,!1)}}rm.extension={type:[Gt.WebGLSystem,Gt.WebGPUSystem],name:"canvasText"};Ee.add(sm);Ee.add(rm);Ee.add(nm);class Fe extends yT{constructor(...t){const e=vT(t,"Text");super(e,Tr),this.renderPipeId="text",e.textureStyle&&(this.textureStyle=e.textureStyle instanceof Cs?e.textureStyle:new Cs(e.textureStyle))}updateBounds(){const t=this._bounds,e=this._anchor;let i=0,s=0;if(this._style.trim){const{frame:r,canvasAndContext:o}=_s.getCanvasAndContext({text:this.text,style:this._style,resolution:1});_s.returnCanvasAndContext(o),i=r.width,s=r.height}else{const r=pi.measureText(this._text,this._style);i=r.width,s=r.height}t.minX=-e._x*i,t.maxX=t.minX+i,t.minY=-e._y*s,t.maxY=t.minY+s}}Ee.add(wS,TS);const cl={type:"change"},ah={type:"start"},lh={type:"end"},Od=1e-6,ee={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},yo=new Lt,fi=new Lt,$T=new D,vo=new D,hl=new D,hs=new Ds,Bd=new D,So=new D,ul=new D,bo=new D;class jT extends T_{constructor(t,e=null){super(t,e),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.target=new D,this.state=ee.NONE,this.keyState=ee.NONE,this._lastPosition=new D,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new D,this._movePrev=new Lt,this._moveCurr=new Lt,this._lastAxis=new D,this._zoomStart=new Lt,this._zoomEnd=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._pointers=[],this._pointerPositions={},this._onPointerMove=KT.bind(this),this._onPointerDown=ZT.bind(this),this._onPointerUp=JT.bind(this),this._onPointerCancel=QT.bind(this),this._onContextMenu=oE.bind(this),this._onMouseWheel=rE.bind(this),this._onKeyDown=eE.bind(this),this._onKeyUp=tE.bind(this),this._onTouchStart=aE.bind(this),this._onTouchMove=lE.bind(this),this._onTouchEnd=cE.bind(this),this._onMouseDown=nE.bind(this),this._onMouseMove=iE.bind(this),this._onMouseUp=sE.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,e!==null&&(this.connect(e),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const t=this.domElement.getBoundingClientRect(),e=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-e.clientLeft,this.screen.top=t.top+window.pageYOffset-e.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Od&&(this.dispatchEvent(cl),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Od||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(cl),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=ee.NONE,this.keyState=ee.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(cl),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(fi.copy(this._panEnd).sub(this._panStart),fi.lengthSq()){if(this.object.isOrthographicCamera){const t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,e=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;fi.x*=t,fi.y*=e}fi.multiplyScalar(this._eye.length()*this.panSpeed),vo.copy(this._eye).cross(this.object.up).setLength(fi.x),vo.add($T.copy(this.object.up).setLength(fi.y)),this.object.position.add(vo),this.target.add(vo),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(fi.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){bo.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=bo.length();t?(this._eye.copy(this.object.position).sub(this.target),Bd.copy(this._eye).normalize(),So.copy(this.object.up).normalize(),ul.crossVectors(So,Bd).normalize(),So.setLength(this._moveCurr.y-this._movePrev.y),ul.setLength(this._moveCurr.x-this._movePrev.x),bo.copy(So.add(ul)),hl.crossVectors(bo,this._eye).normalize(),t*=this.rotateSpeed,hs.setFromAxisAngle(hl,t),this._eye.applyQuaternion(hs),this.object.up.applyQuaternion(hs),this._lastAxis.copy(hl),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),hs.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(hs),this.object.up.applyQuaternion(hs)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===ee.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Ch.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Ch.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,e){return yo.set((t-this.screen.left)/this.screen.width,(e-this.screen.top)/this.screen.height),yo}_getMouseOnCircle(t,e){return yo.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-e))/this.screen.width),yo}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId==t.pointerId){this._pointers.splice(e,1);return}}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[e.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function ZT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n))}function KT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function JT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchEnd(n):this._onMouseUp(),this._removePointer(n),this._pointers.length===0&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp)))}function QT(n){this._removePointer(n)}function tE(){this.enabled!==!1&&(this.keyState=ee.NONE,window.addEventListener("keydown",this._onKeyDown))}function eE(n){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===ee.NONE&&(n.code===this.keys[ee.ROTATE]&&!this.noRotate?this.keyState=ee.ROTATE:n.code===this.keys[ee.ZOOM]&&!this.noZoom?this.keyState=ee.ZOOM:n.code===this.keys[ee.PAN]&&!this.noPan&&(this.keyState=ee.PAN)))}function nE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xs.DOLLY:this.state=ee.ZOOM;break;case xs.ROTATE:this.state=ee.ROTATE;break;case xs.PAN:this.state=ee.PAN;break;default:this.state=ee.NONE}const e=this.keyState!==ee.NONE?this.keyState:this.state;e===ee.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr)):e===ee.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._zoomEnd.copy(this._zoomStart)):e===ee.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(ah)}function iE(n){const t=this.keyState!==ee.NONE?this.keyState:this.state;t===ee.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY))):t===ee.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY)):t===ee.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY))}function sE(){this.state=ee.NONE,this.dispatchEvent(lh)}function rE(n){if(this.enabled!==!1&&this.noZoom!==!0){switch(n.preventDefault(),n.deltaMode){case 2:this._zoomStart.y-=n.deltaY*.025;break;case 1:this._zoomStart.y-=n.deltaY*.01;break;default:this._zoomStart.y-=n.deltaY*25e-5;break}this.dispatchEvent(ah),this.dispatchEvent(lh)}}function oE(n){this.enabled!==!1&&n.preventDefault()}function aE(n){if(this._trackPointer(n),this._pointers.length===1)this.state=ee.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);else{this.state=ee.TOUCH_ZOOM_PAN;const t=this._pointers[0].pageX-this._pointers[1].pageX,e=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+e*e);const i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,s)),this._panEnd.copy(this._panStart)}this.dispatchEvent(ah)}function lE(n){if(this._trackPointer(n),this._pointers.length===1)this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY));else{const t=this._getSecondPointerPosition(n),e=n.pageX-t.x,i=n.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(e*e+i*i);const s=(n.pageX+t.x)/2,r=(n.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,r))}}function cE(n){switch(this._pointers.length){case 0:this.state=ee.NONE;break;case 1:this.state=ee.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=ee.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==n.pointerId){const e=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(e.x,e.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(lh)}class hE extends Ve{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Lt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const us=new D,kd=new pe,zd=new pe,Gd=new D,Vd=new D;class uE{constructor(t={}){const e=this;let i,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),kd.copy(_.matrixWorldInverse),zd.multiplyMatrices(_.projectionMatrix,kd),h(g,g,_),this.sortObjects&&d(g)},this.setSize=function(g,_){i=g,s=_,r=i/2,o=s/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)c(g.children[_])}function h(g,_,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){us.setFromMatrixPosition(g.matrixWorld),us.applyMatrix4(zd);const p=us.z>=-1&&us.z<=1&&g.layers.test(m.layers)===!0,v=g.element;v.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(e,_,m),v.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(us.x*r+r)+"px,"+(-us.y*o+o)+"px)",v.parentNode!==l&&l.appendChild(v),g.onAfterRender(e,_,m));const y={distanceToCameraSquared:u(m,g)};a.objects.set(g,y)}for(let p=0,v=g.children.length;p<v;p++)h(g.children[p],_,m)}function u(g,_){return Gd.setFromMatrixPosition(g.matrixWorld),Vd.setFromMatrixPosition(_.matrixWorld),Gd.distanceToSquared(Vd)}function f(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function d(g){const _=f(g).sort(function(p,v){if(p.renderOrder!==v.renderOrder)return v.renderOrder-p.renderOrder;const y=a.objects.get(p).distanceToCameraSquared,x=a.objects.get(v).distanceToCameraSquared;return y-x}),m=_.length;for(let p=0,v=_.length;p<v;p++)_[p].element.style.zIndex=m-p}}}function dE(n,t){let e=400,i=400;const s=document.getElementById(n),r=new uE;r.setSize(e,i),s.appendChild(r.domElement);const o=new Hg,a=new on(75,e/i,.1,1e3),l=new SS({canvas:t,antialias:!0});l.setPixelRatio(window.devicePixelRatio),l.setSize(e,i),a.position.set(0,0,15);const c={camera_tilt:0,z_height:0,a_coef:0};a.lookAt(0,0,0),l.render(o,a);const h=new jT(a,l.domElement);h.rotateSpeed=1,h.zoomSpeed=1.2,h.panSpeed=.8,h.noZoom=!1,h.noPan=!1,h.staticMoving=!0,h.dynamicDampingFactor=.1,h.target.set(5,5,0);function u(I,L={}){if(I.length<3)throw new Error("Need at least 3 points");const{color:V=65484,opacity:H=.7,side:K=In}=L,tt=new mi().setFromCoplanarPoints(I[0],I[1],I[2]).normal.clone(),gt=new D,yt=new D;gt.crossVectors(Math.abs(tt.x)>.9?new D(0,1,0):new D(1,0,0),tt).normalize(),yt.crossVectors(tt,gt);const Ut=I.map(At=>new Lt(At.dot(gt),At.dot(yt))),Xt=Vc.triangulateShape(Ut,[]),$=[];for(const At of Xt)for(const pt of At){const Bt=I[pt];$.push(Bt.x,Bt.y,Bt.z)}const J=new Qe;J.setAttribute("position",new Ce($,3)),J.computeVertexNormals();const dt=new Ca({color:V,transparent:H<1,opacity:H,side:K});return new ln(J,dt)}function f(I,L,V=16777215){const H=new D().subVectors(L,I),K=H.length(),tt=.02,gt=new Gc(tt,tt,K,64),yt=new Ca({color:V}),Ut=new ln(gt,yt),Xt=new D().addVectors(I,L).multiplyScalar(.5);Ut.position.copy(Xt);const $=new D(0,1,0);return Ut.quaternion.setFromUnitVectors($,H.clone().normalize()),o.add(Ut),Ut}function d(I,L){const V=document.createElement("div");V.className="label",V.textContent=I,V.style.color="white",V.style.fontSize="20px",V.style.background="rgba(0,0,0,0.6)",V.style.padding="4px 8px",V.style.borderRadius="6px",V.style.border="1px solid rgba(255,255,255,0.3)";const H=new hE(V);return H.position.copy(L),o.add(H),H}function g(I,L){I.position.copy(L)}let _=d("Start",new D(.3,-.5,0));f(new D(-2,0,0),new D(10,0,0)),f(new D(0,-2,0),new D(0,10,0)),f(new D(-2,5,0),new D(5,-2,0)),f(new D(-2,11,0),new D(11,-2,0)),f(new D(0,0,-2),new D(0,0,8));const m=new qo(.2,32,16),p=new Ca({color:16776960}),v=new ln(m,p);v.position.set(0,0,0),o.add(v);let y=u([new D(3,0,0),new D(9,0,0),new D(0,9,0),new D(0,3,0)]),x=u([new D(9,0,0),new D(0,9,0),new D(0,9,c.z_height),new D(9,0,c.z_height)]),w=u([new D(3,0,0),new D(0,3,0),new D(0,3,0)],{color:16711680}),S=u([new D(0,3,0),new D(0,9,0),new D(0,9,c.z_height),new D(0,c.a_coef,c.z_height)]),E=u([new D(3,0,0),new D(9,0,0),new D(9,0,c.z_height),new D(c.a_coef,0,c.z_height)]);o.add(w,y,E,S,x);const P=new v_(16777215,20);P.position.set(2,2,5);const b=new S_(16777215,.1);o.add(b),o.add(P),new M_(P);const T=new w_(200,50);T.rotation.x=Math.PI/2;function C(I,L,V={}){const H=u(L,V);I.geometry.dispose(),I.geometry=H.geometry,I.material.dispose(),I.material=H.material}function U(I,L){C(x,[new D(9,0,0),new D(0,9,0),new D(0,9,L),new D(9,0,L)]);let V=Math.max(0,3-I*L),H=L;I>3/L&&(H=3/I),C(w,[new D(3,0,0),new D(0,3,0),new D(0,V,H),new D(V,0,H)],{color:16711680}),C(S,[new D(0,3,0),new D(0,9,0),new D(0,9,L),new D(0,V,L),new D(0,V,H)]),C(E,[new D(3,0,0),new D(9,0,0),new D(9,0,L),new D(V,0,L),new D(V,0,H)])}let F=100;function B(I){if(F-=1,!(F>=0)){if(c.camera_tilt<=1){a.position.x+=.01,a.position.y-=.03,a.position.z-=.07,c.camera_tilt+=.01;return}if(c.z_height<=7){_.visible=!1,c.z_height+=.06,c.z_height>7&&(F=100),U(c.a_coef,c.z_height);return}if(c.a_coef<=1){c.a_coef+=.01,c.a_coef>1&&(F=100),U(c.a_coef,c.z_height);return}g(_,new D(.3,-.5,c.a_coef*3)),v.position.set(0,0,3),_.visible=!0}}function W(){requestAnimationFrame(W),l.render(o,a),r.render(o,a),B(),h.update()}W()}const Un=1e-9;function om(n,t){return Math.abs(n-t)<Un}class zt{constructor({lower:t,a:e,b:i,upper:s,label:r}){this.lower=t,this.upper=s,this.row=new Array(2),this.row[0]=e,this.row[1]=i,this.label=r}}function fE(n,t,e){const i=n[t][e];if(om(i,0))throw new Error("Gaussian elimination on zero entry");const s=n.length,r=n[0].length;for(let o=0;o<r;o++)n[t][o]/=i;for(let o=0;o<s;o++){if(o===t)continue;const a=n[o][e];for(let l=0;l<r;l++)n[o][l]-=n[t][l]*a}}function dl(n,t){for(let e=0;e<n.length;e++)if(n[e]===t)return e}function pE(n,t,e){const i=n[0].length-1;let s,r;for(let o=0;o<e;o++){const a=n[o][t],l=n[o][i];if(a<Un||l<Un)continue;const c=l/a;(s===void 0||c<s)&&(s=c,r=o)}return r}class Ho{constructor(t,e,i,s){this.dimension=e,this.basis_dimension=e+s,this.num_constraints=i,this.num_artificial=s,this.rhsCol=e+i,this.matrix=t,this.basis=new Array(this.basis_dimension).fill(0),this.dictionary=new Array(i).fill(0);for(let r=0;r<this.basis_dimension;r++)this.basis[r]=r;for(let r=0;r<i;r++)this.dictionary[r]=r+this.basis_dimension}clone(){const t=new Ho(structuredClone(this.matrix),this.dimension,this.num_constraints,this.num_artificial);return t.dimension=this.dimension,t.num_constraints=this.num_constraints,t.basis=structuredClone(this.basis),t.dictionary=structuredClone(this.dictionary),t.rhsCol=this.rhsCol,t}pivot(t,e){fE(this.matrix,t,e);const i=this.dictionary[t],s=dl(this.basis,e);if(s===void 0)throw new Error("Variable not in basis");this.basis[s]=i,this.dictionary[t]=e}canPivot(t,e){if(t===e)return!0;if(!this.dictionary.includes(t))return!1;let i=this.dictionary.indexOf(t),s=e;const r=this.matrix[i][s];return Math.abs(r)>Un}pivotVar(t,e){if(t!==e){if(!this.basis.includes(e))throw new Error("Pivot basis does not include pivoted out variable");if(!this.dictionary.includes(t))throw new Error("Pivot dictionary does not include pivoted in variable");console.log("vars: ",t,e),console.log("translation: ",this.dictionary.indexOf(t)),this.pivot(this.dictionary.indexOf(t),e)}}simplex_pivot(t){if(dl(this.basis,t)===void 0)throw new Error("Cannot pivot variable not in basis");const e=pE(this.matrix,t,this.num_constraints);if(e===void 0)return;const i=this.dictionary[e];return this.pivot(e,t),i}get_cost_function(){const t=this.matrix.length-1;return this.matrix[t].slice(0,this.matrix[0].length-1)}get_rhs(){const t=this.matrix[0].length-1;return this.matrix.slice(0,this.num_constraints).map(e=>e[t])}get_cost(){const t=this.matrix.length-1,e=this.matrix[0].length-1;return this.matrix[t][e]}get_dictionary(){return[...this.dictionary]}trim_tableau(){for(let o=0;o<this.num_constraints;o++){const a=this.dictionary[o];if(Mo(a,this.basis_dimension-this.num_artificial,this.num_artificial)){let l=!1;for(let c=0;c<this.basis_dimension+this.num_constraints;c++){const h=this.basis[c];if(Mo(h,this.basis_dimension-this.num_artificial,this.num_artificial))continue;const u=this.matrix[o][c];if(!om(u,0)){this.pivot(o,h),l=!0;break}}if(!l)throw new Error("Failed to pivot artificial variable")}}const t=this.basis_dimension-this.num_artificial,e=Array.from({length:this.num_constraints+1},()=>new Array(t+this.num_constraints+1).fill(0));for(let o=0;o<=this.num_constraints;o++){for(let a=0;a<t;a++)e[o][a]=this.matrix[o][a];for(let a=0;a<=this.num_constraints;a++)e[o][t+a]=this.matrix[o][this.basis_dimension+a]}const i=[];for(const o of this.basis)Mo(o,t,this.num_artificial)||i.push(Hd(o,t,this.num_artificial)?o-this.num_artificial:o);const s=[];for(const o of this.dictionary){if(Mo(o,t,this.num_artificial))throw new Error("Artificial variable in dictionary");s.push(Hd(o,t,this.num_artificial)?o-this.num_artificial:o)}const r=new Ho(e,t,this.num_constraints,0);return r.basis=i,r.dictionary=s,r}extract_coordinates(){const t=[];for(let e=0;e<this.dimension;e++)if(this.basis.includes(e))t[e]=0;else{const i=dl(this.dictionary,e);t[e]=this.matrix[i][this.rhsCol]}return t}print(){console.log("Basis (by column index):",this.basis),console.log("Non-basis:",this.dictionary);for(const t of this.matrix)console.log(t.map(e=>e.toFixed(1)).join(" "))}}function mE(n){let t,e;for(let i=0;i<n.length;i++)n[i]>Un&&(t===void 0||n[i]>t)&&(t=n[i],e=i);return e}function Mo(n,t,e){return n>=t&&n<t+e}function Hd(n,t,e){return n>=t+e}function gE(n){for(let t=0;t<n.num_artificial;t++){const e=t+n.basis_dimension-n.num_artificial;n.simplex_pivot(e)}}function _E(n){const t=n.get_rhs();for(const e of t)if(e<-Un)throw new Error("Negative RHS");for(;;){const e=mE(n.get_cost_function());if(e===void 0)return!0;n.simplex_pivot(e)}}function am(n,t,e){const i=t.length;let s=0,r=0;for(const f of n){const d=f.lower,g=f.upper;d!==void 0&&(s++,d>Un&&r++),g!==void 0&&(s++,g<-Un&&r++)}e||(r=0);const o=s+2,a=i+s+r+1,l=a-1,c=Array.from({length:o},()=>new Array(a).fill(0));let h=0,u=0;for(const f of n){const d=f.lower,g=f.row,_=f.upper;if(d!==void 0){for(let m=0;m<i;m++)c[h][m]=-g[m];if(c[h][i+r+h]=1,c[h][l]=-d,d>Un){e&&(c[h][i+u]=-1,u++);for(let m=0;m<a;m++)c[h][m]*=-1}h++}if(_!==void 0){for(let m=0;m<i;m++)c[h][m]=g[m];if(c[h][i+r+h]=1,c[h][l]=_,_<-Un){e&&(c[h][i+u]=-1,u++);for(let m=0;m<a;m++)c[h][m]*=-1}h++}}for(let f=0;f<i;f++)c[s][f]=t[f];for(let f=0;f<r;f++)c[s+1][i+f]=-1;return new Ho(c,i,s,r)}const Re=1e-7,Lo=16544547;class ch{constructor(t,e){this.x=t,this.y=e}add(t){return new this.constructor(this.x+t.x,this.y+t.y)}subtract(t){return new this.constructor(this.x-t.x,this.y-t.y)}dot(t){return this.x*t.x+this.y*t.y}scale(t){return new this.constructor(this.x*t,this.y*t)}copy(){return new this.constructor(this.x,this.y)}}class _i extends ch{}class Hi extends ch{}class te extends ch{}class xE{constructor(){this.count=0}contains(t){return this.newest===t||this.oldest===t}remove(t){if(this.newest===t)this.newest=void 0,this.count--;else if(this.oldest===t)this.oldest=void 0,this.count--;else throw"Tried to remove an element that does not exist"}}function yE(n,t,e){const i=n.subtract(t),s=e.subtract(n).dot(i)/i.dot(i);return n.add(i.scale(s))}function Zs(n,t,e,i){const s=i.subtract(e),r=new te(s.y,-s.x),o=n.subtract(e);if(Math.abs(t.dot(r))<Re)return{t:9999999,p:n};const a=-o.dot(r)/t.dot(r);return{t:a,p:n.add(t.scale(a)),u:t}}function vE(n,t,e,i){const{xmin:s,xmax:r,ymin:o,ymax:a}=i;let l,c;if(Math.abs(n)<Re)l=new te(s,-e/t),c=new te(r,-e/t);else if(Math.abs(t)<Re)l=new te(-e/n,o),c=new te(-e/n,a);else{const h=-(e+t*o)/n,u=-(e+t*a)/n,f=-(e+n*s)/t,d=-(e+n*r)/t;h>=s&&h<=r?l=new te(h,o):h<s?l=new te(s,f):l=new te(r,d),u>=s&&u<=r?c=new te(u,a):u<s?c=new te(s,f):c=new te(r,d)}return{p1:l,p2:c}}class lm{constructor(t){this.origin=t}to_window(t){return new Hi(t.x-this.origin.x,this.origin.y-t.y)}to_page(t){return new _i(t.x+this.origin.x,this.origin.y-t.y)}}class cm{constructor(t,e,i,s){this.windowBotLeft=t,this.windowTopRight=e,this.coordBotLeft=i,this.coordTopRight=s,this.w_width=e.x-t.x,this.w_height=e.y-t.y,this.c_width=s.x-i.x,this.c_height=s.y-i.y}to_coord(t){const e=(t.x-this.windowBotLeft.x)/this.w_width,i=(t.y-this.windowBotLeft.y)/this.w_height;return new te(this.coordBotLeft.x+e*this.c_width,this.coordBotLeft.y+i*this.c_height)}to_window(t){const e=(t.x-this.coordBotLeft.x)/this.c_width,i=(t.y-this.coordBotLeft.y)/this.c_height;return new Hi(this.windowBotLeft.x+e*this.w_width,this.windowBotLeft.y+i*this.w_height)}}class hm{constructor(t,e){this.windowToCoord=t,this.pageToWindow=e}to_coord(t){const e=this.pageToWindow.to_window(t);return this.windowToCoord.to_coord(e)}to_page(t){const e=this.windowToCoord.to_window(t);return this.pageToWindow.to_page(e)}}class um extends hn{constructor(t,e,i,s){super(),this.botLeft=t,this.topRight=e,this.delta=i,this.converter=s;let r=t.x,o=e.x,a=t.y,l=e.y,c=Math.trunc(r/i),h=Math.trunc(o/i),u=Math.trunc(a/i),f=Math.trunc(l/i),d=Math.abs(Math.round(r/i)-r/i)<Re,g=Math.abs(Math.round(o/i)-o/i)<Re,_=Math.abs(Math.round(a/i)-a/i)<Re,m=Math.abs(Math.round(l/i)-l/i)<Re;console.log("GRID",c,h,d,g);for(let p=u;p<=f;p++){if(p==u&&_||p==f&&m)continue;let v=p*this.delta;const y=this.converter.to_page(new te(r,v)),x=this.converter.to_page(new te(o,v));this.moveTo(Math.trunc(y.x),Math.trunc(y.y)),this.lineTo(Math.trunc(x.x),Math.trunc(x.y)),this.stroke({width:p==0?2:.5,color:8947848})}for(let p=c;p<=h;p++){if(p==c&&d||p==h&&g)continue;let v=p*this.delta;const y=this.converter.to_page(new te(v,a)),x=this.converter.to_page(new te(v,l));this.moveTo(y.x,y.y),this.lineTo(x.x,x.y),this.stroke({width:p==0?2:.5,color:8947848})}}}function dm(n,t,e,i=8,s=Math.PI/6){const r=t.x-e.x,o=t.y-e.y,a=Math.atan2(o,r),l=a+Math.PI-s,c=a+Math.PI+s;n.moveTo(t.x,t.y).lineTo(t.x+i*Math.cos(l),t.y+i*Math.sin(l)).moveTo(t.x,t.y).lineTo(t.x+i*Math.cos(c),t.y+i*Math.sin(c))}class SE extends hn{constructor(t,e){super(),this.converter=e,this.direction=t;const i=Math.sqrt(t.x*t.x+t.y*t.y);if(i<Re){this.visible=!1;return}this.direction.scale(1/i),this.visible=!0}update(t){if(!this.visible){console.log("Arrow not update!");return}console.log("Arrow update!"),this.draw(t)}draw(t){const e=t.add(this.direction),i=this.converter.to_page(t),s=this.converter.to_page(e);this.clear(),this.moveTo(i.x,i.y).lineTo(s.x,s.y),dm(this,s,i),this.stroke({width:2,color:16711680})}}class bE extends hn{constructor(t,e,i,s,r,o){super(),this.eq=t,this.p1=e,this.p2=i,this.limits=s,this.id=r,this.converter=o,this.visible=!1,this.lscale=Math.sqrt(t.a*t.a+t.b*t.b),this.lab=new Fe({style:{fill:"#000000",fontSize:16,fontFamily:"Montserrat Medium"}}),this.lab.visible=!1}update(t){if(!this.visible)return;const e=yE(this.p1,this.p2,t);this.draw(t,e)}activate(){this.visible=!0,this.lab.visible=!0}deactivate(){this.visible=!1,this.lab.visible=!1}toggleActivate(){this.visible=!this.visible,this.lab.visible=!this.lab.visible}draw(t,e){const{xmin:i,xmax:s,ymin:r,ymax:o}=this.limits;let a=e.subtract(t);const l=Math.sqrt(a.x*a.x+a.y*a.y);a=a.scale(1/l);const c=t,h=new te(i,o),u=new te(s,o),f=new te(s,r),d=new te(i,r),g=[Zs(c,a,this.p1,this.p2),Zs(c,a,h,u),Zs(c,a,u,f),Zs(c,a,f,d),Zs(c,a,d,h)],_=g.reduce((w,S,E)=>S.t<0?w:w===-1||g[w].t<0||S.t<g[w].t?E:w,-1),m=this.converter.to_page(t),p=this.converter.to_page(g[_].p);this.clear(),this.moveTo(m.x,m.y).lineTo(p.x,p.y),_===0&&dm(this,p,m),this.stroke({width:1,color:3355443});const v=t.subtract(e),y=v.dot(new te(this.eq.a,this.eq.b))>0?-1:1,x=Math.sqrt(v.x*v.x+v.y*v.y)*this.lscale*y;this.lab.text=this.id+"="+x.toFixed(1),this.lab.x=(m.x+p.x)*.5,this.lab.y=(m.y+p.y)*.5}}class ME{constructor(t,e,i,s){this.visited=!1,this.active=!1,this.lit=!1,this.hit=new hn,this.visual=new hn,this.labelText=new Fe,this.onClick=null,this.onMouseMove=null;let r=vE(e.a,e.b,e.d,t);this.p1_page=i.to_page(r.p1),this.p2_page=i.to_page(r.p2),this.p1=r.p1,this.p2=r.p2,this.id=s,this.labelText=new Fe({text:s,style:{fill:"#000000",fontSize:16,fontFamily:"Montserrat Medium"}}),this.labelText.visible=!1,this.labelText.position.x=this.p1_page.x,this.labelText.position.y=this.p1_page.y,this.hit.eventMode="static",this.hit.cursor="pointer",this.hit.on("pointerdown",()=>this.onClick?.()),this.hit.on("pointermove",o=>this.onMouseMove?.(o)),this.hit.on("pointerover",()=>this.onOver()),this.hit.on("pointerout",()=>this.onOut()),this.drawHit(),this.drawVisual()}onOver(){this.labelText.visible=!0,!this.active&&(this.visited=!0,this.lit=!0,this.drawVisual())}onOut(){this.labelText.visible=!1,!this.active&&(this.lit=!1,this.drawVisual())}activate(){this.active=!0,this.visited=!0,this.drawVisual()}deactivate(){this.active=!1,this.lit=!1,this.visited=!0,this.drawVisual()}toggleActivate(){this.active?this.deactivate():this.activate()}drawHit(){this.hit.clear(),this.hit.moveTo(this.p1_page.x,this.p1_page.y).lineTo(this.p2_page.x,this.p2_page.y).stroke({width:15,alpha:.001})}drawVisual(){const t=this.lit||this.active;this.visual.clear(),this.visual.moveTo(this.p1_page.x,this.p1_page.y).lineTo(this.p2_page.x,this.p2_page.y).stroke({width:t?5:3,color:t?Lo:0})}}class wE{constructor(t,e){this.lines=new Map,this.linesStatus=[],this.labelToId=new Map,this.idToLabel=new Map,this.items=new xE,this.numLines=0,this.onUpdate=null,this.onWarning=null,this.labelToId=e;for(const[i,s]of this.labelToId)this.idToLabel.set(s,i);this.tableau=t,this.origTableau=t.clone(),this.numLines=t.num_constraints+t.dimension;for(let i=0;i<this.numLines;i++)this.linesStatus.push(!1);this.linesStatus[0]=!0,this.linesStatus[1]=!0,console.log("LInesStatus: ",this.linesStatus),this.items.count=2,this.items.oldest=0,this.items.newest=1}activeLines(){let t=[];for(let e=0;e<this.numLines;e++)this.linesStatus[e]&&t.push(e);return console.log("active: ",t),t}inactiveLines(){let t=[];for(let e=0;e<this.numLines;e++)this.linesStatus[e]||t.push(e);return console.log("inactive: ",t),t}update(t,e){let i=!0;const s=this.labelToId.get(t);let r=this.items;if(console.log("onUpdate: labelToId ",this.labelToId),console.log("onUpdate: clickedLineLabel ",t),console.log("onUpdate: numLines ",this.numLines),console.log("onUpdate: items ",r),console.log("onUpdate: id ",s),e)console.log("onUpdate: line was active"),this.items.remove(s),this.linesStatus[s]=!1,this.onUpdate?.();else if(console.log("onUpdate: line was inactive"),r.count===2)console.log("onUpdate: there are currently two lines"),this.tableau.canPivot(s,r.oldest)?(console.log("onUpdate: pivot the oldest"),this.tableau.pivotVar(s,r.oldest),this.linesStatus[s]=!0,this.linesStatus[r.oldest]=!1,r.oldest=r.newest,r.newest=s):this.tableau.canPivot(s,r.newest)?(console.log("onUpdate: pivot the newest"),this.tableau.pivotVar(s,r.newest),this.linesStatus[s]=!0,this.linesStatus[r.newest]=!1,r.newest=s):(console.log("onUpdate: no pivot"),i=!1);else if(r.count===1){console.log("onUpdate: there is currently one line"),this.tableau=this.origTableau.clone(),console.log("Current tableau"),this.tableau.print();const o=r.newest??r.oldest;console.log("onUpdate: item",o);let a=!0,l=!0;this.tableau.canPivot(s,0)?(this.tableau.pivotVar(s,0),this.tableau.canPivot(o,1)?this.tableau.pivotVar(o,1):(a=!1,this.tableau=this.origTableau.clone())):a=!1,console.log("onUpdate: first success? ",a),!a&&this.tableau.canPivot(s,1)?(this.tableau.pivotVar(s,1),this.tableau.canPivot(o,0)?this.tableau.pivotVar(o,0):(l=!1,this.tableau=this.origTableau.clone())):l=!1,console.log("onUpdate: second success? ",l),!a&&!l?(i=!1,this.onWarning?.()):(this.linesStatus[s]=!0,r.oldest=o,r.newest=s,r.count++)}else console.log("onUpdate: there is currently no line"),this.linesStatus[s]=!0,r.newest=s,r.count++,this.onUpdate?.();i&&(console.log("onUpdate: pivot was possible"),this.onUpdate?.()),this.tableau.print()}}class TE{constructor(t,e,i,s){this.dictionaryTexts=[],this.labelToId=new Map,this.idToLabel=new Map,this.labelToId=e,this.idToLabel=i,this.converter=s,this.numSlacks=t;for(let r=0;r<t;r++){const o=new Fe({text:"",style:{fill:"#000000",fontSize:16,fontFamily:"Montserrat Medium"}});o.visible=!0,this.dictionaryTexts.push(o)}this.costText=new Fe({text:"",style:{fill:"#000000",fontSize:16,fontFamily:"Montserrat Medium"}}),this.costText.visible=!0,this.descriptionText=new Fe({text:"",style:{fill:"#000000",fontSize:16,fontFamily:"Montserrat Medium"}}),this.descriptionText.visible=!0,this.warningText=new Fe({text:"Warning  ",style:{fill:Lo,fontSize:16,fontFamily:"Montserrat Medium"}}),this.warningText.visible=!0,this.titleText=new Fe({text:"Coordinate System ",style:{fill:"#000000",fontSize:25,fontFamily:"Montserrat Medium"}}),this.titleText.visible=!0}setWarning(){this.warningText.text="Cannot use parallel lines as basis!  "}resetWarning(){this.warningText.text=""}pos(t){const e=this.converter.to_page(t),i=e.x,s=e.y-200;this.titleText.position=new _i(i,s),this.descriptionText.position=new _i(i,s+50);for(let r=0;r<this.numSlacks;r++){const o=this.dictionaryTexts[r];o.position=new _i(i,s+100+r*22)}this.costText.position=new _i(i,s+120+this.numSlacks*22),this.warningText.position=new _i(i,s+150+this.numSlacks*22)}updateCostFunction(t){const e=t.rhsCol,i=t.matrix,s=t.basis,r=t.num_constraints;let o=0;for(const u of s)o+=Math.abs(i[r][u]);if(o<Re)return;const a=this.costText;a.removeChildren();const l=-i[r][e].toFixed(1),c=new Fe(`Cost = ${l}`,{fill:0,fontSize:16,fontFamily:"Montserrat Medium"});c.x=0,a.addChild(c);let h=c.width;for(let u=0;u<s.length;u++){const f=s[u],d=this.idToLabel.get(f),g=i[r][f];if(Math.abs(g)<Re)continue;const _=g>0?"+":"-",m=Math.abs(g),p=Math.abs(m-1)<Re?"":m.toFixed(1),v=new Fe(` ${_} ${p}`,{fill:0,fontSize:16,fontFamily:"Montserrat Medium"});v.x=h,a.addChild(v),h+=v.width;const y=new Fe(`${d}`,{fill:Lo,fontSize:16,fontFamily:"Montserrat Medium"});y.x=h,a.addChild(y),h+=y.width}}update(t){const e=t.rhsCol,i=t.matrix,s=t.basis,r=t.dictionary,o=t.num_constraints;for(let l=0;l<o;l++){const c=r[l],h=this.idToLabel.get(c),u=i[l][c]>0?1:-1,f=(u*i[l][e]).toFixed(1),d=this.dictionaryTexts[l];d.removeChildren();const g=new Fe(`${h} = ${f}`,{fill:0,fontSize:16,fontFamily:"Montserrat Medium"});g.x=0,d.addChild(g);let _=g.width;for(const m of s){const p=this.idToLabel.get(m),v=-i[l][m]*u;if(Math.abs(v)<Re)continue;const y=v>0?"+":"-",x=Math.abs(v),w=Math.abs(x-1)<Re?"":x.toFixed(1),S=new Fe(` ${y} ${w}`,{fill:0,fontSize:16,fontFamily:"Montserrat Medium"});S.x=_,d.addChild(S),_+=S.width;const E=new Fe(`${p}`,{fill:Lo,fontSize:16,fontFamily:"Montserrat Medium"});E.x=_,d.addChild(E),_+=E.width}}this.updateCostFunction(t);let a=[];for(const l of s)a.push(this.idToLabel.get(l));this.descriptionText.text="Basis variables: "+a.join(", ")+`  
`,a=[];for(const l of r)a.push(this.idToLabel.get(l));this.descriptionText.text+="Dictionary variables: "+a.join(", ")+"  "}}function EE(n){const t=n.row[0],e=n.row[1],i=n.lower,s=n.upper;let r;if(i!==void 0)r={a:-t,b:-e,d:i};else if(s!==void 0)r={a:t,b:e,d:-s};else throw"either lower or upper needs to be defined";return r}class fm{constructor(t,e){this.xExists=!1,this.yExists=!1,this.linesFinalized=!1,this.lines=[],this.arrows=[],this.constraints=[],this.labelDictionary=new Map,this.coordLimits=t,this.pageToCoord=e}addLine(t){if(this.linesFinalized)throw"Additional lines should not be defined after the tableau is built";this.labelDictionary.set(t.label,this.constraints.length),console.log("constraint ",t);const e=EE(t),i=t.label;if(i==="x"){if(this.xExists)throw"x already exists";if(Math.abs(e.a+1)>Re||Math.abs(e.b)>Re||Math.abs(e.d)>Re)throw"Line equation for x label does not match";this.xExists=!0}else if(i==="y"){if(this.yExists)throw"y already exists";if(Math.abs(e.b+1)>Re||Math.abs(e.a)>Re||Math.abs(e.d)>Re)throw"Line equation for y label does not match";this.yExists=!0}const s=new ME(this.coordLimits,e,this.pageToCoord,i),r=new bE(e,s.p1,s.p2,this.coordLimits,i,this.pageToCoord);return this.lines.push(s),this.arrows.push(r),this.constraints.push(t),{line:s,arrow:r}}getLines(){return this.linesFinalized=!0,this.lines}getArrows(){return this.linesFinalized=!0,this.arrows}getManager(t){if(!this.xExists||!this.yExists)throw"x and y labels must be defined";const e=[];for(const s of this.constraints)console.log("getManager: ",s.label),!(s.label==="x"||s.label==="y")&&e.push(s);console.log("getManager: ",e),this.linesFinalized=!0,t===void 0&&(t=[0,0]);const i=am(e,t,!1);return console.log("getManager: ",i),new wE(i,this.labelDictionary)}}function pm(n,t){const e=[];for(const u of n)u.label==="x"||u.label==="y"||e.push(u);e.push(new zt({lower:void 0,a:0,b:1,upper:t.ymax,label:"ytop"})),e.push(new zt({lower:void 0,a:1,b:0,upper:t.xmax,label:"xtop"}));const i=[];i.push(0),i.push(0);let s=am(e,i,!0);gE(s),_E(s);const r=s.trim_tableau(),o=[];for(let u=0;u<s.rhsCol;u++)o.push(!1);const a=[];let l=r.basis[0],c=r.basis[1];const h=r.extract_coordinates();a.push(new te(h[0],h[1])),o[l]=!0;for(let u=0;u<99;u++){console.log("basis:",r.basis),console.log("dict:",r.dictionary),console.log("old, rec: ",l,c);let f=r.simplex_pivot(l);l=c,c=f;const d=r.extract_coordinates();if(a.push(new te(d[0],d[1])),console.log(d),o[l])break;o[l]=!0}return console.log(a),a}class AE extends hn{constructor(t,e){super(),this.normalColor=10670076,this.hoverColor=3381759,this.onOver=null,this.onOverOut=null,this.onMove=null,this.verticesPage=t.flatMap(i=>{const s=e.to_page(i);return[s.x,s.y]}),this.eventMode="static",this.cursor="pointer",this.draw(this.normalColor),this.on("pointerover",()=>this.highlight()),this.on("pointerout",()=>this.dehighlight()),this.on("pointermove",i=>this.onMove?.(i))}draw(t){this.clear(),this.beginFill(t,.2),this.drawPolygon(this.verticesPage),this.endFill()}highlight(){this.draw(this.hoverColor)}dehighlight(){this.draw(this.normalColor)}}class CE extends si{draw(t,e={}){this.removeChildren(0,this.children.length,!0);const{fontSize:i=20,cellPadding:s=5,fontFamily:r="Courier New",color:o=0}=e,a=t.length-1,l=t[0].length,c=new Tr({fontFamily:r,fontSize:i,fill:o}),h=new Array(l).fill(0);for(let w=0;w<l;w++){for(let S=0;S<a;S++){const E=new Fe(String(t[S][w]),c);h[w]=Math.max(h[w],E.width),E.destroy()}h[w]+=s*2}const u=new Fe("0",c),f=u.height+s*1.5;u.destroy();const d=[];let g=0;for(let w=0;w<l;w++)d[w]=g,g+=h[w];for(let w=0;w<a;w++)for(let S=0;S<l;S++){const E=new Fe(String(t[w][S]),c);E.anchor.set(.5),E.x=d[S]+h[S]/2,E.y=w*f+f/2,this.addChild(E)}const _=new hn,m=a*f,p=g,v=6,y=-4,x=2;_.moveTo(y+v,-x),_.lineTo(y,-x),_.lineTo(y,m+x),_.lineTo(y+v,m+x),_.moveTo(-y+p-v,-x),_.lineTo(-y+p,-x),_.lineTo(-y+p,m+x),_.lineTo(-y+p-v,m+x),_.stroke({width:1,color:o,alpha:1}),this.addChild(_)}}class mm{constructor({container:t,width:e,height:i,app_width:s,constraints:r,costFunction:o,showMatrix:a,topRightCoord:l,botLeftCoord:c}){this.container=t,this.width=e,this.height=i,this.app_width=s,this.constraints=r,this.costFunction=o,this.showMatrix=a,this.topRightCoord=l,this.botLeftCoord=c,this.app=new jc}async init(){await this.app.init({width:this.width,height:this.height,backgroundAlpha:0,antialias:!0}),this.container.appendChild(this.app.canvas);const t=new _i(0,this.app_width),e=new lm(t),i=new Hi(0,0),s=new Hi(this.app_width,this.app_width),r=new te(this.topRightCoord.x,this.topRightCoord.y),o=new te(this.botLeftCoord.x,this.botLeftCoord.y),a={xmin:o.x,xmax:r.x,ymin:o.y,ymax:r.y},l=(a.xmin+a.xmax)*.5,c=(a.ymin+a.ymax)*.5,h=new cm(i,s,o,r),u=new hm(h,e),f=e.to_page(i),d=e.to_page(s),g=new hn().rect(f.x,d.y,d.x-f.x,f.y-d.y).fill({color:15658734,alpha:.8});this.app.stage.addChild(g);let _=new um(o,r,1,u);this.app.stage.addChild(_);const m=this.constraints,p=pm(m,a).flatMap(U=>{const F=u.to_page(U);return[F.x,F.y]}),v=new hn;v.beginFill(3381759,.2),v.drawPolygon(p),v.endFill(),this.app.stage.addChild(v);const y=new fm(a,u);for(const U of m)y.addLine(U);let x=new te(0,0);this.costFunction!==void 0&&(x=new te(this.costFunction[0],this.costFunction[1])),console.log("PivotSpinnet: ",x);const w=new SE(x,u);this.app.stage.addChild(w);const S=y.getLines(),E=y.getArrows(),P=y.getManager(this.costFunction),b=new TE(P.tableau.num_constraints,P.labelToId,P.idToLabel,e),T=new CE;this.showMatrix&&(T.draw(P.tableau.matrix,{fontSize:20}),T.position={x:600,y:100},this.app.stage.addChild(T)),this.app.stage.addChild(...b.dictionaryTexts),this.app.stage.addChild(b.costText),this.app.stage.addChild(b.descriptionText),this.app.stage.addChild(b.warningText),this.app.stage.addChild(b.titleText),b.pos(new Hi(this.app_width+50,50));for(const U of S)this.app.stage.addChild(U.visual),this.app.stage.addChild(U.labelText);for(const U of S)this.app.stage.addChild(U.hit);this.app.stage.addChild(...E);for(const U of E)this.app.stage.addChild(U.lab);let C=u.to_page(new te(l,c));for(const U of S)U.onClick=()=>{console.log("Clicked"),P.update(U.id,U.active)},U.onMouseMove=F=>{const B=F.global;C.x=B.x,C.y=B.y;const W=u.to_coord(C);for(const I of E)I.update(W);w.update(W)};P.onUpdate=()=>{console.log("coordinates:",P.tableau.extract_coordinates());const U=u.to_coord(C);for(const F of P.activeLines())S[F].activate(),E[F].activate(),E[F].update(U);w.update(U);for(const F of P.inactiveLines())S[F].deactivate(),E[F].deactivate();b.update(P.tableau),b.resetWarning(),this.showMatrix&&T.draw(P.tableau.matrix,{fontSize:20})},P.onWarning=()=>{b.setWarning()},P.onUpdate(),g.eventMode="static",g.on("pointermove",U=>{const F=U.global;C.x=F.x,C.y=F.y;const B=u.to_coord(C);for(const W of E)W.update(B);w.update(B)})}destroy(){this.app.destroy(!0),this.container.innerHTML=""}}class Si{constructor({container:t,width:e,height:i,app_width:s,constraints:r,include_polygon:o,interactive_lines:a,active_lines:l,topRightCoord:c,botLeftCoord:h}){this.container=t,this.width=e,this.height=i,this.app_width=s,this.constraints=r,this.include_polygon=o,this.interactive_lines=a,this.active_lines=l,this.topRightCoord=c,this.botLeftCoord=h,this.app=new jc}async init(){await this.app.init({width:this.width,height:this.height,backgroundAlpha:0,antialias:!0}),this.container.appendChild(this.app.canvas);const t=new _i(0,this.app_width),e=new lm(t),i=new Hi(0,0),s=new Hi(this.app_width,this.app_width),r=new te(this.topRightCoord.x,this.topRightCoord.y),o=new te(this.botLeftCoord.x,this.botLeftCoord.y),a={xmin:o.x,xmax:r.x,ymin:o.y,ymax:r.y},l=(a.xmin+a.xmax)*.5,c=(a.ymin+a.ymax)*.5,h=new cm(i,s,o,r),u=new hm(h,e),f=e.to_page(i),d=e.to_page(s),g=new hn().rect(f.x,d.y,d.x-f.x,f.y-d.y).fill({color:15658734,alpha:.8});this.app.stage.addChild(g);const _=pm(this.constraints,a),m=new AE(_,u);this.include_polygon&&this.app.stage.addChild(m);let p=new um(o,r,1,u);this.app.stage.addChild(p);const v=new fm(a,u);for(const S of this.constraints)v.addLine(S);const y=v.getLines(),x=v.getArrows();for(const S of y)this.app.stage.addChild(S.visual);for(const S of y)this.app.stage.addChild(S.hit);this.app.stage.addChild(...x);for(const S of x)this.app.stage.addChild(S.lab);for(let S=0;S<y.length;S++)this.interactive_lines.includes(S)&&(y[S].onClick=()=>{x[S].toggleActivate(),y[S].toggleActivate()});for(let S=0;S<y.length;S++)y[S].onMouseMove=E=>{const P=E.global;w.x=P.x,w.y=P.y;const b=u.to_coord(w);for(const T of x)T.update(b)};for(let S=0;S<y.length;S++)this.active_lines.includes(S)&&(x[S].activate(),y[S].activate());let w=u.to_page(new te(l,c));g.eventMode="static",g.on("pointermove",S=>{const E=S.global;w.x=E.x,w.y=E.y;const P=u.to_coord(w);for(const b of x)b.update(P)}),this.include_polygon&&(m.onMove=S=>{const E=S.global;w.x=E.x,w.y=E.y;const P=u.to_coord(w);for(const b of x)b.update(P)})}destroy(){this.app.destroy(!0),this.container.innerHTML=""}}async function RE(){const n=[];n.push(new zt({lower:0,a:1,b:0,upper:void 0,label:"x"})),n.push(new zt({lower:0,a:0,b:1,upper:void 0,label:"y"})),n.push(new zt({lower:void 0,a:0,b:1,upper:6,label:"s₁"})),n.push(new zt({lower:void 0,a:-1,b:1,upper:4,label:"s₂"})),n.push(new zt({lower:void 0,a:2,b:1,upper:15,label:"s₃"}));const t=new mm({container:document.getElementById("pivot1"),width:800,height:330,app_width:300,constraints:n,costFunction:void 0,showMatrix:!1,topRightCoord:{x:8,y:8},botLeftCoord:{x:-1,y:-1}});return await t.init(),{constraints:n,snippet:t}}async function PE(){const n=[];n.push(new zt({lower:0,a:1,b:0,upper:void 0,label:"x"})),n.push(new zt({lower:0,a:0,b:1,upper:void 0,label:"y"})),n.push(new zt({lower:3,a:1,b:1,upper:void 0,label:"s₁"})),n.push(new zt({lower:void 0,a:1,b:1,upper:9,label:"s₂"}));const t=new mm({container:document.getElementById("pivot2"),width:800,height:330,app_width:300,constraints:n,costFunction:[1,2],showMatrix:!0,topRightCoord:{x:10,y:10},botLeftCoord:{x:-1,y:-1}});return await t.init(),{constraints:n,snippet:t}}async function IE(){const n=[];n.push(new zt({lower:0,a:1,b:0,upper:void 0,label:"x"})),n.push(new zt({lower:0,a:0,b:1,upper:void 0,label:"y"})),n.push(new zt({lower:void 0,a:1,b:0,upper:5,label:"xx"})),n.push(new zt({lower:void 0,a:0,b:1,upper:5,label:"yy"})),n.push(new zt({lower:void 0,a:1,b:1,upper:7.5,label:"s"}));const t=new Si({container:document.getElementById("region1"),width:800,height:330,app_width:300,constraints:n,include_polygon:!0,interactive_lines:[],active_lines:[],topRightCoord:{x:8,y:8},botLeftCoord:{x:-2,y:-1}});return await t.init(),{constraints:n,snippet:t}}async function DE(){const n=[];n.push(new zt({lower:0,a:-1,b:0,upper:void 0,label:"1"})),n.push(new zt({lower:0,a:0,b:-1,upper:void 0,label:"2"})),n.push(new zt({lower:void 0,a:-1,b:1,upper:3,label:"3"}));const t=new Si({container:document.getElementById("region2"),width:800,height:330,app_width:300,constraints:n,include_polygon:!0,interactive_lines:[],active_lines:[],topRightCoord:{x:8,y:8},botLeftCoord:{x:-2,y:-1}});return await t.init(),{constraints:n,snippet:t}}async function LE(){const n=[];n.push(new zt({lower:0,a:-1,b:0,upper:void 0,label:"1"})),n.push(new zt({lower:0,a:0,b:-1,upper:void 0,label:"2"})),n.push(new zt({lower:void 0,a:1,b:1,upper:9,label:"3"})),n.push(new zt({lower:3,a:1,b:1,upper:void 0,label:"3"}));const t=new Si({container:document.getElementById("region3"),width:800,height:330,app_width:300,constraints:n,include_polygon:!0,interactive_lines:[],active_lines:[],topRightCoord:{x:10,y:10},botLeftCoord:{x:-1,y:-1}});return await t.init(),{constraints:n,snippet:t}}async function UE(){const n=[];n.push(new zt({lower:void 0,a:2,b:3,upper:15,label:"s"}));const t=new Si({container:document.getElementById("slack1"),width:800,height:330,app_width:300,constraints:n,include_polygon:!1,interactive_lines:[0],active_lines:[0],topRightCoord:{x:8,y:8},botLeftCoord:{x:-2,y:-1}});return await t.init(),{constraints:n,snippet:t}}async function FE(){const n=[];n.push(new zt({lower:void 0,a:2,b:1,upper:11,label:"s₁"})),n.push(new zt({lower:void 0,a:1,b:-3,upper:2,label:"s₂"}));const t=new Si({container:document.getElementById("slack2"),width:800,height:330,app_width:300,constraints:n,include_polygon:!1,interactive_lines:[0,1],active_lines:[0,1],topRightCoord:{x:8,y:8},botLeftCoord:{x:-2,y:-1}});return await t.init(),{constraints:n,snippet:t}}async function NE(){const n=[];n.push(new zt({lower:1,a:0,b:1,upper:void 0,label:"s1"})),n.push(new zt({lower:1,a:1,b:0,upper:void 0,label:"s2"})),n.push(new zt({lower:void 0,a:-1,b:1,upper:4,label:"s3"})),n.push(new zt({lower:3,a:1,b:1,upper:void 0,label:"s4"}));const t=new Si({container:document.getElementById("slack3"),width:800,height:330,app_width:300,constraints:n,include_polygon:!0,interactive_lines:[],active_lines:[],topRightCoord:{x:8,y:8},botLeftCoord:{x:-2,y:-1}});return await t.init(),{constraints:n,snippet:t}}async function OE(){const n=[];n.push(new zt({lower:1,a:0,b:1,upper:void 0,label:"s1"})),n.push(new zt({lower:1,a:1,b:0,upper:void 0,label:"s2"})),n.push(new zt({lower:void 0,a:-1,b:1,upper:4,label:"s3"})),n.push(new zt({lower:3,a:1,b:1,upper:void 0,label:"s4"}));const t=new Si({container:document.getElementById("slack4"),width:800,height:330,app_width:300,constraints:n,include_polygon:!0,interactive_lines:[0,1,2,3],active_lines:[0,3],topRightCoord:{x:6,y:6},botLeftCoord:{x:-1,y:-1}});return await t.init(),{constraints:n,snippet:t}}async function BE(){const n=[];n.push(new zt({lower:0,a:0,b:1,upper:void 0,label:"y"})),n.push(new zt({lower:0,a:1,b:0,upper:void 0,label:"x"})),n.push(new zt({lower:1,a:0,b:1,upper:void 0,label:"s1"})),n.push(new zt({lower:1,a:1,b:0,upper:void 0,label:"s2"})),n.push(new zt({lower:void 0,a:-1,b:1,upper:4,label:"s3"})),n.push(new zt({lower:3,a:1,b:1,upper:void 0,label:"s4"}));const t=new Si({container:document.getElementById("slack5"),width:800,height:330,app_width:300,constraints:n,include_polygon:!0,interactive_lines:[0,1,2,3,4,5],active_lines:[2,5],topRightCoord:{x:6,y:6},botLeftCoord:{x:-1,y:-1}});return await t.init(),{constraints:n,snippet:t}}const kE=document.querySelector("#bg");document.addEventListener("DOMContentLoaded",()=>{RE(),PE(),IE(),DE(),LE(),UE(),FE(),NE(),OE(),BE(),dE("three-container",kE)});export{Zo as $,Ap as A,Mr as B,Pe as C,cn as D,Gn as E,ri as F,Jo as G,qc as H,wp as I,Tn as J,_p as K,Ec as L,qt as M,iw as N,rw as O,Ge as P,dw as Q,mc as R,$c as S,ae as T,zo as U,cw as V,NS as W,mw as X,Je as Y,Wf as Z,mn as _,yp as a,ku as a0,xr as a1,WT as a2,fb as a3,Gu as a4,Xa as a5,Vu as a6,mb as a7,Cs as a8,Te as a9,qf as aa,_T as ab,Cp as ac,Kt as ad,Cr as ae,Se as af,xM as ag,fM as ah,kM as ai,DM as aj,sw as ak,ow as al,fw as am,uw as an,pw as ao,fp as b,RM as c,Ze as d,Me as e,ce as f,Bb as g,Io as h,Gt as i,hn as j,Iw as k,bw as l,Yf as m,ta as n,np as o,Ee as p,gs as q,ZS as r,Qo as s,si as t,jb as u,EM as v,qe as w,Rr as x,nd as y,Do as z};

var a9=Object.defineProperty;var m9=(A,l,e)=>l in A?a9(A,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):A[l]=e;var U=(A,l,e)=>(m9(A,typeof l!="symbol"?l+"":l,e),e);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();const c9=""+new URL("music.4fe6676c.mp3",import.meta.url).href;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const S7="146",h9=0,i8=1,u9=2,l0=1,d9=2,A2=3,a1=0,xl=1,bl=2,R1=0,e3=1,s8=2,A8=3,r8=4,q9=5,v3=100,f9=101,g9=102,o8=103,a8=104,p9=200,x9=201,B9=202,w9=203,e0=204,t0=205,M9=206,E9=207,C9=208,Q9=209,v9=210,_9=0,y9=1,I9=2,q7=3,T9=4,b9=5,S9=6,F9=7,n0=0,D9=1,U9=2,Ll=0,N9=1,R9=2,L9=3,i0=4,G9=5,s0=300,F3=301,D3=302,f7=303,g7=304,q5=306,L1=1e3,Vl=1001,c5=1002,ol=1003,p7=1004,x7=1005,Il=1006,A0=1007,G3=1008,s3=1009,P9=1010,z9=1011,r0=1012,k9=1013,$1=1014,Rl=1015,u2=1016,Y9=1017,H9=1018,T3=1020,K9=1021,O9=1022,jl=1023,V9=1024,j9=1025,t3=1026,U3=1027,W9=1028,J9=1029,Z9=1030,X9=1031,$9=1033,Q5=33776,v5=33777,_5=33778,y5=33779,m8=35840,c8=35841,h8=35842,u8=35843,le=36196,d8=37492,q8=37496,f8=37808,g8=37809,p8=37810,x8=37811,B8=37812,w8=37813,M8=37814,E8=37815,C8=37816,Q8=37817,v8=37818,_8=37819,y8=37820,I8=37821,T8=36492,d2=2300,N3=2301,I5=2302,b8=2400,S8=2401,F8=2402,ee=2500,te=1,o0=2,t1=3e3,P4=3001,ne=3200,ie=3201,F7=0,se=1,x1="srgb",l3="srgb-linear",T5=7680,Ae=519,B7=35044,D8="300 es",w7=1035;class P3{addEventListener(l,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[l]===void 0&&(t[l]=[]),t[l].indexOf(e)===-1&&t[l].push(e)}hasEventListener(l,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[l]!==void 0&&t[l].indexOf(e)!==-1}removeEventListener(l,e){if(this._listeners===void 0)return;const n=this._listeners[l];if(n!==void 0){const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}dispatchEvent(l){if(this._listeners===void 0)return;const t=this._listeners[l.type];if(t!==void 0){l.target=this;const n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,l);l.target=null}}}const El=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let U8=1234567;const o2=Math.PI/180,q2=180/Math.PI;function Jl(){const A=Math.random()*4294967295|0,l=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(El[A&255]+El[A>>8&255]+El[A>>16&255]+El[A>>24&255]+"-"+El[l&255]+El[l>>8&255]+"-"+El[l>>16&15|64]+El[l>>24&255]+"-"+El[e&63|128]+El[e>>8&255]+"-"+El[e>>16&255]+El[e>>24&255]+El[t&255]+El[t>>8&255]+El[t>>16&255]+El[t>>24&255]).toLowerCase()}function pl(A,l,e){return Math.max(l,Math.min(e,A))}function D7(A,l){return(A%l+l)%l}function re(A,l,e,t,n){return t+(A-l)*(n-t)/(e-l)}function oe(A,l,e){return A!==l?(e-A)/(l-A):0}function a2(A,l,e){return(1-e)*A+e*l}function ae(A,l,e,t){return a2(A,l,1-Math.exp(-e*t))}function me(A,l=1){return l-Math.abs(D7(A,l*2)-l)}function ce(A,l,e){return A<=l?0:A>=e?1:(A=(A-l)/(e-l),A*A*(3-2*A))}function he(A,l,e){return A<=l?0:A>=e?1:(A=(A-l)/(e-l),A*A*A*(A*(A*6-15)+10))}function ue(A,l){return A+Math.floor(Math.random()*(l-A+1))}function de(A,l){return A+Math.random()*(l-A)}function qe(A){return A*(.5-Math.random())}function fe(A){A!==void 0&&(U8=A);let l=U8+=1831565813;return l=Math.imul(l^l>>>15,l|1),l^=l+Math.imul(l^l>>>7,l|61),((l^l>>>14)>>>0)/4294967296}function ge(A){return A*o2}function pe(A){return A*q2}function M7(A){return(A&A-1)===0&&A!==0}function a0(A){return Math.pow(2,Math.ceil(Math.log(A)/Math.LN2))}function h5(A){return Math.pow(2,Math.floor(Math.log(A)/Math.LN2))}function xe(A,l,e,t,n){const i=Math.cos,s=Math.sin,r=i(e/2),o=s(e/2),a=i((l+t)/2),m=s((l+t)/2),c=i((l-t)/2),h=s((l-t)/2),d=i((t-l)/2),f=s((t-l)/2);switch(n){case"XYX":A.set(r*m,o*c,o*h,r*a);break;case"YZY":A.set(o*h,r*m,o*c,r*a);break;case"ZXZ":A.set(o*c,o*h,r*m,r*a);break;case"XZX":A.set(r*m,o*f,o*d,r*a);break;case"YXY":A.set(o*d,r*m,o*f,r*a);break;case"ZYZ":A.set(o*f,o*d,r*m,r*a);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function w1(A,l){switch(l.constructor){case Float32Array:return A;case Uint16Array:return A/65535;case Uint8Array:return A/255;case Int16Array:return Math.max(A/32767,-1);case Int8Array:return Math.max(A/127,-1);default:throw new Error("Invalid component type.")}}function j4(A,l){switch(l.constructor){case Float32Array:return A;case Uint16Array:return Math.round(A*65535);case Uint8Array:return Math.round(A*255);case Int16Array:return Math.round(A*32767);case Int8Array:return Math.round(A*127);default:throw new Error("Invalid component type.")}}var Be=Object.freeze({__proto__:null,DEG2RAD:o2,RAD2DEG:q2,generateUUID:Jl,clamp:pl,euclideanModulo:D7,mapLinear:re,inverseLerp:oe,lerp:a2,damp:ae,pingpong:me,smoothstep:ce,smootherstep:he,randInt:ue,randFloat:de,randFloatSpread:qe,seededRandom:fe,degToRad:ge,radToDeg:pe,isPowerOfTwo:M7,ceilPowerOfTwo:a0,floorPowerOfTwo:h5,setQuaternionFromProperEuler:xe,normalize:j4,denormalize:w1});class n4{constructor(l=0,e=0){n4.prototype.isVector2=!0,this.x=l,this.y=e}get width(){return this.x}set width(l){this.x=l}get height(){return this.y}set height(l){this.y=l}set(l,e){return this.x=l,this.y=e,this}setScalar(l){return this.x=l,this.y=l,this}setX(l){return this.x=l,this}setY(l){return this.y=l,this}setComponent(l,e){switch(l){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+l)}return this}getComponent(l){switch(l){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+l)}}clone(){return new this.constructor(this.x,this.y)}copy(l){return this.x=l.x,this.y=l.y,this}add(l){return this.x+=l.x,this.y+=l.y,this}addScalar(l){return this.x+=l,this.y+=l,this}addVectors(l,e){return this.x=l.x+e.x,this.y=l.y+e.y,this}addScaledVector(l,e){return this.x+=l.x*e,this.y+=l.y*e,this}sub(l){return this.x-=l.x,this.y-=l.y,this}subScalar(l){return this.x-=l,this.y-=l,this}subVectors(l,e){return this.x=l.x-e.x,this.y=l.y-e.y,this}multiply(l){return this.x*=l.x,this.y*=l.y,this}multiplyScalar(l){return this.x*=l,this.y*=l,this}divide(l){return this.x/=l.x,this.y/=l.y,this}divideScalar(l){return this.multiplyScalar(1/l)}applyMatrix3(l){const e=this.x,t=this.y,n=l.elements;return this.x=n[0]*e+n[3]*t+n[6],this.y=n[1]*e+n[4]*t+n[7],this}min(l){return this.x=Math.min(this.x,l.x),this.y=Math.min(this.y,l.y),this}max(l){return this.x=Math.max(this.x,l.x),this.y=Math.max(this.y,l.y),this}clamp(l,e){return this.x=Math.max(l.x,Math.min(e.x,this.x)),this.y=Math.max(l.y,Math.min(e.y,this.y)),this}clampScalar(l,e){return this.x=Math.max(l,Math.min(e,this.x)),this.y=Math.max(l,Math.min(e,this.y)),this}clampLength(l,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(l,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(l){return this.x*l.x+this.y*l.y}cross(l){return this.x*l.y-this.y*l.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(l){return Math.sqrt(this.distanceToSquared(l))}distanceToSquared(l){const e=this.x-l.x,t=this.y-l.y;return e*e+t*t}manhattanDistanceTo(l){return Math.abs(this.x-l.x)+Math.abs(this.y-l.y)}setLength(l){return this.normalize().multiplyScalar(l)}lerp(l,e){return this.x+=(l.x-this.x)*e,this.y+=(l.y-this.y)*e,this}lerpVectors(l,e,t){return this.x=l.x+(e.x-l.x)*t,this.y=l.y+(e.y-l.y)*t,this}equals(l){return l.x===this.x&&l.y===this.y}fromArray(l,e=0){return this.x=l[e],this.y=l[e+1],this}toArray(l=[],e=0){return l[e]=this.x,l[e+1]=this.y,l}fromBufferAttribute(l,e){return this.x=l.getX(e),this.y=l.getY(e),this}rotateAround(l,e){const t=Math.cos(e),n=Math.sin(e),i=this.x-l.x,s=this.y-l.y;return this.x=i*t-s*n+l.x,this.y=i*n+s*t+l.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wl{constructor(){Wl.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(l,e,t,n,i,s,r,o,a){const m=this.elements;return m[0]=l,m[1]=n,m[2]=r,m[3]=e,m[4]=i,m[5]=o,m[6]=t,m[7]=s,m[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(l){const e=this.elements,t=l.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(l,e,t){return l.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(l){const e=l.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(l){return this.multiplyMatrices(this,l)}premultiply(l){return this.multiplyMatrices(l,this)}multiplyMatrices(l,e){const t=l.elements,n=e.elements,i=this.elements,s=t[0],r=t[3],o=t[6],a=t[1],m=t[4],c=t[7],h=t[2],d=t[5],f=t[8],q=n[0],u=n[3],g=n[6],w=n[1],x=n[4],p=n[7],E=n[2],v=n[5],I=n[8];return i[0]=s*q+r*w+o*E,i[3]=s*u+r*x+o*v,i[6]=s*g+r*p+o*I,i[1]=a*q+m*w+c*E,i[4]=a*u+m*x+c*v,i[7]=a*g+m*p+c*I,i[2]=h*q+d*w+f*E,i[5]=h*u+d*x+f*v,i[8]=h*g+d*p+f*I,this}multiplyScalar(l){const e=this.elements;return e[0]*=l,e[3]*=l,e[6]*=l,e[1]*=l,e[4]*=l,e[7]*=l,e[2]*=l,e[5]*=l,e[8]*=l,this}determinant(){const l=this.elements,e=l[0],t=l[1],n=l[2],i=l[3],s=l[4],r=l[5],o=l[6],a=l[7],m=l[8];return e*s*m-e*r*a-t*i*m+t*r*o+n*i*a-n*s*o}invert(){const l=this.elements,e=l[0],t=l[1],n=l[2],i=l[3],s=l[4],r=l[5],o=l[6],a=l[7],m=l[8],c=m*s-r*a,h=r*o-m*i,d=a*i-s*o,f=e*c+t*h+n*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const q=1/f;return l[0]=c*q,l[1]=(n*a-m*t)*q,l[2]=(r*t-n*s)*q,l[3]=h*q,l[4]=(m*e-n*o)*q,l[5]=(n*i-r*e)*q,l[6]=d*q,l[7]=(t*o-a*e)*q,l[8]=(s*e-t*i)*q,this}transpose(){let l;const e=this.elements;return l=e[1],e[1]=e[3],e[3]=l,l=e[2],e[2]=e[6],e[6]=l,l=e[5],e[5]=e[7],e[7]=l,this}getNormalMatrix(l){return this.setFromMatrix4(l).invert().transpose()}transposeIntoArray(l){const e=this.elements;return l[0]=e[0],l[1]=e[3],l[2]=e[6],l[3]=e[1],l[4]=e[4],l[5]=e[7],l[6]=e[2],l[7]=e[5],l[8]=e[8],this}setUvTransform(l,e,t,n,i,s,r){const o=Math.cos(i),a=Math.sin(i);return this.set(t*o,t*a,-t*(o*s+a*r)+s+l,-n*a,n*o,-n*(-a*s+o*r)+r+e,0,0,1),this}scale(l,e){const t=this.elements;return t[0]*=l,t[3]*=l,t[6]*=l,t[1]*=e,t[4]*=e,t[7]*=e,this}rotate(l){const e=Math.cos(l),t=Math.sin(l),n=this.elements,i=n[0],s=n[3],r=n[6],o=n[1],a=n[4],m=n[7];return n[0]=e*i+t*o,n[3]=e*s+t*a,n[6]=e*r+t*m,n[1]=-t*i+e*o,n[4]=-t*s+e*a,n[7]=-t*r+e*m,this}translate(l,e){const t=this.elements;return t[0]+=l*t[2],t[3]+=l*t[5],t[6]+=l*t[8],t[1]+=e*t[2],t[4]+=e*t[5],t[7]+=e*t[8],this}equals(l){const e=this.elements,t=l.elements;for(let n=0;n<9;n++)if(e[n]!==t[n])return!1;return!0}fromArray(l,e=0){for(let t=0;t<9;t++)this.elements[t]=l[t+e];return this}toArray(l=[],e=0){const t=this.elements;return l[e]=t[0],l[e+1]=t[1],l[e+2]=t[2],l[e+3]=t[3],l[e+4]=t[4],l[e+5]=t[5],l[e+6]=t[6],l[e+7]=t[7],l[e+8]=t[8],l}clone(){return new this.constructor().fromArray(this.elements)}}function m0(A){for(let l=A.length-1;l>=0;--l)if(A[l]>=65535)return!0;return!1}function f2(A){return document.createElementNS("http://www.w3.org/1999/xhtml",A)}function n3(A){return A<.04045?A*.0773993808:Math.pow(A*.9478672986+.0521327014,2.4)}function r5(A){return A<.0031308?A*12.92:1.055*Math.pow(A,.41666)-.055}const b5={[x1]:{[l3]:n3},[l3]:{[x1]:r5}},Zl={legacyMode:!0,get workingColorSpace(){return l3},set workingColorSpace(A){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(A,l,e){if(this.legacyMode||l===e||!l||!e)return A;if(b5[l]&&b5[l][e]!==void 0){const t=b5[l][e];return A.r=t(A.r),A.g=t(A.g),A.b=t(A.b),A}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(A,l){return this.convert(A,this.workingColorSpace,l)},toWorkingColorSpace:function(A,l){return this.convert(A,l,this.workingColorSpace)}},c0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rl={r:0,g:0,b:0},Xl={h:0,s:0,l:0},y2={h:0,s:0,l:0};function S5(A,l,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?A+(l-A)*6*e:e<1/2?l:e<2/3?A+(l-A)*6*(2/3-e):A}function I2(A,l){return l.r=A.r,l.g=A.g,l.b=A.b,l}class g4{constructor(l,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&t===void 0?this.set(l):this.setRGB(l,e,t)}set(l){return l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l),this}setScalar(l){return this.r=l,this.g=l,this.b=l,this}setHex(l,e=x1){return l=Math.floor(l),this.r=(l>>16&255)/255,this.g=(l>>8&255)/255,this.b=(l&255)/255,Zl.toWorkingColorSpace(this,e),this}setRGB(l,e,t,n=l3){return this.r=l,this.g=e,this.b=t,Zl.toWorkingColorSpace(this,n),this}setHSL(l,e,t,n=l3){if(l=D7(l,1),e=pl(e,0,1),t=pl(t,0,1),e===0)this.r=this.g=this.b=t;else{const i=t<=.5?t*(1+e):t+e-t*e,s=2*t-i;this.r=S5(s,i,l+1/3),this.g=S5(s,i,l),this.b=S5(s,i,l-1/3)}return Zl.toWorkingColorSpace(this,n),this}setStyle(l,e=x1){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+l+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(l)){let i;const s=n[1],r=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,Zl.toWorkingColorSpace(this,e),t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,Zl.toWorkingColorSpace(this,e),t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const o=parseFloat(i[1])/360,a=parseFloat(i[2])/100,m=parseFloat(i[3])/100;return t(i[4]),this.setHSL(o,a,m,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(l)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,Zl.toWorkingColorSpace(this,e),this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,Zl.toWorkingColorSpace(this,e),this}return l&&l.length>0?this.setColorName(l,e):this}setColorName(l,e=x1){const t=c0[l.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+l),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(l){return this.r=l.r,this.g=l.g,this.b=l.b,this}copySRGBToLinear(l){return this.r=n3(l.r),this.g=n3(l.g),this.b=n3(l.b),this}copyLinearToSRGB(l){return this.r=r5(l.r),this.g=r5(l.g),this.b=r5(l.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(l=x1){return Zl.fromWorkingColorSpace(I2(this,rl),l),pl(rl.r*255,0,255)<<16^pl(rl.g*255,0,255)<<8^pl(rl.b*255,0,255)<<0}getHexString(l=x1){return("000000"+this.getHex(l).toString(16)).slice(-6)}getHSL(l,e=l3){Zl.fromWorkingColorSpace(I2(this,rl),e);const t=rl.r,n=rl.g,i=rl.b,s=Math.max(t,n,i),r=Math.min(t,n,i);let o,a;const m=(r+s)/2;if(r===s)o=0,a=0;else{const c=s-r;switch(a=m<=.5?c/(s+r):c/(2-s-r),s){case t:o=(n-i)/c+(n<i?6:0);break;case n:o=(i-t)/c+2;break;case i:o=(t-n)/c+4;break}o/=6}return l.h=o,l.s=a,l.l=m,l}getRGB(l,e=l3){return Zl.fromWorkingColorSpace(I2(this,rl),e),l.r=rl.r,l.g=rl.g,l.b=rl.b,l}getStyle(l=x1){return Zl.fromWorkingColorSpace(I2(this,rl),l),l!==x1?`color(${l} ${rl.r} ${rl.g} ${rl.b})`:`rgb(${rl.r*255|0},${rl.g*255|0},${rl.b*255|0})`}offsetHSL(l,e,t){return this.getHSL(Xl),Xl.h+=l,Xl.s+=e,Xl.l+=t,this.setHSL(Xl.h,Xl.s,Xl.l),this}add(l){return this.r+=l.r,this.g+=l.g,this.b+=l.b,this}addColors(l,e){return this.r=l.r+e.r,this.g=l.g+e.g,this.b=l.b+e.b,this}addScalar(l){return this.r+=l,this.g+=l,this.b+=l,this}sub(l){return this.r=Math.max(0,this.r-l.r),this.g=Math.max(0,this.g-l.g),this.b=Math.max(0,this.b-l.b),this}multiply(l){return this.r*=l.r,this.g*=l.g,this.b*=l.b,this}multiplyScalar(l){return this.r*=l,this.g*=l,this.b*=l,this}lerp(l,e){return this.r+=(l.r-this.r)*e,this.g+=(l.g-this.g)*e,this.b+=(l.b-this.b)*e,this}lerpColors(l,e,t){return this.r=l.r+(e.r-l.r)*t,this.g=l.g+(e.g-l.g)*t,this.b=l.b+(e.b-l.b)*t,this}lerpHSL(l,e){this.getHSL(Xl),l.getHSL(y2);const t=a2(Xl.h,y2.h,e),n=a2(Xl.s,y2.s,e),i=a2(Xl.l,y2.l,e);return this.setHSL(t,n,i),this}equals(l){return l.r===this.r&&l.g===this.g&&l.b===this.b}fromArray(l,e=0){return this.r=l[e],this.g=l[e+1],this.b=l[e+2],this}toArray(l=[],e=0){return l[e]=this.r,l[e+1]=this.g,l[e+2]=this.b,l}fromBufferAttribute(l,e){return this.r=l.getX(e),this.g=l.getY(e),this.b=l.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}g4.NAMES=c0;let h3;class h0{static getDataURL(l){if(/^data:/i.test(l.src)||typeof HTMLCanvasElement>"u")return l.src;let e;if(l instanceof HTMLCanvasElement)e=l;else{h3===void 0&&(h3=f2("canvas")),h3.width=l.width,h3.height=l.height;const t=h3.getContext("2d");l instanceof ImageData?t.putImageData(l,0,0):t.drawImage(l,0,0,l.width,l.height),e=h3}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",l),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(l){if(typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap){const e=f2("canvas");e.width=l.width,e.height=l.height;const t=e.getContext("2d");t.drawImage(l,0,0,l.width,l.height);const n=t.getImageData(0,0,l.width,l.height),i=n.data;for(let s=0;s<i.length;s++)i[s]=n3(i[s]/255)*255;return t.putImageData(n,0,0),e}else if(l.data){const e=l.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(n3(e[t]/255)*255):e[t]=n3(e[t]);return{data:e,width:l.width,height:l.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),l}}class u0{constructor(l=null){this.isSource=!0,this.uuid=Jl(),this.data=l,this.version=0}set needsUpdate(l){l===!0&&this.version++}toJSON(l){const e=l===void 0||typeof l=="string";if(!e&&l.images[this.uuid]!==void 0)return l.images[this.uuid];const t={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let s=0,r=n.length;s<r;s++)n[s].isDataTexture?i.push(F5(n[s].image)):i.push(F5(n[s]))}else i=F5(n);t.url=i}return e||(l.images[this.uuid]=t),t}}function F5(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap?h0.getDataURL(A):A.data?{data:Array.from(A.data),width:A.width,height:A.height,type:A.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let we=0;class nl extends P3{constructor(l=nl.DEFAULT_IMAGE,e=nl.DEFAULT_MAPPING,t=Vl,n=Vl,i=Il,s=G3,r=jl,o=s3,a=1,m=t1){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:we++}),this.uuid=Jl(),this.name="",this.source=new u0(l),this.mipmaps=[],this.mapping=e,this.wrapS=t,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=a,this.format=r,this.internalFormat=null,this.type=o,this.offset=new n4(0,0),this.repeat=new n4(1,1),this.center=new n4(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wl,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(l){this.source.data=l}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(l){return this.name=l.name,this.source=l.source,this.mipmaps=l.mipmaps.slice(0),this.mapping=l.mapping,this.wrapS=l.wrapS,this.wrapT=l.wrapT,this.magFilter=l.magFilter,this.minFilter=l.minFilter,this.anisotropy=l.anisotropy,this.format=l.format,this.internalFormat=l.internalFormat,this.type=l.type,this.offset.copy(l.offset),this.repeat.copy(l.repeat),this.center.copy(l.center),this.rotation=l.rotation,this.matrixAutoUpdate=l.matrixAutoUpdate,this.matrix.copy(l.matrix),this.generateMipmaps=l.generateMipmaps,this.premultiplyAlpha=l.premultiplyAlpha,this.flipY=l.flipY,this.unpackAlignment=l.unpackAlignment,this.encoding=l.encoding,this.userData=JSON.parse(JSON.stringify(l.userData)),this.needsUpdate=!0,this}toJSON(l){const e=l===void 0||typeof l=="string";if(!e&&l.textures[this.uuid]!==void 0)return l.textures[this.uuid];const t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(l).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData),e||(l.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(l){if(this.mapping!==s0)return l;if(l.applyMatrix3(this.matrix),l.x<0||l.x>1)switch(this.wrapS){case L1:l.x=l.x-Math.floor(l.x);break;case Vl:l.x=l.x<0?0:1;break;case c5:Math.abs(Math.floor(l.x)%2)===1?l.x=Math.ceil(l.x)-l.x:l.x=l.x-Math.floor(l.x);break}if(l.y<0||l.y>1)switch(this.wrapT){case L1:l.y=l.y-Math.floor(l.y);break;case Vl:l.y=l.y<0?0:1;break;case c5:Math.abs(Math.floor(l.y)%2)===1?l.y=Math.ceil(l.y)-l.y:l.y=l.y-Math.floor(l.y);break}return this.flipY&&(l.y=1-l.y),l}set needsUpdate(l){l===!0&&(this.version++,this.source.needsUpdate=!0)}}nl.DEFAULT_IMAGE=null;nl.DEFAULT_MAPPING=s0;class W4{constructor(l=0,e=0,t=0,n=1){W4.prototype.isVector4=!0,this.x=l,this.y=e,this.z=t,this.w=n}get width(){return this.z}set width(l){this.z=l}get height(){return this.w}set height(l){this.w=l}set(l,e,t,n){return this.x=l,this.y=e,this.z=t,this.w=n,this}setScalar(l){return this.x=l,this.y=l,this.z=l,this.w=l,this}setX(l){return this.x=l,this}setY(l){return this.y=l,this}setZ(l){return this.z=l,this}setW(l){return this.w=l,this}setComponent(l,e){switch(l){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+l)}return this}getComponent(l){switch(l){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+l)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(l){return this.x=l.x,this.y=l.y,this.z=l.z,this.w=l.w!==void 0?l.w:1,this}add(l){return this.x+=l.x,this.y+=l.y,this.z+=l.z,this.w+=l.w,this}addScalar(l){return this.x+=l,this.y+=l,this.z+=l,this.w+=l,this}addVectors(l,e){return this.x=l.x+e.x,this.y=l.y+e.y,this.z=l.z+e.z,this.w=l.w+e.w,this}addScaledVector(l,e){return this.x+=l.x*e,this.y+=l.y*e,this.z+=l.z*e,this.w+=l.w*e,this}sub(l){return this.x-=l.x,this.y-=l.y,this.z-=l.z,this.w-=l.w,this}subScalar(l){return this.x-=l,this.y-=l,this.z-=l,this.w-=l,this}subVectors(l,e){return this.x=l.x-e.x,this.y=l.y-e.y,this.z=l.z-e.z,this.w=l.w-e.w,this}multiply(l){return this.x*=l.x,this.y*=l.y,this.z*=l.z,this.w*=l.w,this}multiplyScalar(l){return this.x*=l,this.y*=l,this.z*=l,this.w*=l,this}applyMatrix4(l){const e=this.x,t=this.y,n=this.z,i=this.w,s=l.elements;return this.x=s[0]*e+s[4]*t+s[8]*n+s[12]*i,this.y=s[1]*e+s[5]*t+s[9]*n+s[13]*i,this.z=s[2]*e+s[6]*t+s[10]*n+s[14]*i,this.w=s[3]*e+s[7]*t+s[11]*n+s[15]*i,this}divideScalar(l){return this.multiplyScalar(1/l)}setAxisAngleFromQuaternion(l){this.w=2*Math.acos(l.w);const e=Math.sqrt(1-l.w*l.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=l.x/e,this.y=l.y/e,this.z=l.z/e),this}setAxisAngleFromRotationMatrix(l){let e,t,n,i;const o=l.elements,a=o[0],m=o[4],c=o[8],h=o[1],d=o[5],f=o[9],q=o[2],u=o[6],g=o[10];if(Math.abs(m-h)<.01&&Math.abs(c-q)<.01&&Math.abs(f-u)<.01){if(Math.abs(m+h)<.1&&Math.abs(c+q)<.1&&Math.abs(f+u)<.1&&Math.abs(a+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(a+1)/2,p=(d+1)/2,E=(g+1)/2,v=(m+h)/4,I=(c+q)/4,B=(f+u)/4;return x>p&&x>E?x<.01?(t=0,n=.707106781,i=.707106781):(t=Math.sqrt(x),n=v/t,i=I/t):p>E?p<.01?(t=.707106781,n=0,i=.707106781):(n=Math.sqrt(p),t=v/n,i=B/n):E<.01?(t=.707106781,n=.707106781,i=0):(i=Math.sqrt(E),t=I/i,n=B/i),this.set(t,n,i,e),this}let w=Math.sqrt((u-f)*(u-f)+(c-q)*(c-q)+(h-m)*(h-m));return Math.abs(w)<.001&&(w=1),this.x=(u-f)/w,this.y=(c-q)/w,this.z=(h-m)/w,this.w=Math.acos((a+d+g-1)/2),this}min(l){return this.x=Math.min(this.x,l.x),this.y=Math.min(this.y,l.y),this.z=Math.min(this.z,l.z),this.w=Math.min(this.w,l.w),this}max(l){return this.x=Math.max(this.x,l.x),this.y=Math.max(this.y,l.y),this.z=Math.max(this.z,l.z),this.w=Math.max(this.w,l.w),this}clamp(l,e){return this.x=Math.max(l.x,Math.min(e.x,this.x)),this.y=Math.max(l.y,Math.min(e.y,this.y)),this.z=Math.max(l.z,Math.min(e.z,this.z)),this.w=Math.max(l.w,Math.min(e.w,this.w)),this}clampScalar(l,e){return this.x=Math.max(l,Math.min(e,this.x)),this.y=Math.max(l,Math.min(e,this.y)),this.z=Math.max(l,Math.min(e,this.z)),this.w=Math.max(l,Math.min(e,this.w)),this}clampLength(l,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(l,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(l){return this.x*l.x+this.y*l.y+this.z*l.z+this.w*l.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(l){return this.normalize().multiplyScalar(l)}lerp(l,e){return this.x+=(l.x-this.x)*e,this.y+=(l.y-this.y)*e,this.z+=(l.z-this.z)*e,this.w+=(l.w-this.w)*e,this}lerpVectors(l,e,t){return this.x=l.x+(e.x-l.x)*t,this.y=l.y+(e.y-l.y)*t,this.z=l.z+(e.z-l.z)*t,this.w=l.w+(e.w-l.w)*t,this}equals(l){return l.x===this.x&&l.y===this.y&&l.z===this.z&&l.w===this.w}fromArray(l,e=0){return this.x=l[e],this.y=l[e+1],this.z=l[e+2],this.w=l[e+3],this}toArray(l=[],e=0){return l[e]=this.x,l[e+1]=this.y,l[e+2]=this.z,l[e+3]=this.w,l}fromBufferAttribute(l,e){return this.x=l.getX(e),this.y=l.getY(e),this.z=l.getZ(e),this.w=l.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wl extends P3{constructor(l=1,e=1,t={}){super(),this.isWebGLRenderTarget=!0,this.width=l,this.height=e,this.depth=1,this.scissor=new W4(0,0,l,e),this.scissorTest=!1,this.viewport=new W4(0,0,l,e);const n={width:l,height:e,depth:1};this.texture=new nl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.internalFormat=t.internalFormat!==void 0?t.internalFormat:null,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Il,this.depthBuffer=t.depthBuffer!==void 0?t.depthBuffer:!0,this.stencilBuffer=t.stencilBuffer!==void 0?t.stencilBuffer:!1,this.depthTexture=t.depthTexture!==void 0?t.depthTexture:null,this.samples=t.samples!==void 0?t.samples:0}setSize(l,e,t=1){(this.width!==l||this.height!==e||this.depth!==t)&&(this.width=l,this.height=e,this.depth=t,this.texture.image.width=l,this.texture.image.height=e,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,l,e),this.scissor.set(0,0,l,e)}clone(){return new this.constructor().copy(this)}copy(l){this.width=l.width,this.height=l.height,this.depth=l.depth,this.viewport.copy(l.viewport),this.texture=l.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},l.texture.image);return this.texture.source=new u0(e),this.depthBuffer=l.depthBuffer,this.stencilBuffer=l.stencilBuffer,l.depthTexture!==null&&(this.depthTexture=l.depthTexture.clone()),this.samples=l.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class d0 extends nl{constructor(l=null,e=1,t=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:l,width:e,height:t,depth:n},this.magFilter=ol,this.minFilter=ol,this.wrapR=Vl,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Me extends nl{constructor(l=null,e=1,t=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:l,width:e,height:t,depth:n},this.magFilter=ol,this.minFilter=ol,this.wrapR=Vl,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class G1{constructor(l=0,e=0,t=0,n=1){this.isQuaternion=!0,this._x=l,this._y=e,this._z=t,this._w=n}static slerpFlat(l,e,t,n,i,s,r){let o=t[n+0],a=t[n+1],m=t[n+2],c=t[n+3];const h=i[s+0],d=i[s+1],f=i[s+2],q=i[s+3];if(r===0){l[e+0]=o,l[e+1]=a,l[e+2]=m,l[e+3]=c;return}if(r===1){l[e+0]=h,l[e+1]=d,l[e+2]=f,l[e+3]=q;return}if(c!==q||o!==h||a!==d||m!==f){let u=1-r;const g=o*h+a*d+m*f+c*q,w=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),v=Math.atan2(E,g*w);u=Math.sin(u*v)/E,r=Math.sin(r*v)/E}const p=r*w;if(o=o*u+h*p,a=a*u+d*p,m=m*u+f*p,c=c*u+q*p,u===1-r){const E=1/Math.sqrt(o*o+a*a+m*m+c*c);o*=E,a*=E,m*=E,c*=E}}l[e]=o,l[e+1]=a,l[e+2]=m,l[e+3]=c}static multiplyQuaternionsFlat(l,e,t,n,i,s){const r=t[n],o=t[n+1],a=t[n+2],m=t[n+3],c=i[s],h=i[s+1],d=i[s+2],f=i[s+3];return l[e]=r*f+m*c+o*d-a*h,l[e+1]=o*f+m*h+a*c-r*d,l[e+2]=a*f+m*d+r*h-o*c,l[e+3]=m*f-r*c-o*h-a*d,l}get x(){return this._x}set x(l){this._x=l,this._onChangeCallback()}get y(){return this._y}set y(l){this._y=l,this._onChangeCallback()}get z(){return this._z}set z(l){this._z=l,this._onChangeCallback()}get w(){return this._w}set w(l){this._w=l,this._onChangeCallback()}set(l,e,t,n){return this._x=l,this._y=e,this._z=t,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(l){return this._x=l.x,this._y=l.y,this._z=l.z,this._w=l.w,this._onChangeCallback(),this}setFromEuler(l,e){const t=l._x,n=l._y,i=l._z,s=l._order,r=Math.cos,o=Math.sin,a=r(t/2),m=r(n/2),c=r(i/2),h=o(t/2),d=o(n/2),f=o(i/2);switch(s){case"XYZ":this._x=h*m*c+a*d*f,this._y=a*d*c-h*m*f,this._z=a*m*f+h*d*c,this._w=a*m*c-h*d*f;break;case"YXZ":this._x=h*m*c+a*d*f,this._y=a*d*c-h*m*f,this._z=a*m*f-h*d*c,this._w=a*m*c+h*d*f;break;case"ZXY":this._x=h*m*c-a*d*f,this._y=a*d*c+h*m*f,this._z=a*m*f+h*d*c,this._w=a*m*c-h*d*f;break;case"ZYX":this._x=h*m*c-a*d*f,this._y=a*d*c+h*m*f,this._z=a*m*f-h*d*c,this._w=a*m*c+h*d*f;break;case"YZX":this._x=h*m*c+a*d*f,this._y=a*d*c+h*m*f,this._z=a*m*f-h*d*c,this._w=a*m*c-h*d*f;break;case"XZY":this._x=h*m*c-a*d*f,this._y=a*d*c-h*m*f,this._z=a*m*f+h*d*c,this._w=a*m*c+h*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(l,e){const t=e/2,n=Math.sin(t);return this._x=l.x*n,this._y=l.y*n,this._z=l.z*n,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(l){const e=l.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],a=e[2],m=e[6],c=e[10],h=t+r+c;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(m-o)*d,this._y=(i-a)*d,this._z=(s-n)*d}else if(t>r&&t>c){const d=2*Math.sqrt(1+t-r-c);this._w=(m-o)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(i+a)/d}else if(r>c){const d=2*Math.sqrt(1+r-t-c);this._w=(i-a)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(o+m)/d}else{const d=2*Math.sqrt(1+c-t-r);this._w=(s-n)/d,this._x=(i+a)/d,this._y=(o+m)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(l,e){let t=l.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(l.x)>Math.abs(l.z)?(this._x=-l.y,this._y=l.x,this._z=0,this._w=t):(this._x=0,this._y=-l.z,this._z=l.y,this._w=t)):(this._x=l.y*e.z-l.z*e.y,this._y=l.z*e.x-l.x*e.z,this._z=l.x*e.y-l.y*e.x,this._w=t),this.normalize()}angleTo(l){return 2*Math.acos(Math.abs(pl(this.dot(l),-1,1)))}rotateTowards(l,e){const t=this.angleTo(l);if(t===0)return this;const n=Math.min(1,e/t);return this.slerp(l,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(l){return this._x*l._x+this._y*l._y+this._z*l._z+this._w*l._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let l=this.length();return l===0?(this._x=0,this._y=0,this._z=0,this._w=1):(l=1/l,this._x=this._x*l,this._y=this._y*l,this._z=this._z*l,this._w=this._w*l),this._onChangeCallback(),this}multiply(l){return this.multiplyQuaternions(this,l)}premultiply(l){return this.multiplyQuaternions(l,this)}multiplyQuaternions(l,e){const t=l._x,n=l._y,i=l._z,s=l._w,r=e._x,o=e._y,a=e._z,m=e._w;return this._x=t*m+s*r+n*a-i*o,this._y=n*m+s*o+i*r-t*a,this._z=i*m+s*a+t*o-n*r,this._w=s*m-t*r-n*o-i*a,this._onChangeCallback(),this}slerp(l,e){if(e===0)return this;if(e===1)return this.copy(l);const t=this._x,n=this._y,i=this._z,s=this._w;let r=s*l._w+t*l._x+n*l._y+i*l._z;if(r<0?(this._w=-l._w,this._x=-l._x,this._y=-l._y,this._z=-l._z,r=-r):this.copy(l),r>=1)return this._w=s,this._x=t,this._y=n,this._z=i,this;const o=1-r*r;if(o<=Number.EPSILON){const d=1-e;return this._w=d*s+e*this._w,this._x=d*t+e*this._x,this._y=d*n+e*this._y,this._z=d*i+e*this._z,this.normalize(),this._onChangeCallback(),this}const a=Math.sqrt(o),m=Math.atan2(a,r),c=Math.sin((1-e)*m)/a,h=Math.sin(e*m)/a;return this._w=s*c+this._w*h,this._x=t*c+this._x*h,this._y=n*c+this._y*h,this._z=i*c+this._z*h,this._onChangeCallback(),this}slerpQuaternions(l,e,t){return this.copy(l).slerp(e,t)}random(){const l=Math.random(),e=Math.sqrt(1-l),t=Math.sqrt(l),n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(e*Math.cos(n),t*Math.sin(i),t*Math.cos(i),e*Math.sin(n))}equals(l){return l._x===this._x&&l._y===this._y&&l._z===this._z&&l._w===this._w}fromArray(l,e=0){return this._x=l[e],this._y=l[e+1],this._z=l[e+2],this._w=l[e+3],this._onChangeCallback(),this}toArray(l=[],e=0){return l[e]=this._x,l[e+1]=this._y,l[e+2]=this._z,l[e+3]=this._w,l}fromBufferAttribute(l,e){return this._x=l.getX(e),this._y=l.getY(e),this._z=l.getZ(e),this._w=l.getW(e),this}_onChange(l){return this._onChangeCallback=l,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{constructor(l=0,e=0,t=0){y.prototype.isVector3=!0,this.x=l,this.y=e,this.z=t}set(l,e,t){return t===void 0&&(t=this.z),this.x=l,this.y=e,this.z=t,this}setScalar(l){return this.x=l,this.y=l,this.z=l,this}setX(l){return this.x=l,this}setY(l){return this.y=l,this}setZ(l){return this.z=l,this}setComponent(l,e){switch(l){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+l)}return this}getComponent(l){switch(l){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+l)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(l){return this.x=l.x,this.y=l.y,this.z=l.z,this}add(l){return this.x+=l.x,this.y+=l.y,this.z+=l.z,this}addScalar(l){return this.x+=l,this.y+=l,this.z+=l,this}addVectors(l,e){return this.x=l.x+e.x,this.y=l.y+e.y,this.z=l.z+e.z,this}addScaledVector(l,e){return this.x+=l.x*e,this.y+=l.y*e,this.z+=l.z*e,this}sub(l){return this.x-=l.x,this.y-=l.y,this.z-=l.z,this}subScalar(l){return this.x-=l,this.y-=l,this.z-=l,this}subVectors(l,e){return this.x=l.x-e.x,this.y=l.y-e.y,this.z=l.z-e.z,this}multiply(l){return this.x*=l.x,this.y*=l.y,this.z*=l.z,this}multiplyScalar(l){return this.x*=l,this.y*=l,this.z*=l,this}multiplyVectors(l,e){return this.x=l.x*e.x,this.y=l.y*e.y,this.z=l.z*e.z,this}applyEuler(l){return this.applyQuaternion(N8.setFromEuler(l))}applyAxisAngle(l,e){return this.applyQuaternion(N8.setFromAxisAngle(l,e))}applyMatrix3(l){const e=this.x,t=this.y,n=this.z,i=l.elements;return this.x=i[0]*e+i[3]*t+i[6]*n,this.y=i[1]*e+i[4]*t+i[7]*n,this.z=i[2]*e+i[5]*t+i[8]*n,this}applyNormalMatrix(l){return this.applyMatrix3(l).normalize()}applyMatrix4(l){const e=this.x,t=this.y,n=this.z,i=l.elements,s=1/(i[3]*e+i[7]*t+i[11]*n+i[15]);return this.x=(i[0]*e+i[4]*t+i[8]*n+i[12])*s,this.y=(i[1]*e+i[5]*t+i[9]*n+i[13])*s,this.z=(i[2]*e+i[6]*t+i[10]*n+i[14])*s,this}applyQuaternion(l){const e=this.x,t=this.y,n=this.z,i=l.x,s=l.y,r=l.z,o=l.w,a=o*e+s*n-r*t,m=o*t+r*e-i*n,c=o*n+i*t-s*e,h=-i*e-s*t-r*n;return this.x=a*o+h*-i+m*-r-c*-s,this.y=m*o+h*-s+c*-i-a*-r,this.z=c*o+h*-r+a*-s-m*-i,this}project(l){return this.applyMatrix4(l.matrixWorldInverse).applyMatrix4(l.projectionMatrix)}unproject(l){return this.applyMatrix4(l.projectionMatrixInverse).applyMatrix4(l.matrixWorld)}transformDirection(l){const e=this.x,t=this.y,n=this.z,i=l.elements;return this.x=i[0]*e+i[4]*t+i[8]*n,this.y=i[1]*e+i[5]*t+i[9]*n,this.z=i[2]*e+i[6]*t+i[10]*n,this.normalize()}divide(l){return this.x/=l.x,this.y/=l.y,this.z/=l.z,this}divideScalar(l){return this.multiplyScalar(1/l)}min(l){return this.x=Math.min(this.x,l.x),this.y=Math.min(this.y,l.y),this.z=Math.min(this.z,l.z),this}max(l){return this.x=Math.max(this.x,l.x),this.y=Math.max(this.y,l.y),this.z=Math.max(this.z,l.z),this}clamp(l,e){return this.x=Math.max(l.x,Math.min(e.x,this.x)),this.y=Math.max(l.y,Math.min(e.y,this.y)),this.z=Math.max(l.z,Math.min(e.z,this.z)),this}clampScalar(l,e){return this.x=Math.max(l,Math.min(e,this.x)),this.y=Math.max(l,Math.min(e,this.y)),this.z=Math.max(l,Math.min(e,this.z)),this}clampLength(l,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(l,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(l){return this.x*l.x+this.y*l.y+this.z*l.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(l){return this.normalize().multiplyScalar(l)}lerp(l,e){return this.x+=(l.x-this.x)*e,this.y+=(l.y-this.y)*e,this.z+=(l.z-this.z)*e,this}lerpVectors(l,e,t){return this.x=l.x+(e.x-l.x)*t,this.y=l.y+(e.y-l.y)*t,this.z=l.z+(e.z-l.z)*t,this}cross(l){return this.crossVectors(this,l)}crossVectors(l,e){const t=l.x,n=l.y,i=l.z,s=e.x,r=e.y,o=e.z;return this.x=n*o-i*r,this.y=i*s-t*o,this.z=t*r-n*s,this}projectOnVector(l){const e=l.lengthSq();if(e===0)return this.set(0,0,0);const t=l.dot(this)/e;return this.copy(l).multiplyScalar(t)}projectOnPlane(l){return D5.copy(this).projectOnVector(l),this.sub(D5)}reflect(l){return this.sub(D5.copy(l).multiplyScalar(2*this.dot(l)))}angleTo(l){const e=Math.sqrt(this.lengthSq()*l.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(l)/e;return Math.acos(pl(t,-1,1))}distanceTo(l){return Math.sqrt(this.distanceToSquared(l))}distanceToSquared(l){const e=this.x-l.x,t=this.y-l.y,n=this.z-l.z;return e*e+t*t+n*n}manhattanDistanceTo(l){return Math.abs(this.x-l.x)+Math.abs(this.y-l.y)+Math.abs(this.z-l.z)}setFromSpherical(l){return this.setFromSphericalCoords(l.radius,l.phi,l.theta)}setFromSphericalCoords(l,e,t){const n=Math.sin(e)*l;return this.x=n*Math.sin(t),this.y=Math.cos(e)*l,this.z=n*Math.cos(t),this}setFromCylindrical(l){return this.setFromCylindricalCoords(l.radius,l.theta,l.y)}setFromCylindricalCoords(l,e,t){return this.x=l*Math.sin(e),this.y=t,this.z=l*Math.cos(e),this}setFromMatrixPosition(l){const e=l.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(l){const e=this.setFromMatrixColumn(l,0).length(),t=this.setFromMatrixColumn(l,1).length(),n=this.setFromMatrixColumn(l,2).length();return this.x=e,this.y=t,this.z=n,this}setFromMatrixColumn(l,e){return this.fromArray(l.elements,e*4)}setFromMatrix3Column(l,e){return this.fromArray(l.elements,e*3)}setFromEuler(l){return this.x=l._x,this.y=l._y,this.z=l._z,this}equals(l){return l.x===this.x&&l.y===this.y&&l.z===this.z}fromArray(l,e=0){return this.x=l[e],this.y=l[e+1],this.z=l[e+2],this}toArray(l=[],e=0){return l[e]=this.x,l[e+1]=this.y,l[e+2]=this.z,l}fromBufferAttribute(l,e){return this.x=l.getX(e),this.y=l.getY(e),this.z=l.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const l=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,t=Math.sqrt(1-l**2);return this.x=t*Math.cos(e),this.y=t*Math.sin(e),this.z=l,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const D5=new y,N8=new G1;class z3{constructor(l=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=l,this.max=e}set(l,e){return this.min.copy(l),this.max.copy(e),this}setFromArray(l){let e=1/0,t=1/0,n=1/0,i=-1/0,s=-1/0,r=-1/0;for(let o=0,a=l.length;o<a;o+=3){const m=l[o],c=l[o+1],h=l[o+2];m<e&&(e=m),c<t&&(t=c),h<n&&(n=h),m>i&&(i=m),c>s&&(s=c),h>r&&(r=h)}return this.min.set(e,t,n),this.max.set(i,s,r),this}setFromBufferAttribute(l){let e=1/0,t=1/0,n=1/0,i=-1/0,s=-1/0,r=-1/0;for(let o=0,a=l.count;o<a;o++){const m=l.getX(o),c=l.getY(o),h=l.getZ(o);m<e&&(e=m),c<t&&(t=c),h<n&&(n=h),m>i&&(i=m),c>s&&(s=c),h>r&&(r=h)}return this.min.set(e,t,n),this.max.set(i,s,r),this}setFromPoints(l){this.makeEmpty();for(let e=0,t=l.length;e<t;e++)this.expandByPoint(l[e]);return this}setFromCenterAndSize(l,e){const t=K1.copy(e).multiplyScalar(.5);return this.min.copy(l).sub(t),this.max.copy(l).add(t),this}setFromObject(l,e=!1){return this.makeEmpty(),this.expandByObject(l,e)}clone(){return new this.constructor().copy(this)}copy(l){return this.min.copy(l.min),this.max.copy(l.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(l){return this.isEmpty()?l.set(0,0,0):l.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(l){return this.isEmpty()?l.set(0,0,0):l.subVectors(this.max,this.min)}expandByPoint(l){return this.min.min(l),this.max.max(l),this}expandByVector(l){return this.min.sub(l),this.max.add(l),this}expandByScalar(l){return this.min.addScalar(-l),this.max.addScalar(l),this}expandByObject(l,e=!1){l.updateWorldMatrix(!1,!1);const t=l.geometry;if(t!==void 0)if(e&&t.attributes!=null&&t.attributes.position!==void 0){const i=t.attributes.position;for(let s=0,r=i.count;s<r;s++)K1.fromBufferAttribute(i,s).applyMatrix4(l.matrixWorld),this.expandByPoint(K1)}else t.boundingBox===null&&t.computeBoundingBox(),U5.copy(t.boundingBox),U5.applyMatrix4(l.matrixWorld),this.union(U5);const n=l.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(l){return!(l.x<this.min.x||l.x>this.max.x||l.y<this.min.y||l.y>this.max.y||l.z<this.min.z||l.z>this.max.z)}containsBox(l){return this.min.x<=l.min.x&&l.max.x<=this.max.x&&this.min.y<=l.min.y&&l.max.y<=this.max.y&&this.min.z<=l.min.z&&l.max.z<=this.max.z}getParameter(l,e){return e.set((l.x-this.min.x)/(this.max.x-this.min.x),(l.y-this.min.y)/(this.max.y-this.min.y),(l.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(l){return!(l.max.x<this.min.x||l.min.x>this.max.x||l.max.y<this.min.y||l.min.y>this.max.y||l.max.z<this.min.z||l.min.z>this.max.z)}intersectsSphere(l){return this.clampPoint(l.center,K1),K1.distanceToSquared(l.center)<=l.radius*l.radius}intersectsPlane(l){let e,t;return l.normal.x>0?(e=l.normal.x*this.min.x,t=l.normal.x*this.max.x):(e=l.normal.x*this.max.x,t=l.normal.x*this.min.x),l.normal.y>0?(e+=l.normal.y*this.min.y,t+=l.normal.y*this.max.y):(e+=l.normal.y*this.max.y,t+=l.normal.y*this.min.y),l.normal.z>0?(e+=l.normal.z*this.min.z,t+=l.normal.z*this.max.z):(e+=l.normal.z*this.max.z,t+=l.normal.z*this.min.z),e<=-l.constant&&t>=-l.constant}intersectsTriangle(l){if(this.isEmpty())return!1;this.getCenter(J3),T2.subVectors(this.max,J3),u3.subVectors(l.a,J3),d3.subVectors(l.b,J3),q3.subVectors(l.c,J3),v1.subVectors(d3,u3),_1.subVectors(q3,d3),O1.subVectors(u3,q3);let e=[0,-v1.z,v1.y,0,-_1.z,_1.y,0,-O1.z,O1.y,v1.z,0,-v1.x,_1.z,0,-_1.x,O1.z,0,-O1.x,-v1.y,v1.x,0,-_1.y,_1.x,0,-O1.y,O1.x,0];return!N5(e,u3,d3,q3,T2)||(e=[1,0,0,0,1,0,0,0,1],!N5(e,u3,d3,q3,T2))?!1:(b2.crossVectors(v1,_1),e=[b2.x,b2.y,b2.z],N5(e,u3,d3,q3,T2))}clampPoint(l,e){return e.copy(l).clamp(this.min,this.max)}distanceToPoint(l){return K1.copy(l).clamp(this.min,this.max).sub(l).length()}getBoundingSphere(l){return this.getCenter(l.center),l.radius=this.getSize(K1).length()*.5,l}intersect(l){return this.min.max(l.min),this.max.min(l.max),this.isEmpty()&&this.makeEmpty(),this}union(l){return this.min.min(l.min),this.max.max(l.max),this}applyMatrix4(l){return this.isEmpty()?this:(h1[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(l),h1[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(l),h1[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(l),h1[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(l),h1[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(l),h1[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(l),h1[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(l),h1[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(l),this.setFromPoints(h1),this)}translate(l){return this.min.add(l),this.max.add(l),this}equals(l){return l.min.equals(this.min)&&l.max.equals(this.max)}}const h1=[new y,new y,new y,new y,new y,new y,new y,new y],K1=new y,U5=new z3,u3=new y,d3=new y,q3=new y,v1=new y,_1=new y,O1=new y,J3=new y,T2=new y,b2=new y,V1=new y;function N5(A,l,e,t,n){for(let i=0,s=A.length-3;i<=s;i+=3){V1.fromArray(A,i);const r=n.x*Math.abs(V1.x)+n.y*Math.abs(V1.y)+n.z*Math.abs(V1.z),o=l.dot(V1),a=e.dot(V1),m=t.dot(V1);if(Math.max(-Math.max(o,a,m),Math.min(o,a,m))>r)return!1}return!0}const Ee=new z3,Z3=new y,R5=new y;class k3{constructor(l=new y,e=-1){this.center=l,this.radius=e}set(l,e){return this.center.copy(l),this.radius=e,this}setFromPoints(l,e){const t=this.center;e!==void 0?t.copy(e):Ee.setFromPoints(l).getCenter(t);let n=0;for(let i=0,s=l.length;i<s;i++)n=Math.max(n,t.distanceToSquared(l[i]));return this.radius=Math.sqrt(n),this}copy(l){return this.center.copy(l.center),this.radius=l.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(l){return l.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(l){return l.distanceTo(this.center)-this.radius}intersectsSphere(l){const e=this.radius+l.radius;return l.center.distanceToSquared(this.center)<=e*e}intersectsBox(l){return l.intersectsSphere(this)}intersectsPlane(l){return Math.abs(l.distanceToPoint(this.center))<=this.radius}clampPoint(l,e){const t=this.center.distanceToSquared(l);return e.copy(l),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(l){return this.isEmpty()?(l.makeEmpty(),l):(l.set(this.center,this.center),l.expandByScalar(this.radius),l)}applyMatrix4(l){return this.center.applyMatrix4(l),this.radius=this.radius*l.getMaxScaleOnAxis(),this}translate(l){return this.center.add(l),this}expandByPoint(l){if(this.isEmpty())return this.center.copy(l),this.radius=0,this;Z3.subVectors(l,this.center);const e=Z3.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),n=(t-this.radius)*.5;this.center.addScaledVector(Z3,n/t),this.radius+=n}return this}union(l){return l.isEmpty()?this:this.isEmpty()?(this.copy(l),this):(this.center.equals(l.center)===!0?this.radius=Math.max(this.radius,l.radius):(R5.subVectors(l.center,this.center).setLength(l.radius),this.expandByPoint(Z3.copy(l.center).add(R5)),this.expandByPoint(Z3.copy(l.center).sub(R5))),this)}equals(l){return l.center.equals(this.center)&&l.radius===this.radius}clone(){return new this.constructor().copy(this)}}const u1=new y,L5=new y,S2=new y,y1=new y,G5=new y,F2=new y,P5=new y;class U7{constructor(l=new y,e=new y(0,0,-1)){this.origin=l,this.direction=e}set(l,e){return this.origin.copy(l),this.direction.copy(e),this}copy(l){return this.origin.copy(l.origin),this.direction.copy(l.direction),this}at(l,e){return e.copy(this.direction).multiplyScalar(l).add(this.origin)}lookAt(l){return this.direction.copy(l).sub(this.origin).normalize(),this}recast(l){return this.origin.copy(this.at(l,u1)),this}closestPointToPoint(l,e){e.subVectors(l,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(t).add(this.origin)}distanceToPoint(l){return Math.sqrt(this.distanceSqToPoint(l))}distanceSqToPoint(l){const e=u1.subVectors(l,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(l):(u1.copy(this.direction).multiplyScalar(e).add(this.origin),u1.distanceToSquared(l))}distanceSqToSegment(l,e,t,n){L5.copy(l).add(e).multiplyScalar(.5),S2.copy(e).sub(l).normalize(),y1.copy(this.origin).sub(L5);const i=l.distanceTo(e)*.5,s=-this.direction.dot(S2),r=y1.dot(this.direction),o=-y1.dot(S2),a=y1.lengthSq(),m=Math.abs(1-s*s);let c,h,d,f;if(m>0)if(c=s*o-r,h=s*r-o,f=i*m,c>=0)if(h>=-f)if(h<=f){const q=1/m;c*=q,h*=q,d=c*(c+s*h+2*r)+h*(s*c+h+2*o)+a}else h=i,c=Math.max(0,-(s*h+r)),d=-c*c+h*(h+2*o)+a;else h=-i,c=Math.max(0,-(s*h+r)),d=-c*c+h*(h+2*o)+a;else h<=-f?(c=Math.max(0,-(-s*i+r)),h=c>0?-i:Math.min(Math.max(-i,-o),i),d=-c*c+h*(h+2*o)+a):h<=f?(c=0,h=Math.min(Math.max(-i,-o),i),d=h*(h+2*o)+a):(c=Math.max(0,-(s*i+r)),h=c>0?i:Math.min(Math.max(-i,-o),i),d=-c*c+h*(h+2*o)+a);else h=s>0?-i:i,c=Math.max(0,-(s*h+r)),d=-c*c+h*(h+2*o)+a;return t&&t.copy(this.direction).multiplyScalar(c).add(this.origin),n&&n.copy(S2).multiplyScalar(h).add(L5),d}intersectSphere(l,e){u1.subVectors(l.center,this.origin);const t=u1.dot(this.direction),n=u1.dot(u1)-t*t,i=l.radius*l.radius;if(n>i)return null;const s=Math.sqrt(i-n),r=t-s,o=t+s;return r<0&&o<0?null:r<0?this.at(o,e):this.at(r,e)}intersectsSphere(l){return this.distanceSqToPoint(l.center)<=l.radius*l.radius}distanceToPlane(l){const e=l.normal.dot(this.direction);if(e===0)return l.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(l.normal)+l.constant)/e;return t>=0?t:null}intersectPlane(l,e){const t=this.distanceToPlane(l);return t===null?null:this.at(t,e)}intersectsPlane(l){const e=l.distanceToPoint(this.origin);return e===0||l.normal.dot(this.direction)*e<0}intersectBox(l,e){let t,n,i,s,r,o;const a=1/this.direction.x,m=1/this.direction.y,c=1/this.direction.z,h=this.origin;return a>=0?(t=(l.min.x-h.x)*a,n=(l.max.x-h.x)*a):(t=(l.max.x-h.x)*a,n=(l.min.x-h.x)*a),m>=0?(i=(l.min.y-h.y)*m,s=(l.max.y-h.y)*m):(i=(l.max.y-h.y)*m,s=(l.min.y-h.y)*m),t>s||i>n||((i>t||isNaN(t))&&(t=i),(s<n||isNaN(n))&&(n=s),c>=0?(r=(l.min.z-h.z)*c,o=(l.max.z-h.z)*c):(r=(l.max.z-h.z)*c,o=(l.min.z-h.z)*c),t>o||r>n)||((r>t||t!==t)&&(t=r),(o<n||n!==n)&&(n=o),n<0)?null:this.at(t>=0?t:n,e)}intersectsBox(l){return this.intersectBox(l,u1)!==null}intersectTriangle(l,e,t,n,i){G5.subVectors(e,l),F2.subVectors(t,l),P5.crossVectors(G5,F2);let s=this.direction.dot(P5),r;if(s>0){if(n)return null;r=1}else if(s<0)r=-1,s=-s;else return null;y1.subVectors(this.origin,l);const o=r*this.direction.dot(F2.crossVectors(y1,F2));if(o<0)return null;const a=r*this.direction.dot(G5.cross(y1));if(a<0||o+a>s)return null;const m=-r*y1.dot(P5);return m<0?null:this.at(m/s,i)}applyMatrix4(l){return this.origin.applyMatrix4(l),this.direction.transformDirection(l),this}equals(l){return l.origin.equals(this.origin)&&l.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class R4{constructor(){R4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(l,e,t,n,i,s,r,o,a,m,c,h,d,f,q,u){const g=this.elements;return g[0]=l,g[4]=e,g[8]=t,g[12]=n,g[1]=i,g[5]=s,g[9]=r,g[13]=o,g[2]=a,g[6]=m,g[10]=c,g[14]=h,g[3]=d,g[7]=f,g[11]=q,g[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new R4().fromArray(this.elements)}copy(l){const e=this.elements,t=l.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}copyPosition(l){const e=this.elements,t=l.elements;return e[12]=t[12],e[13]=t[13],e[14]=t[14],this}setFromMatrix3(l){const e=l.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(l,e,t){return l.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(l,e,t){return this.set(l.x,e.x,t.x,0,l.y,e.y,t.y,0,l.z,e.z,t.z,0,0,0,0,1),this}extractRotation(l){const e=this.elements,t=l.elements,n=1/f3.setFromMatrixColumn(l,0).length(),i=1/f3.setFromMatrixColumn(l,1).length(),s=1/f3.setFromMatrixColumn(l,2).length();return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=0,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=0,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(l){const e=this.elements,t=l.x,n=l.y,i=l.z,s=Math.cos(t),r=Math.sin(t),o=Math.cos(n),a=Math.sin(n),m=Math.cos(i),c=Math.sin(i);if(l.order==="XYZ"){const h=s*m,d=s*c,f=r*m,q=r*c;e[0]=o*m,e[4]=-o*c,e[8]=a,e[1]=d+f*a,e[5]=h-q*a,e[9]=-r*o,e[2]=q-h*a,e[6]=f+d*a,e[10]=s*o}else if(l.order==="YXZ"){const h=o*m,d=o*c,f=a*m,q=a*c;e[0]=h+q*r,e[4]=f*r-d,e[8]=s*a,e[1]=s*c,e[5]=s*m,e[9]=-r,e[2]=d*r-f,e[6]=q+h*r,e[10]=s*o}else if(l.order==="ZXY"){const h=o*m,d=o*c,f=a*m,q=a*c;e[0]=h-q*r,e[4]=-s*c,e[8]=f+d*r,e[1]=d+f*r,e[5]=s*m,e[9]=q-h*r,e[2]=-s*a,e[6]=r,e[10]=s*o}else if(l.order==="ZYX"){const h=s*m,d=s*c,f=r*m,q=r*c;e[0]=o*m,e[4]=f*a-d,e[8]=h*a+q,e[1]=o*c,e[5]=q*a+h,e[9]=d*a-f,e[2]=-a,e[6]=r*o,e[10]=s*o}else if(l.order==="YZX"){const h=s*o,d=s*a,f=r*o,q=r*a;e[0]=o*m,e[4]=q-h*c,e[8]=f*c+d,e[1]=c,e[5]=s*m,e[9]=-r*m,e[2]=-a*m,e[6]=d*c+f,e[10]=h-q*c}else if(l.order==="XZY"){const h=s*o,d=s*a,f=r*o,q=r*a;e[0]=o*m,e[4]=-c,e[8]=a*m,e[1]=h*c+q,e[5]=s*m,e[9]=d*c-f,e[2]=f*c-d,e[6]=r*m,e[10]=q*c+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(l){return this.compose(Ce,l,Qe)}lookAt(l,e,t){const n=this.elements;return Dl.subVectors(l,e),Dl.lengthSq()===0&&(Dl.z=1),Dl.normalize(),I1.crossVectors(t,Dl),I1.lengthSq()===0&&(Math.abs(t.z)===1?Dl.x+=1e-4:Dl.z+=1e-4,Dl.normalize(),I1.crossVectors(t,Dl)),I1.normalize(),D2.crossVectors(Dl,I1),n[0]=I1.x,n[4]=D2.x,n[8]=Dl.x,n[1]=I1.y,n[5]=D2.y,n[9]=Dl.y,n[2]=I1.z,n[6]=D2.z,n[10]=Dl.z,this}multiply(l){return this.multiplyMatrices(this,l)}premultiply(l){return this.multiplyMatrices(l,this)}multiplyMatrices(l,e){const t=l.elements,n=e.elements,i=this.elements,s=t[0],r=t[4],o=t[8],a=t[12],m=t[1],c=t[5],h=t[9],d=t[13],f=t[2],q=t[6],u=t[10],g=t[14],w=t[3],x=t[7],p=t[11],E=t[15],v=n[0],I=n[4],B=n[8],Q=n[12],T=n[1],z=n[5],Z=n[9],L=n[13],S=n[2],P=n[6],W=n[10],$=n[14],K=n[3],D=n[7],R=n[11],t4=n[15];return i[0]=s*v+r*T+o*S+a*K,i[4]=s*I+r*z+o*P+a*D,i[8]=s*B+r*Z+o*W+a*R,i[12]=s*Q+r*L+o*$+a*t4,i[1]=m*v+c*T+h*S+d*K,i[5]=m*I+c*z+h*P+d*D,i[9]=m*B+c*Z+h*W+d*R,i[13]=m*Q+c*L+h*$+d*t4,i[2]=f*v+q*T+u*S+g*K,i[6]=f*I+q*z+u*P+g*D,i[10]=f*B+q*Z+u*W+g*R,i[14]=f*Q+q*L+u*$+g*t4,i[3]=w*v+x*T+p*S+E*K,i[7]=w*I+x*z+p*P+E*D,i[11]=w*B+x*Z+p*W+E*R,i[15]=w*Q+x*L+p*$+E*t4,this}multiplyScalar(l){const e=this.elements;return e[0]*=l,e[4]*=l,e[8]*=l,e[12]*=l,e[1]*=l,e[5]*=l,e[9]*=l,e[13]*=l,e[2]*=l,e[6]*=l,e[10]*=l,e[14]*=l,e[3]*=l,e[7]*=l,e[11]*=l,e[15]*=l,this}determinant(){const l=this.elements,e=l[0],t=l[4],n=l[8],i=l[12],s=l[1],r=l[5],o=l[9],a=l[13],m=l[2],c=l[6],h=l[10],d=l[14],f=l[3],q=l[7],u=l[11],g=l[15];return f*(+i*o*c-n*a*c-i*r*h+t*a*h+n*r*d-t*o*d)+q*(+e*o*d-e*a*h+i*s*h-n*s*d+n*a*m-i*o*m)+u*(+e*a*c-e*r*d-i*s*c+t*s*d+i*r*m-t*a*m)+g*(-n*r*m-e*o*c+e*r*h+n*s*c-t*s*h+t*o*m)}transpose(){const l=this.elements;let e;return e=l[1],l[1]=l[4],l[4]=e,e=l[2],l[2]=l[8],l[8]=e,e=l[6],l[6]=l[9],l[9]=e,e=l[3],l[3]=l[12],l[12]=e,e=l[7],l[7]=l[13],l[13]=e,e=l[11],l[11]=l[14],l[14]=e,this}setPosition(l,e,t){const n=this.elements;return l.isVector3?(n[12]=l.x,n[13]=l.y,n[14]=l.z):(n[12]=l,n[13]=e,n[14]=t),this}invert(){const l=this.elements,e=l[0],t=l[1],n=l[2],i=l[3],s=l[4],r=l[5],o=l[6],a=l[7],m=l[8],c=l[9],h=l[10],d=l[11],f=l[12],q=l[13],u=l[14],g=l[15],w=c*u*a-q*h*a+q*o*d-r*u*d-c*o*g+r*h*g,x=f*h*a-m*u*a-f*o*d+s*u*d+m*o*g-s*h*g,p=m*q*a-f*c*a+f*r*d-s*q*d-m*r*g+s*c*g,E=f*c*o-m*q*o-f*r*h+s*q*h+m*r*u-s*c*u,v=e*w+t*x+n*p+i*E;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/v;return l[0]=w*I,l[1]=(q*h*i-c*u*i-q*n*d+t*u*d+c*n*g-t*h*g)*I,l[2]=(r*u*i-q*o*i+q*n*a-t*u*a-r*n*g+t*o*g)*I,l[3]=(c*o*i-r*h*i-c*n*a+t*h*a+r*n*d-t*o*d)*I,l[4]=x*I,l[5]=(m*u*i-f*h*i+f*n*d-e*u*d-m*n*g+e*h*g)*I,l[6]=(f*o*i-s*u*i-f*n*a+e*u*a+s*n*g-e*o*g)*I,l[7]=(s*h*i-m*o*i+m*n*a-e*h*a-s*n*d+e*o*d)*I,l[8]=p*I,l[9]=(f*c*i-m*q*i-f*t*d+e*q*d+m*t*g-e*c*g)*I,l[10]=(s*q*i-f*r*i+f*t*a-e*q*a-s*t*g+e*r*g)*I,l[11]=(m*r*i-s*c*i-m*t*a+e*c*a+s*t*d-e*r*d)*I,l[12]=E*I,l[13]=(m*q*n-f*c*n+f*t*h-e*q*h-m*t*u+e*c*u)*I,l[14]=(f*r*n-s*q*n-f*t*o+e*q*o+s*t*u-e*r*u)*I,l[15]=(s*c*n-m*r*n+m*t*o-e*c*o-s*t*h+e*r*h)*I,this}scale(l){const e=this.elements,t=l.x,n=l.y,i=l.z;return e[0]*=t,e[4]*=n,e[8]*=i,e[1]*=t,e[5]*=n,e[9]*=i,e[2]*=t,e[6]*=n,e[10]*=i,e[3]*=t,e[7]*=n,e[11]*=i,this}getMaxScaleOnAxis(){const l=this.elements,e=l[0]*l[0]+l[1]*l[1]+l[2]*l[2],t=l[4]*l[4]+l[5]*l[5]+l[6]*l[6],n=l[8]*l[8]+l[9]*l[9]+l[10]*l[10];return Math.sqrt(Math.max(e,t,n))}makeTranslation(l,e,t){return this.set(1,0,0,l,0,1,0,e,0,0,1,t,0,0,0,1),this}makeRotationX(l){const e=Math.cos(l),t=Math.sin(l);return this.set(1,0,0,0,0,e,-t,0,0,t,e,0,0,0,0,1),this}makeRotationY(l){const e=Math.cos(l),t=Math.sin(l);return this.set(e,0,t,0,0,1,0,0,-t,0,e,0,0,0,0,1),this}makeRotationZ(l){const e=Math.cos(l),t=Math.sin(l);return this.set(e,-t,0,0,t,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(l,e){const t=Math.cos(e),n=Math.sin(e),i=1-t,s=l.x,r=l.y,o=l.z,a=i*s,m=i*r;return this.set(a*s+t,a*r-n*o,a*o+n*r,0,a*r+n*o,m*r+t,m*o-n*s,0,a*o-n*r,m*o+n*s,i*o*o+t,0,0,0,0,1),this}makeScale(l,e,t){return this.set(l,0,0,0,0,e,0,0,0,0,t,0,0,0,0,1),this}makeShear(l,e,t,n,i,s){return this.set(1,t,i,0,l,1,s,0,e,n,1,0,0,0,0,1),this}compose(l,e,t){const n=this.elements,i=e._x,s=e._y,r=e._z,o=e._w,a=i+i,m=s+s,c=r+r,h=i*a,d=i*m,f=i*c,q=s*m,u=s*c,g=r*c,w=o*a,x=o*m,p=o*c,E=t.x,v=t.y,I=t.z;return n[0]=(1-(q+g))*E,n[1]=(d+p)*E,n[2]=(f-x)*E,n[3]=0,n[4]=(d-p)*v,n[5]=(1-(h+g))*v,n[6]=(u+w)*v,n[7]=0,n[8]=(f+x)*I,n[9]=(u-w)*I,n[10]=(1-(h+q))*I,n[11]=0,n[12]=l.x,n[13]=l.y,n[14]=l.z,n[15]=1,this}decompose(l,e,t){const n=this.elements;let i=f3.set(n[0],n[1],n[2]).length();const s=f3.set(n[4],n[5],n[6]).length(),r=f3.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),l.x=n[12],l.y=n[13],l.z=n[14],$l.copy(this);const a=1/i,m=1/s,c=1/r;return $l.elements[0]*=a,$l.elements[1]*=a,$l.elements[2]*=a,$l.elements[4]*=m,$l.elements[5]*=m,$l.elements[6]*=m,$l.elements[8]*=c,$l.elements[9]*=c,$l.elements[10]*=c,e.setFromRotationMatrix($l),t.x=i,t.y=s,t.z=r,this}makePerspective(l,e,t,n,i,s){const r=this.elements,o=2*i/(e-l),a=2*i/(t-n),m=(e+l)/(e-l),c=(t+n)/(t-n),h=-(s+i)/(s-i),d=-2*s*i/(s-i);return r[0]=o,r[4]=0,r[8]=m,r[12]=0,r[1]=0,r[5]=a,r[9]=c,r[13]=0,r[2]=0,r[6]=0,r[10]=h,r[14]=d,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(l,e,t,n,i,s){const r=this.elements,o=1/(e-l),a=1/(t-n),m=1/(s-i),c=(e+l)*o,h=(t+n)*a,d=(s+i)*m;return r[0]=2*o,r[4]=0,r[8]=0,r[12]=-c,r[1]=0,r[5]=2*a,r[9]=0,r[13]=-h,r[2]=0,r[6]=0,r[10]=-2*m,r[14]=-d,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(l){const e=this.elements,t=l.elements;for(let n=0;n<16;n++)if(e[n]!==t[n])return!1;return!0}fromArray(l,e=0){for(let t=0;t<16;t++)this.elements[t]=l[t+e];return this}toArray(l=[],e=0){const t=this.elements;return l[e]=t[0],l[e+1]=t[1],l[e+2]=t[2],l[e+3]=t[3],l[e+4]=t[4],l[e+5]=t[5],l[e+6]=t[6],l[e+7]=t[7],l[e+8]=t[8],l[e+9]=t[9],l[e+10]=t[10],l[e+11]=t[11],l[e+12]=t[12],l[e+13]=t[13],l[e+14]=t[14],l[e+15]=t[15],l}}const f3=new y,$l=new R4,Ce=new y(0,0,0),Qe=new y(1,1,1),I1=new y,D2=new y,Dl=new y,R8=new R4,L8=new G1;class E2{constructor(l=0,e=0,t=0,n=E2.DefaultOrder){this.isEuler=!0,this._x=l,this._y=e,this._z=t,this._order=n}get x(){return this._x}set x(l){this._x=l,this._onChangeCallback()}get y(){return this._y}set y(l){this._y=l,this._onChangeCallback()}get z(){return this._z}set z(l){this._z=l,this._onChangeCallback()}get order(){return this._order}set order(l){this._order=l,this._onChangeCallback()}set(l,e,t,n=this._order){return this._x=l,this._y=e,this._z=t,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(l){return this._x=l._x,this._y=l._y,this._z=l._z,this._order=l._order,this._onChangeCallback(),this}setFromRotationMatrix(l,e=this._order,t=!0){const n=l.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],m=n[9],c=n[2],h=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(pl(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-m,d),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(h,a),this._z=0);break;case"YXZ":this._x=Math.asin(-pl(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(r,d),this._z=Math.atan2(o,a)):(this._y=Math.atan2(-c,i),this._z=0);break;case"ZXY":this._x=Math.asin(pl(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-s,a)):(this._y=0,this._z=Math.atan2(o,i));break;case"ZYX":this._y=Math.asin(-pl(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(o,i)):(this._x=0,this._z=Math.atan2(-s,a));break;case"YZX":this._z=Math.asin(pl(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-m,a),this._y=Math.atan2(-c,i)):(this._x=0,this._y=Math.atan2(r,d));break;case"XZY":this._z=Math.asin(-pl(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,a),this._y=Math.atan2(r,i)):(this._x=Math.atan2(-m,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,t===!0&&this._onChangeCallback(),this}setFromQuaternion(l,e,t){return R8.makeRotationFromQuaternion(l),this.setFromRotationMatrix(R8,e,t)}setFromVector3(l,e=this._order){return this.set(l.x,l.y,l.z,e)}reorder(l){return L8.setFromEuler(this),this.setFromQuaternion(L8,l)}equals(l){return l._x===this._x&&l._y===this._y&&l._z===this._z&&l._order===this._order}fromArray(l){return this._x=l[0],this._y=l[1],this._z=l[2],l[3]!==void 0&&(this._order=l[3]),this._onChangeCallback(),this}toArray(l=[],e=0){return l[e]=this._x,l[e+1]=this._y,l[e+2]=this._z,l[e+3]=this._order,l}_onChange(l){return this._onChangeCallback=l,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}E2.DefaultOrder="XYZ";E2.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class q0{constructor(){this.mask=1}set(l){this.mask=(1<<l|0)>>>0}enable(l){this.mask|=1<<l|0}enableAll(){this.mask=-1}toggle(l){this.mask^=1<<l|0}disable(l){this.mask&=~(1<<l|0)}disableAll(){this.mask=0}test(l){return(this.mask&l.mask)!==0}isEnabled(l){return(this.mask&(1<<l|0))!==0}}let ve=0;const G8=new y,g3=new G1,d1=new R4,U2=new y,X3=new y,_e=new y,ye=new G1,P8=new y(1,0,0),z8=new y(0,1,0),k8=new y(0,0,1),Ie={type:"added"},Y8={type:"removed"};class Z4 extends P3{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ve++}),this.uuid=Jl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Z4.DefaultUp.clone();const l=new y,e=new E2,t=new G1,n=new y(1,1,1);function i(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(i),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:l},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new R4},normalMatrix:{value:new Wl}}),this.matrix=new R4,this.matrixWorld=new R4,this.matrixAutoUpdate=Z4.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Z4.DefaultMatrixWorldAutoUpdate,this.layers=new q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(l){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(l),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(l){return this.quaternion.premultiply(l),this}setRotationFromAxisAngle(l,e){this.quaternion.setFromAxisAngle(l,e)}setRotationFromEuler(l){this.quaternion.setFromEuler(l,!0)}setRotationFromMatrix(l){this.quaternion.setFromRotationMatrix(l)}setRotationFromQuaternion(l){this.quaternion.copy(l)}rotateOnAxis(l,e){return g3.setFromAxisAngle(l,e),this.quaternion.multiply(g3),this}rotateOnWorldAxis(l,e){return g3.setFromAxisAngle(l,e),this.quaternion.premultiply(g3),this}rotateX(l){return this.rotateOnAxis(P8,l)}rotateY(l){return this.rotateOnAxis(z8,l)}rotateZ(l){return this.rotateOnAxis(k8,l)}translateOnAxis(l,e){return G8.copy(l).applyQuaternion(this.quaternion),this.position.add(G8.multiplyScalar(e)),this}translateX(l){return this.translateOnAxis(P8,l)}translateY(l){return this.translateOnAxis(z8,l)}translateZ(l){return this.translateOnAxis(k8,l)}localToWorld(l){return l.applyMatrix4(this.matrixWorld)}worldToLocal(l){return l.applyMatrix4(d1.copy(this.matrixWorld).invert())}lookAt(l,e,t){l.isVector3?U2.copy(l):U2.set(l,e,t);const n=this.parent;this.updateWorldMatrix(!0,!1),X3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?d1.lookAt(X3,U2,this.up):d1.lookAt(U2,X3,this.up),this.quaternion.setFromRotationMatrix(d1),n&&(d1.extractRotation(n.matrixWorld),g3.setFromRotationMatrix(d1),this.quaternion.premultiply(g3.invert()))}add(l){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return l===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",l),this):(l&&l.isObject3D?(l.parent!==null&&l.parent.remove(l),l.parent=this,this.children.push(l),l.dispatchEvent(Ie)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",l),this)}remove(l){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(l);return e!==-1&&(l.parent=null,this.children.splice(e,1),l.dispatchEvent(Y8)),this}removeFromParent(){const l=this.parent;return l!==null&&l.remove(this),this}clear(){for(let l=0;l<this.children.length;l++){const e=this.children[l];e.parent=null,e.dispatchEvent(Y8)}return this.children.length=0,this}attach(l){return this.updateWorldMatrix(!0,!1),d1.copy(this.matrixWorld).invert(),l.parent!==null&&(l.parent.updateWorldMatrix(!0,!1),d1.multiply(l.parent.matrixWorld)),l.applyMatrix4(d1),this.add(l),l.updateWorldMatrix(!1,!0),this}getObjectById(l){return this.getObjectByProperty("id",l)}getObjectByName(l){return this.getObjectByProperty("name",l)}getObjectByProperty(l,e){if(this[l]===e)return this;for(let t=0,n=this.children.length;t<n;t++){const s=this.children[t].getObjectByProperty(l,e);if(s!==void 0)return s}}getWorldPosition(l){return this.updateWorldMatrix(!0,!1),l.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(l){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(X3,l,_e),l}getWorldScale(l){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(X3,ye,l),l}getWorldDirection(l){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return l.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(l){l(this);const e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].traverse(l)}traverseVisible(l){if(this.visible===!1)return;l(this);const e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].traverseVisible(l)}traverseAncestors(l){const e=this.parent;e!==null&&(l(e),e.traverseAncestors(l))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(l){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||l)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,l=!0);const e=this.children;for(let t=0,n=e.length;t<n;t++){const i=e[t];(i.matrixWorldAutoUpdate===!0||l===!0)&&i.updateMatrixWorld(l)}}updateWorldMatrix(l,e){const t=this.parent;if(l===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++){const r=n[i];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(l){const e=l===void 0||typeof l=="string",t={};e&&(l={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function i(r,o){return r[o.uuid]===void 0&&(r[o.uuid]=o.toJSON(l)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(l).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(l).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(l.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const o=r.shapes;if(Array.isArray(o))for(let a=0,m=o.length;a<m;a++){const c=o[a];i(l.shapes,c)}else i(l.shapes,o)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(l.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let o=0,a=this.material.length;o<a;o++)r.push(i(l.materials,this.material[o]));n.material=r}else n.material=i(l.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(l).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const o=this.animations[r];n.animations.push(i(l.animations,o))}}if(e){const r=s(l.geometries),o=s(l.materials),a=s(l.textures),m=s(l.images),c=s(l.shapes),h=s(l.skeletons),d=s(l.animations),f=s(l.nodes);r.length>0&&(t.geometries=r),o.length>0&&(t.materials=o),a.length>0&&(t.textures=a),m.length>0&&(t.images=m),c.length>0&&(t.shapes=c),h.length>0&&(t.skeletons=h),d.length>0&&(t.animations=d),f.length>0&&(t.nodes=f)}return t.object=n,t;function s(r){const o=[];for(const a in r){const m=r[a];delete m.metadata,o.push(m)}return o}}clone(l){return new this.constructor().copy(this,l)}copy(l,e=!0){if(this.name=l.name,this.up.copy(l.up),this.position.copy(l.position),this.rotation.order=l.rotation.order,this.quaternion.copy(l.quaternion),this.scale.copy(l.scale),this.matrix.copy(l.matrix),this.matrixWorld.copy(l.matrixWorld),this.matrixAutoUpdate=l.matrixAutoUpdate,this.matrixWorldNeedsUpdate=l.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=l.matrixWorldAutoUpdate,this.layers.mask=l.layers.mask,this.visible=l.visible,this.castShadow=l.castShadow,this.receiveShadow=l.receiveShadow,this.frustumCulled=l.frustumCulled,this.renderOrder=l.renderOrder,this.userData=JSON.parse(JSON.stringify(l.userData)),e===!0)for(let t=0;t<l.children.length;t++){const n=l.children[t];this.add(n.clone())}return this}}Z4.DefaultUp=new y(0,1,0);Z4.DefaultMatrixAutoUpdate=!0;Z4.DefaultMatrixWorldAutoUpdate=!0;const l1=new y,q1=new y,z5=new y,f1=new y,p3=new y,x3=new y,H8=new y,k5=new y,Y5=new y,H5=new y;class B1{constructor(l=new y,e=new y,t=new y){this.a=l,this.b=e,this.c=t}static getNormal(l,e,t,n){n.subVectors(t,e),l1.subVectors(l,e),n.cross(l1);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(l,e,t,n,i){l1.subVectors(n,e),q1.subVectors(t,e),z5.subVectors(l,e);const s=l1.dot(l1),r=l1.dot(q1),o=l1.dot(z5),a=q1.dot(q1),m=q1.dot(z5),c=s*a-r*r;if(c===0)return i.set(-2,-1,-1);const h=1/c,d=(a*o-r*m)*h,f=(s*m-r*o)*h;return i.set(1-d-f,f,d)}static containsPoint(l,e,t,n){return this.getBarycoord(l,e,t,n,f1),f1.x>=0&&f1.y>=0&&f1.x+f1.y<=1}static getUV(l,e,t,n,i,s,r,o){return this.getBarycoord(l,e,t,n,f1),o.set(0,0),o.addScaledVector(i,f1.x),o.addScaledVector(s,f1.y),o.addScaledVector(r,f1.z),o}static isFrontFacing(l,e,t,n){return l1.subVectors(t,e),q1.subVectors(l,e),l1.cross(q1).dot(n)<0}set(l,e,t){return this.a.copy(l),this.b.copy(e),this.c.copy(t),this}setFromPointsAndIndices(l,e,t,n){return this.a.copy(l[e]),this.b.copy(l[t]),this.c.copy(l[n]),this}setFromAttributeAndIndices(l,e,t,n){return this.a.fromBufferAttribute(l,e),this.b.fromBufferAttribute(l,t),this.c.fromBufferAttribute(l,n),this}clone(){return new this.constructor().copy(this)}copy(l){return this.a.copy(l.a),this.b.copy(l.b),this.c.copy(l.c),this}getArea(){return l1.subVectors(this.c,this.b),q1.subVectors(this.a,this.b),l1.cross(q1).length()*.5}getMidpoint(l){return l.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(l){return B1.getNormal(this.a,this.b,this.c,l)}getPlane(l){return l.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(l,e){return B1.getBarycoord(l,this.a,this.b,this.c,e)}getUV(l,e,t,n,i){return B1.getUV(l,this.a,this.b,this.c,e,t,n,i)}containsPoint(l){return B1.containsPoint(l,this.a,this.b,this.c)}isFrontFacing(l){return B1.isFrontFacing(this.a,this.b,this.c,l)}intersectsBox(l){return l.intersectsTriangle(this)}closestPointToPoint(l,e){const t=this.a,n=this.b,i=this.c;let s,r;p3.subVectors(n,t),x3.subVectors(i,t),k5.subVectors(l,t);const o=p3.dot(k5),a=x3.dot(k5);if(o<=0&&a<=0)return e.copy(t);Y5.subVectors(l,n);const m=p3.dot(Y5),c=x3.dot(Y5);if(m>=0&&c<=m)return e.copy(n);const h=o*c-m*a;if(h<=0&&o>=0&&m<=0)return s=o/(o-m),e.copy(t).addScaledVector(p3,s);H5.subVectors(l,i);const d=p3.dot(H5),f=x3.dot(H5);if(f>=0&&d<=f)return e.copy(i);const q=d*a-o*f;if(q<=0&&a>=0&&f<=0)return r=a/(a-f),e.copy(t).addScaledVector(x3,r);const u=m*f-d*c;if(u<=0&&c-m>=0&&d-f>=0)return H8.subVectors(i,n),r=(c-m)/(c-m+(d-f)),e.copy(n).addScaledVector(H8,r);const g=1/(u+q+h);return s=q*g,r=h*g,e.copy(t).addScaledVector(p3,s).addScaledVector(x3,r)}equals(l){return l.a.equals(this.a)&&l.b.equals(this.b)&&l.c.equals(this.c)}}let Te=0;class o1 extends P3{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Te++}),this.uuid=Jl(),this.name="",this.type="Material",this.blending=e3,this.side=a1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=e0,this.blendDst=t0,this.blendEquation=v3,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=q7,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ae,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=T5,this.stencilZFail=T5,this.stencilZPass=T5,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(l){this._alphaTest>0!=l>0&&this.version++,this._alphaTest=l}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(l){if(l!==void 0)for(const e in l){const t=l[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}}toJSON(l){const e=l===void 0||typeof l=="string";e&&(l={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(l).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(l).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(l).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(l).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(l).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(l).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(l).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(l).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(l).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(l).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(l).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(l).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(l).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(l).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(l).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(l).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(l).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(l).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(l).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(l).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(l).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(l).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(l).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==e3&&(t.blending=this.blending),this.side!==a1&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){const s=[];for(const r in i){const o=i[r];delete o.metadata,s.push(o)}return s}if(e){const i=n(l.textures),s=n(l.images);i.length>0&&(t.textures=i),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(l){this.name=l.name,this.blending=l.blending,this.side=l.side,this.vertexColors=l.vertexColors,this.opacity=l.opacity,this.transparent=l.transparent,this.blendSrc=l.blendSrc,this.blendDst=l.blendDst,this.blendEquation=l.blendEquation,this.blendSrcAlpha=l.blendSrcAlpha,this.blendDstAlpha=l.blendDstAlpha,this.blendEquationAlpha=l.blendEquationAlpha,this.depthFunc=l.depthFunc,this.depthTest=l.depthTest,this.depthWrite=l.depthWrite,this.stencilWriteMask=l.stencilWriteMask,this.stencilFunc=l.stencilFunc,this.stencilRef=l.stencilRef,this.stencilFuncMask=l.stencilFuncMask,this.stencilFail=l.stencilFail,this.stencilZFail=l.stencilZFail,this.stencilZPass=l.stencilZPass,this.stencilWrite=l.stencilWrite;const e=l.clippingPlanes;let t=null;if(e!==null){const n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=l.clipIntersection,this.clipShadows=l.clipShadows,this.shadowSide=l.shadowSide,this.colorWrite=l.colorWrite,this.precision=l.precision,this.polygonOffset=l.polygonOffset,this.polygonOffsetFactor=l.polygonOffsetFactor,this.polygonOffsetUnits=l.polygonOffsetUnits,this.dithering=l.dithering,this.alphaTest=l.alphaTest,this.alphaToCoverage=l.alphaToCoverage,this.premultipliedAlpha=l.premultipliedAlpha,this.visible=l.visible,this.toneMapped=l.toneMapped,this.userData=JSON.parse(JSON.stringify(l.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(l){l===!0&&this.version++}}class Cl extends o1{constructor(l){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new g4(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=n0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.color.copy(l.color),this.map=l.map,this.lightMap=l.lightMap,this.lightMapIntensity=l.lightMapIntensity,this.aoMap=l.aoMap,this.aoMapIntensity=l.aoMapIntensity,this.specularMap=l.specularMap,this.alphaMap=l.alphaMap,this.envMap=l.envMap,this.combine=l.combine,this.reflectivity=l.reflectivity,this.refractionRatio=l.refractionRatio,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.wireframeLinecap=l.wireframeLinecap,this.wireframeLinejoin=l.wireframeLinejoin,this.fog=l.fog,this}}const Al=new y,N2=new n4;class Bl{constructor(l,e,t){if(Array.isArray(l))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=l,this.itemSize=e,this.count=l!==void 0?l.length/e:0,this.normalized=t===!0,this.usage=B7,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(l){l===!0&&this.version++}setUsage(l){return this.usage=l,this}copy(l){return this.name=l.name,this.array=new l.array.constructor(l.array),this.itemSize=l.itemSize,this.count=l.count,this.normalized=l.normalized,this.usage=l.usage,this}copyAt(l,e,t){l*=this.itemSize,t*=e.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[l+n]=e.array[t+n];return this}copyArray(l){return this.array.set(l),this}applyMatrix3(l){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)N2.fromBufferAttribute(this,e),N2.applyMatrix3(l),this.setXY(e,N2.x,N2.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)Al.fromBufferAttribute(this,e),Al.applyMatrix3(l),this.setXYZ(e,Al.x,Al.y,Al.z);return this}applyMatrix4(l){for(let e=0,t=this.count;e<t;e++)Al.fromBufferAttribute(this,e),Al.applyMatrix4(l),this.setXYZ(e,Al.x,Al.y,Al.z);return this}applyNormalMatrix(l){for(let e=0,t=this.count;e<t;e++)Al.fromBufferAttribute(this,e),Al.applyNormalMatrix(l),this.setXYZ(e,Al.x,Al.y,Al.z);return this}transformDirection(l){for(let e=0,t=this.count;e<t;e++)Al.fromBufferAttribute(this,e),Al.transformDirection(l),this.setXYZ(e,Al.x,Al.y,Al.z);return this}set(l,e=0){return this.array.set(l,e),this}getX(l){let e=this.array[l*this.itemSize];return this.normalized&&(e=w1(e,this.array)),e}setX(l,e){return this.normalized&&(e=j4(e,this.array)),this.array[l*this.itemSize]=e,this}getY(l){let e=this.array[l*this.itemSize+1];return this.normalized&&(e=w1(e,this.array)),e}setY(l,e){return this.normalized&&(e=j4(e,this.array)),this.array[l*this.itemSize+1]=e,this}getZ(l){let e=this.array[l*this.itemSize+2];return this.normalized&&(e=w1(e,this.array)),e}setZ(l,e){return this.normalized&&(e=j4(e,this.array)),this.array[l*this.itemSize+2]=e,this}getW(l){let e=this.array[l*this.itemSize+3];return this.normalized&&(e=w1(e,this.array)),e}setW(l,e){return this.normalized&&(e=j4(e,this.array)),this.array[l*this.itemSize+3]=e,this}setXY(l,e,t){return l*=this.itemSize,this.normalized&&(e=j4(e,this.array),t=j4(t,this.array)),this.array[l+0]=e,this.array[l+1]=t,this}setXYZ(l,e,t,n){return l*=this.itemSize,this.normalized&&(e=j4(e,this.array),t=j4(t,this.array),n=j4(n,this.array)),this.array[l+0]=e,this.array[l+1]=t,this.array[l+2]=n,this}setXYZW(l,e,t,n,i){return l*=this.itemSize,this.normalized&&(e=j4(e,this.array),t=j4(t,this.array),n=j4(n,this.array),i=j4(i,this.array)),this.array[l+0]=e,this.array[l+1]=t,this.array[l+2]=n,this.array[l+3]=i,this}onUpload(l){return this.onUploadCallback=l,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const l={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(l.name=this.name),this.usage!==B7&&(l.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(l.updateRange=this.updateRange),l}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class f0 extends Bl{constructor(l,e,t){super(new Uint16Array(l),e,t)}}class g0 extends Bl{constructor(l,e,t){super(new Uint32Array(l),e,t)}}class J4 extends Bl{constructor(l,e,t){super(new Float32Array(l),e,t)}}let be=0;const Yl=new R4,K5=new Z4,B3=new y,Ul=new z3,$3=new z3,ul=new y;class fl extends P3{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:be++}),this.uuid=Jl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(l){return Array.isArray(l)?this.index=new(m0(l)?g0:f0)(l,1):this.index=l,this}getAttribute(l){return this.attributes[l]}setAttribute(l,e){return this.attributes[l]=e,this}deleteAttribute(l){return delete this.attributes[l],this}hasAttribute(l){return this.attributes[l]!==void 0}addGroup(l,e,t=0){this.groups.push({start:l,count:e,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(l,e){this.drawRange.start=l,this.drawRange.count=e}applyMatrix4(l){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(l),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const i=new Wl().getNormalMatrix(l);t.applyNormalMatrix(i),t.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(l),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(l){return Yl.makeRotationFromQuaternion(l),this.applyMatrix4(Yl),this}rotateX(l){return Yl.makeRotationX(l),this.applyMatrix4(Yl),this}rotateY(l){return Yl.makeRotationY(l),this.applyMatrix4(Yl),this}rotateZ(l){return Yl.makeRotationZ(l),this.applyMatrix4(Yl),this}translate(l,e,t){return Yl.makeTranslation(l,e,t),this.applyMatrix4(Yl),this}scale(l,e,t){return Yl.makeScale(l,e,t),this.applyMatrix4(Yl),this}lookAt(l){return K5.lookAt(l),K5.updateMatrix(),this.applyMatrix4(K5.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(B3).negate(),this.translate(B3.x,B3.y,B3.z),this}setFromPoints(l){const e=[];for(let t=0,n=l.length;t<n;t++){const i=l[t];e.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new J4(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new z3);const l=this.attributes.position,e=this.morphAttributes.position;if(l&&l.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(l!==void 0){if(this.boundingBox.setFromBufferAttribute(l),e)for(let t=0,n=e.length;t<n;t++){const i=e[t];Ul.setFromBufferAttribute(i),this.morphTargetsRelative?(ul.addVectors(this.boundingBox.min,Ul.min),this.boundingBox.expandByPoint(ul),ul.addVectors(this.boundingBox.max,Ul.max),this.boundingBox.expandByPoint(ul)):(this.boundingBox.expandByPoint(Ul.min),this.boundingBox.expandByPoint(Ul.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new k3);const l=this.attributes.position,e=this.morphAttributes.position;if(l&&l.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new y,1/0);return}if(l){const t=this.boundingSphere.center;if(Ul.setFromBufferAttribute(l),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];$3.setFromBufferAttribute(r),this.morphTargetsRelative?(ul.addVectors(Ul.min,$3.min),Ul.expandByPoint(ul),ul.addVectors(Ul.max,$3.max),Ul.expandByPoint(ul)):(Ul.expandByPoint($3.min),Ul.expandByPoint($3.max))}Ul.getCenter(t);let n=0;for(let i=0,s=l.count;i<s;i++)ul.fromBufferAttribute(l,i),n=Math.max(n,t.distanceToSquared(ul));if(e)for(let i=0,s=e.length;i<s;i++){const r=e[i],o=this.morphTargetsRelative;for(let a=0,m=r.count;a<m;a++)ul.fromBufferAttribute(r,a),o&&(B3.fromBufferAttribute(l,a),ul.add(B3)),n=Math.max(n,t.distanceToSquared(ul))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const l=this.index,e=this.attributes;if(l===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=l.array,n=e.position.array,i=e.normal.array,s=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bl(new Float32Array(4*r),4));const o=this.getAttribute("tangent").array,a=[],m=[];for(let T=0;T<r;T++)a[T]=new y,m[T]=new y;const c=new y,h=new y,d=new y,f=new n4,q=new n4,u=new n4,g=new y,w=new y;function x(T,z,Z){c.fromArray(n,T*3),h.fromArray(n,z*3),d.fromArray(n,Z*3),f.fromArray(s,T*2),q.fromArray(s,z*2),u.fromArray(s,Z*2),h.sub(c),d.sub(c),q.sub(f),u.sub(f);const L=1/(q.x*u.y-u.x*q.y);!isFinite(L)||(g.copy(h).multiplyScalar(u.y).addScaledVector(d,-q.y).multiplyScalar(L),w.copy(d).multiplyScalar(q.x).addScaledVector(h,-u.x).multiplyScalar(L),a[T].add(g),a[z].add(g),a[Z].add(g),m[T].add(w),m[z].add(w),m[Z].add(w))}let p=this.groups;p.length===0&&(p=[{start:0,count:t.length}]);for(let T=0,z=p.length;T<z;++T){const Z=p[T],L=Z.start,S=Z.count;for(let P=L,W=L+S;P<W;P+=3)x(t[P+0],t[P+1],t[P+2])}const E=new y,v=new y,I=new y,B=new y;function Q(T){I.fromArray(i,T*3),B.copy(I);const z=a[T];E.copy(z),E.sub(I.multiplyScalar(I.dot(z))).normalize(),v.crossVectors(B,z);const L=v.dot(m[T])<0?-1:1;o[T*4]=E.x,o[T*4+1]=E.y,o[T*4+2]=E.z,o[T*4+3]=L}for(let T=0,z=p.length;T<z;++T){const Z=p[T],L=Z.start,S=Z.count;for(let P=L,W=L+S;P<W;P+=3)Q(t[P+0]),Q(t[P+1]),Q(t[P+2])}}computeVertexNormals(){const l=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new Bl(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,d=t.count;h<d;h++)t.setXYZ(h,0,0,0);const n=new y,i=new y,s=new y,r=new y,o=new y,a=new y,m=new y,c=new y;if(l)for(let h=0,d=l.count;h<d;h+=3){const f=l.getX(h+0),q=l.getX(h+1),u=l.getX(h+2);n.fromBufferAttribute(e,f),i.fromBufferAttribute(e,q),s.fromBufferAttribute(e,u),m.subVectors(s,i),c.subVectors(n,i),m.cross(c),r.fromBufferAttribute(t,f),o.fromBufferAttribute(t,q),a.fromBufferAttribute(t,u),r.add(m),o.add(m),a.add(m),t.setXYZ(f,r.x,r.y,r.z),t.setXYZ(q,o.x,o.y,o.z),t.setXYZ(u,a.x,a.y,a.z)}else for(let h=0,d=e.count;h<d;h+=3)n.fromBufferAttribute(e,h+0),i.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),m.subVectors(s,i),c.subVectors(n,i),m.cross(c),t.setXYZ(h+0,m.x,m.y,m.z),t.setXYZ(h+1,m.x,m.y,m.z),t.setXYZ(h+2,m.x,m.y,m.z);this.normalizeNormals(),t.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const l=this.attributes.normal;for(let e=0,t=l.count;e<t;e++)ul.fromBufferAttribute(l,e),ul.normalize(),l.setXYZ(e,ul.x,ul.y,ul.z)}toNonIndexed(){function l(r,o){const a=r.array,m=r.itemSize,c=r.normalized,h=new a.constructor(o.length*m);let d=0,f=0;for(let q=0,u=o.length;q<u;q++){r.isInterleavedBufferAttribute?d=o[q]*r.data.stride+r.offset:d=o[q]*m;for(let g=0;g<m;g++)h[f++]=a[d++]}return new Bl(h,m,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fl,t=this.index.array,n=this.attributes;for(const r in n){const o=n[r],a=l(o,t);e.setAttribute(r,a)}const i=this.morphAttributes;for(const r in i){const o=[],a=i[r];for(let m=0,c=a.length;m<c;m++){const h=a[m],d=l(h,t);o.push(d)}e.morphAttributes[r]=o}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let r=0,o=s.length;r<o;r++){const a=s[r];e.addGroup(a.start,a.count,a.materialIndex)}return e}toJSON(){const l={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),Object.keys(this.userData).length>0&&(l.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const a in o)o[a]!==void 0&&(l[a]=o[a]);return l}l.data={attributes:{}};const e=this.index;e!==null&&(l.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const o in t){const a=t[o];l.data.attributes[o]=a.toJSON(l.data)}const n={};let i=!1;for(const o in this.morphAttributes){const a=this.morphAttributes[o],m=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];m.push(d.toJSON(l.data))}m.length>0&&(n[o]=m,i=!0)}i&&(l.data.morphAttributes=n,l.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(l.data.groups=JSON.parse(JSON.stringify(s)));const r=this.boundingSphere;return r!==null&&(l.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),l}clone(){return new this.constructor().copy(this)}copy(l){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=l.name;const t=l.index;t!==null&&this.setIndex(t.clone(e));const n=l.attributes;for(const a in n){const m=n[a];this.setAttribute(a,m.clone(e))}const i=l.morphAttributes;for(const a in i){const m=[],c=i[a];for(let h=0,d=c.length;h<d;h++)m.push(c[h].clone(e));this.morphAttributes[a]=m}this.morphTargetsRelative=l.morphTargetsRelative;const s=l.groups;for(let a=0,m=s.length;a<m;a++){const c=s[a];this.addGroup(c.start,c.count,c.materialIndex)}const r=l.boundingBox;r!==null&&(this.boundingBox=r.clone());const o=l.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=l.drawRange.start,this.drawRange.count=l.drawRange.count,this.userData=l.userData,l.parameters!==void 0&&(this.parameters=Object.assign({},l.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const K8=new R4,w3=new U7,O5=new k3,T1=new y,b1=new y,S1=new y,V5=new y,j5=new y,W5=new y,R2=new y,L2=new y,G2=new y,P2=new n4,z2=new n4,k2=new n4,J5=new y,Y2=new y;class I4 extends Z4{constructor(l=new fl,e=new Cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=l,this.material=e,this.updateMorphTargets()}copy(l,e){return super.copy(l,e),l.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=l.morphTargetInfluences.slice()),l.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},l.morphTargetDictionary)),this.material=l.material,this.geometry=l.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const r=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}raycast(l,e){const t=this.geometry,n=this.material,i=this.matrixWorld;if(n===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),O5.copy(t.boundingSphere),O5.applyMatrix4(i),l.ray.intersectsSphere(O5)===!1)||(K8.copy(i).invert(),w3.copy(l.ray).applyMatrix4(K8),t.boundingBox!==null&&w3.intersectsBox(t.boundingBox)===!1))return;let s;const r=t.index,o=t.attributes.position,a=t.morphAttributes.position,m=t.morphTargetsRelative,c=t.attributes.uv,h=t.attributes.uv2,d=t.groups,f=t.drawRange;if(r!==null)if(Array.isArray(n))for(let q=0,u=d.length;q<u;q++){const g=d[q],w=n[g.materialIndex],x=Math.max(g.start,f.start),p=Math.min(r.count,Math.min(g.start+g.count,f.start+f.count));for(let E=x,v=p;E<v;E+=3){const I=r.getX(E),B=r.getX(E+1),Q=r.getX(E+2);s=H2(this,w,l,w3,o,a,m,c,h,I,B,Q),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const q=Math.max(0,f.start),u=Math.min(r.count,f.start+f.count);for(let g=q,w=u;g<w;g+=3){const x=r.getX(g),p=r.getX(g+1),E=r.getX(g+2);s=H2(this,n,l,w3,o,a,m,c,h,x,p,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(n))for(let q=0,u=d.length;q<u;q++){const g=d[q],w=n[g.materialIndex],x=Math.max(g.start,f.start),p=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let E=x,v=p;E<v;E+=3){const I=E,B=E+1,Q=E+2;s=H2(this,w,l,w3,o,a,m,c,h,I,B,Q),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const q=Math.max(0,f.start),u=Math.min(o.count,f.start+f.count);for(let g=q,w=u;g<w;g+=3){const x=g,p=g+1,E=g+2;s=H2(this,n,l,w3,o,a,m,c,h,x,p,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Se(A,l,e,t,n,i,s,r){let o;if(l.side===xl?o=t.intersectTriangle(s,i,n,!0,r):o=t.intersectTriangle(n,i,s,l.side!==bl,r),o===null)return null;Y2.copy(r),Y2.applyMatrix4(A.matrixWorld);const a=e.ray.origin.distanceTo(Y2);return a<e.near||a>e.far?null:{distance:a,point:Y2.clone(),object:A}}function H2(A,l,e,t,n,i,s,r,o,a,m,c){T1.fromBufferAttribute(n,a),b1.fromBufferAttribute(n,m),S1.fromBufferAttribute(n,c);const h=A.morphTargetInfluences;if(i&&h){R2.set(0,0,0),L2.set(0,0,0),G2.set(0,0,0);for(let f=0,q=i.length;f<q;f++){const u=h[f],g=i[f];u!==0&&(V5.fromBufferAttribute(g,a),j5.fromBufferAttribute(g,m),W5.fromBufferAttribute(g,c),s?(R2.addScaledVector(V5,u),L2.addScaledVector(j5,u),G2.addScaledVector(W5,u)):(R2.addScaledVector(V5.sub(T1),u),L2.addScaledVector(j5.sub(b1),u),G2.addScaledVector(W5.sub(S1),u)))}T1.add(R2),b1.add(L2),S1.add(G2)}A.isSkinnedMesh&&(A.boneTransform(a,T1),A.boneTransform(m,b1),A.boneTransform(c,S1));const d=Se(A,l,e,t,T1,b1,S1,J5);if(d){r&&(P2.fromBufferAttribute(r,a),z2.fromBufferAttribute(r,m),k2.fromBufferAttribute(r,c),d.uv=B1.getUV(J5,T1,b1,S1,P2,z2,k2,new n4)),o&&(P2.fromBufferAttribute(o,a),z2.fromBufferAttribute(o,m),k2.fromBufferAttribute(o,c),d.uv2=B1.getUV(J5,T1,b1,S1,P2,z2,k2,new n4));const f={a,b:m,c,normal:new y,materialIndex:0};B1.getNormal(T1,b1,S1,f.normal),d.face=f}return d}class Ql extends fl{constructor(l=1,e=1,t=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:l,height:e,depth:t,widthSegments:n,heightSegments:i,depthSegments:s};const r=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const o=[],a=[],m=[],c=[];let h=0,d=0;f("z","y","x",-1,-1,t,e,l,s,i,0),f("z","y","x",1,-1,t,e,-l,s,i,1),f("x","z","y",1,1,l,t,e,n,s,2),f("x","z","y",1,-1,l,t,-e,n,s,3),f("x","y","z",1,-1,l,e,t,n,i,4),f("x","y","z",-1,-1,l,e,-t,n,i,5),this.setIndex(o),this.setAttribute("position",new J4(a,3)),this.setAttribute("normal",new J4(m,3)),this.setAttribute("uv",new J4(c,2));function f(q,u,g,w,x,p,E,v,I,B,Q){const T=p/I,z=E/B,Z=p/2,L=E/2,S=v/2,P=I+1,W=B+1;let $=0,K=0;const D=new y;for(let R=0;R<W;R++){const t4=R*z-L;for(let X=0;X<P;X++){const A4=X*T-Z;D[q]=A4*w,D[u]=t4*x,D[g]=S,a.push(D.x,D.y,D.z),D[q]=0,D[u]=0,D[g]=v>0?1:-1,m.push(D.x,D.y,D.z),c.push(X/I),c.push(1-R/B),$+=1}}for(let R=0;R<B;R++)for(let t4=0;t4<I;t4++){const X=h+t4+P*R,A4=h+t4+P*(R+1),u4=h+(t4+1)+P*(R+1),_4=h+(t4+1)+P*R;o.push(X,A4,_4),o.push(A4,u4,_4),K+=6}r.addGroup(d,K,Q),d+=K,h+=$}}static fromJSON(l){return new Ql(l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments)}}function R3(A){const l={};for(const e in A){l[e]={};for(const t in A[e]){const n=A[e][t];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?l[e][t]=n.clone():Array.isArray(n)?l[e][t]=n.slice():l[e][t]=n}}return l}function yl(A){const l={};for(let e=0;e<A.length;e++){const t=R3(A[e]);for(const n in t)l[n]=t[n]}return l}function Fe(A){const l=[];for(let e=0;e<A.length;e++)l.push(A[e].clone());return l}const m2={clone:R3,merge:yl};var De=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ue=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $4 extends o1{constructor(l){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=De,this.fragmentShader=Ue,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,l!==void 0&&this.setValues(l)}copy(l){return super.copy(l),this.fragmentShader=l.fragmentShader,this.vertexShader=l.vertexShader,this.uniforms=R3(l.uniforms),this.uniformsGroups=Fe(l.uniformsGroups),this.defines=Object.assign({},l.defines),this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.fog=l.fog,this.lights=l.lights,this.clipping=l.clipping,this.extensions=Object.assign({},l.extensions),this.glslVersion=l.glslVersion,this}toJSON(l){const e=super.toJSON(l);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?e.uniforms[n]={type:"t",value:s.toJSON(l).uuid}:s&&s.isColor?e.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[n]={type:"m4",value:s.toArray()}:e.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const t={};for(const n in this.extensions)this.extensions[n]===!0&&(t[n]=!0);return Object.keys(t).length>0&&(e.extensions=t),e}}class p0 extends Z4{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new R4,this.projectionMatrix=new R4,this.projectionMatrixInverse=new R4}copy(l,e){return super.copy(l,e),this.matrixWorldInverse.copy(l.matrixWorldInverse),this.projectionMatrix.copy(l.projectionMatrix),this.projectionMatrixInverse.copy(l.projectionMatrixInverse),this}getWorldDirection(l){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return l.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(l){super.updateMatrixWorld(l),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(l,e){super.updateWorldMatrix(l,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ql extends p0{constructor(l=50,e=1,t=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=l,this.zoom=1,this.near=t,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(l,e){return super.copy(l,e),this.fov=l.fov,this.zoom=l.zoom,this.near=l.near,this.far=l.far,this.focus=l.focus,this.aspect=l.aspect,this.view=l.view===null?null:Object.assign({},l.view),this.filmGauge=l.filmGauge,this.filmOffset=l.filmOffset,this}setFocalLength(l){const e=.5*this.getFilmHeight()/l;this.fov=q2*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const l=Math.tan(o2*.5*this.fov);return .5*this.getFilmHeight()/l}getEffectiveFOV(){return q2*2*Math.atan(Math.tan(o2*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(l,e,t,n,i,s){this.aspect=l/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=l,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const l=this.near;let e=l*Math.tan(o2*.5*this.fov)/this.zoom,t=2*e,n=this.aspect*t,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,a=s.fullHeight;i+=s.offsetX*n/o,e-=s.offsetY*t/a,n*=s.width/o,t*=s.height/a}const r=this.filmOffset;r!==0&&(i+=l*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,e,e-t,l,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(l){const e=super.toJSON(l);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const M3=90,E3=1;class Ne extends Z4{constructor(l,e,t){super(),this.type="CubeCamera",this.renderTarget=t;const n=new ql(M3,E3,l,e);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new y(1,0,0)),this.add(n);const i=new ql(M3,E3,l,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new y(-1,0,0)),this.add(i);const s=new ql(M3,E3,l,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new y(0,1,0)),this.add(s);const r=new ql(M3,E3,l,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new y(0,-1,0)),this.add(r);const o=new ql(M3,E3,l,e);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new y(0,0,1)),this.add(o);const a=new ql(M3,E3,l,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new y(0,0,-1)),this.add(a)}update(l,e){this.parent===null&&this.updateMatrixWorld();const t=this.renderTarget,[n,i,s,r,o,a]=this.children,m=l.getRenderTarget(),c=l.toneMapping,h=l.xr.enabled;l.toneMapping=Ll,l.xr.enabled=!1;const d=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,l.setRenderTarget(t,0),l.render(e,n),l.setRenderTarget(t,1),l.render(e,i),l.setRenderTarget(t,2),l.render(e,s),l.setRenderTarget(t,3),l.render(e,r),l.setRenderTarget(t,4),l.render(e,o),t.texture.generateMipmaps=d,l.setRenderTarget(t,5),l.render(e,a),l.setRenderTarget(m),l.toneMapping=c,l.xr.enabled=h,t.texture.needsPMREMUpdate=!0}}class x0 extends nl{constructor(l,e,t,n,i,s,r,o,a,m){l=l!==void 0?l:[],e=e!==void 0?e:F3,super(l,e,t,n,i,s,r,o,a,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(l){this.image=l}}class Re extends wl{constructor(l=1,e={}){super(l,l,e),this.isWebGLCubeRenderTarget=!0;const t={width:l,height:l,depth:1},n=[t,t,t,t,t,t];this.texture=new x0(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Il}fromEquirectangularTexture(l,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ql(5,5,5),i=new $4({name:"CubemapFromEquirect",uniforms:R3(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:xl,blending:R1});i.uniforms.tEquirect.value=e;const s=new I4(n,i),r=e.minFilter;return e.minFilter===G3&&(e.minFilter=Il),new Ne(1,10,this).update(l,s),e.minFilter=r,s.geometry.dispose(),s.material.dispose(),this}clear(l,e,t,n){const i=l.getRenderTarget();for(let s=0;s<6;s++)l.setRenderTarget(this,s),l.clear(e,t,n);l.setRenderTarget(i)}}const Z5=new y,Le=new y,Ge=new Wl;class W1{constructor(l=new y(1,0,0),e=0){this.isPlane=!0,this.normal=l,this.constant=e}set(l,e){return this.normal.copy(l),this.constant=e,this}setComponents(l,e,t,n){return this.normal.set(l,e,t),this.constant=n,this}setFromNormalAndCoplanarPoint(l,e){return this.normal.copy(l),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(l,e,t){const n=Z5.subVectors(t,e).cross(Le.subVectors(l,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,l),this}copy(l){return this.normal.copy(l.normal),this.constant=l.constant,this}normalize(){const l=1/this.normal.length();return this.normal.multiplyScalar(l),this.constant*=l,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(l){return this.normal.dot(l)+this.constant}distanceToSphere(l){return this.distanceToPoint(l.center)-l.radius}projectPoint(l,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(l)).add(l)}intersectLine(l,e){const t=l.delta(Z5),n=this.normal.dot(t);if(n===0)return this.distanceToPoint(l.start)===0?e.copy(l.start):null;const i=-(l.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:e.copy(t).multiplyScalar(i).add(l.start)}intersectsLine(l){const e=this.distanceToPoint(l.start),t=this.distanceToPoint(l.end);return e<0&&t>0||t<0&&e>0}intersectsBox(l){return l.intersectsPlane(this)}intersectsSphere(l){return l.intersectsPlane(this)}coplanarPoint(l){return l.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(l,e){const t=e||Ge.getNormalMatrix(l),n=this.coplanarPoint(Z5).applyMatrix4(l),i=this.normal.applyMatrix3(t).normalize();return this.constant=-n.dot(i),this}translate(l){return this.constant-=l.dot(this.normal),this}equals(l){return l.normal.equals(this.normal)&&l.constant===this.constant}clone(){return new this.constructor().copy(this)}}const C3=new k3,K2=new y;class N7{constructor(l=new W1,e=new W1,t=new W1,n=new W1,i=new W1,s=new W1){this.planes=[l,e,t,n,i,s]}set(l,e,t,n,i,s){const r=this.planes;return r[0].copy(l),r[1].copy(e),r[2].copy(t),r[3].copy(n),r[4].copy(i),r[5].copy(s),this}copy(l){const e=this.planes;for(let t=0;t<6;t++)e[t].copy(l.planes[t]);return this}setFromProjectionMatrix(l){const e=this.planes,t=l.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],m=t[6],c=t[7],h=t[8],d=t[9],f=t[10],q=t[11],u=t[12],g=t[13],w=t[14],x=t[15];return e[0].setComponents(r-n,c-o,q-h,x-u).normalize(),e[1].setComponents(r+n,c+o,q+h,x+u).normalize(),e[2].setComponents(r+i,c+a,q+d,x+g).normalize(),e[3].setComponents(r-i,c-a,q-d,x-g).normalize(),e[4].setComponents(r-s,c-m,q-f,x-w).normalize(),e[5].setComponents(r+s,c+m,q+f,x+w).normalize(),this}intersectsObject(l){const e=l.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),C3.copy(e.boundingSphere).applyMatrix4(l.matrixWorld),this.intersectsSphere(C3)}intersectsSprite(l){return C3.center.set(0,0,0),C3.radius=.7071067811865476,C3.applyMatrix4(l.matrixWorld),this.intersectsSphere(C3)}intersectsSphere(l){const e=this.planes,t=l.center,n=-l.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<n)return!1;return!0}intersectsBox(l){const e=this.planes;for(let t=0;t<6;t++){const n=e[t];if(K2.x=n.normal.x>0?l.max.x:l.min.x,K2.y=n.normal.y>0?l.max.y:l.min.y,K2.z=n.normal.z>0?l.max.z:l.min.z,n.distanceToPoint(K2)<0)return!1}return!0}containsPoint(l){const e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(l)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function B0(){let A=null,l=!1,e=null,t=null;function n(i,s){e(i,s),t=A.requestAnimationFrame(n)}return{start:function(){l!==!0&&e!==null&&(t=A.requestAnimationFrame(n),l=!0)},stop:function(){A.cancelAnimationFrame(t),l=!1},setAnimationLoop:function(i){e=i},setContext:function(i){A=i}}}function Pe(A,l){const e=l.isWebGL2,t=new WeakMap;function n(a,m){const c=a.array,h=a.usage,d=A.createBuffer();A.bindBuffer(m,d),A.bufferData(m,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=5126;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)if(e)f=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else f=5123;else if(c instanceof Int16Array)f=5122;else if(c instanceof Uint32Array)f=5125;else if(c instanceof Int32Array)f=5124;else if(c instanceof Int8Array)f=5120;else if(c instanceof Uint8Array)f=5121;else if(c instanceof Uint8ClampedArray)f=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version}}function i(a,m,c){const h=m.array,d=m.updateRange;A.bindBuffer(c,a),d.count===-1?A.bufferSubData(c,0,h):(e?A.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):A.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const m=t.get(a);m&&(A.deleteBuffer(m.buffer),t.delete(a))}function o(a,m){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c===void 0?t.set(a,n(a,m)):c.version<a.version&&(i(c.buffer,a,m),c.version=a.version)}return{get:s,remove:r,update:o}}class f5 extends fl{constructor(l=1,e=1,t=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:l,height:e,widthSegments:t,heightSegments:n};const i=l/2,s=e/2,r=Math.floor(t),o=Math.floor(n),a=r+1,m=o+1,c=l/r,h=e/o,d=[],f=[],q=[],u=[];for(let g=0;g<m;g++){const w=g*h-s;for(let x=0;x<a;x++){const p=x*c-i;f.push(p,-w,0),q.push(0,0,1),u.push(x/r),u.push(1-g/o)}}for(let g=0;g<o;g++)for(let w=0;w<r;w++){const x=w+a*g,p=w+a*(g+1),E=w+1+a*(g+1),v=w+1+a*g;d.push(x,p,v),d.push(p,E,v)}this.setIndex(d),this.setAttribute("position",new J4(f,3)),this.setAttribute("normal",new J4(q,3)),this.setAttribute("uv",new J4(u,2))}static fromJSON(l){return new f5(l.width,l.height,l.widthSegments,l.heightSegments)}}var ze=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ke=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ye=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,He=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ke=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oe=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ve="vec3 transformed = vec3( position );",je=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,We=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Je=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Ze=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xe=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,$e=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lt=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,et=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tt=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nt=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,it=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,st=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,At=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,rt=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ot=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,at=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mt=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ct=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ht=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ut="gl_FragColor = linearToOutputTexel( gl_FragColor );",dt=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qt=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ft=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gt=`#ifdef USE_ENVMAP
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
#endif`,pt=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xt=`#ifdef USE_ENVMAP
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
#endif`,Bt=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wt=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mt=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Et=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ct=`#ifdef USE_GRADIENTMAP
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
}`,Qt=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vt=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_t=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yt=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,It=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Tt=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bt=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,St=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Ft=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dt=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ut=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Nt=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rt=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lt=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gt=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pt=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zt=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kt=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yt=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ht=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kt=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ot=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vt=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jt=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wt=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jt=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zt=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xt=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$t=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ln=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,en=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tn=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nn=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sn=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,An=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rn=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,on=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,an=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,mn=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cn=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hn=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,un=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dn=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qn=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fn=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gn=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pn=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xn=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bn=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wn=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Mn=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,En=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cn=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Qn=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vn=`#ifdef USE_SKINNING
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
#endif`,_n=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yn=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,In=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tn=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bn=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Sn=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Fn=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Dn=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Un=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Nn=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Rn=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ln=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Gn=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pn=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zn=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yn=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kn=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,On=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Vn=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jn=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Wn=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zn=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xn=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$n=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,li=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ei=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ti=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ni=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ii=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,si=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ai=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ri=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oi=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ai=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mi=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ci=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hi=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ui=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,di=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,qi=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fi=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gi=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pi=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xi=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,F4={alphamap_fragment:ze,alphamap_pars_fragment:ke,alphatest_fragment:Ye,alphatest_pars_fragment:He,aomap_fragment:Ke,aomap_pars_fragment:Oe,begin_vertex:Ve,beginnormal_vertex:je,bsdfs:We,iridescence_fragment:Je,bumpmap_pars_fragment:Ze,clipping_planes_fragment:Xe,clipping_planes_pars_fragment:$e,clipping_planes_pars_vertex:lt,clipping_planes_vertex:et,color_fragment:tt,color_pars_fragment:nt,color_pars_vertex:it,color_vertex:st,common:At,cube_uv_reflection_fragment:rt,defaultnormal_vertex:ot,displacementmap_pars_vertex:at,displacementmap_vertex:mt,emissivemap_fragment:ct,emissivemap_pars_fragment:ht,encodings_fragment:ut,encodings_pars_fragment:dt,envmap_fragment:qt,envmap_common_pars_fragment:ft,envmap_pars_fragment:gt,envmap_pars_vertex:pt,envmap_physical_pars_fragment:Tt,envmap_vertex:xt,fog_vertex:Bt,fog_pars_vertex:wt,fog_fragment:Mt,fog_pars_fragment:Et,gradientmap_pars_fragment:Ct,lightmap_fragment:Qt,lightmap_pars_fragment:vt,lights_lambert_fragment:_t,lights_lambert_pars_fragment:yt,lights_pars_begin:It,lights_toon_fragment:bt,lights_toon_pars_fragment:St,lights_phong_fragment:Ft,lights_phong_pars_fragment:Dt,lights_physical_fragment:Ut,lights_physical_pars_fragment:Nt,lights_fragment_begin:Rt,lights_fragment_maps:Lt,lights_fragment_end:Gt,logdepthbuf_fragment:Pt,logdepthbuf_pars_fragment:zt,logdepthbuf_pars_vertex:kt,logdepthbuf_vertex:Yt,map_fragment:Ht,map_pars_fragment:Kt,map_particle_fragment:Ot,map_particle_pars_fragment:Vt,metalnessmap_fragment:jt,metalnessmap_pars_fragment:Wt,morphcolor_vertex:Jt,morphnormal_vertex:Zt,morphtarget_pars_vertex:Xt,morphtarget_vertex:$t,normal_fragment_begin:ln,normal_fragment_maps:en,normal_pars_fragment:tn,normal_pars_vertex:nn,normal_vertex:sn,normalmap_pars_fragment:An,clearcoat_normal_fragment_begin:rn,clearcoat_normal_fragment_maps:on,clearcoat_pars_fragment:an,iridescence_pars_fragment:mn,output_fragment:cn,packing:hn,premultiplied_alpha_fragment:un,project_vertex:dn,dithering_fragment:qn,dithering_pars_fragment:fn,roughnessmap_fragment:gn,roughnessmap_pars_fragment:pn,shadowmap_pars_fragment:xn,shadowmap_pars_vertex:Bn,shadowmap_vertex:wn,shadowmask_pars_fragment:Mn,skinbase_vertex:En,skinning_pars_vertex:Cn,skinning_vertex:Qn,skinnormal_vertex:vn,specularmap_fragment:_n,specularmap_pars_fragment:yn,tonemapping_fragment:In,tonemapping_pars_fragment:Tn,transmission_fragment:bn,transmission_pars_fragment:Sn,uv_pars_fragment:Fn,uv_pars_vertex:Dn,uv_vertex:Un,uv2_pars_fragment:Nn,uv2_pars_vertex:Rn,uv2_vertex:Ln,worldpos_vertex:Gn,background_vert:Pn,background_frag:zn,backgroundCube_vert:kn,backgroundCube_frag:Yn,cube_vert:Hn,cube_frag:Kn,depth_vert:On,depth_frag:Vn,distanceRGBA_vert:jn,distanceRGBA_frag:Wn,equirect_vert:Jn,equirect_frag:Zn,linedashed_vert:Xn,linedashed_frag:$n,meshbasic_vert:li,meshbasic_frag:ei,meshlambert_vert:ti,meshlambert_frag:ni,meshmatcap_vert:ii,meshmatcap_frag:si,meshnormal_vert:Ai,meshnormal_frag:ri,meshphong_vert:oi,meshphong_frag:ai,meshphysical_vert:mi,meshphysical_frag:ci,meshtoon_vert:hi,meshtoon_frag:ui,points_vert:di,points_frag:qi,shadow_vert:fi,shadow_frag:gi,sprite_vert:pi,sprite_frag:xi},r4={common:{diffuse:{value:new g4(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wl},uv2Transform:{value:new Wl},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new n4(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new g4(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new g4(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wl}},sprite:{diffuse:{value:new g4(16777215)},opacity:{value:1},center:{value:new n4(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wl}}},A1={basic:{uniforms:yl([r4.common,r4.specularmap,r4.envmap,r4.aomap,r4.lightmap,r4.fog]),vertexShader:F4.meshbasic_vert,fragmentShader:F4.meshbasic_frag},lambert:{uniforms:yl([r4.common,r4.specularmap,r4.envmap,r4.aomap,r4.lightmap,r4.emissivemap,r4.bumpmap,r4.normalmap,r4.displacementmap,r4.fog,r4.lights,{emissive:{value:new g4(0)}}]),vertexShader:F4.meshlambert_vert,fragmentShader:F4.meshlambert_frag},phong:{uniforms:yl([r4.common,r4.specularmap,r4.envmap,r4.aomap,r4.lightmap,r4.emissivemap,r4.bumpmap,r4.normalmap,r4.displacementmap,r4.fog,r4.lights,{emissive:{value:new g4(0)},specular:{value:new g4(1118481)},shininess:{value:30}}]),vertexShader:F4.meshphong_vert,fragmentShader:F4.meshphong_frag},standard:{uniforms:yl([r4.common,r4.envmap,r4.aomap,r4.lightmap,r4.emissivemap,r4.bumpmap,r4.normalmap,r4.displacementmap,r4.roughnessmap,r4.metalnessmap,r4.fog,r4.lights,{emissive:{value:new g4(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:F4.meshphysical_vert,fragmentShader:F4.meshphysical_frag},toon:{uniforms:yl([r4.common,r4.aomap,r4.lightmap,r4.emissivemap,r4.bumpmap,r4.normalmap,r4.displacementmap,r4.gradientmap,r4.fog,r4.lights,{emissive:{value:new g4(0)}}]),vertexShader:F4.meshtoon_vert,fragmentShader:F4.meshtoon_frag},matcap:{uniforms:yl([r4.common,r4.bumpmap,r4.normalmap,r4.displacementmap,r4.fog,{matcap:{value:null}}]),vertexShader:F4.meshmatcap_vert,fragmentShader:F4.meshmatcap_frag},points:{uniforms:yl([r4.points,r4.fog]),vertexShader:F4.points_vert,fragmentShader:F4.points_frag},dashed:{uniforms:yl([r4.common,r4.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:F4.linedashed_vert,fragmentShader:F4.linedashed_frag},depth:{uniforms:yl([r4.common,r4.displacementmap]),vertexShader:F4.depth_vert,fragmentShader:F4.depth_frag},normal:{uniforms:yl([r4.common,r4.bumpmap,r4.normalmap,r4.displacementmap,{opacity:{value:1}}]),vertexShader:F4.meshnormal_vert,fragmentShader:F4.meshnormal_frag},sprite:{uniforms:yl([r4.sprite,r4.fog]),vertexShader:F4.sprite_vert,fragmentShader:F4.sprite_frag},background:{uniforms:{uvTransform:{value:new Wl},t2D:{value:null}},vertexShader:F4.background_vert,fragmentShader:F4.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:F4.backgroundCube_vert,fragmentShader:F4.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:F4.cube_vert,fragmentShader:F4.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:F4.equirect_vert,fragmentShader:F4.equirect_frag},distanceRGBA:{uniforms:yl([r4.common,r4.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:F4.distanceRGBA_vert,fragmentShader:F4.distanceRGBA_frag},shadow:{uniforms:yl([r4.lights,r4.fog,{color:{value:new g4(0)},opacity:{value:1}}]),vertexShader:F4.shadow_vert,fragmentShader:F4.shadow_frag}};A1.physical={uniforms:yl([A1.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new n4(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new g4(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new n4},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new g4(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new g4(1,1,1)},specularColorMap:{value:null}}]),vertexShader:F4.meshphysical_vert,fragmentShader:F4.meshphysical_frag};function Bi(A,l,e,t,n,i,s){const r=new g4(0);let o=i===!0?0:1,a,m,c=null,h=0,d=null;function f(u,g){let w=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?e:l).get(x));const p=A.xr,E=p.getSession&&p.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?q(r,o):x&&x.isColor&&(q(x,1),w=!0),(A.autoClear||w)&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),x&&(x.isCubeTexture||x.mapping===q5)?(m===void 0&&(m=new I4(new Ql(1,1,1),new $4({name:"BackgroundCubeMaterial",uniforms:R3(A1.backgroundCube.uniforms),vertexShader:A1.backgroundCube.vertexShader,fragmentShader:A1.backgroundCube.fragmentShader,side:xl,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(v,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(m)),m.material.uniforms.envMap.value=x,m.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,(c!==x||h!==x.version||d!==A.toneMapping)&&(m.material.needsUpdate=!0,c=x,h=x.version,d=A.toneMapping),m.layers.enableAll(),u.unshift(m,m.geometry,m.material,0,0,null)):x&&x.isTexture&&(a===void 0&&(a=new I4(new f5(2,2),new $4({name:"BackgroundMaterial",uniforms:R3(A1.background.uniforms),vertexShader:A1.background.vertexShader,fragmentShader:A1.background.fragmentShader,side:a1,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),a.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||h!==x.version||d!==A.toneMapping)&&(a.material.needsUpdate=!0,c=x,h=x.version,d=A.toneMapping),a.layers.enableAll(),u.unshift(a,a.geometry,a.material,0,0,null))}function q(u,g){t.buffers.color.setClear(u.r,u.g,u.b,g,s)}return{getClearColor:function(){return r},setClearColor:function(u,g=1){r.set(u),o=g,q(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(u){o=u,q(r,o)},render:f}}function wi(A,l,e,t){const n=A.getParameter(34921),i=t.isWebGL2?null:l.get("OES_vertex_array_object"),s=t.isWebGL2||i!==null,r={},o=u(null);let a=o,m=!1;function c(S,P,W,$,K){let D=!1;if(s){const R=q($,W,P);a!==R&&(a=R,d(a.object)),D=g(S,$,W,K),D&&w(S,$,W,K)}else{const R=P.wireframe===!0;(a.geometry!==$.id||a.program!==W.id||a.wireframe!==R)&&(a.geometry=$.id,a.program=W.id,a.wireframe=R,D=!0)}K!==null&&e.update(K,34963),(D||m)&&(m=!1,B(S,P,W,$),K!==null&&A.bindBuffer(34963,e.get(K).buffer))}function h(){return t.isWebGL2?A.createVertexArray():i.createVertexArrayOES()}function d(S){return t.isWebGL2?A.bindVertexArray(S):i.bindVertexArrayOES(S)}function f(S){return t.isWebGL2?A.deleteVertexArray(S):i.deleteVertexArrayOES(S)}function q(S,P,W){const $=W.wireframe===!0;let K=r[S.id];K===void 0&&(K={},r[S.id]=K);let D=K[P.id];D===void 0&&(D={},K[P.id]=D);let R=D[$];return R===void 0&&(R=u(h()),D[$]=R),R}function u(S){const P=[],W=[],$=[];for(let K=0;K<n;K++)P[K]=0,W[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:$,object:S,attributes:{},index:null}}function g(S,P,W,$){const K=a.attributes,D=P.attributes;let R=0;const t4=W.getAttributes();for(const X in t4)if(t4[X].location>=0){const u4=K[X];let _4=D[X];if(_4===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(_4=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(_4=S.instanceColor)),u4===void 0||u4.attribute!==_4||_4&&u4.data!==_4.data)return!0;R++}return a.attributesNum!==R||a.index!==$}function w(S,P,W,$){const K={},D=P.attributes;let R=0;const t4=W.getAttributes();for(const X in t4)if(t4[X].location>=0){let u4=D[X];u4===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(u4=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(u4=S.instanceColor));const _4={};_4.attribute=u4,u4&&u4.data&&(_4.data=u4.data),K[X]=_4,R++}a.attributes=K,a.attributesNum=R,a.index=$}function x(){const S=a.newAttributes;for(let P=0,W=S.length;P<W;P++)S[P]=0}function p(S){E(S,0)}function E(S,P){const W=a.newAttributes,$=a.enabledAttributes,K=a.attributeDivisors;W[S]=1,$[S]===0&&(A.enableVertexAttribArray(S),$[S]=1),K[S]!==P&&((t.isWebGL2?A:l.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,P),K[S]=P)}function v(){const S=a.newAttributes,P=a.enabledAttributes;for(let W=0,$=P.length;W<$;W++)P[W]!==S[W]&&(A.disableVertexAttribArray(W),P[W]=0)}function I(S,P,W,$,K,D){t.isWebGL2===!0&&(W===5124||W===5125)?A.vertexAttribIPointer(S,P,W,K,D):A.vertexAttribPointer(S,P,W,$,K,D)}function B(S,P,W,$){if(t.isWebGL2===!1&&(S.isInstancedMesh||$.isInstancedBufferGeometry)&&l.get("ANGLE_instanced_arrays")===null)return;x();const K=$.attributes,D=W.getAttributes(),R=P.defaultAttributeValues;for(const t4 in D){const X=D[t4];if(X.location>=0){let A4=K[t4];if(A4===void 0&&(t4==="instanceMatrix"&&S.instanceMatrix&&(A4=S.instanceMatrix),t4==="instanceColor"&&S.instanceColor&&(A4=S.instanceColor)),A4!==void 0){const u4=A4.normalized,_4=A4.itemSize,j=e.get(A4);if(j===void 0)continue;const D4=j.buffer,M4=j.type,y4=j.bytesPerElement;if(A4.isInterleavedBufferAttribute){const a4=A4.data,L4=a4.stride,J=A4.offset;if(a4.isInstancedInterleavedBuffer){for(let O=0;O<X.locationSize;O++)E(X.location+O,a4.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=a4.meshPerAttribute*a4.count)}else for(let O=0;O<X.locationSize;O++)p(X.location+O);A.bindBuffer(34962,D4);for(let O=0;O<X.locationSize;O++)I(X.location+O,_4/X.locationSize,M4,u4,L4*y4,(J+_4/X.locationSize*O)*y4)}else{if(A4.isInstancedBufferAttribute){for(let a4=0;a4<X.locationSize;a4++)E(X.location+a4,A4.meshPerAttribute);S.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=A4.meshPerAttribute*A4.count)}else for(let a4=0;a4<X.locationSize;a4++)p(X.location+a4);A.bindBuffer(34962,D4);for(let a4=0;a4<X.locationSize;a4++)I(X.location+a4,_4/X.locationSize,M4,u4,_4*y4,_4/X.locationSize*a4*y4)}}else if(R!==void 0){const u4=R[t4];if(u4!==void 0)switch(u4.length){case 2:A.vertexAttrib2fv(X.location,u4);break;case 3:A.vertexAttrib3fv(X.location,u4);break;case 4:A.vertexAttrib4fv(X.location,u4);break;default:A.vertexAttrib1fv(X.location,u4)}}}}v()}function Q(){Z();for(const S in r){const P=r[S];for(const W in P){const $=P[W];for(const K in $)f($[K].object),delete $[K];delete P[W]}delete r[S]}}function T(S){if(r[S.id]===void 0)return;const P=r[S.id];for(const W in P){const $=P[W];for(const K in $)f($[K].object),delete $[K];delete P[W]}delete r[S.id]}function z(S){for(const P in r){const W=r[P];if(W[S.id]===void 0)continue;const $=W[S.id];for(const K in $)f($[K].object),delete $[K];delete W[S.id]}}function Z(){L(),m=!0,a!==o&&(a=o,d(a.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:Z,resetDefaultState:L,dispose:Q,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Mi(A,l,e,t){const n=t.isWebGL2;let i;function s(a){i=a}function r(a,m){A.drawArrays(i,a,m),e.update(m,i,1)}function o(a,m,c){if(c===0)return;let h,d;if(n)h=A,d="drawArraysInstanced";else if(h=l.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](i,a,m,c),e.update(m,i,c)}this.setMode=s,this.render=r,this.renderInstances=o}function Ei(A,l,e){let t;function n(){if(t!==void 0)return t;if(l.has("EXT_texture_filter_anisotropic")===!0){const I=l.get("EXT_texture_filter_anisotropic");t=A.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t}function i(I){if(I==="highp"){if(A.getShaderPrecisionFormat(35633,36338).precision>0&&A.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&A.getShaderPrecisionFormat(35633,36337).precision>0&&A.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&A instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&A instanceof WebGL2ComputeRenderingContext;let r=e.precision!==void 0?e.precision:"highp";const o=i(r);o!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",o,"instead."),r=o);const a=s||l.has("WEBGL_draw_buffers"),m=e.logarithmicDepthBuffer===!0,c=A.getParameter(34930),h=A.getParameter(35660),d=A.getParameter(3379),f=A.getParameter(34076),q=A.getParameter(34921),u=A.getParameter(36347),g=A.getParameter(36348),w=A.getParameter(36349),x=h>0,p=s||l.has("OES_texture_float"),E=x&&p,v=s?A.getParameter(36183):0;return{isWebGL2:s,drawBuffers:a,getMaxAnisotropy:n,getMaxPrecision:i,precision:r,logarithmicDepthBuffer:m,maxTextures:c,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:q,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:p,floatVertexTextures:E,maxSamples:v}}function Ci(A){const l=this;let e=null,t=0,n=!1,i=!1;const s=new W1,r=new Wl,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h,d){const f=c.length!==0||h||t!==0||n;return n=h,e=m(c,d,0),t=c.length,f},this.beginShadows=function(){i=!0,m(null)},this.endShadows=function(){i=!1,a()},this.setState=function(c,h,d){const f=c.clippingPlanes,q=c.clipIntersection,u=c.clipShadows,g=A.get(c);if(!n||f===null||f.length===0||i&&!u)i?m(null):a();else{const w=i?0:t,x=w*4;let p=g.clippingState||null;o.value=p,p=m(f,h,x,d);for(let E=0;E!==x;++E)p[E]=e[E];g.clippingState=p,this.numIntersection=q?this.numPlanes:0,this.numPlanes+=w}};function a(){o.value!==e&&(o.value=e,o.needsUpdate=t>0),l.numPlanes=t,l.numIntersection=0}function m(c,h,d,f){const q=c!==null?c.length:0;let u=null;if(q!==0){if(u=o.value,f!==!0||u===null){const g=d+q*4,w=h.matrixWorldInverse;r.getNormalMatrix(w),(u===null||u.length<g)&&(u=new Float32Array(g));for(let x=0,p=d;x!==q;++x,p+=4)s.copy(c[x]).applyMatrix4(w,r),s.normal.toArray(u,p),u[p+3]=s.constant}o.value=u,o.needsUpdate=!0}return l.numPlanes=q,l.numIntersection=0,u}}function Qi(A){let l=new WeakMap;function e(s,r){return r===f7?s.mapping=F3:r===g7&&(s.mapping=D3),s}function t(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const r=s.mapping;if(r===f7||r===g7)if(l.has(s)){const o=l.get(s).texture;return e(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const a=new Re(o.height/2);return a.fromEquirectangularTexture(A,s),l.set(s,a),s.addEventListener("dispose",n),e(a.texture,s.mapping)}else return null}}return s}function n(s){const r=s.target;r.removeEventListener("dispose",n);const o=l.get(r);o!==void 0&&(l.delete(r),o.dispose())}function i(){l=new WeakMap}return{get:t,dispose:i}}class C1 extends p0{constructor(l=-1,e=1,t=1,n=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=l,this.right=e,this.top=t,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(l,e){return super.copy(l,e),this.left=l.left,this.right=l.right,this.top=l.top,this.bottom=l.bottom,this.near=l.near,this.far=l.far,this.zoom=l.zoom,this.view=l.view===null?null:Object.assign({},l.view),this}setViewOffset(l,e,t,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=l,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const l=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=t-l,s=t+l,r=n+e,o=n-e;if(this.view!==null&&this.view.enabled){const a=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=a*this.view.offsetX,s=i+a*this.view.width,r-=m*this.view.offsetY,o=r-m*this.view.height}this.projectionMatrix.makeOrthographic(i,s,r,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(l){const e=super.toJSON(l);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _3=4,O8=[.125,.215,.35,.446,.526,.582],X1=20,X5=new C1,V8=new g4;let $5=null;const J1=(1+Math.sqrt(5))/2,Q3=1/J1,j8=[new y(1,1,1),new y(-1,1,1),new y(1,1,-1),new y(-1,1,-1),new y(0,J1,Q3),new y(0,J1,-Q3),new y(Q3,0,J1),new y(-Q3,0,J1),new y(J1,Q3,0),new y(-J1,Q3,0)];class W8{constructor(l){this._renderer=l,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(l,e=0,t=.1,n=100){$5=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(l,t,n,i),e>0&&this._blur(i,0,0,e),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(l,e=null){return this._fromTexture(l,e)}fromCubemap(l,e=null){return this._fromTexture(l,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X8(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z8(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(l){this._lodMax=Math.floor(Math.log2(l)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let l=0;l<this._lodPlanes.length;l++)this._lodPlanes[l].dispose()}_cleanup(l){this._renderer.setRenderTarget($5),l.scissorTest=!1,O2(l,0,0,l.width,l.height)}_fromTexture(l,e){l.mapping===F3||l.mapping===D3?this._setSize(l.image.length===0?16:l.image[0].width||l.image[0].image.width):this._setSize(l.image.width/4),$5=this._renderer.getRenderTarget();const t=e||this._allocateTargets();return this._textureToCubeUV(l,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const l=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:Il,minFilter:Il,generateMipmaps:!1,type:u2,format:jl,encoding:t1,depthBuffer:!1},n=J8(l,e,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==l){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J8(l,e,t);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vi(i)),this._blurMaterial=_i(i,l,e)}return n}_compileMaterial(l){const e=new I4(this._lodPlanes[0],l);this._renderer.compile(e,X5)}_sceneToCubeUV(l,e,t,n){const r=new ql(90,1,e,t),o=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],m=this._renderer,c=m.autoClear,h=m.toneMapping;m.getClearColor(V8),m.toneMapping=Ll,m.autoClear=!1;const d=new Cl({name:"PMREM.Background",side:xl,depthWrite:!1,depthTest:!1}),f=new I4(new Ql,d);let q=!1;const u=l.background;u?u.isColor&&(d.color.copy(u),l.background=null,q=!0):(d.color.copy(V8),q=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(r.up.set(0,o[g],0),r.lookAt(a[g],0,0)):w===1?(r.up.set(0,0,o[g]),r.lookAt(0,a[g],0)):(r.up.set(0,o[g],0),r.lookAt(0,0,a[g]));const x=this._cubeSize;O2(n,w*x,g>2?x:0,x,x),m.setRenderTarget(n),q&&m.render(f,r),m.render(l,r)}f.geometry.dispose(),f.material.dispose(),m.toneMapping=h,m.autoClear=c,l.background=u}_textureToCubeUV(l,e){const t=this._renderer,n=l.mapping===F3||l.mapping===D3;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=X8()),this._cubemapMaterial.uniforms.flipEnvMap.value=l.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z8());const i=n?this._cubemapMaterial:this._equirectMaterial,s=new I4(this._lodPlanes[0],i),r=i.uniforms;r.envMap.value=l;const o=this._cubeSize;O2(e,0,0,3*o,2*o),t.setRenderTarget(e),t.render(s,X5)}_applyPMREM(l){const e=this._renderer,t=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const i=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=j8[(n-1)%j8.length];this._blur(l,n-1,n,i,s)}e.autoClear=t}_blur(l,e,t,n,i){const s=this._pingPongRenderTarget;this._halfBlur(l,s,e,t,n,"latitudinal",i),this._halfBlur(s,l,t,t,n,"longitudinal",i)}_halfBlur(l,e,t,n,i,s,r){const o=this._renderer,a=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,c=new I4(this._lodPlanes[n],a),h=a.uniforms,d=this._sizeLods[t]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*X1-1),q=i/f,u=isFinite(i)?1+Math.floor(m*q):X1;u>X1&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${X1}`);const g=[];let w=0;for(let I=0;I<X1;++I){const B=I/q,Q=Math.exp(-B*B/2);g.push(Q),I===0?w+=Q:I<u&&(w+=2*Q)}for(let I=0;I<g.length;I++)g[I]=g[I]/w;h.envMap.value=l.texture,h.samples.value=u,h.weights.value=g,h.latitudinal.value=s==="latitudinal",r&&(h.poleAxis.value=r);const{_lodMax:x}=this;h.dTheta.value=f,h.mipInt.value=x-t;const p=this._sizeLods[n],E=3*p*(n>x-_3?n-x+_3:0),v=4*(this._cubeSize-p);O2(e,E,v,3*p,2*p),o.setRenderTarget(e),o.render(c,X5)}}function vi(A){const l=[],e=[],t=[];let n=A;const i=A-_3+1+O8.length;for(let s=0;s<i;s++){const r=Math.pow(2,n);e.push(r);let o=1/r;s>A-_3?o=O8[s-A+_3-1]:s===0&&(o=0),t.push(o);const a=1/(r-2),m=-a,c=1+a,h=[m,m,c,m,c,c,m,m,c,c,m,c],d=6,f=6,q=3,u=2,g=1,w=new Float32Array(q*f*d),x=new Float32Array(u*f*d),p=new Float32Array(g*f*d);for(let v=0;v<d;v++){const I=v%3*2/3-1,B=v>2?0:-1,Q=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];w.set(Q,q*f*v),x.set(h,u*f*v);const T=[v,v,v,v,v,v];p.set(T,g*f*v)}const E=new fl;E.setAttribute("position",new Bl(w,q)),E.setAttribute("uv",new Bl(x,u)),E.setAttribute("faceIndex",new Bl(p,g)),l.push(E),n>_3&&n--}return{lodPlanes:l,sizeLods:e,sigmas:t}}function J8(A,l,e){const t=new wl(A,l,e);return t.texture.mapping=q5,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function O2(A,l,e,t,n){A.viewport.set(l,e,t,n),A.scissor.set(l,e,t,n)}function _i(A,l,e){const t=new Float32Array(X1),n=new y(0,1,0);return new $4({name:"SphericalGaussianBlur",defines:{n:X1,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${A}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:R7(),fragmentShader:`

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
		`,blending:R1,depthTest:!1,depthWrite:!1})}function Z8(){return new $4({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:R7(),fragmentShader:`

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
		`,blending:R1,depthTest:!1,depthWrite:!1})}function X8(){return new $4({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:R7(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:R1,depthTest:!1,depthWrite:!1})}function R7(){return`

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
	`}function yi(A){let l=new WeakMap,e=null;function t(r){if(r&&r.isTexture){const o=r.mapping,a=o===f7||o===g7,m=o===F3||o===D3;if(a||m)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let c=l.get(r);return e===null&&(e=new W8(A)),c=a?e.fromEquirectangular(r,c):e.fromCubemap(r,c),l.set(r,c),c.texture}else{if(l.has(r))return l.get(r).texture;{const c=r.image;if(a&&c&&c.height>0||m&&c&&n(c)){e===null&&(e=new W8(A));const h=a?e.fromEquirectangular(r):e.fromCubemap(r);return l.set(r,h),r.addEventListener("dispose",i),h.texture}else return null}}}return r}function n(r){let o=0;const a=6;for(let m=0;m<a;m++)r[m]!==void 0&&o++;return o===a}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=l.get(o);a!==void 0&&(l.delete(o),a.dispose())}function s(){l=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:t,dispose:s}}function Ii(A){const l={};function e(t){if(l[t]!==void 0)return l[t];let n;switch(t){case"WEBGL_depth_texture":n=A.getExtension("WEBGL_depth_texture")||A.getExtension("MOZ_WEBGL_depth_texture")||A.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=A.getExtension("EXT_texture_filter_anisotropic")||A.getExtension("MOZ_EXT_texture_filter_anisotropic")||A.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=A.getExtension("WEBGL_compressed_texture_s3tc")||A.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=A.getExtension("WEBGL_compressed_texture_pvrtc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=A.getExtension(t)}return l[t]=n,n}return{has:function(t){return e(t)!==null},init:function(t){t.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(t){const n=e(t);return n===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),n}}}function Ti(A,l,e,t){const n={},i=new WeakMap;function s(c){const h=c.target;h.index!==null&&l.remove(h.index);for(const f in h.attributes)l.remove(h.attributes[f]);h.removeEventListener("dispose",s),delete n[h.id];const d=i.get(h);d&&(l.remove(d),i.delete(h)),t.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function r(c,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,e.memory.geometries++),h}function o(c){const h=c.attributes;for(const f in h)l.update(h[f],34962);const d=c.morphAttributes;for(const f in d){const q=d[f];for(let u=0,g=q.length;u<g;u++)l.update(q[u],34962)}}function a(c){const h=[],d=c.index,f=c.attributes.position;let q=0;if(d!==null){const w=d.array;q=d.version;for(let x=0,p=w.length;x<p;x+=3){const E=w[x+0],v=w[x+1],I=w[x+2];h.push(E,v,v,I,I,E)}}else{const w=f.array;q=f.version;for(let x=0,p=w.length/3-1;x<p;x+=3){const E=x+0,v=x+1,I=x+2;h.push(E,v,v,I,I,E)}}const u=new(m0(h)?g0:f0)(h,1);u.version=q;const g=i.get(c);g&&l.remove(g),i.set(c,u)}function m(c){const h=i.get(c);if(h){const d=c.index;d!==null&&h.version<d.version&&a(c)}else a(c);return i.get(c)}return{get:r,update:o,getWireframeAttribute:m}}function bi(A,l,e,t){const n=t.isWebGL2;let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function m(h,d){A.drawElements(i,d,r,h*o),e.update(d,i,1)}function c(h,d,f){if(f===0)return;let q,u;if(n)q=A,u="drawElementsInstanced";else if(q=l.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",q===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}q[u](i,d,r,h*o,f),e.update(d,i,f)}this.setMode=s,this.setIndex=a,this.render=m,this.renderInstances=c}function Si(A){const l={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function t(i,s,r){switch(e.calls++,s){case 4:e.triangles+=r*(i/3);break;case 1:e.lines+=r*(i/2);break;case 3:e.lines+=r*(i-1);break;case 2:e.lines+=r*i;break;case 0:e.points+=r*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:l,render:e,programs:null,autoReset:!0,reset:n,update:t}}function Fi(A,l){return A[0]-l[0]}function Di(A,l){return Math.abs(l[1])-Math.abs(A[1])}function Ui(A,l,e){const t={},n=new Float32Array(8),i=new WeakMap,s=new W4,r=[];for(let a=0;a<8;a++)r[a]=[a,0];function o(a,m,c,h){const d=a.morphTargetInfluences;if(l.isWebGL2===!0){const f=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,q=f!==void 0?f.length:0;let u=i.get(m);if(u===void 0||u.count!==q){let P=function(){L.dispose(),i.delete(m),m.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();const x=m.morphAttributes.position!==void 0,p=m.morphAttributes.normal!==void 0,E=m.morphAttributes.color!==void 0,v=m.morphAttributes.position||[],I=m.morphAttributes.normal||[],B=m.morphAttributes.color||[];let Q=0;x===!0&&(Q=1),p===!0&&(Q=2),E===!0&&(Q=3);let T=m.attributes.position.count*Q,z=1;T>l.maxTextureSize&&(z=Math.ceil(T/l.maxTextureSize),T=l.maxTextureSize);const Z=new Float32Array(T*z*4*q),L=new d0(Z,T,z,q);L.type=Rl,L.needsUpdate=!0;const S=Q*4;for(let W=0;W<q;W++){const $=v[W],K=I[W],D=B[W],R=T*z*4*W;for(let t4=0;t4<$.count;t4++){const X=t4*S;x===!0&&(s.fromBufferAttribute($,t4),Z[R+X+0]=s.x,Z[R+X+1]=s.y,Z[R+X+2]=s.z,Z[R+X+3]=0),p===!0&&(s.fromBufferAttribute(K,t4),Z[R+X+4]=s.x,Z[R+X+5]=s.y,Z[R+X+6]=s.z,Z[R+X+7]=0),E===!0&&(s.fromBufferAttribute(D,t4),Z[R+X+8]=s.x,Z[R+X+9]=s.y,Z[R+X+10]=s.z,Z[R+X+11]=D.itemSize===4?s.w:1)}}u={count:q,texture:L,size:new n4(T,z)},i.set(m,u),m.addEventListener("dispose",P)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];const w=m.morphTargetsRelative?1:1-g;h.getUniforms().setValue(A,"morphTargetBaseInfluence",w),h.getUniforms().setValue(A,"morphTargetInfluences",d),h.getUniforms().setValue(A,"morphTargetsTexture",u.texture,e),h.getUniforms().setValue(A,"morphTargetsTextureSize",u.size)}else{const f=d===void 0?0:d.length;let q=t[m.id];if(q===void 0||q.length!==f){q=[];for(let p=0;p<f;p++)q[p]=[p,0];t[m.id]=q}for(let p=0;p<f;p++){const E=q[p];E[0]=p,E[1]=d[p]}q.sort(Di);for(let p=0;p<8;p++)p<f&&q[p][1]?(r[p][0]=q[p][0],r[p][1]=q[p][1]):(r[p][0]=Number.MAX_SAFE_INTEGER,r[p][1]=0);r.sort(Fi);const u=m.morphAttributes.position,g=m.morphAttributes.normal;let w=0;for(let p=0;p<8;p++){const E=r[p],v=E[0],I=E[1];v!==Number.MAX_SAFE_INTEGER&&I?(u&&m.getAttribute("morphTarget"+p)!==u[v]&&m.setAttribute("morphTarget"+p,u[v]),g&&m.getAttribute("morphNormal"+p)!==g[v]&&m.setAttribute("morphNormal"+p,g[v]),n[p]=I,w+=I):(u&&m.hasAttribute("morphTarget"+p)===!0&&m.deleteAttribute("morphTarget"+p),g&&m.hasAttribute("morphNormal"+p)===!0&&m.deleteAttribute("morphNormal"+p),n[p]=0)}const x=m.morphTargetsRelative?1:1-w;h.getUniforms().setValue(A,"morphTargetBaseInfluence",x),h.getUniforms().setValue(A,"morphTargetInfluences",n)}}return{update:o}}function Ni(A,l,e,t){let n=new WeakMap;function i(o){const a=t.render.frame,m=o.geometry,c=l.get(o,m);return n.get(c)!==a&&(l.update(c),n.set(c,a)),o.isInstancedMesh&&(o.hasEventListener("dispose",r)===!1&&o.addEventListener("dispose",r),e.update(o.instanceMatrix,34962),o.instanceColor!==null&&e.update(o.instanceColor,34962)),c}function s(){n=new WeakMap}function r(o){const a=o.target;a.removeEventListener("dispose",r),e.remove(a.instanceMatrix),a.instanceColor!==null&&e.remove(a.instanceColor)}return{update:i,dispose:s}}const w0=new nl,M0=new d0,E0=new Me,C0=new x0,$8=[],l6=[],e6=new Float32Array(16),t6=new Float32Array(9),n6=new Float32Array(4);function Y3(A,l,e){const t=A[0];if(t<=0||t>0)return A;const n=l*e;let i=$8[n];if(i===void 0&&(i=new Float32Array(n),$8[n]=i),l!==0){t.toArray(i,0);for(let s=1,r=0;s!==l;++s)r+=e,A[s].toArray(i,r)}return i}function al(A,l){if(A.length!==l.length)return!1;for(let e=0,t=A.length;e<t;e++)if(A[e]!==l[e])return!1;return!0}function ml(A,l){for(let e=0,t=l.length;e<t;e++)A[e]=l[e]}function g5(A,l){let e=l6[l];e===void 0&&(e=new Int32Array(l),l6[l]=e);for(let t=0;t!==l;++t)e[t]=A.allocateTextureUnit();return e}function Ri(A,l){const e=this.cache;e[0]!==l&&(A.uniform1f(this.addr,l),e[0]=l)}function Li(A,l){const e=this.cache;if(l.x!==void 0)(e[0]!==l.x||e[1]!==l.y)&&(A.uniform2f(this.addr,l.x,l.y),e[0]=l.x,e[1]=l.y);else{if(al(e,l))return;A.uniform2fv(this.addr,l),ml(e,l)}}function Gi(A,l){const e=this.cache;if(l.x!==void 0)(e[0]!==l.x||e[1]!==l.y||e[2]!==l.z)&&(A.uniform3f(this.addr,l.x,l.y,l.z),e[0]=l.x,e[1]=l.y,e[2]=l.z);else if(l.r!==void 0)(e[0]!==l.r||e[1]!==l.g||e[2]!==l.b)&&(A.uniform3f(this.addr,l.r,l.g,l.b),e[0]=l.r,e[1]=l.g,e[2]=l.b);else{if(al(e,l))return;A.uniform3fv(this.addr,l),ml(e,l)}}function Pi(A,l){const e=this.cache;if(l.x!==void 0)(e[0]!==l.x||e[1]!==l.y||e[2]!==l.z||e[3]!==l.w)&&(A.uniform4f(this.addr,l.x,l.y,l.z,l.w),e[0]=l.x,e[1]=l.y,e[2]=l.z,e[3]=l.w);else{if(al(e,l))return;A.uniform4fv(this.addr,l),ml(e,l)}}function zi(A,l){const e=this.cache,t=l.elements;if(t===void 0){if(al(e,l))return;A.uniformMatrix2fv(this.addr,!1,l),ml(e,l)}else{if(al(e,t))return;n6.set(t),A.uniformMatrix2fv(this.addr,!1,n6),ml(e,t)}}function ki(A,l){const e=this.cache,t=l.elements;if(t===void 0){if(al(e,l))return;A.uniformMatrix3fv(this.addr,!1,l),ml(e,l)}else{if(al(e,t))return;t6.set(t),A.uniformMatrix3fv(this.addr,!1,t6),ml(e,t)}}function Yi(A,l){const e=this.cache,t=l.elements;if(t===void 0){if(al(e,l))return;A.uniformMatrix4fv(this.addr,!1,l),ml(e,l)}else{if(al(e,t))return;e6.set(t),A.uniformMatrix4fv(this.addr,!1,e6),ml(e,t)}}function Hi(A,l){const e=this.cache;e[0]!==l&&(A.uniform1i(this.addr,l),e[0]=l)}function Ki(A,l){const e=this.cache;if(l.x!==void 0)(e[0]!==l.x||e[1]!==l.y)&&(A.uniform2i(this.addr,l.x,l.y),e[0]=l.x,e[1]=l.y);else{if(al(e,l))return;A.uniform2iv(this.addr,l),ml(e,l)}}function Oi(A,l){const e=this.cache;if(l.x!==void 0)(e[0]!==l.x||e[1]!==l.y||e[2]!==l.z)&&(A.uniform3i(this.addr,l.x,l.y,l.z),e[0]=l.x,e[1]=l.y,e[2]=l.z);else{if(al(e,l))return;A.uniform3iv(this.addr,l),ml(e,l)}}function Vi(A,l){const e=this.cache;if(l.x!==void 0)(e[0]!==l.x||e[1]!==l.y||e[2]!==l.z||e[3]!==l.w)&&(A.uniform4i(this.addr,l.x,l.y,l.z,l.w),e[0]=l.x,e[1]=l.y,e[2]=l.z,e[3]=l.w);else{if(al(e,l))return;A.uniform4iv(this.addr,l),ml(e,l)}}function ji(A,l){const e=this.cache;e[0]!==l&&(A.uniform1ui(this.addr,l),e[0]=l)}function Wi(A,l){const e=this.cache;if(l.x!==void 0)(e[0]!==l.x||e[1]!==l.y)&&(A.uniform2ui(this.addr,l.x,l.y),e[0]=l.x,e[1]=l.y);else{if(al(e,l))return;A.uniform2uiv(this.addr,l),ml(e,l)}}function Ji(A,l){const e=this.cache;if(l.x!==void 0)(e[0]!==l.x||e[1]!==l.y||e[2]!==l.z)&&(A.uniform3ui(this.addr,l.x,l.y,l.z),e[0]=l.x,e[1]=l.y,e[2]=l.z);else{if(al(e,l))return;A.uniform3uiv(this.addr,l),ml(e,l)}}function Zi(A,l){const e=this.cache;if(l.x!==void 0)(e[0]!==l.x||e[1]!==l.y||e[2]!==l.z||e[3]!==l.w)&&(A.uniform4ui(this.addr,l.x,l.y,l.z,l.w),e[0]=l.x,e[1]=l.y,e[2]=l.z,e[3]=l.w);else{if(al(e,l))return;A.uniform4uiv(this.addr,l),ml(e,l)}}function Xi(A,l,e){const t=this.cache,n=e.allocateTextureUnit();t[0]!==n&&(A.uniform1i(this.addr,n),t[0]=n),e.setTexture2D(l||w0,n)}function $i(A,l,e){const t=this.cache,n=e.allocateTextureUnit();t[0]!==n&&(A.uniform1i(this.addr,n),t[0]=n),e.setTexture3D(l||E0,n)}function ls(A,l,e){const t=this.cache,n=e.allocateTextureUnit();t[0]!==n&&(A.uniform1i(this.addr,n),t[0]=n),e.setTextureCube(l||C0,n)}function es(A,l,e){const t=this.cache,n=e.allocateTextureUnit();t[0]!==n&&(A.uniform1i(this.addr,n),t[0]=n),e.setTexture2DArray(l||M0,n)}function ts(A){switch(A){case 5126:return Ri;case 35664:return Li;case 35665:return Gi;case 35666:return Pi;case 35674:return zi;case 35675:return ki;case 35676:return Yi;case 5124:case 35670:return Hi;case 35667:case 35671:return Ki;case 35668:case 35672:return Oi;case 35669:case 35673:return Vi;case 5125:return ji;case 36294:return Wi;case 36295:return Ji;case 36296:return Zi;case 35678:case 36198:case 36298:case 36306:case 35682:return Xi;case 35679:case 36299:case 36307:return $i;case 35680:case 36300:case 36308:case 36293:return ls;case 36289:case 36303:case 36311:case 36292:return es}}function ns(A,l){A.uniform1fv(this.addr,l)}function is(A,l){const e=Y3(l,this.size,2);A.uniform2fv(this.addr,e)}function ss(A,l){const e=Y3(l,this.size,3);A.uniform3fv(this.addr,e)}function As(A,l){const e=Y3(l,this.size,4);A.uniform4fv(this.addr,e)}function rs(A,l){const e=Y3(l,this.size,4);A.uniformMatrix2fv(this.addr,!1,e)}function os(A,l){const e=Y3(l,this.size,9);A.uniformMatrix3fv(this.addr,!1,e)}function as(A,l){const e=Y3(l,this.size,16);A.uniformMatrix4fv(this.addr,!1,e)}function ms(A,l){A.uniform1iv(this.addr,l)}function cs(A,l){A.uniform2iv(this.addr,l)}function hs(A,l){A.uniform3iv(this.addr,l)}function us(A,l){A.uniform4iv(this.addr,l)}function ds(A,l){A.uniform1uiv(this.addr,l)}function qs(A,l){A.uniform2uiv(this.addr,l)}function fs(A,l){A.uniform3uiv(this.addr,l)}function gs(A,l){A.uniform4uiv(this.addr,l)}function ps(A,l,e){const t=this.cache,n=l.length,i=g5(e,n);al(t,i)||(A.uniform1iv(this.addr,i),ml(t,i));for(let s=0;s!==n;++s)e.setTexture2D(l[s]||w0,i[s])}function xs(A,l,e){const t=this.cache,n=l.length,i=g5(e,n);al(t,i)||(A.uniform1iv(this.addr,i),ml(t,i));for(let s=0;s!==n;++s)e.setTexture3D(l[s]||E0,i[s])}function Bs(A,l,e){const t=this.cache,n=l.length,i=g5(e,n);al(t,i)||(A.uniform1iv(this.addr,i),ml(t,i));for(let s=0;s!==n;++s)e.setTextureCube(l[s]||C0,i[s])}function ws(A,l,e){const t=this.cache,n=l.length,i=g5(e,n);al(t,i)||(A.uniform1iv(this.addr,i),ml(t,i));for(let s=0;s!==n;++s)e.setTexture2DArray(l[s]||M0,i[s])}function Ms(A){switch(A){case 5126:return ns;case 35664:return is;case 35665:return ss;case 35666:return As;case 35674:return rs;case 35675:return os;case 35676:return as;case 5124:case 35670:return ms;case 35667:case 35671:return cs;case 35668:case 35672:return hs;case 35669:case 35673:return us;case 5125:return ds;case 36294:return qs;case 36295:return fs;case 36296:return gs;case 35678:case 36198:case 36298:case 36306:case 35682:return ps;case 35679:case 36299:case 36307:return xs;case 35680:case 36300:case 36308:case 36293:return Bs;case 36289:case 36303:case 36311:case 36292:return ws}}class Es{constructor(l,e,t){this.id=l,this.addr=t,this.cache=[],this.setValue=ts(e.type)}}class Cs{constructor(l,e,t){this.id=l,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Ms(e.type)}}class Qs{constructor(l){this.id=l,this.seq=[],this.map={}}setValue(l,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const r=n[i];r.setValue(l,e[r.id],t)}}}const l7=/(\w+)(\])?(\[|\.)?/g;function i6(A,l){A.seq.push(l),A.map[l.id]=l}function vs(A,l,e){const t=A.name,n=t.length;for(l7.lastIndex=0;;){const i=l7.exec(t),s=l7.lastIndex;let r=i[1];const o=i[2]==="]",a=i[3];if(o&&(r=r|0),a===void 0||a==="["&&s+2===n){i6(e,a===void 0?new Es(r,A,l):new Cs(r,A,l));break}else{let c=e.map[r];c===void 0&&(c=new Qs(r),i6(e,c)),e=c}}}class o5{constructor(l,e){this.seq=[],this.map={};const t=l.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=l.getActiveUniform(e,n),s=l.getUniformLocation(e,i.name);vs(i,s,this)}}setValue(l,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(l,t,n)}setOptional(l,e,t){const n=e[t];n!==void 0&&this.setValue(l,t,n)}static upload(l,e,t,n){for(let i=0,s=e.length;i!==s;++i){const r=e[i],o=t[r.id];o.needsUpdate!==!1&&r.setValue(l,o.value,n)}}static seqWithValue(l,e){const t=[];for(let n=0,i=l.length;n!==i;++n){const s=l[n];s.id in e&&t.push(s)}return t}}function s6(A,l,e){const t=A.createShader(l);return A.shaderSource(t,e),A.compileShader(t),t}let _s=0;function ys(A,l){const e=A.split(`
`),t=[],n=Math.max(l-6,0),i=Math.min(l+6,e.length);for(let s=n;s<i;s++){const r=s+1;t.push(`${r===l?">":" "} ${r}: ${e[s]}`)}return t.join(`
`)}function Is(A){switch(A){case t1:return["Linear","( value )"];case P4:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",A),["Linear","( value )"]}}function A6(A,l,e){const t=A.getShaderParameter(l,35713),n=A.getShaderInfoLog(l).trim();if(t&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const s=parseInt(i[1]);return e.toUpperCase()+`

`+n+`

`+ys(A.getShaderSource(l),s)}else return n}function Ts(A,l){const e=Is(l);return"vec4 "+A+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function bs(A,l){let e;switch(l){case N9:e="Linear";break;case R9:e="Reinhard";break;case L9:e="OptimizedCineon";break;case i0:e="ACESFilmic";break;case G9:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",l),e="Linear"}return"vec3 "+A+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ss(A){return[A.extensionDerivatives||!!A.envMapCubeUVHeight||A.bumpMap||A.tangentSpaceNormalMap||A.clearcoatNormalMap||A.flatShading||A.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(A.extensionFragDepth||A.logarithmicDepthBuffer)&&A.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",A.extensionDrawBuffers&&A.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(A.extensionShaderTextureLOD||A.envMap||A.transmission)&&A.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(r2).join(`
`)}function Fs(A){const l=[];for(const e in A){const t=A[e];t!==!1&&l.push("#define "+e+" "+t)}return l.join(`
`)}function Ds(A,l){const e={},t=A.getProgramParameter(l,35721);for(let n=0;n<t;n++){const i=A.getActiveAttrib(l,n),s=i.name;let r=1;i.type===35674&&(r=2),i.type===35675&&(r=3),i.type===35676&&(r=4),e[s]={type:i.type,location:A.getAttribLocation(l,s),locationSize:r}}return e}function r2(A){return A!==""}function r6(A,l){const e=l.numSpotLightShadows+l.numSpotLightMaps-l.numSpotLightShadowsWithMaps;return A.replace(/NUM_DIR_LIGHTS/g,l.numDirLights).replace(/NUM_SPOT_LIGHTS/g,l.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,l.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,l.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,l.numPointLights).replace(/NUM_HEMI_LIGHTS/g,l.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,l.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,l.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,l.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,l.numPointLightShadows)}function o6(A,l){return A.replace(/NUM_CLIPPING_PLANES/g,l.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,l.numClippingPlanes-l.numClipIntersection)}const Us=/^[ \t]*#include +<([\w\d./]+)>/gm;function E7(A){return A.replace(Us,Ns)}function Ns(A,l){const e=F4[l];if(e===void 0)throw new Error("Can not resolve #include <"+l+">");return E7(e)}const Rs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a6(A){return A.replace(Rs,Ls)}function Ls(A,l,e,t){let n="";for(let i=parseInt(l);i<parseInt(e);i++)n+=t.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function m6(A){let l="precision "+A.precision+` float;
precision `+A.precision+" int;";return A.precision==="highp"?l+=`
#define HIGH_PRECISION`:A.precision==="mediump"?l+=`
#define MEDIUM_PRECISION`:A.precision==="lowp"&&(l+=`
#define LOW_PRECISION`),l}function Gs(A){let l="SHADOWMAP_TYPE_BASIC";return A.shadowMapType===l0?l="SHADOWMAP_TYPE_PCF":A.shadowMapType===d9?l="SHADOWMAP_TYPE_PCF_SOFT":A.shadowMapType===A2&&(l="SHADOWMAP_TYPE_VSM"),l}function Ps(A){let l="ENVMAP_TYPE_CUBE";if(A.envMap)switch(A.envMapMode){case F3:case D3:l="ENVMAP_TYPE_CUBE";break;case q5:l="ENVMAP_TYPE_CUBE_UV";break}return l}function zs(A){let l="ENVMAP_MODE_REFLECTION";if(A.envMap)switch(A.envMapMode){case D3:l="ENVMAP_MODE_REFRACTION";break}return l}function ks(A){let l="ENVMAP_BLENDING_NONE";if(A.envMap)switch(A.combine){case n0:l="ENVMAP_BLENDING_MULTIPLY";break;case D9:l="ENVMAP_BLENDING_MIX";break;case U9:l="ENVMAP_BLENDING_ADD";break}return l}function Ys(A){const l=A.envMapCubeUVHeight;if(l===null)return null;const e=Math.log2(l)-2,t=1/l;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function Hs(A,l,e,t){const n=A.getContext(),i=e.defines;let s=e.vertexShader,r=e.fragmentShader;const o=Gs(e),a=Ps(e),m=zs(e),c=ks(e),h=Ys(e),d=e.isWebGL2?"":Ss(e),f=Fs(i),q=n.createProgram();let u,g,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=[f].filter(r2).join(`
`),u.length>0&&(u+=`
`),g=[d,f].filter(r2).join(`
`),g.length>0&&(g+=`
`)):(u=[m6(e),"#define SHADER_NAME "+e.shaderName,f,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(r2).join(`
`),g=[d,m6(e),"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+a:"",e.envMap?"#define "+m:"",e.envMap?"#define "+c:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ll?"#define TONE_MAPPING":"",e.toneMapping!==Ll?F4.tonemapping_pars_fragment:"",e.toneMapping!==Ll?bs("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",F4.encodings_pars_fragment,Ts("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(r2).join(`
`)),s=E7(s),s=r6(s,e),s=o6(s,e),r=E7(r),r=r6(r,e),r=o6(r,e),s=a6(s),r=a6(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["#define varying in",e.glslVersion===D8?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===D8?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=w+u+s,p=w+g+r,E=s6(n,35633,x),v=s6(n,35632,p);if(n.attachShader(q,E),n.attachShader(q,v),e.index0AttributeName!==void 0?n.bindAttribLocation(q,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(q,0,"position"),n.linkProgram(q),A.debug.checkShaderErrors){const Q=n.getProgramInfoLog(q).trim(),T=n.getShaderInfoLog(E).trim(),z=n.getShaderInfoLog(v).trim();let Z=!0,L=!0;if(n.getProgramParameter(q,35714)===!1){Z=!1;const S=A6(n,E,"vertex"),P=A6(n,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(q,35715)+`

Program Info Log: `+Q+`
`+S+`
`+P)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(T===""||z==="")&&(L=!1);L&&(this.diagnostics={runnable:Z,programLog:Q,vertexShader:{log:T,prefix:u},fragmentShader:{log:z,prefix:g}})}n.deleteShader(E),n.deleteShader(v);let I;this.getUniforms=function(){return I===void 0&&(I=new o5(n,q)),I};let B;return this.getAttributes=function(){return B===void 0&&(B=Ds(n,q)),B},this.destroy=function(){t.releaseStatesOfProgram(this),n.deleteProgram(q),this.program=void 0},this.name=e.shaderName,this.id=_s++,this.cacheKey=l,this.usedTimes=1,this.program=q,this.vertexShader=E,this.fragmentShader=v,this}let Ks=0;class Os{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(l){const e=l.vertexShader,t=l.fragmentShader,n=this._getShaderStage(e),i=this._getShaderStage(t),s=this._getShaderCacheForMaterial(l);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(l){const e=this.materialCache.get(l);for(const t of e)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(l),this}getVertexShaderID(l){return this._getShaderStage(l.vertexShader).id}getFragmentShaderID(l){return this._getShaderStage(l.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(l){const e=this.materialCache;let t=e.get(l);return t===void 0&&(t=new Set,e.set(l,t)),t}_getShaderStage(l){const e=this.shaderCache;let t=e.get(l);return t===void 0&&(t=new Vs(l),e.set(l,t)),t}}class Vs{constructor(l){this.id=Ks++,this.code=l,this.usedTimes=0}}function js(A,l,e,t,n,i,s){const r=new q0,o=new Os,a=[],m=n.isWebGL2,c=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function q(B,Q,T,z,Z){const L=z.fog,S=Z.geometry,P=B.isMeshStandardMaterial?z.environment:null,W=(B.isMeshStandardMaterial?e:l).get(B.envMap||P),$=!!W&&W.mapping===q5?W.image.height:null,K=f[B.type];B.precision!==null&&(d=n.getMaxPrecision(B.precision),d!==B.precision&&console.warn("THREE.WebGLProgram.getParameters:",B.precision,"not supported, using",d,"instead."));const D=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,R=D!==void 0?D.length:0;let t4=0;S.morphAttributes.position!==void 0&&(t4=1),S.morphAttributes.normal!==void 0&&(t4=2),S.morphAttributes.color!==void 0&&(t4=3);let X,A4,u4,_4;if(K){const L4=A1[K];X=L4.vertexShader,A4=L4.fragmentShader}else X=B.vertexShader,A4=B.fragmentShader,o.update(B),u4=o.getVertexShaderID(B),_4=o.getFragmentShaderID(B);const j=A.getRenderTarget(),D4=B.alphaTest>0,M4=B.clearcoat>0,y4=B.iridescence>0;return{isWebGL2:m,shaderID:K,shaderName:B.type,vertexShader:X,fragmentShader:A4,defines:B.defines,customVertexShaderID:u4,customFragmentShaderID:_4,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:d,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:j===null?A.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:t1,map:!!B.map,matcap:!!B.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUVHeight:$,lightMap:!!B.lightMap,aoMap:!!B.aoMap,emissiveMap:!!B.emissiveMap,bumpMap:!!B.bumpMap,normalMap:!!B.normalMap,objectSpaceNormalMap:B.normalMapType===se,tangentSpaceNormalMap:B.normalMapType===F7,decodeVideoTexture:!!B.map&&B.map.isVideoTexture===!0&&B.map.encoding===P4,clearcoat:M4,clearcoatMap:M4&&!!B.clearcoatMap,clearcoatRoughnessMap:M4&&!!B.clearcoatRoughnessMap,clearcoatNormalMap:M4&&!!B.clearcoatNormalMap,iridescence:y4,iridescenceMap:y4&&!!B.iridescenceMap,iridescenceThicknessMap:y4&&!!B.iridescenceThicknessMap,displacementMap:!!B.displacementMap,roughnessMap:!!B.roughnessMap,metalnessMap:!!B.metalnessMap,specularMap:!!B.specularMap,specularIntensityMap:!!B.specularIntensityMap,specularColorMap:!!B.specularColorMap,opaque:B.transparent===!1&&B.blending===e3,alphaMap:!!B.alphaMap,alphaTest:D4,gradientMap:!!B.gradientMap,sheen:B.sheen>0,sheenColorMap:!!B.sheenColorMap,sheenRoughnessMap:!!B.sheenRoughnessMap,transmission:B.transmission>0,transmissionMap:!!B.transmissionMap,thicknessMap:!!B.thicknessMap,combine:B.combine,vertexTangents:!!B.normalMap&&!!S.attributes.tangent,vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUvs:!!B.map||!!B.bumpMap||!!B.normalMap||!!B.specularMap||!!B.alphaMap||!!B.emissiveMap||!!B.roughnessMap||!!B.metalnessMap||!!B.clearcoatMap||!!B.clearcoatRoughnessMap||!!B.clearcoatNormalMap||!!B.iridescenceMap||!!B.iridescenceThicknessMap||!!B.displacementMap||!!B.transmissionMap||!!B.thicknessMap||!!B.specularIntensityMap||!!B.specularColorMap||!!B.sheenColorMap||!!B.sheenRoughnessMap,uvsVertexOnly:!(!!B.map||!!B.bumpMap||!!B.normalMap||!!B.specularMap||!!B.alphaMap||!!B.emissiveMap||!!B.roughnessMap||!!B.metalnessMap||!!B.clearcoatNormalMap||!!B.iridescenceMap||!!B.iridescenceThicknessMap||B.transmission>0||!!B.transmissionMap||!!B.thicknessMap||!!B.specularIntensityMap||!!B.specularColorMap||B.sheen>0||!!B.sheenColorMap||!!B.sheenRoughnessMap)&&!!B.displacementMap,fog:!!L,useFog:B.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:!!B.flatShading,sizeAttenuation:B.sizeAttenuation,logarithmicDepthBuffer:c,skinning:Z.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:t4,numDirLights:Q.directional.length,numPointLights:Q.point.length,numSpotLights:Q.spot.length,numSpotLightMaps:Q.spotLightMap.length,numRectAreaLights:Q.rectArea.length,numHemiLights:Q.hemi.length,numDirLightShadows:Q.directionalShadowMap.length,numPointLightShadows:Q.pointShadowMap.length,numSpotLightShadows:Q.spotShadowMap.length,numSpotLightShadowsWithMaps:Q.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:B.dithering,shadowMapEnabled:A.shadowMap.enabled&&T.length>0,shadowMapType:A.shadowMap.type,toneMapping:B.toneMapped?A.toneMapping:Ll,physicallyCorrectLights:A.physicallyCorrectLights,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===bl,flipSided:B.side===xl,useDepthPacking:!!B.depthPacking,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionDerivatives:B.extensions&&B.extensions.derivatives,extensionFragDepth:B.extensions&&B.extensions.fragDepth,extensionDrawBuffers:B.extensions&&B.extensions.drawBuffers,extensionShaderTextureLOD:B.extensions&&B.extensions.shaderTextureLOD,rendererExtensionFragDepth:m||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||t.has("EXT_shader_texture_lod"),customProgramCacheKey:B.customProgramCacheKey()}}function u(B){const Q=[];if(B.shaderID?Q.push(B.shaderID):(Q.push(B.customVertexShaderID),Q.push(B.customFragmentShaderID)),B.defines!==void 0)for(const T in B.defines)Q.push(T),Q.push(B.defines[T]);return B.isRawShaderMaterial===!1&&(g(Q,B),w(Q,B),Q.push(A.outputEncoding)),Q.push(B.customProgramCacheKey),Q.join()}function g(B,Q){B.push(Q.precision),B.push(Q.outputEncoding),B.push(Q.envMapMode),B.push(Q.envMapCubeUVHeight),B.push(Q.combine),B.push(Q.vertexUvs),B.push(Q.fogExp2),B.push(Q.sizeAttenuation),B.push(Q.morphTargetsCount),B.push(Q.morphAttributeCount),B.push(Q.numDirLights),B.push(Q.numPointLights),B.push(Q.numSpotLights),B.push(Q.numSpotLightMaps),B.push(Q.numHemiLights),B.push(Q.numRectAreaLights),B.push(Q.numDirLightShadows),B.push(Q.numPointLightShadows),B.push(Q.numSpotLightShadows),B.push(Q.numSpotLightShadowsWithMaps),B.push(Q.shadowMapType),B.push(Q.toneMapping),B.push(Q.numClippingPlanes),B.push(Q.numClipIntersection),B.push(Q.depthPacking)}function w(B,Q){r.disableAll(),Q.isWebGL2&&r.enable(0),Q.supportsVertexTextures&&r.enable(1),Q.instancing&&r.enable(2),Q.instancingColor&&r.enable(3),Q.map&&r.enable(4),Q.matcap&&r.enable(5),Q.envMap&&r.enable(6),Q.lightMap&&r.enable(7),Q.aoMap&&r.enable(8),Q.emissiveMap&&r.enable(9),Q.bumpMap&&r.enable(10),Q.normalMap&&r.enable(11),Q.objectSpaceNormalMap&&r.enable(12),Q.tangentSpaceNormalMap&&r.enable(13),Q.clearcoat&&r.enable(14),Q.clearcoatMap&&r.enable(15),Q.clearcoatRoughnessMap&&r.enable(16),Q.clearcoatNormalMap&&r.enable(17),Q.iridescence&&r.enable(18),Q.iridescenceMap&&r.enable(19),Q.iridescenceThicknessMap&&r.enable(20),Q.displacementMap&&r.enable(21),Q.specularMap&&r.enable(22),Q.roughnessMap&&r.enable(23),Q.metalnessMap&&r.enable(24),Q.gradientMap&&r.enable(25),Q.alphaMap&&r.enable(26),Q.alphaTest&&r.enable(27),Q.vertexColors&&r.enable(28),Q.vertexAlphas&&r.enable(29),Q.vertexUvs&&r.enable(30),Q.vertexTangents&&r.enable(31),Q.uvsVertexOnly&&r.enable(32),B.push(r.mask),r.disableAll(),Q.fog&&r.enable(0),Q.useFog&&r.enable(1),Q.flatShading&&r.enable(2),Q.logarithmicDepthBuffer&&r.enable(3),Q.skinning&&r.enable(4),Q.morphTargets&&r.enable(5),Q.morphNormals&&r.enable(6),Q.morphColors&&r.enable(7),Q.premultipliedAlpha&&r.enable(8),Q.shadowMapEnabled&&r.enable(9),Q.physicallyCorrectLights&&r.enable(10),Q.doubleSided&&r.enable(11),Q.flipSided&&r.enable(12),Q.useDepthPacking&&r.enable(13),Q.dithering&&r.enable(14),Q.specularIntensityMap&&r.enable(15),Q.specularColorMap&&r.enable(16),Q.transmission&&r.enable(17),Q.transmissionMap&&r.enable(18),Q.thicknessMap&&r.enable(19),Q.sheen&&r.enable(20),Q.sheenColorMap&&r.enable(21),Q.sheenRoughnessMap&&r.enable(22),Q.decodeVideoTexture&&r.enable(23),Q.opaque&&r.enable(24),B.push(r.mask)}function x(B){const Q=f[B.type];let T;if(Q){const z=A1[Q];T=m2.clone(z.uniforms)}else T=B.uniforms;return T}function p(B,Q){let T;for(let z=0,Z=a.length;z<Z;z++){const L=a[z];if(L.cacheKey===Q){T=L,++T.usedTimes;break}}return T===void 0&&(T=new Hs(A,Q,B,i),a.push(T)),T}function E(B){if(--B.usedTimes===0){const Q=a.indexOf(B);a[Q]=a[a.length-1],a.pop(),B.destroy()}}function v(B){o.remove(B)}function I(){o.dispose()}return{getParameters:q,getProgramCacheKey:u,getUniforms:x,acquireProgram:p,releaseProgram:E,releaseShaderCache:v,programs:a,dispose:I}}function Ws(){let A=new WeakMap;function l(i){let s=A.get(i);return s===void 0&&(s={},A.set(i,s)),s}function e(i){A.delete(i)}function t(i,s,r){A.get(i)[s]=r}function n(){A=new WeakMap}return{get:l,remove:e,update:t,dispose:n}}function Js(A,l){return A.groupOrder!==l.groupOrder?A.groupOrder-l.groupOrder:A.renderOrder!==l.renderOrder?A.renderOrder-l.renderOrder:A.material.id!==l.material.id?A.material.id-l.material.id:A.z!==l.z?A.z-l.z:A.id-l.id}function c6(A,l){return A.groupOrder!==l.groupOrder?A.groupOrder-l.groupOrder:A.renderOrder!==l.renderOrder?A.renderOrder-l.renderOrder:A.z!==l.z?l.z-A.z:A.id-l.id}function h6(){const A=[];let l=0;const e=[],t=[],n=[];function i(){l=0,e.length=0,t.length=0,n.length=0}function s(c,h,d,f,q,u){let g=A[l];return g===void 0?(g={id:c.id,object:c,geometry:h,material:d,groupOrder:f,renderOrder:c.renderOrder,z:q,group:u},A[l]=g):(g.id=c.id,g.object=c,g.geometry=h,g.material=d,g.groupOrder=f,g.renderOrder=c.renderOrder,g.z=q,g.group=u),l++,g}function r(c,h,d,f,q,u){const g=s(c,h,d,f,q,u);d.transmission>0?t.push(g):d.transparent===!0?n.push(g):e.push(g)}function o(c,h,d,f,q,u){const g=s(c,h,d,f,q,u);d.transmission>0?t.unshift(g):d.transparent===!0?n.unshift(g):e.unshift(g)}function a(c,h){e.length>1&&e.sort(c||Js),t.length>1&&t.sort(h||c6),n.length>1&&n.sort(h||c6)}function m(){for(let c=l,h=A.length;c<h;c++){const d=A[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:t,transparent:n,init:i,push:r,unshift:o,finish:m,sort:a}}function Zs(){let A=new WeakMap;function l(t,n){const i=A.get(t);let s;return i===void 0?(s=new h6,A.set(t,[s])):n>=i.length?(s=new h6,i.push(s)):s=i[n],s}function e(){A=new WeakMap}return{get:l,dispose:e}}function Xs(){const A={};return{get:function(l){if(A[l.id]!==void 0)return A[l.id];let e;switch(l.type){case"DirectionalLight":e={direction:new y,color:new g4};break;case"SpotLight":e={position:new y,direction:new y,color:new g4,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new y,color:new g4,distance:0,decay:0};break;case"HemisphereLight":e={direction:new y,skyColor:new g4,groundColor:new g4};break;case"RectAreaLight":e={color:new g4,position:new y,halfWidth:new y,halfHeight:new y};break}return A[l.id]=e,e}}}function $s(){const A={};return{get:function(l){if(A[l.id]!==void 0)return A[l.id];let e;switch(l.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n4};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n4};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n4,shadowCameraNear:1,shadowCameraFar:1e3};break}return A[l.id]=e,e}}}let lA=0;function eA(A,l){return(l.castShadow?2:0)-(A.castShadow?2:0)+(l.map?1:0)-(A.map?1:0)}function tA(A,l){const e=new Xs,t=$s(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)n.probe.push(new y);const i=new y,s=new R4,r=new R4;function o(m,c){let h=0,d=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let q=0,u=0,g=0,w=0,x=0,p=0,E=0,v=0,I=0,B=0;m.sort(eA);const Q=c!==!0?Math.PI:1;for(let z=0,Z=m.length;z<Z;z++){const L=m[z],S=L.color,P=L.intensity,W=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=S.r*P*Q,d+=S.g*P*Q,f+=S.b*P*Q;else if(L.isLightProbe)for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],P);else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*Q),L.castShadow){const D=L.shadow,R=t.get(L);R.shadowBias=D.bias,R.shadowNormalBias=D.normalBias,R.shadowRadius=D.radius,R.shadowMapSize=D.mapSize,n.directionalShadow[q]=R,n.directionalShadowMap[q]=$,n.directionalShadowMatrix[q]=L.shadow.matrix,p++}n.directional[q]=K,q++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(S).multiplyScalar(P*Q),K.distance=W,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[g]=K;const D=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,D.updateMatrices(L),L.castShadow&&B++),n.spotLightMatrix[g]=D.matrix,L.castShadow){const R=t.get(L);R.shadowBias=D.bias,R.shadowNormalBias=D.normalBias,R.shadowRadius=D.radius,R.shadowMapSize=D.mapSize,n.spotShadow[g]=R,n.spotShadowMap[g]=$,v++}g++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(S).multiplyScalar(P),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=K,w++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*Q),K.distance=L.distance,K.decay=L.decay,L.castShadow){const D=L.shadow,R=t.get(L);R.shadowBias=D.bias,R.shadowNormalBias=D.normalBias,R.shadowRadius=D.radius,R.shadowMapSize=D.mapSize,R.shadowCameraNear=D.camera.near,R.shadowCameraFar=D.camera.far,n.pointShadow[u]=R,n.pointShadowMap[u]=$,n.pointShadowMatrix[u]=L.shadow.matrix,E++}n.point[u]=K,u++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(P*Q),K.groundColor.copy(L.groundColor).multiplyScalar(P*Q),n.hemi[x]=K,x++}}w>0&&(l.isWebGL2||A.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=r4.LTC_FLOAT_1,n.rectAreaLTC2=r4.LTC_FLOAT_2):A.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=r4.LTC_HALF_1,n.rectAreaLTC2=r4.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==q||T.pointLength!==u||T.spotLength!==g||T.rectAreaLength!==w||T.hemiLength!==x||T.numDirectionalShadows!==p||T.numPointShadows!==E||T.numSpotShadows!==v||T.numSpotMaps!==I)&&(n.directional.length=q,n.spot.length=g,n.rectArea.length=w,n.point.length=u,n.hemi.length=x,n.directionalShadow.length=p,n.directionalShadowMap.length=p,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=p,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+I-B,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=B,T.directionalLength=q,T.pointLength=u,T.spotLength=g,T.rectAreaLength=w,T.hemiLength=x,T.numDirectionalShadows=p,T.numPointShadows=E,T.numSpotShadows=v,T.numSpotMaps=I,n.version=lA++)}function a(m,c){let h=0,d=0,f=0,q=0,u=0;const g=c.matrixWorldInverse;for(let w=0,x=m.length;w<x;w++){const p=m[w];if(p.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),h++}else if(p.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(p.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),f++}else if(p.isRectAreaLight){const E=n.rectArea[q];E.position.setFromMatrixPosition(p.matrixWorld),E.position.applyMatrix4(g),r.identity(),s.copy(p.matrixWorld),s.premultiply(g),r.extractRotation(s),E.halfWidth.set(p.width*.5,0,0),E.halfHeight.set(0,p.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),q++}else if(p.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(p.matrixWorld),E.position.applyMatrix4(g),d++}else if(p.isHemisphereLight){const E=n.hemi[u];E.direction.setFromMatrixPosition(p.matrixWorld),E.direction.transformDirection(g),u++}}}return{setup:o,setupView:a,state:n}}function u6(A,l){const e=new tA(A,l),t=[],n=[];function i(){t.length=0,n.length=0}function s(c){t.push(c)}function r(c){n.push(c)}function o(c){e.setup(t,c)}function a(c){e.setupView(t,c)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e},setupLights:o,setupLightsView:a,pushLight:s,pushShadow:r}}function nA(A,l){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let o;return r===void 0?(o=new u6(A,l),e.set(i,[o])):s>=r.length?(o=new u6(A,l),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class iA extends o1{constructor(l){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ne,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(l)}copy(l){return super.copy(l),this.depthPacking=l.depthPacking,this.map=l.map,this.alphaMap=l.alphaMap,this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this}}class sA extends o1{constructor(l){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new y,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(l)}copy(l){return super.copy(l),this.referencePosition.copy(l.referencePosition),this.nearDistance=l.nearDistance,this.farDistance=l.farDistance,this.map=l.map,this.alphaMap=l.alphaMap,this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oA(A,l,e){let t=new N7;const n=new n4,i=new n4,s=new W4,r=new iA({depthPacking:ie}),o=new sA,a={},m=e.maxTextureSize,c={0:xl,1:a1,2:bl},h=new $4({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new n4},radius:{value:4}},vertexShader:AA,fragmentShader:rA}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const f=new fl;f.setAttribute("position",new Bl(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const q=new I4(f,h),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0,this.render=function(p,E,v){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||p.length===0)return;const I=A.getRenderTarget(),B=A.getActiveCubeFace(),Q=A.getActiveMipmapLevel(),T=A.state;T.setBlending(R1),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let z=0,Z=p.length;z<Z;z++){const L=p[z],S=L.shadow;if(S===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(S.autoUpdate===!1&&S.needsUpdate===!1)continue;n.copy(S.mapSize);const P=S.getFrameExtents();if(n.multiply(P),i.copy(S.mapSize),(n.x>m||n.y>m)&&(n.x>m&&(i.x=Math.floor(m/P.x),n.x=i.x*P.x,S.mapSize.x=i.x),n.y>m&&(i.y=Math.floor(m/P.y),n.y=i.y*P.y,S.mapSize.y=i.y)),S.map===null){const $=this.type!==A2?{minFilter:ol,magFilter:ol}:{};S.map=new wl(n.x,n.y,$),S.map.texture.name=L.name+".shadowMap",S.camera.updateProjectionMatrix()}A.setRenderTarget(S.map),A.clear();const W=S.getViewportCount();for(let $=0;$<W;$++){const K=S.getViewport($);s.set(i.x*K.x,i.y*K.y,i.x*K.z,i.y*K.w),T.viewport(s),S.updateMatrices(L,$),t=S.getFrustum(),x(E,v,S.camera,L,this.type)}S.isPointLightShadow!==!0&&this.type===A2&&g(S,v),S.needsUpdate=!1}u.needsUpdate=!1,A.setRenderTarget(I,B,Q)};function g(p,E){const v=l.update(q);h.defines.VSM_SAMPLES!==p.blurSamples&&(h.defines.VSM_SAMPLES=p.blurSamples,d.defines.VSM_SAMPLES=p.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),p.mapPass===null&&(p.mapPass=new wl(n.x,n.y)),h.uniforms.shadow_pass.value=p.map.texture,h.uniforms.resolution.value=p.mapSize,h.uniforms.radius.value=p.radius,A.setRenderTarget(p.mapPass),A.clear(),A.renderBufferDirect(E,null,v,h,q,null),d.uniforms.shadow_pass.value=p.mapPass.texture,d.uniforms.resolution.value=p.mapSize,d.uniforms.radius.value=p.radius,A.setRenderTarget(p.map),A.clear(),A.renderBufferDirect(E,null,v,d,q,null)}function w(p,E,v,I,B,Q){let T=null;const z=v.isPointLight===!0?p.customDistanceMaterial:p.customDepthMaterial;if(z!==void 0?T=z:T=v.isPointLight===!0?o:r,A.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const Z=T.uuid,L=E.uuid;let S=a[Z];S===void 0&&(S={},a[Z]=S);let P=S[L];P===void 0&&(P=T.clone(),S[L]=P),T=P}return T.visible=E.visible,T.wireframe=E.wireframe,Q===A2?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:c[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,v.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(T.referencePosition.setFromMatrixPosition(v.matrixWorld),T.nearDistance=I,T.farDistance=B),T}function x(p,E,v,I,B){if(p.visible===!1)return;if(p.layers.test(E.layers)&&(p.isMesh||p.isLine||p.isPoints)&&(p.castShadow||p.receiveShadow&&B===A2)&&(!p.frustumCulled||t.intersectsObject(p))){p.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,p.matrixWorld);const z=l.update(p),Z=p.material;if(Array.isArray(Z)){const L=z.groups;for(let S=0,P=L.length;S<P;S++){const W=L[S],$=Z[W.materialIndex];if($&&$.visible){const K=w(p,$,I,v.near,v.far,B);A.renderBufferDirect(v,null,z,K,p,W)}}}else if(Z.visible){const L=w(p,Z,I,v.near,v.far,B);A.renderBufferDirect(v,null,z,L,p,null)}}const T=p.children;for(let z=0,Z=T.length;z<Z;z++)x(T[z],E,v,I,B)}}function aA(A,l,e){const t=e.isWebGL2;function n(){let b=!1;const Y=new W4;let l4=null;const h4=new W4(0,0,0,0);return{setMask:function(f4){l4!==f4&&!b&&(A.colorMask(f4,f4,f4,f4),l4=f4)},setLocked:function(f4){b=f4},setClear:function(f4,Y4,hl,Ml,k1){k1===!0&&(f4*=Ml,Y4*=Ml,hl*=Ml),Y.set(f4,Y4,hl,Ml),h4.equals(Y)===!1&&(A.clearColor(f4,Y4,hl,Ml),h4.copy(Y))},reset:function(){b=!1,l4=null,h4.set(-1,0,0,0)}}}function i(){let b=!1,Y=null,l4=null,h4=null;return{setTest:function(f4){f4?D4(2929):M4(2929)},setMask:function(f4){Y!==f4&&!b&&(A.depthMask(f4),Y=f4)},setFunc:function(f4){if(l4!==f4){switch(f4){case _9:A.depthFunc(512);break;case y9:A.depthFunc(519);break;case I9:A.depthFunc(513);break;case q7:A.depthFunc(515);break;case T9:A.depthFunc(514);break;case b9:A.depthFunc(518);break;case S9:A.depthFunc(516);break;case F9:A.depthFunc(517);break;default:A.depthFunc(515)}l4=f4}},setLocked:function(f4){b=f4},setClear:function(f4){h4!==f4&&(A.clearDepth(f4),h4=f4)},reset:function(){b=!1,Y=null,l4=null,h4=null}}}function s(){let b=!1,Y=null,l4=null,h4=null,f4=null,Y4=null,hl=null,Ml=null,k1=null;return{setTest:function(el){b||(el?D4(2960):M4(2960))},setMask:function(el){Y!==el&&!b&&(A.stencilMask(el),Y=el)},setFunc:function(el,c1,zl){(l4!==el||h4!==c1||f4!==zl)&&(A.stencilFunc(el,c1,zl),l4=el,h4=c1,f4=zl)},setOp:function(el,c1,zl){(Y4!==el||hl!==c1||Ml!==zl)&&(A.stencilOp(el,c1,zl),Y4=el,hl=c1,Ml=zl)},setLocked:function(el){b=el},setClear:function(el){k1!==el&&(A.clearStencil(el),k1=el)},reset:function(){b=!1,Y=null,l4=null,h4=null,f4=null,Y4=null,hl=null,Ml=null,k1=null}}}const r=new n,o=new i,a=new s,m=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,q=[],u=null,g=!1,w=null,x=null,p=null,E=null,v=null,I=null,B=null,Q=!1,T=null,z=null,Z=null,L=null,S=null;const P=A.getParameter(35661);let W=!1,$=0;const K=A.getParameter(7938);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=$>=2);let D=null,R={};const t4=A.getParameter(3088),X=A.getParameter(2978),A4=new W4().fromArray(t4),u4=new W4().fromArray(X);function _4(b,Y,l4){const h4=new Uint8Array(4),f4=A.createTexture();A.bindTexture(b,f4),A.texParameteri(b,10241,9728),A.texParameteri(b,10240,9728);for(let Y4=0;Y4<l4;Y4++)A.texImage2D(Y+Y4,0,6408,1,1,0,6408,5121,h4);return f4}const j={};j[3553]=_4(3553,3553,1),j[34067]=_4(34067,34069,6),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D4(2929),o.setFunc(q7),o4(!1),b4(i8),D4(2884),s4(R1);function D4(b){h[b]!==!0&&(A.enable(b),h[b]=!0)}function M4(b){h[b]!==!1&&(A.disable(b),h[b]=!1)}function y4(b,Y){return d[b]!==Y?(A.bindFramebuffer(b,Y),d[b]=Y,t&&(b===36009&&(d[36160]=Y),b===36160&&(d[36009]=Y)),!0):!1}function a4(b,Y){let l4=q,h4=!1;if(b)if(l4=f.get(Y),l4===void 0&&(l4=[],f.set(Y,l4)),b.isWebGLMultipleRenderTargets){const f4=b.texture;if(l4.length!==f4.length||l4[0]!==36064){for(let Y4=0,hl=f4.length;Y4<hl;Y4++)l4[Y4]=36064+Y4;l4.length=f4.length,h4=!0}}else l4[0]!==36064&&(l4[0]=36064,h4=!0);else l4[0]!==1029&&(l4[0]=1029,h4=!0);h4&&(e.isWebGL2?A.drawBuffers(l4):l.get("WEBGL_draw_buffers").drawBuffersWEBGL(l4))}function L4(b){return u!==b?(A.useProgram(b),u=b,!0):!1}const J={[v3]:32774,[f9]:32778,[g9]:32779};if(t)J[o8]=32775,J[a8]=32776;else{const b=l.get("EXT_blend_minmax");b!==null&&(J[o8]=b.MIN_EXT,J[a8]=b.MAX_EXT)}const O={[p9]:0,[x9]:1,[B9]:768,[e0]:770,[v9]:776,[C9]:774,[M9]:772,[w9]:769,[t0]:771,[Q9]:775,[E9]:773};function s4(b,Y,l4,h4,f4,Y4,hl,Ml){if(b===R1){g===!0&&(M4(3042),g=!1);return}if(g===!1&&(D4(3042),g=!0),b!==q9){if(b!==w||Ml!==Q){if((x!==v3||v!==v3)&&(A.blendEquation(32774),x=v3,v=v3),Ml)switch(b){case e3:A.blendFuncSeparate(1,771,1,771);break;case s8:A.blendFunc(1,1);break;case A8:A.blendFuncSeparate(0,769,0,1);break;case r8:A.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case e3:A.blendFuncSeparate(770,771,1,771);break;case s8:A.blendFunc(770,1);break;case A8:A.blendFuncSeparate(0,769,0,1);break;case r8:A.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}p=null,E=null,I=null,B=null,w=b,Q=Ml}return}f4=f4||Y,Y4=Y4||l4,hl=hl||h4,(Y!==x||f4!==v)&&(A.blendEquationSeparate(J[Y],J[f4]),x=Y,v=f4),(l4!==p||h4!==E||Y4!==I||hl!==B)&&(A.blendFuncSeparate(O[l4],O[h4],O[Y4],O[hl]),p=l4,E=h4,I=Y4,B=hl),w=b,Q=null}function d4(b,Y){b.side===bl?M4(2884):D4(2884);let l4=b.side===xl;Y&&(l4=!l4),o4(l4),b.blending===e3&&b.transparent===!1?s4(R1):s4(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha),o.setFunc(b.depthFunc),o.setTest(b.depthTest),o.setMask(b.depthWrite),r.setMask(b.colorWrite);const h4=b.stencilWrite;a.setTest(h4),h4&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),w4(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?D4(32926):M4(32926)}function o4(b){T!==b&&(b?A.frontFace(2304):A.frontFace(2305),T=b)}function b4(b){b!==h9?(D4(2884),b!==z&&(b===i8?A.cullFace(1029):b===u9?A.cullFace(1028):A.cullFace(1032))):M4(2884),z=b}function C4(b){b!==Z&&(W&&A.lineWidth(b),Z=b)}function w4(b,Y,l4){b?(D4(32823),(L!==Y||S!==l4)&&(A.polygonOffset(Y,l4),L=Y,S=l4)):M4(32823)}function X4(b){b?D4(3089):M4(3089)}function V4(b){b===void 0&&(b=33984+P-1),D!==b&&(A.activeTexture(b),D=b)}function _(b,Y,l4){l4===void 0&&(D===null?l4=33984+P-1:l4=D);let h4=R[l4];h4===void 0&&(h4={type:void 0,texture:void 0},R[l4]=h4),(h4.type!==b||h4.texture!==Y)&&(D!==l4&&(A.activeTexture(l4),D=l4),A.bindTexture(b,Y||j[b]),h4.type=b,h4.texture=Y)}function M(){const b=R[D];b!==void 0&&b.type!==void 0&&(A.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function G(){try{A.compressedTexImage2D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function e4(){try{A.compressedTexImage3D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function i4(){try{A.texSubImage2D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function m4(){try{A.texSubImage3D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function v4(){try{A.compressedTexSubImage2D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function c4(){try{A.compressedTexSubImage3D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function V(){try{A.texStorage2D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function p4(){try{A.texStorage3D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Q4(){try{A.texImage2D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function q4(){try{A.texImage3D.apply(A,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function E4(b){A4.equals(b)===!1&&(A.scissor(b.x,b.y,b.z,b.w),A4.copy(b))}function x4(b){u4.equals(b)===!1&&(A.viewport(b.x,b.y,b.z,b.w),u4.copy(b))}function k4(b,Y){let l4=c.get(Y);l4===void 0&&(l4=new WeakMap,c.set(Y,l4));let h4=l4.get(b);h4===void 0&&(h4=A.getUniformBlockIndex(Y,b.name),l4.set(b,h4))}function ll(b,Y){const h4=c.get(Y).get(b);m.get(b)!==h4&&(A.uniformBlockBinding(Y,h4,b.__bindingPointIndex),m.set(b,h4))}function cl(){A.disable(3042),A.disable(2884),A.disable(2929),A.disable(32823),A.disable(3089),A.disable(2960),A.disable(32926),A.blendEquation(32774),A.blendFunc(1,0),A.blendFuncSeparate(1,0,1,0),A.colorMask(!0,!0,!0,!0),A.clearColor(0,0,0,0),A.depthMask(!0),A.depthFunc(513),A.clearDepth(1),A.stencilMask(4294967295),A.stencilFunc(519,0,4294967295),A.stencilOp(7680,7680,7680),A.clearStencil(0),A.cullFace(1029),A.frontFace(2305),A.polygonOffset(0,0),A.activeTexture(33984),A.bindFramebuffer(36160,null),t===!0&&(A.bindFramebuffer(36009,null),A.bindFramebuffer(36008,null)),A.useProgram(null),A.lineWidth(1),A.scissor(0,0,A.canvas.width,A.canvas.height),A.viewport(0,0,A.canvas.width,A.canvas.height),h={},D=null,R={},d={},f=new WeakMap,q=[],u=null,g=!1,w=null,x=null,p=null,E=null,v=null,I=null,B=null,Q=!1,T=null,z=null,Z=null,L=null,S=null,A4.set(0,0,A.canvas.width,A.canvas.height),u4.set(0,0,A.canvas.width,A.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D4,disable:M4,bindFramebuffer:y4,drawBuffers:a4,useProgram:L4,setBlending:s4,setMaterial:d4,setFlipSided:o4,setCullFace:b4,setLineWidth:C4,setPolygonOffset:w4,setScissorTest:X4,activeTexture:V4,bindTexture:_,unbindTexture:M,compressedTexImage2D:G,compressedTexImage3D:e4,texImage2D:Q4,texImage3D:q4,updateUBOMapping:k4,uniformBlockBinding:ll,texStorage2D:V,texStorage3D:p4,texSubImage2D:i4,texSubImage3D:m4,compressedTexSubImage2D:v4,compressedTexSubImage3D:c4,scissor:E4,viewport:x4,reset:cl}}function mA(A,l,e,t,n,i,s){const r=n.isWebGL2,o=n.maxTextures,a=n.maxCubemapSize,m=n.maxTextureSize,c=n.maxSamples,h=l.has("WEBGL_multisampled_render_to_texture")?l.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),f=new WeakMap;let q;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(_,M){return g?new OffscreenCanvas(_,M):f2("canvas")}function x(_,M,G,e4){let i4=1;if((_.width>e4||_.height>e4)&&(i4=e4/Math.max(_.width,_.height)),i4<1||M===!0)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap){const m4=M?h5:Math.floor,v4=m4(i4*_.width),c4=m4(i4*_.height);q===void 0&&(q=w(v4,c4));const V=G?w(v4,c4):q;return V.width=v4,V.height=c4,V.getContext("2d").drawImage(_,0,0,v4,c4),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+v4+"x"+c4+")."),V}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function p(_){return M7(_.width)&&M7(_.height)}function E(_){return r?!1:_.wrapS!==Vl||_.wrapT!==Vl||_.minFilter!==ol&&_.minFilter!==Il}function v(_,M){return _.generateMipmaps&&M&&_.minFilter!==ol&&_.minFilter!==Il}function I(_){A.generateMipmap(_)}function B(_,M,G,e4,i4=!1){if(r===!1)return M;if(_!==null){if(A[_]!==void 0)return A[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let m4=M;return M===6403&&(G===5126&&(m4=33326),G===5131&&(m4=33325),G===5121&&(m4=33321)),M===33319&&(G===5126&&(m4=33328),G===5131&&(m4=33327),G===5121&&(m4=33323)),M===6408&&(G===5126&&(m4=34836),G===5131&&(m4=34842),G===5121&&(m4=e4===P4&&i4===!1?35907:32856),G===32819&&(m4=32854),G===32820&&(m4=32855)),(m4===33325||m4===33326||m4===33327||m4===33328||m4===34842||m4===34836)&&l.get("EXT_color_buffer_float"),m4}function Q(_,M,G){return v(_,G)===!0||_.isFramebufferTexture&&_.minFilter!==ol&&_.minFilter!==Il?Math.log2(Math.max(M.width,M.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?M.mipmaps.length:1}function T(_){return _===ol||_===p7||_===x7?9728:9729}function z(_){const M=_.target;M.removeEventListener("dispose",z),L(M),M.isVideoTexture&&f.delete(M)}function Z(_){const M=_.target;M.removeEventListener("dispose",Z),P(M)}function L(_){const M=t.get(_);if(M.__webglInit===void 0)return;const G=_.source,e4=u.get(G);if(e4){const i4=e4[M.__cacheKey];i4.usedTimes--,i4.usedTimes===0&&S(_),Object.keys(e4).length===0&&u.delete(G)}t.remove(_)}function S(_){const M=t.get(_);A.deleteTexture(M.__webglTexture);const G=_.source,e4=u.get(G);delete e4[M.__cacheKey],s.memory.textures--}function P(_){const M=_.texture,G=t.get(_),e4=t.get(M);if(e4.__webglTexture!==void 0&&(A.deleteTexture(e4.__webglTexture),s.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let i4=0;i4<6;i4++)A.deleteFramebuffer(G.__webglFramebuffer[i4]),G.__webglDepthbuffer&&A.deleteRenderbuffer(G.__webglDepthbuffer[i4]);else{if(A.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&A.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&A.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let i4=0;i4<G.__webglColorRenderbuffer.length;i4++)G.__webglColorRenderbuffer[i4]&&A.deleteRenderbuffer(G.__webglColorRenderbuffer[i4]);G.__webglDepthRenderbuffer&&A.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(_.isWebGLMultipleRenderTargets)for(let i4=0,m4=M.length;i4<m4;i4++){const v4=t.get(M[i4]);v4.__webglTexture&&(A.deleteTexture(v4.__webglTexture),s.memory.textures--),t.remove(M[i4])}t.remove(M),t.remove(_)}let W=0;function $(){W=0}function K(){const _=W;return _>=o&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+o),W+=1,_}function D(_){const M=[];return M.push(_.wrapS),M.push(_.wrapT),M.push(_.wrapR||0),M.push(_.magFilter),M.push(_.minFilter),M.push(_.anisotropy),M.push(_.internalFormat),M.push(_.format),M.push(_.type),M.push(_.generateMipmaps),M.push(_.premultiplyAlpha),M.push(_.flipY),M.push(_.unpackAlignment),M.push(_.encoding),M.join()}function R(_,M){const G=t.get(_);if(_.isVideoTexture&&X4(_),_.isRenderTargetTexture===!1&&_.version>0&&G.__version!==_.version){const e4=_.image;if(e4===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(e4.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{M4(G,_,M);return}}e.bindTexture(3553,G.__webglTexture,33984+M)}function t4(_,M){const G=t.get(_);if(_.version>0&&G.__version!==_.version){M4(G,_,M);return}e.bindTexture(35866,G.__webglTexture,33984+M)}function X(_,M){const G=t.get(_);if(_.version>0&&G.__version!==_.version){M4(G,_,M);return}e.bindTexture(32879,G.__webglTexture,33984+M)}function A4(_,M){const G=t.get(_);if(_.version>0&&G.__version!==_.version){y4(G,_,M);return}e.bindTexture(34067,G.__webglTexture,33984+M)}const u4={[L1]:10497,[Vl]:33071,[c5]:33648},_4={[ol]:9728,[p7]:9984,[x7]:9986,[Il]:9729,[A0]:9985,[G3]:9987};function j(_,M,G){if(G?(A.texParameteri(_,10242,u4[M.wrapS]),A.texParameteri(_,10243,u4[M.wrapT]),(_===32879||_===35866)&&A.texParameteri(_,32882,u4[M.wrapR]),A.texParameteri(_,10240,_4[M.magFilter]),A.texParameteri(_,10241,_4[M.minFilter])):(A.texParameteri(_,10242,33071),A.texParameteri(_,10243,33071),(_===32879||_===35866)&&A.texParameteri(_,32882,33071),(M.wrapS!==Vl||M.wrapT!==Vl)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),A.texParameteri(_,10240,T(M.magFilter)),A.texParameteri(_,10241,T(M.minFilter)),M.minFilter!==ol&&M.minFilter!==Il&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),l.has("EXT_texture_filter_anisotropic")===!0){const e4=l.get("EXT_texture_filter_anisotropic");if(M.type===Rl&&l.has("OES_texture_float_linear")===!1||r===!1&&M.type===u2&&l.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||t.get(M).__currentAnisotropy)&&(A.texParameterf(_,e4.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),t.get(M).__currentAnisotropy=M.anisotropy)}}function D4(_,M){let G=!1;_.__webglInit===void 0&&(_.__webglInit=!0,M.addEventListener("dispose",z));const e4=M.source;let i4=u.get(e4);i4===void 0&&(i4={},u.set(e4,i4));const m4=D(M);if(m4!==_.__cacheKey){i4[m4]===void 0&&(i4[m4]={texture:A.createTexture(),usedTimes:0},s.memory.textures++,G=!0),i4[m4].usedTimes++;const v4=i4[_.__cacheKey];v4!==void 0&&(i4[_.__cacheKey].usedTimes--,v4.usedTimes===0&&S(M)),_.__cacheKey=m4,_.__webglTexture=i4[m4].texture}return G}function M4(_,M,G){let e4=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(e4=35866),M.isData3DTexture&&(e4=32879);const i4=D4(_,M),m4=M.source;e.bindTexture(e4,_.__webglTexture,33984+G);const v4=t.get(m4);if(m4.version!==v4.__version||i4===!0){e.activeTexture(33984+G),A.pixelStorei(37440,M.flipY),A.pixelStorei(37441,M.premultiplyAlpha),A.pixelStorei(3317,M.unpackAlignment),A.pixelStorei(37443,0);const c4=E(M)&&p(M.image)===!1;let V=x(M.image,c4,!1,m);V=V4(M,V);const p4=p(V)||r,Q4=i.convert(M.format,M.encoding);let q4=i.convert(M.type),E4=B(M.internalFormat,Q4,q4,M.encoding,M.isVideoTexture);j(e4,M,p4);let x4;const k4=M.mipmaps,ll=r&&M.isVideoTexture!==!0,cl=v4.__version===void 0||i4===!0,b=Q(M,V,p4);if(M.isDepthTexture)E4=6402,r?M.type===Rl?E4=36012:M.type===$1?E4=33190:M.type===T3?E4=35056:E4=33189:M.type===Rl&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===t3&&E4===6402&&M.type!==r0&&M.type!==$1&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$1,q4=i.convert(M.type)),M.format===U3&&E4===6402&&(E4=34041,M.type!==T3&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=T3,q4=i.convert(M.type))),cl&&(ll?e.texStorage2D(3553,1,E4,V.width,V.height):e.texImage2D(3553,0,E4,V.width,V.height,0,Q4,q4,null));else if(M.isDataTexture)if(k4.length>0&&p4){ll&&cl&&e.texStorage2D(3553,b,E4,k4[0].width,k4[0].height);for(let Y=0,l4=k4.length;Y<l4;Y++)x4=k4[Y],ll?e.texSubImage2D(3553,Y,0,0,x4.width,x4.height,Q4,q4,x4.data):e.texImage2D(3553,Y,E4,x4.width,x4.height,0,Q4,q4,x4.data);M.generateMipmaps=!1}else ll?(cl&&e.texStorage2D(3553,b,E4,V.width,V.height),e.texSubImage2D(3553,0,0,0,V.width,V.height,Q4,q4,V.data)):e.texImage2D(3553,0,E4,V.width,V.height,0,Q4,q4,V.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ll&&cl&&e.texStorage3D(35866,b,E4,k4[0].width,k4[0].height,V.depth);for(let Y=0,l4=k4.length;Y<l4;Y++)x4=k4[Y],M.format!==jl?Q4!==null?ll?e.compressedTexSubImage3D(35866,Y,0,0,0,x4.width,x4.height,V.depth,Q4,x4.data,0,0):e.compressedTexImage3D(35866,Y,E4,x4.width,x4.height,V.depth,0,x4.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ll?e.texSubImage3D(35866,Y,0,0,0,x4.width,x4.height,V.depth,Q4,q4,x4.data):e.texImage3D(35866,Y,E4,x4.width,x4.height,V.depth,0,Q4,q4,x4.data)}else{ll&&cl&&e.texStorage2D(3553,b,E4,k4[0].width,k4[0].height);for(let Y=0,l4=k4.length;Y<l4;Y++)x4=k4[Y],M.format!==jl?Q4!==null?ll?e.compressedTexSubImage2D(3553,Y,0,0,x4.width,x4.height,Q4,x4.data):e.compressedTexImage2D(3553,Y,E4,x4.width,x4.height,0,x4.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ll?e.texSubImage2D(3553,Y,0,0,x4.width,x4.height,Q4,q4,x4.data):e.texImage2D(3553,Y,E4,x4.width,x4.height,0,Q4,q4,x4.data)}else if(M.isDataArrayTexture)ll?(cl&&e.texStorage3D(35866,b,E4,V.width,V.height,V.depth),e.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,Q4,q4,V.data)):e.texImage3D(35866,0,E4,V.width,V.height,V.depth,0,Q4,q4,V.data);else if(M.isData3DTexture)ll?(cl&&e.texStorage3D(32879,b,E4,V.width,V.height,V.depth),e.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,Q4,q4,V.data)):e.texImage3D(32879,0,E4,V.width,V.height,V.depth,0,Q4,q4,V.data);else if(M.isFramebufferTexture){if(cl)if(ll)e.texStorage2D(3553,b,E4,V.width,V.height);else{let Y=V.width,l4=V.height;for(let h4=0;h4<b;h4++)e.texImage2D(3553,h4,E4,Y,l4,0,Q4,q4,null),Y>>=1,l4>>=1}}else if(k4.length>0&&p4){ll&&cl&&e.texStorage2D(3553,b,E4,k4[0].width,k4[0].height);for(let Y=0,l4=k4.length;Y<l4;Y++)x4=k4[Y],ll?e.texSubImage2D(3553,Y,0,0,Q4,q4,x4):e.texImage2D(3553,Y,E4,Q4,q4,x4);M.generateMipmaps=!1}else ll?(cl&&e.texStorage2D(3553,b,E4,V.width,V.height),e.texSubImage2D(3553,0,0,0,Q4,q4,V)):e.texImage2D(3553,0,E4,Q4,q4,V);v(M,p4)&&I(e4),v4.__version=m4.version,M.onUpdate&&M.onUpdate(M)}_.__version=M.version}function y4(_,M,G){if(M.image.length!==6)return;const e4=D4(_,M),i4=M.source;e.bindTexture(34067,_.__webglTexture,33984+G);const m4=t.get(i4);if(i4.version!==m4.__version||e4===!0){e.activeTexture(33984+G),A.pixelStorei(37440,M.flipY),A.pixelStorei(37441,M.premultiplyAlpha),A.pixelStorei(3317,M.unpackAlignment),A.pixelStorei(37443,0);const v4=M.isCompressedTexture||M.image[0].isCompressedTexture,c4=M.image[0]&&M.image[0].isDataTexture,V=[];for(let Y=0;Y<6;Y++)!v4&&!c4?V[Y]=x(M.image[Y],!1,!0,a):V[Y]=c4?M.image[Y].image:M.image[Y],V[Y]=V4(M,V[Y]);const p4=V[0],Q4=p(p4)||r,q4=i.convert(M.format,M.encoding),E4=i.convert(M.type),x4=B(M.internalFormat,q4,E4,M.encoding),k4=r&&M.isVideoTexture!==!0,ll=m4.__version===void 0||e4===!0;let cl=Q(M,p4,Q4);j(34067,M,Q4);let b;if(v4){k4&&ll&&e.texStorage2D(34067,cl,x4,p4.width,p4.height);for(let Y=0;Y<6;Y++){b=V[Y].mipmaps;for(let l4=0;l4<b.length;l4++){const h4=b[l4];M.format!==jl?q4!==null?k4?e.compressedTexSubImage2D(34069+Y,l4,0,0,h4.width,h4.height,q4,h4.data):e.compressedTexImage2D(34069+Y,l4,x4,h4.width,h4.height,0,h4.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k4?e.texSubImage2D(34069+Y,l4,0,0,h4.width,h4.height,q4,E4,h4.data):e.texImage2D(34069+Y,l4,x4,h4.width,h4.height,0,q4,E4,h4.data)}}}else{b=M.mipmaps,k4&&ll&&(b.length>0&&cl++,e.texStorage2D(34067,cl,x4,V[0].width,V[0].height));for(let Y=0;Y<6;Y++)if(c4){k4?e.texSubImage2D(34069+Y,0,0,0,V[Y].width,V[Y].height,q4,E4,V[Y].data):e.texImage2D(34069+Y,0,x4,V[Y].width,V[Y].height,0,q4,E4,V[Y].data);for(let l4=0;l4<b.length;l4++){const f4=b[l4].image[Y].image;k4?e.texSubImage2D(34069+Y,l4+1,0,0,f4.width,f4.height,q4,E4,f4.data):e.texImage2D(34069+Y,l4+1,x4,f4.width,f4.height,0,q4,E4,f4.data)}}else{k4?e.texSubImage2D(34069+Y,0,0,0,q4,E4,V[Y]):e.texImage2D(34069+Y,0,x4,q4,E4,V[Y]);for(let l4=0;l4<b.length;l4++){const h4=b[l4];k4?e.texSubImage2D(34069+Y,l4+1,0,0,q4,E4,h4.image[Y]):e.texImage2D(34069+Y,l4+1,x4,q4,E4,h4.image[Y])}}}v(M,Q4)&&I(34067),m4.__version=i4.version,M.onUpdate&&M.onUpdate(M)}_.__version=M.version}function a4(_,M,G,e4,i4){const m4=i.convert(G.format,G.encoding),v4=i.convert(G.type),c4=B(G.internalFormat,m4,v4,G.encoding);t.get(M).__hasExternalTextures||(i4===32879||i4===35866?e.texImage3D(i4,0,c4,M.width,M.height,M.depth,0,m4,v4,null):e.texImage2D(i4,0,c4,M.width,M.height,0,m4,v4,null)),e.bindFramebuffer(36160,_),w4(M)?h.framebufferTexture2DMultisampleEXT(36160,e4,i4,t.get(G).__webglTexture,0,C4(M)):(i4===3553||i4>=34069&&i4<=34074)&&A.framebufferTexture2D(36160,e4,i4,t.get(G).__webglTexture,0),e.bindFramebuffer(36160,null)}function L4(_,M,G){if(A.bindRenderbuffer(36161,_),M.depthBuffer&&!M.stencilBuffer){let e4=33189;if(G||w4(M)){const i4=M.depthTexture;i4&&i4.isDepthTexture&&(i4.type===Rl?e4=36012:i4.type===$1&&(e4=33190));const m4=C4(M);w4(M)?h.renderbufferStorageMultisampleEXT(36161,m4,e4,M.width,M.height):A.renderbufferStorageMultisample(36161,m4,e4,M.width,M.height)}else A.renderbufferStorage(36161,e4,M.width,M.height);A.framebufferRenderbuffer(36160,36096,36161,_)}else if(M.depthBuffer&&M.stencilBuffer){const e4=C4(M);G&&w4(M)===!1?A.renderbufferStorageMultisample(36161,e4,35056,M.width,M.height):w4(M)?h.renderbufferStorageMultisampleEXT(36161,e4,35056,M.width,M.height):A.renderbufferStorage(36161,34041,M.width,M.height),A.framebufferRenderbuffer(36160,33306,36161,_)}else{const e4=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let i4=0;i4<e4.length;i4++){const m4=e4[i4],v4=i.convert(m4.format,m4.encoding),c4=i.convert(m4.type),V=B(m4.internalFormat,v4,c4,m4.encoding),p4=C4(M);G&&w4(M)===!1?A.renderbufferStorageMultisample(36161,p4,V,M.width,M.height):w4(M)?h.renderbufferStorageMultisampleEXT(36161,p4,V,M.width,M.height):A.renderbufferStorage(36161,V,M.width,M.height)}}A.bindRenderbuffer(36161,null)}function J(_,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,_),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!t.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),R(M.depthTexture,0);const e4=t.get(M.depthTexture).__webglTexture,i4=C4(M);if(M.depthTexture.format===t3)w4(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,e4,0,i4):A.framebufferTexture2D(36160,36096,3553,e4,0);else if(M.depthTexture.format===U3)w4(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,e4,0,i4):A.framebufferTexture2D(36160,33306,3553,e4,0);else throw new Error("Unknown depthTexture format")}function O(_){const M=t.get(_),G=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");J(M.__webglFramebuffer,_)}else if(G){M.__webglDepthbuffer=[];for(let e4=0;e4<6;e4++)e.bindFramebuffer(36160,M.__webglFramebuffer[e4]),M.__webglDepthbuffer[e4]=A.createRenderbuffer(),L4(M.__webglDepthbuffer[e4],_,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=A.createRenderbuffer(),L4(M.__webglDepthbuffer,_,!1);e.bindFramebuffer(36160,null)}function s4(_,M,G){const e4=t.get(_);M!==void 0&&a4(e4.__webglFramebuffer,_,_.texture,36064,3553),G!==void 0&&O(_)}function d4(_){const M=_.texture,G=t.get(_),e4=t.get(M);_.addEventListener("dispose",Z),_.isWebGLMultipleRenderTargets!==!0&&(e4.__webglTexture===void 0&&(e4.__webglTexture=A.createTexture()),e4.__version=M.version,s.memory.textures++);const i4=_.isWebGLCubeRenderTarget===!0,m4=_.isWebGLMultipleRenderTargets===!0,v4=p(_)||r;if(i4){G.__webglFramebuffer=[];for(let c4=0;c4<6;c4++)G.__webglFramebuffer[c4]=A.createFramebuffer()}else{if(G.__webglFramebuffer=A.createFramebuffer(),m4)if(n.drawBuffers){const c4=_.texture;for(let V=0,p4=c4.length;V<p4;V++){const Q4=t.get(c4[V]);Q4.__webglTexture===void 0&&(Q4.__webglTexture=A.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&_.samples>0&&w4(_)===!1){const c4=m4?M:[M];G.__webglMultisampledFramebuffer=A.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let V=0;V<c4.length;V++){const p4=c4[V];G.__webglColorRenderbuffer[V]=A.createRenderbuffer(),A.bindRenderbuffer(36161,G.__webglColorRenderbuffer[V]);const Q4=i.convert(p4.format,p4.encoding),q4=i.convert(p4.type),E4=B(p4.internalFormat,Q4,q4,p4.encoding,_.isXRRenderTarget===!0),x4=C4(_);A.renderbufferStorageMultisample(36161,x4,E4,_.width,_.height),A.framebufferRenderbuffer(36160,36064+V,36161,G.__webglColorRenderbuffer[V])}A.bindRenderbuffer(36161,null),_.depthBuffer&&(G.__webglDepthRenderbuffer=A.createRenderbuffer(),L4(G.__webglDepthRenderbuffer,_,!0)),e.bindFramebuffer(36160,null)}}if(i4){e.bindTexture(34067,e4.__webglTexture),j(34067,M,v4);for(let c4=0;c4<6;c4++)a4(G.__webglFramebuffer[c4],_,M,36064,34069+c4);v(M,v4)&&I(34067),e.unbindTexture()}else if(m4){const c4=_.texture;for(let V=0,p4=c4.length;V<p4;V++){const Q4=c4[V],q4=t.get(Q4);e.bindTexture(3553,q4.__webglTexture),j(3553,Q4,v4),a4(G.__webglFramebuffer,_,Q4,36064+V,3553),v(Q4,v4)&&I(3553)}e.unbindTexture()}else{let c4=3553;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(r?c4=_.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(c4,e4.__webglTexture),j(c4,M,v4),a4(G.__webglFramebuffer,_,M,36064,c4),v(M,v4)&&I(c4),e.unbindTexture()}_.depthBuffer&&O(_)}function o4(_){const M=p(_)||r,G=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let e4=0,i4=G.length;e4<i4;e4++){const m4=G[e4];if(v(m4,M)){const v4=_.isWebGLCubeRenderTarget?34067:3553,c4=t.get(m4).__webglTexture;e.bindTexture(v4,c4),I(v4),e.unbindTexture()}}}function b4(_){if(r&&_.samples>0&&w4(_)===!1){const M=_.isWebGLMultipleRenderTargets?_.texture:[_.texture],G=_.width,e4=_.height;let i4=16384;const m4=[],v4=_.stencilBuffer?33306:36096,c4=t.get(_),V=_.isWebGLMultipleRenderTargets===!0;if(V)for(let p4=0;p4<M.length;p4++)e.bindFramebuffer(36160,c4.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(36160,36064+p4,36161,null),e.bindFramebuffer(36160,c4.__webglFramebuffer),A.framebufferTexture2D(36009,36064+p4,3553,null,0);e.bindFramebuffer(36008,c4.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,c4.__webglFramebuffer);for(let p4=0;p4<M.length;p4++){m4.push(36064+p4),_.depthBuffer&&m4.push(v4);const Q4=c4.__ignoreDepthValues!==void 0?c4.__ignoreDepthValues:!1;if(Q4===!1&&(_.depthBuffer&&(i4|=256),_.stencilBuffer&&(i4|=1024)),V&&A.framebufferRenderbuffer(36008,36064,36161,c4.__webglColorRenderbuffer[p4]),Q4===!0&&(A.invalidateFramebuffer(36008,[v4]),A.invalidateFramebuffer(36009,[v4])),V){const q4=t.get(M[p4]).__webglTexture;A.framebufferTexture2D(36009,36064,3553,q4,0)}A.blitFramebuffer(0,0,G,e4,0,0,G,e4,i4,9728),d&&A.invalidateFramebuffer(36008,m4)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),V)for(let p4=0;p4<M.length;p4++){e.bindFramebuffer(36160,c4.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(36160,36064+p4,36161,c4.__webglColorRenderbuffer[p4]);const Q4=t.get(M[p4]).__webglTexture;e.bindFramebuffer(36160,c4.__webglFramebuffer),A.framebufferTexture2D(36009,36064+p4,3553,Q4,0)}e.bindFramebuffer(36009,c4.__webglMultisampledFramebuffer)}}function C4(_){return Math.min(c,_.samples)}function w4(_){const M=t.get(_);return r&&_.samples>0&&l.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function X4(_){const M=s.render.frame;f.get(_)!==M&&(f.set(_,M),_.update())}function V4(_,M){const G=_.encoding,e4=_.format,i4=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===w7||G!==t1&&(G===P4?r===!1?l.has("EXT_sRGB")===!0&&e4===jl?(_.format=w7,_.minFilter=Il,_.generateMipmaps=!1):M=h0.sRGBToLinear(M):(e4!==jl||i4!==s3)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),M}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=R,this.setTexture2DArray=t4,this.setTexture3D=X,this.setTextureCube=A4,this.rebindTextures=s4,this.setupRenderTarget=d4,this.updateRenderTargetMipmap=o4,this.updateMultisampleRenderTarget=b4,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=a4,this.useMultisampledRTT=w4}function cA(A,l,e){const t=e.isWebGL2;function n(i,s=null){let r;if(i===s3)return 5121;if(i===Y9)return 32819;if(i===H9)return 32820;if(i===P9)return 5120;if(i===z9)return 5122;if(i===r0)return 5123;if(i===k9)return 5124;if(i===$1)return 5125;if(i===Rl)return 5126;if(i===u2)return t?5131:(r=l.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(i===K9)return 6406;if(i===jl)return 6408;if(i===V9)return 6409;if(i===j9)return 6410;if(i===t3)return 6402;if(i===U3)return 34041;if(i===W9)return 6403;if(i===O9)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(i===w7)return r=l.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(i===J9)return 36244;if(i===Z9)return 33319;if(i===X9)return 33320;if(i===$9)return 36249;if(i===Q5||i===v5||i===_5||i===y5)if(s===P4)if(r=l.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Q5)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===v5)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_5)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===y5)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=l.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Q5)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===v5)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_5)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===y5)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===m8||i===c8||i===h8||i===u8)if(r=l.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===m8)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===c8)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===h8)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===u8)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===le)return r=l.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===d8||i===q8)if(r=l.get("WEBGL_compressed_texture_etc"),r!==null){if(i===d8)return s===P4?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===q8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===f8||i===g8||i===p8||i===x8||i===B8||i===w8||i===M8||i===E8||i===C8||i===Q8||i===v8||i===_8||i===y8||i===I8)if(r=l.get("WEBGL_compressed_texture_astc"),r!==null){if(i===f8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===g8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===p8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===x8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===B8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===w8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===M8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===E8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===C8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Q8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===v8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===y8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===I8)return s===P4?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===T8)if(r=l.get("EXT_texture_compression_bptc"),r!==null){if(i===T8)return s===P4?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return i===T3?t?34042:(r=l.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):A[i]!==void 0?A[i]:null}return{convert:n}}class hA extends ql{constructor(l=[]){super(),this.isArrayCamera=!0,this.cameras=l}}class e1 extends Z4{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uA={type:"move"};class e7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new e1,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new e1,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new e1,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y),this._grip}dispatchEvent(l){return this._targetRay!==null&&this._targetRay.dispatchEvent(l),this._grip!==null&&this._grip.dispatchEvent(l),this._hand!==null&&this._hand.dispatchEvent(l),this}disconnect(l){return this.dispatchEvent({type:"disconnected",data:l}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(l,e,t){let n=null,i=null,s=null;const r=this._targetRay,o=this._grip,a=this._hand;if(l&&e.session.visibilityState!=="visible-blurred"){if(a&&l.hand){s=!0;for(const q of l.hand.values()){const u=e.getJointPose(q,t);if(a.joints[q.jointName]===void 0){const w=new e1;w.matrixAutoUpdate=!1,w.visible=!1,a.joints[q.jointName]=w,a.add(w)}const g=a.joints[q.jointName];u!==null&&(g.matrix.fromArray(u.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=u.radius),g.visible=u!==null}const m=a.joints["index-finger-tip"],c=a.joints["thumb-tip"],h=m.position.distanceTo(c.position),d=.02,f=.005;a.inputState.pinching&&h>d+f?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:l.handedness,target:this})):!a.inputState.pinching&&h<=d-f&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:l.handedness,target:this}))}else o!==null&&l.gripSpace&&(i=e.getPose(l.gripSpace,t),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1));r!==null&&(n=e.getPose(l.targetRaySpace,t),n===null&&i!==null&&(n=i),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(uA)))}return r!==null&&(r.visible=n!==null),o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),this}}class dA extends nl{constructor(l,e,t,n,i,s,r,o,a,m){if(m=m!==void 0?m:t3,m!==t3&&m!==U3)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&m===t3&&(t=$1),t===void 0&&m===U3&&(t=T3),super(null,n,i,s,r,o,m,t,a),this.isDepthTexture=!0,this.image={width:l,height:e},this.magFilter=r!==void 0?r:ol,this.minFilter=o!==void 0?o:ol,this.flipY=!1,this.generateMipmaps=!1}}class qA extends P3{constructor(l,e){super();const t=this;let n=null,i=1,s=null,r="local-floor",o=null,a=null,m=null,c=null,h=null,d=null;const f=e.getContextAttributes();let q=null,u=null;const g=[],w=[],x=new ql;x.layers.enable(1),x.viewport=new W4;const p=new ql;p.layers.enable(2),p.viewport=new W4;const E=[x,p],v=new hA;v.layers.enable(1),v.layers.enable(2);let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let R=g[D];return R===void 0&&(R=new e7,g[D]=R),R.getTargetRaySpace()},this.getControllerGrip=function(D){let R=g[D];return R===void 0&&(R=new e7,g[D]=R),R.getGripSpace()},this.getHand=function(D){let R=g[D];return R===void 0&&(R=new e7,g[D]=R),R.getHandSpace()};function Q(D){const R=w.indexOf(D.inputSource);if(R===-1)return;const t4=g[R];t4!==void 0&&t4.dispatchEvent({type:D.type,data:D.inputSource})}function T(){n.removeEventListener("select",Q),n.removeEventListener("selectstart",Q),n.removeEventListener("selectend",Q),n.removeEventListener("squeeze",Q),n.removeEventListener("squeezestart",Q),n.removeEventListener("squeezeend",Q),n.removeEventListener("end",T),n.removeEventListener("inputsourceschange",z);for(let D=0;D<g.length;D++){const R=w[D];R!==null&&(w[D]=null,g[D].disconnect(R))}I=null,B=null,l.setRenderTarget(q),h=null,c=null,m=null,n=null,u=null,K.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){i=D,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){r=D,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||s},this.setReferenceSpace=function(D){o=D},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return m},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(D){if(n=D,n!==null){if(q=l.getRenderTarget(),n.addEventListener("select",Q),n.addEventListener("selectstart",Q),n.addEventListener("selectend",Q),n.addEventListener("squeeze",Q),n.addEventListener("squeezestart",Q),n.addEventListener("squeezeend",Q),n.addEventListener("end",T),n.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||l.capabilities.isWebGL2===!1){const R={antialias:n.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:i};h=new XRWebGLLayer(n,e,R),n.updateRenderState({baseLayer:h}),u=new wl(h.framebufferWidth,h.framebufferHeight,{format:jl,type:s3,encoding:l.outputEncoding,stencilBuffer:f.stencil})}else{let R=null,t4=null,X=null;f.depth&&(X=f.stencil?35056:33190,R=f.stencil?U3:t3,t4=f.stencil?T3:$1);const A4={colorFormat:32856,depthFormat:X,scaleFactor:i};m=new XRWebGLBinding(n,e),c=m.createProjectionLayer(A4),n.updateRenderState({layers:[c]}),u=new wl(c.textureWidth,c.textureHeight,{format:jl,type:s3,depthTexture:new dA(c.textureWidth,c.textureHeight,t4,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:f.stencil,encoding:l.outputEncoding,samples:f.antialias?4:0});const u4=l.properties.get(u);u4.__ignoreDepthValues=c.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),o=null,s=await n.requestReferenceSpace(r),K.setContext(n),K.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function z(D){for(let R=0;R<D.removed.length;R++){const t4=D.removed[R],X=w.indexOf(t4);X>=0&&(w[X]=null,g[X].dispatchEvent({type:"disconnected",data:t4}))}for(let R=0;R<D.added.length;R++){const t4=D.added[R];let X=w.indexOf(t4);if(X===-1){for(let u4=0;u4<g.length;u4++)if(u4>=w.length){w.push(t4),X=u4;break}else if(w[u4]===null){w[u4]=t4,X=u4;break}if(X===-1)break}const A4=g[X];A4&&A4.dispatchEvent({type:"connected",data:t4})}}const Z=new y,L=new y;function S(D,R,t4){Z.setFromMatrixPosition(R.matrixWorld),L.setFromMatrixPosition(t4.matrixWorld);const X=Z.distanceTo(L),A4=R.projectionMatrix.elements,u4=t4.projectionMatrix.elements,_4=A4[14]/(A4[10]-1),j=A4[14]/(A4[10]+1),D4=(A4[9]+1)/A4[5],M4=(A4[9]-1)/A4[5],y4=(A4[8]-1)/A4[0],a4=(u4[8]+1)/u4[0],L4=_4*y4,J=_4*a4,O=X/(-y4+a4),s4=O*-y4;R.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(s4),D.translateZ(O),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const d4=_4+O,o4=j+O,b4=L4-s4,C4=J+(X-s4),w4=D4*j/o4*d4,X4=M4*j/o4*d4;D.projectionMatrix.makePerspective(b4,C4,w4,X4,d4,o4)}function P(D,R){R===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(R.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(n===null)return;v.near=p.near=x.near=D.near,v.far=p.far=x.far=D.far,(I!==v.near||B!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,B=v.far);const R=D.parent,t4=v.cameras;P(v,R);for(let A4=0;A4<t4.length;A4++)P(t4[A4],R);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),D.matrix.copy(v.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const X=D.children;for(let A4=0,u4=X.length;A4<u4;A4++)X[A4].updateMatrixWorld(!0);t4.length===2?S(v,x,p):v.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(c!==null)return c.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(D){c!==null&&(c.fixedFoveation=D),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=D)};let W=null;function $(D,R){if(a=R.getViewerPose(o||s),d=R,a!==null){const t4=a.views;h!==null&&(l.setRenderTargetFramebuffer(u,h.framebuffer),l.setRenderTarget(u));let X=!1;t4.length!==v.cameras.length&&(v.cameras.length=0,X=!0);for(let A4=0;A4<t4.length;A4++){const u4=t4[A4];let _4=null;if(h!==null)_4=h.getViewport(u4);else{const D4=m.getViewSubImage(c,u4);_4=D4.viewport,A4===0&&(l.setRenderTargetTextures(u,D4.colorTexture,c.ignoreDepthValues?void 0:D4.depthStencilTexture),l.setRenderTarget(u))}let j=E[A4];j===void 0&&(j=new ql,j.layers.enable(A4),j.viewport=new W4,E[A4]=j),j.matrix.fromArray(u4.transform.matrix),j.projectionMatrix.fromArray(u4.projectionMatrix),j.viewport.set(_4.x,_4.y,_4.width,_4.height),A4===0&&v.matrix.copy(j.matrix),X===!0&&v.cameras.push(j)}}for(let t4=0;t4<g.length;t4++){const X=w[t4],A4=g[t4];X!==null&&A4!==void 0&&A4.update(X,R,o||s)}W&&W(D,R),d=null}const K=new B0;K.setAnimationLoop($),this.setAnimationLoop=function(D){W=D},this.dispose=function(){}}}function fA(A,l){function e(q,u){q.fogColor.value.copy(u.color),u.isFog?(q.fogNear.value=u.near,q.fogFar.value=u.far):u.isFogExp2&&(q.fogDensity.value=u.density)}function t(q,u,g,w,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?n(q,u):u.isMeshToonMaterial?(n(q,u),m(q,u)):u.isMeshPhongMaterial?(n(q,u),a(q,u)):u.isMeshStandardMaterial?(n(q,u),c(q,u),u.isMeshPhysicalMaterial&&h(q,u,x)):u.isMeshMatcapMaterial?(n(q,u),d(q,u)):u.isMeshDepthMaterial?n(q,u):u.isMeshDistanceMaterial?(n(q,u),f(q,u)):u.isMeshNormalMaterial?n(q,u):u.isLineBasicMaterial?(i(q,u),u.isLineDashedMaterial&&s(q,u)):u.isPointsMaterial?r(q,u,g,w):u.isSpriteMaterial?o(q,u):u.isShadowMaterial?(q.color.value.copy(u.color),q.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(q,u){q.opacity.value=u.opacity,u.color&&q.diffuse.value.copy(u.color),u.emissive&&q.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(q.map.value=u.map),u.alphaMap&&(q.alphaMap.value=u.alphaMap),u.bumpMap&&(q.bumpMap.value=u.bumpMap,q.bumpScale.value=u.bumpScale,u.side===xl&&(q.bumpScale.value*=-1)),u.displacementMap&&(q.displacementMap.value=u.displacementMap,q.displacementScale.value=u.displacementScale,q.displacementBias.value=u.displacementBias),u.emissiveMap&&(q.emissiveMap.value=u.emissiveMap),u.normalMap&&(q.normalMap.value=u.normalMap,q.normalScale.value.copy(u.normalScale),u.side===xl&&q.normalScale.value.negate()),u.specularMap&&(q.specularMap.value=u.specularMap),u.alphaTest>0&&(q.alphaTest.value=u.alphaTest);const g=l.get(u).envMap;if(g&&(q.envMap.value=g,q.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,q.reflectivity.value=u.reflectivity,q.ior.value=u.ior,q.refractionRatio.value=u.refractionRatio),u.lightMap){q.lightMap.value=u.lightMap;const p=A.physicallyCorrectLights!==!0?Math.PI:1;q.lightMapIntensity.value=u.lightMapIntensity*p}u.aoMap&&(q.aoMap.value=u.aoMap,q.aoMapIntensity.value=u.aoMapIntensity);let w;u.map?w=u.map:u.specularMap?w=u.specularMap:u.displacementMap?w=u.displacementMap:u.normalMap?w=u.normalMap:u.bumpMap?w=u.bumpMap:u.roughnessMap?w=u.roughnessMap:u.metalnessMap?w=u.metalnessMap:u.alphaMap?w=u.alphaMap:u.emissiveMap?w=u.emissiveMap:u.clearcoatMap?w=u.clearcoatMap:u.clearcoatNormalMap?w=u.clearcoatNormalMap:u.clearcoatRoughnessMap?w=u.clearcoatRoughnessMap:u.iridescenceMap?w=u.iridescenceMap:u.iridescenceThicknessMap?w=u.iridescenceThicknessMap:u.specularIntensityMap?w=u.specularIntensityMap:u.specularColorMap?w=u.specularColorMap:u.transmissionMap?w=u.transmissionMap:u.thicknessMap?w=u.thicknessMap:u.sheenColorMap?w=u.sheenColorMap:u.sheenRoughnessMap&&(w=u.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),q.uvTransform.value.copy(w.matrix));let x;u.aoMap?x=u.aoMap:u.lightMap&&(x=u.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),q.uv2Transform.value.copy(x.matrix))}function i(q,u){q.diffuse.value.copy(u.color),q.opacity.value=u.opacity}function s(q,u){q.dashSize.value=u.dashSize,q.totalSize.value=u.dashSize+u.gapSize,q.scale.value=u.scale}function r(q,u,g,w){q.diffuse.value.copy(u.color),q.opacity.value=u.opacity,q.size.value=u.size*g,q.scale.value=w*.5,u.map&&(q.map.value=u.map),u.alphaMap&&(q.alphaMap.value=u.alphaMap),u.alphaTest>0&&(q.alphaTest.value=u.alphaTest);let x;u.map?x=u.map:u.alphaMap&&(x=u.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),q.uvTransform.value.copy(x.matrix))}function o(q,u){q.diffuse.value.copy(u.color),q.opacity.value=u.opacity,q.rotation.value=u.rotation,u.map&&(q.map.value=u.map),u.alphaMap&&(q.alphaMap.value=u.alphaMap),u.alphaTest>0&&(q.alphaTest.value=u.alphaTest);let g;u.map?g=u.map:u.alphaMap&&(g=u.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),q.uvTransform.value.copy(g.matrix))}function a(q,u){q.specular.value.copy(u.specular),q.shininess.value=Math.max(u.shininess,1e-4)}function m(q,u){u.gradientMap&&(q.gradientMap.value=u.gradientMap)}function c(q,u){q.roughness.value=u.roughness,q.metalness.value=u.metalness,u.roughnessMap&&(q.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(q.metalnessMap.value=u.metalnessMap),l.get(u).envMap&&(q.envMapIntensity.value=u.envMapIntensity)}function h(q,u,g){q.ior.value=u.ior,u.sheen>0&&(q.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),q.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(q.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(q.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(q.clearcoat.value=u.clearcoat,q.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(q.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(q.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(q.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),q.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===xl&&q.clearcoatNormalScale.value.negate())),u.iridescence>0&&(q.iridescence.value=u.iridescence,q.iridescenceIOR.value=u.iridescenceIOR,q.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],q.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(q.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(q.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(q.transmission.value=u.transmission,q.transmissionSamplerMap.value=g.texture,q.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(q.transmissionMap.value=u.transmissionMap),q.thickness.value=u.thickness,u.thicknessMap&&(q.thicknessMap.value=u.thicknessMap),q.attenuationDistance.value=u.attenuationDistance,q.attenuationColor.value.copy(u.attenuationColor)),q.specularIntensity.value=u.specularIntensity,q.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(q.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(q.specularColorMap.value=u.specularColorMap)}function d(q,u){u.matcap&&(q.matcap.value=u.matcap)}function f(q,u){q.referencePosition.value.copy(u.referencePosition),q.nearDistance.value=u.nearDistance,q.farDistance.value=u.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function gA(A,l,e,t){let n={},i={},s=[];const r=e.isWebGL2?A.getParameter(35375):0;function o(w,x){const p=x.program;t.uniformBlockBinding(w,p)}function a(w,x){let p=n[w.id];p===void 0&&(f(w),p=m(w),n[w.id]=p,w.addEventListener("dispose",u));const E=x.program;t.updateUBOMapping(w,E);const v=l.render.frame;i[w.id]!==v&&(h(w),i[w.id]=v)}function m(w){const x=c();w.__bindingPointIndex=x;const p=A.createBuffer(),E=w.__size,v=w.usage;return A.bindBuffer(35345,p),A.bufferData(35345,E,v),A.bindBuffer(35345,null),A.bindBufferBase(35345,x,p),p}function c(){for(let w=0;w<r;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const x=n[w.id],p=w.uniforms,E=w.__cache;A.bindBuffer(35345,x);for(let v=0,I=p.length;v<I;v++){const B=p[v];if(d(B,v,E)===!0){const Q=B.value,T=B.__offset;typeof Q=="number"?(B.__data[0]=Q,A.bufferSubData(35345,T,B.__data)):(B.value.isMatrix3?(B.__data[0]=B.value.elements[0],B.__data[1]=B.value.elements[1],B.__data[2]=B.value.elements[2],B.__data[3]=B.value.elements[0],B.__data[4]=B.value.elements[3],B.__data[5]=B.value.elements[4],B.__data[6]=B.value.elements[5],B.__data[7]=B.value.elements[0],B.__data[8]=B.value.elements[6],B.__data[9]=B.value.elements[7],B.__data[10]=B.value.elements[8],B.__data[11]=B.value.elements[0]):Q.toArray(B.__data),A.bufferSubData(35345,T,B.__data))}}A.bindBuffer(35345,null)}function d(w,x,p){const E=w.value;if(p[x]===void 0)return typeof E=="number"?p[x]=E:p[x]=E.clone(),!0;if(typeof E=="number"){if(p[x]!==E)return p[x]=E,!0}else{const v=p[x];if(v.equals(E)===!1)return v.copy(E),!0}return!1}function f(w){const x=w.uniforms;let p=0;const E=16;let v=0;for(let I=0,B=x.length;I<B;I++){const Q=x[I],T=q(Q);if(Q.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=p,I>0){v=p%E;const z=E-v;v!==0&&z-T.boundary<0&&(p+=E-v,Q.__offset=p)}p+=T.storage}return v=p%E,v>0&&(p+=E-v),w.__size=p,w.__cache={},this}function q(w){const x=w.value,p={boundary:0,storage:0};return typeof x=="number"?(p.boundary=4,p.storage=4):x.isVector2?(p.boundary=8,p.storage=8):x.isVector3||x.isColor?(p.boundary=16,p.storage=12):x.isVector4?(p.boundary=16,p.storage=16):x.isMatrix3?(p.boundary=48,p.storage=48):x.isMatrix4?(p.boundary=64,p.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),p}function u(w){const x=w.target;x.removeEventListener("dispose",u);const p=s.indexOf(x.__bindingPointIndex);s.splice(p,1),A.deleteBuffer(n[x.id]),delete n[x.id],delete i[x.id]}function g(){for(const w in n)A.deleteBuffer(n[w]);s=[],n={},i={}}return{bind:o,update:a,dispose:g}}function pA(){const A=f2("canvas");return A.style.display="block",A}function Q0(A={}){this.isWebGLRenderer=!0;const l=A.canvas!==void 0?A.canvas:pA(),e=A.context!==void 0?A.context:null,t=A.depth!==void 0?A.depth:!0,n=A.stencil!==void 0?A.stencil:!0,i=A.antialias!==void 0?A.antialias:!1,s=A.premultipliedAlpha!==void 0?A.premultipliedAlpha:!0,r=A.preserveDrawingBuffer!==void 0?A.preserveDrawingBuffer:!1,o=A.powerPreference!==void 0?A.powerPreference:"default",a=A.failIfMajorPerformanceCaveat!==void 0?A.failIfMajorPerformanceCaveat:!1;let m;e!==null?m=e.getContextAttributes().alpha:m=A.alpha!==void 0?A.alpha:!1;let c=null,h=null;const d=[],f=[];this.domElement=l,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=t1,this.physicallyCorrectLights=!1,this.toneMapping=Ll,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const q=this;let u=!1,g=0,w=0,x=null,p=-1,E=null;const v=new W4,I=new W4;let B=null,Q=l.width,T=l.height,z=1,Z=null,L=null;const S=new W4(0,0,Q,T),P=new W4(0,0,Q,T);let W=!1;const $=new N7;let K=!1,D=!1,R=null;const t4=new R4,X=new n4,A4=new y,u4={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _4(){return x===null?z:1}let j=e;function D4(C,N){for(let k=0;k<C.length;k++){const F=C[k],H=l.getContext(F,N);if(H!==null)return H}return null}try{const C={alpha:!0,depth:t,stencil:n,antialias:i,premultipliedAlpha:s,preserveDrawingBuffer:r,powerPreference:o,failIfMajorPerformanceCaveat:a};if("setAttribute"in l&&l.setAttribute("data-engine",`three.js r${S7}`),l.addEventListener("webglcontextlost",E4,!1),l.addEventListener("webglcontextrestored",x4,!1),l.addEventListener("webglcontextcreationerror",k4,!1),j===null){const N=["webgl2","webgl","experimental-webgl"];if(q.isWebGL1Renderer===!0&&N.shift(),j=D4(N,C),j===null)throw D4(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let M4,y4,a4,L4,J,O,s4,d4,o4,b4,C4,w4,X4,V4,_,M,G,e4,i4,m4,v4,c4,V,p4;function Q4(){M4=new Ii(j),y4=new Ei(j,M4,A),M4.init(y4),c4=new cA(j,M4,y4),a4=new aA(j,M4,y4),L4=new Si,J=new Ws,O=new mA(j,M4,a4,J,y4,c4,L4),s4=new Qi(q),d4=new yi(q),o4=new Pe(j,y4),V=new wi(j,M4,o4,y4),b4=new Ti(j,o4,L4,V),C4=new Ni(j,b4,o4,L4),i4=new Ui(j,y4,O),M=new Ci(J),w4=new js(q,s4,d4,M4,y4,V,M),X4=new fA(q,J),V4=new Zs,_=new nA(M4,y4),e4=new Bi(q,s4,d4,a4,C4,m,s),G=new oA(q,C4,y4),p4=new gA(j,L4,y4,a4),m4=new Mi(j,M4,L4,y4),v4=new bi(j,M4,L4,y4),L4.programs=w4.programs,q.capabilities=y4,q.extensions=M4,q.properties=J,q.renderLists=V4,q.shadowMap=G,q.state=a4,q.info=L4}Q4();const q4=new qA(q,j);this.xr=q4,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=M4.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=M4.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(Q,T,!1))},this.getSize=function(C){return C.set(Q,T)},this.setSize=function(C,N,k){if(q4.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,T=N,l.width=Math.floor(C*z),l.height=Math.floor(N*z),k!==!1&&(l.style.width=C+"px",l.style.height=N+"px"),this.setViewport(0,0,C,N)},this.getDrawingBufferSize=function(C){return C.set(Q*z,T*z).floor()},this.setDrawingBufferSize=function(C,N,k){Q=C,T=N,z=k,l.width=Math.floor(C*k),l.height=Math.floor(N*k),this.setViewport(0,0,C,N)},this.getCurrentViewport=function(C){return C.copy(v)},this.getViewport=function(C){return C.copy(S)},this.setViewport=function(C,N,k,F){C.isVector4?S.set(C.x,C.y,C.z,C.w):S.set(C,N,k,F),a4.viewport(v.copy(S).multiplyScalar(z).floor())},this.getScissor=function(C){return C.copy(P)},this.setScissor=function(C,N,k,F){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,N,k,F),a4.scissor(I.copy(P).multiplyScalar(z).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){a4.setScissorTest(W=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){L=C},this.getClearColor=function(C){return C.copy(e4.getClearColor())},this.setClearColor=function(){e4.setClearColor.apply(e4,arguments)},this.getClearAlpha=function(){return e4.getClearAlpha()},this.setClearAlpha=function(){e4.setClearAlpha.apply(e4,arguments)},this.clear=function(C=!0,N=!0,k=!0){let F=0;C&&(F|=16384),N&&(F|=256),k&&(F|=1024),j.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){l.removeEventListener("webglcontextlost",E4,!1),l.removeEventListener("webglcontextrestored",x4,!1),l.removeEventListener("webglcontextcreationerror",k4,!1),V4.dispose(),_.dispose(),J.dispose(),s4.dispose(),d4.dispose(),C4.dispose(),V.dispose(),p4.dispose(),w4.dispose(),q4.dispose(),q4.removeEventListener("sessionstart",h4),q4.removeEventListener("sessionend",f4),R&&(R.dispose(),R=null),Y4.stop()};function E4(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function x4(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const C=L4.autoReset,N=G.enabled,k=G.autoUpdate,F=G.needsUpdate,H=G.type;Q4(),L4.autoReset=C,G.enabled=N,G.autoUpdate=k,G.needsUpdate=F,G.type=H}function k4(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ll(C){const N=C.target;N.removeEventListener("dispose",ll),cl(N)}function cl(C){b(C),J.remove(C)}function b(C){const N=J.get(C).programs;N!==void 0&&(N.forEach(function(k){w4.releaseProgram(k)}),C.isShaderMaterial&&w4.releaseShaderCache(C))}this.renderBufferDirect=function(C,N,k,F,H,B4){N===null&&(N=u4);const T4=H.isMesh&&H.matrixWorld.determinant()<0,U4=s9(C,N,k,F,H);a4.setMaterial(F,T4);let S4=k.index;const H4=k.attributes.position;if(S4===null){if(H4===void 0||H4.count===0)return}else if(S4.count===0)return;let G4=1;F.wireframe===!0&&(S4=b4.getWireframeAttribute(k),G4=2),V.setup(H,F,U4,k,S4);let z4,il=m4;S4!==null&&(z4=o4.get(S4),il=v4,il.setIndex(z4));const Y1=S4!==null?S4.count:H4.count,a3=k.drawRange.start*G4,m3=k.drawRange.count*G4,i1=B4!==null?B4.start*G4:0,K4=B4!==null?B4.count*G4:1/0,c3=Math.max(a3,i1),sl=Math.min(Y1,a3+m3,i1+K4)-1,kl=Math.max(0,sl-c3+1);if(kl!==0){if(H.isMesh)F.wireframe===!0?(a4.setLineWidth(F.wireframeLinewidth*_4()),il.setMode(1)):il.setMode(4);else if(H.isLine){let Q1=F.linewidth;Q1===void 0&&(Q1=1),a4.setLineWidth(Q1*_4()),H.isLineSegments?il.setMode(1):H.isLineLoop?il.setMode(2):il.setMode(3)}else H.isPoints?il.setMode(0):H.isSprite&&il.setMode(4);if(H.isInstancedMesh)il.renderInstances(c3,kl,H.count);else if(k.isInstancedBufferGeometry){const Q1=Math.min(k.instanceCount,k._maxInstanceCount);il.renderInstances(c3,kl,Q1)}else il.render(c3,kl)}},this.compile=function(C,N){function k(F,H,B4){F.transparent===!0&&F.side===bl?(F.side=xl,F.needsUpdate=!0,zl(F,H,B4),F.side=a1,F.needsUpdate=!0,zl(F,H,B4),F.side=bl):zl(F,H,B4)}h=_.get(C),h.init(),f.push(h),C.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(q.physicallyCorrectLights),C.traverse(function(F){const H=F.material;if(H)if(Array.isArray(H))for(let B4=0;B4<H.length;B4++){const T4=H[B4];k(T4,C,F)}else k(H,C,F)}),f.pop(),h=null};let Y=null;function l4(C){Y&&Y(C)}function h4(){Y4.stop()}function f4(){Y4.start()}const Y4=new B0;Y4.setAnimationLoop(l4),typeof self<"u"&&Y4.setContext(self),this.setAnimationLoop=function(C){Y=C,q4.setAnimationLoop(C),C===null?Y4.stop():Y4.start()},q4.addEventListener("sessionstart",h4),q4.addEventListener("sessionend",f4),this.render=function(C,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q4.enabled===!0&&q4.isPresenting===!0&&(q4.cameraAutoUpdate===!0&&q4.updateCamera(N),N=q4.getCamera()),C.isScene===!0&&C.onBeforeRender(q,C,N,x),h=_.get(C,f.length),h.init(),f.push(h),t4.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(t4),D=this.localClippingEnabled,K=M.init(this.clippingPlanes,D,N),c=V4.get(C,d.length),c.init(),d.push(c),hl(C,N,0,q.sortObjects),c.finish(),q.sortObjects===!0&&c.sort(Z,L),K===!0&&M.beginShadows();const k=h.state.shadowsArray;if(G.render(k,C,N),K===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),e4.render(c,C),h.setupLights(q.physicallyCorrectLights),N.isArrayCamera){const F=N.cameras;for(let H=0,B4=F.length;H<B4;H++){const T4=F[H];Ml(c,C,T4,T4.viewport)}}else Ml(c,C,N);x!==null&&(O.updateMultisampleRenderTarget(x),O.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(q,C,N),V.resetDefaultState(),p=-1,E=null,f.pop(),f.length>0?h=f[f.length-1]:h=null,d.pop(),d.length>0?c=d[d.length-1]:c=null};function hl(C,N,k,F){if(C.visible===!1)return;if(C.layers.test(N.layers)){if(C.isGroup)k=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(N);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){F&&A4.setFromMatrixPosition(C.matrixWorld).applyMatrix4(t4);const T4=C4.update(C),U4=C.material;U4.visible&&c.push(C,T4,U4,k,A4.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==L4.render.frame&&(C.skeleton.update(),C.skeleton.frame=L4.render.frame),!C.frustumCulled||$.intersectsObject(C))){F&&A4.setFromMatrixPosition(C.matrixWorld).applyMatrix4(t4);const T4=C4.update(C),U4=C.material;if(Array.isArray(U4)){const S4=T4.groups;for(let H4=0,G4=S4.length;H4<G4;H4++){const z4=S4[H4],il=U4[z4.materialIndex];il&&il.visible&&c.push(C,T4,il,k,A4.z,z4)}}else U4.visible&&c.push(C,T4,U4,k,A4.z,null)}}const B4=C.children;for(let T4=0,U4=B4.length;T4<U4;T4++)hl(B4[T4],N,k,F)}function Ml(C,N,k,F){const H=C.opaque,B4=C.transmissive,T4=C.transparent;h.setupLightsView(k),B4.length>0&&k1(H,N,k),F&&a4.viewport(v.copy(F)),H.length>0&&el(H,N,k),B4.length>0&&el(B4,N,k),T4.length>0&&el(T4,N,k),a4.buffers.depth.setTest(!0),a4.buffers.depth.setMask(!0),a4.buffers.color.setMask(!0),a4.setPolygonOffset(!1)}function k1(C,N,k){const F=y4.isWebGL2;R===null&&(R=new wl(1,1,{generateMipmaps:!0,type:M4.has("EXT_color_buffer_half_float")?u2:s3,minFilter:G3,samples:F&&i===!0?4:0})),q.getDrawingBufferSize(X),F?R.setSize(X.x,X.y):R.setSize(h5(X.x),h5(X.y));const H=q.getRenderTarget();q.setRenderTarget(R),q.clear();const B4=q.toneMapping;q.toneMapping=Ll,el(C,N,k),q.toneMapping=B4,O.updateMultisampleRenderTarget(R),O.updateRenderTargetMipmap(R),q.setRenderTarget(H)}function el(C,N,k){const F=N.isScene===!0?N.overrideMaterial:null;for(let H=0,B4=C.length;H<B4;H++){const T4=C[H],U4=T4.object,S4=T4.geometry,H4=F===null?T4.material:F,G4=T4.group;U4.layers.test(k.layers)&&c1(U4,N,k,S4,H4,G4)}}function c1(C,N,k,F,H,B4){C.onBeforeRender(q,N,k,F,H,B4),C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(q,N,k,F,C,B4),H.transparent===!0&&H.side===bl?(H.side=xl,H.needsUpdate=!0,q.renderBufferDirect(k,N,F,H,C,B4),H.side=a1,H.needsUpdate=!0,q.renderBufferDirect(k,N,F,H,C,B4),H.side=bl):q.renderBufferDirect(k,N,F,H,C,B4),C.onAfterRender(q,N,k,F,H,B4)}function zl(C,N,k){N.isScene!==!0&&(N=u4);const F=J.get(C),H=h.state.lights,B4=h.state.shadowsArray,T4=H.state.version,U4=w4.getParameters(C,H.state,B4,N,k),S4=w4.getProgramCacheKey(U4);let H4=F.programs;F.environment=C.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(C.isMeshStandardMaterial?d4:s4).get(C.envMap||F.environment),H4===void 0&&(C.addEventListener("dispose",ll),H4=new Map,F.programs=H4);let G4=H4.get(S4);if(G4!==void 0){if(F.currentProgram===G4&&F.lightsStateVersion===T4)return t8(C,U4),G4}else U4.uniforms=w4.getUniforms(C),C.onBuild(k,U4,q),C.onBeforeCompile(U4,q),G4=w4.acquireProgram(U4,S4),H4.set(S4,G4),F.uniforms=U4.uniforms;const z4=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(z4.clippingPlanes=M.uniform),t8(C,U4),F.needsLights=r9(C),F.lightsStateVersion=T4,F.needsLights&&(z4.ambientLightColor.value=H.state.ambient,z4.lightProbe.value=H.state.probe,z4.directionalLights.value=H.state.directional,z4.directionalLightShadows.value=H.state.directionalShadow,z4.spotLights.value=H.state.spot,z4.spotLightShadows.value=H.state.spotShadow,z4.rectAreaLights.value=H.state.rectArea,z4.ltc_1.value=H.state.rectAreaLTC1,z4.ltc_2.value=H.state.rectAreaLTC2,z4.pointLights.value=H.state.point,z4.pointLightShadows.value=H.state.pointShadow,z4.hemisphereLights.value=H.state.hemi,z4.directionalShadowMap.value=H.state.directionalShadowMap,z4.directionalShadowMatrix.value=H.state.directionalShadowMatrix,z4.spotShadowMap.value=H.state.spotShadowMap,z4.spotLightMatrix.value=H.state.spotLightMatrix,z4.spotLightMap.value=H.state.spotLightMap,z4.pointShadowMap.value=H.state.pointShadowMap,z4.pointShadowMatrix.value=H.state.pointShadowMatrix);const il=G4.getUniforms(),Y1=o5.seqWithValue(il.seq,z4);return F.currentProgram=G4,F.uniformsList=Y1,G4}function t8(C,N){const k=J.get(C);k.outputEncoding=N.outputEncoding,k.instancing=N.instancing,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function s9(C,N,k,F,H){N.isScene!==!0&&(N=u4),O.resetTextureUnits();const B4=N.fog,T4=F.isMeshStandardMaterial?N.environment:null,U4=x===null?q.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:t1,S4=(F.isMeshStandardMaterial?d4:s4).get(F.envMap||T4),H4=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,G4=!!F.normalMap&&!!k.attributes.tangent,z4=!!k.morphAttributes.position,il=!!k.morphAttributes.normal,Y1=!!k.morphAttributes.color,a3=F.toneMapped?q.toneMapping:Ll,m3=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,i1=m3!==void 0?m3.length:0,K4=J.get(F),c3=h.state.lights;if(K===!0&&(D===!0||C!==E)){const Fl=C===E&&F.id===p;M.setState(F,C,Fl)}let sl=!1;F.version===K4.__version?(K4.needsLights&&K4.lightsStateVersion!==c3.state.version||K4.outputEncoding!==U4||H.isInstancedMesh&&K4.instancing===!1||!H.isInstancedMesh&&K4.instancing===!0||H.isSkinnedMesh&&K4.skinning===!1||!H.isSkinnedMesh&&K4.skinning===!0||K4.envMap!==S4||F.fog===!0&&K4.fog!==B4||K4.numClippingPlanes!==void 0&&(K4.numClippingPlanes!==M.numPlanes||K4.numIntersection!==M.numIntersection)||K4.vertexAlphas!==H4||K4.vertexTangents!==G4||K4.morphTargets!==z4||K4.morphNormals!==il||K4.morphColors!==Y1||K4.toneMapping!==a3||y4.isWebGL2===!0&&K4.morphTargetsCount!==i1)&&(sl=!0):(sl=!0,K4.__version=F.version);let kl=K4.currentProgram;sl===!0&&(kl=zl(F,N,H));let Q1=!1,W3=!1,M5=!1;const vl=kl.getUniforms(),H1=K4.uniforms;if(a4.useProgram(kl.program)&&(Q1=!0,W3=!0,M5=!0),F.id!==p&&(p=F.id,W3=!0),Q1||E!==C){if(vl.setValue(j,"projectionMatrix",C.projectionMatrix),y4.logarithmicDepthBuffer&&vl.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),E!==C&&(E=C,W3=!0,M5=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Fl=vl.map.cameraPosition;Fl!==void 0&&Fl.setValue(j,A4.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&vl.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||H.isSkinnedMesh)&&vl.setValue(j,"viewMatrix",C.matrixWorldInverse)}if(H.isSkinnedMesh){vl.setOptional(j,H,"bindMatrix"),vl.setOptional(j,H,"bindMatrixInverse");const Fl=H.skeleton;Fl&&(y4.floatVertexTextures?(Fl.boneTexture===null&&Fl.computeBoneTexture(),vl.setValue(j,"boneTexture",Fl.boneTexture,O),vl.setValue(j,"boneTextureSize",Fl.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const E5=k.morphAttributes;if((E5.position!==void 0||E5.normal!==void 0||E5.color!==void 0&&y4.isWebGL2===!0)&&i4.update(H,k,F,kl),(W3||K4.receiveShadow!==H.receiveShadow)&&(K4.receiveShadow=H.receiveShadow,vl.setValue(j,"receiveShadow",H.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(H1.envMap.value=S4,H1.flipEnvMap.value=S4.isCubeTexture&&S4.isRenderTargetTexture===!1?-1:1),W3&&(vl.setValue(j,"toneMappingExposure",q.toneMappingExposure),K4.needsLights&&A9(H1,M5),B4&&F.fog===!0&&X4.refreshFogUniforms(H1,B4),X4.refreshMaterialUniforms(H1,F,z,T,R),o5.upload(j,K4.uniformsList,H1,O)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(o5.upload(j,K4.uniformsList,H1,O),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&vl.setValue(j,"center",H.center),vl.setValue(j,"modelViewMatrix",H.modelViewMatrix),vl.setValue(j,"normalMatrix",H.normalMatrix),vl.setValue(j,"modelMatrix",H.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Fl=F.uniformsGroups;for(let C5=0,o9=Fl.length;C5<o9;C5++)if(y4.isWebGL2){const n8=Fl[C5];p4.update(n8,kl),p4.bind(n8,kl)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kl}function A9(C,N){C.ambientLightColor.needsUpdate=N,C.lightProbe.needsUpdate=N,C.directionalLights.needsUpdate=N,C.directionalLightShadows.needsUpdate=N,C.pointLights.needsUpdate=N,C.pointLightShadows.needsUpdate=N,C.spotLights.needsUpdate=N,C.spotLightShadows.needsUpdate=N,C.rectAreaLights.needsUpdate=N,C.hemisphereLights.needsUpdate=N}function r9(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,N,k){J.get(C.texture).__webglTexture=N,J.get(C.depthTexture).__webglTexture=k;const F=J.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=k===void 0,F.__autoAllocateDepthBuffer||M4.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,N){const k=J.get(C);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(C,N=0,k=0){x=C,g=N,w=k;let F=!0,H=null,B4=!1,T4=!1;if(C){const S4=J.get(C);S4.__useDefaultFramebuffer!==void 0?(a4.bindFramebuffer(36160,null),F=!1):S4.__webglFramebuffer===void 0?O.setupRenderTarget(C):S4.__hasExternalTextures&&O.rebindTextures(C,J.get(C.texture).__webglTexture,J.get(C.depthTexture).__webglTexture);const H4=C.texture;(H4.isData3DTexture||H4.isDataArrayTexture||H4.isCompressedArrayTexture)&&(T4=!0);const G4=J.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(H=G4[N],B4=!0):y4.isWebGL2&&C.samples>0&&O.useMultisampledRTT(C)===!1?H=J.get(C).__webglMultisampledFramebuffer:H=G4,v.copy(C.viewport),I.copy(C.scissor),B=C.scissorTest}else v.copy(S).multiplyScalar(z).floor(),I.copy(P).multiplyScalar(z).floor(),B=W;if(a4.bindFramebuffer(36160,H)&&y4.drawBuffers&&F&&a4.drawBuffers(C,H),a4.viewport(v),a4.scissor(I),a4.setScissorTest(B),B4){const S4=J.get(C.texture);j.framebufferTexture2D(36160,36064,34069+N,S4.__webglTexture,k)}else if(T4){const S4=J.get(C.texture),H4=N||0;j.framebufferTextureLayer(36160,36064,S4.__webglTexture,k||0,H4)}p=-1},this.readRenderTargetPixels=function(C,N,k,F,H,B4,T4){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let U4=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&T4!==void 0&&(U4=U4[T4]),U4){a4.bindFramebuffer(36160,U4);try{const S4=C.texture,H4=S4.format,G4=S4.type;if(H4!==jl&&c4.convert(H4)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const z4=G4===u2&&(M4.has("EXT_color_buffer_half_float")||y4.isWebGL2&&M4.has("EXT_color_buffer_float"));if(G4!==s3&&c4.convert(G4)!==j.getParameter(35738)&&!(G4===Rl&&(y4.isWebGL2||M4.has("OES_texture_float")||M4.has("WEBGL_color_buffer_float")))&&!z4){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=C.width-F&&k>=0&&k<=C.height-H&&j.readPixels(N,k,F,H,c4.convert(H4),c4.convert(G4),B4)}finally{const S4=x!==null?J.get(x).__webglFramebuffer:null;a4.bindFramebuffer(36160,S4)}}},this.copyFramebufferToTexture=function(C,N,k=0){const F=Math.pow(2,-k),H=Math.floor(N.image.width*F),B4=Math.floor(N.image.height*F);O.setTexture2D(N,0),j.copyTexSubImage2D(3553,k,0,0,C.x,C.y,H,B4),a4.unbindTexture()},this.copyTextureToTexture=function(C,N,k,F=0){const H=N.image.width,B4=N.image.height,T4=c4.convert(k.format),U4=c4.convert(k.type);O.setTexture2D(k,0),j.pixelStorei(37440,k.flipY),j.pixelStorei(37441,k.premultiplyAlpha),j.pixelStorei(3317,k.unpackAlignment),N.isDataTexture?j.texSubImage2D(3553,F,C.x,C.y,H,B4,T4,U4,N.image.data):N.isCompressedTexture?j.compressedTexSubImage2D(3553,F,C.x,C.y,N.mipmaps[0].width,N.mipmaps[0].height,T4,N.mipmaps[0].data):j.texSubImage2D(3553,F,C.x,C.y,T4,U4,N.image),F===0&&k.generateMipmaps&&j.generateMipmap(3553),a4.unbindTexture()},this.copyTextureToTexture3D=function(C,N,k,F,H=0){if(q.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const B4=C.max.x-C.min.x+1,T4=C.max.y-C.min.y+1,U4=C.max.z-C.min.z+1,S4=c4.convert(F.format),H4=c4.convert(F.type);let G4;if(F.isData3DTexture)O.setTexture3D(F,0),G4=32879;else if(F.isDataArrayTexture)O.setTexture2DArray(F,0),G4=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,F.flipY),j.pixelStorei(37441,F.premultiplyAlpha),j.pixelStorei(3317,F.unpackAlignment);const z4=j.getParameter(3314),il=j.getParameter(32878),Y1=j.getParameter(3316),a3=j.getParameter(3315),m3=j.getParameter(32877),i1=k.isCompressedTexture?k.mipmaps[0]:k.image;j.pixelStorei(3314,i1.width),j.pixelStorei(32878,i1.height),j.pixelStorei(3316,C.min.x),j.pixelStorei(3315,C.min.y),j.pixelStorei(32877,C.min.z),k.isDataTexture||k.isData3DTexture?j.texSubImage3D(G4,H,N.x,N.y,N.z,B4,T4,U4,S4,H4,i1.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(G4,H,N.x,N.y,N.z,B4,T4,U4,S4,i1.data)):j.texSubImage3D(G4,H,N.x,N.y,N.z,B4,T4,U4,S4,H4,i1),j.pixelStorei(3314,z4),j.pixelStorei(32878,il),j.pixelStorei(3316,Y1),j.pixelStorei(3315,a3),j.pixelStorei(32877,m3),H===0&&F.generateMipmaps&&j.generateMipmap(G4),a4.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),a4.unbindTexture()},this.resetState=function(){g=0,w=0,x=null,a4.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class xA extends Q0{}xA.prototype.isWebGL1Renderer=!0;class P1 extends Z4{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(l,e){return super.copy(l,e),l.background!==null&&(this.background=l.background.clone()),l.environment!==null&&(this.environment=l.environment.clone()),l.fog!==null&&(this.fog=l.fog.clone()),this.backgroundBlurriness=l.backgroundBlurriness,l.overrideMaterial!==null&&(this.overrideMaterial=l.overrideMaterial.clone()),this.matrixAutoUpdate=l.matrixAutoUpdate,this}toJSON(l){const e=super.toJSON(l);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(l){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=l}}class BA{constructor(l,e){this.isInterleavedBuffer=!0,this.array=l,this.stride=e,this.count=l!==void 0?l.length/e:0,this.usage=B7,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Jl()}onUploadCallback(){}set needsUpdate(l){l===!0&&this.version++}setUsage(l){return this.usage=l,this}copy(l){return this.array=new l.array.constructor(l.array),this.count=l.count,this.stride=l.stride,this.usage=l.usage,this}copyAt(l,e,t){l*=this.stride,t*=e.stride;for(let n=0,i=this.stride;n<i;n++)this.array[l+n]=e.array[t+n];return this}set(l,e=0){return this.array.set(l,e),this}clone(l){l.arrayBuffers===void 0&&(l.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jl()),l.arrayBuffers[this.array.buffer._uuid]===void 0&&(l.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(l.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(e,this.stride);return t.setUsage(this.usage),t}onUpload(l){return this.onUploadCallback=l,this}toJSON(l){return l.arrayBuffers===void 0&&(l.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jl()),l.arrayBuffers[this.array.buffer._uuid]===void 0&&(l.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _l=new y;class L7{constructor(l,e,t,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=l,this.itemSize=e,this.offset=t,this.normalized=n===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(l){this.data.needsUpdate=l}applyMatrix4(l){for(let e=0,t=this.data.count;e<t;e++)_l.fromBufferAttribute(this,e),_l.applyMatrix4(l),this.setXYZ(e,_l.x,_l.y,_l.z);return this}applyNormalMatrix(l){for(let e=0,t=this.count;e<t;e++)_l.fromBufferAttribute(this,e),_l.applyNormalMatrix(l),this.setXYZ(e,_l.x,_l.y,_l.z);return this}transformDirection(l){for(let e=0,t=this.count;e<t;e++)_l.fromBufferAttribute(this,e),_l.transformDirection(l),this.setXYZ(e,_l.x,_l.y,_l.z);return this}setX(l,e){return this.normalized&&(e=j4(e,this.array)),this.data.array[l*this.data.stride+this.offset]=e,this}setY(l,e){return this.normalized&&(e=j4(e,this.array)),this.data.array[l*this.data.stride+this.offset+1]=e,this}setZ(l,e){return this.normalized&&(e=j4(e,this.array)),this.data.array[l*this.data.stride+this.offset+2]=e,this}setW(l,e){return this.normalized&&(e=j4(e,this.array)),this.data.array[l*this.data.stride+this.offset+3]=e,this}getX(l){let e=this.data.array[l*this.data.stride+this.offset];return this.normalized&&(e=w1(e,this.array)),e}getY(l){let e=this.data.array[l*this.data.stride+this.offset+1];return this.normalized&&(e=w1(e,this.array)),e}getZ(l){let e=this.data.array[l*this.data.stride+this.offset+2];return this.normalized&&(e=w1(e,this.array)),e}getW(l){let e=this.data.array[l*this.data.stride+this.offset+3];return this.normalized&&(e=w1(e,this.array)),e}setXY(l,e,t){return l=l*this.data.stride+this.offset,this.normalized&&(e=j4(e,this.array),t=j4(t,this.array)),this.data.array[l+0]=e,this.data.array[l+1]=t,this}setXYZ(l,e,t,n){return l=l*this.data.stride+this.offset,this.normalized&&(e=j4(e,this.array),t=j4(t,this.array),n=j4(n,this.array)),this.data.array[l+0]=e,this.data.array[l+1]=t,this.data.array[l+2]=n,this}setXYZW(l,e,t,n,i){return l=l*this.data.stride+this.offset,this.normalized&&(e=j4(e,this.array),t=j4(t,this.array),n=j4(n,this.array),i=j4(i,this.array)),this.data.array[l+0]=e,this.data.array[l+1]=t,this.data.array[l+2]=n,this.data.array[l+3]=i,this}clone(l){if(l===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)e.push(this.data.array[n+i])}return new Bl(new this.array.constructor(e),this.itemSize,this.normalized)}else return l.interleavedBuffers===void 0&&(l.interleavedBuffers={}),l.interleavedBuffers[this.data.uuid]===void 0&&(l.interleavedBuffers[this.data.uuid]=this.data.clone(l)),new L7(l.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(l){if(l===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)e.push(this.data.array[n+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return l.interleavedBuffers===void 0&&(l.interleavedBuffers={}),l.interleavedBuffers[this.data.uuid]===void 0&&(l.interleavedBuffers[this.data.uuid]=this.data.toJSON(l)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const d6=new y,q6=new W4,f6=new W4,wA=new y,g6=new R4;class MA extends I4{constructor(l,e){super(l,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new R4,this.bindMatrixInverse=new R4}copy(l,e){return super.copy(l,e),this.bindMode=l.bindMode,this.bindMatrix.copy(l.bindMatrix),this.bindMatrixInverse.copy(l.bindMatrixInverse),this.skeleton=l.skeleton,this}bind(l,e){this.skeleton=l,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const l=new W4,e=this.geometry.attributes.skinWeight;for(let t=0,n=e.count;t<n;t++){l.fromBufferAttribute(e,t);const i=1/l.manhattanLength();i!==1/0?l.multiplyScalar(i):l.set(1,0,0,0),e.setXYZW(t,l.x,l.y,l.z,l.w)}}updateMatrixWorld(l){super.updateMatrixWorld(l),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(l,e){const t=this.skeleton,n=this.geometry;q6.fromBufferAttribute(n.attributes.skinIndex,l),f6.fromBufferAttribute(n.attributes.skinWeight,l),d6.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let i=0;i<4;i++){const s=f6.getComponent(i);if(s!==0){const r=q6.getComponent(i);g6.multiplyMatrices(t.bones[r].matrixWorld,t.boneInverses[r]),e.addScaledVector(wA.copy(d6).applyMatrix4(g6),s)}}return e.applyMatrix4(this.bindMatrixInverse)}}class v0 extends Z4{constructor(){super(),this.isBone=!0,this.type="Bone"}}class EA extends nl{constructor(l=null,e=1,t=1,n,i,s,r,o,a=ol,m=ol,c,h){super(null,s,r,o,a,m,n,i,c,h),this.isDataTexture=!0,this.image={data:l,width:e,height:t},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const p6=new R4,CA=new R4;class G7{constructor(l=[],e=[]){this.uuid=Jl(),this.bones=l.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const l=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(l.length*16),e.length===0)this.calculateInverses();else if(l.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let t=0,n=this.bones.length;t<n;t++)this.boneInverses.push(new R4)}}calculateInverses(){this.boneInverses.length=0;for(let l=0,e=this.bones.length;l<e;l++){const t=new R4;this.bones[l]&&t.copy(this.bones[l].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let l=0,e=this.bones.length;l<e;l++){const t=this.bones[l];t&&t.matrixWorld.copy(this.boneInverses[l]).invert()}for(let l=0,e=this.bones.length;l<e;l++){const t=this.bones[l];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){const l=this.bones,e=this.boneInverses,t=this.boneMatrices,n=this.boneTexture;for(let i=0,s=l.length;i<s;i++){const r=l[i]?l[i].matrixWorld:CA;p6.multiplyMatrices(r,e[i]),p6.toArray(t,i*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new G7(this.bones,this.boneInverses)}computeBoneTexture(){let l=Math.sqrt(this.bones.length*4);l=a0(l),l=Math.max(l,4);const e=new Float32Array(l*l*4);e.set(this.boneMatrices);const t=new EA(e,l,l,jl,Rl);return t.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=t,this.boneTextureSize=l,this}getBoneByName(l){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];if(n.name===l)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(l,e){this.uuid=l.uuid;for(let t=0,n=l.bones.length;t<n;t++){const i=l.bones[t];let s=e[i];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),s=new v0),this.bones.push(s),this.boneInverses.push(new R4().fromArray(l.boneInverses[t]))}return this.init(),this}toJSON(){const l={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};l.uuid=this.uuid;const e=this.bones,t=this.boneInverses;for(let n=0,i=e.length;n<i;n++){const s=e[n];l.bones.push(s.uuid);const r=t[n];l.boneInverses.push(r.toArray())}return l}}class x6 extends Bl{constructor(l,e,t,n=1){super(l,e,t),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(l){return super.copy(l),this.meshPerAttribute=l.meshPerAttribute,this}toJSON(){const l=super.toJSON();return l.meshPerAttribute=this.meshPerAttribute,l.isInstancedBufferAttribute=!0,l}}const B6=new R4,w6=new R4,V2=[],QA=new R4,l2=new I4;class vA extends I4{constructor(l,e,t){super(l,e),this.isInstancedMesh=!0,this.instanceMatrix=new x6(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1;for(let n=0;n<t;n++)this.setMatrixAt(n,QA)}copy(l,e){return super.copy(l,e),this.instanceMatrix.copy(l.instanceMatrix),l.instanceColor!==null&&(this.instanceColor=l.instanceColor.clone()),this.count=l.count,this}getColorAt(l,e){e.fromArray(this.instanceColor.array,l*3)}getMatrixAt(l,e){e.fromArray(this.instanceMatrix.array,l*16)}raycast(l,e){const t=this.matrixWorld,n=this.count;if(l2.geometry=this.geometry,l2.material=this.material,l2.material!==void 0)for(let i=0;i<n;i++){this.getMatrixAt(i,B6),w6.multiplyMatrices(t,B6),l2.matrixWorld=w6,l2.raycast(l,V2);for(let s=0,r=V2.length;s<r;s++){const o=V2[s];o.instanceId=i,o.object=this,e.push(o)}V2.length=0}}setColorAt(l,e){this.instanceColor===null&&(this.instanceColor=new x6(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,l*3)}setMatrixAt(l,e){e.toArray(this.instanceMatrix.array,l*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class _0 extends o1{constructor(l){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new g4(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.color.copy(l.color),this.linewidth=l.linewidth,this.linecap=l.linecap,this.linejoin=l.linejoin,this.fog=l.fog,this}}const M6=new y,E6=new y,C6=new R4,t7=new U7,j2=new k3;class P7 extends Z4{constructor(l=new fl,e=new _0){super(),this.isLine=!0,this.type="Line",this.geometry=l,this.material=e,this.updateMorphTargets()}copy(l,e){return super.copy(l,e),this.material=l.material,this.geometry=l.geometry,this}computeLineDistances(){const l=this.geometry;if(l.index===null){const e=l.attributes.position,t=[0];for(let n=1,i=e.count;n<i;n++)M6.fromBufferAttribute(e,n-1),E6.fromBufferAttribute(e,n),t[n]=t[n-1],t[n]+=M6.distanceTo(E6);l.setAttribute("lineDistance",new J4(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(l,e){const t=this.geometry,n=this.matrixWorld,i=l.params.Line.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),j2.copy(t.boundingSphere),j2.applyMatrix4(n),j2.radius+=i,l.ray.intersectsSphere(j2)===!1)return;C6.copy(n).invert(),t7.copy(l.ray).applyMatrix4(C6);const r=i/((this.scale.x+this.scale.y+this.scale.z)/3),o=r*r,a=new y,m=new y,c=new y,h=new y,d=this.isLineSegments?2:1,f=t.index,u=t.attributes.position;if(f!==null){const g=Math.max(0,s.start),w=Math.min(f.count,s.start+s.count);for(let x=g,p=w-1;x<p;x+=d){const E=f.getX(x),v=f.getX(x+1);if(a.fromBufferAttribute(u,E),m.fromBufferAttribute(u,v),t7.distanceSqToSegment(a,m,h,c)>o)continue;h.applyMatrix4(this.matrixWorld);const B=l.ray.origin.distanceTo(h);B<l.near||B>l.far||e.push({distance:B,point:c.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,s.start),w=Math.min(u.count,s.start+s.count);for(let x=g,p=w-1;x<p;x+=d){if(a.fromBufferAttribute(u,x),m.fromBufferAttribute(u,x+1),t7.distanceSqToSegment(a,m,h,c)>o)continue;h.applyMatrix4(this.matrixWorld);const v=l.ray.origin.distanceTo(h);v<l.near||v>l.far||e.push({distance:v,point:c.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const r=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}}const Q6=new y,v6=new y;class _A extends P7{constructor(l,e){super(l,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const l=this.geometry;if(l.index===null){const e=l.attributes.position,t=[];for(let n=0,i=e.count;n<i;n+=2)Q6.fromBufferAttribute(e,n),v6.fromBufferAttribute(e,n+1),t[n]=n===0?0:t[n-1],t[n+1]=t[n]+Q6.distanceTo(v6);l.setAttribute("lineDistance",new J4(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yA extends P7{constructor(l,e){super(l,e),this.isLineLoop=!0,this.type="LineLoop"}}class y0 extends o1{constructor(l){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new g4(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.color.copy(l.color),this.map=l.map,this.alphaMap=l.alphaMap,this.size=l.size,this.sizeAttenuation=l.sizeAttenuation,this.fog=l.fog,this}}const _6=new R4,C7=new U7,W2=new k3,J2=new y;class IA extends Z4{constructor(l=new fl,e=new y0){super(),this.isPoints=!0,this.type="Points",this.geometry=l,this.material=e,this.updateMorphTargets()}copy(l,e){return super.copy(l,e),this.material=l.material,this.geometry=l.geometry,this}raycast(l,e){const t=this.geometry,n=this.matrixWorld,i=l.params.Points.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),W2.copy(t.boundingSphere),W2.applyMatrix4(n),W2.radius+=i,l.ray.intersectsSphere(W2)===!1)return;_6.copy(n).invert(),C7.copy(l.ray).applyMatrix4(_6);const r=i/((this.scale.x+this.scale.y+this.scale.z)/3),o=r*r,a=t.index,c=t.attributes.position;if(a!==null){const h=Math.max(0,s.start),d=Math.min(a.count,s.start+s.count);for(let f=h,q=d;f<q;f++){const u=a.getX(f);J2.fromBufferAttribute(c,u),y6(J2,u,o,n,l,e,this)}}else{const h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let f=h,q=d;f<q;f++)J2.fromBufferAttribute(c,f),y6(J2,f,o,n,l,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const r=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=i}}}}}function y6(A,l,e,t,n,i,s){const r=C7.distanceSqToPoint(A);if(r<e){const o=new y;C7.closestPointToPoint(A,o),o.applyMatrix4(t);const a=n.ray.origin.distanceTo(o);if(a<n.near||a>n.far)return;i.push({distance:a,distanceToRay:Math.sqrt(r),point:o,index:l,face:null,object:s})}}class H3 extends nl{constructor(l,e,t,n,i,s,r,o,a){super(l,e,t,n,i,s,r,o,a),this.isCanvasTexture=!0,this.needsUpdate=!0}}class n1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(l,e){const t=this.getUtoTmapping(l);return this.getPoint(t,e)}getPoints(l=5){const e=[];for(let t=0;t<=l;t++)e.push(this.getPoint(t/l));return e}getSpacedPoints(l=5){const e=[];for(let t=0;t<=l;t++)e.push(this.getPointAt(t/l));return e}getLength(){const l=this.getLengths();return l[l.length-1]}getLengths(l=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===l+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,n=this.getPoint(0),i=0;e.push(0);for(let s=1;s<=l;s++)t=this.getPoint(s/l),i+=t.distanceTo(n),e.push(i),n=t;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(l,e){const t=this.getLengths();let n=0;const i=t.length;let s;e?s=e:s=l*t[i-1];let r=0,o=i-1,a;for(;r<=o;)if(n=Math.floor(r+(o-r)/2),a=t[n]-s,a<0)r=n+1;else if(a>0)o=n-1;else{o=n;break}if(n=o,t[n]===s)return n/(i-1);const m=t[n],h=t[n+1]-m,d=(s-m)/h;return(n+d)/(i-1)}getTangent(l,e){let n=l-1e-4,i=l+1e-4;n<0&&(n=0),i>1&&(i=1);const s=this.getPoint(n),r=this.getPoint(i),o=e||(s.isVector2?new n4:new y);return o.copy(r).sub(s).normalize(),o}getTangentAt(l,e){const t=this.getUtoTmapping(l);return this.getTangent(t,e)}computeFrenetFrames(l,e){const t=new y,n=[],i=[],s=[],r=new y,o=new R4;for(let d=0;d<=l;d++){const f=d/l;n[d]=this.getTangentAt(f,new y)}i[0]=new y,s[0]=new y;let a=Number.MAX_VALUE;const m=Math.abs(n[0].x),c=Math.abs(n[0].y),h=Math.abs(n[0].z);m<=a&&(a=m,t.set(1,0,0)),c<=a&&(a=c,t.set(0,1,0)),h<=a&&t.set(0,0,1),r.crossVectors(n[0],t).normalize(),i[0].crossVectors(n[0],r),s[0].crossVectors(n[0],i[0]);for(let d=1;d<=l;d++){if(i[d]=i[d-1].clone(),s[d]=s[d-1].clone(),r.crossVectors(n[d-1],n[d]),r.length()>Number.EPSILON){r.normalize();const f=Math.acos(pl(n[d-1].dot(n[d]),-1,1));i[d].applyMatrix4(o.makeRotationAxis(r,f))}s[d].crossVectors(n[d],i[d])}if(e===!0){let d=Math.acos(pl(i[0].dot(i[l]),-1,1));d/=l,n[0].dot(r.crossVectors(i[0],i[l]))>0&&(d=-d);for(let f=1;f<=l;f++)i[f].applyMatrix4(o.makeRotationAxis(n[f],d*f)),s[f].crossVectors(n[f],i[f])}return{tangents:n,normals:i,binormals:s}}clone(){return new this.constructor().copy(this)}copy(l){return this.arcLengthDivisions=l.arcLengthDivisions,this}toJSON(){const l={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return l.arcLengthDivisions=this.arcLengthDivisions,l.type=this.type,l}fromJSON(l){return this.arcLengthDivisions=l.arcLengthDivisions,this}}class z7 extends n1{constructor(l=0,e=0,t=1,n=1,i=0,s=Math.PI*2,r=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=l,this.aY=e,this.xRadius=t,this.yRadius=n,this.aStartAngle=i,this.aEndAngle=s,this.aClockwise=r,this.aRotation=o}getPoint(l,e){const t=e||new n4,n=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const s=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(s?i=0:i=n),this.aClockwise===!0&&!s&&(i===n?i=-n:i=i-n);const r=this.aStartAngle+l*i;let o=this.aX+this.xRadius*Math.cos(r),a=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const m=Math.cos(this.aRotation),c=Math.sin(this.aRotation),h=o-this.aX,d=a-this.aY;o=h*m-d*c+this.aX,a=h*c+d*m+this.aY}return t.set(o,a)}copy(l){return super.copy(l),this.aX=l.aX,this.aY=l.aY,this.xRadius=l.xRadius,this.yRadius=l.yRadius,this.aStartAngle=l.aStartAngle,this.aEndAngle=l.aEndAngle,this.aClockwise=l.aClockwise,this.aRotation=l.aRotation,this}toJSON(){const l=super.toJSON();return l.aX=this.aX,l.aY=this.aY,l.xRadius=this.xRadius,l.yRadius=this.yRadius,l.aStartAngle=this.aStartAngle,l.aEndAngle=this.aEndAngle,l.aClockwise=this.aClockwise,l.aRotation=this.aRotation,l}fromJSON(l){return super.fromJSON(l),this.aX=l.aX,this.aY=l.aY,this.xRadius=l.xRadius,this.yRadius=l.yRadius,this.aStartAngle=l.aStartAngle,this.aEndAngle=l.aEndAngle,this.aClockwise=l.aClockwise,this.aRotation=l.aRotation,this}}class TA extends z7{constructor(l,e,t,n,i,s){super(l,e,t,t,n,i,s),this.isArcCurve=!0,this.type="ArcCurve"}}function k7(){let A=0,l=0,e=0,t=0;function n(i,s,r,o){A=i,l=r,e=-3*i+3*s-2*r-o,t=2*i-2*s+r+o}return{initCatmullRom:function(i,s,r,o,a){n(s,r,a*(r-i),a*(o-s))},initNonuniformCatmullRom:function(i,s,r,o,a,m,c){let h=(s-i)/a-(r-i)/(a+m)+(r-s)/m,d=(r-s)/m-(o-s)/(m+c)+(o-r)/c;h*=m,d*=m,n(s,r,h,d)},calc:function(i){const s=i*i,r=s*i;return A+l*i+e*s+t*r}}}const Z2=new y,n7=new k7,i7=new k7,s7=new k7;class bA extends n1{constructor(l=[],e=!1,t="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=l,this.closed=e,this.curveType=t,this.tension=n}getPoint(l,e=new y){const t=e,n=this.points,i=n.length,s=(i-(this.closed?0:1))*l;let r=Math.floor(s),o=s-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/i)+1)*i:o===0&&r===i-1&&(r=i-2,o=1);let a,m;this.closed||r>0?a=n[(r-1)%i]:(Z2.subVectors(n[0],n[1]).add(n[0]),a=Z2);const c=n[r%i],h=n[(r+1)%i];if(this.closed||r+2<i?m=n[(r+2)%i]:(Z2.subVectors(n[i-1],n[i-2]).add(n[i-1]),m=Z2),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let f=Math.pow(a.distanceToSquared(c),d),q=Math.pow(c.distanceToSquared(h),d),u=Math.pow(h.distanceToSquared(m),d);q<1e-4&&(q=1),f<1e-4&&(f=q),u<1e-4&&(u=q),n7.initNonuniformCatmullRom(a.x,c.x,h.x,m.x,f,q,u),i7.initNonuniformCatmullRom(a.y,c.y,h.y,m.y,f,q,u),s7.initNonuniformCatmullRom(a.z,c.z,h.z,m.z,f,q,u)}else this.curveType==="catmullrom"&&(n7.initCatmullRom(a.x,c.x,h.x,m.x,this.tension),i7.initCatmullRom(a.y,c.y,h.y,m.y,this.tension),s7.initCatmullRom(a.z,c.z,h.z,m.z,this.tension));return t.set(n7.calc(o),i7.calc(o),s7.calc(o)),t}copy(l){super.copy(l),this.points=[];for(let e=0,t=l.points.length;e<t;e++){const n=l.points[e];this.points.push(n.clone())}return this.closed=l.closed,this.curveType=l.curveType,this.tension=l.tension,this}toJSON(){const l=super.toJSON();l.points=[];for(let e=0,t=this.points.length;e<t;e++){const n=this.points[e];l.points.push(n.toArray())}return l.closed=this.closed,l.curveType=this.curveType,l.tension=this.tension,l}fromJSON(l){super.fromJSON(l),this.points=[];for(let e=0,t=l.points.length;e<t;e++){const n=l.points[e];this.points.push(new y().fromArray(n))}return this.closed=l.closed,this.curveType=l.curveType,this.tension=l.tension,this}}function I6(A,l,e,t,n){const i=(t-l)*.5,s=(n-e)*.5,r=A*A,o=A*r;return(2*e-2*t+i+s)*o+(-3*e+3*t-2*i-s)*r+i*A+e}function SA(A,l){const e=1-A;return e*e*l}function FA(A,l){return 2*(1-A)*A*l}function DA(A,l){return A*A*l}function c2(A,l,e,t){return SA(A,l)+FA(A,e)+DA(A,t)}function UA(A,l){const e=1-A;return e*e*e*l}function NA(A,l){const e=1-A;return 3*e*e*A*l}function RA(A,l){return 3*(1-A)*A*A*l}function LA(A,l){return A*A*A*l}function h2(A,l,e,t,n){return UA(A,l)+NA(A,e)+RA(A,t)+LA(A,n)}class I0 extends n1{constructor(l=new n4,e=new n4,t=new n4,n=new n4){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=l,this.v1=e,this.v2=t,this.v3=n}getPoint(l,e=new n4){const t=e,n=this.v0,i=this.v1,s=this.v2,r=this.v3;return t.set(h2(l,n.x,i.x,s.x,r.x),h2(l,n.y,i.y,s.y,r.y)),t}copy(l){return super.copy(l),this.v0.copy(l.v0),this.v1.copy(l.v1),this.v2.copy(l.v2),this.v3.copy(l.v3),this}toJSON(){const l=super.toJSON();return l.v0=this.v0.toArray(),l.v1=this.v1.toArray(),l.v2=this.v2.toArray(),l.v3=this.v3.toArray(),l}fromJSON(l){return super.fromJSON(l),this.v0.fromArray(l.v0),this.v1.fromArray(l.v1),this.v2.fromArray(l.v2),this.v3.fromArray(l.v3),this}}class GA extends n1{constructor(l=new y,e=new y,t=new y,n=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=l,this.v1=e,this.v2=t,this.v3=n}getPoint(l,e=new y){const t=e,n=this.v0,i=this.v1,s=this.v2,r=this.v3;return t.set(h2(l,n.x,i.x,s.x,r.x),h2(l,n.y,i.y,s.y,r.y),h2(l,n.z,i.z,s.z,r.z)),t}copy(l){return super.copy(l),this.v0.copy(l.v0),this.v1.copy(l.v1),this.v2.copy(l.v2),this.v3.copy(l.v3),this}toJSON(){const l=super.toJSON();return l.v0=this.v0.toArray(),l.v1=this.v1.toArray(),l.v2=this.v2.toArray(),l.v3=this.v3.toArray(),l}fromJSON(l){return super.fromJSON(l),this.v0.fromArray(l.v0),this.v1.fromArray(l.v1),this.v2.fromArray(l.v2),this.v3.fromArray(l.v3),this}}class Y7 extends n1{constructor(l=new n4,e=new n4){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=l,this.v2=e}getPoint(l,e=new n4){const t=e;return l===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(l).add(this.v1)),t}getPointAt(l,e){return this.getPoint(l,e)}getTangent(l,e){const t=e||new n4;return t.copy(this.v2).sub(this.v1).normalize(),t}copy(l){return super.copy(l),this.v1.copy(l.v1),this.v2.copy(l.v2),this}toJSON(){const l=super.toJSON();return l.v1=this.v1.toArray(),l.v2=this.v2.toArray(),l}fromJSON(l){return super.fromJSON(l),this.v1.fromArray(l.v1),this.v2.fromArray(l.v2),this}}class PA extends n1{constructor(l=new y,e=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=l,this.v2=e}getPoint(l,e=new y){const t=e;return l===1?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(l).add(this.v1)),t}getPointAt(l,e){return this.getPoint(l,e)}copy(l){return super.copy(l),this.v1.copy(l.v1),this.v2.copy(l.v2),this}toJSON(){const l=super.toJSON();return l.v1=this.v1.toArray(),l.v2=this.v2.toArray(),l}fromJSON(l){return super.fromJSON(l),this.v1.fromArray(l.v1),this.v2.fromArray(l.v2),this}}class T0 extends n1{constructor(l=new n4,e=new n4,t=new n4){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=l,this.v1=e,this.v2=t}getPoint(l,e=new n4){const t=e,n=this.v0,i=this.v1,s=this.v2;return t.set(c2(l,n.x,i.x,s.x),c2(l,n.y,i.y,s.y)),t}copy(l){return super.copy(l),this.v0.copy(l.v0),this.v1.copy(l.v1),this.v2.copy(l.v2),this}toJSON(){const l=super.toJSON();return l.v0=this.v0.toArray(),l.v1=this.v1.toArray(),l.v2=this.v2.toArray(),l}fromJSON(l){return super.fromJSON(l),this.v0.fromArray(l.v0),this.v1.fromArray(l.v1),this.v2.fromArray(l.v2),this}}class b0 extends n1{constructor(l=new y,e=new y,t=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=l,this.v1=e,this.v2=t}getPoint(l,e=new y){const t=e,n=this.v0,i=this.v1,s=this.v2;return t.set(c2(l,n.x,i.x,s.x),c2(l,n.y,i.y,s.y),c2(l,n.z,i.z,s.z)),t}copy(l){return super.copy(l),this.v0.copy(l.v0),this.v1.copy(l.v1),this.v2.copy(l.v2),this}toJSON(){const l=super.toJSON();return l.v0=this.v0.toArray(),l.v1=this.v1.toArray(),l.v2=this.v2.toArray(),l}fromJSON(l){return super.fromJSON(l),this.v0.fromArray(l.v0),this.v1.fromArray(l.v1),this.v2.fromArray(l.v2),this}}class S0 extends n1{constructor(l=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=l}getPoint(l,e=new n4){const t=e,n=this.points,i=(n.length-1)*l,s=Math.floor(i),r=i-s,o=n[s===0?s:s-1],a=n[s],m=n[s>n.length-2?n.length-1:s+1],c=n[s>n.length-3?n.length-1:s+2];return t.set(I6(r,o.x,a.x,m.x,c.x),I6(r,o.y,a.y,m.y,c.y)),t}copy(l){super.copy(l),this.points=[];for(let e=0,t=l.points.length;e<t;e++){const n=l.points[e];this.points.push(n.clone())}return this}toJSON(){const l=super.toJSON();l.points=[];for(let e=0,t=this.points.length;e<t;e++){const n=this.points[e];l.points.push(n.toArray())}return l}fromJSON(l){super.fromJSON(l),this.points=[];for(let e=0,t=l.points.length;e<t;e++){const n=l.points[e];this.points.push(new n4().fromArray(n))}return this}}var H7=Object.freeze({__proto__:null,ArcCurve:TA,CatmullRomCurve3:bA,CubicBezierCurve:I0,CubicBezierCurve3:GA,EllipseCurve:z7,LineCurve:Y7,LineCurve3:PA,QuadraticBezierCurve:T0,QuadraticBezierCurve3:b0,SplineCurve:S0});class zA extends n1{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(l){this.curves.push(l)}closePath(){const l=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);l.equals(e)||this.curves.push(new Y7(e,l))}getPoint(l,e){const t=l*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const s=n[i]-t,r=this.curves[i],o=r.getLength(),a=o===0?0:1-s/o;return r.getPointAt(a,e)}i++}return null}getLength(){const l=this.getCurveLengths();return l[l.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const l=[];let e=0;for(let t=0,n=this.curves.length;t<n;t++)e+=this.curves[t].getLength(),l.push(e);return this.cacheLengths=l,l}getSpacedPoints(l=40){const e=[];for(let t=0;t<=l;t++)e.push(this.getPoint(t/l));return this.autoClose&&e.push(e[0]),e}getPoints(l=12){const e=[];let t;for(let n=0,i=this.curves;n<i.length;n++){const s=i[n],r=s.isEllipseCurve?l*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?l*s.points.length:l,o=s.getPoints(r);for(let a=0;a<o.length;a++){const m=o[a];t&&t.equals(m)||(e.push(m),t=m)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(l){super.copy(l),this.curves=[];for(let e=0,t=l.curves.length;e<t;e++){const n=l.curves[e];this.curves.push(n.clone())}return this.autoClose=l.autoClose,this}toJSON(){const l=super.toJSON();l.autoClose=this.autoClose,l.curves=[];for(let e=0,t=this.curves.length;e<t;e++){const n=this.curves[e];l.curves.push(n.toJSON())}return l}fromJSON(l){super.fromJSON(l),this.autoClose=l.autoClose,this.curves=[];for(let e=0,t=l.curves.length;e<t;e++){const n=l.curves[e];this.curves.push(new H7[n.type]().fromJSON(n))}return this}}class Q7 extends zA{constructor(l){super(),this.type="Path",this.currentPoint=new n4,l&&this.setFromPoints(l)}setFromPoints(l){this.moveTo(l[0].x,l[0].y);for(let e=1,t=l.length;e<t;e++)this.lineTo(l[e].x,l[e].y);return this}moveTo(l,e){return this.currentPoint.set(l,e),this}lineTo(l,e){const t=new Y7(this.currentPoint.clone(),new n4(l,e));return this.curves.push(t),this.currentPoint.set(l,e),this}quadraticCurveTo(l,e,t,n){const i=new T0(this.currentPoint.clone(),new n4(l,e),new n4(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}bezierCurveTo(l,e,t,n,i,s){const r=new I0(this.currentPoint.clone(),new n4(l,e),new n4(t,n),new n4(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}splineThru(l){const e=[this.currentPoint.clone()].concat(l),t=new S0(e);return this.curves.push(t),this.currentPoint.copy(l[l.length-1]),this}arc(l,e,t,n,i,s){const r=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(l+r,e+o,t,n,i,s),this}absarc(l,e,t,n,i,s){return this.absellipse(l,e,t,t,n,i,s),this}ellipse(l,e,t,n,i,s,r,o){const a=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(l+a,e+m,t,n,i,s,r,o),this}absellipse(l,e,t,n,i,s,r,o){const a=new z7(l,e,t,n,i,s,r,o);if(this.curves.length>0){const c=a.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(a);const m=a.getPoint(1);return this.currentPoint.copy(m),this}copy(l){return super.copy(l),this.currentPoint.copy(l.currentPoint),this}toJSON(){const l=super.toJSON();return l.currentPoint=this.currentPoint.toArray(),l}fromJSON(l){return super.fromJSON(l),this.currentPoint.fromArray(l.currentPoint),this}}class K7 extends fl{constructor(l=1,e=1,t=1,n=8,i=1,s=!1,r=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:l,radiusBottom:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o};const a=this;n=Math.floor(n),i=Math.floor(i);const m=[],c=[],h=[],d=[];let f=0;const q=[],u=t/2;let g=0;w(),s===!1&&(l>0&&x(!0),e>0&&x(!1)),this.setIndex(m),this.setAttribute("position",new J4(c,3)),this.setAttribute("normal",new J4(h,3)),this.setAttribute("uv",new J4(d,2));function w(){const p=new y,E=new y;let v=0;const I=(e-l)/t;for(let B=0;B<=i;B++){const Q=[],T=B/i,z=T*(e-l)+l;for(let Z=0;Z<=n;Z++){const L=Z/n,S=L*o+r,P=Math.sin(S),W=Math.cos(S);E.x=z*P,E.y=-T*t+u,E.z=z*W,c.push(E.x,E.y,E.z),p.set(P,I,W).normalize(),h.push(p.x,p.y,p.z),d.push(L,1-T),Q.push(f++)}q.push(Q)}for(let B=0;B<n;B++)for(let Q=0;Q<i;Q++){const T=q[Q][B],z=q[Q+1][B],Z=q[Q+1][B+1],L=q[Q][B+1];m.push(T,z,L),m.push(z,Z,L),v+=6}a.addGroup(g,v,0),g+=v}function x(p){const E=f,v=new n4,I=new y;let B=0;const Q=p===!0?l:e,T=p===!0?1:-1;for(let Z=1;Z<=n;Z++)c.push(0,u*T,0),h.push(0,T,0),d.push(.5,.5),f++;const z=f;for(let Z=0;Z<=n;Z++){const S=Z/n*o+r,P=Math.cos(S),W=Math.sin(S);I.x=Q*W,I.y=u*T,I.z=Q*P,c.push(I.x,I.y,I.z),h.push(0,T,0),v.x=P*.5+.5,v.y=W*.5*T+.5,d.push(v.x,v.y),f++}for(let Z=0;Z<n;Z++){const L=E+Z,S=z+Z;p===!0?m.push(S,S+1,L):m.push(S+1,S,L),B+=3}a.addGroup(g,B,p===!0?1:2),g+=B}}static fromJSON(l){return new K7(l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength)}}class b3 extends Q7{constructor(l){super(l),this.uuid=Jl(),this.type="Shape",this.holes=[]}getPointsHoles(l){const e=[];for(let t=0,n=this.holes.length;t<n;t++)e[t]=this.holes[t].getPoints(l);return e}extractPoints(l){return{shape:this.getPoints(l),holes:this.getPointsHoles(l)}}copy(l){super.copy(l),this.holes=[];for(let e=0,t=l.holes.length;e<t;e++){const n=l.holes[e];this.holes.push(n.clone())}return this}toJSON(){const l=super.toJSON();l.uuid=this.uuid,l.holes=[];for(let e=0,t=this.holes.length;e<t;e++){const n=this.holes[e];l.holes.push(n.toJSON())}return l}fromJSON(l){super.fromJSON(l),this.uuid=l.uuid,this.holes=[];for(let e=0,t=l.holes.length;e<t;e++){const n=l.holes[e];this.holes.push(new Q7().fromJSON(n))}return this}}const kA={triangulate:function(A,l,e=2){const t=l&&l.length,n=t?l[0]*e:A.length;let i=F0(A,0,n,e,!0);const s=[];if(!i||i.next===i.prev)return s;let r,o,a,m,c,h,d;if(t&&(i=VA(A,l,i,e)),A.length>80*e){r=a=A[0],o=m=A[1];for(let f=e;f<n;f+=e)c=A[f],h=A[f+1],c<r&&(r=c),h<o&&(o=h),c>a&&(a=c),h>m&&(m=h);d=Math.max(a-r,m-o),d=d!==0?32767/d:0}return g2(i,s,e,r,o,d,0),s}};function F0(A,l,e,t,n){let i,s;if(n===ir(A,l,e,t)>0)for(i=l;i<e;i+=t)s=T6(i,A[i],A[i+1],s);else for(i=e-t;i>=l;i-=t)s=T6(i,A[i],A[i+1],s);return s&&p5(s,s.next)&&(x2(s),s=s.next),s}function A3(A,l){if(!A)return A;l||(l=A);let e=A,t;do if(t=!1,!e.steiner&&(p5(e,e.next)||tl(e.prev,e,e.next)===0)){if(x2(e),e=l=e.prev,e===e.next)break;t=!0}else e=e.next;while(t||e!==l);return l}function g2(A,l,e,t,n,i,s){if(!A)return;!s&&i&&XA(A,t,n,i);let r=A,o,a;for(;A.prev!==A.next;){if(o=A.prev,a=A.next,i?HA(A,t,n,i):YA(A)){l.push(o.i/e|0),l.push(A.i/e|0),l.push(a.i/e|0),x2(A),A=a.next,r=a.next;continue}if(A=a,A===r){s?s===1?(A=KA(A3(A),l,e),g2(A,l,e,t,n,i,2)):s===2&&OA(A,l,e,t,n,i):g2(A3(A),l,e,t,n,i,1);break}}}function YA(A){const l=A.prev,e=A,t=A.next;if(tl(l,e,t)>=0)return!1;const n=l.x,i=e.x,s=t.x,r=l.y,o=e.y,a=t.y,m=n<i?n<s?n:s:i<s?i:s,c=r<o?r<a?r:a:o<a?o:a,h=n>i?n>s?n:s:i>s?i:s,d=r>o?r>a?r:a:o>a?o:a;let f=t.next;for(;f!==l;){if(f.x>=m&&f.x<=h&&f.y>=c&&f.y<=d&&y3(n,r,i,o,s,a,f.x,f.y)&&tl(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function HA(A,l,e,t){const n=A.prev,i=A,s=A.next;if(tl(n,i,s)>=0)return!1;const r=n.x,o=i.x,a=s.x,m=n.y,c=i.y,h=s.y,d=r<o?r<a?r:a:o<a?o:a,f=m<c?m<h?m:h:c<h?c:h,q=r>o?r>a?r:a:o>a?o:a,u=m>c?m>h?m:h:c>h?c:h,g=v7(d,f,l,e,t),w=v7(q,u,l,e,t);let x=A.prevZ,p=A.nextZ;for(;x&&x.z>=g&&p&&p.z<=w;){if(x.x>=d&&x.x<=q&&x.y>=f&&x.y<=u&&x!==n&&x!==s&&y3(r,m,o,c,a,h,x.x,x.y)&&tl(x.prev,x,x.next)>=0||(x=x.prevZ,p.x>=d&&p.x<=q&&p.y>=f&&p.y<=u&&p!==n&&p!==s&&y3(r,m,o,c,a,h,p.x,p.y)&&tl(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=q&&x.y>=f&&x.y<=u&&x!==n&&x!==s&&y3(r,m,o,c,a,h,x.x,x.y)&&tl(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;p&&p.z<=w;){if(p.x>=d&&p.x<=q&&p.y>=f&&p.y<=u&&p!==n&&p!==s&&y3(r,m,o,c,a,h,p.x,p.y)&&tl(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function KA(A,l,e){let t=A;do{const n=t.prev,i=t.next.next;!p5(n,i)&&D0(n,t,t.next,i)&&p2(n,i)&&p2(i,n)&&(l.push(n.i/e|0),l.push(t.i/e|0),l.push(i.i/e|0),x2(t),x2(t.next),t=A=i),t=t.next}while(t!==A);return A3(t)}function OA(A,l,e,t,n,i){let s=A;do{let r=s.next.next;for(;r!==s.prev;){if(s.i!==r.i&&er(s,r)){let o=U0(s,r);s=A3(s,s.next),o=A3(o,o.next),g2(s,l,e,t,n,i,0),g2(o,l,e,t,n,i,0);return}r=r.next}s=s.next}while(s!==A)}function VA(A,l,e,t){const n=[];let i,s,r,o,a;for(i=0,s=l.length;i<s;i++)r=l[i]*t,o=i<s-1?l[i+1]*t:A.length,a=F0(A,r,o,t,!1),a===a.next&&(a.steiner=!0),n.push(lr(a));for(n.sort(jA),i=0;i<n.length;i++)e=WA(n[i],e);return e}function jA(A,l){return A.x-l.x}function WA(A,l){const e=JA(A,l);if(!e)return l;const t=U0(e,A);return A3(t,t.next),A3(e,e.next)}function JA(A,l){let e=l,t=-1/0,n;const i=A.x,s=A.y;do{if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>t&&(t=h,n=e.x<e.next.x?e:e.next,h===i))return n}e=e.next}while(e!==l);if(!n)return null;const r=n,o=n.x,a=n.y;let m=1/0,c;e=n;do i>=e.x&&e.x>=o&&i!==e.x&&y3(s<a?i:t,s,o,a,s<a?t:i,s,e.x,e.y)&&(c=Math.abs(s-e.y)/(i-e.x),p2(e,A)&&(c<m||c===m&&(e.x>n.x||e.x===n.x&&ZA(n,e)))&&(n=e,m=c)),e=e.next;while(e!==r);return n}function ZA(A,l){return tl(A.prev,A,l.prev)<0&&tl(l.next,A,A.next)<0}function XA(A,l,e,t){let n=A;do n.z===0&&(n.z=v7(n.x,n.y,l,e,t)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==A);n.prevZ.nextZ=null,n.prevZ=null,$A(n)}function $A(A){let l,e,t,n,i,s,r,o,a=1;do{for(e=A,A=null,i=null,s=0;e;){for(s++,t=e,r=0,l=0;l<a&&(r++,t=t.nextZ,!!t);l++);for(o=a;r>0||o>0&&t;)r!==0&&(o===0||!t||e.z<=t.z)?(n=e,e=e.nextZ,r--):(n=t,t=t.nextZ,o--),i?i.nextZ=n:A=n,n.prevZ=i,i=n;e=t}i.nextZ=null,a*=2}while(s>1);return A}function v7(A,l,e,t,n){return A=(A-e)*n|0,l=(l-t)*n|0,A=(A|A<<8)&16711935,A=(A|A<<4)&252645135,A=(A|A<<2)&858993459,A=(A|A<<1)&1431655765,l=(l|l<<8)&16711935,l=(l|l<<4)&252645135,l=(l|l<<2)&858993459,l=(l|l<<1)&1431655765,A|l<<1}function lr(A){let l=A,e=A;do(l.x<e.x||l.x===e.x&&l.y<e.y)&&(e=l),l=l.next;while(l!==A);return e}function y3(A,l,e,t,n,i,s,r){return(n-s)*(l-r)>=(A-s)*(i-r)&&(A-s)*(t-r)>=(e-s)*(l-r)&&(e-s)*(i-r)>=(n-s)*(t-r)}function er(A,l){return A.next.i!==l.i&&A.prev.i!==l.i&&!tr(A,l)&&(p2(A,l)&&p2(l,A)&&nr(A,l)&&(tl(A.prev,A,l.prev)||tl(A,l.prev,l))||p5(A,l)&&tl(A.prev,A,A.next)>0&&tl(l.prev,l,l.next)>0)}function tl(A,l,e){return(l.y-A.y)*(e.x-l.x)-(l.x-A.x)*(e.y-l.y)}function p5(A,l){return A.x===l.x&&A.y===l.y}function D0(A,l,e,t){const n=$2(tl(A,l,e)),i=$2(tl(A,l,t)),s=$2(tl(e,t,A)),r=$2(tl(e,t,l));return!!(n!==i&&s!==r||n===0&&X2(A,e,l)||i===0&&X2(A,t,l)||s===0&&X2(e,A,t)||r===0&&X2(e,l,t))}function X2(A,l,e){return l.x<=Math.max(A.x,e.x)&&l.x>=Math.min(A.x,e.x)&&l.y<=Math.max(A.y,e.y)&&l.y>=Math.min(A.y,e.y)}function $2(A){return A>0?1:A<0?-1:0}function tr(A,l){let e=A;do{if(e.i!==A.i&&e.next.i!==A.i&&e.i!==l.i&&e.next.i!==l.i&&D0(e,e.next,A,l))return!0;e=e.next}while(e!==A);return!1}function p2(A,l){return tl(A.prev,A,A.next)<0?tl(A,l,A.next)>=0&&tl(A,A.prev,l)>=0:tl(A,l,A.prev)<0||tl(A,A.next,l)<0}function nr(A,l){let e=A,t=!1;const n=(A.x+l.x)/2,i=(A.y+l.y)/2;do e.y>i!=e.next.y>i&&e.next.y!==e.y&&n<(e.next.x-e.x)*(i-e.y)/(e.next.y-e.y)+e.x&&(t=!t),e=e.next;while(e!==A);return t}function U0(A,l){const e=new _7(A.i,A.x,A.y),t=new _7(l.i,l.x,l.y),n=A.next,i=l.prev;return A.next=l,l.prev=A,e.next=n,n.prev=e,t.next=e,e.prev=t,i.next=t,t.prev=i,t}function T6(A,l,e,t){const n=new _7(A,l,e);return t?(n.next=t.next,n.prev=t,t.next.prev=n,t.next=n):(n.prev=n,n.next=n),n}function x2(A){A.next.prev=A.prev,A.prev.next=A.next,A.prevZ&&(A.prevZ.nextZ=A.nextZ),A.nextZ&&(A.nextZ.prevZ=A.prevZ)}function _7(A,l,e){this.i=A,this.x=l,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ir(A,l,e,t){let n=0;for(let i=l,s=e-t;i<e;i+=t)n+=(A[s]-A[i])*(A[i+1]+A[s+1]),s=i;return n}class E1{static area(l){const e=l.length;let t=0;for(let n=e-1,i=0;i<e;n=i++)t+=l[n].x*l[i].y-l[i].x*l[n].y;return t*.5}static isClockWise(l){return E1.area(l)<0}static triangulateShape(l,e){const t=[],n=[],i=[];b6(l),S6(t,l);let s=l.length;e.forEach(b6);for(let o=0;o<e.length;o++)n.push(s),s+=e[o].length,S6(t,e[o]);const r=kA.triangulate(t,n);for(let o=0;o<r.length;o+=3)i.push(r.slice(o,o+3));return i}}function b6(A){const l=A.length;l>2&&A[l-1].equals(A[0])&&A.pop()}function S6(A,l){for(let e=0;e<l.length;e++)A.push(l[e].x),A.push(l[e].y)}class x5 extends fl{constructor(l=new b3([new n4(.5,.5),new n4(-.5,.5),new n4(-.5,-.5),new n4(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:l,options:e},l=Array.isArray(l)?l:[l];const t=this,n=[],i=[];for(let r=0,o=l.length;r<o;r++){const a=l[r];s(a)}this.setAttribute("position",new J4(n,3)),this.setAttribute("uv",new J4(i,2)),this.computeVertexNormals();function s(r){const o=[],a=e.curveSegments!==void 0?e.curveSegments:12,m=e.steps!==void 0?e.steps:1,c=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:d-.1,q=e.bevelOffset!==void 0?e.bevelOffset:0,u=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:sr;let x,p=!1,E,v,I,B;g&&(x=g.getSpacedPoints(m),p=!0,h=!1,E=g.computeFrenetFrames(m,!1),v=new y,I=new y,B=new y),h||(u=0,d=0,f=0,q=0);const Q=r.extractPoints(a);let T=Q.shape;const z=Q.holes;if(!E1.isClockWise(T)){T=T.reverse();for(let J=0,O=z.length;J<O;J++){const s4=z[J];E1.isClockWise(s4)&&(z[J]=s4.reverse())}}const L=E1.triangulateShape(T,z),S=T;for(let J=0,O=z.length;J<O;J++){const s4=z[J];T=T.concat(s4)}function P(J,O,s4){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().multiplyScalar(s4).add(J)}const W=T.length,$=L.length;function K(J,O,s4){let d4,o4,b4;const C4=J.x-O.x,w4=J.y-O.y,X4=s4.x-J.x,V4=s4.y-J.y,_=C4*C4+w4*w4,M=C4*V4-w4*X4;if(Math.abs(M)>Number.EPSILON){const G=Math.sqrt(_),e4=Math.sqrt(X4*X4+V4*V4),i4=O.x-w4/G,m4=O.y+C4/G,v4=s4.x-V4/e4,c4=s4.y+X4/e4,V=((v4-i4)*V4-(c4-m4)*X4)/(C4*V4-w4*X4);d4=i4+C4*V-J.x,o4=m4+w4*V-J.y;const p4=d4*d4+o4*o4;if(p4<=2)return new n4(d4,o4);b4=Math.sqrt(p4/2)}else{let G=!1;C4>Number.EPSILON?X4>Number.EPSILON&&(G=!0):C4<-Number.EPSILON?X4<-Number.EPSILON&&(G=!0):Math.sign(w4)===Math.sign(V4)&&(G=!0),G?(d4=-w4,o4=C4,b4=Math.sqrt(_)):(d4=C4,o4=w4,b4=Math.sqrt(_/2))}return new n4(d4/b4,o4/b4)}const D=[];for(let J=0,O=S.length,s4=O-1,d4=J+1;J<O;J++,s4++,d4++)s4===O&&(s4=0),d4===O&&(d4=0),D[J]=K(S[J],S[s4],S[d4]);const R=[];let t4,X=D.concat();for(let J=0,O=z.length;J<O;J++){const s4=z[J];t4=[];for(let d4=0,o4=s4.length,b4=o4-1,C4=d4+1;d4<o4;d4++,b4++,C4++)b4===o4&&(b4=0),C4===o4&&(C4=0),t4[d4]=K(s4[d4],s4[b4],s4[C4]);R.push(t4),X=X.concat(t4)}for(let J=0;J<u;J++){const O=J/u,s4=d*Math.cos(O*Math.PI/2),d4=f*Math.sin(O*Math.PI/2)+q;for(let o4=0,b4=S.length;o4<b4;o4++){const C4=P(S[o4],D[o4],d4);D4(C4.x,C4.y,-s4)}for(let o4=0,b4=z.length;o4<b4;o4++){const C4=z[o4];t4=R[o4];for(let w4=0,X4=C4.length;w4<X4;w4++){const V4=P(C4[w4],t4[w4],d4);D4(V4.x,V4.y,-s4)}}}const A4=f+q;for(let J=0;J<W;J++){const O=h?P(T[J],X[J],A4):T[J];p?(I.copy(E.normals[0]).multiplyScalar(O.x),v.copy(E.binormals[0]).multiplyScalar(O.y),B.copy(x[0]).add(I).add(v),D4(B.x,B.y,B.z)):D4(O.x,O.y,0)}for(let J=1;J<=m;J++)for(let O=0;O<W;O++){const s4=h?P(T[O],X[O],A4):T[O];p?(I.copy(E.normals[J]).multiplyScalar(s4.x),v.copy(E.binormals[J]).multiplyScalar(s4.y),B.copy(x[J]).add(I).add(v),D4(B.x,B.y,B.z)):D4(s4.x,s4.y,c/m*J)}for(let J=u-1;J>=0;J--){const O=J/u,s4=d*Math.cos(O*Math.PI/2),d4=f*Math.sin(O*Math.PI/2)+q;for(let o4=0,b4=S.length;o4<b4;o4++){const C4=P(S[o4],D[o4],d4);D4(C4.x,C4.y,c+s4)}for(let o4=0,b4=z.length;o4<b4;o4++){const C4=z[o4];t4=R[o4];for(let w4=0,X4=C4.length;w4<X4;w4++){const V4=P(C4[w4],t4[w4],d4);p?D4(V4.x,V4.y+x[m-1].y,x[m-1].x+s4):D4(V4.x,V4.y,c+s4)}}}u4(),_4();function u4(){const J=n.length/3;if(h){let O=0,s4=W*O;for(let d4=0;d4<$;d4++){const o4=L[d4];M4(o4[2]+s4,o4[1]+s4,o4[0]+s4)}O=m+u*2,s4=W*O;for(let d4=0;d4<$;d4++){const o4=L[d4];M4(o4[0]+s4,o4[1]+s4,o4[2]+s4)}}else{for(let O=0;O<$;O++){const s4=L[O];M4(s4[2],s4[1],s4[0])}for(let O=0;O<$;O++){const s4=L[O];M4(s4[0]+W*m,s4[1]+W*m,s4[2]+W*m)}}t.addGroup(J,n.length/3-J,0)}function _4(){const J=n.length/3;let O=0;j(S,O),O+=S.length;for(let s4=0,d4=z.length;s4<d4;s4++){const o4=z[s4];j(o4,O),O+=o4.length}t.addGroup(J,n.length/3-J,1)}function j(J,O){let s4=J.length;for(;--s4>=0;){const d4=s4;let o4=s4-1;o4<0&&(o4=J.length-1);for(let b4=0,C4=m+u*2;b4<C4;b4++){const w4=W*b4,X4=W*(b4+1),V4=O+d4+w4,_=O+o4+w4,M=O+o4+X4,G=O+d4+X4;y4(V4,_,M,G)}}}function D4(J,O,s4){o.push(J),o.push(O),o.push(s4)}function M4(J,O,s4){a4(J),a4(O),a4(s4);const d4=n.length/3,o4=w.generateTopUV(t,n,d4-3,d4-2,d4-1);L4(o4[0]),L4(o4[1]),L4(o4[2])}function y4(J,O,s4,d4){a4(J),a4(O),a4(d4),a4(O),a4(s4),a4(d4);const o4=n.length/3,b4=w.generateSideWallUV(t,n,o4-6,o4-3,o4-2,o4-1);L4(b4[0]),L4(b4[1]),L4(b4[3]),L4(b4[1]),L4(b4[2]),L4(b4[3])}function a4(J){n.push(o[J*3+0]),n.push(o[J*3+1]),n.push(o[J*3+2])}function L4(J){i.push(J.x),i.push(J.y)}}}toJSON(){const l=super.toJSON(),e=this.parameters.shapes,t=this.parameters.options;return Ar(e,t,l)}static fromJSON(l,e){const t=[];for(let i=0,s=l.shapes.length;i<s;i++){const r=e[l.shapes[i]];t.push(r)}const n=l.options.extrudePath;return n!==void 0&&(l.options.extrudePath=new H7[n.type]().fromJSON(n)),new x5(t,l.options)}}const sr={generateTopUV:function(A,l,e,t,n){const i=l[e*3],s=l[e*3+1],r=l[t*3],o=l[t*3+1],a=l[n*3],m=l[n*3+1];return[new n4(i,s),new n4(r,o),new n4(a,m)]},generateSideWallUV:function(A,l,e,t,n,i){const s=l[e*3],r=l[e*3+1],o=l[e*3+2],a=l[t*3],m=l[t*3+1],c=l[t*3+2],h=l[n*3],d=l[n*3+1],f=l[n*3+2],q=l[i*3],u=l[i*3+1],g=l[i*3+2];return Math.abs(r-m)<Math.abs(s-a)?[new n4(s,1-o),new n4(a,1-c),new n4(h,1-f),new n4(q,1-g)]:[new n4(r,1-o),new n4(m,1-c),new n4(d,1-f),new n4(u,1-g)]}};function Ar(A,l,e){if(e.shapes=[],Array.isArray(A))for(let t=0,n=A.length;t<n;t++){const i=A[t];e.shapes.push(i.uuid)}else e.shapes.push(A.uuid);return e.options=Object.assign({},l),l.extrudePath!==void 0&&(e.options.extrudePath=l.extrudePath.toJSON()),e}class O7 extends fl{constructor(l=new b3([new n4(0,.5),new n4(-.5,-.5),new n4(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:l,curveSegments:e};const t=[],n=[],i=[],s=[];let r=0,o=0;if(Array.isArray(l)===!1)a(l);else for(let m=0;m<l.length;m++)a(l[m]),this.addGroup(r,o,m),r+=o,o=0;this.setIndex(t),this.setAttribute("position",new J4(n,3)),this.setAttribute("normal",new J4(i,3)),this.setAttribute("uv",new J4(s,2));function a(m){const c=n.length/3,h=m.extractPoints(e);let d=h.shape;const f=h.holes;E1.isClockWise(d)===!1&&(d=d.reverse());for(let u=0,g=f.length;u<g;u++){const w=f[u];E1.isClockWise(w)===!0&&(f[u]=w.reverse())}const q=E1.triangulateShape(d,f);for(let u=0,g=f.length;u<g;u++){const w=f[u];d=d.concat(w)}for(let u=0,g=d.length;u<g;u++){const w=d[u];n.push(w.x,w.y,0),i.push(0,0,1),s.push(w.x,w.y)}for(let u=0,g=q.length;u<g;u++){const w=q[u],x=w[0]+c,p=w[1]+c,E=w[2]+c;t.push(x,p,E),o+=3}}}toJSON(){const l=super.toJSON(),e=this.parameters.shapes;return rr(e,l)}static fromJSON(l,e){const t=[];for(let n=0,i=l.shapes.length;n<i;n++){const s=e[l.shapes[n]];t.push(s)}return new O7(t,l.curveSegments)}}function rr(A,l){if(l.shapes=[],Array.isArray(A))for(let e=0,t=A.length;e<t;e++){const n=A[e];l.shapes.push(n.uuid)}else l.shapes.push(A.uuid);return l}class V7 extends fl{constructor(l=1,e=.4,t=64,n=8,i=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:l,tube:e,tubularSegments:t,radialSegments:n,p:i,q:s},t=Math.floor(t),n=Math.floor(n);const r=[],o=[],a=[],m=[],c=new y,h=new y,d=new y,f=new y,q=new y,u=new y,g=new y;for(let x=0;x<=t;++x){const p=x/t*i*Math.PI*2;w(p,i,s,l,d),w(p+.01,i,s,l,f),u.subVectors(f,d),g.addVectors(f,d),q.crossVectors(u,g),g.crossVectors(q,u),q.normalize(),g.normalize();for(let E=0;E<=n;++E){const v=E/n*Math.PI*2,I=-e*Math.cos(v),B=e*Math.sin(v);c.x=d.x+(I*g.x+B*q.x),c.y=d.y+(I*g.y+B*q.y),c.z=d.z+(I*g.z+B*q.z),o.push(c.x,c.y,c.z),h.subVectors(c,d).normalize(),a.push(h.x,h.y,h.z),m.push(x/t),m.push(E/n)}}for(let x=1;x<=t;x++)for(let p=1;p<=n;p++){const E=(n+1)*(x-1)+(p-1),v=(n+1)*x+(p-1),I=(n+1)*x+p,B=(n+1)*(x-1)+p;r.push(E,v,B),r.push(v,I,B)}this.setIndex(r),this.setAttribute("position",new J4(o,3)),this.setAttribute("normal",new J4(a,3)),this.setAttribute("uv",new J4(m,2));function w(x,p,E,v,I){const B=Math.cos(x),Q=Math.sin(x),T=E/p*x,z=Math.cos(T);I.x=v*(2+z)*.5*B,I.y=v*(2+z)*Q*.5,I.z=v*Math.sin(T)*.5}}static fromJSON(l){return new V7(l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q)}}class j7 extends fl{constructor(l=new b0(new y(-1,-1,0),new y(-1,1,0),new y(1,1,0)),e=64,t=1,n=8,i=!1){super(),this.type="TubeGeometry",this.parameters={path:l,tubularSegments:e,radius:t,radialSegments:n,closed:i};const s=l.computeFrenetFrames(e,i);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const r=new y,o=new y,a=new n4;let m=new y;const c=[],h=[],d=[],f=[];q(),this.setIndex(f),this.setAttribute("position",new J4(c,3)),this.setAttribute("normal",new J4(h,3)),this.setAttribute("uv",new J4(d,2));function q(){for(let x=0;x<e;x++)u(x);u(i===!1?e:0),w(),g()}function u(x){m=l.getPointAt(x/e,m);const p=s.normals[x],E=s.binormals[x];for(let v=0;v<=n;v++){const I=v/n*Math.PI*2,B=Math.sin(I),Q=-Math.cos(I);o.x=Q*p.x+B*E.x,o.y=Q*p.y+B*E.y,o.z=Q*p.z+B*E.z,o.normalize(),h.push(o.x,o.y,o.z),r.x=m.x+t*o.x,r.y=m.y+t*o.y,r.z=m.z+t*o.z,c.push(r.x,r.y,r.z)}}function g(){for(let x=1;x<=e;x++)for(let p=1;p<=n;p++){const E=(n+1)*(x-1)+(p-1),v=(n+1)*x+(p-1),I=(n+1)*x+p,B=(n+1)*(x-1)+p;f.push(E,v,B),f.push(v,I,B)}}function w(){for(let x=0;x<=e;x++)for(let p=0;p<=n;p++)a.x=x/e,a.y=p/n,d.push(a.x,a.y)}}toJSON(){const l=super.toJSON();return l.path=this.parameters.path.toJSON(),l}static fromJSON(l){return new j7(new H7[l.path.type]().fromJSON(l.path),l.tubularSegments,l.radius,l.radialSegments,l.closed)}}class M1 extends o1{constructor(l){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new g4(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new g4(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F7,this.normalScale=new n4(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(l)}copy(l){return super.copy(l),this.defines={STANDARD:""},this.color.copy(l.color),this.roughness=l.roughness,this.metalness=l.metalness,this.map=l.map,this.lightMap=l.lightMap,this.lightMapIntensity=l.lightMapIntensity,this.aoMap=l.aoMap,this.aoMapIntensity=l.aoMapIntensity,this.emissive.copy(l.emissive),this.emissiveMap=l.emissiveMap,this.emissiveIntensity=l.emissiveIntensity,this.bumpMap=l.bumpMap,this.bumpScale=l.bumpScale,this.normalMap=l.normalMap,this.normalMapType=l.normalMapType,this.normalScale.copy(l.normalScale),this.displacementMap=l.displacementMap,this.displacementScale=l.displacementScale,this.displacementBias=l.displacementBias,this.roughnessMap=l.roughnessMap,this.metalnessMap=l.metalnessMap,this.alphaMap=l.alphaMap,this.envMap=l.envMap,this.envMapIntensity=l.envMapIntensity,this.wireframe=l.wireframe,this.wireframeLinewidth=l.wireframeLinewidth,this.wireframeLinecap=l.wireframeLinecap,this.wireframeLinejoin=l.wireframeLinejoin,this.flatShading=l.flatShading,this.fog=l.fog,this}}class o3 extends M1{constructor(l){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new n4(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pl(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new g4(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new g4(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new g4(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(l)}get sheen(){return this._sheen}set sheen(l){this._sheen>0!=l>0&&this.version++,this._sheen=l}get clearcoat(){return this._clearcoat}set clearcoat(l){this._clearcoat>0!=l>0&&this.version++,this._clearcoat=l}get iridescence(){return this._iridescence}set iridescence(l){this._iridescence>0!=l>0&&this.version++,this._iridescence=l}get transmission(){return this._transmission}set transmission(l){this._transmission>0!=l>0&&this.version++,this._transmission=l}copy(l){return super.copy(l),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=l.clearcoat,this.clearcoatMap=l.clearcoatMap,this.clearcoatRoughness=l.clearcoatRoughness,this.clearcoatRoughnessMap=l.clearcoatRoughnessMap,this.clearcoatNormalMap=l.clearcoatNormalMap,this.clearcoatNormalScale.copy(l.clearcoatNormalScale),this.ior=l.ior,this.iridescence=l.iridescence,this.iridescenceMap=l.iridescenceMap,this.iridescenceIOR=l.iridescenceIOR,this.iridescenceThicknessRange=[...l.iridescenceThicknessRange],this.iridescenceThicknessMap=l.iridescenceThicknessMap,this.sheen=l.sheen,this.sheenColor.copy(l.sheenColor),this.sheenColorMap=l.sheenColorMap,this.sheenRoughness=l.sheenRoughness,this.sheenRoughnessMap=l.sheenRoughnessMap,this.transmission=l.transmission,this.transmissionMap=l.transmissionMap,this.thickness=l.thickness,this.thicknessMap=l.thicknessMap,this.attenuationDistance=l.attenuationDistance,this.attenuationColor.copy(l.attenuationColor),this.specularIntensity=l.specularIntensity,this.specularIntensityMap=l.specularIntensityMap,this.specularColor.copy(l.specularColor),this.specularColorMap=l.specularColorMap,this}}function F1(A,l,e){return N0(A)?new A.constructor(A.subarray(l,e!==void 0?e:A.length)):A.slice(l,e)}function l5(A,l,e){return!A||!e&&A.constructor===l?A:typeof l.BYTES_PER_ELEMENT=="number"?new l(A):Array.prototype.slice.call(A)}function N0(A){return ArrayBuffer.isView(A)&&!(A instanceof DataView)}function or(A){function l(n,i){return A[n]-A[i]}const e=A.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(l),t}function F6(A,l,e){const t=A.length,n=new A.constructor(t);for(let i=0,s=0;s!==t;++i){const r=e[i]*l;for(let o=0;o!==l;++o)n[s++]=A[r+o]}return n}function R0(A,l,e,t){let n=1,i=A[0];for(;i!==void 0&&i[t]===void 0;)i=A[n++];if(i===void 0)return;let s=i[t];if(s!==void 0)if(Array.isArray(s))do s=i[t],s!==void 0&&(l.push(i.time),e.push.apply(e,s)),i=A[n++];while(i!==void 0);else if(s.toArray!==void 0)do s=i[t],s!==void 0&&(l.push(i.time),s.toArray(e,e.length)),i=A[n++];while(i!==void 0);else do s=i[t],s!==void 0&&(l.push(i.time),e.push(s)),i=A[n++];while(i!==void 0)}class C2{constructor(l,e,t,n){this.parameterPositions=l,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(t),this.sampleValues=e,this.valueSize=t,this.settings=null,this.DefaultSettings_={}}evaluate(l){const e=this.parameterPositions;let t=this._cachedIndex,n=e[t],i=e[t-1];t:{l:{let s;e:{n:if(!(l<n)){for(let r=t+2;;){if(n===void 0){if(l<i)break n;return t=e.length,this._cachedIndex=t,this.copySampleValue_(t-1)}if(t===r)break;if(i=n,n=e[++t],l<n)break l}s=e.length;break e}if(!(l>=i)){const r=e[1];l<r&&(t=2,i=r);for(let o=t-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(t===o)break;if(n=i,i=e[--t-1],l>=i)break l}s=t,t=0;break e}break t}for(;t<s;){const r=t+s>>>1;l<e[r]?s=r:t=r+1}if(n=e[t],i=e[t-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return t=e.length,this._cachedIndex=t,this.copySampleValue_(t-1)}this._cachedIndex=t,this.intervalChanged_(t,i,n)}return this.interpolate_(t,i,l,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(l){const e=this.resultBuffer,t=this.sampleValues,n=this.valueSize,i=l*n;for(let s=0;s!==n;++s)e[s]=t[i+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ar extends C2{constructor(l,e,t,n){super(l,e,t,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:b8,endingEnd:b8}}intervalChanged_(l,e,t){const n=this.parameterPositions;let i=l-2,s=l+1,r=n[i],o=n[s];if(r===void 0)switch(this.getSettings_().endingStart){case S8:i=l,r=2*e-t;break;case F8:i=n.length-2,r=e+n[i]-n[i+1];break;default:i=l,r=t}if(o===void 0)switch(this.getSettings_().endingEnd){case S8:s=l,o=2*t-e;break;case F8:s=1,o=t+n[1]-n[0];break;default:s=l-1,o=e}const a=(t-e)*.5,m=this.valueSize;this._weightPrev=a/(e-r),this._weightNext=a/(o-t),this._offsetPrev=i*m,this._offsetNext=s*m}interpolate_(l,e,t,n){const i=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=l*r,a=o-r,m=this._offsetPrev,c=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(t-e)/(n-e),q=f*f,u=q*f,g=-h*u+2*h*q-h*f,w=(1+h)*u+(-1.5-2*h)*q+(-.5+h)*f+1,x=(-1-d)*u+(1.5+d)*q+.5*f,p=d*u-d*q;for(let E=0;E!==r;++E)i[E]=g*s[m+E]+w*s[a+E]+x*s[o+E]+p*s[c+E];return i}}class mr extends C2{constructor(l,e,t,n){super(l,e,t,n)}interpolate_(l,e,t,n){const i=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=l*r,a=o-r,m=(t-e)/(n-e),c=1-m;for(let h=0;h!==r;++h)i[h]=s[a+h]*c+s[o+h]*m;return i}}class cr extends C2{constructor(l,e,t,n){super(l,e,t,n)}interpolate_(l){return this.copySampleValue_(l-1)}}class m1{constructor(l,e,t,n){if(l===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+l);this.name=l,this.times=l5(e,this.TimeBufferType),this.values=l5(t,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(l){const e=l.constructor;let t;if(e.toJSON!==this.toJSON)t=e.toJSON(l);else{t={name:l.name,times:l5(l.times,Array),values:l5(l.values,Array)};const n=l.getInterpolation();n!==l.DefaultInterpolation&&(t.interpolation=n)}return t.type=l.ValueTypeName,t}InterpolantFactoryMethodDiscrete(l){return new cr(this.times,this.values,this.getValueSize(),l)}InterpolantFactoryMethodLinear(l){return new mr(this.times,this.values,this.getValueSize(),l)}InterpolantFactoryMethodSmooth(l){return new ar(this.times,this.values,this.getValueSize(),l)}setInterpolation(l){let e;switch(l){case d2:e=this.InterpolantFactoryMethodDiscrete;break;case N3:e=this.InterpolantFactoryMethodLinear;break;case I5:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(l!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return d2;case this.InterpolantFactoryMethodLinear:return N3;case this.InterpolantFactoryMethodSmooth:return I5}}getValueSize(){return this.values.length/this.times.length}shift(l){if(l!==0){const e=this.times;for(let t=0,n=e.length;t!==n;++t)e[t]+=l}return this}scale(l){if(l!==1){const e=this.times;for(let t=0,n=e.length;t!==n;++t)e[t]*=l}return this}trim(l,e){const t=this.times,n=t.length;let i=0,s=n-1;for(;i!==n&&t[i]<l;)++i;for(;s!==-1&&t[s]>e;)--s;if(++s,i!==0||s!==n){i>=s&&(s=Math.max(s,1),i=s-1);const r=this.getValueSize();this.times=F1(t,i,s),this.values=F1(this.values,i*r,s*r)}return this}validate(){let l=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),l=!1);const t=this.times,n=this.values,i=t.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),l=!1);let s=null;for(let r=0;r!==i;r++){const o=t[r];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,o),l=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,o,s),l=!1;break}s=o}if(n!==void 0&&N0(n))for(let r=0,o=n.length;r!==o;++r){const a=n[r];if(isNaN(a)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,a),l=!1;break}}return l}optimize(){const l=F1(this.times),e=F1(this.values),t=this.getValueSize(),n=this.getInterpolation()===I5,i=l.length-1;let s=1;for(let r=1;r<i;++r){let o=!1;const a=l[r],m=l[r+1];if(a!==m&&(r!==1||a!==l[0]))if(n)o=!0;else{const c=r*t,h=c-t,d=c+t;for(let f=0;f!==t;++f){const q=e[c+f];if(q!==e[h+f]||q!==e[d+f]){o=!0;break}}}if(o){if(r!==s){l[s]=l[r];const c=r*t,h=s*t;for(let d=0;d!==t;++d)e[h+d]=e[c+d]}++s}}if(i>0){l[s]=l[i];for(let r=i*t,o=s*t,a=0;a!==t;++a)e[o+a]=e[r+a];++s}return s!==l.length?(this.times=F1(l,0,s),this.values=F1(e,0,s*t)):(this.times=l,this.values=e),this}clone(){const l=F1(this.times,0),e=F1(this.values,0),t=this.constructor,n=new t(this.name,l,e);return n.createInterpolant=this.createInterpolant,n}}m1.prototype.TimeBufferType=Float32Array;m1.prototype.ValueBufferType=Float32Array;m1.prototype.DefaultInterpolation=N3;class K3 extends m1{}K3.prototype.ValueTypeName="bool";K3.prototype.ValueBufferType=Array;K3.prototype.DefaultInterpolation=d2;K3.prototype.InterpolantFactoryMethodLinear=void 0;K3.prototype.InterpolantFactoryMethodSmooth=void 0;class L0 extends m1{}L0.prototype.ValueTypeName="color";class B2 extends m1{}B2.prototype.ValueTypeName="number";class hr extends C2{constructor(l,e,t,n){super(l,e,t,n)}interpolate_(l,e,t,n){const i=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=(t-e)/(n-e);let a=l*r;for(let m=a+r;a!==m;a+=4)G1.slerpFlat(i,0,s,a-r,s,a,o);return i}}class r3 extends m1{InterpolantFactoryMethodLinear(l){return new hr(this.times,this.values,this.getValueSize(),l)}}r3.prototype.ValueTypeName="quaternion";r3.prototype.DefaultInterpolation=N3;r3.prototype.InterpolantFactoryMethodSmooth=void 0;class O3 extends m1{}O3.prototype.ValueTypeName="string";O3.prototype.ValueBufferType=Array;O3.prototype.DefaultInterpolation=d2;O3.prototype.InterpolantFactoryMethodLinear=void 0;O3.prototype.InterpolantFactoryMethodSmooth=void 0;class w2 extends m1{}w2.prototype.ValueTypeName="vector";class ur{constructor(l,e=-1,t,n=ee){this.name=l,this.tracks=t,this.duration=e,this.blendMode=n,this.uuid=Jl(),this.duration<0&&this.resetDuration()}static parse(l){const e=[],t=l.tracks,n=1/(l.fps||1);for(let s=0,r=t.length;s!==r;++s)e.push(qr(t[s]).scale(n));const i=new this(l.name,l.duration,e,l.blendMode);return i.uuid=l.uuid,i}static toJSON(l){const e=[],t=l.tracks,n={name:l.name,duration:l.duration,tracks:e,uuid:l.uuid,blendMode:l.blendMode};for(let i=0,s=t.length;i!==s;++i)e.push(m1.toJSON(t[i]));return n}static CreateFromMorphTargetSequence(l,e,t,n){const i=e.length,s=[];for(let r=0;r<i;r++){let o=[],a=[];o.push((r+i-1)%i,r,(r+1)%i),a.push(0,1,0);const m=or(o);o=F6(o,1,m),a=F6(a,1,m),!n&&o[0]===0&&(o.push(i),a.push(a[0])),s.push(new B2(".morphTargetInfluences["+e[r].name+"]",o,a).scale(1/t))}return new this(l,-1,s)}static findByName(l,e){let t=l;if(!Array.isArray(l)){const n=l;t=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<t.length;n++)if(t[n].name===e)return t[n];return null}static CreateClipsFromMorphTargetSequences(l,e,t){const n={},i=/^([\w-]*?)([\d]+)$/;for(let r=0,o=l.length;r<o;r++){const a=l[r],m=a.name.match(i);if(m&&m.length>1){const c=m[1];let h=n[c];h||(n[c]=h=[]),h.push(a)}}const s=[];for(const r in n)s.push(this.CreateFromMorphTargetSequence(r,n[r],e,t));return s}static parseAnimation(l,e){if(!l)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const t=function(c,h,d,f,q){if(d.length!==0){const u=[],g=[];R0(d,u,g,f),u.length!==0&&q.push(new c(h,u,g))}},n=[],i=l.name||"default",s=l.fps||30,r=l.blendMode;let o=l.length||-1;const a=l.hierarchy||[];for(let c=0;c<a.length;c++){const h=a[c].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let f;for(f=0;f<h.length;f++)if(h[f].morphTargets)for(let q=0;q<h[f].morphTargets.length;q++)d[h[f].morphTargets[q]]=-1;for(const q in d){const u=[],g=[];for(let w=0;w!==h[f].morphTargets.length;++w){const x=h[f];u.push(x.time),g.push(x.morphTarget===q?1:0)}n.push(new B2(".morphTargetInfluence["+q+"]",u,g))}o=d.length*s}else{const d=".bones["+e[c].name+"]";t(w2,d+".position",h,"pos",n),t(r3,d+".quaternion",h,"rot",n),t(w2,d+".scale",h,"scl",n)}}return n.length===0?null:new this(i,o,n,r)}resetDuration(){const l=this.tracks;let e=0;for(let t=0,n=l.length;t!==n;++t){const i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let l=0;l<this.tracks.length;l++)this.tracks[l].trim(0,this.duration);return this}validate(){let l=!0;for(let e=0;e<this.tracks.length;e++)l=l&&this.tracks[e].validate();return l}optimize(){for(let l=0;l<this.tracks.length;l++)this.tracks[l].optimize();return this}clone(){const l=[];for(let e=0;e<this.tracks.length;e++)l.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,l,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dr(A){switch(A.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return B2;case"vector":case"vector2":case"vector3":case"vector4":return w2;case"color":return L0;case"quaternion":return r3;case"bool":case"boolean":return K3;case"string":return O3}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+A)}function qr(A){if(A.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const l=dr(A.type);if(A.times===void 0){const e=[],t=[];R0(A.keys,e,t,"value"),A.times=e,A.values=t}return l.parse!==void 0?l.parse(A):new l(A.name,A.times,A.values,A.interpolation)}const L3={enabled:!1,files:{},add:function(A,l){this.enabled!==!1&&(this.files[A]=l)},get:function(A){if(this.enabled!==!1)return this.files[A]},remove:function(A){delete this.files[A]},clear:function(){this.files={}}};class fr{constructor(l,e,t){const n=this;let i=!1,s=0,r=0,o;const a=[];this.onStart=void 0,this.onLoad=l,this.onProgress=e,this.onError=t,this.itemStart=function(m){r++,i===!1&&n.onStart!==void 0&&n.onStart(m,s,r),i=!0},this.itemEnd=function(m){s++,n.onProgress!==void 0&&n.onProgress(m,s,r),s===r&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(m){n.onError!==void 0&&n.onError(m)},this.resolveURL=function(m){return o?o(m):m},this.setURLModifier=function(m){return o=m,this},this.addHandler=function(m,c){return a.push(m,c),this},this.removeHandler=function(m){const c=a.indexOf(m);return c!==-1&&a.splice(c,2),this},this.getHandler=function(m){for(let c=0,h=a.length;c<h;c+=2){const d=a[c],f=a[c+1];if(d.global&&(d.lastIndex=0),d.test(m))return f}return null}}}const gr=new fr;class V3{constructor(l){this.manager=l!==void 0?l:gr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(l,e){const t=this;return new Promise(function(n,i){t.load(l,n,e,i)})}parse(){}setCrossOrigin(l){return this.crossOrigin=l,this}setWithCredentials(l){return this.withCredentials=l,this}setPath(l){return this.path=l,this}setResourcePath(l){return this.resourcePath=l,this}setRequestHeader(l){return this.requestHeader=l,this}}const g1={};class pr extends Error{constructor(l,e){super(l),this.response=e}}class W7 extends V3{constructor(l){super(l)}load(l,e,t,n){l===void 0&&(l=""),this.path!==void 0&&(l=this.path+l),l=this.manager.resolveURL(l);const i=L3.get(l);if(i!==void 0)return this.manager.itemStart(l),setTimeout(()=>{e&&e(i),this.manager.itemEnd(l)},0),i;if(g1[l]!==void 0){g1[l].push({onLoad:e,onProgress:t,onError:n});return}g1[l]=[],g1[l].push({onLoad:e,onProgress:t,onError:n});const s=new Request(l,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,o=this.responseType;fetch(s).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||a.body===void 0||a.body.getReader===void 0)return a;const m=g1[l],c=a.body.getReader(),h=a.headers.get("Content-Length"),d=h?parseInt(h):0,f=d!==0;let q=0;const u=new ReadableStream({start(g){w();function w(){c.read().then(({done:x,value:p})=>{if(x)g.close();else{q+=p.byteLength;const E=new ProgressEvent("progress",{lengthComputable:f,loaded:q,total:d});for(let v=0,I=m.length;v<I;v++){const B=m[v];B.onProgress&&B.onProgress(E)}g.enqueue(p),w()}})}}});return new Response(u)}else throw new pr(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`,a)}).then(a=>{switch(o){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(m=>new DOMParser().parseFromString(m,r));case"json":return a.json();default:if(r===void 0)return a.text();{const c=/charset="?([^;"\s]*)"?/i.exec(r),h=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(h);return a.arrayBuffer().then(f=>d.decode(f))}}}).then(a=>{L3.add(l,a);const m=g1[l];delete g1[l];for(let c=0,h=m.length;c<h;c++){const d=m[c];d.onLoad&&d.onLoad(a)}}).catch(a=>{const m=g1[l];if(m===void 0)throw this.manager.itemError(l),a;delete g1[l];for(let c=0,h=m.length;c<h;c++){const d=m[c];d.onError&&d.onError(a)}this.manager.itemError(l)}).finally(()=>{this.manager.itemEnd(l)}),this.manager.itemStart(l)}setResponseType(l){return this.responseType=l,this}setMimeType(l){return this.mimeType=l,this}}class G0 extends V3{constructor(l){super(l)}load(l,e,t,n){this.path!==void 0&&(l=this.path+l),l=this.manager.resolveURL(l);const i=this,s=L3.get(l);if(s!==void 0)return i.manager.itemStart(l),setTimeout(function(){e&&e(s),i.manager.itemEnd(l)},0),s;const r=f2("img");function o(){m(),L3.add(l,this),e&&e(this),i.manager.itemEnd(l)}function a(c){m(),n&&n(c),i.manager.itemError(l),i.manager.itemEnd(l)}function m(){r.removeEventListener("load",o,!1),r.removeEventListener("error",a,!1)}return r.addEventListener("load",o,!1),r.addEventListener("error",a,!1),l.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),i.manager.itemStart(l),r.src=l,r}}class xr extends V3{constructor(l){super(l)}load(l,e,t,n){const i=new nl,s=new G0(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(l,function(r){i.image=r,i.needsUpdate=!0,e!==void 0&&e(i)},t,n),i}}class Q2 extends Z4{constructor(l,e=1){super(),this.isLight=!0,this.type="Light",this.color=new g4(l),this.intensity=e}dispose(){}copy(l,e){return super.copy(l,e),this.color.copy(l.color),this.intensity=l.intensity,this}toJSON(l){const e=super.toJSON(l);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const A7=new R4,D6=new y,U6=new y;class J7{constructor(l){this.camera=l,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new n4(512,512),this.map=null,this.mapPass=null,this.matrix=new R4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new N7,this._frameExtents=new n4(1,1),this._viewportCount=1,this._viewports=[new W4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(l){const e=this.camera,t=this.matrix;D6.setFromMatrixPosition(l.matrixWorld),e.position.copy(D6),U6.setFromMatrixPosition(l.target.matrixWorld),e.lookAt(U6),e.updateMatrixWorld(),A7.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(A7),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(A7)}getViewport(l){return this._viewports[l]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(l){return this.camera=l.camera.clone(),this.bias=l.bias,this.radius=l.radius,this.mapSize.copy(l.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const l={};return this.bias!==0&&(l.bias=this.bias),this.normalBias!==0&&(l.normalBias=this.normalBias),this.radius!==1&&(l.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(l.mapSize=this.mapSize.toArray()),l.camera=this.camera.toJSON(!1).object,delete l.camera.matrix,l}}class Br extends J7{constructor(){super(new ql(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(l){const e=this.camera,t=q2*2*l.angle*this.focus,n=this.mapSize.width/this.mapSize.height,i=l.distance||e.far;(t!==e.fov||n!==e.aspect||i!==e.far)&&(e.fov=t,e.aspect=n,e.far=i,e.updateProjectionMatrix()),super.updateMatrices(l)}copy(l){return super.copy(l),this.focus=l.focus,this}}class wr extends Q2{constructor(l,e,t=0,n=Math.PI/3,i=0,s=1){super(l,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Z4.DefaultUp),this.updateMatrix(),this.target=new Z4,this.distance=t,this.angle=n,this.penumbra=i,this.decay=s,this.map=null,this.shadow=new Br}get power(){return this.intensity*Math.PI}set power(l){this.intensity=l/Math.PI}dispose(){this.shadow.dispose()}copy(l,e){return super.copy(l,e),this.distance=l.distance,this.angle=l.angle,this.penumbra=l.penumbra,this.decay=l.decay,this.target=l.target.clone(),this.shadow=l.shadow.clone(),this}}const N6=new R4,e2=new y,r7=new y;class Mr extends J7{constructor(){super(new ql(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new n4(4,2),this._viewportCount=6,this._viewports=[new W4(2,1,1,1),new W4(0,1,1,1),new W4(3,1,1,1),new W4(1,1,1,1),new W4(3,0,1,1),new W4(1,0,1,1)],this._cubeDirections=[new y(1,0,0),new y(-1,0,0),new y(0,0,1),new y(0,0,-1),new y(0,1,0),new y(0,-1,0)],this._cubeUps=[new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,0,1),new y(0,0,-1)]}updateMatrices(l,e=0){const t=this.camera,n=this.matrix,i=l.distance||t.far;i!==t.far&&(t.far=i,t.updateProjectionMatrix()),e2.setFromMatrixPosition(l.matrixWorld),t.position.copy(e2),r7.copy(t.position),r7.add(this._cubeDirections[e]),t.up.copy(this._cubeUps[e]),t.lookAt(r7),t.updateMatrixWorld(),n.makeTranslation(-e2.x,-e2.y,-e2.z),N6.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(N6)}}class u5 extends Q2{constructor(l,e,t=0,n=1){super(l,e),this.isPointLight=!0,this.type="PointLight",this.distance=t,this.decay=n,this.shadow=new Mr}get power(){return this.intensity*4*Math.PI}set power(l){this.intensity=l/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(l,e){return super.copy(l,e),this.distance=l.distance,this.decay=l.decay,this.shadow=l.shadow.clone(),this}}class Er extends J7{constructor(){super(new C1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cr extends Q2{constructor(l,e){super(l,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Z4.DefaultUp),this.updateMatrix(),this.target=new Z4,this.shadow=new Er}dispose(){this.shadow.dispose()}copy(l){return super.copy(l),this.target=l.target.clone(),this.shadow=l.shadow.clone(),this}}class Qr extends Q2{constructor(l,e){super(l,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class P0 extends Q2{constructor(l,e,t=10,n=10){super(l,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=t,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(l){this.intensity=l/(this.width*this.height*Math.PI)}copy(l){return super.copy(l),this.width=l.width,this.height=l.height,this}toJSON(l){const e=super.toJSON(l);return e.object.width=this.width,e.object.height=this.height,e}}class i3{static decodeText(l){if(typeof TextDecoder<"u")return new TextDecoder().decode(l);let e="";for(let t=0,n=l.length;t<n;t++)e+=String.fromCharCode(l[t]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(l){const e=l.lastIndexOf("/");return e===-1?"./":l.slice(0,e+1)}static resolveURL(l,e){return typeof l!="string"||l===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(l)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(l)||/^data:.*,.*$/i.test(l)||/^blob:.*$/i.test(l)?l:e+l)}}class vr extends V3{constructor(l){super(l),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(l){return this.options=l,this}load(l,e,t,n){l===void 0&&(l=""),this.path!==void 0&&(l=this.path+l),l=this.manager.resolveURL(l);const i=this,s=L3.get(l);if(s!==void 0)return i.manager.itemStart(l),setTimeout(function(){e&&e(s),i.manager.itemEnd(l)},0),s;const r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader,fetch(l,r).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(o){L3.add(l,o),e&&e(o),i.manager.itemEnd(l)}).catch(function(o){n&&n(o),i.manager.itemError(l),i.manager.itemEnd(l)}),i.manager.itemStart(l)}}class _r{constructor(l=!0){this.autoStart=l,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=R6(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let l=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=R6();l=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=l}return l}}function R6(){return(typeof performance>"u"?Date:performance).now()}const Z7="\\[\\]\\.:\\/",yr=new RegExp("["+Z7+"]","g"),X7="[^"+Z7+"]",Ir="[^"+Z7.replace("\\.","")+"]",Tr=/((?:WC+[\/:])*)/.source.replace("WC",X7),br=/(WCOD+)?/.source.replace("WCOD",Ir),Sr=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",X7),Fr=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",X7),Dr=new RegExp("^"+Tr+br+Sr+Fr+"$"),Ur=["material","materials","bones","map"];class Nr{constructor(l,e,t){const n=t||O4.parseTrackName(e);this._targetGroup=l,this._bindings=l.subscribe_(e,n)}getValue(l,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(l,e)}setValue(l,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(l,e)}bind(){const l=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=l.length;e!==t;++e)l[e].bind()}unbind(){const l=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=l.length;e!==t;++e)l[e].unbind()}}class O4{constructor(l,e,t){this.path=e,this.parsedPath=t||O4.parseTrackName(e),this.node=O4.findNode(l,this.parsedPath.nodeName)||l,this.rootNode=l,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(l,e,t){return l&&l.isAnimationObjectGroup?new O4.Composite(l,e,t):new O4(l,e,t)}static sanitizeNodeName(l){return l.replace(/\s/g,"_").replace(yr,"")}static parseTrackName(l){const e=Dr.exec(l);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+l);const t={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=t.nodeName&&t.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const i=t.nodeName.substring(n+1);Ur.indexOf(i)!==-1&&(t.nodeName=t.nodeName.substring(0,n),t.objectName=i)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+l);return t}static findNode(l,e){if(e===void 0||e===""||e==="."||e===-1||e===l.name||e===l.uuid)return l;if(l.skeleton){const t=l.skeleton.getBoneByName(e);if(t!==void 0)return t}if(l.children){const t=function(i){for(let s=0;s<i.length;s++){const r=i[s];if(r.name===e||r.uuid===e)return r;const o=t(r.children);if(o)return o}return null},n=t(l.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(l,e){l[e]=this.targetObject[this.propertyName]}_getValue_array(l,e){const t=this.resolvedProperty;for(let n=0,i=t.length;n!==i;++n)l[e++]=t[n]}_getValue_arrayElement(l,e){l[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(l,e){this.resolvedProperty.toArray(l,e)}_setValue_direct(l,e){this.targetObject[this.propertyName]=l[e]}_setValue_direct_setNeedsUpdate(l,e){this.targetObject[this.propertyName]=l[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(l,e){this.targetObject[this.propertyName]=l[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(l,e){const t=this.resolvedProperty;for(let n=0,i=t.length;n!==i;++n)t[n]=l[e++]}_setValue_array_setNeedsUpdate(l,e){const t=this.resolvedProperty;for(let n=0,i=t.length;n!==i;++n)t[n]=l[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(l,e){const t=this.resolvedProperty;for(let n=0,i=t.length;n!==i;++n)t[n]=l[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(l,e){this.resolvedProperty[this.propertyIndex]=l[e]}_setValue_arrayElement_setNeedsUpdate(l,e){this.resolvedProperty[this.propertyIndex]=l[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(l,e){this.resolvedProperty[this.propertyIndex]=l[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(l,e){this.resolvedProperty.fromArray(l,e)}_setValue_fromArray_setNeedsUpdate(l,e){this.resolvedProperty.fromArray(l,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(l,e){this.resolvedProperty.fromArray(l,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(l,e){this.bind(),this.getValue(l,e)}_setValue_unbound(l,e){this.bind(),this.setValue(l,e)}bind(){let l=this.node;const e=this.parsedPath,t=e.objectName,n=e.propertyName;let i=e.propertyIndex;if(l||(l=O4.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=l),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!l){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(t){let a=e.objectIndex;switch(t){case"materials":if(!l.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!l.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}l=l.material.materials;break;case"bones":if(!l.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}l=l.skeleton.bones;for(let m=0;m<l.length;m++)if(l[m].name===a){a=m;break}break;case"map":if("map"in l){l=l.map;break}if(!l.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!l.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}l=l.material.map;break;default:if(l[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}l=l[t]}if(a!==void 0){if(l[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,l);return}l=l[a]}}const s=l[n];if(s===void 0){const a=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+a+"."+n+" but it wasn't found.",l);return}let r=this.Versioning.None;this.targetObject=l,l.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:l.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(i!==void 0){if(n==="morphTargetInfluences"){if(!l.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!l.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}l.morphTargetDictionary[i]!==void 0&&(i=l.morphTargetDictionary[i])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=i}else s.fromArray!==void 0&&s.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}O4.Composite=Nr;O4.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};O4.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};O4.prototype.GetterByBindingType=[O4.prototype._getValue_direct,O4.prototype._getValue_array,O4.prototype._getValue_arrayElement,O4.prototype._getValue_toArray];O4.prototype.SetterByBindingTypeAndVersioning=[[O4.prototype._setValue_direct,O4.prototype._setValue_direct_setNeedsUpdate,O4.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[O4.prototype._setValue_array,O4.prototype._setValue_array_setNeedsUpdate,O4.prototype._setValue_array_setMatrixWorldNeedsUpdate],[O4.prototype._setValue_arrayElement,O4.prototype._setValue_arrayElement_setNeedsUpdate,O4.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[O4.prototype._setValue_fromArray,O4.prototype._setValue_fromArray_setNeedsUpdate,O4.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Rr{constructor(){this.type="ShapePath",this.color=new g4,this.subPaths=[],this.currentPath=null}moveTo(l,e){return this.currentPath=new Q7,this.subPaths.push(this.currentPath),this.currentPath.moveTo(l,e),this}lineTo(l,e){return this.currentPath.lineTo(l,e),this}quadraticCurveTo(l,e,t,n){return this.currentPath.quadraticCurveTo(l,e,t,n),this}bezierCurveTo(l,e,t,n,i,s){return this.currentPath.bezierCurveTo(l,e,t,n,i,s),this}splineThru(l){return this.currentPath.splineThru(l),this}toShapes(l){function e(g){const w=[];for(let x=0,p=g.length;x<p;x++){const E=g[x],v=new b3;v.curves=E.curves,w.push(v)}return w}function t(g,w){const x=w.length;let p=!1;for(let E=x-1,v=0;v<x;E=v++){let I=w[E],B=w[v],Q=B.x-I.x,T=B.y-I.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(I=w[v],Q=-Q,B=w[E],T=-T),g.y<I.y||g.y>B.y)continue;if(g.y===I.y){if(g.x===I.x)return!0}else{const z=T*(g.x-I.x)-Q*(g.y-I.y);if(z===0)return!0;if(z<0)continue;p=!p}}else{if(g.y!==I.y)continue;if(B.x<=g.x&&g.x<=I.x||I.x<=g.x&&g.x<=B.x)return!0}}return p}const n=E1.isClockWise,i=this.subPaths;if(i.length===0)return[];let s,r,o;const a=[];if(i.length===1)return r=i[0],o=new b3,o.curves=r.curves,a.push(o),a;let m=!n(i[0].getPoints());m=l?!m:m;const c=[],h=[];let d=[],f=0,q;h[f]=void 0,d[f]=[];for(let g=0,w=i.length;g<w;g++)r=i[g],q=r.getPoints(),s=n(q),s=l?!s:s,s?(!m&&h[f]&&f++,h[f]={s:new b3,p:q},h[f].s.curves=r.curves,m&&f++,d[f]=[]):d[f].push({h:r,p:q[0]});if(!h[0])return e(i);if(h.length>1){let g=!1,w=0;for(let x=0,p=h.length;x<p;x++)c[x]=[];for(let x=0,p=h.length;x<p;x++){const E=d[x];for(let v=0;v<E.length;v++){const I=E[v];let B=!0;for(let Q=0;Q<h.length;Q++)t(I.p,h[Q].p)&&(x!==Q&&w++,B?(B=!1,c[Q].push(I)):g=!0);B&&c[x].push(I)}}w>0&&g===!1&&(d=c)}let u;for(let g=0,w=h.length;g<w;g++){o=h[g].s,a.push(o),u=d[g];for(let x=0,p=u.length;x<p;x++)o.holes.push(u[x].h)}return a}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:S7}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=S7);const Sl={transparent:"transparent",black:"#000",white:"#fff",slate:{_50:"#f8fafc",_100:"#f1f5f9",_200:"#e2e8f0",_300:"#cbd5e1",_400:"#94a3b8",_500:"#64748b",_600:"#475569",_700:"#334155",_800:"#1e293b",_900:"#0f172a"},gray:{_50:"#f9fafb",_100:"#f3f4f6",_200:"#e5e7eb",_300:"#d1d5db",_400:"#9ca3af",_500:"#6b7280",_600:"#4b5563",_700:"#374151",_800:"#1f2937",_900:"#111827"},zinc:{_50:"#fafafa",_100:"#f4f4f5",_200:"#e4e4e7",_300:"#d4d4d8",_400:"#a1a1aa",_500:"#71717a",_600:"#52525b",_700:"#3f3f46",_800:"#27272a",_900:"#18181b"},neutral:{_50:"#fafafa",_100:"#f5f5f5",_200:"#e5e5e5",_300:"#d4d4d4",_400:"#a3a3a3",_500:"#737373",_600:"#525252",_700:"#404040",_800:"#262626",_900:"#171717"},stone:{_50:"#fafaf9",_100:"#f5f5f4",_200:"#e7e5e4",_300:"#d6d3d1",_400:"#a8a29e",_500:"#78716c",_600:"#57534e",_700:"#44403c",_800:"#292524",_900:"#1c1917"},red:{_50:"#fef2f2",_100:"#fee2e2",_200:"#fecaca",_300:"#fca5a5",_400:"#f87171",_500:"#ef4444",_600:"#dc2626",_700:"#b91c1c",_800:"#991b1b",_900:"#7f1d1d"},orange:{_50:"#fff7ed",_100:"#ffedd5",_200:"#fed7aa",_300:"#fdba74",_400:"#fb923c",_500:"#f97316",_600:"#ea580c",_700:"#c2410c",_800:"#9a3412",_900:"#7c2d12"},amber:{_50:"#fffbeb",_100:"#fef3c7",_200:"#fde68a",_300:"#fcd34d",_400:"#fbbf24",_500:"#f59e0b",_600:"#d97706",_700:"#b45309",_800:"#92400e",_900:"#78350f"},yellow:{_50:"#fefce8",_100:"#fef9c3",_200:"#fef08a",_300:"#fde047",_400:"#facc15",_500:"#eab308",_600:"#ca8a04",_700:"#a16207",_800:"#854d0e",_900:"#713f12"},lime:{_50:"#f7fee7",_100:"#ecfccb",_200:"#d9f99d",_300:"#bef264",_400:"#a3e635",_500:"#84cc16",_600:"#65a30d",_700:"#4d7c0f",_800:"#3f6212",_900:"#365314"},green:{_50:"#f0fdf4",_100:"#dcfce7",_200:"#bbf7d0",_300:"#86efac",_400:"#4ade80",_500:"#22c55e",_600:"#16a34a",_700:"#15803d",_800:"#166534",_900:"#14532d"},emerald:{_50:"#ecfdf5",_100:"#d1fae5",_200:"#a7f3d0",_300:"#6ee7b7",_400:"#34d399",_500:"#10b981",_600:"#059669",_700:"#047857",_800:"#065f46",_900:"#064e3b"},teal:{_50:"#f0fdfa",_100:"#ccfbf1",_200:"#99f6e4",_300:"#5eead4",_400:"#2dd4bf",_500:"#14b8a6",_600:"#0d9488",_700:"#0f766e",_800:"#115e59",_900:"#134e4a"},cyan:{_50:"#ecfeff",_100:"#cffafe",_200:"#a5f3fc",_300:"#67e8f9",_400:"#22d3ee",_500:"#06b6d4",_600:"#0891b2",_700:"#0e7490",_800:"#155e75",_900:"#164e63"},sky:{_50:"#f0f9ff",_100:"#e0f2fe",_200:"#bae6fd",_300:"#7dd3fc",_400:"#38bdf8",_500:"#0ea5e9",_600:"#0284c7",_700:"#0369a1",_800:"#075985",_900:"#0c4a6e"},blue:{_50:"#eff6ff",_100:"#dbeafe",_200:"#bfdbfe",_300:"#93c5fd",_400:"#60a5fa",_500:"#3b82f6",_600:"#2563eb",_700:"#1d4ed8",_800:"#1e40af",_900:"#1e3a8a"},indigo:{_50:"#eef2ff",_100:"#e0e7ff",_200:"#c7d2fe",_300:"#a5b4fc",_400:"#818cf8",_500:"#6366f1",_600:"#4f46e5",_700:"#4338ca",_800:"#3730a3",_900:"#312e81"},violet:{_50:"#f5f3ff",_100:"#ede9fe",_200:"#ddd6fe",_300:"#c4b5fd",_400:"#a78bfa",_500:"#8b5cf6",_600:"#7c3aed",_700:"#6d28d9",_800:"#5b21b6",_900:"#4c1d95"},purple:{_50:"#faf5ff",_100:"#f3e8ff",_200:"#e9d5ff",_300:"#d8b4fe",_400:"#c084fc",_500:"#a855f7",_600:"#9333ea",_700:"#7e22ce",_800:"#6b21a8",_900:"#581c87"},fuchsia:{_50:"#fdf4ff",_100:"#fae8ff",_200:"#f5d0fe",_300:"#f0abfc",_400:"#e879f9",_500:"#d946ef",_600:"#c026d3",_700:"#a21caf",_800:"#86198f",_900:"#701a75"},pink:{_50:"#fdf2f8",_100:"#fce7f3",_200:"#fbcfe8",_300:"#f9a8d4",_400:"#f472b6",_500:"#ec4899",_600:"#db2777",_700:"#be185d",_800:"#9d174d",_900:"#831843"},rose:{_50:"#fff1f2",_100:"#ffe4e6",_200:"#fecdd3",_300:"#fda4af",_400:"#fb7185",_500:"#f43f5e",_600:"#e11d48",_700:"#be123c",_800:"#9f1239",_900:"#881337"}};var Lr=`varying vec2 vUv;
uniform float width;
uniform float height;
uniform float shadowSize;
uniform float shadowOpacity;

// based off of https://madebyevan.com/shaders/fast-rounded-rectangle-shadows/

// This approximates the error function, needed for the gaussian integral
vec4 erf(vec4 x) {
  vec4 s = sign(x), a = abs(x);
  x = 1.0 + (0.278393 + (0.230389 + 0.078108 * (a * a)) * a) * a;
  x *= x;
  return s - s / (x * x);
}

// Return the mask for the shadow of a box from lower to upper
float boxShadow(vec2 lower, vec2 upper, vec2 point, float sigma) {
  vec4 query = vec4(point - lower, point - upper);
  vec4 integral = 0.5 + 0.5 * erf(query * (sqrt(0.5) / sigma));
  return (integral.z - integral.x) * (integral.w - integral.y);
}

void main() {
    vec2 uv = (vUv - 0.5) * 2.;
    float aspect = width / height;
    uv.x *= aspect;
    float padding = shadowSize / height;
    float sigma = padding / 3.;
    float t = boxShadow(vec2(-aspect,-1.) + padding, vec2(aspect, 1.) - padding,  uv, sigma);
    gl_FragColor = vec4(0., 0., 0, shadowOpacity * pow(t, .5));
}
`;const o7={};function z0(A,l,e,t,n){const i=`${A}:${l}:${e}:${t}:{smoothness}`;if(i in o7)return o7[i];const s=A/2-e,r=l/2-t,o=e/A,a=(A-e)/A,m=t/l,c=(l-t)/l;let h=[s,r,0,-s,r,0,-s,-r,0,s,-r,0],d=[a,c,o,c,o,m,a,m],f=[3*(n+1)+3,3*(n+1)+4,n+4,n+5,2*(n+1)+4,2,1,2*(n+1)+3,3,4*(n+1)+3,4,0],q=[f[0],f[1],f[2],f[0],f[2],f[3],f[4],f[5],f[6],f[4],f[6],f[7],f[8],f[9],f[10],f[8],f[10],f[11]],u,g,w,x,p,E,v,I;for(let Q=0;Q<4;Q++){x=Q<1||Q>2?s:-s,p=Q<2?r:-r,E=Q<1||Q>2?a:o,v=Q<2?c:m;for(let T=0;T<=n;T++)u=Math.PI/2*(Q+T/n),g=Math.cos(u),w=Math.sin(u),h.push(x+e*g,p+t*w,0),d.push(E+o*g,v+m*w),T<n&&(I=(n+1)*Q+T+4,q.push(Q,I,I+1))}const B=new fl;return B.setIndex(new Bl(new Uint32Array(q),1)),B.setAttribute("position",new Bl(new Float32Array(h),3)),B.setAttribute("uv",new Bl(new Float32Array(d),2)),o7[i]=B,B}const L6=new Ql;class I3{constructor(l){U(this,"object3d",new Z4);U(this,"mesh");U(this,"shadow");U(this,"options");var e,t,n;this.options={shadowSize:(e=l.shadowSize)!=null?e:16,shadowOpacity:(t=l.shadowOpacity)!=null?t:.25,customMaterial:(n=l.customMaterial)!=null?n:new Cl({})},this.mesh=new I4(L6,this.options.customMaterial),this.object3d.add(this.mesh),this.shadow=new I4(L6,new $4({fragmentShader:Lr,vertexShader:Pl,uniforms:{width:{value:0},height:{value:0},shadowSize:{value:0},shadowOpacity:{value:0}},transparent:!0})),this.object3d.add(this.shadow)}getMaterial(){return this.mesh.material}setTexture(l,e=!1){this.mesh.material.map=l,this.mesh.material.needsUpdate=e}setSize(l,e){this.mesh.geometry=z0(1,1,4/l,4/e,4),this.mesh.position.z=1,this.object3d.scale.x=l,this.object3d.scale.y=e;const n=this.options.shadowSize;this.shadow.scale.x=1+n/l,this.shadow.scale.y=1+n/e,this.shadow.position.y=-n/e/8,this.shadow.position.z=-.5,this.shadow.material.uniforms.width.value=l,this.shadow.material.uniforms.height.value=e,this.shadow.material.uniforms.shadowSize.value=n,this.shadow.material.uniforms.shadowOpacity.value=this.options.shadowOpacity}}const p1=()=>window.innerWidth,s1=()=>window.innerHeight;function B5(A){const l={};return new Proxy(A,{set:(e,t,n)=>(l[t]=n,!0),get:(e,t)=>(l[t]||(l[t]=A[t]),l[t])})}const w5=document.createElement("canvas");w5.width=256;w5.height=1;const e5=w5.getContext("2d");if(e5){const A=e5.createLinearGradient(0,0,256,0);A.addColorStop(0,"rgba(255, 255, 255, 1)"),A.addColorStop(1,"rgba(255, 255, 255, 0)"),e5.fillStyle=A,e5.fillRect(0,0,256,1)}var Gr=`varying vec2 vUv;
uniform float width;
uniform float height;
uniform float shadowSize;
uniform float shadowOpacity;
uniform float[600] beatBins;
uniform float beatOffset;
uniform float bpm;
uniform float beats;
uniform float beatsPerBar;


void main() {
    float offsettedBeats = beats + beatOffset;
    int beat = int(vUv.x * beats);

    float pixel = 1. / width;

    vec3 slate_400 = vec3(float(0x94) / 255., float(0xa3) / 255., float(0xb8) / 255.);
    vec3 slate_500 = vec3(float(0x64) / 255., float(0x74) / 255., float(0x8b) / 255.);
    vec3 slate_600 = vec3(float(0x47) / 255., float(0x55) / 255., float(0x69) / 255.);
    vec3 slate_700 = vec3(float(0x33) / 255., float(0x41) / 255., float(0x55) / 255.);
    vec3 slate_800 = vec3(float(0x1e) / 255., float(0x29) / 255., float(0x3b) / 255.);
    vec3 color = slate_800;
    float barGroups = beats / 4. / beatsPerBar;
    float isStrongBeat = step(1., mod(vUv.x * width, width / beats * beatsPerBar));
    vec3 beatColor = mix(slate_400, slate_500, isStrongBeat);
    color = mix(color, slate_700, float(0xcc) / 255. * step(1., mod(-beatOffset / 16. + vUv.x * barGroups, 2.)));
    color = mix(color, slate_600, float(0xcc) / 255. * (1. - step(beatBins[beat], abs(vUv.y - 0.5))));
    color = mix(color, beatColor, float(0x88) / 255. * (1. - step(.5 + (1. - isStrongBeat), mod(vUv.x * width, width / beats))));
    gl_FragColor = vec4(color, 1.);
}
`;function gl(A,l,e){return e=j3(0,e,1),l*e+A*(1-e)}function j3(A,l,e){return Math.min(e,Math.max(l,A))}function S3(A,l,e){e=j3(0,e,1);var t=e*e*e*(e*(e*6-15)+10);return l*t+A*(1-t)}function r1(A,l,e){return gl(A,l,e*e*e)}function a5(A,l,e){return e=--e*e*e+1,gl(A,l,e)}function k0(A,l,e,t){t=j3(0,t,1);const n=(t/=e)*t,i=n*t;return A+l*(33*i*n+-106*n*n+126*i+-67*n+15*t)}class Y0{constructor(){U(this,"startTime",0);U(this,"endTime",0);U(this,"startValue",0);U(this,"endValue",0);U(this,"value",0)}transition(l,e,t){this.startTime=t,this.endTime=t+e,this.startValue=this.value,this.endValue=l}update(l){const e=this.value,t=j3(0,(l-this.startTime)/(this.endTime-this.startTime),1);return this.value=a5(this.startValue,this.endValue,t),e!==this.value}}const Hl=48,N1=40,t5=8,a7=12,n5=new Ql,m7={},Pr=A=>{if(A in m7)return m7[A];const l=new I3({shadowSize:8,shadowOpacity:.06});return m7[A]=l,l.setTexture(kr(A)),l},zr=new nl,c7={},kr=A=>{if(A in c7)return c7[A];{const l=document.createElement("canvas");l.width=1024*window.devicePixelRatio,l.height=N1*window.devicePixelRatio;const e=l.getContext("2d");if(!e)return zr;e.fillStyle=Sl.slate._500,e.fillRect(0,0,l.width,l.height),e.scale(window.devicePixelRatio,window.devicePixelRatio),e.fillStyle=Sl.slate._300,e.textBaseline="middle",e.textAlign="left",e.font="16px Barlow",e.fillText(A,16,N1/2);const t=new H3(l);return c7[A]=t,t.encoding=P4,t}};class Yr{constructor(l){U(this,"music",null);U(this,"width",1);U(this,"nodeContainer",new Z4);U(this,"cuePoints");U(this,"renin");U(this,"audioBar");U(this,"zoomStartFrame",0);U(this,"zoomEndFrame",0);U(this,"zoomAmount",1);U(this,"showGlowAnimation",new Y0);U(this,"oldIsMusicPaused",!1);U(this,"audioTrack");U(this,"obj",new Z4);this.renin=l,this.audioBar=new I3({shadowSize:8,shadowOpacity:.16,customMaterial:new $4({fragmentShader:Gr,vertexShader:Pl,uniforms:{width:{value:0},height:{value:0},shadowSize:{value:0},shadowOpacity:{value:0},beatBins:{value:[]},bpm:{value:0},beats:{value:0},beatOffset:{value:0},beatsPerBar:{value:0}},transparent:!0})}),this.audioBar.setSize(1,Hl),this.obj.add(this.audioBar.object3d),this.audioTrack=new I4(n5,new Cl({map:new H3(w5),color:Sl.green._500})),this.audioTrack.material.map&&(this.audioTrack.material.map.needsUpdate=!0,this.audioTrack.material.needsUpdate=!0,this.audioTrack.material.transparent=!0,this.audioTrack.material.opacity=.5,this.audioTrack.material.map.repeat.set(-1,1),this.audioTrack.material.map.wrapS=L1,this.audioTrack.material.map.wrapT=L1);const e=new I4(n5,new Cl({color:Sl.green._500}));e.position.x=.5,e.scale.x=2/a7,this.audioTrack.add(e),this.cuePoints=[new I4(n5,new Cl({color:Sl.orange._500})),new I4(n5,new Cl({color:Sl.orange._300}))],this.audioTrack.scale.set(a7,Hl,1),this.cuePoints[0].scale.set(2,Hl,1),this.cuePoints[1].scale.set(2,Hl,1),this.obj.add(this.audioTrack),this.obj.add(this.cuePoints[0]),this.obj.add(this.cuePoints[1])}getClickedFrame(l){return this.music?gl(this.zoomStartFrame,this.zoomEndFrame,l):0}zoom(l,e=0){if(!this.music)return;const t=this.music.getDuration()*60|0,n=t/this.zoomAmount;if(this.zoomAmount=j3(1,this.zoomAmount*l,100),this.zoomAmount===1){this.zoomStartFrame=0,this.zoomEndFrame=t;return}const i=this.zoomStartFrame+n*e,s=(i-this.zoomStartFrame)/(this.zoomEndFrame-this.zoomStartFrame),r=t/this.zoomAmount;this.zoomStartFrame=i-s*r,this.zoomEndFrame=i+(1-s)*r,this.clampView()}pan(l){this.zoomStartFrame+=l*this.zoomAmount*100,this.zoomEndFrame+=l*this.zoomAmount*100,this.clampView()}clampView(){const e=this.music.getDuration()*60|0;this.zoomStartFrame<0?(this.zoomEndFrame+=0-this.zoomStartFrame,this.zoomStartFrame=0):this.zoomEndFrame>e&&(this.zoomStartFrame+=e-this.zoomEndFrame,this.zoomEndFrame=e)}update(l){return this.music?(this.music.paused!==this.oldIsMusicPaused&&(this.oldIsMusicPaused=this.music.paused,this.showGlowAnimation.transition(this.music.paused?0:1,this.music.paused?.2:.5,l)),this.showGlowAnimation.update(l)):!1}render(l,e){if(!this.music)return;const t=this.music.getDuration()*60|0,n=(this.zoomEndFrame-this.zoomStartFrame)/t;this.obj.scale.x=1/n,this.audioTrack.scale.x=n*16,this.cuePoints[0].scale.x=n*2,this.cuePoints[1].scale.x=n*2,this.audioBar.getMaterial().uniforms.width.value=this.width/n;const i=(-.5+(this.zoomEndFrame+this.zoomStartFrame)/t/2)*(this.width-32);this.obj.position.x=-i/n,this.audioTrack.material.opacity=.3*this.showGlowAnimation.value,this.audioTrack.material.needsUpdate=!0;for(const[m,c]of this.cuePoints.entries()){c.visible=e[m]!==void 0;const h=e[m]/60/this.music.getDuration();c.position.z=1.5,c.position.x=16+h*(this.width-32)-this.width/2}const s=this.music.getCurrentTime()/this.music.getDuration();this.audioTrack.position.z=10,this.audioTrack.position.x=16+s*(this.width-32)-this.width/2-a7/2*n;for(const m of this.nodeContainer.children)this.nodeContainer.remove(m);this.obj.add(this.nodeContainer);let r=0;const o=(m,c=0,h,d)=>{const f=r++,q=Math.max(m.startFrame,h),u=Math.min(m.endFrame===-1?d:m.endFrame,d);if("children"in m&&m.children){let p=0;for(const E of Object.values(m.children))o(E,c+ ++p,q,u)}const g=Pr(m.constructor.name),w=(u-q)/60/l.music.getDuration();g.setSize(w*(this.width-32),N1),g.object3d.position.x=q/60/l.music.getDuration()*(this.width-32)-(this.width-32)/2+g.object3d.scale.x/2,g.object3d.position.z=2,g.object3d.position.y=(N1+t5)*f;const x=(this.width-32)/1024*this.zoomAmount;if(g.getMaterial().map.repeat.set(x*w,1),this.nodeContainer.add(g.object3d),m.renderTarget||m.screen){const p=m.renderTarget||this.renin.screenRenderTarget,E=N1/9*16/this.zoomAmount,v=N1,I=new I4(z0(1,1,4/E,4/v,32),new Cl({map:p.texture}));I.position.z=5,I.position.x=g.object3d.position.x+g.object3d.scale.x/2-E/2,I.position.y=g.object3d.position.y,I.scale.x=E,I.scale.y=v,this.nodeContainer.add(I)}};o(l.root,0,l.root.startFrame,l.root.endFrame===-1?l.music.getDuration()*60:l.root.endFrame);const a=Hl+(r+1)*(N1+t5)+t5;this.audioTrack.scale.y=a,this.audioTrack.position.y=-s1()/2+a/2+16,this.cuePoints[0].scale.y=a,this.cuePoints[1].scale.y=a,this.cuePoints[0].position.y=this.audioTrack.position.y,this.cuePoints[1].position.y=this.audioTrack.position.y}resize(l,e){this.width=l,this.audioBar.setSize(l-32,Hl),this.audioBar.getMaterial().uniforms.width.value=l,this.audioBar.getMaterial().uniforms.height.value=Hl,this.audioBar.object3d.position.y=-e/2+Hl/2+16,this.audioTrack.position.y=-e/2+Hl/2+16,this.cuePoints[0].position.y=-e/2+Hl/2+16,this.cuePoints[1].position.y=-e/2+Hl/2+16,this.nodeContainer.position.y=-e/2+Hl+N1+t5,this.zoom(1)}setMusic(l,e,t){this.music=l;const n=e.getChannelData(0),i=t.bpm/60*n.length/l.audioContext.sampleRate,s=i,r=n.length/s,o=[];for(let m=0;m<s;m++){const c=[];for(let d=0;d<r;d++){const f=n[m*r+d|0];c.push(Math.abs(f))}const h=c.reduce((d,f)=>d+f,0)/c.length*2;o.push(h)}const a=this.audioBar.getMaterial();a.uniforms.beatBins.value=o,a.uniforms.bpm.value=t.bpm,a.uniforms.beats.value=i,a.uniforms.beatOffset.value=t.beatOffset,a.uniforms.beatsPerBar.value=t.beatsPerBar,this.zoom(1)}}class Hr{constructor(l){U(this,"step",0);U(this,"beat",!1);U(this,"framesPerSubdivision");U(this,"music");const t=l.bpm*l.subdivision/60,n=60;this.framesPerSubdivision=n/t,this.music=l}flash(l,e,t=0){const i=((this.stepForFrame(l)-t)/e|0)*e+t,s=this.frameForStep(i),r=this.frameForStep(i+e);return(l-s)/(r-s)}stepForFrame(l){return(l+1.5)/this.framesPerSubdivision|0}frameForStep(l){return l*this.framesPerSubdivision-.5|0}update(l){this.beat=!1;const e=(l+1.5)/this.framesPerSubdivision|0,t=(l+.5)/this.framesPerSubdivision|0;e>t&&(this.beat=!0),this.step=(l+1.5)/this.framesPerSubdivision|0}}var Kr=`uniform sampler2D tDiffuse;

varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;const Or=()=>{const A=l=>{const e=customElements.get("vite-error-overlay");if(!e)return;console.log(l);const t=new e(l);document.body.appendChild(t)};window.addEventListener("error",({error:l})=>A(l)),window.addEventListener("unhandledrejection",({reason:l})=>A(l))};class Vr{constructor(){U(this,"audioContext",new AudioContext);U(this,"volumeNode");U(this,"currentLocalTime",0);U(this,"globalTimeOffset",0);U(this,"playbackRate",1);U(this,"paused",!0);U(this,"buffer",null);U(this,"loaded",!1);U(this,"bufferSource",null);this.volumeNode=this.audioContext.createGain(),this.volumeNode.gain.value=1,this.volumeNode.connect(this.audioContext.destination)}setBuffer(l){this.buffer=l,this.loaded=!0}setCurrentTime(l){this.currentLocalTime=l,this.paused||this.play()}setPlaybackRate(l){const e=!this.paused;this.playbackRate=l,e&&(this.pause(),this.play())}getCurrentTime(){const l=this.audioContext;if(l===null)return 0;let e=this.currentLocalTime;return this.paused||(e=this.currentLocalTime+(l.currentTime-this.globalTimeOffset)*this.playbackRate),e=Math.min(e,this.getDuration()),e}setVolume(l){this.volumeNode&&(this.volumeNode.gain.value=l)}getVolume(){var l,e;return(e=(l=this.volumeNode)==null?void 0:l.gain.value)!=null?e:0}play(){var l,e;!this.loaded||!this.audioContext||!this.volumeNode||(this.globalTimeOffset=this.audioContext.currentTime,this.paused||((l=this.bufferSource)==null||l.stop(0),(e=this.bufferSource)==null||e.disconnect(this.volumeNode)),this.paused=!1,this.bufferSource=this.audioContext.createBufferSource(),this.bufferSource.buffer=this.buffer,this.bufferSource.connect(this.volumeNode),this.bufferSource.playbackRate.value=this.playbackRate,this.bufferSource.start(0,this.currentLocalTime))}getDuration(){var l,e;return(e=(l=this.buffer)==null?void 0:l.duration)!=null?e:0}pause(){var l,e;this.setCurrentTime(this.getCurrentTime()),this.paused=!0,(l=this.bufferSource)==null||l.stop(0),this.volumeNode&&((e=this.bufferSource)==null||e.disconnect(this.volumeNode))}}var jr=`varying vec2 vUv;
uniform sampler2D screen;
uniform sampler2D thirdsOverlay;
uniform float thirdsOverlayOpacity;

void main() {
    vec3 color = LinearTosRGB(texture2D(screen, vUv.xy)).rgb;
    float a = texture2D(thirdsOverlay, vUv.xy).a;
    vec3 inverted = 1. - color;
    color = mix(color, inverted, a * thirdsOverlayOpacity);
    gl_FragColor = vec4(color, 1.);
}
`,Wr=`#define RT_LENGTH 128

varying vec2 vUv;
uniform float[RT_LENGTH] renderTimesGPU;
uniform int renderTimesGPUIndex;
uniform float[RT_LENGTH] renderTimesCPU;
uniform int renderTimesCPUIndex;
uniform float[RT_LENGTH] updateTimes;
uniform int updateTimesIndex;
uniform float[RT_LENGTH] uiUpdateTimes;
uniform int uiUpdateTimesIndex;
uniform float[RT_LENGTH] memoryPercentages;
uniform int memoryPercentagesIndex;
uniform float totalJSHeapSize;
uniform float jsHeapSizeLimit;
uniform sampler2D overlay;

float modI(float a,float b) {
    float m=a-floor((a+0.5)/b)*b;
    return floor(m+0.5);
}


void main() {

    float height = 4000. / 60.;

    float time = 1.;
    int indexGPU = int(modI((vUv.x) * float(RT_LENGTH) + float(RT_LENGTH) + float(renderTimesGPUIndex), float(RT_LENGTH)));
    int indexCPU = int(modI((vUv.x) * float(RT_LENGTH) + float(RT_LENGTH) + float(renderTimesCPUIndex), float(RT_LENGTH)));
    int indexUpdate = int(modI((vUv.x) * float(RT_LENGTH) + float(RT_LENGTH) + float(updateTimesIndex), float(RT_LENGTH)));
    int indexUIUpdate = int(modI((vUv.x) * float(RT_LENGTH) + float(RT_LENGTH) + float(uiUpdateTimesIndex), float(RT_LENGTH)));
    int indexMemoryPercentages = int(modI((vUv.x) * float(RT_LENGTH) + float(RT_LENGTH) + float(memoryPercentagesIndex), float(RT_LENGTH)));
    float valueGPU = renderTimesGPU[indexGPU];
    float valueCPU = renderTimesCPU[indexCPU];
    float valueUpdate = updateTimes[indexUpdate];
    float valueUIUpdate = uiUpdateTimes[indexUIUpdate];
    float valueMemory = memoryPercentages[indexMemoryPercentages] / totalJSHeapSize;
    float valueMemoryFull = memoryPercentages[indexMemoryPercentages] / jsHeapSizeLimit;
    vec3 slate_400 = vec3(float(0x94) / 255., float(0xa3) / 255., float(0xb8) / 255.);
    vec3 slate_500 = vec3(float(0x64) / 255., float(0x74) / 255., float(0x8b) / 255.);
    vec3 slate_600 = vec3(float(0x47) / 255., float(0x55) / 255., float(0x69) / 255.);
    vec3 slate_700 = vec3(float(0x33) / 255., float(0x41) / 255., float(0x55) / 255.);
    vec3 slate_800 = vec3(float(0x1e) / 255., float(0x29) / 255., float(0x3b) / 255.);
    vec3 fuschia_50 = vec3(float(0xfd) / 255., float(0xf4) / 255., float(0xff) / 255.);
    vec3 fuschia_100 = vec3(float(0xfa) / 255., float(0xe8) / 255., float(0xff) / 255.);
    vec3 fuschia_200 = vec3(float(0xf5) / 255., float(0xd0) / 255., float(0xfe) / 255.);
    vec3 fuschia_300 = vec3(float(0xf0) / 255., float(0xab) / 255., float(0xfc) / 255.);
    vec3 fuschia_400 = vec3(float(0xe8) / 255., float(0x79) / 255., float(0xf9) / 255.);
    vec3 fuschia_500 = vec3(float(0xd9) / 255., float(0x46) / 255., float(0xef) / 255.);
    vec3 fuschia_600 = vec3(float(0xc0) / 255., float(0x26) / 255., float(0xd3) / 255.);
    vec3 fuschia_700 = vec3(float(0xa2) / 255., float(0x1c) / 255., float(0xaf) / 255.);
    vec3 fuschia_800 = vec3(float(0x86) / 255., float(0x19) / 255., float(0x8f) / 255.);
    vec3 fuschia_900 = vec3(float(0x70) / 255., float(0x1a) / 255., float(0x75) / 255.);
    vec3 rose_50 = vec3(float(0xfd) / 255., float(0xf2) / 255., float(0xf8) / 255.);
    vec3 rose_100 = vec3(float(0xfc) / 255., float(0xe7) / 255., float(0xf3) / 255.);
    vec3 rose_200 = vec3(float(0xfb) / 255., float(0xcf) / 255., float(0xe8) / 255.);
    vec3 rose_300 = vec3(float(0xf9) / 255., float(0xa8) / 255., float(0xd4) / 255.);
    vec3 rose_400 = vec3(float(0xf4) / 255., float(0x72) / 255., float(0xb6) / 255.);
    vec3 rose_500 = vec3(float(0xec) / 255., float(0x48) / 255., float(0x99) / 255.);
    vec3 rose_600 = vec3(float(0xdb) / 255., float(0x27) / 255., float(0x77) / 255.);
    vec3 rose_700 = vec3(float(0xbe) / 255., float(0x18) / 255., float(0x5d) / 255.);
    vec3 rose_800 = vec3(float(0x9d) / 255., float(0x17) / 255., float(0x4d) / 255.);
    vec3 rose_900 = vec3(float(0x83) / 255., float(0x18) / 255., float(0x43) / 255.);
    vec3 sky_50 = vec3(float(0xf0) / 255., float(0xf9) / 255., float(0xff) / 255.);
    vec3 sky_100 = vec3(float(0xe0) / 255., float(0xf2) / 255., float(0xfe) / 255.);
    vec3 sky_200 = vec3(float(0xba) / 255., float(0xe6) / 255., float(0xfd) / 255.);
    vec3 sky_300 = vec3(float(0x7d) / 255., float(0xd3) / 255., float(0xfc) / 255.);
    vec3 sky_400 = vec3(float(0x38) / 255., float(0xbd) / 255., float(0xf8) / 255.);
    vec3 sky_500 = vec3(float(0x0e) / 255., float(0xa5) / 255., float(0xe9) / 255.);
    vec3 sky_600 = vec3(float(0x02) / 255., float(0x84) / 255., float(0xc7) / 255.);
    vec3 sky_700 = vec3(float(0x03) / 255., float(0x69) / 255., float(0xa1) / 255.);
    vec3 sky_800 = vec3(float(0x07) / 255., float(0x59) / 255., float(0x85) / 255.);
    vec3 sky_900 = vec3(float(0x0c) / 255., float(0x4a) / 255., float(0x6e) / 255.);
    vec3 emerald_50 = vec3(float(0xec) / 255., float(0xfd) / 255., float(0xf5) / 255.);
    vec3 emerald_100 = vec3(float(0xd1) / 255., float(0xfa) / 255., float(0xe5) / 255.);
    vec3 emerald_200 = vec3(float(0xa7) / 255., float(0xf3) / 255., float(0xd0) / 255.);
    vec3 emerald_300 = vec3(float(0x6e) / 255., float(0xe7) / 255., float(0xb7) / 255.);
    vec3 emerald_400 = vec3(float(0x34) / 255., float(0xd3) / 255., float(0x99) / 255.);
    vec3 emerald_500 = vec3(float(0x10) / 255., float(0xb9) / 255., float(0x81) / 255.);
    vec3 emerald_600 = vec3(float(0x05) / 255., float(0x96) / 255., float(0x69) / 255.);
    vec3 emerald_700 = vec3(float(0x04) / 255., float(0x78) / 255., float(0x57) / 255.);
    vec3 emerald_800 = vec3(float(0x06) / 255., float(0x5f) / 255., float(0x46) / 255.);
    vec3 emerald_900 = vec3(float(0x06) / 255., float(0x4e) / 255., float(0x3b) / 255.);
    vec3 color = slate_800;
    float isBarGPU = 1. - step(valueGPU, (1. - vUv.y) * height);
    float isBarCPU = 1. - step(valueCPU + valueUpdate + valueUIUpdate, vUv.y * height);
    float isBarUpdate = 1. - step(valueUpdate + valueUIUpdate, vUv.y * height);
    float isBarUIUpdate = 1. - step(valueUIUpdate, vUv.y * height);
    float isBarMemory = (1. - step(valueMemory, vUv.y * 4. - 1.5)) * step(1.5, vUv.y * 4.);
    float isBarMemoryFull = (1. - step(valueMemoryFull, vUv.y * 4. - 1.5)) * step(1.5, vUv.y * 4.);
    float isAboveLimitBottom = step(height / 4., vUv.y * height);
    float isAboveLimitTop = step(height / 4., (1. - vUv.y) * height);
    float isInCenterLimit = (1. - step(height / 4. * 2.5, (vUv.y) * height)) * (1. - step(height / 4. * 2.5, (1.  -vUv.y) * height));
    color = mix(color, slate_700, 1. - (0.75 + 0.25 * isAboveLimitTop));
    color = mix(color, slate_700, 1. - (0.75 + 0.25 * isAboveLimitBottom));
    color = mix(color, slate_700, 1. - (0.75 + 0.25 * (1. - isInCenterLimit)));
    color = mix(color, slate_600, isBarGPU);
    color = mix(color, rose_700, isBarGPU * isAboveLimitTop);

    color = mix(color, slate_400, isBarCPU);
    color = mix(color, sky_500, isBarUpdate);
    color = mix(color, emerald_500, isBarUIUpdate);
    color = mix(color, rose_500, isBarCPU * isAboveLimitBottom);
    color = mix(color, mix(fuschia_500, color, 0.4), isBarMemory);
    color = mix(color, fuschia_900, isBarMemoryFull);

    vec4 overlayColor = texture2D(overlay, vUv);
    color = mix(color, overlayColor.rgb, overlayColor.a);

    gl_FragColor = vec4(color, 1.);
}
`,Jr=`#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: 'Barlow';
  src: url(data:font/truetype;charset=utf-8;base64,AAEAAAARAQAABAAQR0RFRjfWN+8AAAN4AAAA8kdQT1MK77NGAABPAAAANoxHU1VCwP+7bQAALBgAAA66T1MvMlTOoe0AAAGgAAAAYGNtYXBfND2zAAANPAAABi5jdnQgIJoQMAAAAgAAAACgZnBnbZ42FdIAAB4AAAAOFWdhc3AAAAAQAAABHAAAAAhnbHlmWq54vQAAhYwAAPxwaGVhZBE2sRcAAAFoAAAANmhoZWEF9gXNAAABRAAAACRobXR4C0xnFQAAE2wAAAqSbG9jYcw2jP8AAAfoAAAFUm1heHAD8Q98AAABJAAAACBuYW1lVlR3KQAABGwAAAN8cG9zdCipIpoAADrUAAAULHByZXBuf5BGAAACoAAAANYAAQAB//8ADwABAAACqABwAAUAnQAHAAIAKABUAI0AAACDDhUABAAEAAEAAAPo/zgAAAR0/bH/fwRaAAEAAAAAAAAAAAAAAAAAAAKhAAEAAAABaHLLIOVwXw889QAHA+gAAAAA2Af8lwAAAADYCAe//bH/LwRaBDwAAAAHAAIAAAAAAAAABAIBAZAABQAAAooCWAAAAEsCigJYAAABXgAyAS8AAAAABQAAAAAAAAAgAAAHAAAAAAAAAAAAAAAAVFJCWQDAAAD7AgPo/zgAAARYAPkgAAGTAAAAAAH6ArwAAAAgAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYABgAGAAYAsQAAAH6AAD/OALEAAAB+gAA/zgARwBHAD4APgJBAAACSP/5AEcARwA+AD4CQQJBAAD/+QJBAkgAAP/5AEcARwA+AD4CvAAAArwB+gAA/zkCvP/4ArwB///7/zkAGAAYABgAGANcAboDXAG6AEu4AMhSWLEBAY5ZsAG5CAAIAGNwsQAHQrYARTUAIQUAKrEAB0JADEoEOgguBiYEGAcFCiqxAAdCQAxOAkIGNAQqAh8FBQoqsQAMQr4SwA7AC8AJwAZAAAUACyqxABFCvgBAAEAAQABAAEAABQALKrkAAwAARLEkAYhRWLBAiFi5AAMAZESxKAGIUVi4CACIWLkAAwAARFkbsScBiFFYugiAAAEEQIhjVFi5AAMAAERZWVlZWUAMTAI8BjAEKAIaBQUOKrgB/4WwBI2xAgBEswVkBgBERAAAAAEAAAAoAAAAAAAMAAIABAJ8AokAAgKKAooAAwKLAo4AAQKgAqcAAgACACEABAAaAAEAHQA4AAEAOgBTAAEAVQBwAAEAdACSAAEAlACYAAEAmgDDAAEAxgDLAAEAzgDOAAEA0ADkAAEA5gEIAAEBCgEmAAEBKwEyAAEBNAFRAAEBUwFXAAEBWQFkAAEBZQFrAAIBbAF2AAEBeQGLAAEBjQGaAAEBnAGhAAEBowGxAAEBtQHIAAEBygHOAAEB0AHYAAEB3QHdAAECPwI/AAICQgJCAAECRAJFAAECSwJLAAECZAJkAAECfAKSAAMCoAKnAAMAAAAAAA0AogADAAEECQAAAJICSAADAAEECQABAAwCPAADAAEECQACAA4CLgADAAEECQADADIB/AADAAEECQAEABwB4AADAAEECQAFABoBxgADAAEECQAGABwBqgADAAEECQAIABYBlAADAAEECQAJABoBegADAAEECQALACYBVAADAAEECQAMACYBVAADAAEECQANASAANAADAAEECQAOADQAAABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAaQBzACAAYQB2AGEAaQBsAGEAYgBsAGUAIAB3AGkAdABoACAAYQAgAEYAQQBRACAAYQB0ADoAIABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAaAB0AHQAcABzADoALwAvAHQAcgBpAGIAYgB5AC4AYwBvAG0ALwBKAGUAcgBlAG0AeQAgAFQAcgBpAGIAYgB5AFQAcgBpAGIAYgB5ACAAVAB5AHAAZQBCAGEAcgBsAG8AdwAtAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgA0ADAAOABCAGEAcgBsAG8AdwAgAFIAZQBnAHUAbABhAHIAMQAuADQAMAA4ADsAVABSAEIAWQA7AEIAYQByAGwAbwB3AC0AUgBlAGcAdQBsAGEAcgBSAGUAZwB1AGwAYQByAEIAYQByAGwAbwB3AEMAbwBwAHkAcgBpAGcAaAB0ACAAMgAwADEANwAgAFQAaABlACAAQgBhAHIAbABvAHcAIABQAHIAbwBqAGUAYwB0ACAAQQB1AHQAaABvAHIAcwAgACgAaAB0AHQAcABzADoALwAvAGcAaQB0AGgAdQBiAC4AYwBvAG0ALwBqAHAAdAAvAGIAYQByAGwAbwB3ACkAAAB9AH0AfQB9AM4A4ADyAQQBGgEsAT4BUAFiAXQBhgGcAa4BwAHSAeQB8AICAhQCJgIyAkQCVgLFAyIDewONA58EOwRNBF8EngT/BREFGQVeBXAFggYLBh0GLwZFBlcGaQZ7Bo0GnwarBr0GzwbhB3MHhQfACBsILQg/CFEIkgkLCR0JPglQCWIJdAmGCZIJpAm2CcgJ1AnmCiIKNAqDCq4KwArMCtgLNguGC8cL2QvrDDkMSwyRDKMMtQzHDN0M7w0BDRMNJQ0xDUMNVQ1nDXkNhQ2XDakNuw3NDd8OZg54D0QPiw/aECoQgxCVEKcRCREbES0R0hHkEkwSfxLOEuATGRMrEz0TTxNhE20TfxORE6MTtRPBE9MT5RP3FAkUGxSVFKcUuRTwFUQVVhVoFXoVjBXgFiIWNBZGFlgWZBZ2FogWmhbhFvMXBRcXFykXNRdBF00XWRdrF3cX+xgHGBMYJRg7GE0YXxhxGIMYjxibGKsYtxjDGM8Y2xjnGPMY/xkLGbwZyBnUGqAbMRuVG6EbrRxXHGMcbxzyHaIdrh5aHsEezR7fH4oflh+iH7gfxB/QH9wf6B/0IAYgEiAeICog2CDkIUwhsSHDIhUi0yLfIvEi/SMJJAokUCS1JMck2SUkJUUlUSVjJW8leyWHJZMlnyWrJbclwyXTJd8mNyZiJm4mvCbOJu8nAScNJxknKyd5J/EoRyhTKF8oyijWKSkpNSlHKVMpXylvKXsphymTKZ8pqym3KcMqLio6KkYqUipeKnAqfCqIKxgrJCswK9csWSzLLU8tpi2yLb4uIS4tLjku2y7nL0kvlzAEMBAwYzBvMIEwkzCfMKswtzDDMM8xPzFLMVcxYzFvMXsxhzGTMn8yizKXMqMzGjMsMz4z6DP0NAA0NzSMNJg0pDSwNLw1DjVXNWk1ezWNNZk1qzW9Nc82FjYiNi42OjZGNlI2XjdXN+M5PznHOhc6KTo7Ok06XzpxOoM6lTqhOrM6xTs0O4s73TvvPAE8ezyNPMs9Kj08PUQ9iD2aPaw+GT4rPj0+Tz5hPnM+4z8dP3M/hT+XP9ZASUBqQHxAjkCgQLJAxEDQQOJA+EExQX9BqkG8QgFCDUJqQrlC+kMMQx5DekOMQ81D30PxRANEFUQnRDlEvUTPRZpF30YsRnlG0EbiRvRHVEdmR3hIAEgzSIJIlEigSNZI6Ej6SQxJHkkwSUJJpUm3Se5KQkpUSmZKeEqKStpLGkssSz5LUEtiS6lLu0vNS99MYEzMTRRNe02DTc9OEE5CTptPDE9lT95QT1ChUT5RslHzUiNSfFLzU0xTwlQyVIRVI1WWVdRWBlZYVuFXOFenWBVYZFj2WWhZeFmIWZhZqFm4WchZ2FnoWfhaCFoYWihaOFpIWlhaaFp4WohamFq9Ws1a3VrtWv1bDVsdWy1bPVtjW3tbulvKXAVcXVzCXUBdTl1zXepevl7iXwVfNV9lX71gFWBKYHxgoGCoYMxg8GD4YR9hJ2E3YXBhqWHLYe1iQmJOYoNiuGLtYw9jHWNOY05j5mSEZQZlnGX3ZlFmxmdYZ8xoRmhraI9o4mkGaU9po2m5apNqvWroav5rRGtaa3Brqmv6bDRstGzzbPttRm19bc9uE253buJvk2+nb+xw4HGVcddyhXMYc9F0SXSRdLV08XURdU11jnYFdmN203bbdwF3KHc+d2d3jne1d/F4K3g1eHR4tnkFeS15dHmbeaN50nn7egt6Ynq7euF7Cnsxe1p7ZHuie9t8MXw7fEV8T3xZfJV8vH0VfR99KX07fU19X33wfgJ+FH4mfjgAAAAAAAIAAAADAAAAFAADAAEAAAAUAAQGGgAAAKQAgAAGACQAAAANAC8AOQB+ARMBKwExATcBPgFIAU0BfgGPAZIBoQGwAc4B1AHlAecB6QHvAf8CGwIfAikCNwJZApICvALHAskC3QMEAwwDEwMbAyMDKAM4A5QDqQO8A8AehR75IBAgFCAaIB4gIiAmIDAgMyA6IEQgeSCjIKwguiC9IRMhIiEmIS4hXiICIgYiDyISIhUiGiIeIisiSCJgImUlyifp+wL//wAAAAAADQAgADAAOgCgARYBLQEzATkBQAFKAU8BjwGSAaABrwHNAdQB5QHnAekB7wH/AhgCHwIoAjcCWQKSArsCxgLJAtgDAAMGAxIDGwMjAyYDNQOUA6kDvAPAHoAeoCAQIBMgGCAcICAgJiAwIDIgOSBEIHQgoyCsILogvSETISIhJiEuIVsiAiIGIg8iESIVIhkiHiIrIkgiYCJkJcon6fsB//8AAf/1AAABrwAAAAAAAAAAAAAAAAAAAAAAAP7tALQAAAAAAAD/Zv8G/wH/Gf71/yYAAP7PAAD+yP6J/lEAAAAA/7IAAAAAAAD/dv9v/2j/Zv9a/kf+M/4h/h4AAAAA4iHiHAAAAAAAAOH24jfiP+IC4czhluGk4Znhj+GN4WPhTeE54UrgueBj4FrgUgAA4DgAAOA/4DPgEd/zAADcntpXBmQAAQAAAAAAoAAAALwBRAIqAlQCXAJkAm4CfgKEAAAAAALeAuAC4gAAAAAAAAAAAAAAAALYAAAC3AAAAAAAAALYAtoAAALaAuQC7AAAAAAAAAAAAAAAAAAAAAAAAALmAvAAAAAAA54DogOmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4YAAAOGAAAAAAAAAAADgAAAAAAAAAAAAAMCHQI9AiQCRAJmAmoCPgInAigCIwJOAhkCLQIYAiUCGgIbAlUCUgJUAh8CaQAEABwAHQAjACcAOQA6AD4AQQBMAE4ATwBUAFUAWgBxAHMAdAB3AH0AgACTAJQAmQCaAKICKwImAiwCXAIyApoArQDFAMYAzADQAOUA5gDsAPAA/gEBAQMBCQEKAQ8BKAEqASsBLgE0ATcBUgFTAVgBWQFhAikCcwIqAlsCQQIeAkICSAJDAksCdAJsApgCbQHZAjkCWgIuAm4CnAJwAlgCCAIJApMCZAJrAiEClgIHAdoCOgISAhECEwIgABUABQANABoAEwAZABsAIAA0ACgAKwAxAEcAQgBDAEQAJABZAGQAWwBcAG8AYgJQAG4AhgCBAIMAhACbAHIBMwC+AK4AtgDDALwAwgDEAMkA3QDRANQA2gD4APIA9AD1AM0BDgEaARABEgEmARgCUQEkAT4BOAE7ATwBWgEpAVwAFwDAAAYArwAYAMEAHgDHACEAygAiAMsAHwDIACUAzgAmAM8ANgDfADIA2wA3AOAAKQDSADwA6QA7AOcAPQDqAKYBSABAAO8APwDtAEsA/QBJAPsA8wBKAPwARQDxAPoATQEAAKcBSQBQAQQAUgEGAFEBBQEHAFMBCABWAQsAqAFKAFcBDABYAQ0AbQEjAREAbAEiAHABJwB1ASwAqQFLAHYBLQB4AS8AewEyAHoBMQB5ATAAqgFMAH8BNgB+ATUAkgFRAI8BRwCCATkAkQFQAI4BRgCQAU8AlgFVAJwBWwCdAKMBYgClAWQApAFjAGYBHACIAUAADAC1AKsBTQCsAU4AKgDTAnoCeQKXApUClAKZAp4CnQKfApsCfgJ/AoEChQKGAoMCfQJ8AocChAKAAoIAmAFXAJUBVACXAVYAFAC9ABYAvwAOALcAEAC5ABEAugASALsADwC4AAcAsAAJALIACgCzAAsAtAAIALEAMwDcADUA3gA4AOEALADVAC4A1wAvANgAMADZAC0A1gBIAPkARgD3AGMBGQBlARsAXQETAF8BFQBgARYAYQEXAF4BFABnAR0AaQEfAGoBIABrASEAaAEeAIUBPQCHAT8AiQFBAIsBQwCMAUQAjQFFAIoBQgCfAV4AngFdAKABXwChAWACNwI4AjMCNQI2AjQCdQJ3AiICYgJPAkwCYwJXAlYAAAGjAAAAAAAAAMgAAADIAAACXwAhAl8AIQJfACECXwAhAl8AIQJfACECXwAhAl8AIQJfACECXwAhAl8AIQJfACECXwAhAl8AIQJfACECXwAhAl8AIQJfACECXwAhAl8AIQJfACECXwAhAl8AIQOZACQCcwBeAl8ASAJfAEgCXwBIAl8ASAJfAEgCXwBIAmoAXgKrAF4CagBeAqsAXgJdAF4CXQBeAl0AXgJdAF4CXQBeAl0AXgJdAF4CXQBeAl0AXgJdAF4CXQBeAl0AXgJdAF4CXQBeAl0AXgJdAF4CXQBeAl0AXgI4AF4CZQBIAmUASAJlAEgCZQBIAo4AXgKOACECjgBeAQMAXgEDAFYBAwACAQP/9AEDAEkBAwBNAQMAHwEDACgBA//8AOsAJAED//ICQQAdAkEAHQJjAF4COABeAjgAVgI4AF4COABeAlf/6gLLAF4CpABeAqQAXgKkAF4CpABeAqQAXgJuAEgCbgBIAm4ASAJuAEgCbgBIAm4ASAJuAEgCbgBIAm4ASAJuAEgCbgBIAm4ASAJuAEgCbgBIAm4ASAJuAEgCbgBIAm4ASAJuAEgCbgBIAm4AMgJuAEgDmABIAlAAVwI3AFcCQAA6AmQAXgJkAF4CZABeAkgANAJIADQCSAA0AkgANAJIADQCSwBBAjkAKwI5ACsCOQArAogAVgKIAFYCiABWAogAVgKIAFYCiABWAogAVgKIAFYCiABWAogAVgKIAFYCiABWAogAVgKIAFYCiABWAogAVgKIAFYCiABWAogAVgJNACMDbgAbA4AAGwOAABsDgAAbA4AAGwJNACUCNwAlAjcAJQI3ACUCNwAlAjcAJQI3ACUCNwAlAjcAJQIlAC0CJQAtAiUALQIlAC0CZQBIAmMAXgKkAF4CZABeAjkAKwJIADQCOQArAf8ALgH+AC4B/gAuAf4ALgH+AC4B/gAuAf4ALgH+AC4B/gAuAf4ALgH+AC4B/gAuAf4ALgH+AC4B/gAuAf4ALgH+AC4B/gAuAf4ALgH+AC4B/gAuAf4ALgH+AC4DQAAuAiIAUAIIAEACCABAAggAQAIIAEACCABAAggAQAIiAEECEwBAAiIAQQIiAEECFQBBAhUAQQIVAEECFQBBAhUAQQIVAEECFQBBAhUAQQIVAEECFQBBAhUAQQIVAEECFQBBAhUAQQIVAEECFQBBAhUAQQIVAEECFQA9AhgAPgIYAD4BZAAiAhcAPQIXAD0CFwA9AhcAPQIXAD0CLwA9AhsAUAIbAAgCGwBQAhsAUAD/AEgA1ABGANQAPwDU/+8A1P/rANT/3QDUADIA/wBIANQACADUABEB7ABIANT/5AEcAEgA1P/bAPX/3QDx/90A8f/dAfUAUAH1AFAA5gBQAOYASQFpAFAA5gANAQ8AUQFWABkDOwBQAhsAUAIbAFACGwBQAhwAUAIbAFACIQA/AhgAPwIYAD8CGAA/AhgAPwIYAD8CGAA/AhgAPwIYAD8CGAA/AhgAPwIYAD8CGAA/AhgAPwIYAD8CGAA/AhgAPwIYAD8CGAA/AhgAPwIYAD8CEAA2AhAANgIYAD8DWgBAAigAVwIcAFACKABBAWwAUAFsAFABbABQAeEAOAHkADgB5AA4AeQAOAHkADgCLQBQAWwAJAFsACQBbAAkAhgASAIbAEgCGwBIAhsASAIbAEgCGwBIAhsASAIbAEgCGwBIAhsASAIbAEgCGwBIAhsASAIbAEgCGwBIAhsASAIbAEgCFwA9AfUAUAIbAFABbAALAWwAJAHkADgBbAAkAhsASAIbAEgCGwBIAdsAIALRAB8C0QAfAtEAHwLRAB8C0QAfAd0AGgHNABkBzQAZAc0AGQHNABkBzQAZAc0AGQHNABkBzQAZAb0AIgG9ACIBvQAiAb0AIgJkACICSgAiA0QAXgOrACIDlwAiAwwAPQH0AEgCDgAeAg4AHgIOAB4CDgAeAg4AHgIOAB4CDgAeAg4AHgIOAB4CDgAeAg4AHgMdACACGQBMAgcAOgIHADoCBwA6AgcAOgIHADoCEQBMAkcATAIRAEwCRwBMAgMATAIDAEwCAwBMAgMATAIDAEwCAwBMAgMATAIDAEwCAwBMAgMATAHkAEwCKQBAAgYAQAIGAEACLABMAiz/8QDfAEwA3wBEAN//8ADf/+IA3wA3AN8ADQLRAEwA3//pAN8AHwHyABcCDQBMAeYATAHmAEQB5gBMAeYATAH7AAQCZABMAkIATAJCAEwCQgBMAkIATAJCAEwCGwA6AhsAOgIbADoCGwA6AhsAOgIbADoCGwA6AhsAMAIbADoDFQA6AfsARgHmAEYB8QAwAggATAIIAEwCCABMAfgALgH4AC4B+AAuAfgALgHvACIB7wAiAe8AIgHvACICKABFAigARQIoAEUCKABFAigARQIoAEUCKABFAigARQIoAEUCAQAgAvwAHwL8AB8C/AAfAvwAHwL8AB8CBAAiAfQAIgH0ACIB9AAiAfQAIgH0ACIB1wAkAdcAJAHXACQB1wAkAUQAFwFdACACfgAgAoEASAIiAFAChgAnAjUARwFeADoCGAA5AgMAMgInADECAgBCAgMAQQHZACQCCQA7AgkAOQIPAD4CDwBSAg8ANwIPADQCDwApAg8ARAIPAEQCDwAyAg8APgIPADsBPgAgALgAFwFGACMBQgAlAVEAHAEuACABNwAlARYADAE6ACABNwAcAT4AIAC4ABcBRgAjAUIAJQFRABwBLgAgATcAJQEWAAwBOgAgATcAHAC4ABcBRgAjAUIAJQFRABwBLgAgATcAJQEWAAwBOgAgATcAHADr/4kDHAAXAyYAFwOFACUDHAAXA3sAJQNSACADCAAMARYAUgEIAEIBUwBxATcAYAMbAFIBPwBmAT8AZgHNACgBzQAqANIAMgE1ACcBjQAgApMASAGQAB4BkABLAQX/+wEFAFUBLgAgAS4AIAF8ACABfACG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AWcAAgBMAAEABQBBAOUA5gDwAi0AAQAAAAEACAACAN4AbAFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BwAHBAcIBwwHEAcUBxgHHAcgByQHKAcsBzAHNAc4BzwHQAdEB0gHTAdQB1QHWAdcB2AACACIArQCvAAAAtQC2AAMAvAC8AAUAvgC+AAYAwADJAAcAywDUABEA2gDbABsA3QDdAB0A3wDgAB4A5QDnACAA6gDqACMA7ADtACQA8ADwACYA8gDyACcA9AD2ACgA+AD4ACsA+gD8ACwA/gD+AC8BAQEBADABAwEGADEBCAEQADUBEgESAD4BGAEYAD8BGgEaAEABIgEkAEEBJgExAEQBNAE4AFABOwE8AFUBPgE+AFcBRgFHAFgBTwFQAFoBUgFcAFwBXgFeAGcBYQFkAGgAAQAAAAEACAACAN4AbAFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmQGaAZsBnAGdAZ4BnwGgAaEBogGjAaQBpQGmAacBqAGpAaoBqwGsAa0BrgGvAbABsQGyAbMBtAG1AbYBtwG4AbkBugG7AbwBvQG+AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgBvwACABsABAAGAAAADAANAAMAEwATAAUAFQAVAAYAFwAgAAcAIgArABEAMQAyABsANAA0AB0ANgA3AB4AOQA7ACAAPQA/ACMAQQBFACYARwBHACsASQBKACwATABMAC4ATgBcAC8AYgBiAD4AZABkAD8AbAB6AEAAfQCBAE8AgwCEAFQAhgCGAFYAjgCRAFcAkwCdAFsAnwCfAGYAogClAGcArACsAGsAAQAAAAEACAABANQACgABAAAAAQAIAAEABv/2AAIAAQHpAfIAAAAGAAAAAgAkAAoAAwABAKwAAQASAAAAAQAAABgAAQACAFoBDwADAAEAkgABABIAAAABAAAAGAABAAIABACtAAYAAAACACYACgADAAEAEgABAC4AAAABAAAAGAACAAEB8wH8AAAAAwABABwAAQASAAAAAQAAABgAAgABAf0CBgAAAAEAAQIQAAEAAAABAAgAAQAG/+sAAQABAiUAAQAAAAEACAABABQAFAABAAAAAQAIAAEABgAeAAIAAQHfAegAAAABAAAAAQAIAAEABgAnAAIAAQHgAegAAAAGAAAAAQAIAAMAAAACABoAFAABABoAAQAAABcAAQABAiEAAQABAQMAAQAAAAEACAABAAYABgABAAEA8AAEAAAAAQAIAAEATgACACwACgAEABwAFgAQAAoCogACAocCowACAoUCoAACAn8CoQACAn4ABAAcABYAEAAKAqYAAgKHAqcAAgKFAqQAAgJ/AqUAAgJ+AAEAAgKBAoMABgAAAAIALgAKAAMAAAABAEAAAgAUADYAAQAAABYAAgACAooCiwAAAo0CkgACAAMAAAABABwAAQASAAEAAAAWAAIAAQJ8AokAAAABAAIA8AD+AAMAAAABAAgAAQA6ABoBBgEAAQYA+ADyAQAA6gDgANYAzADCALgArgCkAJoAkACMAIgAhACAAHwAeAB0AHAAbABoAAIABwAEAAQAAABaAFoAAQCtAK0AAgDwAPAAAwD+AP4ABAEPAQ8ABQHfAfIABgABAegAAQHnAAEB5gABAeUAAQHkAAEB4wABAeIAAQHhAAEB4AABAd8ABAIPAgYB/AHyAAQCDgIFAfsB8QAEAg0CBAH6AfAABAIMAgMB+QHvAAQCCwICAfgB7gAEAgoCAQH3Ae0ABAIJAgAB9gHsAAQCCAH/AfUB6wAEAgcB/gH0AeoAAwH9AfMB6QACAP8BmwADAPEA9gGSAAIB2gGoAAIB2QFsAAEAAAABAAgAAgHAAN0BbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwGAAYEBggGDAYQBhQGGAYcBiAGJAYoBiwGMAY0BjgGPAZABkQGSAZMBlAGVAZYBlwGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGpAaoBqwGsAa0BrgGvAbABsQGyAbMBtAG1AbYBtwG4AbkBugG7AbwBvQG+AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgBvwFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMBhAGFAYYBhwGIAYkBigGLAYwBjQGOAY8BkAGRAZMBlAGVAZYBlwGYAZkBmgGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGpAaoBqwGsAa0BrgGvAbABsQGyAbMBtAG1AbYBtwG4AbkBugG7AbwBvQG+AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgB8wH0AfUB9gH3AfgB+QH6AfsB/AIQAAIAPwAFAAYAAAAMAA0AAgATABMABAAVABUABQAXACAABgAiACsAEAAxADIAGgA0ADQAHAA2ADcAHQA5ADsAHwA9AD8AIgBBAEUAJQBHAEcAKgBJAEoAKwBMAEwALQBOAFkALgBbAFwAOgBiAGIAPABkAGQAPQBsAHoAPgB9AIEATQCDAIQAUgCGAIYAVACOAJEAVQCTAJ0AWQCfAJ8AZACiAKUAZQCsAKwAaQCuAK8AagC1ALYAbAC8ALwAbgC+AL4AbwDAAMkAcADLANQAegDaANsAhADdAN0AhgDfAOAAhwDlAOcAiQDqAOoAjADsAO0AjQDyAPIAjwD0APYAkAD4APgAkwD6APwAlAEBAQEAlwEDAQYAmAEIAQ4AnAEQARAAowESARIApAEYARgApQEaARoApgEiASQApwEmATEAqgE0ATgAtgE7ATwAuwE+AT4AvQFGAUcAvgFPAVAAwAFSAVwAwgFeAV4AzQFhAWQAzgH9AgYA0gIlAiUA3AAAAAIAAAAAAAD/tQAyAAAAAAAAAAAAAAAAAAAAAAAAAAACqAAAAQIAAgADACQAyQEDAQQBBQEGAQcBCAEJAMcBCgELAQwBDQEOAGIBDwCtARABEQESAGMArgCQACUAJgD9AP8AZAETARQAJwDpARUBFgAoAGUBFwEYAMgBGQEaARsBHAEdAMoBHgEfAMsBIAEhASIBIwApACoA+AEkASUAKwEmAScALADMAM0AzgD6ASgAzwEpASoBKwEsAC0BLQAuAC8BLgEvATAA4gAwADEBMQEyATMAZgAyANAA0QE0ATUBNgE3ATgAZwE5ANMBOgE7ATwBPQE+AT8BQAFBAUIAkQCvALAAMwDtADQANQFDAUQANgFFAOQA+wFGAUcANwFIAUkAOADUAUoA1QBoAUsA1gFMAU0BTgFPAVABUQFSAVMBVAFVAVYBVwA5ADoBWAFZAVoBWwA7ADwA6wFcALsBXQFeAV8BYAA9AWEA5gFiAWMBZAFlAWYBZwFoAWkARABpAWoBawFsAW0BbgFvAXAAawFxAXIBcwF0AXUAbAF2AGoBdwF4AXkAbgBtAKAARQBGAP4BAABvAXoBewBHAOoBfAEBAEgAcAF9AX4AcgF/AYABgQGCAYMAcwGEAYUAcQGGAYcBiAGJAYoBiwGMAEkASgD5AY0BjgGPAZAASwGRAZIBkwBMANcAdAGUAHYAdwGVAZYAdQGXAZgBmQGaAZsATQGcAZ0ATgGeAE8BnwGgAaEBogDjAFAAUQGjAaQBpQB4AFIAeQGmAHsBpwGoAakBqgGrAHwBrAB6Aa0BrgGvAbABsQGyAbMBtAG1AKEBtgB9ALEAUwDuAFQAVQG3AbgAVgG5AOUA/AG6AIkAVwG7AbwAWAB+Ab0BvgCAAIEBvwB/AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIAWQBaAdMB1AHVAdYAWwBcAOwB1wC6AdgB2QHaAdsAXQHcAOcB3QDAAMEB3gHfAeAB4QHiAeMB5AHlAeYB5wHoAekB6gHrAewB7QHuAe8B8AHxAfIB8wH0AfUB9gH3AfgB+QH6AfsB/AH9Af4B/wIAAgECAgIDAgQCBQIGAgcCCAIJAgoCCwIMAg0CDgIPAhACEQISAhMCFAIVAhYCFwIYAhkCGgIbAhwCHQIeAh8CIAIhAiICIwIkAiUCJgInAigCKQIqAisCLAItAi4CLwIwAjECMgIzAjQCNQI2AjcCOAI5AjoCOwI8Aj0CPgI/AkACQQJCAkMCRAJFAkYCRwJIAkkCSgJLAkwCTQJOAk8AnQCeAlACUQJSAJsAEwAUABUAFgAXABgAGQAaABsAHAJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQC8APQA9QD2AnoCewJ8An0AEQAPAB0AHgCrAAQAowAiAKIAwwCHAA0ABgASAD8ACwAMAF4AYAA+AEAAEAJ+ALIAswJ/AEIAxADFALQAtQC2ALcAqQCqAL4AvwAFAAoCgAKBAoIAhAC9AAcCgwCmAPcAhQKEAoUAlgKGAocADgDvAPAAuAAgAI8AIQAfAJUAlACTAKcApABhAEEAkgCcAogCiQCaAJkApQKKAJgACADGALkAIwAJAIgAhgCLAIoAjACDAosCjABfAOgAggKNAMICjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgAjQDbAOEA3gDYAI4A3ABDAN8A2gDgAN0A2QKpAqoCqwKsAq0CrgKvArAETlVMTAZBYnJldmUHdW5pMUVBRQd1bmkxRUI2B3VuaTFFQjAHdW5pMUVCMgd1bmkxRUI0B3VuaTAxQ0QHdW5pMUVBNAd1bmkxRUFDB3VuaTFFQTYHdW5pMUVBOAd1bmkxRUFBB3VuaTFFQTAHdW5pMUVBMgdBbWFjcm9uB0FvZ29uZWsLQ2NpcmN1bWZsZXgKQ2RvdGFjY2VudAZEY2Fyb24GRGNyb2F0BkVjYXJvbgd1bmkwMjI4B3VuaTFFQkUHdW5pMUVDNgd1bmkxRUMwB3VuaTFFQzIHdW5pMUVDNApFZG90YWNjZW50B3VuaTFFQjgHdW5pMUVCQQdFbWFjcm9uB0VvZ29uZWsHdW5pMUVCQwtHY2lyY3VtZmxleApHZG90YWNjZW50BEhiYXILSGNpcmN1bWZsZXgHdW5pMUVDQQd1bmkxRUM4B0ltYWNyb24HSW9nb25lawZJdGlsZGULSmNpcmN1bWZsZXgGTGFjdXRlBkxjYXJvbgd1bmkwMTNCBk5hY3V0ZQZOY2Fyb24DRW5nB3VuaTFFRDAHdW5pMUVEOAd1bmkxRUQyB3VuaTFFRDQHdW5pMUVENgd1bmkxRUNDB3VuaTFFQ0UFT2hvcm4HdW5pMUVEQQd1bmkxRUUyB3VuaTFFREMHdW5pMUVERQd1bmkxRUUwDU9odW5nYXJ1bWxhdXQHT21hY3JvbgZSYWN1dGUGUmNhcm9uBlNhY3V0ZQtTY2lyY3VtZmxleAd1bmkwMThGBFRiYXIGVGNhcm9uBlVicmV2ZQd1bmkxRUU0B3VuaTFFRTYFVWhvcm4HdW5pMUVFOAd1bmkxRUYwB3VuaTFFRUEHdW5pMUVFQwd1bmkxRUVFDVVodW5nYXJ1bWxhdXQHVW1hY3JvbgdVb2dvbmVrBVVyaW5nBlV0aWxkZQZXYWN1dGULV2NpcmN1bWZsZXgJV2RpZXJlc2lzBldncmF2ZQtZY2lyY3VtZmxleAd1bmkxRUY0BllncmF2ZQd1bmkxRUY2B3VuaTFFRjgGWmFjdXRlClpkb3RhY2NlbnQHdW5pMDEyMgd1bmkwMTM2B3VuaTAxNDUHdW5pMDE1Ngd1bmkwMTYyB3VuaTAyMTgHdW5pMDIxQQZhYnJldmUHdW5pMUVBRgd1bmkxRUI3B3VuaTFFQjEHdW5pMUVCMwd1bmkxRUI1B3VuaTAxQ0UHdW5pMUVBNQd1bmkxRUFEB3VuaTFFQTcHdW5pMUVBOQd1bmkxRUFCB3VuaTFFQTEHdW5pMUVBMwdhbWFjcm9uB2FvZ29uZWsLY2NpcmN1bWZsZXgKY2RvdGFjY2VudAZkY2Fyb24GZWNhcm9uB3VuaTAyMjkHdW5pMUVCRgd1bmkxRUM3B3VuaTFFQzEHdW5pMUVDMwd1bmkxRUM1CmVkb3RhY2NlbnQHdW5pMUVCOQd1bmkxRUJCB2VtYWNyb24HZW9nb25lawd1bmkxRUJEB3VuaTAyNTkHdW5pMDI5Mgd1bmkwMUVGBmdjYXJvbgtnY2lyY3VtZmxleApnZG90YWNjZW50B3VuaTAxRTUEaGJhcgd1bmkwMjFGC2hjaXJjdW1mbGV4BmlicmV2ZQlpLmxvY2xUUksHdW5pMUVDQgd1bmkxRUM5AmlqB2ltYWNyb24HaW9nb25lawZpdGlsZGUHdW5pMDIzNwtqY2lyY3VtZmxleAd1bmkwMUU5BmxhY3V0ZQZsY2Fyb24HdW5pMDEzQwRsZG90Bm5hY3V0ZQZuY2Fyb24DZW5nBm9icmV2ZQd1bmkxRUQxB3VuaTFFRDkHdW5pMUVEMwd1bmkxRUQ1B3VuaTFFRDcHdW5pMUVDRAd1bmkxRUNGBW9ob3JuB3VuaTFFREIHdW5pMUVFMwd1bmkxRUREB3VuaTFFREYHdW5pMUVFMQ1vaHVuZ2FydW1sYXV0B29tYWNyb24Lb3NsYXNoYWN1dGUGcmFjdXRlBnJjYXJvbgZzYWN1dGULc2NpcmN1bWZsZXgEdGJhcgZ0Y2Fyb24GdWJyZXZlB3VuaTAxRDQHdW5pMUVFNQd1bmkxRUU3BXVob3JuB3VuaTFFRTkHdW5pMUVGMQd1bmkxRUVCB3VuaTFFRUQHdW5pMUVFRg11aHVuZ2FydW1sYXV0B3VtYWNyb24HdW5pMDEyMwd1bmkwMTM3B3VuaTAxNDYHdW5pMDE1Nwd1bmkwMTYzB3VuaTAyMTkHdW5pMDIxQgd1b2dvbmVrBXVyaW5nBnV0aWxkZQZ3YWN1dGULd2NpcmN1bWZsZXgJd2RpZXJlc2lzBndncmF2ZQt5Y2lyY3VtZmxleAd1bmkxRUY1BnlncmF2ZQd1bmkxRUY3B3VuaTFFRjkGemFjdXRlCnpkb3RhY2NlbnQISV9KLmxpZ2EKZl9mX2kubGlnYQpmX2ZfbC5saWdhCGdfai5saWdhCGlfai5saWdhBGEuc2MJYWFjdXRlLnNjCWFicmV2ZS5zYwp1bmkwMUNFLnNjDmFjaXJjdW1mbGV4LnNjDGFkaWVyZXNpcy5zYwlhZ3JhdmUuc2MKYW1hY3Jvbi5zYwphb2dvbmVrLnNjCGFyaW5nLnNjCWF0aWxkZS5zYwVhZS5zYwRiLnNjBGMuc2MJY2FjdXRlLnNjCWNjYXJvbi5zYwtjY2VkaWxsYS5zYw1jZG90YWNjZW50LnNjBGQuc2MGZXRoLnNjCWRjYXJvbi5zYwlkY3JvYXQuc2MEZS5zYwllYWN1dGUuc2MJZWNhcm9uLnNjCnVuaTAyMjkuc2MOZWNpcmN1bWZsZXguc2MMZWRpZXJlc2lzLnNjDWVkb3RhY2NlbnQuc2MJZWdyYXZlLnNjCmVtYWNyb24uc2MKZW9nb25lay5zYwRmLnNjBGcuc2MJZ2JyZXZlLnNjDWdkb3RhY2NlbnQuc2MEaC5zYwdoYmFyLnNjBGkuc2MJaWFjdXRlLnNjDmljaXJjdW1mbGV4LnNjDGlkaWVyZXNpcy5zYwxpLnNjLmxvY2xUUksJaWdyYXZlLnNjBWlqLnNjCmltYWNyb24uc2MKaW9nb25lay5zYwRqLnNjBGsuc2MEbC5zYwlsYWN1dGUuc2MJbGNhcm9uLnNjCnVuaTAxM0Muc2MJbHNsYXNoLnNjBG0uc2MEbi5zYwluYWN1dGUuc2MJbmNhcm9uLnNjBmVuZy5zYwludGlsZGUuc2MEby5zYwlvYWN1dGUuc2MOb2NpcmN1bWZsZXguc2MMb2RpZXJlc2lzLnNjCW9ncmF2ZS5zYxBvaHVuZ2FydW1sYXV0LnNjCm9tYWNyb24uc2MJb3NsYXNoLnNjCW90aWxkZS5zYwVvZS5zYwRwLnNjCHRob3JuLnNjBHEuc2MEci5zYwlyYWN1dGUuc2MJcmNhcm9uLnNjBHMuc2MJc2FjdXRlLnNjCXNjYXJvbi5zYwtzY2VkaWxsYS5zYwR0LnNjB3RiYXIuc2MJdGNhcm9uLnNjCnVuaTAyMUIuc2MEdS5zYwl1YWN1dGUuc2MOdWNpcmN1bWZsZXguc2MMdWRpZXJlc2lzLnNjCXVncmF2ZS5zYxB1aHVuZ2FydW1sYXV0LnNjCnVtYWNyb24uc2MKdW9nb25lay5zYwh1cmluZy5zYwR2LnNjBHcuc2MJd2FjdXRlLnNjDndjaXJjdW1mbGV4LnNjDHdkaWVyZXNpcy5zYwl3Z3JhdmUuc2MEeC5zYwR5LnNjCXlhY3V0ZS5zYw55Y2lyY3VtZmxleC5zYwx5ZGllcmVzaXMuc2MJeWdyYXZlLnNjBHouc2MJemFjdXRlLnNjCXpjYXJvbi5zYw16ZG90YWNjZW50LnNjB3VuaTAzOTQHdW5pMDNBOQd1bmkwM0JDB3plcm8udGYGb25lLnRmBnR3by50Zgh0aHJlZS50Zgdmb3VyLnRmB2ZpdmUudGYGc2l4LnRmCHNldmVuLnRmCGVpZ2h0LnRmB25pbmUudGYJemVyby5kbm9tCG9uZS5kbm9tCHR3by5kbm9tCnRocmVlLmRub20JZm91ci5kbm9tCWZpdmUuZG5vbQhzaXguZG5vbQpzZXZlbi5kbm9tCmVpZ2h0LmRub20JbmluZS5kbm9tCXplcm8ubnVtcghvbmUubnVtcgh0d28ubnVtcgp0aHJlZS5udW1yCWZvdXIubnVtcglmaXZlLm51bXIIc2l4Lm51bXIKc2V2ZW4ubnVtcgplaWdodC5udW1yCW5pbmUubnVtcgd1bmkwMEI5B3VuaTAwQjIHdW5pMDBCMwd1bmkyMDc0B3VuaTIwNzUHdW5pMjA3Ngd1bmkyMDc3B3VuaTIwNzgHdW5pMjA3OQlvbmVlaWdodGgMdGhyZWVlaWdodGhzC2ZpdmVlaWdodGhzDHNldmVuZWlnaHRocwd1bmkwMEFEB3VuaTIwMTASaHlwaGVuX2h5cGhlbi5saWdhB3VuaTI3RTkHdW5pMDBBMARFdXJvB3VuaTIwQkEHdW5pMjBCRAd1bmkyMjE5B3VuaTIyMTUHdW5pMjEyNgd1bmkyMjA2B3VuaTAwQjUGbWludXRlBnNlY29uZAd1bmkyMTEzCWVzdGltYXRlZAd1bmkwMkJDB3VuaTAyQkIHdW5pMDJDOQd1bmkwMzA4B3VuaTAzMDcJZ3JhdmVjb21iCWFjdXRlY29tYgd1bmkwMzBCB3VuaTAzMDIHdW5pMDMwQwd1bmkwMzA2B3VuaTAzMEEJdGlsZGVjb21iB3VuaTAzMDQNaG9va2Fib3ZlY29tYgd1bmkwMzEyB3VuaTAzMTMHdW5pMDMxQgxkb3RiZWxvd2NvbWIHdW5pMDMyNgd1bmkwMzI3B3VuaTAzMjgHdW5pMDMzNQd1bmkwMzM2B3VuaTAzMzcHdW5pMDMzOAt1bmkwMzA2MDMwMQt1bmkwMzA2MDMwMAt1bmkwMzA2MDMwOQt1bmkwMzA2MDMwMwt1bmkwMzAyMDMwMQt1bmkwMzAyMDMwMAt1bmkwMzAyMDMwOQt1bmkwMzAyMDMwMwABAAAACgA4AHwAAkRGTFQAHmxhdG4ADgAEAAAAAP//AAMAAQADAAUABAAAAAD//wADAAAAAgAEAAZrZXJuADxrZXJuADxtYXJrADJtYXJrADJta21rACZta21rACYAAAAEAAUABgAHAAgAAAADAAIAAwAEAAAAAgAAAAEACTRyHE4ayBqmAegBlACYAHQAFAAGAgAAAQAIAAEBaABOAAEBDgAMAAgAPAA2ADAAKgAkAB4AGAASAAH+TAM8AAH+vgNXAAH+pwMwAAH/CQMIAAH+RgMyAAH+QAN1AAH+FQNNAAH+ZgNNAAIAAQKgAqcAAAAGAwAAAQAIAAEAFgAWAAEAEAAMAAEbXAABAAAbWAABAAECigAGAgAAAQAIAAEA5ABuAAEAigAMAAwAXABWAFAASgBEAD4AOAAyACwAJgAgABoAAQCvArwAAQEMAsQAAQBZArwAAQChArwAAQBkArwAAf+8ArwAAf6+At8AAf9pArwAAf9oAq4AAf9gArwAAf+DArwAAf+2ArwAAQAMAn4CfwKBAoMChQKHAokCkwKXApoCmwKfABYAABsOAAAbCAAAGwIAABr8AAAa9gAAGvAAABrqAAAa5AAAGt4AABrYAAAa0gAAGswAABrGAAAawAAAGpwAABqcAAAanAAAGpwAABqWAAAakAAAGpAAABqQAAIAAgJ8AokAAAKgAqcADgAGAQAAAQAIAAEAQgAmAAEAMAAMAAMAFAAOAAgAAQChAj4AAf/B/0gAAf+cAjwAAQADAogCiwKVAAQAABoSAAAaDAAAGgYAABoAAAIAAQKLAo4AAAAEAAAAAQAIAAEYpheQAAUYJAAMAa0Xfhd4GTAZMBkwF34XchkwGTAZMBd+F3gZMBkwGTAXfhdsGTAZMBkwF2YXYBkwGTAZMBd+F1oZMBkwGTAXfhdUGTAZMBkwF34XThkwGTAZMBd+F3gZMBkwGTAXfhdIGTAZMBkwF34XQhkwGTAZMBdmF0gZMBkwGTAXfhc8GTAZMBkwF34XNhkwGTAZMBd+FzAZMBkwGTAXfhd4GTAZMBkwF2YXeBkwGTAZMBd+FyoZMBkwGTAXfhckGTAZMBkwF34XeBkwGTAZMBd+F3gZMBkwGTAXfhd4GTAZMBkwF34XHhkwGTAZMBcYFxIZMBkwGTAXGBcMGTAZMBkwFxgXEhkwGTAZMBcYGTAZMBkwGTAXGBcGGTAZMBkwFxgXEhkwGTAZMBkwFwAZMBkwGTAZMBb6GTAZMBkwGTAXABkwGTAZMBkwFvoZMBkwGTAW9BbuGTAZMBkwFvQW6BkwGTAZMBb0Fu4ZMBkwGTAW9BkwGTAZMBkwFvQW4hkwGTAZMBb0FtwZMBkwGTAW1hbiGTAZMBkwFvQW0BkwGTAZMBb0FsoZMBkwGTAW9BbEGTAZMBkwFvQW7hkwGTAZMBb0Fu4ZMBkwGTAW1hbuGTAZMBkwFvQWvhkwGTAZMBb0FrgZMBkwGTAW9BbuGTAZMBkwFvQZMBkwGTAZMBb0FrIZMBkwGTAWrBamGTAZMBkwFqwWphkwGTAZMBasFqAZMBkwGTAWrBamGTAZMBkwGTAWmhaUGTAZMBkwFpoWlBkwGTAZMBaOFpQZMBkwFogWghkwGTAZMBaIFnwZMBkwGTAWiBZ2GTAZMBkwFogWghkwGTAZMBaIFoIZMBkwGTAWcBaCGTAZMBkwFogWahkwGTAZMBaIFmQZMBkwGTAWiBaCGTAZMBkwFl4WWBkwGTAZMBaIFlIZMBkwGTAZMBZMGTAZMBkwGTAWRhkwGTAZMBZAGTAZMBkwGTAWOhaCGTAZMBkwFjoWfBkwGTAZMBY6FjQZMBkwGTAWOhaCGTAZMBkwFi4WKBkwGTAZMBYiFhwZMBkwGTAWIhYWGTAZMBkwFiIWHBkwGTAZMBYiFhwZMBkwGTAWIhYQGTAZMBkwFgoWBBkwFf4ZMBYKFfgZMBX+GTAWChXyGTAV/hkwFgoV7BkwFf4ZMBXmFfIZMBX+GTAWChXgGTAV/hkwFgoV2hkwFf4ZMBYKFdQZMBX+GTAWChYEGTAV/hkwFeYWBBkwFf4ZMBYKFc4ZMBX+GTAWChXIGTAV/hkwFgoWBBkwFf4ZMBYKFfgZMBX+GTAV5hYEGTAV/hkwFgoVzhkwFf4ZMBYKFcgZMBX+GTAWChXCGTAV/hkwFgoWBBkwFf4ZMBYKFgQZMBX+GTAWChYEGTAV/hkwFgoVvBkwFf4ZMBkwFbYZMBkwGTAVsBWqGTAZMBkwFbAVpBkwGTAZMBWwFaoZMBkwGTAVnhWYGTAZMBkwFZ4VkhkwGTAZMBWeFZgZMBkwGTAVnhkwGTAZMBkwFZ4VjBkwGTAZMBkwFYYZMBkwGTAVgBV6GTAZMBkwFYAVehkwGTAZMBWAFXoZMBkwGTAVdBVuGTAVaBkwFXQVYhkwFWgZMBV0FVwZMBVoGTAVdBWkGTAVaBkwFXQVbhkwFWgZMBVWFW4ZMBVoGTAVdBVQGTAVaBkwFXQVShkwFWgZMBV0FW4ZMBVoGTAVdBViGTAVaBkwFVYVbhkwFWgZMBV0FVAZMBVoGTAVdBVKGTAVaBkwFXQXchkwFWgZMBV0FW4ZMBVoGTAVdBVuGTAVaBkwFXQZMBkwFWgZMBV0FW4ZMBVoGTAVdBdyGTAVaBkwGTAVRBkwGTAZMBkwFT4ZMBkwGTAZMBU4GTAZMBkwGTAVRBkwGTAZMBkwFTIZMBkwGTAVLBUmGTAZMBkwFSwVIBkwGTAZMBUsFRoZMBkwGTAVLBUmGTAZMBkwFRQVJhkwGTAZMBUsFQ4ZMBkwGTAVLBUIGTAZMBkwFSwVAhkwGTAZMBkwFPwZMBkwGTAZMBT2GTAZMBkwFPAU/BkwGTAZMBkwFPwZMBkwGTAWrBamGTAZMBkwFkAZMBkwGTAZMBYiFhwZMBkwGTAVsBWqGTAZMBkwFYAVehkwGTAZMBWeFZgZMBkwGTAVgBV6GTAZMBkwFOoU5BkwGTAZMBTqFXoZMBkwGTAU6hTkGTAZMBkwFOoU3hkwGTAZMBTYFNIZMBkwGTAU6hTMGTAZMBkwFOoUxhkwGTAZMBTqFMAZMBkwGTAU6hTkGTAZMBkwFOoUuhkwGTAZMBTqFLQZMBkwGTAU2BS6GTAZMBkwFOoUrhkwGTAZMBTqFKgZMBkwGTAU6hSiGTAZMBkwFOoU5BkwGTAZMBTYFOQZMBkwGTAU6hScGTAZMBkwFOoUlhkwGTAZMBTqFOQZMBkwGTAU6hkwGTAZMBkwFOoU5BkwGTAZMBTqFJAZMBkwGTAUihSEGTAZMBkwFIoUfhkwGTAZMBSKFIQZMBkwGTAUihkwGTAZMBkwFIoUeBkwGTAZMBSKFIQZMBkwGTAZMBRyGTAZMBkwFGwUZhkwGTAZMBRsFGAZMBkwGTAUbBRmGTAZMBkwFGwZMBkwGTAZMBRsFFoZMBkwGTAUbBRUGTAZMBkwFE4UWhkwGTAZMBRsFEgZMBkwGTAUbBRCGTAZMBkwFGwUPBkwGTAZMBRsFGYZMBkwGTAUbBRmGTAZMBkwFE4UZhkwGTAZMBRsFDYZMBkwGTAUbBQwGTAZMBkwFGwUZhkwGTAZMBRsGTAZMBkwGTAUbBQqGTAZMBkwFCQUHhkwGTAZMBkwFBgZMBkwGTAZMBQYGTAZMBkwGTAUEhkwGTAZMBkwFBIZMBkwGTAZMBQSGTAZMBkwGTAUDBkwGTAZMBkwFBIZMBkwGTAZMBQSGTAZMBkwGTAZMBkwGTAUBhkwGTAZMBkwFAYZMBQAGTAZMBQGGTAT+hkwGTAUBhP0E+4ZMBkwGTAZMBPoGTAZMBkwGTAT4hkwGTAZMBkwE9wZMBkwGTAZMBPWGTAZMBkwGTAT6BkwGTAZMBkwE+gZMBkwGTAT0BPuGTAZMBkwGTATyhkwGTAZMBkwE8QZMBkwGTAZMBO+GTAZMBkwGTAT6BkwGTAZMBkwE7gZMBkwGTAZMBOyGTAZMBkwGTATrBkwGTAZMBkwE6wZMBkwGTAZMBZYGTAZMBkwE6YZMBkwGTAZMBOmGTAZMBkwGTAZMBOgGTAZMBkwGTATmhkwGTAZMBkwE5QZMBkwGTAZMBOgGTAZMBkwGTATjhkwGTAZMBkwE4gZMBkwGTATghN8GTAZMBkwE4ITdhkwGTAZMBOCE3wZMBkwGTATghN8GTAZMBkwE4IUDBkwGTAZMBNwE2oZMBNkGTATcBNeGTATZBkwE3ATWBkwE2QZMBNwE1IZMBNkGTATcBNMGTATZBkwE0YTUhkwE2QZMBNwE0AZMBNkGTATcBM6GTATZBkwE3ATNBkwE2QZMBNwE2oZMBNkGTATRhNqGTATZBkwE3ATLhkwE2QZMBNwEygZMBNkGTATcBNqGTATIhkwE3ATXhkwEyIZMBNGE2oZMBMiGTATcBMuGTATIhkwE3ATKBkwEyIZMBNwExwZMBMiGTATcBNqGTATZBkwE3ATahkwE2QZMBMWExAZMBMKGTATFhMEGTATChkwE3AS/hkwE2QZMBL4EvIZMBkwGTAS+BLsGTAZMBkwEvgS8hkwGTAZMBLmEuAZMBkwGTAS5hT8GTAZMBkwEuYS4BkwGTAZMBLmGTAZMBkwGTAS5hLaGTAZMBkwEtQSzhkwGTAZMBLUEs4ZMBkwGTAS1Bd4GTAZMBkwEsgTEBkwEsIZMBLIErwZMBLCGTASyBK2GTASwhkwEsgTEBkwEsIZMBLIFCoZMBLCGTASyBMQGTASwhkwErATEBkwEsIZMBLIEqoZMBLCGTASyBKkGTASwhkwEsgTEBkwEp4ZMBLIErwZMBKeGTASsBMQGTASnhkwEsgSqhkwEp4ZMBLIEqQZMBKeGTASyBKYGTASnhkwEsgTEBkwEsIZMBLIExAZMBLCGTAZMBQSGTAZMBkwE6YZMBkwGTAZMBOCE3wZMBkwGTAS+BLyGTAZMBkwEtQZMBkwGTAZMBLmEuAZMBkwGTAS1BLOGTAZMBkwEsgZMBkwEsIZMBLIExAZMBLCGTASyBKYGTASwhkwGTASkhkwGTAZMBkwEowZMBkwGTAZMBKGGTAZMBkwGTASkhkwGTAZMBkwEoAZMBkwGTASehJ0GTAZMBkwEnoSbhkwGTAZMBJ6EmgZMBkwGTASehJ0GTAZMBkwEmISdBkwGTAZMBJ6ElwZMBkwGTASehJWGTAZMBkwEnoSUBkwGTAZMBkwEkoZMBkwGTAZMBJEGTAZMBkwEj4SShkwGTAZMBkwEkoZMBkwGTAZMBI4GTAZMBkwGTASMhkwGTAZMBkwEiwZMBkwGTAZMBI4GTAZMBkwGTASJhkwGTAZMBkwEjgZMBkwGTAZMBIgGTAZMBkwGTASOBkwGTAZMBkwEjgZMBkwGTAZMBI4GTAZMBkwGTASGhkwGTAZMBIUEg4ZMBkwGTASFBIIGTAZMBkwEhQSDhkwGTAZMBIUGTAZMBkwGTASFBIOGTAZMBkwGTASAhkwGTAZMBkwEfwZMBkwGTAZMBICGTAZMBkwGTAR/BkwGTAZMBH2EfAZMBkwGTAR9hHqGTAZMBkwEfYR8BkwGTAZMBH2GTAZMBkwGTAR9hHkGTAZMBkwEfYR8BkwGTAZMBH2EfAZMBkwGTAR9hHeGTAZMBkwEfYR8BkwGTAZMBH2GTAZMBkwGTAR2BHSGTAZMBkwEdgRzBkwGTAZMBHYEdIZMBkwGTAZMBkwEcYZMBkwGTAZMBHGGTAZMBkwEcAZMBkwGTAZMBG6GTAZMBkwGTARtBkwGTAZMBkwEcAZMBkwGTAZMBHAGTAZMBkwGTARrhkwGTAZMBkwEcAZMBkwGTAZMBHAGTAZMBkwGTARwBkwGTAZMBNwGTAZMBkwGTARqBGiGTAZMBkwEagRnBkwGTAZMBkwEZYZMBkwGTARqBGiGTAZMBkwEZARihkwGTAZMBGEEX4ZMBkwGTARhBF4GTAZMBkwEYQRfhkwGTAZMBGEEX4ZMBkwGTARhBFyGTAZMBkwGTARbBkwGTAZMBkwEWYZMBkwGTAZMBFgGTAZMBkwGTARbBkwGTAZMBkwEVoZMBkwGTAZMBFsGTAZMBkwGTARbBkwGTAZMBkwEWwZMBkwGTAZMBFUGTAZMBkwGTARThkwGTAZMBFIEUIZMBkwGTARSBE8GTAZMBkwEUgRQhkwGTAZMBE2ETAZMBkwGTARNhEqGTAZMBkwETYRMBkwGTAZMBE2GTAZMBkwGTARJBEeGTAZMBkwESQRHhkwGTAZMBEkER4ZMBkwGTARJBEeGTAZMBkwERgREhkwGTAZMBEYEQwZMBkwGTARGBEGGTAZMBkwERgREhkwGTAZMBEYEQAZMBkwGTARGBESGTAZMBkwERgREhkwGTAZMBEYGTAZMBkwGTARGBESGTAZMBkwGTAQ+hkwGTAZMBkwEPQZMBkwGTAZMBDuGTAZMBkwGTAQ+hkwGTAZMBkwEOgZMBkwGTAZMBDiGTAZMBkwGTAQ3BkwGTAZMBkwENYZMBkwGTAZMBDiGTAZMBkwGTAQ0BkwGTAZMBkwEMoZMBkwGTAZMBDEGTAZMBkwGTAQyhkwGTAZMBkwEMoZMBkwGTAAAQD/Aw4AAQDmAkwAAQDNAwIAAQD4AwIAAQERAwIAAQD5AkAAAQFRAwMAAQF8AwMAAQGV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AAb/rwAH/68ACP+vAAn/rwAK/68AC/+vAAz/rwAN/68ADv+vAA//rwAQ/68AEf+vABL/rwAT/68AFP+vABX/rwAW/68AF/+vABj/rwAZ/68AGv+vABv/rwAc//IAHf/mAB7/5gAf/+YAIP/mACL/5gAj//IAJf/yACf/8gAo//IAKf/yACr/8gAr//IALP/yAC3/8gAu//IAL//yADD/8gAx//IAMv/yADP/8gA0//IANf/yADb/8gA3//IAOP/yADn/8gA6/+YAO//mAD3/5gBM/+QAVf/yAFn/8gBa/+YAW//mAFz/5gBd/+YAXv/mAF//5gBg/+YAYf/mAGL/5gBj/+YAZP/mAGX/5gBm/+YAZ//mAGj/5gBp/+YAav/mAGv/5gBs/+YAbf/mAG//5gBw/+YAcf/yAHP/5gB3//QAeP/0AHn/9AB6//QAfP/CAKb/5gCt/9MArv/TAK//0wCw/9MAsf/TALL/0wCz/9MAtP/TALX/0wC2/9MAt//TALj/0wC5/9MAuv/TALv/0wC8/9MAvf/TAL7/0wC//9MAwP/TAMH/0wDC/9MAw//TAMT/0wDG/8IAx//CAMj/wgDJ/8IAy//CAMz/wgDN/8IAzv/CAM//wgDQ/8IA0f/CANL/wgDT/8IA1P/CANX/wgDW/8IA1//CANj/wgDZ/8IA2v/CANv/wgDc/8IA3f/CAN7/wgDf/8IA4P/CAOH/wgDl/+MA5v+8AOf/vAEJ/9IBCv/SAQv/0gEM/9IBDf/SAQ//wgEQ/8IBEv/CARP/wgEU/8IBFf/CARb/wgEX/8IBGP/CARn/wgEa/8IBG//CARz/wgEd/8IBHv/CAR//wgEg/8IBIf/CASL/wgEj/8IBJP/CASb/wgEn/8IBKP/SASn/0gEq/7wBK//SASz/0gEt/9IBLv/pAS//6QEw/+kBMf/pATP/8gE0/+MBNf/jATb/4wE3/+MBOP/jATv/4wE8/+MBPf/jAT7/4wE//+MBQP/jAUH/4wFC/+MBQ//jAUT/4wFF/+MBRv/jAUf/4wFI/7wBSv/SAUv/0gFM/+MBTf/pAU7/4wFP/+MBUP/jAVH/4wFS/98BU//fAVT/3wFV/98BVv/fAVf/3wFY/+MBWf/fAVr/3wFb/98BXP/fAV3/3wFe/98BX//fAWD/3wFh//QBYv/0AWP/9AFk//QBaP/j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)
    format('truetype');
}
`;let G6=!1;function H0(){if(G6)return;G6=!0;const A=document.createElement("style");A.innerHTML=Jr,document.body.appendChild(A)}H0();const v2=document.createElement("canvas"),P6=v2.getContext("2d");v2.width=1920;v2.height=1080;if(P6){const A=v2,l=P6,e=A.width,t=A.height;l.beginPath(),l.strokeStyle="#888",l.fillStyle="#888",l.lineWidth=3,l.arc(1920/2,1080/2,1080/2,0,Math.PI*2),l.moveTo(e/3,0),l.lineTo(e/3,t),l.moveTo(2*e/3,0),l.lineTo(2*e/3,t),l.moveTo(0,t/3),l.lineTo(e,t/3),l.moveTo(0,2*t/3),l.lineTo(e,2*t/3),l.moveTo(e/2-8,t/2),l.lineTo(e/2+8,t/2),l.moveTo(e/2,t/2-8),l.lineTo(e/2,t/2+8),l.stroke(),l.beginPath(),l.lineWidth=2,l.strokeStyle="#88888844",l.moveTo(0,t/2),l.lineTo(e,t/2),l.moveTo(e/2,0),l.lineTo(e/2,t),l.stroke(),l.lineWidth=2,l.strokeStyle="#888",l.beginPath(),l.setLineDash([16,16]);const n=1.61803398875;l.moveTo(e/n,0),l.lineTo(e/n,t),l.moveTo(e-e/n,0),l.lineTo(e-e/n,t),l.moveTo(0,t/n),l.lineTo(e,t/n),l.moveTo(0,t-t/n),l.lineTo(e,t-t/n),l.stroke(),l.beginPath(),l.lineWidth=.5,l.setLineDash([2,6]),l.strokeStyle="#88888811";const i=48;for(let s=1;s<i;s++)for(let r=1;r<i/16*9;r++)l.moveTo(s/i*e,0),l.lineTo(s/i*e,t),l.moveTo(0,r/(i/16*9)*t),l.lineTo(e,r/(i/16*9)*t);l.stroke(),l.font="24px Barlow",l.textAlign="left",l.fillText("Golden ratio",16,656),l.fillText("Thirds",16,710)}const $7=new H3(v2);$7.needsUpdate=!0;$7.encoding=P4;H0();const d5=document.createElement("canvas"),dl=d5.getContext("2d");if(dl){d5.width=360*window.devicePixelRatio,d5.height=360*window.devicePixelRatio,dl.scale(window.devicePixelRatio,window.devicePixelRatio),dl.strokeStyle="#232f40",dl.font="16px Barlow",dl.textAlign="left",dl.textBaseline="top",dl.fillStyle=Sl.slate._400,dl.shadowColor="#232f4088",dl.shadowBlur=2,dl.shadowOffsetX=0,dl.shadowOffsetY=1,dl.fillText("GPU",8,8),dl.fillStyle=Sl.fuchsia._500,dl.fillText("Memory",8,144);const A=276,l=18;dl.fillStyle=Sl.slate._400,dl.fillText("render",8,A),dl.fillStyle=Sl.sky._500,dl.fillText("update",8,A+l)}const K0=new H3(d5);K0.encoding=P4;const z6="srgb",y7="srgb-linear";function Zr(A){return A<.04045?A*.0773993808:Math.pow(A*.9478672986+.0521327014,2.4)}function Xr(A){return A<.0031308?A*12.92:1.055*Math.pow(A,.41666)-.055}const h7={[z6]:{[y7]:Zr},[y7]:{[z6]:Xr}},$r={legacyMode:!0,get workingColorSpace(){return y7},set workingColorSpace(A){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(A,l,e){if(this.legacyMode||l===e||!l||!e)return A;if(h7[l]&&h7[l][e]!==void 0){const t=h7[l][e];return A.r=t(A.r),A.g=t(A.g),A.b=t(A.b),A}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(A,l){return this.convert(A,this.workingColorSpace,l)},toWorkingColorSpace:function(A,l){return this.convert(A,l,this.workingColorSpace)}},lo={volume:1};function O0(A){return`renin-${A}`}function eo(A){const l=localStorage[O0(A)];return l!==void 0?JSON.parse(l):lo[A]}function to(A,l){localStorage[O0(A)]=JSON.stringify(l)}class z1{constructor(l){U(this,"startFrame",0);U(this,"endFrame",-1);U(this,"isActive",!1);U(this,"children");U(this,"id");U(this,"renin");this.id=this.constructor.name+"-"+(1e6*Math.random()|0),this.renin=l,console.log("new",this.id)}update(l){}render(l,e,t){}resize(l,e){}_update(l){if(this.isActive=!(l<this.startFrame||l>=this.endFrame&&this.endFrame!==-1),!!this.isActive){if("children"in this)for(const e of Object.values(this.children||{}))e._update(l);this.update(l)}}_render(l,e,t){if(l<this.startFrame||l>=this.endFrame&&this.endFrame!==-1)return;if("children"in this)for(const i of Object.values(this.children||{}))i._render(l,e,t);const n=e.getRenderTarget();this.render(l,e,t),e.setRenderTarget(n)}_resize(l,e){if("children"in this)for(const t of Object.values(this.children||{}))t._resize(l,e);this.resize(l,e)}}const Pl=Kr,i5=128+32,s5=24*6;Or();const e8=class{constructor(l){U(this,"width",1);U(this,"height",1);U(this,"audioBar");U(this,"music",new Vr);U(this,"sync");U(this,"frame",0);U(this,"oldTime",0);U(this,"time",0);U(this,"dt",0);U(this,"cuePoints",[]);U(this,"uiNeedsRender",!0);U(this,"devicePixelRatio",window.devicePixelRatio);U(this,"renderTimesCPU",[...new Array(128)].map(()=>0));U(this,"renderTimesCPUIndex",0);U(this,"renderTimesGPU",[...new Array(128)].map(()=>0));U(this,"renderTimesGPUIndex",0);U(this,"renderer");U(this,"screen",new I3({shadowSize:16,customMaterial:new $4({fragmentShader:jr,vertexShader:Pl,uniforms:{screen:{value:null},thirdsOverlay:{value:null},thirdsOverlayOpacity:{value:0}}})}));U(this,"screenBackdrop",new I3({shadowSize:0}));U(this,"framePanel",new I3({shadowSize:16}));U(this,"performancePanel",new I3({shadowSize:16,customMaterial:new $4({fragmentShader:Wr,vertexShader:Pl,uniforms:{renderTimesGPU:{value:[]},renderTimesGPUIndex:{value:0},renderTimesCPU:{value:[]},renderTimesCPUIndex:{value:0},updateTimes:{value:[]},updateTimesIndex:{value:0},uiUpdateTimes:{value:[]},uiUpdateTimesIndex:{value:0},memoryPercentages:{value:[]},memoryPercentagesIndex:{value:0},totalJSHeapSize:{value:0},jsHeapSizeLimit:{value:0},overlay:{value:null}}})}));U(this,"scene",new P1);U(this,"camera",new C1(-1,1,1,-1));U(this,"root");U(this,"screenRenderTarget",new wl(640,360,{type:Rl}));U(this,"isFullscreen",!1);U(this,"fullscreenAnimation",new Y0);U(this,"uiOldTime",Date.now()/1e3);U(this,"uiTime",Date.now()/1e3);U(this,"uiDt",0);U(this,"framePanelCanvas");U(this,"framePanelTexture");U(this,"query",null);U(this,"updateTimes",[...new Array(128)].map(()=>0));U(this,"updateTimesIndex",0);U(this,"uiUpdateTimes",[...new Array(128)].map(()=>0));U(this,"uiUpdateTimesIndex",0);U(this,"memoryPercentages",[...new Array(128)].map(()=>0));U(this,"memoryPercentagesIndex",0);U(this,"queryIsActive",!1);U(this,"options");U(this,"needsSkipBecauseTabHasBeenInTheBackground",!1);U(this,"loop",()=>{requestAnimationFrame(this.loop),this.oldTime=this.time,this.time=this.music.getCurrentTime(),this.dt+=this.time-this.oldTime,this.uiOldTime=this.uiTime,this.uiTime=Date.now()/1e3,this.uiDt+=this.uiTime-this.uiOldTime;let l=!1;const e=1/60;for(this.needsSkipBecauseTabHasBeenInTheBackground&&(this.needsSkipBecauseTabHasBeenInTheBackground=!1,this.jumpToFrame(this.time*60|0),this.dt=0,this.uiDt%=e);this.dt>=e;)this.dt-=e,this.update(this.frame),this.frame++,l=!0,this.cuePoints.length===2&&this.frame>=this.cuePoints[1]&&this.jumpToFrame(this.cuePoints[0]);for(;this.uiDt>=e;)this.uiDt-=e,this.uiNeedsRender||(this.uiNeedsRender=this.uiUpdate());l&&this.render(),this.uiNeedsRender||(this.uiNeedsRender=l),this.uiNeedsRender&&(this.uiRender(),this.uiNeedsRender=!1)});e8.instance=this,$r.legacyMode=!1,this.options=l,this.isFullscreen=this.options.productionMode,this.renderer=new Q0(l.rendererOptions),this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=t1,this.root=new l.root(this),this.audioBar=new Yr(this),document.addEventListener("visibilitychange",()=>{document.hidden||(this.needsSkipBecauseTabHasBeenInTheBackground=!0)}),document.getElementsByTagName("body")[0].appendChild(this.renderer.domElement),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="0px",this.renderer.domElement.style.left="0px",this.renderer.domElement.style.right="0px",this.renderer.domElement.style.bottom="0px",this.sync=new Hr(l.music),this.renderer.domElement.addEventListener("wheel",t=>{if(t.preventDefault(),Math.abs(t.deltaY)>Math.abs(t.deltaX)){const n=Math.max(0,1-t.deltaY/1e3),i=t.screenX-16,s=window.innerWidth-32;this.audioBar.zoom(n,j3(0,i/s,1))}else{const n=t.deltaX/1e3;this.audioBar.pan(n)}this.uiNeedsRender=!0}),this.renderer.domElement.addEventListener("click",t=>{if(this.isFullscreen)return;this.music.audioContext.resume();const n=s1(),i=16,s=p1();let r=1;const o=h=>{if(r++,"children"in h&&h.children)for(const d of Object.values(h.children))o(d)};o(this.root);const a=48+r*48+8,m=s-i*2,c=(t.clientX-i)/m;if(t.clientY>n-a-i&&c>=0&&c<=1){const h=this.audioBar.getClickedFrame(c),d=this.sync.music.subdivision*(this.music.paused?1:4);let q=((this.sync.stepForFrame(h)+this.sync.music.subdivision)/d|0)*d;this.jumpToFrame(this.sync.frameForStep(q))}}),this.scene.add(this.screen.object3d),this.scene.add(this.framePanel.object3d),this.scene.add(this.performancePanel.object3d),this.scene.add(this.screenBackdrop.object3d),this.scene.add(this.camera),this.screen.object3d.scale.x=640,this.screen.object3d.scale.y=360,this.framePanelCanvas=document.createElement("canvas"),this.framePanelTexture=new H3(this.framePanelCanvas),this.framePanel.setTexture(this.framePanelTexture,!0),this.framePanelTexture.encoding=P4,this.scene.add(this.audioBar.obj),this.music.setVolume(eo("volume")),(async()=>{const n=await(await fetch(l.music.src)).arrayBuffer(),i=await this.music.audioContext.decodeAudioData(n);this.music.setBuffer(i),this.audioBar.setMusic(this.music,i,l.music),this.resize(p1(),s1())})(),this.camera.position.z=100,this.resize(p1(),s1()),window.addEventListener("resize",()=>{this.uiNeedsRender=!0,this.music.audioContext.resume(),this.resize(p1(),s1())}),document.addEventListener("keydown",t=>{this.uiNeedsRender=!0,this.music.audioContext.resume();const n=this.music.paused?0:20;if(t.key==="s"&&navigator.clipboard.writeText(""+this.sync.stepForFrame(this.frame)),t.key==="f"&&navigator.clipboard.writeText(""+this.frame),t.key==="m"){const s=this.music.getVolume()===1?0:1;to("volume",s),this.music.setVolume(s)}if(t.key==="o"&&(this.screen.getMaterial().uniforms.thirdsOverlayOpacity.value=this.screen.getMaterial().uniforms.thirdsOverlayOpacity.value===1?0:1),t.key==="Enter"&&(this.isFullscreen=!this.isFullscreen,this.resize(p1(),s1())),t.key===" "&&(this.music.paused?this.music.play():this.music.pause()),t.key==="v"){if(this.cuePoints.length>=2){this.cuePoints=[];return}const s=this.sync.stepForFrame(this.frame),r=s-s%this.sync.music.subdivision;this.cuePoints=[this.sync.frameForStep(r),this.sync.frameForStep(r+this.sync.music.subdivision)]}if(t.key==="b"){if(this.cuePoints.length>=2){this.cuePoints=[];return}const s=this.sync.stepForFrame(this.frame),r=s-s%(this.sync.music.subdivision*this.sync.music.beatsPerBar);this.cuePoints=[this.sync.frameForStep(r),this.sync.frameForStep(r+this.sync.music.subdivision*this.sync.music.beatsPerBar)]}if(t.key==="n"){if(this.cuePoints.length>=2){this.cuePoints=[];return}const s=this.options.music.beatOffset*this.sync.music.subdivision,r=this.sync.stepForFrame(this.frame)-s,o=r-r%(this.sync.music.subdivision*this.sync.music.beatsPerBar*4)+s;this.cuePoints=[this.sync.frameForStep(o),this.sync.frameForStep(o+this.sync.music.subdivision*this.sync.music.beatsPerBar*4)]}if(t.key==="g"){const s=this.sync.stepForFrame(this.frame),r=s-s%this.sync.music.subdivision;this.cuePoints.length<2?this.cuePoints.push(this.sync.frameForStep(r)):this.cuePoints=[]}if(t.key==="J"&&this.jumpToFrame(this.frame-1),t.key==="K"&&this.jumpToFrame(this.frame+1),t.key==="h"){const s=this.sync.music.subdivision*4,r=this.sync.stepForFrame(this.frame-n);let o=(r/s|0)*s;o===r&&(o-=s),this.jumpToFrame(this.sync.frameForStep(o))}if(t.key==="l"){const s=this.sync.music.subdivision*4,r=this.sync.stepForFrame(this.frame);let o=(r/s|0)*s;o+=s,o===r&&(o+=s),this.jumpToFrame(this.sync.frameForStep(o))}if(t.key==="j"){const s=this.sync.music.subdivision*1,r=this.sync.stepForFrame(this.frame-n);let o=(r/s|0)*s;o===r&&(o-=s),this.jumpToFrame(this.sync.frameForStep(o))}if(t.key==="k"){const s=this.sync.music.subdivision*1,r=this.sync.stepForFrame(this.frame);let o=(r/s|0)*s;o+=s,o===r&&(o+=s),this.jumpToFrame(this.sync.frameForStep(o))}t.key==="H"&&this.jumpToFrame(0);const i={6:.25,7:.5,8:2,9:4,0:1};t.key in i&&this.music.setPlaybackRate(i[t.key])})}resize(l,e){this.width=l,this.height=e,this.renderer.setSize(l,e),this.renderer.setPixelRatio(this.devicePixelRatio),this.camera.left=-l/2,this.camera.right=l/2,this.camera.top=e/2,this.camera.bottom=-e/2,this.camera.updateProjectionMatrix(),this.audioBar.resize(l,e);let t=this.options.maxWidth?Math.min(l,this.options.maxWidth):l,n=t/16*9;n>e&&(n=this.options.maxHeight?Math.min(e,this.options.maxHeight):e,t=n/9*16),this.isFullscreen||(t=640,n=360),this.screenRenderTarget.setSize(t,n),this.fullscreenAnimation.transition(this.isFullscreen?1:0,.15,this.uiTime),this.root._resize(t,n),this.render(),this.uiUpdate(),this.uiRender()}register(l){const e=new l(this);function t(i){if("children"in i&&i.children)for(const[s,r]of Object.entries(i.children)){const o=t(r);o&&(i.children[s]=o)}return e.constructor.name===i.constructor.name?(e.children=i.children,e):null}const n=t(this.root);n&&(this.root=n),e.resize(this.screenRenderTarget.width,this.screenRenderTarget.height),setTimeout(()=>this.jumpToFrame(this.frame),0)}jumpToFrame(l){this.frame=l,this.music.setCurrentTime(l/60),this.time=l/60,this.oldTime=this.time,this.dt=0,this.update(l),this.uiUpdate(),this.render(),this.uiRender()}update(l){const e=performance.now();this.sync.update(l),this.root._update(l);const t=performance.now()-e;this.music.paused||(this.updateTimes[this.updateTimesIndex]=t,this.updateTimesIndex=(this.updateTimesIndex+1)%this.updateTimes.length)}uiUpdate(){if(this.options.productionMode)return!1;let l=!1;const e=performance.now();l||(l=this.fullscreenAnimation.update(this.uiTime)),l||(l=this.audioBar.update(this.uiTime));let t=this.width,n=t/16*9;n>this.height&&(n=this.height,t=n/9*16);const i=gl(this.width-640-16,(this.width-t)/2,this.fullscreenAnimation.value),s=gl(this.width-16,t+(this.width-t)/2,this.fullscreenAnimation.value),r=gl(16,(this.height-n)/2,this.fullscreenAnimation.value),o=gl(360+16,n+(this.height-n)/2,this.fullscreenAnimation.value);if(this.screen.setSize(gl(640,s-i,this.fullscreenAnimation.value),gl(360,o-r,this.fullscreenAnimation.value)),this.screen.object3d.position.x=gl(p1()/2-this.screen.object3d.scale.x/2-16,p1()/2-this.screen.object3d.scale.x/2-(this.width-s),this.fullscreenAnimation.value),this.screen.object3d.position.y=gl(s1()/2-this.screen.object3d.scale.y/2-16,s1()/2-this.screen.object3d.scale.y/2-r,this.fullscreenAnimation.value),this.screen.object3d.position.z=90,this.screenBackdrop.object3d.position.z=89,this.screenBackdrop.setSize(this.width*2,this.height*2),this.screenBackdrop.getMaterial().opacity=this.fullscreenAnimation.value**4,this.screenBackdrop.getMaterial().transparent=!0,this.screenBackdrop.getMaterial().color.setRGB(0,0,0),this.screenBackdrop.getMaterial().needsUpdate=!0,this.fullscreenAnimation.value>.9999)return l;const a=performance.now()-e;return this.music.paused||(l=!0,this.uiUpdateTimes[this.uiUpdateTimesIndex]=a,this.uiUpdateTimesIndex=(this.uiUpdateTimesIndex+1)%this.uiUpdateTimes.length),l}uiRender(){if(this.options.productionMode)return;this.framePanel.setSize(i5,s5),this.framePanel.object3d.position.x=-p1()/2+16+i5/2,this.framePanel.object3d.position.y=s1()/2-16-s5/2,this.framePanel.object3d.position.z=50,this.performancePanel.setSize(360,360),this.performancePanel.object3d.position.x=p1()/2-16-640-16-360/2,this.performancePanel.object3d.position.y=s1()/2-16-360/2,this.performancePanel.object3d.position.z=50;const l=this.framePanelCanvas.getContext("2d");if(l){const t=l,n=this.framePanelCanvas;n.width=i5*window.devicePixelRatio,n.height=s5*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio),t.fillStyle=Sl.slate._500,t.fillRect(0,0,n.width,n.height);const i=this.sync.stepForFrame(this.frame),s=this.music.getCurrentTime(),r=[["Bar",i/this.options.music.subdivision/this.options.music.beatsPerBar|0],["Beat",i/this.options.music.subdivision|0],["Step",i],["Frame",this.frame],["Time",`${s/60|0}m${(s%60|0).toString().padStart(2,"0")}s`]];t.font="16px Barlow",t.translate(0,s5/2),t.textBaseline="middle";for(let[o,[a,m]]of r.entries()){const c=""+m,h=(o-(r.length-1)/2)*24;t.textAlign="center",t.fillStyle=Sl.slate._100;let d=0;for(let f=0;f<c.length;f++){const q=c[c.length-f-1],u=q==="m"?16:9;t.fillText(q,i5-16-d-u/2,h),d+=u}t.textAlign="left",t.fillStyle=Sl.slate._300,t.fillText(a,16,h)}}this.framePanelTexture.needsUpdate=!0,this.screen.getMaterial().uniforms.screen.value=this.screenRenderTarget.texture,this.screen.getMaterial().uniforms.thirdsOverlay.value=$7,this.screen.getMaterial().uniformsNeedUpdate=!0,this.scene.background=new g4(Sl.gray._700),this.fullscreenAnimation.value<.9999&&this.audioBar.render(this,this.cuePoints),this.renderer.setRenderTarget(null),this.performancePanel.getMaterial().uniforms.renderTimesCPU.value=this.renderTimesCPU,this.performancePanel.getMaterial().uniforms.renderTimesCPUIndex.value=this.renderTimesCPUIndex,this.performancePanel.getMaterial().uniforms.updateTimes.value=this.updateTimes,this.performancePanel.getMaterial().uniforms.updateTimesIndex.value=this.updateTimesIndex,this.performancePanel.getMaterial().uniforms.uiUpdateTimes.value=this.uiUpdateTimes,this.performancePanel.getMaterial().uniforms.uiUpdateTimesIndex.value=this.uiUpdateTimesIndex,this.performancePanel.getMaterial().uniforms.memoryPercentages.value=this.memoryPercentages,this.performancePanel.getMaterial().uniforms.memoryPercentagesIndex.value=this.memoryPercentagesIndex;try{this.performancePanel.getMaterial().uniforms.totalJSHeapSize.value=performance.memory.totalJSHeapSize,this.performancePanel.getMaterial().uniforms.jsHeapSizeLimit.value=performance.memory.jsHeapSizeLimit}catch{}this.performancePanel.getMaterial().uniforms.overlay.value=K0,this.performancePanel.getMaterial().uniformsNeedUpdate=!0;const e=this.renderer.outputEncoding;this.renderer.outputEncoding=P4,this.renderer.render(this.scene,this.camera),this.renderer.outputEncoding=e}render(){if(this.options.productionMode){this.renderer.setRenderTarget(null);const s=this.renderer.outputEncoding,r=this.renderer.toneMapping;this.renderer.toneMapping=this.options.toneMapping,this.renderer.outputEncoding=P4,this.root._render(this.frame,this.renderer,this),this.renderer.outputEncoding=s,this.renderer.toneMapping=r;return}const l=performance.now();this.performancePanel.getMaterial().uniforms.renderTimesGPU.value=this.renderTimesGPU,this.performancePanel.getMaterial().uniforms.renderTimesGPUIndex.value=this.renderTimesGPUIndex,this.performancePanel.getMaterial().needsUpdate=!0;const e=this.renderer.getContext(),t=e.getExtension("EXT_disjoint_timer_query_webgl2");if(t)if(this.query){if(e.getQueryParameter(this.query,e.QUERY_RESULT_AVAILABLE)){const r=e.getQueryParameter(this.query,e.QUERY_RESULT);this.renderTimesGPU[this.renderTimesGPUIndex]=r/1e6,this.renderTimesGPUIndex=(this.renderTimesGPUIndex+1)%this.renderTimesGPU.length,this.query=e.createQuery(),this.query&&(e.beginQuery(t.TIME_ELAPSED_EXT,this.query),this.queryIsActive=!0)}}else this.query=e.createQuery(),this.query&&(e.beginQuery(t.TIME_ELAPSED_EXT,this.query),this.queryIsActive=!0);this.renderer.setRenderTarget(this.screenRenderTarget);const n=this.renderer.toneMapping;this.renderer.toneMapping=this.options.toneMapping,this.root._render(this.frame,this.renderer,this),this.renderer.toneMapping=n;const i=performance.now()-l;this.music.paused||(this.renderTimesCPU[this.renderTimesCPUIndex]=i,this.renderTimesCPUIndex=(this.renderTimesCPUIndex+1)%this.renderTimesCPU.length);try{this.memoryPercentages[this.memoryPercentagesIndex]=performance.memory.usedJSHeapSize,this.memoryPercentagesIndex=(this.memoryPercentagesIndex+1)%this.memoryPercentages.length}catch{}this.query&&this.queryIsActive&&(e.endQuery(t.TIME_ELAPSED_EXT),this.queryIsActive=!1)}};let m5=e8;U(m5,"instance");class no extends V3{constructor(l){super(l),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new oo(e)}),this.register(function(e){return new fo(e)}),this.register(function(e){return new go(e)}),this.register(function(e){return new mo(e)}),this.register(function(e){return new co(e)}),this.register(function(e){return new ho(e)}),this.register(function(e){return new uo(e)}),this.register(function(e){return new ro(e)}),this.register(function(e){return new qo(e)}),this.register(function(e){return new ao(e)}),this.register(function(e){return new so(e)}),this.register(function(e){return new po(e)}),this.register(function(e){return new xo(e)})}load(l,e,t,n){const i=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=i3.extractUrlBase(l),this.manager.itemStart(l);const r=function(a){n?n(a):console.error(a),i.manager.itemError(l),i.manager.itemEnd(l)},o=new W7(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(l,function(a){try{i.parse(a,s,function(m){e(m),i.manager.itemEnd(l)},r)}catch(m){r(m)}},t,r)}setDRACOLoader(l){return this.dracoLoader=l,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(l){return this.ktx2Loader=l,this}setMeshoptDecoder(l){return this.meshoptDecoder=l,this}register(l){return this.pluginCallbacks.indexOf(l)===-1&&this.pluginCallbacks.push(l),this}unregister(l){return this.pluginCallbacks.indexOf(l)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(l),1),this}parse(l,e,t,n){let i;const s={},r={};if(typeof l=="string")i=JSON.parse(l);else if(l instanceof ArrayBuffer)if(i3.decodeText(new Uint8Array(l,0,4))===V0){try{s[N4.KHR_BINARY_GLTF]=new Bo(l)}catch(m){n&&n(m);return}i=JSON.parse(s[N4.KHR_BINARY_GLTF].content)}else i=JSON.parse(i3.decodeText(new Uint8Array(l)));else i=l;if(i.asset===void 0||i.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const o=new Fo(i,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});o.fileLoader.setRequestHeader(this.requestHeader);for(let a=0;a<this.pluginCallbacks.length;a++){const m=this.pluginCallbacks[a](o);r[m.name]=m,s[m.name]=!0}if(i.extensionsUsed)for(let a=0;a<i.extensionsUsed.length;++a){const m=i.extensionsUsed[a],c=i.extensionsRequired||[];switch(m){case N4.KHR_MATERIALS_UNLIT:s[m]=new Ao;break;case N4.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[m]=new Eo;break;case N4.KHR_DRACO_MESH_COMPRESSION:s[m]=new wo(i,this.dracoLoader);break;case N4.KHR_TEXTURE_TRANSFORM:s[m]=new Mo;break;case N4.KHR_MESH_QUANTIZATION:s[m]=new Co;break;default:c.indexOf(m)>=0&&r[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}o.setExtensions(s),o.setPlugins(r),o.parse(t,n)}parseAsync(l,e){const t=this;return new Promise(function(n,i){t.parse(l,e,n,i)})}}function io(){let A={};return{get:function(l){return A[l]},add:function(l,e){A[l]=e},remove:function(l){delete A[l]},removeAll:function(){A={}}}}const N4={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class so{constructor(l){this.parser=l,this.name=N4.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const l=this.parser,e=this.parser.json.nodes||[];for(let t=0,n=e.length;t<n;t++){const i=e[t];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&l._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(l){const e=this.parser,t="light:"+l;let n=e.cache.get(t);if(n)return n;const i=e.json,o=((i.extensions&&i.extensions[this.name]||{}).lights||[])[l];let a;const m=new g4(16777215);o.color!==void 0&&m.fromArray(o.color);const c=o.range!==void 0?o.range:0;switch(o.type){case"directional":a=new Cr(m),a.target.position.set(0,0,-1),a.add(a.target);break;case"point":a=new u5(m),a.distance=c;break;case"spot":a=new wr(m),a.distance=c,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,a.angle=o.spot.outerConeAngle,a.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,a.target.position.set(0,0,-1),a.add(a.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return a.position.set(0,0,0),a.decay=2,o.intensity!==void 0&&(a.intensity=o.intensity),a.name=e.createUniqueName(o.name||"light_"+l),n=Promise.resolve(a),e.cache.add(t,n),n}createNodeAttachment(l){const e=this,t=this.parser,i=t.json.nodes[l],r=(i.extensions&&i.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(o){return t._getNodeRef(e.cache,r,o)})}}class Ao{constructor(){this.name=N4.KHR_MATERIALS_UNLIT}getMaterialType(){return Cl}extendParams(l,e,t){const n=[];l.color=new g4(1,1,1),l.opacity=1;const i=e.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const s=i.baseColorFactor;l.color.fromArray(s),l.opacity=s[3]}i.baseColorTexture!==void 0&&n.push(t.assignTexture(l,"map",i.baseColorTexture,P4))}return Promise.all(n)}}class ro{constructor(l){this.parser=l,this.name=N4.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(l,e){const n=this.parser.json.materials[l];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name].emissiveStrength;return i!==void 0&&(e.emissiveIntensity=i),Promise.resolve()}}class oo{constructor(l){this.parser=l,this.name=N4.KHR_MATERIALS_CLEARCOAT}getMaterialType(l){const t=this.parser.json.materials[l];return!t.extensions||!t.extensions[this.name]?null:o3}extendMaterialParams(l,e){const t=this.parser,n=t.json.materials[l];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(e.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&i.push(t.assignTexture(e,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&i.push(t.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(i.push(t.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const r=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new n4(r,r)}return Promise.all(i)}}class ao{constructor(l){this.parser=l,this.name=N4.KHR_MATERIALS_IRIDESCENCE}getMaterialType(l){const t=this.parser.json.materials[l];return!t.extensions||!t.extensions[this.name]?null:o3}extendMaterialParams(l,e){const t=this.parser,n=t.json.materials[l];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(e.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&i.push(t.assignTexture(e,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(e.iridescenceIOR=s.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&i.push(t.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(i)}}class mo{constructor(l){this.parser=l,this.name=N4.KHR_MATERIALS_SHEEN}getMaterialType(l){const t=this.parser.json.materials[l];return!t.extensions||!t.extensions[this.name]?null:o3}extendMaterialParams(l,e){const t=this.parser,n=t.json.materials[l];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[];e.sheenColor=new g4(0,0,0),e.sheenRoughness=0,e.sheen=1;const s=n.extensions[this.name];return s.sheenColorFactor!==void 0&&e.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&i.push(t.assignTexture(e,"sheenColorMap",s.sheenColorTexture,P4)),s.sheenRoughnessTexture!==void 0&&i.push(t.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(i)}}class co{constructor(l){this.parser=l,this.name=N4.KHR_MATERIALS_TRANSMISSION}getMaterialType(l){const t=this.parser.json.materials[l];return!t.extensions||!t.extensions[this.name]?null:o3}extendMaterialParams(l,e){const t=this.parser,n=t.json.materials[l];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(e.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&i.push(t.assignTexture(e,"transmissionMap",s.transmissionTexture)),Promise.all(i)}}class ho{constructor(l){this.parser=l,this.name=N4.KHR_MATERIALS_VOLUME}getMaterialType(l){const t=this.parser.json.materials[l];return!t.extensions||!t.extensions[this.name]?null:o3}extendMaterialParams(l,e){const t=this.parser,n=t.json.materials[l];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],s=n.extensions[this.name];e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&i.push(t.assignTexture(e,"thicknessMap",s.thicknessTexture)),e.attenuationDistance=s.attenuationDistance||1/0;const r=s.attenuationColor||[1,1,1];return e.attenuationColor=new g4(r[0],r[1],r[2]),Promise.all(i)}}class uo{constructor(l){this.parser=l,this.name=N4.KHR_MATERIALS_IOR}getMaterialType(l){const t=this.parser.json.materials[l];return!t.extensions||!t.extensions[this.name]?null:o3}extendMaterialParams(l,e){const n=this.parser.json.materials[l];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return e.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class qo{constructor(l){this.parser=l,this.name=N4.KHR_MATERIALS_SPECULAR}getMaterialType(l){const t=this.parser.json.materials[l];return!t.extensions||!t.extensions[this.name]?null:o3}extendMaterialParams(l,e){const t=this.parser,n=t.json.materials[l];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=[],s=n.extensions[this.name];e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&i.push(t.assignTexture(e,"specularIntensityMap",s.specularTexture));const r=s.specularColorFactor||[1,1,1];return e.specularColor=new g4(r[0],r[1],r[2]),s.specularColorTexture!==void 0&&i.push(t.assignTexture(e,"specularColorMap",s.specularColorTexture,P4)),Promise.all(i)}}class fo{constructor(l){this.parser=l,this.name=N4.KHR_TEXTURE_BASISU}loadTexture(l){const e=this.parser,t=e.json,n=t.textures[l];if(!n.extensions||!n.extensions[this.name])return null;const i=n.extensions[this.name],s=e.options.ktx2Loader;if(!s){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(l,i.source,s)}}class go{constructor(l){this.parser=l,this.name=N4.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(l){const e=this.name,t=this.parser,n=t.json,i=n.textures[l];if(!i.extensions||!i.extensions[e])return null;const s=i.extensions[e],r=n.images[s.source];let o=t.textureLoader;if(r.uri){const a=t.options.manager.getHandler(r.uri);a!==null&&(o=a)}return this.detectSupport().then(function(a){if(a)return t.loadTextureImage(l,s.source,o);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return t.loadTexture(l)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(l){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){l(e.height===1)}})),this.isSupported}}class po{constructor(l){this.name=N4.EXT_MESHOPT_COMPRESSION,this.parser=l}loadBufferView(l){const e=this.parser.json,t=e.bufferViews[l];if(t.extensions&&t.extensions[this.name]){const n=t.extensions[this.name],i=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(r){const o=n.byteOffset||0,a=n.byteLength||0,m=n.count,c=n.byteStride,h=new Uint8Array(r,o,a);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(m,c,h,n.mode,n.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(m*c);return s.decodeGltfBuffer(new Uint8Array(d),m,c,h,n.mode,n.filter),d})})}else return null}}class xo{constructor(l){this.name=N4.EXT_MESH_GPU_INSTANCING,this.parser=l}createNodeMesh(l){const e=this.parser.json,t=e.nodes[l];if(!t.extensions||!t.extensions[this.name]||t.mesh===void 0)return null;const n=e.meshes[t.mesh];for(const a of n.primitives)if(a.mode!==Kl.TRIANGLES&&a.mode!==Kl.TRIANGLE_STRIP&&a.mode!==Kl.TRIANGLE_FAN&&a.mode!==void 0)return null;const s=t.extensions[this.name].attributes,r=[],o={};for(const a in s)r.push(this.parser.getDependency("accessor",s[a]).then(m=>(o[a]=m,o[a])));return r.length<1?null:(r.push(this.parser.createNodeMesh(l)),Promise.all(r).then(a=>{const m=a.pop(),c=m.isGroup?m.children:[m],h=a[0].count,d=[];for(const f of c){const q=new R4,u=new y,g=new G1,w=new y(1,1,1),x=new vA(f.geometry,f.material,h);for(let p=0;p<h;p++)o.TRANSLATION&&u.fromBufferAttribute(o.TRANSLATION,p),o.ROTATION&&g.fromBufferAttribute(o.ROTATION,p),o.SCALE&&w.fromBufferAttribute(o.SCALE,p),x.setMatrixAt(p,q.compose(u,g,w));for(const p in o)p!=="TRANSLATION"&&p!=="ROTATION"&&p!=="SCALE"&&f.geometry.setAttribute(p,o[p]);Z4.prototype.copy.call(x,f),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),d.push(x)}return m.isGroup?(m.clear(),m.add(...d),m):d[0]}))}}const V0="glTF",t2=12,k6={JSON:1313821514,BIN:5130562};class Bo{constructor(l){this.name=N4.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(l,0,t2);if(this.header={magic:i3.decodeText(new Uint8Array(l.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==V0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const t=this.header.length-t2,n=new DataView(l,t2);let i=0;for(;i<t;){const s=n.getUint32(i,!0);i+=4;const r=n.getUint32(i,!0);if(i+=4,r===k6.JSON){const o=new Uint8Array(l,t2+i,s);this.content=i3.decodeText(o)}else if(r===k6.BIN){const o=t2+i;this.body=l.slice(o,o+s)}i+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wo{constructor(l,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=N4.KHR_DRACO_MESH_COMPRESSION,this.json=l,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(l,e){const t=this.json,n=this.dracoLoader,i=l.extensions[this.name].bufferView,s=l.extensions[this.name].attributes,r={},o={},a={};for(const m in s){const c=T7[m]||m.toLowerCase();r[c]=s[m]}for(const m in l.attributes){const c=T7[m]||m.toLowerCase();if(s[m]!==void 0){const h=t.accessors[l.attributes[m]],d=M2[h.componentType];a[c]=d.name,o[c]=h.normalized===!0}}return e.getDependency("bufferView",i).then(function(m){return new Promise(function(c){n.decodeDracoFile(m,function(h){for(const d in h.attributes){const f=h.attributes[d],q=o[d];q!==void 0&&(f.normalized=q)}c(h)},r,a)})})}}class Mo{constructor(){this.name=N4.KHR_TEXTURE_TRANSFORM}extendTexture(l,e){return e.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(l=l.clone(),e.offset!==void 0&&l.offset.fromArray(e.offset),e.rotation!==void 0&&(l.rotation=e.rotation),e.scale!==void 0&&l.repeat.fromArray(e.scale),l.needsUpdate=!0),l}}class I7 extends M1{constructor(l){super(),this.isGLTFSpecularGlossinessMaterial=!0;const e=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),t=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),n=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),i=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),r={specular:{value:new g4().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=r,this.onBeforeCompile=function(o){for(const a in r)o.uniforms[a]=r[a];o.fragmentShader=o.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",e).replace("#include <metalnessmap_pars_fragment>",t).replace("#include <roughnessmap_fragment>",n).replace("#include <metalnessmap_fragment>",i).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return r.specular.value},set:function(o){r.specular.value=o}},specularMap:{get:function(){return r.specularMap.value},set:function(o){r.specularMap.value=o,o?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return r.glossiness.value},set:function(o){r.glossiness.value=o}},glossinessMap:{get:function(){return r.glossinessMap.value},set:function(o){r.glossinessMap.value=o,o?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(l)}copy(l){return super.copy(l),this.specularMap=l.specularMap,this.specular.copy(l.specular),this.glossinessMap=l.glossinessMap,this.glossiness=l.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Eo{constructor(){this.name=N4.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return I7}extendParams(l,e,t){const n=e.extensions[this.name];l.color=new g4(1,1,1),l.opacity=1;const i=[];if(Array.isArray(n.diffuseFactor)){const s=n.diffuseFactor;l.color.fromArray(s),l.opacity=s[3]}if(n.diffuseTexture!==void 0&&i.push(t.assignTexture(l,"map",n.diffuseTexture,P4)),l.emissive=new g4(0,0,0),l.glossiness=n.glossinessFactor!==void 0?n.glossinessFactor:1,l.specular=new g4(1,1,1),Array.isArray(n.specularFactor)&&l.specular.fromArray(n.specularFactor),n.specularGlossinessTexture!==void 0){const s=n.specularGlossinessTexture;i.push(t.assignTexture(l,"glossinessMap",s)),i.push(t.assignTexture(l,"specularMap",s,P4))}return Promise.all(i)}createMaterial(l){const e=new I7(l);return e.fog=!0,e.color=l.color,e.map=l.map===void 0?null:l.map,e.lightMap=null,e.lightMapIntensity=1,e.aoMap=l.aoMap===void 0?null:l.aoMap,e.aoMapIntensity=1,e.emissive=l.emissive,e.emissiveIntensity=l.emissiveIntensity===void 0?1:l.emissiveIntensity,e.emissiveMap=l.emissiveMap===void 0?null:l.emissiveMap,e.bumpMap=l.bumpMap===void 0?null:l.bumpMap,e.bumpScale=1,e.normalMap=l.normalMap===void 0?null:l.normalMap,e.normalMapType=F7,l.normalScale&&(e.normalScale=l.normalScale),e.displacementMap=null,e.displacementScale=1,e.displacementBias=0,e.specularMap=l.specularMap===void 0?null:l.specularMap,e.specular=l.specular,e.glossinessMap=l.glossinessMap===void 0?null:l.glossinessMap,e.glossiness=l.glossiness,e.alphaMap=null,e.envMap=l.envMap===void 0?null:l.envMap,e.envMapIntensity=1,e}}class Co{constructor(){this.name=N4.KHR_MESH_QUANTIZATION}}class j0 extends C2{constructor(l,e,t,n){super(l,e,t,n)}copySampleValue_(l){const e=this.resultBuffer,t=this.sampleValues,n=this.valueSize,i=l*n*3+n;for(let s=0;s!==n;s++)e[s]=t[i+s];return e}interpolate_(l,e,t,n){const i=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=r*2,a=r*3,m=n-e,c=(t-e)/m,h=c*c,d=h*c,f=l*a,q=f-a,u=-2*d+3*h,g=d-h,w=1-u,x=g-h+c;for(let p=0;p!==r;p++){const E=s[q+p+r],v=s[q+p+o]*m,I=s[f+p+r],B=s[f+p]*m;i[p]=w*E+x*v+u*I+g*B}return i}}const Qo=new G1;class vo extends j0{interpolate_(l,e,t,n){const i=super.interpolate_(l,e,t,n);return Qo.fromArray(i).normalize().toArray(i),i}}const Kl={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},M2={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Y6={9728:ol,9729:Il,9984:p7,9985:A0,9986:x7,9987:G3},H6={33071:Vl,33648:c5,10497:L1},K6={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},T7={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},D1={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_o={CUBICSPLINE:void 0,LINEAR:N3,STEP:d2},u7={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yo(A){return A.DefaultMaterial===void 0&&(A.DefaultMaterial=new M1({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:a1})),A.DefaultMaterial}function n2(A,l,e){for(const t in e.extensions)A[t]===void 0&&(l.userData.gltfExtensions=l.userData.gltfExtensions||{},l.userData.gltfExtensions[t]=e.extensions[t])}function Z1(A,l){l.extras!==void 0&&(typeof l.extras=="object"?Object.assign(A.userData,l.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+l.extras))}function Io(A,l,e){let t=!1,n=!1,i=!1;for(let a=0,m=l.length;a<m;a++){const c=l[a];if(c.POSITION!==void 0&&(t=!0),c.NORMAL!==void 0&&(n=!0),c.COLOR_0!==void 0&&(i=!0),t&&n&&i)break}if(!t&&!n&&!i)return Promise.resolve(A);const s=[],r=[],o=[];for(let a=0,m=l.length;a<m;a++){const c=l[a];if(t){const h=c.POSITION!==void 0?e.getDependency("accessor",c.POSITION):A.attributes.position;s.push(h)}if(n){const h=c.NORMAL!==void 0?e.getDependency("accessor",c.NORMAL):A.attributes.normal;r.push(h)}if(i){const h=c.COLOR_0!==void 0?e.getDependency("accessor",c.COLOR_0):A.attributes.color;o.push(h)}}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o)]).then(function(a){const m=a[0],c=a[1],h=a[2];return t&&(A.morphAttributes.position=m),n&&(A.morphAttributes.normal=c),i&&(A.morphAttributes.color=h),A.morphTargetsRelative=!0,A})}function To(A,l){if(A.updateMorphTargets(),l.weights!==void 0)for(let e=0,t=l.weights.length;e<t;e++)A.morphTargetInfluences[e]=l.weights[e];if(l.extras&&Array.isArray(l.extras.targetNames)){const e=l.extras.targetNames;if(A.morphTargetInfluences.length===e.length){A.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++)A.morphTargetDictionary[e[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bo(A){const l=A.extensions&&A.extensions[N4.KHR_DRACO_MESH_COMPRESSION];let e;return l?e="draco:"+l.bufferView+":"+l.indices+":"+O6(l.attributes):e=A.indices+":"+O6(A.attributes)+":"+A.mode,e}function O6(A){let l="";const e=Object.keys(A).sort();for(let t=0,n=e.length;t<n;t++)l+=e[t]+":"+A[e[t]]+";";return l}function b7(A){switch(A){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function So(A){return A.search(/\.jpe?g($|\?)/i)>0||A.search(/^data\:image\/jpeg/)===0?"image/jpeg":A.search(/\.webp($|\?)/i)>0||A.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Fo{constructor(l={},e={}){this.json=l,this.extensions={},this.plugins={},this.options=e,this.cache=new io,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,i=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||t||n&&i<98?this.textureLoader=new xr(this.options.manager):this.textureLoader=new vr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new W7(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(l){this.extensions=l}setPlugins(l){this.plugins=l}parse(l,e){const t=this,n=this.json,i=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([t.getDependencies("scene"),t.getDependencies("animation"),t.getDependencies("camera")])}).then(function(s){const r={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:t,userData:{}};n2(i,r,n),Z1(r,n),Promise.all(t._invokeAll(function(o){return o.afterRoot&&o.afterRoot(r)})).then(function(){l(r)})}).catch(e)}_markDefs(){const l=this.json.nodes||[],e=this.json.skins||[],t=this.json.meshes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n].joints;for(let r=0,o=s.length;r<o;r++)l[s[r]].isBone=!0}for(let n=0,i=l.length;n<i;n++){const s=l[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(t[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(l,e){e!==void 0&&(l.refs[e]===void 0&&(l.refs[e]=l.uses[e]=0),l.refs[e]++)}_getNodeRef(l,e,t){if(l.refs[e]<=1)return t;const n=t.clone(),i=(s,r)=>{const o=this.associations.get(s);o!=null&&this.associations.set(r,o);for(const[a,m]of s.children.entries())i(m,r.children[a])};return i(t,n),n.name+="_instance_"+l.uses[e]++,n}_invokeOne(l){const e=Object.values(this.plugins);e.push(this);for(let t=0;t<e.length;t++){const n=l(e[t]);if(n)return n}return null}_invokeAll(l){const e=Object.values(this.plugins);e.unshift(this);const t=[];for(let n=0;n<e.length;n++){const i=l(e[n]);i&&t.push(i)}return t}getDependency(l,e){const t=l+":"+e;let n=this.cache.get(t);if(!n){switch(l){case"scene":n=this.loadScene(e);break;case"node":n=this.loadNode(e);break;case"mesh":n=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:throw new Error("Unknown type: "+l)}this.cache.add(t,n)}return n}getDependencies(l){let e=this.cache.get(l);if(!e){const t=this,n=this.json[l+(l==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(i,s){return t.getDependency(l,s)})),this.cache.add(l,e)}return e}loadBuffer(l){const e=this.json.buffers[l],t=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&l===0)return Promise.resolve(this.extensions[N4.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(i,s){t.load(i3.resolveURL(e.uri,n.path),i,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(l){const e=this.json.bufferViews[l];return this.getDependency("buffer",e.buffer).then(function(t){const n=e.byteLength||0,i=e.byteOffset||0;return t.slice(i,i+n)})}loadAccessor(l){const e=this,t=this.json,n=this.json.accessors[l];if(n.bufferView===void 0&&n.sparse===void 0)return Promise.resolve(null);const i=[];return n.bufferView!==void 0?i.push(this.getDependency("bufferView",n.bufferView)):i.push(null),n.sparse!==void 0&&(i.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(i).then(function(s){const r=s[0],o=K6[n.type],a=M2[n.componentType],m=a.BYTES_PER_ELEMENT,c=m*o,h=n.byteOffset||0,d=n.bufferView!==void 0?t.bufferViews[n.bufferView].byteStride:void 0,f=n.normalized===!0;let q,u;if(d&&d!==c){const g=Math.floor(h/d),w="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let x=e.cache.get(w);x||(q=new a(r,g*d,n.count*d/m),x=new BA(q,d/m),e.cache.add(w,x)),u=new L7(x,o,h%d/m,f)}else r===null?q=new a(n.count*o):q=new a(r,h,n.count*o),u=new Bl(q,o,f);if(n.sparse!==void 0){const g=K6.SCALAR,w=M2[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,p=n.sparse.values.byteOffset||0,E=new w(s[1],x,n.sparse.count*g),v=new a(s[2],p,n.sparse.count*o);r!==null&&(u=new Bl(u.array.slice(),u.itemSize,u.normalized));for(let I=0,B=E.length;I<B;I++){const Q=E[I];if(u.setX(Q,v[I*o]),o>=2&&u.setY(Q,v[I*o+1]),o>=3&&u.setZ(Q,v[I*o+2]),o>=4&&u.setW(Q,v[I*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return u})}loadTexture(l){const e=this.json,t=this.options,i=e.textures[l].source,s=e.images[i];let r=this.textureLoader;if(s.uri){const o=t.manager.getHandler(s.uri);o!==null&&(r=o)}return this.loadTextureImage(l,i,r)}loadTextureImage(l,e,t){const n=this,i=this.json,s=i.textures[l],r=i.images[e],o=(r.uri||r.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];const a=this.loadImageSource(e,t).then(function(m){m.flipY=!1,m.name=s.name||r.name||"";const h=(i.samplers||{})[s.sampler]||{};return m.magFilter=Y6[h.magFilter]||Il,m.minFilter=Y6[h.minFilter]||G3,m.wrapS=H6[h.wrapS]||L1,m.wrapT=H6[h.wrapT]||L1,n.associations.set(m,{textures:l}),m}).catch(function(){return null});return this.textureCache[o]=a,a}loadImageSource(l,e){const t=this,n=this.json,i=this.options;if(this.sourceCache[l]!==void 0)return this.sourceCache[l].then(c=>c.clone());const s=n.images[l],r=self.URL||self.webkitURL;let o=s.uri||"",a=!1;if(s.bufferView!==void 0)o=t.getDependency("bufferView",s.bufferView).then(function(c){a=!0;const h=new Blob([c],{type:s.mimeType});return o=r.createObjectURL(h),o});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+l+" is missing URI and bufferView");const m=Promise.resolve(o).then(function(c){return new Promise(function(h,d){let f=h;e.isImageBitmapLoader===!0&&(f=function(q){const u=new nl(q);u.needsUpdate=!0,h(u)}),e.load(i3.resolveURL(c,i.path),f,void 0,d)})}).then(function(c){return a===!0&&r.revokeObjectURL(o),c.userData.mimeType=s.mimeType||So(s.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),c});return this.sourceCache[l]=m,m}assignTexture(l,e,t,n){const i=this;return this.getDependency("texture",t.index).then(function(s){if(t.texCoord!==void 0&&t.texCoord!=0&&!(e==="aoMap"&&t.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+t.texCoord+" for texture "+e+" not yet supported."),i.extensions[N4.KHR_TEXTURE_TRANSFORM]){const r=t.extensions!==void 0?t.extensions[N4.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const o=i.associations.get(s);s=i.extensions[N4.KHR_TEXTURE_TRANSFORM].extendTexture(s,r),i.associations.set(s,o)}}return n!==void 0&&(s.encoding=n),l[e]=s,s})}assignFinalMaterial(l){const e=l.geometry;let t=l.material;const n=e.attributes.tangent===void 0,i=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(l.isPoints){const r="PointsMaterial:"+t.uuid;let o=this.cache.get(r);o||(o=new y0,o1.prototype.copy.call(o,t),o.color.copy(t.color),o.map=t.map,o.sizeAttenuation=!1,this.cache.add(r,o)),t=o}else if(l.isLine){const r="LineBasicMaterial:"+t.uuid;let o=this.cache.get(r);o||(o=new _0,o1.prototype.copy.call(o,t),o.color.copy(t.color),this.cache.add(r,o)),t=o}if(n||i||s){let r="ClonedMaterial:"+t.uuid+":";t.isGLTFSpecularGlossinessMaterial&&(r+="specular-glossiness:"),n&&(r+="derivative-tangents:"),i&&(r+="vertex-colors:"),s&&(r+="flat-shading:");let o=this.cache.get(r);o||(o=t.clone(),i&&(o.vertexColors=!0),s&&(o.flatShading=!0),n&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(r,o),this.associations.set(o,this.associations.get(t))),t=o}t.aoMap&&e.attributes.uv2===void 0&&e.attributes.uv!==void 0&&e.setAttribute("uv2",e.attributes.uv),l.material=t}getMaterialType(){return M1}loadMaterial(l){const e=this,t=this.json,n=this.extensions,i=t.materials[l];let s;const r={},o=i.extensions||{},a=[];if(o[N4.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const c=n[N4.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=c.getMaterialType(),a.push(c.extendParams(r,i,e))}else if(o[N4.KHR_MATERIALS_UNLIT]){const c=n[N4.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),a.push(c.extendParams(r,i,e))}else{const c=i.pbrMetallicRoughness||{};if(r.color=new g4(1,1,1),r.opacity=1,Array.isArray(c.baseColorFactor)){const h=c.baseColorFactor;r.color.fromArray(h),r.opacity=h[3]}c.baseColorTexture!==void 0&&a.push(e.assignTexture(r,"map",c.baseColorTexture,P4)),r.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,r.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(a.push(e.assignTexture(r,"metalnessMap",c.metallicRoughnessTexture)),a.push(e.assignTexture(r,"roughnessMap",c.metallicRoughnessTexture))),s=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(l)}),a.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(l,r)})))}i.doubleSided===!0&&(r.side=bl);const m=i.alphaMode||u7.OPAQUE;if(m===u7.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.transparent=!1,m===u7.MASK&&(r.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&s!==Cl&&(a.push(e.assignTexture(r,"normalMap",i.normalTexture)),r.normalScale=new n4(1,1),i.normalTexture.scale!==void 0)){const c=i.normalTexture.scale;r.normalScale.set(c,c)}return i.occlusionTexture!==void 0&&s!==Cl&&(a.push(e.assignTexture(r,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&s!==Cl&&(r.emissive=new g4().fromArray(i.emissiveFactor)),i.emissiveTexture!==void 0&&s!==Cl&&a.push(e.assignTexture(r,"emissiveMap",i.emissiveTexture,P4)),Promise.all(a).then(function(){let c;return s===I7?c=n[N4.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(r):c=new s(r),i.name&&(c.name=i.name),Z1(c,i),e.associations.set(c,{materials:l}),i.extensions&&n2(n,c,i),c})}createUniqueName(l){const e=O4.sanitizeNodeName(l||"");let t=e;for(let n=1;this.nodeNamesUsed[t];++n)t=e+"_"+n;return this.nodeNamesUsed[t]=!0,t}loadGeometries(l){const e=this,t=this.extensions,n=this.primitiveCache;function i(r){return t[N4.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,e).then(function(o){return V6(o,r,e)})}const s=[];for(let r=0,o=l.length;r<o;r++){const a=l[r],m=bo(a),c=n[m];if(c)s.push(c.promise);else{let h;a.extensions&&a.extensions[N4.KHR_DRACO_MESH_COMPRESSION]?h=i(a):h=V6(new fl,a,e),n[m]={primitive:a,promise:h},s.push(h)}}return Promise.all(s)}loadMesh(l){const e=this,t=this.json,n=this.extensions,i=t.meshes[l],s=i.primitives,r=[];for(let o=0,a=s.length;o<a;o++){const m=s[o].material===void 0?yo(this.cache):this.getDependency("material",s[o].material);r.push(m)}return r.push(e.loadGeometries(s)),Promise.all(r).then(function(o){const a=o.slice(0,o.length-1),m=o[o.length-1],c=[];for(let d=0,f=m.length;d<f;d++){const q=m[d],u=s[d];let g;const w=a[d];if(u.mode===Kl.TRIANGLES||u.mode===Kl.TRIANGLE_STRIP||u.mode===Kl.TRIANGLE_FAN||u.mode===void 0)g=i.isSkinnedMesh===!0?new MA(q,w):new I4(q,w),g.isSkinnedMesh===!0&&!g.geometry.attributes.skinWeight.normalized&&g.normalizeSkinWeights(),u.mode===Kl.TRIANGLE_STRIP?g.geometry=j6(g.geometry,te):u.mode===Kl.TRIANGLE_FAN&&(g.geometry=j6(g.geometry,o0));else if(u.mode===Kl.LINES)g=new _A(q,w);else if(u.mode===Kl.LINE_STRIP)g=new P7(q,w);else if(u.mode===Kl.LINE_LOOP)g=new yA(q,w);else if(u.mode===Kl.POINTS)g=new IA(q,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+u.mode);Object.keys(g.geometry.morphAttributes).length>0&&To(g,i),g.name=e.createUniqueName(i.name||"mesh_"+l),Z1(g,i),u.extensions&&n2(n,g,u),e.assignFinalMaterial(g),c.push(g)}for(let d=0,f=c.length;d<f;d++)e.associations.set(c[d],{meshes:l,primitives:d});if(c.length===1)return c[0];const h=new e1;e.associations.set(h,{meshes:l});for(let d=0,f=c.length;d<f;d++)h.add(c[d]);return h})}loadCamera(l){let e;const t=this.json.cameras[l],n=t[t.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return t.type==="perspective"?e=new ql(Be.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):t.type==="orthographic"&&(e=new C1(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),t.name&&(e.name=this.createUniqueName(t.name)),Z1(e,t),Promise.resolve(e)}loadSkin(l){const e=this.json.skins[l],t={joints:e.joints};return e.inverseBindMatrices===void 0?Promise.resolve(t):this.getDependency("accessor",e.inverseBindMatrices).then(function(n){return t.inverseBindMatrices=n,t})}loadAnimation(l){const t=this.json.animations[l],n=[],i=[],s=[],r=[],o=[];for(let a=0,m=t.channels.length;a<m;a++){const c=t.channels[a],h=t.samplers[c.sampler],d=c.target,f=d.node,q=t.parameters!==void 0?t.parameters[h.input]:h.input,u=t.parameters!==void 0?t.parameters[h.output]:h.output;n.push(this.getDependency("node",f)),i.push(this.getDependency("accessor",q)),s.push(this.getDependency("accessor",u)),r.push(h),o.push(d)}return Promise.all([Promise.all(n),Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o)]).then(function(a){const m=a[0],c=a[1],h=a[2],d=a[3],f=a[4],q=[];for(let g=0,w=m.length;g<w;g++){const x=m[g],p=c[g],E=h[g],v=d[g],I=f[g];if(x===void 0)continue;x.updateMatrix();let B;switch(D1[I.path]){case D1.weights:B=B2;break;case D1.rotation:B=r3;break;case D1.position:case D1.scale:default:B=w2;break}const Q=x.name?x.name:x.uuid,T=v.interpolation!==void 0?_o[v.interpolation]:N3,z=[];D1[I.path]===D1.weights?x.traverse(function(L){L.morphTargetInfluences&&z.push(L.name?L.name:L.uuid)}):z.push(Q);let Z=E.array;if(E.normalized){const L=b7(Z.constructor),S=new Float32Array(Z.length);for(let P=0,W=Z.length;P<W;P++)S[P]=Z[P]*L;Z=S}for(let L=0,S=z.length;L<S;L++){const P=new B(z[L]+"."+D1[I.path],p.array,Z,T);v.interpolation==="CUBICSPLINE"&&(P.createInterpolant=function($){const K=this instanceof r3?vo:j0;return new K(this.times,this.values,this.getValueSize()/3,$)},P.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),q.push(P)}}const u=t.name?t.name:"animation_"+l;return new ur(u,void 0,q)})}createNodeMesh(l){const e=this.json,t=this,n=e.nodes[l];return n.mesh===void 0?null:t.getDependency("mesh",n.mesh).then(function(i){const s=t._getNodeRef(t.meshCache,n.mesh,i);return n.weights!==void 0&&s.traverse(function(r){if(!!r.isMesh)for(let o=0,a=n.weights.length;o<a;o++)r.morphTargetInfluences[o]=n.weights[o]}),s})}loadNode(l){const e=this.json,t=this.extensions,n=this,i=e.nodes[l],s=i.name?n.createUniqueName(i.name):"";return function(){const r=[],o=n._invokeOne(function(a){return a.createNodeMesh&&a.createNodeMesh(l)});return o&&r.push(o),i.camera!==void 0&&r.push(n.getDependency("camera",i.camera).then(function(a){return n._getNodeRef(n.cameraCache,i.camera,a)})),n._invokeAll(function(a){return a.createNodeAttachment&&a.createNodeAttachment(l)}).forEach(function(a){r.push(a)}),Promise.all(r)}().then(function(r){let o;if(i.isBone===!0?o=new v0:r.length>1?o=new e1:r.length===1?o=r[0]:o=new Z4,o!==r[0])for(let a=0,m=r.length;a<m;a++)o.add(r[a]);if(i.name&&(o.userData.name=i.name,o.name=s),Z1(o,i),i.extensions&&n2(t,o,i),i.matrix!==void 0){const a=new R4;a.fromArray(i.matrix),o.applyMatrix4(a)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);return n.associations.has(o)||n.associations.set(o,{}),n.associations.get(o).nodes=l,o})}loadScene(l){const e=this.json,t=this.extensions,n=this.json.scenes[l],i=this,s=new e1;n.name&&(s.name=i.createUniqueName(n.name)),Z1(s,n),n.extensions&&n2(t,s,n);const r=n.nodes||[],o=[];for(let a=0,m=r.length;a<m;a++)o.push(W0(r[a],s,e,i));return Promise.all(o).then(function(){const a=m=>{const c=new Map;for(const[h,d]of i.associations)(h instanceof o1||h instanceof nl)&&c.set(h,d);return m.traverse(h=>{const d=i.associations.get(h);d!=null&&c.set(h,d)}),c};return i.associations=a(s),s})}}function W0(A,l,e,t){const n=e.nodes[A];return t.getDependency("node",A).then(function(i){if(n.skin===void 0)return i;let s;return t.getDependency("skin",n.skin).then(function(r){s=r;const o=[];for(let a=0,m=s.joints.length;a<m;a++)o.push(t.getDependency("node",s.joints[a]));return Promise.all(o)}).then(function(r){return i.traverse(function(o){if(!o.isMesh)return;const a=[],m=[];for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d){a.push(d);const f=new R4;s.inverseBindMatrices!==void 0&&f.fromArray(s.inverseBindMatrices.array,c*16),m.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[c])}o.bind(new G7(a,m),o.matrixWorld)}),i})}).then(function(i){l.add(i);const s=[];if(n.children){const r=n.children;for(let o=0,a=r.length;o<a;o++){const m=r[o];s.push(W0(m,i,e,t))}}return Promise.all(s)})}function Do(A,l,e){const t=l.attributes,n=new z3;if(t.POSITION!==void 0){const r=e.json.accessors[t.POSITION],o=r.min,a=r.max;if(o!==void 0&&a!==void 0){if(n.set(new y(o[0],o[1],o[2]),new y(a[0],a[1],a[2])),r.normalized){const m=b7(M2[r.componentType]);n.min.multiplyScalar(m),n.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=l.targets;if(i!==void 0){const r=new y,o=new y;for(let a=0,m=i.length;a<m;a++){const c=i[a];if(c.POSITION!==void 0){const h=e.json.accessors[c.POSITION],d=h.min,f=h.max;if(d!==void 0&&f!==void 0){if(o.setX(Math.max(Math.abs(d[0]),Math.abs(f[0]))),o.setY(Math.max(Math.abs(d[1]),Math.abs(f[1]))),o.setZ(Math.max(Math.abs(d[2]),Math.abs(f[2]))),h.normalized){const q=b7(M2[h.componentType]);o.multiplyScalar(q)}r.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(r)}A.boundingBox=n;const s=new k3;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,A.boundingSphere=s}function V6(A,l,e){const t=l.attributes,n=[];function i(s,r){return e.getDependency("accessor",s).then(function(o){A.setAttribute(r,o)})}for(const s in t){const r=T7[s]||s.toLowerCase();r in A.attributes||n.push(i(t[s],r))}if(l.indices!==void 0&&!A.index){const s=e.getDependency("accessor",l.indices).then(function(r){A.setIndex(r)});n.push(s)}return Z1(A,l),Do(A,l,e),Promise.all(n).then(function(){return l.targets!==void 0?Io(A,l.targets,e):A})}function j6(A,l){let e=A.getIndex();if(e===null){const s=[],r=A.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);A.setIndex(s),e=A.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),A}const t=e.count-2,n=[];if(l===o0)for(let s=1;s<=t;s++)n.push(e.getX(0)),n.push(e.getX(s)),n.push(e.getX(s+1));else for(let s=0;s<t;s++)s%2===0?(n.push(e.getX(s)),n.push(e.getX(s+1)),n.push(e.getX(s+2))):(n.push(e.getX(s+2)),n.push(e.getX(s+1)),n.push(e.getX(s)));n.length/3!==t&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=A.clone();return i.setIndex(n),i}const Uo=`/**
Original source: https://www.shadertoy.com/view/WlfXzX
and chatgpt provided a simplex noise implementation
*/

varying vec2 vUv;// normalized pixel coordinate
uniform vec2 resolution;// The resolution of the screen
uniform float time;// The time value to animate the smoke

#define PI 3.1415926535897932384626433832795

mat2 rot(float a) { return mat2(cos(a), sin(a), -sin(a), cos(a)); }

// Simplex noise function
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float noise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float smoke(vec3 p) {
    vec3 q = 0.9 * p;// How lumpy / small and hard edges each plume has
    float f = 0.01;// Size
    float a = 0.3;// scattering?
    for (int i = 0; i < 5; ++i, a *= .4, q *= 2.1) { // fbm
        q += time * vec3(1.37, -1.5, 0) * 1.;// speed
        f += a * noise(vec2(q));
    }
    float noiseShape = .5 + .7 * max(p.y, 0.) - .15 * length(p.xz);
    return clamp(1. +  noiseShape * f - length(p), 0., 1.);
}

vec3 shading(vec3 ro, vec3 rd) {
    vec3 ld = normalize(vec3(.5, 1, -.7));

    const float nbStep = 11.4;// how smooth the smoke is, among other things
    const float diam = 35.9;// how dense the smoke is
    const float rayLength = diam / nbStep;
    float start = length(ro) - diam / 2., end = start + diam;
    float sumDen = 0.;
    float sumDif = 0.;

    for (float d = end; d > start; d -= rayLength) { // raymarching
        vec3 p = ro + d * rd;
        if (dot(p, p) > diam * diam) break;
        float den = smoke(p);
        sumDen += den;
        if (den > .02) sumDif += max(0., den - smoke(p + ld * .17));
    }

    const vec3 smokeHue = vec3(.90);
    float light = 10. * pow(max(0., dot(rd, ld)), 10.);
    vec3 col = .01 * light * smokeHue;
    col +=  .4 * sumDen * rayLength * vec3(.8, .9, 1.);// ambient
    col += 1.3 * sumDif * rayLength * smokeHue;// diffuse
    return col;
}

void main() {
    vec2 uv = vUv;
    vec3 rd = normalize(vec3(uv, -1.07));

    vec2 ang = vec2(1.);
    float yaw = 0.1 * ang.x;
    float pitch = + ang.y;

    vec3 camPos = vec3(-1.5, -1.5, 3.5);
    camPos.yz *= rot(pitch); camPos.zx *= rot(yaw);
    rd.yz     *= rot(pitch);     rd.zx *= rot(yaw);

    vec3 col = pow(shading(camPos, rd), vec3(1. / 2.2));
    float luminance = dot(col, vec3(0.299, 0.587, 0.114)) * 2.;
    if (luminance < 0.3) {
        luminance = 0.;
    }
    gl_FragColor = vec4(col, luminance);
}
`;let j1=null;function W6(A,l,e){const t=new I4(new f5(.05,.05),new $4({uniforms:{time:{value:0},resolution:{value:{x:1,y:1,z:1}}},fragmentShader:Uo,vertexShader:Pl,side:a1,transparent:!0,blending:e3}));return t.position.set(A,l,e),t}function J0(A,l,e,t){!A||!A.children[9]||A.children[9].children.forEach((n,i)=>{const s=n;s.material.uniforms.resolution.value={x:e.width,y:e.height,z:1},s.material.uniforms.time.value=l/60+i*100,s.quaternion.copy(t.quaternion)})}function Z0(A){const l=new e1,e=.037,t=.037;for(let n=0;n<7;n++)l.add(W6(-.22+e*n,.985+t*n,.22));for(let n=0;n<6;n++)l.add(W6(.23-e*n,.985+t*n,.22));A.add(l)}function X0(A,l){!A||(A.children[3].rotation.y=l,A.children[5].rotation.y=l,A.children[6].rotation.y=l,A.children[8].rotation.y=l)}function $0(A,l){!A||(A.children[4].rotation.y=l)}function l9(A,l){!A||(A.children[7].rotation.y=l)}async function e9(){return j1?j1.clone():new Promise((A,l)=>{new no().load("assets/barrel_organ.glb",e=>{j1=e.scene,j1.receiveShadow=!0,j1.castShadow=!0,j1.traverse(t=>{const n=t;n.castShadow=!0,n.receiveShadow=!0}),A(j1)},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened:",e),l(e)})})}const No=`varying vec2 vUv;
uniform float time;
uniform vec3 color;

vec2 rotate(vec2 v, float a) {
    return vec2(v.x * cos(a) + v.y * sin(a), -v.x * sin(a) + v.y * cos(a));
}

vec3 getPosByAngle(float angle) {
    return vec3(cos(angle), sin(angle), 0);
}

void main() {
    vec2 uv = mod(vUv * 20., 1.);

    float PI = 3.1415926;

    float starangle = 2.0 * PI / 5.;
    vec3 p0 = .2 * getPosByAngle(0.0);
    vec3 p1 = .07 * getPosByAngle(starangle);

    vec2 curPosuv = rotate(uv - .5, time * 0.4);

    float curRadius = length(curPosuv);
    float curPosAngle = atan(curPosuv.x, curPosuv.y);

    float a = fract(curPosAngle/ starangle);
	if (a >= 0.5) {
        a = 1.0 - a;
    }

    a = a * starangle - 0.1;
    vec3 curPos = curRadius * getPosByAngle(a); 
    vec3 dir0 = p1 - p0;
    vec3 dir1 = curPos - p0;

    float pixwidth = 1.5 * curRadius / 200.;
    float inOut = smoothstep(-pixwidth, pixwidth, cross(dir0, dir1).z);

    vec3 starColor = vec3(95.0 / 255., 27.0 / 255., 31.0 / 255.);
    vec3 ct = mix(starColor, color, inOut);

    gl_FragColor = vec4(ct, 1.);
}
`,Ro=`varying vec2 vUv;
uniform float time;
uniform vec3 primaryColor;
uniform vec3 secondaryColor;

#define PI 3.1415926535897932384626433832795

float dot2(vec2 v) {
    return dot(v, v);
}

float uni(float d1, float d2) {
    return min(d1, d2);
}


float sdStar(vec2 p, float r, float rf) {
    const vec2 k1 = vec2(0.809016994375, -0.587785252292);
    const vec2 k2 = vec2(-k1.x,k1.y);
    p.x = abs(p.x);
    p -= 2.0*max(dot(k1,p),0.0)*k1;
    p -= 2.0*max(dot(k2,p),0.0)*k2;
    p.x = abs(p.x);
    p.y -= r;
    vec2 ba = rf*vec2(-k1.y,k1.x) - vec2(0,1);
    float h = clamp( dot(p,ba)/dot(ba,ba), 0.0, r );
    return length(p-ba*h) * sign(p.y*ba.x-p.x*ba.y);
}

void main() {
    vec2 uv = vUv - 0.5;

    float angle = atan(uv.x, uv.y);
    float moood = mod(angle * 101.9 +time * 70., 40.);

    float red = (moood > 20. ? primaryColor.x : secondaryColor.x);
    float green = (moood > 20. ? primaryColor.y : secondaryColor.y);
    float blue = (moood > 20. ? primaryColor.z : secondaryColor.z);

    float d = sdStar(vec2(uv.x+0.10*tan(time), uv.y-0.08*tan(time)), 0.02*tan(time), 0.5);
    d = uni(d, sdStar(vec2(uv.x+0.05*tan(time), uv.y+0.09*tan(time)), 0.02*tan(time), 0.5));
    d = uni(d, sdStar(vec2(uv.x-0.12*tan(time), uv.y-0.06*tan(time)), 0.02*tan(time), 0.5));
    d = uni(d, sdStar(vec2(uv.x-0.07*tan(time), uv.y+0.08*tan(time)), 0.02*tan(time), 0.5));
    d = uni(d, sdStar(vec2(uv.x-0.01*tan(time), uv.y-0.10*tan(time)), 0.02*tan(time), 0.5));

    vec3 banner = vec3(red, green, blue);
    vec3 star = vec3(10./255.,10./255.,51./255.);
    vec3 col = banner;
    //vec3 col = d > 0. ? banner : star;

    gl_FragColor = vec4(col, 1.);
}


`,t9={brown:"#55282C",yellow:"#E9DBAD",red:"#5F1B1F",blue:"#261C33",green:"#505523"},Ol={brown:new g4(5580844),yellow:new g4(15326125),red:new g4(6232863),blue:new g4(2497587),green:new g4(5264675)};function Nl(A,l,e){return gl(0,1,(A-e)/l)}const Lo=`varying vec2 vUv;
uniform float time;
uniform vec3 primaryColor;
uniform vec3 secondaryColor;

vec2 rotate(vec2 v, float a) {
    return vec2(v.x * cos(a) + v.y * sin(a), -v.x * sin(a) + v.y * cos(a));
}

void main() {
    vec2 uv = vUv;
    uv.y += sin(uv.x * 10. + time / 4.);

    float grid = 0.1;
    float scaleX = 0.008;
    float scaleY = 0.05;

    float border = 0.05;
    if (mod(uv.y, grid) < scaleY || vUv.y < border || vUv.y < border || vUv.x > (1.-border) || vUv.y > (1.- border)) {
        gl_FragColor = vec4(primaryColor, 1.0);
    } else {
        gl_FragColor = vec4(secondaryColor, 1.0);
    }
}`;class Go extends z1{constructor(e){super(e);U(this,"startFrame",0);U(this,"endFrame",859);U(this,"scene",new P1);U(this,"camera",new C1(-1,1,1,-1));U(this,"renderTarget",new wl(640,360));U(this,"screen",new I4(new Ql(2,2,2),new $4({uniforms:{time:{value:0},primaryColor:{value:Ol.blue},secondaryColor:{value:Ol.yellow}},fragmentShader:Lo,vertexShader:Pl,side:bl})));this.scene.add(this.screen),this.scene.add(this.camera),this.camera.position.z=10,this.renderTarget.setSize(50*200,2*200)}render(e,t,n){this.screen.material.uniforms.time.value=e/60,t.setRenderTarget(this.renderTarget),t.render(this.scene,this.camera)}}class Po extends z1{constructor(e){super(e);U(this,"startFrame",0);U(this,"endFrame",859);U(this,"scene",new P1);U(this,"camera",new ql);U(this,"skybox");U(this,"whitebox");U(this,"ground");U(this,"sphere");U(this,"renderTarget",new wl(640,360,{type:Rl}));U(this,"barrelOrgan");this.children=B5({ground:new Go(e)}),this.camera.fov=22,this.camera.aspect=16/9,this.camera.updateProjectionMatrix(),this.skybox=new I4(new Ql(100,100,100),new $4({uniforms:{time:{value:0},color:{value:new g4(0)}},fragmentShader:No,vertexShader:Pl,side:xl})),this.scene.add(this.skybox),this.skybox.material.uniforms.color.value=new g4(253/255,238/255,196/255),this.whitebox=new I4(new Ql(2e3,2e3,2e3),new Cl({color:t9.yellow,side:xl})),this.scene.add(this.whitebox),e9().then(i=>{this.barrelOrgan=i,this.scene.add(this.barrelOrgan),Z0(this.barrelOrgan),this.barrelOrgan.position.set(0,0,0)});const t=new P0(16777215,10,100,3);t.position.set(0,4,-1.5),t.rotation.set(-Math.PI,0,0),this.scene.add(t);const n=new u5(16777215,10);n.position.set(3,4,0),this.scene.add(n),this.ground=new I4(new Ql(50,.01,2),new M1({side:bl,color:16777215})),this.ground.position.set(25,0,0),this.scene.add(this.ground),this.sphere=new I4(new V7(.8,.1,100,16,4),new $4({uniforms:{time:{value:0},primaryColor:{value:Ol.blue},secondaryColor:{value:Ol.blue}},fragmentShader:Ro,vertexShader:Pl,side:bl})),this.scene.add(this.sphere)}resize(e,t){this.renderTarget.setSize(e,t)}render(e,t,n){var h,d,f,q;this.skybox.material.uniforms.time.value=e/60,this.ground.material.map=this.children.ground.renderTarget.texture,J0(this.barrelOrgan,e,this.renderTarget,this.camera);const i=214,s=429,r=859;let o=(Math.PI+-1*((1+3*r1(0,1,Nl(e,this.endFrame,0)))**2*e)/80)%Math.PI*2;e>r-120&&(o=e),X0(this.barrelOrgan,o),$0(this.barrelOrgan,-o),l9(this.barrelOrgan,-o);let a=Nl(e,60,r-60);const m=new y(e*S3(1,10,a)/60,0,0);if((h=this.barrelOrgan)==null||h.position.copy(m),(d=this.barrelOrgan)==null||d.rotation.set(0,0,0),e<i){let u=Nl(e,i,this.startFrame);this.camera.position.addVectors(m.clone(),new y(-.3,1.1,gl(-.8,-2,u))),this.camera.lookAt(m.clone().add(new y(-.3,1.1,0)))}else if(e<s){let u=Nl(e,s,this.startFrame);this.camera.position.addVectors(m.clone(),new y(0,1.4,r1(.8,4.5,u))),this.camera.lookAt(m.clone().add(new y(0,r1(1,.65,u),0)))}else{const u=Nl(e,this.endFrame-s,s);this.camera.fov=r1(22,40,u),this.camera.updateProjectionMatrix(),this.camera.position.addVectors(m.clone(),new y(r1(-3,-1,u),1,-.5)),this.camera.lookAt(m.clone().add(new y(0,.75,-.5)))}this.sphere.material.uniforms.time.value=e/60,this.sphere.material.uniforms.primaryColor.value=Ol.red,this.sphere.material.uniforms.secondaryColor.value=Ol.yellow,this.sphere.position.set(47,1,-.2),this.sphere.rotation.set(e/60,e/50,0);let c=k0(.5,1.5,1,n.sync.flash(e,36,0));c*=r1(0,1,Nl(e,180,s)),this.sphere.scale.set(c,c,c),e>823?(f=this.barrelOrgan)==null||f.scale.set(0,0,0):(q=this.barrelOrgan)==null||q.scale.set(1,1,1),t.setRenderTarget(this.renderTarget),t.toneMapping=Ll,t.outputEncoding=P4,t.render(this.scene,this.camera)}}const zo=`varying vec2 vUv;
uniform float time;
uniform float scale;
uniform vec3 primaryColor;
uniform vec3 secondaryColor;


vec2 rotate(vec2 v, float a) {
    return vec2(v.x * cos(a) + v.y * sin(a), -v.x * sin(a) + v.y * cos(a));
}

void main() {
    vec2 uv = vUv * vec2(16.0, 9.0);
    uv.y += 1.5 * uv.x + time / 1.0;

    if (mod(uv.y, .5) < (scale * 0.5)) {
        gl_FragColor = vec4(primaryColor, 1.0);
    } else {
        gl_FragColor = vec4(secondaryColor, 1.0);
    }
}`;class ko extends n1{constructor(e=1){super();U(this,"scale");this.scale=e}getPoint(e,t=new y){const n=e*3-1.5,i=Math.sin(2*Math.PI*e),s=0;return t.set(n,i,s).multiplyScalar(this.scale)}}class Yo extends z1{constructor(e){super(e);U(this,"startFrame",853);U(this,"endFrame",1718);U(this,"scene",new P1);U(this,"camera",new ql);U(this,"tube1");U(this,"tube2");U(this,"whitebox");U(this,"renderTarget",new wl(640,360,{type:Rl}));U(this,"path");U(this,"barrelOrgan");U(this,"amountRed");this.camera.position.z=3,this.camera.fov=22,this.camera.aspect=16/9,this.camera.updateProjectionMatrix(),this.path=new ko(10),this.whitebox=new I4(new Ql(200,200,200),new Cl({color:t9.yellow,side:xl})),this.scene.add(this.whitebox);const t=new j7(this.path,64,2,64,!1),n=new $4({uniforms:{time:{value:0},scale:{value:1},primaryColor:{value:Ol.red},secondaryColor:{value:Ol.yellow}},fragmentShader:zo,vertexShader:Pl,side:bl});this.tube1=new I4(t,n),this.scene.add(this.tube1),this.tube2=new I4(t,n.clone()),this.tube2.position.setX(-10*3),this.scene.add(this.tube2),e9().then(i=>{this.barrelOrgan=i,this.scene.add(this.barrelOrgan),Z0(this.barrelOrgan),this.barrelOrgan.position.set(0,-.7,0)}),this.amountRed=1}resize(e,t){this.renderTarget.setSize(e,t)}update(e){[0,24].includes(this.renin.sync.step%36)&&(this.amountRed=1),this.amountRed*=.9}render(e,t,n){var g,w,x;const i=Nl(e,this.endFrame-this.startFrame,this.startFrame),s=Nl(e,45,this.startFrame),r=Nl(e,45,this.endFrame-45),o=S3(gl(-.1,0,s),gl(2,2.1,r),i),a=this.path.getPoint(1-o);(g=this.barrelOrgan)==null||g.position.copy(a),(w=this.barrelOrgan)==null||w.rotation.set(e/70,e/80%60,0);const m=n.sync.stepForFrame(e)/n.sync.music.subdivision|0,c=m<84||m==90||m>91?a5(1.8,1,n.sync.flash(e,12)):1,h=a5(r1(0,c,s),0,r);(x=this.barrelOrgan)==null||x.scale.copy(new y(h,h,h));const d=S3(.13,-.13,o),f=this.path.getPoint(1-(o+d));this.camera.position.addVectors(f,new y(Math.sin(e/100)*.1,Math.sin(e/100)*-.1,Math.sin(e/100)*.1)),this.camera.lookAt(a),this.barrelOrgan&&(X0(this.barrelOrgan,e**(1/.7)/100),$0(this.barrelOrgan,e/4),l9(this.barrelOrgan,-1*e/3),J0(this.barrelOrgan,e,this.renderTarget,this.camera)),this.tube1.material.uniforms.time.value=e/60,this.tube2.material.uniforms.time.value=e/60,this.tube1.material.uniforms.primaryColor.value=Ol.blue,this.tube1.material.uniforms.secondaryColor.value=Ol.yellow,this.tube2.material.uniforms.primaryColor.value=Ol.red,this.tube2.material.uniforms.secondaryColor.value=Ol.yellow;let u=.2+a5(1,0,n.sync.flash(e,12,0))*.8;([59,67,70,71].includes(m)||85<=m&&m<90||91<=m&&m<92)&&(u=.2),this.tube1.material.uniforms.scale.value=u,this.tube2.material.uniforms.scale.value=u,t.setRenderTarget(this.renderTarget),t.toneMapping=Ll,t.outputEncoding=t1,t.render(this.scene,this.camera)}}class Ho extends V3{constructor(l){super(l)}load(l,e,t,n){const i=this,s=new W7(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(l,function(r){const o=i.parse(JSON.parse(r));e&&e(o)},t,n)}parse(l){return new Ko(l)}}class Ko{constructor(l){this.isFont=!0,this.type="Font",this.data=l}generateShapes(l,e=100){const t=[],n=Oo(l,e,this.data);for(let i=0,s=n.length;i<s;i++)t.push(...n[i].toShapes());return t}}function Oo(A,l,e){const t=Array.from(A),n=l/e.resolution,i=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*n,s=[];let r=0,o=0;for(let a=0;a<t.length;a++){const m=t[a];if(m===`
uniform float time;
uniform vec3 color;

#define PI 3.1415926535897932384626433832795

float dot2(vec2 v) {
    return dot(v, v);
}

float uni(float d1, float d2) {
    return min(d1, d2);
}


float sdStar(vec2 p, float r, float rf) {
    const vec2 k1 = vec2(0.809016994375, -0.587785252292);
    const vec2 k2 = vec2(-k1.x,k1.y);
    p.x = abs(p.x);
    p -= 2.0*max(dot(k1,p),0.0)*k1;
    p -= 2.0*max(dot(k2,p),0.0)*k2;
    p.x = abs(p.x);
    p.y -= r;
    vec2 ba = rf*vec2(-k1.y,k1.x) - vec2(0,1);
    float h = clamp( dot(p,ba)/dot(ba,ba), 0.0, r );
    return length(p-ba*h) * sign(p.y*ba.x-p.x*ba.y);
}

void main() {
    vec2 uv = vUv - 0.5;

    float angle = atan(uv.x, uv.y);
    float moood = mod(angle * 101.9 +time * 70., 40.);

    float red = moood > 20. ? 191. / 255. : 253. / 255.;
    float green = moood > 20. ? 39. / 255. : 238. / 255.;
    float blue = moood > 20. ? 36. / 255. : 196. / 255.;

    float d = sdStar(vec2(uv.x+0.10*tan(time), uv.y-0.08*tan(time)), 0.02*tan(time), 0.5);
    d = uni(d, sdStar(vec2(uv.x+0.05*tan(time), uv.y+0.09*tan(time)), 0.02*tan(time), 0.5));
    d = uni(d, sdStar(vec2(uv.x-0.12*tan(time), uv.y-0.06*tan(time)), 0.02*tan(time), 0.5));
    d = uni(d, sdStar(vec2(uv.x-0.07*tan(time), uv.y+0.08*tan(time)), 0.02*tan(time), 0.5));
    d = uni(d, sdStar(vec2(uv.x-0.01*tan(time), uv.y-0.10*tan(time)), 0.02*tan(time), 0.5));

    if (time * 60. >= 2721.) {
        d = uni(d, sdStar(uv, 0.9*abs(sin((time * 60. - 2721.) / 60.)), 0.5));
    }

    vec3 banner = vec3(red, green, blue);
    vec3 star = vec3(10./255.,10./255.,51./255.);
    vec3 col = d > 0. ? banner : star;

    gl_FragColor = vec4(col, 1.);
}


`,ra=`
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(mix(color1, color2, vUv.y * 2.1), 1.0);
  }
`;class oa extends z1{constructor(e){var q,u,g,w,x,p,E,v,I,B,Q,T,z,Z,L,S;super(e);U(this,"startFrame",2471);U(this,"scene",new P1);U(this,"camera",new ql);U(this,"group",new e1);U(this,"text1");U(this,"text2");U(this,"text3");U(this,"text4");U(this,"text5");U(this,"text6");U(this,"text7");U(this,"text8");U(this,"skybox");U(this,"renderTarget",new wl(640,360,{type:Rl}));const i={font:new Ho().parse(sa),size:1.2,height:.3,width:.1},s=new $4({uniforms:{color1:{value:new g4("#280809")},color2:{value:new g4("#000")}},vertexShader:Pl,fragmentShader:ra});this.text1=new I4(new U1("N",i),s),this.text2=new I4(new U1("I",i),s),this.text3=new I4(new U1("N",i),s),this.text4=new I4(new U1("J",i),s),this.text5=new I4(new U1("A",i),s),this.text6=new I4(new U1("D",i),s),this.text7=new I4(new U1("E",i),s),this.text8=new I4(new U1("V",i),s),this.text1.geometry.computeBoundingBox(),this.text2.geometry.computeBoundingBox(),this.text3.geometry.computeBoundingBox(),this.text4.geometry.computeBoundingBox(),this.text5.geometry.computeBoundingBox(),this.text6.geometry.computeBoundingBox(),this.text7.geometry.computeBoundingBox();const r=((u=(q=this.text1.geometry.boundingBox)==null?void 0:q.max)==null?void 0:u.x)||0,o=((w=(g=this.text2.geometry.boundingBox)==null?void 0:g.max)==null?void 0:w.x)||0,a=((p=(x=this.text3.geometry.boundingBox)==null?void 0:x.max)==null?void 0:p.x)||0,m=((v=(E=this.text4.geometry.boundingBox)==null?void 0:E.max)==null?void 0:v.x)||0,c=((B=(I=this.text5.geometry.boundingBox)==null?void 0:I.max)==null?void 0:B.x)||0,h=((T=(Q=this.text6.geometry.boundingBox)==null?void 0:Q.max)==null?void 0:T.x)||0,d=((Z=(z=this.text7.geometry.boundingBox)==null?void 0:z.max)==null?void 0:Z.x)||0;(S=(L=this.text8.geometry.boundingBox)==null?void 0:L.max)!=null&&S.x,this.text2.position.x=r,this.text3.position.x=r+o,this.text4.position.x=r+o+a,this.text5.position.x=r+o+a+m,this.text6.position.x=r+o+a+m+c,this.text7.position.x=r+o+a+m+c+h,this.text8.position.x=r+o+a+m+c+h+d,this.group.add(this.text1),this.group.add(this.text2),this.group.add(this.text3),this.group.add(this.text4),this.group.add(this.text5),this.group.add(this.text6),this.group.add(this.text7),this.group.add(this.text8),this.group.position.x=-3.1,this.group.position.y=-.4,this.scene.add(this.group),this.camera.position.z=10,this.camera.fov=22,this.camera.aspect=16/9,this.camera.updateProjectionMatrix(),this.skybox=new I4(new Ql(100,100,100),new $4({uniforms:{time:{value:0},color:{value:"#ffffff"}},fragmentShader:Aa,vertexShader:Pl,side:bl})),this.scene.add(this.skybox),this.skybox.material.uniforms.color.value=new g4("#ffffff");const f=new Qr(16777215,4);this.scene.add(f)}resize(e,t){this.renderTarget.setSize(e,t)}render(e,t,n){const s=Nl(e,20,2626),r=r1(S3(-100,0,Nl(e,20,2489-20)),20,s),o=r1(S3(-100,0,Nl(e,20,2524-20)),20,s),a=r1(S3(-100,0,Nl(e,20,2560-20)),20,s);this.group.children[0].position.setZ(r),this.group.children[1].position.setZ(r),this.group.children[2].position.setZ(r),this.group.children[3].position.setZ(o),this.group.children[4].position.setZ(o),this.group.children[5].position.setZ(a),this.group.children[6].position.setZ(a),this.group.children[7].position.setZ(a),this.skybox.material.uniforms.time.value=e/60,t.setRenderTarget(this.renderTarget),t.toneMapping=Ll,t.outputEncoding=t1,t.render(this.scene,this.camera)}}class J6 extends z1{constructor(e,t){super(e);U(this,"canvas",document.createElement("canvas"));U(this,"texture",new H3(this.canvas));U(this,"ctx",this.canvas.getContext("2d"));U(this,"text","Yolo");U(this,"woodBackground");this.woodBackground=t}resize(e,t){this.canvas.width=e,this.canvas.height=t}render(e,t,n){if(!this.ctx)return;const i=this.ctx,s=this.canvas.width,r=this.canvas.height/2,o=s/16,a=r/10,m=s/10|0;i.fillStyle="white",this.woodBackground&&i.drawImage(this.woodBackground,0,0),i.font=`${m}px Carnivalee`,i.textAlign="center",i.textBaseline="middle";const c=i.measureText(this.text).width+o;i.fillStyle="rgba(0, 0, 0, 0.6)",i.fillRect(s/2-c/2,a,c,r-a*2),i.fillStyle="#111",i.fillText(this.text,s/2,r/2-1),i.fillStyle="#fffbcc",i.fillText(this.text,s/2,r/2),this.texture.needsUpdate=!0}}const aa=""+new URL("Wood_025_ambientOcclusion.dfe524ce.jpg",import.meta.url).href,ma=""+new URL("Wood_025_normal.86031e3d.jpg",import.meta.url).href,ca=""+new URL("Wood_025_roughness.816b3c78.jpg",import.meta.url).href,ha=""+new URL("Wood_025_height.d51612ab.png",import.meta.url).href,ua=""+new URL("Wood_025_basecolor.bec03a3e.jpg",import.meta.url).href,da=`varying vec2 vUv;
uniform float time;
uniform vec3 color;

#define M_PI 3.1415926535897932384626433832795
#define thick 0.002
#define twister_thick 0.10

void main() {
    vec2 uv = vUv - 0.5;    
    uv = vec2(mod(uv.x*3., 1.), uv.y*4.);
	
	float twist = (M_PI / 360.0 * (time * 150.0 + 
				(uv.y * 240.0) * sin((((time * 150.0 / 2.0) + 
				(uv.y * 240.0)) * 3.0 / 4.0) * M_PI / 180.0) )) * 2.;
	
	float x0 = 0.5 + (cos(twist) * twister_thick);
	float x1 = 0.5 + (cos(0.5 * M_PI + twist) * twister_thick);
	float x2 = 0.5 + (cos(1.0 * M_PI + twist) * twister_thick);
	float x3 = 0.5 + (cos(1.5 * M_PI + twist) * twister_thick);
	
	gl_FragColor = vec4(233. / 255., 219. / 255., 173. / 255. ,1.0);

	if (x0 < x1) {
        if ((uv.x > x0) && (uv.x < x1)) {
            gl_FragColor = vec4(vec3(95./255.,27./255.,31./255.),1.0);
        }
	}
	if (x1 < x2) {
        if ((uv.x > x1) && (uv.x < x2)) {
            gl_FragColor = vec4(vec3(38./255.,28./255.,51./255.),1.0);
        }
	}
	if (x2 < x3) {
        if ((uv.x > x2) && (uv.x < x3)) {
            gl_FragColor = vec4(vec3(80./255.,85./255.,35./255.),1.0);
        }
		
	}
	if (x3 < x0) {
        if ((uv.x > x3) && (uv.x < x0)) {
            gl_FragColor = vec4(vec3(85./255.,40./255.,44./255.),1.0);
        }
	}
 }`;async function i2(A){const l=new G0;return new Promise(e=>{l.load(A,e)})}async function qa(){return{woodAoMap:await i2(aa),woodNormalMap:await i2(ma),woodRoughnessMap:await i2(ca),woodDisplacementMap:await i2(ha),woodBackground:await i2(ua)}}class fa extends z1{constructor(e){super(e);U(this,"startFrame",1718);U(this,"endFrame",2471);U(this,"scene",new P1);U(this,"camera",new ql);U(this,"pole");U(this,"skybox");U(this,"lights");U(this,"renderTarget",new wl(640,360,{type:Rl}));this.children=B5({texty:new J6(e)}),this.pole=new I4(new K7(.2,.2,20,32),new M1({color:11154193})),this.scene.add(this.pole),this.camera.position.z=10,this.camera.fov=22,this.camera.aspect=16/9,this.camera.updateProjectionMatrix();const t=new P0(16777215,2,20,20);t.position.set(0,0,50),this.scene.add(t),this.lights=new e1;for(const c of[0,Math.PI*2/3,Math.PI*4/3]){const h=new u5(16777215,4);h.castShadow=!0,h.position.set(Math.sin(c)*5,.5,Math.cos(c)*5),this.lights.add(h);const d=new u5(16777215,1);d.castShadow=!0,d.position.set(-Math.sin(c)*5,-1,-Math.cos(c)*5),this.lights.add(d)}this.scene.add(this.lights);const n=["Poo-Brain",["Outracks","Logicoma"],"Ephidrena","Schnappsgirls","mrdoob",["Truck","ponk"],["everyone @ Revision","Ninjadevers @ home"]],i=3,s=.5,r=new b3;r.moveTo(-i/2,0),r.lineTo(i/2,0),r.lineTo(i/2+s/2,s/2),r.lineTo(i/2,s),r.lineTo(-i/2,s),r.lineTo(-i/2,0);const o={steps:1,depth:.1,bevelEnabled:!0,bevelThickness:.01,bevelSize:.05,bevelOffset:0,bevelSegments:10},a=new x5(r,o),m=new O7(r);qa().then(c=>{document.fonts.load("10px Carnivalee","yolo").then(()=>{for(const[h,d]of n.entries()){const f=typeof d=="string"?[d]:d;for(const[q,u]of f.entries()){const g=(f.length-1)*.25,w=new J6(e,c.woodBackground);w.text=u,w.resize(i*150,s*200),w.texture.repeat.set(1/3,1),w.texture.offset.set(.5,.5),w.render(0,e.renderer,e);const x=new M1({map:w.texture,aoMap:new nl(c.woodAoMap),normalMap:new nl(c.woodNormalMap),roughnessMap:new nl(c.woodRoughnessMap),displacementMap:new nl(c.woodDisplacementMap),side:a1,shadowSide:a1}),p=1-h*1.2-q*.6+g,E=new I4(a,[x,new M1({color:11167300})]);E.position.set(-.15,p,.25);const v=new e1;v.add(E),v.rotation.y=(h+1)*Math.PI/3,v.rotation.z=h*Math.PI/200+q*.04;const I=new I4(m,new M1({color:10048819,side:xl}));I.position.set(-.15,p,.24),v.add(I),this.scene.add(v)}}})}),this.skybox=new I4(new Ql(100,100,100),new $4({uniforms:{time:{value:0},color:{value:"#ffffff"}},fragmentShader:da,vertexShader:Pl,side:xl})),this.scene.add(this.skybox)}resize(e,t){this.renderTarget.setSize(e,t)}render(e,t,n){const i=n.sync.stepForFrame(this.startFrame)/(n.sync.music.beatsPerBar*n.sync.music.subdivision)|0,o=((n.sync.stepForFrame(e)/(n.sync.music.beatsPerBar*n.sync.music.subdivision)|0)-i-1)/2|0,a=n.sync.frameForStep(i*36+36),m=e<a?a:e,c=Math.PI/3,h=o*c+k0(0,c,1.5,n.sync.flash(m,72,36)),d=4.5-(e-this.startFrame)/60,f=gl(10,7,(e-this.startFrame)/(60*10));this.camera.position.set(Math.sin(h)*f,d,Math.cos(h)*f),this.camera.lookAt(0,d-gl(3,-2,(e-this.startFrame)/700),0),this.lights.position.y=d,this.skybox.material.uniforms.time.value=e/60,t.setRenderTarget(this.renderTarget),t.toneMapping=Ll,t.outputEncoding=t1,t.render(this.scene,this.camera)}}class ga extends z1{constructor(e){super(e);U(this,"scene",new P1);U(this,"camera",new C1(-1,1,1,-1));U(this,"renderTarget",new wl(640,360));U(this,"screen",new I4(new Ql(2,2,2),new Cl));this.children=B5({barrelOrgan:new Po(e),tunnel:new Yo(e),shoutouts:new fa(e),ending:new oa(e)}),this.scene.add(this.screen),this.scene.add(this.camera),this.camera.position.z=10}resize(e,t){this.renderTarget.setSize(e,t)}render(e,t){var n,i,s,r;this.screen.material.map=null,(n=this.children)!=null&&n.barrelOrgan.isActive&&(this.screen.material.map=this.children.barrelOrgan.renderTarget.texture),(i=this.children)!=null&&i.tunnel.isActive&&(this.screen.material.map=this.children.tunnel.renderTarget.texture),(s=this.children)!=null&&s.shoutouts.isActive&&(this.screen.material.map=this.children.shoutouts.renderTarget.texture),(r=this.children)!=null&&r.ending.isActive&&(this.screen.material.map=this.children.ending.renderTarget.texture),this.screen.material.needsUpdate=!0,t.setRenderTarget(this.renderTarget),t.render(this.scene,this.camera)}}const pa=`varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform float frame;

void main() {
    vec3 color = texture2D(tDiffuse, vUv).rgb;

    /* vignette */
    color *= 1. - 3. * pow(length(vUv - 0.5), 4.);


    /* fade in from black */
    color = mix(vec3(0.), color, smoothstep(0., 120., frame));
    vec3 yellow = vec3(233., 219., 173.)/255.;

    if (frame > 1717.) {
        color = mix(yellow, color, smoothstep(1717., 1717. + 80., frame));
    }

    gl_FragColor = vec4(color, 1.);
}
`,Z6={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class _2{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xa=new C1(-1,1,1,-1,0,1),l8=new fl;l8.setAttribute("position",new J4([-1,3,0,-1,-1,0,3,-1,0],3));l8.setAttribute("uv",new J4([0,2,0,0,2,0],2));class n9{constructor(l){this._mesh=new I4(l8,l)}dispose(){this._mesh.geometry.dispose()}render(l){l.render(this._mesh,xa)}get material(){return this._mesh.material}set material(l){this._mesh.material=l}}class X6 extends _2{constructor(l,e){super(),this.textureID=e!==void 0?e:"tDiffuse",l instanceof $4?(this.uniforms=l.uniforms,this.material=l):l&&(this.uniforms=m2.clone(l.uniforms),this.material=new $4({defines:Object.assign({},l.defines),uniforms:this.uniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader})),this.fsQuad=new n9(this.material)}render(l,e,t){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=t.texture),this.fsQuad.material=this.material,this.renderToScreen?(l.setRenderTarget(null),this.fsQuad.render(l)):(l.setRenderTarget(e),this.clear&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),this.fsQuad.render(l))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $6 extends _2{constructor(l,e){super(),this.scene=l,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(l,e,t){const n=l.getContext(),i=l.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let s,r;this.inverse?(s=0,r=1):(s=1,r=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),i.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),i.buffers.stencil.setClear(r),i.buffers.stencil.setLocked(!0),l.setRenderTarget(t),this.clear&&l.clear(),l.render(this.scene,this.camera),l.setRenderTarget(e),this.clear&&l.clear(),l.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(n.EQUAL,1,4294967295),i.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),i.buffers.stencil.setLocked(!0)}}class Ba extends _2{constructor(){super(),this.needsSwap=!1}render(l){l.state.buffers.stencil.setLocked(!1),l.state.buffers.stencil.setTest(!1)}}class wa{constructor(l,e){if(this.renderer=l,e===void 0){const t=l.getSize(new n4);this._pixelRatio=l.getPixelRatio(),this._width=t.width,this._height=t.height,e=new wl(this._width*this._pixelRatio,this._height*this._pixelRatio),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Z6===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),X6===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new X6(Z6),this.clock=new _r}swapBuffers(){const l=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=l}addPass(l){this.passes.push(l),l.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(l,e){this.passes.splice(e,0,l),l.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(l){const e=this.passes.indexOf(l);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(l){for(let e=l+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(l){l===void 0&&(l=this.clock.getDelta());const e=this.renderer.getRenderTarget();let t=!1;for(let n=0,i=this.passes.length;n<i;n++){const s=this.passes[n];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,l,t),s.needsSwap){if(t){const r=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,l),o.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}$6!==void 0&&(s instanceof $6?t=!0:s instanceof Ba&&(t=!1))}}this.renderer.setRenderTarget(e)}reset(l){if(l===void 0){const e=this.renderer.getSize(new n4);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,l=this.renderTarget1.clone(),l.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=l,this.renderTarget2=l.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(l,e){this._width=l,this._height=e;const t=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(t,n),this.renderTarget2.setSize(t,n);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(t,n)}setPixelRatio(l){this._pixelRatio=l,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new C1(-1,1,1,-1,0,1);const i9=new fl;i9.setAttribute("position",new J4([-1,3,0,-1,-1,0,3,-1,0],3));i9.setAttribute("uv",new J4([0,2,0,0,2,0],2));class Ma extends _2{constructor(l,e,t,n,i){super(),this.scene=l,this.camera=e,this.overrideMaterial=t,this.clearColor=n,this.clearAlpha=i!==void 0?i:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new g4}render(l,e,t){const n=l.autoClear;l.autoClear=!1;let i,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(l.getClearColor(this._oldClearColor),i=l.getClearAlpha(),l.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&l.clearDepth(),l.setRenderTarget(this.renderToScreen?null:t),this.clear&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),l.render(this.scene,this.camera),this.clearColor&&l.setClearColor(this._oldClearColor,i),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),l.autoClear=n}}const s2={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new n4(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},A5={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new n4(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},d7={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new n4(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class Ea extends _2{constructor(l,e){super(),this.edgesRT=new wl(l,e,{depthBuffer:!1}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new wl(l,e,{depthBuffer:!1}),this.weightsRT.texture.name="SMAAPass.weights";const t=this,n=new Image;n.src=this.getAreaTexture(),n.onload=function(){t.areaTexture.needsUpdate=!0},this.areaTexture=new nl,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=n,this.areaTexture.minFilter=Il,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const i=new Image;i.src=this.getSearchTexture(),i.onload=function(){t.searchTexture.needsUpdate=!0},this.searchTexture=new nl,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=i,this.searchTexture.magFilter=ol,this.searchTexture.minFilter=ol,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,s2===void 0&&console.error("THREE.SMAAPass relies on SMAAShader"),this.uniformsEdges=m2.clone(s2.uniforms),this.uniformsEdges.resolution.value.set(1/l,1/e),this.materialEdges=new $4({defines:Object.assign({},s2.defines),uniforms:this.uniformsEdges,vertexShader:s2.vertexShader,fragmentShader:s2.fragmentShader}),this.uniformsWeights=m2.clone(A5.uniforms),this.uniformsWeights.resolution.value.set(1/l,1/e),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new $4({defines:Object.assign({},A5.defines),uniforms:this.uniformsWeights,vertexShader:A5.vertexShader,fragmentShader:A5.fragmentShader}),this.uniformsBlend=m2.clone(d7.uniforms),this.uniformsBlend.resolution.value.set(1/l,1/e),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new $4({uniforms:this.uniformsBlend,vertexShader:d7.vertexShader,fragmentShader:d7.fragmentShader}),this.needsSwap=!1,this.fsQuad=new n9(null)}render(l,e,t){this.uniformsEdges.tDiffuse.value=t.texture,this.fsQuad.material=this.materialEdges,l.setRenderTarget(this.edgesRT),this.clear&&l.clear(),this.fsQuad.render(l),this.fsQuad.material=this.materialWeights,l.setRenderTarget(this.weightsRT),this.clear&&l.clear(),this.fsQuad.render(l),this.uniformsBlend.tColor.value=t.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(l.setRenderTarget(null),this.fsQuad.render(l)):(l.setRenderTarget(e),this.clear&&l.clear(),this.fsQuad.render(l))}setSize(l,e){this.edgesRT.setSize(l,e),this.weightsRT.setSize(l,e),this.materialEdges.uniforms.resolution.value.set(1/l,1/e),this.materialWeights.uniforms.resolution.value.set(1/l,1/e),this.materialBlend.uniforms.resolution.value.set(1/l,1/e)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}class Ca extends z1{constructor(e){super(e);U(this,"scene",new P1);U(this,"camera",new C1(-1,1,1,-1));U(this,"screen",new I4(new Ql(2,2,2),new $4({uniforms:{frame:{value:0},tDiffuse:{value:null}},fragmentShader:pa,vertexShader:Pl})));U(this,"composer");U(this,"smaaPass");this.scene.add(this.screen),this.camera.position.z=10,this.children=B5({switcher:new ga(e)}),this.composer=new wa(e.renderer,e.options.productionMode?void 0:e.screenRenderTarget);const t=new Ma(this.scene,this.camera);this.composer.addPass(t),this.smaaPass=new Ea(640,360),this.composer.addPass(this.smaaPass),e.options.productionMode||(this.composer.renderToScreen=!1)}resize(e,t){this.composer.setSize(e,t),this.composer.setPixelRatio(window.devicePixelRatio),this.smaaPass.setSize(e*window.devicePixelRatio,t*window.devicePixelRatio)}render(e,t,n){var i;this.screen.material.uniforms.frame.value=e,this.screen.material.uniforms.tDiffuse.value=(i=this.children)==null?void 0:i.switcher.renderTarget.texture,this.screen.material.needsUpdate=!0,this.composer.render()}}const Tl=new m5({music:{src:c9,bpm:201,subdivision:12,beatOffset:0,beatsPerBar:3},root:Ca,productionMode:!1,rendererOptions:{powerPreference:"high-performance"},toneMapping:i0}),Gl=document.createElement("div");Gl.style.position="absolute";Gl.style.left="0px";Gl.style.right="0px";Gl.style.top="0px";Gl.style.bottom="0px";Gl.style.background="#5f1b1f";Gl.style.display="flex";Gl.style.alignItems="center";Gl.style.justifyContent="center";document.body.appendChild(Gl);{const A=l=>new Promise(e=>setTimeout(e,l));(async()=>{Gl.innerHTML=`
<div style="line-height:1.3;text-align:center;color:#ffffff;width:100%;max-width:500px;
font-size:20px;
font-weight: 100;
font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;"
>
<div style="font-size:64px; margin-bottom: 16px">Crank You<br />Very Much</div>
<div style=margin-bottom:32px>by Ninjadev</div>

<button style="visibility:hidden; padding: 4px 16px; font-size:48px;">Start</button>
<div id=loading>Loading, please wait...</div>

<div style="bottom:16px;position:absolute;bottom:16px;left:0;right:0">Released at Revision 2023.</div>
</div>
    `,await A(50),Tl.isFullscreen=!0;let l=window.innerWidth,e=window.innerHeight;const t=16/9;l/e>=t?l=e*t:e=l/t,Tl.resize(l,e);for(let s=0;s<34;s++)await A(1),Tl.jumpToFrame(s*100),Tl.update(s*100),Tl.render();await A(100),Tl.jumpToFrame(0),await A(100),Tl.resize(l,e);const n=document.querySelector("#loading");n.style.visibility="hidden";const i=document.querySelector("button");i==null||i.addEventListener("click",async()=>{document.body.requestFullscreen(),A(1e3);let s=window.innerWidth,r=window.innerHeight;const o=16/9;s/r>=o?s=r*o:r=s/o,Tl.renderer.domElement.width=s,Tl.renderer.domElement.height=r,Tl.resize(s,r),Tl.renderer.setPixelRatio(1),await A(200);for(let a=0;a<100;a++)await A(1),Gl.style.opacity=`1 - ${a} / 100`;Gl.remove(),await A(1500),Tl.music.play(),Tl.renderer.domElement.style.cursor="none"}),i.style.visibility="visible"})()}Tl.loop();
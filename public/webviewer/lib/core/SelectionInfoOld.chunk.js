/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[1],{327:function(le,y,b){b.r(y);var w=b(335),z=b(84),ke=b(27),db=b(52);le=function(){function b(){this.nb=this.ce=this.Bb=this.Qb=null;this.re=!1}b.prototype.clear=function(){Object(ke.b)(this.Qb);this.Bb="";Object(ke.b)(this.ce);Object(ke.b)(this.nb);this.re=!1};b.prototype.vc=function(){this.Qb=[];this.ce=[];this.nb=[];this.re=!1};b.prototype.mu=function(b){for(var a="",f=0,e,h,r;f<b.length;)e=b.charCodeAt(f),9==e?(a+=String.fromCharCode(10),
f++):128>e?(a+=String.fromCharCode(e),f++):191<e&&224>e?(h=b.charCodeAt(f+1),a+=String.fromCharCode((e&31)<<6|h&63),f+=2):(h=b.charCodeAt(f+1),r=b.charCodeAt(f+2),a+=String.fromCharCode((e&15)<<12|(h&63)<<6|r&63),f+=3);return a};b.prototype.initData=function(b){this.Qb=[];this.ce=[];this.nb=[];this.re=!1;try{var a=new db.a(b);this.Bb="";a.za();if(!a.advance())return;var f=a.current.textContent;this.Bb=f=this.mu(f);Object(ke.b)(this.ce);a.advance();f=a.current.textContent;for(var e=f.split(","),h=
Object(z.a)(e);h.Jj();){var r=h.current;try{var w=parseInt(r.trim());this.ce.push(w)}catch(qe){}}Object(ke.b)(this.Qb);a.advance();f=a.current.textContent;e=f.split(",");for(var y=Object(z.a)(e);y.Jj();){r=y.current;try{w=parseFloat(r.trim()),this.Qb.push(w)}catch(qe){}}Object(ke.b)(this.nb);a.advance();f=a.current.textContent;e=f.split(",");b=[];a=[];f=0;for(var le=Object(z.a)(e);le.Jj();){r=le.current;switch(r){case "Q":f=1;break;case "R":f=2;break;case "S":f=3;break;default:f=0}if(f)b.push(0),
a.push(f);else try{w=parseFloat(r.trim()),b.push(w),a.push(f)}catch(qe){return}}f=0;var pe=b.length;for(le=r=e=0;le<pe;){var ue=a[le];if(0<ue)f=ue,++le,3===f&&(e=b[le],r=b[le+1],le+=2);else if(1===f)for(w=0;8>w;++w)this.nb.push(b[le++]);else if(2===f){var se=b[le++];var re=b[le++];var Ce=b[le++];var ye=b[le++];this.nb.push(se);this.nb.push(re);this.nb.push(Ce);this.nb.push(re);this.nb.push(Ce);this.nb.push(ye);this.nb.push(se);this.nb.push(ye)}else 3===f&&(se=b[le++],re=e,Ce=b[le++],ye=r,this.nb.push(se),
this.nb.push(re),this.nb.push(Ce),this.nb.push(re),this.nb.push(Ce),this.nb.push(ye),this.nb.push(se),this.nb.push(ye))}}catch(qe){return}this.Bb.length&&this.Bb.length===this.ce.length&&8*this.Bb.length===this.nb.length&&(this.re=!0)};b.prototype.ready=function(){return this.re};b.prototype.Nr=function(){var b=new w.a;if(!this.Qb.length)return b.Vf(this.Qb,-1,this.Bb,this.nb,0),b;b.Vf(this.Qb,1,this.Bb,this.nb,1);return b};b.prototype.Ye=function(){return this.nb};return b}();y["default"]=le},335:function(le,
y,b){var w=b(50),z=b(180),ke=b(348);le=function(){function b(){this.Fd=0;this.cb=this.wa=this.ye=null;this.tc=0;this.Ed=null}b.prototype.vc=function(){this.Fd=-1;this.tc=0;this.Ed=[]};b.prototype.Vf=function(b,h,a,f,e){this.Fd=h;this.tc=e;this.Ed=[];this.ye=b;this.wa=a;this.cb=f};b.prototype.Ga=function(b){return this.Fd===b.Fd};b.prototype.Yh=function(){return Math.abs(this.ye[this.Fd])};b.prototype.Gj=function(){return 0<this.ye[this.Fd]};b.prototype.Ac=function(){var b=this.Gj()?6:10,h=new ke.a;
h.Vf(this.ye,this.Fd+b,this.Fd,this.wa,this.cb,1);return h};b.prototype.nJ=function(b){if(0>b||b>=this.Yh()){var h=new ke.a;h.Vf(this.ye,-1,-1,this.wa,this.cb,0);return h}var a=this.Gj()?6:10,f=this.Gj()?5:11;h=new ke.a;h.Vf(this.ye,this.Fd+a+f*b,this.Fd,this.wa,this.cb,1+b);return h};b.prototype.Bf=function(){var r=this.Fd+parseInt(this.ye[this.Fd+1]);if(r>=this.ye.length){var h=new b;h.Vf(this.ye,-1,this.wa,this.cb,0);return h}h=new b;h.Vf(this.ye,r,this.wa,this.cb,this.tc+1);return h};b.prototype.bc=
function(b){if(this.Gj())b.fa=this.ye[this.Fd+2+0],b.ba=this.ye[this.Fd+2+1],b.ga=this.ye[this.Fd+2+2],b.ca=this.ye[this.Fd+2+3];else{for(var h=1.79769E308,a=w.a.MIN,f=1.79769E308,e=w.a.MIN,n=0;4>n;++n){var r=this.ye[this.Fd+2+2*n],y=this.ye[this.Fd+2+2*n+1];h=Math.min(h,r);a=Math.max(a,r);f=Math.min(f,y);e=Math.max(e,y)}b.fa=h;b.ba=f;b.ga=a;b.ca=e}};b.prototype.Wh=function(){if(this.Ed.length)return this.Ed[0];var b=new z.a,h=new z.a,a=new ke.a;a.vc();var f=this.Ac(),e=new ke.a;e.vc();for(var n=
this.Ac();!n.Ga(a);n=n.We())e=n;a=Array(8);n=Array(8);f.oe(0,a);b.x=(a[0]+a[2]+a[4]+a[6])/4;b.y=(a[1]+a[3]+a[5]+a[7])/4;e.oe(e.Tc()-1,n);h.x=(n[0]+n[2]+n[4]+n[6])/4;h.y=(n[1]+n[3]+n[5]+n[7])/4;.01>Math.abs(b.x-h.x)&&.01>Math.abs(b.y-h.y)&&this.Ed.push(0);b=Math.atan2(h.y-b.y,h.x-b.x);b*=180/3.1415926;0>b&&(b+=360);this.Ed.push(b);return 0};return b}();y.a=le},348:function(le,y,b){var w=b(335),z=b(100),ke=b(50);le=function(){function b(){this.Ni=this.jd=0;this.cb=this.wa=this.Qb=null;this.tc=0}b.prototype.vc=
function(){this.Ni=this.jd=-1;this.tc=0};b.prototype.Vf=function(b,h,a,f,e,n){this.jd=h;this.Ni=a;this.Qb=b;this.wa=f;this.cb=e;this.tc=n};b.prototype.Ga=function(b){return this.jd===b.jd};b.prototype.Tc=function(){return parseInt(this.Qb[this.jd])};b.prototype.eh=function(){return parseInt(this.Qb[this.jd+2])};b.prototype.Db=function(){return parseInt(this.Qb[this.jd+1])};b.prototype.Gj=function(){return 0<this.Qb[this.Ni]};b.prototype.AU=function(){return Math.abs(this.Qb[this.Ni])};b.prototype.We=
function(){var r=this.Gj(),h=r?5:11;if(this.jd>=this.Ni+(r?6:10)+(this.AU()-1)*h)return r=new b,r.Vf(this.Qb,-1,-1,this.wa,this.cb,0),r;r=new b;r.Vf(this.Qb,this.jd+h,this.Ni,this.wa,this.cb,this.tc+1);return r};b.prototype.ZT=function(b){var h=this.Tc();return 0>b||b>=h?-1:parseInt(this.Qb[this.jd+1])+b};b.prototype.oe=function(b,h){b=this.ZT(b);if(!(0>b)){var a=new w.a;a.Vf(this.Qb,this.Ni,this.wa,this.cb,0);if(a.Gj()){var f=new z.a;a.bc(f);a=f.ba<f.ca?f.ba:f.ca;f=f.ba>f.ca?f.ba:f.ca;b*=8;h[0]=
this.cb[b];h[1]=a;h[2]=this.cb[b+2];h[3]=h[1];h[4]=this.cb[b+4];h[5]=f;h[6]=this.cb[b+6];h[7]=h[5]}else for(b*=8,a=0;8>a;++a)h[a]=this.cb[b+a]}};b.prototype.Md=function(b){var h=new w.a;h.Vf(this.Qb,this.Ni,this.wa,this.cb,0);if(h.Gj()){var a=this.Qb[this.jd+3],f=this.Qb[this.jd+4];if(a>f){var e=a;a=f;f=e}e=new z.a;h.bc(e);h=e.ba<e.ca?e.ba:e.ca;e=e.ba>e.ca?e.ba:e.ca;b[0]=a;b[1]=h;b[2]=f;b[3]=h;b[4]=f;b[5]=e;b[6]=a;b[7]=e}else for(a=this.jd+3,f=0;8>f;++f)b[f]=this.Qb[a+f]};b.prototype.bc=function(b){var h=
new w.a;h.Vf(this.Qb,this.Ni,this.wa,this.cb,0);if(h.Gj()){var a=this.Qb[this.jd+3],f=this.Qb[this.jd+4];if(a>f){var e=a;a=f;f=e}e=new z.a;h.bc(e);h=e.ba<e.ca?e.ba:e.ca;e=e.ba>e.ca?e.ba:e.ca;b[0]=a;b[1]=h;b[2]=f;b[3]=e}else{a=1.79769E308;f=ke.a.MIN;h=1.79769E308;e=ke.a.MIN;for(var n=this.jd+3,r=0;4>r;++r){var y=this.Qb[n+2*r],db=this.Qb[n+2*r+1];a=Math.min(a,y);f=Math.max(f,y);h=Math.min(h,db);e=Math.max(e,db)}b[0]=a;b[1]=h;b[2]=f;b[3]=e}};return b}();y.a=le}}]);}).call(this || window)
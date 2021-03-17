/*
录音
https://github.com/xiangyuecn/Recorder
src: extensions/waveview.js
*/
!function(){var e=function(e){return new t(e)},t=function(e){var t=this,i={scale:2,speed:8,lineWidth:3,linear1:[0,"rgba(150,96,238,1)",.2,"rgba(170,79,249,1)",1,"rgba(53,199,253,1)"],linear2:[0,"rgba(209,130,255,0.6)",1,"rgba(53,199,255,0.6)"],linearBg:[0,"rgba(255,255,255,0.2)",1,"rgba(54,197,252,0.2)"]};for(var n in e)i[n]=e[n];t.set=e=i;var a=e.elem;a&&("string"==typeof a?a=document.querySelector(a):a.length&&(a=a[0])),a&&(e.width=a.offsetWidth,e.height=a.offsetHeight);var r=e.scale,h=e.width*r,o=e.height*r,l=t.elem=document.createElement("div"),s=["","transform-origin:0 0;","transform:scale("+1/r+");"];l.innerHTML='<div style="width:'+e.width+"px;height:"+e.height+'px;overflow:hidden"><div style="width:'+h+"px;height:"+o+"px;"+s.join("-webkit-")+s.join("-ms-")+s.join("-moz-")+s.join("")+'"><canvas/></div></div>';var g=t.canvas=l.querySelector("canvas"),d=t.ctx=g.getContext("2d");g.width=h,g.height=o,t.linear1=t.genLinear(d,h,e.linear1),t.linear2=t.genLinear(d,h,e.linear2),t.linearBg=t.genLinear(d,o,e.linearBg,!0),a&&(a.innerHTML="",a.appendChild(l)),t._phase=0};t.prototype=e.prototype={genLinear:function(e,t,i,n){for(var a=e.createLinearGradient(0,0,n?0:t,n?t:0),r=0;r<i.length;)a.addColorStop(i[r++],i[r++]);return a},genPath:function(e,t,i){for(var n=[],a=this.set,r=a.scale,h=a.width*r,o=a.height*r/2,l=0;l<h;l+=r){var s=(1+Math.cos(Math.PI+l/h*2*Math.PI))/2*o*t*Math.sin(2*Math.PI*(l/h)*e+i)+o;n.push(s)}return n},input:function(e,t,i){var n=this,a=n.set,r=n.ctx,h=a.scale,o=a.width*h,l=a.height*h,s=a.speed*e.length/i,g=n._phase-=s,d=t/100,c=n.genPath(2,d,g),v=n.genPath(1.8,d,g+5*s);r.clearRect(0,0,o,l),r.beginPath();for(var f=0,p=0;p<o;f++,p+=h)0==p?r.moveTo(p,c[f]):r.lineTo(p,c[f]);f--;for(p=o-1;0<=p;f--,p-=h)r.lineTo(p,v[f]);r.closePath(),r.fillStyle=n.linearBg,r.fill(),n.drawPath(v,n.linear2),n.drawPath(c,n.linear1)},drawPath:function(e,t){var i=this.set,n=this.ctx,a=i.scale,r=i.width*a;n.beginPath();for(var h=0,o=0;o<r;h++,o+=a)0==o?n.moveTo(o,e[h]):n.lineTo(o,e[h]);n.lineWidth=i.lineWidth*a,n.strokeStyle=t,n.stroke()}},Recorder.WaveView=e}();
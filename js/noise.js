const noise=()=>{let e,t,n,i,o,a=[],d=0;const r=()=>{const e=t.createImageData(n,i),o=new Uint32Array(e.data.buffer),d=o.length;for(let e=0;e<d;e++)Math.random()<.5&&(o[e]=4278190080);a.push(e)},w=()=>{9===d?d=0:d++,t.putImageData(a[d],0,0),o=window.setTimeout((()=>{window.requestAnimationFrame(w)}),40)};e=document.getElementById("noise"),t=e.getContext("2d"),(()=>{n=window.innerWidth,i=window.innerHeight,e.width=n,e.height=i;for(let e=0;e<10;e++)r();w()})()};noise();
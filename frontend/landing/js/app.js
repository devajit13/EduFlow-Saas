
menu.onclick=()=>nav.classList.toggle('show');
document.querySelectorAll('.faq button').forEach(b=>b.onclick=()=>{const d=b.nextElementSibling;d.style.display=d.style.display==='block'?'none':'block';});
document.querySelectorAll('.count').forEach(c=>{let t=+c.dataset.target,v=0,s=Math.max(1,Math.ceil(t/80));const i=setInterval(()=>{v+=s;if(v>=t){v=t;clearInterval(i)}c.textContent=v;},20)});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
form.onsubmit=e=>{e.preventDefault();alert('Demo request sent!');}

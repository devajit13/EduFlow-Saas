
toggle.onclick=()=>menu.classList.toggle('show');
document.querySelectorAll('.faq button').forEach(b=>b.onclick=()=>{const d=b.nextElementSibling;d.style.display=d.style.display==='block'?'none':'block';});
form.onsubmit=e=>{e.preventDefault();alert('Thank you! We will contact you soon.');};

const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{
  nav.classList.toggle('open');
  if(nav.classList.contains('open')){
    nav.style.display='flex';
    nav.style.position='absolute';
    nav.style.top='76px';
    nav.style.left='0';
    nav.style.right='0';
    nav.style.padding='22px 6%';
    nav.style.background='rgba(255,255,255,.98)';
    nav.style.flexDirection='column';
    nav.style.borderBottom='1px solid rgba(8,27,53,.1)';
  }else{
    nav.removeAttribute('style');
  }
});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');nav.removeAttribute('style')}));
document.querySelector('#year').textContent=new Date().getFullYear();

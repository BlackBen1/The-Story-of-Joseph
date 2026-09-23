(function(){var h=document.getElementById('site-nav');if(!h)return;var b=h.querySelector('.nav-toggle'),m=document.getElementById('site-menu');
function set(o){h.classList.toggle('open',o);b.setAttribute('aria-expanded',String(o));b.setAttribute('aria-label',o?'Close menu':'Open menu');m.hidden=!o;}
b.addEventListener('click',function(){set(m.hidden);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden){set(false);b.focus();}});
var mq=window.matchMedia('(min-width: 1024px)');(mq.addEventListener?mq.addEventListener('change',f):mq.addListener(f));function f(e){if(e.matches)set(false);}
function s(){h.classList.toggle('scrolled',window.scrollY>4);}window.addEventListener('scroll',s,{passive:true});s();})();

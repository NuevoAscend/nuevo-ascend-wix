(function(){
  var d=document,w=window,els,i,b,done=false;
  function check(){
    els=d.querySelectorAll('.rv,.rl,.rr');
    var h=w.innerHeight||d.documentElement.clientHeight||800;
    for(i=0;i<els.length;i++){
      if(!els[i].classList.contains('an')){
        b=els[i].getBoundingClientRect();
        if(b.top<h-40){els[i].classList.add('an');}
      }
    }
  }
  var t=setInterval(check,120);
  setTimeout(function(){done=true;clearInterval(t);},15000);
  d.addEventListener('scroll',check,{passive:true});
  w.addEventListener('scroll',check,{passive:true});
  check();
  setTimeout(check,500);
})();
(function(){
  var btn=document.querySelector('.jump-btn');
  if(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }
})();
(function(){
  var jump=document.querySelector('.prog-jump');
  if(!jump){return;}
  var links=jump.querySelectorAll('a[data-jump]');
  var sections=[];
  var i,link,id,el;
  for(i=0;i<links.length;i++){
    link=links[i];
    id=link.getAttribute('data-jump');
    el=document.getElementById(id);
    if(el){sections.push({link:link,el:el});}
    link.addEventListener('click',function(e){
      var href=this.getAttribute('href');
      if(href&&href.charAt(0)==='#'){
        e.preventDefault();
        var target=document.querySelector(href);
        if(target){target.scrollIntoView({behavior:'smooth',block:'start'});}
      }
    });
  }
  function setActive(){
    var vh=window.innerHeight||800;
    var current=null,j,rect;
    for(j=0;j<sections.length;j++){
      rect=sections[j].el.getBoundingClientRect();
      if(rect.top<=vh*0.35){current=sections[j].link;}
    }
    for(j=0;j<links.length;j++){links[j].classList.remove('is-active');}
    if(current){current.classList.add('is-active');}
  }
  window.addEventListener('scroll',setActive,{passive:true});
  setActive();
})();
(function(){
  var EPISODE_ID='6nXYAmq9eBohDM4sr0WTos';
  var EMBED_URL='https://open.spotify.com/embed/episode/'+EPISODE_ID+'?utm_source=generator&autoplay=true';

  function startEpisode(strip,btn,panel){
    strip.classList.add('is-playing');
    btn.setAttribute('aria-expanded','true');
    panel.innerHTML='';
    var iframe=document.createElement('iframe');
    iframe.src=EMBED_URL;
    iframe.setAttribute('allow','autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    iframe.setAttribute('loading','eager');
    iframe.title='How I Crushed It — Spotify player';
    panel.appendChild(iframe);
    requestAnimationFrame(function(){
      panel.scrollIntoView({behavior:'smooth',block:'nearest'});
    });
  }

  function initPodcast(){
    document.querySelectorAll('[data-podcast]').forEach(function(strip){
      var btn=strip.querySelector('[data-sp-play]');
      var panel=strip.querySelector('[data-sp-player],.sp-embed');
      if(!btn||!panel){return;}
      btn.addEventListener('click',function(e){
        e.preventDefault();
        startEpisode(strip,btn,panel);
      });
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',initPodcast);
  }else{
    initPodcast();
  }
})();

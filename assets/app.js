/* ---------------- plush illustration set ---------------- */
const C={sky:'#0CE5FF',sky2:'#5BD2F7',deep:'#292BD8',pink:'#FF74CE',mag:'#FF22B1',gold:'#F0A93C',ink:'#151063',white:'#fff'};
function face(cx,cy,s){s=s||1;return `<g stroke="none">
  <ellipse cx="${cx-11*s}" cy="${cy+5*s}" rx="${5.2*s}" ry="${3.4*s}" fill="${C.pink}" opacity=".8"/>
  <ellipse cx="${cx+11*s}" cy="${cy+5*s}" rx="${5.2*s}" ry="${3.4*s}" fill="${C.pink}" opacity=".8"/>
  <circle cx="${cx-8*s}" cy="${cy-1*s}" r="${3*s}" fill="${C.ink}"/>
  <circle cx="${cx+8*s}" cy="${cy-1*s}" r="${3*s}" fill="${C.ink}"/>
  <circle cx="${cx-9.2*s}" cy="${cy-2.4*s}" r="${1*s}" fill="#fff"/>
  <circle cx="${cx+6.8*s}" cy="${cy-2.4*s}" r="${1*s}" fill="#fff"/>
  <path d="M${cx-4.5*s} ${cy+6*s} q${4.5*s} ${4.2*s} ${9*s} 0" stroke="${C.ink}" stroke-width="${2.2*s}" fill="none" stroke-linecap="round"/></g>`;
}
const SHAPES={
  cat:c=>`<path d="M30 34 L26 16 L44 26 Z" fill="${c}"/><path d="M70 34 L74 16 L56 26 Z" fill="${c}"/>
    <circle cx="50" cy="56" r="34" fill="${c}"/>${face(50,54,1.05)}`,
  bunny:c=>`<ellipse cx="38" cy="22" rx="8" ry="20" fill="${c}"/><ellipse cx="62" cy="22" rx="8" ry="20" fill="${c}"/>
    <circle cx="50" cy="60" r="31" fill="${c}"/>${face(50,58,1)}`,
  bear:c=>`<circle cx="27" cy="30" r="13" fill="${c}"/><circle cx="73" cy="30" r="13" fill="${c}"/>
    <circle cx="50" cy="57" r="33" fill="${c}"/>${face(50,56,1.05)}`,
  star:c=>`<path d="M50 10 L61 38 L92 40 L68 60 L76 90 L50 73 L24 90 L32 60 L8 40 L39 38 Z" fill="${c}"/>${face(50,50,.95)}`,
  planet:c=>`<circle cx="50" cy="52" r="30" fill="${c}"/>
    <ellipse cx="50" cy="58" rx="45" ry="11" fill="none" stroke="${C.mag}" stroke-width="7" transform="rotate(-16 50 58)"/>${face(50,48,1)}`,
  dumpling:c=>`<path d="M18 62 q0-34 32-34 t32 34 q0 18-32 18 t-32-18Z" fill="${c}"/>
    <path d="M18 62 q32 12 64 0" stroke="${C.ink}" stroke-width="3" fill="none" opacity=".35"/>${face(50,50,1)}`
};
const KINDS=Object.keys(SHAPES);
const PCOL=[C.pink,C.sky,C.gold,'#B79CFF','#FFD9F0','#7FE4FF'];
function plush(kind,col,size){
  kind=kind||KINDS[Math.floor(Math.random()*KINDS.length)];
  col=col||PCOL[Math.floor(Math.random()*PCOL.length)];
  return `<svg class="plsvg" viewBox="0 0 100 100" width="${size||'100%'}" xmlns="http://www.w3.org/2000/svg"
    style="filter:drop-shadow(0 0 3px #fff) drop-shadow(0 0 3px #fff) drop-shadow(0 4px 6px rgba(21,16,99,.25))">
    <g stroke="${C.ink}" stroke-width="3.4" stroke-linejoin="round">${SHAPES[kind](col)}</g></svg>`;
}

/* ---------------- starfield ---------------- */
document.querySelectorAll('.stars').forEach(f=>{
  let h='';for(let i=0;i<64;i++){const s=Math.random()*2.6+1;
    h+=`<i style="left:${Math.random()*100}%;top:${Math.random()*100}%;width:${s}px;height:${s}px;animation-delay:${(Math.random()*3.6).toFixed(2)}s"></i>`}
  f.innerHTML=h;
});

/* ---------------- claw machine ---------------- */
const machine=document.getElementById('machine'), pile=document.getElementById('pile'),
      rig=document.getElementById('rig'), swing=document.getElementById('swing'),
      cable=document.getElementById('cable'), held=document.getElementById('held'),
      won=document.getElementById('won'), chute=document.querySelector('.chute'),
      goBtn=document.getElementById('goBtn'), cap=document.getElementById('machCap'),
      glass=document.querySelector('.glass');
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// [left%, bottom px, kind, colour, width px, rotation deg] — front row (0-5) is grabbable
const PILE=[
 [1,0,'bear','#FFD9F0',70,-13],[16,-3,'cat',C.pink,74,7],[31,2,'dumpling','#7FE4FF',68,-6],
 [46,-3,'star',C.gold,76,10],[61,2,'bunny',C.sky,68,-9],[76,-2,'planet','#B79CFF',72,5],
 [5,44,'star',C.sky,52,15],[23,50,'planet',C.gold,50,-10],[41,48,'cat','#FFD9F0',54,6],
 [59,50,'dumpling',C.pink,50,-14],[75,44,'bear','#7FE4FF',52,9],
 [15,88,'dumpling','#B79CFF',42,-8],[47,92,'bunny',C.gold,42,11],[67,88,'star',C.pink,42,-6]];
const GRABBABLE=[0,1,2,3,4,5];
let pzEls=[];
if(pile){
  pile.innerHTML=PILE.map(([x,y,k,c,w,r],i)=>
    `<div class="pz" data-i="${i}" style="left:${x}%;bottom:${y}px;transform:rotate(${r}deg);width:${w}px;z-index:${100-y}">${plush(k,c)}</div>`).join('');
  pzEls=[...pile.querySelectorAll('.pz')];
}

let timers=[],running=false,autoRuns=0,lastPicked=-1;
const T=(fn,ms)=>timers.push(setTimeout(fn,ms));
const clearT=()=>{timers.forEach(clearTimeout);timers=[]};
const say=t=>{if(cap)cap.textContent=t};

function homeX(){return Math.round((glass.clientWidth-74)/2)}

function reset(full){
  clearT();
  rig.classList.remove('grip');
  rig.classList.add('travel');
  rig.style.transform=`translateX(${homeX()}px)`;
  swing.style.transform='';
  cable.style.height='0px';
  held.className='held'; held.style.top='34px'; held.innerHTML=''; held.style.width='';
  machine.classList.remove('lean-l','lean-r');
  if(full){
    won.style.opacity=0; won.className='won'; chute.classList.remove('filled');
    pzEls.forEach(e=>e.classList.remove('taken'));
  }
}

function play(auto){
  if(!rig||running)return;
  running=true; goBtn.disabled=true;
  reset(true);

  // pick a plush that is still in the pile
  const avail=GRABBABLE.filter(i=>!pzEls[i].classList.contains('taken') && i!==lastPicked);
  const idx=avail[(autoRuns+ (auto?0:1) + avail.length) % avail.length];
  lastPicked=idx;
  const [lx,by,kind,col,w]=PILE[idx];
  const GW=glass.clientWidth, GH=glass.clientHeight;
  const centreX=(lx/100)*GW + w/2;
  const targetX=Math.max(2,Math.min(GW-76, Math.round(centreX-37)));
  const plushTopY=GH-by-w;                 // top of the plush, from glass top
  const drop=Math.max(90,Math.round(plushTopY-46)); // cable length so the claw closes over it
  const svg=plush(kind,col);

  if(reduce){
    pzEls[idx].classList.add('taken');
    won.innerHTML=svg; won.style.opacity=1; chute.classList.add('filled');
    say('Prize delivered'); running=false; goBtn.disabled=false; return;
  }

  goBtn.classList.add('press'); T(()=>goBtn.classList.remove('press'),140);
  say('Lining it up');

  // 1. slide across, joystick leans with it
  T(()=>{
    machine.classList.add(targetX>homeX()?'lean-r':'lean-l');
    rig.style.transform=`translateX(${targetX}px)`;
    swing.style.transform=`rotate(${targetX>homeX()?-5:5}deg)`;
  },180);
  // 2. joystick centres, cable settles
  T(()=>{machine.classList.remove('lean-l','lean-r');swing.style.transform='rotate(0deg)'},1180);
  // 3. drop
  T(()=>{cable.style.height=drop+'px';say('Dropping')},1560);
  // 4. close the claw ON the plush, and take that exact plush out of the pile
  T(()=>{
    rig.classList.add('grip');
    pzEls[idx].classList.add('taken');
    held.classList.remove('lift');
    held.innerHTML=svg;
    held.style.width=w+'px';
    held.style.marginLeft=(-w/2)+'px';
    held.style.top=Math.round(drop+40-w/2)+'px';
    void held.offsetWidth;                       // commit the position before the lift transition
    held.classList.add('on');
    say('Got it');
  },2360);
  // 5. lift, prize comes with it
  T(()=>{held.classList.add('lift');cable.style.height='0px';held.style.top=Math.round(40-w/2)+'px'},2620);
  // 6. carry back over the chute
  T(()=>{
    machine.classList.add(targetX>homeX()?'lean-l':'lean-r');
    rig.style.transform=`translateX(${homeX()}px)`;
    swing.style.transform=`rotate(${targetX>homeX()?4:-4}deg)`;
    held.classList.add('sway');
    say('Bringing it home');
  },3480);
  T(()=>{machine.classList.remove('lean-l','lean-r');swing.style.transform='rotate(0deg)'},4480);
  // 7. open the claw, prize falls
  T(()=>{
    rig.classList.remove('grip');
    held.classList.remove('on');
    won.innerHTML=svg; won.style.opacity=1; won.classList.add('drop');
    chute.classList.add('filled');
  },4820);
  T(()=>{
    say(autoRuns>=2?'Press play to go again':'Prize delivered');
    running=false; goBtn.disabled=false;
    if(auto && autoRuns<2 && inView){autoRuns++;T(()=>play(true),2600)}
  },5460);
}

let inView=false, started=false;
if(machine && 'IntersectionObserver' in window){
  new IntersectionObserver(es=>{
    es.forEach(e=>{
      inView=e.isIntersecting && e.intersectionRatio>.35;
      if(inView && !started){started=true;T(()=>play(true),500)}
    });
  },{threshold:[0,.35,.7]}).observe(machine);
} else if(machine){ T(()=>play(true),500) }

if(goBtn)goBtn.addEventListener('click',()=>{autoRuns=99;play(false)});
if(machine)window.addEventListener('resize',()=>{if(!running)reset(true)});

/* ---------------- decorative art slots ---------------- */
const set=(id,html)=>{const e=document.getElementById(id);if(e)e.innerHTML=html};
set('promiseArt',`<div style="width:186px;margin:0 auto">${plush('bear',C.pink)}</div>`);
set('promiseArt2',`<div style="width:186px;margin:0 auto">${plush('cat',C.sky)}</div>`);
set('artParty',`<div style="display:flex;gap:6px;align-items:flex-end;justify-content:center;width:100%">
  <div style="width:64px">${plush('star',C.gold)}</div><div style="width:88px">${plush('cat',C.pink)}</div><div style="width:64px">${plush('planet',C.sky)}</div></div>`);
set('artSquishy',`<div style="display:flex;gap:6px;align-items:flex-end;justify-content:center;width:100%">
  <div style="width:64px">${plush('dumpling','#FFD9F0')}</div><div style="width:88px">${plush('dumpling','#7FE4FF')}</div><div style="width:64px">${plush('dumpling',C.gold)}</div></div>`);
set('artGift',`<div style="width:150px;margin:0 auto">${plush('planet',C.sky)}</div>`);

const PRIZES=[['Squishmallows','dumpling','#FFD9F0'],['Jumbo plush','bear',C.gold],['Anime friends','cat',C.pink],
  ['Space crew','planet',C.sky],['Blind boxes','star','#B79CFF'],['Mini keychains','bunny','#7FE4FF']];
const pw=document.getElementById('prizewall');
if(pw)pw.innerHTML=PRIZES.map(([n,k,c])=>`<div class="cell"><div style="width:74px;margin:0 auto">${plush(k,c)}</div><span>${n}</span></div>`).join('');

/* ---------------- hours + open now ----------------
   Single source of truth for opening hours. Index = day of week, 0 = Sunday.
   Change these two columns and both the banner and the hours table follow.
   For the production build, drive this from the Google Business Profile hours
   so holiday closures and one-off changes update everywhere at once.        */
const HOURS=[[11,20],[11,20],[11,20],[11,20],[11,20],[11,21],[11,21]];
const hr=h=>(h>12?h-12:h)+(h>=12?'pm':'am');

function refreshHours(){
  const lv=new Date(new Date().toLocaleString('en-US',{timeZone:'America/Los_Angeles'}));
  const d=lv.getDay(), mins=lv.getHours()*60+lv.getMinutes();
  const [o,c]=HOURS[d], openM=o*60, closeM=c*60;
  const el=document.getElementById('openNow'); if(!el)return;

  document.querySelectorAll('#hoursTable tr').forEach(r=>r.classList.remove('today'));
  const row=document.querySelector(`#hoursTable tr[data-d="${d}"]`); if(row)row.classList.add('today');

  let dot='dot', msg;
  if(mins<openM){
    msg=`Opens today at ${hr(o)}`;
  }else if(mins>=closeM){
    dot='dot shut';
    msg=`Opens tomorrow at ${hr(HOURS[(d+1)%7][0])}`;
  }else if(closeM-mins<=45){
    msg=`Open now, closing at ${hr(c)}`;
  }else{
    msg=`Open now until ${hr(c)}`;
  }
  el.innerHTML=`<span class="${dot}"></span>${msg}`;
}
refreshHours();
setInterval(refreshHours,60000);   // flips over on its own, no refresh needed

/* ---------------- map ----------------
   The card behind the iframe stays visible until the map actually paints, so a
   blocked or offline preview shows the brand panel instead of an empty frame. */
(function(){
  const f=document.getElementById('gmap'); if(!f)return;
  const box=f.closest('.mapbox');
  // A cross-origin iframe fires "load" even when the request failed, so test
  // reachability with a tiny image instead and only then uncover the map.
  const probe=new Image();
  probe.onload=()=>box.classList.add('loaded');
  probe.onerror=()=>{};              // no network: the brand panel stays put
  probe.referrerPolicy='no-referrer';
  probe.src='https://maps.gstatic.com/favicon.ico?cb='+(performance.now()|0);
})();

/* ---------------- Google reviews widget ----------------
   The Elfsight embed needs a real http(s) origin. When this file is opened
   straight off disk the widget never mounts, so we reveal a labelled
   placeholder instead of leaving a blank band. Remove this block, and the
   #revFallback markup, once the site is on a live domain.                */
(function(){
  const slot=document.querySelector('[class^="elfsight-app-"]');
  const fb=document.getElementById('revFallback');
  if(!slot||!fb)return;
  const check=()=>{ if(slot.offsetHeight<60) fb.hidden=false; else fb.hidden=true; };
  setTimeout(check,3500);
  setTimeout(check,8000);
})();

/* ---------------- legal page tables of contents ---------------- */
document.querySelectorAll('[data-toc]').forEach(ol=>{
  const wrap=ol.closest('.legal');
  const body=wrap?wrap.querySelector('.body'):null; if(!body)return;
  const key=ol.getAttribute('data-toc');
  body.querySelectorAll('h2').forEach((h,i)=>{
    const id=`${key}-${i+1}`; h.id=id;
    ol.insertAdjacentHTML('beforeend',`<li><a href="#${id}">${h.textContent}</a></li>`);
  });
  ol.addEventListener('click',e=>{
    const a=e.target.closest('a'); if(!a)return;
    e.preventDefault();
    document.getElementById(a.getAttribute('href').slice(1))
      .scrollIntoView({behavior:'smooth',block:'start'});
  });
  if('IntersectionObserver' in window){
    const links=[...ol.querySelectorAll('a')];
    new IntersectionObserver(es=>{
      es.forEach(e=>{
        if(!e.isIntersecting)return;
        links.forEach(l=>l.classList.toggle('on',l.getAttribute('href').slice(1)===e.target.id));
      });
    },{rootMargin:'-100px 0px -70% 0px'}).observe && body.querySelectorAll('h2').forEach(h=>{
      new IntersectionObserver(es=>{
        es.forEach(e=>{ if(e.isIntersecting)
          links.forEach(l=>l.classList.toggle('on',l.getAttribute('href').slice(1)===e.target.id)) });
      },{rootMargin:'-100px 0px -70% 0px'}).observe(h);
    });
  }
});


document.getElementById('navToggle').addEventListener('click',function(){
  const n=document.getElementById('navlinks'),o=n.classList.toggle('open');
  this.setAttribute('aria-expanded',o);
});


/* ---------------- active nav link (multi-page build) ---------------- */
(function(){
  const here=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a').forEach(a=>{
    const href=(a.getAttribute('href')||'').split('#')[0].toLowerCase();
    if(href && href===here && !a.classList.contains('btn')) a.classList.add('on');
  });
})();

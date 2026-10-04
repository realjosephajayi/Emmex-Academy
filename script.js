document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  var F=this,C=window.EMMEX||{},fm=C.form||{},o=document.getElementById('ok'),b=F.querySelector('button'),d=new FormData(F),n=d.get('name'),t=d.get('track');
  function wa(msg){o.textContent=msg+' ';var a=document.createElement('a');a.href='https://wa.me/2348139958101?text='+encodeURIComponent('Hello Emmex Academy, my name is '+n+'. I want to start with '+t+'.');a.target='_blank';a.rel='noopener';a.textContent='Message us on WhatsApp to confirm your place.';o.appendChild(a)}
  if(!fm.endpoint){wa('Almost done.');return}
  if(fm.accessKey)d.append('access_key',fm.accessKey);
  d.append('subject','New Emmex Academy sign-up');
  b.disabled=true;o.textContent='Sending...';
  fetch(fm.endpoint,{method:'POST',body:d,headers:{Accept:'application/json'}})
    .then(function(r){if(!r.ok)throw new Error('fail');F.reset();wa('Thank you, '+n+'. We have your details.')})
    .catch(function(){o.textContent='Sorry, that did not send. Please message us on WhatsApp instead.'})
    .then(function(){b.disabled=false});
});

(function(){
  var C=window.EMMEX||{};
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e}
  var s=document.getElementById('socials');
  Object.keys(C.socials||{}).forEach(function(k){var u=C.socials[k];if(!u)return;var a=el('a','',k);a.href=u;a.target='_blank';a.rel='noopener';s.appendChild(a)});
  var g=document.getElementById('workgrid');
  if(C.work&&C.work.length){g.textContent='';C.work.forEach(function(w){
    var f=el('figure','tile media'),m;
    if(w.type==='video'){m=document.createElement('video');m.src=w.src;m.controls=true;m.preload='metadata';m.playsInline=true}
    else{m=document.createElement('img');m.src=w.src;m.alt=w.title||'';m.loading='lazy'}
    var c=el('figcaption');c.appendChild(el('b','',w.title||''));if(w.tag)c.appendChild(el('span','',w.tag));
    f.appendChild(m);f.appendChild(c);g.appendChild(f)})}
  if(C.stories&&C.stories.length){var sg=document.getElementById('storygrid');C.stories.forEach(function(x){
    var q=el('blockquote','story');q.appendChild(el('p','','\u201C'+x.quote+'\u201D'));q.appendChild(el('b','',x.name));if(x.track)q.appendChild(el('span','',x.track));sg.appendChild(q)});
    document.getElementById('stories').hidden=false}
  var ci=C.classInfo||{},keys=Object.keys(ci).filter(function(k){return ci[k]});
  if(keys.length){var box=document.getElementById('classinfo');box.textContent='';var dl=el('dl','facts-list');
    keys.forEach(function(k){dl.appendChild(el('dt','',k));dl.appendChild(el('dd','',ci[k]))});box.appendChild(dl)}
})();


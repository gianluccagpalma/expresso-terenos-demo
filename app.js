(()=>{'use strict';const $=id=>document.getElementById(id),capacity=15,key='expresso-terenos-demo-v1',statuses=['Em trajeto','Aguardando passageiro'],destinations=['Terenos','Campo Grande'];
const initial=()=>({version:1,fleet:1,selected:0,vans:[{free:5,state:statuses[0],destination:destinations[0],updated:null},{free:2,state:statuses[1],destination:destinations[1],updated:null}]});
let data=initial();
function valid(s){return s?.version===1&&[1,2].includes(s.fleet)&&Number.isInteger(s.selected)&&s.selected>=0&&s.selected<s.fleet&&Array.isArray(s.vans)&&s.vans.length===2&&s.vans.every(v=>Number.isInteger(v.free)&&v.free>=0&&v.free<=capacity&&statuses.includes(v.state)&&destinations.includes(v.destination)&&(v.updated===null||(Number.isFinite(v.updated)&&v.updated>0&&v.updated<=Date.now())));}
try{const saved=JSON.parse(localStorage.getItem(key));if(valid(saved))data=saved;}catch{}
function save(){try{localStorage.setItem(key,JSON.stringify(data));$('storage-note').textContent='';}catch{$('storage-note').textContent='Não foi possível salvar neste navegador. A simulação funciona enquanto esta página estiver aberta.';}}
function time(t){return t?'Atualizado às '+new Date(t).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'})+' · simulação':'Dados iniciais de exemplo · sem atualização real';}
function render(){
 $('vans').innerHTML=data.vans.slice(0,data.fleet).map((v,i)=>`<article class="van" aria-label="Van ${i+1}"><div class="van-top"><div><span class="van-name">VAN ${String(i+1).padStart(2,'0')}</span><h3>Para ${v.destination}</h3></div><span class="status ${v.state===statuses[1]?'waiting':''}">${v.state}</span></div><div class="vacancies ${v.free===0?'full':''}"><strong>${v.free===0?'Lotada':v.free}</strong>${v.free?'<span>'+ (v.free===1?'vaga livre':'vagas livres')+'</span>':''}</div><div class="seat-meter" aria-hidden="true">${Array.from({length:capacity},(_,j)=>`<i class="${j<v.free?'free':''}"></i>`).join('')}</div><p class="updated">${time(v.updated)}</p></article>`).join('');
 $('fleet').value=data.fleet;$('driver-van').innerHTML=data.vans.slice(0,data.fleet).map((v,i)=>`<option value="${i}">Van ${i+1}</option>`).join('');$('driver-van').value=data.selected;
 const v=data.vans[data.selected];$('driver-state').value=v.state;$('destination').value=v.destination;$('correct-seats').value=v.free;$('driver-count').textContent=v.free;$('board').disabled=v.free===0;$('leave').disabled=v.free===capacity;
}
function update(action){action(data.vans[data.selected]);data.vans[data.selected].updated=Date.now();$('seat-error').textContent='';save();render();}
function count(delta){update(v=>v.free=Math.max(0,Math.min(capacity,v.free+delta)));}
 $('board').addEventListener('click',()=>count(-1));$('leave').addEventListener('click',()=>count(1));
 $('fleet').addEventListener('change',()=>{data.fleet=Number($('fleet').value);data.selected=Math.min(data.selected,data.fleet-1);$('seat-error').textContent='';save();render();});
 $('driver-van').addEventListener('change',()=>{data.selected=Number($('driver-van').value);$('seat-error').textContent='';save();render();});
 $('driver-state').addEventListener('change',()=>update(v=>v.state=$('driver-state').value));$('destination').addEventListener('change',()=>update(v=>v.destination=$('destination').value));
 $('correct').addEventListener('click',()=>{const raw=$('correct-seats').value,n=Number(raw);if(raw.trim()===''||!Number.isInteger(n)||n<0||n>capacity){$('seat-error').textContent='Informe um número inteiro de 0 a 15.';return;}update(v=>v.free=n);});
 $('reset').addEventListener('click',()=>{data=initial();$('seat-error').textContent='';save();render();});
 const dialog=$('schedule-dialog');let zoom=1;function setZoom(n){zoom=Math.max(1,Math.min(3,n));$('schedule-image').style.width=zoom*100+'%';$('zoom-label').textContent=Math.round(zoom*100)+'%';$('zoom-out').disabled=zoom===1;$('zoom-in').disabled=zoom===3;}
 document.querySelectorAll('[data-open-schedule]').forEach(b=>b.addEventListener('click',()=>{setZoom(1);dialog.showModal();}));$('close-schedule').addEventListener('click',()=>dialog.close());$('zoom-in').addEventListener('click',()=>setZoom(zoom+.5));$('zoom-out').addEventListener('click',()=>setZoom(zoom-.5));render();
})();

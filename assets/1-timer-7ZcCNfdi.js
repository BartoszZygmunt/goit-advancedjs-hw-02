import{f as p,i as f}from"./vendor-BbSUbo7J.js";let g=null;const l=document.getElementById("myButton");let o=0;function y(){o=setInterval(b,1e3),console.log("Timer started, ID: ",o),i[1].disabled=!0,console.log(i),l.disabled=!0,console.log("Callendar and button disabled")}const I={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]);const t=new Date;if(e[0]<t)f.warning({title:"Oh no!",message:"Please choose a date in the future",position:"topRight",timeout:5e3}),l.disabled=!0,console.log("Callendar disabled"),clearInterval(o),console.log("Timer stopped, ID: ",o);else{g=e[0];const a=g-t,{days:c,hours:d,minutes:n,seconds:s}=h(a);f.success({title:"Great!",message:`Time left: ${c} days, ${d} hours, ${n} minutes, ${s} seconds`,position:"topRight",timeout:5e3}),l.disabled=!1}}};function b(){const e=g-new Date;if(e<=0){clearInterval(o),console.log("Timer stopped, ID: ",o),f.success({title:"OK!",message:"Time is up!",position:"topRight",timeout:5e3}),i[1].disabled=!1,l.disabled=!1;return}const{days:t,hours:a,minutes:c,seconds:d}=h(e),n=document.getElementById("days");n.textContent=t;const s=document.getElementById("hours");s.textContent=a;const u=document.getElementById("minutes");u.textContent=c;const m=document.getElementById("seconds");m.textContent=d}function r(e,t=2){return String(e).padStart(t,"0")}function h(e){const n=r(Math.floor(e/864e5)),s=r(Math.floor(e%864e5/36e5)),u=r(Math.floor(e%864e5%36e5/6e4)),m=r(Math.floor(e%864e5%36e5%6e4/1e3));return{days:n,hours:s,minutes:u,seconds:m}}p("#datetime-picker",I);const i=document.querySelectorAll(".flatpickr-input");i?(console.log("callendar found"),console.log(i)):console.log("Callendar not found");l.addEventListener("click",()=>{console.log("Button clicked"),y()});
//# sourceMappingURL=1-timer-7ZcCNfdi.js.map

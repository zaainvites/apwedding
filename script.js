const wedding=new Date("2026-11-24T09:00:00+05:30");
function tick(){const diff=Math.max(0,wedding-new Date()),s=Math.floor(diff/1000);document.getElementById("days").textContent=String(Math.floor(s/86400)).padStart(2,"0");document.getElementById("hours").textContent=String(Math.floor(s%86400/3600)).padStart(2,"0");document.getElementById("minutes").textContent=String(Math.floor(s%3600/60)).padStart(2,"0");document.getElementById("seconds").textContent=String(s%60).padStart(2,"0")}
tick();setInterval(tick,1000);
const modal=document.getElementById("videoModal"),video=document.getElementById("inviteVideo");
document.getElementById("videoBtn").onclick=()=>{modal.classList.add("show");video.play().catch(()=>{})};
document.getElementById("closeVideo").onclick=()=>{modal.classList.remove("show");video.pause()};
modal.addEventListener("click",e=>{if(e.target===modal){modal.classList.remove("show");video.pause()}});

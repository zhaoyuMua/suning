var countDown=document.getElementById("countDown");
function addZero(n){
    return n<10?"0"+n:n
}
countDowns(2019,0,28,16,00,00);  
setInterval(function(){
    // 获取本机当前的时间  再去和1215 计算
    countDowns(2019,0,28,16,00,00); 
},1000)

 function countDowns(o,p,q,r,s,t){
    var d=new Date();
    var d1=new Date(o,p,q,r,s,t);
    var timeC=d1.getTime()-d.getTime();
    // timeC 是 d1 d 时间差 毫秒差  12 15  1天 14h 49fen
    timeC/=1000; // 毫秒---> 秒
    var day=parseInt(timeC/60/60/24);
    var hours=parseInt((timeC-day*24*60*60)/60/60);
    var mins=parseInt((timeC-day*24*60*60-hours*60*60)/60);
    var secs=parseInt(timeC-day*24*60*60-hours*60*60-mins*60);
    countDown.innerHTML=`<p>距离下场</p><span>${addZero(hours)}</span><i>:</i><span>${addZero(mins)}</span><i>:</i><span>${addZero(secs)}</span>`;
 }
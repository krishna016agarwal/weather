z=document.querySelector("#yu");
b=document.querySelector("#vh");
c=document.querySelector(".img");
d=document.querySelector(".temp");
e=document.querySelector(".min");
f=document.querySelector("#df");
g=document.querySelector("#fg");
h=document.querySelector("#er");
i=document.querySelector("#ea");
j=document.querySelector("#es");
k=document.querySelector("#ed");
y=document.querySelector("#asp");
vi=document.querySelector("#op");
vii=document.querySelector("#rt");


    z.addEventListener("click",()=>{
        x=b.value;
        b.value="";
        
        l(x)
        
    })

async function l(x){
     
    
    a=`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=7570fdcb5e10207085018f860df47fb9`;
    m=await fetch(a);
    v=await m.json();
   
    const {main,name,weather,wind,sys,dt}=v;
    y.innerHTML=`${name},${sys.country}`;
   d.innerHTML=`${main.temp}&#176`;
   
    vi.innerHTML=`${(new Date(dt*1000)).toLocaleString()}`
    f.innerHTML=`Min:${main.temp_max.toFixed()}&#176`;
    
    g.innerHTML=`Max:${main.temp_max.toFixed()}&#176`;
    i.innerHTML=`Feels Like<br>${main.feels_like.toFixed(2)}&#176`;
    j.innerHTML=`Humidity<br>${main.humidity} %`;
    k.innerHTML=`Wind<br>${wind.speed} m/s`;
    h.innerHTML=`Pressure<br>${main.pressure} hPa`;
    vii.innerHTML=`${weather[0].description}`;
}
(function(){
    
   l("delhi")
})();

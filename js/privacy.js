var icat={getIpInfo:function(){fetch("https://api.ooomn.com/api/ip").then((e=>e.json())).then((e=>{var n=e.country,t=e.ip,r=e.province,i=e.city,o=e.isp;document.getElementById("userAgentIp").innerHTML=t,document.getElementById("userAgentCountry").innerHTML=n,document.getElementById("userAgentRegion").innerHTML=r,document.getElementById("userAgentCity").innerHTML=i,document.getElementById("userAgentIsp").innerHTML=o;var g=navigator.userAgent;document.getElementById("userAgentDevice").innerHTML=g}))}};
window.Fonticons||(window.Fonticons={}),function(e,n){function t(e,t){var o,i="IE",a=n.createElement("B"),s=n.documentElement;return e&&(i+=" "+e,t&&(i=t+" "+i)),a.innerHTML="<!--[if "+i+']><b id="fitest"></b><![endif]-->',s.appendChild(a),o=!!n.getElementById("fitest"),s.removeChild(a),o}function o(){for(var e=[/.*/],o=n.location.hostname,i=0;i<e.length;i++)if(e[i].test(o)){var a=n.createElement("link"),s=t(8,"lte")?"ffe176a3-sd":"ffe176a3";a.href="https://fonticons-free-fonticons.netdna-ssl.com/kits/ffe176a3/"+s+".css",a.media="all",a.rel="stylesheet",n.getElementsByTagName("head")[0].appendChild(a);break}}e.Fonticons.load=o}(this,document),window.Fonticons.load();
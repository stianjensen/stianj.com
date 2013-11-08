<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>hip.</title>
<link rel="stylesheet" type="text/css" href="/static/flexbox.css" />
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.0.2/css/font-awesome.min.css" />
<style>
* {
    margin: 0;
    padding: 0;
}
html, body {
    height: 100%;
}
#centered {
    width: 100%;
    height: 100%;
}
#bigtext {
    font-family: 'Helvetica Neue', arial, sans-serif;
    width: 100%;
    background: transparent;
    border: none;
    outline: none !important;
    text-align: center;
    color: white;
    font-weight: bold;
}
#toolbox {
    position: fixed;
    opacity: 0;
    top: 10px;
    right: 10px;
    -webkit-transition: opacity .5s ease;
    -moz-transition: opacity .5s ease;
    transition: opacity .5s ease;
}
#toolbox.active,
#toolbox:hover {
    opacity: 1;
}
#toolbox ul {
    list-style-type: none;
    padding: 0;
    margin: 0 10px 0 0;
    display: inline-block;
}
#toolbox ul li {
    display: inline-block;
    height: 25px;
    background: white;
    border: 1px solid #666;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    position: relative;
    vertical-align: top;
}
#toolbox li a {
    display: inline-block;
    width: 25px;
    height: 100%;
    font-size: 21px;
    line-height: 25px;
    color: #333;
}
.blue-color {
    background-color: #21445B;
}
.green-color {
    background-color: #5D8A66;
}
.yellow-color {
    background-color: #D1B882;
}
.red-color {
    background-color: #b74f37;
}
.pink-color {
    background-color: #ff00fc;
}
.purple-color {
    background-color: #9b59b6;
}
.orange-color {
    background-color: #cc7d38;
}
.link-container {
    display: none;
}
.link-container.active {
    display: inline-block;
    border: none;
    outline: none !important;
    height: 25px;
    vertical-align: top;
    margin-left: 5px;
}
</style>
</head>
<body class="green-color">
<div id="centered" class="hbox center">
    <div id="bigtext" contenteditable=true spellcheck=false class="bigtext vbox center"><div>
        jquery.fittext.js    </div></div>
</div>
<div id="toolbox">
<ul>
<li>
<input class="link-container" />
    <a href=javascript:; id="share-link" class="icon-link"></a>
</li>
</ul>
<ul class="color-tiles">
<li><a href="javascript:;" class="red-color"></a></li>
<li><a href="javascript:;" class="orange-color"></a></li>
<li><a href="javascript:;" class="yellow-color"></a></li>
<li><a href="javascript:;" class="green-color"></a></li>
<li><a href="javascript:;" class="blue-color"></a></li>
<li><a href="javascript:;" class="pink-color"></a></li>
<li><a href="javascript:;" class="purple-color"></a></li>
</ul>
</div>
<script src=//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js></script>
<script src=//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js></script>
<script src=/static/bigtext.js></script>
<script>
(function(){
    var fadeOut;
    var bigtext = document.querySelector('#bigtext');
    var toolbox = document.querySelector('#toolbox');
    $("#bigtext").bigtext();
    addEventListener('resize', function(){
        $('#bigtext').bigtext();
    });
    bigtext.addEventListener('keyup', function(){
        if (bigtext.querySelectorAll('div').length == 0) {
            var div = document.createElement('div');
            div.innerText = "Type here, please...";
            bigtext.appendChild(div);
        }
        $('#bigtext').bigtext();
    });
    addEventListener('mousemove', function(){
        clearTimeout(fadeOut);
        toolbox.classList.add('active');
        fadeOut = setTimeout(function(){
            toolbox.classList.remove('active');
        }, 1500);
    });
    document.querySelector('.color-tiles').addEventListener('click', function(e){
        if (e.target.tagName != "A") return;
        
        console.log("color: %s", e.target.className);
        document.body.className = e.target.className;
    });
    document.querySelector('#share-link').addEventListener('click', function(){
        var url = "http://hip.stianj.com/";
        for ( var i=0; i<bigtext.children.length; i++ ) {
            url += bigtext.children[i].innerText + "%0A";
        }
        url += "/" + document.body.className.split('-')[0];
        var container = document.querySelector('.link-container');
        container.value = url.replace("#", "%23");
        container.classList.add('active');
        container.select();
    });
})();
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42149116-1', 'stianj.com');
  ga('send', 'pageview');

</script>
</body>
</html>

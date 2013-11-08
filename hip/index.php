<?php
if (array_key_exists('text', $_GET)) {
    $text = strip_tags(rtrim($_GET['text']));
} else {
    $text = "Write what you want...";
}
$text = str_replace("\n", "<br />", $text);
if (array_key_exists('color', $_GET)) {
    $color = rtrim($_GET['color'], "/");
} else {
    $color = "green";
}
switch($color) {
case "yellow":
    $bg_color = "yellow-color";
    break;
case "orange":
    $bg_color = "orange-color";
    break;
case "blue":
    $bg_color = "blue-color";
    break;
case "purple":
    $bg_color = "purple-color";
    break;
case "red":
    $bg_color = "red-color";
    break;
case "pink":
    $bg_color = "pink-color";
    break;
default:
    $bg_color = "green-color";
    break;
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>hip.</title>
<link rel="stylesheet" type="text/css" href="/static/flexbox.css" />
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.0.2/css/font-awesome.min.css" />
<link rel="stylesheet" type="text/css" href="/static/style.css" />
</head>
<body class="<?php echo $bg_color; ?>">
<div id="centered" class="hbox center">
    <div id="bigtext" contenteditable=true spellcheck=false class="bigtext vbox center"><div>
        <?php echo $text; ?>
    </div></div>
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

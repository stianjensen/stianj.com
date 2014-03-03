<?php
$welcome_messages = array(
    "Write what you want...",
    "How are you?",
    "The intertubes",
    "Ahoy",
    "Just add words",
    "Knock knock\nWho's there?"
);
$colors = array(
    "light",
    "dark",
    "orange",
    "blue",
    "purple",
    "red",
    "green",
    "brown"
);

if (array_key_exists('text', $_GET)) {
    $text = strip_tags(rtrim($_GET['text']));
} else {
    $text = $welcome_messages[array_rand($welcome_messages)];
}
$text = str_replace("\n", "<br />", $text);

$color = (array_key_exists('color', $_GET)) ? rtrim($_GET['color'], "/") : "";
if (!in_array($color, $colors)) {
    $color = $colors[array_rand($colors)];
}
$bg_color = $color . "-color";
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes" />
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
<ul class="color-tiles tile-selector">
<?php foreach ($colors as $color): ?>
    <li><a href="javascript:;" class="<?php echo $color; ?>-color"></a></li>
<?php endforeach; ?>
</ul>
<ul class="background-tiles tile-selector">
<li><a href="javascript:;" class="background-1"></a></li>
<li><a href="javascript:;" class="background-2"></a></li>
<li><a href="javascript:;" class="background-3"></a></li>
<li><a href="javascript:;" class="background-4"></a></li>
<li><a href="javascript:;" class="background-5"></a></li>
<li><a href="javascript:;" class="background-6"></a></li>
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
    $('.tile-selector').on('click', function(e){
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

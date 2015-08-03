function updateWebviews() {

  var tabs = document.querySelector(".tabs");
  tabs.style.height = document.documentElement.clientHeight + "px";
  tabs.style.width = document.documentElement.clientWidth + "px";
  
  var tabscontent = document.querySelector(".content");
  tabscontent.style.height = document.documentElement.clientHeight + "px";
  tabscontent.style.width = document.documentElement.clientWidth + "px";

  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight - 34 + "px";
  webview.style.width = document.documentElement.clientWidth + "px";
  
};

onload = updateWebviews;
window.onresize = updateWebviews;

// Enable Href links
$('a').click(function(){
  chrome.browser.openTab({
      url: $(this).attr('href')
    });
});

// Fix for webview links
var webview = document.querySelector('webview');
webview.addEventListener('newwindow', function(e) {
	//chrome.browser.openTab({ url: e.targetUrl});
	console.log(webview.find("title"));
});
webview.addEventListener('permissionrequest', function(e) {
	if (e.permission === 'download') {
    	e.request.allow();
    }
});

// Settings

$(document).ready(function() {

    $('#facebookchk').change(function() {
        if($(this).is(":checked")) {
            $('#facebooktab').show(400);
        } else {
	        $('#facebooktab').hide(400);
        }       
    });
    
    $('#skypechk').change(function() {
        if($(this).is(":checked")) {
            $('#skypetab').show(400);
        } else {
	        $('#skypetab').hide(400);
        }       
    });
    
    $('#wechatchk').change(function() {
        if($(this).is(":checked")) {
            $('#wechattab').show(400);
        } else {
	        $('#wechattab').hide(400);
        }       
    });
    
    $('#whatsappchk').change(function() {
        if($(this).is(":checked")) {
            $('#whatsapptab').show(400);
        } else {
	        $('#whatsapptab').hide(400);
        }       
    });
});
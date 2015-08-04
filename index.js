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
	chrome.browser.openTab({ url: e.targetUrl});
});
webview.addEventListener('permissionrequest', function(e) {
	if (e.permission === 'download') {
    	e.request.allow();
    }
});

// Facebook Notifications

var facebooknotif = false;

window.setInterval(function(){
	var webview = document.querySelector("#facebook-webview");
	webview.executeScript({code:"document.title"}, function(title){
		if( String(title) !== "Messenger") {
			facebooknotif = true;
		} else {
			facebooknotif = false;
		}
	});
	
	if (facebooknotif === true) {
		$(".notif.fb").css({"display":"inline-block"});
	} else {
		$(".notif.fb").css({"display":"none"});
	}
}, 10000);

// Whatsapp Notifications

var whatsappnotif = false;

window.setInterval(function(){
	var webview = document.querySelector("#whatsapp-webview");
	webview.executeScript({code:"document.title"}, function(title){
		if( String(title) !== "Whatsapp Web") {
			whatsappnotif = true;
		} else {
			whatsappnotif = false;
		}
	});
	
	if (facebooknotif === true) {
		$(".notif.whatsapp").css({"display":"inline-block"});
	} else {
		$(".notif.whatsapp").css({"display":"none"});
	}
}, 10000);

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
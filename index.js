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
  
}

onload = updateWebviews;
window.onresize = updateWebviews;

// Enable Href links
$('a').click(function(){
  chrome.browser.openTab({
      url: $(this).attr('href')
    });
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
}, 5000);

// Whatsapp Notifications

var whatsappnotif = false;

window.setInterval(function(){
	var webview = document.querySelector("#whatsapp-webview");
	webview.executeScript({code:"document.title"}, function(title1){
		if( String(title1) !== "WhatsApp Web") {
			whatsappnotif = true;
		} else {
			whatsappnotif = false;
		}
	});
	
	if (whatsappnotif === true) {
		$(".notif.whatsapp").css({"display":"inline-block"});
	} else {
		$(".notif.whatsapp").css({"display":"none"});
	}
}, 5000);

// WeChat Notifications

var wechatnotif = false;

window.setInterval(function(){
	var webview = document.querySelector("#wechat-webview");
	webview.executeScript({code:"document.title"}, function(title2){
		if( String(title2) !== "Web WeChat") {
			wechatnotif = true;
		} else {
			wechatnotif = false;
		}
	});
	
	if (wechatnotif === true) {
		$(".notif.wechat").css({"display":"inline-block"});
	} else {
		$(".notif.wechat").css({"display":"none"});
	}
}, 5000);

// Hangouts Notifications

var hangoutsnotif = false;

window.setInterval(function(){
	var webview = document.querySelector("#hangouts-webview");
	webview.executeScript({code:"document.title"}, function(title2){
		if( String(title2) !== "Google Hangouts") {
			skypenotif = true;
		} else {
			skypenotif = false;
		}
	});
	
	if (hangoutsnotif === true) {
		$(".notif.hangouts").css({"display":"inline-block"});
	} else {
		$(".notif.hangouts").css({"display":"none"});
	}
}, 5000);

// Skype Notifications

var skypenotif = false;

window.setInterval(function(){
	var webview = document.querySelector("#skype-webview");
	webview.executeScript({code:"document.title"}, function(title2){
		if( String(title2) !== "Skype") {
			skypenotif = true;
		} else {
			skypenotif = false;
		}
	});
	
	if (skypenotif === true) {
		$(".notif.skype").css({"display":"inline-block"});
	} else {
		$(".notif.skype").css({"display":"none"});
	}
}, 5000);


// Fix for webview links
var webview = document.querySelector('#facebook-webview');
webview.addEventListener('newwindow', function(e) {
	chrome.browser.openTab({ url: e.targetUrl});
});
webview.addEventListener('permissionrequest', function(e) {
	if (e.permission === 'download') {
    	e.request.allow();
    }
});
var webview = document.querySelector('#whatsapp-webview');
webview.addEventListener('newwindow', function(e) {
	chrome.browser.openTab({ url: e.targetUrl});
});
webview.addEventListener('permissionrequest', function(e) {
	if (e.permission === 'download') {
    	e.request.allow();
    }
});
var webview = document.querySelector('#wechat-webview');
webview.addEventListener('newwindow', function(e) {
	chrome.browser.openTab({ url: e.targetUrl});
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
    
   $('#hangoutsappchk').change(function() {
        if($(this).is(":checked")) {
            $('#hangoutstab').show(400);
        } else {
	        $('#hangoutstab').hide(400);
        }       
    });
});
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

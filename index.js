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

function changeHandler() {
   
   if(whatsapp.checked){
      webview.style.background('blue');
   }
   else{
      alert('unchecked');
   }
}

document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#whatsapp').addEventListener('change', changeHandler);
});
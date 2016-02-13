$(function(){

/*
    var domain = "http://weko";
    var name = "annotuser";
    chrome.cookies.get({"url":domain, "name":name },function(cookie){
	console.log(cookie);
    });
*/
/*
    chrome.cookies.getAll({},function (cookie){
	        console.log(cookie.length);
        allCookieInfo = "";
        for(i=0;i<cookie.length;i++){
            console.log(JSON.stringify(cookie[i]));

            allCookieInfo = allCookieInfo + JSON.stringify(cookie[i]);
        }
        localStorage.allCookieInfo = allCookieInfo;
    });
  
*/  
    var BG = chrome.extension.getBackgroundPage();
    $('#annotation').val(BG.getAnnotation());

      $('#update').click(function(){
        BG.updateAnnotation(document);
      });
    
  if (localStorage["anno_url"]) {
	$("#form").attr('action', localStorage["anno_url"]);
  }
    
/*
  if (localStorage["userid"]) {
    $("#userid").val(localStorage["userid"]);
  }

      if (localStorage["userpass"]) {
    $("#userpass").val(localStorage["userpass"]);
  }
*/

});

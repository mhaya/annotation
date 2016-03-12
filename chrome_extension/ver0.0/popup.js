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


    // ボタンを追加する
    $("#save_btn").click( function() {
	// アノテーションを取得する
	var a = anno.getAnnotations();
	// JSON文字列に変換する
	var d = JSON.stringify(a);

	// 画像の幅，高さを取得する
	var img = new Image();
	img.src = a[0].src;
	var width = img.width;
	var height = img.height;
	
	// backgroundにアノテーションを送信する
	chrome.runtime.sendMessage({"uri": a[0].src, "annotations": d, "width": width, "height": height}, function(response) {console.log(response);});
    });


chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
		  function(tabs){
		      $("#popupimg").attr("src",tabs[0].url);
   }
);

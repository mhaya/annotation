$(function(){
    // ボタンを追加する
    $("#save_btn").click( function() {
	// アノテーションを取得する
	var a = anno.getAnnotations();
	var uri =  $("#popupimg").attr("src");
	a[0].src = uri;
	// JSON文字列に変換する
	var d = JSON.stringify(a);
	// 画像の幅，高さを取得する
	var img = new Image();
	img.src = a[0].src;
	var width = img.width;
	var height = img.height;
	this.disabled = true;
	// backgroundにアノテーションを送信する
	chrome.runtime.sendMessage(
	    {"uri": a[0].src, "annotations": d, "width": width, "height": height},
	    function(response) {
		
	});
    });

    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
		      function(tabs){
			  var url = tabs[0].url;
			  var image = new Image();
			  var width;
			  var height;
			  image.onload = function(){
			      width = image.width;
			      height = image.height;
			      $("#popupimg").attr("src",url);
			      width = 640;
			      height = 480;
			      $("#popupimg").attr("width",width);
			      $("#popupimg").attr("height",height);
			      anno.makeAnnotatable(document.getElementById('popupimg'));
			  };
			  image.src = url;
		      }
		);
});

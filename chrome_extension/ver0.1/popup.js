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
	var image = new Image();
	var width;
	var height;
	image.onload = function(){
	width = image.width;
	height = image.height;
	// ボタンを無効化
	$("#save_btn").prop("disabled", true);
	if(localStorage["debug_flg"]&&localStorage["debug_flg"]=="true"){
	    console.log("#save_btn.click");
	    console.log("anno.getAnnotations:");
	    console.log(a);
	    console.log("JSON.stringify:");
	    console.log(d);
	    console.log("width:");
	    console.log(width);
	    console.log("height:");
	    console.log(height);
	}
	// backgroundにアノテーションを送信する
	chrome.runtime.sendMessage(
	    {"uri": a[0].src, "annotations": d, "width": width, "height": height},
	    function(response) {
		if(localStorage["debug_flg"]&&localStorage["debug_flg"]=="true"){
		    console.log("chrome.runtime.sendMessage");
		    console.log("response");
		    console.log(response);
		}
		
	});

			  };
	image.src = uri;
	
    });

    // カレントタブを取得する
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

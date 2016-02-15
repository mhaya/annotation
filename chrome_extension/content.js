$(function(){
    var img_ele = document.getElementsByTagName("IMG");
    img_ele[0].className = 'annotatable';

    // ボタンを追加する
    $("body").append('<input type="button" id="save_btn" value="save" />');
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
});

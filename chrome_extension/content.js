$(function(){
    var img_ele = document.getElementsByTagName("IMG");
    img_ele[0].className = 'annotatable';

    // ボタンを追加する
    $("body").append('<input type="button" id="save_btn" value="save" />');
    $("#save_btn").click( function() {
	var d = JSON.stringify(anno.getAnnotations());
	// backgroundにアノテーションを送信する
	chrome.runtime.sendMessage({annotations: d}, function(response) {console.log(response);});
    });
});

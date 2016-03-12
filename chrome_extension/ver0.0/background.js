$(function(){
    var anno_data;

    var getAnnotation = function(){
    console.log("getAnnotation");
    console.log(anno_data);

    return anno_data;

    };

    var updateAnnotation = function( data ){
    anno_data = data;
    console.log("updateAnnotation");
    console.log(data);

    };



    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	var annojson = request["annotations"];
	var uri = request["uri"];
	var url = localStorage["anno_url"];
	var width = request["width"];
	var height = request["height"];

	console.log(request);
	$.ajax({
	    type: "POST",
	    url: url,
	    xhrFields: {withCredentials: true},
	    data: {"update":1,"uri": uri, "annojson": annojson, "width": width,"height": height,"edit":1}
	}).success(function(data){
	    console.log("success"+data);
	}).error(function(data){
	    console.log("error:"+data);
	});

	sendResponse({tabid:sender.tab.id});
    });


    chrome.browserAction.onClicked.addListener(function(tab) {
    });

});


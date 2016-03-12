$(function(){
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
	    data: {"update":1,"uri": uri, "annojson": annojson, "width": width,"height": height,"edit":0}
	}).success(function(data){
	    console.log("success"+data);
	}).error(function(data){
	    console.log("error:"+data);
	});

	sendResponse({ret:"ok"});
    });
});


$(function(){
    
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	// annotation store URL
	var storeURL = localStorage["anno_url"];
	// annotaion
	var annojson = request["annotations"];
	// image URL
	var uri = request["uri"];
	// image size
	var width = request["width"];
	var height = request["height"];

	if(localStorage["debug_flg"]&&localStorage["debug_flg"]=="true"){
	    console.log("sender:");
	    console.log(sender);
	    console.log("request:");
	    console.log(request);
	    console.log("sendResponse:");
	    console.log(sendResponse);
	}
	$.ajax({
	    type: "POST",
	    url: storeURL,
	    xhrFields: {withCredentials: true},
	    data: {"update":1,"uri": uri, "annojson": annojson, "width": width,"height": height,"edit":0}
	}).success(function(data){
	    if(localStorage["debug_flg"]&&localStorage["debug_flg"]=="true"){
		console.log("success:");
		console.log(data);
	    }
	}).error(function(data){
	    if(localStorage["debug_flg"]&&localStorage["debug_flg"]=="true"){
		console.log("error:");
		console.log(data);
	    }
	});
	sendResponse({ret:"ok"});
    });
});


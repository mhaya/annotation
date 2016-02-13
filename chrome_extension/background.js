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
    console.log(request);
  sendResponse({tabid:sender.tab.id});
});

chrome.browserAction.onClicked.addListener(function(tab) {
});

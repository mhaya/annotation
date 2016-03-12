$(function(){
    // save function
    $("#save").click(function () {
	localStorage["anno_url"] = $("#anno_url").val();
	localStorage["userid"] = $("#userid").val();
	localStorage["userpass"] = $("#userpass").val();
    });
    // login funciton
    $("#login").click(function (){
	var url = $("#anno_url").val();
	var userid = $("#userid").val();
	var userpass = $("#userpass").val();
	
	$.ajax({
	    type: "POST",
	    url: url,
	    xhrFields: {withCredentials: true},
	    data: {"_proc_login":1,"user":userid,"pwd":userpass}
	}).success(function(data){
	    localStorage["status"] = "loggedin";
	    $("#status").text(localStorage["status"]);
	}).error(function(data){
	    localStorage["status"] = "error";
	    console.log("error:"+data);
	    $("#status").text(localStorage["status"]);
	});
    });

    // logout function
    $("#logout").click(function (){
		var url = $("#anno_url").val();
	$.ajax({
	    type: "GET",
	    url: url,
	    xhrFields: {withCredentials: true},
	    data: {"logout":1}
	}).success(function(data){
	    localStorage["status"] = "loggedout";
	    $("#status").text(localStorage["status"]);
	}).error(function(data){
	    localStorage["status"] = "error";
	    console.log("error:"+data);
	    $("#status").text(localStorage["status"]);
	});
    });

  if (localStorage["anno_url"]) {
    $("#anno_url").val(localStorage["anno_url"]);
  }

  if (localStorage["userid"]) {
    $("#userid").val(localStorage["userid"]);
  }

      if (localStorage["userpass"]) {
    $("#userpass").val(localStorage["userpass"]);
  }

    if(localStorage["status"]){
	$("#status").text(localStorage["status"]);
    }
});


$(function(){
$("#save").click(function () {
    localStorage["anno_url"] = $("#anno_url").val();
    localStorage["userid"] = $("#userid").val();
    localStorage["userpass"] = $("#userpass").val();
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

});


var isSet = false;

var setting_ava = document.getElementById("setting-avatar");
var custom_ava = document.getElementById("custom-ava");
custom_ava.style.display = "none";
var ava = document.getElementById("ava");
setting_ava.addEventListener('click', function () {
    isSet = !isSet;
    isSet ? custom_ava.style.display = "block" : custom_ava.style.display = "none";
    console.log(isSet);
    isSet ? ava.style.display = "none" : ava.style.display = "block";
});

var isSet1 =false
var setting_name = document.getElementById("setting-name");
var custom_name = document.getElementById("custom-name");
custom_name.style.display = "none";
var username = document.getElementById("username");
setting_name.addEventListener('click', function () {
    isSet = !isSet;
    isSet ? custom_name.style.display = "block" : custom_name.style.display = "none";
    console.log(isSet);
    isSet ? username.style.display = "none" : username.style.display = "block";
});

var inFo = document.getElementById("info");
var custom_info = document.getElementById("custom-info");
custom_info.style.display = "none";
var setting_info = document.getElementById("setting-info");
setting_info.addEventListener('click', function () {
    isSet1 = !isSet1;
    isSet1 ? custom_info.style.display = "block" : custom_info.style.display = "none";
    console.log(isSet);
    isSet1 ? inFo.style.display = "none" : inFo.style.display = "table";
});

var isSet2 = false;
var pass_current = document.getElementById("pass-current");
var pasS = document.getElementById("pass");
pasS.style.display = "none";
var edit_ = document.getElementById("edit");
edit_.addEventListener('click', function () {
    isSet2 = !isSet2;
    isSet2 ? pasS.style.display = "block" : pasS.style.display = "none";
    console.log(isSet2);
    isSet2 ? pass_current.style.display = "none" : pass_current.style.display = "table";
});



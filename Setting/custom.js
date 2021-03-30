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





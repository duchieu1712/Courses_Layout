var setting_ava = document.getElementById("setting-avatar");
var custom_ava = document.getElementsByClassName("custom-ava");
var isSet = false;

setting_ava.addEventListener('click', function () {
    isSet = !isSet;
    isSet ? custom_ava.style.display = "block" : custom_ava.style.display = "none";
    console.log(isSet);
});


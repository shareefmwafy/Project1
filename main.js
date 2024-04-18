const button = document.getQuerySelector("header button");

button.onClick = function (e){
    e.preventDefault();
    console.log("hi");
    document.querySelector("header").style.width = "500px"


}



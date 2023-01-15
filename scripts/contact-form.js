/*$(".btn").click(function(){
    $("input[type='text'], textarea").val("");
  }); */

const allHeads = document.querySelectorAll("h1")

for (let head of allHeads) {
    head.style.color = "green";
}
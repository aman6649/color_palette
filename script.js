document.querySelector('.zone').addEventListener('click',function(){
    var copyText = document.querySelector(".zone").value;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  });


// function copy(that){
//     var inp =document.createElement('input');
//     document.body.appendChild(inp)
//     inp.value =that.textContent
//     inp.select();
//     document.execCommand('copy',false);
//     inp.remove();
//     }



//   const span = document.querySelector("span");
// span.onclick = function() {
//   document.execCommand("copy");
// }
// span.addEventListener("copy", function(event) {
//   event.preventDefault();
//   if (event.clipboardData) {
//     event.clipboardData.setData("text/plain", span.textContent);
//     alert(event.clipboardData.getData("text"))
//   }
// });



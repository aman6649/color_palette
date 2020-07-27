
document.querySelector('.zone').addEventListener('click',function(){
  let text =document.querySelector('span').innerText;
  let input = document.createElement('input');
  input.setAttribute('value',text);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  alert('copied: '+ text);
});





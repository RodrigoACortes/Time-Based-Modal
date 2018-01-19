setTimeout(function() {
  wrapper.style.display = 'block';

}, 3000);

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('wrapper').style.display = 'none';
});

document.getElementById('agree').addEventListener('click', function(){
  document.getElementById('text').innerHTML = 'Thank You!';
  setTimeout(function () {
    wrapper.style.display = 'none';
  }, 2000);
});

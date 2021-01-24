
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}

function InviaForm(e,form, inner) { 
  document.getElementById("loader").classList.remove('invisible');
  document.getElementById("loader").classList.add('visible');
  document.getElementById('timer').innerHTML = 005 + ":" + 00;
  startTimer();
  e.preventDefault();
  fetch(form.action, {
    method:'POST', 
    body: new FormData(form)
  }).then(function (response) {
    return response.text();
  }).then(function (data) {
    document.getElementById(inner).innerHTML = data;
    document.getElementById("loader").classList.remove('visible');
    document.getElementById("loader").classList.add('invisible');
  }).catch(function (err) {
    console.warn('Errore: ', err);
  });
}
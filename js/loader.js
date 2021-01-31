// // LOADER
// function startTimer() {
//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
//   document.getElementById('timer').innerHTML = m + ":" + s;
//   setTimeout(startTimer, 1000);
// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec};
//   if (sec < 0) {sec = "59"};
//   return sec;
// }

// function loadStart() {
  
// }

// function loadEnd() {
//   document.getElementById("loader").classList.remove('visible');
//     document.getElementById("loader").classList.add('invisible');
// }

// function loadError(err) {
//   alert(err);
// }

// function loadTimer(url) { 
//   document.getElementById("loader").classList.remove('invisible');
//   document.getElementById("loader").classList.add('visible');
//   startTimer();
//   fetch(url, {
//     method:'GET'
//   }).then(function (response) {
//     return response.text();
//   }).then(function (data) {
//     document.getElementById('main').innerHTML = data;
//     document.getElementById("loader").classList.remove('visible');
//     document.getElementById("loader").classList.add('invisible');
//   }).catch(function (err) {
//     console.log('Errore: ', err);
//   });
// }


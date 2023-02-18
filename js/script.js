let x = [9]
let myCount = localStorage.getItem('myCount');
let cpuCount = localStorage.getItem('cpuCount');
$('.me').html(myCount);
$('.cpu').html(cpuCount);

function zero() {
   let id = Math.floor(Math.random() * 9)
   if (x[id]) {
      zero()
   }
   else
      move(id, "zero")
}


function checkEnd() {
   //հաղթող
   if (x[1] == "player" && x[2] == "player" && x[3] == "player") {
      alert('Դուք հաղթեցիք');
      myCount++;
      $('.me').html(myCount);
      return true
   }
   if (x[4] == "player" && x[5] == "player" && x[6] == "player") {
      alert('Դուք հաղթեցիք');
      myCount++;
      $('.me').html(myCount);
      return true
   }
   if (x[7] == "player" && x[8] == "player" && x[9] == "player") {
      alert('Դուք հաղթեցիք');
      myCount++;
      $('.me').html(myCount);
      return true
   }
   if (x[1] == "player" && x[4] == "player" && x[7] == "player") {
      alert('Դուք հաղթեցիք');
      myCount++;
      $('.me').html(myCount);
      return true
   }
   if (x[2] == "player" && x[5] == "player" && x[8] == "player") {
      alert('Դուք հաղթեցիք');
      myCount++;
      $('.me').html(myCount);
      return true
   }
   if (x[3] == "player" && x[6] == "player" && x[9] == "player") {
      alert('Դուք հաղթեցիք');
      myCount++;
      $('.me').html(myCount);
      return true
   }
   if (x[1] == "player" && x[5] == "player" && x[9] == "player") {
      alert('Դուք հաղթեցիք');
      myCount++;
      $('.me').html(myCount);
      return true
   }
   if (x[3] == "player" && x[5] == "player" && x[7] == "player") {
      alert('Դուք հաղթեցիք');
      myCount++;
      $('.me').html(myCount);
      return true
   }

   //պարտվող
   if (x[1] == "zero" && x[2] == "zero" && x[3] == "zero") {
      alert('Դուք պարտվեցիք');
      cpuCount++;
      $('.cpu').html(cpuCount);
      return true
   }
   if (x[4] == "zero" && x[5] == "zero" && x[6] == "zero") {
      alert('Դուք պարտվեցիք');
      cpuCount++;
      $('.cpu').html(cpuCount);
      return true
   }
   if (x[7] == "zero" && x[8] == "zero" && x[9] == "zero") {
      alert('Դուք պարտվեցիք');
      cpuCount++;
      $('.cpu').html(cpuCount);
      return true
   }
   if (x[1] == "zero" && x[4] == "zero" && x[7] == "zero") {
      alert('Դուք պարտվեցիք');
      cpuCount++;
      $('.cpu').html(cpuCount);
      return true
   }
   if (x[2] == "zero" && x[5] == "zero" && x[8] == "zero") {
      alert('Դուք պարտվեցիք');
      cpuCount++;
      $('.cpu').html(cpuCount);
      return true
   }
   if (x[3] == "zero" && x[6] == "zero" && x[9] == "zero") {
      alert('Դուք պարտվեցիք');
      cpuCount++;
      $('.cpu').html(cpuCount);
      return true
   }
   if (x[1] == "zero" && x[5] == "zero" && x[9] == "zero") {
      alert('Դուք պարտվեցիք');
      cpuCount++;
      $('.cpu').html(cpuCount);
      return true
   }
   if (x[3] == "zero" && x[5] == "zero" && x[7] == "zero") {
      alert('Դուք պարտվեցիք');
      cpuCount++;
      $('.cpu').html(cpuCount);
      return true
   }

   //ոչ ոքի
   if (x[0] && x[1] && x[2] && x[3] && x[4] && x[5] && x[6] && x[7] && x[8]) { alert('Խաղը ավարտվեց ոչ ոքի'); return true }

}


function move(id, role) {
   if (x[id]) return false
   x[id] = role;
   document.getElementById(id).className = "cell " + role
   !checkEnd() ? (role === "player") ? zero() : null :
      $('.game').click(function reset() {
         localStorage.setItem('myCount', $('.me').html())
         localStorage.setItem('cpuCount', $('.cpu').html())
         location.reload();
      })
}
$('.reset').click(function () {
   localStorage.setItem('myCount', 0)
   localStorage.setItem('cpuCount', 0)
   location.reload();

})


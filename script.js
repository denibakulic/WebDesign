function hamburger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

window.onscroll = function() {scrollAnimation()};

function scrollAnimation() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("rcp-container").className = "play";
    document.getElementById("slide").className = "play";
  } else {
    document.getElementById("rcp-container").className = "";
    document.getElementById("slide").className = "";
  }
}

var jelo=0;
function odabir(x)
{
	console.log(x);
	jelo=x;
	//1 koemdija, 2 superheroj, 3 triler, 4 horror, 5 akcija, 6 djecji, 7 avantura
	
	console.log(jelo);
}
function prikazi()
{
  switch(jelo)
  {
    case 1:
      window.open("recept_1.html");
    case 2:
      window.open("recept_3.html");
    case 3:
      window.open("recept_4.html");
    case 4:
      window.open("recept_5.html");

  }
}

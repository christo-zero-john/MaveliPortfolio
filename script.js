var nav = document.getElementById("nav");
var home = document.getElementById("home");
var theLegend = document.getElementById("theLegend");
var portfolio = document.getElementById("portfolio");
var resources = document.getElementById("resources");
var gallery = document.getElementById("gallery");
var footer = document.getElementById("footer");

var navBar = `<nav class="navbar navbar-expand-md navbar-light bg-transparent">

<button class="navbar-toggler btn-outline-warning" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav mr-auto ml-auto">
    <a class="nav-item font-weight-bold text-warning nav-link" href="index.html" id="home">Home </a>
    <a class="nav-item font-weight-bold text-warning nav-link" href="legend.html" id="theLegend">The Legend</a>
    <a class="nav-item font-weight-bold text-warning nav-link" href="biography.html" id="portfolio">Biography</a>
    <a class="nav-item font-weight-bold text-warning nav-link" href="https://youtu.be/JIzhPwSJsoA?si=c7N4TnYeO1IoXzLs" id="resources">The Myth</a>
    <a class="nav-item font-weight-bold text-warning nav-link" href="onam.html" id="gallery">Onam</a>
  </div>
</div>
</nav>`;

var footerTxt = `<div class="footer rajdhani">
<div class="ftDiv">
    <span class="ft ">Copyright </span> <span class="tesNic orbitron">
        Tesnic.io</span> <span class="ft">2023</span>
</div>`

footer.innerHTML = footerTxt;
nav.innerHTML = navBar;


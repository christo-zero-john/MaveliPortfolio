var nav = document.getElementById("nav");
var home = document.getElementById("home");
var theLegend = document.getElementById("theLegend");
var portfolio = document.getElementById("portfolio");
var resources = document.getElementById("resources");
var gallery = document.getElementById("gallery");



nav.innerHTML = `<nav class="navbar navbar-expand-md navbar-light bg-transparent">


<button class="navbar-toggler btn-outline-warning" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav mr-auto ml-auto">
    <a class="nav-item font-weight-bold text-warning nav-link" href="index.html" id="home">Home </a>
    <a class="nav-item font-weight-bold text-warning nav-link" href="legend.html" id="theLegend">The Legend</a>
    <a class="nav-item font-weight-bold text-warning nav-link" href="portfolio.html" id="portfolio">Portfolio</a>
    <a class="nav-item font-weight-bold text-warning nav-link" href="resources.html" id="resources">Resources</a>
    <a class="nav-item font-weight-bold text-warning nav-link" href="gallery.html" id="gallery">Gallery</a>
  </div>
</div>
</nav>`;
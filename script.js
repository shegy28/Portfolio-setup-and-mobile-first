function openNav() {
    document.getElementById("drop-down").style.width = "100%";
    document.getElementById("container").style.filter = "blur(7px)";
  }
  
  function closeNav() {
    document.getElementById("drop-down").style.width = "0%";
    document.getElementById("container").style.filter = "blur(0px)";
  }
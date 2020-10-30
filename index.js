function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    var inp = document.getElementById("buttonAction");
    const menuBtn = document.querySelector(".menu-button");
    menuBtn.classList.add("open");
    inp.onclick = closeNav;
    var equis = document.getElementById("button");
    equis.style.background = "transparent";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var inp = document.getElementById("buttonAction");
    inp.onclick = openNav;
    const menuBtn = document.querySelector(".menu-button");
    menuBtn.classList.remove("open");
    if (localStorage.getItem("isDark") === "true") {
      var equis = document.getElementById("button");
      equis.style.background = "white";
      var equis1 = document.getElementById("button1");
      equis1.style.background = "white";
      var equis2 = document.getElementById("button2");
      equis2.style.background = "white";
    } else {
      var equis = document.getElementById("button");
      equis.style.background = "black";
      var equis1 = document.getElementById("button1");
      equis1.style.background = "black";
      var equis2 = document.getElementById("button2");
      equis2.style.background = "black";
    }
  }

  function checkLocalStorage() {
    if (localStorage.getItem("isDark") === null) {
      localStorage.setItem("isDark", "false");
      //gives the localStorage variable a value of false if the variable doesn´t exists
    } else {
      darkMode();
      //executes function darkMode() in case variable already exists
    }
  }

  function switchMode() {
    if (localStorage.getItem("isDark") == "true") {
      localStorage.setItem("isDark", "false");
      //Switches dark mode variable to false if == true
    } else {
      localStorage.setItem("isDark", "true");
      //Switches dark mode variable to true if == false
    }
    darkMode();
  }

  function darkMode() {
    if (localStorage.getItem("isDark") === "true") {
      document.body.style.background = "#000000";
      var glitch = document.getElementById("glitch");
      glitch.style.color = "white";
      var equis = document.getElementById("button");
      equis.style.background = "white";
      var equis1 = document.getElementById("button1");
      equis1.style.background = "white";
      var equis2 = document.getElementById("button2");
      equis2.style.background = "white";

      //changes varibles for when the darkMode is ON
    } else {
      document.body.style.background = "#ffffff";
      var glitch = document.getElementById("glitch");
      glitch.style.color = "black";
      var equis = document.getElementById("button");
      equis.style.background = "black";
      var equis1 = document.getElementById("button1");
      equis1.style.background = "black";
      var equis2 = document.getElementById("button2");
      equis2.style.background = "black";
      //changes varibles for when the darkMode is OFF
    }
  }
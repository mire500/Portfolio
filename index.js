function menuButton() {
  const menu = document.querySelector(".myLinks");

  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function experience(evt, jobName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(jobName).style.display = "block";
  evt.currentTarget.className += " active";
}

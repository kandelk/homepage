function showExperience() {
  var moreText = document.getElementById("more_experience");
  var btnText = document.getElementById("more_experience_btn");

  if (moreText.style.display === "block") {
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Show less";
    moreText.style.display = "block";
  }
}
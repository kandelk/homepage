function showMore(textId, btnId) {
  var moreText = document.getElementById(textId);
  var btnText = document.getElementById(btnId);

  if (moreText.style.display === "block") {
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Show less";
    moreText.style.display = "block";
  }
}
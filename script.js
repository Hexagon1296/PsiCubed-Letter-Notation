let coll = document.getElementsByClassName("open");

for(let i = 0;i<coll.length;i++){
 coll[i].addEventListener("onclick", function() {
    this.classList.toggle("collapsed");
    var content = this.parentElement.nextElementSibling;
    if (content.style.display === "") {
      content.style.display = "none";
    } else {
      content.style.display = "";
    }
  });
}

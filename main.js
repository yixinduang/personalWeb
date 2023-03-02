// for the nav part
const act = document.getElementsByClassName("active");
function active(ele) {
  console.log(act);
  act[0].className = "unactive";
  ele.className = "active";
}

const dropdown = document.querySelector("#dropdown");
const result = document.querySelector("#result");

function size(point, round) {
   result.innerHTML =
      (window.innerWidth * point).toFixed(round) +
      "   x   " +
      (window.innerHeight * point).toFixed(round);
   window.addEventListener("resize", function () {
      result.innerHTML =
         (window.innerWidth * point).toFixed(round) +
         "   x   " +
         (window.innerHeight * point).toFixed(round);
   });
}

dropdown.addEventListener("change", function () {
   dropdown.value == "1"
      ? size(1, 0)
      : dropdown.value == "2"
      ? size(0.010416, 2)
      : dropdown.value == "3"
      ? size(0.0264583, 2)
      : (result.innerHTML = "");
});

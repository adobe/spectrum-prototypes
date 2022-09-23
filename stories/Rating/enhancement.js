(function () {
  function setValue(rating, value) {
    var input = rating.querySelector(".spectrum-Rating-input");
    input.value = value;
    Array.prototype.forEach.call(
      rating.querySelectorAll(".spectrum-Rating-icon"),
      function (el, index) {
        el.classList[index <= value - 1 ? "add" : "remove"]("is-selected");
        el.classList[index === value - 1 ? "add" : "remove"]("is-currentValue");
      }
    );
  }
});

document.getElementById("phone").addEventListener("input", function (e) {
  let input = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters

  if (input.length > 3 && input.length <= 6) {
    input = input.slice(0, 3) + "-" + input.slice(3);
  } else if (input.length > 6) {
    input =
      input.slice(0, 3) + "-" + input.slice(3, 6) + "-" + input.slice(6, 10);
  }

  e.target.value = input;
});

$(document).ready(function() {
  $(".reveal").on("click", function() {
    $(this)
      .parent()
      .children()
      .last()
      .toggle();
    // console.log($(this).text());
    $(this)
      .children()
      .html(function(i, text) {
        return text === "Details [+]" ? "Hide [-]" : "Details [+]";
      });
  });
});

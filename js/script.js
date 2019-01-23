$(document).ready(function() {
  //Event Listen for Click on Details [+]
  $(".reveal button").on("click", function() {
    // Toggle visibility of Project Description
    $(this)
      .parent()
      .parent()
      .children()
      .last()
      .toggle();
    // Switch text label depending on visibility of Description
    $(this)
      .children()
      .html("Details [+]" ? "Hide [-]" : "Details [+]");
      });

});

//comment

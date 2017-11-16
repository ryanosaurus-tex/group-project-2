// document ready
$(function(){
  $("#searchButton").on("click", function(event){
    console.log("on click function works");

    event.preventDefault();

    var newSearch = {
      name: $("#searchBox").val().trim()
    };

    $.ajax('/all/products', {
      type: "get",
      data: newSearch
    }).done(function(response){
      console.log("created a new search");

      var results = response.data;

      console.log(results);

      
      }
    );
  });

}); // /document ready
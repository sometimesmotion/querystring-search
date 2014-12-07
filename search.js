$(document).ready(function(){  
  $('#submit').click(function(event) {
    event.preventDefault();
    var flickrTerm = $('#searchTerm').val();
    var queryString = flickrTerm.replace(/\s/gi, '%20');
    var flickrURL = "https://www.flickr.com/search/?text="+queryString+"&sort=relevance&license=1%2C2%2C3%2C4%2C5%2C6";
    window.open(flickrURL);
  });
});

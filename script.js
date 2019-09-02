
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


function search() {
  var query = document.getElementById("search").value;
  if (!query) return window.alert("Please enter something.")
  window.open(`https://www.google.com/search?q=${query}`)
}


function sync() {
  var name = getUrlParameter('post');
}
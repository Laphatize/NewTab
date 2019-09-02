

function search() {
  var query = document.getElementById("search").value;
  if (!query) return window.alert("Please enter something.")
  window.open(`https://www.google.com/search?q=${query}`)
}
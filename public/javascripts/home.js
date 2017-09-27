$(document).ready(() => {
console.log('We Did It!!')

$.ajax({
  method: 'GET',
  url: '/movie',
  success: success
})

function success(data) {
  $('listMovies').querySelector()
}



})

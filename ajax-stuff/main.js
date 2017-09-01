var ajaxBtn = $('#ajaxBtn')

  ajaxBtn.on('click', function() {
  $.ajax({
    method: 'PUT',
    url: 'http://jsonplaceholder.typicode.com/todos/7',
    data: {completed: false, title: "Master AJAX", userId: 1},
  })
  .done(function(response) {
    var updatedTaskDiv = $('<div></div>')
        updatedTaskDiv.html('Task #' + response.id + " has been updated to: "
        + response $('main').append(updatedTaskDiv))
  })
  .fail(function(response) {
    var updatedTaskDiv = $('<div></div>')
    updatedTaskDiv.thml(response.statusText + '. Please try again.')
    $('.main').append(updatedTaskDiv)
  })
})
})

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/CornerstoneII/repos?per_page=20', true)

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  var statusHTML = '';
  $.each(data, function(i, status) {
    statusHTML += '<li class="repo-item">';

    statusHTML += '<div class="about-repo">';

    statusHTML += '<div class="about-name">';

    statusHTML += '<div class="name">';
    statusHTML += '<h3>';
    statusHTML += '<a href="#" class="title-name">' + status.name + '</a>';
    statusHTML += '</h3>';
    statusHTML += '</div>';

    statusHTML += '<div class="about-description">';
    statusHTML += '<p class="description">' + status.description + '</p>';
    statusHTML += '</div>';

    statusHTML += '<div class="about-info">';
    statusHTML += '<span class="about-lang">'+ status.language +'</span>';

    statusHTML += '<i class="far fa-star">';
    statusHTML += '</i>';

    statusHTML += '<span class="star-count">'+ status.stargazers_count +'</span>';

    statusHTML += '<i class="fa fa-code-fork">';
    statusHTML += '</i>';

    statusHTML += '<span class="star-count">'+ status.forks_count +'</span>';

    statusHTML += '<span class="star-count">'+ status.created_at +'</span>';

    statusHTML += '</div>';

    statusHTML += '</div>';

    statusHTML += '</div>';

    statusHTML += '<div class="about-star">';
    // statusHTML += '<div class="right-float">';
    // statusHTML += '<button>';

    // statusHTML += '<i class="far fa-star right-float-btn">';
    // statusHTML += '</i>';

    // statusHTML += '<span class="about-repo-star">'+Star+'</span>';

    // statusHTML += '</button>';
    // statusHTML += '</div>';
    statusHTML += '</div>';

    statusHTML += '</li>';
  });
  $('.repofilter').html(statusHTML);
}

// Send request
request.send();
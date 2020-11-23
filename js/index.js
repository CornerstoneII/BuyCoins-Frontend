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

    statusHTML += '<span class="about-lang">' + status.languages + '</span>';
    statusHTML += '<span class="star-count">' + status.stargazers_count + '</span>';
    statusHTML += '<span class="fork-count">' + status.forks_count + '</span>';
    statusHTML += '<span class="fork-count">' + status.forks_count + '</span>';

    statusHTML += '</div>';

    statusHTML += '</div>';
    statusHTML += '</div>';

    statusHTML += '<td>' + status.forks_count + '</td>';
    statusHTML += '<td>' + status.created_at + '</td>';
    statusHTML += '</li>';
  });
  $('.repofilter').html(statusHTML);
}

// Send request
request.send();
// var getUserRepos = function () {
//   console.log("function was called");
// };
var getUserRepos = function () {
  fetch("https://api.github.com/users/octocat/repos");
};
getUserRepos();

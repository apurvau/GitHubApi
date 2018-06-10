// Code goes here

(function() {
    var app = angular.module("githubviewer", []);
    var MainController = function($scope, $http) {
      var onRepos = function(response) {
        $scope.repos = response.data;
      }
      var error = function(reason) {
        $scope.error = "could not fetch user";
      }

      var onUserCall = function(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url).then(onRepos, error);
      };

      $scope.search = function(username) {
        $http.get("https://api.github.com/users/" +username).then(onUserCall, error);
      };

      $scope.username = "angular";
      $scope.repoSortOrder = "+name";
    }
    app.controller("MainController", MainController);
  }


  
());
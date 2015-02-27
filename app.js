var hackerNews = angular.module("hackerNews", ["ui.router"]);

hackerNews.config(function($stateProvider) {
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html",
    controller: "LinksCtrl"
  });

  $stateProvider.state("comments", {
    url: "/:linkId",
    templateUrl: "partials/comments.html",
    controller: "CommentsCtrl"
  });
});

hackerNews.controller("LinksCtrl",
  function LinksCtrl($scope, LinksFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
});

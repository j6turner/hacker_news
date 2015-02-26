hackerNews.controller("LinksCtrl",
  function LinksCtrl($scope, LinksFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;

  $scope.findLinkByID = function(id) {
    for (var i = 0; i < $scope.links.length; ++i) {
      if ($scope.links[i].id == id) {
        return $scope.links[i];
      }
    }
    return null;
  };
});

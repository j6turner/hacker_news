hackerNews.controller("CommentsCtrl",
  function CommentsCtrl($scope, $stateParams, LinksFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
  $scope.link = LinksFactory.findLinkByID($stateParams.linkId);

});

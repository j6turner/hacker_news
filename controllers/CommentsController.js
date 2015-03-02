hackerNews.controller("CommentsCtrl",
  function CommentsCtrl($scope, $stateParams, LinksFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
  $scope.link = LinksFactory.findLinkByID($stateParams.linkId);
  $scope.addComment = function() {
    $scope.link.comments.push({
      name: $scope.userName,
      comment: $scope.comment,
      upvotesCount: 0,
      agingFactor: 0,
      id: $scope.link.comments.length + 1
    });
  $scope.userName = null;
  $scope.comment = null;
  }
});

hackerNews.controller("LinksCtrl",
  function LinksCtrl($scope, LinksFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;

  $scope.addLink = function() {
    $scope.links.push({
      title: $scope.linkTitle,
      url: $scope.linkURL,
      id: $scope.links.length + 1,
      upvotesCount: 0,
      upvote: function() { ++this.upvotesCount; },
      rank: function() { return this.upvotesCount; },
      comments: []
    });

    $scope.linkTitle = null;
    $scope.linkURL = null;
  };

  $scope.deleteLink = function(link) {
    var index = $scope.links.indexOf(link);
    $scope.links.splice(index, 1);
  };
});

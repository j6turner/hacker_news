hackerNews.factory("LinksFactory", function LinksFactory() {
  var factory = {};
  factory.links = [];

  factory.addLink = function() {
    factory.links.push({
      title: factory.linkTitle,
      url: factory.linkURL,
      id: factory.links.length + 1,
      upvotesCount: 0,
      upvote: function() { ++upvotesCount; }
      comments: []
    });

    factory.linkTitle = null;
    factory.linkURL = null;
  };

  return factory;
});

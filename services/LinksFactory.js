hackerNews.factory("LinksFactory", function LinksFactory() {
  var factory = {};
  factory.links = [];

  factory.addLink = function() {
    factory.links.push({
      title: factory.linkTitle,
      url: factory.linkURL,
      id: factory.links.length + 1,
      upvotesCount: 0,
      upvote: function() { ++(this.upvotesCount); },
      comments: []
    });

    factory.linkTitle = null;
    factory.linkURL = null;
  };

  factory.findLinkByID = function(id) {
    for (var i = 0; i < factory.links.length; ++i) {
      if (factory.links[i].id == id) {
        return factory.links[i];
      }
    }
    return null;
  };

  return factory;
});

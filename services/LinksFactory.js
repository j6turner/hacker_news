hackerNews.factory("LinksFactory", function LinksFactory() {
  var factory = {};
  factory.links = [];

  factory.addLink = function() {
    factory.links.push({
      title: factory.linkTitle,
      url: factory.linkURL,
      id: factory.links.length + 1,
      comments: []
    });
    factory.linkTitle = null;
  };

  return factory;
});

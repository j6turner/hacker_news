hackerNews.factory("LinksFactory", function LinksFactory() {
  var factory = {};
  factory.links = [];

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

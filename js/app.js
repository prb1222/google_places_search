window.GooglePlaces = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new GooglePlaces.Routers.Router({$rootEl: $('div#content')});
    Backbone.history.start();
  }
};

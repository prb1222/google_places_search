GooglePlaces.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "posts/:id": "postShow"
  },

  index: function () {
    this.placesCollection = this.placesCollection || new GooglePlaces.Collections.Places();
    var view = new GooglePlaces.Views.PlacesIndex({collection: this.placesCollection});
    this.swapView(view);
  },

  swapView: function(view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  },

  // postShow: function(id) {
  //   var parsedId = this.parseId(id);
  //   var author_id = parsedId[0];
  //   var rawDate = parsedId[1];
  //   var post = this.postsCollection.get(author_id + '_' + rawDate);
  //   var view = new GooglePlaces.Views.PostShow({model: post});
  //   this.swapView(view);
  // },
  //
  // parseId: function(id) {
  //   return id.split("_");
  // }
})

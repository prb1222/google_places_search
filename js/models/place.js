GooglePlaces.Models.Post = Backbone.Model.extend({
  collection: GooglePlaces.Collections.Places,

  defaults: {},


  parse: function (response) {
    return response;
  },

  parseTags: function () {
    
  }
});

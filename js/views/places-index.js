GooglePlaces.Views.PlacesIndex = Backbone.View.extend({
  template: _.template($('#index-template').html()),

  initialize: function () {
    this.listenTo(this.collection, "add", this.addPlaceItem);
  },

  events: {
    "click #submit-button":"executeSearch"
  },

  render: function () {
    this.$el.html(this.template());
    GooglePlaces.autocomplete = GooglePlaces.autocomplete || new google.maps.places.Autocomplete(document.getElementById('search-field'), {});
    this.collection.each(function(place){
      this.addPlaceItem(place);
    }.bind(this));
    return this;
  },

  addPlaceItem: function (place) {
    var placeItemView = new GooglePlaces.Views.PlaceItem({model: place});
    $('ul.index-feed').append(placeItemView.render().$el);
  },

  executeSearch: function () {
    var searchText = $('#search-field').val();
    $('ul.index-feed').empty().html('<i class="fa fa-spinner fa-spin"></i>');
    GooglePlaces.service.textSearch({query: searchText}, this.parseResults.bind(this));
  },

  parseResults: function (results) {
    $('ul.index-feed').empty();
    results.forEach(function(result){
      var place = new GooglePlaces.Models.Place(result);
      this.addPlaceItem(place);
    }.bind(this));
  },

  // moveDate: function (view) {
  //   var $date = view.$el.find('.published-date').detach();
  //   if ($('#content').width() < 800) {
  //     view.$el.find('.index-item-title').after($date);
  //   } else {
  //     view.$el.find('.author-name').after($date);
  //   }
  // },

  // resizeTitle: function (view) {
  //   var $hidden = view.$el.find('div.hidden');
  //   var $content = view.$el.find('.index-item-content');
  //   var title = $hidden.text();
  //   var truncate = false
  //   while ($hidden.width() > $content.width() && title.length > 4) {
  //     var truncate = true;
  //     var title = $hidden.text().slice(0, title.length - 1);
  //     $hidden.text(title);
  //   }
  //   if (truncate) {
  //     title = title.slice(0, title.length - 3) + "...";
  //   }
  //   view.$el.find('span.title-span').text(title);
  // },
});

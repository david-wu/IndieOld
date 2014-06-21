window.Indie = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('init')
    Indie.router = new Indie.Routers.Main({});
    Backbone.history.start();
  }
}

$(function() {
  window.Indie.initialize();
});

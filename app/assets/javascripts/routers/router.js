window.Indie.Routers.Main = Backbone.Router.extend({
  routes: {
    '' : 'explore',
  },
  initialize: function(){
    $rootEl = $('#rootEl');
  },
  explore: function(){
    console.log('Router#Index')

    var events = new Indie.Collections.Events()
    var view = new Indie.Views.Frame({
      collection: events
    });
    //get and render in callback
    var event = new Indie.Models.Event({
      // needed for tiles
      category: 'technology',
      img_src: 'http://i.imgur.com/aQ1pCor.jpg',
      title: 'super phone',
      description: 'yea! lets go make super phones',
      primary_product_id: 4,
      funds_raised: '',
      funds_goal: '',
      start: Date.now(),
      end: Date.now()+(60*60*24*7),
      place: 'here',
    });
    var event2 = new Indie.Models.Event({
      // needed for tiles
      category: 'technologye',
      img_src: 'http://i.imgur.com/x3xgsdk.jpg',
      title: 'super poop',
      description: 'yea! lets go make super poop',
      primary_product_id: 5,
      funds_raised: '',
      funds_goal: '',
      start: Date.now(),
      end: Date.now()+(60*60*24*7),
      place: 'here',
    });
    events.add([event, event2]);

    this._swapView(view);
  },

  _swapView: function(showView){
    if (this._currentView){
      this._currentView.remove();
    }
    $rootEl.html(showView.$el);
    this._currentView = showView
  },

})

window.Indie.Routers.Main = Backbone.Router.extend({
  routes: {
    'explore': 'explore',
    'events/:id': 'showEvent',
    'user/new': 'newUser',
    'event/new': 'newEvent',
  },
  initialize: function(){
    $mainTiles = $('#mainTiles');
    $navBarEl = $('#navBarEl');
    $footerEl = $('#footerEl');
    $viewTile = $('#viewTile');
    $mainEl = $('#mainEl');

    this._generateNavBar();
    this._generateFooter();
  },
  newEvent: function(){
    console.log('router#newEvent')
    var newEventView = new Indie.Views.NewEvent();
    this._swapView(newEventView);
    newEventView.render();
  },
  newUser: function(){
    console.log('router#newUser')
    var newUserView = new Indie.Views.NewUser();
    this._swapView(newUserView);
    newUserView.render();
  },
  showEvent: function(id){
    console.log('open:'+id)
    $mainTiles.hide();

    //get tile attributes


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
      id: 123,
      category: 'technology',
      img_src: 'http://i.imgur.com/aQ1pCor.jpg',
      title: 'super phone',
      description: 'yea! lets go make super phones',
      primary_product_id: 4,
      funds_raised: '23',
      funds_goal: '4123',
      start: Date.now(),
      end: Date.now()+(60*60*24*7),
      place: 'here',
    });
    var event2 = new Indie.Models.Event({
      // needed for tiles
      id:321,
      category: 'techno',
      img_src: 'http://i.imgur.com/x3xgsdk.jpg',
      title: 'super poop',
      description: 'yea! lets go make super poop',
      primary_product_id: 5,
      funds_raised: '66',
      funds_goal: '6666',
      start: Date.now(),
      end: Date.now()+(60*60*24*3),
      place: 'here',
    });
    var event3 = new Indie.Models.Event({
      // needed for tiles
      id: 333,
      category: 'arts',
      img_src: 'http://i.imgur.com/x3xgsdk.jpg',
      title: 'super poop',
      description: 'yea! lets go make super poop',
      primary_product_id: 5,
      funds_raised: '66',
      funds_goal: '6666',
      start: Date.now(),
      end: Date.now()+(60*60*24*1),
      place: 'here',
    });
    events.add([event, event2, event3]);

    this._swapView(view);
  },
  _generateNavBar: function(){
    var barView = new Indie.Views.NavBar();
    this._swapNavBar(barView);
    barView.render();
  },
  _swapNavBar: function(navBarView){
    if (this._currentNavBar){
      this._currentNavBar.remove();
    }
    $navBarEl.html(navBarView.$el);
    this._currentNavBar = navBarView;
  },
  _generateFooter: function(){
    var footerView = new Indie.Views.Footer();
    this._swapFooter(footerView);
    footerView.render();
  },
  _swapFooter: function(footerView){
    if (this._currentFooter){
      this._currentFooter.remove();
    }
    $footerEl.html(footerView.$el);
    this._currentFooter = footerView;
  },
  _swapView: function(showView){
    if (this._currentView){
      this._currentView.remove();
    }
    $mainEl.html(showView.$el);
    this._currentView = showView
  },

})

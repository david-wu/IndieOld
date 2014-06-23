window.Indie.Routers.Main = Backbone.Router.extend({
  routes: {
    'explore': 'explore',
    'events/:id': 'showEvent',
    'user/new': 'signUp',
    'user/login': 'signUp',
    'user/logout': 'signOut',
    'event/new': 'newEvent',
  },
  initialize: function(){
    $navBarEl = $('#navBarEl');
    $mainEl = $('#mainEl');
    $footerEl = $('#footerEl');
    // unsecure
    this._currentUser = new Indie.Models.User({
      fname: Cookie.get('fname'),
      session_token: Cookie.get('session_token'),
    });
    this._events = new Indie.Collections.Events()
    this._generateNavBar(this._currentUser);
    this._generateFooter();
  },
  explore: function(){
    console.log('Router#Index')
    var view = new Indie.Views.Frame({
      collection: this._events
    });
    this._events.fetch({
      success: function(){
        view.render();
      }
    })

    var event = new Indie.Models.Event({
      // needed for tiles
      id: 123,
      owner_id: 3,
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
      owner_id: 4,
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
      owner_id: 3,
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
    var event4 = new Indie.Models.Event({
      // needed for tiles
      id: 3335,
      owner_id: 3,
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
    this._events.add([event, event2, event3, event4]);


    this._swapView(view);
  },
  signUp: function(){
    console.log('router#newUser')
    var newUserView = new Indie.Views.NewUser();
    this._swapView(newUserView);
    newUserView.render();
  },
  signOut: function(){
    Cookie.delete('fname')
    Cookie.delete('session_token')
    this._currentUser = new Indie.Models.User();
    this.navigate('explore', {trigger: true});
    this._generateNavBar(this._currentUser);
  },
  newEvent: function(){
    console.log('router#newEvent')
    var newEventView = new Indie.Views.NewEvent();
    this._swapView(newEventView);
    newEventView.render();
  },
  showEvent: function(id){
    console.log('open:'+id)
  },
  _generateNavBar: function(user){
    var barView = new Indie.Views.NavBar({
      user: user
    });
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

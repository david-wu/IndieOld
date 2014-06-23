Indie.Views.NewUser = Backbone.View.extend({
  template: JST['user/new'],
  events: {
    'click #sign-up-button': 'signUp',
    'click #sign-in-button': 'signIn'
  },
  signUp: function(event){
    var user = new Indie.Models.User($(event.target.form).serializeJSON())
    user.save([],{
      success: function(model, res){
        Indie.router._currentUser = new Indie.Models.User(res);
        console.log(user)
        Cookie.set('session_token', user.get('session_token'));
        Cookie.set('fname', user.get('fname'));
        Indie.router._generateNavBar(user);
        Indie.router.navigate('explore', {trigger: true})
      }
    });
  },
  signIn: function(event){
    var user = new Indie.Models.User($(event.target.form).serializeJSON())
    console.log(user)
  },
  render: function(){
    console.log('newUser#render')
    var renderedContent = this.template({
    });
    this.$el.html(renderedContent)
  },
  initialize: function(){
    var user = new Indie.Models.User();
  },
})

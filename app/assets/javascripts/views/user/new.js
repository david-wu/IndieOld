Indie.Views.NewUser = Backbone.View.extend({
  template: JST['user/new'],
  events: {
    'click #sign-up-button': 'signUp',
    'click #sign-in-button': 'signIn',
  },
  signUp: function(event){
    var user = new Indie.Models.User($(event.target.form).serializeJSON())
    user.save([],{
      success: function(model, res){
        Indie.router._currentUser = new Indie.Models.User(res);
        //dry this out
        Cookie.set('session_token', user.get('session_token'));
        Cookie.set('fname', user.get('fname'));
        Cookie.set('email', user.get('email'));
        Cookie.set('user_id', user.get('id'));
        Indie.router._generateNavBar(user);
        Indie.router.navigate('explore', {trigger: true})
      }
    });
  },
  signIn: function(event){
    var user = new Indie.Models.User($(event.target.form).serializeJSON())
    user.signIn({
      success: function(res){
        user = new Indie.Models.User(res);
        Indie.router._currentUser = user;
        //dry this out
        Cookie.set('session_token', user.get('session_token'));
        Cookie.set('fname', user.get('fname'));
        Cookie.set('email', user.get('email'));
        Cookie.set('user_id', user.get('id'));
        Indie.router._generateNavBar(user);
        Indie.router.navigate('explore', {trigger: true})
      }
    })
  },
  render: function(){
    console.log('newUser#render')
    var renderedContent = this.template({});
    this.$el.html(renderedContent)
  },
  initialize: function(){
    var user = new Indie.Models.User();
  },
})

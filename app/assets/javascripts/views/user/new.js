Indie.Views.NewUser = Backbone.View.extend({
  template: JST['user/new'],
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

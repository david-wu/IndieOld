Indie.Views.NavBar = Backbone.View.extend({
  template: JST['frame/nav_bar'],
  render: function(){
    var renderedContent = this.template({
      user: this.user
    });
    this.$el.html(renderedContent)
    return this;
  },
  initialize: function(options){
    this.user = options['user']
  },
})

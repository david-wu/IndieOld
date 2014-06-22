Indie.Views.NavBar = Backbone.View.extend({
  template: JST['frame/nav_bar'],
  render: function(){
    var renderedContent = this.template({});
    this.$el.html(renderedContent)
    return this;
  },
  initialize: function(){
  },
})

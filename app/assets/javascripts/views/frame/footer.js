Indie.Views.Footer = Backbone.View.extend({
  template: JST['frame/footer'],
  render: function(){
    var renderedContent = this.template({});
    this.$el.html(renderedContent)
    return this;
  },
  initialize: function(){
  },
})

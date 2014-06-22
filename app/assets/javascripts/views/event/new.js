Indie.Views.NewEvent = Backbone.View.extend({
  template: JST['event/new'],
  events: {

  },
  render: function(){
    console.log('newEvent#render')
    var event = new Indie.Models.Event({});
    var renderedContent = this.template({
      event: event,
    });
    this.$el.html(renderedContent)
    return this;
  },
  initialize: function(){
    var event = new Indie.Models.Event();
  },
})

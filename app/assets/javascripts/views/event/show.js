Indie.Views.EventShow = Backbone.View.extend({
  templateNew: JST['event/show'],
  initialize: function(options){
    this.event = options.event
    this.event.on('change add reset', this.render, this);
  },
  render: function(){
    console.log('eventShow#render: ', this.event)
    var renderedContent = this.templateNew({
      event: this.event,
    });
    this.$el.html(renderedContent)
    return this;
  },
})

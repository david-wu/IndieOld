Indie.Views.Frame = Backbone.View.extend({
  template: JST['frame/tiles'],
  render: function(){
    var renderedContent = this.template({
      events: this.collection,
    });
    this.$el.html(renderedContent)

    // var tile = JST['backbone/templates/frame/tile']
    // this.collection.each(function(event){
    //   console.log(event)
    // })

    return this;
  },
  addTile: function(){

  },
  initialize: function(){
    this.collection.on('change add reset', this.render, this);
  },
})

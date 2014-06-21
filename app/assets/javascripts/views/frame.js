Indie.Views.Frame = Backbone.View.extend({
  template: JST['frame/frame'],
  render: function(){
    console.log(this.collection)
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
  initialize: function(){

  },
})

Indie.Views.EventShow = Backbone.View.extend({
  templateNew: JST['event/show'],
  events: {
    'click .glyphicon-pencil.glyphicon': "editEvent",
  },
  initialize: function(options){
    this.event = options.event
    this.event.on('change add reset sync', this.render, this);
  },
  // clean this up!
  editEvent: function(event){
    this.render();
    var that = this;
    var attr = event.currentTarget.dataset['attr']
    var $el = $("span[data-attr="+attr+"]").parent();
    var fieldLength = 8;

    // sets length of input box
    if(this.event.get(attr)){
      console.log(this.event.get(attr))
      if(this.event.get(attr).length > 5){
        fieldLength = this.event.get(attr).length
      }
    }

    // debugger
    // $el.html('<input type="text" name="pin" maxlength="4" size="4">')
    $el.html('<input id="edit-attr-field" type="text" size="'+fieldLength+'" value="'+this.event.get(attr)+'">')
    // debugger
    $el.children()[0].select()
    $el.keydown(function(event){
      if(event.keyCode === 13){
        event.preventDefault()
        that.event.set(attr, $('#edit-attr-field').val())
        that.event.save();
      }
    })

    console.log(this.event)
  },
  render: function(){
    var renderedContent = this.templateNew({
      event: this.event,
    });
    this.$el.html(renderedContent)
    return this;
  },
})

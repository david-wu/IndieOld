Indie.Views.NewEvent = Backbone.View.extend({
  templateNew: JST['event/new'],
  events: {
    'click .setUp.btn': "setUp",
    'click .event-category-button': "setCategory",
    'click .event-currency-button': "setCurrency",
  },
  initialize: function(event){
    if(!event){
      this.event = new Indie.Models.Event({});
    } else{
      this.event = event;
    }
    this.event.set('session_token', Cookie.get('session_token'))
  },
  render: function(){
    console.log('newEvent#render')
    var renderedContent = this.templateNew({
      event: this.event,
    });
    this.$el.html(renderedContent)
    return this;
  },
  setCurrency: function(event){
    $(event.toElement).addClass('active');
    $(event.toElement).siblings().removeClass('active');
    this.event.set('currency',event.toElement.innerHTML)
  },
  setCategory: function(event){
    $(event.toElement).addClass('active');
    $(event.toElement).siblings().removeClass('active');
    this.event.set('category',event.toElement.innerHTML)
  },
  setUp: function(){
    var that = this;
    console.log('newEvent#setUp')
    var digits = /[^0-9]/;
    if(digits.test($('#event-funds-field').val())){
      $('#event-new-errors').html('DIGITS ONLY!')
      return false;
    }else{
      this.event.set('funds_goal', $('#event-funds-field').val())
    }
    this.event.save([], {
      success: function(response){
        Indie.router.navigate('events/'+response.get('id'), {trigger: true})
      },
      error: function(response){
        $('#event-new-errors').html('ERROR! ' + response)
      }
    });
    return this;
  },


})

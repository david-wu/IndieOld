Indie.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",
  signIn: function(options){
    $.ajax({
      type: "POST",
      data: this.attributes,
      url: "/api/users/login",
      dataType: "json",
      success: options.success.bind(this),
    });
  }
})

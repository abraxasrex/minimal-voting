Polls = new Mongo.Collection('polls');


Polls.allow({
	
 insert: function (userId) {
    return userId;
  },

  update: function (userId) {
	  
	return userId;
	
  },

  remove: function (userId) {
    return userId;
  }
	
})

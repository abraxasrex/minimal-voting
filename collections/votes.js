Votes= new Mongo.Collection('votes');

Votes.allow({
	
  insert: function(userId){
	  return userId;
  },
  
  update: function (userId) {
	return userId;
  },
  
  remove: function (userId) {
    return userId;
  } 
})

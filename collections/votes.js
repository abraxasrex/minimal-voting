Votes= new Mongo.Collection('Votes');

Votes.allow({
	
  insert: function(userId){
	
	return userId;
  }
  
})

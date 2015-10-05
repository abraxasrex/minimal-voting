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


//Polls.helpers({
 // totalVotes: function() {
  //  return Votes.find().count();
  //},

  //votesForOption: function(option) {
 //   return Votes.find({option: option}).count();
 // },

 // percentOfTotal: function(option) {
 //   var totalVotes = this.totalVotes();
  //  return (this.votesForOption(option) / this.totalVotes()) * 100;
  //}

//});

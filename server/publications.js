Meteor.publish('polls', function(){
	return Polls.find();
})
Meteor.publish('Votes',function(){
	return Votes.find();
})

Meteor.publish('myPollsView',function(){
	var currentUserId=this.userId;
	return Polls.find({createdBy: currentUserId});
})




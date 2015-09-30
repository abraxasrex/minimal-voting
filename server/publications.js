Meteor.publish('allPollsView',function(){
	return Polls.find();
})
Meteor.publish('myPollsView',function(){
	var currentUserId=this.userId;
	return Polls.find({createdBy: currentUserId});
})

Meteor.publish('allVotes',function(){
	return Votes.find();
})
Meteor.publish('hasVoted',function(){
	var currentUserId=this.userId;
	return Votes.find({voter: currentUserId});
})


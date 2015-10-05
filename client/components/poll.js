// attach events to our poll template
Template.poll.events({
	
   'click .delete': function(){
	   Polls.remove(this._id);
   },
 
  'click .vote': function(event) {

    event.preventDefault();
  
    // get the parent (poll) id
    var pollID = $(event.currentTarget).parent('.well').data('id');
    var voteID = $(event.currentTarget).data('id');
	var thisVoter = Meteor.userId();
	var thisChoice= $(event.currentTarget).children('.text').text();
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;
	
	 var newVote={
		voter: thisVoter,
		poll: pollID,
		choice: thisChoice
	}
    
        if(Votes.find({voter: thisVoter, poll: pollID}).count()>0){
			return false;
		}
		else{
			Polls.update(
           { _id: pollID }, 
           { $inc: action });
	       Votes.insert(newVote);
		}
			
      
  }
})

Template.poll.helpers({
	myChoice: function(){
		var thisVoter= Meteor.userId();
		if(Votes.find({voter: thisVoter, poll: this._id}).count()>0){
			return Votes.findOne({voter: thisVoter, poll: this._id}).choice;
		}
			
	},
	
	owner: function(){
	
		return this.createdBy== Meteor.userId();
	},
	
	hasVoted:function(){
		var thisVoter= Meteor.userId();
		if(Votes.find({voter: thisVoter, poll: this._id}).count()>0){
			return true;
		}
	}
	
})
Template.pollForm.events({

  'submit form': function(event) {
    event.preventDefault();
    var currentUserId=Meteor.userId();
  
    var newPoll = {
		createdBy: currentUserId,
      question: event.target.question.value,
      choices: [
        {  text: event.target.choice1.value, votes: 0 },
        {  text: event.target.choice2.value, votes: 0 },
        {  text: event.target.choice3.value, votes: 0 }
      ],

    };    
     
   
    Polls.insert(newPoll);
	////clear field/////
	event.target.question.value="";
	event.target.choice1.value="";
	event.target.choice2.value="";
	event.target.choice3.value="";
	
	/////hide and show////
     $(".poll-form").slideToggle();
	 $(".atext").toggle();
	 $(".btext").toggle();
  },
   'click .opener': function(){
     $(".poll-form").slideToggle();
	 $(".atext").toggle();
	 $(".btext").toggle();
	 
    }
  
});


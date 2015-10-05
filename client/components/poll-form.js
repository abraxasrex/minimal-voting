Session.setDefault("counter", 0);

Template.pollForm.events({
	
  'click .append':function(event){
	  event.preventDefault();
	  var count=  Session.get("counter")
	   if(count < 3){
		    Session.set("counter", Session.get("counter") + 1);
		  $('.append').before('<div class="form-group  extra"><label>Choice:</label><input type="text" name="choice2" class="form-control choice" placeholder="Choice#etc..."></div>'); 
	   }
	     event.stopPropagation();
  },
  
  'submit form': function(event){
    event.preventDefault();
    var currentUserId=Meteor.userId();
    var theseChoices=[];
	
	$('.choice').each(function(){
	theseChoices.push( {text: this.value, votes: 0});
	});
	
    var newPoll = {
		createdBy: currentUserId,
      question: event.target.question.value,
      choices: theseChoices
    };    
    Polls.insert(newPoll);
	////clear field/////
		  $(".poll-form").find("input[type=text], textarea").val("");
	Session.set("counter", 0);
	/////hide and show////
     $(".poll-form").slideToggle();
	 $(".atext").toggle();
	 $(".btext").toggle();
	  event.stopPropagation();
  },
  
   'click .opener': function(event){
     $(".poll-form").slideToggle();
	 $(".atext").toggle();
	 $(".btext").toggle();
	   $(".poll-form").find("input[type=text], textarea").val("");
	  event.stopPropagation();
    },
	
	'click .clearForm': function(event){
		event.preventDefault();
	  $(".poll-form").find("input[type=text], textarea").val("");
	  Session.set("counter", 0);
	event.stopPropagation();
	$('.extra').remove();
	}
  
});



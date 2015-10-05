Meteor.startup(function() {
  
  if (Polls.find().count() === 0) {
    
    var samplePolls = [
      { createdBy: 'taco',
        question: 'Which pet is better?',
        choices: [
          { text: 'parakeet', votes: 0 },
          { text: 'dog', votes: 0 },
          { text: 'doge', votes: 0 }
        ]
      },
	  {   createdBy: 'taco',
		  question:'Who\'s you favorite X-men character?',
		  choices: [
		  {text: 'Wolverine', votes:0},
		{text: 'Cyclops', votes:0},
			{text: 'Mystique', votes:0},
		  {text: 'Storm', votes:0},
			  {text: 'Magneto', votes:0}
		  ]
	  }
    
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });
  }

});
Meteor.startup(function() {
  
  if (Polls.find().count() === 0) {
    
    var samplePolls = [
      {
        question: 'Which pet is better?',
        choices: [
          { text: 'parakeet', votes: 0 },
          { text: 'dog', votes: 0 },
          { text: 'doge', votes: 0 }
        ]
      },
	  {
		  question:'Who\'s you favorite X-men character?',
		  choices: [
		  {text: 'Wolverine', votes:0},
		{text: 'Cyclops', votes:0},
			{text: 'Mystique', votes:0},
		  {text: 'Storm', votes:0},
			  {text: 'Magneto', votes:0}
		  ]
	  },
      {
        question: 'Does this app function correctly for you?',
        choices: [
          { text: 'Yes', votes: 0 },
          { text: 'No, I can\'t vote!', votes: 0 },
          { text: 'No, I can\'t make a new poll!', votes: 0 },
		{text: 'No, the display is all messed up!', votes:0},
		{text: 'No, I have a different problem', votes: 0}
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });
  }

});
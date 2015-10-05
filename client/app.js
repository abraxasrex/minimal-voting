
Template.Main.helpers({
  
  polls: function() {
    return Polls.find();
  }
  
});

UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});

Template.Main.events({
	'click button.go-home':function(){
		FlowRouter.go('/');
	}
});

Template.Main.events({
	'click button.go-to-mine':function(){
		FlowRouter.go('/mypolls');
	}
});



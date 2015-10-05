function redirectHome(path, next){
	var redirectPath="/";
	next(redirectPath);
}

FlowRouter.route('/', {
  name: 'home',
  subscriptions: function() {
	  this.register('polls', Meteor.subscribe('polls'));
	  this.register('Votes', Meteor.subscribe('Votes'));

  },
  action: function() {
    FlowLayout.render('Main');
  }
});

FlowRouter.route('/mypolls', {
  name:'mypolls',
  subscriptions: function() {
  this.register('myPollsView', Meteor.subscribe('myPollsView'));
  this.register('Votes', Meteor.subscribe('Votes'));
  },
  action: function() { 
    FlowLayout.render('Main');
  }
});




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

FlowRouter.route('/mypolls/:ID', {
  name:'mypolls',
  subscriptions: function(params) {
  this.register('myPollsView', Meteor.subscribe('myPollsView', params.ID));
  this.register('Votes', Meteor.subscribe('Votes'));
  },
  action: function() { 
    FlowLayout.render('Main');
  }
});




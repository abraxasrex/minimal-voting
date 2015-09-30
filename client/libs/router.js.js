function redirectHome(path, next){
	var redirectPath="/";
	next(redirectPath);
}




FlowRouter.route('/', {
  name: 'home',
  subscriptions: function() {
	  this.register('polls', Meteor.subscribe('polls'));
	  this.register('allPollsView', Meteor.subscribe('allPollsView'));
	  this.register('allVotes', Meteor.subscribe('allVotes'));
	  this.register('hasVoted', Meteor.subscribe('hasVoted'));
  },
  action: function() {
    FlowLayout.render('Main');
  }
});

FlowRouter.route('/polls', {
  name: 'polls',
  subscriptions: function() {
   this.register('polls', Meteor.subscribe('polls'));
  this.register('myPollsView', Meteor.subscribe('myPollsView'));
  this.register('allVotes', Meteor.subscribe('allVotes'));
   this.register('hasVoted', Meteor.subscribe('hasVoted'));
  },
  action: function() {
    FlowLayout.render('Main');
  }
});
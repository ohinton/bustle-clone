import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('news');
  this.route('about');
  this.route('new', {path: '/new/:new_id'});
});

export default Router;

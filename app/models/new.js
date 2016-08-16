import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  story: DS.attr()
});

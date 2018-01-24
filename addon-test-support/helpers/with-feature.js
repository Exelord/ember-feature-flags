import Ember from 'ember';

export function withFeature(app, featureName) {
  let featuresService = app.__container__.lookup('service:features');
  featuresService.enable(featureName);
}

Ember.Test.registerHelper('withFeature', withFeature);

Todos = window.Todos = Ember.Application.create();

require('scripts/libs/*');
require('scripts/Router');
require('scripts/Models/*');
require('scripts/Controllers/*');
require('scripts/Views/*');

//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});
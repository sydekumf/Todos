Todos = window.Todos = Ember.Application.create();

require('scripts/libs/*');
require('scripts/Controllers/*');
require('scripts/Models/*');
require('scripts/Views/*');
require('scripts/Router');

//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});
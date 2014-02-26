Todos = window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

require('scripts/Router');
require('scripts/Models/*');
require('scripts/Controllers/*');
require('scripts/Views/*');
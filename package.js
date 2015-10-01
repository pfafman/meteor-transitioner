Package.describe({
  name: 'pfafman:transitioner',
  summary: 'Page transitions integrated with Iron Router.',
  version: '2.0.3',
  git: 'https://github.com/pfafman/meteor-transitioner'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1');

  api.use([
    'iron:router',
    'coffeescript',
    'templating',
    'underscore'
  ], 'client');

  api.addFiles([
    'lib/transitioner.css',
    'lib/transitioner.html',
    'lib/transitioner.coffee',
  ], 'client');

  api.export('Transitioner', ['client']);

});
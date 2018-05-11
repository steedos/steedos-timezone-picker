Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection.",
  version: '0.1.2',
  name: "steedos:timezone-picker",
  git: 'https://github.com/MeteorClub/timezone-picker'
});

Package.onUse(function(api, where) {
  api.versionsFrom("METEOR@0.9.4");

  api.use(['blaze', 'templating', 'jquery'], 'client');
  api.use(['underscore'], 'client');
  api.use(['steedos:moment@2.14.1', 'steedos:moment-timezone@0.2.1'], 'client');

  api.addFiles([
    'mapping.js',
    'picker.html',
    'picker.js',
    'jstz.js'
  ], 'client');

  api.export(['TimezonePicker']);
});



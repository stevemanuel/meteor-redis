Package.describe({
  summary: 'Meteor package to wrap redis driver. Includes hiredis.'
});

Package.on_use(function(api, where) {
  if (api.export) {
    api.export('redis');
  }
  api.add_files('meteor-redis.js', 'server');
});

Npm.depends({
  hiredis: '0.1.15',
  redis: '0.8.4'
});

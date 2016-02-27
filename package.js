Package.describe({
  name: 'merlin:accounts-edmodo',
  summary: 'Login service for Edmodo accounts',
  git: 'https://github.com/merlinpatt/accounts-edmodo',
  version: '1.0.8',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('less', ['client', 'server']);
  api.use('merlin:edmodo@1.0.7', ['client', 'server']);

  api.addFiles('edmodo_login_button.less', 'client');

  api.addFiles('edmodo.js');
});

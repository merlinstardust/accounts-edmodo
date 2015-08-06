Package.describe({
  name: 'merlin:accounts-edmodo',
  summary: 'Login service for Edmodo accounts',
  git: 'https://github.com/merlinpatt/accounts-edmodo',
  version: '1.0.1',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.0', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.1.5', ['client', 'server']);
  api.use('less@1.0.14', ['client', 'server']);
  api.use('merlin:edmodo@1.0.1', ['client', 'server']);

  api.addFiles('edmodo_login_button.less', 'client');

  api.addFiles('edmodo.js');
});

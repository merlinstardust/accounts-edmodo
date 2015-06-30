Package.describe({
  name: 'merlin:accounts-edmodo',
  summary: 'Login service for Edmodo accounts',
  git: 'https://github.com/merlinpatt/accounts-edmodo',
  version: '0.9.0',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.0', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.1.5', ['client', 'server']);
  api.use('merlin:edmodo@0.9.0', ['client', 'server']);

  api.addFiles('edmodo_login_button.css', 'client');

  api.addFiles('edmodo.js');
});

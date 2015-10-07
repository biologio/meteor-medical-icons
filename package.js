Package.describe({
  name: ‘biolog:font-medical-icons’,
  version: '0.0.1',
  summary: 'A font containing medical icons.  See http://samcome.github.io/webfont-medical-icons/',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  // documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom(‘1.0’);
    api.addFiles('wfmi-style.css', ‘client');
    api.addFiles('fonts/webfont-medical-icons.eot', ‘client');
    api.addFiles('fonts/webfont-medical-icons.svg', ‘client');
    api.addFiles('fonts/webfont-medical-icons.ttf', ‘client');
    api.addFiles('fonts/webfont-medical-icons.woff', ‘client');
});


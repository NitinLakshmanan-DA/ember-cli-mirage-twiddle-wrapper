/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-cli-mirage-twiddle-wrapper',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-mirage', target: '0.3.0-beta.4' },
      ]
    });
  }
};

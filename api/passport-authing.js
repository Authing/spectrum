/**
 * Module dependencies.
 */
var xtend = require('xtend');
var Profile = require('./Profile');

/**
 * `Strategy` constructor.
 *
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  this.options = xtend({}, options, {
    authorizationURL: 'https://' + options.domain + '/authorize',
    tokenURL: 'https://' + options.domain + '/oauth/token',
    userInfoURL: 'https://' + options.domain + '/userinfo',
    apiUrl: 'https://' + options.domain + '/api',
  });

  if (this.options.state === undefined) {
    this.options.state = true;
  }

  this._base = Object.getPrototypeOf(Strategy.prototype);
  this._base.constructor.call(this, this.options, verify);

  this.name = 'authing';
}

Strategy.prototype.authenticate = function(req, options) {
  if (req.query && req.query.error) {
    return this.fail(req.query.error);
  }
  this._base.authenticate.call(this, req, options);
};

/**
 * Retrieve user profile from Authing.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         this is the strategy (google-oauth2, google, office365, google-apps)
 *   - `id`               this is the user_id of the auth0 profile
 *   - `username`         this is the nickname of the auth0 profile
 *   - `displayName`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this.options.userInfoURL, accessToken, function(
    err,
    body,
    res
  ) {
    if (err) {
      return done(new Error('failed to fetch user profile', err));
    }

    try {
      var json = JSON.parse(body);
      var profile = new Profile(json, body);

      done(null, profile);
    } catch (e) {
      done(e);
    }
  });
};

/**
 * Expose `Strategy` directly from package.
 */
exports = module.exports = Strategy;

/**
 * Export constructors.
 */
exports.Strategy = Strategy;

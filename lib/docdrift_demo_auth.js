'use strict';

/**
 * DocDrift demo: current code path uses OAuth2 (not JWT).
 * Kept isolated so it won't affect Express runtime.
 */
function startOAuth2Flow({ clientId, redirectUri }) {
  if (!clientId || !redirectUri) {
    throw new Error('clientId and redirectUri are required');
  }
  return {
    type: 'oauth2',
    authorizationUrl: `https://example.com/oauth/authorize?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}`,
  };
}

module.exports = { startOAuth2Flow };
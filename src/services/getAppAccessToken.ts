import TwitchJs from 'twitch-js';
import fetchUtil from 'twitch-js/lib/utils/fetch'
import app from '@server';

type TokenResponse = {
  "access_token": string,
  "refresh_token": string,
  "expires_in": number,
  "scope": [],
  "token_type": 'bearer',
}

export const getAppAccessToken = async() => {

    const urlOAuth = 'https://id.twitch.tv/oauth2/token?client_id=axs6hlbkd84s5u4ixyfh9kmspodtgh&client_secret=w6zk67wnkb1kl4so2y935jr4enbqag&grant_type=client_credentials';
    const client_id = 'axs6hlbkd84s5u4ixyfh9kmspodtgh';
    const client_secret = 'o81bf3lwawsuph8drbiizuk4cjdscr';
    let result;
    const initOAuth = {
        method: 'post',
        // search: {
        //   grant_type: 'refresh_token',
        //   refresh_token: 'refreshToken',
        //   client_id: client_id,
        //   client_secret: client_secret,
        // },
    };
    try {
      return app.post(urlOAuth);
    } catch (error) {
      return error;
    }
}
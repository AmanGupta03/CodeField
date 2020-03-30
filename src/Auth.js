import axios from 'axios';
// import fetchData from './Api';

class Auth {
    constructor() {
      this.config = {
        'client_id' : 'f829194d65c07f512c46c4c32dd6eaad',
        'client_secret' : 'd601a400c0bbad874bb67e6d45c5ab69',
        'api_endpoint' : 'https://api.codechef.com/',
        'authorization_code_endpoint' : 'https://api.codechef.com/oauth/authorize',
        'access_token_endpoint' : 'https://api.codechef.com/oauth/token',
        'redirect_uri' : 'https://codefield-3430a.firebaseapp.com/callback/',
        'website_base_url' : 'https://codefield-3430a.firebaseapp.com/'
      };
  
      this.oauth_details = {
        'authorization_code' : 'Sign In',
        'access_token' : '',
        'refresh_token' : '',
        'expires_in' : ''
      };
      this.userHandle = "SignIn";
    }
  
    signIn() {
        const params = new URLSearchParams({
            'response_type' : 'code',
            'client_id' : this.config.client_id,
            'redirect_uri' : this.config.redirect_uri,
            'state' : 'xyz'
        }).toString();
        const url = this.config.authorization_code_endpoint + '?' + params;
        window.location.href = url;
    }

    async get_access_token_first_time() {
      await axios({
        method: 'post',
        url: this.config.access_token_endpoint,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'grant_type': 'authorization_code',
          'code': this.oauth_details.authorization_code,
          'client_id' : this.config.client_id,
          'client_secret' : this.config.client_secret,
          'redirect_uri' : this.config.redirect_uri
        }
      }).then((response) => {
        this.oauth_details.access_token = response.data.result.data.access_token;
        this.oauth_details.refresh_token = response.data.result.data.refresh_token;
        this.oauth_details.expires_in = response.data.result.data.expires_in;
      }, (error) => {
        console.log(error);
      });
    } 
  
    async get_access_token_from_refresh_token() {
      await axios({
        method: 'post',
        url: this.config.access_token_endpoint,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'grant_type' : 'refresh_token',
          'refresh_token' : this.oauth_details.refresh_token,
          'client_id' : this.config.client_id,
          'client_secret' : this.config.client_secret,
          'redirect_uri' : this.config.redirect_uri
        }
      }).then((response) => {
        this.oauth_details.access_token = response.data.result.data.access_token;
        this.oauth_details.refresh_token = response.data.result.data.refresh_token;
        this.oauth_details.expires_in = response.data.result.data.expires_in;
      }, (error) => {
        console.log(error);
      });
    } 

    async getUserHande() {
      await axios({
        method: 'get',
        url: this.config.access_token_endpoint,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'grant_type' : 'refresh_token',
          'refresh_token' : this.oauth_details.refresh_token,
          'client_id' : this.config.client_id,
          'client_secret' : this.config.client_secret,
          'redirect_uri' : this.config.redirect_uri
        }
      }).then((response) => {
        this.oauth_details.access_token = response.data.result.data.access_token;
        this.oauth_details.refresh_token = response.data.result.data.refresh_token;
        this.oauth_details.expires_in = response.data.result.data.expires_in;
      }, (error) => {
        console.log(error);
      });
    }

    async handleAuthentication() {
      const params = (new URL(window.location.href)).searchParams;
      this.oauth_details.authorization_code = params.get('code');
      await this.get_access_token_first_time();
      this.userHandle = this.oauth_details.authorization_code;
    }

    getCode(){
      return this.userHandle;
    }
}
  
const auth = new Auth();
export default auth;
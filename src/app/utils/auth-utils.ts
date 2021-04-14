export class AuthUtils {

  private static AUTH_TOKEN = 'auth_token';

  static setAuth(token: string){
    return localStorage.setItem(AuthUtils.AUTH_TOKEN, token);
  }

  static getAuth(){
    return localStorage.getItem(AuthUtils.AUTH_TOKEN);
  }

  static delAuth(){
    return localStorage.removeItem(AuthUtils.AUTH_TOKEN);
  }
}

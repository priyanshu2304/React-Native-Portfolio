import {ID, Account, Client} from 'appwrite';
import Config from 'react-native-config';

import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  account;
  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);
    this.account = new Account(appwriteClient);
  }

  //Create a Account

  async createAccount({email, password, name}: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        //TODO Create Login Feature
        return this.login({
          email,
          password,
        });
      } else {
        return userAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Appwrite Service' + error);
    }
  }
  async login({email, password}: LoginUserAccount) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('Login' + error);
    }
  }

  async logout() {
    try {
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('heh');
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.deleteSession('current');
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });
      console.log('getCurrent User' + error);
    }
  }
}

export default AppwriteService
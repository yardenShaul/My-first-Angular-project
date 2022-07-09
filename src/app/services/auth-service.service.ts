import { Injectable } from '@angular/core';
import { UserCredentials } from '../models/user-credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  isLoggedIn = false

  private _authorizedUserForDev: UserCredentials = {
    userName: 'yarden',
    password: '00000',
    fullName: 'Yarden Hyde',
    coins: 100,
    moves: []
  }
  private _guest: UserCredentials = {
    userName: 'guest',
    password: '',
    fullName: 'Guest',
    coins: 0,
    moves: []
  }

  checkLoggedIn(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isLoggedIn)
      },500)
    })
  }

  getUser() : UserCredentials {
    if (this.isLoggedIn) return this._authorizedUserForDev
    else return this._guest
  }

  updateUser(amount: number) {
    this._authorizedUserForDev.coins = this._authorizedUserForDev.coins - amount
  }

  onLogIn(credentials : UserCredentials) {
    if (credentials.userName === this._authorizedUserForDev.userName && credentials.password === this._authorizedUserForDev.password) {
      console.log('good')
      this.isLoggedIn = true
      return true
    } else return false
  }
}

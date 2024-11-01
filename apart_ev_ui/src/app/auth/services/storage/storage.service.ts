import { Injectable } from '@angular/core';

const TOKEN = "token";
const USER = "user";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    static saveToken(token: string): void {
        window.localStorage.removeItem(TOKEN);
        window.localStorage.setItem(TOKEN, token);
    }

    static saveUser(user: any): void {
        window.localStorage.removeItem(USER);
        window.localStorage.setItem(USER, JSON.stringify(user));
    }

    static getToken() {
        return window.localStorage.getItem(TOKEN);
    }
    
    static getUser() {//TODO: ???? orijinalinde böyle değil
        const user = localStorage.getItem(USER);
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
    
    static getUserRole(): string {
        const user = this.getUser();
        if (user == null) return "";
        return user.role;
    }
    
    static isAdminLoggedIn(): boolean {
        if (this.getToken() == null) return false;
        const role: string = this.getUserRole();
        return role == "ADMIN";
    }
    
    static isCustomerLoggedIn(): boolean {
        if (this.getToken() == null) return false;
        const role: string = this.getUserRole();
        return role == "CUSTOMER";
    }
    
}


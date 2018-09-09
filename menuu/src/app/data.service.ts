import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
/*import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { getDefaultService } from 'selenium-webdriver/chrome';
*/
@Injectable({
  providedIn: 'root'
})
export class DataService {
 /* getUsers(): any {
    throw new Error("Method not implemented.");
  }*/

  constructor(private http: HttpClient) { 
    getUsers(){
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    }
  
    getUser(userId) {
      return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
    }
  
    getPosts() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
    
  }
}

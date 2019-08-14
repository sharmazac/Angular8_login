import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient ) { 
    
  }

//   getBaseUrl() {  
//     return 'http://localhost:80/test/';  
//  }  


  getUserDetails(username, password){
    
    return this.http.post('http://localhost/test/api/auth.php', {
        username,
        password
    }).subscribe(
      data => {
        console.log(data, "is what we got from the server")
      }
    )

  }


}

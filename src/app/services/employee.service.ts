import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

interface myData{
  obj:Array<object>
}


@Injectable()
export class EmployeeService {

  constructor( private httpClient:HttpClient) {  }
 
getData(){
return this.httpClient.get<myData>('/api/file.php')
}

}

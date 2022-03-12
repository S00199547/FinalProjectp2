import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError,map,tap } from 'rxjs';
import{Device} from './device';
import{HttpClient, HttpErrorResponse ,HttpHeaders}from'@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
 private dataUri=environment.apiUrl+'/devices';
  
 
 
 constructor(private http: HttpClient) { }

addDevice(device: Device): Observable<Device>{
  return this.http.post<Device>(this.dataUri,device)
  .pipe(
    catchError(this.handleError)
  )
}

updateDevice(id: string, device:Device): Observable<Device>{
  console.log('subscribing to update'+ id);
  let deviceURI: string=this.dataUri+'/'+id;
  return this.http.put<Device>(deviceURI,device)
  .pipe(
    catchError(this.handleError)
  )

}
getDevices():Observable<Device[]>{
  console.log('get devices called');
  return (this.http.get<Device[]>(`${this.dataUri}`)
  .pipe(
    catchError(this.handleError)
  )
  );

}

deleteDevice(id: string): Observable<unknown>{
  const url=`${this.dataUri}/${id}`;
  return this.http.delete(url)
  .pipe(
    catchError(this.handleError)
  )
}

private handleError(error: HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
console.error('An error occurred:',error.error.message)
  }
    else {

    console.error
    (
      `Backend returned code ${error.status},`+`body was: 
      ${JSON.stringify(error.error)}`);

    if(error.status == 412){
      return throwError('412 Error'+ JSON.stringify(error.error))
    }

  }
  return throwError(
    'Something wrong happened; please try again later.'
  )
  
}


/*private dummyDevicesData : Device[]=[{"tags":[],"_id":"61796a48d32326ac8b03b252", "name":"Phone","price":1800, "companyname":"Apple"},{"tags":[],"_id":"61796a71d32326ac8b03b258", "name":"Laptop","price":2000, "companyname":"Hp"}

]*/




}


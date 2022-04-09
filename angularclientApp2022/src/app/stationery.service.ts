import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError,map,tap } from 'rxjs';
import{Stationery} from './stationery';
import{HttpClient, HttpErrorResponse ,HttpHeaders}from'@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StationeryService {
 private dataUri=environment.apiUrl+'/stationeries';
  
 
 
 constructor(private http: HttpClient) { }

addStationery(stationery: Stationery): Observable<Stationery>{
  console.log("StationeryService");
  return this.http.post<Stationery>(this.dataUri,stationery)
  .pipe(
    catchError(this.handleError)
  )
}

updateStationery(id: string, stationery:Stationery): Observable<Stationery>{
  console.log('subscribing to update'+ id);
  let stationeryURI: string=this.dataUri+'/'+id;
  return this.http.put<Stationery>(stationeryURI,stationery)
  .pipe(
    catchError(this.handleError)
  )

}
getStationery():Observable<Stationery[]>{
  console.log('get devices called');
  return (this.http.get<Stationery[]>(`${this.dataUri}`)
  .pipe(
    catchError(this.handleError)
  )
  );

}

deleteStationery(id: string): Observable<unknown>{
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



/*private dummyDevicesData : Stationery[]=[{"tags":[],"_id":"61796a48d32326ac8b03b252", "name":"Phone","price":1800, "brandname":"Muji", "quantity":1}

]*/



}


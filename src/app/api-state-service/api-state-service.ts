import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { State } from '../../../../graphql-server/src/statesAPI'

interface StateData {
    data: { states: State[] }
}
@Injectable()
export class ApiStateService {
    constructor(private http:HttpClient){}
    getStates(): Observable<StateData> {
        const body = JSON.stringify({
            query: `{states { name,abbreviation } }`
        });
        const options = {
            headers: {
                "Content-Type": "application/json"
            },
        }
        const url = `http://localhost:4000/graphql`;
        return this.http.post<StateData>(url,body,options);
    }
}
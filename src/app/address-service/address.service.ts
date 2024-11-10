import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Address } from '../../../../graphql-server/src/watherAPI'

// export interface Address {
//     street?: string|null;
//     city?: string|null;
//     state?: string|null;
// }

@Injectable()
export class AddressService {
    addressSource = new Subject<Address>()
}

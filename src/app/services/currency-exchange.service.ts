import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable()
export class CurrencyExchangeService {
    constructor(private http: HttpClient) {
    }


    getCurrencyExchange(coutry: string) {
        let url = 'https://open.er-api.com/v6/latest/' + coutry
        return this.http.get(url);
    }


}

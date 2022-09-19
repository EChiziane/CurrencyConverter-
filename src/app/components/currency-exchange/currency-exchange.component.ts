import {Component, ElementRef, OnInit} from '@angular/core';
import {CurrencyExchangeService} from 'src/app/services/currency-exchange.service';


@Component({
    selector: 'app-currency-exchange',
    templateUrl: './currency-exchange.component.html',
    styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {
    // @ViewChild('prices')

    prices!: ElementRef;
    currencyExchange!: any[]
    result = 0;
    price = 0;
    public currencies: any;
    keys: string[] = [];

    origin!: string;
    destination!: string


    constructor(private currency: CurrencyExchangeService) {
    }

    ngOnInit() {
        this.currency.getCurrencyExchange("USD").subscribe(data => {
            this.currencies = data;
            this.currencyExchange = this.currencies.rates;
            const values = Object.entries(this.currencyExchange)
            let keys: string[] = [];
            values.map((x) => {
                keys.push(x[0])
            })
            this.keys = keys;
        });
    }


    convert() {
        this.currency.getCurrencyExchange(this.origin).subscribe(
            data => {
                const resData: any = data;
                const resValue = resData.rates[this.destination]
                this.result = resValue * this.price
            }
        )
    }
}

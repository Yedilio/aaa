import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';
  tariffs: any[] = [
    {
      name: 'Эконом',
      price_for_km: 4,
      free_baggage: 5,
      add_baggage: 4000,
      max_weight: 20
    },
    {
      name: 'Продвинутый',
      price_for_km: 8,
      free_baggage: 20,
      add_baggage: 5000,
      max_weight: 50,
      promo_child: 30,
      child_age: 7
    },
    {
      name: 'Люкс',
      price_for_km: 15,
      free_baggage: 0,
      max_weight: 50,
      promo_child: 30,
      child_age: 16
    }
  ];
  tariffsRJD: any[] = [
    {
      name: 'Эконом',
      price_for_km: 0.5,
      free_baggage: 15,
      add_baggage: 50,
      max_weight: 50,
      promo_child: 50,
      child_age: 5
    },
    {
      name: 'Продвинутый',
      price_for_km: 2,
      free_baggage: 20,
      add_baggage: 50,
      max_weight: 60,
      promo_child: 30,
      child_age: 8
    },
    {
      name: 'Люкс',
      price_for_km: 4,
      free_baggage: 0,
      max_weight: 60,
      promo_child: 20,
      child_age: 16
    }
  ];

  km: number = 0;
  age: number = 0;
  weight: number = 0;

  calculate() {
    this.tariffs.forEach((el) => {
      if (this.weight > el.max_weight) {
        el["disabled"] = true;
      } else {
        let km_price = this.km * el.price_for_km;
        el["disabled"] = false;
        if (el.child_age && this.age < el.child_age) {
          let sale = km_price * el.promo_child / 100;
          km_price = km_price - sale;
        }
        if (el.free_baggage > 0 && el.add_baggage) {
          let baggage_price = this.weight > el.free_baggage
              ? km_price + el.add_baggage : km_price;
          el.price = baggage_price;
        } else {
          el.price = km_price;
        }
      }
    });

    this.tariffsRJD.forEach((el) => {
      if (this.weight > el.max_weight) {
        el["disabled"] = true;
      } else {
        let km_price = this.km * el.price_for_km;
        el["disabled"] = false;
        if (el.child_age && this.age < el.child_age) {
          let sale = km_price * el.promo_child / 100;
          km_price = km_price - sale;
        }
        if (el.free_baggage > 0 && el.add_baggage) {

          let baggage_price = this.weight > el.free_baggage
              ? km_price + ((this.weight - el.free_baggage) * el.add_baggage) : km_price;
          el.price = baggage_price;
        } else {
          el.price = km_price;
        }
      }
    });
  }
}

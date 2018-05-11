import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../../model/product.model";
import { Events } from "ionic-angular";

@Injectable()
export class UtilityProvider {
  constructor(public http: HttpClient, private events: Events) {}

  countItems(productList: Product[]): Product[] {
    const result = this.groupBy(productList);
    const count = result.reduce((a, x) => (a += x.quantity), 0);
    this.events.publish("cart:updated", count);
    return result;
  }

  groupBy(productList: Product[]): Product[] {
    const group = productList.reduce((result: Product[], current: Product) => {
      const element = result.find(p => p.id === current.id);
      if (element) {
        // 商品の数量をインクリメントする
        element.quantity += 1;
      } else {
        result.push(current);
      }
      return result;
    }, []);
    return group;
  }
}

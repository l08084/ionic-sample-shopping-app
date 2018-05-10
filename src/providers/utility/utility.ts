import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../../model/product.model";

@Injectable()
export class UtilityProvider {
  constructor(public http: HttpClient) {}

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

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "../../model/product.model";

@Injectable()
export class ProductProvider {
  constructor(public http: HttpClient) {}

  /**
   * JSONにアクセスして、結果をProduct[]に変換
   *
   * @returns {Observable<Product[]>}
   * @memberof ProductProvider
   */
  retrieve(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/data/products.json");
  }

  /**
   * 同一の商品(idが同じ)を一つのオブジェクトにまとめる
   *
   * @param {Product[]} productList カート内の商品リスト
   * @returns {Product[]} （同一の商品ついては、一つにまとめた状態の）カート内の商品リスト
   * @memberof ProductProvider
   */
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

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "../../model/product.model";
import { Events } from "ionic-angular";
import { Storage } from "@ionic/storage";

@Injectable()
export class ProductProvider {
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private events: Events
  ) {}

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

  addItem(product: Product) {
    let itemList = [];
    this.storage
      .length()
      .then(result => {
        // カート内の商品が0個だった場合
        if (result === 0) {
          itemList = [];
          itemList.push(product);
          // ストレージにボタンを押下した商品を追加する
          this.storage.set("items", itemList);
          // トピック`cart:updated`で出版
          // eventDataとして、カート内の商品の数を渡している
          this.events.publish("cart:updated", 1);
        } else {
          // カート内にすでに商品があった場合
          this.storage
            .get("items")
            .then(items => {
              items.push(product);
              const count = items.length;
              // ストレージにボタンを押下した商品を追加する
              this.storage.set("items", items);
              // トピック`cart:updated`で出版
              // eventDataとして、カート内の商品の数を渡している
              this.events.publish("cart:updated", count);
            })
            .catch(err => console.log(`storage error: ${err}`));
        }
      })
      .catch(err => console.log(`storage error: ${err}`));
  }
}

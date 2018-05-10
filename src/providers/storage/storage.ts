import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../../model/product.model";
import { Events } from "ionic-angular";
import { Storage } from "@ionic/storage";

@Injectable()
export class StorageProvider {
  constructor(
    public http: HttpClient,
    private storage: Storage,
    private events: Events
  ) {}

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

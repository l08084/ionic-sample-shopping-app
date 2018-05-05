import { Component } from "@angular/core";

import { HomePage } from "../home/home";
import { CartPage } from "../cart/cart";
import { Events } from "ionic-angular";
import { Storage } from "@ionic/storage";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  public tab1Root = HomePage;
  public tab2Root = CartPage;
  // カート内の商品の数
  public itemCount = 0;

  constructor(private events: Events, private storage: Storage) {}

  /**
   * Ionicのライフサイクルメソッド
   * タブ画面の作成時に呼び出される
   *
   * @memberof TabsPage
   */
  ionViewDidLoad() {
    // トピック`cart:updated`を購読している
    // 最新のカート内の商品数を取得して、バッジの数値を更新する
    this.events.subscribe(
      "cart:updated",
      count => (this.itemCount = count ? count : 0)
    );

    // アプリの初期表示時のタイミング
    // 前回起動時にカート内に商品を入れた場合を考慮して、
    // ストレージの読み込みを実施している
    this.storage
      .length()
      .then(result => {
        if (result !== 0) {
          this.storage
            .get("items")
            .then(items => {
              // 現在のカート内の商品の数を取得
              const count = items.length;
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

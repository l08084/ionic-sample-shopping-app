import { Component } from "@angular/core";
import { AlertController, NavController, Events } from "ionic-angular";
import { Product } from "../../model/product.model";
import { Storage } from "@ionic/storage";
import { ProductProvider } from "../../providers/product/product";

@Component({
  selector: "page-cart",
  templateUrl: "cart.html"
})
export class CartPage {
  // カート内の商品の一覧
  productList: Product[];
  // 小計
  subtotal: number;
  // 合計
  total: number;
  // カート内が空の時にtrue
  isEmpty: boolean;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private storage: Storage,
    private productProvider: ProductProvider
  ) {}

  /**
   * Ionicのライフサイクルメソッドの一種
   * ページがアクティブになると呼び出される
   * ストレージ（カート）内に商品が格納されていれば、取得する
   *
   * @memberof CartPage
   */
  ionViewDidEnter() {
    this.productList = [];
    this.subtotal = 0;
    this.total = 0;
    this.isEmpty = false;
    this.storage
      .length()
      .then(result => {
        // カート内に商品がある場合
        if (result > 0) {
          this.storage
            .get("items")
            .then(result => {
              this.productList = result;
              this.productList.forEach(
                // 小計を計算
                product => (this.subtotal += product.price)
              );
              // 小計にデリバリー料を加算して、合計を計算している
              this.total = this.subtotal + 300;
            })
            .catch(err => {});
        } else {
          // カート内が空の場合
          this.isEmpty = true;
        }
      })
      .catch(err => {});
  }

  /**
   * 「注文する」ボタン押下時に呼び出し
   *  Confirm Alertを表示し、OKを選択すると、
   *  注文を確定して、ストレージをクリアする
   *
   * @memberof CartPage
   */
  order() {
    const confirm = this.alertCtrl.create({
      title: "注文を確定しますか？",
      buttons: [
        {
          text: "キャンセル",
          handler: () => {}
        },
        {
          text: "OK",
          handler: () => {
            let alert = this.alertCtrl.create({
              title: "ご注文を受け付けました！",
              subTitle: "ご指定の住所までのお届け時間は、20-30分程です",
              buttons: ["OK"]
            });
            alert.present();
            this.storage.clear();
            this.productList = [];
            this.isEmpty = true;
          }
        }
      ]
    });
    confirm.present();
  }
}

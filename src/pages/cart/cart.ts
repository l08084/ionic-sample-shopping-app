import { Component } from "@angular/core";
import { AlertController, NavController, Events } from "ionic-angular";
import { Product } from "../../model/product.model";
import { Storage } from "@ionic/storage";
import { UtilityProvider } from "../../providers/utility/utility";

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
    private events: Events,
    private utilityProvider: UtilityProvider
  ) {}

  /**
   * Ionicのライフサイクルメソッドの一種
   * ページがアクティブになると呼び出される
   *
   * @memberof CartPage
   */
  ionViewDidEnter() {
    // 画面の初期化処理
    this.init();
  }

  /**
   * カート画面の初期化処理を行う
   * ストレージの読み込みを行い、商品が入っていればリスト形式で表示する
   *
   * @memberof CartPage
   */
  init() {
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
              // 同一の商品(idが同じ)を一つのオブジェクトにまとめる
              this.productList = this.utilityProvider.groupBy(result);
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
    // Confirm Alertを表示する
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
            // ショッピングカートの中を空にする
            this.allRemove();
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * ショッピングカートの中を空にする
   *
   * @memberof CartPage
   */
  allRemove() {
    this.storage.clear().then(() => {
      this.events.publish("cart:updated", 0);
      this.init();
    });
  }
}

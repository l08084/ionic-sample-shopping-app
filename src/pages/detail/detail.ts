import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { Product } from "../../model/product.model";

@Component({
  selector: "page-detail",
  templateUrl: "detail.html"
})
export class DetailPage {
  product: Product;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private storage: Storage
  ) {}

  ngOnInit() {
    // 商品リスト画面でタップした商品情報を受け取る
    this.product = this.navParams.get("product");
  }

  /**
   * ショッピングカートに商品を追加する
   *
   * @param {Product} product
   * @memberof DetailPage
   */
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
        } else {
          // カート内にすでに商品があった場合
          this.storage
            .get("items")
            .then(items => {
              items.push(product);
              const count = items.length;
              // ストレージにボタンを押下した商品を追加する
              this.storage.set("items", items);
            })
            .catch(err => console.log(`storage error: ${err}`));
        }
      })
      .catch(err => console.log(`storage error: ${err}`));
    // 商品リスト画面に戻る
    this.navCtrl.pop();
  }
}

import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Product } from "../../model/product.model";
import { StorageProvider } from "../../providers/storage/storage";

@Component({
  selector: "page-detail",
  templateUrl: "detail.html"
})
export class DetailPage {
  product: Product;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private storageProvider: StorageProvider
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
    this.storageProvider.addItem(product);
    // 商品リスト画面に戻る
    this.navCtrl.pop();
  }
}

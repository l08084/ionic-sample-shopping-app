import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Product, PRODUCT_TYPE } from "../../model/product.model";
import { ProductProvider } from "../../providers/product/product";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  productList: Product[];
  topsList: Product[];
  jacketList: Product[];

  constructor(
    private navCtrl: NavController,
    private productProvider: ProductProvider
  ) {}

  ionViewDidLoad() {
    // 全商品リストを取得
    this.productProvider.retrieve().subscribe(products => {
      this.productList = products;
      // トップス のみのリストを取得
      this.topsList = products.filter(
        product => product.type === PRODUCT_TYPE.tops
      );
      // ジャケット/アウター のみのリストを取得
      this.jacketList = products.filter(
        product => product.type === PRODUCT_TYPE.jacket
      );
    });
  }
}

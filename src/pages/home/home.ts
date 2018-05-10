import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Product, PRODUCT_TYPE } from "../../model/product.model";
import { ProductProvider } from "../../providers/product/product";
import { DetailPage } from "../detail/detail";
import { ApiProvider } from "../../providers/api/api";

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
    private productProvider: ProductProvider,
    private apiProvider: ApiProvider
  ) {}

  ionViewDidLoad() {
    // 全商品リストを取得
    this.apiProvider.retrieve().subscribe(products => {
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

  goToDetail(product: Product) {
    this.navCtrl.push(DetailPage, { product: product });
  }
}

import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Product, PRODUCT_TYPE } from "../../model/product.model";

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
    this.productProvider.retrieve().subscribe(products => {
      this.productList = products;
      this.topsList = this.productList.filter(
        product => product.type === PRODUCT_TYPE.tops
      );
      this.jacketList = this.productList.filter(
        product => product.type === PRODUCT_TYPE.jacket
      );
    });
  }
}

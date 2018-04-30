import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Product } from "../../model/product.model";

@Component({
  selector: "page-detail",
  templateUrl: "detail.html"
})
export class DetailPage {
  product: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.product = this.navParams.get("product");
  }
}

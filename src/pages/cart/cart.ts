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
  productList: Product[];
  subtotal: number;
  isEmpty: boolean;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private storage: Storage,
    public events: Events,
    private productProvider: ProductProvider
  ) {}
}

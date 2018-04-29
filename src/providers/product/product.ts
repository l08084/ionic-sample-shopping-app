import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "../../model/product.model";

@Injectable()
export class ProductProvider {
  constructor(public http: HttpClient) {}

  retrieve(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/data/products.json");
  }
}

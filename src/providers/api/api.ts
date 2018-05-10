import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "../../model/product.model";

@Injectable()
export class ApiProvider {
  constructor(public http: HttpClient) {}

  /**
   * JSONにアクセスして、結果をProduct[]に変換
   *
   * @returns {Observable<Product[]>}
   * @memberof ApiProvider
   */
  retrieve(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/data/products.json");
  }
}

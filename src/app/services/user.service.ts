import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  appTypes: string[] = [];
  private apiService = inject(ApiService);

  LoadUserAppTypes() {
    this.apiService.GetUserAppTypes().subscribe(
      (types) => {
        this.appTypes = types;
      }
    );
  }


}

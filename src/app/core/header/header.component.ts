import { Component } from '@angular/core';

import { DataStorageService } from '../../components/shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(private dataStorage: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    if (this.authService.isAuthenticated) {
      this.dataStorage.saveData();
    }
  }

  onFetchData() {
    if (this.authService.isAuthenticated) {
      this.dataStorage.fetchData();
    }
  }

  onLogout() {
    this.authService.logout();
  }
 }

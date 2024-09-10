import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonThumbnail, IonPopover, IonAvatar, IonAccordionGroup, IonAccordion } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, logOutOutline, calendarOutline, todayOutline, qrCodeOutline, walletOutline, cashOutline, cardOutline, homeOutline, fileTrayStackedOutline, radioOutline, bookOutline, searchOutline, arrowDown, arrowUp, playBack, playForward, chevronBack, chevronForward, search, download, downloadOutline, checkmarkOutline } from 'ionicons/icons';
import { AuthService } from './services/auth.service';
import { SignlarService } from './services/signlar.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonAccordion, IonAccordionGroup, RouterLink, RouterLinkActive, CommonModule, IonApp, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonNote, IonRouterOutlet, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonThumbnail, IonPopover, IonAvatar],
})
export class AppComponent {

  isAuthenticated: boolean = false;
  username = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private signalrService: SignlarService,
    private userService: UserService
  ) {
    authService.isAuthenticated.subscribe(x => {
      this.isAuthenticated = x;
      this.username = authService.username;
      if (this.isAuthenticated) {
        signalrService.Connect();
        userService.LoadUserAppTypes();
      } else {
        signalrService.Disconnect();
        this.router.navigate(['login'], { replaceUrl: true });
      }
    })

    addIcons({
      personOutline, logOutOutline, calendarOutline,
      todayOutline, qrCodeOutline, walletOutline, cashOutline,
      cardOutline, homeOutline, fileTrayStackedOutline, radioOutline, search, downloadOutline,
      bookOutline, searchOutline, arrowDown, arrowUp, playBack, playForward, chevronBack, chevronForward, checkmarkOutline
    });
  }


  HasAppType(appType: string) {
    return this.userService.appTypes.includes(appType);
  }

  Logout() {
    this.authService.logout();
  }
}

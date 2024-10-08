import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIcon,
    MatMenuModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userId = '';
  user: User = new User();

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private firestore: Firestore) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id') ?? '';
      console.log('got id:', this.userId);
      this.getUser();
    });
  }

  getUser() {
    const userDocRef = doc(this.firestore, `users/${this.userId}`);
    getDoc(userDocRef).then(snapshot => {
      if (snapshot.exists()) {
        this.user = new User(snapshot.data() as any);
        console.log('User data:', this.user);
      } else {
        console.log('No such user found!');
      }
    }).catch(error => {
      console.error('Error fetching user data:', error);
    });
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId; // Setze die userId
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId; 
  }
}

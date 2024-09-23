import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    DialogAddUserComponent,
    MatCardModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User();
  users$: Observable<User[]>; // Typ auf User[] ändern
  allUsers: User[] = []; // Typisierung für allUsers

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection, { idField: 'userId' }) as Observable<User[]>; // Typanpassung hier
    // Abonnieren des Observables, um die Werte zu sehen
    this.users$.subscribe(users => {
      console.log('Received from DB:', users);
      this.allUsers = users; // hier users verwenden
    });
  }


  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {});
  }
}

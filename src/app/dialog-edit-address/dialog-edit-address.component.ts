import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user.class';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user!: User;
  loading = false;
  userId: string = ''; // Initialisiere userId

  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    private firestore: Firestore) {}

    saveUser() {
      this.loading = true; // Ladezustand aktivieren
      console.log('User data before saving:', this.user); // Überprüfe die aktuellen Benutzerdaten
  
      const userDocRef = doc(this.firestore, `users/${this.userId}`);
      updateDoc(userDocRef, this.user.toJSON())
          .then(() => {
              console.log('User data updated successfully'); // Erfolgsnachricht
              this.loading = false; // Ladezustand deaktivieren
              this.dialogRef.close(); // Dialog schließen
          })
          .catch((error: any) => {
              console.error('Error updating user:', error); // Fehlerausgabe
              this.loading = false; // Ladezustand deaktivieren
          });
  }}
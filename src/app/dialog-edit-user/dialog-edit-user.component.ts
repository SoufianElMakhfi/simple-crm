import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user!: User;
  loading = false;
  userId!: string;

  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private firestore: Firestore){

  }
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
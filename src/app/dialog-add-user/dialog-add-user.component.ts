import { Component, OnInit } from '@angular/core';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter, MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  user: User = new User(); // Verwendung der User-Klasse
  birthDate!: Date; // Das Geburtsdatum sollte vom Typ Date sein

  constructor(private firestore: Firestore) { }

  ngOnInit(): void {
    // Initialisierungen können hier vorgenommen werden
  }

  async saveUser() {
    if (this.birthDate) {
      // Konvertiere das User-Objekt in ein einfaches JavaScript-Objekt
      const userData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        street: this.user.street,
        zipCode: this.user.zipCode,
        city: this.user.city,
        birthDate: this.birthDate.getTime(), // Geburtsdatum als Timestamp
      };
  
      console.log('Current user data is', userData);
  
      try {
        const usersCollection = collection(this.firestore, 'users');
        const docRef = await addDoc(usersCollection, userData);
        console.log('User added successfully with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding user: ', error);
      }
    } else {
      console.error('Birth date is not set!');
    }
  }
}

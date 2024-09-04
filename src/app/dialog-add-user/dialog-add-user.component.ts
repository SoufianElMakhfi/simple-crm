import { Component, OnInit } from '@angular/core';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter, MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // oder von '@angular/fire/firestore', je nach Version

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogActions, MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, FormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']

})
export class DialogAddUserComponent implements  OnInit {

  user: User = new User();
  birthDate!: Date;

  constructor(private firestore: AngularFirestore) { }


  ngOnInit() : void {
    
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);

    this.firestore
    .collection('users')
    .add(this.user)
    .then((result: any) => {
      console.log('User saved', result)
  });
  }
}
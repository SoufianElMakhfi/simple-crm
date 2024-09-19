import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipComponent } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTooltipModule,
    TooltipComponent,
    MatIconModule,
    MatDialogModule,
    DialogAddUserComponent,
    MatCardModule,
    
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User();


  constructor(public dialog: MatDialog) { }



  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
    });
  }
}

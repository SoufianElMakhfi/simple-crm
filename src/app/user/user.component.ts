import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipComponent } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule

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
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
      // Optional: Add dialog configuration here
    });
  }
}

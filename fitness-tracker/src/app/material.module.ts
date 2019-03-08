//  Our material Modules can all be managed from here
import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule,


} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule , MatInputModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,  MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule],



  exports: [MatButtonModule, MatIconModule, MatFormFieldModule , MatInputModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSnackBarModule]



})
export class MaterialModule {

}

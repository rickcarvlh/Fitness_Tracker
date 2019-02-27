//  Our material Modules can all be managed from here
import {NgModule} from "@angular/core";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatTabsModule, MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule ,MatInputModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,  MatListModule, MatTabsModule, MatCardModule,MatSelectModule, MatProgressSpinnerModule],



  exports: [MatButtonModule, MatIconModule, MatFormFieldModule ,MatInputModule, MatNativeDateModule,MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule,MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule]



})
export class MaterialModule {

}

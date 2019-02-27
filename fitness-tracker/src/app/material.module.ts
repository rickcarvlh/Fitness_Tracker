//  Our material Modules can all be managed from here
import {NgModule} from "@angular/core";
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule, MatSidenavModule, MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule ,MatInputModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,  MatListModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule ,MatInputModule, MatNativeDateModule,MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule]
})
export class MaterialModule {

}

//  Our material Modules can all be managed from here
import {NgModule} from "@angular/core";
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatSidenavModule, MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule ,MatInputModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule ,MatInputModule, MatNativeDateModule,MatCheckboxModule, MatSidenavModule, MatToolbarModule]
})
export class MaterialModule {

}

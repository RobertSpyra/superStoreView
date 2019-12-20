import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RobSearchComponent } from './components/rob-search/rob-search.component';
import { RobListComponent } from './components/rob-list/rob-list.component'
import { MatListModule } from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RobElementComponent } from './components/rob-element-product/rob-element.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RobModalUpdateComponent } from './components/rob-modal-update/rob-modal-update.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RobElemDetailsComponent } from './components/rob-elem-details/rob-elem-details.component';
import { RouterModule,Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RobElemProductsComponent } from './components/rob-products/rob-elem-products.component';
import {MatTableModule} from '@angular/material/table';
import { RobElementHistoryComponent } from './components/rob-element-history/rob-element-history.component';
import { RobTableComponent } from './components/rob-table/rob-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RobTargetListComponent } from './components/target/rob-target-list/rob-target-list.component';
import { RobTargetsComponent } from './components/target/rob-targets/rob-targets.component';
import { RobTargetElementComponent } from './components/target/rob-target-element/rob-target-element.component';
import {MatSelectModule} from '@angular/material/select';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pl';
import { RobTargetDetailsComponent } from './components/target/rob-target-details/rob-target-details.component';
import { RobTargetDetailsTableComponent } from './components/target/rob-target-details-table/rob-target-details-table.component';
import { RobTargetCreateComponent } from './components/create/rob-target-create/rob-target-create.component';
import { RobProductCreateComponent } from './components/create/rob-product-create/rob-product-create.component';
import { RobStartComponent } from './components/rob-start/rob-start.component';


registerLocaleData(localeFr);
const appRoutes: Routes = [
  {
    path: 'productDetail',
    component: RobElemDetailsComponent
  },
  {
    path: 'products',
    component: RobElemProductsComponent
  },
  {
    path: 'targets',
    component: RobTargetsComponent
  },
  {
    path: 'targets/targetId',
    component: RobTargetDetailsComponent
  },
  {
     path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RobSearchComponent,
    RobListComponent,
    RobElementComponent,
    RobModalUpdateComponent,
    RobElemDetailsComponent,
    RobElemProductsComponent,
    RobElementHistoryComponent,
    RobTableComponent,
    RobTargetListComponent,
    RobTargetsComponent,
    RobTargetElementComponent,
    RobTargetDetailsComponent,
    RobTargetDetailsTableComponent,
    RobTargetCreateComponent,
    RobProductCreateComponent,
    RobStartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RobModalUpdateComponent,RobProductCreateComponent,RobTargetCreateComponent]
})

export class AppModule { 
  
}

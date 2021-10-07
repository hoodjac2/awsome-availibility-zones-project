import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MarkerService } from './marker.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientServiceComponent } from './http-client.service/http-client.service.component';
@NgModule({
  declarations: [
    AppComponent,
    UploadCsvComponent,
    ListViewComponent,
    NotFoundPageComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'upload-csv', component: UploadCsvComponent},
      {path: 'map-view', component: MapViewComponent},
      {path: 'list-view', component: ListViewComponent},
      {path: '', redirectTo: '/list-view', pathMatch: 'full'},
      {path: '**', component: NotFoundPageComponent}
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

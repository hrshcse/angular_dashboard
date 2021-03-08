import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import{MatDividerModule} from '@angular/material/divider'
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatIconModule} from '@angular/material/icon'
import{MatButtonModule} from '@angular/material/button'
import{FlexLayoutModule} from '@angular/flex-layout'
import{MatMenuModule} from '@angular/material/menu'
import{MatListModule} from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { AreachartComponent } from './areachart/areachart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import{ MatCardModule} from '@angular/material/card';
import { CardsComponent } from './cards/cards.component';
import { PieComponent } from './pie/pie.component';
import { TableComponent } from './table/table.component'
import{MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [SidebarComponent,
  HeaderComponent,
FooterComponent,
AreachartComponent,
CardsComponent,
PieComponent,
TableComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreachartComponent,
    CardsComponent,
    PieComponent,
    TableComponent
  ]
})
export class SharedModule { }

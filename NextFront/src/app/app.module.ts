//! Aplication Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IgniteComponent } from './components/ignite/ignite.component';
import { SaboresComponent } from './components/sabores/sabores.component';
import { FinalizarComponent } from './components/finalizar/finalizar.component';

//! Aplication Services
import { CustomerService } from 'src/services/customer.service';
import { OrderService } from 'src/services/order.service';
import { ProductService } from 'src/services/product.service';
import { AuthService } from 'src/services/auth.service';
import { AuthInterceptor } from 'src/services/auth.interceptor';

//! Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//! PrimeNG Modules
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { MessagesModule } from 'primeng/messages';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { PickListModule } from 'primeng/picklist';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CardModule } from 'primeng/card';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    IgniteComponent,
    SaboresComponent,
    FinalizarComponent,
    PagamentoComponent
   ],
  imports: [
    //! Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //! PrimeNG Modules
    StyleClassModule,
    ButtonModule,
    ChartModule,
    DividerModule,
    MenuModule,
    MenubarModule,
    RippleModule,
    AvatarModule,
    AvatarGroupModule,
    ToastModule,
    CheckboxModule,
    PasswordModule,
    FieldsetModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    InputNumberModule,
    InputTextareaModule,
    PanelModule,
    FileUploadModule,
    DropdownModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    TableModule,
    TagModule,
    SliderModule,
    MultiSelectModule,
    InputSwitchModule,
    ToolbarModule,
    MessagesModule,
    SplitButtonModule,
    ImageModule,
    DataViewModule,
    SelectButtonModule,
    CalendarModule,
    DialogModule,
    SidebarModule,
    PickListModule,
    AnimateOnScrollModule,
    CardModule,
    ListboxModule
  ],
  providers: [
    CustomerService,
    OrderService,
    ProductService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimeagoModule } from 'ngx-timeago';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [],
  imports: [
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    TimeagoModule.forRoot(),
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    FileUploadModule,
    NgxGalleryModule,
    NgxSpinnerModule
  ],
  exports: [
    BsDatepickerModule,
    BsDropdownModule,
    ButtonsModule,
    FileUploadModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    PaginationModule,
    TabsModule,
    TimeagoModule,
    ToastrModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}

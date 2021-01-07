import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [],
  imports: [
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    FileUploadModule,
    NgxGalleryModule,
    NgxSpinnerModule
  ],
  exports: [
    FileUploadModule,
    BsDropdownModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    TabsModule,
    ToastrModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}

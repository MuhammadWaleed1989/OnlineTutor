import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopsComponent } from './shops.component';
import { ShopsRoutingModule } from './shops-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxMaskModule } from 'ngx-mask';
import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbNavModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';

const config: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 100,
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ShopsComponent],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    UIModule,
    WidgetModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbDropdownModule,
    DropzoneModule,
    Ng5SliderModule,
    NgSelectModule,
    NgbPaginationModule,
    UiSwitchModule,
    ColorPickerModule,
    NgxMaskModule
  ],
  providers: []
})
export class ShopsModule { }

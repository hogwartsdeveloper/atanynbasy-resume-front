import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {LanguageSelectComponent} from './language-select/language-select.component';


@NgModule({
    declarations: [
        ToolbarComponent,
        LanguageSelectComponent
    ],
    exports: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class ToolbarModule { }

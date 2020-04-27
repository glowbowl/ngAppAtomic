import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Atoms } from './atoms';
import { Molecules } from './molecules';
import { Organisms } from './organisms';


@NgModule({
    declarations: [
        Atoms,
        Molecules,
        Organisms,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        Atoms,
        Molecules,
        Organisms
    ],
    providers: [],
})
export class SharedModule { }
import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'organisms-content',//<molecules-select class="col-md-2" [selectLabel]= "selectLabel"> </molecules-select>
    template: `
    <div class="d-flex justify-content-center">
        <molecules-input class="col-md-4"
            [inputLabel]="inputLabel"
            [inputPlaceholder]="inputPlaceholder">
            </molecules-input>
        
    </div>
    <atoms-button class="m-5 col-md-10" (click)="onClick()" [buttonValue]="buttonValue" [buttonType]="buttonType" > </atoms-button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganismsContentComponent {

    @Input()
    inputLabel = '';

    @Input()
    inputPlaceholder = '';

    // @Input()
    // selectLabel = '';

    @Input()
    buttonValue = '';

    @Input()
    buttonType = '';

    @Output() clickOnBtn = new EventEmitter();

    onClick() {
        this.clickOnBtn.emit();
    }

}
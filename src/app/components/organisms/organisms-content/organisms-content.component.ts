import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'organisms-content',//<molecules-select class="col-md-2" [selectLabel]= "selectLabel"> </molecules-select>
    template: `
    <div class="d-flex justify-content-center">
        <molecules-input class="col-md-4"
            [inputLabel]="inputLabel"
            [inputPlaceholder]="inputPlaceholder">
            </molecules-input>
        
    </div>
    <atoms-button class="m-5 col-md-10" [buttonValue]="buttonValue" [buttonType]="buttonType" [func]="func"> </atoms-button>
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

    @Input()
    func = '';
}
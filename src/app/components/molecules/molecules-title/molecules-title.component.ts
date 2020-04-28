import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'molecules-title',
    template: `
    <div class="d-flex justify-content-between p-5">
        <atoms-title-text [titleText]="titleText"> </atoms-title-text>
        <atoms-button [buttonValue]="buttonValue" [buttonType]="buttonType"></atoms-button>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoleculesTitleComponent {
    @Input()
    buttonValue = 'Click me';

    @Input()
    titleText = 'Title';

    @Input()
    buttonType = '';
}
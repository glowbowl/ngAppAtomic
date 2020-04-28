import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'molecules-header',
    template: `
    <div class="d-flex justify-content-between p-5">
        <atoms-logo [logoText]="logoText"> </atoms-logo>
        <atoms-button [buttonValue]="buttonValue" [buttonType]="buttonType"></atoms-button>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoleculesHeaderComponent {
    @Input()
    buttonValue = 'Click me';

    @Input()
    logoText = 'Header';

    @Input()
    buttonType = '';
}
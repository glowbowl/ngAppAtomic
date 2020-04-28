import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'molecules-footer',
    template: `
    <div class="d-flex justify-content-between p-5">
        <atoms-footer [footerText]="footerText"> </atoms-footer>
        <atoms-button [buttonValue]="buttonValue" [buttonType]="buttonType"></atoms-button>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoleculesFooterComponent {
    @Input()
    buttonValue = 'Click me';

    @Input()
    footerText = 'Footer';

    @Input()
    buttonType = '';
}
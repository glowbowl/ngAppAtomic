import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'atoms-footer',
    template: `
    <h1>
        {{footerText}}
    </h1>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsFooterComponent {
    @Input()
    footerText = '';
}
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'atoms-input-label',
    template: `
    <span>
        {{inputLabel}}
    </span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsInputLabelComponent {
    @Input()
    inputLabel = '';
}
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'atoms-logo',
    template: `
    <h1>
        {{logoText}}
    </h1>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsLogoComponent {
    @Input()
    logoText = '';
}
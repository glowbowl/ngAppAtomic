import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'atoms-title-text',
    template: `
    <h1>
        {{titleText}}
    </h1>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsTitleTextComponent {
    @Input()
    titleText = '';
}
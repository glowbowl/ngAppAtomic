import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'atoms-input',
    template: `
    <input class="form-control" type="{{inputType}}" placeholder="{{inputPlaceholder}}">
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsInputComponent {
    @Input()
    inputPlaceholder = 'Enter text';

    @Input()
    inputType = 'text';
}
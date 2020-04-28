import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'molecules-input',
    template: `
    <div class="input-group">
        <div class="input-group-prepend">
            <atoms-input-label class="input-group-text" [inputLabel]="inputLabel"></atoms-input-label>
        </div>
        <atoms-input
            [inputPlaceholder]="inputPlaceholder"
            [inputType]="inputType"
        ></atoms-input>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoleculesInputComponent {
    @Input()
    inputLabel = '';

    @Input()
    inputPlaceholder = 'Input text here';

    @Input()
    inputType = 'text';
}
import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'atoms-button',
    template: `
    <button class="mat-flat-button" (click)="onClick()" [type]="buttonType">{{buttonValue}}</button>
    `,
    
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtomsButtonComponent {
    @Input()
    look: string = '';

    @Input()
    buttonValue: string = '';

    @Input()
    buttonType: string = '';
    
    @Output() clickOnBtn = new EventEmitter<void>();

    onClick() {
        this.clickOnBtn.emit();
    }
}
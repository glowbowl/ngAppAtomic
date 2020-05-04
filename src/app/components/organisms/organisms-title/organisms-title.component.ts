import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'organisms-title',
    template: `
    <div class="main-greeting" >
        <div class="greeting-personalized" *ngIf="auth.userData">
            <h1>Hello, {{name}}!</h1>
        </div>
        <h1 *ngIf="!auth.userData">Hello, stranger!</h1>
        <div class="nav">
            <span *ngIf="!auth.userData" routerLink="login">Log in</span>
            <span *ngIf="auth.userData" routerLink="info">Info DB</span>
            <span *ngIf="!auth.userData" routerLink="create">Sign up</span>
        </div>
    </div>
    `,
    styles: [`
    .main-greeting{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        h1{
            font-size: 60px;
            color: darken(grey, 15%);
        }
        .nav{
            color: darken(grey, 10%);
            display: flex;
            flex-direction: row;
            span {
                font-weight: lighter;
                background: lightgray;
                padding: .3em .8em;
                margin: 0 .8em;
                cursor: pointer;
                &:hover{
                    background-color: darken( lightgray, 10%);
                }
            }
        }
        .greeting-personalized{
            display: flex;
            flex-direction: row;
        }
    }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganismsTitleComponent {

    @Input()
    inputLabel = '';

    @Input()
    inputPlaceholder = '';

    // @Input()
    // selectLabel = '';

    @Input()
    buttonValue = '';

    @Input()
    buttonType = '';

    @Output() clickOnBtn = new EventEmitter();

    onClick() {
        this.clickOnBtn.emit();
    }

}
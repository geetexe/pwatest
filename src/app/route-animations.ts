import { trigger, transition, style, query, animate } from '@angular/animations';

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
            })
        ], { optional:true }),
        query(':enter', [
            animate('300ms ease-in-out', 
                style({
                    opacity: 1,
                })
            )
        ], { optional:true })
    ])
]);
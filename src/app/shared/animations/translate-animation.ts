import {trigger, style, animate, transition} from '@angular/animations';

export function translateAnimation(duration = 200) {
  return trigger('translate', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({transform: 'translateY(-100%)'}),
      animate(duration, style({transform: 'translateY(0)'}))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(duration, style({transform: 'translateY(-100%)'}))
    ])
  ]);
}

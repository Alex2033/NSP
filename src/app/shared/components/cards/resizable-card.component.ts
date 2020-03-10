import { Input, Directive } from '@angular/core';

@Directive()
export abstract class ResizableCardComponent {
  @Input() size: 'small' | 'medium-horizontal' | 'medium-vertical' | 'large';
}

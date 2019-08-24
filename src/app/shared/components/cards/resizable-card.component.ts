import { Input } from '@angular/core';

export abstract class ResizableCardComponent {
  @Input() size: 'small' | 'medium-horizontal' | 'medium-vertical' | 'large'
}
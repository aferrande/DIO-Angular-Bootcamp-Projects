import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent {
  @Input()
  smallImage: string = '';
  @Input()
  smallCardTitle: string = '';
  @Input()
  id: string = '0';
}

import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';

@Component({
  selector: 'storefront',
  imports: [RouterOutlet, SimplebarAngularModule],
  standalone: true,
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorefrontComponent implements OnInit {
  options = { autoHide: true, scrollbarMinSize: 100 };
  ngOnInit(): void {}
}

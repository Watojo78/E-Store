import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'store-admin',
  imports: [],
  standalone: true,
  templateUrl: './store-admin.component.html',
  styleUrl: './store-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreAdminComponent implements OnInit {
  ngOnInit(): void {}
}

import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { EmptyComponent } from './empty/empty.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { StorefrontComponent } from './storefront/storefront.component';
import { AdminComponent } from './admin/admin.component';
import { StoreAdminComponent } from './store-admin/store-admin.component';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'layout',
  imports: [EmptyComponent, AuthComponent, StorefrontComponent, AdminComponent, StoreAdminComponent],
  standalone: true,
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  layout: string = 'auth'; // Set auth as default
  currentChildrenPath: string = '';
  private subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateLayoutData(); // Update on initial load

    this.subscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd) // Filter NavigationEnd events
      )
      .subscribe(() => this.updateLayoutData());
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateChildrenPath(): void {
    const children = this.route.firstChild?.children;
    this.currentChildrenPath = children ? children[0].snapshot.url.join('/') : '';
  }

  private updateLayoutData(): void {
    const routeData = this.route.snapshot.data;
    this.layout = routeData?.['layout'] || 'auth'; // Use auth as default if not defined
  }
}

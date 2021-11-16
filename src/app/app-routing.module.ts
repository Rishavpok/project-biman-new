import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/admin/layout/main/main.component';
import { LoginComponent } from './views/public/login/login.component';
import { RegisterationComponent } from './views/public/registeration/registeration.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },

  {
    path: "register",
    component: RegisterationComponent
  },

  {
    path: "admin",
    component: MainComponent,
    data: {
      title: "Home"
    },
    children: [
      {
        path: "",
        pathMatch: "full",
        loadChildren: () =>
          import("./views/admin/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "calender",
        loadChildren: () =>
          import("./views/admin/calender/calender.module").then(
            (m) => m.CalenderModule
          ),
      },
      {
        path: "chat",
        loadChildren: () =>
          import("./views/admin/chat/chat.module").then(
            (m) => m.ChatModule
          ),
      },
      {
        path: "product",
        loadChildren: () =>
          import("./views/admin/Ecommerce/product/product.module").then(
            (m) => m.ProductModule
          ),
      },
      {
        path: "product-details",
        loadChildren: () =>
          import("./views/admin/Ecommerce/product-details/product-details.module").then(
            (m) => m.ProductDetailsModule
          ),
      },
      {
        path: "order",
        loadChildren: () =>
          import("./views/admin/Ecommerce/orders/orders.module").then(
            (m) => m.OrderModule
          ),
      },
      {
        path: "customer",
        loadChildren: () =>
          import("./views/admin/Ecommerce/customer/customer.module").then(
            (m) => m.CustomerModule
          ),
      },
      {
        path: "cart",
        loadChildren: () =>
          import("./views/admin/Ecommerce/cart/cart-module").then(
            (m) => m.CartModule
          ),
      },
      {
        path: "checkout",
        loadChildren: () =>
          import("./views/admin/Ecommerce/checkout/checkout.module").then(
            (m) => m.CheckoutModule
          ),
      },
      {
        path: "shop",
        loadChildren: () =>
          import("./views/admin/Ecommerce/shops/shop.module").then(
            (m) => m.ShopModule
          ),
      },
      {
        path: "add-product",
        loadChildren: () =>
          import("./views/admin/Ecommerce/add-product/addproduct.module").then(
            (m) => m.AddProductModule
          ),
      },
      {
        path: "inbox",
        loadChildren: () =>
          import("./views/admin/Emails/inbox/inbox.module").then(
            (m) => m.InboxModule
          ),
      },
      {
        path: "mails",
        loadChildren: () =>
          import("./views/admin/Emails/read-mails/read-mails.module").then(
            (m) => m.ReadMailModule
          ),
      },
      {
        path: "invoice-list",
        loadChildren: () =>
          import("./views/admin/Invoices/invoice-list/invoice-list.module").then(
            (m) => m.InvoiceListModule
          ),
      },
      {
        path: "invoice-details",
        loadChildren: () =>
          import("./views/admin/Invoices/invoice-details/details.module").then(
            (m) => m.InvoiceDetailsModule
          ),
      },
      {
        path: "user-list",
        loadChildren: () =>
          import("./views/admin/Contacts/user-list/user-list.module").then(
            (m) => m.UserListModule
          ),
      },
      {
        path: "user-profile",
        loadChildren: () =>
          import("./views/admin/Contacts/user-profile/user-profile.module").then(
            (m) => m.UserProfileModule
          ),
      }
    ]
    
  },
]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

# AngularBootstrapStarterKit

This project can be used for start an Angular project with full Bootstrap

## Development server

Run `npm start` for a dev server.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Dependencies

    "bootstrap": "^5.1.3",
    "bootstrap-icons": "^1.8.1",
    "@ng-bootstrap/ng-bootstrap": "^12.0.0",
    "ngx-bootstrap": "^8.0.0",

## Bug know

Tooltip and popover doesn't work with natif Bootstrap.

## Remove Ngx-boostrap or Ng-Boostrap for use it

1. Delete from package.json `ngx-boostrap` for delete ngxBoostrap or `@ng-bootstrap/ng-bootstrap` for remove ngBoostrap
2. Remove pages folder
3. Add to app.module.ts the good import and deletes routes from app-routing.module.ts 

## Preview Online

https://angular-bootstrap-starter-kit.vercel.app/



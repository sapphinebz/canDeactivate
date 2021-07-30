import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IsSubmit } from './is-submit';

@Injectable({
  providedIn: 'root',
})
export class IsSubmitGuard implements CanDeactivate<IsSubmit> {
  canDeactivate(
    component: IsSubmit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.isSubmit()
      ? true
      : confirm('no submit data will be lose, Are you sure?');
  }
}

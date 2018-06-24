import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router,private authenticationService: AuthenticationService){
    }

    canActivate(activatedRouteSnapshot:ActivatedRouteSnapshot,routerStateSnapshot: RouterStateSnapshot):boolean{                
        let url = routerStateSnapshot.url;
        if(this.authenticationService.isValidUser()){            
            return true;
        }        
        this.authenticationService.setReDirectUrl(url);
        this.router.navigate(['login']);
        return false;
    }
}
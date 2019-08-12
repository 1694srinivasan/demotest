import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class LoadingService {
    
    stateChange: Subject<boolean> = new Subject<boolean>();
    constructor() {
        
    }

    showLoading() {
        this.stateChange.next(true);
    }

    hideLoading() {
        this.stateChange.next(false);
    }
}

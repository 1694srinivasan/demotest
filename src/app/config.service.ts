import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    private _config: any = {
        "API_URL" : "https://cvbackend.herokuapp.com/"
    }

    get(propName:any) {
        return this._config[propName];
    }
}
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransferState} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {BaseApiClientService} from './base-api-client.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService extends BaseApiClientService {

  constructor(
    protected http: HttpClient,
    protected state: TransferState,
    @Inject(PLATFORM_ID) protected platformId) {
    super(http, state, platformId, environment.apiHost);
  }
}

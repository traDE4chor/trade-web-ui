/**
 * TraDE Middleware API
 * This is the API of the TraDE middleware.
 *
 * OpenAPI spec version: 0.0.1
 * Contact: trade4chor@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ResourceEventFilterApi {

    protected basePath = 'https://localhost/api';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Provides one or more available `resourceEventFilter` descriptions based on the provided parameters. Optional query parameter of **eventType** filters result list by the event types of even filter descriptions.
     * @summary Find a resource event filter description by Id
     * @param resourceEventFilterId Id of the resource event filter that needs to be fetched
     * @param eventType Event type of resource event filter descriptions to return
     */
    public getResourceEventFilterDirectly(resourceEventFilterId: string, eventType?: string, extraHttpRequestParams?: any): Observable<models.ResourceEventFilterDescriptionArray> {
        return this.getResourceEventFilterDirectlyWithHttpInfo(resourceEventFilterId, eventType, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Gets all available `resourceEventFilter` resources. Optional query parameter of **start** and **size** enable pagination of the collection of resource event filter resources, param **eventType** filters result list by the event types of even filter descriptions.
     * @param start Start index of returned collection of resources for pagination.
     * @param size Size of the returned sub-collection of resources for pagination.
     * @param eventType Event type of resource event filter descriptions to return
     */
    public getResourceEventFilters(start?: number, size?: number, eventType?: string, extraHttpRequestParams?: any): Observable<models.ResourceEventFilterDescriptionArrayWithLinks> {
        return this.getResourceEventFiltersWithHttpInfo(start, size, eventType, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Find a resource event filter description by Id
     * Provides one or more available &#x60;resourceEventFilter&#x60; descriptions based on the provided parameters. Optional query parameter of **eventType** filters result list by the event types of even filter descriptions.
     * @param resourceEventFilterId Id of the resource event filter that needs to be fetched
     * @param eventType Event type of resource event filter descriptions to return
     */
    public getResourceEventFilterDirectlyWithHttpInfo(resourceEventFilterId: string, eventType?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resourceEventFilters/${resourceEventFilterId}'
                    .replace('${' + 'resourceEventFilterId' + '}', String(resourceEventFilterId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'resourceEventFilterId' is not null or undefined
        if (resourceEventFilterId === null || resourceEventFilterId === undefined) {
            throw new Error('Required parameter resourceEventFilterId was null or undefined when calling getResourceEventFilterDirectly.');
        }
        if (eventType !== undefined) {
            queryParameters.set('eventType', <any>eventType);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Gets all available &#x60;resourceEventFilter&#x60; resources. Optional query parameter of **start** and **size** enable pagination of the collection of resource event filter resources, param **eventType** filters result list by the event types of even filter descriptions.
     * @param start Start index of returned collection of resources for pagination.
     * @param size Size of the returned sub-collection of resources for pagination.
     * @param eventType Event type of resource event filter descriptions to return
     */
    public getResourceEventFiltersWithHttpInfo(start?: number, size?: number, eventType?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/resourceEventFilters';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (start !== undefined) {
            queryParameters.set('start', <any>start);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (eventType !== undefined) {
            queryParameters.set('eventType', <any>eventType);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
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
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { NotFound } from '../model/notFound';
import { ResourceEventFilterDescriptionArray } from '../model/resourceEventFilterDescriptionArray';
import { ResourceEventFilterDescriptionArrayWithLinks } from '../model/resourceEventFilterDescriptionArrayWithLinks';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ResourceEventFilterService {

    protected basePath = 'https://localhost/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Find a resource event filter description by Id
     * Provides one or more available &#x60;resourceEventFilter&#x60; descriptions based on the provided parameters. Optional query parameter of **eventType** filters result list by the event types of even filter descriptions.
     * @param resourceEventFilterId Id of the resource event filter that needs to be fetched
     * @param eventType Event type of resource event filter descriptions to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getResourceEventFilterDirectly(resourceEventFilterId: string, eventType?: string, observe?: 'body', reportProgress?: boolean): Observable<ResourceEventFilterDescriptionArray>;
    public getResourceEventFilterDirectly(resourceEventFilterId: string, eventType?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResourceEventFilterDescriptionArray>>;
    public getResourceEventFilterDirectly(resourceEventFilterId: string, eventType?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResourceEventFilterDescriptionArray>>;
    public getResourceEventFilterDirectly(resourceEventFilterId: string, eventType?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (resourceEventFilterId === null || resourceEventFilterId === undefined) {
            throw new Error('Required parameter resourceEventFilterId was null or undefined when calling getResourceEventFilterDirectly.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (eventType !== undefined) {
            queryParameters = queryParameters.set('eventType', <any>eventType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ResourceEventFilterDescriptionArray>(`${this.basePath}/resourceEventFilters/${encodeURIComponent(String(resourceEventFilterId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Gets all available &#x60;resourceEventFilter&#x60; resources. Optional query parameter of **start** and **size** enable pagination of the collection of resource event filter resources, param **eventType** filters result list by the event types of even filter descriptions.
     * @param start Start index of returned collection of resources for pagination.
     * @param size Size of the returned sub-collection of resources for pagination.
     * @param eventType Event type of resource event filter descriptions to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getResourceEventFilters(start?: number, size?: number, eventType?: string, observe?: 'body', reportProgress?: boolean): Observable<ResourceEventFilterDescriptionArrayWithLinks>;
    public getResourceEventFilters(start?: number, size?: number, eventType?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResourceEventFilterDescriptionArrayWithLinks>>;
    public getResourceEventFilters(start?: number, size?: number, eventType?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResourceEventFilterDescriptionArrayWithLinks>>;
    public getResourceEventFilters(start?: number, size?: number, eventType?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (start !== undefined) {
            queryParameters = queryParameters.set('start', <any>start);
        }
        if (size !== undefined) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (eventType !== undefined) {
            queryParameters = queryParameters.set('eventType', <any>eventType);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ResourceEventFilterDescriptionArrayWithLinks>(`${this.basePath}/resourceEventFilters`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
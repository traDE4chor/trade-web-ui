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

import { DataElement } from '../model/dataElement';
import { DataElementArrayWithLinks } from '../model/dataElementArrayWithLinks';
import { DataElementData } from '../model/dataElementData';
import { DataElementWithLinks } from '../model/dataElementWithLinks';
import { InvalidInput } from '../model/invalidInput';
import { NotFound } from '../model/notFound';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DataElementService {

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
     * Add a new dataElement to the dataObject. If the dataObject belongs to a dataModel the create request will be rejected, since data models are immutable resources.
     * 
     * @param dataObjectId Id of the data object that needs to be fetched
     * @param dataElementData The name and creating entity of the data element that will be created.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addDataElement(dataObjectId: string, dataElementData: DataElementData, observe?: 'body', reportProgress?: boolean): Observable<DataElementWithLinks>;
    public addDataElement(dataObjectId: string, dataElementData: DataElementData, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataElementWithLinks>>;
    public addDataElement(dataObjectId: string, dataElementData: DataElementData, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataElementWithLinks>>;
    public addDataElement(dataObjectId: string, dataElementData: DataElementData, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataObjectId === null || dataObjectId === undefined) {
            throw new Error('Required parameter dataObjectId was null or undefined when calling addDataElement.');
        }
        if (dataElementData === null || dataElementData === undefined) {
            throw new Error('Required parameter dataElementData was null or undefined when calling addDataElement.');
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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<DataElementWithLinks>(`${this.basePath}/dataObjects/${encodeURIComponent(String(dataObjectId))}/dataElements`,
            dataElementData,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a data element. If the parent dataObject belongs to a dataModel the update request will be rejected, since data models are immutable resources.
     * Deletes a complete data element and its referenced instances from the TraDE middleware
     * @param dataElementId Id of the data element that needs to be deleted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteDataElement(dataElementId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteDataElement(dataElementId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteDataElement(dataElementId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteDataElement(dataElementId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataElementId === null || dataElementId === undefined) {
            throw new Error('Required parameter dataElementId was null or undefined when calling deleteDataElement.');
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

        return this.httpClient.delete<any>(`${this.basePath}/dataElements/${encodeURIComponent(String(dataElementId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Gets all available &#x60;DataElement&#x60; resources. Optional query parameter of **start** and **size** enable pagination of the collection of data element resources, param **name** filters result list by name and param **status** filters result list by status of the data elements.
     * @param start Start index of returned collection of resources for pagination.
     * @param size Size of the returned sub-collection of resources for pagination.
     * @param name Name of data elements to return
     * @param status Status of data elements to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllDataElements(start?: number, size?: number, name?: string, status?: string, observe?: 'body', reportProgress?: boolean): Observable<DataElementArrayWithLinks>;
    public getAllDataElements(start?: number, size?: number, name?: string, status?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataElementArrayWithLinks>>;
    public getAllDataElements(start?: number, size?: number, name?: string, status?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataElementArrayWithLinks>>;
    public getAllDataElements(start?: number, size?: number, name?: string, status?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (start !== undefined) {
            queryParameters = queryParameters.set('start', <any>start);
        }
        if (size !== undefined) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (name !== undefined) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (status !== undefined) {
            queryParameters = queryParameters.set('status', <any>status);
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

        return this.httpClient.get<DataElementArrayWithLinks>(`${this.basePath}/dataElements`,
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
     * Find a data element by Id
     * 
     * @param dataElementId Id of the data element that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataElementDirectly(dataElementId: string, observe?: 'body', reportProgress?: boolean): Observable<DataElementWithLinks>;
    public getDataElementDirectly(dataElementId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataElementWithLinks>>;
    public getDataElementDirectly(dataElementId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataElementWithLinks>>;
    public getDataElementDirectly(dataElementId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataElementId === null || dataElementId === undefined) {
            throw new Error('Required parameter dataElementId was null or undefined when calling getDataElementDirectly.');
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

        return this.httpClient.get<DataElementWithLinks>(`${this.basePath}/dataElements/${encodeURIComponent(String(dataElementId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Gets all available &#x60;DataElement&#x60; resources. Optional query parameter of **start** and **size** enable pagination of the collection of data element resources, param **name** filters result list by name and param **status** filters result list by status of the data elements.
     * @param dataObjectId Id of the data object that needs to be fetched
     * @param start Start index of returned collection of resources for pagination.
     * @param size Size of the returned sub-collection of resources for pagination.
     * @param name Name of data elements to return
     * @param status Status of data elements to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataElements(dataObjectId: string, start?: number, size?: number, name?: string, status?: string, observe?: 'body', reportProgress?: boolean): Observable<DataElementArrayWithLinks>;
    public getDataElements(dataObjectId: string, start?: number, size?: number, name?: string, status?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataElementArrayWithLinks>>;
    public getDataElements(dataObjectId: string, start?: number, size?: number, name?: string, status?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataElementArrayWithLinks>>;
    public getDataElements(dataObjectId: string, start?: number, size?: number, name?: string, status?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataObjectId === null || dataObjectId === undefined) {
            throw new Error('Required parameter dataObjectId was null or undefined when calling getDataElements.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (start !== undefined) {
            queryParameters = queryParameters.set('start', <any>start);
        }
        if (size !== undefined) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (name !== undefined) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (status !== undefined) {
            queryParameters = queryParameters.set('status', <any>status);
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

        return this.httpClient.get<DataElementArrayWithLinks>(`${this.basePath}/dataObjects/${encodeURIComponent(String(dataObjectId))}/dataElements`,
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
     * Update an existing data element. If the parent dataObject belongs to a dataModel the update request will be rejected, since data models are immutable resources.
     * Update an existing data element
     * @param dataElementId Id of the data element that needs to be fetched
     * @param dataElement The updated data element resource. Only changes to the following fields are reflected **name**, **type** and **contentType**. All other changes are ignored since the corresponding fields of the resource are internally set by the server or are immutable.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateDataElement(dataElementId: string, dataElement: DataElement, observe?: 'body', reportProgress?: boolean): Observable<DataElementWithLinks>;
    public updateDataElement(dataElementId: string, dataElement: DataElement, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataElementWithLinks>>;
    public updateDataElement(dataElementId: string, dataElement: DataElement, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataElementWithLinks>>;
    public updateDataElement(dataElementId: string, dataElement: DataElement, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataElementId === null || dataElementId === undefined) {
            throw new Error('Required parameter dataElementId was null or undefined when calling updateDataElement.');
        }
        if (dataElement === null || dataElement === undefined) {
            throw new Error('Required parameter dataElement was null or undefined when calling updateDataElement.');
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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<DataElementWithLinks>(`${this.basePath}/dataElements/${encodeURIComponent(String(dataElementId))}`,
            dataElement,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

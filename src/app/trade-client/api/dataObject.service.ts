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

import { DataObject } from '../model/dataObject';
import { DataObjectArrayWithLinks } from '../model/dataObjectArrayWithLinks';
import { DataObjectData } from '../model/dataObjectData';
import { DataObjectWithLinks } from '../model/dataObjectWithLinks';
import { InvalidInput } from '../model/invalidInput';
import { NotFound } from '../model/notFound';

import { TRADE_BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DataObjectService {

    protected basePath = 'https://localhost/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(TRADE_BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * Creates and adds a new data object to the TraDE middleware
     * 
     * @param dataObjectData The name and creating entity of the data object that will be created.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addDataObject(dataObjectData: DataObjectData, observe?: 'body', reportProgress?: boolean): Observable<DataObject>;
    public addDataObject(dataObjectData: DataObjectData, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataObject>>;
    public addDataObject(dataObjectData: DataObjectData, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataObject>>;
    public addDataObject(dataObjectData: DataObjectData, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataObjectData === null || dataObjectData === undefined) {
            throw new Error('Required parameter dataObjectData was null or undefined when calling addDataObject.');
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

        return this.httpClient.post<DataObject>(`${this.basePath}/dataObjects`,
            dataObjectData,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a dataObject. If the dataObject belongs to a dataModel the delete request will be rejected, since data models are immutable resources.
     * Deletes a complete data object and its referenced data elements as well as all instances of conntected to both the data object and its data elements from the TraDE middleware
     * @param dataObjectId Id of the data object that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteDataObject(dataObjectId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteDataObject(dataObjectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteDataObject(dataObjectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteDataObject(dataObjectId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataObjectId === null || dataObjectId === undefined) {
            throw new Error('Required parameter dataObjectId was null or undefined when calling deleteDataObject.');
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

        return this.httpClient.delete<any>(`${this.basePath}/dataObjects/${encodeURIComponent(String(dataObjectId))}`,
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
     * Gets all available &#x60;DataObject&#x60; resources. Optional query parameter of **start** and **size** enable pagination of the collection of data object resources, params **name** and **entity** filter result list by name and entity and param **status** filters result list by status of the data objects.
     * @param start Start index of returned collection of resources for pagination.
     * @param size Size of the returned sub-collection of resources for pagination.
     * @param name Name of data objects to return
     * @param entity Creating entity of data dependency graph to return
     * @param status Status of data objects to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllDataObjects(start?: number, size?: number, name?: string, entity?: string, status?: string, observe?: 'body', reportProgress?: boolean): Observable<DataObjectArrayWithLinks>;
    public getAllDataObjects(start?: number, size?: number, name?: string, entity?: string, status?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataObjectArrayWithLinks>>;
    public getAllDataObjects(start?: number, size?: number, name?: string, entity?: string, status?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataObjectArrayWithLinks>>;
    public getAllDataObjects(start?: number, size?: number, name?: string, entity?: string, status?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
        if (entity !== undefined) {
            queryParameters = queryParameters.set('entity', <any>entity);
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

        return this.httpClient.get<DataObjectArrayWithLinks>(`${this.basePath}/dataObjects`,
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
     * Find a data object by Id
     * 
     * @param dataObjectId Id of the data object that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataObjectById(dataObjectId: string, observe?: 'body', reportProgress?: boolean): Observable<DataObjectWithLinks>;
    public getDataObjectById(dataObjectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataObjectWithLinks>>;
    public getDataObjectById(dataObjectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataObjectWithLinks>>;
    public getDataObjectById(dataObjectId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataObjectId === null || dataObjectId === undefined) {
            throw new Error('Required parameter dataObjectId was null or undefined when calling getDataObjectById.');
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

        return this.httpClient.get<DataObjectWithLinks>(`${this.basePath}/dataObjects/${encodeURIComponent(String(dataObjectId))}`,
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
     * Gets all &#x60;DataObject&#x60; resources which belong the data model. Optional query parameter of **start** and **size** enable pagination of the collection of data object resources.
     * @param dataModelId Id of the data model that needs to be fetched
     * @param start Start index of returned collection of resources for pagination.
     * @param size Size of the returned sub-collection of resources for pagination.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataObjects(dataModelId: string, start?: number, size?: number, observe?: 'body', reportProgress?: boolean): Observable<DataObjectArrayWithLinks>;
    public getDataObjects(dataModelId: string, start?: number, size?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataObjectArrayWithLinks>>;
    public getDataObjects(dataModelId: string, start?: number, size?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataObjectArrayWithLinks>>;
    public getDataObjects(dataModelId: string, start?: number, size?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataModelId === null || dataModelId === undefined) {
            throw new Error('Required parameter dataModelId was null or undefined when calling getDataObjects.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (start !== undefined) {
            queryParameters = queryParameters.set('start', <any>start);
        }
        if (size !== undefined) {
            queryParameters = queryParameters.set('size', <any>size);
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

        return this.httpClient.get<DataObjectArrayWithLinks>(`${this.basePath}/dataModels/${encodeURIComponent(String(dataModelId))}/dataObjects`,
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
     * Update an existing dataObject. If the dataObject belongs to a dataModel the update request will be rejected, since data models are immutable resources.
     * Update an existing dataObject
     * @param dataObjectId Id of the data object that needs to be updated
     * @param dataObject The updated data object resource. Only changes to the following fields are reflected **name** and creating **entity**. All other changes are ignored since the corresponding fields of the resource are internally set by the server or are immutable.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateDataObject(dataObjectId: string, dataObject: DataObject, observe?: 'body', reportProgress?: boolean): Observable<DataObjectWithLinks>;
    public updateDataObject(dataObjectId: string, dataObject: DataObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataObjectWithLinks>>;
    public updateDataObject(dataObjectId: string, dataObject: DataObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataObjectWithLinks>>;
    public updateDataObject(dataObjectId: string, dataObject: DataObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataObjectId === null || dataObjectId === undefined) {
            throw new Error('Required parameter dataObjectId was null or undefined when calling updateDataObject.');
        }
        if (dataObject === null || dataObject === undefined) {
            throw new Error('Required parameter dataObject was null or undefined when calling updateDataObject.');
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

        return this.httpClient.put<DataObjectWithLinks>(`${this.basePath}/dataObjects/${encodeURIComponent(String(dataObjectId))}`,
            dataObject,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

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

import { DataModel } from '../model/dataModel';
import { DataModelArrayWithLinks } from '../model/dataModelArrayWithLinks';
import { DataModelData } from '../model/dataModelData';
import { DataModelWithLinks } from '../model/dataModelWithLinks';
import { InvalidInput } from '../model/invalidInput';
import { NotFound } from '../model/notFound';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DataModelService {

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
     * Creates and adds a new data model to the TraDE middleware
     * 
     * @param dataModelData The name and creating entity of the data model that will be created.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addDataModel(dataModelData: DataModelData, observe?: 'body', reportProgress?: boolean): Observable<DataModel>;
    public addDataModel(dataModelData: DataModelData, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataModel>>;
    public addDataModel(dataModelData: DataModelData, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataModel>>;
    public addDataModel(dataModelData: DataModelData, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataModelData === null || dataModelData === undefined) {
            throw new Error('Required parameter dataModelData was null or undefined when calling addDataModel.');
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

        return this.httpClient.post<DataModel>(`${this.basePath}/dataModels`,
            dataModelData,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a data model and all related resources.
     * Deletes a data model and all resources related to it from the TraDE middleware. This means that all data objects and their data elements defined through this data model as well as their instances will be deleted. Therefore, the deletion of a data model should be handled with care since it is one of the core artifacts used by the TraDE middleware.
     * @param dataModelId Id of the data model that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteDataModel(dataModelId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteDataModel(dataModelId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteDataModel(dataModelId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteDataModel(dataModelId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataModelId === null || dataModelId === undefined) {
            throw new Error('Required parameter dataModelId was null or undefined when calling deleteDataModel.');
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

        return this.httpClient.delete<any>(`${this.basePath}/dataModels/${encodeURIComponent(String(dataModelId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Provides the serialized data model
     * 
     * @param dataModelId Id of the data model that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public downloadDataModel(dataModelId: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public downloadDataModel(dataModelId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public downloadDataModel(dataModelId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public downloadDataModel(dataModelId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataModelId === null || dataModelId === undefined) {
            throw new Error('Required parameter dataModelId was null or undefined when calling downloadDataModel.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/octet-stream',
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

        return this.httpClient.get<string>(`${this.basePath}/dataModels/${encodeURIComponent(String(dataModelId))}/serialized-model`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the data model associated to the data dependency graph.
     * 
     * @param graphId Id of the data dependency graph that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataModel(graphId: string, observe?: 'body', reportProgress?: boolean): Observable<DataModelWithLinks>;
    public getDataModel(graphId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataModelWithLinks>>;
    public getDataModel(graphId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataModelWithLinks>>;
    public getDataModel(graphId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (graphId === null || graphId === undefined) {
            throw new Error('Required parameter graphId was null or undefined when calling getDataModel.');
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

        return this.httpClient.get<DataModelWithLinks>(`${this.basePath}/dataDependencyGraphs/${encodeURIComponent(String(graphId))}/dataModel`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find a data model by Id
     * 
     * @param dataModelId Id of the data model that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataModelDirectly(dataModelId: string, observe?: 'body', reportProgress?: boolean): Observable<DataModelWithLinks>;
    public getDataModelDirectly(dataModelId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataModelWithLinks>>;
    public getDataModelDirectly(dataModelId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataModelWithLinks>>;
    public getDataModelDirectly(dataModelId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataModelId === null || dataModelId === undefined) {
            throw new Error('Required parameter dataModelId was null or undefined when calling getDataModelDirectly.');
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

        return this.httpClient.get<DataModelWithLinks>(`${this.basePath}/dataModels/${encodeURIComponent(String(dataModelId))}`,
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
     * Gets all available &#x60;DataModel&#x60; resources. Optional query parameter of **start** and **size** enable pagination of the collection of data model resources and param **targetNamespace**, **name** and **entity** filter result list by name, targetNamespace and entity.
     * @param start Start index of returned collection of resources for pagination.
     * @param size Size of the returned sub-collection of resources for pagination.
     * @param targetNamespace Target namespace of data model to return
     * @param name Name of data model to return
     * @param entity Creating entity of data dependency graph to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataModels(start?: number, size?: number, targetNamespace?: string, name?: string, entity?: string, observe?: 'body', reportProgress?: boolean): Observable<DataModelArrayWithLinks>;
    public getDataModels(start?: number, size?: number, targetNamespace?: string, name?: string, entity?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataModelArrayWithLinks>>;
    public getDataModels(start?: number, size?: number, targetNamespace?: string, name?: string, entity?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataModelArrayWithLinks>>;
    public getDataModels(start?: number, size?: number, targetNamespace?: string, name?: string, entity?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (start !== undefined) {
            queryParameters = queryParameters.set('start', <any>start);
        }
        if (size !== undefined) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (targetNamespace !== undefined) {
            queryParameters = queryParameters.set('targetNamespace', <any>targetNamespace);
        }
        if (name !== undefined) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (entity !== undefined) {
            queryParameters = queryParameters.set('entity', <any>entity);
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

        return this.httpClient.get<DataModelArrayWithLinks>(`${this.basePath}/dataModels`,
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
     * Associates an existing dataModel to the data dependency graph.
     * 
     * @param graphId Id of the data dependency graph that needs to be fetched
     * @param dataModelId The id of a data model that should be associated to this data dependency graph.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setDataModel(graphId: string, dataModelId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public setDataModel(graphId: string, dataModelId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public setDataModel(graphId: string, dataModelId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public setDataModel(graphId: string, dataModelId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (graphId === null || graphId === undefined) {
            throw new Error('Required parameter graphId was null or undefined when calling setDataModel.');
        }
        if (dataModelId === null || dataModelId === undefined) {
            throw new Error('Required parameter dataModelId was null or undefined when calling setDataModel.');
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

        return this.httpClient.post<any>(`${this.basePath}/dataDependencyGraphs/${encodeURIComponent(String(graphId))}/dataModel`,
            dataModelId,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Upload a serialized data model to the TraDE middleware in order to make it available.
     * 
     * @param dataModelId Id of the data model that needs to be fetched
     * @param contentLength The size of the serialized data model passed as header
     * @param model The serialized data model to upload.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadDataModel(dataModelId: string, contentLength: number, model: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public uploadDataModel(dataModelId: string, contentLength: number, model: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public uploadDataModel(dataModelId: string, contentLength: number, model: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public uploadDataModel(dataModelId: string, contentLength: number, model: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataModelId === null || dataModelId === undefined) {
            throw new Error('Required parameter dataModelId was null or undefined when calling uploadDataModel.');
        }
        if (contentLength === null || contentLength === undefined) {
            throw new Error('Required parameter contentLength was null or undefined when calling uploadDataModel.');
        }
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling uploadDataModel.');
        }

        let headers = this.defaultHeaders;
        if (contentLength !== undefined && contentLength !== null) {
            headers = headers.set('Content-Length', String(contentLength));
        }

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
            'application/octet-stream'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/dataModels/${encodeURIComponent(String(dataModelId))}/serialized-model`,
            model,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

/**
 * HDTApps Framework
 * Handling data transformation applications (HDTApps) framework's API specification 
 *
 * OpenAPI spec version: 1.0.0
 * 
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

import { Application } from '../model/application';
import { Task } from '../model/task';
import { TransformationRequest } from '../model/transformationRequest';

import { HDT_BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { HdtAppsConfiguration }                                     from '../configuration';


@Injectable()
export class TasksService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new HdtAppsConfiguration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(HDT_BASE_PATH) basePath: string, @Optional() configuration: HdtAppsConfiguration) {
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
     * Cancel an existing task
     * 
     * @param taskID Id of the task to cancel
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public hdtappsApiCancelTask(taskID: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public hdtappsApiCancelTask(taskID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public hdtappsApiCancelTask(taskID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public hdtappsApiCancelTask(taskID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (taskID === null || taskID === undefined) {
            throw new Error('Required parameter taskID was null or undefined when calling hdtappsApiCancelTask.');
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

        return this.httpClient.put<any>(`${this.basePath}/tasks/${encodeURIComponent(String(taskID))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Request new data transformation
     * Request transformation from the Task Manager. Note if specifying an input file set you can either point to an archive (&#39;linkToArchive&#39;) or list links to all related files individually in an array (&#39;linksToFiles&#39;)
     * @param body TransformationRequest object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public hdtappsApiCreateTask(body: TransformationRequest, observe?: 'body', reportProgress?: boolean): Observable<Task>;
    public hdtappsApiCreateTask(body: TransformationRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Task>>;
    public hdtappsApiCreateTask(body: TransformationRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Task>>;
    public hdtappsApiCreateTask(body: TransformationRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling hdtappsApiCreateTask.');
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

        return this.httpClient.post<Task>(`${this.basePath}/tasks`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete an existing task
     * 
     * @param taskID Id of the task to delete
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public hdtappsApiDeleteTask(taskID: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public hdtappsApiDeleteTask(taskID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public hdtappsApiDeleteTask(taskID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public hdtappsApiDeleteTask(taskID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (taskID === null || taskID === undefined) {
            throw new Error('Required parameter taskID was null or undefined when calling hdtappsApiDeleteTask.');
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

        return this.httpClient.delete<any>(`${this.basePath}/tasks/${encodeURIComponent(String(taskID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Monitor the task&#39;s execution
     * Returns task&#39;s execution state
     * @param taskID ID of the task
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public hdtappsApiGetTaskById(taskID: string, observe?: 'body', reportProgress?: boolean): Observable<Application>;
    public hdtappsApiGetTaskById(taskID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Application>>;
    public hdtappsApiGetTaskById(taskID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Application>>;
    public hdtappsApiGetTaskById(taskID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (taskID === null || taskID === undefined) {
            throw new Error('Required parameter taskID was null or undefined when calling hdtappsApiGetTaskById.');
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
        ];

        return this.httpClient.get<Application>(`${this.basePath}/tasks/${encodeURIComponent(String(taskID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

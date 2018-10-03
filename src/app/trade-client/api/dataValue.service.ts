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

import { DataValue } from '../model/dataValue';
import { DataValueArrayWithLinks } from '../model/dataValueArrayWithLinks';
import { DataValueData } from '../model/dataValueData';
import { DataValueWithLinks } from '../model/dataValueWithLinks';
import { InvalidInput } from '../model/invalidInput';
import { NotFound } from '../model/notFound';

import { TRADE_BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DataValueService {

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
     * Creates and adds a new data value to the TraDE middleware
     * 
     * @param dataValueData The name, type and who created the data value are required. The specification of a contentType is only required if the data type is binary.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addDataValue(dataValueData: DataValueData, observe?: 'body', reportProgress?: boolean): Observable<DataValue>;
    public addDataValue(dataValueData: DataValueData, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataValue>>;
    public addDataValue(dataValueData: DataValueData, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataValue>>;
    public addDataValue(dataValueData: DataValueData, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataValueData === null || dataValueData === undefined) {
            throw new Error('Required parameter dataValueData was null or undefined when calling addDataValue.');
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

        return this.httpClient.post<DataValue>(`${this.basePath}/dataValues`,
            dataValueData,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a new or associates an existing dataValue to the data element instance.
     * 
     * @param instanceId Id of the data element instance that needs to be fetched
     * @param dataValueData DataValue object that needs to be created or associated. In case of updating the associated data value providing the Id is enough. To create and associate a new DataValue, a name, type and who created the data value are required. The specification of a contentType is only required if the data type of the data value is binary.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public associateDataValueToDataElementInstance(instanceId: string, dataValueData?: DataValue, observe?: 'body', reportProgress?: boolean): Observable<DataValueWithLinks>;
    public associateDataValueToDataElementInstance(instanceId: string, dataValueData?: DataValue, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataValueWithLinks>>;
    public associateDataValueToDataElementInstance(instanceId: string, dataValueData?: DataValue, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataValueWithLinks>>;
    public associateDataValueToDataElementInstance(instanceId: string, dataValueData?: DataValue, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (instanceId === null || instanceId === undefined) {
            throw new Error('Required parameter instanceId was null or undefined when calling associateDataValueToDataElementInstance.');
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

        return this.httpClient.post<DataValueWithLinks>(`${this.basePath}/dataElementInstances/${encodeURIComponent(String(instanceId))}/dataValues`,
            dataValueData,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a data value
     * Deletes a data value and its associated data from the TraDE middleware. All references from data element instances are invalidated accordingly.
     * @param dataValueId Id of the data value that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteDataValue(dataValueId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteDataValue(dataValueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteDataValue(dataValueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteDataValue(dataValueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataValueId === null || dataValueId === undefined) {
            throw new Error('Required parameter dataValueId was null or undefined when calling deleteDataValue.');
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

        return this.httpClient.delete<any>(`${this.basePath}/dataValues/${encodeURIComponent(String(dataValueId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find a data value by Id
     * 
     * @param dataValueId Id of the data value that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataValueDirectly(dataValueId: string, observe?: 'body', reportProgress?: boolean): Observable<DataValueWithLinks>;
    public getDataValueDirectly(dataValueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataValueWithLinks>>;
    public getDataValueDirectly(dataValueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataValueWithLinks>>;
    public getDataValueDirectly(dataValueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataValueId === null || dataValueId === undefined) {
            throw new Error('Required parameter dataValueId was null or undefined when calling getDataValueDirectly.');
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

        return this.httpClient.get<DataValueWithLinks>(`${this.basePath}/dataValues/${encodeURIComponent(String(dataValueId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the data value(s) associated to the data element instance.
     * Returns the complete list of &#x60;DataValue&#x60; resources associated to a &#x60;DataElementInstance&#x60; resource. With the optional query parameter **indexOfDataValue** one specific &#x60;DataValue&#x60; resource can be retrieved, if the underlying data element instance belongs to a collection data element. If the related data element is not a collection the index query parameter has no effect since at most one data value is associated to the data element instance. The current number of &#x60;DataValue&#x60; resources associated to a &#x60;DataElementInstance&#x60; resource are provided by the **numberOfDataValues** property of the &#x60;DataElementInstance&#x60; resource. The value of the query parameter **indexOfDataValue** has to be in the range of [1,**numberOfDataValues**].
     * @param instanceId Id of the data element instance that needs to be fetched
     * @param indexOfDataValue The index of the associated data value to return. If the related data element is not a collection element, the index query parameter is ignored and always the single data value is returned.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataValues(instanceId: string, indexOfDataValue?: number, observe?: 'body', reportProgress?: boolean): Observable<DataValueArrayWithLinks>;
    public getDataValues(instanceId: string, indexOfDataValue?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataValueArrayWithLinks>>;
    public getDataValues(instanceId: string, indexOfDataValue?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataValueArrayWithLinks>>;
    public getDataValues(instanceId: string, indexOfDataValue?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (instanceId === null || instanceId === undefined) {
            throw new Error('Required parameter instanceId was null or undefined when calling getDataValues.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (indexOfDataValue !== undefined) {
            queryParameters = queryParameters.set('indexOfDataValue', <any>indexOfDataValue);
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

        return this.httpClient.get<DataValueArrayWithLinks>(`${this.basePath}/dataElementInstances/${encodeURIComponent(String(instanceId))}/dataValues`,
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
     * Gets all available &#x60;DataValue&#x60; resources. Optional query parameter of **start** and **size** enable pagination of the collection of data value resources, param **createdBy** filters result list by the creator and param **status** filters result list by status of the data values.
     * @param start Start index of returned collection of resources for pagination.
     * @param size Size of the returned sub-collection of resources for pagination.
     * @param status Status of data values to return
     * @param createdBy Name of the data element to which instance a data value belongs
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDataValuesDirectly(start?: number, size?: number, status?: string, createdBy?: string, observe?: 'body', reportProgress?: boolean): Observable<DataValueArrayWithLinks>;
    public getDataValuesDirectly(start?: number, size?: number, status?: string, createdBy?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataValueArrayWithLinks>>;
    public getDataValuesDirectly(start?: number, size?: number, status?: string, createdBy?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataValueArrayWithLinks>>;
    public getDataValuesDirectly(start?: number, size?: number, status?: string, createdBy?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (start !== undefined) {
            queryParameters = queryParameters.set('start', <any>start);
        }
        if (size !== undefined) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (status !== undefined) {
            queryParameters = queryParameters.set('status', <any>status);
        }
        if (createdBy !== undefined) {
            queryParameters = queryParameters.set('createdBy', <any>createdBy);
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

        return this.httpClient.get<DataValueArrayWithLinks>(`${this.basePath}/dataValues`,
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
     * Pulls data from the data value identified by Id
     * 
     * @param dataValueId Id of the data value that needs to be fetched
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public pullDataValue(dataValueId: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public pullDataValue(dataValueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public pullDataValue(dataValueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public pullDataValue(dataValueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataValueId === null || dataValueId === undefined) {
            throw new Error('Required parameter dataValueId was null or undefined when calling pullDataValue.');
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

        return this.httpClient.get<string>(`${this.basePath}/dataValues/${encodeURIComponent(String(dataValueId))}/data`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Pushes data to the TraDE middleware by attaching it to the data value identified by Id
     * 
     * @param dataValueId Id of the data value to attach data to
     * @param data The data to push. It can be either provided directly in binary format (byte[]) or referenced through a link (http://example.org/data) where the data can be retrieved. If a link is passed, the **X-ResolveAsLinkToData** header should be set to true, to trigger the resolution of the link, else the link itself will be perceived as the data to be stored.
     * @param xResolveAsLinkToData Whether the body contains the actual data (false) or a link to the data (true).
     * @param contentLength The size of the data passed as header
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public pushDataValue(dataValueId: string, data: string, xResolveAsLinkToData?: boolean, contentLength?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public pushDataValue(dataValueId: string, data: string, xResolveAsLinkToData?: boolean, contentLength?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public pushDataValue(dataValueId: string, data: string, xResolveAsLinkToData?: boolean, contentLength?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public pushDataValue(dataValueId: string, data: string, xResolveAsLinkToData?: boolean, contentLength?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataValueId === null || dataValueId === undefined) {
            throw new Error('Required parameter dataValueId was null or undefined when calling pushDataValue.');
        }
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling pushDataValue.');
        }

        let headers = this.defaultHeaders;
        if (xResolveAsLinkToData !== undefined && xResolveAsLinkToData !== null) {
            headers = headers.set('X-ResolveAsLinkToData', String(xResolveAsLinkToData));
        }
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

        return this.httpClient.post<any>(`${this.basePath}/dataValues/${encodeURIComponent(String(dataValueId))}/data`,
            data,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Removes an associated dataValue from a data element instance.
     * 
     * @param instanceId Id of the data element instance that needs to be fetched
     * @param dataValueId The id of the DataValue object that is associated and should be remove from the data element instance.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public removeDataValueFromDataElementInstance(instanceId: string, dataValueId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public removeDataValueFromDataElementInstance(instanceId: string, dataValueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public removeDataValueFromDataElementInstance(instanceId: string, dataValueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public removeDataValueFromDataElementInstance(instanceId: string, dataValueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (instanceId === null || instanceId === undefined) {
            throw new Error('Required parameter instanceId was null or undefined when calling removeDataValueFromDataElementInstance.');
        }
        if (dataValueId === null || dataValueId === undefined) {
            throw new Error('Required parameter dataValueId was null or undefined when calling removeDataValueFromDataElementInstance.');
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

        return this.httpClient.delete<any>(`${this.basePath}/dataElementInstances/${encodeURIComponent(String(instanceId))}/dataValues/${encodeURIComponent(String(dataValueId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update an existing data value
     * 
     * @param dataValueId Id of the data value that needs to be fetched
     * @param dataValue The updated data value resource. Only changes to the following fields are reflected **name**, **type** and **contentType**. All other changes are ignored since the corresponding fields of the resource are internally set by the server or are immutable.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateDataValueDirectly(dataValueId: string, dataValue: DataValue, observe?: 'body', reportProgress?: boolean): Observable<DataValueWithLinks>;
    public updateDataValueDirectly(dataValueId: string, dataValue: DataValue, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DataValueWithLinks>>;
    public updateDataValueDirectly(dataValueId: string, dataValue: DataValue, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DataValueWithLinks>>;
    public updateDataValueDirectly(dataValueId: string, dataValue: DataValue, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dataValueId === null || dataValueId === undefined) {
            throw new Error('Required parameter dataValueId was null or undefined when calling updateDataValueDirectly.');
        }
        if (dataValue === null || dataValue === undefined) {
            throw new Error('Required parameter dataValue was null or undefined when calling updateDataValueDirectly.');
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

        return this.httpClient.put<DataValueWithLinks>(`${this.basePath}/dataValues/${encodeURIComponent(String(dataValueId))}`,
            dataValue,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

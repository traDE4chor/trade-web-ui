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
import { Provider } from './provider';


export interface ApplicationAppInfo {
    appID?: string;
    appName?: string;
    appVersion?: string;
    appPublisher?: string;
    appDesc?: string;
    appDevelopers?: Array<string>;
    appLicense?: string;
    tags?: Array<string>;
    validated?: boolean;
    path?: string;
    providers?: Array<Provider>;
    transformationsCount?: number;
    envDepsCount?: number;
    softDepsCount?: number;
    fileDepsCount?: number;
}

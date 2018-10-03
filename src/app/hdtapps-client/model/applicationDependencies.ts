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
import { EnvironmentDependency } from './environmentDependency';
import { FileDependency } from './fileDependency';
import { SoftwareDependency } from './softwareDependency';


export interface ApplicationDependencies {
    envDeps?: Array<EnvironmentDependency>;
    softDeps?: Array<SoftwareDependency>;
    fileDeps?: Array<FileDependency>;
}

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
import { ResultingOutput } from './resultingOutput';
import { TestRunSampleInputs } from './testRunSampleInputs';


export interface TestRun {
    name?: string;
    transformation?: string;
    description?: string;
    sampleInputs?: TestRunSampleInputs;
    resultingOutput?: Array<ResultingOutput>;
}

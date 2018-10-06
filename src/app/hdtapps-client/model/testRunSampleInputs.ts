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
import { SampleInputFile } from './sampleInputFile';
import { SampleInputFileSet } from './sampleInputFileSet';
import { SampleInputParameter } from './sampleInputParameter';


export interface TestRunSampleInputs {
    sampleInputParams?: Array<SampleInputParameter>;
    sampleInputFiles?: Array<SampleInputFile>;
    sampleInputFileSets?: Array<SampleInputFileSet>;
}
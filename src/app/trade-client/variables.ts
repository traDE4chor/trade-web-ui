import { InjectionToken } from '@angular/core';

export const TRADE_BASE_PATH = new InjectionToken<string>('basePath');
export const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
}

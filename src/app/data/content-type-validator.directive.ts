import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const contentTypeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const type = control.get('type');
  const contentType = control.get('contentType');

  const flag = type && contentType && type.value === 'binary' && contentType.value === '' ? { 'missingContentType':
  true } : null;

  return flag;
}

@Directive({
  selector: '[dataValueContentTypeValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ContentTypeValidatorDirective, multi: true }]
})
export class ContentTypeValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return contentTypeValidator(control)
  }
}

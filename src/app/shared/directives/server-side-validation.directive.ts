import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appServerSideValidation]'
})
export class ServerSideValidationDirective {

  constructor() {
  }
  @Input() formGroup: FormGroup;
  @Input()
  set appServerSideValidation(errors) {
    if(errors) {
      this.setFormControlErrors(this.formGroup, errors);
    }
  }
  private setFormControlErrors(formGroup, errors) {
    for(const key in formGroup.controls) {
      if (formGroup.controls[key].controls) {
        this.setFormControlErrors(formGroup.controls[key], errors);
      } else {
        if(errors[key]) {
          formGroup.controls[key].setErrors(this.modifyErrors(errors[key]));
        }
      }

    }
  }
  private modifyErrors(errors) {
    for(const k in errors) {
      errors[k] = this.modifyErrorParams(k, errors[k]);
    }
    return errors;
  }
  private modifyErrorParams(rule, params) {
    if(params === true) {
      return true;
    }
    switch (rule) {
      case 'min':
        return {
          min: parseInt(params[0])
        };
      case 'max':
        return {
          max: parseInt(params[0])
        };
      default:
        console.log(`Неизвестный тип правила валидации: ${rule}`);
    }
    return true; // Если неизвестный тип правила, то вернуть true вместо списка модифицированных параметров
  }
}

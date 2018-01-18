import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
   name:'ConverttoSpaces'
})

export class ConvertoSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}
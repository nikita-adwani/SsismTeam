import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "keys" })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      if (key !== "imgPath") {
        let capKey = key.split(/(?=[A-Z])/).join(" ");

        keys.push({ key: capKey, value: value[key] });
      }
    }
    return keys;
  }
}

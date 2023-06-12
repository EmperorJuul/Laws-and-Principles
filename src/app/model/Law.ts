export class Law {
  constructor(public id: number,
              public title: string,
              public description: string,
              public encodedImage: string,
              public wikipedia: string,
              public law?: string) {
  }
}

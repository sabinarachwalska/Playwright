import { faker } from "@faker-js/faker";

export abstract class Fake {
  public static Name(): string {
    return faker.person.firstName("male").toUpperCase();
  }
  public static Code(length: number): string {
    let randomCode: string = "";
    for (let i = 0; i < length; i++) {
      const digit = faker.number.int({ min: 0, max: 9 });
      randomCode += digit.toString();
    }
    return randomCode;
  }
  public static City(): string {
    return faker.location.city();
  }
  public static PostalCode(): string {
    return faker.location.zipCode();
  }
  public static Street(): string {
    return faker.location.street();
  }
  public static NumberOfBuilding(): string {
    return faker.location.buildingNumber();
  }
  public static PhoneNumber(): string {
    return faker.phone.number();
  }
  public static Mail(): string {
    return faker.internet.email();
  }
  public static RandomDay(): number {
    return faker.number.int({ min: 1, max: 31 });
  }

  public static RandomMonth(): number {
    return faker.number.int({ min: 1, max: 12 });
  }
  public static RandomYear(): number {
    return faker.number.int({ min: 1900, max: 2021 });
  }
  public static LastName(): string {
    return faker.person.lastName("male").toUpperCase();
  }
  public static RandomPassword(): string {
    return faker.internet.password({ length: 12 });
  }
  public static RandomLogin(): string {
    return faker.internet.userName({ firstName: "Test" });
  }
  public static WordAdcjective(): string {
    return faker.word.adjective();
  }

  public static RandomBigNumber(): any {
    return faker.number.bigInt();
  }

  public static RandomFloat(): number {
    return faker.number.float();
  }
  public static RandomColor(): string {
    return faker.color.human();
  }

  public static Voivodeship(): string {
    return faker.location.county();
  }

  public static District(): string {
    return faker.location.state();
  }

  public static Commune(): string {
    return faker.lorem.word();
  }

  public static Paragraph(): string {
    return faker.lorem.paragraph();
  }

  public static State(): string {
    return faker.location.state();
  }
}

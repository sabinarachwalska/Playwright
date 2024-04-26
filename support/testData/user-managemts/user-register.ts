import { EnviromentKey } from "../../../enviroments/enviroments";
import {
  EnvironmentTestData,
  getTestData,
} from "../../../utilities/test-data-utilities";
import { Fake } from "../../core/data-generation";

export type UserRegister = EnvironmentTestData & {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly days: string;
  readonly months: string;
  readonly years: string;
  readonly phone: string;
  readonly postalCode: string;
  readonly street: string;
  readonly city: string;
  readonly state: string;
  readonly company: string;
  readonly surname: string;
  readonly country: string;
};

const testDataSourceAddAndEditContractor: UserRegister[] = [
  {
    environmentKey: EnviromentKey.AutomationPractise,
    name: Fake.Name(),
    email: Fake.Mail(),
    password: Fake.RandomPassword(),
    days: Fake.RandomDay().toString(),
    months: Fake.RandomMonth().toString(),
    years: Fake.RandomYear().toString(),
    phone: Fake.RandomBigNumber().toString(),
    postalCode: Fake.PostalCode(),
    street: Fake.Street(),
    state: Fake.State(),
    city: Fake.City(),
    company: Fake.Commune(),
    surname: Fake.LastName(),
    country: "India",
  },
];

export function testDataUserRegister(key: string): UserRegister {
  return getTestData(testDataSourceAddAndEditContractor, key);
}

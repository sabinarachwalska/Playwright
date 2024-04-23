import { EnviromentKey } from '../../../enviroments/enviroments';
import { EnvironmentTestData, getTestData } from '../../../utilities/test-data-utilities';
import { Fake } from '../../core/data-generation';

export type UserRegister = EnvironmentTestData & {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly postalCode: string;
  readonly street: string;
  readonly city: string;
  readonly state: string;
  readonly company: string;
  readonly surname: string;
};

const testDataSourceAddAndEditContractor: UserRegister[] = [
  {
    environmentKey: EnviromentKey.AutomationPractise,
    name: Fake.Name(),
    email: Fake.Mail(),
    phone: Fake.RandomBigNumber().toString(),
    postalCode: Fake.PostalCode(),
    street: Fake.Street(),
    state: Fake.State(),
    city: Fake.City(),
    company: Fake.Commune(),
    surname: Fake.LastName(),
  }
];

export function testDataUserRegister(key: string): UserRegister {
  return getTestData(testDataSourceAddAndEditContractor, key);
}
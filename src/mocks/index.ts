import faker from '@faker-js/faker/locale/pl';

import { DataElement } from 'types';

const dataMock: DataElement[] = Array.from(Array(6).keys()).map((key) => ({
  id: key,
  from: `${faker.name.firstName()} ${faker.name.lastName()} <${faker.internet.email()}>`,
  sent_date: faker.date.future(),
  is_unread: faker.datatype.boolean(),
  subject: faker.lorem.sentence(6),
  snippet: faker.lorem.sentence()
}));

export default dataMock;

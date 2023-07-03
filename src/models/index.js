// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DomainRawTextFiles, Note } = initSchema(schema);

export {
  DomainRawTextFiles,
  Note
};
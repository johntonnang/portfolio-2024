import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'd98dd8af',
  dataset: 'production',
  apiVersion: '2024-04-19',
  useCdn: false,
};

const client = createClient(config);

export default client;

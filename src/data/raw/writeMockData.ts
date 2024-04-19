import fs from 'fs';
import path from 'path';
import {getAPISearchResults} from '../api';

const writeMockData = async () => {
  for (const search of ['guinea pig', 'panda', 'rabbit', 'dog']) {
    const photos = await getAPISearchResults(search);
    const json = JSON.stringify(photos, null, 2);
    fs.writeFileSync(
      path.join(__dirname, `${search.replace(' ', '')}.json`),
      json,
    );
  }
};

writeMockData();

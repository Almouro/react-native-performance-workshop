import fs from "fs";
import path from "path";
import { getAPISearchResults } from "../api";

const writeMockData = async () => {
  for (const search of ["guinea pig", "panda", "rabbit", "dog"]) {
    const results = [];
    for (let pageIndex = 1; pageIndex <= 4; pageIndex++) {
      const photos = await getAPISearchResults(search, pageIndex);
      // @ts-ignore
      results.push(...photos.results);
    }
    const json = JSON.stringify({ results }, null, 2);
    fs.writeFileSync(
      path.join(__dirname, `${search.replace(" ", "")}.json`),
      json
    );
  }
};

writeMockData();

import fs from "fs";
import path from "path";

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

// CHANGE THIS TO YOUR OWN CLIENT ACCESS KEY
const CLIENT_ACCESS_KEY = process.env.UNSPLASH_API_KEY ?? "REPLACE_ME";

export const getAPISearchResults = async (
  search: string,
  page = 1
): Promise<Record<string, unknown>> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      search
    )}&per_page=25&client_id=${CLIENT_ACCESS_KEY}&page=${page}`
  );
  const json = await response.json();

  return json;
};

writeMockData();

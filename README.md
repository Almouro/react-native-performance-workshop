# React Native Performance Workshop

This app suffers from many performance issues, let's fix them together.

## Where is the data coming from

The data is taken from Unsplash API, but to avoid getting hit with the API rate limit, the data is instead retrieved from a local JSON file.  
Of course, too many network requests or big network requests can also be source of performance issues but are ignored for the purpose of this exercise.

### Use real API data

You can still switch to using real data by going into `src/data/api.tsx` and:

- setting `USE_MOCKED_DATA` to false
- filling `CLIENT_ACCESS_KEY` to be replaced by your own Unsplash developer client access key

### Rewrite mock data

You can rewrite the local JSON files with:

```bash
npx ts-node -O '{"module":"commonjs"}' src/data/raw/writeMockData.ts
```

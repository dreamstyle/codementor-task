import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APLICATION_ID,
  process.env.REACT_APP_ALGOLIA_APLICATION_KEY
)
const index = client.initIndex(process.env.REACT_APP_ALGOLIA_INDEX_NAME)

const Algolia = {
  getSearchResult: (query, searchParameters) => {
    return index
      .search(query, {
        ...searchParameters,
      })
      .then(({ hits }) => {
        return hits
      })
  },
}

export default Algolia

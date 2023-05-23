const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '200d87b35a3f8b03a5922cc72885edd9';

const fetchQuery = (QUERY_URL, searchOptions = '') => {
  return fetch(`${BASE_URL}/${QUERY_URL}?api_key=${KEY}&${searchOptions}`).then(
    response => {
      if (!response.ok) {
        throw new Error('Щось пішло не так, спробуйте трошки пізніше');
      }
      return response.json();
    }
  );
};

export default fetchQuery;

const url = 'https://api.somerandomapi.com.br/users';

// Chaining promises all in one
fetch(url).then(response => {
  console.log(`Status: ${response.status}`);

  response
    .json()
    .then(data => {
      console.log('FETCH result:', data);
    })
    .catch(err => {
      console.error('FETCH Parsing Error', err);
    });
});

// Separating responsabilities
fetch(url)
  .then(checkStatus)
  .then(getJSON)
  .then(data => {
    console.log('DATA', data);
  })
  .catch(err => {
    console.log('ERROR', err);
  });

const checkStatus = response => {
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

const getJSON = response => {
  return response.json();
};
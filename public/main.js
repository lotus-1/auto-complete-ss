function femaleNames(){

  fetch("")
  .then(function(response) {
    return response.json();
  })
  //search , error , response;
  //   .then( response => {
  //     if (!response.ok) { throw response }
  //     return response.json()  //we only get here if there is no error
  //   })
  //   .then( json => {
  //     this.props.dispatch(doSomethingWithResult(json))
  //   })
    .catch( err => {
      err.text().then( errorMessage => {
        this.props.dispatch(displayTheError(errorMessage))
      })
    })

    fetch('http://example.com/movies.json')

      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });


}

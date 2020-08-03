const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
  });
  // Two functions 
  const onResolved = (resolvedValue) => console.log(resolvedValue);
  const onRejected = (error) => console.log(error);
  
  myPromise.then(onResolved, onRejected);
  
  // Same as above, written concisely
  myPromise.then((resolvedValue) => {
      console.log(resolvedValue);
  }, (error) => {
      console.log(error);
  });
  
  // Output (in 90% of the cases)
  
  // resolving the promise ...
  // Hello, Promises!
  // Hello, Promises!
const resolvedPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = { message: "delayed success!" };
      resolve(success);
    }, 500);
  });
  return promise;
};

const rejectedPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error("delayed exception!");
      } catch (e) {
        reject({ error: e.message });
      }
    }, 500);
  });
  return promise;
};

resolvedPromise().then((data) => {
  console.log(data);
});

rejectedPromise().catch((e) => {
  console.log(e);
});

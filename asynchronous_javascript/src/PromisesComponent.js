function PromisesDemo() {
  const promise1 = new Promise((resolve, reject) => {
    //some api call
    //if api call is successfull and we get data from it call the resolve function for demo we'll use setTimeout
    setTimeout(() => {
      //assuming api call was successfull and to both resolve an reject js allows to pass some object
      resolve("api call was successfull ");
    }, 5000);
  }); // automatically takes a function that gets resolve and reject function as argument by default

  //.then function will be called on a promise object if get resolved and result object will automatically get the passed object
  //although then function can accept both sucess as well reject callback as second argument both function ofcourse but it's better to use .catch as it can catch exception thrown by the success callback also while .then cannot
  promise1.then((result) => {
    console.log(result); // both then as well as catch returns as new promise object so we can chain promises
  });

  //.catch function will be called when reject function is called on the promise
  promise1.catch((error) => {
    console.log(error);
  });
  return (
    <div>
      <h1>promises Demo </h1>
    </div>
  );
}

export function CallbackHellSolution() {
  //upon calling callback function resolve in getUserData .then will be executed which again takes a callback function and has result passed to resolve function as argument
  getUserData()
    .then((userData) => getProfileData(userData))
    .then((profileData) => getPosts(profileData.userId))
    .then((posts) =>
      console.log("these posts are received using promises\n" + posts)
    )
    .catch((error) => console.log(error));
  //if there is error in any part of the chain nearest .catch function is called
}

function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { id: 1, username: "john_doe" };
      resolve(userData);
    }, 1000);
  });
}

function getProfileData(userData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const profileData = {
        name: `'${userData.username}'`,
        id: userData.id,
        bio: "Web Developer",
        followers: 100,
      };
      resolve(profileData);
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = {
        userId: userId,
        post1: "Post 1",
        post2: "Post 2",
        post3: "Post 3",
      };
      resolve(posts);
    }, 1000);
  });
}

export default PromisesDemo;

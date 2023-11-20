import { useEffect } from "react";
function CallbackHell() {
  useEffect(() => {
    //as getuserData takes in a callback function we'll pass as well as write it's defination here only in form of lamda func and also as you can see inside getUserData definition it's passes the userData into it so we have access to userData as argument in this function
    getUserData(function callbackFunctionInsideGetUserData(userData) {
      // so when this callback function is called inside the getUserData this will execute as this is definition of that callback function that will be called inside the getUserData
      getProfileData(userData, (profileData) => {
        getPosts(userData.id, (posts) => {
          console.log(
            "finally we've completed all nesting of callback hell and here's the result "
          );
          console.log(posts);
        });
      }); // we can see it takes 2 argument 1 userData and another a callback function
    });
  }, []);

  function getUserData(callback) {
    setTimeout(() => {
      const userData = { id: 1, username: "john_doe" };
      callback(userData);
    }, 2000);
  }

  function getProfileData(userData, callback) {
    setTimeout(() => {
      const profileData = {
        name: `'${userData.username}'`,
        bio: "Web Developer",
        followers: 100,
      };
      callback(profileData);
    }, 2000);
  }

  function getPosts(userId, callback) {
    setTimeout(() => {
      const posts = {
        userId: userId,
        post1: "Post 1",
        post2: "Post 2",
        post3: "Post 3",
      };
      callback(posts);
    }, 2000);
  }
}

export default CallbackHell;

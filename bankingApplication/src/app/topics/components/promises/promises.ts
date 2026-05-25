import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  imports: [],
  templateUrl: './promises.html',
  styleUrl: './promises.scss',
})
export class Promises implements OnInit {

  promisesTopics = ["1.calling api through fetch", "2.creating two promises and checing caching", "3.promise chaning", "4.promise api's(promise.all(),promise.allSetteled(),promise.race(),promise.any())", "5.async,await"]


  constructor() {

  };

  ngOnInit() {
    this.urlCalling1();
    this.creating2promises();
    this.creatingPromiseChaining();
    this.promiseApis();
    this.asyncAwait();
  };

  async urlCalling1() {
    let url = 'https://dummyjson.com/users';

    let urlResult = fetch(url).then((x) => {
      return x.json();
    }).then((y) => {
      return y;
    });
    console.log(await urlResult);
  };

  creating2promises() {

    let p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let flag = true;
        if (flag) {
          resolve("p1 resolved");
        } else {
          reject("p1 rejected");
        }
      }, 3000);
    });

    let p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let flag = false;
        if (flag) {
          resolve("p2 resolved");
        } else {
          reject("p2 rejected");
        }
      }, 5000);
    });

    p1.then((x) => {
      console.log(x)
    }).catch((err) => {
      console.log(err);

    });

    p2.then((x) => {
      console.log(x);
    }).catch((err) => {
      console.log(err);
    })
  };

  creatingPromiseChaining() {

    let f1 = function chaning1() {
      let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          let flag = true;
          if (flag) {
            resolve("p1 resolved");
          } else {
            reject("p1 rejected");
          }
        }, 3000);
      });
      return p1;
    };

    let f2 = function chaning2() {
      let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          let flag = false;
          if (flag) {
            resolve("p2 resolved");
          } else {
            reject("p2 rejected");
          }
        }, 5000);
      });
      return p2;
    };

    let f3 = function chaning2() {
      let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          let flag = true;
          if (flag) {
            resolve("p3 resolved");
          } else {
            reject("p3 rejected");
          }
        }, 5000);
      });
      return p3;
    };

    f1().then((x) => {
      console.log(x);
      return f2()
    }).then((y) => {
      console.log(y);
      return f3()
    }).then((z) => {
      console.log(z);
    })
      .catch((err) => {
        console.log(err);
      });
    // so promise chaining .catch at last will handle the rejection at any point and will terminate; if you want at each level you need to handle at each level and the chaning execution continous  
  };

  promiseApis() {

    // 1. promise.all() : it will give result only if all promises are success
    // 2. promise.allSetteled() : it will wait for all promises to get resolve either it's success or fail
    // 3. promise.race() : it will give first setteled promise , either success or failed one which resolves first
    // 4. promise.any() : it will give first success promise. if all fails , it will give aggrregate error which contains all errors of promises: we need to use "err.errors"

    let p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let flag = false;
        if (flag) {
          resolve("p1 resolved");
        } else {
          reject("p1 rejected");
        }
      }, 5000)

    });

    let p2 = new Promise((resolve, reject) => {

      setTimeout(() => {
        let flag = false;

        if (flag) {
          resolve("p2 resolved");
        } else {
          reject("p2 rejected");
        }
      }, 3000)

    });

    let p3 = new Promise((resolve, reject) => {

      setTimeout(() => {
        let flag = false;

        if (flag) {
          resolve("p3 resolved");
        } else {
          reject("p3 rejected");
        }
      }, 6000)

    });

    Promise.all([p1, p2, p3]).then((x) => {
      console.log("APIS ALL :", x);
    }).catch((err) => {
      console.log('APIS ALL ERR BLOCK', err);
    });

    Promise.allSettled([p1, p2, p3]).then((x) => {
      console.log("APIS ALL SETTELED :", x);
    }).catch((err) => {
      console.log(err);
    });

    Promise.race([p1, p2, p3]).then((x) => {
      console.log("APIS RACE :", x);
    }).catch((err) => {
      console.log(err);

    });

    Promise.any([p1, p2, p3]).then((x) => {
      console.log("APIS ANY :", x)
    }).catch((err) => {
      console.log(err.errors);
    });
  };


  async asyncAwait() {
    // async functions always return promise
    // functions start with async are async functions
    // await can be used inside async functions: await is equivalent to .then()
    // if we use await , untill the line execution completes it will not move further
    // try, catch blocks are used inside async function to handle errors similar to .then, .catch

    let p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let flag = true;
        if (flag) {
          resolve("p1 resolved");
        } else {
          reject("p1 rejected")
        }
      }, 3000)
    });

    let p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let flag = false;
        if (flag) {
          resolve("p2 resolved")
        } else {
          reject("p2 rejected")
        }
      }, 4000);
    });

    try {
      let p1Result = await p1;
      console.log("asyn await:", p1Result);

      let p2Result = await p2;
      console.log("async await", p2Result);
    } catch (err) {
      console.log("async await",err);
      
    }

    try {
      let url = 'https://dummyjson.com/users';
      let urlResult = await fetch(url);
      let urlResultJson = await urlResult.json()
      console.log("jjj",urlResultJson);
      
    }catch(err){
      console.log(err);  
    }







  }
















}

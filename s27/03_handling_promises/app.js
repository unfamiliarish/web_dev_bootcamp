/* -- Not touching these functions at all, just exploring how they work -- */

// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    console.log(delay);
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url, reject_ = false) => {
    return new Promise((resolve, reject) => {
        if (reject_) {
            reject("Connection Timeout :(")
        }
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            console.log(delay);
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}



/* -- MY CODE BELOW HERE -- */


/* -- intro to a callback function -- */

// fakeRequestCallback("books.com",
//     function (response) {
//         console.log("it worked!");
//         console.log(response);
//     }, function (response) {
//         console.log("error");
//         console.log(`error: ${response}`)
//     });


/* -- intro calling a promise function -- */

// let request = fakeRequestPromise("books.com/api/fantasy/page1");
// request
//     .then(() => {
//         console.log("promise fulfilled");
//         console.log("success");
//     })
//     .catch(() => {
//         console.log("promise rejected");
//         console.log("error");
//     });


/* -- nested request with callbacks -- */

fakeRequestCallback("books.com/page1",
    function (response) {
        console.log("it worked!");
        console.log(response);
        fakeRequestCallback("books.com/page2",
            function (response) {
                console.log("it worked again");
                console.log(response);
                fakeRequestCallback("books.com/page3",
                    function (request) {
                        console.log("worked the 3rd time");
                        console.log(request);
                    },
                    function (err) {
                        console.log(`the 3rd error: ${err}`);
                    })
            },
            function (err) {
                console.log(`2nd error: ${err}`);
            }
        );
    },
    function (err) {
        console.log("error");
        console.log(`error: ${err}`);
    }
);


/* -- nested promises. not much better in formatting, but better -- */

// fakeRequestPromise("books.com/api/fantasy/page1")
//     .then(() => {
//         console.log("promise fulfilled");
//         console.log("success");
//         fakeRequestPromise("books.com/api/fantasy/page2")
//             .then(() => {
//                 console.log("second promise fulfilled");
//                 fakeRequestPromise("books.com/api/fantasy/page3")
//                     .then(() => { console.log("third promise fulfilled"); })
//                     .catch(() => { console.log("third promise rejected"); })
//             })
//             .catch(() => {
//                 console.log("second promise rejected");
//             })
//     })
//     .catch(() => {
//         console.log("promise rejected");
//         console.log("error");
//     });


/* -- this is me futzing with errors and trying to see if i can still
      have a catch for each error, but I'm having trouble with it

      this does not work :( 

      maybe colt will explain how to do this       
 -- */

// fakeRequestPromise("books.com/api/fantasy/page1")
//     .then(() => {
//         console.log("first promise fulfilled");
//         console.log("success");
//         return fakeRequestPromise("books.com/api/fantasy/page2")
//             .catch((err) => {
//                 throw new Error("second promise rejected", { cause: err })
//             })
//     })
//     .then(() => {
//         console.log("second promise fulfilled");
//         return fakeRequestPromise("books.com/api/fantasy/page3")
//             .catch((err) => {
//                 throw new Error("third promise rejected", { cause: err })
//             })
//     })
//     .then(() => { console.log("third promise fulfilled"); })
//     .catch((err) => {
//         if (err) {
//             console.log("1", err.message)
//             console.log("2", err.cause)
//             console.log("3", err)
//         }
//         else { console.log("first promise rejected"); }
//     })


/* -- simplified fakeRequestPromise -- */

fakeRequestPromise("books.com/api/fantasy/page1")
    .then(() => {
        console.log("first promise fulfilled");
        return fakeRequestPromise("books.com/api/fantasy/page2", true)
    })
    .then(() => {
        console.log("second promise fulfilled");
        return fakeRequestPromise("books.com/api/fantasy/page3")
    })
    .then(() => { console.log("third promise fulfilled"); })
    .catch((err) => {
        console.dir(err);
        console.log("a request failed");
    })


/* -- something is happening below here -- */

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })



// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })




const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve(`data from ${url}: fake data`);
            }
            reject("connection timeout");
        }, 1000)
    })
}

// fakeRequest('dogs/1')
//     .then((data) => {
//         console.log("done with request");
//         console.log("data:", data)
//     })
//     .catch((err) => {
//         console.log(`oh no!`)
//         console.log("err:", err)
//     })



// ---


function delayedColorChange1(newColor, millisecondDelay, doNext) {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, millisecondDelay)
};

// delayedColorChange1("red", 1000, () => {
//     delayedColorChange1("orange", 1000, () => {
//         delayedColorChange1("yellow", 1000, () => {
//             delayedColorChange1("green", 1000, () => {
//                 delayedColorChange1("blue", 1000, () => { });
//             });
//         });
//     });
// });


const delayedColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

// using implicit returns in the .then()'s
// delayedColorChange("red", 1000)
//     .then(() => delayedColorChange("orange", 1000))
//     .then(() => delayedColorChange("yellow", 1000))
//     .then(() => delayedColorChange("green", 1000))
//     .then(() => delayedColorChange("blue", 1000))
//     .then(() => delayedColorChange("indigo", 1000))
//     .then(() => delayedColorChange("violet", 1000))


async function rainbow() {
    await delayedColorChange("red", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("indigo", 1000);
    await delayedColorChange("violet", 1000);

    return "all done"
}


async function makeTwoRequests() {
    // when the awaited promise is rejected, the calling method 
    // handles it as an error 
    try {
        let data1 = await fakeRequest("/page1");
        let data2 = await fakeRequest("/page2");
        console.log(data1);
        console.log(data2);
    } catch (e) {
        console.log("caught error:", e);
    }
}


//--


const sing = async () => {
    // throw "not a full scale"
    return "do re mi";
}

// sing()
//     .then(data => {
//         console.log("promise resolved with:", data)
//     })
//     .catch(err => {
//         console.log("promise rejected with: err")
//     })


const login = async (username, password) => {
    if (!username || !password) throw "Missing credentials";
    if (password === "corgifeet33") return "welcome";
    throw "invalid password";
}

// login("asdf")
//     .then(msg => {
//         console.log("logged in");
//         console.log(msg);
//     })
//     .catch(err => console.log("err:", err))
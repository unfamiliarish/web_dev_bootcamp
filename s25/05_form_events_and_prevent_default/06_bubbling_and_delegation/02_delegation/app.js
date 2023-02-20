// global vars, dont feel like declaration at top 
// and definition below
const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

// event delegation stuff

// this doesn't work, because the below line runs before 
// lis are added from the form. on page load there are 0 lis
const lis = document.querySelectorAll("li");
for (let li of lis) {
    li.addEventListener("click", function (e) {
        //        e.preventDefault();clear
        li.remove();
    })
}

tweetsContainer.addEventListener("click", (e) => {
    // print e to see what li was clicked on
    // console.log(e);
    // console.dir(e.target)
    target = e.target;

    // use && as a concise if. if the first is true, the second runs 
    target.nodeName === "B" && target.parentElement.remove();
    target.nodeName === "LI" && target.remove();
});

// -- preventDefault example from ../_02

tweetForm.addEventListener("submit", function (evnt) {
    evnt.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    const newTweet = createTweet(usernameInput.value, tweetInput.value);
    tweetsContainer.append(newTweet);

    resetForm(usernameInput, tweetInput);
});


const createTweet = (username, tweet) => {
    /* creates new tweet with structure:
      <li>
          <b>{username}</b> - {tweet}
      </li>
    */
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");

    bTag.append(username);
    newTweet.append(bTag, ` - ${tweet}`);

    return newTweet;
}

const resetForm = (...formElements) => {
    for (element of formElements) {
        element.value = "";
    }
}
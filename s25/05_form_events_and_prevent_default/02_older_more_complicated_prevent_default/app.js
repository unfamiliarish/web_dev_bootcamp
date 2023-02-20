const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

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
const tweetForm = document.querySelector("#tweetForm");
const tweets = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (evnt) {
    evnt.preventDefault();

    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;

    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(username);
    newTweet.append(bTag, ` - ${tweet}`);

    console.log(newTweet);
    console.log(newTweet.innerHTML);

    tweets.append(newTweet);

});

/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
  this.author  = author;
  this.content = content;
  this.time = timeStamp;
  this.likes = numberOfLikes;
  this.comments = comments;
}

 moreLikes(){
   this.likes++
 }
 moreComments(){
   this.comments.push
 }


}
var fallTweet = new Tweet("Billy", "fall colors", "Sep 20th", 12, "so beautiful!");
var friends = new Tweet("Adam", "boats!", "July 15", 39, "I love the water!!");
var tweet = new Tweet("Kim", "attempt at fame", "Jun 20", 7, "new def");
tweet.moreLikes();
tweet.moreComments();
console.log(tweet);

friends.moreComments();
friends.moreLikes();
console.log(friends);

fallTweet.moreLikes();
fallTweet.moreComments();
console.log(fallTweet);

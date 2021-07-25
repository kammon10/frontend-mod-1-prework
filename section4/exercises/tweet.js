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

var tweet = new Tweet("Kim", "attempt at fame", "Jun 20", 7, "new def");
tweet.moreLikes();
tweet.moreComments();
console.log(tweet);

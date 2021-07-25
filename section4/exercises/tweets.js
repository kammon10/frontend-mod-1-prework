//In the space below, add to the existing skeleton of a Tweet class.

//- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
-// A tweet should be able to increment the numberOfLikes and add to the list of comments.

//Create several instances of your Tweet and log them to the console. Make sure the
//tweet object instances _behave_ as expected.

class tweet(){
  private int numberOfLikes;
  private int comments;

  constructor(author, content, timeStamp, int numberOfLikes, int comments){
    this.author = author;
    this.timeStamp = time;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
}
var steph = new tweet("steph", "2300", 5, "So rad!!");
console.log(steph);

/*
setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "orange";
        setTimeout(() => {
            document.body.style.backgroundColor = "yellow";
        }, 3000)   
    }, 2000)    
}, 1000)
*/

/*
const delayedColorChange = (newColor, delay, doNext) => {
      setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
      }, delay)
}
delayedColorChange("olive", 2000, () => {
    delayedColorChange("orange", 2000, () => {
        delayedColorChange("green", 2000, () => {
            delayedColorChange("red", 2000, () => {
             });
        });
    });
});

searchMovieAPI("amedeus", () => {
    saveToMyDB(movies, () => {

    }, () => {
        //if it doesn't work, run this
    }
    )
}) 


fakeRequestCallBack("books.com", function(){
    console.log("IT worked!");
    console.log(response)

}, function(err) {
    console.log("error", err)
})
*/

const request = fakeRequestPromise("yelp.com/api/coffe");
request.then(() => {
    console.log("It worked")
}).catch(() => {
    console.log("Oh, no, error")
}) 
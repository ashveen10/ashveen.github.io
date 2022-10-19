$(".verifyCrediantial").on('click', (function () {
    console.log("yes");

    window.open("https://trailhead.salesforce.com/en/credentials/verification/")
    // window.location.replace("https://trailhead.salesforce.com/en/credentials/verification/");
    // window.location.href = "https://trailhead.salesforce.com/en/credentials/verification/";
}));


$(".portfolio-wrap").on('click', (function (event) {


    console.log(event);
    var imageSelect = event.target.childNodes[3].value;
    console.log(imageSelect);

}))

$("#myBtn").click(function(){
    $("#myModal").modal();
  });

  $(".twitter").click(function(){
    window.open("https://twitter.com/dasaya_ashveen");
console.log("twitter");
  });

  $(".linkedin").click(function(){
    window.open("https://www.linkedin.com/in/ashveen-dasaya-b2b5911ba");
  });
  $(".github").click(function(){
    window.open("https://github.com/ashveen10");
  });

/*eslint-env node */
(function() {
  "use strict";
  var $ = require("../lib/jquery.go.js");
  $.visit("https://www.youtube.com/", function() {
    $.waitForPage(function() {
      console.log("Loaded YouTube main page!");
      $("input#masthead-search-term").val("test", function() {
        console.log("Entered \"test\" in a search box.");
        $("form#masthead-search").submit(function() {
          console.log("Hit submit button.");
          $.waitForPage(function() {
            console.log("Got search results!");
            $("ol.item-section > li:nth-child(2) > div").click(function() {
              console.log("Clicked on second video.");
              $.waitForElement("#eow-title", function() {
                console.log("Video page is loaded!");
                $("#eow-title").text(function(title) {
                  console.log("Got video title!");
                  console.log("The video title is \"" + title + "\"");
                  $.close();
                });
              });
            });
          });
        });
      });
    });
  });
}());

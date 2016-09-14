var Observable = require("FuseJS/Observable");
var loader_opacity = Observable('1');

var news_items = Observable();  

var TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json';          

var story_promises = [];

fetch(TOP_STORIES_URL)
.then(function(response) { return response.json(); })
.then(function(top_stories) {

    for(var x = 0; x <= 10; x++){
        var story_url = "https://hacker-news.firebaseio.com/v0/item/" + top_stories[x] + ".json";
         
       	var p = fetch(story_url)
        .then(function(response) { return response.json(); })
        .then(function(news) { 
        	news_items.add({
        		title: news.title, 
        		url: news.url,
        		time: news.time
        	}); 
        });  

        story_promises.push(p); 
    }

    Promise.all(story_promises).then(function(){
		loader_opacity.value = 0;
    });

});

module.exports = {
    news_items: news_items,
    loader_opacity: loader_opacity
};
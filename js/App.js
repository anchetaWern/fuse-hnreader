var app_title = 'HN Reader';
var Observable = require("FuseJS/Observable");
var current_page = Observable("news_items");
var current_url = Observable("");
var title = Observable(app_title);

function navigatePage(context) {
	if(context.data.url){
		current_url.value = context.data.url;
		title.value = context.data.title.substring(0, 20) + '...';
		current_page.value = 'web_page';
	}else{
		title.value = app_title;
		current_page.value = 'news_items';
	}
}

module.exports = {
	title: title,
    navigatePage: navigatePage,
    current_page: current_page,
    current_url: current_url
};
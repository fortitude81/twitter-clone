$(document).ready(function() {

$('#tweet-submit, #char-count').hide();

$(document).ready(function() { $("abbr.timeago").timeago(); });
//When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons //should be revealed.

$('textarea').on('click', function() {
	$(this).css('height','5em');
	$('#tweet-submit, #char-count').show();
});

var maxLength = 140;			//countdown characters
$('textarea').keyup(function(){
	var length = $(this).val().length;
	var length = maxLength-length;
	if(length <= 10){
		$('#char-count').css('color', 'red');  //change color
	}
	if (length > maxLength) {					// disable ?????????? not working
        $('#tweet-submit').prop('disabled', true);
    } else {
    	$('#tweet-submit').prop('disabled', false);
    }
});	
     


// $("#tweet-submit").keyup(function () {
// $("#stream").prepend("<li #profile-summary"></li>);

function addNewTweet() {
	var newTweetText = $('.tweet-compose').val();  //new class--tweet-compose
	var newTweet = '<div class="tweet">' +			//making a new div class to be inserted
        '<div class="content">' +					// all his info
        '<img class="avatar" src="img/alagoon.jpg">' +
        '<strong class="fullname">kejcbsn  </strong>' +
        '<span class="username">@kejcbsn</span>' +
        '<p class ="tweet-text">' + newTweetText + '</p>' +
    // '<p class="tweet-text">this text literally shows up</p>'
    	$("abbr.timeago").timeago();

    '</div></div>';
	return newTweet;
}
$('.button').on('click', function () {		//when user clicks tweet button
    console.log("hre");
    $('#stream').prepend(addNewTweet);		//func above gets prepended inside #stream
});		
    
// $(function(){   
//     $(".tweet-actions").hover(function(){
//         $(this).addClass("hover");
//     }, function(){
//         $(this).removeClass("hover");
//     })
// });

$(function () {
    $("div, .tweet-actions").hover(function(){
            $(".tweet-actions").css({"opacity":"1.0"})   
        },
        function(){
            $(".tweet-actions").css({"opacity":"0"}) 
            })  
        });


});


$( document ).ready(function() {
	
	shownList = []

	$("#textareaID").on('input', function (){
		searchKeyword();
	});

	$.getJSON("js/keyword_lib.json", function(data){
		jsonList = data;
	});

	function searchKeyword(){
		textareaValue = $("#textareaID").val();	
		$.each(jsonList, function(key, value){
			if(textareaValue.indexOf(value.key) >= 0 && $.inArray(value.key, shownList) < 0){
				shownList.push(value.key)
				activateGif(value.gif, value.duration)
			}
		});
	}

	function activateGif(gif, duration){
		console.log("activating" + gif);
		$('#support-img').css("background-image", "url(gif/"+gif+")");
		setTimeout(restoreImage, duration);
	}
	
	function restoreImage(){
		console.log("restoring image")
		$('#support-img').css("background-image", "url(https://toggl.com/app/images/help/support.5fef2ac9.png)");
	}
});


$( document ).ready(function() {
	
	shownList = []
	theaterMode = true

	$("#textareaID").on('input', function (){
		searchKeyword();
	});

	$.getJSON("js/keyword_lib.json", function(data){
		jsonList = data;
	});

	function searchKeyword(){
		textareaValue = $("#textareaID").val();	
		$.each(jsonList, function(key, value){
			if(textareaValue.toLowerCase().indexOf(value.key.toLowerCase()) >= 0 && $.inArray(value.key, shownList) < 0){
				// shownList.push(value.key)
				activateGif(value.gif, value.duration * 5)
			}
		});
	}

	function activateGif(gif, duration){
		if(theaterMode){
			$('#easter-egg').css("background-image", "url(gif/"+gif+")");
			$('#easter-egg').css("display", "block");
		}else{
			$('#support-img').css("background-image", "url(gif/"+gif+")");
		}
		setTimeout(restoreImage, duration);
	}
	
	function restoreImage(){
		if(theaterMode){
			$('#easter-egg').css("display", "none");
			$('#easter-egg').css("background-image", "");
		}else{
			$('#support-img').css("background-image", "url(https://toggl.com/app/images/help/support.5fef2ac9.png)");
		}
	}
});


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
				activateGif(value.gif)
			}
		});
	}

	function activateGif(gif){
		console.log("activating" + gif);
	}
});


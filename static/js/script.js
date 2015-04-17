$( document ).ready(function() {

	$("#textareaID").on('input', function (){
		searchKeyword();
	});

	$.getJSON("js/keyword_lib.json", function(data){
		jsonList = data;
	});

	function searchKeyword(){
		textareaValue = $("#textareaID").val();	
		$.each(jsonList, function(key, value){
			if(textareaValue.indexOf(value.key) >= 0){
				activateGif(value.gif)
			}
		});
	}

	function activateGif(gif){
		console.log("activating" + gif);
	}
});


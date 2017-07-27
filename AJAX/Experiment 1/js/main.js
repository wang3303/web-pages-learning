var btn = document.getElementById("btn");

var animal = document.getElementById("animal");

var counter = 1;

btn.addEventListener("click",function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+counter+++'.json');
	ourRequest.onload = function(){
		var data = JSON.parse(ourRequest.responseText);
		render(data);
	};
	ourRequest.send()
	if (counter >3){
		btn.classList.add("hide-me")
	}
});

function render(data){
	var string = "";
	for(i = 0;i<data.length;i++){
		string += "<p>"+data[i].name+"is a "+data[i].species+" that likes ";
		for(ii = 0;ii< data[i].foods.likes.length;ii++){
			if(ii == 0)
				string += data[i].foods.likes[ii];
			else string +=" and " +data[i].foods.likes[ii];
		}
		
		string += " and dislikes ";
		
		for(ii = 0;ii< data[i].foods.dislikes.length;ii++){
			if(ii == 0)
				string += data[i].foods.dislikes[ii];
			else string +=" and " +data[i].foods.dislikes[ii];
		}
		
		string += ".<\p>";
	}
	
	
	
	animal.insertAdjacentHTML('beforeend',string);
	
}
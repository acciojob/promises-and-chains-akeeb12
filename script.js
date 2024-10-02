//your JS code here. If required.
document.getElementById('myform').addEventListener('submit', function (event) {
event.preventDefault();

	const name = document.getElementById('name').value;
	const age = document.getElementById('age').value;

	if(!name || !age){
		alert("Please fill out all the fileds.!");
		return;
	}

	new Promise ((resolve, reject) =>{
		setTimeout() =>{
			if(age >= 18){
				resolve (`Welcome, ${name} You can vote.`);
			}else{
				reject (`Oh Sorry ${name} you're not old enough to vote.`);
			}
		}, 4000);
	});

myPromise.then(function (message) {
	alert(message);
}).catch(function (message) {
	alert(message);
});
});





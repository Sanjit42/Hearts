var loginName = function(){
	var playerName = document.getElementById('user_name').value;
	document.getElementById('user_name').value = '';
	requestToLogin(user_name);
};


var requestToLogin = function(userName){
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
	    if (req.readyState == 4 && req.status == 200) {
	        var comments = JSON.parse(req.responseText);
	    };
	};
	req.open('POST', 'login_user', true);
	req.send(userName);
}
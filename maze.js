window.onload = function() {
	$("start").onclick = startgame;
	$("end").onmouseover = endgame;
	$("boundary1").onmouseover = changecolour;
	var changeall = $$("div#maze div.oundary");
	for (var i = 0; i < b.length; i++) {
		b[i].onmouseover = changecolour;}
};

function changecolour() {
	$("boundary1").addClassName("youlose");
	var b = $$("div#maze div.boundary");
	for (var i= 0; i < b.length; i++) {
		b[i].addClassName("youlose");}
	lose = true;
}

var lose = false;

function startgame() {
	var b = $$("dive#maze div.boundary");
	for (var i= 0; i < b.length; i++) {
		b[i].addClassName("youlose");}
	lose = false;
}

function endgame() {
	if (lose === true) {
		alert("You lose! :/"); }
	else {
		alert("Yay! You won! :D"); }
}

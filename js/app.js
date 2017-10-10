(function() {
	// function byId(id) {
	// 	return document.getElementById(id);
	// }
  //
	// function formatTens(n) {
	// 	// format integers to have at least two digits
	// 	return (n < 10) ? '0'+n : ''+n;
	// }
  //
	// // initialize units
	// for (var key in countdown) {
	// 	if (countdown.hasOwnProperty(key)) {
	// 		var unit = byId('units-'+key.toLowerCase());
	// 		if (unit) {
	// 			unit.value = countdown[key];
	// 			unit.checked = countdown[key] & countdown.DEFAULTS;
	// 		}
	// 	}
	// }
  //
	// // Mayan Calendar: 1356088271111
  //
	// // https://groups.google.com/group/alt.hypertext/msg/06dad279804cb3ba?dmode=source
	// var DEMO_MS = 1507939200,
	// 	DEMO_PAST = 'O embarque aconteceu há ',
	// 	DEMO_FUTURE = 'O embarque acontecerá em ';
  //
	// // adjust initial demo time for local timezone
	// byId('hours').value -= new Date(DEMO_MS).getTimezoneOffset() / 60;
  //
	// function update() {
	// 	var units = ~countdown.ALL,
	// 		chx = byId('countdown-units').getElementsByTagName('input'),
	// 		empty = byId('empty-label').value || null,
	// 		max = +(byId('max-units').value),
	// 		digits = +(byId('frac-digits').value);
  //
	// 	for (var i=0, count=chx.length; i<count; i++) {
	// 		if (chx[i].checked) {
	// 			units |= +(chx[i].value);
	// 		}
	// 	}
  //
	// 	var yyyy = +(2017),
	// 		MM = +(10)-1,
	// 		dd = +(14),
	// 		HH = +(0),
	// 		mm = +(0),
	// 		ss = +(0),
	// 		fff = +(0);
  //
	// 	var start = new Date(yyyy, MM, dd, HH, mm, ss, fff),
	// 		ts = countdown(start, null, units, max, digits);
  //
	// 	var counter = byId('counter'),
	// 		timespan = byId('timespan'),
	// 		msg = ts.toHTML('strong', empty);
  //
	// 	if (start.getTime() === DEMO_MS) {
	// 		msg = (ts.value > 0) ?
	// 			DEMO_PAST+' '+msg+' ago!' :
	// 			DEMO_FUTURE+' in '+msg+'!';
	// 	}
  //
	// 	counter.innerHTML = msg;
	// 	timespan.innerHTML = JSON.stringify(ts, null, '  ');
  //
	// 	// update timezone label
	// 	var tz = start.getTimezoneOffset();
	// 	if (tz) {
	// 		var tzh = Math.floor(Math.abs(tz) / 60),
	// 			tzm = (Math.abs(tz) % 60);
	// 		byId('timezone').innerHTML = 'UTC'+((tz > 0) ? '-' : '+')+formatTens(tzh)+':'+formatTens(tzm);
  //
	// 	} else {
	// 		byId('timezone').innerHTML = 'UTC';
	// 	}
  //
	// 	requestAnimationFrame(update, timespan.parentNode);
	// }
	// update();
})();

$(document).ready(function(){
  $("#counter").html(countdown( new Date(2017, 10, 14) ).toString());
});

function myDate() {
  var d = new Date();
  var n = d.getDate()
  document.getElementById("date").innerHTML = n;
}

function myDay() {
  var d = new Date();
  var n = d.getDay()
  document.getElementById("day").innerHTML = n;
}

function myYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
}

function myHour() {
  var d = new Date();
  var n = d.getHours();
  document.getElementById("hour").innerHTML = n;
}

function myMilliSeconds() {
  var d = new Date();
  var n = d.getMilliseconds();
  document.getElementById("millisenconds").innerHTML = n;
}

function myMinute() {
  var d = new Date();
  var n = d.getMinutes();
  document.getElementById("minute").innerHTML = n;
}

function myMonth() {
  var d = new Date();
  var n = d.getMonth();
  document.getElementById("month").innerHTML = n;
}

function mySeconds() {
  var d = new Date();
  var n = d.getSeconds();
  document.getElementById("seconds").innerHTML = n;
}

function myTime() {
  var d = new Date();
  var n = d.getTime();
  document.getElementById("time").innerHTML = n;
}

function myTimeZone() {
  var d = new Date();
  var n = d.getTimezoneOffset();
  document.getElementById("timezone").innerHTML = n;
}

function myUTCDate() {
  var d = new Date();
  var n = d.getUTCDate();
  document.getElementById("utcdate").innerHTML = n;
}

function myUTDDay() {
  var d = new Date();
  var n = d.getUTCDay();
  document.getElementById("utdday").innerHTML = n;
}

function myUTCYear() {
  var d = new Date();
  var n = d.getUTCFullYear();
  document.getElementById("utcyear").innerHTML = n;
}

function myUTCHours() {
  var d = new Date();
  var n = d.getUTCHours();
  document.getElementById("utchours").innerHTML = n;
}

function myUTCMilliseconds() {
  var d = new Date();
  var n = d.getUTCMilliseconds();
  document.getElementById("utcmilli").innerHTML = n;
}

function myUTCMinutes() {
  var d = new Date();
  var n = d.getUTCMinutes();
  document.getElementById("utcminutes").innerHTML = n;
}

function myUTCMonth() {
  var d = new Date();
  var n = d.getUTCMonth();
  document.getElementById("utcmonth").innerHTML = n;
}

function myUTCSeconds() {
  var d = new Date();
  var n = d.getUTCSeconds();
  document.getElementById("utcseconds").innerHTML = n;
}

function myNow() {
  var n = Date.now();
  document.getElementById("now").innerHTML = n;
}

function myParse() {
  var d = Date.parse("March 21, 2012");
  document.getElementById("parse").innerHTML = d;
}

Date.prototype.myMet = function() {
  if (this.getMonth() == 0){this.myProp = "January"};
  if (this.getMonth() == 1){this.myProp = "February"};
  if (this.getMonth() == 2){this.myProp = "March"};
  if (this.getMonth() == 3){this.myProp = "April"};
  if (this.getMonth() == 4){this.myProp = "May"};
  if (this.getMonth() == 5){this.myProp = "June"};
  if (this.getMonth() == 6){this.myProp = "July"};
  if (this.getMonth() == 7){this.myProp = "August"};
  if (this.getMonth() == 8){this.myProp = "September"};
  if (this.getMonth() == 9){this.myProp = "October"};
  if (this.getMonth() == 10){this.myProp = "November"};
  if (this.getMonth() == 11){this.myProp = "December"};
};

function myPrototype() {
  var d = new Date();
  d.myMet();
  document.getElementById("prototype").innerHTML = d.myProp;
}

function mySetDate() {
  var d = new Date();
  d.setDate(15);
  document.getElementById("setdate").innerHTML = d;
}

function mySetYear() {
  var d = new Date();
  d.setFullYear(2020);
  document.getElementById("setyear").innerHTML = d;
}

function mySetHours() {
  var d = new Date();
  d.setHours(15);
  document.getElementById("sethours").innerHTML = d;
}

function mySetMillisencods() {
  var d = new Date();
  d.setMilliseconds(192);
  var n = d.getMilliseconds();
  document.getElementById("setmilli").innerHTML = n;
}

function mySetMinutes() {
  var d = new Date();
  d.setMinutes(17);
  document.getElementById("setminutes").innerHTML = d;
}


function mySetMonth() {
  var d = new Date();
  d.setMonth(4);
  document.getElementById("setmonth").innerHTML = d;
}

function mySetSeconds() {
  var d = new Date();
  d.setSeconds(35);
  document.getElementById("setseconds").innerHTML = d;
}

function mySetTime() {
  var d = new Date();
  d.setTime(1332403882588);
  document.getElementById("settime").innerHTML = d;
}

function mySetUTCDate() {
  var d = new Date();
  d.setUTCDate(15);
  document.getElementById("setutcdate").innerHTML = d;
}

function mySetUTCYear() {
  var d = new Date();
  d.setUTCFullYear(2020);
  document.getElementById("setutcyear").innerHTML = d;
}

function mySetUTCHours() {
  var d = new Date();
  d.setUTCHours(15);
  document.getElementById("setutchours").innerHTML = d;
}

function mySetUTCMillisenconds() {
  var d = new Date();
  d.setUTCMilliseconds(192);
  var n = d.getUTCMilliseconds();
  document.getElementById("setutcmilli").innerHTML = n;
}

function mySetUTCMinutes() {
  var d = new Date();
  d.setUTCMinutes(17);
  document.getElementById("setutcminutes").innerHTML = d;
}

function mySetUTCMonth() {
  var d = new Date();
  d.setUTCMonth(4);
  document.getElementById("setutcmonth").innerHTML = d;
}

function mySetUTCSeconds() {
  var d = new Date();
  d.setUTCSeconds(35);
  document.getElementById("setutcseconds").innerHTML = d;
}

function myDateString() {
  var d = new Date();
  var n = d.toDateString();
  document.getElementById("datestring").innerHTML = n;
}

function myISOString() {
  var d = new Date();
  var n = d.toISOString();
  document.getElementById("isostring").innerHTML = n;
}

function myToJSON() {
  var d = new Date();
  var n = d.toJSON();
  document.getElementById("tojson").innerHTML = n;
}

function myToLocaleDate() {
  var d = new Date();
  var n = d.toLocaleDateString();
  document.getElementById("tolocaledate").innerHTML = n;
}

function myToLocaleTime() {
  var d = new Date();
  var n = d.toLocaleTimeString();
  document.getElementById("tolocaletime").innerHTML = n;
}

function myTolocaleString() {
  var d = new Date();
  var n = d.toLocaleString();
  document.getElementById("tolocalestring").innerHTML = n;
}

function myToString() {
  var d = new Date();
  var n = d.toString();
  document.getElementById("tostring").innerHTML = n;
}




function checker(elm, type) {  if (elm != undefined) {    if (type == 'src') {     return elm.getAttribute('src');    }	if (type == 'click') {     elm.click();    }	if (type == 'href') {      return elm.href;    }    if (type == 'text') {      return elm.innerText.trim().replace(/,/g, '').replace(/\\n/g, ' \n ');    }    if (type == 'next') {      return elm;    }  } else {    return '';  }}

function reg(elm, n){if(elm != null){return elm[n];}else{return '';}}

var arr = [];
var d = document;
var ebcn = (ob,nm)=>{return ob.getElementsByClassName(nm);};
var ebtn = (ob,nm)=>{return ob.getElementsByTagName(nm);};

var alsoViewedCont = ebcn(d,'pv-profile-section__section-info section-info browsemap mt4')[0];

var alsoViewedList = ebcn(alsoViewedCont, 'pv-browsemap-section__member-container mt4');

Array.from(alsoViewedList).forEach(itm=>{
	arr.push(reg(/(?<=in\/).+?(?=\/)/.exec(checker(ebtn(itm, 'a')[0],'href')),0))
});

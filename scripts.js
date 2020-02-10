$(document).ready(function() {
	$('.input').on('keyup', function(){
		start1();
	});
	
	function start1() {
		var text = $('.input').val();
		text = text.replace(/(а)/gi,"[аa]");
		text = text.replace(/(б(?!\]))/gi,"[бb6]");
		text = text.replace(/(в(?!\]))/gi,"[вb]");
		text = text.replace(/(г)/gi,"[гr]");
		text = text.replace(/(д)/gi,"[дd]");
		text = text.replace(/(е)/gi,"[еe]");
		text = text.replace(/(ё)/gi,"[ёеe]");
		text = text.replace(/(ж)/gi,"[жj]");
		text = text.replace(/(з(?!\]))/gi,"[з3]");
		text = text.replace(/(и(?!\]))/gi,"[иui]");
		text = text.replace(/(й)/gi,"[йиu]");
		text = text.replace(/(к)/gi,"[кk]");
		text = text.replace(/(л)/gi,"[лl]");
		text = text.replace(/(м)/gi,"[мm]");
		text = text.replace(/(н)/gi,"[нhn]");
		text = text.replace(/(о(?!\]))/gi,"[оo0]");
		text = text.replace(/(п)/gi,"[пn]");
		text = text.replace(/(р)/gi,"[рp]");
		text = text.replace(/(с(?!\]))/gi,"[сcs]");
		text = text.replace(/(т)/gi,"[тt]");
		text = text.replace(/(у)/gi,"[уy]");
		text = text.replace(/(ф)/gi,"ф");
		text = text.replace(/(х)/gi,"[хx]");
		text = text.replace(/(ц)/gi,"[цu]");
		text = text.replace(/(ч)/gi,"ч");
		text = text.replace(/(ш)/gi,"ш");
		text = text.replace(/(щ)/gi,"щ");
		text = text.replace(/(ъ)/gi,"ъ");
		text = text.replace(/(ы)/gi,"(ы|bi)");
		text = text.replace(/(ь)/gi,"[ьb]");
		text = text.replace(/(э)/gi,"[эеe]");
		text = text.replace(/(ю)/gi,"(ю|io)");
		text = text.replace(/(я)/gi,"я");
		text = text.replace(/(0(?!\]))/gi,"[0оo]");
		text = text.replace(/(1(?!\]))/gi,"[1i]");
		text = text.replace(/(2(?!\]))/gi,"[2z]");
		text = text.replace(/(3(?!\]))/gi,"[3з]");
		text = text.replace(/(5(?!\]))/gi,"[5s]");
		text = text.replace(/(6(?!\]))/gi,"[6бb]");
		text = text.replace(/(8(?!\]))/gi,"[8вb]");
		text = text.replace(/([A-Z])/gi,"<span class='lat'>$1</span>");
		text = text.replace(/([А-Яё])/gi,"<span class='cyr'>$1</span>");
		text = text.replace(/([0-9])/gi,"<span class='nam'>$1</span>");
		text = text.replace(/(\s(?!class\=))/gi,"<span class='one'>($1)?</span>");
		$('.output').html(text);
	}	
	start1();
});
$(document).ready(function() {
	$('.input2').on('keyup', function(){
		start2();
	});
	
	function start2() {
		var text = $('.input2').val();
		text = text.replace(/(a)/gi,"[aа]");
		text = text.replace(/(b(?!\]))/gi,"[bбь6]");
		text = text.replace(/(s)/gi,"[sс]");
		text = text.replace(/(c)/gi,"[csс]");
		text = text.replace(/(d)/gi,"[dд]");
		text = text.replace(/(e)/gi,"[eе]");
		text = text.replace(/(f)/gi,"[fф]");
		text = text.replace(/(g)/gi,"[gг]");
		text = text.replace(/(h)/gi,"[hхн]");
		text = text.replace(/(u)/gi,"[uи]");
		text = text.replace(/(i)/gi,"[iuи]");
		text = text.replace(/(j)/gi,"[jж]");
		text = text.replace(/(k)/gi,"[kк]");
		text = text.replace(/(l)/gi,"[lл]");
		text = text.replace(/(m)/gi,"[mм]");
		text = text.replace(/(n)/gi,"[nhн]");
		text = text.replace(/(o(?!\]))/gi,"[oо0]");
		text = text.replace(/(p)/gi,"[pрп]");
		text = text.replace(/(q)/gi,"q");
		text = text.replace(/(r)/gi,"[rгр]");
		text = text.replace(/(t)/gi,"[tт]");
		text = text.replace(/(v)/gi,"[vв]");
		text = text.replace(/(w)/gi,"[wв]");
		text = text.replace(/(x)/gi,"[xhх]");
		text = text.replace(/(y)/gi,"[yу]");
		text = text.replace(/(z(?!\]))/gi,"[zз3]");
		text = text.replace(/(0(?!\]))/gi,"[0оo]");
		text = text.replace(/(1(?!\]))/gi,"[1i]");
		text = text.replace(/(2(?!\]))/gi,"[2z]");
		text = text.replace(/(3(?!\]))/gi,"[3з]");
		text = text.replace(/(5(?!\]))/gi,"[5s]");
		text = text.replace(/(6(?!\]))/gi,"[6бb]");
		text = text.replace(/(8(?!\]))/gi,"[8вb]");
		text = text.replace(/([A-Z])/gi,"<span class='lat'>$1</span>");
		text = text.replace(/([А-Яё])/gi,"<span class='cyr'>$1</span>");
		text = text.replace(/([0-9])/gi,"<span class='nam'>$1</span>");
		text = text.replace(/(\s(?!class\=))/gi,"<span class='one'>($1)?</span>");
		$('.output2').html(text);
	}	
	start2();
});
$(document).ready(function() {
	$('.input3').on('keyup', function(){
		start3();
	});
	
	function start3() {
		var text = $('.input3').val();
		text = text.replace(/([A-Z])/gi,"<span class='lat'>$1</span>");
		text = text.replace(/([А-Яё])/gi,"<span class='cyr'>$1</span>");
		text = text.replace(/([0-9])/gi,"<span class='nam'>$1</span>");
		text = text.replace(/(\?\=\.\*)/gi,"<span class='one'>$1</span>");
		text = text.replace(/(\?\!\.\*)/gi,"<span class='two'>$1</span>");
		text = text.replace(/\|/gi,"<span class='tri'>|</span>");
		text = text.replace(/\(/gi,"<span class='fo'>(</span>");
		text = text.replace(/\)/gi,"<span class='fo'>)</span>");
		text = text.replace(/(\s(?!class\=))/gi,"<span class='one'>$1</span>");
		$('.output3').html(text);
	}	
	start3();
});

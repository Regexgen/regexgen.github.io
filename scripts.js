$(document).ready(function() {
	$('.input').on('keyup', function(){
		start1();
	});
	
	function start1() {
		var text = $('.input').val();
		text = text.replace(/([A-Z])/gi,"<span class='lat'>$1</span>");
		text = text.replace(/([0-9])/gi,"<span class='nam'>$1</span>");
		text = text.replace(/(а)/gi,"[<span class='cyr'>а</span><span class='lat'>a</span>]");
		text = text.replace(/(б)/gi,"[<span class='cyr'>б</span><span class='lat'>b</span><span class='nam'>6</span>]");
		text = text.replace(/(в)/gi,"[<span class='cyr'>в</span><span class='lat'>b</span>]");
		text = text.replace(/(г)/gi,"[<span class='cyr'>г</span><span class='lat'>r</span>]");
		text = text.replace(/(д)/gi,"[<span class='cyr'>д</span><span class='lat'>d</span>]");
		text = text.replace(/(е)/gi,"[<span class='cyr'>е</span><span class='lat'>e</span>]");
		text = text.replace(/(ж)/gi,"[<span class='cyr'>ж</span><span class='lat'>j</span>]");
		text = text.replace(/(з)/gi,"[<span class='cyr'>з</span><span class='nam'>3</span>]");
		text = text.replace(/(и)/gi,"[<span class='cyr'>и</span><span class='lat'>ui</span>]");
		text = text.replace(/(й)/gi,"[<span class='cyr'>йи</span><span class='lat'>u</span>]");
		text = text.replace(/(к)/gi,"[<span class='cyr'>к</span><span class='lat'>k</span>]");
		text = text.replace(/(л)/gi,"[<span class='cyr'>л</span><span class='lat'>l</span>]");
		text = text.replace(/(м)/gi,"[<span class='cyr'>м</span><span class='lat'>m</span>]");
		text = text.replace(/(н)/gi,"[<span class='cyr'>н</span><span class='lat'>hn</span>]");
		text = text.replace(/(о)/gi,"[<span class='cyr'>о</span><span class='lat'>o</span><span class='nam'>0</span>]");
		text = text.replace(/(п)/gi,"[<span class='cyr'>п</span><span class='lat'>n</span>]");
		text = text.replace(/(р)/gi,"[<span class='cyr'>р</span><span class='lat'>p</span>]");
		text = text.replace(/(с)/gi,"[<span class='cyr'>с</span><span class='lat'>cs</span>]");
		text = text.replace(/(т)/gi,"[<span class='cyr'>т</span><span class='lat'>t</span>]");
		text = text.replace(/(у)/gi,"[<span class='cyr'>у</span><span class='lat'>y</span>]");
		text = text.replace(/(ф)/gi,"<span class='cyr'>ф</span>");
		text = text.replace(/(х)/gi,"[<span class='cyr'>х</span><span class='lat'>x</span>]");
		text = text.replace(/(ц)/gi,"[<span class='cyr'>ц</span><span class='lat'>u</span>]");
		text = text.replace(/(ч)/gi,"<span class='cyr'>ч</span>");
		text = text.replace(/(ш)/gi,"<span class='cyr'>ш</span>");
		text = text.replace(/(щ)/gi,"<span class='cyr'>щ</span>");
		text = text.replace(/(ъ)/gi,"<span class='cyr'>ъ</span>");
		text = text.replace(/(ы)/gi,"(<span class='cyr'>ы</span>|<span class='lat'>bi</span>)");
		text = text.replace(/(ь)/gi,"[<span class='cyr'>ь</span><span class='lat'>b</span>]");
		text = text.replace(/(э)/gi,"[<span class='cyr'>эе</span><span class='lat'>e</span>]");
		text = text.replace(/(ю)/gi,"(<span class='cyr'>ю</span>|<span class='lat'>io</span>)");
		text = text.replace(/(я)/gi,"<span class='cyr'>я</span>");
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
		text = text.replace(/(b)/gi,"[bб6]");
		text = text.replace(/(c)/gi,"[csс");
		text = text.replace(/(d)/gi,"[dд]");
		text = text.replace(/(e)/gi,"[eе");
		text = text.replace(/(f)/gi,"[fф]");
		text = text.replace(/(g)/gi,"[gг]");
		text = text.replace(/(h)/gi,"[hхн]");
		text = text.replace(/(i)/gi,"[iuи]");
		text = text.replace(/(j)/gi,"[jж]");
		text = text.replace(/(k)/gi,"[kк]");
		text = text.replace(/(l)/gi,"[lл]");
		text = text.replace(/(m)/gi,"[mм]");
		text = text.replace(/(n)/gi,"[nhн]");
		text = text.replace(/(o)/gi,"[oо0]");
		text = text.replace(/(p)/gi,"[pрп]");
		text = text.replace(/(q)/gi,"q");
		text = text.replace(/(r)/gi,"[rгр]");
		text = text.replace(/(s)/gi,"[sс]");
		text = text.replace(/(t)/gi,"[tт]");
		text = text.replace(/(u)/gi,"[uи]");
		text = text.replace(/(v)/gi,"[vв]");
		text = text.replace(/(w)/gi,"[wв]");
		text = text.replace(/(x)/gi,"[xhх]");
		text = text.replace(/(y)/gi,"[yу]");
		text = text.replace(/(z)/gi,"[zз3]");
		text = text.replace(/([A-Z])/gi,"<span class='lat'>$1</span>");
		text = text.replace(/([А-Я])/gi,"<span class='cyr'>$1</span>");
		text = text.replace(/([0-9])/gi,"<span class='nam'>$1</span>");
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
		text = text.replace(/([А-Я])/gi,"<span class='cyr'>$1</span>");
		text = text.replace(/([0-9])/gi,"<span class='nam'>$1</span>");
		text = text.replace(/(\?\=\.\*)/gi,"<span class='one'>$1</span>");
		text = text.replace(/(\?\!\.\*)/gi,"<span class='two'>$1</span>");
		text = text.replace(/\|/gi,"<span class='tri'>|</span>");
		text = text.replace(/\(/gi,"<span class='fo'>(</span>");
		text = text.replace(/\)/gi,"<span class='fo'>)</span>");
		$('.output3').html(text);
	}	
	start3();
});

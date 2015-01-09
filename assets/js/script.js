$( document ).ready(function() {
	$('.container2').hide();
	$('.container3').hide();
	$(".pop_up_candy_store").hide();

	var lollies = 2000000;
	var lollies_level = 1;
	var autoclicker_level = 1;

	var candy_store = 0;

	var upgrade_to_gummy_bear = 0;
	var autoclicker_gummybear_level = 1;
	var gummy_bears = 0;
	var gummybear_level = 1;
	    
	$(".lollipop_amount").html("<h2>Klik op de lollie<h2>");
	$(".gummybear_amount").html("<h2>Klik op de Gummy Bear<h2>");
	$(".candystore_amount").html("<h2>Klik op de Winkel<h2>");
	$(".testen").html("<p>Je hebt " + lollies + " lollies<p>");

	function autoclicker (lvl,time) {
		auto = setInterval(function(){
				lollies = lollies + lvl;
				$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
				$(".testen").html("<p>Je hebt " + lollies + " lollies</p>");
		} ,time);
	}

	function gummybear_autoclicker (lvl,time) {
		auto = setInterval(function(){
				gummy_bears = gummy_bears + lvl;
				$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
		} ,time);
	}

////////////////////////////// LOLLIES START////////////////////////////////////////
$(".lollipop_clicker").click(function(){
	switch(lollies_level) {
	case 1:
	    lollies = lollies + 1;
		$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies<h2>");
	    break;
	case 2:
	    lollies = lollies + 2;
		$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	case 3:
	    lollies = lollies + 3;
	   	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	case 4:
	    lollies = lollies + 4;
	   	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	case 5:
	    lollies = lollies + 5;
	   	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	case 6:
	    lollies = lollies + 10;
	   	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	case 7:
	    lollies = lollies + 20;
	   	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	case 8:
	    lollies = lollies + 50;
	   	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	case 9:
	    lollies = lollies + 100;
	   	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	case 10:
	    lollies = lollies + 500;
	   	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	case 11:
	    lollies = lollies + 1000;
	   	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
	    break;
	}
});

$(".auto_click").click(function(){
	if (autoclicker_level == 1){
		if (lollies >= 100){
			lollies = lollies - 100;
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
			$(".auto_click").html("upgrade autoclicker [200]");
			autoclicker(1,1000);
			autoclicker_level = 2;
		}
	} else if (autoclicker_level == 2){
		if (lollies >= 200){	
			lollies = lollies - 200;
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
			$(".auto_click").html("upgrade autoclicker [500]");
			window.clearInterval(auto);
			autoclicker(1,500);
			autoclicker_level = 3;
		}
		} else if (autoclicker_level == 3){
		if (lollies >= 500){	
			lollies = lollies - 500;
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
			$(".auto_click").html("upgrade autoclicker [1000]");
			window.clearInterval(auto);
			autoclicker(5,500);
			autoclicker_level = 4;
		}
	} else if (autoclicker_level == 4){
		if (lollies >= 1000){	
			lollies = lollies - 1000;
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
			$(".auto_click").html("upgrade autoclicker [2000]");
			window.clearInterval(auto);
			autoclicker(20,500);
			autoclicker_level = 5;
		}
	} else if (autoclicker_level == 5){
		if (lollies >= 2000){	
			lollies = lollies - 2000;
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
			$(".auto_click").html("upgrade autoclicker [10.000]");
			window.clearInterval(auto);
			autoclicker(10,100);
			autoclicker_level = 6;
		}
	} else if (autoclicker_level == 6){
		if (lollies >= 10000){	
			lollies = lollies - 10000;
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
			$(".auto_click").html("upgrade autoclicker [100.000]");
			window.clearInterval(auto);
			autoclicker(1,1);
			autoclicker_level = 7;
		}
	} else if (autoclicker_level == 7){
		if (lollies >= 100000){	
			lollies = lollies - 100000;
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
			$(".auto_click").html("upgrade autoclicker [1.000.000]");
			window.clearInterval(auto);
			autoclicker(11,1);
			autoclicker_level = 8;
		}
	} else if (autoclicker_level == 8){
		if (lollies >= 1000000){	
			lollies = lollies - 1000000;
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
			$(".auto_click").html("<strike>Autoclicker fully upgraded</strike>");
			window.clearInterval(auto);
			autoclicker(21,1);
			autoclicker_level = 9;
		}
	}
});

$(".multiply").click(function(){
	if (lollies_level == 1) {
		if (lollies >= 20) {
			lollies = lollies - 20;
			lollies_level = 2;
			$(".multiply").html('klik keer 3 [50]');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	} else if (lollies_level == 2) {
		if (lollies >= 50) {
			lollies = lollies - 50;
			lollies_level = 3;
			$(".multiply").html('klik keer 4 [100]');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	} else if (lollies_level == 3) {
		if (lollies >= 100) {
			lollies = lollies - 100;
			lollies_level = 4;
			$(".multiply").html('klik keer 5 [200]');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	} else if (lollies_level == 4) {
		if (lollies >= 200) {
			lollies = lollies - 200;
			lollies_level = 5;
			$(".multiply").html('klik keer 10 [500]');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	} else if (lollies_level == 5) {
		if (lollies >= 500) {
			lollies = lollies - 500;
			lollies_level = 6;
			$(".multiply").html('klik keer 20 [1000]');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	} else if (lollies_level == 6) {
		if (lollies >= 1000) {
			lollies = lollies - 1000;
			lollies_level = 7;
			$(".multiply").html('klik keer 50 [10.000]');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	} else if (lollies_level == 7) {
		if (lollies >= 10000) {
			lollies = lollies - 10000;
			lollies_level = 8;
			$(".multiply").html('klik keer 100 [50.000]');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	} else if (lollies_level == 8) {
		if (lollies >= 50000) {
			lollies = lollies - 50000;
			lollies_level = 9;
			$(".multiply").html('klik keer 500 [500.000]');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	} else if (lollies_level == 9) {
		if (lollies >= 500000) {
			lollies = lollies - 500000;
			lollies_level = 10;
			$(".multiply").html('klik keer 1000 [1.000.000]');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	} else if (lollies_level == 10) {
		if (lollies >= 1000000) {
			lollies = lollies - 1000000;
			lollies_level = 11;
			$(".multiply").html('<strike>multiplier fully upgraded</strike>');
			$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
		}
	}
});
////////////////////////////// LOLLIES END//////////////////////////////////////////

////////////////////////////// GUMMY BEAR START////////////////////////////////////////
$(".gummmybear_clicker").click(function(){
	switch(gummybear_level) {
    case 1:
        gummy_bears = gummy_bears + 1;
		$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
        break;
    case 2:
        gummy_bears = gummy_bears + 2;
		$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
        break;
	case 3:
		gummy_bears = gummy_bears + 3;
		$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
        break;
    }
});

// $(".auto_click_gummybear").click(function(){
// 	if (autoclicker_gummybear_level == 1){
// 		if (gummy_bears >= 100){
// 			gummy_bears = gummy_bears - 100;
// 			$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
// 			$(".auto_click_gummybear").html("upgrade autoclicker [200 Gummy Bears]");
// 			gummybear_autoclicker(1,1000);
// 			autoclicker_gummybear_level = 2;
// 		}
// 	} else if (autoclicker_gummybear_level == 2){
// 		if (gummy_bears >= 200){	
// 			gummy_bears = gummy_bears - 200;
// 			$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
// 			$(".auto_click_gummybear").html("upgrade autoclicker [200 Gummy bears]");
// 			window.clearInterval(auto);
// 			gummybear_autoclicker(2,1000);
// 			autoclicker_gummybear_level = 3;
// 		}
// 	} else if (autoclicker_gummybear_level == 3){
// 		if (gummy_bears >= 500){	
// 			gummy_bears = gummy_bears - 500;
// 			$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
// 			$(".auto_click_gummybear").html("upgrade autoclicker [500 Gummy bears]");
// 			window.clearInterval(auto);
// 			gummybear_autoclicker(5,1000);
// 			autoclicker_gummybear_level = 4;
// 		}
// 	} else if (autoclicker_gummybear_level == 4){
// 		if (gummy_bears >= 1000){	
// 			gummy_bears = gummy_bears - 1000;
// 			$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
// 			$(".auto_click_gummybear").html("upgrade autoclicker [1000 Gummy bears]");
// 			window.clearInterval(auto);
// 			gummybear_autoclicker(10,1000);
// 			autoclicker_gummybear_level = 5;
// 		}
// 	} else if (autoclicker_gummybear_level == 5){
// 		if (gummy_bears >= 10000){	
// 			gummy_bears = gummy_bears - 10000;
// 			$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
// 			$(".auto_click_gummybear").html("upgrade autoclicker [10.000 Gummy bears]");
// 			window.clearInterval(auto);
// 			gummybear_autoclicker(20,1000);
// 			autoclicker_gummybear_level = 6;
// 		}
// 	} else if (autoclicker_gummybear_level == 6){
// 		if (gummy_bears >= 100000){	
// 			gummy_bears = gummy_bears - 100000;
// 			$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
// 			$(".auto_click_gummybear").html("upgrade autoclicker [100.000 Gummy bears]");
// 			window.clearInterval(auto);
// 			gummybear_autoclicker(50,1000);
// 			autoclicker_gummybear_level = 7;
// 		}
// 	} else if (autoclicker_gummybear_level == 7){
// 		if (gummy_bears >= 1000000){	
// 			gummy_bears = gummy_bears - 1000000;
// 			$(".gummybear_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
// 			$(".auto_click_gummybear").html("<strike>Fully upgraded</strike>");
// 			window.clearInterval(auto);
// 			gummybear_autoclicker(60,1000);
// 			autoclicker_gummybear_level = 8;
// 		}
// 	}
// });

$(".multiply_gummybear").click(function(){
	if (gummybear_level == 1) {
		if (gummy_bears >= 20) {
			gummy_bears = gummy_bears - 20;
			gummybear_level = 2;
			$(".multiply_gummybear").html('klik keer 3 [50 Gummy bears]');
			$(".lollipop_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
		}
	} else if (gummybear_level == 2) {
		if (gummy_bears >= 50) {
			gummy_bears = gummy_bears - 50;
			gummybear_level = 3;
			$(".multiply_gummybear").html('<strike>klik keer 3 [50 Gummy bears]</strike>');
			$(".lollipop_amount").html("<h2>Je hebt " + gummy_bears + " Gummy bears</h2>");
		}
	}
});

$(".upgrade_to_gummy_bear").click(function() {
	if (upgrade_to_gummy_bear == 0) {
		if (lollies >= 2000000) {
			lollies = lollies - 2000000;
			$(".lollipop_amount").html("<h2>Je hebt " + gummy_bears + " Gummy Bears</h2>");
			$(".upgrade_to_gummy_bear").html("Ga naar de Gummy Bears");
			$(".testen").html("<p>Je hebt " + lollies + " lollies<p>");
			$('.container1').hide();
			$('.container2').show();
			upgrade_to_gummy_bear = 1;
		}
	} else if (upgrade_to_gummy_bear == 1) {
		$('.container3').hide();
		$('.container1').hide();
		$('.container2').show();
	}
});

$(".back_to_lollies").click(function(){
	$(".container2").hide();
	$(".container1").show();
	$(".lollipop_amount").html("<h2>Je hebt " + lollies + " lollies</h2>");
});
////////////////////////////// GUMMY BEAR END//////////////////////////////////////////

////////////////////////////// CANDY STORE START//////////////////////////////////////////

$(".candy_store").click(function() {
	$(".pop_up_candy_store").show();
});

$(".close_pop_up_candy_store").click(function() {
	$(".pop_up_candy_store").hide();
});

$(".submit_name_button").click(function() {
	$(".pop_up_candy_store").hide();
	$(".container1").hide();
	$(".container2").hide();
	$(".container3").show();
});












////////////////////////////// CANDY STORE END//////////////////////////////////////////

});
$( document ).ready(function() {
	$('.container2').hide();	

	var lollies = 1000;
	var level = 1;
	var test = 0;

	var upgrade_to_gummy_bear = 0;
	var gummy_bears = 0;
	    
	$(".lollipop_amount").html("<h2>klik op de lollie<h2>");
	$(".gummybear_amount").html("<h2>klik op de Gummy Bear<h2>");

	function autoclicker (lvl,time) {
		auto = setInterval(function(){
				lollies = lollies + lvl;
				$(".lollipop_amount").html("<h2>je hebt " + lollies + " mini lollies</h2>");
				$(".testen").html("<p>je hebt " + lollies + " lollies</p>");
		} ,time);
	}

	$(".lollipop_clicker").click(function(){
		switch(level) {
	    case 1:
	         lollies = lollies + 1;
			$(".lollipop_amount").html("<h2>je hebt " + lollies + " mini lollies<h2>");
	        break;
	    case 2:
	        lollies = lollies + 2;
			$(".lollipop_amount").html("<h2>je hebt " + lollies + " mini lollies</h2>");
	        break;
		}
	});

	$(".keer-2").click(function(){
		if(level  > 1){
			
		}else if(lollies >= 20) {
			lollies = lollies - 20;
			level = 2;
			$(".keer-2").html('<strike>klik keer 2 voor 20 mini lolies</strike>');
			$(".lollipop_amount").html("<h2>je hebt " + lollies + " mini lollies</h2>");
		};
	});

	$(".auto-click").click(function(){
		if (test == 0){
			if (lollies >= 100){
				lollies = lollies - 100;
				$(".lollipop_amount").html("<h2>je hebt " + lollies + " mini lollies</h2>");
				$(".auto-click").html("upgrade autoclicker voor 200 mini lollies");
				autoclicker(1,1000);
				test = 1
			}
		}

		if (test == 1){
				if (lollies >= 200){	
					lollies = lollies - 200;
					$(".lollipop_amount").html("<h2>je hebt " + lollies + " mini lollies</h2>");
					$(".auto-click").html("<strike>upgrade autoclicker voor 200 mini lollies</strike>");
					window.clearInterval(auto);
					autoclicker(2,1000);
					test = 2
			}
		}
	});

	$(".upgrade_to_gummy_bear").click(function() {
		if (upgrade_to_gummy_bear == 0) {
			if (lollies >= 300) {
				lollies = lollies - 300;
				$(".lollipop_amount").html("<h2>je hebt " + gummy_bears + " Gummy Bears</h2>");
				$(".upgrade_to_gummy_bear").html("Back to Gummy Bears");
				$('.container').hide();
				$('.container2').show();
				upgrade_to_gummy_bear = 1;
			}
		} else if (upgrade_to_gummy_bear == 1) {
				$('.container').hide();
				$('.container2').show();
			$(".back_to_lollies").click(function(){
				$(".container2").hide();
				$(".container").show();
			});
		}
	});

	$(".gummmybear_clicker").click(function(){
		switch(level) {
	    case 1:
	        gummy_bears = gummy_bears + 1;
			$(".gummybear_amount").html("<h2>je hebt " + gummy_bears + " Gummy Bears</h2>");
	        break;
	    case 2:
	        gummy_bears = gummy_bears + 2;
			$(".gummybear_amount").html("<h2>je hebt " + gummy_bears + " Gummy Bears</h2>");
	        break;
		}
	});

	$(".back_to_lollies").click(function(){
		$(".container2").hide();
		$(".container").show();
	});
	
});
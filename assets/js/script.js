    var lollies = 0;
    var level = 1;
    $(".ja").html("<h2>klik op die lollie<h2>");
$(".clicker").click(function(){

	switch(level) {
    case 1:
         lollies = lollies + 1;
		$(".ja").html("<h2>je hebt " + lollies + " mini lollies<h2>");

        break;
    case 2:
        lollies = lollies + 2;
		$(".ja").html("<h2>je hebt " + lollies + " mini lollies</h2>");
        break;

}
  });


$(".keer-2").click(function(){
	if(level  > 1){
		
	}else if(lollies >= 20) {
		lollies = lollies - 20;
		level = 2;
		$(".keer-2").html('<strike>klik keer 2 voor 20 mini lolies</strike>');
		$(".ja").html("<h2>je hebt " + lollies + " mini lollies</h2>");
	};
	 

});
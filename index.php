
<?php require 'includes/header.php' ?>

<!-- LOLLIE CLICKER START -->

<div class="container1">
	<div class="col-md-3 col-xs-12">
		<div class="lollipop_clicker">
			<img class="lollipop-img" src="assets/img/lollipop2.png" alt="">
		</div>
	</div>

	<div class="col-md-5 col-xs-12">
		<div class="col-md-12">
			<p class="lollipop_amount"></p>
		</div>
		<div class="col-md-12">
			<button class="multiply btn">klik keer 2 [20]</button>	
		</div>

		<div class="col-md-12">
			<button class="auto_click btn">autoclicker [100]</button>
		</div>

		<div class="col-md-12">
			<button class="upgrade_to_gummy_bear btn">Gummy Bears upgrade [2.000.000]</button>
		</div>

	</div>

	<div class="col-md-4 col-xs-12">
		<h3>Lollie clicker</h3>
		<button class="candy_store btn">Candy store<br>[5.000.000] - Lollies <br>[1.000.000] - Gummy bears</button>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab ducimus debitis officiis, magni cumque illum possimus. Ad iure quibusdam, nulla, accusamus deleniti excepturi voluptatem. Praesentium sapiente, libero quas perferendis.</p>
	</div>

</div>

<!-- LOLLIE CLICKER END -->
<!-- GUMMY BEAR CLICKER START -->

<div class="container2">
	<div class="col-md-3 col-xs-12">
		<div class="gummmybear_clicker">
			<img class="lollipop-img" src="assets/img/gummy_bear1.png" alt="">
		</div>
	</div>

	<div class="col-md-5 col-xs-12">
		<div class="col-md-12">
			<p class="gummybear_amount"></p>
		</div>
		<div class="col-md-12">
			<button class="multiply_gummybear btn">klik keer 2 [20]</button>	
		</div>

		<div class="col-md-12">
			<button class="auto_click_gummybear btn">autoclicker [100]</button>
		</div>

	</div>

	<div class="col-md-4 col-xs-12">
		<h3 class="testen"></h3>
		<p><button class="back_to_lollies btn">Ga naar de lollies</button></p>
		<button class="candy_store btn">Candy Store<br>[5.000.000] - Lollies <br>[1.000.000] - Gummy bears</button>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab ducimus debitis officiis, magni cumque illum possimus. Ad iure quibusdam, nulla, accusamus deleniti excepturi voluptatem. Praesentium sapiente, libero quas perferendis.</p>
	</div>
</div>

<div class="pop_up_candy_store">
	<div class="pop_up_candy_store_head">
	<button class="close_pop_up_candy_store">X</button>
		<span class="pop_up_candy_store_title">Name your Candy Store</span>
		
	</div>
	<form action="controller/sitecontroller.php" method="POST"><input type="text" class="pop_up_candy_store_input"><a href="randomNameGenerator.html" target="_blank"><input type="button" value="Name generator" class="btn btn-danger"></a><input type="button" value="Get started" class="btn submit_name_button btn-danger"></form>
</div>

<!-- GUMMY BEAR CLICKER END -->

<!-- CANDY STORE CLICKER START -->

<div class="container3">
	<div class="col-md-3 col-xs-12">
		<div class="candystore_clicker">
			<img class="lollipop-img" src="assets/img/store.png" alt="">
		</div>
	</div>

	<div class="col-md-5 col-xs-12">
		<div class="col-md-12">
			<p class="candystore_amount">Klik op de winkel</p>
		</div>
		<div class="col-md-12">
			<button class="multiply_candystore btn">Werknemer [20]</button>	
		</div>

		<div class="col-md-12">
			<button class="auto_click_candystore btn">Verkoper [100]</button>
		</div>

		<div class="col-md-12">
			<button class="auto_click_candystore btn">Marketing [500]</button>
		</div>

		<div class="col-md-12">
			<button class="auto_click_candystore btn">Verkoper [1000]</button>
		</div>

		<div class="col-md-12">
			<button class="auto_click_candystore btn">Directeur [5000]</button>
		</div>

		<div class="col-md-12">
			<button class="auto_click_candystore btn">Winkel uitbreiding [20.000]</button>
		</div>

	</div>

	<div class="col-md-4 col-xs-12">
		<h3 class="testen"></h3>
		<p><button class="back_to_lollies btn">Ga naar de lollies</button></p>
		<p><button class="back_to_lollies btn">Ga naar de gummy bears</button></p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab ducimus debitis officiis, magni cumque illum possimus. Ad iure quibusdam, nulla, accusamus deleniti excepturi voluptatem. Praesentium sapiente, libero quas perferendis.</p>
	</div>
</div>

<!-- CANDY STORE CLICKER END -->

<?php require 'includes/footer.php'; ?>
parser = new DOMParser();
menuxml = parser.parseFromString(`
<menu>
	<items>
		<item>Accueil</item>
		<lien>index.html</lien>
	</items>
	
	<items genre="autre">
		<item>Toutes les recettes</item>
		<lien>page_un.html</lien>
		<choix>
			<nom>Crêpe</nom>
			<lien>crepe.html</lien>
		</choix>
		<choix>
			<nom>Firni</nom>
			<lien>firni.html</lien>
		</choix>
		<choix>
			<nom>Ròu Mántou</nom>
			<lien>roumantou.html</lien>
		</choix>
		<choix>
			<nom>Samoussa</nom>
			<lien>samoussa.html</lien>
		</choix>
		<choix>
			<nom>Soba</nom>
			<lien>soba.html</lien>
		</choix>
		<choix>
			<nom>Tave kosi</nom>
			<lien>tavekosi.html</lien>
		</choix>
		<choix>
			<nom>Accras de morue</nom>
			<lien>accras.html</lien>
		</choix>
		<choix>
			<nom>Bibimbap</nom>
			<lien>bibimbap.html</lien>
		</choix>
		<choix>
			<nom>Syrniki</nom>
			<lien>syrniki.html</lien>
		</choix>
		<choix>
			<nom>Xoşav</nom>
			<lien>xosav.html</lien>
		</choix>
	</items>
	
	<items genre="autre">
		<item>Mes recettes préférées</item>
		<lien>page_deux.html</lien>
		<choix>
			<nom>Bibimbap</nom>
			<lien>bibimbap.html</lien>
		</choix>
		<choix>
			<nom>Accras de morue</nom>
			<lien>accras.html</lien>
		</choix>
		<choix>
			<nom>Xoşav</nom>
			<lien>xosav.html</lien>
		</choix>
		<choix>
			<nom>Syrniki</nom>
			<lien>syrniki.html</lien>
		</choix>
	</items>
	
	<items genre="autre">
		<item>Origines</item>
		<lien>page_trois.html</lien>
		<choix>
			<nom>Albanie</nom>
			<lien>albanie.html</lien>
		</choix>
		<choix>
			<nom>Chine</nom>
			<lien>chine.html</lien>
		</choix>
		<choix>
			<nom>Kurdistan</nom>
			<lien>kurdistan.html</lien>
		</choix>
		<choix>
			<nom>Russie</nom>
			<lien>russie.html</lien>
		</choix>
		<choix>
			<nom>Afghanistan</nom>
			<lien>afghanistan.html</lien>
		</choix>
		<choix>
			<nom>Bretagne</nom>
			<lien>bretagne.html</lien>
		</choix>
		<choix>
			<nom>Guadeloupe</nom>
			<lien>gwada.html</lien>
		</choix>
		<choix>
			<nom>Inde</nom>
			<lien>inde.html</lien>
		</choix>
		<choix>
			<nom>Corée du Sud</nom>
			<lien>coree.html</lien>
		</choix>
		<choix>
			<nom>Japon</nom>
			<lien>japon.html</lien>
		</choix>
	</items>
	
	<items>
		<item>Allergenes</item>
		<lien>allergenes.html</lien>
	</items>
	
	<items>
		<item>À propos</item>
		<lien>apropos.html</lien>
	</items>
</menu>
`, "text/xml");
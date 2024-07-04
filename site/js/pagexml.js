parser = new DOMParser();
recettexml = parser.parseFromString(`
<recette>
  <plat>
    <nom>Crêpe</nom>
    <pays>Bretagne</pays>
    <image>img/crepe.jpg</image>
    <lien>crepe.html</lien>
  </plat>

  <plat>
    <nom>Firni</nom>
    <pays>Afghanistan</pays>
    <image>img/firni.jpg</image>
	<lien>firni.html</lien>
  </plat>

  <plat>
    <nom>Ròu Mántou</nom>
    <pays>Chine</pays>
    <image>img/roumantou.jpg</image>
	<lien>roumantou.html</lien>
  </plat>

  <plat>
    <nom>Samoussa</nom>
    <pays>Inde</pays>
    <image>img/samoussa.jpg</image>
	<lien>samoussa.html</lien>
  </plat>
  
  <plat>
    <nom>Soba</nom>
    <pays>Japon</pays>
    <image>img/soba.jpg</image>
	<lien>soba.html</lien>
  </plat>

  <plat>
    <nom>Tave Kosi</nom>
    <pays>Albanie</pays>
    <image>img/tavekosi.jpg</image>
	<lien>tavekosi.html</lien>
  </plat>

  <plat genre="pref">
    <nom>Accras</nom>
    <pays>Guadeloupe</pays>
    <image>img/accras.jpg</image>
	<lien>accras.html</lien>
  </plat>

  <plat genre="pref">
    <nom>Bibimbap</nom>
    <pays>Corée du Sud</pays>
    <image>img/bibimbap.jpg</image>
	<lien>bibimbap.html</lien>
  </plat>
  
  <plat genre="pref">
    <nom>Xoşav</nom>
    <pays>Kurdistan</pays>
    <image>img/xosav.jpg</image>
	<lien>xosav.html</lien>
  </plat>
  
  <plat genre="pref">
    <nom>Syrniki</nom>
    <pays>Russie</pays>
    <image>img/syrniki.jpg</image>
	<lien>syrniki.html</lien>
  </plat>
  
</recette>
`, "text/xml");


pagetroisxml = parser.parseFromString(`
<origines>
  <origine>
    <pays>Afghanistan</pays>
    <image>img/afghanistan.jpg</image>
	<lien>afghanistan.html</lien>
  </origine>

  <origine>
    <pays>Albanie</pays>
    <image>img/albanie.jpg</image>
	<lien>albanie.html</lien>
  </origine>

  <origine>
    <pays>Bretagne</pays>
    <image>img/bretagne.jpg</image>
	<lien>bretagne.html</lien>
  </origine>

  <origine>
    <pays>Chine</pays>
    <image>img/chine.jpg</image>
	<lien>chine.html</lien>
  </origine>

  <origine>
    <pays>Corée du Sud</pays>
    <image>img/coree.jpg</image>
	<lien>coree.html</lien>
  </origine>

  <origine>
    <pays>Guadeloupe</pays>
    <image>img/gwada.jpg</image>
	<lien>gwada.html</lien>
  </origine>

  <origine>
    <pays>Inde</pays>
    <image>img/inde.jpg</image>
	<lien>inde.html</lien>
  </origine>

  <origine>
    <pays>Japon</pays>
    <image>img/japon.jpg</image>
	<lien>japon.html</lien>
  </origine>

  <origine>
    <pays>Kurdistan</pays>
    <image>img/kurdistan.jpg</image>
	<lien>kurdistan.html</lien>
  </origine>

  <origine>
    <pays>Russie</pays>
    <image>img/russie.jpg</image>
	<lien>russie.html</lien>
  </origine>
  </origines>
`, "text/xml");
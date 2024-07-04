parser = new DOMParser();

recettexsldiv = parser.parseFromString(`
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/recette">
			<xsl:for-each select="plat">
			<xsl:sort select="nom" order="ascending" data-type="text" lang="fr"/>
			<div class="photo">
				<a>
					<xsl:attribute name="href">
					<xsl:value-of select="lien"/>
					</xsl:attribute>
				<img>
					<xsl:attribute name="src">
					<xsl:value-of select="image"/>
					</xsl:attribute>
				</img>
				</a>
				<div>
					<a>
					<xsl:attribute name="href">
					<xsl:value-of select="lien"/>
					</xsl:attribute>
						<xsl:value-of select="nom"/> - 
						<xsl:value-of select="pays"/>
					</a>
				</div>
			</div>
			</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
`, "text/xml");

prefxsldiv = parser.parseFromString(`
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/recette">
			<xsl:for-each select="plat">
			<xsl:sort select="nom" order="ascending" data-type="text" lang="fr"/>
			<xsl:if test="@genre='pref'">
			<div class="photo">
				<a>
					<xsl:attribute name="href">
					<xsl:value-of select="lien"/>
					</xsl:attribute>
				<img>
					<xsl:attribute name="src">
					<xsl:value-of select="image"/>
					</xsl:attribute>
				</img>
				</a>
				<div>
					<a>
					<xsl:attribute name="href">
					<xsl:value-of select="lien"/>
					</xsl:attribute>
						<xsl:value-of select="nom"/> - 
						<xsl:value-of select="pays"/>
					</a>
				</div>
			</div>
			</xsl:if>
			</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
`, "text/xml");

originesxsldiv = parser.parseFromString(`
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/origines">
			<xsl:for-each select="origine">
			<div class="photo">
				<a>
					<xsl:attribute name="href">
					<xsl:value-of select="lien"/>
					</xsl:attribute>
				<img>
					<xsl:attribute name="src">
					<xsl:value-of select="image"/>
					</xsl:attribute>
				</img>
				</a>
				<div>
					<a>
					<xsl:attribute name="href">
					<xsl:value-of select="lien"/>
					</xsl:attribute> 
						<xsl:value-of select="pays"/>
					</a>
				</div>
			</div>
			</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
`, "text/xml");
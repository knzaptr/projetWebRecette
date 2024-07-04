menuxsldiv = parser.parseFromString(`
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/menu">
		<ul class="menu">
		<xsl:for-each select="items">
			<li>
			<a><xsl:attribute name="href">
			<xsl:value-of select="lien"/>
			</xsl:attribute><xsl:value-of select="item"/></a>
			<xsl:if test="@genre='autre'">
				<ul>
			<xsl:for-each select="choix">
			<xsl:sort select="nom" order="ascending" data-type="text" lang="fr"/>

					<li>
					<a>
					<xsl:attribute name="href">
					<xsl:value-of select="lien"/>
					</xsl:attribute><xsl:value-of select="nom"/>
					</a>
					</li>
					
			</xsl:for-each>
				</ul>
			</xsl:if>	
			</li>
		</xsl:for-each>
		</ul>
	</xsl:template>
</xsl:stylesheet>
`, "text/xml");
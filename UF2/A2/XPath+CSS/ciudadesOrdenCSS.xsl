<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="ciudadesOrden.css" />
                <title>Ejemplo XSLT</title>
            </head>
            <body>
                <h1> LISTA DE CIUDADES  </h1>
                 <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Provincia</th>
                            <th>Habitantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:apply-templates select="//ciudad">
                            <xsl:sort select="nombre" order="descending"/>
                            <xsl:sort select="provincia"/>
                            <xsl:sort select="habitantes" order="ascending"/>
                        </xsl:apply-templates>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="ciudad">
        <tr>
            <td><xsl:value-of select="nombre" /></td>
            <td><xsl:value-of select="provincia" /></td>
            <td><xsl:value-of select="habitantes" /></td>
        </tr>
    </xsl:template>
</xsl:stylesheet>
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8"/>
        <xsl:template match="/receptes">
            <xsl:for-each select="recepta">
                <xsl:result-document href="./recepta_{position()}.html" method="html">
                    <html>   
                        <head>
                            <title>Receta</title>
                            <link rel="stylesheet" type="text/css" href="receptes.css"/>
                        </head>
                        <body>
                            <header>
                                <div class="logo">
                                    <img src="../imatges/Logo-Delicias.png" alt="Delicias Kitchen" style="width:250px;height:auto;"/>
                                    <p>Narcís Carol i Romà Carbonell</p>
                                </div>
                                <hr/>
                                <nav class="inici">
                                    <a href="../index.html">INICIO</a>
                                    <a href="../index.html#sobre-mi">SOBRE MÍ</a>
                                    <a href="receptas1-5.html">RECETAS</a>
                                    <a href="../Formulari/contacto.html">CONTACTO</a>
                                    <a href="otras.html">OTRAS COSAS</a>
                                </nav>
                                <hr/>
                            </header>
                            <div>
                                <h1><xsl:value-of select="nom"/></h1>
                                <img>
                                    <xsl:attribute name="src">
                                        <xsl:value-of select="imatge"/>
                                    </xsl:attribute>
                                    <xsl:attribute name="alt">
                                        <xsl:value-of select="nom"/>
                                    </xsl:attribute>
                                </img>
                                <p><b>Autor:</b> <xsl:value-of select="autor/nom"/></p>
                                <p><b>DNI:</b> <xsl:value-of select="autor/dni"/></p>
                            </div>
                            <section>
                                <h2>Ingredientes</h2>
                                <ul>
                                    <xsl:for-each select="ingredients/ingredient">
                                        <li>
                                            <xsl:value-of select="concat(quantitat/valor, ' ', quantitat/mesura)"/> de <xsl:value-of select="nom"/>
                                        </li>
                                    </xsl:for-each>
                                </ul>
                                <h2>Pasos</h2>
                                <ul>
                                    <xsl:for-each select="passos/pas">
                                        <li>
                                            <xsl:value-of select="."/>
                                        </li>
                                    </xsl:for-each>
                                </ul>
                            </section>
                            <footer>
                                <div>
                                    <a href="https://www.facebook.com/deliciaskitchen/">FACEBOOK</a>
                                    <a href="https://x.com/i/flow/login?redirect_after_login=%2Fdeliciaskitchen">TWITTER</a>
                                    <a href="https://www.instagram.com/deliciaskitchen/">INSTAGRAM</a>
                                    <a href="https://es.pinterest.com/deliciaskitchen/">PINTEREST</a>
                                    <a href="mailto:email@example.com">EMAIL</a>
                                    <a href="https://rss.com/es">RSS</a>
                                </div>
                            </footer>
                        </body>
                    </html>
                </xsl:result-document>
            </xsl:for-each>
        </xsl:template>
</xsl:stylesheet>
AOS.init({
    once: false, duration: 800, easing: 'ease-in-out'
});

var mover = window.document.querySelector("#barra-oculta")

function clicoufora() {
    mover.classList.remove("ativa")
}

function clicar() {
    mover.classList.toggle("ativa");
}

function clicar2() {
    if (mover.classList.contains("ativa")) {
        mover.classList.remove("ativa")
    }
}

function wredi() {
    window.open ("https://wa.me/558396194420", "_blank");
}

function gredi() {
    window.open ("https://mail.google.com/mail/?view=cm&to=renzomoreno.adv@gmail.com", "blank")
}

function iredi() {
    window.open ("https://www.instagram.com/dr.renzoalexander/", "blank")
}

function lredi() {
    window.open ("https://www.linkedin.com/in/renzoalexandermorenooberto/", "blank")
}

function clicaresp() {

// Cabeçalho

window.document.body.querySelector("a#sobremim").innerHTML = "Acerca de mí"
window.document.body.querySelector("a#servicos").innerHTML = "Servicios";
window.document.body.querySelector("a#missao").innerHTML = "Misión | Visión | Valores";
window.document.body.querySelector("a#diferenciais").innerHTML = "Diferencias";
window.document.body.querySelector("a#contato").innerHTML = "Contacto";

//Seção 1

window.document.body.querySelector("h1#s1h1").innerHTML = "DERECHO CON RESPONSABILIDAD Y COMPROMISO";
window.document.body.querySelector("p#s1p1").innerHTML = "Actuación en Derecho Administrativo, Derecho Constitucional, Derecho de la Previdencia, Derecho Laboral, Migración y Naturalización, Derecho de Familia";

//Seção 2

window.document.body.querySelector("h1#s2h1").innerHTML = "La Constitución es mi tierra. La dignidad es mi idioma.";
window.document.body.querySelector("p#s2p1").innerHTML = "Renzo Alexander Moreno Oberto, venezolano, naturalizado brasileño por Amor.";
window.document.body.querySelector("p#s2p2").innerHTML = "Abogo por la intersección de la orden constitucional y el principio de la dignidad. Soy abogado y posgraduado en Derecho Administrativo y Derecho Público por la Universidad de Mogi das Cruzes y aprobado en el 42.º examen de la OAB.";
window.document.body.querySelector("p#s2p3").innerHTML = "Brasileño de alma crítica, creo que el derecho no es sólo una norma: es lenguaje, es presencia, es un instrumento de libertad institucional.";

//Seção 3

window.document.body.querySelector("h1#s3h1txt1").innerHTML = "Derecho Constitucional";
window.document.body.querySelector("p#s3ptxt1").innerHTML = "• Control de constitucionalidad";
window.document.body.querySelector("p#s3ptxt2").innerHTML = "• Recursos constitucionales";
window.document.body.querySelector("p#s3ptxt3").innerHTML = "• Protección de los derechos fundamentales";
window.document.body.querySelector("p#s3ptxt4").innerHTML = "• Derechos fundamentales de la diversidad";

window.document.body.querySelector("h1#s3h1txt2").innerHTML = "Derecho Administrativo";
window.document.body.querySelector("p#s3ptxt5").innerHTML = "• Licitaciones y Contratos Administrativos";
window.document.body.querySelector("p#s3ptxt6").innerHTML = "• Responsabilidad Civil del Estado";
window.document.body.querySelector("p#s3ptxt7").innerHTML = "• Impropiedad administrativa";
window.document.body.querySelector("p#s3ptxt8").innerHTML = "• Intervención estatal";
window.document.body.querySelector("p#s3ptxt9").innerHTML = "• Consultoría de Políticas Públicas y Gobernanza";

window.document.body.querySelector("h1#s3h1txt3").innerHTML = "Derecho de la Previdencia";
window.document.body.querySelector("p#s3ptxt10").innerHTML = "• Beneficios del Régimen General de la Seguridad Social (RGPS)";
window.document.body.querySelector("p#s3ptxt11").innerHTML = "• Planes de Pensiones Propios de los Funcionarios Públicos (RPPS)";
window.document.body.querySelector("p#s3ptxt12").innerHTML = "• BPC/LOAS";

window.document.body.querySelector("h1#s3h1txt4").innerHTML = "Migración y naturalización";
window.document.body.querySelector("p#s3ptxt13").innerHTML = "• Naturalización ordinaria, extraordinaria y especial";
window.document.body.querySelector("p#s3ptxt14").innerHTML = "• Visas, Residencia y Regularización Migratoria";
window.document.body.querySelector("p#s3ptxt15").innerHTML = "• Derechos constitucionales de los extranjeros";
window.document.body.querySelector("p#s3ptxt16").innerHTML = "• Expulsión, Deportación y Repatriación";
window.document.body.querySelector("p#s3ptxt17").innerHTML = "• Revalidación de Diplomas y Documentos Extranjeros";

window.document.body.querySelector("h1#s3h1txt5").innerHTML = "Derecho Laboral";
window.document.body.querySelector("p#s3ptxt18").innerHTML = "• Acciones Laborales Individuales";
window.document.body.querySelector("p#s3ptxt19").innerHTML = "• Asesoría Laboral para Empresas";
window.document.body.querySelector("p#s3ptxt20").innerHTML = "• Accidentes de trabajo y enfermedades profesionales";

window.document.body.querySelector("h1#s3h1txt6").innerHTML = "Derecho de Familia";
window.document.body.querySelector("p#s3ptxt21").innerHTML = "• Filiación, Paternidad y Parentalidades";
window.document.body.querySelector("p#s3ptxt22").innerHTML = "• Custodia, convivencia y poder familiar";
window.document.body.querySelector("p#s3ptxt23").innerHTML = "• Sucesión e Inventario";
window.document.body.querySelector("p#s3ptxt24").innerHTML = "• Adopción nacional e internacional";

window.document.body.querySelector("h1#s3h1txt").innerHTML = "Compliance de asesoramiento";
window.document.body.querySelector("p#s3ptxt25").innerHTML = "• Elaboración de Códigos de Conducta y Políticas Internas";
window.document.body.querySelector("p#s3ptxt26").innerHTML = "• Canal de denuncia y procedimientos de investigación interna";
window.document.body.querySelector("p#s3ptxt27").innerHTML = "• Cumplimiento de la LGPD";
window.document.body.querySelector("p#s3ptxt28").innerHTML = "• Compliance anticorrupción e integridad pública";
window.document.body.querySelector("p#s3ptxt29").innerHTML = "• Formación y cualificación interna";

//Seção 4

window.document.body.querySelector("h1#s4h11").innerHTML = "Misión";
window.document.body.querySelector("h1#s4h12").innerHTML = "Valores";
window.document.body.querySelector("h1#s4h13").innerHTML = "Visión";
window.document.body.querySelector("h1#s4h1cxs1").innerHTML = "MiSIÓN";
window.document.body.querySelector("li#s3ptxt30").innerHTML = "Promover la justicia, la legalidad y la dignidad, con acción jurídica técnica y estratégica en la defensa de los derechos fundamentales, del servicio público y de personas históricamente invisibilizadas, como extranjeros, servidores públicos, personas mayores, personas LGBTQIA+ y familias en situación de vulnerabilidad.";
window.document.body.querySelector("li#s3ptxt31").innerHTML = "Actuar con excelencia, ética y profundidad en consultoría y litigio, contribuyendo a un Brasil más justo, transparente y comprometido con su Constitución.";
window.document.body.querySelector("h1#s4h1cxs2").innerHTML = "VALORES";
window.document.body.querySelector("li#s3ptxt32").innerHTML = "La ética y la legalidad como fundamento";
window.document.body.querySelector("li#s3ptxt33").innerHTML = "Compromiso con los derechos fundamentales";
window.document.body.querySelector("li#s3ptxt34").innerHTML = "Excelencia Técnica y Estrategia Legal";
window.document.body.querySelector("li#s3ptxt35").innerHTML = "Respeto a la diversidad y la dignidad humana";
window.document.body.querySelector("li#s3ptxt36").innerHTML = "Transparencia, Responsabilidad y Humanidad";
window.document.body.querySelector("li#s3ptxt37").innerHTML = "Supervisión institucional con independencia";
window.document.body.querySelector("li#s3ptxt38").innerHTML = "Defensa de una causa, no de un espectáculo";
window.document.body.querySelector("h1#s4h1cxs3").innerHTML = "VISIÓN";
window.document.body.querySelector("li#s3ptxt39").innerHTML = "Ser una referencia nacional en derecho constitucional y administrativo enfocada en la protección de la legalidad, la integridad pública y los derechos humanos, ampliando la participación y el reconocimiento de las personas extranjeras y vulnerables en el sistema de justicia brasileño.";
window.document.body.querySelector("li#s3ptxt40").innerHTML = "Convertirse en un símbolo de confianza jurídica y de transformación social, con una acción firme, técnica y humanizada.";

//Seção 5

window.document.body.querySelector("h1#s5h11").innerHTML = "Nuestras diferencias";
window.document.body.querySelector("p#s5p1").innerHTML = "“La responsabilidad no es jerga, es método”.";
window.document.body.querySelector("p#s5p2").innerHTML = "Aquí, cada caso es tratado con técnica, cuidado y minuciosidad. Sus derechos no es solo un número de protocolo: son parte de la historia del país.";
window.document.body.querySelector("p#s3ptxt43").innerHTML = "• Experiencia de vida real como extranjero en Brasil: tengo conocimiento interno de los caminos y obstáculos que enfrentan los migrantes y los transformo en una estrategia legal con resultados.";
window.document.body.querySelector("p#s3ptxt44").innerHTML = "• Desempeño fiscalizador e institucional: Experiencia técnica en el análisis de procesos licitatorios, contratos públicos y funciones administrativas, con acciones que protejan el interés público.";
window.document.body.querySelector("p#s3ptxt45").innerHTML = "• Formación jurídica sólida y humanista: Especializaciones en Derecho Público, Constitucional y Administrativo, con compromiso con la Constitución y la dignidad humana.";
window.document.body.querySelector("p#s3ptxt46").innerHTML = "Servicio personalizado y exhaustivo: Cada cliente recibe atención unica, orientación clara y una estrategia a su medida. No hay fórmulas preestablecidas: se trata de técnica y escucha.";
window.document.body.querySelector("p#s3ptxt47").innerHTML = "• Defensa de las minorías con sobriedad y firmeza: Acción a favor de las personas LGBTQIA+, migrantes, personas mayores y personas en riesgo del olvido institucional o legal.";
window.document.body.querySelector("p#s3ptxt48").innerHTML = "• Defensa ciudadana: Comunicación precisa, con claridad técnica y empatía. Entiendes lo que se está haciendo y el por qué.";

//Seção 6

window.document.body.querySelector("h1#s6div1h1").innerHTML = "Consultas y Servicio";
window.document.body.querySelector("p#s6div1p1").innerHTML = "Ofrezco servicios de consultoría y litigio a particulares, organismos públicos y empresas. Trabajo con contratos, licitaciones, dictámenes legales y casos complejos que requieren experiencia técnica.";
window.document.body.querySelector("h2#s6div1h2").innerHTML = "Contenidos y publicaciones";
window.document.body.querySelector("p#s6div1p2").innerHTML = "La producción legal también es un acto de resistencia. Escribo para educar, provocar y defender el orden constitucional.";

//Rodape

window.document.body.querySelector("h1#fh1").innerHTML = "Servicios";
window.document.body.querySelector("p#fp1").innerHTML = "Derecho Constitucional, Derecho Administrativo, Derecho de la Previdencia, Migración y Naturalización, Derecho Laboral, Derecho de Familia, Asesoría en Compliance";
window.document.body.querySelector("h1#fh2").innerHTML = "Contacto";
window.document.body.querySelector("p#posrodape").innerHTML = "© 2025 Renzo Alexander Moreno Oberto | Servicios Legales. Todos los derechos reservados.";
}
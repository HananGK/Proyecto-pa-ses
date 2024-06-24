var pais = "";
var paisCorrecto = true;
var objetoTraducciones = {};

function cargar() {
  let body = document.querySelector("body");
  body.innerHTML = "";

  let header = document.createElement("header");
  body.appendChild(header);

  let div1Header = document.createElement("div");
  let imgLogo = document.createElement("img");
  imgLogo.src = "images/mapamundi.png";
  imgLogo.alt = "Icono de mapamundi";
  div1Header.appendChild(imgLogo);
  header.appendChild(div1Header);

  imgLogo.addEventListener("click", function () {
    cargar();
  });

  let div2Header = document.createElement("div");
  let navHeader = document.createElement("nav");
  let olHeader = document.createElement("ol");

  let li1_olHeader = document.createElement("li");
  let a1_li1_olHeader = document.createElement("a");
  a1_li1_olHeader.href = "#";
  a1_li1_olHeader.text = "Datos generales";
  li1_olHeader.appendChild(a1_li1_olHeader);
  olHeader.appendChild(li1_olHeader);

  a1_li1_olHeader.addEventListener("click", function () {
    mostrarDatosGenerales();
  });

  let li2_olHeader = document.createElement("li");
  let a2_li2_olHeader = document.createElement("a");
  a2_li2_olHeader.href = "#";
  a2_li2_olHeader.text = "Datos geográficos";
  li2_olHeader.appendChild(a2_li2_olHeader);
  olHeader.appendChild(li2_olHeader);

  a2_li2_olHeader.addEventListener("click", function () {
    mostrarTablaDatosGeograficos();
  });

  let li3_olHeader = document.createElement("li");
  let a3_li3_olHeader = document.createElement("a");
  a3_li3_olHeader.href = "#";
  a3_li3_olHeader.text = "Banderas";
  li3_olHeader.appendChild(a3_li3_olHeader);
  olHeader.appendChild(li3_olHeader);

  a3_li3_olHeader.addEventListener("click", function () {
    mostrarBanderas();
  });

  let li4_olHeader = document.createElement("li");
  let a4_li4_olHeader = document.createElement("a");
  a4_li4_olHeader.href = "#";
  a4_li4_olHeader.text = "Traducciones";
  li4_olHeader.appendChild(a4_li4_olHeader);
  olHeader.appendChild(li4_olHeader);

  a4_li4_olHeader.addEventListener("click", function () {
    mostrarTraducciones();
  });

  navHeader.appendChild(olHeader);
  div2Header.appendChild(navHeader);
  header.appendChild(div2Header);

  let div3Header = document.createElement("div");
  let label_search_header = document.createElement("label");
  label_search_header.for = "buscar";
  label_search_header.innerHTML = "🔎";
  let input_search_header = document.createElement("input");
  input_search_header.type = "text";
  input_search_header.name = "buscar";
  input_search_header.id = "buscar";
  input_search_header.placeholder = "Buscar:";
  div3Header.appendChild(label_search_header);
  div3Header.appendChild(input_search_header);
  header.appendChild(div3Header);

  let main = document.createElement("main");
  body.appendChild(main);
  main.id = "main";

  let divTitulo = document.createElement("div");
  let h1Titulo = document.createElement("h1");
  h1Titulo.innerHTML = "Países";
  divTitulo.appendChild(h1Titulo);
  main.appendChild(divTitulo);

  let divDesplegable = document.createElement("div");
  divDesplegable.id = "desplegable";
  main.appendChild(divDesplegable);

  let formDesplegable = document.createElement("form");
  formDesplegable.action = "";
  divDesplegable.appendChild(formDesplegable);

  let tablaDesplegable = document.createElement("table");
  tablaDesplegable.id = "tabla_con_desplegable";
  formDesplegable.appendChild(tablaDesplegable);

  let trDesplegable = document.createElement("tr");
  tablaDesplegable.appendChild(trDesplegable);

  let tdDesplegable1 = document.createElement("td");
  trDesplegable.appendChild(tdDesplegable1);
  tdDesplegable1.innerHTML = "Continentes: ";
  let selectContinentes = document.createElement("select");
  selectContinentes.name = "continentes";
  selectContinentes.id = "continentes";
  selectContinentes.addEventListener("change", function () {
    cargarPaises(selectContinentes.value);
  });
  tdDesplegable1.appendChild(selectContinentes);

  option0continentes = document.createElement("option");
  option0continentes.value = "0";
  option0continentes.text = "Selecciona continente...";
  selectContinentes.appendChild(option0continentes);

  optionEuropa = document.createElement("option");
  optionEuropa.value = "Europe";
  optionEuropa.text = "Europa";
  selectContinentes.appendChild(optionEuropa);

  optionAmerica = document.createElement("option");
  optionAmerica.value = "Americas";
  optionAmerica.text = "América";
  selectContinentes.appendChild(optionAmerica);

  optionAsia = document.createElement("option");
  optionAsia.value = "Asia";
  optionAsia.text = "Asia";
  selectContinentes.appendChild(optionAsia);

  optionAfrica = document.createElement("option");
  optionAfrica.value = "Africa";
  optionAfrica.text = "África";
  selectContinentes.appendChild(optionAfrica);

  optionOceania = document.createElement("option");
  optionOceania.value = "Oceania";
  optionOceania.text = "Oceanía";
  selectContinentes.appendChild(optionOceania);

  let tdDesplegable2 = document.createElement("td");
  trDesplegable.appendChild(tdDesplegable2);
  tdDesplegable2.innerHTML = "Países: ";
  let selectPaises = document.createElement("select");
  selectPaises.name = "paises";
  selectPaises.id = "paises";
  selectPaises.addEventListener("change", function () {
    cargarTablaPais(selectPaises.value);
  });
  tdDesplegable2.appendChild(selectPaises);

  option0paises = document.createElement("option");
  option0paises.value = "0";
  option0paises.text = "Selecciona páís...";
  selectPaises.appendChild(option0paises);

  let hr_separador = document.createElement("hr");
  main.appendChild(hr_separador);

  let divTablaPais = document.createElement("div");
  divTablaPais.classList.add("container");
  main.appendChild(divTablaPais);
  divTablaPais.id = "divTablaPais";

  let divTituloTabla = document.createElement("div");
  divTablaPais.appendChild(divTituloTabla);

  let h2TituloTabla = document.createElement("h2");
  h2TituloTabla.innerHTML = "Nombre país: XXXXX";
  h2TituloTabla.id = "tituloTabla";
  divTituloTabla.appendChild(h2TituloTabla);
  h2TituloTabla.style.display = "none";

  let tablaPais = document.createElement("table");
  tablaPais.id = "tabla";
  divTablaPais.appendChild(tablaPais);

  tablaPais.style.display = "none";

  let tr1TablaPais = document.createElement("tr");
  tablaPais.appendChild(tr1TablaPais);

  let th1_tr1TablaPais = document.createElement("th");
  tr1TablaPais.appendChild(th1_tr1TablaPais);
  th1_tr1TablaPais.innerHTML = "Nombre común";

  let th2_tr1TablaPais = document.createElement("th");
  tr1TablaPais.appendChild(th2_tr1TablaPais);
  th2_tr1TablaPais.innerHTML = "Nombre oficial";

  let th3_tr1TablaPais = document.createElement("th");
  tr1TablaPais.appendChild(th3_tr1TablaPais);
  th3_tr1TablaPais.innerHTML = "Capital";

  let th4_tr1TablaPais = document.createElement("th");
  tr1TablaPais.appendChild(th4_tr1TablaPais);
  th4_tr1TablaPais.innerHTML = "Población";

  let tr2TablaPais = document.createElement("tr");
  tablaPais.appendChild(tr2TablaPais);

  let td1_tr2TablaPais = document.createElement("td");
  tr2TablaPais.appendChild(td1_tr2TablaPais);
  td1_tr2TablaPais.innerHTML = "XXXXX";
  td1_tr2TablaPais.id = "td_nombreComun";

  let td2_tr2TablaPais = document.createElement("td");
  tr2TablaPais.appendChild(td2_tr2TablaPais);
  td2_tr2TablaPais.innerHTML = "XXXXX";
  td2_tr2TablaPais.id = "td_nombreOficial";

  let td3_tr2TablaPais = document.createElement("td");
  tr2TablaPais.appendChild(td3_tr2TablaPais);
  td3_tr2TablaPais.innerHTML = "XXXXX";
  td3_tr2TablaPais.id = "td_capital";

  let td4_tr2TablaPais = document.createElement("td");
  tr2TablaPais.appendChild(td4_tr2TablaPais);
  td4_tr2TablaPais.innerHTML = "XXXXX";
  td4_tr2TablaPais.id = "td_poblacion";

  let tr3TablaPais = document.createElement("tr");
  tablaPais.appendChild(tr3TablaPais);

  let th1_tr3TablaPais = document.createElement("th");
  tr3TablaPais.appendChild(th1_tr3TablaPais);
  th1_tr3TablaPais.innerHTML = "Area";

  let th2_tr3TablaPais = document.createElement("th");
  tr3TablaPais.appendChild(th2_tr3TablaPais);
  th2_tr3TablaPais.innerHTML = "Dominios";

  let th3_tr3TablaPais = document.createElement("th");
  tr3TablaPais.appendChild(th3_tr3TablaPais);
  th3_tr3TablaPais.innerHTML = "CCA2";

  let th4_tr3TablaPais = document.createElement("th");
  tr3TablaPais.appendChild(th4_tr3TablaPais);
  th4_tr3TablaPais.innerHTML = "CCA3";

  let tr4TablaPais = document.createElement("tr");
  tablaPais.appendChild(tr4TablaPais);

  let td1_tr4TablaPais = document.createElement("td");
  tr4TablaPais.appendChild(td1_tr4TablaPais);
  td1_tr4TablaPais.innerHTML = "XXXXX";
  td1_tr4TablaPais.id = "td_area";

  let td2_tr4TablaPais = document.createElement("td");
  tr4TablaPais.appendChild(td2_tr4TablaPais);
  td2_tr4TablaPais.innerHTML = "XXXXX";
  td2_tr4TablaPais.id = "td_dominios";

  let td3_tr4TablaPais = document.createElement("td");
  tr4TablaPais.appendChild(td3_tr4TablaPais);
  td3_tr4TablaPais.innerHTML = "XXXXX";
  td3_tr4TablaPais.id = "td_CCA2";

  let td4_tr4TablaPais = document.createElement("td");
  tr4TablaPais.appendChild(td4_tr4TablaPais);
  td4_tr4TablaPais.innerHTML = "XXXXX";
  td4_tr4TablaPais.id = "td_CCA3";

  let tr5TablaPais = document.createElement("tr");
  tablaPais.appendChild(tr5TablaPais);

  let th1_tr5TablaPais = document.createElement("th");
  tr5TablaPais.appendChild(th1_tr5TablaPais);
  th1_tr5TablaPais.innerHTML = "CCN3";

  let th2_tr5TablaPais = document.createElement("th");
  tr5TablaPais.appendChild(th2_tr5TablaPais);
  th2_tr5TablaPais.innerHTML = "CIOC";

  let th3_tr5TablaPais = document.createElement("th");
  tr5TablaPais.appendChild(th3_tr5TablaPais);
  th3_tr5TablaPais.innerHTML = "Región";

  let th4_tr5TablaPais = document.createElement("th");
  tr5TablaPais.appendChild(th4_tr5TablaPais);
  th4_tr5TablaPais.innerHTML = "Subregión";

  let tr6TablaPais = document.createElement("tr");
  tablaPais.appendChild(tr6TablaPais);

  let td1_tr6TablaPais = document.createElement("td");
  tr6TablaPais.appendChild(td1_tr6TablaPais);
  td1_tr6TablaPais.id = "td_CCN3";
  td1_tr6TablaPais.innerHTML = "XXXXX";

  let td2_tr6TablaPais = document.createElement("td");
  tr6TablaPais.appendChild(td2_tr6TablaPais);
  td2_tr6TablaPais.innerHTML = "XXXXX";
  td2_tr6TablaPais.id = "td_CIOC";

  let td3_tr6TablaPais = document.createElement("td");
  tr6TablaPais.appendChild(td3_tr6TablaPais);
  td3_tr6TablaPais.innerHTML = "XXXXX";
  td3_tr6TablaPais.id = "td_region";

  let td4_tr6TablaPais = document.createElement("td");
  tr6TablaPais.appendChild(td4_tr6TablaPais);
  td4_tr6TablaPais.id = "td_subregion";
  td4_tr6TablaPais.innerHTML = "XXXXX";

  let tr7TablaPais = document.createElement("tr");
  tablaPais.appendChild(tr7TablaPais);

  let th1_tr7TablaPais = document.createElement("th");
  tr7TablaPais.appendChild(th1_tr7TablaPais);
  th1_tr7TablaPais.innerHTML = "Monedas";
  th1_tr7TablaPais.colSpan = "2";

  let th2_tr7TablaPais = document.createElement("th");
  tr7TablaPais.appendChild(th2_tr7TablaPais);
  th2_tr7TablaPais.innerHTML = "Idiomas";
  th2_tr7TablaPais.colSpan = "2";

  let tr8TablaPais = document.createElement("tr");
  tablaPais.appendChild(tr8TablaPais);

  let td1_tr8TablaPais = document.createElement("td");
  tr8TablaPais.appendChild(td1_tr8TablaPais);
  td1_tr8TablaPais.colSpan = "2";
  
  let dl_Monedas_TablaPais = document.createElement("dl_Monedas_TablaPais");
  td1_tr8TablaPais.appendChild(dl_Monedas_TablaPais);
  dl_Monedas_TablaPais.id = "dl_Monedas";
 
  let td2_tr8TablaPais = document.createElement("td");
  tr8TablaPais.appendChild(td2_tr8TablaPais);
  td2_tr8TablaPais.colSpan = "2";

  let ul_Idiomas_TablaPais = document.createElement("ul");
  td2_tr8TablaPais.appendChild(ul_Idiomas_TablaPais);
  ul_Idiomas_TablaPais.id = "ul_idiomas_tablaPais";

  let tablaDatosGeograficos = document.createElement("table");
  tablaDatosGeograficos.id = "tablaGeo";
  divTablaPais.appendChild(tablaDatosGeograficos);

  let trTituloLatLong = document.createElement("tr");
  let thLatitud = document.createElement("th");
  thLatitud.innerHTML = "Latitud";
  let thLongitud = document.createElement("th");
  thLongitud.innerHTML = "Longitud";
  trTituloLatLong.appendChild(thLatitud);
  trTituloLatLong.appendChild(thLongitud);
  tablaDatosGeograficos.appendChild(trTituloLatLong);

  let trLatLong = document.createElement("tr");
  let tdLatitud = document.createElement("td");
  tdLatitud.innerHTML = "XXXXX";
  tdLatitud.id = "tdLatitud";
  let tdLongitud = document.createElement("td");
  tdLongitud.innerHTML = "XXXXX";
  tdLongitud.id = "tdLongitud";
  trLatLong.appendChild(tdLatitud);
  trLatLong.appendChild(tdLongitud);
  tablaDatosGeograficos.appendChild(trLatLong);

  let trTituloFronteras = document.createElement("tr");
  let thFronteras = document.createElement("th");
  thFronteras.innerHTML = "Fronteras";
  thFronteras.colSpan = "2";
  trTituloFronteras.appendChild(thFronteras);
  tablaDatosGeograficos.appendChild(trTituloFronteras);

  let trFronteras = document.createElement("tr");
  let tdFronteras = document.createElement("td");
  tdFronteras.colSpan = "2";
  trFronteras.appendChild(tdFronteras);
  tablaDatosGeograficos.appendChild(trFronteras);

  let listaFronteras = document.createElement("ul");
  tdFronteras.appendChild(listaFronteras);
  listaFronteras.innerHTML = "XXXXX";
  listaFronteras.id = "listaFronteras";

  tablaDatosGeograficos.style.display = "none";

  let divBanderas = document.createElement("div");
  divBanderas.id = "divBanderas";
  divBanderas.style.display = "none";
  divTablaPais.appendChild(divBanderas);

  let tablaBanderas = document.createElement("table");
  tablaBanderas.id = "tablaBanderas";
  divBanderas.appendChild(tablaBanderas);

  let trBanderas = document.createElement("tr");
  let thBandera = document.createElement("th");
  thBandera.innerHTML = "Bandera";
  trBanderas.appendChild(thBandera);
  tablaBanderas.appendChild(trBanderas);
  let thEscudo = document.createElement("th");
  thEscudo.innerHTML = "Escudo";
  trBanderas.appendChild(thEscudo);

  let trImagenesBanderas = document.createElement("tr");
  let tdImagenBandera = document.createElement("td");
  tdImagenBandera.id = "tdImagenBandera";
  trImagenesBanderas.appendChild(tdImagenBandera);
  tablaBanderas.appendChild(trImagenesBanderas);
  let tdImagenEscudo = document.createElement("td");
  tdImagenEscudo.id = "tdImagenEscudo";
  trImagenesBanderas.appendChild(tdImagenEscudo);
  tablaBanderas.appendChild(trImagenesBanderas);

  let tablaTraducciones = document.createElement("table");
  tablaTraducciones.id = "tablaTraducciones";
  main.appendChild(tablaTraducciones);
  tablaTraducciones.style.display = "none";

  let tr1Traducciones = document.createElement("tr");
  let th1Traducciones = document.createElement("th");
  th1Traducciones.innerHTML = "Nombre oficial";
  tr1Traducciones.appendChild(th1Traducciones);
  tablaTraducciones.appendChild(tr1Traducciones);
  let th2Traducciones = document.createElement("th");
  th2Traducciones.innerHTML = "Nombre común";
  tr1Traducciones.appendChild(th2Traducciones);
  
  let tr2Traducciones = document.createElement("tr");
  let td1Traducciones = document.createElement("td");
  td1Traducciones.innerHTML = "XXXXX";
  td1Traducciones.id = "td1Traducciones";
  let td2Traducciones = document.createElement("td");
  td2Traducciones.innerHTML = "XXXXX";
  td2Traducciones.id = "td2Traducciones";
  tr2Traducciones.appendChild(td1Traducciones);
  tr2Traducciones.appendChild(td2Traducciones);
  tablaTraducciones.appendChild(tr2Traducciones);

  let modalTraducciones = document.createElement("div");
  modalTraducciones.id = "modalTraducciones";
  modalTraducciones.style.display = "none";
  main.appendChild(modalTraducciones);

  let divContenidoModalTraducciones = document.createElement("div");
  divContenidoModalTraducciones.id = "divContenidoModalTraducciones";
  modalTraducciones.appendChild(divContenidoModalTraducciones);

  let cerrarModalTraducciones = document.createElement("button");
  cerrarModalTraducciones.id = "cerrarModalTraducciones";
  cerrarModalTraducciones.innerHTML = "&times;";
  divContenidoModalTraducciones.appendChild(cerrarModalTraducciones);

  cerrarModalTraducciones.addEventListener("click", function () {
    modalTraducciones.style.display = "none";
  });

  let headerModalTraducciones = document.createElement("header");
  headerModalTraducciones.id = "headerModalTraducciones";
  divContenidoModalTraducciones.appendChild(headerModalTraducciones);
  let h3ModalTraducciones = document.createElement("h3");
  h3ModalTraducciones.innerHTML = "Países en los que se habla este idioma";
  headerModalTraducciones.appendChild(h3ModalTraducciones);

  let divModalTraducciones = document.createElement("div");
  divModalTraducciones.id = "divModalTraducciones";
  divContenidoModalTraducciones.appendChild(divModalTraducciones);

  let pModalTraducciones = document.createElement("p");
  pModalTraducciones.id = "pModalTraducciones";
  divModalTraducciones.appendChild(pModalTraducciones);
  pModalTraducciones.innerHTML = "XXXXX";

  let buttonIngles= document.createElement("button");
  buttonIngles.id = "eng";
  buttonIngles.title = "English";
  let iconoIngles = document.createElement("img");
  iconoIngles.src = "images/iconos-idiomas/reino-unido.png";
  iconoIngles.style.width = "30px";
  buttonIngles.appendChild(iconoIngles);
  divModalTraducciones.appendChild(buttonIngles);
  buttonIngles.addEventListener("click", function () {
    if (response.status == 200)
      traduccionIngles();
  })

  let buttonEspañol= document.createElement("button");
  buttonEspañol.id = "spa";
  buttonEspañol.title = "Spanish";
  let iconoEspañol = document.createElement("img");
  iconoEspañol.src = "images/iconos-idiomas/espana.png";
  iconoEspañol.style.width = "30px";
  buttonEspañol.appendChild(iconoEspañol);
  divModalTraducciones.appendChild(buttonEspañol);
  buttonEspañol.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("spa");
  })

  let buttonArabe = document.createElement("button");
  buttonArabe.id = "ara";
  buttonArabe.title = "Arabic";
  let iconoArabe = document.createElement("img");
  iconoArabe.src = "images/iconos-idiomas/emiratos-arabes-unidos.png";
  iconoArabe.style.width = "30px";
  buttonArabe.appendChild(iconoArabe);
  divModalTraducciones.appendChild(buttonArabe);
  buttonArabe.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("ara");
  })

  let buttonCheco = document.createElement("button");
  buttonCheco.id = "ces";
  buttonCheco.title = "Czech";
  let iconoCheco = document.createElement("img");
  iconoCheco.src = "images/iconos-idiomas/republica-checa.png";
  iconoCheco.style.width = "30px";
  buttonCheco.appendChild(iconoCheco);
  divModalTraducciones.appendChild(buttonCheco);
  buttonCheco.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("ces");
  })

  let buttonAleman = document.createElement("button");
  buttonAleman.id = "deu";
  buttonAleman.title = "German";
  let iconoAleman = document.createElement("img");
  iconoAleman.src = "images/iconos-idiomas/alemania.png";
  iconoAleman.style.width = "30px";
  buttonAleman.appendChild(iconoAleman);
  divModalTraducciones.appendChild(buttonAleman);
  buttonAleman.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("deu");
  })

  let buttonEstonio = document.createElement("button");
  buttonEstonio.id = "est";
  buttonEstonio.title = "Estonian";
  let iconoEstonio = document.createElement("img");
  iconoEstonio.src = "images/iconos-idiomas/estonia.png";
  iconoEstonio.style.width = "30px";
  buttonEstonio.appendChild(iconoEstonio);
  divModalTraducciones.appendChild(buttonEstonio);
  buttonEstonio.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("est");
  })

  let buttonFinlandes = document.createElement("button");
  buttonFinlandes.id = "fin";
  buttonFinlandes.title = "Finnish";
  let iconoFinlandes = document.createElement("img");
  iconoFinlandes.src = "images/iconos-idiomas/finlandia.png";
  iconoFinlandes.style.width = "30px";
  buttonFinlandes.appendChild(iconoFinlandes);
  divModalTraducciones.appendChild(buttonFinlandes);
  buttonFinlandes.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("fin");
  })

  let buttonFrances = document.createElement("button");
  buttonFrances.id = "fra";
  buttonFrances.title = "French";
  let iconoFrances = document.createElement("img");
  iconoFrances.src = "images/iconos-idiomas/francia.png";
  iconoFrances.style.width = "30px";
  buttonFrances.appendChild(iconoFrances);
  divModalTraducciones.appendChild(buttonFrances);
  buttonFrances.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("fra");
  })

  let buttonCroata = document.createElement("button");
  buttonCroata.id = "hrv";
  buttonCroata.title = "Croatian";
  let iconoCroata = document.createElement("img");
  iconoCroata.src = "images/iconos-idiomas/croacia.png";
  iconoCroata.style.width = "30px";
  buttonCroata.appendChild(iconoCroata);
  divModalTraducciones.appendChild(buttonCroata);
  buttonCroata.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("hrv");
  })

  let buttonHungaro = document.createElement("button");
  buttonHungaro.id = "hun";
  buttonHungaro.title = "Hungarian";
  let iconoHungaro = document.createElement("img");
  iconoHungaro.src = "images/iconos-idiomas/hungria.png";
  iconoHungaro.style.width = "30px";
  buttonHungaro.appendChild(iconoHungaro);
  divModalTraducciones.appendChild(buttonHungaro);
  buttonHungaro.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("hun");
  })

  let buttonItaliano = document.createElement("button");
  buttonItaliano.id = "ita";
  buttonItaliano.title = "Italian";
  let iconoItaliano = document.createElement("img");
  iconoItaliano.src = "images/iconos-idiomas/italia.png";
  iconoItaliano.style.width = "30px";
  buttonItaliano.appendChild(iconoItaliano);
  divModalTraducciones.appendChild(buttonItaliano);
  buttonItaliano.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("ita");
  })

  let buttonJapones = document.createElement("button");
  buttonJapones.id = "jpn";
  buttonJapones.title = "Japanese";
  let iconoJapones = document.createElement("img");
  iconoJapones.src = "images/iconos-idiomas/japon.png";
  iconoJapones.style.width = "30px";
  buttonJapones.appendChild(iconoJapones);
  divModalTraducciones.appendChild(buttonJapones);
  buttonJapones.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("jpn");
  })

  let buttonCoreano = document.createElement("button");
  buttonCoreano.id = "kor";
  buttonCoreano.title = "Korean";
  let iconoCoreano = document.createElement("img");
  iconoCoreano.src = "images/iconos-idiomas/corea-del-sur.png";
  iconoCoreano.style.width = "30px";
  buttonCoreano.appendChild(iconoCoreano);
  divModalTraducciones.appendChild(buttonCoreano);
  buttonCoreano.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("kor");
  })

  let buttonHolandes = document.createElement("button");
  buttonHolandes.id = "nld";
  buttonHolandes.title = "Dutch";
  let iconoHolandes = document.createElement("img");
  iconoHolandes.src = "images/iconos-idiomas/paises-bajos.png";
  iconoHolandes.style.width = "30px";
  buttonHolandes.appendChild(iconoHolandes);
  divModalTraducciones.appendChild(buttonHolandes);
  buttonHolandes.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("nld");
  })

  let buttonPolaco = document.createElement("button");
  buttonPolaco.id = "pol";
  buttonPolaco.title = "Polish";
  let iconoPolaco = document.createElement("img");
  iconoPolaco.src = "images/iconos-idiomas/polonia.png";
  iconoPolaco.style.width = "30px";
  buttonPolaco.appendChild(iconoPolaco);
  divModalTraducciones.appendChild(buttonPolaco);
  buttonPolaco.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("pol");
  })

  let buttonPortugues = document.createElement("button");
  buttonPortugues.id = "por";
  buttonPortugues.title = "Portuguese";
  let iconoPortugues = document.createElement("img");
  iconoPortugues.src = "images/iconos-idiomas/portugal.png";
  iconoPortugues.style.width = "30px";
  buttonPortugues.appendChild(iconoPortugues);
  divModalTraducciones.appendChild(buttonPortugues);
  buttonPortugues.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("por");
  })

  let buttonRuso = document.createElement("button");
  buttonRuso.id = "rus";
  buttonRuso.title = "Russian";
  let iconoRuso = document.createElement("img");
  iconoRuso.src = "images/iconos-idiomas/rusia.png";
  iconoRuso.style.width = "30px";
  buttonRuso.appendChild(iconoRuso);
  divModalTraducciones.appendChild(buttonRuso);
  buttonRuso.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("rus");
  })

  let buttonEslovaco = document.createElement("button");
  buttonEslovaco.id = "slk";  
  buttonEslovaco.title = "Slovak";
  let iconoEslovaco = document.createElement("img");
  iconoEslovaco.src = "images/iconos-idiomas/eslovaquia.png";
  iconoEslovaco.style.width = "30px";
  buttonEslovaco.appendChild(iconoEslovaco);
  divModalTraducciones.appendChild(buttonEslovaco);
  buttonEslovaco.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("slk");
  })

  let buttonSerbio = document.createElement("button");
  buttonSerbio.id = "srp";  
  buttonSerbio.title = "Serbian";
  let iconoSerbio = document.createElement("img");
  iconoSerbio.src = "images/iconos-idiomas/serbia.png";
  iconoSerbio.style.width = "30px";
  buttonSerbio.appendChild(iconoSerbio);
  divModalTraducciones.appendChild(buttonSerbio);
  buttonSerbio.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("srp");
  })

  let buttonSueco = document.createElement("button");
  buttonSueco.id = "swe";  
  buttonSueco.title = "Swedish";
  let iconoSueco = document.createElement("img");
  iconoSueco.src = "images/iconos-idiomas/suecia.png";
  iconoSueco.style.width = "30px";
  buttonSueco.appendChild(iconoSueco);
  divModalTraducciones.appendChild(buttonSueco);
  buttonSueco.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("swe");
  })

  let buttonTurco = document.createElement("button");
  buttonTurco.id = "tur";  
  buttonTurco.title = "Turkish";
  let iconoTurco = document.createElement("img");
  iconoTurco.src = "images/iconos-idiomas/turquia.png";
  iconoTurco.style.width = "30px";
  buttonTurco.appendChild(iconoTurco);
  divModalTraducciones.appendChild(buttonTurco);
  buttonTurco.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("tur");
  })

  let buttonUrdu = document.createElement("button");
  buttonUrdu.id = "urd";  
  buttonUrdu.title = "Urdu";
  let iconoUrdu = document.createElement("img");
  iconoUrdu.src = "images/iconos-idiomas/pakistan.png";
  iconoUrdu.style.width = "30px";
  buttonUrdu.appendChild(iconoUrdu);
  divModalTraducciones.appendChild(buttonUrdu);
  buttonUrdu.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("urd");
  })

  let buttonChino = document.createElement("button");
  buttonChino.id = "zho";
  buttonChino.title = "Chinese";
  let iconoChino = document.createElement("img");
  iconoChino.src = "images/iconos-idiomas/china.png";
  iconoChino.style.width = "30px";
  buttonChino.appendChild(iconoChino);
  divModalTraducciones.appendChild(buttonChino);
  buttonChino.addEventListener("click", function () {
    if (response.status == 200)
      traduccionPaises("zho");
  })

  let mensajeError = document.createElement("h2");
  mensajeError.innerHTML = "Por favor, selecciona un país.";
  main.appendChild(mensajeError);
  mensajeError.id = "error";
  mensajeError.style.display = "none";

  let footer = document.createElement("footer");
  body.appendChild(footer);

  let a1Footer = document.createElement("a");
  a1Footer.href = "https://github.com/HananGK";
  let imgGitHubFooter = document.createElement("img");
  imgGitHubFooter.src = "images/GitHub-Embleme.png";
  imgGitHubFooter.width = "100";
  imgGitHubFooter.alt = "Github logo";
  a1Footer.appendChild(imgGitHubFooter);
  footer.appendChild(a1Footer);

  let a2Footer = document.createElement("a");
  a2Footer.href = "https://www.linkedin.com/in/hanangabarron/";
  let imgLinkedInFooter = document.createElement("img");
  imgLinkedInFooter.src = "images/logo-linkedin-icon-4096.png";
  imgLinkedInFooter.width = "55";
  imgLinkedInFooter.alt = "LinkedIn logo";
  a2Footer.appendChild(imgLinkedInFooter);
  footer.appendChild(a2Footer);

  let descripcionFooter = document.createElement("p");
  descripcionFooter.innerHTML = "Proyecto realizado para el curso de Desarrollo Web de Bejob";
  footer.appendChild(descripcionFooter);

  let pFooter = document.createElement("p");
  pFooter.innerHTML ="© 2024 Hanan Gabarrón Kalito. Todos los derechos reservados.";
  footer.appendChild(pFooter);
}

getDatosFetch = async (url) => {
  return new Promise(async function (resolve, reject) {
    response = await fetch(url);
    let paises = await response.json();
    if (response.status != 200)
      reject(response.status)
    resolve(paises);
  });
};

cargarPaises = async (continente) => {
  let paises = await getDatosFetch(`https://restcountries.com/v3.1/region/${continente}`);
  let selectPaises = document.querySelector("#paises");
  selectPaises.innerHTML = "";
  let optionSelecciona = document.createElement("option");
  optionSelecciona.value = 0;
  optionSelecciona.text = "Selecciona país...";
  selectPaises.appendChild(optionSelecciona);

  paises.sort(function (a, b) {
    if (a.name.common > b.name.common) {
      return 1;
    } else {
      return -1;
    }
  });

  paises.forEach((pais) => {
    let option = document.createElement("option");
    option.value = pais.cca2;
    option.text = pais.name.common;
    selectPaises.appendChild(option);
  });
};

cargarTablaPais = async paisElegido => {
  paisCorrecto = true;
  let tablaPais = await getDatosFetch(`https://restcountries.com/v3.1/alpha/${paisElegido}`)
  pais = tablaPais[0];

  let tituloTabla = document.querySelector("#tituloTabla");
  tituloTabla.innerHTML = `Nombre país: ${pais.name.common}`;

  let td_nombreComun = document.querySelector("#td_nombreComun");
  td_nombreComun.innerHTML = `${pais.name.common}`;

  let td_nombreOficial = document.querySelector("#td_nombreOficial");
  td_nombreOficial.innerHTML = `${pais.name.official}`;

  let td_capital = document.querySelector("#td_capital");
  td_capital.innerHTML = `${pais.capital}`;

  let td_poblacion = document.querySelector("#td_poblacion");
  td_poblacion.innerHTML = `${pais.population} habs.`;

  let td_area = document.querySelector("#td_area");
  td_area.innerHTML = `${pais.area} km²`;

  let td_dominios = document.querySelector("#td_dominios");
  let listaDominios = pais.tld;
  td_dominios.innerHTML = "|";
  if (pais.tld != undefined) {
    listaDominios.forEach((dominio) => {
      td_dominios.innerHTML += ` ${dominio} |`;
    });
  } else {
    td_dominios.innerHTML = "No tiene";
  }

  let td_CCA2 = document.querySelector("#td_CCA2");
  td_CCA2.innerHTML = `${pais.cca2}`;

  let td_CCA3 = document.querySelector("#td_CCA3");
  td_CCA3.innerHTML = `${pais.cca3}`;

  let td_CCN3 = document.querySelector("#td_CCN3");
  td_CCN3.innerHTML = `${pais.ccn3}`;

  let td_CIOC = document.querySelector("#td_CIOC");
  if (pais.cioc != undefined) {
    td_CIOC.innerHTML = `${pais.cioc}`;
  } else {
    td_CIOC.innerHTML = "No tiene";
  }

  let td_region = document.querySelector("#td_region");
  td_region.innerHTML = `${pais.region}`;

  let td_subregion = document.querySelector("#td_subregion");
  td_subregion.innerHTML = `${pais.subregion}`;

  let listaIdiomas= document.querySelector("#ul_idiomas_tablaPais");
  let idiomas = pais.languages;
  listaIdiomas.innerHTML = "";
  Object.entries(idiomas).forEach(([key, value]) => {
    let li = document.createElement("li");
    listaIdiomas.appendChild(li);
    li.innerHTML = value;
  }); 

  let dlMonedas = document.querySelector("#dl_Monedas");
  dlMonedas.innerHTML = "";
  let monedas = pais.currencies;

  Object.entries(monedas).forEach(([key, value]) => {
    let dt1Moneda1 = document.createElement("dt");
    dlMonedas.appendChild(dt1Moneda1);
    dt1Moneda1.innerHTML = key;
    let dd1Moneda1 = document.createElement("dd");
    dlMonedas.appendChild(dd1Moneda1);
    dd1Moneda1.innerHTML = `Nombre: ${value.name}`;
    let dd2Moneda1 = document.createElement("dd");
    dlMonedas.appendChild(dd2Moneda1);
    if (value.symbol != undefined) {
      dd2Moneda1.innerHTML = `Símbolo: ${value.symbol}`;
    }else {
      dd2Moneda1.innerHTML = `Símbolo: No tiene`;
    }
  })

  let td_latitud = document.querySelector("#tdLatitud");
  td_latitud.innerHTML = `${pais.latlng[0]}`;

  let td_longitud = document.querySelector("#tdLongitud");
  td_longitud.innerHTML = `${pais.latlng[1]}`;

  let td_fronteras = document.querySelector("#listaFronteras");
  let fronteras = pais.borders;
  
  td_fronteras.innerHTML = "";
  if (fronteras == undefined) {
    td_fronteras.innerHTML = "Sin fronteras";
  } else {
    fronteras.forEach((frontera) => {
      let getFronteras = async (url) => {
        return new Promise(async function (resolve, reject) {
          response = await fetch(url);
          fronteras = await response.json();
          resolve(fronteras);       
      });
      };

      listaFronteras = async (frontera) => {
        let fronteras = await getFronteras(
          `https://restcountries.com/v3.1/alpha/${frontera}`
        );

        let nombreCompletoFrontera = fronteras[0].name.common;
        let liFronteras = document.createElement("li");
        if (fronteras == undefined) {
          liFronteras.innerHTML = "Sin fronteras";
        }
        liFronteras.innerHTML = nombreCompletoFrontera;
        td_fronteras.appendChild(liFronteras);
      };

      listaFronteras(frontera);  
    });
  }

  let flag = new Flag(pais.flags.png, pais.flags.svg, pais.flags.alt);
  let coatOfArms = new CoatOfArms(pais.coatOfArms.png, pais.coatOfArms.svg);

  let td_banderas = document.querySelector("#tdImagenBandera");
  td_banderas.innerHTML = "";
  let td_escudo = document.querySelector("#tdImagenEscudo");
  td_escudo.innerHTML = "";

  let bandera = document.createElement("img");
  bandera.src = flag.png;
  bandera.alt = flag.alt;
  bandera.style.maxWidth = "250px";
  td_banderas.appendChild(bandera);

  let escudo = document.createElement("img");
  escudo.src = coatOfArms.png;
  escudo.style.maxWidth = "250px";
  if (escudo.src == "http://127.0.0.1:5500/Proyecto/proyectoEnProceso/undefined") {
    let noEscudo = document.createElement("p");
    noEscudo.innerHTML = `${pais.name.common} no tiene escudo`;
    td_escudo.appendChild(noEscudo);
  } else {
    escudo.alt = `Escudo de ${pais.name.common}`;
    td_escudo.appendChild(escudo);
  }
  
  let td1Traducciones = document.querySelector("#td1Traducciones");
  td1Traducciones.innerHTML = "";
  let td2Traducciones = document.querySelector("#td2Traducciones");
  td2Traducciones.innerHTML = "";
  let ulTraduccionOficial = document.createElement("ul");
  td1Traducciones.appendChild(ulTraduccionOficial);
  ulTraduccionOficial.id = "ulTraduccionOficial";
  let ulTraduccionComun = document.createElement("ul");
  td2Traducciones.appendChild(ulTraduccionComun);
  ulTraduccionComun.id = "ulTraduccionComun";
  let pModalTraducciones = document.querySelector("#pModalTraducciones");
  pModalTraducciones.innerHTML = "";
  
  let traducciones = pais.translations;

  Object.entries(traducciones).forEach(([key, value]) => {   
    let liTraduccionOficial = document.createElement("li");
    ulTraduccionOficial.appendChild(liTraduccionOficial);
    liTraduccionOficial.innerHTML = value.official;      
    liTraduccionOficial.addEventListener("click", function () {
      modalTraducciones(key)
    })
      
    let liTraduccionComun = document.createElement("li");
    ulTraduccionComun.appendChild(liTraduccionComun);
    liTraduccionComun.innerHTML = value.common;
    liTraduccionComun.addEventListener("click", function () {
      modalTraducciones(key)
    })
  }); 
}


function mostrarTablaDatosGeograficos() {
  document.querySelector("#error").style.display = "none";
  comprobarPais();
  if (paisCorrecto == true) {
    let tablaPais = document.querySelector("#tabla");
    tablaPais.style.display = "none";

    let divBanderas = document.querySelector("#divBanderas");
    divBanderas.style.display = "none";

    let tablaGeo = document.querySelector("#tablaGeo");
    tablaGeo.style.display = "table";

    let tituloTabla = document.querySelector("#tituloTabla");
    tituloTabla.style.display = "block";

    let tablaTraducciones = document.querySelector("#tablaTraducciones");
    tablaTraducciones.style.display = "none";
  }
}

function mostrarDatosGenerales() {
  document.querySelector("#error").style.display = "none";
  comprobarPais();
  if (paisCorrecto == true) {
    let tablaGeo = document.querySelector("#tablaGeo");
    tablaGeo.style.display = "none";

    let tablaPais = document.querySelector("#tabla");
    tablaPais.style.display = "table";

    let divBanderas = document.querySelector("#divBanderas");
    divBanderas.style.display = "none";

    let tituloTabla = document.querySelector("#tituloTabla");
    tituloTabla.style.display = "block";

    let tablaTraducciones = document.querySelector("#tablaTraducciones");
    tablaTraducciones.style.display = "none";
  }
}

function mostrarBanderas() {
  document.querySelector("#error").style.display = "none";
  comprobarPais();
  if (paisCorrecto == true) {
    let tablaGeo = document.querySelector("#tablaGeo");
    tablaGeo.style.display = "none";

    let tablaPais = document.querySelector("#tabla");
    tablaPais.style.display = "none";

    let divBanderas = document.querySelector("#divBanderas");
    divBanderas.style.display = "block";

    let tituloTabla = document.querySelector("#tituloTabla");
    tituloTabla.style.display = "block";

    let tablaTraducciones = document.querySelector("#tablaTraducciones");
    tablaTraducciones.style.display = "none";
  }
}

function mostrarTraducciones() {
  document.querySelector("#error").style.display = "none";
  comprobarPais();
  if (paisCorrecto == true) {
    let tablaGeo = document.querySelector("#tablaGeo");
    tablaGeo.style.display = "none";

    let tablaPais = document.querySelector("#tabla");
    tablaPais.style.display = "none";

    let divBanderas = document.querySelector("#divBanderas");
    divBanderas.style.display = "none";

    let tituloTabla = document.querySelector("#tituloTabla");
    tituloTabla.style.display = "block";

    let tablaTraducciones = document.querySelector("#tablaTraducciones");
    tablaTraducciones.style.display = "table";
  }
}

function comprobarPais() {
  if (
    pais === undefined || pais === null || document.querySelector("#paises").value === "0") {

    document.querySelector("#error").style.display = "block";

    let tablaGeo = document.querySelector("#tablaGeo");
    tablaGeo.style.display = "none";

    let tablaPais = document.querySelector("#tabla");
    tablaPais.style.display = "none";

    let divBanderas = document.querySelector("#divBanderas");
    divBanderas.style.display = "none";

    let tituloTabla = document.querySelector("#tituloTabla");
    tituloTabla.style.display = "none";

    let tablaTraducciones = document.querySelector("#tablaTraducciones");
    tablaTraducciones.style.display = "none";

    paisCorrecto = false;

    return;
  }
}

var modalTraducciones = async (key) => {
  try{
    document.querySelector("#modalTraducciones").style.display = "block";

    let paisesIdiomas = await getDatosFetch(`https://restcountries.com/v3.1/lang/${key}`);

      paisesIdiomas.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        }
        else {
          return 1;
        }
      })

      let pModalTraducciones = document.querySelector("#pModalTraducciones");
      pModalTraducciones.innerHTML = "· ";
      paisesIdiomas.forEach((pais) => {
        let pModalTraducciones = document.querySelector("#pModalTraducciones");
        pModalTraducciones.innerHTML += `${pais.name.common} · `
      })

      traduccionPaises = (id) => {
        pModalTraducciones.innerHTML = "· ";
        paisesIdiomas.forEach((pais) => {
          objetoTraducciones = pais.translations;
          let pModalTraducciones = document.querySelector("#pModalTraducciones");
          Object.entries(objetoTraducciones).forEach((traduccion) => {
            if (traduccion[0] == id) {           
              pModalTraducciones.innerHTML += `${traduccion[1].common} · `
            }
          })    
        })
      }

      traduccionIngles = () => {
        pModalTraducciones.innerHTML = "· ";
        paisesIdiomas.forEach((pais) => { 
          let pModalTraducciones = document.querySelector("#pModalTraducciones");
          pModalTraducciones.innerHTML += `${pais.name.common} · `
        })
      }

  }catch(exception){
    if (exception === 404)
      pModalTraducciones.innerHTML = "No existe ningún país que hable " + key
  }
}

window.onclick = function (event) {
  let modal = document.querySelector("#modalTraducciones");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

class Flag {
  constructor(png, svg, alt) {
    this.png = png;
    this.svg = svg;
    this.alt = alt;
  }
}

class CoatOfArms {
  constructor(png, svg) {
    this.png = png;
    this.svg = svg;
  }
}
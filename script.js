document.addEventListener("DOMContentLoaded", function () {
    // Array con las cosas que amas de TIPE
    const cosasQueAmo = [
        { numero: 1, texto: "Tu sonrisa pe"},
        { numero: 2, texto: "Tus ojopes"},
        { numero: 3, texto: "Cuando te expresaspe"},
        { numero: 4, texto: "Cuando te estresaspe"},
        { numero: 5, texto: "La forma en la que eres"},
        { numero: 6, texto: "Que me escuchaspe"},
        { numero: 7, texto: "Que me entiendes pe"},
        { numero: 8, texto: "Los momentos esquizofrénicos"},
        { numero: 9, texto: "Cuando me cuidaspe y te preocupas por mi pe"},
        { numero: 10, texto: "Cuando dices ush" },
        { numero: 11, texto: "Cuando dices pe oyeeee"},
        { numero: 12, texto: "Tus besopes es mi Cosape favorita" },
        { numero: 13, texto: "Tu humor pe" },
        { numero: 14, texto: "Cuando cantaspe aunque no te des cuenta"},
        { numero: 15, texto: "Cuando me muerdes pe"},
        { numero: 16, texto: "Cuando me dejas cargarte pe"},
        { numero: 17, texto: "Tus abrazopes"},
        { numero: 18, texto: "Los post que me mandas de gatopes" },
        { numero: 19, texto: "Que a pesar que te pregunto mil vecespes si me amas pe y que me jures siempre lo haces"},
        { numero: 20, texto: "Que te gustanpe las hamburguesas 🤑" },
        { numero: 21, texto: "Tu primer besope en las mañanas" },
        { numero: 22, texto: "Que cuides a bella 🤑"},
        { numero: 23, texto: "Tus combinaciones con Tajín 🤑"},
        { numero: 24, texto: "Que me digas pe que me extrañas" },
        { numero: 25, texto: "Cuando te estresaspe estudiando" },
        { numero: 26, texto: "Cuando dices pe obvio obvio"},
        { numero: 27, texto: "Cuando te sale una guayaca de adentro pe"},
        { numero: 28, texto: "La forma en la que me tratas" },
        { numero: 29, texto: "Tú amorpe, es único en esta vidape y es lo que quiero para siempre"}
    ];

    // Función para agregar dinámicamente la lista y las imágenes
    function agregarLista() {
        const lista = document.getElementById("lista");

        cosasQueAmo.forEach((cosa) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${cosa.numero}. ${cosa.texto}<br><img src="${cosa.imagen}" alt="${cosa.texto}">`;
            lista.appendChild(listItem);
        });
    }

    // Llama a la función para agregar la lista cuando se carga la página
    agregarLista();
});

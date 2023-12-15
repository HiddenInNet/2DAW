function abre() {
    var array = [
        "https://www.youtube.com/watch?v=hVEhgdNJgx8",
        "https://www.youtube.com/watch?v=Da-CIlJU8I4",
        "https://www.youtube.com/watch?v=buS7EcT1NPI",
        "https://www.youtube.com/watch?v=G_TywKMydZo",
        "https://www.youtube.com/watch?v=CFu7Hf9C8mU",
        "https://www.youtube.com/watch?v=DG4GWYaJElM",
    ];

    let c = 1000;

    for (let i = 0; i < 2; i++) {
        console.log(array[i]);

        var enlace = array[Math.floor(Math.random() * array.length)];

        window.open(
            enlace,
            "ventana" + i,
            "width=" + Math.random() * c +
            ", height=" + Math.random() * c +
            ", top=" + Math.random() * c +
            ", left=" + Math.random() * c
        );
    }
}

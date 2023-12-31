const produtos = {
    pizzas: [
    {
        id: 0,
        nome: "Pizza de calabreza com queijo",
        preco: '16.00',
        fundo: "fav1",
        favorita: true,
        recomendado: false
    },
    {
        id: 1,
        nome: "Pizza de peperoni com queijo",
        preco: '19.00',
        fundo: "fav2",
        favorita: true,
        recomendado: false
    },
    {
        id: 2,
        nome: "Pizza de peperoni com queijo",
        preco: '19.00',
        fundo: "fav3",
        favorita: true,
        recomendado: false
    },
    {
        id: 3,
        nome: "Pizza de peperoni com queijo e tomate",
        preco: '16.00',
        fundo: "rec1",
        favorita: false,
        recomendado: true
    },
    {
        id: 4,
        nome: "Pizza brotinho com queijo e tomate",
        preco: '12.00',
        fundo: "rec2",
        favorita: false,
        recomendado: true
    },
    ],
    bebidas: [
    {
        id: 5,
        nome: "Coca-cola 2L",
        descricao: "Refrigerante Garrafa 3l Embalagem Econômica",
        preco: "14,99",
        imagem: "coke",
    },
    {
        id: 6,
        nome: "Cerveja Heineken",
        descricao: "Refrigerante Garrafa 3l Embalagem Econômica",
        preco: "17,99",
        imagem: "heineken",
    },
    ]
}

module.exports={
    produtos
}
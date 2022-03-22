export interface Produto {
  name: String;
  price: number;
  imgUrl: string;
  description: string;
}

export let mockProdutos01: Produto[] = [
  {
    name: 'Capacete',
    price: 60,
    description: 'Um capacete Star Wars',
    imgUrl: 'star-wars/01.png',
  },
  {
    name: 'Boneco',
    price: 30,
    description: 'Boneco Star Wars',
    imgUrl: 'star-wars/02.png',
  },
  {
    name: 'Action Figure',
    price: 200,
    description: 'Uma action figure Star Wars',
    imgUrl: 'star-wars/03.png',
  },
  {
    name: 'Stormtrooper',
    price: 2000,
    description: 'Uma Stormtrooper',
    imgUrl: 'star-wars/04.png',
  },
  {
    name: 'Baby Yoda',
    price: 300,
    description: 'Uma Baby Yoda',
    imgUrl: 'star-wars/05.png',
  },
  {
    name: 'Kylo Ren',
    price: 920,
    description: 'Kylo Ren',
    imgUrl: 'star-wars/06.png',
  },
];

export let mockProdutos02: Produto[] = [
  {
    name: 'Controle Xbox One',
    price: 400,
    description: 'Controle',
    imgUrl: 'consoles/01.png',
  },
  {
    name: 'Playstation 5',
    price: 5000,
    description: 'Console Playstation 5',
    imgUrl: 'consoles/02.png',
  },
  {
    name: 'Nintendo',
    price: 900,
    description: 'Console retro Nintendo',
    imgUrl: 'consoles/03.png',
  },
  {
    name: 'Nintendo Switch',
    price: 3000,
    description: 'Console Nintendo Switch',
    imgUrl: 'consoles/04.png',
  },
  {
    name: 'Xbox Series X',
    price: 4000,
    description: 'Console Xbox Series X',
    imgUrl: 'consoles/05.png',
  },
  {
    name: 'Game Boy Color',
    price: 970,
    description: 'Console retro Game Boy Color',
    imgUrl: 'consoles/06.png',
  },
];

export let mockProdutos03: Produto[] = [
  {
    name: 'Camisa Atari',
    price: 60,
    description: 'Camisa Retro Atari',
    imgUrl: 'diversos/01.png',
  },
  {
    name: 'Camisa SNES',
    price: 60,
    description: 'Camisa SNES',
    imgUrl: 'diversos/02.png',
  },
  {
    name: 'Sonic',
    price: 90,
    description: 'Sonic',
    imgUrl: 'diversos/03.png',
  },
  {
    name: 'Radio Retro',
    price: 100,
    description: 'Radio Retro',
    imgUrl: 'diversos/04.png',
  },
  {
    name: 'Camisa Hamburguer',
    price: 60,
    description: 'Camisa Hamburguer',
    imgUrl: 'diversos/05.png',
  },
  {
    name: 'Pikachu',
    price: 230,
    description: 'Pikachu',
    imgUrl: 'diversos/06.png',
  },
];

export let mockCategorias: any[] = [
  { category: 'Star Wars', products: mockProdutos01 },
  { category: 'Consoles', products: mockProdutos02 },
  { category: 'Diversos', products: mockProdutos03 },
];

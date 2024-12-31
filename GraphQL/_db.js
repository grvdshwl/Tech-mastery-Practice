// Mock data for Games
const games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch"],
  },
  {
    id: "2",
    title: "God of War Ragnarok",
    platform: ["PlayStation 5", "PlayStation 4"],
  },
  {
    id: "3",
    title: "Cyberpunk 2077",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
  },
];

// Mock data for Reviews
const reviews = [
  {
    id: "101",
    rating: 9,
    content: "A masterpiece with a vast open world and engaging mechanics.",
    author_id: "201",
    game_id: "1",
  },
  {
    id: "102",
    rating: 8,
    content: "Impressive graphics and storytelling, but has some bugs.",
    author_id: "202",
    game_id: "2",
  },
  {
    id: "103",
    rating: 10,
    content: "An unforgettable journey that redefines the genre.",
    author_id: "203",
    game_id: "3",
  },
  {
    id: "104",
    rating: 7,
    content: "An new journey that redefines the game.",
    author_id: "201",
    game_id: "3",
  },
  {
    id: "105",
    rating: 9,
    content: "An new journey that redefines the game.",
    author_id: "203",
    game_id: "2",
  },
];

// Mock data for Authors
const authors = [
  {
    id: "201",
    name: "Jane Doe",
    verified: true,
  },
  {
    id: "202",
    name: "John Smith",
    verified: false,
  },
  {
    id: "203",
    name: "Emily Taylor",
    verified: true,
  },
];

export const db = { games, reviews, authors };

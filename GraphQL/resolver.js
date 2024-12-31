import { db } from "./_db.js";

export const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      const { id } = args;
      const currentReview = db.reviews.find((review) => review.id === id);
      return currentReview;
    },
    author(_, args) {
      const { id } = args;
      const currentAuthor = db.authors.find((author) => author.id === id);
      return currentAuthor;
    },
    game(_, args) {
      const { id } = args;
      const currentGames = db.games.find((game) => game.id === id);
      return currentGames;
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },
  Mutation: {
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push(game);

      return game;
    },
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id);

      return db.games;
    },
    updateGame(_, args) {
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          return { ...g, ...args.edits };
        }

        return g;
      });

      return db.games.find((g) => g.id === args.id);
    },
  },
};

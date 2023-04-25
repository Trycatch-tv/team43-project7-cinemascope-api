import { Genre } from "../../api/models/genres.js";
import sinon from "sinon";
import genreController from "../../api/controllers/genreController.js";

describe("getGenres", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Should return a list of genres", async () => {
    const genres = [
      {
        genre_id: 1,
        name: "Drama",
      },
      {
        genre_id: 2,
        name: "Crime",
      },
      {
        genre_id: 3,
        name: "Action",
      },
      {
        genre_id: 4,
        name: "War",
      },
      {
        genre_id: 5,
        name: "Adventure",
      },
      {
        genre_id: 6,
        name: "Sci-fi",
      },
      {
        genre_id: 8,
        name: "Thriller",
      },
    ];

    sinon.stub(Genre, "findAll").resolves(genres);

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await genreController.get_genres(req, res);

    sinon.assert.calledOnce(Genre.findAll);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, {
      success: true,
      body: [
        {
          genre_id: 1,
          name: "Drama",
        },
        {
          genre_id: 2,
          name: "Crime",
        },
        {
          genre_id: 3,
          name: "Action",
        },
        {
          genre_id: 4,
          name: "War",
        },
        {
          genre_id: 5,
          name: "Adventure",
        },
        {
          genre_id: 6,
          name: "Sci-fi",
        },
        {
          genre_id: 8,
          name: "Thriller",
        },
      ],
    });
  });

  it("should return a 400 error if an error occurs", async () => {
    const errorMessage = "Bad request";
    sinon.stub(Genre, "findAll").throws(new Error(errorMessage));

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await genreController.get_genres(req, res);

    sinon.assert.calledOnce(Genre.findAll);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledOnce(res.json);
  });
});

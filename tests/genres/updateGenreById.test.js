import { Genre } from "../../api/models/Genres.js";
import sinon from "sinon";
import genreController from "../../api/controllers/genreController.js";

describe("updateGenreById", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Should update a genre when given a valid genre id", async () => {
    const fakeGenre = {
        "genre_id": 1,
        "name": "Sci"
        };

    const genreSaveStub = sinon.stub().resolves(fakeGenre);
    sinon.stub(Genre, "findByPk").resolves(fakeGenre);
    fakeGenre.save = genreSaveStub;

    const req = { params: { genreId: 1 }, body: fakeGenre };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await genreController.update_genre_by_id(req, res);
    sinon.assert.calledOnce(Genre.findByPk);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, 
      {
        "success": true,
        "body": "Successful genre updated"
      });
  });

  it('Should return a 400 when given an invalid genre id', async () => {
    sinon.stub(Genre, 'findByPk').resolves(null);

    const req = { params: { genreId: 100 }, body: {} };
    const res = { 
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
     };

    await genreController.update_genre_by_id(req, res);

    sinon.assert.calledOnce(Genre.findByPk);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledWith(res.json, 
        {
            "success": false,
            "body": "The genre with id: 100 doesn't exists"
        });
  });
});

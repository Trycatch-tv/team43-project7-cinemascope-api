import { Genre } from "../../api/models/genres.js";
import sinon from "sinon";
import genreController from "../../api/controllers/genreController.js";

describe("getGenreById", () => {
  it("Should return a genre object when given a valid genre id", async () => {
    const fakeGenre = {
      "genre_id": 1,
        "name": "Drama"
        };

    const findByPkStub = sinon.stub(Genre, "findByPk").resolves(fakeGenre);
    const res = {
      status: jest.fn().mockReturnThis(),
      json: sinon.spy(),
    };
    const req = { params: { genreId: 1 } };

    await genreController.get_genre_by_id(req, res);

    sinon.assert.calledWith(findByPkStub, 1);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, {
      "success": true,
      "body": {
          "genre_id": 1,
          "name": "Drama"
          }
  });

    findByPkStub.restore();
  });

  it("Should return a 400 error when given an invalid genre id", async () => {
    const findByPkStub = sinon.stub(Genre, "findByPk").resolves(null);
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const req = { params: { genreId: 100 } };

    await genreController.get_genre_by_id(req, res);

    sinon.assert.calledWith(findByPkStub, 100);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json,
      {
        "success": false,
        "body": "The genre with id: 100 doesn't exists"
    });

    findByPkStub.restore();
  });
});

import { Genre } from "../../api/models/Genres.js";
import sinon from "sinon";
import genreController from "../../api/controllers/genreController.js";

describe("createGenre", () => {
  afterEach(() => sinon.restore());

  it("Should create a genre", async () => {
    const req = {
      body: {
        "name":"Test jest"
      },
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
    const createStub = sinon.stub(Genre, "create").resolves(res);
    await genreController.create_genre(req, res);
    sinon.assert.calledOnce(createStub);
    sinon.assert.calledWith(createStub, req.body);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledOnce(res.json);
  });
    it('should return 400 if there is a bad request', async () => {
      const req = {
        body: {},
      };
      const res = {
        sendStatus: sinon.spy(),
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };

      const createStub = sinon.stub(Genre, 'create').rejects(new Error('Bad request'));
      await genreController.create_genre(req, res);

      sinon.assert.calledOnce(createStub);
      sinon.assert.calledOnce(res.status);
      sinon.assert.calledWith(res.status, 400);
    });
});

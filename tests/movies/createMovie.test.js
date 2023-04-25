import { Movie } from "../../api/models/movies.js";
import sinon from "sinon";
import movieController from "../../api/controllers/movieController.js";

describe("createMovie", () => {
  afterEach(() => sinon.restore());

  it("Should create a movie", async () => {
    const req = {
      body: {
        title: "test name",
        cover_url: "test url",
        trailer_url: "test trailer",
        release_date: "2020-01-01",
        directed_by: "test director",
        synopsis: "test synopsis",
      },
    };
    const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
    const createStub = sinon.stub(Movie, "create").resolves(res);
    await movieController.create_movie(req, res);
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

      const createStub = sinon.stub(Movie, 'create').rejects(new Error('Bad request'));
      await movieController.create_movie(req, res);

      sinon.assert.calledOnce(createStub);
      sinon.assert.calledOnce(res.status);
      sinon.assert.calledWith(res.status, 400);
    });
});

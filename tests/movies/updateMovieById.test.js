import { Movie } from "../../api/models/movies.js";
import sinon from "sinon";
import movieController from "../../api/controllers/movieController.js";

describe("updateMovieById", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Should update a movie when given a valid movie id", async () => {
    const fakeMovie = {
      "movie_id": 3,
      "title": "test movie",
      "cover_url": "test cover",
      "trailer_url": "test trailer",
      "release_date": "2022-12-10",
      "directed_by": "test",
      "synopsis": "test"
    };

    const movieSaveStub = sinon.stub().resolves(fakeMovie);
    sinon.stub(Movie, "findByPk").resolves(fakeMovie);
    fakeMovie.save = movieSaveStub;

    const req = { params: { movieId: 3 }, body: fakeMovie };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await movieController.update_movie_by_id(req, res);
    sinon.assert.calledOnce(Movie.findByPk);
    sinon.assert.calledOnce(movieSaveStub);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, 
      {
        "success": true,
        "body": "Successful movie updated"
      });
  });

  it('Should return a 400 when given an invalid movie id', async () => {
    sinon.stub(Movie, 'findByPk').resolves(null);

    const req = { params: { movieId: 3 }, body: {} };
    const res = { 
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
     };

    await movieController.update_movie_by_id(req, res);

    sinon.assert.calledOnce(Movie.findByPk);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledWith(res.json, 
        {
            "success": false,
            "body": "The movie with id: 3 doesn't exists"
        });
  });
});

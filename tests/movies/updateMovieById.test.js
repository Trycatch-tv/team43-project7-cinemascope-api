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
        "title": "Avatar: The Way of Water",
        "cover_url": "https://www.themoviedb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "trailer_url": "https://youtu.be/a8Gx8wiNbs8",
        "release_date": "2022-12-15",
        "directed_by": "James Cameron",
        "synopsis": "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
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

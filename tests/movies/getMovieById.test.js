import { Movie } from "../../api/models/movies.js";
import sinon from "sinon";
import movieController from "../../api/controllers/movieController.js";

describe("getMovieById", () => {
  it("Should return a movie object when given a valid movie id", async () => {
    const fakeMovie = {
      "movie_id": 3,
        "title": "Avatar: The Way of Water",
        "cover_url": "https://www.themoviedb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "trailer_url": "https://youtu.be/a8Gx8wiNbs8",
        "release_date": "2022-12-15",
        "directed_by": "James Cameron",
        "synopsis": "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
    };

    const findByPkStub = sinon.stub(Movie, "findByPk").resolves(fakeMovie);
    const res = {
      status: jest.fn().mockReturnThis(),
      json: sinon.spy(),
    };
    const req = { params: { movieId: 3 } };

    await movieController.get_movie_by_id(req, res);

    sinon.assert.calledWith(findByPkStub, 3);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, {
      "success": true,
      "body": {
          "movie_id": 3,
          "title": "Avatar: The Way of Water",
          "cover_url": "https://www.themoviedb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          "trailer_url": "https://youtu.be/a8Gx8wiNbs8",
          "release_date": "2022-12-15",
          "directed_by": "James Cameron",
          "synopsis": "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
      }
  });

    findByPkStub.restore();
  });

  it("Should return a 400 error when given an invalid movie id", async () => {
    const findByPkStub = sinon.stub(Movie, "findByPk").resolves(null);
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const req = { params: { movieId: 100 } };

    await movieController.get_movie_by_id(req, res);

    sinon.assert.calledWith(findByPkStub, 100);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json,
      {
        "success": false,
        "body": "The movie with id: 100 doesn't exists"
    });

    findByPkStub.restore();
  });
});

import { Movie } from "../../api/models/movies.js";
import { GenreMovie } from "../../api/models/GenresMovie.js";
import { Review } from "../../api/models/Reviews.js";
import sinon from "sinon";
import movieController from "../../api/controllers/movieController.js";

describe('deleteMovie', () => {
    afterEach(() => {
      sinon.restore();
    });
  
    it('Should delete movie and return status 200', async () => {
      const movieId = 3;
      sinon.stub(Movie, 'findByPk').resolves({});
      sinon.stub(GenreMovie, 'destroy').resolves(1);
      sinon.stub(Review, 'destroy').resolves(1);
      sinon.stub(Movie, 'destroy').resolves(1);

  
      const req = { params: { movieId: movieId } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
  
      await movieController.delete_movie_by_id(req, res);
  
      sinon.assert.calledOnce(Movie.findByPk);
      sinon.assert.calledOnce(GenreMovie.destroy);
      sinon.assert.calledOnce(Review.destroy);
      sinon.assert.calledOnce(Movie.destroy);
      sinon.assert.calledOnce(res.status);
      sinon.assert.calledWith(res.status, 200);
    });
  
    it('should return 400 if course is not found', async () => {
      const movieId = 3;
      sinon.stub(Movie, 'findByPk').resolves(null);
      sinon.stub(GenreMovie, 'destroy').resolves(null);
      sinon.stub(Review, 'destroy').resolves(null);
      sinon.stub(Movie, 'destroy').resolves(null);
  
      const req = { params: { movieId: movieId } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
  
      await movieController.delete_movie_by_id(req, res);
  
      sinon.assert.calledOnce(Movie.findByPk);
      sinon.assert.notCalled(GenreMovie.destroy);
      sinon.assert.notCalled(Review.destroy);
      sinon.assert.notCalled(Movie.destroy);
      sinon.assert.calledOnce(res.status);
      sinon.assert.calledWith(res.status, 400);
      sinon.assert.calledOnce(res.json);
    });
  });
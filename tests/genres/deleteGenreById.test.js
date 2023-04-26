import { Genre } from "../../api/models/Genres.js";
import sinon from "sinon";
import genreController from "../../api/controllers/genreController.js";

describe('deleteGenre', () => {
    afterEach(() => {
      sinon.restore();
    });
  
    it('Should delete genre and return status 200', async () => {
      const genreId = 3;
      sinon.stub(Genre, 'findByPk').resolves({});
      sinon.stub(Genre, 'destroy').resolves(1);

  
      const req = { params: { genreId: genreId } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
  
      await genreController.delete_genre_by_id(req, res);
  
      sinon.assert.calledOnce(Genre.findByPk);
      sinon.assert.calledOnce(Genre.destroy);
      sinon.assert.calledOnce(res.status);
      sinon.assert.calledWith(res.status, 200);
    });
  
    it('should return 400 if genre is not found', async () => {
      const genreId = 100;
      sinon.stub(Genre, 'findByPk').resolves(null);
      sinon.stub(Genre, 'destroy').resolves(null);
  
      const req = { params: { genreId: genreId } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
  
      await genreController.delete_genre_by_id(req, res);
  
      sinon.assert.calledOnce(Genre.findByPk);
      sinon.assert.notCalled(Genre.destroy);
      sinon.assert.calledOnce(res.status);
      sinon.assert.calledWith(res.status, 400);
      sinon.assert.calledOnce(res.json);
    });
  });
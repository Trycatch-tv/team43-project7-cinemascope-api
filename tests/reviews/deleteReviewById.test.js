import { Review } from "../../api/models/Reviews.js";
import sinon from "sinon";
import reviewController from "../../api/controllers/reviewController.js";

describe('deleteReview', () => {
    afterEach(() => {
      sinon.restore();
    });
  
    it('Should delete review and return status 200', async () => {
      const reviewId = 3;
      sinon.stub(Review, 'findByPk').resolves({});
      sinon.stub(Review, 'destroy').resolves(1);

  
      const req = { params: { reviewId: reviewId } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
  
      await reviewController.delete_review_by_id(req, res);
  
      sinon.assert.calledOnce(Review.findByPk);
      sinon.assert.calledOnce(Review.destroy);
      sinon.assert.calledOnce(res.status);
      sinon.assert.calledWith(res.status, 200);
    });
  
    it('should return 400 if review is not found', async () => {
      const reviewId = 100;
      sinon.stub(Review, 'findByPk').resolves(null);
      sinon.stub(Review, 'destroy').resolves(null);
  
      const req = { params: { reviewId: reviewId } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy(),
      };
  
      await reviewController.delete_review_by_id(req, res);
  
      sinon.assert.calledOnce(Review.findByPk);
      sinon.assert.notCalled(Review.destroy);
      sinon.assert.calledOnce(res.status);
      sinon.assert.calledWith(res.status, 400);
      sinon.assert.calledOnce(res.json);
    });
  });
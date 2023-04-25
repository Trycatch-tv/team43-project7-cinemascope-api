import { Review } from "../../api/models/reviews.js";
import sinon from "sinon";
import reviewController from "../../api/controllers/reviewController.js";

describe("getReviewById", () => {
  it("Should return a review object when given a valid review id", async () => {
    const fakeReview = {
      review_id: 3,
      movie_id: 3,
      rating: 9,
      review:"The Dark Knight is a thrilling action-packed movie that is both entertaining and thought-provoking. Heath Ledger's performance as the Joker is outstanding.",
    };

    const findByPkStub = sinon.stub(Review, "findByPk").resolves(fakeReview);
    const res = {
      status: jest.fn().mockReturnThis(),
      json: sinon.spy(),
    };
    const req = { params: { reviewId: 3 } };

    await reviewController.get_review_by_id(req, res);

    sinon.assert.calledWith(findByPkStub, 3);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, {
      success: true,
      body: {
        review_id: 3,
        movie_id: 3,
        rating: 9,
        review:"The Dark Knight is a thrilling action-packed movie that is both entertaining and thought-provoking. Heath Ledger's performance as the Joker is outstanding.",
      },
    });

    findByPkStub.restore();
  });

  it("Should return a 400 error when given an invalid review id", async () => {
    const findByPkStub = sinon.stub(Review, "findByPk").resolves(null);
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const req = { params: { reviewId: 100 } };

    await reviewController.get_review_by_id(req, res);

    sinon.assert.calledWith(findByPkStub, 100);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, {
      success: false,
      body: "The review with id: 100 doesn't exists",
    });

    findByPkStub.restore();
  });
});

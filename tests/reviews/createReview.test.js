import { Review } from "../../api/models/Reviews.js";
import sinon from "sinon";
import reviewController from "../../api/controllers/reviewController.js";

describe("createReview", () => {
  afterEach(() => sinon.restore());

  it("Should create a review", async () => {
    const req = {
      body: {
        movie_id: 3,
        rating: 10,
        review: "Test review",
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    const createStub = sinon.stub(Review, "create").resolves(res);
    await reviewController.create_review(req, res);
    sinon.assert.calledOnce(createStub);
    sinon.assert.calledWith(createStub, req.body);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledOnce(res.json);
  });
  it("should return 400 if there is a bad request", async () => {
    const req = {
      body: {},
    };
    const res = {
      sendStatus: sinon.spy(),
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const createStub = sinon
      .stub(Review, "create")
      .rejects(new Error("Bad request"));
    await reviewController.create_review(req, res);

    sinon.assert.calledOnce(createStub);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
  });
});

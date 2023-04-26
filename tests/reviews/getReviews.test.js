import { Review } from "../../api/models/Reviews.js";
import sinon from "sinon";
import reviewController from "../../api/controllers/reviewController.js";

describe("getReview", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Should return a list of reviews", async () => {
    const reviews = [
      {
        review_id: 3,
        movie_id: 3,
        rating: 9,
        review:
          "The Dark Knight is a thrilling action-packed movie that is both entertaining and thought-provoking. Heath Ledger's performance as the Joker is outstanding.",
      },
      {
        review_id: 4,
        movie_id: 4,
        rating: 8.9,
        review:
          "Schindler's List is a powerful and emotional movie that tells the true story of a man who saved many Jews during the Holocaust.",
      },
      {
        review_id: 5,
        movie_id: 5,
        rating: 9,
        review:
          "The Lord of the Rings: The Return of the King is a stunning conclusion to a great trilogy. The battles are epic, and the characters are well developed.",
      },
      {
        review_id: 6,
        movie_id: 6,
        rating: 8.8,
        review:
          "Forrest Gump is a heartwarming movie that teaches us to never give up on our dreams. Tom Hanks gives a fantastic performance as the lovable Forrest Gump.",
      },
      {
        review_id: 8,
        movie_id: 3,
        rating: 10,
        review: "Excellent",
      },
    ];

    sinon.stub(Review, "findAll").resolves(reviews);

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await reviewController.get_reviews(req, res);

    sinon.assert.calledOnce(Review.findAll);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, {
      "success": true,
      "body": [
          {
              "review_id": 3,
              "movie_id": 3,
              "rating": 9,
              "review": "The Dark Knight is a thrilling action-packed movie that is both entertaining and thought-provoking. Heath Ledger's performance as the Joker is outstanding."
          },
          {
              "review_id": 4,
              "movie_id": 4,
              "rating": 8.9,
              "review": "Schindler's List is a powerful and emotional movie that tells the true story of a man who saved many Jews during the Holocaust."
          },
          {
              "review_id": 5,
              "movie_id": 5,
              "rating": 9,
              "review": "The Lord of the Rings: The Return of the King is a stunning conclusion to a great trilogy. The battles are epic, and the characters are well developed."
          },
          {
              "review_id": 6,
              "movie_id": 6,
              "rating": 8.8,
              "review": "Forrest Gump is a heartwarming movie that teaches us to never give up on our dreams. Tom Hanks gives a fantastic performance as the lovable Forrest Gump."
          },
          {
              "review_id": 8,
              "movie_id": 3,
              "rating": 10,
              "review": "Excellent"
          }
      ]
  });
  });

  it("should return a 400 error if an error occurs", async () => {
    const errorMessage = "Bad request";
    sinon.stub(Review, "findAll").throws(new Error(errorMessage));

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await reviewController.get_reviews(req, res);

    sinon.assert.calledOnce(Review.findAll);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledOnce(res.json);
  });
});

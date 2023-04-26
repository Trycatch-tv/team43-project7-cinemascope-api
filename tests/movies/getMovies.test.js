import { Movie } from "../../api/models/movies.js";
import sinon from "sinon";
import movieController from "../../api/controllers/movieController.js";

describe('getMovies', () => {
  afterEach(() => {
    sinon.restore();
  });
  
  it('Should return a list of movies', async () => {
    const movies = [
        {
            "movie_id": 3,
            "title": "Avatar: The Way of Water",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            "trailer_url": "https://youtu.be/a8Gx8wiNbs8",
            "release_date": "2022-12-15",
            "directed_by": "James Cameron",
            "synopsis": "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
            },
            {
            "movie_id": 4,
            "title": "Suzume",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
            "trailer_url": "https://youtu.be/2rPPppw6Bhk",
            "release_date": "2023-04-20",
            "directed_by": "Makoto Shinkai",
            "synopsis": "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right."
            },
            {
            "movie_id": 5,
            "title": "John Wick: Chapter 4",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
            "trailer_url": "https://youtu.be/qEVUtrk8_B4",
            "release_date": "2023-03-23",
            "directed_by": "Chad Stahelski",
            "synopsis": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy."
            },
            {
            "movie_id": 6,
            "title": "M3GAN",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
            "trailer_url": "https://youtu.be/BRb4U99OU80",
            "release_date": "2023-01-05",
            "directed_by": "Gerard Johnstone",
            "synopsis": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece."
            },
            {
            "movie_id": 7,
            "title": "Mighty Morphin Power Rangers: Once & Always",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/vc87upO8vcAGj9OmgH3AIz6ikKB.jpg",
            "trailer_url": "https://youtu.be/ZKE2DC7Xzog",
            "release_date": "2023-04-19",
            "directed_by": "Charlie Haskell",
            "synopsis": "After tragedy strikes, an unlikely young hero takes her rightful place among the Power Rangers to face off against the team's oldest archnemesis."
            },
            {
            "movie_id": 8,
            "title": "Top Gun: Maverick",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
            "trailer_url": "https://youtu.be/qSqVVswa420",
            "release_date": "2022-05-27",
            "directed_by": "Joseph Kosinski",
            "synopsis": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission."
            },
            {
            "movie_id": 9,
            "title": "Shazam! Fury of the Gods",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/3GrRgt6CiLIUXUtoktcv1g2iwT5.jpg",
            "trailer_url": "https://youtu.be/AIc671o9yCI",
            "release_date": "2023-03-16",
            "directed_by": "David F. Sandberg",
            "synopsis": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world."
            },
            {
            "movie_id": 12,
            "title": "Inside",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/dXsiWJWwGwYwOQ6DfYFt5pPBMwT.jpg",
            "trailer_url": "https://youtu.be/DjODCllZj4w",
            "release_date": "2023-03-15",
            "directed_by": "Vasilis Katsoupis",
            "synopsis": "An art thief becomes trapped in a New York penthouse after his heist goes awry. Imprisoned with nothing but priceless works of art, he must use all his cunning and invention to survive."
            },
            {
            "movie_id": 13,
            "title": "Soulmate",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/AfcUiHQFHQ7Ywn3DmvefzNdZuXy.jpg",
            "trailer_url": "https://youtu.be/39lFxCkXDYI",
            "release_date": "2023-03-15",
            "directed_by": "Min Yong-keun",
            "synopsis": " Mi-so and Ha-eun meet in elementary school and quickly become best friends. In high school, Ha-eun meets Jin-woo and starts to have feelings for him, but he starts to have feelings for Mi-so."
            },
            {
            "movie_id": 14,
            "title": "Air",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
            "trailer_url": "https://youtu.be/Euy4Yu6B3nU",
            "release_date": "2023-04-06",
            "directed_by": "Ben Affleck",
            "synopsis": "Discover the game-changing partnership between a then undiscovered Michael Jordan and Nike's fledgling basketball division which revolutionized the world of sports and culture with the Air Jordan brand."
            },
            {
            "movie_id": 16,
            "title": "War of the Worlds: The Attack",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/c3CUKHtQUvPvp9NSFsKwYsPLAdW.jpg",
            "trailer_url": "https://youtu.be/5BCzlUXIpGo",
            "release_date": "2023-04-21",
            "directed_by": "Junaid Syed",
            "synopsis": "Three young astronomers fight to survive a deadly Martian invasion."
            },
            {
            "movie_id": 27,
            "title": "Mario2",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "trailer_url": "https://youtu.be/RjNcTBXTk4I",
            "release_date": "2020-01-01",
            "directed_by": "Aaron Horvath, Michael Jelenic",
            "synopsis": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world."
            },
            {
            "movie_id": 28,
            "title": "Mario3",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "trailer_url": "https://youtu.be/RjNcTBXTk4I",
            "release_date": "2020-01-01",
            "directed_by": "Aaron Horvath, Michael Jelenic",
            "synopsis": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world."
            },
            {
            "movie_id": 29,
            "title": "Mario",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "trailer_url": "https://youtu.be/RjNcTBXTk4I",
            "release_date": "2020-01-01",
            "directed_by": "Aaron Horvath, Michael Jelenic",
            "synopsis": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world."
            },
            {
            "movie_id": 30,
            "title": "test name",
            "cover_url": "test url",
            "trailer_url": "test trailer",
            "release_date": "2020-01-01",
            "directed_by": "test director",
            "synopsis": "test synopsis"
            },
            {
            "movie_id": 31,
            "title": "test name",
            "cover_url": "test url",
            "trailer_url": "test trailer",
            "release_date": "2020-01-01",
            "directed_by": "test director",
            "synopsis": "test synopsis"
            },
            {
            "movie_id": 32,
            "title": "test name",
            "cover_url": "test url",
            "trailer_url": "test trailer",
            "release_date": "2020-01-01",
            "directed_by": "test director",
            "synopsis": "test synopsis"
            },
            {
            "movie_id": 33,
            "title": "test name",
            "cover_url": "test url",
            "trailer_url": "test trailer",
            "release_date": "2020-01-01",
            "directed_by": "test director",
            "synopsis": "test synopsis"
            }
    ];

    sinon.stub(Movie, 'findAll').resolves(movies);

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy()
    };

    await movieController.get_movies(req, res);

    sinon.assert.calledOnce(Movie.findAll);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 200);
    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json,
        {
            "success": true,
            "body": [
            {
            "movie_id": 3,
            "title": "Avatar: The Way of Water",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            "trailer_url": "https://youtu.be/a8Gx8wiNbs8",
            "release_date": "2022-12-15",
            "directed_by": "James Cameron",
            "synopsis": "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
            },
            {
            "movie_id": 4,
            "title": "Suzume",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
            "trailer_url": "https://youtu.be/2rPPppw6Bhk",
            "release_date": "2023-04-20",
            "directed_by": "Makoto Shinkai",
            "synopsis": "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right."
            },
            {
            "movie_id": 5,
            "title": "John Wick: Chapter 4",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
            "trailer_url": "https://youtu.be/qEVUtrk8_B4",
            "release_date": "2023-03-23",
            "directed_by": "Chad Stahelski",
            "synopsis": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy."
            },
            {
            "movie_id": 6,
            "title": "M3GAN",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
            "trailer_url": "https://youtu.be/BRb4U99OU80",
            "release_date": "2023-01-05",
            "directed_by": "Gerard Johnstone",
            "synopsis": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece."
            },
            {
            "movie_id": 7,
            "title": "Mighty Morphin Power Rangers: Once & Always",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/vc87upO8vcAGj9OmgH3AIz6ikKB.jpg",
            "trailer_url": "https://youtu.be/ZKE2DC7Xzog",
            "release_date": "2023-04-19",
            "directed_by": "Charlie Haskell",
            "synopsis": "After tragedy strikes, an unlikely young hero takes her rightful place among the Power Rangers to face off against the team's oldest archnemesis."
            },
            {
            "movie_id": 8,
            "title": "Top Gun: Maverick",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
            "trailer_url": "https://youtu.be/qSqVVswa420",
            "release_date": "2022-05-27",
            "directed_by": "Joseph Kosinski",
            "synopsis": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission."
            },
            {
            "movie_id": 9,
            "title": "Shazam! Fury of the Gods",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/3GrRgt6CiLIUXUtoktcv1g2iwT5.jpg",
            "trailer_url": "https://youtu.be/AIc671o9yCI",
            "release_date": "2023-03-16",
            "directed_by": "David F. Sandberg",
            "synopsis": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world."
            },
            {
            "movie_id": 12,
            "title": "Inside",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/dXsiWJWwGwYwOQ6DfYFt5pPBMwT.jpg",
            "trailer_url": "https://youtu.be/DjODCllZj4w",
            "release_date": "2023-03-15",
            "directed_by": "Vasilis Katsoupis",
            "synopsis": "An art thief becomes trapped in a New York penthouse after his heist goes awry. Imprisoned with nothing but priceless works of art, he must use all his cunning and invention to survive."
            },
            {
            "movie_id": 13,
            "title": "Soulmate",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/AfcUiHQFHQ7Ywn3DmvefzNdZuXy.jpg",
            "trailer_url": "https://youtu.be/39lFxCkXDYI",
            "release_date": "2023-03-15",
            "directed_by": "Min Yong-keun",
            "synopsis": " Mi-so and Ha-eun meet in elementary school and quickly become best friends. In high school, Ha-eun meets Jin-woo and starts to have feelings for him, but he starts to have feelings for Mi-so."
            },
            {
            "movie_id": 14,
            "title": "Air",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
            "trailer_url": "https://youtu.be/Euy4Yu6B3nU",
            "release_date": "2023-04-06",
            "directed_by": "Ben Affleck",
            "synopsis": "Discover the game-changing partnership between a then undiscovered Michael Jordan and Nike's fledgling basketball division which revolutionized the world of sports and culture with the Air Jordan brand."
            },
            {
            "movie_id": 16,
            "title": "War of the Worlds: The Attack",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/c3CUKHtQUvPvp9NSFsKwYsPLAdW.jpg",
            "trailer_url": "https://youtu.be/5BCzlUXIpGo",
            "release_date": "2023-04-21",
            "directed_by": "Junaid Syed",
            "synopsis": "Three young astronomers fight to survive a deadly Martian invasion."
            },
            {
            "movie_id": 27,
            "title": "Mario2",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "trailer_url": "https://youtu.be/RjNcTBXTk4I",
            "release_date": "2020-01-01",
            "directed_by": "Aaron Horvath, Michael Jelenic",
            "synopsis": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world."
            },
            {
            "movie_id": 28,
            "title": "Mario3",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "trailer_url": "https://youtu.be/RjNcTBXTk4I",
            "release_date": "2020-01-01",
            "directed_by": "Aaron Horvath, Michael Jelenic",
            "synopsis": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world."
            },
            {
            "movie_id": 29,
            "title": "Mario",
            "cover_url": "https://www.themoviedb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "trailer_url": "https://youtu.be/RjNcTBXTk4I",
            "release_date": "2020-01-01",
            "directed_by": "Aaron Horvath, Michael Jelenic",
            "synopsis": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world."
            },
            {
            "movie_id": 30,
            "title": "test name",
            "cover_url": "test url",
            "trailer_url": "test trailer",
            "release_date": "2020-01-01",
            "directed_by": "test director",
            "synopsis": "test synopsis"
            },
            {
            "movie_id": 31,
            "title": "test name",
            "cover_url": "test url",
            "trailer_url": "test trailer",
            "release_date": "2020-01-01",
            "directed_by": "test director",
            "synopsis": "test synopsis"
            },
            {
            "movie_id": 32,
            "title": "test name",
            "cover_url": "test url",
            "trailer_url": "test trailer",
            "release_date": "2020-01-01",
            "directed_by": "test director",
            "synopsis": "test synopsis"
            },
            {
            "movie_id": 33,
            "title": "test name",
            "cover_url": "test url",
            "trailer_url": "test trailer",
            "release_date": "2020-01-01",
            "directed_by": "test director",
            "synopsis": "test synopsis"
            }
            ]
            });
  });

  it('should return a 400 error if an error occurs', async () => {
    const errorMessage = 'Bad request';
    sinon.stub(Movie, 'findAll').throws(new Error(errorMessage));

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy()
    };

    await movieController.get_movies(req, res);

    sinon.assert.calledOnce(Movie.findAll);
    sinon.assert.calledOnce(res.status);
    sinon.assert.calledWith(res.status, 400);
    sinon.assert.calledOnce(res.json);
  });
});
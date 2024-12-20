import { useState, useEffect } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState(""); // Name input state
  const [rating, setRating] = useState(0); // Rating input state
  const [reviewText, setReviewText] = useState(""); // Review input state

  const API_URL = "https://randomuser.me/api/?results=5";

  // Generate review text and assign ratings based on text
  const generateReviewTextAndRating = () => {
    const reviewTemplates = [
      { text: "Exceptional developer! Delivered the project perfectly.", rating: 5 },
      { text: "Great work overall, just a few minor issues.", rating: 4 },
      { text: "Satisfactory work, but could improve communication.", rating: 4 },
      { text: "Had some issues, but they resolved them eventually.", rating: 3 },
      { text: "Absolutely perfect, just what I want.", rating: 5 },
    ];
    return reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)];
  };

  // Fetch reviews from the Random User API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const developerReviews = data.results.map((user) => {
          const { text, rating } = generateReviewTextAndRating();

          return {
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            location: `${user.location.city}, ${user.location.country}`,
            rating,
            text,
            picture: user.picture.medium, // User profile picture
          };
        });

        setReviews(developerReviews);
      } catch (error) {
        console.error("Error fetching random user data:", error);
      }
    };

    fetchReviews();
  }, []);

  // Handle star rating change
  const handleRatingChange = (newRating) => setRating(newRating);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "reviewText") setReviewText(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      name,
      rating,
      text: reviewText,
      location: "Anonymous", // Placeholder for user location
      picture: "https://via.placeholder.com/150", // Placeholder image
    };

    if (!name || !reviewText || rating === 0) {
      alert("Please fill in all fields and provide a rating.");
      return;
    }

    setReviews([...reviews, newReview]); // Update reviews list
    setName(""); // Reset form fields
    setRating(0);
    setReviewText("");
  };

  return (
    <section id="review" className="py-12 bg-gray-900 text-white px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8">
        Reviews
      </h2>
      <div className="max-w-4xl mx-auto">
        {/* Display existing reviews */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={review.picture}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-xl font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.location}</p>
                </div>
              </div>
              <p className="text-yellow-400 my-2">
                Rating: {"★".repeat(review.rating)}
              </p>
              <p className="text-gray-200">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="mt-10 text-center">
          <p className="text-lg text-stone-300 mb-6">
            Want to leave a review? Fill out the form below
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
                className="mt-2 p-3 w-full bg-gray-600 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="rating" className="block text-lg font-medium">
                Rating (1-5)
              </label>
              <div className="flex justify-center space-x-2 mt-2">
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <span
                    key={starValue}
                    onClick={() => handleRatingChange(starValue)}
                    className={`cursor-pointer text-3xl ${
                      starValue <= rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="reviewText" className="block text-lg font-medium">
                Your Review
              </label>
              <textarea
                id="reviewText"
                name="reviewText"
                value={reviewText}
                onChange={handleInputChange}
                rows="4"
                className="mt-2 p-3 w-full bg-gray-600 text-white rounded-md focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-6 bg-blue-500 text-white font-semibold py-2 px-8 rounded-full hover:bg-blue-400 transition-colors"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
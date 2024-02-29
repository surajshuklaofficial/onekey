"use client";
import React, { useEffect, useState } from "react";

interface TestimonialData {
  id: number;
  name: string;
  comment: string;
}

const Testimonial: React.FC = () => {
  // Fake testimonial data
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      name: "John Doe",
      comment:
        "OneKey has completely transformed how our organization manages access to various services. The single sign-on solution is incredibly convenient, and our employees love the seamless experience. Highly recommended!",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment:
        "As an administrator, I appreciate how easy it is to manage user access and permissions with OneKey. The intuitive interface and robust features make my job much simpler. Thank you for such a great product!",
    },
    {
      id: 3,
      name: "David Johnson",
      comment:
        "We've been using OneKey for our organization's authentication needs, and it's been a game-changer. The support team is responsive and helpful, and the platform itself is reliable and user-friendly. Two thumbs up!",
    },
    {
      id: 4,
      name: "Emily Brown",
      comment:
        "With OneKey, our employees can now access all the tools and resources they need with just one login. It has saved us time and improved productivity across the board. Couldn't be happier with the results!",
    },
    {
      id: 5,
      name: "Michael Wilson",
      comment:
        "I was skeptical at first, but after implementing OneKey, I can't imagine going back to managing multiple passwords. It's such a time-saver, and the peace of mind knowing our data is secure is priceless. Thanks, OneKey team!",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        currentTestimonial === testimonials.length - 1
          ? 0
          : currentTestimonial + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentTestimonial]); // You should add currentTestimonial to the dependency array since you're using it inside the effect

  const handleNext = () => {
    setCurrentTestimonial(
      currentTestimonial === testimonials.length - 1
        ? 0
        : currentTestimonial + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      currentTestimonial === 0
        ? testimonials.length - 1
        : currentTestimonial - 1
    );
  };

  return (
    <div className="py-12 gradient-1 min-h-[650px] sm:min-h-0  flex justify-between flex-col">
      <div className="max-w-3xl mx-auto p-2">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Testimonials
        </h2>
        <div className="flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              {testimonials[currentTestimonial].name}
            </h3>
            <p className="text-gray-600">
              {testimonials[currentTestimonial].comment}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full items-center justify-center p-4">
        <button
          onClick={handlePrev}
          className="border rounded-full p-2 w-8 h-8 flex-center bg-white shadow"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="border rounded-full p-2 w-8 h-8 flex-center bg-white shadow"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;

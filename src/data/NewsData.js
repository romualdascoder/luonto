import ImageOne from "../assets/hotel-5.jpg";
import ImageTwo from "../assets/news.jpg";

export const NewsDataTitle = {
  title: "View our newest Apartments",
};

export const NewsData = [
  {
    heading: "Luxury apartments in NYC",
    buttonLabel: "View apartments",
    path: "/rentals",
    image: ImageOne,
    alt: "news",
    delay: 100,
  },
  {
    heading: "Apartments in Austin",
    buttonLabel: "View apartments",
    path: "/rentals",
    image: ImageTwo,
    alt: "news",
    delay: 100,
  },
];

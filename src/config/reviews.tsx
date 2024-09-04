import thumb from "../assets/Reviewer.jpg";
import i18next from "i18next";

export interface review {
  thumb: any;
  reviewer: string;
  stars: number;
  text: string;
}
export const lessReviews: review[] = [
  {
    thumb,
    reviewer: "John Doe",
    stars: 4,
    text: i18next.t("home.reviews.lr.text1"),
  },
  {
    thumb,
    reviewer: "Jane Smith",
    stars: 5,
    text: i18next.t("home.reviews.lr.text2"),
  },
  {
    thumb,
    reviewer: "Michael Johnson",
    stars: 3,
    text: i18next.t("home.reviews.lr.text3"),
  },
];

export const moreReviews: review[] = [
  {
    thumb,
    reviewer: "John Doe",
    stars: 4,
    text: "I had a wonderful experience at this beauty salon. The staff were incredibly attentive and friendly. My stylist, Sarah, really listened to what I wanted and gave me a haircut that exceeded my expectations.",
  },
  {
    thumb,
    reviewer: "Jane Smith",
    stars: 5,
    text: "This salon is absolutely amazing! I've been coming here for years, and they never disappoint. The stylists are not only skilled but also genuinely care about their clients.",
  },
  {
    thumb,
    reviewer: "Michael Johnson",
    stars: 3,
    text: "My experience at this salon was decent overall. The haircut I received was good, but I felt it was a bit pricey for what I got.",
  },
  {
    thumb,
    reviewer: "Emily Brown",
    stars: 5,
    text: "I cannot say enough good things about this salon! From the moment I walked in, I felt welcomed and valued as a client. The stylists here are true artists who take the time to understand your hair goals and deliver results that exceed expectations. The salon environment is luxurious yet inviting, and the attention to detail is impeccable. Whether you're looking for a simple haircut or a complete makeover, this salon is the place to go!",
  },
  {
    thumb,
    reviewer: "David Wilson",
    stars: 2,
    text: "My experience at this salon was disappointing. Despite showing pictures and explaining what I wanted, the stylist seemed rushed and didn't really listen to my requests. The haircut I received was not what I had in mind, and I left feeling frustrated. The salon itself was clean, but the overall service fell short of my expectations. I hope they can improve their communication and client care in the future.",
  },
  {
    thumb,
    reviewer: "Sarah Martinez",
    stars: 4,
    text: "I had a great experience at this salon! The stylist I saw was skilled and friendly, and I loved the haircut she gave me. The salon has a trendy yet comfortable atmosphere, and I felt relaxed throughout my visit. The only reason I didn't give it five stars is because the pricing was a bit higher than I expected. Overall, though, I would definitely recommend this salon to friends and family.",
  },
];

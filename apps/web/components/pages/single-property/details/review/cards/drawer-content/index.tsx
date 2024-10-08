import { TReview } from "@/types";
import ReviewsCard from "./card";
import { useTranslations } from "next-intl";

const ReviewsDrawerContent = ({ reviews }: { reviews: TReview[] }) => {
  const t = useTranslations("single.review");
  return (
    <div className="flex flex-col gap-2  ">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewsCard key={index} review={review} />
        ))
      ) : (
        <div className="text-center mt-7">{t("no-review")}</div>
      )}
    </div>
  );
};

export default ReviewsDrawerContent;

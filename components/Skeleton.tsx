import { NextPage } from "next";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  count: number;
};

const LoadingSkeleton: NextPage<Props> = ({ count }) => {
  return (
    <SkeletonTheme baseColor="#e2dede" highlightColor="#f3efef89">
      <Skeleton count={count} style={{ display: "block" }} />
    </SkeletonTheme>
  );
};

export default LoadingSkeleton;

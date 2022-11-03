import { ScrollMenu } from "react-horizontal-scrolling-menu";
import PropTypes from "prop-types";
import BisChevronRightCircle from "@meronex/icons/bi/BisChevronRightCircle";
import { onWheel, usePreventBodyScroll } from "../../../data/ScrollFunction";
import ContentCard from "./ContentCard";

export default function ContentList({ title, hook, background }) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <div
      className="listContainer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w780${background}), linear-gradient(0deg, #e66d38, #e66d38)`,
      }}
    >
      <h2>
        {title}{" "}
        <span>
          <BisChevronRightCircle />
        </span>
      </h2>
      <hr />
      <ul
        className="movieList"
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
      >
        <ScrollMenu onWheel={onWheel}>
          {hook.map((c) => (
            <ContentCard c={c} />
          ))}
        </ScrollMenu>
      </ul>
    </div>
  );
}

ContentList.propTypes = {
  title: PropTypes.string.isRequired,
  hook: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.array,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.number,
    ])
  ).isRequired,
  background: PropTypes.string.isRequired,
};

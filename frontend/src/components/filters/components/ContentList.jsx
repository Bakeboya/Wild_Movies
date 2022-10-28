import { ScrollMenu } from "react-horizontal-scrolling-menu";
import PropTypes from "prop-types";
import { useMoviesCategories } from "../../../data/DataFetch";
import { onWheel, usePreventBodyScroll } from "../../../data/ScrollFunction";
import ContentCard from "./ContentCard";

export default function ContentList({ title, hook }) {
  const { moviesCategories } = useMoviesCategories();
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <div className="listContainer">
      <h2>{title}</h2>
      <hr />
      <ul
        className="movieList"
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
      >
        <ScrollMenu onWheel={onWheel}>
          {hook.map((c) => (
            <ContentCard c={c} moviesCategories={moviesCategories} />
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
};

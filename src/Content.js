import Overview from "./Overview";
import Ingredients from "./Ingredients";

export default function Content(props) {
  return (
    <>
      {props.currentPage == 2 && <Overview />}
      {props.currentPage == 4 && <Ingredients />}
    </>
  );
}

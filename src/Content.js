import Overview from "./Overview";

export default function Content(props) {
  return <>{props.currentPage == 1 && <Overview />}</>;
}

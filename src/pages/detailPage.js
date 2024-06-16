import { useLocation} from "react-router-dom";

function DetailPage() {
    const {state} = useLocation();
  return <>
    <div>{state.title}</div>
    <div>{}</div>
     
  </>;
}

export default DetailPage;

import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector, resetAlert } from "../redux/reducers/alertReducer";

export const Timer = () => {
  const message = useSelector(alertSelector);
  const dispatch = useDispatch();

  if(message){
    setTimeout(()=>{
     dispatch(resetAlert());

    },2000);
  }
 

  return (
    <div className="page">
      {message &&
        <div className="alert">
        {message}
      </div>}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};

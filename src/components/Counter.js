import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Counter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end !== undefined ? end : 100}
      duration={3}
      decimals={decimals !== undefined ? decimals : 0}
    >


      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className="tonni_tm_counter"
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;

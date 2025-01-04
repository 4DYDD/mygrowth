import KomporMasak from "./KomporMasak";
import KomporIdle from "./KomporIdle";
import KomporMatang from "./KomporMatang";
import KomporHangus from "./KomporHangus";

const Kompor = ({ value, children, ...props }) => {
  const [status, setStatus] = value.state;

  function handleStatus() {
    if (status.idle) {
      setStatus({
        masak: true,
        idle: false,
        hangus: false,
        matang: false,
      });
    } else {
      setStatus({
        masak: false,
        idle: true,
        hangus: false,
        matang: false,
      });
    }
  }

  return (
    <>
      <div {...props}>
        {status.idle && (
          <KomporIdle handleStatus={handleStatus} value={value.text} />
        )}
        {status.masak && (
          <KomporMasak handleStatus={handleStatus} value={value.text} />
        )}
        {status.matang && (
          <KomporMatang handleStatus={handleStatus} value={value.text} />
        )}
        {status.hangus && (
          <KomporHangus handleStatus={handleStatus} value={value.text} />
        )}
      </div>
    </>
  );
};

export default Kompor;

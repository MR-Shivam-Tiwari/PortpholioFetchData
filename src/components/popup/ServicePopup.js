import Popup from "./Popup";

const ServicePopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="service_popup_informations">
        {data && data.image && (
          <div className="image">
            <img src="img/thumbs/4-2.jpg" alt="" />
            <div
              className="main"
              data-img-url={data.image.url}
              style={{ backgroundImage: `url(${data.image.url})` }}
            />
          </div>
        )}

        <div className="main_title">
          <h3>{data.name}</h3>
        </div>
        <div className="descriptions">
          {data.desc}

        </div>
      </div>
    </Popup>
  );
};
export default ServicePopup;

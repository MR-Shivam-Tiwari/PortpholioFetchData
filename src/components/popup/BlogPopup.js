import Popup from "./Popup";

const BlogPopup = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="news_popup_informations">
        <div className="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={data.img}
            style={{ backgroundImage: `url(${data.img})` }}
          />
        </div>
        <div className="details">
          <div className="metabox">
            <ul>
              <li>
                <span>
                  <a className="c-pointer">{data.author}</a>
                </span>
              </li>
              <li>
                <span>{data.date}</span>
              </li>
            </ul>
          </div>
          <div className="title">
            <h3>{data.title}</h3>
            <div>
              <div />
            </div>
          </div>
        </div>
        <div className="text">
          {data &&
            data.description &&
            data.description.map((des, i) => <p key={i}>{des}</p>)}
        </div>
      </div>
    </Popup>
  );
};
export default BlogPopup;

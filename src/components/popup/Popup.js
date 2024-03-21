import useClickOutside from "../../useClickOutside";

const Popup = ({ open, close, children }) => {
  let domNode = useClickOutside(() => {
    close();
  });
  return (
    <div className={`orido_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a className="c-pointer" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};
export default Popup;

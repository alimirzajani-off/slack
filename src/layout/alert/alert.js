export const Alert = (props) => {
  return (
    <div className="alert">
      <div className="alert-box">
        <div className="alert-box-text">
          <p>{`do you want ${props.req} channel`}</p>
        </div>
        <div className="alert-box-button">
          <button
            className={`btn btn-${props.color} mr-2`}
            onClick={() => props.handle(props.id)}
          >
            {props.req}
          </button>
          <button
            className="btn btn-light"
            onClick={() => props.handleAlert(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

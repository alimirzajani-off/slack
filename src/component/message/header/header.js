import { useState } from "react";
import { connect } from "react-redux";
import { fetchLeaveChannel } from "../../../action";
import { useHistory, useParams } from "react-router";
import { LogoutOutlined } from "@ant-design/icons";
import { Alert } from "../../../layout/alert/alert";

const Header = (props) => {
  let history = useHistory();
  const { id } = useParams();
  const [isAlert, setIsAlert] = useState(false);

  const handleLeave = (id) => {
    history.push("/");
    props.fetchLeaveChannel(id);
  };

  return (
    <>
      <div className="fixed-top d-flex justify-content-between chat-header">
        <div className="d-flex">
          <div className="chat-name">
            <i className="fas fa-hashtag"></i>
            <h5>gereral</h5>
          </div>
          <p>Company-wide announcements and work-based matters</p>
        </div>
        <LogoutOutlined
          className="leave-channel-icon"
          onClick={() => setIsAlert(true)}
        />
      </div>
      {isAlert ? (
        <Alert
          id={id}
          handle={handleLeave}
          handleAlert={setIsAlert}
          req="leave"
          color="danger"
        />
      ) : null}
    </>
  );
};

export default connect(null, { fetchLeaveChannel })(Header);

import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannelList, fetchJoinChannel } from "../../../action";
import { PlusOutlined } from "@ant-design/icons";
import { Alert } from "../../alert/alert";

const ChannelList = (props) => {
  const mounted = useRef();
  const [isAlert, setIsAlert] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (!mounted.current) {
      props.fetchChannelList();
    }
    mounted.current = true;
  });

  const handleLeave = (id) => {
    history.push("/:id");
    props.fetchJoinChannel(id);
  };

  const disPlayChannelList = () => {
    return props.channels.map((item) => {
      return (
        <li
          key={item.id}
          onClick={item.is_member ? null : () => setIsAlert(true)}
        >
          <Link to={`/channel/${item.id}`}>
            <div>
              <i className="fas fa-hashtag"></i>
              {item.name}
            </div>
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <ul className="channel-list">
        <li>
          <div>Channel</div>
        </li>
        {disPlayChannelList()}
        <li>
          <div>
            <PlusOutlined />
            Add Channel
          </div>
        </li>
      </ul>
      {isAlert ? (
        <Alert
          // id={id}
          handle={handleLeave}
          handleAlert={setIsAlert}
          req="leave"
          color="danger"
        />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return { channels: state.channelList };
};

export default connect(mapStateToProps, { fetchChannelList, fetchJoinChannel })(
  ChannelList
);

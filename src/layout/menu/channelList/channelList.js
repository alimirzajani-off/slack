import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannelList, fetchJoinChannel } from "../../../action";
import { PlusOutlined } from "@ant-design/icons";

const ChannelList = (props) => {
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      props.fetchChannelList();
    }
    mounted.current = true;
  });

  const disPlayChannelList = () => {
    return props.channels.map((item) => {
      return (
        <li key={item.id}>
          <Link to={`/channel/${item.id}`}>
            <div className="channel-list-im">
              <div>
                <i className="fas fa-hashtag"></i>
                {item.name}
              </div>
              <div className="pr-3">
                {item.is_member ? null : (
                  <p onClick={() => props.fetchJoinChannel(item.id)}>join</p>
                )}
              </div>
            </div>
          </Link>
        </li>
      );
    });
  };

  return (
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
  );
};

const mapStateToProps = (state) => {
  return { channels: state.channelList };
};

export default connect(mapStateToProps, { fetchChannelList, fetchJoinChannel })(
  ChannelList
);

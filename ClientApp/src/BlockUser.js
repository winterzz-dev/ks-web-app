/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Popconfirm, Button } from "antd";
import { connect } from "react-redux";
import { CHANGE_MODAL_VISIBLE } from "./redux/action-types";
import { toggleUserBlockAction } from "./redux/actions";

class BlockUser extends React.Component {
  render() {
    const { content = {}, blockUser, blockedUsers = [] } = this.props;

    return (
      <Popconfirm
        title={
          content !== null && blockedUsers.indexOf(content.id) === -1
            ? "Вы уверены что хотите заблокировать пользователя?"
            : "Вы уверены что хотите разблокировать пользователя?"
        }
        onConfirm={() => {
          blockUser(content);
          this.props.triggerModal();
        }}
        okText="Да"
        cancelText="Нет"
      >
        <Button
          type={
            content !== null && blockedUsers.indexOf(content.id) === -1
              ? "danger"
              : "primary"
          }
        >
          {content !== null && blockedUsers.indexOf(content.id) === -1
            ? "Заблокировать пользователя"
            : "Разблокировать пользователя"}
        </Button>
      </Popconfirm>
    );
  }
}

const mapStateToProps = state => {
  return {
    blockedUsers: state.blockedUsers.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    triggerModal: function() {
      return dispatch({
        type: CHANGE_MODAL_VISIBLE
      });
    },
    blockUser: id => {
      let action = toggleUserBlockAction(id.id);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockUser);

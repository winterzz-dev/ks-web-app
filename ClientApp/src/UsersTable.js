import React from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import { showModalAction } from "./redux/actions";
import { setUserBlockAction } from "./redux/actions";

class Users extends React.Component {
  state = {
    columns: [
      {
        title: "User Id",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Username",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "Status",
        dataIndex: "id",
        key: "blockIndex",
        render: text => {
          if (this.props.blockedUsers.indexOf(Number(text)) !== -1)
            return <span className="red-color">Blocked</span>;
          else return <span>Friend</span>;
        }
      }
    ],
    data: []
  };

  onClick = (e, record) => {
    this.props.triggerModal(record);
  };

  async componentDidMount() {
      const response = await fetch("/api/Users/GetUsersList");
      let users = await response.json();
      users.forEach(item => {
          if (item.blocked) {
              this.props.setblockUser(item)
          }
        item.key = item.id;
      });

    this.setState(() => {
      return {
        data: users
      };
    });
  }

  render() {
    const { columns, data } = this.state;

    return (
      <div>
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                this.onClick(event, record);
              }
            };
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
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
    triggerModal: record => {
      let action = showModalAction(record);
      dispatch(action);
      },
      setblockUser: id => {
          let action = setUserBlockAction(id.id);
          dispatch(action);
      }
  };
};

const ConnectedUsers = connect(mapStateToProps, mapDispatchToProps)(Users);
export default ConnectedUsers;

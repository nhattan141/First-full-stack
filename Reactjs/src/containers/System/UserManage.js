import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./UserManage.scss";
import { getAllUsers, createNewUserService, deleteUserService } from "../../services/userService";
import ModalUser from "./ModalUser";
import { emitter } from "../../utils/emitter"

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModelUser: false
        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact()
    }
    getAllUserFromReact = async () => {
        let response = await getAllUsers('All');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModelUser: true
        })
    }

    toggleModalUser = () => {
        this.setState({
            isOpenModelUser: !this.state.isOpenModelUser
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModelUser: false
                })
                // emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleDeleteUser = async (user) => {
        console.log("Click delete ", user)
        try {
            let res = await deleteUserService(user.id)
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact();
            } else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * 
     * life cycle
     * Run component
     * 1 -> Run construct -> init state
     * 2 -> didmount -> set state
     * 3 -> Rerender
     */
    render() {
        console.log(">>> Check render", this.state)
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-containter">
                <ModalUser
                    isOpen={this.state.isOpenModelUser}
                    toggleFromParent={this.toggleModalUser}
                    createNewUse={this.createNewUser}
                />
                <div className="title text-center">Manage Users</div>
                <div className="mx-1">
                    <button className="btn btn-primary px-3"
                        onClick={() => this.handleAddNewUser()}
                    >
                        <i className="fas fa-plus"></i>
                        Add new user
                    </button>
                </div>
                <div className="users-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>

                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn-edit"
                                                onClick={() => this.handleEditUser()}>
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="btn-delete"
                                                onClick={() => this.handleDeleteUser(item)}>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

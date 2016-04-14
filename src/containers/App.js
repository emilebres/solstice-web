// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import LoginActions from "../actions/LoginActions";
import RoomActions from "../actions/RoomActions";
import SocketActions from "../actions/SocketActions";
import SocketHandlerActions from "../actions/SocketHandlerActions";

import SolsticeApp from "../components/SolsticeApp";

const App = (props) => (<SolsticeApp {...props} />);

App.propTypes = {
    actions: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired
};

const mapStateToProps = ({ socket, login })  => ({ socket, login });

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            login: bindActionCreators(LoginActions, dispatch),
            room: bindActionCreators(RoomActions, dispatch),
            socket: bindActionCreators(SocketActions, dispatch),
            socketHandlers: bindActionCreators(SocketHandlerActions, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

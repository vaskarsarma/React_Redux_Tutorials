import React from "react";
import { User } from "../components/User";
import { Main } from "../components/Main";
import { connect } from "react-redux";
import { setName, setAge } from "../actions/userActions";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Barnav")} changeAge={() => this.props.setAge("400")}/>
                <User username={this.props.user.name} userage={this.props.user.age} />
            </div>
        );
    }
}

const mapStateToProps= (state) =>{
    return {
        math:state.math,
        user:state.user
    };
};

const mapDispatchToProps= (dispatch) =>{
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setAge:(age) =>{
            dispatch(setAge(age));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
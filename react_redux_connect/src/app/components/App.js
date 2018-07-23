import React from "react";
import { User } from './User';
import { Main } from './Main';
import { connect } from 'react-redux';

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
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        },
        setAge:(age) =>{
            dispatch({
                type:"SET_AGE",
                payload:age
            });
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
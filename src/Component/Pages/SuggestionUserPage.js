import React, { Component } from 'react';
import NavBar from '../Layout/NavBar';
import { Container } from '@material-ui/core';
import HOC from './HOC';


class SuggestionUserPage extends Component {


    render() {
        return (<div>
            <NavBar />
            <Container maxWidth="lg" style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <br />
                <br />
                <div className="row mb-5">
                    <div className="pt-4 text-center">
                        <button
                            className="btn btn-primary w-50 "
                            onClick={() => this.props.onClickAddFunction()}
                        >
                            ADD SUGGESTION
                        </button>
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <Container maxwidth="sm" style={{ textAlign: "center", backgroundColor: 'whitesmoke' }}>
                        <h4>
                            ALL SUGESSTION OF USERS IS AVAILABLE HERE
                        </h4>
                    </Container>
                    <br />
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter SchoolName"
                        onChange={
                            this.props.filterBySchoolName
                        }
                    />
                    <br />
                    <br />
                </div>
                <Container maxWidth="md" style={{ overflowX: 'auto' }}>
                    <div className="conatiner">
                        <div className="row">
                            <table className="table table-dark table-stripped table-hover m-auto">
                                <thead className="table-light ">
                                    <tr className="table-secondary">
                                        <th>NAME</th>
                                        <th>SCHOOL NAME</th>
                                        <th>SCHOOL ADDRESS</th>
                                        <th>ABOUT</th>
                                        <th>VIEW</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.data &&
                                        this.props.data.map((user) => {
                                            const { id, name, email, schoolName, schoolAddress, contactNo, schoolEmailId, affilation, about } = user;
                                            return (
                                                <tr key={id}>
                                                    <td>{name}</td>
                                                    <td>{schoolName}</td>
                                                    <td>{schoolAddress}</td>
                                                    <td>{about}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-outline-info "
                                                            onClick={() => this.props.onClickViewFunction(id)}
                                                        >
                                                            View
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
                <br />
                <br />
            </Container>

        </div>)
    }
}

const EnhancedUserSuggestionPage = HOC(SuggestionUserPage);
export default EnhancedUserSuggestionPage;
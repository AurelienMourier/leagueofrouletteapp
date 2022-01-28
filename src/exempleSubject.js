import React, { Component } from "react";
import axios from 'axios';
import { Button } from "@mui/material";

export default class exempleSubject extends Component 
{
    constructor(props) 
    {
        super(props)

        this.state = {
            subjects: [],
            name: "",
            subjectById: {},
            subjectIdDelete: {},
        }
    }

    componentDidMount() {
        axios.get(`https://localhost:5001/api/subjects`).then(res => {
            const subjects = res.data;
            this.setState({ subjects });
        })
    }

    getSubjectById(id) {
        axios.get(`https://localhost:5001/api/subjects/${id}`).then(res => {
            this.setState({subjectById: res.data})
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name, e.target.value);
    }
    
    handleSubmit = event => {
        event.preventDefault();

        const Subject = {
            name: this.state.name
        };

        axios.post(`https://localhost:5001/api/subjects`, Subject).then(res => {
            
        })
        this.setState({subjects: [...this.state.subjects, Subject.name]})
    }

    deleteSubject(){
        axios.delete(`https://localhost:5001/api/subjects/${this.state.subjectIdDelete}`).then(res => {

        })
    }

    render = () => (
        <div className="exempleSubject">
            <ul>
                { this.state.subjects.map(subject => <li>{subject.name}</li>)}
            </ul>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Add subject:
                    <input type="text" name="name" onChange={(e) => this.handleChange(e)} />
                </label>
                <button type="submit">Add</button>
            </form>

            <Button onClick={ () => this.getSubjectById(1) }>appuie</Button>
            <p>{this.state.subjectById.name}</p>


            <form onSubmit={this.deleteSubject}>
                <label>
                    Delete subject id:
                    <input type="text" name="subjectIdDelete" onChange={ (e) => this.handleChange(e)} />
                </label>
                <Button type="submit">Delete</Button>
            </form>
        </div>
    );
}
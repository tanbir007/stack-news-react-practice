import React, { Component } from 'react';
import {newsCatagory} from '../news';

class Header extends Component {

    state={
        searchTerm:''
    }
    handleChange= e=>{
        this.setState({searchTerm: e.target.value});

    }

    handleKeyPress= e=>{

    }
    render() {
const {category} = this.props;

        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{fontWeight:'300'}}>
                    Block Buster Headlines
                </h1>
                <input
                 className='form-control' type='search' 
                 placeholder="Search anything..."
                 value={this.state.searchTerm}
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress}
                ></input>
                <div className="my-4">
                    {newsCatagory &&
                    Object.keys(newsCatagory).map((item) => {
                        if (category===newsCatagory[item]){
                            return (
                                <button className='btn btn-sm btn-warning mr-2 mb-2'>{`#${newsCatagory[item]}`}</button>
                            )

                        }
                        else return (
                            <button className='btn-btn-warning mr-2 mb-2'>{`#${newsCatagory[item]}`}</button>
                        )

                    })

                }
                </div>
                
            </div>
        );
    }
}

export default Header;
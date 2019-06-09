// Allows users to enter any Search Term 
import React, {Component} from 'react';
import axios from 'axios';
import GifCard from './GifCard.js';

class SearchField extends Component
{
        state = {
            searchTerm: "",
            search:true,
            searchArray: []
        }
    handleSubmit = async(event) =>
    {
        event.preventDefault();
        //axios call here
        let url = "http://api.giphy.com/v1/gifs/search?q=";
        let search = this.state.searchTerm;
        let apiKey = "&api_key=yx8jsvD0Z8fIsZjCFJXpjGDM9KOrPQd1";
        url = url + search+ apiKey;

        await axios.get(url)
        .then(response =>
            {
                this.setState({
                    searchArray:response.data.data,
                    search:false
                });
            });
    }

    handleChange = (event) =>
    {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render(){
        if(this.state.search === true){
            return(
                <div>
                    Search for Gifs:
                    <input value = {this.state.tempSearch} onChange = {this.handleChange}></input>
                    <button onClick = {this.handleSubmit}>SEARCH</button>
                </div>
            );
        }
        else{
            return(
                <ul>
                   {this.state.searchArray.map(element =>
                    <li><GifCard url = {element.url}/></li>
                    )}
                </ul>         

            );
        }
    }
}

export default SearchField;
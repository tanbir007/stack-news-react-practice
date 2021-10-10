import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {newsCatagory} from './news'
import Header from './components/Header';
import NewsList from './components/NewsList';
import Pagination from './components/Pagination';
import Loading from './components/Loading';

const fakeNews =[
  {name: "Emergency Dental Care" ,
  title: 'Title',
  content: 'Content',
  urlToImage:'https://linktonews.com',
  url: 'http://linktonews.',
  publishedAt:"Published Date and time",
  source:{
    name:"'CNN"
  },
}



]






class App extends React.Component  {

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header  category={newsCatagory.science}/>
            <div className="d-flex ">
              <p className='text-black-50'>
                About {0} result found
              </p>
              <p className='text-black-50  ml-auto '>
                {1} page of {100}
              </p>
            </div>
            <NewsList news={fakeNews}/>
            <Pagination/>
            <Loading/>
          </div>

        </div>
      </div>
    )
  }
}

export default App;

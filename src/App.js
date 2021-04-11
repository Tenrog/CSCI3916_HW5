import React from 'react';
import './App.css';
import MovieHeader from './components/Defunct/movieheader';
import MovieList from './components/Defunct/movielist';
import Movie from './components/Defunct/movie';
import Authentication from './components/authentication';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './stores/store'

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <HashRouter>
            <div>
              <MovieHeader />
              <Route exact path="/" render={()=><MovieList />}/>
              <Route exact path="/movielist" render={()=><MovieList />}/>
              <Route exact path="/movie/:movieId" render={()=><Movie />}/>
              <Route path="/signin" render={()=><Authentication />}/>
            </div>
          </HashRouter>
        </Provider>
      </div>
  );
}

export default App;

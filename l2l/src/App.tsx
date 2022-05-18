import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import './body.css';

function App() {

	return (

    // there's gotta be 5 pages:
    //
    // home for the whole song list
    // song, which is the main learning page
    // add song to add songs
    // favorite songs to see only the favorite songs list
    // sentences for the anki deck generator page
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={ HomePage } />
					<Route path="/song" component={ SongPage } />
					<Route path="/add" component={ AddPage } />
					<Route path="/favorites" component={ FavoritesPage } />
          <Route path="/sentences" component={ SentencesPage } />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
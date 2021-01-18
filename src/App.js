import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


function App() {
  //States
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([])
  const [showMaxNomMsg, setShowMaxNomMsg] = useState(false);
  const [showCongratulationMsg, setShowCongratulationMsg] = useState(false);

  //Load API key
  const omdb_key = process.env.REACT_APP_OMDB_API_KEY
  //Load previous nominations
  useEffect(() => {
    if (localStorage.getItem("nominations")) {
      setNominations(JSON.parse(localStorage.getItem("nominations")));
    }
  }, [])
  const setSearchName = (e) => {
    setName(e.target.value)
  }
  //Database searching page 1
  const searchDatabase = () => {
    fetch(`https://www.omdbapi.com/?s=${name}&apikey=${omdb_key}&type=movie`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search)
      })
  }
  const handleSearchSubmit = (ev) => {
    if (ev.key === "Enter") {
      searchDatabase();
    }
  }

  const addNomination = (movie) => {
    if (isNominated(movie)) {
      //Dont add if already nominated
      return;
    }
    if (nominations.length === 4) {
      //User is about to add their last nomination
      setShowCongratulationMsg(true)
    }
    if (nominations.length === 5) {
      //If already nominated 5 movies
      setShowMaxNomMsg(true)
      return;
    }
    //push to array
    let newNomArray = nominations.concat(movie);
    setNominations(newNomArray);
    localStorage.setItem("nominations", JSON.stringify(newNomArray))
  }

  const removeNomination = (movie) => {
    let newNomArray = nominations.filter((nomination) => {
      return nomination !== movie;
    })
    setNominations(newNomArray)
    localStorage.setItem("nominations", JSON.stringify(newNomArray))
  }

  const isNominated = (movie) => {
    return nominations.some((nomination) => {
      return nomination.imdbID === movie.imdbID
    })
  }
  return (
    <div className="App">
      <div className="container">
        <Modal className="max-nom-modal" open={showCongratulationMsg} onClose={() => setShowCongratulationMsg(false)}>
          <Card>
            <h2 className="max-nom-text">Congratulations! You have nominated 5! Movies</h2>
          </Card>
        </Modal>
        <Modal className="max-nom-modal" open={showMaxNomMsg} onClose={() => setShowMaxNomMsg(false)}>
          <Card>
            <h2 className="max-nom-text">You cannot add more than 5 nominations :c</h2>
          </Card>
        </Modal>
        <h2 className="title">
          The Shoppies!
          </h2>
        <div className="search">
          <Card className="card">
            <h3>
              Movie Title
          </h3>
            <TextField variant="outlined" value={name} fullWidth={true} onKeyPress={handleSearchSubmit} onChange={setSearchName} label="Movie Name" />
          </Card>
        </div>
        <div className="actions-area">
          <div className="action-left">
            <Card className="card">
              <div className="movie-list">
                <h3>Search Results for "{name}"</h3>
                <List style={{ maxHeight: '500px', overflow: 'auto' }}>
                  {movies && movies.map((movie) => {
                    return (
                      <ListItem key={movie.imdbID}>
                        <img alt={movie.Title} src={movie.Poster} />
                        <ListItemText id="movie-name" primary={movie.Title} secondary={movie.Year}></ListItemText>
                        <Button color="primary" disabled={isNominated(movie)} onClick={() => addNomination(movie)}>Nominate</Button>
                      </ListItem>
                    )
                  })}
                </List>
              </div>
            </Card>
          </div>
          <div className="action-right">
            <Card className="card">
              <h3>My Nominations (Up to 5 Nominations)</h3>
              <div className="nomination-list">
                <List style={{ maxHeight: '500px', overflow: 'auto' }}>
                  {nominations && nominations.map((nomination) => {
                    return (
                      <ListItem key={nomination.imdbID}>
                        <img alt={nomination.Title} src={nomination.Poster} />
                        <ListItemText id="movie-name" primary={nomination.Title} secondary={nomination.Year}></ListItemText>
                        <Button color="secondary" onClick={() => removeNomination(nomination)}>Unnominate</Button>
                      </ListItem>
                    )
                  })}
                </List>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

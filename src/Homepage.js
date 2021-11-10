import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Searchbox from "./Searchbox";
import Cover from './assets/cover.jpg'
import CardList from "./CardList";
import { moviesList } from './data';

function Homepage(props) {
	const [movies, setMovies] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	const filteredMovies = movies.filter(item => (
		item.title.toLowerCase().includes(searchInput)
	))

	useEffect(() => {
		setMovies(moviesList);
	}, []);
	return (
		<>
		<div className="hero min-h-screen bg-base-200" style={{postion: "relative", height: '80vh', background: 'white'}}>
			<div className="text-center hero-content" >
				<img src={Cover} alt="..." style={{position: 'absolute', zIndex: '-1', height: '80vh', width: '100vw', objectFit: 'cover'}}/>
				<div className="max-w-md">
					<div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
						<h1 className="" style={{
							background: 'rgba(255, 255, 255)', 
							fontSize: '5rem', 
							fontWeight: '900', 
							color: 'red', 
							marginBottom: '3.7rem', 
							width: '38rem',

							}}>Movie Theatre</h1> 
						<p className="" style={{
							background: 'red', 
							fontSize: '2rem', 
							color: 'white', 
							margin: '5px', 
							width: '37rem', 
							marginTop: '0', 
							position: 'absolute', 
							bottom: '0', 
							padding: '1rem', 
							fontWeight: 800,
							borderTopRightRadius: '10px',
							borderBottomLeftRadius: '10px',
						}}>
							Catch all the action, Book Now!
						</p> 
					</div>
					<Searchbox setSearchInput={setSearchInput}/>
				</div>
			</div>
		</div>
		<CardList movies={filteredMovies}/>
	
		</>
	);
}

export default Homepage;
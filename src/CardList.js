import Card from "./Card";



function CardList(props) {
	return (
		<div style={{
			display: 'flex', 
			justifyContent: 'center', 
			flexWrap: 'wrap',
			width: '100%',
			padding: '1rem'
		}}>
			{
				props.movies.map(item => (
					<Card key={item._id.toString()} {...item}/>
				))
			}
			{
				!props.movies.length && <h1 style={{ textAlign: 'center'}}>No movies found!</h1>
			}
		</div>
	);
}


export default CardList;
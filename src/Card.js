// import Thtf from './assets/thtf.jpg'


function Card({title, description, _id, photoUrl}) {
	console.log(window.location.origin + '/matrix.jpg')
	return (
		<div className="card shadow-2xl image-full w-20" style={{
			height: '25rem',
			margin: '1rem'
		}}>
			<figure>
				<img src={`${window.location.origin}/images/${photoUrl}`} alt='...'/>
			</figure> 
			<div className="justify-end card-body">
				<h2 className="card-title">{ title.toUpperCase() }</h2> 
				<p>{ description }</p> 
				<div className="card-actions">
					<button className="btn btn-primary" style={{ background: 'white', color: '#3d4451', border: 'none'}}>Book Now</button>
				</div>
			</div>
		</div> 
	);
}

export default Card;
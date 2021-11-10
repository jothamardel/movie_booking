


function Searchbox(props) {
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			width: '100%'
		}}>
			<div className="p-10 card bg-base-200"
				style={{
					padding: '25px',
					width: '50rem',
					background: 'rgb(255, 255, 255, 0.8)'
				}}
			>
				<div className="form-control" >
					<label className="label">
						<span className="label-text"></span>
					</label> 
					<input onChange={e => props.setSearchInput(e.target.value)} type="text" placeholder="search movies" className="input" style={{ width: '90%'}}/>
					{/* <button className="btn btn-primary w-40" style={{ margin: '10px', alignSelf: 'center'}}>Search</button> */}
				</div>
			</div>
		</div>
	);
}

export default Searchbox;
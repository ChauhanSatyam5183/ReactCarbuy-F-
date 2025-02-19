

function Cards2({benefit}) {

  return (
    <div>
      <div className="card bg-base-100 w-60 shadow-xl">
      <figure>
    <img
      src={benefit.img}
      alt="img" />
  </figure>
     <div className="card-body">
    <h2 className="card-title">{benefit.heading}</h2>
    <p>{benefit.p}</p>
  </div>
  
</div>
    </div>
  )
}

export default Cards2

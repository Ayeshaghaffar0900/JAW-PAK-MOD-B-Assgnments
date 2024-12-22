

const Smartphone = ({mobImg, mobTitle, mobDesc, mobPrice}) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4 ms-5">
        <div className="col">
          <div className="card mb-3 p-3">
            <div className="row">
              <div className="col-md-8">
                <div className="card-body">
                  <span className="badge text-bg-primary rounded-start">
                    New
                  </span>

                  <h5 className="card-title mt-2 mb-2">{mobTitle}</h5>
                  <p className="card-text">{mobDesc}</p>
                  <p className="card-text mt-5">
                    <small className="text-body-secondary">Rs: {mobPrice}</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={mobImg}
                  className="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smartphone;

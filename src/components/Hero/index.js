import "./hero.sass";

export const Hero = () => {
  return (
    <div className="hero-container">
      <header>
        <div className="overlay"></div>

        <video
          playsInline="playsInline"
          autoPlay="autoPlay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://img-react.s3.amazonaws.com/Keyboard10822.mp4"
            // src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>

        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">Desarrollo de software FullStack</h1>
              <p className="lead mb-0">Backend + Frontend + Cloud</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

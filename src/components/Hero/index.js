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

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p>
                The HTML5 video element uses an mp4 video as a source. Change
                the source video to add in your own background! The header text
                is vertically centered using flex utilities that are built into
                Bootstrap.
              </p>
              <p>
                The overlay color and opacity can be changed by modifying the{" "}
                <code>background-color</code> and <code>opacity</code>{" "}
                properties of the <code>.overlay</code> class in the CSS.
              </p>
              <p>
                Set the mobile fallback image in the CSS by changing the
                background image of the header element within the media query at
                the bottom of the CSS snippet.
              </p>
              <p className="mb-0">
                Created by{" "}
                <a href="https://startbootstrap.com">Start Bootstrap</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';


export default class HomePageWrapper extends React.Component {
  render() {
    return(
      <div>
      <div id="mainContainer" className="container-fluid">
        <div className="mainContent">
          <div className="row need-space introContainer">
            <div className="text-xs-center">
              <h4 className="text-xs-center muli taglineTwo">
                <font color="#FFFFFF"><strong>Want to do something fun?</strong></font>
              </h4>
              <h4 className="text-xs-center muli taglineTwo">
                <font color="#FFFFFF"><strong>Hangout with like-minded people pronto!</strong></font>
              </h4>
            </div>
          </div>
          <div id="inputContainer">
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <form role="form" method="post" id="emailForm">
                    <input type="text" name="email" className="form-control" placeholder="youremail@umich.edu" id="emailInput"/>
                    <div className="text-xs-center" id="buttonDiv">
                      <button type="submit" name="submit" className="btn btn-primary" id="accessButton">BETA ACCESS</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="thankYouModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h3 className="text-xs-left muli">
                  Hey! Thank you so much for signing up as a beta user.
                  <br /> <br />We will be in touch soon with some awesome activities for you to sign up for!
                  <br /> <br />Many thanks,
                  <br /><br />The Impronto Team
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="eventsContainer" className="container-fluid">
        <div className="row">
          <div className="text-xs-center">
            <h3 className="ubuntu" id="eventsContainer-title">What can you do on <font color="#ffcf09">im</font>pronto?</h3>
          </div>
        </div>
        <div className="row">
          <div className="text-xs-center">
              <h5 className="muli">
                Try new <font color="#FFCF09">activities</font> | Explore new <font color="#FFCF09">experiences</font> | Build new <font color="#FFCF09">stories</font>
              </h5>
          </div>
        </div>
        <div id="imagesSection">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="http://impronto.com/assets/images/pic1.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <div className="center-block">
                    <figcaption className="figure-caption muli text-xs-center"><p>Try out a new restaurant with a bunch of people who share similar taste!</p></figcaption>
                  </div>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="http://impronto.com/assets/images/pic2.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <figcaption className="figure-caption muli text-xs-center"><p>Something more fun? Plan local short trips for activities such as skiing!</p></figcaption>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="http://impronto.com/assets/images/pic3.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <figcaption className="figure-caption muli text-xs-center"><p>Meet up before the movie for coffee, get into a huddle and take a pic!</p></figcaption>
                </div>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="http://impronto.com/assets/images/pic4.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <figcaption className="figure-caption muli text-xs-center"><p>Want some company to go see your favorite band live? Plan it with us!</p></figcaption>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="http://impronto.com/assets/images/pic5.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <figcaption className="figure-caption muli text-xs-center"><p>Make new friends during an evening of bowling and share a great time!</p></figcaption>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <figure className="figure text-xs-center" id="figureButton">
                <h3 className="ubuntu">Have an idea for <br />your own activity?</h3>
                <br />
                <a href="#" id="squareButton"><i className="fa fa-plus-square fa-5x"></i></a>
                <br />
                <br />
                <h3 className="ubuntu">Add here!</h3>
              </figure>
            </div>
          </div>
        </div>
      </div>


      <div id="howItWorks" className="container-fluid">
        <div id="stepsContainer">
          <div className="row">
            <h3 className="text-xs-center ubuntu hiw-title" id="hiw-title">How does <font color="#FF7469">im</font><font color="#FFCF09">pronto</font> work</h3>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="text-xs-center hiw-image">
                <img src="http://impronto.com/assets/images/iconpic2.png"/>
              </div>
              <div className="text-xs-center hiw-des">
                <h5 className="hiw-des-title muli"><span>1.</span> Join Impronto</h5>

                  <p className="muli text-xs-left">Sign up with your umich email address.</p>

              </div>
            </div>
            <div className="col-md-3">
              <div className="text-xs-center hiw-image">
                <img src="http://impronto.com/assets/images/iconpic4.png"/>
              </div>
              <div className="text-xs-center hiw-des muli">
                <h5 className="hiw-des-title muli"><span>2.</span> Join an activity</h5>

                  <p className="muli text-xs-left">Choose something that interests you from a list of paid or free.</p>

              </div>
            </div>
            <div className="col-md-3">
              <div className="text-xs-center hiw-image">
                <img src="http://impronto.com/assets/images/iconpic1.png"/>
              </div>
              <div className="text-xs-center hiw-des">
                <h5 className="hiw-des-title muli"><span>3.</span> Get in touch</h5>

                  <p className="muli text-xs-left">Chat with other users who signed up for the same activity before meeting them.</p>

              </div>
            </div>
            <div className="col-md-3">
              <div className="text-xs-center hiw-image">
                <img src="http://impronto.com/assets/images/iconpic3.png"/>
              </div>
              <div className="text-xs-center hiw-des">
                <h5 className="hiw-des-title muli"><span>4.</span> Attend your activity!</h5>

                  <p className="muli text-xs-left">Have fun at the activity. Keep in touch if you'd like. Build friendships and connections.</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="container-fluid">
        <div className="row">
          <p className="text-xs-right muli"> Icons designed by <a href="http://www.freepik.com/">Freepik</a></p>
        </div>
      </div>
    </div>
    );
  }
}

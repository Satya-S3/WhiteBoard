import Navbar from "./Navbar";

function Home(){
      return <>
            <Navbar/>
            <div className="container d-flex justify-content-center mt-5 p-5">
                  <div className="card p-5" style={{width: "30rem"}}>
                        <h3 className="pb-3">Login to WHITE BOARD</h3>
                        <div className="mb-3">
                              <label for="exampleFormControlInput1" className="form-label">Email address</label>
                              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <label for="inputPassword5" className="form-label">Password</label>
                        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
                        <div id="passwordHelpBlock" className="form-text">
                              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                  </div>
            </div>
      </>
}
export default Home;
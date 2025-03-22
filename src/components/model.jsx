

import { useState } from "react";

export default function Modal() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { userName, password });
    // Add authentication logic here
  };

  return (
    <div className="container-fluid">
      {/* Button to trigger the modal */}
      <button className="btn btn-warning mt-3" data-bs-toggle="modal" data-bs-target="#modal1">
        Open Login
      </button>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="modal1" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title text-dark fw-bold">
                <span className="bi bi-person"></span> User Login
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="form-control">
                <dl>
                  <dt className="text-dark fw-bold">User Name</dt>
                  <dd>
                    <input 
                      type="text" 
                      className="form-control"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </dd>
                  <dt className="text-dark fw-bold">Password</dt>
                  <dd>
                    <input 
                      type="password" 
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </dd>
                </dl>
                <button type="submit" className="btn btn-warning w-100 fw-bold mt-3">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




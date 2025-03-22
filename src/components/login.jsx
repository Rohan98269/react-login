import React, { useState } from 'react';

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [greeting, setGreeting] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        // Reset previous errors
        setNameError("");
        setPasswordError("");

        // Regular expressions for validation
        const nameRegex = /^[A-Za-z]+$/; // Only letters allowed
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/; // Letters + Numbers, min length 4

        let errors = {};

        // Validate Name
        if (name.trim() === "") {
            errors.name = "Name is required";
        } else if (!nameRegex.test(name)) {
            errors.name = "Name should contain only letters";
        } else if (name.length < 3) {
            errors.name = "Name must be at least 3 characters long";
        }

        // Validate Password
        if (password.trim() === "") {
            errors.password = "Password is required";
        } else if (!passwordRegex.test(password)) {
            errors.password = "Password must contain both letters and numbers";
        } else if (password.includes(" ")) {
            errors.password = "Password should not contain spaces";
        }

        // Display errors if any
        if (Object.keys(errors).length > 0) {
            setNameError(errors.name || "");
            setPasswordError(errors.password || "");
        } else {
            // No errors, proceed with login
            setGreeting(true);
        }
    }

    function handleReset() {
        setName("");
        setPassword("");
        setNameError("");
        setPasswordError("");
        setGreeting(false);
    }

    return (
        <div className="container mt-5 text-center d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                        <div className="text-danger">{nameError}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <div className="text-danger">{passwordError}</div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center">
                        {!greeting && <button type="submit" className="btn btn-success w-50">LOGIN</button>}
                        <button type="button" className={`btn btn-secondary ${greeting ? 'w-100' : 'w-50'}`} onClick={handleReset}>RESET</button>
                    </div>
                </form>
                {greeting && <h2 className="text-success mt-3">Login Successful!</h2>}
            </div>
        </div>
    );
}

export default Login;

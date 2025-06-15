export default function VendorRegister() {
    return (
        <div className="form-container">
            <h2>Vendor Registration</h2>
            <form action="/vendors/register" method="POST">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="storeName">Store Name</label>
                <input type="text" id="storeName" name="storeName" required/>

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>

                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <a href="/vendors/login">Login here</a></p>
        </div>
    );
}
import myImage from "./images/pexels-nathan-engel-50858-436413.jpg";

function App() {

  console.log("React app started");   

  let userName = "Ujjual Krishna";

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      
      {/* ✅ Responsive Card */}
      <div 
        className="card shadow p-4" 
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <div className="card-body text-center">

          <h3 
            className="card-title mb-3"
            style={{
              color: "#0d6efd",
              fontSize: "26px",
              fontWeight: "700",
              letterSpacing: "1px"
            }}
          >
            Welcome to React Learning, {userName}
          </h3>

          {/* ✅ Internal Image */}
          <img
            src={myImage}
            alt="Internal"
            className="img-fluid mb-3"
            style={{ width: "200px", maxWidth: "100%" }}
          />

          {/* ✅ External Image */}
          <img
            src="https://picsum.photos/300"
            alt="External"
            className="img-fluid mb-3"
          />

          {/* ✅ Description */}
          <p className="text-muted fw-semibold mt-3">
            This is your first card with images and styles!
          </p>

        </div>
      </div>
    </div>
  );
}

export default App;

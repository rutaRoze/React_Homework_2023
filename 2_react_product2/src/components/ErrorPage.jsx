import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>This page flew out to cosmos</h1>
        <p>
          Page was looked over the globe but not found. Please stay on earth.{" "}
        </p>
        <button onClick={() => navigate("/")}>Come back home</button>
      </div>
      <div className="m-5">
        <img
          src="https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </>
  );
}

export default ErrorPage;

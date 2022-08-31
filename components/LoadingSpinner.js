import HashLoader from "react-spinners/HashLoader";

export default function LoadingSpinner({ loading }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <HashLoader color="#F29120" loading={loading} size={50} />
    </div>
  );
}

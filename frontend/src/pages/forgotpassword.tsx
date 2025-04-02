import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

function ForgotPassword() {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`${API_BASE_URL}/auth/send-otp`)
      .then(() => setSuccessMessage("OTP sent to admin email"))
      .catch((err) => setErrorMessage(err.response?.data || "Failed to send OTP"));
  }, []);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/reset-password`, null, {
        params: {
          email: ADMIN_EMAIL,
          otp,
          newPassword,
        },
      });
      setSuccessMessage(res.data);
      setTimeout(() => navigate("/admin"), 2000);
    } catch (error: any) {
      setErrorMessage(error.response?.data || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-white">Reset Admin Password</h2>
      <form onSubmit={handleResetPassword} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></span> : "Reset Password"}
        </button>
      </form>
      {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
      {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default ForgotPassword;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer); 
    }, [navigate]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black text-center px-6">
            <h1 className="text-6xl font-bold mb-6 text-white">Oops!</h1>
            <p className="text-lg mb-4 text-white">
                Something went wrong, or the page you're looking for doesn't exist.
            </p>
            <p className="text-lg mb-8 text-white">
                You will be redirected to the home page shortly.
            </p>
            <button
                onClick={() => navigate('/')}
                className="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600 transition duration-300"
            >
                Go to Home
            </button>
        </div>
    );
};

export default ErrorPage
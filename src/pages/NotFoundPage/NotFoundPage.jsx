import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
<p>
    Sorry, page not found!  Please go to <Link to="/">Home Page</Link>!
</p>
        </div>
    );
}
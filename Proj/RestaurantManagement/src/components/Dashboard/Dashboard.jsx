import React, { useState, useEffect } from 'react';

export default function Dashboard() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://dummyjson.com/recipes';
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setRecipes(data.recipes); 
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Dashboard</h1>
            {error && <p>Error: {error}</p>}
            {loading && <p>Loading...</p>}
            {!error && !loading && (
                <div>
                    <table border="1" cellPadding="10">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Cuisine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe) => (
                                <tr key={recipe.id}>
                                    <td>
                                        <img src={recipe.image} alt={recipe.name} style={{ width: '50px' }} />
                                    </td>
                                    <td>{recipe.name}</td>
                                    <td>{recipe.cuisine}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

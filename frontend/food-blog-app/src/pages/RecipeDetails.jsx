import React from 'react'
import profileImg from '../assets/profile.png'
import { useLoaderData } from 'react-router-dom'

export default function RecipeDetails() {
    const recipe = useLoaderData()
    console.log(recipe)

    return (
        <div style={styles.outerContainer}>
            {/* Profile Section */}
            <div style={styles.profile}>
                <img src={profileImg} alt="Profile" style={styles.profileImg} />
                <h5>{recipe.email}</h5>
            </div>

            {/* Recipe Title */}
            <h3 style={styles.title}>{recipe.title}</h3>

            {/* Recipe Image */}
            <div style={styles.imageContainer}>
                <img 
                    src={`http://localhost:5000/images/${recipe.coverImage}`} 
                    alt="Recipe" 
                    style={styles.recipeImage}
                />
            </div>

            {/* Recipe Details */}
            <div style={styles.recipeDetails}>
                <div style={styles.section}>
                    <h4>Ingredients</h4>
                    <ul>
                        {recipe.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div style={styles.section}>
                    <h4>Instructions</h4>
                    <span>{recipe.instructions}</span>
                </div>
            </div>
        </div>
    )
}

// Inline styles
const styles = {
    outerContainer: {
        width: '60%',
        margin: '0 auto',
        textAlign: 'center',
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '15px',
    },
    profileImg: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '15px 0',
        maxHeight: '400px',  // Restrict image container height to avoid oversized images
        overflow: 'hidden',  // Ensures no overflow
    },
    recipeImage: {
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        objectFit: 'contain',  // Ensures images fit without being distorted
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    recipeDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        marginTop: '20px',
    },
    section: {
        flex: 1,
        textAlign: 'left',
    }
}


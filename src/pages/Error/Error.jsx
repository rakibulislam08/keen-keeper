import React from 'react';

const Error = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.code}>404</h1>
            <h2 style={styles.message}>Page Not Found</h2>
            <p style={styles.description}>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <a href="/" style={styles.button}>
                Go Back Home
            </a>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: '#244e63',
        textAlign: 'center',
        padding: '20px'
    },
    code: {
        fontSize: '100px',
        margin: '0',
        fontWeight: 'bold'
    },
    message: {
        fontSize: '28px',
        margin: '10px 0'
    },
    description: {
        fontSize: '16px',
        marginBottom: '20px',
        color: '#white'
    },
    button: {
        textDecoration: 'none',
        backgroundColor: '#3b82f6',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: 'bold'
    }
};

export default Error;
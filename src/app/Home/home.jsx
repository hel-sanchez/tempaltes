"use client";

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Choose a Template</h1>
      <Link to="/Template-1">
        <button
          style={{
            margin: '10px',
            padding: '15px 30px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to Template 1
        </button>
      </Link>
      <Link to="/Template-2">
        <button
          style={{
            margin: '10px',
            padding: '15px 30px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to Template 2
        </button>
      </Link>

      <Link to="/Template-3">
        <button
          style={{
            margin: '10px',
            padding: '15px 30px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to Template 3
        </button>
      </Link>

      <Link to="/Template-4">
        <button
          style={{
            margin: '10px',
            padding: '15px 30px',
            backgroundColor: '#ffc107',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to Template 4
        </button>
      </Link>

      <Link to="/Template-5">
        <button
          style={{
            margin: '10px',
            padding: '15px 30px',
            backgroundColor: '#17a2b8',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to Template 5
        </button>
      </Link>

      <Link to="/Template-6">
        <button
          style={{
            margin: '10px',
            padding: '15px 30px',
            backgroundColor: '#6610f2',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to Template 6
        </button>
      </Link>

      <Link to="/New-1">
        <button
          style={{
            margin: '10px',
            padding: '15px 30px',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to New Template
        </button>
      </Link>

      <Link to="/T1">
        <button
          style={{
            margin: '10px',
            padding: '15px 30px',
            backgroundColor: '#343a40',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to New Template 2
        </button>
      </Link>

      <Link to="/T2">
        <button
          style={{
            margin: '10px',
            padding: '15px 30px',
            backgroundColor: '#343a40',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Go to New Template 3
        </button>
      </Link>
    </div>
  );
}

export default Home;

import React from 'react';

const Certificate = () => {
    return (
        <section className="certificate-section">
            <h2>Certificates</h2>
            <div className="certificate-list">
                <div className="certificate-item">
                    <h3>Certificate in Full Stack Development</h3>
                    <p>Issued by: XYZ Institute</p>
                    <p>Date: June 2023</p>
                    <a href="link-to-certificate" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
                <div className="certificate-item">
                    <h3>Machine Learning Specialization</h3>
                    <p>Issued by: ABC University</p>
                    <p>Date: December 2022</p>
                    <a href="link-to-certificate" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
                {/* Add more certificates as needed */}
            </div>
        </section>
    );
};

export default Certificate;
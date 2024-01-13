import React from 'react'
import { useState, useEffect } from 'react';
import './IncrementalCountCard.css'

const IncrementalCountCard = ({ totalCount, intervalDuration, label, image_path }) => {
    //FOR COUNT
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentCount < totalCount) {
                setCurrentCount((prevCount) => prevCount + 1);
            } else {
                clearInterval(interval);
            }
        }, intervalDuration);
        return () => clearInterval(interval);
    }, [currentCount, totalCount]);

    return (
        <div>
            <div class="each_count-container" style={{ marginTop: "10px" }}>
                <img src={image_path} alt="/" style={{ maxHeight: "90px", zIndex: "1", position: 'relative' }} />
                <div id="count_data-container">
                    <h1 id="customer-count-h1">{currentCount}</h1>
                    <h4>
                        {label}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default IncrementalCountCard
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

function Arrayobject() {
    const [products] = useState([
        {
            title: "Apple iPhone 15 (Black, 128 GB)",
            rating: { rate: 4.6, ratings: 21827, reviews: 1511 },
            price: 72999,
            features: [
                "128 GB ROM",
                "15.49 cm (6.1 inch) Super Retina XDR Display",
                "12MP + 12MP | 12MP Front Camera",
                "A15 Bionic Chip, 6 Core Processor",
                "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"
            ],
            image: '.public/logo512.png'
        },
        {
            title: "Apple iPhone 14 (Blue, 128 GB)",
            rating: { rate: 4.7, ratings: 1221827, reviews: 11511 },
            price: 58999,
            features: [
                "128 GB ROM",
                "15.49 cm (6.1 inch) Super Retina XDR Display",
                "12MP + 12MP | 12MP Front Camera",
                "A15 Bionic Chip, 6 Core Processor",
                "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"
            ],
            image: '/public/logo512.png'
        }
    ]);

    return (
        <div className="container-fluid mt-4">
            <div className="row justify-content-center">
                {products.map((product, index) => (
                    <div key={index} className="col-md-4 col-sm-6 mb-4">
                        <div className="card border rounded shadow-lg p-3">
                            {/* Card Header */}
                            <div className="card-header bg-light text-center">
                                <h5 className="fw-bold">{product.title.toUpperCase()}</h5>
                            </div>
                            
                            {/* Card Image */}
                            <div className="text-center mt-3">
                                <img src={product.image} alt={product.title} className="img-fluid rounded" style={{ maxHeight: "140px" }} />
                            </div>

                            {/* Card Body */}
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="text-muted">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card Footer */}
                            <div className="card-footer bg-white">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="mb-0 text-primary">
                                        {product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                    </h6>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i> {product.rating.rate} 
                                        <small className="text-muted"> ({product.rating.reviews} Reviews)</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Arrayobject;

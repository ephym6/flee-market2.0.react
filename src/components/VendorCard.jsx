import '/src/css/pages/vendor-dashboard.css'

export default function VendorCard({vendor}) {
    return (
        <div className="vendor-card" data-category={vendor.category}>
            <img src={vendor.image} alt={vendor.name} />
            <div className="card-content">
                <h3>{vendor.name}</h3>
                <span className="tag">{vendor.category}</span>
                <p><i>📞</i> {vendor.phone}</p>
                <p><i>✉️</i> {vendor.email}</p>
                <p>{vendor.description}</p>
            </div>
        </div>
    );
}
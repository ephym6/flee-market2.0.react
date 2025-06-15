import VendorCard from "../components/VendorCard";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import '/src/buyer-dashboard.css'

const vendorData = [
    {
        name: "John's Bakery",
        category: "Food",
        phone: "+254 758 964 129",
        email: "john@bake.com",
        description: "Fresh baked goods daily! Try our famous sourdough bread.",
        image: "/images/cake-bakery.jpeg"
    },
    // Add more vendors
];

export default function BuyerDashboard() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const filteredVendors = vendorData.filter(vendor => vendor.name.toLowerCase().includes(search.toLowerCase()) && (category === "" || vendor.category === category));

    return (
        <>
            <section className="search-section">
                <h1>Find Vendors</h1>
                <SearchBar
                    searchValue={search}
                    onSearchChange={(e) => setSearch(e.target.value)}
                    onSearchClick={() => console.log("Searching...")}
                />

                <div className="filter-vendors">
                    <select className="category" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="Food">Food</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Services">Services</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </section>

            {/* Vendor Cards, Dummy Data */}
            <h2>Vendors Near You!</h2>
            <div className="card-container">
                {filteredVendors.map(vendor => <VendorCard vendor={vendor} key={vendor.name}/>)}
            </div>
        </>
    );
}
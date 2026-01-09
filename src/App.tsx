import { useState } from "react";

type Category = {
    icon: string;
    label: string;
}

type FeaturedProduct = {
    image: string;
    alt: string;
    price: string;
} 

type Offer = {
    image: string;
    alt: string;
    badge?: string;
    title: string;
    className?: string;
}

type NavItem = {
    icon: string;
    label: string;
    active?: boolean;
}

type CartItem = FeaturedProduct;

type Page = 'home' | 'categories';

const categories: Category[] = [
    {icon: '🥬', label: 'Fresh Vegetables'},
    {icon: '🍰', label: 'Cake'},
    {icon: '🍹', label: 'Drink'},
    {icon: '🍛', label: 'Curry'},
];

const featuredProducts: FeaturedProduct[] = [
    {
        image: 'https://images.unsplash.com/photo-1543158181-e6f9f6712055?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Fresh strawberries',
        price: '$4.50',
    },
];

const offers: Offer[] = [
    {
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'coke image',
        badge: '5% Off',
        title: 'coke',
        className: '',
    }
]

const navItems: NavItem[] = [
    {icon: 'fas fa-home', label: 'Home', active: true},
    {icon: 'fas fa-th-large', label: 'Categories'},
    {icon: 'fas fa-heart', label: 'Favorite'},
    {icon: 'fas fa-user', label: 'Account'},
];

const App = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [page, setPage] = useState<Page>('home');

    const handleAddToCart = (product: FeaturedProduct) => {
        setCartItems((items) => [...items, product]);
    };

    const handleToggleCart = () => setIsCartOpen((open) => !open);
    const handleNavigate = (destination: Page) => setPage(destination);

    const cartCount = cartItems.length;

    return (
        <div className="container">
            <header className="header">
                <div className="header-top">
                    <h1 className="logo">
                        Mart
                    </h1>
                    <button 
                    className="cart-btn"
                    onClick={handleToggleCart}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count">
                            {cartCount}
                        </span>
                    </button>
                </div>
                <div className="search-container">
                    <input type="text" className="search-input" />
                    <button className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </header>
            {page === 'home' ? (
                <>
                    <section className="hero-banner">
                        <div className="banner-content">
                            <img src="" alt="" className="banner-image" />
                            <div className="banner-overlay">
                                <h2>Fresh Picks</h2>
                            </div>
                        </div>
                        <div className="bakery-banner">
                            <img src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="bakery-image" />
                            <div className="bakery-overlay">
                                <h3>Bakery</h3>
                            </div>
                        </div>
                    </section>
                    <section className="category-section">
                        <div className="section-header">
                            <h2>Shop by Category</h2>
                        </div>
                        <div className="category-grid">
                            {categories.map((category) => (
                                <div className="category-item" key={category.label}>
                                    <div className="category-icon">
                                        {category.icon}
                                    </div>
                                    <span>{category.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="featured-section">
                        <div className="section-header">
                            <h2>Featured</h2>
                        </div>
                        <div className="product-scroll">
                            {featuredProducts.map((product) => (
                                <div className="product-card" key={product.alt}>
                                    <img src={product.image} alt={product.alt} className="product-image" />
                                    <div className="product-info">
                                        <div className="product-price">
                                            {product.price}
                                        </div>
                                        <button 
                                        className="add-to-cart-icon"
                                        type="button"
                                        onClick={() => handleAddToCart(product)}
                                        >
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            ) )}
                        </div>
                    </section>
                    <section className="offers-section">
                        <div className="section-header">
                            <h2>Special Offers</h2>
                        </div>
                        <div className="offers-grid">
                            {offers.map((offer) => (
                                <div className={`offer-card ${offer.className ?? ''}`.trim()}
                                key={offer.alt}>
                                    <img src={offer.image} alt={offer.alt} />
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            ) : (
                <section className="category-page">
                    <div className="section-header">
                        <h2>All Categories</h2>
                        <div className="category-page-count">
                            {categories.length} options
                        </div>
                    </div>
                    <div className="category-page-grid">
                        {categories.map((category) => (
                            <div className="category-page-card" key={category.label}>
                                <div className="category-page-icon">
                                    {category.icon}
                                </div>
                                <div className="category-page-label">
                                    {category.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            <footer className="footer-links">
                <div className="footer-row">
                    <a href="#">
                        <i className="fas fa-info-circle"></i>
                        About Us
                    </a>
                    <a href="#">
                        <i className="fas fa-phone"></i>
                        Contact
                    </a>
                </div>
            </footer>
            <nav className="bottom-nav">
                {navItems.map((item) => (
                    <button className={`nav-item${(item.label === 'Home' && page==='home') || (item.label === 'Categories' && page==='categories') ? ' active':''}`}
                    key={item.label}
                    onClick={() => {
                        if(item.label === 'Home') handleNavigate('home');
                        if(item.label === 'Categories') handleNavigate('categories');
                    }}>
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>
            {isCartOpen && (
                <div className="cart-overlay"
                role="dialog"
                onClick={handleToggleCart}>
                    <div className="cart-sheet"
                    onClick={(event) => event.stopPropagation}>
                        <div className="cart-header">
                            <div>
                                <div className="cart-title">
                                    Cart
                                </div>
                                <div className="cart-subtitle">
                                    {cartCount} item{cartCount === 1 ? '' : 's'} 
                                </div>
                            </div>
                            <button className="close-cart-btn"
                            type="button"
                            onClick={handleToggleCart}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="cart-body">
                            {cartItems.length === 0 ? (
                                <div className="cart-empty">
                                    No items.
                                </div>
                            ) : (
                                <ul className="cart-list">
                                    {cartItems.map((item, index) => (
                                        <li className="cart-item" key={`${item.alt}-${index}`}>
                                            <img src={item.image} alt={item.alt} className="cart-item-image" />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
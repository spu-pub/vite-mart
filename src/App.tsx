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
                </>
            ) : (
                <section className="category-page">
                    
                </section>
            )}
        </div>
    );
};

export default App;
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
                    </button>
                </div>
            </header>
        </div>
    );
};

export default App;
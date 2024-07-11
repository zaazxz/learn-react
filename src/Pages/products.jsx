import { useState, React } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button/Index';
import Counter from '../components/Fragments/Counter';

const products = [
    {
        id: 1,
        title: "Sepatu Baru",
        price: 1000000,
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, earum!"
    },
    {
        id: 2,
        title: "Sepatu Lama",
        price: 100000,
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, earum!"
    },
    {
        id: 3,
        title: "Sepatu Adadas",
        price: 500000,
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit.Rem, earum!"
    }
];

const ProductsPage = () => {

    // TODO : Cart
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ]);

    const data = {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password')
    }
    
    const HandleLogout = () => {
    
        // TODO : Clear Local Storage
        localStorage.clear();
    
        // TODO : Redirect
        window.location.href = '/login';
    
    }

    const handleAddToCart = (id) => {
        
        // TODO : Search Item with Id
        const item = cart.find((item) => item.id === id);
        
        if(item) {
            setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item))
        } else {
            setCart([...cart, {id, qty: 1}])
        }

    }

    // const

    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                <p>{data.email}</p>
                <Button onclick={() => HandleLogout()} classname="bg-black ml-5">Logout</Button>
            </div>
            <div className="flex justify-center py-5">

                {/* Products Card */}
                <div className="w-3/4 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image}></CardProduct.Header>
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}></CardProduct.Footer>
                        </CardProduct>
                    ))}
                </div>

                {/* Filter Card */}
                <div className="w-1/4">
                    <h1 className='text-3xl font-bold text-blue-600'>Cart</h1>
                    <table className='w-full ml-[-5%] text-left table-auto border-separate border-spacing-x-5'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                        <td>{item.qty}</td>
                                        <td>{(item.qty * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                

            </div>
            <div className="mt-5 flex justify-center">
                <Counter />
            </div>
        </>
    )
}

export default ProductsPage

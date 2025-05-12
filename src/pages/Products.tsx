
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { Check } from 'lucide-react';

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center"
      >
        Products & Resources
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
      >
        Digital tools and resources to help developers build better applications and advance their careers.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="w-full h-48 object-cover object-center"
            />
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground">One-time purchase</span>
                </div>
                
                <a 
                  href={product.link} 
                  className="block w-full bg-primary text-primary-foreground text-center py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;

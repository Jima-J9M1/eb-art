import { useState } from 'react';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import CategoryFilter from './CategoryFilter';
import PortfolioItem from './PortfolioItem';

const categories = ['all', 'portraits', 'weddings', 'birthdays', 'valentines', 'custom'];

const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = PORTFOLIO_ITEMS.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section className="py-20" id='portfolio'>
      <div className="container mx-auto px-4">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
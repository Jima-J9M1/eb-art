import { motion } from 'framer-motion';

interface PortfolioItemProps {
  id: number;
  title: string;
  category: string;
  image: string;
}

const PortfolioItem = ({ title, category, image }: PortfolioItemProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative aspect-square overflow-hidden rounded-lg"
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm capitalize text-white/80">{category}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
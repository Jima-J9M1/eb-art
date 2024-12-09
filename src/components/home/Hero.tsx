import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center bg-red-500 p-10 w-full border border-green-500">
      <div
        className="absolute inset-0 z-0 w-full "
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Moments Into Art
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Unique, personalized artwork that captures your special moments and emotions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href='/#portfolio'>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            View Portfolio
          </Button>
          </a>
          {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            Commission Art
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
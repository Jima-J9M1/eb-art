import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import SocialCard from './SocialCard';

const ContactSection = () => {
  const socialPlatforms = [
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow my latest works',
      link: SOCIAL_LINKS.instagram,
      iconColor: 'text-pink-500'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      description: 'Join my community',
      link: SOCIAL_LINKS.facebook,
      iconColor: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Direct messaging',
      link: SOCIAL_LINKS.whatsapp,
      iconColor: 'text-green-500',
      buttonText: 'Chat'
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id='contact'>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Create Something Beautiful</h2>
          <p className="text-muted-foreground mb-8">
            Ready to transform your ideas into art? Reach out through any of these platforms,
            and let's discuss your vision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {socialPlatforms.map((platform) => (
              <SocialCard key={platform.title} {...platform} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
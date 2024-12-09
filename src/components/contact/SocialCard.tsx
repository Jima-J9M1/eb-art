import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SocialCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  iconColor: string;
  buttonText?: string;
}

const SocialCard = ({
  icon: Icon,
  title,
  description,
  link,
  iconColor,
  buttonText = 'Connect'
}: SocialCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all">
      <CardContent className="p-6 flex flex-col items-center">
        <Icon className={`h-8 w-8 mb-4 ${iconColor}`} />
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button asChild variant="outline" className="w-full">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
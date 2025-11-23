import { Github, Linkedin, Instagram, Mail, MessageCircle } from 'lucide-react';

interface SocialsProps {
  className?: string;
}

export function Socials({ className = '' }: SocialsProps) {
  const socials = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/shivam-gupta-788131288',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/5hivam123',
      color: 'hover:text-slate-900 dark:hover:text-white',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/_mr._shivam1608',
      color: 'hover:text-pink-600 dark:hover:text-pink-400',
    },
    {
      name: 'Twitter/X',
      icon: Mail,
      url: 'https://x.com/techshivam1151',
      color: 'hover:text-black dark:hover:text-white',
    },
    {
      name: 'WhatsApp Channel',
      icon: MessageCircle,
      url: 'https://whatsapp.com/channel/0029Vb6qen46WaKklBuG4O2D',
      color: 'hover:text-green-600 dark:hover:text-green-400',
    },
  ];

  return (
    <div className={`flex gap-6 justify-center ${className}`}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className={`text-slate-600 dark:text-slate-400 transition-colors duration-300 ${social.color}`}
          >
            <Icon size={28} />
          </a>
        );
      })}
    </div>
  );
}

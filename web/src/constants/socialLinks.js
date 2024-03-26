import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import { IoIosMailUnread } from 'react-icons/io';
import { FcAndroidOs } from 'react-icons/fc';

// add reddit and other social media links
export const socialLinks = [
  {
    name: 'telephone',
    url: 'tel:+27786647721',
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: 'mail',
    url: 'mailto:mutambironald682@gmail.com',
    icon: <IoIosMailUnread />,
  },
  {
    name: 'whatsapp',
    url: `https://wa.me/27786647721?text=${encodeURIComponent(
      'I would like to chat to an available DEMT Representative'
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/DEMT/',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/DEMT',
    icon: <FaTwitter />,
  },
  {
    name: 'Apple',
    url: 'https://www.apple.com/DEMT',
    icon: <DiApple />,
  },
  {
    name: 'Android',
    url: 'https://www.play.google.com/DEMT',
    icon: <FcAndroidOs />,
  },
];

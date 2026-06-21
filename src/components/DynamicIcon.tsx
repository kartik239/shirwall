import React from 'react';
import {
  Stethoscope,
  Sparkles,
  Scissors,
  Bolt,
  Droplet,
  Flame,
  Snowflake,
  Tv,
  Printer,
  Copy,
  Bug,
  Wind,
  Truck,
  Palette,
  Shirt,
  Utensils,
  Home,
  RotateCw,
  Map,
  Wrench,
  Dribbble,
  User,
  ShoppingBag,
  ArrowRight,
  LogOut,
  ChevronRight,
  LogIn,
  Key,
  Trash2,
  Plus,
  Minus,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = '', size = 24 }) => {
  switch (name) {
    case 'Stethoscope': return <Stethoscope className={className} size={size} />;
    case 'Sparkles': return <Sparkles className={className} size={size} />;
    case 'Scissors': return <Scissors className={className} size={size} />;
    case 'Bolt': return <Bolt className={className} size={size} />;
    case 'Droplet': return <Droplet className={className} size={size} />;
    case 'Flame': return <Flame className={className} size={size} />;
    case 'Snowflake': return <Snowflake className={className} size={size} />;
    case 'Tv': return <Tv className={className} size={size} />;
    case 'Printer': return <Printer className={className} size={size} />;
    case 'Copy': return <Copy className={className} size={size} />;
    case 'Bug': return <Bug className={className} size={size} />;
    case 'Wind': return <Wind className={className} size={size} />;
    case 'Truck': return <Truck className={className} size={size} />;
    case 'Palette': return <Palette className={className} size={size} />;
    case 'Shirt': return <Shirt className={className} size={size} />;
    case 'Utensils': return <Utensils className={className} size={size} />;
    case 'Home': return <Home className={className} size={size} />;
    case 'RotateCw': return <RotateCw className={className} size={size} />;
    case 'Map': return <Map className={className} size={size} />;
    case 'Wrench': return <Wrench className={className} size={size} />;
    case 'Dribbble': return <Dribbble className={className} size={size} />;
    case 'User': return <User className={className} size={size} />;
    case 'ShoppingBag': return <ShoppingBag className={className} size={size} />;
    case 'ArrowRight': return <ArrowRight className={className} size={size} />;
    case 'LogOut': return <LogOut className={className} size={size} />;
    case 'ChevronRight': return <ChevronRight className={className} size={size} />;
    case 'LogIn': return <LogIn className={className} size={size} />;
    case 'Key': return <Key className={className} size={size} />;
    case 'Trash2': return <Trash2 className={className} size={size} />;
    case 'Plus': return <Plus className={className} size={size} />;
    case 'Minus': return <Minus className={className} size={size} />;
    case 'CheckCircle': return <CheckCircle className={className} size={size} />;
    case 'Phone': return <Phone className={className} size={size} />;
    case 'MapPin': return <MapPin className={className} size={size} />;
    case 'Clock': return <Clock className={className} size={size} />;
    case 'Briefcase': return <Briefcase className={className} size={size} />;
    default: return <Briefcase className={className} size={size} />;
  }
};

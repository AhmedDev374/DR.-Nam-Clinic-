export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  price?: string;
}

export interface NavLink {
  to: string;
  label: string;
  icon?: string;
}

export interface PageProps {
  onBookingClick: () => void;
}

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: BookingData) => void;
}

export interface NavbarProps {
  onBookingClick: () => void;
}

export interface FooterProps {
  className?: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  onBookingClick: () => void;
  className?: string;
}

export interface ServiceCardProps {
  service: Service;
  onBookingClick: () => void;
  className?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

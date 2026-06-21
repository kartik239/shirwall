export interface Vendor {
  id: string;
  name: string;
  category: string;
  categorySlug: 'health' | 'home-services' | 'real-estate' | 'transport';
  description: string;
  iconName: string; // Map to Lucide icon string
  logoFile?: string; // e.g. logo-doctor.png
  detailTitle: string;
  detailCopy: string;
}

export type PageId = 'home' | 'vendors' | 'enquire';

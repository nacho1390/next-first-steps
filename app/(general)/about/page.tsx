import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'About Pagge',
    description: 'Description About Page',
    keywords: ['About Page', 'Nacho', 'Contacto']
};

export default function AboutPage() {
    return (
        <span className="text-7xl" >About Page  </span>
    )
} 
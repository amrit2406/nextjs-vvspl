import Contact from "@/components/home/Contact";

export const metadata = {
    title: "Contact Us | VVSPL Tech",
    description: "Reach out for technical consultation and architectural blueprints.",
};

export default function ContactPage() {
    return (
        <div className="pt-20 bg-white min-h-screen">
            <Contact />
        </div>
    );
}

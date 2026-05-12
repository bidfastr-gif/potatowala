import { motion } from "framer-motion";
import { Store, CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import pattern from "@/assets/food-pattern.webp";

export const EnquirySection = () => {
    const cards = [
        {
            title: "Franchise Enquiry",
            description: "Join India's fastest-growing snack brand! We offer a lucrative business model with high returns, low operational complexity, and end-to-end support. Partner with us today to redefine the street food experience.",
            icon: <Store className="w-12 h-12 text-amber-500" />,
            link: "/franchise-enquiry",
            color: "bg-orange-50",
            borderColor: "border-orange-200",
            buttonColor: "bg-primary text-primary-foreground"
        },
        {
            title: "Event Enquiry",
            description: "Make your next event memorable with our premium live catering. From weddings to corporate galas, we bring our specialized snack counter to your venue, serving fresh loaded fries and signature snacks your guests will love.",
            icon: <CalendarDays className="w-12 h-12 text-amber-500" />,
            link: "/event-enquiry",
            color: "bg-amber-50",
            borderColor: "border-amber-200",
            buttonColor: "bg-amber-500 text-white"
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-orange-50/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${pattern})`,
                        backgroundSize: "400px",
                        backgroundRepeat: "repeat",
                    }}
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">
                        Get in Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Partner with Potatowala
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                        Whether you're looking to start your own business or planning an unforgettable event, we're here to help you bring the magic of our premium fries to your community.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative overflow-hidden group p-6 rounded-2xl border border-primary bg-primary text-primary-foreground hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Pattern Inside Card */}
                            <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: `url(${pattern})`,
                                        backgroundSize: "200px",
                                        backgroundRepeat: "repeat",
                                    }}
                                />
                            </div>
                            <div className="relative z-10 flex flex-col h-full items-center text-center">
                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {card.title}
                                </h3>

                                <p className="text-white/90 mb-6 flex-grow text-base leading-relaxed">
                                    {card.description}
                                </p>

                                <Link to={card.link}>
                                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:gap-4 bg-[#FFE8A3] text-gray-900 hover:bg-[#FFD36B] hover:scale-105 active:scale-95 shadow-lg">
                                        Enquire Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

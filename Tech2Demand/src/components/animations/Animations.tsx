import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// --- Custom Hook for Mobile Detection ---
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}

// --- Parallax Layer ---
interface ParallaxLayerProps {
    children: React.ReactNode;
    offset?: number;
    className?: string;
    speed?: number; // 1 is normal, < 1 is slower, > 1 is faster
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ 
    children, 
    offset = 50, 
    className = '',
    speed = 1
}) => {
    const prefersReducedMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const ref = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    // Disable parallax on mobile or if reduced motion is preferred
    const shouldDisableParallax = prefersReducedMotion || isMobile;
    const finalOffset = shouldDisableParallax ? 0 : offset * speed;

    const y = useTransform(scrollYProgress, [0, 1], [-finalOffset, finalOffset]);
    
    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

// --- Reveal ---
interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    yOffset?: number;
    className?: string;
    duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
    children, 
    delay = 0, 
    yOffset = 24, 
    className = '',
    duration = 0.6
}) => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// --- Stagger Components ---
export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
    children, 
    className = '' 
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string; yOffset?: number }> = ({ 
    children, 
    className = '',
    yOffset = 24
}) => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: prefersReducedMotion ? 0 : yOffset },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

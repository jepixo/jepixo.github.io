import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode, MouseEvent } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

/** A card that reveals with a blur-in on scroll and tilts toward the cursor on hover. */
export default function TiltCard({ children, className, delay = 0 }: TiltCardProps) {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springX = useSpring(rotateX, { stiffness: 220, damping: 20 });
    const springY = useSpring(rotateY, { stiffness: 220, damping: 20 });

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * 8);
        rotateX.set(-py * 8);
    };

    const handleLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            className={className}
            style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
            initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            {children}
        </motion.div>
    );
}

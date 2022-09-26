import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className: string;
  delay: string;
  classNameSection: string;
  moveDirection: string;
};

const TextSection = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className={props.classNameSection}>
      <div
        className={props.className}
        style={{
          transform: isInView ? 'none' : `translate${props.moveDirection}`,

          transition: `all ${props.delay}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
        }}
      >
        {props.children}
      </div>
    </section>
  );
};

export default TextSection;

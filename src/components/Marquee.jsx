import { marqueeItems } from '../data';

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

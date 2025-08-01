import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="accordion">
      {/* Section 1 */}
      <div className="accordion-header" onClick={() => toggle(1)}>
        Why Us
      </div>
      {open === 1 && (
        <div className="accordion-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          esse architecto, culpa mollitia eaque cupiditate accusantium libero,
          voluptatem aperiam autem non et eius aspernatur odit ipsam magni
          itaque perspiciatis suscipit.
        </div>
      )}

      {/* Section 2 */}
      <div className="accordion-header" onClick={() => toggle(2)}>
        What we provide
      </div>
      {open === 2 && (
        <div className="accordion-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          veniam provident consequatur quod cumque itaque quae architecto
          quibusdam sunt facilis voluptas beatae quos eaque eligendi, laborum
          repellat numquam et in.
        </div>
      )}

      {/* Section 3 */}
      <div className="accordion-header" onClick={() => toggle(3)}>
        Contact Us
      </div>
      {open === 3 && (
        <div className="accordion-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, atque!
          Debitis cumque exercitationem soluta atque libero consequatur aliquid
          neque earum, natus ipsam voluptatibus at nisi modi quod corporis saepe
          maxime.
        </div>
      )}
    </div>
  );
}

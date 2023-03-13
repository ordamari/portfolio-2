type privateProps = {
  sectionsRefs: React.RefObject<{ [key: string]: HTMLElement }>;
};

export function About({ sectionsRefs }: privateProps) {
  const updateSectionRefs = (ref: HTMLElement) => {
    if (sectionsRefs.current) sectionsRefs.current.about = ref;
  };

  return (
    <section ref={updateSectionRefs} className="about section left">
      <div className="progress-wrapper progress-bar-wrapper-left">
        <div className="progress-bar"></div>
      </div>
      <div className="section-intro-wrapper">
        <h1 className="section-title">
          <span className="section-title-text">About Me</span>
          <div className="section-title-decoration style-one" />
          <div className="section-title-decoration style-two" />
          <div className="section-title-decoration style-three" />
        </h1>
        <span className="section-number">01</span>
      </div>

      <div className="section-detail-wrapper">
        <h3 className="section-heading">Lorem ipsum</h3>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          quaerat expedita porro nisi magni inventore voluptatibus tempora.
          Vitae, modi dolore. Iusto, veritatis perferendis. Pariatur fugit
          tempora non! Ducimus, quam commodi?
        </p>
        <h3 className="section-heading">Lorem ipsum</h3>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          quaerat expedita porro nisi magni inventore voluptatibus tempora.
          Vitae, modi dolore. Iusto, veritatis perferendis. Pariatur fugit
          tempora non! Ducimus, quam commodi?
        </p>
        <h3 className="section-heading">Lorem ipsum</h3>
        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          quaerat expedita porro nisi magni inventore voluptatibus tempora.
          Vitae, modi dolore. Iusto, veritatis perferendis. Pariatur fugit
          tempora non! Ducimus, quam commodi?
        </p>
      </div>
    </section>
  );
}

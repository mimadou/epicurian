// CalendlyComponent.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const CalendlyComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <Helmet>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
      </Helmet>
      {/* Ajoutez le lien d'intégration Calendly où vous souhaitez afficher le widget */}
      <div className="calendly-inline-widget" data-url="https://calendly.com/mimadou97/30min"></div>
    </div>
  );
};

export default CalendlyComponent;
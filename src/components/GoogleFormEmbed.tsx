import React from 'react';

interface GoogleFormEmbedProps {
    formUrl: string;
    title?: string;
    height?: string | number;
    className?: string;
}

const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({
    formUrl,
    title = "Google Form",
    height = 800,
    className = ""
}) => {
    // Ensure the URL has the embedded=true parameter
    const embeddedUrl = formUrl.includes('?')
        ? (formUrl.includes('embedded=true') ? formUrl : `${formUrl}&embedded=true`)
        : `${formUrl}?embedded=true`;

    return (
        <div className={`w-full overflow-hidden rounded-lg bg-black/40 border border-white/10 shadow-inner relative ${className}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-aged-gold z-10"></div>
            <iframe
                src={embeddedUrl}
                width="100%"
                height={height}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={title}
                className="w-full grayscale invert opacity-90 contrast-125"
                style={{
                    // Add some custom styling to the iframe if possible, 
                    // though Google Forms iFrames are limited.
                    // Grayscale/Invert can help blend it with dark themes.
                }}
            >
                Loading…
            </iframe>
        </div>
    );
};

export default GoogleFormEmbed;

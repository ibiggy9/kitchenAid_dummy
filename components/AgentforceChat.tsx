"use client";

import Script from "next/script";

export default function AgentforceChat() {
  return (
    <Script
      src="https://orgfarm-234f3aac10--devpro.sandbox.my.site.com/ESWNextjsChannel21771474146729/assets/js/bootstrap.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        try {
          (window as any).embeddedservice_bootstrap.settings.language = 'en_US';
          (window as any).embeddedservice_bootstrap.init(
            '00DAs00000tKZZs',
            'Nextjs_Channel2',
            'https://orgfarm-234f3aac10--devpro.sandbox.my.site.com/ESWNextjsChannel21771474146729',
            {
              scrt2URL: 'https://orgfarm-234f3aac10--devpro.sandbox.my.salesforce-scrt.com'
            }
          );
        } catch (err) {
          console.error('Error loading Embedded Messaging: ', err);
        }
      }}
    />
  );
}

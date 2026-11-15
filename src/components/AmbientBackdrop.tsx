import React from 'react';

export const AmbientBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="ambient-orb-warm absolute -left-[12vw] -top-[10vh] h-[55vw] max-h-[680px] w-[55vw] max-w-[680px] rounded-full blur-3xl"
      />
      <div
        className="ambient-orb-cool absolute -right-[10vw] top-[28vh] h-[50vw] max-h-[620px] w-[50vw] max-w-[620px] rounded-full blur-3xl"
      />
      <div
        className="ambient-orb-warm absolute bottom-[-12vh] left-[22vw] h-[44vw] max-h-[540px] w-[44vw] max-w-[540px] rounded-full blur-3xl opacity-75"
      />
    </div>
  );
};

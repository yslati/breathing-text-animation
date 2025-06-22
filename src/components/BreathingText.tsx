export const BreathingText = ({ text }: { text: string }) => {
  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: 'TheFont';
          src: url("https://garet.typeforward.com/assets/fonts/shared/TFMixVF.woff2") format('woff2');
        }

        .breathe-logo {
          font-family: 'TheFont', sans-serif;
          animation: letter-breathe 3s ease-in-out infinite;
        }

        @keyframes letter-breathe {
          from,
          to {
            font-variation-settings: 'wght' 100;
          }
          50% {
            font-variation-settings: 'wght' 900;
          }
        }
      `}</style>
      
      <div className="flex-shrink-0">
        <h1 className="breathe-logo text-xl lg:text-4xl font-bold text-white cursor-pointer select-none">
          {text}
        </h1>
      </div>
    </>
  );
};
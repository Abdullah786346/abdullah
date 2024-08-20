type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: 'blue';
    size?: 'sm' | 'md' | 'lg' | 'full';
    margin?: 'auto' | 'none';
  };
  
  const Button = ({ margin, variant, size, children, ...rest }: ButtonProps) => {
    const buttonStyles = {
      variants: {
        blue: 'relative bg-customBlue text-white hover:bg-customBlue/80',
      },
      sizes: {
        sm: 'px-6 py-2 text-sm min-w-28',
        md: 'px-8 py-2 min-w-32',
        lg: 'px-10 py-2 text-md min-w-32',
        full: 'p-2 w-full',
      },
      margins: {
        auto: 'mx-auto',
        none: 'm-0',
      },
    };
  
    const buttonVariant = variant || 'blue';
    const buttonSize = size || 'md';
    const buttonMargin = margin || 'none';
  
    return (
      <button
        className={`relative rounded-3xl flex font-medium items-center justify-center gap-2 w-fit ${buttonStyles.sizes[buttonSize]} ${buttonStyles.variants[buttonVariant]} ${buttonStyles.margins[buttonMargin]}`}
        {...rest}
      >
        {variant === 'blue' && (
          <span
            className="absolute inset-0 bg-cover bg-bottom opacity-[0.3] rounded-3xl opacity-30"
            style={{
              backgroundImage: 'url("/assets/button-bg.png")',
              backgroundSize: '250%', 
            }}
          ></span>
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  };
  
  export default Button;
  
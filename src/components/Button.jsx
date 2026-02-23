export const Button = ({ className="", size="default", children, ...prop }) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/80 showdow-primary/25";

  const sizeClasses = {

    sm: "px-4 py-2 text text-sm text-white",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes}{...prop}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
